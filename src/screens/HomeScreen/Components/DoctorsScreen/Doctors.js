import React, {useState} from 'react';
import { View, Text,Image, Button, ScrollView,TouchableOpacity } from 'react-native';
import styles from '../../styles'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ButtonGroup } from 'react-native-elements/dist/buttons/ButtonGroup';
import { StyleSheet } from 'react-native';

export default function Doctors({navigation}){
    
    return(
        <ScrollView>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Calendar')}>
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
                            MidBlazzer 77 Vintage
                        </Text>
                        <Text style={styles.cardDetails}>
                            "So many shoes but only two feet"
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>


            <TouchableOpacity>
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
                            MidBlazzer 77 Vintage
                        </Text>
                        <Text style={styles.cardDetails}>
                            "So many shoes but only two feet"
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
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
                            MidBlazzer 77 Vintage
                        </Text>
                        <Text style={styles.cardDetails}>
                            "So many shoes but only two feet"
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            
        </ScrollView>
    )
}


