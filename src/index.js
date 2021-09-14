import { startScreen } from "./js/startScreen/startScreen.js";
import { mainLogic } from "./js/cardsScreen/mainLogic.js";
import { registerScore } from "./js/firebase/registerScore.js";

startScreen.then((playerName)=>{
    document.querySelector('.start-screen').remove();
    document.querySelector('.cards-container').classList.toggle('hidden');
    mainLogic.then((score)=> {
        registerScore(playerName,score);
        //selebration song
        //show all scores -> with retart buttom

    });
});





