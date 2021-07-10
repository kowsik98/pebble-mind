import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { IconButton } from 'react-native-paper'
import RNDateTimePicker from '@react-native-community/datetimepicker'


export default function RegistrationScreen({navigation}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('D.O.B')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [show, setShow] = useState(false)
    const [date, setDate] = useState(new Date())

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }

        const data = new FormData()

        data.append("first_name", firstName)
        data.append("last_name", lastName)
        data.append("dob", dob)
        data.append("email", email)
        data.append("password", password)
        data.append("verified", false)

        fetch('https://pebble-test.herokuapp.com/login', {
            method: 'POST',
            body: data
        })
        .then(response => 
            response.json()
        )
        .then(data => {
            console.log('Success:', data);
            navigation.navigate('Login')
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                />
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
                        <RNDateTimePicker
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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}