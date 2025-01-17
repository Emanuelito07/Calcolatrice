let schermo = document.getElementById("schermo");

let finecalcolo = false;

function numeribottoni(s) {
	if (schermo.value == "Errore") {
		schermo.value = "";
	};

    if (finecalcolo == true) {
        schermo.value = "";
        finecalcolo = false;
    }

	let ultimoCarattere = schermo.value.slice(-1);
	let operatori = ['+', '-', 'x', '÷'];           //variabile operatori

	if (s == '-' && schermo.value.length == 0) {
        schermo.value += s;  // Aggiungi il segno negativo come primo carattere
        console.log(schermo.value);
        return;
    }

    if ((s == '*' || s == '/') && schermo.value.length == 0) {
        return;
    }

	if (operatori.includes(ultimoCarattere) && operatori.includes(s)) {
		return;
	};

	if ((s == "*" || s == "/") && (s == "+" || s =="-")) {
		finecalcolo = true;
	} else {
		schermo.value += s;          			//aggiungere numeri e operatori
		console.log(schermo.value);
	}
};

function reset() {
        schermo.value = "";
        finecalcolo = false;
	    console.log('Reset completato');
};

function calcolo() {
	let exp = schermo.value.split(/([\+\-\*\/])/);
	console.log(exp)              // variabile array esp[20 - 10 * 1]

	for (let i = 0; i < exp.length; i++) {
		let risultato = "";
		if (exp[i] == "*" || exp[i] == "/"){
			let numero1 = parseFloat(exp[i-1])
			let numero2 = parseFloat(exp[i+1])
			if (exp[i] == "*") {
				risultato = numero1 * numero2;
			} else if (numero2 == 0) {
				risultato = "Errore";
				schermo.value = risultato;
				return;
			} else {
				risultato = numero1 / numero2;
			}
			exp.splice(i - 1, 3, risultato); 					//eliminare gli elementi in posizione i e i +1
			i--;				//fare in modo che i diminuisca di 1
		}
	}
	
	if (exp[0] == "" && exp[1] == "-") {
		exp[2] = "-" + exp[2];
		exp.splice(0, 2);
	}

	if (exp[0] == "" && exp[1] == "+") {
		exp[2] = "+" + exp[2];
		exp.splice(0, 2);
	}

    for (let i = 0; i < exp.length; i++) {
        let risultato = "";
        if (exp[i] == "+" || exp[i] == "-") {
            let numero1 = parseFloat(exp[i-1]);
            let numero2 = parseFloat(exp[i+1]);
			if (exp[i] == "+") {
				risultato = numero1 + numero2;
			} else {
				risultato = numero1 - numero2;
			}
            exp.splice(i - 1, 3, risultato);  // Rimuove i due numeri e l'operatore
            i--;
        }
    }
	schermo.value = exp;
	console.log(exp);
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