export default function gameCompleted($allCards){
    let win = true;
    for(let i = 0; i < $allCards.length; i++){
        if(!$allCards[i].classList.contains("resolved")){
            win = false;
            break;
        }
    }
    return win;
}
