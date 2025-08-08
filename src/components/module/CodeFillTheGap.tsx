import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image, useWindowDimensions, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { FRONTEND_URL } from '../../utils/service';
import { ActivityIndicator } from 'react-native';

interface CodeFillTheGapProps {
  module: any;
  onLoadComplete?: () => void;
}

const langLogoMap: Record<string, any> = {
  'html': require('../../assets/icons/html-5-icon.png'),
  'css': require('../../assets/icons/css-3-icon.png'),
  // 필요한 언어 아이콘 추가
};


export const CodeFillTheGapComponent: React.FC<CodeFillTheGapProps> = ({ module, onLoadComplete }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFile, setActiveFile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setActiveFile(module.files[activeTab]);
  }, [activeTab]);

  if(!activeFile) return null;

  return (
    <>
    
    <View className="border border-[#5e5e5e] rounded-[10px] overflow-hidden">
      {/* 탭 */}
      <View className="flex-row items-end gap-[10px] h-[26px] px-[10px] bg-[#3c3c3c]">
        <View className="flex-row items-center justify-center gap-[5px] h-full">
          {[...Array(3)].map((_, i) => (
            <View key={i} className="w-[10px] h-[10px] rounded-[10px] bg-[#545454]" />
          ))}
        </View>
        <View className="flex-row gap-[5px] flex-1">
          {module.files.map((file, fileIndex) => (
            <View key={`tab-${fileIndex}`} className="relative flex-row items-end flex-1 max-w-[125px] h-full overflow-visible">
              {activeTab === fileIndex && (
                <>
                  <View className="absolute bottom-0 right-[100%] z-[10] w-[5px] h-[5px] bg-[#272822]">
                    <View className="w-[5px] h-[5px] rounded-br-[5px] bg-[#3c3c3c]" />
                  </View>
                  <View className="absolute bottom-0 left-[100%] z-[10] w-[5px] h-[5px] bg-[#272822]">
                    <View className="w-[5px] h-[5px] rounded-bl-[5px] bg-[#3c3c3c]" />
                  </View>
                </>
              )}
              <Pressable
                onPress={() => setActiveTab(fileIndex)}
                className={`flex-row gap-[5px] flex-1 h-[20px] px-[3px] rounded-t-[5px] ${activeTab === fileIndex ? 'bg-[#272822]' : 'bg-[#3c3c3c]'}`}>
                <View className="flex-row gap-[5px] flex-1 items-center">
                  <Image source={langLogoMap[file.language]} className="w-[12px] h-[12px]" />
                  <Text className="flex-1 text-[#fff] text-[12px] font-[400]">{file.name || ''}</Text>
                </View>
              </Pressable>
            </View>
          ))}
        </View>
      </View>

      {/* 코드 미리보기 (WebView) - 모든 탭의 WebView를 미리 렌더링하고, activeTab만 보이게 */}
      <View style={{ height: 220 }} className="bg-[#272822]">
        {module.files.map((file, idx) => (
          <View
            key={`webview-${idx}`}
            style={{
              display: activeTab === idx ? 'flex' : 'none',
              flex: 1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <WebView
              originWhitelist={['*']}
              source={{ uri: `${FRONTEND_URL}${file.url}` }}
              style={{ flex: 1, backgroundColor: 'transparent' }}
              scrollEnabled={true}
              onLoadStart={() => setIsLoading(true)}
              onLoad={() => {
                setIsLoading(false);
                onLoadComplete?.();
              }}
            />
            {isLoading && activeTab === idx && (
              <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: '#27282299', zIndex: 10 }}>
                <ActivityIndicator size="large" color="#fff" />
                <Text style={{ color: '#fff', marginTop: 10 }}>로딩 중...</Text>
              </View>
            )}
          </View>
        ))}
      </View>

    </View>

    {/* 옵션 */}
    <View className="flex-row items-center justify-center gap-[16px] px-[10px] py-[8px] mt-[10px]">
      {activeFile.interactionOptions.map((option: any, index: number) => (
        <Pressable
        onPress={() => {  
          console.log("option", option);
        }}
        key={`interaction-option-${index}`} className={`
          flex-row items-center justify-center gap-[5px] 
          min-w-[30px]
          p-[10px] 
          border border-[#E5E5E5] rounded-[16px] 
          bg-[transparent] 
          `}>
          <Text className="text-[#4B4B4B] text-[17px] font-[500]">{option.value}</Text>
        </Pressable>
      ))}
    </View>
    </>
  );
};