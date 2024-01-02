import { View } from "react-native"
import { useSelector } from "react-redux"
import ScreenContentWrapper from "../../../components/ContentWrapper/ScreenContentWrapper"
import CustomCheckbox from "./CheckBox"
const PickAddOnsContent = ({ checkedState, setCheckedState }) => {
  const yearlyPlan = useSelector((state) => {
    return state.common.yearlyPlan
  })
  return (
    <ScreenContentWrapper
      title={"Pick add-ons"}
      subTitle={"Add ons help enhance your gaming experience"}
    >
      <View className="pt-5">
        <View className="">
          <CustomCheckbox
            label={"Online Service"}
            subLabel={"Access to multiplayer games"}
            cost={yearlyPlan ? "10" : "1"}
            costText={yearlyPlan ? "yr" : "mo"}
            checked={checkedState.onlineService}
            onPress={() => {
              setCheckedState((prev) => {
                if (!prev.onlineService) {
                  return {
                    ...prev,
                    onlineService: 1,
                  }
                } else {
                  let { onlineService, ...obj } = prev
                  return obj
                }
              })
            }}
          />
        </View>
        <View className="mt-5">
          <CustomCheckbox
            label={"Larger Storage"}
            subLabel={"Extra 1TB of cloud save"}
            cost={yearlyPlan ? "20" : "2"}
            costText={yearlyPlan ? "yr" : "mo"}
            checked={checkedState.largerStorage}
            onPress={() => {
              setCheckedState((prev) => {
                if (!prev.largerStorage) {
                  return {
                    ...prev,
                    largerStorage: 2,
                  }
                } else {
                  let { largerStorage, ...obj } = prev
                  return obj
                }
              })
            }}
          />
        </View>
        <View className="mt-5">
          <CustomCheckbox
            label={"Customizable Profile"}
            subLabel={"Custom theme on your profile"}
            cost={yearlyPlan ? "20" : "2"}
            costText={yearlyPlan ? "yr" : "mo"}
            checked={checkedState.customizableProfile}
            onPress={() => {
              setCheckedState((prev) => {
                if (!prev.customizableProfile) {
                  return {
                    ...prev,
                    customizableProfile: 2,
                  }
                } else {
                  let { customizableProfile, ...obj } = prev
                  return obj
                }
              })
            }}
          />
        </View>
      </View>
    </ScreenContentWrapper>
  )
}
export default PickAddOnsContent
