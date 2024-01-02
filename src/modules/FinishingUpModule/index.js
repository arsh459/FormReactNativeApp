import { CommonActions, useNavigation } from "@react-navigation/native"
import { View, Alert } from "react-native"
import { useDispatch } from "react-redux"
import BackgroundView from "../../components/Background/BackgroundView"
import ScreenFooter from "../../components/Footer/ScreenFooter"
import ScreenHeader from "../../components/Header/ScreenHeader"
import FinishingUpContent from "./components"
const FinishingUpModule = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const showAlert = () => {
    Alert.alert(
      "Plan Selected",
      "You have a plan now.",
      [
        {
          text: "Reset",
          onPress: () => {
            dispatch({ type: "common/resetSelection", payload: {} })
            navigation.dispatch((state) => {
              const routes = state.routes.filter(
                (r) =>
                  r.name !== "SelectYourPlanScreen" &&
                  r.name !== "PickAddOnsScreen" &&
                  r.name !== "FinishingUpScreen"
              )

              return CommonActions.reset({
                ...state,
                routes,
                index: routes.length - 1,
              })
            })
          },
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: true }
    )
  }
  return (
    <View className="flex-1 bg-transparent">
      <BackgroundView />
      <ScreenHeader screenName="FinishingUpScreen" />
      <FinishingUpContent />
      <ScreenFooter title="Confirm" onPress={showAlert} isGoBack={true} />
    </View>
  )
}

export default FinishingUpModule
