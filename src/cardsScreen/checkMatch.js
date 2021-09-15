import hideCards from "./hideCards.js";
export default function checkMatch($cardA, $cardB){
    if($cardA.getAttribute("id") === $cardB.getAttribute("id")){
        $cardA.classList.add("resolved");
        $cardB.classList.add("resolved");
    }else{
        $cardB.addEventListener(
            "transitionend",
            () => hideCards($cardA, $cardB),
            {once: true}
        );
    }
    return [undefined, undefined];
}
