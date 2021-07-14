import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import UpcomingAppointments from './Components/UpcomingAppointments'
import CompletedAppointments from './Components/CompletedAppointments'

const Tab = createMaterialTopTabNavigator();

export default function App({route, navigation}) {
  const userID = route.params.userID
  return (
    <Tab.Navigator>
      <Tab.Screen name="Upcoming">
        {props => <UpcomingAppointments userID={userID} navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Completed">
        {props => <CompletedAppointments userID={userID} navigation={navigation} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
