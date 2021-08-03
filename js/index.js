import drawPokecards from "./drawPokecards.js";
import generatePokemons from "./generatePokemons.js";
import gameCompleted from "./gameCompleted.js";
import fireworks from "./fireworks.js";
import checkMatch from "./checkMatch.js"
const pokemons = generatePokemons(6);
drawPokecards(pokemons);

const $allCards = document.getElementsByClassName("card");
var $cardSelectedA = undefined,
    $cardSelectedB = undefined;
document.addEventListener("click", e =>{
    if(
        e.target.parentElement.classList.contains("card") && 
        e.target.parentElement.classList.contains("resolved") == false
    ){
        let $clickedCard = e.target.parentElement;
        $clickedCard.classList.add("card--show");
        if($cardSelectedA == undefined){
            $cardSelectedA = $clickedCard;
        }else{
            if($cardSelectedA !== $clickedCard){
                $cardSelectedB = $clickedCard;
                [$cardSelectedA, $cardSelectedB] = checkMatch($cardSelectedA, $cardSelectedB);
            }
        }
    }
    gameCompleted($allCards)? fireworks(): null;
});




