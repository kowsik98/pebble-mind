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
        docRef.doc(id).collection('availability').get()
        .then(response => {
            const data = []
            response.forEach(time => {                
            var temp = time.data().timing
            temp.forEach(date => {
                var day = new Date(date.toDate()).getDate()
                if (day < 10){
                    day = '0'+ day
                }
                var month = new Date(date.toDate()).getMonth() + 1
                if (month < 10){
                    month = '0'+ month
                }
                var year = new Date(date.toDate()).getFullYear()
                var final = year + '-' + month + '-' + day
                if (!data.includes(final)){
                    data.push(final)
                }
            })
            })
            setArr(data)
        })
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