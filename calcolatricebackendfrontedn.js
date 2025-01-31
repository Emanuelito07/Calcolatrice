let schermo = document.getElementById("schermo");

function numeribottoni(numeri) {
    
    if (schermo.value == "Err0r3") {
        schermo.value = "";
    };

    let ultimoCarattere = schermo.value.slice(-1); // prende l'ultimo carattere dell'input
    
    if ((numeri == '÷' && schermo.value.length == 0) || (numeri == 'x' && schermo.value.length == 0)) {
        return;     // impedisce di mettere "x" o "÷" come primo carattere
    };

    // dopo aver messo l'opratore non puoi aggiungerlo un'altro per questo motivo non puoi aggiungere piu di un opratore alla volta
    if ((ultimoCarattere == '-' || ultimoCarattere == '÷' || ultimoCarattere == 'x' || ultimoCarattere == '+') && (numeri == '-' || numeri == '÷' || numeri == 'x' || numeri == '+')) {
        return;
    }

    if (numeri == '.') {
        let pezzi = schermo.value.split(/[\+\-\x\÷]/); // Divido la stringa dove ci sono gli operatori
        let ultimo = pezzi[pezzi.length - 1]; // Prendo l'ultimo numero scritto
    
        if (!ultimo.includes('.')) { // Se l'ultimo numero non ha già un punto, lo aggiungo
            schermo.value += numeri;
        }
    } else {
        schermo.value += numeri; // Se non è un punto, aggiungo il numero normalmente
    }
    
    console.log(schermo.value);
}

function calcolo() {
    let array1 = schermo.value.split(/([\+\-\x\÷])/);
    console.log(array1)  // variabile array exp[20 - 10 * 1]

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == "" && (array1[i - 1] == "÷" || array1[i - 1] == "x" || array1[i - 1] == "-" || array1[i - 1] == "+")) {
            array1.splice(i - 1, 2); // elimina l'operatore e il numero non valido
        }  
        if (array1[0] == "" && (array1[1] == "-" || array1[1] == "+")) {
            array1[2] = array1[1] + array1[2];  // gestisce il caso in cui c'è un operatore iniziale
            array1.splice(0, 2);
        }
    }

    for (let i = 0; i < array1.length; i++) {
        let risultato = "";
        if (array1[i] == "x" || array1[i] == "÷") {
            let numero1 = parseFloat(array1[i - 1]);
            let numero2 = parseFloat(array1[i + 1]);
            if (array1[i] == "x") {
                risultato = numero1 * numero2;
            } else if (numero2 == 0) {
                risultato = "Err0r3";
                schermo.value = risultato;
                console.log(risultato);
                return;
            } else {
                risultato = numero1 / numero2;
            }
            array1.splice(i - 1, 3, risultato);  // sostituisce l'operazione con il risultato
            i--;  // diminuiamo i per ripetere il ciclo con il risultato aggiornato
        }
    }

    for (let i = 0; i < array1.length; i++) {
        let risultato = "";
        if (array1[i] == "+" || array1[i] == "-") {
            let numero1 = parseFloat(array1[i - 1]);
            let numero2 = parseFloat(array1[i + 1]);
            if (array1[i] == "+") {
                risultato = numero1 + numero2;
            } else {
                risultato = numero1 - numero2;
            }
            array1.splice(i - 1, 3, risultato);  // sostituisce l'operazione con il risultato
            i--;  // decrimenta i per ripetere il ciclo con il risultato aggiornato
        }
    }
    schermo.value = parseFloat(array1[0]).toFixed(3); // arrotondare a 5 cifre decimali
    console.log(array1[0]);
    schermo.value = parseFloat(schermo.value);
}

function reset() {
    schermo.value = "";
    console.log('Reset completato');
}

function retro() {
    if (schermo.value.length > 0) {
        schermo.value = schermo.value.slice(0, -1);  // rimuove l'ultimo carattere
    }
    console.log(schermo.value);
}