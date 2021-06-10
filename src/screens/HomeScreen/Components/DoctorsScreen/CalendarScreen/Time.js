import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import { Button, Caption } from 'react-native-paper';
import styles from './styles'
import { firebase } from '../../../../../firebase/config'

export default function Time({route, navigation}) {
    const date = route.params.day.dateString
    const day = new Date(route.params.day.timestamp).getDay()-1
    const docID = route.params.id
    const dataRef = firebase.firestore().collection('doctors').doc(docID).collection('availability')
    const appRef = firebase.firestore().collection('appointments')
    const [booked, setBooked] = useState([])
    const [range, setRange] = useState([])    
    const [appSearched, setAppSearched] = useState(0)

    const splitTimings = () => {
        if(appSearched){
            dataRef.get()
            .then(response => {
            var temp = []
            response.forEach(doc => {
                if(doc.id == day){
                    var tempValues = []
                    const timings =  doc.data().timing
                    timings.forEach((value, index) => {
                        if (index % 2 == 0){
                            var lowerLimit = value
                            var upperLimit = timings[index+1]
                            while(lowerLimit <= upperLimit){
                                tempValues.push(lowerLimit)
                                ++lowerLimit
                            }
                        }
                    })
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
                }
            })
            setRange(temp)
        })
        }
        else{
            fetchData()
        }    
    }

    const fetchData = () => {
        appRef.doc(docID).get()
        .then(response => {
            var tempVal = []
            var dates = response.data().dates
            if (dates.length == 0){
                return false
            }
            else{
                dates.forEach(Time => {
                    var day = new Date(Time.toDate()).getDate()
                    if (day < 10){
                        day = '0'+ day
                    }
                    var month = new Date(Time.toDate()).getMonth() + 1
                    if (month < 10){
                        month = '0'+ month
                    }
                    var year = new Date(Time.toDate()).getFullYear()
                    var final = year + '-' + month + '-' + day
                    if (final == date) {
                        var time = new Date(Time.toDate()).getHours()
                        if (time > 12){
                            time = time - 12
                            time = time + '.00 PM'
                            tempVal.push(time)
                        }
                        else{
                            time = time + '.00 AM'
                            tempVal.push(time)
                        }
                    }
                })
            }
            setBooked(tempVal)
        })
        setAppSearched(1)
    }

    useEffect(() => {
        splitTimings()
    }, [ booked ])

    return (
        <View style={styles.conatiner}>
            <Text style= {{ textAlign:'center', fontSize: 25, fontWeight:'bold',marginTop: 50 }}>Select a Time</Text>
            <Caption style={{ marginBottom: 50 }}>Duration: 1 Hour</Caption>
            {
                range.map((value, key) => (
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
            {
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
            }
        </View>
    )
}
