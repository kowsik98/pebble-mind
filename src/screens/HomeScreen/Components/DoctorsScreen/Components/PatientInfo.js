import React, { useState } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { List, RadioButton, } from 'react-native-paper'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'
import styles from './styles'

export default function PatientInfo({route, navigation}) {
    const [patient, setPatient] = useState('Self')
    const [expanded, setExpanded] = useState(false)
    const [patientName, setPatientName] = useState('')
    const [patientGender, setPatientGender] = useState('male')
    const [patientAge, setPatientAge] = useState('')
    const [patientPhone, setPatientPhone] = useState('')
    const date = route.params.date
    const doctor_id = route.params.doctor_id
    const mode = route.params.mode
    const time = route.params.time
    const userId = route.params.userID

    const fetchData = () => {
        if(patientName === '' || patient === 'Self'){
            fetch('https://pebble-test.herokuapp.com/users')
            .then(response => response.json())
            .then(data => {
                data.forEach(doc => {
                    if(doc._id === userId){
                        setPatientName(doc.first_name +' '+doc.last_name)
                        setPatientGender(doc.gender)
                        var dob = new Date(doc.dob)
                        var month_diff = Date.now() - dob.getTime()
                        var age_dt = new Date(month_diff)
                        var year = age_dt.getUTCFullYear()
                        var age = Math.abs(year - 1970);
                        setPatientAge(age)
                        setPatientPhone(doc.phone)
                    }
                })
            })
            .catch(error => console.log(error))
        }
    }

    const handleNavigation = () => {
        if(patient === 'Self'){
            fetchData()
            navigation.navigate('Schedule Appointment', {
                patientName: patientName, 
                patientGender: patientGender, 
                patientAge: patientAge, 
                patientPhone: patientPhone,
                date: date,
                doctor_id: doctor_id,
                mode: mode,
                time: time,
                userId: userId,
            })
        } else {
            if(patientName !== ''){
                navigation.navigate('Schedule Appointment', {
                    patientName: patientName, 
                    patientGender: patientGender, 
                    patientAge: patientAge, 
                    patientPhone: patientPhone,
                    date: date,
                    doctor_id: doctor_id,
                    mode: mode,
                    time: time,
                    userId: userId,
                })
            }else{
                alert('Fill Data')
            }
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            fetchData()
        }, [patient])
    )

    return (
        <View>
            <View style={styles.pat__container}>
                <Text style={styles.pat__title}>Appointment for:</Text> 
                <List.Accordion 
                    title={patient} 
                    id="1"
                    expanded={expanded}
                    onPress ={() => setExpanded(!expanded)}
                    style = {styles.pat__options}
                    theme = {{
                        colors: {
                            primary: '#189AB4'
                        }
                    }}
                >
                    <List.Item title="Self" onPress={() => {setPatient('Self'); setExpanded(false)}}/>
                    <List.Item title="Others" onPress={() =>{setPatient('Others'); setExpanded(false)}}/>
                </List.Accordion>
                {
                    patient === 'Others' ? (
                        <>
                            <Text style={styles.pat__subtitle}>Patient Details:</Text> 
                            <TextInput
                                style={styles.pat__input}
                                placeholder = "Name"
                                placeholderTextColor="#aaaaaa"
                                onChangeText={value => setPatientName(value)}
                                value = {patientName}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                            />
                            <View style={styles.pat__genderButtonGroup} >
                                <Text style={styles.pat__genderTitle}>Gender </Text>
                                <Text style={styles.pat__genderText}>Male</Text>
                                <RadioButton
                                  value="male"
                                  status={ patientGender === 'male' ? 'checked' : 'unchecked' }
                                  onPress={() => setPatientGender('male')}
                                  theme={{colors:{
                                      accent: '#53469c',
                                  }}}
                                />
                                <Text style={styles.pat__genderText}>Female</Text>
                                <RadioButton
                                  value="female"
                                  status={ patientGender === 'female' ? 'checked' : 'unchecked' }
                                  onPress={() => setPatientGender('female')}
                                  theme={{colors:{
                                    accent: '#53469c',
                                }}}
                                />
                                <Text style={styles.pat__genderText}>Other</Text>
                                <RadioButton
                                  value="other"
                                  status={ patientGender === 'other' ? 'checked' : 'unchecked' }
                                  onPress={() => setPatientGender('other')}
                                  theme={{colors:{
                                    accent: '#53469c',
                                }}}
                                />
                            </View>
                            <TextInput
                                style={styles.pat__input}
                                placeholder = "Age"
                                placeholderTextColor="#aaaaaa"
                                onChangeText={value => setPatientAge(value)}
                                value = {patientAge}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                                keyboardType="numeric"
                            />
                            <TextInput
                                style={styles.pat__input}
                                placeholder = "Phone"
                                placeholderTextColor="#aaaaaa"
                                onChangeText={value => setPatientPhone(value)}
                                value = {patientPhone}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                                keyboardType="numeric"
                                maxLength={10}
                            />
                        </>
                    ) : (
                        <></>
                    )
                }
                
                <TouchableOpacity
                    style={styles.pat__button}
                    onPress={() => handleNavigation()}>
                    <Text style={styles.pat__buttonTitle}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
