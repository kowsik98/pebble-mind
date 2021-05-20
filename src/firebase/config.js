import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDIFPvyNT5z72rHr1srQjBUZaZmWUuzRgQ",
  authDomain: "pebble-d2835.firebaseapp.com",
  projectId: "pebble-d2835",
  storageBucket: "pebble-d2835.appspot.com",
  messagingSenderId: "236624507943",
  appId: "1:236624507943:ios:f053fe9707da57cec20a02",
  measurementId: "G-WN7RDW8TJQ"
};


firebase.initializeApp(firebaseConfig);


export { firebase };