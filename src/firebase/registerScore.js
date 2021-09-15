import { addDoc, collection } from "@firebase/firestore";
import db from "./firebaseConfig.js";

export const registerScore = async (playerName, score) => {
    const data = {
        Player: playerName,
        score: score,
    };

    const docRef = addDoc(collection(db, `/scores/`), data);
};
