let schermo = document.getElementById("schermo");

function numeribottoni(numeri) {

    if (schermo.value == "Err0r3") {
        schermo.value = "";
    };

    let ultimoCarattere = schermo.value.slice(-1);          // prende l'ultimo carattere dell'input

    if ((numeri == '/' && schermo.value.length == 0) || (numeri == 'x' && schermo.value.length == 0)) {
        return;     // impedisce di mettere "x" o "÷" come primo carattere
    };

    // dopo aver messo l'opratore non puoi aggiungerlo un'altro per questo motivo non puoi aggiungere piu di un opratore alla volta
    if ((ultimoCarattere == '-' || ultimoCarattere == '/' || ultimoCarattere == 'x' || ultimoCarattere == '+') && (numeri == '-' || numeri == '/' || numeri == 'x' || numeri == '+')) {
        return;
    }

    if (ultimoCarattere == '(' && (numeri == '/' || numeri == 'x' || numeri == '+')) {
        return;
    }

    // gestione parentesi
    if (numeri == '(') {
        let apertaParentesi = schermo.value.split('(');
        let chiusaParentesi = schermo.value.split(')');
        if (apertaParentesi < chiusaParentesi) {
            schermo.value += '(';
        } else if (numeri == '(' && (ultimoCarattere != 'x' && ultimoCarattere != '+' && ultimoCarattere != '÷')) {
            schermo.value += 'x';
            schermo.value += '(';
        } else {
            schermo.value += '(';
        }
    }  else if (numeri == ')'){
        schermo.value += ')';
        schermo.value += 'x';
    } else if (numeri == '.') {
        let PezziOperatori = schermo.value.split(/[+\-x/]/);
        let UltimoNumero = PezziOperatori[PezziOperatori.length -1];
        if (!UltimoNumero.includes('.')) {
            schermo.value += numeri;
        }
    } else {
        schermo.value += numeri;
    }
    console.log(schermo.value);
}

function calcolo() {
    let espressioneParentesi = schermo.value;

    // Calcolo parentesi
    for (; espressioneParentesi.includes('(');) {
        // Individuare le parentesi
        let InizioParentesi = espressioneParentesi.lastIndexOf('('); // Trovo l'ultima parentesi aperta
        let FineParentesi = espressioneParentesi.indexOf(')', InizioParentesi);

        // Calcolare dentro le parentesi
        let EstrazioneDalleParentesi = espressioneParentesi.slice(InizioParentesi + 1, FineParentesi); // Estraggo il contenuto tra parentesi
        let RisultatoDalleParentesi = GestioneCalcolo(EstrazioneDalleParentesi); // Calcolo il valore dentro le parentesi

        espressioneParentesi = espressioneParentesi.slice(0, InizioParentesi) + RisultatoDalleParentesi + espressioneParentesi.slice(FineParentesi + 1); // Sostituisco la parentesi con il risultato
    }

    // Ora calcolo il resto
    let risultatoDentroParentesiFinale = GestioneCalcolo(espressioneParentesi);
    schermo.value = risultatoDentroParentesiFinale;
    console.log(risultatoDentroParentesiFinale);
}

function GestioneCalcolo(espressione) {
    let array1 = espressione.split(/([+\-x/])/);
    console.log(array1)  // variabile array espressione[20 - 10 * 1]

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == "" && (array1[i - 1] == "/" || array1[i - 1] == "x" || array1[i - 1] == "-" || array1[i - 1] == "+")) {
            array1.splice(i - 1, 2); // elimina l'operatore e il numero non valido
        }
        if (array1[0] == "" && (array1[1] == "-" || array1[1] == "+")) {
            array1[2] = array1[1] + array1[2];  // gestisce il caso in cui c'è un operatore iniziale
            array1.splice(0, 2);
        }
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == "x" || array1[i] == "/") {
            let numero1 = parseFloat(array1[i - 1]);
            let numero2 = parseFloat(array1[i + 1]);
            let risultato = "";
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
        if (array1[i] == "+" || array1[i] == "-") {
            let numero1 = parseFloat(array1[i - 1]);
            let numero2 = parseFloat(array1[i + 1]);
            let risultato = "";
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
    return array1[0];
}

function ResetCompleto() {
    schermo.value = "";
    console.log('Reset completato');
}

function EliminareUnNumeroAllaVolta() {
    schermo.value = schermo.value.slice(0, -1);  // rimuove l'ultimo carattere
    console.log(schermo.value);
}

/*
function GestioneCalcolo(espressione) {
    // Gestione dei numeri negativi all'inizio dell'espressione
    if (espressione.startsWith('-')) {
        espressione = '0' + espressione; // Aggiunge 0 per gestire il numero negativo
    }

    // Dividi l'espressione in numeri e operatori
    let elementi = espressione.split(/([+\-x÷])/);
    
    // Gestione di un operatore iniziale
    if (elementi[0] === "" && (elementi[1] === "-" || elementi[1] === "+")) {
        elementi[2] = elementi[1] + elementi[2];  // Combina l'operatore con il numero successivo
        elementi.splice(0, 2); // Rimuove l'operatore iniziale
    }

    // Prima gestiamo moltiplicazione e divisione
    for (let i = 0; i < elementi.length; i++) {
        if (elementi[i] === 'x' || elementi[i] === '÷') {
            let numero1 = parseFloat(elementi[i - 1]);
            let numero2 = parseFloat(elementi[i + 1]);
            let risultato;

            // Esegui l'operazione
            if (elementi[i] === 'x') {
                risultato = numero1 * numero2;
            } else {
                if (numero2 === 0) {
                    return "Errore"; // Gestione divisione per zero
                }
                risultato = numero1 / numero2;
            }

            // Sostituisci l'operazione con il risultato
            elementi.splice(i - 1, 3, risultato); // Rimuove i due numeri e l'operatore
            i--; // Torna indietro per gestire il nuovo array
        }
    }

    // Poi gestiamo somma e sottrazione
    for (let i = 0; i < elementi.length; i++) {
        if (elementi[i] === '+' || elementi[i] === '-') {
            let numero1 = parseFloat(elementi[i - 1]);
            let numero2 = parseFloat(elementi[i + 1]);
            let risultato;

            // Esegui l'operazione
            if (elementi[i] === '+') {
                risultato = numero1 + numero2;
            } else {
                risultato = numero1 - numero2;
            }

            // Sostituisci l'operazione con il risultato
            elementi.splice(i - 1, 3, risultato);
            i--; // Torna indietro per gestire il nuovo array
        }
    }

    // Restituisce il risultato finale
    return parseFloat(elementi[0]).toFixed(3); // Arrotonda a 3 decimali
}
*/