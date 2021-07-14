import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView} from 'react-native'
import { Button, Caption } from 'react-native-paper'
import styles from './styles'

export default function Time({route, navigation}) {
    const date = route.params.day.dateString
    const day = new Date(route.params.day.timestamp).getDay()
    const doctor_id = route.params.doctor_id
    const [bookedTimings, setBookedTimings] = useState([])
    const [availableTimings, setAvailableTimings] = useState([])
    const days = {0:'sun', 1:'mon', 2:'tue', 3:'wed', 4:'thu', 5:'fri', 6:'sat'}

    const fetchData = () => {
        if(bookedTimings.length === 0){
            fetch('https://pebble-test.herokuapp.com/doctors/' + doctor_id + '/appointments')
                .then(response => response.json())
                .then(data => {
                    var tempTimings = []
                    data.forEach((doc) => {
                        var check = new Date(Date.parse(doc.date)).toISOString().slice(0, 10)
                        if(date === check){
                            tempTimings.push(doc.time)
                        }                        
                    })
                    if (tempTimings.length !== 0){
                        setBookedTimings(tempTimings)
                    }
                    if (availableTimings.length === 0) {
                        fetch('https://pebble-test.herokuapp.com/doctors/' + doctor_id + '/availability')
                        .then(response => response.json())
                        .then(data => {
                            const timings = []
                            var tempValues = []
                            var temp = []
                            for(const [key, value] of Object.entries(data[0].availability)){
                                if(key === days[day]){
                                    timings.push(...value.timing)
                                }
                            }
                            timings.forEach((value, index) => {
                                if (index % 2 == 0){
                                    var lowerLimit = value
                                    var upperLimit = timings[index+1]
                                    //check for decimal value
                                    while(lowerLimit <= upperLimit){
                                        tempValues.push(lowerLimit)
                                        ++lowerLimit
                                    }
                                }
                            })
                            tempValues.forEach(val => {
                                if (val >= 13){
                                    val = val - 12
                                    if (val % 1 === 0){
                                        if (val < 10){
                                            val = '0' + val + ':00 PM' 
                                        }
                                        else{
                                            val = val + ':00 PM'
                                        } 
                                    }
                                    else{
                                        val = val + (val % 1) +' PM'
                                    }
                                }
                                else if (val < 12) {
                                    if (val % 1 === 0){
                                        if (val < 10){
                                            val = '0' + val + ':00 AM' 
                                        }
                                        else{
                                            val = val + ':00 AM'
                                        }
                                    }
                                    else{
                                        val = val + (val % 1) +' AM'
                                    }                                    
                                }
                                else{
                                    if (val % 1 === 0){
                                        val = val + ':00 PM'
                                    }
                                    else{
                                        val = val + (val % 1) +' PM'
                                    }  
                                }
                                if (tempTimings.includes(val)){
                                    return false
                                }
                                else{
                                    temp.push(val)
                                }
            
                            })
                            setAvailableTimings(temp)
                        })
                    }
                    
                })
                .catch((error) => console.log(error))
        }     
    }

    useEffect(() => {
        fetchData()
    }, [ bookedTimings, availableTimings ])

    return (
        <ScrollView>
        <View style={styles.conatiner}>
            <Text style= {{ textAlign:'center', fontSize: 25, fontWeight:'bold',marginTop: 50 }}>Select a Time</Text>
            <Caption style={{ marginBottom: 50 }}>Duration: 1 Hour</Caption>
            {
                availableTimings.map((value, key) => (
                    <Button 
                        key = { key }
                        mode="outlined"
                        style = {styles.time}
                        theme={{
                            colors:{
                                primary: "#006BFF",
                            },
                        }}
                        onPress={() => navigation.navigate('Details', {date: date, time: value, doctor_id: doctor_id, userID: route.params.userID})}
                    >
                        { value }
                    </Button>
                ))
            }
            {
                bookedTimings.map((value, key) => (
                    <Button 
                        key = { key }
                        disabled = "true"
                        mode="contained"
                        style = {styles.time}
                        theme={{
                            colors:{
                                primary: "#FF0000",
                            },
                        }}
                        >
                        { value } (Booked)
                    </Button>
                ))
            }
        </View>
        </ScrollView>
    )
}
