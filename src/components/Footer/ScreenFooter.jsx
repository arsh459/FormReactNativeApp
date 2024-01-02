import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity } from "react-native"
const ScreenFooter = ({ title, onPress, isGoBack }) => {
  const navigation = useNavigation()
  return (
    <View className="flex flex-row justify-between items-center bg-white py-3 px-5">
      <TouchableOpacity
        className=""
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack()
          }
        }}
        disabled={!isGoBack}
      >
        {isGoBack ? <Text className="text-black/50">Go Back</Text> : <></>}
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-[#03295A] rounded-lg font-bold"
        onPress={onPress}
      >
        <Text className="px-5 py-3 text-white">{title}</Text>
      </TouchableOpacity>
    </View>
  )
}
export default ScreenFooter
