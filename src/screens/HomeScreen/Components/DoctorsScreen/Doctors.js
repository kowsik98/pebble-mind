import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../styles'

export default function Doctors({route, navigation}){
    const [docData, setDocData] = useState([])

    const fetchData = () => {
        if (docData.length === 0){
            fetch('https://pebble-test.herokuapp.com/doctors')
                .then(response => response.json())
                .then(data => {
                    setDocData(data)
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
        <ScrollView>
            {
                docData.map((value, key) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Calendar', { doctor_id: value.doctor_id, userID: route.params.userID })}
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
    )
}


