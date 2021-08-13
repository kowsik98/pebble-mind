import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import styles from './styles'

export default function LandingScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.content__help}>Need Help?</Text>
            <View style={styles.container__title}>
                <Text style={styles.title}>Welcome to</Text>
                <Text style={styles.title}>Pebble</Text>
                <Text style={styles.title__sub}>All in One Wellness App</Text>
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                <Button 
                    mode="outlined"
                    style = {styles.button1}
                    theme={{
                        colors: {
                            primary: '#fff'
                        }
                    }}
                    uppercase={false}
                >
                    Sign in            
                </Button>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Registration')}}>
                <Button 
                    mode="contained"
                    style = {styles.button2}
                    uppercase={false}
                >
                    Sign up            
                </Button>
            </TouchableOpacity>
        </View>
    )
}
