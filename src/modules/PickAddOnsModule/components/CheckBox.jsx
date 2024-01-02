import { TouchableOpacity, Text, View } from "react-native"
import clsx from "clsx"
const CustomCheckbox = ({
  label,
  checked,
  onPress,
  subLabel,
  cost,
  costText,
}) => {
  return (
    <TouchableOpacity
      className={clsx(
        "flex-row items-center justify-between border  px-3 py-3 rounded-xl",
        checked ? "border-[#443CFF] bg-[#e1dbdb66]" : "border-black/40"
      )}
      onPress={onPress}
    >
      <View
        className={`w-6 h-6 rounded-lg flex items-center justify-center ${
          checked ? "bg-[#443CFF] " : "bg-white border border-[#aaa]"
        }`}
      >
        {checked ? <Text className="text-white text-sm">✓</Text> : null}
      </View>
      <View className="flex-1 flex-row pl-4 items-center justify-between">
        <View>
          <Text className="text-base iphoneX:text-lg text-black font-semibold ">
            {label}
          </Text>
          <Text className="text-xs  text-black/50 capitalize">{subLabel}</Text>
        </View>
        <View>
          <Text className="text-[#443CFF]">
            +${cost}/{costText}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default CustomCheckbox
