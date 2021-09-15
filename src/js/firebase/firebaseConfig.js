import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWAihX0fGNEw0yzPdpjXPmVK4jOplrXgg",
    authDomain: "pokememory-75b6d.firebaseapp.com",
    projectId: "pokememory-75b6d",
    storageBucket: "pokememory-75b6d.appspot.com",
    messagingSenderId: "253441683005",
    appId: "1:253441683005:web:f90d76d5b62ae9c6dd0454",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
