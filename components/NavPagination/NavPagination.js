////// Aufgabe 4 //////

// 20 charakter pro seite, seiten wollen wir hin und her wechseln
    // füge diesen string zur api url hinzu: ?page=<pageIndex> (*Siehe fetch color api übung, um sowas an die url zu hängen)
        // apiUrl aus index.js importieren
    // in index.js steht const page = 1
        // das ist der index für unsere page
        // const page aus index.js importieren
    // in dem übergeordneten api ergebnis (nicht einzelner charakter) steht "info": { "pages": 42}
        // das ist max pages
        // data aus index.js importieren
    // event listener auf den prev + next buttons
        // auf buttons in html data-js implementieren
        // querySelector auf buttons zugreifen
        // fetchCharacters Funtkion aufrufen
            // aus index.js fetchCharacters() importieren
        // prev button
            // darf nur runter gehen
            // page -1
            // bei page 1 darf nicht weiter runter gehen
                // if page = 1 -> darf page -1 nicht stattfinden
        // next button
            // darf nur hoch gehen
            // page + 1
            // bei max page (also page 42 (also in dem api result unter info, dann unter pages)) darf nicht höher gehen
                // if page = maxCount -> darf page +1 nicht stattfinden
    // die pagination zahl soll immer wenn neue charaktere gefetched werden updaten
        // aktuelle seite anzeigen und max pages anzeigen? 
            // page: 2/42