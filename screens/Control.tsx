import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { Text, View, StyleSheet, Alert } from "react-native";
import { getData, postData } from "../api/api";
const clickCloseButton = () => {
  postData();
};
const clickOpenButton = () => {
  getData();
};

const Control = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Button title="Open" onPress={clickOpenButton}></Button>
      <Button title="Close" onPress={clickCloseButton}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default Control;
