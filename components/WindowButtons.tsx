import React from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";

export default function WindowButtons(props: any) {
  const { onPress, img, title = "Save" } = props;
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Image style={styles.buttonImage} source={img}></Image>
      </Pressable>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 64,
    height: 80,
    gap: 5,
  },
  buttonImage: {
    width: 64,
    height: 64,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "skyblue",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "skyblue",
  },
});
