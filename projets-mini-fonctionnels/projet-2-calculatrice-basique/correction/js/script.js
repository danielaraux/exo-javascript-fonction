// Correction de William


// On déclare la variable affichage qui va stocker la valeur de nb1 (qui sera le premier champ de la calculatrice)
let affichage = "nb1"


// On crée une fonction "afficherNombre" qui va afficher les nombres de la calculatrice
function afficherNombre(nombre) {

    document.getElementById(affichage).innerText += nombre

    if (affichage.innerText == 0) {
        document.getElementById(affichage).innerText = ""
    }
}

// On crée une fonction operation pour les +, -, *, / (operande) pour le deuxième champ de la calculatrice
function addOperande(operande) {
    affichage = "nb2"
    document.getElementById("operande").innerText = operande

}

function divideNumber(nb1, nb2) {
    return nb1 / nb2
}

function multiplyNumber(nb1, nb2) {
    return nb1 * nb2
}

function addNumber(nb1, nb2) {
    return nb1 + nb2
}

function minusNumber(nb1, nb2) {
    return nb1 - nb2
}


// On crée une fonction pour faire le résultat dans le troisième champ
function result() {
    let nb1 = Number(document.getElementById("nb1").innerText)
    let nb2 = Number(document.getElementById("nb2").innerText)
    let operande = (document.getElementById('operande').innerText)

    let total = 0


    switch (operande) {
        case "+":
            total = addNumber(nb1, nb2)
            break
        case "-": 
            total = minusNumber(nb1, nb2)
            break

        case "*": 
            total = multiplyNumber(nb1, nb2)
            break

        case "/": 
            total = divideNumber(nb1, nb2)
            break
        default:
            console.log("erreur")
    }
    document.getElementById("result").innerText = total
}

// On crée la fonction pour reset le cadran
function effacerNombre() {

    document.getElementById("nb1").innerText = 0
    document.getElementById("operande").innerText = ""
    document.getElementById("nb2").innerText = ""
    document.getElementById("result").innerText = ""
    affichage = 'nb1'
}