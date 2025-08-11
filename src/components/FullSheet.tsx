import React, { useEffect } from 'react';
import { Dimensions, BackHandler } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

/**
 * 풀시트: 화면 오른쪽에서 슬라이드 인/아웃되는 전체화면 시트
 * - isOpen=true  : 0px 위치(보임)
 * - isOpen=false : 화면 너비만큼 우측으로 이동(닫힘)
 * - onCloseComplete() : 닫힘 애니메이션 종료 후 호출
 * - 스와이프(우측) 제스처로도 닫기 가능
 */
type FullSheetProps = {
  isOpen: boolean;
  onCloseComplete: () => void;
  children: React.ReactNode;
  enableSwipeToClose?: boolean;
  testID?: string;
};

const SCREEN_WIDTH = Dimensions.get('window').width;

const SPRING_CONFIG = { damping: 25, stiffness: 200, mass: 0.8 };

const FullSheet: React.FC<FullSheetProps> = ({
  isOpen,
  onCloseComplete,
  children,
  enableSwipeToClose = true,
  testID,
}) => {
  // x 위치(우측에서 진입)
  const translateX = useSharedValue(SCREEN_WIDTH);

  // isOpen 변경 시 애니메이션 트리거
  useEffect(() => {
    if (isOpen) {
      translateX.value = withSpring(0, SPRING_CONFIG);
    } else {
      translateX.value = withTiming(SCREEN_WIDTH, { duration: 220 }, (finished) => {
        if (finished) runOnJS(onCloseComplete)();
      });
    }
  }, [isOpen]);

  // 안드로이드 하드웨어 백버튼 → 닫기
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (isOpen) {
        // 닫히는 쪽으로 전환만 하고, 실제 pop은 Context에서 처리됨
        translateX.value = withTiming(SCREEN_WIDTH, { duration: 220 }, (finished) => {
          if (finished) runOnJS(onCloseComplete)();
        });
        return true; // 기본 동작 막기
      }
      return false;
    });
    return () => sub.remove();
  }, [isOpen]);

  // 스와이프 제스처
  const pan = Gesture.Pan()
    .onUpdate((e) => {
      // 우측(+) 이동만 허용
      if (!enableSwipeToClose) return;
      const next = Math.max(0, e.translationX);
      translateX.value = next;
    })
    .onEnd((e) => {
      if (!enableSwipeToClose) return;
      const shouldClose = e.translationX > SCREEN_WIDTH * 0.3 || e.velocityX > 900;
      if (shouldClose) {
        translateX.value = withTiming(SCREEN_WIDTH, { duration: 200 }, (finished) => {
          if (finished) runOnJS(onCloseComplete)();
        });
      } else {
        translateX.value = withSpring(0, SPRING_CONFIG);
      }
    });

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        testID={testID}
        // NativeWind 사용
        className="
          absolute top-0 right-0
          w-full h-full
          bg-white dark:bg-[#111]
        "
        style={[
          rStyle,
          {
            // zIndex는 부모에서 제어 (스택 순서대로)
            elevation: 20, // 안드로이드 그림자 보정
          },
        ]}
      >
        {/* 실제 컨텐츠 래퍼 */}
        <Animated.View className="flex-1">
          {children}
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

export default FullSheet;
