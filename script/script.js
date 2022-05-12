import getData from "../helpers/getData.js";
import printCharacter from "../modules/printCharacters.js";
import search from "../modules/search.js";

const url = 'https://rickandmortyapi.com/api/character';
const main = document.getElementById('main');
const form = document.getElementById('form');
let character;

document.addEventListener('DOMContentLoaded', async () =>{
    character = await getData(url);
    printCharacter(character, main);
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const value = document.getElementById('search').value;
    console.log(character)
    printCharacter(search(value, character, main), main);
})