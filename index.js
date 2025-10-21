import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { updatePagination } from "./components/NavPagination/NavPagination.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
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

  cardContainer.innerHTML = "";

  characters.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });

  console.log(data);
}

await fetchCharacters();
updatePagination();
