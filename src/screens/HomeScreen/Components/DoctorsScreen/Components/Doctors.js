import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import styles from '../../../styles'

export default function Doctors({route, navigation}){
    const [docData, setDocData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        if (docData.length === 0){
            fetch('https://pebble-test.herokuapp.com/doctors')
                .then(response => response.json())
                .then(data => {
                    setDocData(data)
                    setLoading(false)
                })
                .catch((error) => {
                    alert('Error:', error);
                }); 
        }
    }

    useEffect(() => {
        fetchData()
    }, [docData])

    return(

        <>
            {
                !loading ? (
                    <ScrollView>
                        {
                            docData.map((value, key) => (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Doctor Details', { doctor_id: value.doctor_id, userID: route.params.userID, department:route.params.department })}
                                    key = {key}
                                >
                                    <View style={styles.card}>
                                        <View style={styles.cardImgWrapper}>
                                            <Image
                                                source={{uri: 'https://pebble-test.herokuapp.com/'+value.image }}
                                                resizeMode="cover"
                                                style={styles.cardImg}
                                            />
                                        </View>
                                        <View style={styles.cardInfo}>
                                            <Text style={styles.cardTitle}>
                                                {'Dr. '+ value.first_name +' '+ value.last_name}
                                            </Text>
                                            <Text style={styles.cardDetails}>
                                                {value.credentials}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                ) : (
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center', fontSize:30}}>
                        <ActivityIndicator  animating={true} size='large' color='#189AB4'/>
                    </View>
                )
            }
        </>
        )
}


