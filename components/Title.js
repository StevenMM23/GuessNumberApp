import { Text, StyleSheet } from "react-native"
import Color from "../constants/colors"
function Title({children}) { 
    return <Text style={styles.title}>{children}</Text>
} 

export default Title

const styles = StyleSheet.create({ 
    title: { 
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        color: "white",
        textAlign: "center",
        marginTop: 100,      
        borderWidth :1,
        borderColor: "white",
        padding: 20
        
    }
})
