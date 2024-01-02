import "react-native-gesture-handler"
import { StatusBar } from "expo-status-bar"
import MainStack from "./src/routes/MainStack"
import { Provider } from "react-redux"
import { store } from "./src/store/store"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="auto" backgroundColor="transparent" />
          <Provider store={store}>
            <MainStack />
          </Provider>
        </GestureHandlerRootView>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
