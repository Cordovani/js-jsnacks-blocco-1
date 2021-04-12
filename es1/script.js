//creazione di 2 prompt
// l'utente deve inserire 2 numeri
var num1 = parseInt(prompt("Inserisci il primo numero"));
var num2 = parseInt(prompt("Inserisci il secondo numero"));

// devo validare i dati inseriti
if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("uno o entrambi i numeri non sono validi.");
} else {
    // controllo quale dei due numeri è maaggiore 
    var numeroMaggiore;

    if (num1 > num 2) {
        numeroMaggiore = num1;
    } else if (num2 > num1) {
        numeroMaggiore = num2;
    }

    // controllo sul numero maggiore
    // se sono stringhe o meglio non sono numeri
    if (typeof numeroMaggiore !== "number") {
        // stampo il maggiore tra i due numeri
        console.log("il numero maggiore è :" + numeroMaggiore);
    // caso in cui sono uguali i numeri  
    } else {
        console.log("i due numeri sono uguali");
    }

}


