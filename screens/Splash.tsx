import React, { useState } from "react";
import { Text, Image, View, StyleSheet, Pressable } from "react-native";

const SplashImage = "../assets/background.jpg";
const Splash = ({ navigation }: any) => {
  return (
    <View style={style.container}>
      <Image style={style.backgroundImages} source={require(SplashImage)} />
      <View style={style.logo}>
        <Text style={{ fontSize: 64, color: "white" }}>AWC</Text>
        <Text style={{ fontSize: 12, color: "white" }}>
          Auto Window Controler
        </Text>
      </View>

      <View style={style.buttons}>
        <Pressable
          style={style.button}
          onPress={() => navigation.navigate("Login")}>
          <Text style={style.buttonText}>Login</Text>
        </Pressable>
        <Pressable
          style={style.button}
          onPress={() => navigation.navigate("Register")}>
          <Text style={style.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
  },
  backgroundImages: {
    position: "absolute",
    width: "100%",
    height: "100%",
    flex: 15,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  button: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  logo: {
    flex: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});
export default Splash;
