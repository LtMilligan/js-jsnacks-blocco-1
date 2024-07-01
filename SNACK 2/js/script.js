// Creo un array vuoto.
const numeriUser = []

// Creo un ciclo FOR con 6 iterazioni con il prompt per far insierire i dati all'user
for (let i = 1; i <= 6; i++) {
    let numberz = prompt('Inserisci un numero')
    // Calcolo tramite IF se il valore inserito è pari o dispari
    // In caso di dato dispari, faccio il push all'interno dell'arrey.
    if (numberz % 2 !== 0) {
        numeriUser.push(numberz)
    }
}

console.log(numeriUser)