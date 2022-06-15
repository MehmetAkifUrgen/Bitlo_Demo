import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import InputText from './src/components/InputText';
import LoginButton from './src/components/LoginButton';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      enabled="false"
      behavior="height"
      style={styles.container}>
      <Image style={styles.image} source={require('./assets/unnamed.png')} />

      <StatusBar style="auto" />
      <InputText placeholder="Email" />

      <InputText placeholder="Password" />

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <LoginButton />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
    width: 50,
    height: 50,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
});
