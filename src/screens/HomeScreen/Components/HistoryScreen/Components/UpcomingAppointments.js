import React, { useState, useEffect} from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from '../../../styles'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'

export default function UpcomingAppointments({userID, navigation}){
    
    const [appointments, setAppointments] = useState([])
    const fetchData = () => {
        fetch('https://pebble-test.herokuapp.com/user/'+userID+'/appointments')
            .then(response => response.json())
            .then(data => {
                var temp = []
                data.forEach((doc) => {
                    var docDate = new Date(Date.parse(doc.date))
                    if(new Date() <= docDate){
                        temp.push(doc)
                    }
                })
                if(temp.length !== appointments.length){
                    setAppointments(temp)
                }
            })
            .catch(error => console.log(error))
    }
    useFocusEffect(
        React.useCallback(() => {
            fetchData()
        }, [appointments])
    )

    return (
      <ScrollView>
        {
            appointments.map((value, key) => (
                <TouchableOpacity
                    key = {key}   
                    onPress={() => navigation.navigate('AppointmentDetails' ,{appointmentDetails: value})} 
                >
                    <View style={styles.card}>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>
                                {value.type}
                            </Text>
                            <Text style={styles.cardDetails}>
                                {new Date(Date.parse(value.date)).toDateString() + ' at ' + value.time}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))
        }
      </ScrollView>
    )
  }