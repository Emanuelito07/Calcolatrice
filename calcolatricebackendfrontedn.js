let numero1 = "";
let numero2 = "";
let operatore = "";
let schermo = document.getElementById("schermo");

//numero1 numero2
function numeribottoni(numero) {
	if (operatore == "") {
		schermo.value += numero;
		console.log(numero);
	} else {
		schermo.value += numero;
		console.log(numero);
	}
}

//funzione per aggiudicare l'operazione  
function operazione(simboli) {
	if (numero1 != "" && operatore == "") {
		schermo.value = operatore = simboli;
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








//funzione per aggiudicare l'operazione  
function operazione(simboli) {
    if (numero1 != "" && operatore == "") {
        schermo.value = numero1 + " " + simboli + " "; // Visualizza l'operazione parziale
        operatore = simboli;
        console.log('Hai generato il simbolo ' + simboli);
    }
}

//funzione per fare il calcolo
function calcolo() {
    if (numero1 != "" && numero2 != "" && operatore != "") {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        let prodotto = "";
        let operazioneCompleta = numero1 + " " + operatore + " " + numero2 + " = "; // Visualizza l'operazione completa

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
        schermo.value = operazioneCompleta + prodotto; // Mostra l'operazione e il risultato
    }
}

//reset
function reset(restart) {
    numero1 = "";
    numero2 = "";
    operatore = "";
    console.log('Calcolatrice resettata!')
    schermo.value = "";
}
