import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
<<<<<<< HEAD
import { updatePagination } from "./components/NavPagination/NavPagination.js";
=======
>>>>>>> searchbar

const cardContainer = document.querySelector('[data-js="card-container"]');
export const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
<<<<<<< HEAD
export let page = 1;
export let maxPage;
const searchQuery = "";

export function setPage(newPage) {
 page = newPage; 
}

export async function fetchCharacters() {
  const apiUrl = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const data = await apiUrl.json();

  maxPage = data.info.pages;
  let characters = data.results;
=======
let maxPage = 1;
let page = 1;
let searchQuery = "";

export async function fetchCharacters() {
  const apiUrl = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await apiUrl.json();

  const characters = data.results;
>>>>>>> searchbar

  cardContainer.innerHTML = "";

  characters.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });

<<<<<<< HEAD
  console.log(data);
}

await fetchCharacters();
updatePagination();
=======
  console.log(characters);
}

fetchCharacters();

function Search() {
  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (data.query) {
      searchQuery = data.query;
    } else {
      searchQuery = "";
    }

    page = 1;
    console.log(data);
    fetchCharacters();
  });
}
Search();
>>>>>>> searchbar
