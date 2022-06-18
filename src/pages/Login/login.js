import {KeyboardAvoidingView, StatusBar, Image, View} from 'react-native';
import React, {useState} from 'react';
import styles from './login.style';
import InputText from '../../components/InputText';
import LoginButton from '../../components/LoginButton';
import auth from '@react-native-firebase/auth';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function goRegister() {
    navigation.navigate('Register');
  }
  function signIn() {
    try {
      if (email.length < 1 || password.length < 1) {
        alert('Not be null');
      } else {
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            navigation.navigate('Main');
          })
          .catch(error => {
            alert(error);
          });
      }
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
        <InputText
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Password"
        />
        
        <LoginButton onPress={goRegister} value="Sign Up" />
      </View>
      <LoginButton onPress={signIn} value="Sign In" />
    </KeyboardAvoidingView>
  );
}
