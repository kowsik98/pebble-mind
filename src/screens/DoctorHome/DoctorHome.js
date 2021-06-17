import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DoctorAS from '../DoctorAppointmentSetup/DoctorAS';
import DoctorProfile from '../DoctorProfile/DoctorProfile';
import Doctor from '../DoctorProfile/Doctor';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Doctor - Home screen</Text>
    </View>
  );
}
function AppointmentHistory() {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>AppointmentHistory</Text>
    </View>
  );
}
function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#189AB4',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Doctors"
        component={DoctorAS}
        options={{
          tabBarLabel: 'Doctors',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hospital-box" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AppointmentHistory"
        component={AppointmentHistory}
        options={{
          tabBarLabel: 'Appointment History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Doctor}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
     
      
    </Tab.Navigator>
  );
}
export default function DoctorHome({navigation}) {

    return (    
      <MyTabs />    
    )
}