import { startScreen } from "./js/startScreen/startScreen.js";
import { mainLogic } from "./js/cardsScreen/mainLogic.js";
import { registerScore } from "./js/firebase/registerScore.js";
import { rankingScreen } from "./js/rankingScreen/rankingScreen.js";

startScreen.then((playerName)=>{
    document.querySelector('.start-screen').remove();
    document.querySelector('.cards-container').classList.toggle('hidden');
    mainLogic.then((score)=> {
        registerScore(playerName,score);
        rankingScreen();
    });
});





