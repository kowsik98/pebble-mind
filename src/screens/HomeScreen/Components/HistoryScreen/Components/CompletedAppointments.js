import React, { useState, useEffect} from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from '../../../styles'

export default function CompletedAppointment({userID}) {

    const [appointments, setAppointments] = useState([])
    const fetchData = () => {
        if(appointments.length === 0){
            fetch('https://pebble-test.herokuapp.com/users/'+userID+'/appointments')
                .then(response => response.json())
                .then(data => {
                    var temp = []
                    data.forEach((doc) => {
                        var docDate = new Date(Date.parse(doc.date))
                        if(new Date() > docDate){
                            temp.push(doc)
                        }
                    })
                    setAppointments(temp)
                })
                .catch(error => console.log(error))
        }
    }
    useEffect(() => {
        fetchData()
    }, [appointments])

    return (
      <ScrollView>
        {
            appointments.map((value, key) => (
                <TouchableOpacity
                    key = {key}    
                >
                    <View style={styles.card}>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>
                                {value.type}
                            </Text>
                            <Text style={styles.cardDetails}>
                                {new Date(Date.parse(value.date)).toDateString() + ' - ' + value.time}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))
        }
      </ScrollView>
    );
}