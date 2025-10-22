export function createCharacterCard(character) {
  const newCard = document.createElement("li");

  const name = character.name;
  const status = character.status;
  const type = character.type;
  const occurence = character.episode.length;
  const img = character.image;

  newCard.innerHTML = `
          <div class="card__image-container">
            <img
              class="card__image"
              src="${img}"
              alt="Rick Sanchez"
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${occurence}</dd>
            </dl>
          </div>`;

  return newCard;
}
