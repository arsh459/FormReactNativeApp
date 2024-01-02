import { View, TouchableOpacity, StyleSheet } from "react-native"
const CustomSwitch = ({ isSwitchOn, onToggleSwitch }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.outer,
          isSwitchOn
            ? { justifyContent: "flex-end" }
            : { justifyContent: "flex-start" },
        ]}
        activeOpacity={1}
        onPress={onToggleSwitch}
      >
        <View style={styles.inner} />
      </TouchableOpacity>
    </View>
  )
}

export default CustomSwitch

const styles = StyleSheet.create({
  inner: {
    height: 10,
    width: 10,
    backgroundColor: "white",
    borderRadius: 15,
    marginLeft: 2,
    marginRight: 2,
  },
  outer: {
    width: 30,
    height: 15,
    backgroundColor: "#03295A",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
})
