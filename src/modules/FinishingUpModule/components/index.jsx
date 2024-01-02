import ScreenContentWrapper from "../../../components/ContentWrapper/ScreenContentWrapper"
import { View, Text, TouchableOpacity } from "react-native"
import { useSelector } from "react-redux"
import { CommonActions, useNavigation } from "@react-navigation/native"

export const PlanAddOnsObject = {
  onlineService: "Online Service",
  largerStorage: "Larger Storage",
  customizableProfile: "Customizable Profile",
}

const FinishingUpContent = () => {
  const navigation = useNavigation()

  // Redux
  const planAddOns = useSelector((state) => {
    return state.common.planAddOns
  })
  const yearlyPlan = useSelector((state) => {
    return state.common.yearlyPlan
  })
  const planData = useSelector((state) => {
    return state.common.planData
  })

  // Finding the total Price
  let total = planData.planCost
  Object.keys(planAddOns).forEach((item) => {
    total += planAddOns[item]
  })

  return (
    <ScreenContentWrapper
      title={"Finishing Up"}
      subTitle={"Double-Check everything looks OK before confirming"}
    >
      <View className="mt-4 p-4 rounded-xl bg-[#F8F9FE]">
        <View className="flex flex-row justify-between items-center pb-2 border-b border-b-black/10">
          <View>
            <Text className="text-black font-semibold">
              {planData.planName} ({yearlyPlan ? "Yearly" : "Monthly"})
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.dispatch((state) => {
                  const routes = state.routes.filter(
                    (r) =>
                      r.name !== "PickAddOnsScreen" &&
                      r.name !== "FinishingUpScreen"
                  )

                  return CommonActions.reset({
                    ...state,
                    routes,
                    index: routes.length - 1,
                  })
                })
              }}
            >
              <Text className="underline text-black/50">Change</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className={"text-black font-semibold"}>
              ${yearlyPlan ? planData.planCost * 10 : planData.planCost}/
              {yearlyPlan ? "yr" : "mo"}
            </Text>
          </View>
        </View>

        {Object.keys(planAddOns).map((item) => {
          return (
            <View
              className="flex flex-row justify-between items-center pt-3"
              key={item}
            >
              <View>
                <Text className="text-black/50">{PlanAddOnsObject[item]}</Text>
              </View>
              <View>
                <Text className="text-black">
                  +${yearlyPlan ? planAddOns[item] * 10 : planAddOns[item]}/mo
                </Text>
              </View>
            </View>
          )
        })}
      </View>
      <View className=" p-4 rounded-xl">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text className="text-black/50">
              Total (per {yearlyPlan ? "year" : "month"})
            </Text>
          </View>
          <View>
            <Text className="text-[#443CFF] text-lg font-bold">
              +${yearlyPlan ? total * 10 : total}/{yearlyPlan ? "yr" : "mo"}
            </Text>
          </View>
        </View>
      </View>
    </ScreenContentWrapper>
  )
}
export default FinishingUpContent
