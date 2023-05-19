import React from "react";
import { Text, View, StyleSheet } from "react-native";
const Header = () => {
  return (
    <View style={style.header}>
      <Text>Header</Text>
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    flex: 1,
  },
});
export default Header;
