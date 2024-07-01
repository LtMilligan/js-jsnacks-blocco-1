const btnSomma = document.getElementById('generaSomma')

btnSomma.addEventListener('click', function () {
    let userNumber = document.getElementById('numeroUser').value
    const stringArray = userNumber.split('')
    const numberArray = []
    for (let i = 0; i < stringArray.length; i++) {
        numberArray.push(parseInt(stringArray[i]))
    }
    console.log(numberArray)
    let somma = 0
    for (let j = 0; j < numberArray.length; j++) {
        somma += numberArray[j]
    }
    document.getElementById('risultatoSomma').innerText = somma
})


