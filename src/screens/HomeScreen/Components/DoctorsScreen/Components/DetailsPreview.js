import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { List, Surface } from 'react-native-paper'
import styles from './styles'
import AwesomeAlert from 'react-native-awesome-alerts'
import CryptoJS from 'crypto-js'

export default function DetailsPreview({route, navigation}) {
    const details = route.params
    const [docDetails, setDocDetails] = useState({})
    const [showAlert, setShowAlert] = useState(false)
    const [JWTtoken, setJWTtoken] = useState('')

    var temp = details.time.replace(" ", ":00 ")
    if (temp.slice(-2, temp.length) === 'PM'){
        if (parseInt(temp.slice(0,2)) !== 12){
            var replaceVal = parseInt(temp.slice(0,2)) + 12
            var time = replaceVal + ':' + temp.slice(3, temp.length-2)
        }
        else{
            var replaceVal = temp.slice(0,2)
            var time = replaceVal + ':' + temp.slice(3, temp.length-2)
        }
    }
    else{
        var replaceVal = temp.slice(0,2)
        var time = replaceVal + ':' + temp.slice(3, temp.length-2)
    }

    const getDoctorData = () => {
        fetch('https://pebble-test.herokuapp.com/doctors')
            .then(response => response.json())
            .then(data => {
                data.forEach(doc => {
                    if(doc.doctor_id === route.params.doctor_id){
                        setDocDetails(doc)
                    }
                })
            })
    }

    const base64url = (source) => {
        var encodedSource = CryptoJS.enc.Base64.stringify(source)
        encodedSource = encodedSource.replace(/=+$/, '')
        encodedSource = encodedSource.replace(/\+/g, '-')
        encodedSource = encodedSource.replace(/\//g, '_')
        return encodedSource;
    }

    const generateJWT = () => {
        if (JWTtoken === ''){
            const header = {
                "alg": "HS256",
                "typ": "JWT"
            } 
            var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header))
            var encodedHeader = base64url(stringifiedHeader)
            const today = new Date()
            const expiry = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate()+7))
            const data = {
                "iss": "rcKAaq76RAekpvYZjB5Stw",
                "exp": expiry
            }
            var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data))
            var encodedData = base64url(stringifiedData)
            var token = encodedHeader + "." + encodedData
            var secret = 'yGZ1JGkJnRTJzQCu39UmVWzTjvx75XRqJMAd'
            var signature = CryptoJS.HmacSHA256(token, secret)
            signature = base64url(signature)
            var signedToken = token + "." + signature
            setJWTtoken(signedToken)
        }      
    }

    const createZoomMeeting = () => {
        if(JWTtoken !== ''){
            const randomNum = Math.floor(Math.random() * 90000) + 10000;
            const zoom_user_id = 'kwmddd1_ScCXUkF4Ncl-eA'
            const zoomMeetingDetails = {
                topic: "Therapy Session",
                type: "2",
                start_time: details.date + "T" + time,
                timezone: "Asia/Calcutta",
                duration: "60",
                password: randomNum
            }
            fetch('https://api.zoom.us/v2/users/'+ zoom_user_id +'/meetings', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer '+ JWTtoken
                },
                body: JSON.stringify(zoomMeetingDetails)
            })
            .then(response => response.json())
            .then(data => {
                bookOnlineAppointment(data)
            })
            .catch(error => console.log(error))
        }
        else{
            generateJWT()
        }
    }

    const bookOnlineAppointment = (zoomMeetingData) => {
        const data = {       
            doctor_id: details.doctor_id,
            user_id : details.userId,
            appointmentDetails: {
                date: details.date,
                time: details.time,
                type: "Therapy",
                mode: details.mode
            },
            patientDetails: {
                name: details.patientName,
                age: details.patientAge,
                gender: details.patientGender
            },
            price: "1000",
            payment: false,
            meeting_id: zoomMeetingData.id,
            password: zoomMeetingData.password,
            join_url: zoomMeetingData.join_url
        }
        fetch('https://pebble-test.herokuapp.com/doctors/'+ details.doctor_id + '/appointments', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                setShowAlert(true)
            })
            .catch((error) => console.log(error))
    }     
    
    const bookInClinicAppoinment = () => {
        const data = {
            doctor_id: details.doctor_id,
            user_id : details.userId,
            appointmentDetails: {
                date: details.date,
                time: details.time,
                type: "Therapy",
                mode: details.mode
            },
            patientDetails: {
                name: details.patientName,
                age: details.patientAge,
                gender: details.patientGender
            },
            price: "1000",
            payment: false,
        }

        fetch('https://pebble-test.herokuapp.com/doctors/'+ details.doctor_id + '/appointments', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                setShowAlert(true)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        generateJWT()
        getDoctorData()
    }, [ JWTtoken ])

    return (
        <ScrollView>
            <View style={{flex:1,marginTop: 20, alignItems:'center',}}>
                <Surface style={styles.det__surface}>
                    <Text style= {{ textAlign:'center', fontSize: 23, fontWeight:'bold',margin: 10 }}>Details</Text>
                    <View style={{flex:2, flexDirection: 'column', flexWrap: 'nowrap',width:'100%'}}>
                        <Text style={styles.det__title}>Patient</Text>
                        <Text style={styles.det__subtitle}>{details.patientName}</Text>
                        <Text style={styles.det__subtitle}>{details.patientAge+ ' | '+ details.patientGender}</Text>
                        <Text style={styles.det__title}>Doctor</Text>
                        <Text style={styles.det__subtitle}>{docDetails.first_name + ' ' + docDetails.last_name}</Text>
                        <Text style={styles.det__subtitle}>{docDetails.credentials}</Text>
                        <Text style={styles.det__title}>Appointment</Text>
                        <Text style={styles.det__subtitle}>{details.mode}</Text>
                        <Text style={styles.det__subtitle}>{new Date(Date.parse(details.date)).toDateString()}</Text>
                        <Text style={styles.det__subtitle}>{'At ' + details.time}</Text>
                    </View>
                </Surface>
                <Surface style={styles.det__surface2} >
                    <View style={{flex:2, flexDirection: 'column', flexWrap: 'nowrap',width:'100%'}}>
                        <List.Item
                            title="Payable amount"
                            description="(Inc. Tax)"
                            left={props => <List.Icon {...props} icon="credit-card-outline"/>}
                            right={props => <Text {...props} style={{textAlignVertical:'center'}}>₹ 1000</Text>}
                        />
                    </View>
                </Surface>
                <TouchableOpacity
                    style={styles.det__button2}
                    onPress={() =>{
                        if(details.mode === 'Online'){
                            createZoomMeeting()
                        }
                        else{
                            bookInClinicAppoinment()
                        }
                    }}>
                    <Text style={styles.det__buttonTitle}>Confirm Appointment</Text>
                </TouchableOpacity>
            </View>
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Success!!"
                message="Your appointment has been confirmed"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={false}
                showConfirmButton={true}
                confirmText="OK"
                confirmButtonColor="#189AB4"
                onConfirmPressed={() => {
                    setShowAlert(false)
                    navigation.navigate('Feed')
                }}
            />
        </ScrollView>
    )
}