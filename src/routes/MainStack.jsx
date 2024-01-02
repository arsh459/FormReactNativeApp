import { createStackNavigator } from "@react-navigation/stack"
import FinishingUpScreen from "../screens/FinishingUpScreen"
import PersonalInfoScreen from "../screens/PersonalInfoScreen"
import PickAddOnsScreen from "../screens/PickAddOnsScreen"
import SelectYourPlanScreen from "../screens/SelectYourPlanScreen"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { SafeAreaView, Platform, StatusBar } from "react-native"

const Stack = createStackNavigator()
const MainStack = () => {
  const { top, bottom } = useSafeAreaInsets()
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingBottom: bottom,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : top,
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="PersonalInfoScreen"
          component={PersonalInfoScreen}
        />
        <Stack.Screen
          name="SelectYourPlanScreen"
          component={SelectYourPlanScreen}
        />
        <Stack.Screen name="PickAddOnsScreen" component={PickAddOnsScreen} />
        <Stack.Screen name="FinishingUpScreen" component={FinishingUpScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  )
}

export default MainStack
