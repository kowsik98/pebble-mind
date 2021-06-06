import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import { Button, Caption } from 'react-native-paper';
import styles from './styles'
import { firebase } from '../../../../../firebase/config'

export default function Time({route, navigation}) {
    const date = route.params.day.dateString
    const id = route.params.id
    const dataRef = firebase.firestore().collection('doctors').doc(id).collection('availability')
    const [limits, setLimits] = useState([]) 
    const [range, setRange] = useState([])

    const splitTimings = () => {
        if (limits.length != 0) {
            var tempValues = []
            var separateValues = []
            limits.forEach((value, index) => {
                if (index % 2 == 0){
                    var lowerLimit = value
                    var upperLimit = parseInt(limits[index+1])
                    while(lowerLimit <= upperLimit){
                        tempValues.push(lowerLimit)
                        ++lowerLimit
                    }
                }
            })
            tempValues.forEach(val => {
                if (val > 12){
                    val = val -12
                    val = val +'.00 PM'
                    separateValues.push(val)
                }
                else{
                    val = val + '.00 AM'
                    separateValues.push(val)
                }
            })
            setRange(separateValues)
        }
        else{
            fetchData()
        }
    }

    const fetchData = () => {
        dataRef.where("date", "==", date).get()
        .then(response => {
            var values = []
            response.forEach(doc => {
                var timing = doc.data().timing
                timing.forEach(time => {
                   var temp = new Date(time.toDate()).getHours()
                   values.push(temp)
                })
            })
            setLimits(values)
        })
    }

    useEffect(() => {
        splitTimings()
    }, [limits])

    return (
        <View style={styles.conatiner}>
            <Text style= {{ textAlign:'center', fontSize: 25, fontWeight:'bold',marginTop: 50 }}>Select a Time</Text>
            <Caption style={{ marginBottom: 50 }}>Duration: 1 Hour</Caption>
            {
                range.map((value, key) =>(
                    <Button 
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
                </Button>))
            }
            
        </View>
    )
}
