import { View, Text, TextInput, ScrollView } from "react-native"
import ScreenContentWrapper from "../../../components/ContentWrapper/ScreenContentWrapper"
const PersonalInfoContent = ({ state, errors, setError, setState }) => {
  return (
    <ScreenContentWrapper
      title={"Personal Info"}
      subTitle="Please provide your name, email address, and phone number."
    >
      <ScrollView>
        <View className="pt-4">
          <Text className="text-sm pb-1">Name</Text>
          <TextInput
            name="userName"
            className="px-3 py-2 rounded-lg border border-[#aaa]"
            placeholder="e.g Stephen King"
            textContentType="name"
            onFocus={() => {
              setError((prev) => ({ ...prev, userName: "" }))
            }}
            onChangeText={(text) => {
              setState((prev) => ({ ...prev, userName: text }))
            }}
            value={state.userName}
          />
          {errors.userName && (
            <Text className="text-xs text-red-500">{errors.userName}</Text>
          )}
        </View>
        <View className="pt-4">
          <Text className="text-sm pb-1">Email Address</Text>
          <TextInput
            name="email"
            className="px-3 py-2 rounded-lg border border-[#aaa]"
            placeholder="e.g stephenKing@lorem.com"
            onFocus={() => {
              setError((prev) => ({ ...prev, email: "" }))
            }}
            onChangeText={(text) => {
              setState((prev) => ({ ...prev, email: text }))
            }}
            value={state.email}
            textContentType="emailAddress"
          />
          {errors.email && (
            <Text className="text-xs text-red-500">{errors.email}</Text>
          )}
        </View>
        <View className="pt-4">
          <Text className="text-sm pb-1">Phone Number</Text>
          <TextInput
            placeholder="e.g 999 999 9999"
            className="px-3 py-2 rounded-lg border border-[#aaa]"
            autoFocus
            name="phoneNumber"
            keyboardType="phone-pad"
            maxLength={10}
            onFocus={() => {
              setError((prev) => ({ ...prev, phoneNumber: "" }))
            }}
            value={state.phoneNumber}
            onChangeText={(text) => {
              setState((prev) => ({ ...prev, phoneNumber: text }))
            }}
            textContentType="telephoneNumber"
          />
          {errors.phoneNumber && (
            <Text className="text-xs text-red-500">{errors.phoneNumber}</Text>
          )}
        </View>
      </ScrollView>
    </ScreenContentWrapper>
  )
}

export default PersonalInfoContent
