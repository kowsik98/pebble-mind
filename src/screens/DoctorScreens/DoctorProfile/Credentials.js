import React, { useState } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native'

import { firebase } from '../../../firebase/config'
import styles from '../../UserProfile/styles';



export default function Credentials({navigation}) {

    const [specialization, setSpecialization] = useState('')
    const [credentials, setCredentials] = useState('')
    const [experience, setExperience] = useState('')
 

    
    const loadData = () => {
        const docRef = firebase.firestore().collection('doctors');
        const user = firebase.auth().currentUser;
        

        docRef
            .doc(user.uid)
            .get()
            .then(firestoreDocument => {
                if (firestoreDocument.exists) {
                    const doc_details = firestoreDocument.data();
                    setCredentials(doc_details.credentials);
                    setSpecialization(doc_details.specialization);
                    setExperience(doc_details.experience);
                    //setLanguages(doc_details.languages);
                }
                
            })

    }

    const onSave = () => {
        const user = firebase.auth().currentUser;
        firebase 
            const uid = user.uid
            const data = {
                credentials: credentials,
                specialization: specialization,
                experience: experience,
            };

            const docRef = firebase.firestore().collection('doctors')
            docRef
                .doc(uid)
                .set(data, {merge: true})

            
        alert("Details saved")
        navigation.navigate('Doctor');
    }

    return (
        
        <SafeAreaView style={styles.safearea_container} onLayout = {loadData}>
            <View style = {{alignItems: 'center', marginTop: 20}}>
       
        </View>
                <ScrollView
                style={styles.container}
                contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                showsVerticalScrollIndicator={false}>

            <View style={styles.datafiller}>
                <View 
                    keyboardShouldPersistTaps="always">
                        <Text style = {styles.userInfoItem}>Specialization</Text>
                        <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setSpecialization(text)}
                        value = {specialization}/>
                    </View>
                    <View
                    keyboardShouldPersistTaps="always">
                        <Text style = {styles.userInfoItem}>Credentials</Text>
                        <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"     
                        onChangeText={(text) => setCredentials(text)}                                          
                        value = {credentials}
                        />
                    </View>
                    
                    <View
                    keyboardShouldPersistTaps="always">
                        <Text style = {styles.userInfoItem}>Experience</Text>
                        <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => setExperience(text)} 
                        value = {experience}
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