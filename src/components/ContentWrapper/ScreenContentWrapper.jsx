import { View, Text } from "react-native"
const ScreenContentWrapper = ({ children, title, subTitle }) => {
  return (
    <View className="flex-1 pt-14 px-5">
      <View className=" p-6 py-8 bg-white rounded-xl">
        <View className="">
          <Text className="text-2xl font-semibold">{title}</Text>
        </View>
        <View className="pt-2">
          <Text className="text-base text-black/50">{subTitle}</Text>
        </View>
        {children}
      </View>
    </View>
  )
}

export default ScreenContentWrapper
