// Une fonction anonyme est une fonction qui n'a pas de nom mais qui peut avoir des arguments.
// On l'attribue a une variable que l'on viens de déclarer et on lui ajoute ses deux arguments.
// Dans le cas de l'exo on va prendre a et b car nous voulons multiplier.

// Nous faisons un return a x b et nous affichons ensuite en console.log, la variable "multiplier" qui va appeler la fonction anonyme pour executer l'opération a x b

let multiplier = function (a, b) {
    return a * b
}

console.log(multiplier(4, 4))