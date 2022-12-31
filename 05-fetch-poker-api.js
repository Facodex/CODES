const GlobalUrl = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20';

const request = async () => {
    const response = await fetch(GlobalUrl);
    const data = await response.json();

    return data.results;
}

let parrafo = document.querySelector('#test');

async function showAbilities(){
    let abilities = await request();
    abilities.map((ability) => {
        parrafo.innerHTML += `Ability: ${ability.name} <br>`;
    });
    console.log(abilities);
}

showAbilities();