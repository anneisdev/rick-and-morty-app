////// Aufgabe 5 //////

// immer wenn ich suchleiste was eingegeben wird, ändert sich die auswahl an cards
<<<<<<< HEAD
    // submit event listeneer auf die search bar
        // document.querySelector
        // data-js in html implementieren
        // update searchQuery
            // import searchquery aus index.js
            // text, der in search bar steht, soll in searchQuery eingesetzt werden
        // url anpassen auf: &name=<searchQuery>
            // append &name=<searchQuery> an url
        // aufruf der fetchCharacters() Funtkion aus index.js
            // import fetchCharacters()
=======
// submit event listeneer auf die search bar
// document.querySelector
// data-js in html implementieren
// update searchQuery
// import searchquery aus index.js
// text, der in search bar steht, soll in searchQuery eingesetzt werden
// url anpassen auf: &name=<searchQuery>
// append &name=<searchQuery> an url
// aufruf der fetchCharacters() Funtkion aus index.js
// import fetchCharacters()

import {
  searchBar,
  fetchCharacters,
  searchQuery,
  setQuery,
} from "../../index.js";

//   searchBar.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData);

//   console.log(data)

export function bla() {
  searchBar.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);

    setQuery((searchQuery = data));
  });
}
>>>>>>> searchbar
