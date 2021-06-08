import React, {useState} from 'react';
import { View, Text,Image, Button, ScrollView,TouchableOpacity } from 'react-native';
import styles from '../../styles'
import { firebase } from '../../../../firebase/config'

export default function Doctors({navigation}){

    const docRef = firebase.firestore().collection('doctors')
    const [docNames, setDocNames] = useState([])
    const [docSpecs, setDocSpecs]= useState([])
    
    docRef.get()
    .then(response => {
        var tempNames = []
        var tempSpecs = []
        response.forEach(doc => {
            tempNames.push(doc.data().first_name) 
            tempSpecs.push(doc.data().specialization)  
        })
        setDocNames(tempNames)
        setDocSpecs(tempSpecs)
    })

    return(
        <ScrollView>
            {
                docNames.map((value, index) =>(
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Calendar')}
                        key ={index}>
                        <View style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image
                                    source={require('../../../../../assets/shoes3.jpg')}
                                    resizeMode="cover"
                                    style={styles.cardImg}
                                />
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>
                                    {value}
                                </Text>
                                <Text style={styles.cardDetails}>
                                    {docSpecs[index]}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))
            }
            
        </ScrollView>
    )
}


