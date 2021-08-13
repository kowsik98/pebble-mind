import 'react-native-gesture-handler'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import History from './Components/HistoryScreen/History'
import Profile from './Components/ProfileScreen/Profile'
import Departments from './Components/DoctorsScreen/Departments'
import Feed from './Components/FeedScreen/Feed'
import { View } from 'react-native'
import styles from './styles'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function HomeScreen({route}) {
  const userID = route.params.user.userID
  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeContainer__top}></View>
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
        component={Departments}
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
        initialParams={{userID: userID}}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
  </Tab.Navigator>
  </View>
  );
}
