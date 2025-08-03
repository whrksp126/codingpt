import { View, Pressable, Text } from 'react-native';
import { ArrowLeft, ArrowRight, ArrowClockwise, MagnifyingGlass, BracketsAngle, Plus, GlobeHemisphereEast, X } from '../assets/SvgIcon';
import { WebView } from 'react-native-webview';

export const WebViewComponent = ({ module }: { module: any }) => {

  return (
    <View
      className="border border-[#E5E5E5] rounded-[10px] overflow-hidden">
      {/* 상단 바 */}
      <View className="flex-row items-end gap-[10px] h-[26px] px-[10px] bg-[#E5E5E5]">
        <View className="flex-row gap-[5px] items-center h-full">
          <View className="w-[10px] h-[10px] rounded-[10px] bg-[#ccc]"></View>
          <View className="w-[10px] h-[10px] rounded-[10px] bg-[#ccc]"></View>
          <View className="w-[10px] h-[10px] rounded-[10px] bg-[#ccc]"></View>
        </View>
        <View className="flex-row gap-[5px] flex-1">

          <View className="flex-row gap-[5px] flex-1">
            {/* 액티브 탭 */}
            <View className="relative flex-row items-end flex-1 max-w-[125px] h-full overflow-visible">
              {/* 우측 하단 라운드 */}
              <View className="absolute bottom-0 right-[100%] z-[10] w-[5px] h-[5px] bg-[#fff]">
                <View className="w-[5px] h-[5px] rounded-br-[5px] bg-[#E5E5E5]" />
              </View>

              {/* 좌측 하단 라운드 */}
              <View className="absolute bottom-0 left-[100%] z-[10] w-[5px] h-[5px] bg-[#fff]">
                <View className="w-[5px] h-[5px] rounded-bl-[5px] bg-[#E5E5E5]" />
              </View>

              {/* 탭 본체 */}
              <View className="flex-row gap-[5px] flex-1 h-[20px] px-[3px] rounded-t-[5px] bg-[#fff]">
                <View className="flex-row gap-[5px] flex-1 items-center">
                  <GlobeHemisphereEast width={12} height={12} fill="#000000" />
                  <Text className="flex-1 text-[#000000] text-[12px] font-[400]" >index.html</Text>
                </View>
              </View>

              {/* 탭 닫기 버튼 */}
              <View className="absolute top-0 right-0 h-[20px] p-[5px] rounded-[5px] bg-[#fff]">
                <X width={12} height={12} fill="#00000080" />
              </View>
            </View>

            {/* 탭 */}
            <View className="relative flex-row items-end flex-1 max-w-[125px] h-full overflow-visible">
              {/* 탭 본체 */}
              <View className="flex-row gap-[5px] flex-1 h-[20px] px-[3px] rounded-t-[5px] bg-[#E5E5E5]">
                <View className="flex-row gap-[5px] flex-1 items-center">
                  <GlobeHemisphereEast width={12} height={12} fill="#000000" />
                  <Text className="flex-1 text-[#000000] text-[12px] font-[400]">index.html</Text>
                </View>
              </View>

              {/* 탭 닫기 버튼 */}
              <View className="absolute top-0 right-0 h-[20px] p-[5px] rounded-[5px] bg-[#E5E5E5]">
                <X width={12} height={12} fill="#00000080" />
              </View>
            </View>
            
          </View>


          {/* 탭추가 */}
          <View className="flex-row items-end h-full">
            <View className="flex-row items-center justify-center h-[20px] px-[3px]">
              <Plus width={10} height={10} fill="#00000080" />
            </View>
          </View>
        </View>
      </View>

      {/* 주소 표시줄 */}
      <View className="flex-row gap-[10px] px-[10px] py-[4px] border-b border-[#E5E5E5]">
        <Pressable className="flex-row items-center gap-[10px]">
          <ArrowLeft width={17} height={17} fill="#00000080" />
        </Pressable>
        <Pressable className="flex-row items-center gap-[10px]">
          <ArrowRight width={17} height={17} fill="#00000080" />
        </Pressable>
        <Pressable className="flex-row items-center gap-[10px]">
          <ArrowClockwise width={17} height={17} fill="#000000" />
        </Pressable>
        <Pressable className="flex-row items-center gap-[10px]">
          <MagnifyingGlass width={17} height={17} fill="#000000" />
        </Pressable>
        <Pressable className="flex-row items-center gap-[10px]">
          <BracketsAngle width={17} height={17} fill="#000000" />
        </Pressable>

      </View>

      {/* WebView */}
      <View className="h-[300px]">
        <WebView
          source={{ html: module.content }}
          style={{ flex: 1 }}
          originWhitelist={['*']}
          javaScriptEnabled
          domStorageEnabled
        />
      </View>
    </View>
  )
}
