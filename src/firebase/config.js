import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDIFPvyNT5z72rHr1srQjBUZaZmWUuzRgQ",
  authDomain: "pebble-d2835.firebaseapp.com",
  databaseURL: "https://pebble-d2835-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pebble-d2835",
  storageBucket: "pebble-d2835.appspot.com",
  messagingSenderId: "236624507943",
  appId: "1:236624507943:web:62a60190c94817dec20a02",
  measurementId: "G-JBQB4XW21B"
};


firebase.initializeApp(firebaseConfig);


export { firebase };
