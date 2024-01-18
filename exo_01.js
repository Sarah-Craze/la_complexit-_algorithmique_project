// La fonction ex1 prend un tableau d'entiers (array) et un nombre cible (nmb) en paramètres.
function ex1(array, nmb) {
    // La première boucle (x) parcourt chaque élément du tableau.
    for (let x = 0; x < array.length; x++) {
        // La deuxième boucle (y) parcourt les éléments restants du tableau après l'élément actuel de la première boucle.
        for (let y = x + 1; y < array.length; y++) {
            // À chaque itération, vérifie si la somme des deux nombres est égale au nombre cible.
            if (array[x] + array[y] === nmb) {
                // Si la condition est vraie, retourne true.
                return true;
            }
        }
    }
    // Si aucune paire de nombres n'a été trouvée après toutes les itérations, retourne false.
    return false;
}

// Appelle la fonction ex1 avec le tableau [10, 15, 3, 7] et le nombre cible 19, puis affiche le résultat dans la console.
console.log(ex1([10, 15, 3, 7], 19));