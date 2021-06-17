import React, {useState, useEffect, useContext} from 'react';
  import { Alert, Image, Text, TextInput, TouchableOpacity, Pressable, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
  import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
  import styles from '../UserProfile/styles';
  import { firebase } from '../../firebase/config';

  
export default function Doctor({navigation, user}){

  const [details, setDetails] = useState(null);
 
  const logout = () => {
    navigation.navigate('Login');
  } 

  const profile = () => {
    navigation.navigate('Doctor Profile');
  } 

  const credentials = () => {
    navigation.navigate('My Credentials');
  } 

  const availability = () => {
    navigation.navigate('Availability');
  } 


  return (
    <SafeAreaView >
      <ScrollView
        showsVerticalScrollIndicator={false}
        
        >
        <View style = {{alignItems: 'center', marginTop: 20}}>
        <Image
                style={styles.userImg}
                source= {require('../../../assets/onboarding-img1.png')}
                
                />
                <Text style={styles.userName}>Suzannah Farrar</Text>
                <Text style={styles.aboutUser}>Hi. I'm new to Pebble!</Text>
                <View style={styles.userBtnWrapper}>
                <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
                    <Text style={styles.userBtnTxt}>Logout</Text>
                </TouchableOpacity>
                </View>
        </View>
      

        <Text style={styles.settingsTitle}>Profile</Text>

          <TouchableOpacity onPress = {profile} style={styles.userList}>
            <Text>Basic Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.userList} onPress = {credentials}>
            <Text>My Credentials</Text>
          </TouchableOpacity>

        <Text style={styles.settingsTitle}>Settings</Text>
          <TouchableOpacity style={styles.userList} onPress = {availability}>
            <Text>Availability</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.userList}>
            <Text >Services & Fees</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.userList}>
            <Text >My Subscription</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.userList}>
            <Text >Send feedback</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.userList}>
            <Text >About</Text>
          </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};
