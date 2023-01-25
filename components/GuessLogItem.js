import { Text, View, StyleSheet } from "react-native"
import Color from "../constants/colors"
function GuessLogItem({roundNumber, guess}) { 
    return ( 
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem


const styles = StyleSheet.create({ 
    listItem: { 
        borderColor: Color.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Color.accent500,
        flex: "row",
        justifyContent: "space-between",
        width: "100%",
        elevation: 4
    },
    itemText: { 
        fontFamily: 'open-sans'
    }
})