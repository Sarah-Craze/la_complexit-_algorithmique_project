// La fonction ex5 prend un tableau d'entiers (array) et un nombre (nmb).
function ex5(array, nmb) {
    // La boucle (for x) parcourt chaque élément du tableau.
    for (let x = 0; x < array.length; x++) {
        // Calcule la différence nécessaire pour obtenir la somme nmb.
        let res = nmb - array[x];

        // Utilise slice pour obtenir une sous-liste des éléments avant l'élément actuel (array[0] à array[x-1]).
        // Vérifie si la sous-liste inclut la différence res.
        if (array.slice(0, x).includes(res)) {
            // Si la paire est trouvée, retourne true.
            return true;
        }
    }

    // Si aucune paire n'est trouvée, retourne false.
    return false;
}

// Appelle la fonction ex5 avec le tableau [10, 15, 3, 7] et le nombre 20,
// et affiche le résultat dans la console.
console.log(ex5([10, 15, 3, 7], 20));
