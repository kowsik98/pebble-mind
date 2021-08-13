import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { ActivityIndicator, Surface } from 'react-native-paper'
import styles from './styles'

export default function DoctorPreview({route, navigation}) {
    const [docDetails, setDocDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchData = () => {
        if(docDetails.length === 0){
            fetch('https://pebble-test.herokuapp.com/doctors')
            .then(response => response.json())
            .then(data => {
                data.forEach(doc => {
                    if(doc.doctor_id === route.params.doctor_id){
                        setDocDetails(doc)
                        setLoading(false)
                    }
                })
            })
            .catch(error => console.log(error))
        }
        else{
            return
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            fetchData()
        }, [docDetails])
    )

    return (
        <>
            {
                !loading ? (
                    <ScrollView>
                        <View style={styles.doc__screen}>
                            <View style={styles.doc__container}>
                                <View style={styles.doc__imgcontainer}>
                                    <Image
                                        source={{uri: 'https://pebble-test.herokuapp.com/'+docDetails.image }}
                                        resizeMode="cover"
                                        style={styles.doc__image}
                                        />
                                </View>
                                <View style={styles.doc__title}>
                                    <Text style ={styles.doc__title_name}>Dr. {docDetails.first_name + ' ' + docDetails.last_name}</Text> 
                                    <Text style ={styles.doc__title_specs}>{docDetails.specialization}</Text> 
                                    <Text style ={styles.doc__title_exp}>Experience: {docDetails.experience} years</Text> 
                                    <Text style ={styles.doc__title_lang}>Languages: {docDetails.languages}</Text>
                                </View>
                            </View>
                            <View style={styles.doc__container2}>
                                <Text style={styles.doc__container2_title}>Speciality</Text>
                                <Text style={styles.doc__container2_stitle}>{route.params.department}</Text>

                                <Text style={styles.doc__container2_title}>Education</Text>
                                <Text style={styles.doc__container2_stitle}>{docDetails.credentials}</Text>

                                <Text style={styles.doc__container2_title}>About</Text>
                                <Text style={styles.doc__container2_stitle}>{docDetails.bio}</Text>

                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.doc__button}
                                    onPress={() => navigation.navigate('Select Day', {userID:route.params.userID, doctor_id: route.params.doctor_id, docDetails:docDetails})}
                                    >
                                    <Text style={styles.buttonTitle}>Check Availability </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>) : (
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center', fontSize:30}}>
                        <ActivityIndicator  animating={true} size='large' color='#189AB4'/>
                    </View>
                )
            }
        </>
    )
}
