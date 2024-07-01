// Creare un array con i nomi degli invitati.
const invitati = ['Pippo', 'Paperino', 'Qui', 'Quo', 'Archimede']

// Confronto il dato dell'user con i nomi nell'array.

const btnConferma = document.getElementById('confermaInvito')

let validUser = false
console.log(validUser)

btnConferma.addEventListener('click', function () {
    let userName = document.getElementById('invitato').value
    console.log(userName)
    console.log(validUser)
    for (let i = 0; i < invitati.length; i++) {
        if (invitati[i] == userName) {
            validUser = true
        }
    }
    console.log(validUser)
    

})