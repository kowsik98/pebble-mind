import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DoctorScreen from '../DoctorScreen/DoctorScreen';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
function MedicalHistory() {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>MedicalHistory</Text>
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
        component={DoctorScreen}
        options={{
          tabBarLabel: 'Doctors',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hospital-box" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MedicalHistory"
        component={MedicalHistory}
        options={{
          tabBarLabel: 'Medical History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Profile}
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
export default function HomeScreen({navigation}) {

    return (    
      <MyTabs />    
    )
}
