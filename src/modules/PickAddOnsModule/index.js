import { View } from "react-native"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import BackgroundView from "../../components/Background/BackgroundView"
import ScreenHeader from "../../components/Header/ScreenHeader"
import ScreenFooter from "../../components/Footer/ScreenFooter"
import PickAddOnsContent from "./components"
import { useDispatch, useSelector } from "react-redux"

const PickAddOnsModule = () => {
  const navigation = useNavigation()

  //Redux
  const planAddOns = useSelector((state) => {
    return state.common.planAddOns
  })

  // local State
  const [checkedState, setCheckedState] = useState(planAddOns || {})

  const dispatch = useDispatch()
  return (
    <>
      <View className="flex-1 bg-transparent">
        <BackgroundView />
        <ScreenHeader screenName="PickAddOnsScreen" />
        <PickAddOnsContent
          setCheckedState={setCheckedState}
          checkedState={checkedState}
        />
        <ScreenFooter
          title="Next Step"
          onPress={() => {
            dispatch({ type: "common/updatePlanAddOns", payload: checkedState })
            navigation.navigate("FinishingUpScreen", {})
          }}
          isGoBack={true}
        />
      </View>
    </>
  )
}

export default PickAddOnsModule
