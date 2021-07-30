export default function drawPokecards(numbers){
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";
    const $cardsContainer = document.querySelector(".cards-container");
    numbers.forEach(pokemon => {
        let $card = document.createElement("div");
        $card.classList.add("card");
        $card.setAttribute("id", `${pokemon}`);
        $card.innerHTML = 
            `
            <div class="card__front">
                <img src="${url}/${pokemon}.png" alt="pokemon" class="card__img">
            </div>
            <div class="card__back">
            </div>
            `;
            $cardsContainer.appendChild($card);
        });

}