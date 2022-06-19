import { View, KeyboardAvoidingView, Image, StatusBar, ScrollView, Text } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import styles from './register.style';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import colors from '../../colors';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');


  function validateEmail(emailAdress) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  }



  async function signUp(email, password, name, surname) {
    if (password < 6) {
      alert('Şifre 6 harften az olamaz!')
    }
    else if (name < 3) {
      alert('Ad 3 harften az olamaz!')
    }
    else if (surname < 3) {
      alert('Soyad 3 harften az olamaz!')
    }
    else if (validateEmail(email) === false) {
      alert('Email doğru formatta yazılmalıdır!')
    }
    else {
      try {
        return await auth()
          .createUserWithEmailAndPassword(email, password)
          .then(async (res) => {
            const userInfo = {
              name: name,
              surname: surname,
              email: email
            };
            console.log(res.user.uid)
            alert("Kayıt Başarılı!")
            // Add user account information in Firestore to be retrieved later.
            await firestore().collection("users").doc(res.user.uid).set(userInfo);
          });

      } catch (e) {
        alert(e);
      }
    }


  }

  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('../../../assets/unnamed.png')}
        />
      </View>
      <StatusBar style="auto" />




      <View style={styles.body}>
        <InputText onChangeText={(text) => setName(text)} value={name} placeholder="Ad" />

        <InputText onChangeText={(text) => setSurname(text)} value={surname} placeholder="Soyad" />

        <InputText onChangeText={(text) => setEmail(text)} value={email} placeholder="Email" />

        <InputText secureTextEntry={true} onChangeText={(text) => setPassword(text)} value={password} placeholder="Şifre" />


      </View>
      <Button color={colors.green} onPress={() => signUp(email, password, name, surname)} value="Kayıt Ol" />




    </KeyboardAvoidingView>
  );
}
