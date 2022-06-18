import { View, KeyboardAvoidingView, Image, StatusBar, ScrollView, Text } from 'react-native';
import React, { useState, useRef } from 'react';
import styles from './register.style';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useValidation } from 'react-native-form-validator';
import colors from '../../colors';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { name, email, password, surname },
    });

  const _onPressButton = () => {
      console.log(isFieldInError('name'))
      validate({
        name: { minlength: 3, maxlength: 7, required: true },
        email: { email: true, required: true },
        password: { minlength: 6, required: true },
        surname: { minlength: 4, required: true },
      });
       if(isFieldInError('name') ||isFieldInError('email') || isFieldInError('password') || isFieldInError('surname') ===false ){
        signUp(email, password, name, surname)
       }
   
    
    
   
  };

  async function signUp(email, password, name, surname) {
    try {
      return await auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (res) => {
          const userInfo = {
            name: name,
            surname: surname,
          };
          console.log(res.user.uid)
          alert("Success!")
          // Add user account information in Firestore to be retrieved later.
          await firestore().collection("users").doc(res.user.uid).set(userInfo);
        });

    } catch (e) {
      alert(e);
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
        <InputText  onChangeText={(text) => setName(text)} value={name} placeholder="Name" />
        {isFieldInError('name') &&
          getErrorsInField('name').map(errorMessage => (
            <Text key={errorMessage.length} style={styles.error} >{errorMessage}</Text>
          ))}
        <InputText onChangeText={(text) => setSurname(text)} value={surname} placeholder="Surname" />
        {isFieldInError('surname') &&
          getErrorsInField('surname').map(errorMessage => (
            <Text key={errorMessage.length} style={styles.error}>{errorMessage}</Text>
          ))}
        <InputText onChangeText={(text) => setEmail(text)} value={email} placeholder="Email" />
        {isFieldInError('email') &&
          getErrorsInField('email').map(errorMessage => (
            <Text key={errorMessage.length} style={styles.error}>{errorMessage}</Text>
          ))}
        <InputText secureTextEntry={true} onChangeText={(text) => setPassword(text)} value={password} placeholder="Password" />
        {isFieldInError('password') &&
          getErrorsInField('password').map(errorMessage => (
            <Text key={errorMessage.length} style={styles.error}>{errorMessage}</Text>
          ))}


      </View>
      <Button color={colors.green} onPress={_onPressButton} value="Sign Up" />




    </KeyboardAvoidingView>
  );
}
