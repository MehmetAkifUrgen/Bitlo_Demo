import {View, KeyboardAvoidingView, Image, StatusBar} from 'react-native';
import React, {useState} from 'react';
import styles from './register.style';
import InputText from '../../components/InputText';
import LoginButton from '../../components/LoginButton';
import auth from '@react-native-firebase/auth';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signUp() {
    auth()
      .createUserWithEmailAndPassword(
        email,
        password,
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        alert(error)

        
      });
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
        <InputText onChangeText={(text)=>setEmail(text) } value={email} placeholder="Email" />
        <InputText secureTextEntry={true} onChangeText={(text)=>setPassword(text) } value={password} placeholder="Password" />
        <LoginButton onPress={signUp} value="Sign Up" />
      </View>
    </KeyboardAvoidingView>
  );
}
