import { fetchCharacters, maxPage, page, setPage } from "../../index.js";

const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

function setPaginationText() {
    pagination.textContent = `Page ${page} / ${maxPage}`;
}

export function updatePagination() {
    prevButton.addEventListener(("click"), async () => {
        if (page === 1) {
            return;
        } else {
            setPage(page - 1);
        }

        await fetchCharacters();
        setPaginationText();
    })

    nextButton.addEventListener(('click'), async () => {
        if (page === maxPage) {
            return;
        } else {
            setPage(page + 1);
        }

        await fetchCharacters();
        setPaginationText();
    })
    setPaginationText();    
}
