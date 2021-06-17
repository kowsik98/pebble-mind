import React, {useState, useEffect, useContext} from 'react';
  import { Alert, Image, Text, TextInput, TouchableOpacity, Pressable, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
  import styles from './styles';
  import { firebase } from '../../firebase/config';

  
export default function User({navigation, user}){

  const [option, setOption] = useState('');
 
  const logout = () => {
    navigation.navigate('Login');
  } 

  const profile = () => {
    navigation.navigate('Profile');
  } 

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <Text style={styles.settingsTitle}>Favourites</Text>
        <View style={styles.userList}>
          <TouchableOpacity>
            <Text>Appointments</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userList}>
          <TouchableOpacity>
            <Text>Purchase History</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userList}>
          <TouchableOpacity>
            <Text>Medical History</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.settingsTitle}>Account Settings</Text>
        <View style={styles.userList}>
          <TouchableOpacity onPress = {profile}>
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userList}>
          <TouchableOpacity>
            <Text >Account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userList}>
          <TouchableOpacity>
            <Text >Push notifications</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userList}>
          <TouchableOpacity>
            <Text >Send feedback</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userList}>
          <TouchableOpacity>
            <Text >About</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.userList}>
          <TouchableOpacity onPress = {logout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
