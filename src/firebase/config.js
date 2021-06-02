import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

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