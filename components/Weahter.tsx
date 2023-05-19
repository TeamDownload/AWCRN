import React from "react";
import { Image, StyleSheet, Text } from "react-native";

const Clouds = "../assets/ico/clouds.png";
const ClearSky = "../assets/ico/ClearSky.png";
const rain = "../assets/ico/rain.png";
const mist = "../assets/ico/mist.png";
const overcastClouds = "../assets/ico/overcastcloud.png";
interface data {
  weather: string;
}
const Weather = ({ weather }: data) => {
  if (weather == "clear sky")
    return <Image style={styles.Icons} source={require(ClearSky)}></Image>;
  else if (weather == "overcast clouds")
    return (
      <Image style={styles.Icons} source={require(overcastClouds)}></Image>
    );
  else if (weather == "mist")
    return <Image style={styles.Icons} source={require(mist)}></Image>;
  return <Text>{weather}</Text>;
};

const styles = StyleSheet.create({
  Icons: {
    height: 64,
    width: 64,
  },
});
export default Weather;
