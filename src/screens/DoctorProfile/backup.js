import React, { useState } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, Modal, FlatList } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { firebase } from '../../firebase/config'
import styles from '../DoctorProfile/styles';
import TimePicker from '../DoctorProfile/TimePicker';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AvailabilityScreen() {

    const [available_days, setAvailabilityDays] = useState([])
    const [buttonColor_1, setButtonColor_1] = useState(styles.userBtn)
    const [textColor_1, setTextColor_1] = useState(styles.userBtnTxt)
    const [buttonColor_2, setButtonColor_2] = useState(styles.userBtn)
    const [textColor_2, setTextColor_2] = useState(styles.userBtnTxt)
    const [buttonColor_3, setButtonColor_3] = useState(styles.userBtn)
    const [textColor_3, setTextColor_3] = useState(styles.userBtnTxt)
    const [buttonColor_4, setButtonColor_4] = useState(styles.userBtn)
    const [textColor_4, setTextColor_4] = useState(styles.userBtnTxt)
    const [buttonColor_5, setButtonColor_5] = useState(styles.userBtn)
    const [textColor_5, setTextColor_5] = useState(styles.userBtnTxt)
    const [buttonColor_6, setButtonColor_6] = useState(styles.userBtn)
    const [textColor_6, setTextColor_6] = useState(styles.userBtnTxt)
    const [buttonColor_0, setButtonColor_0] = useState(styles.userBtn)
    const [textColor_0, setTextColor_0] = useState(styles.userBtnTxt)
    const [monday_timings, setMondayTimings] = useState([])
    const [tuesday_timings, setTuesdayTimings] = useState([])
    const [wednesday_timings, setWednesdayTimings] = useState([])
    const [thursday_timings, setThursdayTimings] = useState([])
    const [friday_timings, setFridayTimings] = useState([])
    const [saturday_timings, setSaturdayTimings] = useState([])
    const [sunday_timings, setSundayTimings] = useState([])
    const [modal_visible, setModalVisibility] = useState(false);
    const [modal_time_visible, setModalTimeVisibility] = useState(false);
    const [recentlyclicked, setRecentlyClicked] = useState('');
    const [working_hours, setWorkingHours] = useState([{from: "10.30", to: "12.30"}, {from: "01.00", to: "03.00"}]);
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');
    
 
    const addDay = (day) => {  
        setAvailabilityDays([available_days, day]);
        return;
    }

    const removeDay = (day) => {
        let array = available_days;
        //array = array.filter(element => element != day);
        setAvailabilityDays(array.filter(element => element != day));
        return;
    }

    const _onValueChange = (hour, minute) => {
        console.log("Selected time:", hour, ':', minute);
      };

    function selectItem(day){

            if(day == "1"){
                if(buttonColor_1 == styles.userPostClick){
                    setButtonColor_1(styles.userBtn);
                    removeDay(day);
                    
                }
                else{
                    setButtonColor_1(styles.userPostClick);
                    setRecentlyClicked('Monday');
                    setModalVisibility(true);
                    addDay(day);
                    
                }
                if(textColor_1 == styles.userBtnTxt_PC){
                    setTextColor_1(styles.userBtnTxt);
                }
                else{
                    setTextColor_1(styles.userBtnTxt_PC);
                    
                }
                
            }
            if(day == "2"){
                if(buttonColor_2 == styles.userPostClick){
                    setButtonColor_2(styles.userBtn);
                    removeDay(day);
                }
                else{
                    setButtonColor_2(styles.userPostClick);
                    addDay(day);
                    setRecentlyClicked('Tuesday');
                }
                if(textColor_2 == styles.userBtnTxt_PC){
                    setTextColor_2(styles.userBtnTxt);
                }
                else{
                    setTextColor_2(styles.userBtnTxt_PC);
                }
    
            }
            if(day == "3"){
                if(buttonColor_3 == styles.userPostClick){
                    setButtonColor_3(styles.userBtn);
                    removeDay(day);
                }
                else{
                    setButtonColor_3(styles.userPostClick);
                    addDay(day);
                    setRecentlyClicked('Wednesday');
                }
                if(textColor_3 == styles.userBtnTxt_PC){
                    setTextColor_3(styles.userBtnTxt);
                }
                else{
                    setTextColor_3(styles.userBtnTxt_PC);
                }
            }
            if(day == "4"){
                if(buttonColor_4 == styles.userPostClick){
                    setButtonColor_4(styles.userBtn);
                    removeDay(day);
                }
                else{
                    setButtonColor_4(styles.userPostClick);
                    addDay(day);
                    setRecentlyClicked('Thursday');
                }
                if(textColor_4 == styles.userBtnTxt_PC){
                    setTextColor_4(styles.userBtnTxt);
                }
                else{
                    setTextColor_4(styles.userBtnTxt_PC);
                }
            }
            if(day == "5"){
                if(buttonColor_5 == styles.userPostClick){
                    setButtonColor_5(styles.userBtn);
                    removeDay(day);
                }
                else{
                    setButtonColor_5(styles.userPostClick);
                    addDay(day);
                    setRecentlyClicked('Friday');
                }
                if(textColor_5 == styles.userBtnTxt_PC){
                    setTextColor_5(styles.userBtnTxt);
                    
                }
                else{
                    setTextColor_5(styles.userBtnTxt_PC);
                }
            }
            if(day == "6"){
                if(buttonColor_6 == styles.userPostClick){
                    setButtonColor_6(styles.userBtn);
                    removeDay(day);
                }
                else{
                    setButtonColor_6(styles.userPostClick);
                    addDay(day);
                    setRecentlyClicked('Saturday');
                }
                if(textColor_6 == styles.userBtnTxt_PC){
                    setTextColor_6(styles.userBtnTxt);
                }
                else{
                    setTextColor_6(styles.userBtnTxt_PC);
                }
            }
            if(day == "0"){
                if(buttonColor_0 == styles.userPostClick){
                    setButtonColor_0(styles.userBtn);
                    removeDay(day);
                }
                else{
                    setButtonColor_0(styles.userPostClick);
                    addDay(day);
                    setRecentlyClicked('Sunday');
                }
                if(textColor_0 == styles.userBtnTxt_PC){
                    setTextColor_0(styles.userBtnTxt);
                }
                else{
                    setTextColor_0(styles.userBtnTxt_PC);
                }
            }
        
        return;
    }

    return (
        
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff', justifyContent: 'left', marginTop: 10, borderRadius: 10}}>
            
                <Modal visible = {modal_visible}  transparent = {true} animationType= 'slide' >
                <View style = {{backgroundColor: '#000000aa', flex: 1}} >
                
                <View style = {{backgroundColor: 'white', marginBottom: 0, marginTop:225, padding: 2, borderRadius: 10, flex: 1}}>
                <MaterialIcons name= 'close' size = {24} style = {styles.modalToggle} onPress = {() => setModalVisibility(false)}/>
                
                <ScrollView
                showsHorizontalScrollIndicator={false} >

                    <TouchableOpacity onPress = {()=> {setModalTimeVisibility(true); setModalVisibility(false)}}>
                    <Text style = {styles.userInfoItem}>Start Time</Text>
                    </TouchableOpacity>
                    
                    <DateTimePicker style = {{margin: 20}}
                        value={new Date()}
                        mode='time'
                        is24Hour={true}
                        display="default"
                        
                        />

                    <View style = {{margin: 20}}>
                    <Text style = {styles.userInfoItem}> End Time</Text>
                    
                    <View style = {styles.footerView}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonTitle}>Add</Text>
                        </TouchableOpacity></View>
                    </View>

                    <MaterialIcons name= 'add' size = {20} style = {{...styles.modalToggle, ...styles.modalAdd}} />
                    </ScrollView>
                    </View>
                   
                </View>
                
                </Modal>

                <ScrollView

                showsHorizontalScrollIndicator={false}  >
                <View style = {{alignItems: 'left', marginTop: 20}}>
                <Text style = {styles.userInfoItem}>Available Days</Text></View>

                <ScrollView
                
                horizontal = {true}
                showsHorizontalScrollIndicator={false} >
                <View style = {{alignItems: 'center', margin: 30, flex:1}}>
                
                    <View style={styles.userBtnWrapper}>

                        <TouchableOpacity style={buttonColor_1} onPressOut = {() => selectItem("1")}>
                            <Text style={textColor_1}>Monday</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonColor_2} onPressOut = {()=>selectItem("2")}>
                            <Text style={textColor_2}>Tuesday</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonColor_3} onPressOut = {()=>selectItem("3")}>
                            <Text style={textColor_3}>Wednesday</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonColor_4} onPressOut = {() => selectItem("4")}>
                            <Text style={textColor_4}>Thursday</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonColor_5} onPressOut = {() =>selectItem("5")}>
                            <Text style={textColor_5}>Friday</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonColor_6} onPressOut = {()=>selectItem("6")}>
                            <Text style={textColor_6}>Saturday</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonColor_0} onPressOut = {() => selectItem("0")}>
                            <Text style={textColor_0}>Sunday</Text>
                        </TouchableOpacity>
                        
                    </View>
                    
                </View>
                
                </ScrollView>
                </ScrollView>

                
                    
                        <View style = {{margin: 10}}>
                             {
                                working_hours.map((item) => (
                                <ListItem style = {{borderWidth:1, margin: 5, borderColor: '#e2e2e2'}} onPress = {()=> {setModalVisibility(true); setFromTime(item.from);setToTime(item.to);}}>
                                
                                <ListItem.Content >
                                <ListItem.Title style = {{fontSize: 16}}>{item.from} - {item.to}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Content/>
                                </ListItem>
                                ))                        
                            }
                   
                    
                </View>
                <View style = {styles.footerView}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonTitle}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    
                    
                    
                    
            </SafeAreaView>
            
    )

}