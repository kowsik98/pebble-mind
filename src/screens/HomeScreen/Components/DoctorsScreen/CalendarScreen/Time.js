import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Button, Caption } from 'react-native-paper'
import styles from './styles'

export default function Time({route, navigation}) {
    const date = route.params.day.dateString
    const day = new Date(route.params.day.timestamp).getDay()
    const doctor_id = route.params.doctor_id
    const [booked, setBooked] = useState([])
    const [availableTimings, setAvailableTimings] = useState([])
    const days = {0:'sun', 1:'mon', 2:'tue', 3:'wed', 4:'thu', 5:'fri', 6:'sat'}

    const fetchData = () => {
        fetch('https://pebble-test.herokuapp.com/doctors/' + doctor_id + '/availability')
            .then(response => response.json())
            .then(data => {
                const tempValues = []
                var temp = []
                for(const [key, value] of Object.entries(data[0].availability)){
                    if(key === days[day]){
                        tempValues.push(...value.timing)
                    }
                }
                tempValues.forEach(val => {
                    if (booked.includes(val)){
                        return false
                    }
                    if (val > 12){
                        val = val -12
                        val = val +'.00 PM'
                        if (booked.includes(val)){
                            return false
                        }
                        else{
                            temp.push(val)
                        }
                    }
                    else if (val === 12) {
                        val = val +'.00 PM'
                        if (booked.includes(val)){
                            return false
                        }
                        else{
                            temp.push(val)
                        }
                    }
                    else{
                        val = val + '.00 AM'
                        if (booked.includes(val)){
                            return false
                        }
                        else{
                            temp.push(val)
                        }
                    }
                })
                setAvailableTimings(temp)
            })
    }

    useEffect(() => {
        fetchData()
    }, [ availableTimings ])

    return (
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
                        onPress={() => console.log("Time Selected is " + value)}
                    >
                        { value }
                    </Button>
                ))
            }
            {/* {
                booked.map((value, key) => (
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
            } */}
        </View>
    )
}
