import { Text, View, StyleSheet, SafeAreaView, Alert } from "react-native";
import { useState, useEffect} from "react";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
    useEffect(() => { 
        if(currentGuess == userNumber) { 
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])
  function nextGuessHandler(direction) {

    if (
        (direction === "lower" && currentGuess < userNumber) || 
        (direction === "higher" && currentGuess > userNumber)
    ) { 
        Alert.alert("Don't lie!", "You know that this is wrong...", [{text: "Sorry!", style: 'cancel'}])
        return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      1,
      100,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <View>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          </View>
          <View>
            <PrimaryButton onPress={nextGuessHandler.bind(this,'higher')}>+</PrimaryButton>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
});