
async function grabPokemon(self) {
    var res = await fetch("https://pokeapi.co/api/v2/pokemon/" + self.value)
    var formattedRes = await res.json();
    console.log(formattedRes);
    document.querySelector("#pokeImg").src = formattedRes.sprites.front_default;
}