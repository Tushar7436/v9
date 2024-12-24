// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // If using Firestore
// import { getDatabase } from 'firebase/database'; // If using Realtime Database

const firebaseConfig = {
    apiKey: "AIzaSyBtQb2_ttnuFUSIgwA_qgTF9zChHBe-VB4",
    authDomain: "ieee-c06dc.firebaseapp.com",
    databaseURL: "https://ieee-c06dc-default-rtdb.firebaseio.com",
    projectId: "ieee-c06dc",
    storageBucket: "ieee-c06dc.appspot.com",
    messagingSenderId: "491571358245",
    appId: "1:491571358245:web:dfb54f802bd256c1b46dcc",
    measurementId: "G-KJ68QVR1VC"
  };
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); 
export default app;