import checkMatch from "./checkMatch.js";
import drawPokecards from "./drawPokecards.js";
import gameCompleted from "./gameCompleted.js";
import generatePokemons from "./generatePokemons.js";

export const mainLogic = new Promise((resolve, reject) =>{
    const pokemons = generatePokemons(6);
    drawPokecards(pokemons);
    let attempts = 0;
    var $cardSelectedA = undefined,
        $cardSelectedB = undefined;
    document.addEventListener("click", e =>{
        let $clickedCard = e.target.parentElement;
        if(
            $clickedCard.classList.contains("card") && 
            $clickedCard.classList.contains("resolved") == false
        ){
            $clickedCard.classList.add("card--show");
            document.querySelector(".turn-card__sound").play()
            if($cardSelectedA == undefined){
                $cardSelectedA = $clickedCard;
            }else{
                if($cardSelectedA !== $clickedCard){
                    $cardSelectedB = $clickedCard;
                    [$cardSelectedA, $cardSelectedB] = checkMatch($cardSelectedA, $cardSelectedB);
                    attempts += 1;
                }
            }
        }
        if(gameCompleted() === true){
            resolve(attempts)
        } 
    });
});