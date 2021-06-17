import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

/*const firebaseConfig = {
  apiKey: "AIzaSyDN0tZ6OT-AIrcs-14nl5jhROIh4-O7S2s",
  authDomain: "pebble-2ef37.firebaseapp.com",
  projectId: "pebble-2ef37",
  storageBucket: "pebble-2ef37.appspot.com",
  messagingSenderId: "718216776228",
  appId: "1:718216776228:web:e8464d706975705a72a6b1",
  measurementId: "G-WN7RDW8TJQ"
};*/

const firebaseConfig = {
    apiKey: "AIzaSyDIFPvyNT5z72rHr1srQjBUZaZmWUuzRgQ",
    databaseURL: "https://pebble-d2835-default-rtdb.asia-southeast1.firebasedatabase.app",
    authDomain: "pebble-d2835.firebaseapp.com",
    projectId: "pebble-d2835",
    storageBucket: "pebble-d2835.appspot.com",
    messagingSenderId: "236624507943",
    appId: "1:236624507943:web:4e729b4257cbb73dc20a02",
    measurementId: "G-T3DG8HHH48"
};

firebase.initializeApp(firebaseConfig);


export { firebase };