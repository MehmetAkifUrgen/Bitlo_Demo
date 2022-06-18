import { KeyboardAvoidingView, StatusBar, Image, View, Text } from 'react-native';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import styles from './login.style';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';
import { useValidation } from 'react-native-form-validator';
import colors from '../../colors';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function goRegister() {
    setEmail('')
    setPassword('')
    navigation.navigate('Register');
  }



  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Text onPress={goRegister} style={styles.right}>Sign Up</Text>
        );
      },
    });
  }, [navigation]);
  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { email, password },
    });
  const _onPressButton = () => {

    validate({
      name: { minlength: 3, maxlength: 7, required: true },
      email: { email: true, required: true },
      password: { minlength: 4, required: true },
      surname: { minlength: 4, required: true },
    });
    if (isFieldInError('email') || isFieldInError('password') === false) {
      signIn()
    }



  };
  function signIn() {
    try {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate('Main');
        })
        .catch(error => {
          alert(error);
        });

    } catch (e) {
      alert(e);
    }
  }
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('../../../assets/unnamed.png')}
        />
      </View>
      <StatusBar style="auto" />
      <View style={styles.body}>
        <InputText
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="Email"
        />
        {isFieldInError('email') &&
          getErrorsInField('email').map(errorMessage => (
            <Text key={errorMessage.length} style={styles.error} >{errorMessage}</Text>
          ))}
        <InputText
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Password"
        />
        {isFieldInError('password') &&
          getErrorsInField('password').map(errorMessage => (
            <Text key={errorMessage.length} style={styles.error} >{errorMessage}</Text>
          ))}
      </View>
      <Button color={colors.green} onPress={_onPressButton} value="Sign In" />
    </KeyboardAvoidingView>
  );
}
