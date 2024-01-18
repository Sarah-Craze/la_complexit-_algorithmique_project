// La fonction ex2 prend un tableau d'entiers (buildings) représentant la hauteur des immeubles en étages.
function ex2(buildings) {
    // Initialise le compteur à 0 pour compter les bâtiments avec une vue à l'ouest.
    let count = 0;

    // La première boucle (x) parcourt chaque bâtiment.
    for (let x = 0; x < buildings.length; x++) {
        // Initialise la variable taller à true. Elle indique si le bâtiment a une vue à l'ouest par défaut.
        let taller = true;

        // La deuxième boucle (y) compare la hauteur du bâtiment actuel avec les bâtiments à l'ouest.
        for (let y = x + 1; y < buildings.length; y++) {
            // Si un bâtiment à l'ouest a une hauteur supérieure ou égale, le bâtiment actuel n'a pas de vue à l'ouest.
            if (buildings[y] >= buildings[x]) {
                taller = false;
                // Sort de la boucle dès qu'un bâtiment bloque la vue à l'ouest.
                break;
            }
        }

        // Si le bâtiment actuel a une vue à l'ouest, incrémente le compteur.
        if (taller) {
            count++;
        }
    }

    // Retourne le nombre total de bâtiments avec vue à l'ouest.
    return count;
}

// Appelle la fonction ex2 avec le tableau [1, 4, 5, 8] et affiche le résultat dans la console.
console.log(ex2([1, 4, 5, 8]));
