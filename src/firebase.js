// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ5lv8Y1KGQ1SZMREI9u31deU6fMHv7pk",
  authDomain: "firestore-app-3-166d0.firebaseapp.com",
  projectId: "firestore-app-3-166d0",
  storageBucket: "firestore-app-3-166d0.appspot.com",
  messagingSenderId: "639275381940",
  appId: "1:639275381940:web:6b4a508daef745945253e1",
  measurementId: "G-32R61R4LY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);

export {db,app}