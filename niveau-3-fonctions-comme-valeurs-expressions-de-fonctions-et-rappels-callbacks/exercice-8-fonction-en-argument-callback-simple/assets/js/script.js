// executerOperation et operation sont des fonctions utiles si on veut faire plusieurs opérations sans avoir a faire beaucoup de code en retappant les operations. ca permet une meilleure ergonomie du code.

function executerOperation(nombre1, nombre2, operation) {
    return operation(nombre1, nombre2)
}

// Les fonctions vont additioner ou soustraire les nombres qu'on précisera dans le console.log
function addition(a, b) {
    return a + b
}

function soustraction(a, b) {
    return a - b
}

console.log(executerOperation(4, 6, addition))
console.log(executerOperation(6, 4, soustraction))

