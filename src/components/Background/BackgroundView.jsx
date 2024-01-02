import { View } from "react-native"
const BackgroundView = () => {
  return (
    <>
      <View className="absolute top-0 bottom-0 right-0 left-0 bg-[#EBF4FC] z-0"></View>
      <View className="absolute top-0 left-0 right-0 h-[30%] bg-blue-500 z-0"></View>
    </>
  )
}

export default BackgroundView
