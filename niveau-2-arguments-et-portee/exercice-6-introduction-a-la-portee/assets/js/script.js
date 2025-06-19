let messageGlobal = "Je suis global"

function afficherMessages() {
    let messageLocal = "Je suis local"

    console.log(messageGlobal, messageLocal)
}

console.log(messageLocal)


// la variable messageLocal ne peut pas être utilisée en dehors de la portée de sa fonction sans appeler la fonction directement.
// Elle a été définie dans la fonction, contrairement à la variable messageGlobal qui, elle peut être utilisée hors de la fonction avec un console.log