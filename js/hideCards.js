export default function hideCard($cardA, $cardB){
    document.querySelector(".error__sound").play()
    $cardB.classList.remove("card--show");
    $cardA.classList.remove("card--show");
}
