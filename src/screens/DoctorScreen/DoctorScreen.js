import React, { useState, useEffect } from 'react'
import { Text, View, FlatList } from 'react-native'
import { firebase } from '../../firebase/config'

export default function DoctorScreen() {

    const docRef = firebase.firestore().collection('doctors')
    const [doctors, setDoctors] = useState([])
    const [availability, setAvailability] = useState([])

    useEffect(() => {
        docRef.onSnapshot(querySnapshot => {
            const docData = []
            const timeData = []
            querySnapshot.forEach(doc => {
                docData.push(doc.data())
                var id  = doc.id
                var tempData = []
                docRef.doc(id)
                .collection('availability')
                .orderBy('timing', 'asc')
                .get()
                .then(snapshot => {
                    snapshot.forEach(time => {
                        tempData.push(time.data())
                    })
                })
                timeData.push(tempData)
            });
            setAvailability(timeData)
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
                    {item.education}
                </Text>
            </View>
        )
    }

    const renderTime = ({item}) => {
        return (
            <View>
                <Text>
                    {new Date(item.timing.toDate()).toDateString()}
                    {new Date(item.timing.toDate()).toTimeString()}
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