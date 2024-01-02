import { View, ImageBackground, Text } from "react-native"
const BackgroundView = () => {
  return (
    <>
      <View className="absolute top-0 bottom-0 right-0 left-0 bg-[#EBF4FC] z-0"></View>
      <View className="absolute top-0 left-0 right-0 h-[30%] z-0">
        <View className="w-full h-full">
          <ImageBackground
            source={{
              uri: "https://images.pexels.com/photos/749564/pexels-photo-749564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={{
              flex: 1,
              resizeMode: "cover",
            }}
          />
        </View>
      </View>
    </>
  )
}

export default BackgroundView
