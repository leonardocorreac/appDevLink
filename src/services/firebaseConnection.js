// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD7GK7tqefaDyFcEYISwTEa1KmRKOav9lw",
  authDomain: "devlinks-e8240.firebaseapp.com",
  projectId: "devlinks-e8240",
  storageBucket: "devlinks-e8240.appspot.com",
  messagingSenderId: "14045008072",
  appId: "1:14045008072:web:e837e08f8b15994eb2d5fd",
  measurementId: "G-98S9BQHDSZ"
};
const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth}