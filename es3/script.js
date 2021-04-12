// chiediamo i 10 numeri all'utente
// li salviamo in un array
var numeriSomma = [];

for(var i = 0; i < 10; i++) {
    numeriSomma[i] = parseInt(prompt("inserisci il numero " + i));
    
    // controllo che sia un numero
    // controllo l'input
    // se non fossero numeri 
    // Number.isNaN ---> true se numeriSomma[i] è NaN
    // Number.isNaN ---> false se numeriSomma[i] è un number 
    if (Number.isNaN(numeriSomma[i])) {
        console.log("inserire un numero");
        // decremento il contatore per reinserire il dato sbagliato
        i--;
    }
}

console.log(numeriSomma);
 

// il programma effettua la somma di tutti i numeri inseriti
var somma = 0;

for(var i = 0; i < numeriSomma.length; i++) {
    somma += numeriSomma[i];
}

// effettuo l'output del programma number se è ok
console.log(somma);