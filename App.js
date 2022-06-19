import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/pages/Login';
import Register from './src/pages/Register';
import Main from './src/pages/Main';
import Detail from './src/pages/Detail';
import Account from './src/pages/Account';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
            title: 'Bitlo',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0B2465',
            },
          }}
          name="Login"
          component={LoginPage}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
            title: 'Kayıt Ol',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0B2465',
            },
          }}
          name="Register"
          component={Register}
        />
        <Stack.Screen

          options={{
            headerTitleAlign: 'center',
            title: 'Market',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0B2465',
            },

          }}
          name="Main"
          component={Main}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0B2465',
            },
          }}
          name="Detail"
          component={Detail}
        />
        <Stack.Screen
          options={{
            title: 'Profil',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#0B2465',
            },
          }}
          name="Account"
          component={Account}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
