//generare 16 numeri casuali
var arr = [];

var numero_casuale;

while (arr.length < 16) {
    numero_casuale = Math.floor(Math.random() * 100) + 1;
    if (!arr.includes(numero_casuale)) {
        arr.push(numero_casuale)
    }
}

console.log(arr);

var arr_utente = []

var numero_utente;

do {
    //chiedere all'utente di inserire un numero
    var numero_utente = parseInt(prompt('inserisci un numero'))
    console.log(numero_utente);
    if ((numero_utente <= 100) && (numero_utente >= 1) && !arr_utente.includes(numero_utente)) {
        console.log('Bravo, continua così!');
        arr_utente.push(numero_utente)
        console.log(arr_utente);
    } else if ((numero_utente < 1) || (numero_utente > 100)){
        console.log('Inserisci un numero corretto');
    }
} while (!arr.includes(numero_utente) && arr_utente.length != 84);

if (arr_utente.length == 84) {
    console.log('Complimenti, sei riuscito ad evitare le 16 mine! Hai vinto!');
} else {
    console.log('hai perso! Hai fatto ' + arr_utente.length + ' tentativi.');
}
