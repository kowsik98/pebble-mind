import React, { useState } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, Modal, FlatList } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { firebase } from '../../../firebase/config'
import styles from '../DoctorProfile/styles';
import TimePicker from '../DoctorProfile/TimePicker';
import { ListItem, Avatar, Icon, CheckBox } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AvailabilityScreen() {

    const [modal_visible, setModalVisibility] = useState(false);
    const [monday_working_hours, setM_WorkingHours] = useState([]);
    const [tuesday_working_hours, setTu_WorkingHours] = useState([])
    const [wednesday_working_hours, setW_WorkingHours] = useState([])
    const [thursday_working_hours, setTh_WorkingHours] = useState([])
    const [friday_working_hours, setF_WorkingHours] = useState([])
    const [saturday_working_hours, setSa_WorkingHours] = useState([])
    const [sunday_working_hours, setSu_WorkingHours] = useState([])
    const [fromTime, setFromTime] = useState(new Date());
    const [toTime, setToTime] = useState(new Date());
    const [monday, setMonday] = useState(false);
    const [tuesday, setTuesday] = useState(false);
    const [wednesday, setWednesday] = useState(false);
    const [thursday, setThursday] = useState(false);
    const [friday, setFriday] = useState(false);
    const [saturday, setSaturday] = useState(false);
    const [sunday, setSunday] = useState(false);
    const [index, setIndex] = useState(null);
    const [day, setDay] = useState(null);
    const [add_M, setAdd_M] = useState([]);
    const [add_Tu, setAdd_Tu] = useState([]);
    const [add_W, setAdd_W] = useState([]);
    const [add_Th, setAdd_Th] = useState([]);
    const [add_F, setAdd_F] = useState([]);
    const [add_Sa, setAdd_Sa] = useState([]);
    const [add_Su, setAdd_Su] = useState([]);


    const showAdd = (val, wd) => {
        if(wd == 0){
            if(val == false){
                setAdd_Su([]);
            }
            else{
                setAdd_Su([...add_Su, 1]);
            }
        }
        
        if(wd == 1){
            if(val == false){
                setAdd_M([]);
            }
            else{
                setAdd_M([...add_M, 1]);
            }
        }

        if(wd == 2){
            if(val == false){
                setAdd_Tu([]);
            }
            else{
                setAdd_Tu([...add_Tu, 1]);
            }
        }

        if(wd == 3){
            if(val == false){
                setAdd_W([]);
            }
            else{
                setAdd_W([...add_W, 1]);
            }
        }

        if(wd == 4){
            if(val == false){
                setAdd_Th([]);
            }
            else{
                setAdd_Th([...add_Th, 1]);
            }
        }

        if(wd == 5){
            if(val == false){
                setAdd_F([]);
            }
            else{
                setAdd_F([...add_F, 1]);
            }
        }

        if(wd == 6){
            if(val == false){
                setAdd_Sa([]);
            }
            else{
                setAdd_Sa([...add_Sa, 1]);
            }
        }
    }

    const deleteTiming = () => {
        
        let timing_array = []
        let new_array = []

        switch(day){

            case 1:
                new_array = monday_working_hours
                break
            case 2:
                new_array = tuesday_working_hours;
                break
            case 3:
                new_array = wednesday_working_hours;
                break
            case 4:
                new_array = thursday_working_hours;
                break
            case 5:
                new_array = friday_working_hours;
                break
            case 6:
                new_array = saturday_working_hours;
                break
            case 0:
                new_array = sunday_working_hours;
                break
        }

        //Remove element from new_array

        new_array = new_array.filter(element => element.key != index);

        //Rearrange Keys
        for(let i = 0; i < new_array.length; i++){
            new_array[i].key = i;
        }

        for(let i = 0; i < new_array.length; i++){
            timing_array = [...timing_array, parseFloat(new_array[i].from)];
            timing_array = [...timing_array, parseFloat(new_array[i].to)];
        }

        const user = firebase.auth().currentUser;
        firebase 
            const data = {
                timing: timing_array,
            };
            
            const docRef = firebase.firestore().collection('doctors');

            docRef
            .doc(user.uid)
            .collection('availability')
            .get()
            .then(timeSnapshot => {
                timeSnapshot.forEach(dayDoc => {
                    if(dayDoc.id == day){
                        
                        const dayRef = dayDoc.ref;                        
                        dayRef
                        .set(data, {merge: true})
                    }
                })
            })

        switch(day){

            case 1:
                setM_WorkingHours(new_array);
                break
            case 2:
                setTu_WorkingHours(new_array);
                break
            case 3:
                setW_WorkingHours(new_array);
                break
            case 4:
                setTh_WorkingHours(new_array);
                break
            case 5:
                setF_WorkingHours(new_array);
                break
            case 6:
                setSa_WorkingHours(new_array);
                break
            case 0:
                setSu_WorkingHours(new_array);
                break
        }

        setModalVisibility(false);
        return;
    }

    const setTimings = (from, to) => {

        let from_array = from.split('.')
        setFromTime( new Date(fromTime.setHours(from)));
        setFromTime( new Date(fromTime.setMinutes(from_array[1])));
        setToTime(new Date(toTime.setHours(to)));
        let to_array = to.split('.');
        setToTime(new Date(toTime.setMinutes(to_array[1])));
        return;
    }

    const onSave_Timings = () => {
        let hour_F = fromTime.getHours();
        let minute_F = fromTime.getMinutes();
        let hour_T = toTime.getHours();
        let minute_T = toTime.getMinutes();
        
        let timing_array = [];
        let temp_index = index;
        let new_index = index;
        if(new_index % 2 != 0){
            new_index = new_index + 1;
        }

        let new_array = [];
        switch(day){

            case 1:
                new_array = monday_working_hours
                break
            case 2:
                new_array = tuesday_working_hours;
                break
            case 3:
                new_array = wednesday_working_hours;
                break
            case 4:
                new_array = thursday_working_hours;
                break
            case 5:
                new_array = friday_working_hours;
                break
            case 6:
                new_array = saturday_working_hours;
                break
            case 0:
                new_array = sunday_working_hours;
                break
        }

        if(new_array.length <= index){
            new_array = [...new_array, {key: temp_index, from: formatTime(hour_F +"." + minute_F), to: formatTime(hour_T +"." + minute_T)}]
            
        }
        else{
            new_array[temp_index].from = formatTime(hour_F +"." + minute_F);
            new_array[temp_index].to = formatTime(hour_T +"." + minute_T);
        }
        for(let i = 0; i < new_array.length; i++){
            timing_array = [...timing_array, parseFloat(new_array[i].from)];
            timing_array = [...timing_array, parseFloat(new_array[i].to)];
        }

        if(new_array > index){
            timing_array[new_index] = parseFloat(hour_F + "." + minute_F);
            timing_array[new_index + 1] = parseFloat(hour_T + "." + minute_T);
        }

        switch(day){

            case 1:
                setM_WorkingHours(new_array);
                break
            case 2:
                setTu_WorkingHours(new_array);
                break
            case 3:
                setW_WorkingHours(new_array);
                break
            case 4:
                setTh_WorkingHours(new_array);
                break
            case 5:
                setF_WorkingHours(new_array);
                break
            case 6:
                setSa_WorkingHours(new_array);
                break
            case 0:
                setSu_WorkingHours(new_array);
                break
        }

        

        useEffect(() => {
        const user = firebase.auth().currentUser;
        firebase 
            const data = {
                timing: timing_array,
            };
            
            const docRef = firebase.firestore().collection('doctors');
            let counter = 0;
            docRef
            .doc(user.uid)
            .collection('availability')
            .get()
            .then(timeSnapshot => {
                timeSnapshot.forEach(dayDoc => {
                    if(dayDoc.id == day){
                        counter++;
                        const dayRef = dayDoc.ref;                        
                        dayRef
                        .set(data, {merge: true})
                    }
                })
            })

            if(counter == 0){
                const aRef = firebase.firestore().collection('doctors').doc(user.uid).collection('availability')
                aRef
                .doc(""+day)
                .set(data, {merge: true})

            }
        });
        setModalVisibility(false);
        return;
    }

    const formatTime = (from) => {
        
        let from_array = from.toString().split('.');
        if(from_array[0].length == 1){
            from = "0" + from;
        }
        if(from_array.length > 1){
            if(from_array[1].length == 1){
                from = from + "0";
            }
        }                               
        else{
            from = from + ".00";
        }
        return from;                        
    }

    const onChange_F = (event, selectedDate) => {
        const currentDate = selectedDate;
        setFromTime(currentDate);
        return;
      };

    const onChange_T = (event, selectedDate) => {
        const currentDate = selectedDate;
        setToTime(currentDate);
        return;
      };

    const getMondayTimings =() => {
        if(monday == false){
            const docRef = firebase.firestore().collection('doctors');
            const user = firebase.auth().currentUser;
            docRef
                .doc(user.uid)
                .collection('availability')
                .get()
                .then(timeSnapshot => {
                    
                timeSnapshot.forEach(dayDoc => {
                    if(dayDoc.id == "1"){
                        let from = 0;
                        let to = 0;
                        const dayRef = dayDoc.ref;                        
                        dayRef
                        .get()
                        .then(firestoreDocument => {
                            if (firestoreDocument.exists) {
                                const availability_details = firestoreDocument.data();
                                const temp_arr = availability_details.timing;
                                
                                
                                let new_data = {};
                                let new_arr = [];
                                let counter = 0;
                                
                                for(let i=0; i < temp_arr.length; i++){
                                    if(i%2 == 0){
                                        from = temp_arr[i];
                                        from = formatTime(from);
                                        
                                    }
                                    else{
                                        to = temp_arr[i];
                                        to = formatTime(to);

                                        new_data = {key: counter, from: from, to: to};
                                        
                                        
                                        
                                        if(new_arr.length < 1){
                                            new_arr = [new_data];
                                        }
                                        else{
                                            
                                            new_arr = [...new_arr, new_data];
                                            
                                        }
                                        
                                        counter = counter+1;
                                        setM_WorkingHours(new_arr);
                                    }
                            
                                 }

                                 
                                 
                            }
                        })
                    }
                })
                
            })
        }
        else{
            setM_WorkingHours([])
        }
        
        return;
    }

    const getTuesdayTimings =() => {
        if(tuesday == false){
            const docRef = firebase.firestore().collection('doctors');
            const user = firebase.auth().currentUser;
            docRef
                .doc(user.uid)
                .collection('availability')
                .get()
                .then(timeSnapshot => {
                    
                timeSnapshot.forEach(dayDoc => {
                    if(dayDoc.id == "2"){
                        let from = 0;
                        let to = 0;
                        const dayRef = dayDoc.ref;                        
                        dayRef
                        .get()
                        .then(firestoreDocument => {
                            if (firestoreDocument.exists) {
                                const availability_details = firestoreDocument.data();
                                const temp_arr = availability_details.timing;
                                
                                
                                let new_data = {};
                                let new_arr = [];
                                let counter = 0;
                                
                                for(let i=0; i < temp_arr.length; i++){
                                    if(i%2 == 0){
                                        from = temp_arr[i];
                                        from = formatTime(from);
                                        
                                    }
                                    else{
                                        to = temp_arr[i];
                                        to = formatTime(to);

                                        new_data = {key: counter, from: from, to: to};
                                        
                                        
                                        
                                        if(new_arr.length < 1){
                                            new_arr = [new_data];
                                        }
                                        else{
                                            
                                            new_arr = [...new_arr, new_data];
                                            
                                        }
                                        
                                        counter = counter+1;
                                        setTu_WorkingHours(new_arr);
                                    }
                            
                                 }

                                 
                                 
                            }
                        })
                    }
                })
                
            })
        }
        else{
            setTu_WorkingHours([]);
        }
        return;
    }

    const getWednesdayTimings =() => {
        if(wednesday == false){
            const docRef = firebase.firestore().collection('doctors');
            const user = firebase.auth().currentUser;
            docRef
                .doc(user.uid)
                .collection('availability')
                .get()
                .then(timeSnapshot => {
                    
                timeSnapshot.forEach(dayDoc => {
                    if(dayDoc.id == "3"){
                        let from = 0;
                        let to = 0;
                        const dayRef = dayDoc.ref;                        
                        dayRef
                        .get()
                        .then(firestoreDocument => {
                            if (firestoreDocument.exists) {
                                const availability_details = firestoreDocument.data();
                                const temp_arr = availability_details.timing;
                                
                                
                                let new_data = {};
                                let new_arr = [];
                                let counter = 0;
                                
                                for(let i=0; i < temp_arr.length; i++){
                                    if(i%2 == 0){
                                        from = temp_arr[i];
                                        from = formatTime(from);
                                        
                                    }
                                    else{
                                        to = temp_arr[i];
                                        to = formatTime(to);

                                        new_data = {key: counter, from: from, to: to};
                                        
                                        
                                        
                                        if(new_arr.length < 1){
                                            new_arr = [new_data];
                                        }
                                        else{
                                            
                                            new_arr = [...new_arr, new_data];
                                            
                                        }
                                        
                                        counter = counter+1;
                                        setW_WorkingHours(new_arr);
                                    }
                            
                                 }

                                 
                                 
                            }
                        })
                    }
                })
                
            })
        }
        else{
            setW_WorkingHours([])
        }
        return;
    }

    const getThursdayTimings =() => {
        if(thursday == false){
            const docRef = firebase.firestore().collection('doctors');
            const user = firebase.auth().currentUser;
            docRef
                .doc(user.uid)
                .collection('availability')
                .get()
                .then(timeSnapshot => {
                    
                timeSnapshot.forEach(dayDoc => {
                    if(dayDoc.id == "4"){
                        let from = 0;
                        let to = 0;
                        const dayRef = dayDoc.ref;                        
                        dayRef
                        .get()
                        .then(firestoreDocument => {
                            if (firestoreDocument.exists) {
                                const availability_details = firestoreDocument.data();
                                const temp_arr = availability_details.timing;
                                
                                
                                let new_data = {};
                                let new_arr = [];
                                let counter = 0;
                                
                                for(let i=0; i < temp_arr.length; i++){
                                    if(i%2 == 0){
                                        from = temp_arr[i];
                                        from = formatTime(from);
                                        
                                    }
                                    else{
                                        to = temp_arr[i];
                                        to = formatTime(to);

                                        new_data = {key: counter, from: from, to: to};
                                        
                                        
                                        
                                        if(new_arr.length < 1){
                                            new_arr = [new_data];
                                        }
                                        else{
                                            
                                            new_arr = [...new_arr, new_data];
                                            
                                        }
                                        
                                        counter = counter+1;
                                        setTh_WorkingHours(new_arr);
                                    }
                            
                                 }

                                 
                                 
                            }
                        })
                    }
                })
                
            })
        }
        else{
            setTh_WorkingHours([])
        }
        return;
    }

    const getFridayTimings =() => {
        if(friday == false){
            const docRef = firebase.firestore().collection('doctors');
            const user = firebase.auth().currentUser;
            docRef
                .doc(user.uid)
                .collection('availability')
                .get()
                .then(timeSnapshot => {
                    
                timeSnapshot.forEach(dayDoc => {
                    if(dayDoc.id == "5"){
                        let from = 0;
                        let to = 0;
                        const dayRef = dayDoc.ref;                        
                        dayRef
                        .get()
                        .then(firestoreDocument => {
                            if (firestoreDocument.exists) {
                                const availability_details = firestoreDocument.data();
                                const temp_arr = availability_details.timing;
                                
                                
                                let new_data = {};
                                let new_arr = [];
                                let counter = 0;
                                
                                for(let i=0; i < temp_arr.length; i++){
                                    if(i%2 == 0){
                                        from = temp_arr[i];
                                        from = formatTime(from);
                                        
                                    }
                                    else{
                                        to = temp_arr[i];
                                        to = formatTime(to);

                                        new_data = {key: counter, from: from, to: to};
                                        
                                        
                                        
                                        if(new_arr.length < 1){
                                            new_arr = [new_data];
                                        }
                                        else{
                                            
                                            new_arr = [...new_arr, new_data];
                                            
                                        }
                                        
                                        counter = counter+1;
                                        setF_WorkingHours(new_arr);
                                    }
                            
                                 }   
                            }
                        })
                    }
                })
                
            })
        }
        else{
            setF_WorkingHours([])
        }
        return;
    }

    const getSaturdayTimings =() => {
        if(saturday == false){
            const docRef = firebase.firestore().collection('doctors');
            const user = firebase.auth().currentUser;
            docRef
                .doc(user.uid)
                .collection('availability')
                .get()
                .then(timeSnapshot => {
                    
                timeSnapshot.forEach(dayDoc => {
                    if(dayDoc.id == "6"){
                        let from = 0;
                        let to = 0;
                        const dayRef = dayDoc.ref;                        
                        dayRef
                        .get()
                        .then(firestoreDocument => {
                            if (firestoreDocument.exists) {
                                const availability_details = firestoreDocument.data();
                                const temp_arr = availability_details.timing;
                                
                                
                                let new_data = {};
                                let new_arr = [];
                                let counter = 0;
                                
                                for(let i=0; i < temp_arr.length; i++){
                                    if(i%2 == 0){
                                        from = temp_arr[i];
                                        from = formatTime(from);
                                        
                                    }
                                    else{
                                        to = temp_arr[i];
                                        to = formatTime(to);

                                        new_data = {key: counter, from: from, to: to};
                                        
                                        
                                        
                                        if(new_arr.length < 1){
                                            new_arr = [new_data];
                                        }
                                        else{
                                            
                                            new_arr = [...new_arr, new_data];
                                            
                                        }
                                        
                                        counter = counter+1;
                                        setSa_WorkingHours(new_arr);
                                    }
                            
                                 } 
                            }
                        })
                    }
                })
                
            })
        }
        else{
            setSa_WorkingHours([])
        }
        return;
    }

    const getSundayTimings =() => {
        if(sunday == false){
            const docRef = firebase.firestore().collection('doctors');
            const user = firebase.auth().currentUser;
            docRef
                .doc(user.uid)
                .collection('availability')
                .get()
                .then(timeSnapshot => {
                    
                timeSnapshot.forEach(dayDoc => {
                    if(dayDoc.id == "0"){
                        let from = 0;
                        let to = 0;
                        const dayRef = dayDoc.ref;                        
                        dayRef
                        .get()
                        .then(firestoreDocument => {
                            if (firestoreDocument.exists) {
                                const availability_details = firestoreDocument.data();
                                const temp_arr = availability_details.timing;
                                
                                
                                let new_data = {};
                                let new_arr = [];
                                let counter = 0;
                                
                                for(let i=0; i < temp_arr.length; i++){
                                    if(i%2 == 0){
                                        from = temp_arr[i];
                                        from = formatTime(from);
                                        
                                    }
                                    else{
                                        to = temp_arr[i];
                                        to = formatTime(to);

                                        new_data = {key: counter, from: from, to: to};
                                        
                                        
                                        
                                        if(new_arr.length < 1){
                                            new_arr = [new_data];
                                        }
                                        else{
                                            
                                            new_arr = [...new_arr, new_data];
                                            
                                        }
                                        
                                        counter = counter+1;
                                        setSu_WorkingHours(new_arr);
                                    }
                            
                                 }
                            }
                        })
                    }
                })
                
            })
        }
        else{
            setSu_WorkingHours([])
        }
        return;
    }


    return (
        
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff', justifyContent: 'left', marginTop: 10, borderRadius: 10}}>
            
                <Modal visible = {modal_visible}  transparent = {true} animationType= 'slide'>
                <View style = {{backgroundColor: '#000000aa', flex: 1}} >
                
                <View style = {{backgroundColor: 'white', marginBottom: 0, marginTop:305, padding: 2, borderRadius: 10, flex: 1}}>
                <MaterialIcons name= 'close' size = {24} style = {styles.modalToggle} onPress = {() => setModalVisibility(false)}/>
                
                <ScrollView
                showsHorizontalScrollIndicator={false} >
                    <View style = {{margin: 10}}>
                    <Text style = {styles.userInfoItem}>Start Time</Text>
                    
                    
                    <DateTimePicker style = {{margin: 20}}
                        value={fromTime}
                        mode='time'
                        is24Hour={true}
                        display="default"
                        minuteInterval = {15}
                        onChange = {onChange_F}
                        />

                   
                    <Text style = {styles.userInfoItem}> End Time</Text>

                    <DateTimePicker style = {{margin: 20}}
                        value={toTime}
                        mode='time'
                        is24Hour={true}
                        display="default"
                        minuteInterval = {15}
                        onChange = {onChange_T}
                        />
                    
                    <View style = {styles.footerView}>
                        <TouchableOpacity style={styles.button} onPress = {onSave_Timings}>
                            <Text style={styles.buttonTitle}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress = {deleteTiming}>
                            <Text style={styles.buttonTitle}>Delete</Text>
                        </TouchableOpacity></View>
                    </View>
                    </ScrollView>
                    </View>
                   
                </View>
                
                </Modal>

                <ScrollView

                showsHorizontalScrollIndicator={false}  >
                <View style = {{alignItems: 'left', marginTop: 20}}>
                <Text style = {styles.userInfoItem}>Available Days</Text></View>

                <View style = {{margin: 10}}>
                             
                <CheckBox title = "Monday" checked = {monday} onPress={() => {setMonday(!monday); setDay(1); getMondayTimings(); showAdd(!monday, 1)}} /> 
                
                 
                <View>
                    
                    {
                            
                        monday_working_hours.map((item) => (
                        
                                
                        <ListItem key = {item.key}  style = {{ borderBottomWidth:1, borderColor: '#e2e2e2', marginLeft: 30, marginRight: 30, marginBottom: 5}} onPress = {()=> {setModalVisibility(true); setTimings(item.from, item.to); setIndex(item.key);}}>
                                
                        <ListItem.Content>
                            
                        <ListItem.Title style = {{fontSize: 14, fontWeight: 'bold', margin: 5}}>{item.from} - {item.to}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Content/>
                        </ListItem>
                                
                        )) 
                        
                    }

                </View>     
                
                <View>
                    {
                            
                        add_M.map((item) => (
                            
                            <MaterialIcons key = "1" name= 'add' size = {20} style = {styles.modalAdd} onPress = {() => {setModalVisibility(true); setIndex(monday_working_hours.length); }}/>
                                
                        )) 
                       
                    }
                </View>      
                    

                <CheckBox title = "Tuesday" checked = {tuesday} onPress={() => {setTuesday(!tuesday); setDay(2); getTuesdayTimings(); showAdd(!tuesday, 2)}} />                   
                
                <View>
                    {
                                
                        tuesday_working_hours.map((item) => (
                                
                        <ListItem key = {item.key}  style = {{borderBottomWidth:1, borderColor: '#e2e2e2', marginLeft: 30, marginRight: 30, marginBottom: 5}} onPress = {()=> {setModalVisibility(true); setTimings(item.from, item.to); setIndex(item.key);}}>
                                
                        <ListItem.Content >
                            
                        <ListItem.Title style = {{fontSize: 14, fontWeight: 'bold', margin: 5}}>{item.from} - {item.to}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Content/>
                        </ListItem>
                                
                        ))         
                                               
                    }
                </View> 

                <View>
                    {
                            
                        add_Tu.map((item) => (
                            
                            <MaterialIcons key = "1" name= 'add' size = {20} style = {styles.modalAdd} onPress = {() => {setModalVisibility(true); setIndex(tuesday_working_hours.length);}}/>
                                
                        )) 
                       
                    }
                </View>      
                                
                <CheckBox title = "Wednesday" checked = {wednesday} onPress={() => {setWednesday(!wednesday); setDay(3); getWednesdayTimings(); showAdd(!wednesday, 3); }} />  
  
                <View>
                    {
                                
                        wednesday_working_hours.map((item) => (
                                
                        <ListItem key = {item.key}  style = {{borderBottomWidth:1, borderColor: '#e2e2e2', marginLeft: 30, marginRight: 30, marginBottom: 5}} onPress = {()=> {setModalVisibility(true); setTimings(item.from, item.to); setIndex(item.key);}}>
                                
                        <ListItem.Content >
                            
                        <ListItem.Title style = {{fontSize: 14, fontWeight: 'bold', margin: 5}}>{item.from} - {item.to}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Content/>
                        </ListItem>
                                
                        ))         
                                               
                    }
                </View> 
                <View>
                    {
                            
                        add_W.map((item) => (
                            
                            <MaterialIcons key = "1" name= 'add' size = {20} style = {styles.modalAdd} onPress = {() => {setModalVisibility(true); setIndex(wednesday_working_hours.length);}}/>
                                
                        )) 
                       
                    }
                </View>      
                
                <CheckBox title = "Thursday" checked = {thursday} onPress={() => {setThursday(!thursday); setDay(4); getThursdayTimings(); showAdd(!thursday, 4); }} />  

                <View>
                    {
                                
                        thursday_working_hours.map((item) => (
                                
                        <ListItem key = {item.key}  style = {{borderBottomWidth:1, borderColor: '#e2e2e2', marginLeft: 30, marginRight: 30, marginBottom: 5}} onPress = {()=> {setModalVisibility(true); setTimings(item.from, item.to); setIndex(item.key);}}>
                                
                        <ListItem.Content >
                            
                        <ListItem.Title style = {{fontSize: 14, fontWeight: 'bold', margin: 5}}>{item.from} - {item.to}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Content/>
                        </ListItem>
                                
                        ))         
                                               
                    }
                </View> 

                <View>
                    {
                            
                        add_Th.map((item) => (
                            
                            <MaterialIcons key = "1" name= 'add' size = {20} style = {styles.modalAdd} onPress = {() => {setModalVisibility(true); setIndex(thursday_working_hours.length);}}/>
                                
                        )) 
                       
                    }
                </View>  

                <CheckBox title = "Friday" checked = {friday} onPress={() => {setFriday(!friday); setDay(5); getFridayTimings(); showAdd(!friday, 5);}} />  

                <View>
                    {
                                
                        friday_working_hours.map((item) => (
                                
                        <ListItem key = {item.key}  style = {{borderBottomWidth:1, borderColor: '#e2e2e2', marginLeft: 30, marginRight: 30, marginBottom: 5}} onPress = {()=> {setModalVisibility(true); setTimings(item.from, item.to); setIndex(item.key);}}>
                                
                        <ListItem.Content >
                            
                        <ListItem.Title style = {{fontSize: 14, fontWeight: 'bold', margin: 5}}>{item.from} - {item.to}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Content/>
                        </ListItem>
                                
                        ))         
                                               
                    }
                </View> 

                <View>
                    {
                            
                        add_F.map((item) => (
                            
                            <MaterialIcons key = "1" name= 'add' size = {20} style = {styles.modalAdd} onPress = {() => {setModalVisibility(true); setIndex(friday_working_hours.length);}}/>
                                
                        )) 
                       
                    }
                </View>      
                
                <CheckBox title = "Saturday" checked = {saturday} onPress={() => {setSaturday(!saturday);setDay(6); getSaturdayTimings(); showAdd(!saturday, 6);}} />  

                <View>
                    {
                                
                        saturday_working_hours.map((item) => (
                                
                        <ListItem key = {item.key}  style = {{borderBottomWidth:1, borderColor: '#e2e2e2', marginLeft: 30, marginRight: 30, marginBottom: 5}} onPress = {()=> {setModalVisibility(true); setTimings(item.from, item.to); setIndex(item.key);}}>
                                
                        <ListItem.Content >
                            
                        <ListItem.Title style = {{fontSize: 14, fontWeight: 'bold', margin: 5}}>{item.from} - {item.to}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Content/>
                        </ListItem>
                                
                        ))         
                                               
                    }
                </View> 

                <View>
                    {
                            
                        add_Sa.map((item) => (
                            
                            <MaterialIcons key = "1" name= 'add' size = {20} style = {styles.modalAdd} onPress = {() => {setModalVisibility(true); setIndex(saturday_working_hours.length);}}/>
                                
                        )) 
                       
                    }
                </View>      
                
                <CheckBox title = "Sunday" checked = {sunday} onPress={() => {setSunday(!sunday); setDay(0); getSundayTimings(); showAdd(!sunday, 0); }} />  
                   
                <View>
                    {
                                
                        sunday_working_hours.map((item) => (
                                
                        <ListItem key = {item.key}  style = {{borderBottomWidth:1, borderColor: '#e2e2e2', marginLeft: 30, marginRight: 30, marginBottom: 5}} onPress = {()=> {setModalVisibility(true); setTimings(item.from, item.to); setIndex(item.key);}}>
                                
                        <ListItem.Content >
                            
                        <ListItem.Title style = {{fontSize: 14, fontWeight: 'bold', margin: 5}}>{item.from} - {item.to}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Content/>
                        </ListItem>
                                
                        ))         
                                               
                    }
                </View> 

                <View>
                    {
                            
                        add_Su.map((item) => (
                            
                            <MaterialIcons key = "1" name= 'add' size = {20} style = {styles.modalAdd} onPress = {() => {setModalVisibility(true); setIndex(sunday_working_hours.length);}}/>
                                
                        )) 
                       
                    }
                </View>      
                    
                </View>
                
                
                </ScrollView>
   
            </SafeAreaView>
            
    )

}