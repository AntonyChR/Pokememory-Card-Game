import { startScreen } from "./startScreen/startScreen.js";
import { mainLogic } from "./cardsScreen/mainLogic.js";
import { registerScore } from "./firebase/registerScore.js";
import { rankingScreen } from "./rankingScreen/rankingScreen.js";

startScreen.then((playerName)=>{
    document.querySelector('.start-screen').remove();
    document.querySelector('.cards-container').classList.toggle('hidden');
    mainLogic.then((score)=> {
        registerScore(playerName,score);
        rankingScreen();
    });
});





