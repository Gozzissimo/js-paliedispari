// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
//     (prima senza funzione e poi con funzione)

// 1.
    const word = prompt('Inserisci una Parola').toLowerCase();

    // // console.log(word.split('').reverse().join(''));

    // if (word.split('').reverse().join('') == word) {
    //     console.log('la parola è palindroma');
    // } else {
    //     console.log('non è palindroma');
    // }


// 2.
function isPalindrome(string) {

    if (word == word.split('').reverse().join('')) {
        return 'la parola è palindroma';
    } else {
        return 'la parola non è palindroma';
    }
}

console.log(isPalindrome(word));