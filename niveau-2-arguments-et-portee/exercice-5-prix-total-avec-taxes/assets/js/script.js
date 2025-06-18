// On crée notre fonction
//On y ajoute nos deux arguments, pour le TVA comme il faut lui mettre une valeur par défaut, on lui met le 0.20
// dans la fonction, on retourne le calcul (prixTTC = prixHT + (prixHT x tauxTVA))

//Nous testons ensuite en précisant un taux de TVA et en ne le faisant pas ensuite.



function calculerPrixTotal(prixHT, tauxTVA = 0.20) {

    return prixTTC = prixHT + (prixHT * tauxTVA)
}

// Version en précisant le taux de TVA
calculerPrixTotal(8, 0.30)

console.log(prixTTC + " " + "€")

// Version sans préciser le taux de TVA, ça prend bien par défaut le 0.20 précisé dans l'argument
calculerPrixTotal(8)

console.log(prixTTC + " " + "€")