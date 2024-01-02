import { KeyboardAvoidingView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react/cjs/react.development"
import { useDispatch, useSelector } from "react-redux"
import { validateState } from "./utils/validate"
import ScreenHeader from "../../components/Header/ScreenHeader"
import ScreenFooter from "../../components/Footer/ScreenFooter"
import PersonalInfoContent from "./components"
import BackgroundView from "../../components/Background/BackgroundView"
import { useEffect } from "react"
const PersonalInfoModule = () => {
  const navigation = useNavigation()
  const personalInfo = useSelector((state) => {
    return state.common.personalInfo
  })
  const dispatch = useDispatch()
  const [state, setState] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
  })
  const [errors, setError] = useState({})

  useEffect(() => {
    setState(personalInfo)
  }, [personalInfo])

  const handleSubmit = () => {
    const errors = validateState(state)
    if (errors) {
      setError(errors)
    } else {
      dispatch({ type: "common/updatePersonalInfo", payload: state })
      navigation.navigate("SelectYourPlanScreen", {})
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      contentContainerStyle={{ flex: 1 }}
      className="flex-1"
    >
      <BackgroundView />
      <ScreenHeader screenName="PersonalInfoScreen" />
      <PersonalInfoContent
        state={state}
        errors={errors}
        setState={setState}
        setError={setError}
      />
      <ScreenFooter title="Next Step" onPress={handleSubmit} isGoBack={false} />
    </KeyboardAvoidingView>
  )
}

export default PersonalInfoModule
