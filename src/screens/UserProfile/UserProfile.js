import React, { useState } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';

export default function UserProfile({navigation}){

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDOB] = useState('')
    const [userData, setUserData] = useState(null);

    const logout = () => {
            navigation.navigate('Login');
    }

    const getUser = async() => {

        firebase
                const usersRef = firebase.firestore().collection('profiles')
                usersRef
                    .doc(user.id)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        console.log('User Data', firestoreDocument.data());
                        setUserData(firestoreDocument.data());
                    })
                    .catch(error => {
                        alert(error)
                    });
    }

    return(
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}>
                <View style = {{alignItems: 'center', marginTop: 20}}>
                <Image
                style={styles.userImg}
                source= {require('../../../assets/onboarding-img1.png')}
                
                /></View>
                
                <Text style={styles.userName}>Suzannah Farrar</Text>
                <Text style={styles.aboutUser}>Hi. I'm new to Pebble!</Text>
                <View style={styles.userBtnWrapper}>
                <TouchableOpacity style={styles.userBtn} onPress={() => logout()}>
                    <Text style={styles.userBtnTxt}>Logout</Text>
                </TouchableOpacity>
                </View>


            <ScrollView
                style={styles.container}
                contentContainerStyle={{justifyContent: 'center', alignItems: 'left'}}
                showsVerticalScrollIndicator={false}>
            <View style={styles.datafiller}>
                <View 
                    keyboardShouldPersistTaps="always">
                        <Text style = {styles.userInfoItem}>First Name</Text>
                        <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        />
                    </View>
                    <View
                    keyboardShouldPersistTaps="always">
                        <Text style = {styles.userInfoItem}>Last Name</Text>
                        <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"                        
                        />
                    </View>
                    <View
                    keyboardShouldPersistTaps="always">
                        <Text style = {styles.userInfoItem}>Phone</Text>
                        <TextInput style={styles.input}
                        underlineColorAndroid="transparent"/>
                    </View>
                    <View
                    keyboardShouldPersistTaps="always">
                        <Text style = {styles.userInfoItem}>E-mail</Text>
                        <TextInput style={styles.input}
                        underlineColorAndroid="transparent"/>
                    </View>
                    <View
                    keyboardShouldPersistTaps="always">
                        <Text style = {styles.userInfoItem}>Date of Birth</Text>
                        <TextInput style={styles.input}
                        placeholder = 'dd/mm/yyyy'
                        placeholderTextColor = '#aaaaaa'
                        underlineColorAndroid="transparent"/>
                    </View>
                    <View style = {styles.footerView}>
                        <TouchableOpacity style={styles.button} onPress={logout}>
                            <Text style={styles.buttonTitle}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    </ScrollView>
            </SafeAreaView>

    );
}

