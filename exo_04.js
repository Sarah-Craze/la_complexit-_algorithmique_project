// La fonction ex4 prend un tableau d'entiers (arr).
function ex4(arr) {
    // Initialise la hauteur maximale rencontrée à 0.
    let current = 0;
    // Initialise le résultat (nombre de bâtiments avec vue à l'ouest) à 0.
    let res = 0;

    // La boucle (for x) parcourt les bâtiments de droite à gauche.
    for (let x = arr.length - 1; x >= 0; x--) {
        // Compare la hauteur du bâtiment actuel avec la hauteur maximale rencontrée.
        if (arr[x] > current) {
            // Si le bâtiment actuel est plus grand, met à jour la hauteur maximale et incrémente le résultat.
            current = arr[x];
            res++;
        }
    }

    // Retourne le nombre total de bâtiments avec vue à l'ouest.
    return res;
}

// Appelle la fonction ex4 avec le tableau [3, 7, 8, 3, 6, 1],
// et affiche le résultat dans la console.
console.log(ex4([3, 7, 8, 3, 6, 1]));
