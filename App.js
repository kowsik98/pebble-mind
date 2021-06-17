import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { LoginScreen, ImageUploader, HomeScreen, RegistrationScreen,DetailsScreen,ProfileScreen, DoctorScreen, DoctorAppointmentSetup, DoctorProfile, DoctorHome, UserProfile} from './src/screens'
import {decode, encode} from 'base-64'
import Credentials from './src/screens/DoctorProfile/Credentials';
import AvailabilityScreen from './src/screens/DoctorProfile/AvailabilityScreen';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {
  
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <>
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
          </>  
          
        ) : (
          <>
            
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Doctor" component={DoctorHome} />
            <Stack.Screen name = "My Credentials" component = {Credentials} />
            <Stack.Screen name="Home" component={HomeScreen} />    
            <Stack.Screen name="Doctor Profile" component={DoctorProfile} />  
            <Stack.Screen name="Availability" component={AvailabilityScreen} />             
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}