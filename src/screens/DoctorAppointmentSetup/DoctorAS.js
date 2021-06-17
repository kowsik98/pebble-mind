import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, Alert } from 'react-native'
import { firebase } from '../../firebase/config'

export default function DoctorAppointmentSetup() {

    const docRef = firebase.firestore().collection('doctors')
    const [doctors, setDoctors] = useState([])
    const [availability_time, setAvailability] = useState([])

    useEffect(() => {
        docRef.onSnapshot(querySnapshot => {
            const docData = []
            const availability_obj = []
            querySnapshot.forEach(doc => {
                docData.push(doc.data())
                var id  = doc.id
                const tempData = []
                docRef.doc(id)
                .collection('availability')
                .get()
                .then(timeSnapshot => {
                    timeSnapshot.forEach(day => {
                        tempData.push(day.data())                    
                    })
                    availability_obj.push(tempData)                   
                })
        });
        setAvailability(availability_obj) 
        setDoctors(docData)
    },
    error => {
        console.log(error)
    })
    }, [])

    const renderData = ({item}) => {
        return (
            <View >
                <Text>
                    {item.name},
                    {item.specialization}
                </Text>
            </View>
        )
    }

    const renderTime = ({item}) => {
        return (
            <View>
                <Text>
                    {item.from}
                    {item.to}
                </Text>
            </View>
        )
    }


    return (
        <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Text>Doctors</Text>
            { doctors && (
                <View>
                    <FlatList
                        data={doctors}
                        renderItem={renderData}
                        
                    />
                    
                </View>
                
            )}

                        
        </View>
    )
}