import { getScores } from "../firebase/getScores";
import templateRankingtable from "./templateRankingTable";

export const rankingScreen = async () =>{
    const $rankingContainer = document.createElement('div');
    $rankingContainer.classList.add("end-screen");
    $rankingContainer.classList.add("hidden");

    $rankingContainer.innerHTML = templateRankingtable;
    document.querySelector('.body').prepend($rankingContainer);
    let tableElements = '';
    getScores().then(players =>{
        players.forEach(player => {
            tableElements+=`<tr><th>${player.Player}</th> <th>${player.score}</th></tr>`
        })
        document.querySelector('.body-table').innerHTML = tableElements; 
        $rankingContainer.classList.toggle('hidden');
    })

    

}