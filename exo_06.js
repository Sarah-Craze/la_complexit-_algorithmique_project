// La fonction ex6 prend un tableau d'entiers (arr).
function ex6(arr) {
    // Initialise deux variables, current pour suivre la hauteur maximale actuelle et res pour compter les bâtiments avec vue à l'ouest.
    let current = 0;
    let res = 0;

    // La boucle (for x) parcourt les bâtiments de droite à gauche.
    for (let x = arr.length - 1; x >= 0; x--) {
        // Si la hauteur du bâtiment actuel est plus grande que la hauteur maximale actuelle,
        if (arr[x] > current) {
            // Met à jour la hauteur maximale et incrémente le compteur.
            current = arr[x];
            res++;
        }
    }

    // Retourne le nombre total de bâtiments avec vue à l'ouest.
    return res;
}

// Appelle la fonction ex6 avec le tableau [3, 7, 8, 3, 6, 1],
// et affiche le résultat dans la console.
console.log(ex6([3, 7, 8, 3, 6, 1]));
