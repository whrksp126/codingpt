import React, { createContext, useContext, useMemo, useState } from 'react';
import { View } from 'react-native';
import FullSheet from '../components/FullSheet';

/**
 * 스택에 "컴포넌트 엘리먼트"를 그대로 쌓아 올리는 풀시트 내비게이션
 * - pushFullSheet(<Component ...props />)
 * - popFullSheet()
 * - resetFullSheet()
 *
 * 특징
 * - RN 전용: Reanimated 슬라이드 인/아웃
 * - 최상단만 닫기 애니메이션 → 종료 후 스택에서 제거
 */

type StackItem = {
  key: string;
  element: React.ReactElement;
};

type FullSheetContextType = {
  pushFullSheet: (element: React.ReactElement, key?: string) => void;
  popFullSheet: () => void;
  resetFullSheet: () => void;
  stackSize: number;
};

const FullSheetContext = createContext<FullSheetContextType | null>(null);

export const FullSheetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stack, setStack] = useState<StackItem[]>([]);
  // 닫힘 애니메이션 중인 인덱스(최상단만 허용)
  const [closingIndex, setClosingIndex] = useState<number | null>(null);

  const pushFullSheet = (element: React.ReactElement, key?: string) => {
    setStack((prev) => [
      ...prev,
      { key: key ?? `${Date.now()}_${prev.length}`, element },
    ]);
  };

  const popFullSheet = () => {
    if (stack.length === 0) return;
    setClosingIndex(stack.length - 1); // 최상단 시트 닫기 시작
  };

  const resetFullSheet = () => {
    setClosingIndex(stack.length - 1); // 맨 위부터 차례로 닫히게 1개부터 시작
    // 간단히 전부 제거하고 싶다면 애니메이션 없이 setStack([])로 바꿀 수 있음
    setStack([]); // ※ 전부 즉시 제거를 원하면 이 줄만 남기고 closing 로직 제거
  };

  const ctxValue = useMemo<FullSheetContextType>(
    () => ({
      pushFullSheet,
      popFullSheet,
      resetFullSheet,
      stackSize: stack.length,
    }),
    [stack.length]
  );

  return (
    <FullSheetContext.Provider value={ctxValue}>
      {/* 앱 전체 컨텐츠 */}
      <View className="flex-1">{children}</View>

      {/* 풀시트 스택을 오버레이로 렌더링 (뒤에서 앞으로) */}
      {stack.map((item, index) => {
        const isTop = index === stack.length - 1;
        const isClosing = closingIndex === index;

        return (
          <FullSheet
            key={item.key}
            // 최상단이면서 닫는 중이면 isOpen=false → 닫힘 애니메이션
            isOpen={!(isTop && isClosing)}
            onCloseComplete={() => {
              // 닫힘 완료 후 스택에서 제거
              setStack((prev) => prev.filter((_, i) => i !== index));
              setClosingIndex(null);
            }}
          >
            {item.element}
          </FullSheet>
        );
      })}
    </FullSheetContext.Provider>
  );
};

export const useFullSheet = () => {
  const ctx = useContext(FullSheetContext);
  if (!ctx) throw new Error('useFullSheet must be used within a FullSheetProvider');
  return ctx;
};

export default FullSheetProvider;