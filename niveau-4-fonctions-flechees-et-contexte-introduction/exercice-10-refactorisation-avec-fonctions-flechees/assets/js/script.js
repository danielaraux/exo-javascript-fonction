// Version fonction fléchée :

// On déclare notre variable avec l'argument nom. (car en version fonction fléchée, function ne fonctionne pas, il faut utiliser une variable à la place).

// On affiche la phrase bonjour avec l'argument nom.
// On appelle notre fonction saluerNom en précisant pour chaque appel, un prénom.

let saluerNom = (nom) => console.log(`Bonjour, ${nom} !`)

saluerNom("Alice");
saluerNom("Henri");
saluerNom("Jamie");



//Version en fonction fléchée :


// Nous crééons notre variable additionner avec en arguments a et b (car fonction fléchée ne prend pas en compte la function)
// Nous retournons la somme (a + b)

// Nous vérifions avec un console.log, il est aussi possible de stocker le résultat dans une variable et d'afficher la variable ensuite en console.log
//exemple : let somme = additionner(5, 5) ensuite console.log(somme)

let additionner = (a, b) => a + b


console.log(additionner(5, 5))

console.log(additionner(10, 5))

console.log(additionner(15, 5))


