// prendo le due stringhe di input 
var str1 = prompt("inserire la prima stringa");
var str2 = prompt("inserire la seconda stringa");

// effettuo i controlli sull'input
// se non sono stringhe
// var isAstring;

// se utilizzo Number.isNaN non credo escluda il tutti gli oggetti non stringa
// con typeof !== non sono stato in grado
// NaN è un altro tipo 

if (!Numbers.isNaN.parseInt(str2)) {
    console.log("si prega di inserire delle stringhe");
} else if (!Numbers.isNaN.parseInt(str2)) {
    console.log("si prega di inserire delle stringhe");
} else {
    //  risolvo il problema
    //  quale delle due stringhe è più corta
    //  caso stringhe uguali 
    if (str1.length < str2.length) {
        console.log("la stringa più corta è: " + str1);
        console.log("la stringa più lunga è: " + str2);
    } else if (str2.length < str1.length) {
        console.log("la stringa più corta è: " + str2);
        console.log("la stringa più lunga è: " + str1);
    } else {
        console.log("le due stringhe sono uguali");
    }
}


// questo è il problema
isNaN()
Number.isNaN()