/* eslint-disable react/prop-types */
import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './inputText.style';

export default function InputText(props) {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder={props.placeholder}
        placeholderTextColor="#fff"
        value={props.value}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
}
