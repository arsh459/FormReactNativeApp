import { View, TouchableOpacity, Text } from "react-native"
import { Switch } from "react-native-paper"
import { PlanData } from ".."
import ScreenContentWrapper from "../../../components/ContentWrapper/ScreenContentWrapper"
import clsx from "clsx"
import CommonIcon from "../../../components/icons/CommonIcon"
const SelectYourPlanContent = ({
  isSelected,
  setIsSelected,
  isSwitchOn,
  onToggleSwitch,
  error,
}) => {
  return (
    <ScreenContentWrapper
      title={"Select your plan"}
      subTitle={"You have the option of monthly and yearly billing"}
    >
      <View className="">
        <View>
          {/* Plans Available */}
          {PlanData.map((item) => {
            return (
              <TouchableOpacity
                key={item.title}
                onPress={() => {
                  setIsSelected({ planCost: item.money, planName: item.title })
                }}
                className={clsx(
                  isSelected.planName === item.title
                    ? "bg-[#e1dbdb66] border border-[#443CFF]"
                    : "border border-gray-400",
                  " flex flex-row items-center p-3 rounded-xl mt-3"
                )}
              >
                <View className="p-3 bg-[#F7808C] rounded-full">
                  <View className="w-5 aspect-square ">
                    <CommonIcon color={"yellow"} />
                  </View>
                </View>
                <View className="flex-1 ml-4">
                  <Text className="text-[#092950] text-base font-semibold">
                    {item.title}
                  </Text>
                  <Text className="text-black/50 text-xs">
                    ${isSwitchOn ? item.money * 10 : item.money}/
                    {isSwitchOn ? "yr" : "mo"}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          })}

          {/* Select monthly/ Yearly */}
          <View className="flex flex-row items-center justify-center bg-[#F8F9FE] rounded-xl py-2 mt-3">
            <Text
              className={clsx(
                "mr-2",
                isSwitchOn ? "text-black/50 " : "font-bold"
              )}
            >
              Monthly
            </Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            <Text
              className={clsx(
                "ml-2",
                isSwitchOn ? "font-bold " : "text-black/50"
              )}
            >
              Yearly
            </Text>
          </View>

          {error && <Text className="pt-4 text-xs text-red-400">{error}</Text>}
        </View>
      </View>
    </ScreenContentWrapper>
  )
}

export default SelectYourPlanContent
