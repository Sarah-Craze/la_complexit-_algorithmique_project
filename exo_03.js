// La fonction ex3 prend un tableau d'entiers (array) et un nombre (nmb).
function ex3(array, nmb) {
    // La boucle (for x) parcourt chaque élément du tableau.
    for (let x = 0; x < array.length; x++) {
        // Calcule la différence entre le nombre cible (nmb) et l'élément actuel du tableau.
        let res = nmb - array[x];

        // Utilise slice pour obtenir une sous-liste des éléments avant l'élément actuel,
        // puis vérifie si cette sous-liste contient le résultat calculé.
        if (array.slice(0, x).includes(res)) {
            // Si une paire est trouvée, retourne true.
            return true;
        }
    }

    // Si aucune paire n'est trouvée, retourne false.
    return false;
}

// Appelle la fonction ex3 avec le tableau [10, 15, 3, 7] et le nombre 18,
// et affiche le résultat dans la console.
console.log(ex3([10, 15, 3, 7], 18));
