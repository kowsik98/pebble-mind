import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDN0tZ6OT-AIrcs-14nl5jhROIh4-O7S2s",
  authDomain: "pebble-2ef37.firebaseapp.com",
  projectId: "pebble-2ef37",
  storageBucket: "pebble-2ef37.appspot.com",
  messagingSenderId: "718216776228",
  appId: "1:718216776228:web:e8464d706975705a72a6b1",
  measurementId: "G-WN7RDW8TJQ"
};


firebase.initializeApp(firebaseConfig);


export { firebase };