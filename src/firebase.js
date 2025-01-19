// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

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
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app); 

export const analytics = getAnalytics(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, googleProvider, auth,signInWithPopup, db };
export default app;