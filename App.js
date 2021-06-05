import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginScreen, HomeScreen, RegistrationScreen, History, Profile,Doctors,Feed} from './src/screens'
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState('abc')

  return (
    <NavigationContainer>
      <Stack.Navigator> 
        { user ? (
          <>
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
         
          
         
          <Stack.Screen name="Feed" component={Feed}/>
          <Stack.Screen name="Doctors" component={Doctors}/>
          <Stack.Screen name="History" component={History}/> 
          <Stack.Screen name="Profile" component={Profile}/> 

                           
         
          </>  
          
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}