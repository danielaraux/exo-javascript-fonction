let tasks = []
let id = 85

function ajouterTache(description) {

    tasks.push({
        id: id++,
        description: description
    })

}

function afficherTaches() {
    tasks.forEach(element => console.log(`La tâche est ${element.description} et son id est ${element['id']}`))
}

function supprimerTache(id) {

    // let index = tasks.findIndex(element => element.id == id)
    // tasks.splice(index, 1)

    tasks = tasks.filter(element => element.id != id)

}


ajouterTache('Manger')
ajouterTache('Dormir')
ajouterTache('Boire')

console.table(tasks)

supprimerTache(85)

afficherTaches()