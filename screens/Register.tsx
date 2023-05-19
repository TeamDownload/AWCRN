import { Text, TextInput, View, StyleSheet, Alert } from "react-native";
import Button from "../components/Button";
import React, { useState, useRef, useEffect } from "react";
import { idCheck } from "../api/api";
const Register = ({ navigation }: any) => {
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const userInfo = {
    userID: userID,
    userEmail: userEmail,
    userPW: userPW,
  };

  const onPressRegistser = () => {
    if (!userID || !userPW || !confirmPW || !userEmail) {
      Alert.alert("모든 입력란에 입력해주세요");
    } else if (userPW != confirmPW) {
      Alert.alert("비밀번호를 다시 확인해주세요");
    } else {
      idCheck(userInfo);
      navigation.navigate("Main");
    }
  };

  const ref_input: Array<React.RefObject<TextInput>> = [];
  ref_input[0] = useRef(null);
  ref_input[1] = useRef(null);
  ref_input[2] = useRef(null);
  ref_input[3] = useRef(null);

  const onFocusNext = (index: number) => {
    if (ref_input[index + 1] && index < ref_input.length - 1) {
      ref_input[index + 1].current?.focus();
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.inputs}
          onSubmitEditing={() => {
            onFocusNext(0);
          }}
          placeholder="아이디"
          ref={ref_input[0]}
          onChangeText={(userID) => setUserID(userID)}
          returnKeyType="next"></TextInput>
        <TextInput
          ref={ref_input[1]}
          style={styles.inputs}
          onSubmitEditing={() => {
            onFocusNext(1);
          }}
          placeholder="비밀번호"
          secureTextEntry
          onChangeText={(userPW) => setUserPW(userPW)}
          returnKeyType="next"></TextInput>
        <TextInput
          style={styles.inputs}
          ref={ref_input[2]}
          placeholder="비밀번호 확인"
          onSubmitEditing={() => {
            onFocusNext(2);
          }}
          secureTextEntry
          onChangeText={(confirmPW) => setConfirmPW(confirmPW)}
          returnKeyType="next"></TextInput>
        <TextInput
          style={styles.inputs}
          ref={ref_input[3]}
          autoComplete="email"
          inputMode="email"
          placeholder="이메일"
          onSubmitEditing={() => {
            onFocusNext(3);
          }}
          onChangeText={(userEmail) => setUserEmail(userEmail)}
          returnKeyType="next"></TextInput>
        <View style={styles.buttons}>
          <Button title="회원가입" onPress={onPressRegistser}></Button>
        </View>
      </View>
    </>
  );
};
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
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  },
  logo: {
    fontSize: 64,
    textAlign: "center",
  },
});

export default Register;
