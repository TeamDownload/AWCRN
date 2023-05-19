import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import Button from "../components/Button";
import React, { useState, useRef } from "react";

export default function Login({ navigation }: any) {
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");
  const ref_input: Array<React.RefObject<TextInput>> = [];
  ref_input[0] = useRef(null);
  ref_input[1] = useRef(null);

  const onFocusNext = (index: number) => {
    if (ref_input[index + 1] && index < ref_input.length - 1) {
      ref_input[index + 1].current?.focus();
    } else if (ref_input[index + 1] && index == ref_input.length - 1) {
      ref_input[index].current?.blur();
    }
  };

  const onPressLogin = () => {
    if (!userID || !userPW) {
      Alert.alert("아이디와 비밀번호를 입력해주세요");
      console.log("변경");
    } else {
      navigation.navigate("Main");
      setUserID("");
      setUserPW("");
    }
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.inputs}
          placeholder="ID"
          ref={ref_input[0]}
          onSubmitEditing={() => onFocusNext(0)}
          value={userID}
          onChangeText={(userID) => setUserID(userID)}
          returnKeyType="next"></TextInput>
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          ref={ref_input[1]}
          onSubmitEditing={() => onFocusNext(1)}
          value={userPW}
          secureTextEntry
          onChangeText={(userPW) => setUserPW(userPW)}
          returnKeyType="next"></TextInput>
        <View style={styles.buttons}>
          <Button title="Login" onPress={onPressLogin}></Button>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  container: {
    justifyContent: "center",
    height: "100%",
  },
  inputs: {
    padding: 10,
    fontSize: 18,
    margin: 10,
    borderWidth: 1,
  },
});
