import React, { useEffect, useState } from 'react';
import { View, Pressable, Text, TextInput, Image, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import {
  ArrowLeft,
  ArrowRight,
  ArrowClockwise,
  MagnifyingGlass,
  BracketsAngle,
  Plus,
  GlobeHemisphereEast,
  X
} from '../../assets/SvgIcon';

// 타입 정의
type TabType = 'html' | 'url';

interface TabData {
  type: TabType;
  content: string;
  title?: string;
  favicon?: string | null;
  url?: string | null;
}

interface WebViewComponentProps {
  module: any;
  onLoadComplete?: () => void;
}

// 메타데이터 파싱 함수
const fetchMetaData = async (tabs: TabData[]): Promise<TabData[]> => {
  const newTabList = await Promise.all(
    tabs.map(async (tab) => {
      if (tab.type === 'html') {
        const match = tab.content.match(/<title>(.*?)<\/title>/);
        return {
          ...tab,
          title: match?.[1] || 'Untitled',
          favicon: null,
          url: 'http://localhost:3000'
        };
      }

      if (tab.type === 'url') {
        const result = await getTitleAndFavicon(tab.content);
        return {
          ...tab,
          title: result?.title || tab.content,
          favicon: result?.favicon || null,
          url: tab.content
        };
      }

      return tab;
    })
  );

  return newTabList;
};

const getTitleAndFavicon = async (url: string): Promise<{ title: string; favicon: string } | null> => {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    const faviconMatch = html.match(
      /<link[^>]*rel=["']?(icon|shortcut icon)["']?[^>]*href=["']([^"']+)["']/i
    );

    const title = titleMatch?.[1] || '';
    let favicon = '';

    if (faviconMatch?.[2]) {
      favicon = faviconMatch[2].startsWith('http')
        ? faviconMatch[2]
        : new URL(faviconMatch[2], url).href;
    } else {
      favicon = new URL('/favicon.ico', url).href;
    }

    return { title, favicon };
  } catch (err) {
    console.warn('Meta fetch error:', err);
    return null;
  }
};

// 컴포넌트 본문
export const WebViewComponent: React.FC<WebViewComponentProps> = ({ module, onLoadComplete }) => {
  const [tabList, setTabList] = useState<TabData[]>([]);
  const [tabStacks, setTabStacks] = useState<string[][]>([]);
  const [tabIndexes, setTabIndexes] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isReadMode, setIsReadMode] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    fetchMetaData(module.tabs).then((data) => {
      setTabList(data);
      setTabStacks(data.map((tab) => [tab.url || '']));
      setTabIndexes(data.map(() => 0));
    });
  }, [module]);

  const currentUrl = tabStacks[activeTab]?.[tabIndexes[activeTab]];

  const onPressBack = () => {
    if (tabIndexes[activeTab] > 0) {
      const newIndexes = [...tabIndexes];
      newIndexes[activeTab] -= 1;
      setTabIndexes(newIndexes);
    }
  };

  const onPressForward = () => {
    if (tabIndexes[activeTab] < tabStacks[activeTab].length - 1) {
      const newIndexes = [...tabIndexes];
      newIndexes[activeTab] += 1;
      setTabIndexes(newIndexes);
    }
  };

  const onPressRefresh = () => {
    setTabIndexes([...tabIndexes]);
  };

  const onPressDeveloperMode = () => {
    console.log('개발자 모드');
  };

  if (!tabList.length || !tabStacks[activeTab]) return null;

  return (
    <View className="border border-[#E5E5E5] rounded-[10px] overflow-hidden">

      {/* 탭 영역 */}
      <View className="flex-row items-end gap-[10px] h-[26px] px-[10px] bg-[#E5E5E5]">
        <View className="flex-row items-center justify-center gap-[5px] h-full">
          <View className="w-[10px] h-[10px] rounded-[10px] bg-[#ccc]"></View>
          <View className="w-[10px] h-[10px] rounded-[10px] bg-[#ccc]"></View>
          <View className="w-[10px] h-[10px] rounded-[10px] bg-[#ccc]"></View>
        </View>
        <View className="flex-row gap-[5px] flex-1">
          {tabList.map((tab, tabIndex) => (
            <View key={`tab-${tabIndex}`} className="relative flex-row items-end flex-1 max-w-[125px] h-full overflow-visible">
              {activeTab === tabIndex && (
                <>
                  <View className="absolute bottom-0 right-[100%] z-[10] w-[5px] h-[5px] bg-[#fff]">
                    <View className="w-[5px] h-[5px] rounded-br-[5px] bg-[#E5E5E5]" />
                  </View>
                  <View className="absolute bottom-0 left-[100%] z-[10] w-[5px] h-[5px] bg-[#fff]">
                    <View className="w-[5px] h-[5px] rounded-bl-[5px] bg-[#E5E5E5]" />
                  </View>
                </>
              )}
              <Pressable onPress={() => setActiveTab(tabIndex)} className={`flex-row gap-[5px] flex-1 h-[20px] px-[3px] rounded-t-[5px] ${activeTab === tabIndex ? 'bg-[#fff]' : 'bg-[#E5E5E5]'}`}>
                <View className="flex-row gap-[5px] flex-1 items-start">
                  <View className="pt-[4px]">
                  {tab.favicon ? (
                    <Image source={{ uri: tab.favicon }} className="w-[12px] h-[12px]" />
                  ) : (
                    <GlobeHemisphereEast width={12} height={12} fill="#000000" />
                  )}
                  </View>
                  <Text className="flex-1 text-[#000000] text-[12px] font-[400]">{tab.title || ''}</Text>
                </View>
              </Pressable>
              {!isReadMode && (
                <View className={`absolute top-0 right-0 h-[20px] p-[5px] rounded-[5px] ${activeTab === tabIndex ? 'bg-[#fff]' : 'bg-[#E5E5E5]'}`}>
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

      {/* 상단 바 */}
      <View className="flex-row items-center gap-[10px] h-[30px] px-[10px] py-[4px] border-b border-[#E5E5E5]">
        <Pressable onPress={onPressBack}>
          <ArrowLeft width={17} height={17} fill={tabIndexes[activeTab] > 0 ? "#000000" : "#00000080"} />
        </Pressable>
        <Pressable onPress={onPressForward}>
          <ArrowRight width={17} height={17} fill={tabIndexes[activeTab] < tabStacks[activeTab].length - 1 ? "#000000" : "#00000080"} />
        </Pressable>
        <Pressable onPress={onPressRefresh}>
          <ArrowClockwise width={17} height={17} fill="#000000" />
        </Pressable>
        <View className="relative flex-1">
          <View className="absolute top-[4px] left-[4px] z-[10] w-[14px] h-[14px] bg-[#ccc] rounded-[10px] flex items-center justify-center">
            <MagnifyingGlass width={10} height={10} fill="#4B4B4B" />
          </View>
          <TextInput
            value={currentUrl}
            style={{
              color: '#4B4B4B',
              fontSize: 12,
              fontWeight: '400',
              paddingLeft: 23,
              height: '100%',
              flex: 1,
              padding: 4,
              borderRadius: 20,
              backgroundColor: '#F1F1F1',
            }}
          />
        </View>
        <Pressable onPress={onPressDeveloperMode}>
          <BracketsAngle width={17} height={17} fill="#000000" />
        </Pressable>
      </View>

      {/* 웹뷰 */}
      <View className="h-[200px]" style={{ position: 'relative' }}>
        {tabList.map((tab, idx) => (
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
              source={
                tab.type === 'html'
                  ? { html: tab.content }
                  : { uri: tabStacks[idx]?.[tabIndexes[idx]] }
              }
              originWhitelist={['*']}
              javaScriptEnabled
              domStorageEnabled
              style={{ flex: 1 }}
              onLoadStart={() => setIsLoading(true)}
              onLoad={() => {
                setIsLoading(false);
                if (activeTab === idx) {
                  onLoadComplete?.();
                }
              }}
              onNavigationStateChange={(navState) => {
                if (tab.type === 'url' && activeTab === idx) {
                  const newStacks = [...tabStacks];
                  const newIndexes = [...tabIndexes];
                  const stack = newStacks[idx].slice(0, newIndexes[idx] + 1);
                  if (stack[stack.length - 1] !== navState.url) {
                    stack.push(navState.url);
                    newStacks[idx] = stack;
                    newIndexes[idx] = stack.length - 1;
                    setTabStacks(newStacks);
                    setTabIndexes(newIndexes);
                  }
                }
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
  );
};