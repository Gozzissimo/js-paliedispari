// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
//     (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

const pariDispari = prompt('vuoi pari o dispari?').toLocaleLowerCase();
console.log(pariDispari);

const userNum = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(userNum);

const pcNum = Math.floor(Math.random() * 5) + 1;
console.log(pcNum);

let numSum = userNum + pcNum;
console.log(numSum);

if (numSum % 2 == 0) {
    if (pariDispari == 'pari') {
        console.log('Hai Vinto');
    } else {
        console.log('Hai Perso');
    }
} else {
    if (pariDispari == 'dispari') {
        console.log('Hai Vinto');
    } else {
        console.log('Hai Perso');
    }
}


// funzioni

// numeri a caso compresi
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// somma
function sum(num1, num2) {
    return num1 + num2;
}

// pari o dispari
function isEvenorOdd(num) {
    if (num % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}




