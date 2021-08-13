import React, { useEffect } from 'react'
import { View, Image } from 'react-native'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'

export default function loading({navigation}) {
    useFocusEffect(
        React.useCallback(() => {
            setTimeout(function(){
                navigation.navigate('Welcome')
            }, 5000);
        }, [])
    )
    return (
        <View style={{backgroundColor:'#53469c'}}>
            <Image 
                style={{width: undefined,height:'100%'}}
                resizeMode='contain' 
                source={require('./../../assets/loading.jpeg')}
            />
        </View>
    )
}
