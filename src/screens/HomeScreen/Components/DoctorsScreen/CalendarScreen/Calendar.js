import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { firebase } from '../../../../../firebase/config'


export default function CalendarScreen({navigation}) {
    const docRef = firebase.firestore().collection('doctors')
    const [markedDates, setMarkedDates] = useState({}) 
    const [arr, setArr] = useState([])
    const id = 'HGvRVq82KrgRyViMfDxR'

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
        const data = []
        for (var i = 1; i <= 30; i++){
            var temp = today.setDate(today.getDate() + 1)
            // console.log(new Date(temp).getDate())
            if (new Date(temp).getDay() == 0 || new Date(temp).getDay() == 6){
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
            if(!data.includes(final)){
                data.push(final)
            }
        }
        setArr(data)
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
                onDayPress = {(day) => {navigation.navigate('Time', {day: day, id: id})}}
            />
        </View>
    )
}