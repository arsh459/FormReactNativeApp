import { View, TouchableOpacity, Text } from "react-native"
import clsx from "clsx"
import { CommonActions, useNavigation } from "@react-navigation/native"
const ScreenHeader = ({ screenName }) => {
  const navigation = useNavigation()

  const commonStyles =
    "w-10 aspect-square rounded-full  flex items-center justify-center"
  const isScreenStyles = "bg-[#BEE2FA]"
  const isNotScreenStyles = "border border-white"

  return (
    <View className="flex flex-row items-center justify-around px-20 pt-8 ">
      <TouchableOpacity
        className={clsx(
          commonStyles,
          screenName === "PersonalInfoScreen"
            ? isScreenStyles
            : isNotScreenStyles
        )}
        onPress={() => {
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
        }}
        disabled={screenName === "PersonalInfoScreen"}
      >
        <Text
          className={clsx(
            screenName === "PersonalInfoScreen"
              ? "text-[#092950]"
              : "text-[#fff] "
          )}
        >
          1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={
          screenName === "PersonalInfoScreen" ||
          screenName === "SelectYourPlanScreen"
        }
        onPress={() => {
          navigation.dispatch((state) => {
            const routes = state.routes.filter(
              (r) =>
                r.name !== "PickAddOnsScreen" && r.name !== "FinishingUpScreen"
            )

            return CommonActions.reset({
              ...state,
              routes,
              index: routes.length - 1,
            })
          })
        }}
        className={clsx(
          commonStyles,
          screenName === "SelectYourPlanScreen"
            ? isScreenStyles
            : isNotScreenStyles
        )}
      >
        <Text
          className={clsx(
            screenName === "SelectYourPlanScreen"
              ? "text-[#092950]"
              : "text-[#fff] "
          )}
        >
          2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={
          screenName === "PersonalInfoScreen" ||
          screenName === "SelectYourPlanScreen" ||
          screenName === "PickAddOnsScreen"
        }
        onPress={() => {
          navigation.dispatch((state) => {
            const routes = state.routes.filter(
              (r) => r.name !== "FinishingUpScreen"
            )

            return CommonActions.reset({
              ...state,
              routes,
              index: routes.length - 1,
            })
          })
        }}
        className={clsx(
          commonStyles,
          screenName === "PickAddOnsScreen" ? isScreenStyles : isNotScreenStyles
        )}
      >
        <Text
          className={clsx(
            screenName === "PickAddOnsScreen"
              ? "text-[#092950]"
              : "text-[#fff] "
          )}
        >
          3
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={true}
        className={clsx(
          commonStyles,
          screenName === "FinishingUpScreen"
            ? isScreenStyles
            : isNotScreenStyles
        )}
      >
        <Text
          className={clsx(
            screenName === "FinishingUpScreen"
              ? "text-[#092950]"
              : "text-[#fff] "
          )}
        >
          4
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ScreenHeader
