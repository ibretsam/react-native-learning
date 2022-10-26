import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const InputBox = () => {
  return (
    <View style={styles.container}>
      {/* Icon */}
      <AntDesign name="plus" size={20} color="royalblue" />

      {/* Text Input */}
      <TextInput style={styles.input} placeholder="Type your message..." />

      {/* Icon */}
      <MaterialIcons style={styles.send} name="send" size={16} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden'
  },
});

export default InputBox;
