import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLogout, accountsSelector } from "../../redux/reducers/accountSlice";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

import { auth } from "../../firebase/firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import styles from "./styles";
//import Ionicons from '@expo/vector-icons/Ionicons';

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const statusLogout = useSelector(accountsSelector);
  console.log("statusLogout:", statusLogout.isLogout);
  const navigation = useNavigation();
  const handleGoogleSignIn = async () => {
    return await "google";
  };
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        //console.log("Registered with:", user.email);
        Alert.alert("Registered Success ! Click Login");
      })
      .catch((error) => Alert.alert(error.message));
  };

  const handleLogin = () => {
    //console.log(email, "-", password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
        dispatch(isLogout(user));
        //console.log("Logged in with:", user.email);
        // lưu vào redux trạng thái đăng nhập thành công
        //navigation.replace("Home");
      })
      .catch((error) => Alert.alert(error.message));
  };

  useEffect(() => {
    if (statusLogout.isLogout) {
      navigation.replace("Home");
    }
  }, [navigation, statusLogout.isLogout]);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGoogleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Google Signin</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
