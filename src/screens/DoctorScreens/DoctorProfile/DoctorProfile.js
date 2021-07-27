import React, { useState } from 'react'
import {Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, Button} from 'react-native'
import { firebase } from '../../../firebase/config'
import styles from '../../UserProfile/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function DoctorProfile({navigation}) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [mobile, setMobile] = useState('')
    const[dob, setDOB] = useState(new Date())
    const [dob_str, setDOBString] = useState('');
    const [photo, setPhoto] = React.useState(null);
    const [id, setID] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDOB(currentDate);
      };

    const loadData = () => {
        const docRef = firebase.firestore().collection('doctors');
        const user = firebase.auth().currentUser;
        
        docRef
            .doc(user.uid)
            .get()
            .then(firestoreDocument => {
                if (firestoreDocument.exists) {
                    const doc_details = firestoreDocument.data();
                    setFirstName(doc_details.first_name);
                    setLastName(doc_details.last_name);
                    setEmail(doc_details.email_id);
                    setMobile(doc_details.mobile);
                    setPhone(doc_details.phone);
                    setDOB(new Date(doc_details.dob));
                }
                
            })

    }

    const saveDetails = () => {
        const data = new FormData()

        data.append("first_name", firstName)
        data.append("last_name", lastName)
        data.append("email", email)
        data.append("mobile", mobile)
        data.append("verified", false)

        fetch('https://pebble-test.herokuapp.com/doctors/'+ id, {
            method: 'PATCH',
            body: data
        })
        .then(response => 
            response.json()
        )
        .then(data => {
            console.log('Success:', data);
            navigation.navigate('Doctor')
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const onSave = () => {
        const user = firebase.auth().currentUser;
        firebase 
            const uid = user.uid
            const data = {
                doctor_id: uid,
                first_name: firstName,
                last_name: lastName,
                email_id: email,
                mobile: mobile,
                phone: phone,
                dob: dob.toString(),
            };
            const docRef = firebase.firestore().collection('doctors')
            docRef
                .doc(uid)
                .set(data, {merge: true})

        alert("Details saved")
        navigation.navigate('Doctor')
    }

    return (
        
        <SafeAreaView style={styles.safearea_container} onLayout = {loadData}>
            
            <View style = {{alignItems: 'center', marginTop: 5}}>
        <Image
                style={styles.userImg}
                source= {require('../../../../assets/onboarding-img1.png')}
                
                />
                <Button title="Choose Photo" onPress={handleChoosePhoto} />
                <Text style={styles.userName}>Suzannah Farrar</Text>
                <Text style={styles.aboutUser}>Hi. I'm new to Pebble!</Text>
        </View>
                <ScrollView
                style={styles.container}
                contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                showsVerticalScrollIndicator={false}>

            <View style={styles.datafiller}>
                <View 
                    keyboardShouldPersistTaps="always">
                        <Text style = {styles.userInfoItem}>First Name</Text>
                        <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setFirstName(text)}
                        value = {firstName}/>
                    </View>
                    <View
                    keyboardShouldPersistTaps="always">
                        <Text style = {styles.userInfoItem}>Last Name</Text>
                        <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"     
                        onChangeText={(text) => setLastName(text)}                                          
                        value = {lastName}
                        />
                    </View>
                    
                    <View
                    keyboardShouldPersistTaps="always">
                        <Text style = {styles.userInfoItem}>Business Email ID</Text>
                        <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setEmail(text)} 
                        value = {email}
                        />
                    </View>
                    <View
                    keyboardShouldPersistTaps="always" >
                        <Text style = {styles.userInfoItem}>Phone</Text>
                        <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setPhone(text)}
                        value = {phone}/>
                    </View>
                    <View
                    keyboardShouldPersistTaps="always" >
                        <Text style = {styles.userInfoItem}>Mobile</Text>
                        <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setMobile(text)}
                        value = {mobile}
                        require = "true"
                        />
                    </View>
                    <View
                    keyboardShouldPersistTaps="always">
                        <Text style = {styles.userInfoItem}
                        >Date of Birth</Text>
                        <DateTimePicker style = {{margin: 10}}
                        value={dob}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange = {onChange}
                        />

                    </View>                 
                    
                    <View style = {styles.footerView}>
                        <TouchableOpacity style={styles.button} onPress={onSave}>
                            <Text style={styles.buttonTitle}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    </View>

                    </ScrollView>
                   
            </SafeAreaView>
            
    )
}