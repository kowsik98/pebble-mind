import 'react-native-gesture-handler';
import React,{useState} from 'react';
import { Text, View, Button, TextInput,StyleSheet, Image, ScrollView,TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import History from './Components/HistoryScreen/History'
import Profile from './Components/ProfileScreen/Profile'
import Doctors from './Components/DoctorsScreen/Doctors'
import Feed from './Components/FeedScreen/Feed'



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  const [showHistory, setShowHistory] = useState(0)
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
        options={{
          tabBarLabel: 'Doctors',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hospital-box" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={History}
        options={{
          tabBarLabel: 'Medical History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Notification"
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

export default function HomeScreen() {
  return (
   
      <MyTabs />
    
  );
}
