import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from './loginButton.style'

export default function LoginButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  )
}