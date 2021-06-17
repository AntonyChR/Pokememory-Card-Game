document.addEventListener("click", e =>{
    const $card = document.querySelector(".card")
    const $front = document.querySelector(".card_front")
    const $back = document.querySelector(".card_back")
    if (e.target.parentElement == $card){
        $card.classList.toggle("card--show");
        console.log($card)
    }
})