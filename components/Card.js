import { View, StyleSheet } from "react-native";
import Color from "../constants/colors";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    padding: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: Color.primary800,
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
export default Card;
