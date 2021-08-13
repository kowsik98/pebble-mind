import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { IconButton, RadioButton, Checkbox } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker'


export default function RegistrationScreen({navigation}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('D.O.B')
    const [gender, setGender] = useState('male')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [terms, setTerms] = useState(false)

    const [show, setShow] = useState(false)
    const [date, setDate] = useState(new Date())

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        if (terms){
            if (password !== confirmPassword) {
                alert("Passwords don't match.")
                return
            }
            const data = {
                'first_name': firstName,
                'last_name': lastName,
                'dob': dob,
                'gender': gender,
                'email': email,
                'phone': phone
            }
            fetch('https://pebble-test.herokuapp.com/users', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                const loginData = {
                    'email': email,
                    'password': password,
                    'userID': data._id
                }
                fetch('https://pebble-test.herokuapp.com/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(loginData)
                })
                .then(response => response.json())
                .then(data => {
                    navigation.navigate('Login')
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
        else{
            alert("Accept Terms & Conditions")
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Text style={styles.title}>Let's Get Started</Text>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign In!</Text></Text>
                </View>
                <Text style={styles.sectionTitle}>Personal</Text>
                <TextInput
                    style={styles.input}
                    placeholder='First Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Last Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.input} 
                    style={{flex:1, flexDirection: 'row', }}
                    onPress={() => setShow(!show)}
                >
                    <View style = {{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width:"100%"}}>
                        <View style={{width: '80%'}}>
                            <TextInput
                                style={styles.input} 
                                placeholder={dob}
                                placeholderTextColor="#aaaaaa"
                                value={dob}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                                editable={false}
                            />
                        </View>
                        <IconButton
                            icon="calendar"
                            color= "#aaaaaa"
                            size={30}
                            onPress={() => setShow(!show)}
                        />
                    </View>                   
                </TouchableOpacity>
                <View >
                    {show && (
                        <DateTimePicker
                            mode =  { date }    
                            value = { date }
                            maximumDate={new Date()}
                            minimumDate={new Date(1960, 0, 1)}
                            onChange={(e) => {
                                var Date = e.nativeEvent.timestamp
                                var day = Date.getDate()
                                if(day < 10){
                                    day = '0' + day
                                }
                                var month = Date.getMonth() + 1
                                if(month < 10){
                                    month = '0' + month
                                }
                                var final = Date.getFullYear() + '-' + month + '-' + day
                                setDob(final)
                                setShow(false)
                            }}
                        />
                    )}
                </View>
                <View style={styles.genderButtonGroup}>
                    <Text style={styles.genderTitle}>Gender </Text>
                    <Text style={styles.genderText}>Male</Text>
                    <RadioButton
                      value="male"
                      status={ gender === 'male' ? 'checked' : 'unchecked' }
                      onPress={() => setGender('male')}
                      theme={{colors:{
                          accent: '#53469c',
                      }}}
                    />
                    <Text style={styles.genderText}>Female</Text>
                    <RadioButton
                      value="female"
                      status={ gender === 'female' ? 'checked' : 'unchecked' }
                      onPress={() => setGender('female')}
                      theme={{colors:{
                        accent: '#53469c',
                    }}}
                    />
                    <Text style={styles.genderText}>Other</Text>
                    <RadioButton
                      value="other"
                      status={ gender === 'other' ? 'checked' : 'unchecked' }
                      onPress={() => setGender('other')}
                      theme={{colors:{
                        accent: '#53469c',
                    }}}
                    />
                </View>

                <Text style={styles.sectionTitle}>Contact</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Phone No.'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setPhone(text)}
                    value={phone}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                <Text style={styles.sectionTitle}>Account</Text>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <View style={styles.terms}>
                    <Checkbox
                        style={styles.terms__checkbox}
                        status={terms ? 'checked' : 'unchecked'}
                        onPress={() => {setTerms(!terms);}}
                        theme={{
                            colors:{
                                accent: '#53469c'
                            }
                        }}
                    />
                    <Text style={styles.terms__text}>
                        I agree with the
                            <Text style={styles.terms__textLink} > terms and conditions</Text>
                    </Text> 
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Next Step</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    )
}