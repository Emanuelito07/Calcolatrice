let schermo = document.getElementById("schermo");

let finecalcolo = false;

function numeribottoni(s) {
	if (schermo.value === "Errore") {				
		schermo.value = "";
	};

    if (finecalcolo == true) {
        schermo.value = "";
        finecalcolo = false;
    }

	let ultimoCarattere = schermo.value.slice(-1);
	let operatori = ['+', '-', 'x', '÷'];           //variabile operatori

	if (operatori.includes(ultimoCarattere) && operatori.includes(s)) {
		return;
	};

	schermo.value += s;          //aggiungere numeri e operatori
	console.log(schermo.value);
};

function reset() {
        schermo.value = "";
        finecalcolo = false;
	    console.log('Reset completato');
};

function calcolo() {
	let espressione = schermo.value.replace(/x/g, '*').replace(/÷/g, '/');

	try {
		schermo.value = eval(espressione);
		console.log(schermo.value);
        finecalcolo = true;
	} catch {
		schermo.value = "Errore";
		console.log(schermo.value);
	};
};
/*
let numero1 = "";
let numero2 = "";
let operatore = "";
let schermo = document.getElementById("schermo");

//numero1 numero2
function numeribottoni(numero) {
    if (operatore == "") {
        numero1 += numero;
        schermo.value = numero1;
    } else {
        numero2 += numero;
        schermo.value = numero1 + " " + operatore + " " + numero2;
    }
}
				
//funzione per aggiudicare l'operazione  
function operazione(simboli) {
	if (numero1 != "" && operatore == "") {
		operatore = simboli;
		schermo.value = numero1 + " " + operatore + " ";
		console.log('Hai generato il simbolo ' + simboli);
	}
}

//funzione per fare il calcolo
function calcolo() {
	if (numero1 != "" && numero2 != "" && operatore != "") {
		numero1 = parseInt(numero1);	
		numero2 = parseInt(numero2);
		let prodotto = "";
		switch (operatore) {
			case '+':
				prodotto = numero1 + numero2;
				break;
			case '-':
				prodotto = numero1 - numero2;
				break;
			case 'x':
				prodotto = numero1 * numero2;
				break;
			case '÷':
				if (numero2 != 0) {
					prodotto = numero1 / numero2;
				} else {
					console.log("Impossibile dividere per 0");
          			schermo.value = "Errore:";
          			return;
				}
		}
		console.log(`Il risultato è... ${numero1} ${operatore} ${numero2} = ${prodotto}`);
		schermo.value = prodotto;
		numero1 = "";
        numero2 = "";
        operatore = "";
	}
};

//reset
function reset(restart) {
	numero1 = "";
	numero2 = "";
	operatore = "";
	console.log('Calcolatrice resettata!')
	schermo.value = "";
}
*/