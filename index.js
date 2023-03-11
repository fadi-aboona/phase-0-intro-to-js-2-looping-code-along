
const messageNames = [];

function writeCards(names, surprise) {
    for (let i = 0; i < names.length; i++) {
        messageNames.push (`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return messageNames
    writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
}




function countDown() {
    let number = 10
    while (number > -1) {
        console.log(number--)
    }
}