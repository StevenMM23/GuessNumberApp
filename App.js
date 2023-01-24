import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ImageBackground, StyleSheet, Text, View,SafeAreaView } from "react-native";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import Color from "./constants/colors";

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)
  function pickedNumberHandler(pickedNumber) { 
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler() { 
    setGameIsOver(true)
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>

  if(userNumber) { 
    screen = <GameScreen userNumber={userNumber} onGameOver ={gameOverHandler}/>
  }
  if(gameIsOver && userNumber) { 
    screen= <GameOverScreen></GameOverScreen>
  }

  
  return (
    <LinearGradient colors={[Color.primary700, Color.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
      <SafeAreaView style={styles.rootScreen}>
        {screen}

      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: { 
    opacity: 0.15
  }
});
