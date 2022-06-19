import { KeyboardAvoidingView, StatusBar, Image, View, Text } from 'react-native';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import styles from './login.style';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import auth from '@react-native-firebase/auth';
import colors from '../../colors';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function goRegister() {
    setEmail(''); setPassword('')
    navigation.navigate('Register');
  }


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Text onPress={goRegister} style={styles.right}>Kayıt Ol</Text>
        );
      },
    });
  }, [navigation]);

  function validateEmail(emailAdress) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  }


  function signIn() {
    if (password < 6) {
      alert('Şifre 6 harften az olamaz!')
    }
    else if (validateEmail(email) === false) {
      alert('Email doğru formatta yazılmalıdır!')
    }
    else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setEmail(''); setPassword('')
          navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }],
          });
        })
        .catch(error => {
          alert(error);
        });
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

        <InputText
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Şifre"
        />

      </View>
      <Button color={colors.green} onPress={signIn} value="Giriş Yap" />
    </KeyboardAvoidingView>
  );
}
