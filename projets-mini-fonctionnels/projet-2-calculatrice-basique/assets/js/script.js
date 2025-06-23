// Etape 1 : Créer les variables pour ce qu'on veut faire.
// On veut stocker les nombres ET operateurs de calcul qu'on aura tappé sur la calculatrice.
// Les afficher sur le cadran ensuite.

// On veut faire le calcul des nombres entrés avec les opérateurs de calcul.

// On veut reset le cadran avec les boutons AC et C


let affichage = ""; // Variable pour garder en mémoire ce qui est entré sur la calculatrice en string (chaine de caractères).

let display = document.getElementById("affichageNombres"); // On crée une variable qu'on nomme "display" qui va afficher le contenu de "affichageNombres" ("id" de notre cadran qui a le onclick en html) sur le cadran de la calculatrice.


// Fonction pour prendre en mémoire les nombres et les afficher sur le cadran.
function nombres(boutons) {             // On crée un argument "boutons" en commun pour tous les boutons
    let valeur = boutons.innerText;     // récupère le texte du bouton ex. "4"
    affichage += valeur;            // ajoute ce chiffre à la chaine de caractères ex. "1 + 4"
    display.innerText = affichage;  // met à jour l'affichage avec le nouveau contenu
}


// Fonction pour prendre en mémoire les operateurs de calcul et les afficher sur le cadran
function operation(boutons) {
    let valeur = boutons.innerText;     // lit le texte ex. +, -, * ect
    affichage += valeur;            // ajoute ce caractère à la chaine de caractères
    display.innerText = affichage;  //met à jour l'affichage
}



// Fonction pour vider ce qu'on a en mémoire et remettre le cadran à zéro
function reset() {
    affichage = "";             // vide la mémoire
    display.innerText = "0";    // reset l'affichage
}

// Fonction pour calculer l'opération
function egal() {
    let result = eval(affichage);   // fait le calcul
    affichage = result + "";        // met le calcul en chaine de caractères
    display.innerText = affichage;  // affiche le resultat
}






// function nombres() {
// document.getElementById("affichageNombres").innerText
// }


// function calculer(operation, num1, num2) {
//     operation = (num1, num2)
//     return operation
// }


// function add(a, b) {
//     return a + b
// }

// function substract(a, b) {
//     return a - b
// }

// function multiply(a, b) {
//     return a * b
// }

// function divide(a, b) {
//     return a / b
// }