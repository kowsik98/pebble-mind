import React, {useState} from 'react';
import { View, Text,Image, Button, ScrollView,TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../../styles'
import UpcomingAppointments from './Components/UpcomingAppointments'
import CompletedAppointments from './Components/CompletedAppointments'

const Tab = createMaterialTopTabNavigator();

export default function App({route, navigation}) {
  const userID = route.params.userID
  return (
    <Tab.Navigator>
      <Tab.Screen name="Upcoming">
        {props => <UpcomingAppointments userID={userID} />}
      </Tab.Screen>
      <Tab.Screen name="Completed">
        {props => <CompletedAppointments userID={userID} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
