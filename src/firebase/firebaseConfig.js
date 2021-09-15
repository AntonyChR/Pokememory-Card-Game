import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
/*  
    ------------> firebase configuration <----------------  
    apiKey
    authDomain
    projectId
    storageBucket
    messagingSenderId
    appId
*/
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
