import { View, Text, Pressable, StyleSheet } from "react-native";
import Color from "../constants/colors";
View;
function PrimaryButton({ children, onPress }) {
  
  return (
    <View style={style.buttonOuterContainer}>
      <Pressable style={style.ButtonInnercontainer} onPress={onPress} android_ripple={{ color: Color.primary600 }}>
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const style = StyleSheet.create({
  buttonOuterContainer: { 
    borderRadius: 28,
    margin: 5,
    overflow: "hidden"

  },
  
    ButtonInnercontainer: {
    backgroundColor: Color.primary500,
    paddingVertical: 16,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
