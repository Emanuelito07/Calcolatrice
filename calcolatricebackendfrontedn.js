let schermo = document.getElementById("schermo");

function numeribottoni(s) {

    if (schermo.value == "Err0r3") {
        schermo.value = "";
    };

    let ultimoCarattere = schermo.value.slice(-1); // prende l'ultimo carattere dell'input
    let operatori = ['+', 'x', '÷'];           // variabili per gli operatori
	let operatori2 = ['-'];
	let parentesi = ['(', ')'];

    if ((s == 'x' || s == '÷') && schermo.value.length == 0) {
        return;     // impedisce di mettere "x" o "÷" come primo carattere
    }

    // verifica se l'ultimo carattere è un operatore
    if (operatori.includes(ultimoCarattere) && operatori.includes(s)) {
        return;  // Impedisce l'inserimento di operatori consecutivi
    }

    // verifica se l'ultimo carattere è un operatore
	if (operatori2.includes(ultimoCarattere) && operatori2.includes(s)) {
		return;  // Impedisce l'inserimento di operatori consecutivi
	}

	// includes evita di aggiungere un secondo punto da pop che ha il compito di prendere
	//l'ultimo numero creato dall'array
    if (s == '.' && ultimoCarattere !== '.' && !schermo.value.split(/[\+\-\x\÷\(\)]/).pop().includes('.')) {
        schermo.value += s;  // aggiunge il punto solo se non c'è già uno nel numero
    } else if (s != '.') {
        schermo.value += s;  // aggiunge tutti gli altri caratteri (numeri o operatori)
    }
    console.log(schermo.value);

	if (schermo.value == '(') {
		s = '(';
		return parenz;
	}
}

function parenz(pz) {
	
};

function calcolo() {
    let exp = schermo.value.split(/([\+\-\x\÷])/);
    console.log(exp)  // variabile array exp[20 - 10 * 1]

    for (let i = 0; i < exp.length; i++) {
        if (exp[i] == "" && (exp[i - 1] == "+" || exp[i - 1] == "-" || exp[i - 1] == "x" || exp[i - 1] == "÷")) {
            exp.splice(i - 1, 2);  // elimina l'operatore e il numero non valido
        }
    }

    if (exp[0] == "" && (exp[1] == "-" || exp[1] == "+")) {
        exp[2] = exp[1] + exp[2];  // gestisce il caso in cui c'è un operatore iniziale
        exp.splice(0, 2);
    }

	if ((exp[2] == "") && (exp[1] == "x" || exp[1] == "÷" )) {
        exp[2] = exp[1] + exp[i + 2];  // gestisce il caso in cui c'è un operatore iniziale
		exp.splice(i + 2, 0)
    }

    for (let i = 0; i < exp.length; i++) {
        let risultato = "";
        if (exp[i] == "x" || exp[i] == "÷") {
            let numero1 = parseFloat(exp[i - 1]);
            let numero2 = parseFloat(exp[i + 1]);
            if (exp[i] == "x") {
                risultato = numero1 * numero2;
            } else if (numero2 == 0) {
                risultato = "Err0r3";
                schermo.value = risultato;
                console.log(risultato);
                return;
            } else {
                risultato = numero1 / numero2;
            }
            exp.splice(i - 1, 3, risultato);  // sostituisce l'operazione con il risultato
            i--;  // decrimenta i per ripetere il ciclo con il risultato aggiornato
        }
    }

    for (let i = 0; i < exp.length; i++) {
        let risultato = "";
        if (exp[i] == "+" || exp[i] == "-") {
            let numero1 = parseFloat(exp[i - 1]);
            let numero2 = parseFloat(exp[i + 1]);
            if (exp[i] == "+") {
                risultato = numero1 + numero2;
            } else {
                risultato = numero1 - numero2;
            }
            exp.splice(i - 1, 3, risultato);  // sostituisce l'operazione con il risultato
            i--;  // decrimenta i per ripetere il ciclo con il risultato aggiornato
        }
    }
    schermo.value = exp[0];  // mostra il risultato finale
    console.log(exp);
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