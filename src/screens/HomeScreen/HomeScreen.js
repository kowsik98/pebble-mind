import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import History from './Components/HistoryScreen/History'
import Profile from './Components/ProfileScreen/Profile'
import Doctors from './Components/DoctorsScreen/Doctors'
import Feed from './Components/FeedScreen/Feed'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function HomeScreen({route}) {
  const userID = route.params.user._id
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
      activeTintColor: '#e91e63',
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
        component={Doctors}
        initialParams={{userID: userID}}
        options={{
          tabBarLabel: 'Doctors',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hospital-box" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        initialParams={{userID: userID}}
        options={{
          tabBarLabel: 'Appoinments',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),   
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
  </Tab.Navigator>
  );
}
