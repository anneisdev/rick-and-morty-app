export function createCharacterCard(card) {
   const newCard = document.createElement('li') 

   newCard.innerHTML = 
   `<li class="card">
          <div class="card__image-container">
            <img
              class="card__image"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="Rick Sanchez"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">Rick Sanchez</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">Alive</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description"></dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">51</dd>
            </dl>
          </div>
        </li>`;

        return newCard;
}

////// Aufgabe 3 //////

// api infos in cards einfügen
    // in createCharacterCard() data aus index.js übergeben
        // image src
        // character name
        // character status
        // character type
        // character occurences
    // in fetchCharacters() eine foereach schleife für jeden charakter erstellen
        // für jeden charakter soll eine card erstellt werden und mit append() an cardContainer gehangen werden
    // immer wenn neuer charakter gefetched wird (mittels der fetch funktion wo wir auf die api zugreifen?)
        // soll cardcontainer leer gemacht werden
            // cardcontainer leer machen mit innerHtml = ''
// Ziel = 20 Character Cards werden dynamisch dargestellt




    
 