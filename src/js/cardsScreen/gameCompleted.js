export default function gameCompleted(){
    const $allCards = document.querySelectorAll(".card");
    let win = true;
    for(let i = 0; i < $allCards.length; i++){
        if(!$allCards[i].classList.contains("resolved")){
            win = false;
            break;
        }
    }
    return win;
}
