// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
//     (prima senza funzione e poi con funzione)

const word = prompt('Inserisci una Parola');

// console.log(word.split('').reverse().join(''));

if (word.split('').reverse().join('') == word) {
    console.log('la parola è palindroma');
} else {
    console.log('non è palindroma');
}
