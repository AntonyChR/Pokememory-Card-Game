import db from "./firebaseConfig";
import { getDocs, collection } from "@firebase/firestore";

export const getScores = async () => {
    const scoresSnap = await getDocs(collection(db, "scores"));
    let scoreHistory = [];
    scoresSnap.forEach((player) => {
        scoreHistory.push(player.data());
    });
    scoreHistory.sort((a, b) => a.score - b.score);
    return scoreHistory;
};
