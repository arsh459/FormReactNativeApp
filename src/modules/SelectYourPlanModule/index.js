import { View, Text, TouchableOpacity, Button } from "react-native"
import * as React from "react"

import { Switch } from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import BackgroundView from "../../components/Background/BackgroundView"
import ScreenHeader from "../../components/Header/ScreenHeader"
import ScreenFooter from "../../components/Footer/ScreenFooter"
import SelectYourPlanContent from "./components"
import { useDispatch, useSelector } from "react-redux"

export const PlanData = [
  {
    title: "Arcade",
    money: 9,
  },
  { title: "Advanced", money: 12 },
  { title: "Pro", money: 15 },
]

const SelectYourPlanModule = () => {
  const navigation = useNavigation()
  const yearlyPlan = useSelector((state) => {
    return state.common.yearlyPlan
  })
  const planData = useSelector((state) => {
    return state.common.planData
  })
  const [isSwitchOn, setIsSwitchOn] = React.useState(yearlyPlan || false)
  const dispatch = useDispatch()
  const [isSelected, setIsSelected] = React.useState({
    planName: planData.planName || "",
    planCost: planData.planCost || "",
  })
  const [error, setError] = React.useState()

  const handlePress = () => {
    if (isSelected.planName.length < 1) {
      setError("Please select a plan")
    } else {
      dispatch({ type: "common/updatePlanData", payload: isSelected })
      dispatch({ type: "common/updateYearlyPlan", payload: isSwitchOn })
      navigation.navigate("PickAddOnsScreen", {})
    }
  }
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)
  return (
    <View className="flex-1 bg-transparent">
      <BackgroundView />
      <ScreenHeader screenName="SelectYourPlanScreen" />
      <SelectYourPlanContent
        error={error}
        setIsSelected={setIsSelected}
        isSelected={isSelected}
        onToggleSwitch={onToggleSwitch}
        isSwitchOn={isSwitchOn}
      />
      <ScreenFooter title="Next Step" onPress={handlePress} isGoBack={true} />
    </View>
  )
}

export default SelectYourPlanModule
