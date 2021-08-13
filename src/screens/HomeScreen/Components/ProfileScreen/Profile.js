import React, {useState, useEffect} from 'react'
import { View, Text, Button, Image, ScrollView, TouchableOpacity} from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'
import styles from './styles'
import { useFocusEffect } from '@react-navigation/native'

export default function Profile({route, navigation}){
  const userID = route.params.userID
  const [userName, setUserName] = useState('')
  const [galleryPermission, setGalleryPermission] = useState(null)
  const [imageUri, setImageUri] = useState(null)
  const [loading, setLoading] = useState(true)


  const permisionFunction = async () => {
    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync()
    setGalleryPermission(imagePermission.status === 'granted')
    fetch('https://pebble-test.herokuapp.com/users/'+userID)
      .then(response => response.json())
      .then(data => {
        var temp = data.first_name + data.last_name
        setUserName(temp)
        if(!data.image || data.image === ''){
          setImageUri('../../../../../assets/defaultProfile.png')
          setLoading(false)
        }else{
          setImageUri('https://pebble-test.herokuapp.com/'+data.image)
          setLoading(false)
        }          
      })
      .catch(error => console.log(error))
  }

  const uploadImage = async () => {
    setLoading(true)
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    })

    var fileName = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      fileName += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }

    if (!result.cancelled) {
      const searchTerm = '.'
      const imageType = result.uri.substring(result.uri.lastIndexOf(searchTerm)+1)
      console.log(imageType)
      const data = new FormData()
      var image = {
        name: fileName,
        type: 'image/'+imageType,
        uri: Platform.OS === 'ios' ? result.uri.replace('file://', '') : result.uri,
      }
      data.append("image", image)
      fetch('https://pebble-test.herokuapp.com/users/'+userID, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          body: data
      })
        .then(response => response.json())
        .then(data => {
          setImageUri('https://pebble-test.herokuapp.com/'+data.image)
          setLoading(false)
        })
        .catch(err => {
          console.log( err)
        })
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      permisionFunction()
    }, [])
  )

  return(
    <ScrollView>
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}> 
        {imageUri ? (
          <TouchableOpacity onPress={() => uploadImage()}>
          <View style='pro__imgContainer'>
            {
              !loading ? (
                <>
                  <Image
                    source={{ uri: imageUri }}
                    resizeMode="cover"
                    style={styles.pro__image}
                  />
                </>) : (
                  <View style={{flex:1, alignItems: 'center', justifyContent: 'center', margin: '20%'}}>
                    <ActivityIndicator  animating={true} size='large' color='#189AB4'/>
                  </View>
                )
            }
          </View>
          </TouchableOpacity>
      ) : (
        <View >
          <Text>No Image Selected</Text>
        </View>
      )}
    </View>   
    </ScrollView>
  )
}
