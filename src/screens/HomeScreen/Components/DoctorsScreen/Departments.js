import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { List, Surface, Divider, Searchbar } from 'react-native-paper'
import { SearchBar } from 'react-native-elements'
import styles from './styles'

export default function Departments({route, navigation}) {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState()
    const onChangeSearch = query => {
        setSearchQuery(query)
        searchList(searchQuery)
    }

    const searchList = (searchTerm) => {
        if (searchTerm){
            if(searchTerm.length === 0){
                setSearchResults(data)
                return
            }
        }
        const filteredValues = data.filter(dep => dep.depName.includes(searchTerm))
        setSearchResults(filteredValues)
    }

    const data = [
        {
            depName: "Psychiatrist",
            image: require("../../../../../assets/departments/psychiatrist.png")
        },
        {
            depName: "Therapist",
            image:require("../../../../../assets/departments/therapist.png")
        },
        {
            depName: "Life Coach",
            image:require("../../../../../assets/departments/lifecoaches.png")
        },
    ]
    return (
        <View>
            <ScrollView>
                <View style={{flex:1, flexDirection:'row', justifyContent: 'center'}}>
                    <Surface style={{elevation: 5, width:'95%', margin: 10, borderRadius: 5}}>
                        <SearchBar
                            round = {true}
                            placeholder="Search"
                            placeholderTextColor="grey"
                            value = {searchQuery}
                            onChangeText={onChangeSearch}
                            onClear={() => searchList('')}
                            searchIcon = {{
                                color: "#189AB4",
                                size: 24,
                                solid: true
                            }}
                            clearIcon = {{
                                color: "#189AB4",
                                size: 24,
                                solid: true
                            }}
                            theme={{
                                colors:{  
                                    grey3: "#000",                                
                                },
                            }}
                            containerStyle={{
                                backgroundColor: 'transparent',
                                borderBottomColor: 'transparent',
                                borderTopColor: 'transparent',
                            }}
                            inputContainerStyle = {{
                                backgroundColor: 'white'
                            }}
                        />
                    </Surface>
                </View>                        
                <View style={{flex:1, alignItems:'center',}}>                    
                    <List.Section style={{flex:1, width:'100%', alignItems:'flex-start', justifyContent:'flex-start'}}>
                        <List.Subheader style={{marginVertical: -15, fontSize: 16, color:'black'}}>All specialities</List.Subheader>
                    </List.Section>
                    <Surface style={styles.surface}>
                        <View style={{flex:2, flexDirection: 'column', flexWrap: 'nowrap',width:'100%'}}>
                            {   
                                !searchResults ? (
                                    Object.values(data).map((item, index) => 
                                    <View key ={index}> 
                                        <Divider/>
                                        <TouchableOpacity                                             
                                            style={styles.dep__block} 
                                            onPress={() => navigation.navigate('Select Doctor', {userID:route.params.userID, department:item.depName })}>
                                            <List.Item
                                                title={item.depName}
                                                left={props => 
                                                    <Image {...props} 
                                                        style={styles.dep__image} 
                                                        source={item.image}
                                                    />
                                                }
                                            />
                                        </TouchableOpacity>
                                        <Divider/>
                                    </View>
                                    )
                                ) : (
                                    Object.values(searchResults).map((item, index) => 
                                    <View key ={index}> 
                                        <Divider/>
                                        <TouchableOpacity                                             
                                            style={styles.dep__block} 
                                            onPress={() => navigation.navigate('Select Doctor', {userID:route.params.userID, department:item.depName})}>
                                            <List.Item
                                                title={item.depName}
                                                left={props => 
                                                    <Image {...props} 
                                                        style={styles.dep__image} 
                                                        source={item.image}
                                                    />
                                                }
                                            />
                                        </TouchableOpacity>
                                        <Divider/>
                                    </View>
                                    )
                                )
                            }                            
                        </View>
                    </Surface>
                </View>
            </ScrollView>
        </View>
    )
}
