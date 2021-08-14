import React from 'react'
import { View, ScrollView, Text, Linking } from 'react-native'
import { List, Surface, Card, Title, Paragraph, Divider } from 'react-native-paper'
import styles from '../styles'

export default function AppointmentDetails({route, navigation}) {
    const details = route.params.appointmentDetails
    return (
        <ScrollView>
            <Text style= {{ textAlign:'center', fontSize: 25, fontWeight:'bold',margin: 50 }}>Details</Text>
            <View style={{flex:1, alignItems:'center',}}>
                <Surface style={styles.surface}>
                    <View style={{flex:2, flexDirection: 'column', flexWrap: 'nowrap',width:'100%'}}>
                        <Card>
                            <Card.Content style={{margin: 10, paddingBottom: 10}}>
                                <Title style={{textAlign:'center', paddingBottom: 15}}>Appointment Details</Title>
                                <Paragraph>Date - {new Date(Date.parse(details.appointmentDetails.date)).toLocaleDateString()}  </Paragraph>
                                <Paragraph>Time - {details.appointmentDetails.time} </Paragraph>
                                <Paragraph>Mode - {details.appointmentDetails.mode}</Paragraph>
                            </Card.Content>
                            <Divider />
                            <Divider />
                            <Divider />
                            <Divider />
                            <Divider />
                            {
                                details.meeting_id ? (
                                    <Card.Content style={{margin: 10}}>
                                        <Title style={{textAlign:'center', paddingBottom: 15}}>Meeting Credentials</Title>
                                        <Paragraph>Meeting ID - {details.meeting_id.toString().slice(0,3)+ ' ' + details.meeting_id.toString().slice(3,7) + ' ' + details.meeting_id.toString().slice(7, details.meeting_id.toString().length)} </Paragraph>
                                        <Paragraph>Passcode - {details.password} </Paragraph>
                                        <Paragraph>Click <Text style={{color:'blue'}} onPress={() => Linking.openURL(details.join_url)}>here</Text> to join using browser.</Paragraph>
                                    </Card.Content> 

                                ) : (
                                    <Card.Content style={{margin: 10}}>
                                        <Title style={{textAlign:'center', paddingBottom: 15}}>In Clinic Appointment</Title>
                                    </Card.Content> 
                                )
                            }                               
                        </Card>
                    </View>
                </Surface>
            </View>
        </ScrollView>
    )
}
