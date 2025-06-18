// // On déclare notre variable qui vaut "toto"
// let mot = "toto"


// // On appelle notre fonction qu'on appelle firstLetterMaj et qui pointe vers notre variable précédente.
// firstLetterMaj(mot)


// function firstLetterMaj(mot) {

//     // On récupère la première lettre
//     let firstLetter = mot.charAt(0)

//     // On le transforme en majuscule
//     firstLetterMaj = firstLetter.toUpperCase()


//     console.log(mot)



//     // // On supprime la premiere lettre du mot à l'aide de slice
//     // let motSansPremiereLettre = mot.slice(1)



//     // // On concatène notre premierelettreMajuscule

//     // mot = premiereLettre + motSansPremiereLettre

//     // console.log(mot)

//     // return mot

// }


// console.log(premiereLettreMajuscule("sarAH"))





// On déclare notre fonction welcome qui est l'algo qui ouvre une pop up qui demande le nom et qui redirige vers un message (variable sentence), via un bouton mis sur l'index.html
function welcome() {


    // On déclare notre fonction nom qui sera précisée en prompt
    let nom = prompt("Veuillez saisir votre nom : ")

    // On 
    let sentence = (`Bonjour ${nom}, bienvenue à la formation DWWM au Havre`)

    document.write(sentence)

}




// // On déclare notre fonction
// function welcome() {

//     On
//     let nom = prompt("Veuillez saisir votre nom : ")

//     let sentence = (`Bonjour ${nom}, bienvenue à la formation DWWM au Havre`)

//     document.getElementById("message")

// }

