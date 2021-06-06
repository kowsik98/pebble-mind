import React from 'react';
import { View, Text, Button, } from 'react-native';

export default function Feed({navigation}){
    return(
        <View>
            <Text>Feed</Text>
            <Button
                title="press"
                onPress={()=>navigation.navigate('Profile')}
            />
        </View>
    )
}