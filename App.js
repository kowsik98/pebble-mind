import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen, Calendars, Time } from './src/screens'

import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {
  
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
        { user ? (
          <Stack.Navigator>
            <Stack.Screen name="Home">
              {props => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="Calendar" component={Calendars}/>         
            <Stack.Screen name="Time" component={Time}/>
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Calendar" component={Calendars}/>         
            <Stack.Screen name="Time" component={Time}/>
          </Stack.Navigator>
        )}
    </NavigationContainer>
  );
}