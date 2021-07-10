import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars'


export default function CalendarScreen({route, navigation}) {
    const doctor_id = route.params.doctor_id
    const [markedDates, setMarkedDates] = useState({}) 
    const [arr, setArr] = useState([])

    const updateDate = () => {
        var Dates = {}
        if (arr.length != 0){
            arr.forEach(date =>{
                Dates[date] = {selected: true}
            })
            setMarkedDates(Dates)
        }
        else{
            fetchData()
        }
    }

    const fetchData = () => {
        var today = new Date()
        const Data = []
        const unavailableDays = []
        const days = {'sun':0, 'mon':1, 'tue':2, 'wed':3, 'thu':4, 'fri':5, 'sat':6}
        

        fetch('https://pebble-test.herokuapp.com/doctors/' + doctor_id + '/availability')
            .then(response => response.json())
            .then(data => {
                for(const [key, value] of Object.entries(data[0].availability)){
                    if (!value.enabled){
                        unavailableDays.push(days[key])
                    }
                }
                for (var i = 1; i <= 30; i++){
                    var temp = today.setDate(today.getDate() + 1)
                    if (unavailableDays.includes(new Date(temp).getDay())){
                        continue
                    }
                    var day = new Date(temp).getDate()
                    if (day < 10){
                        day = '0'+ day
                    }
                    var month = new Date(temp).getMonth() + 1
                    if (month < 10){
                        month = '0'+ month
                    }
                    var year = new Date(temp).getFullYear()
                    var final = year + '-' + month + '-' + day
                    if(!Data.includes(final)){
                        Data.push(final)
                    }
                }
                setArr(Data)
            })
            .catch((error) => console.log(error))
    }
    
    useEffect(() => {
        updateDate()
    }, [arr])

    return (
        <View style={{ justifyContent: 'center'}}>
            <Text style= {{ textAlign:'center', fontSize: 25, fontWeight:'bold',margin: 50 }}>Select a Day</Text>
            <Calendar
                minDate = {new Date()}
                markedDates = {markedDates}
                onDayPress = {(day) => {navigation.navigate('Time', {day: day, doctor_id: doctor_id})}}
            />
        </View>
    )
}