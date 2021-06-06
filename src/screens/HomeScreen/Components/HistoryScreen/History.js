import React, {useState} from 'react';
import { View, Text,Image, Button, ScrollView,TouchableOpacity } from 'react-native';
import styles from '../../styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function History(){
  return (
    <ScrollView>
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

function SettingsScreen() {
  return (
    <ScrollView>
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
    </ScrollView>
  );
}

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Upcoming Events" component={History} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
