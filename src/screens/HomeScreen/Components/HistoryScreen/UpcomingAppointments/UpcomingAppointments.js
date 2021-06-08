import React, {useState} from 'react';
import { View, Text,Image, Button, ScrollView,TouchableOpacity,date } from 'react-native';
import styles from '../../../styles'

import {firebase} from '../../../../../firebase/config'



export default function upcomingAppointments(){
    const userId = '1tGGpOFo4hctERdQekcreZ47G4s2' 
    const dataRef = firebase.firestore().collection('users').doc(userId).collection('appointments')
    const [docID, setDocID] = useState([])
    const [appID,setAppId] = useState([])
    const [price,setPrice] = useState([])
    const [type,setType] = useState([])
    const [date,setDate] = useState([])

    dataRef.get()
    .then(response => {
        var tempDocID = []
        var tempAppID = []        
        var tempPrice = []
        var tempType = []
        var tempDate = []
        response.forEach(doc => {
            tempDocID.push(doc.data().doc_id)
            tempAppID.push(doc.data().app_id)
            tempPrice.push(doc.data().price)
            tempType.push(doc.data().type)
            tempDate.push(doc.data().date)
        })
        setDocID(tempDocID)
        setAppId(tempAppID)
        setPrice(tempPrice)
        setType(tempType)
        setDate(tempDate)
    })

    console.log(docID, appID, price, type, date )

    return (
      <ScrollView>
          {
              docID.map((value,index) => (
          
        <TouchableOpacity>
            <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                    <Image
                    source={require('../../../../../../assets/shoes3.jpg')}
                    resizeMode="cover"
                    style={styles.cardImg}
                    />
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>
                        {value}
                    </Text>
                    <Text style={styles.cardDetails}>
                        {appID[index]}
                    </Text>
                    <Text style={styles.cardDetails}>
                        {price[index]}
                    </Text>
                    <Text style={styles.cardDetails}>
                        {type[index]}
                    </Text>
                    
                </View>
            </View>
        </TouchableOpacity>
              ))
         }
      </ScrollView>
    )
        }
  