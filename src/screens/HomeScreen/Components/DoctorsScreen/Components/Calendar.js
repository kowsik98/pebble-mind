import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { ActivityIndicator, Switch, RadioButton } from 'react-native-paper'
import styles from './styles'


export default function CalendarScreen({route, navigation}) {
    const doctor_id = route.params.doctor_id
    const [markedDates, setMarkedDates] = useState({}) 
    const [arr, setArr] = useState([])
    const [loading, setLoading] = useState(true)
    const [mode, setMode] = useState('Online')

    const modeChange = (modeVal) => {
        if (mode !== modeVal) {
            setMode(modeVal)
        } 
        fetchData(modeVal)
    }

    const updateDate = () => {
        var Dates = {}
        if (arr.length != 0){
            arr.forEach(date =>{
                Dates[date] = {selected: true}
            })
            setMarkedDates(Dates)
            setLoading(false)
        }
        else{
            fetchData(mode)
        }
    }

    const fetchData = (modeVal) => {
        setLoading(true)
        var today = new Date()
        const Data = []
        const unavailableDays = []
        const days = {'sun':0, 'mon':1, 'tue':2, 'wed':3, 'thu':4, 'fri':5, 'sat':6}
        

        fetch('https://pebble-test.herokuapp.com/doctors/' + doctor_id + '/availability')
            .then(response => response.json())
            .then(data => {
                if (modeVal === 'Online'){
                    for(const [key, value] of Object.entries(data[0].onlineAvailability)){
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
                }
                else if (modeVal === 'In Clinic'){
                    for(const [key, value] of Object.entries(data[0].inclinicAvailability)){
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
                }
                else{
                    setMode('Online')
                }
            })
            .catch((error) => console.log(error))
    }
    
    useEffect(() => {
        updateDate()
    }, [arr, mode])

    return (
        <View style={styles.cal__container}>
            <ScrollView>
            <View style={styles.doc__screen}>
                <View style={styles.doc__container2}>
                    <Text style={styles.cal__container_title}>Appointment with:</Text> 
                    <Text style={styles.cal__container_stitle1}>Dr. {route.params.docDetails.first_name+ ' '+ route.params.docDetails.last_name}</Text>
                    <Text style={styles.cal__container_stitle}>{route.params.docDetails.credentials}</Text>
                    <Text style={styles.cal__container_stitle}>Experience: {route.params.docDetails.experience} years</Text>
                </View>
            </View>
            <View style={styles.cal__switchContainer}>
                <Text style={styles.cal__switchContainer_text}>Mode of Appointment:</Text>
                <View style={styles.cal__switchContainer_button}>
                    <RadioButton 
                        value="Online" 
                        status={ mode === 'Online' ? 'checked' : 'unchecked' }
                        onPress={() => {
                            setMode('Online')
                            modeChange('Online')
                        }}
                        theme={{
                            colors:{
                                accent: '#189AB4',
                            }
                        }}
                    />
                    <Text style={styles.cal__switchContainer_label}>Online</Text>
                </View>
                <View style={styles.cal__switchContainer_button}>
                    <RadioButton 
                        value="In Clinic" 
                        status={ mode === 'In Clinic' ? 'checked' : 'unchecked' }
                        onPress={() => {
                            setMode('In Clinic')
                            modeChange('In Clinic')
                        }}
                        theme={{
                            colors:{
                                accent: '#189AB4',
                            }
                        }}
                    />
                    <Text style={styles.cal__switchContainer_label}>In Clinic</Text>
                </View>
            </View>
            {   
                !loading ? (
                    <>
                        <View style={styles.cal__calContainer}>
                            <Calendar
                                style={{borderRadius: 5}}
                                minDate = {new Date()}
                                markedDates = {markedDates}
                                onDayPress = {(day) => {navigation.navigate('Select Time', {day: day, doctor_id: doctor_id, userID: route.params.userID, mode: mode})}}
                            />
                        </View>
                    </>
                ) : (
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center', margin: '35%'}}>
                        <ActivityIndicator  animating={true} size='large' color='#189AB4'/>
                    </View>
                ) 
            }
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center', height: 35, marginTop: 30}}>
                <Text style={styles.cal__legend}></Text>
                <Text style={{fontSize: 17}}>   Available Days</Text>
            </View>
            </ScrollView>
        </View>
    )
}