// Code your solutions in this file

function writeCards(nameArray, theOtherWord) {
    let phrase = []
    for (let i = 0; i < nameArray.length; i++) {
        phrase.push(`Thank you, ${nameArray[i]}, for the wonderful ${theOtherWord} gift!`);
    }
    return phrase
}

function countDown(num){
    while (num >= 0) {
        console.log(num)
        num = num - 1
    }
}