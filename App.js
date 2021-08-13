import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Loading, LandingScreen, LoginScreen, RegistrationScreen, HomeScreen, Doctors, DoctorPreview, Calendars, Time, PatientPreview, DetailsPreview, AppointmentDetails } from './src/screens'

import {decode, encode} from 'base-64'
if (!global.btoa) { global.btoa = encode }
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
            <Stack.Screen name="Load" component={Loading} options={{headerShown: false}} />
            <Stack.Screen name="Welcome" component={LandingScreen} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}}/>
            <Stack.Screen name="Registration" component={RegistrationScreen} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Select Doctor" component={Doctors} />
            <Stack.Screen name="Doctor Details" component={DoctorPreview} /> 
            <Stack.Screen name="Select Day" component={Calendars} />         
            <Stack.Screen name="Select Time" component={Time} />
            <Stack.Screen name="Patient Details" component={PatientPreview} />
            <Stack.Screen name="Schedule Appointment" component={DetailsPreview} />
            <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
          </Stack.Navigator>
        )}
    </NavigationContainer>
  );
}