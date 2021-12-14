// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLskexLdvbJSlD04YSG5ClxSBlVciYRYM",
  authDomain: "sweteam7-e8997.firebaseapp.com",
  projectId: "sweteam7-e8997",
  storageBucket: "sweteam7-e8997.appspot.com",
  messagingSenderId: "653260721309",
  appId: "1:653260721309:web:339ef347175ab2cedd9874",
  measurementId: "G-8TSLXBP6N0"
};

// Initialize Firebase
export const db = initializeApp(firebaseConfig);
export const analytics = getAnalytics(db);

export default db;
