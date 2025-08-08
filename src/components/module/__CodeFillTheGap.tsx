import React, { useState } from 'react';
import { View, Text, Pressable, Image, useWindowDimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { X, Plus } from '../../assets/SvgIcon';

interface CodeFillTheGapProps {
  module: any;
  onLoadComplete?: () => void;
}

const langLogoMap: Record<string, any> = {
  'html': require('../../assets/icons/html-5-icon.png'),
  'css': require('../../assets/icons/css-3-icon.png'),
  // 필요한 언어 아이콘 추가
};

// [[[blank id="city" init="5" state="filled" value="서울 특별시"]]]  

export const CodeFillTheGapComponent: React.FC<CodeFillTheGapProps> = ({ module, onLoadComplete }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isReadMode, setIsReadMode] = useState(true);
  const { width } = useWindowDimensions();

  const renderHTML = (language: string, content: string) => {
    const lang = language || 'markup'; // fallback

    // Prism 하이라이트를 WebView에서 실행하므로, 여기서 직접 하이라이트 적용
    // 1. 코드 escape
    const escapedContent = content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // 2. Prism 하이라이트 후 '환영합니다' 감싸기 (WebView 내에서 실행)
    // => WebView에서 Prism.highlightAll() 실행 후, '환영합니다'를 감싸는 스크립트 추가

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="https://cdn.jsdelivr.net/npm/prismjs/themes/prism-okaidia.css" rel="stylesheet" />
          <script src="https://cdn.jsdelivr.net/npm/prismjs/prism.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/prismjs/components/prism-${lang}.min.js"></script>
          <style>
          body {
            margin: 0;
            padding: 0;
            background: #272822;
            font-size: 14px;
          }
          pre, code {
            font-size: 14px;
            line-height: 1.4;
            padding: 0px;
            margin: 0;
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
          .highlight-red {
            background: #e53935;
            color: #fff;
            border-radius: 4px;
            padding: 0 4px;
          }
          </style>
        </head>
        <body>
          <pre><code class="language-${lang}">${escapedContent}</code></pre>
          <script>
            Prism.highlightAll();
            // 하이라이트 후 '환영합니다' 감싸기
            setTimeout(function() {
              var code = document.querySelector('code');
              if (code) {
                code.innerHTML = code.innerHTML.replace(/환영합니다/g, '<span class="highlight-red">환영합니다</span>');
              }
            }, 10);
          </script>
        </body>
      </html>
    `;
  };

  const activeFile = module.files[activeTab];

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
              {!isReadMode && (
                <View className={`absolute top-0 right-0 h-[20px] p-[5px] rounded-[5px] ${activeTab === fileIndex ? 'bg-[#fff]' : 'bg-[#3c3c3c]'}`}>
                  <X width={12} height={12} fill="#00000080" />
                </View>
              )}
            </View>
          ))}
        </View>
        {!isReadMode && (
          <View className="flex-row items-end h-full">
            <View className="flex-row items-center justify-center h-[20px] px-[3px]">
              <Plus width={10} height={10} fill="#00000080" />
            </View>
          </View>
        )}
      </View>

      {/* 코드 미리보기 (WebView) */}
      <View style={{ height: 220 }} className="bg-[#272822]">
        <WebView
          originWhitelist={['*']}
          source={{ html: renderHTML(activeFile.language, activeFile.content) }}
          style={{ flex: 1, backgroundColor: 'transparent' }}
          scrollEnabled={true}
          onLoad={() => {
            // WebView 로드 완료 시 콜백 호출
            setTimeout(() => {
              onLoadComplete?.();
            }, 200);
          }}
        />
      </View>

    </View>
    <View className="flex-row items-center justify-center gap-[16px] px-[10px] py-[8px] mt-[10px]">
      {activeFile.interactionOptions.map((option: any, index: number) => (
        <View key={`interaction-option-${index}`} className={`
          flex-row items-center justify-center gap-[5px] 
          min-w-[30px]
          p-[10px] 
          border border-[#E5E5E5] rounded-[16px] 
          bg-[transparent] 
          `}>
          <Text className="text-[#4B4B4B] text-[17px] font-[500]">{option.value}</Text>
        </View>
      ))}
    </View>
    </>
  );
};