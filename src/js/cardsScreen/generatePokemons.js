export default function generatePokemons(numPokemons){
    const randomNumber = (max) => Math.floor(Math.random() * max) + 1;
    const pokemonsNumbers = [
      ...new Set(
        Array.from({ length: numPokemons }).map((n) => randomNumber(200))
      ),
    ];
    const pokemonsPairs = [...pokemonsNumbers,...pokemonsNumbers].sort(()=>Math.random() - 0.5);

    return pokemonsPairs.length == numPokemons * 2 ? pokemonsPairs : generatePokemons(numPokemons);
}