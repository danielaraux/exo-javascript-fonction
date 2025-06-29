// On crée notre variable tableau avec nos nombres
//On crée le forEach qui pointe sur notre tableau avec la fonction anonyme pour les nombres qu'on veut afficher. ça s'affiche bien.

// On refais un forEach pour le callback (rappeler la fonction anonyme) pour lui faire afficher les nombres et l'index pour la position. On y ajoute également un console.log pour afficher la phrase donc pour chaque nombre. (Pour chaque nombre, on affiche la phrase avec le nombre et la position)

let tableau = [10, 20, 30, 40]


tableau.forEach(function (nombres) {
    console.log(nombres)
})

tableau.forEach(function (nombres, index) {
    console.log(`Le nombre ${nombres} est à l'index ${index}`)
})