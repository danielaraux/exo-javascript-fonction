let affichage = ""; // Pour garder en mémoire ce qui est entré sur la calculatrice

let display = document.getElementById("affichageNombres"); // On crée une variable qu'on nomme "display" qui va afficher le contenu de "affichageNombres" sur le cadran de la calculatrice.


function nombres(btn) {             // On crée un argument "btn" en commun pour tous les boutons
    let valeur = btn.innerText;     // lit le texte du bouton ex. 4
    affichage += valeur;            // ajoute ce chiffre à la chaine de caractères
    display.innerText = affichage;  // met à jour l'affichage
}

function operation(btn) {
    let valeur = btn.innerText;     // lit le texte ex. +, -, * ect
    affichage += valeur;            // ajoute ce caractère à la chaine de caractères
    display.innerText = affichage;  //met à jour l'affichage
}

function reset() {
    affichage = "";             // vide la mémoire
    display.innerText = "0";    // reset l'affichage
}

function egal() {
    let result = eval(affichage);   // fait le calcul
    affichage = result + "";        // met le calcul en chaine de caractères
    display.innerText = affichage;  // affiche le resultat
}






// function executerOperation(addition, soustraction, multiplier, diviser) {
// }


// function addition(a, b) {
//     return a + b
// }

// function soustraction(a, b) {
//     return a - b
// }

// function multiplier(a, b) {
//     return a * b
// }

// function diviser(a, b) {
//     return a / b
// }