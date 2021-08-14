import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView} from 'react-native'
import { ActivityIndicator, Button, Caption } from 'react-native-paper'
import styles from './styles'

export default function Time({route, navigation}) {
    console.log(route)
    const date = route.params.day.dateString
    const day = new Date(route.params.day.timestamp).getDay()
    const doctor_id = route.params.doctor_id
    const mode = route.params.mode
    const [bookedTimings, setBookedTimings] = useState([])
    const [availableTimings, setAvailableTimings] = useState([])
    const days = {0:'sun', 1:'mon', 2:'tue', 3:'wed', 4:'thu', 5:'fri', 6:'sat'}
    const [loading, setLoading] = useState(true)

    var displayDay = new Date(route.params.day.timestamp).getDate()
    if  (displayDay < 9) {
        displayDay = '0'+ displayDay
    }
    var displayMonth = new Date(route.params.day.timestamp).getMonth()
    if (displayMonth < 10){
        displayMonth = '0' + displayMonth
    }
    const displayYear = new Date(route.params.day.timestamp).getFullYear()

    const fetchData = () => {
        if(bookedTimings.length === 0){
            fetch('https://pebble-test.herokuapp.com/doctors/' + doctor_id + '/appointments')
                .then(response => response.json())
                .then(data => {
                    var tempTimings = []
                    data.forEach((doc) => {
                        var check = new Date(Date.parse(doc.appointmentDetails.date)).toISOString().slice(0, 10)
                        if(date === check){
                            tempTimings.push(doc.appointmentDetails.time)
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
                            if(mode === 'Online'){
                                for(const [key, value] of Object.entries(data[0].onlineAvailability)){
                                    if(key === days[day]){
                                        timings.push(...value.timing)
                                    }
                                }
                            }else{
                                for(const [key, value] of Object.entries(data[0].inclinicAvailability)){
                                    if(key === days[day]){
                                        timings.push(...value.timing)
                                    }
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
                            setLoading(false)
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
        <>
            {
                !loading ? (
                    <ScrollView>
                    <View style={styles.doc__screen}>
                        <View style={styles.doc__container2}>
                            <Text style={styles.cal__container_title}>Selected Date:</Text>
                            <Text style={styles.cal__container_stitle1}>{days[day].charAt(0).toUpperCase()+days[day].slice(1)+' - '+displayDay + '/'+ (parseInt(displayMonth)+ 1) +'/'+displayYear}</Text>
                            <Text style={styles.cal__container_stitle}>Duration: 1 Hour</Text> 
                            <Text style={styles.cal__container_stitle}>Mode: {route.params.mode}</Text> 
                        </View>
                    </View>
                    <View style={{flex:1, alignItems: 'center', marginTop:10, borderRadius: 10}}>
                    <View style={styles.container}>
                        {
                            availableTimings.length !== 0 ? (
                                <>
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
                                        onPress={() => navigation.navigate('Patient Details', {date: date, time: value, doctor_id: doctor_id, userID: route.params.userID, mode: mode})}
                                        >
                                            { value }
                                        </Button>
                                    ))
                                }
                                </>
                            ) : (
                                <View>
                                    <Text style={{fontSize:15}}>No Slots Available</Text>
                                </View>
                            )
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
                    </View>
                    </ScrollView>
                ) : (
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <ActivityIndicator  animating={true} size='large' color='#189AB4'/>
                    </View>
                )
            }
        </>
        
    )
}
