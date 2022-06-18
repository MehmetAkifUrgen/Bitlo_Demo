import { View, KeyboardAvoidingView, Image, StatusBar, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';
import styles from './register.style';
import InputText from '../../components/InputText';
import LoginButton from '../../components/LoginButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  let imageRef = useRef(null);
  let inputRef = useRef(null);

  async function signUp(email, password, name, surname) {
    try {
      return await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (res) => {
          const userInfo = {
            displayName: name,
            surname: surname,
          };
          console.log(res.user.uid)
          // Add user account information in Firestore to be retrieved later.
          await firestore().collection("users").doc(res.user.uid).set(userInfo);
        });
    } catch (e) {
      console.log(e);
    }

  }

  return (
    <KeyboardAvoidingView behavior='height'  style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('../../../assets/unnamed.png')}
        />
      </View>
      <StatusBar style="auto" />
     
      
       
       
       <View style={styles.body}>
       <InputText onChangeText={(text) => setName(text)} value={name} placeholder="Name" />
        <InputText onChangeText={(text) => setSurname(text)} value={surname} placeholder="Surname" />
        <InputText onChangeText={(text) => setEmail(text)} value={email} placeholder="Email" />
        <InputText secureTextEntry={true} onChangeText={(text) => setPassword(text)} value={password} placeholder="Password" />
        
     
       </View>
       <LoginButton onPress={() => signUp(email, password, name, surname)} value="Sign Up" />
     
     
     
     
    </KeyboardAvoidingView>
  );
}
