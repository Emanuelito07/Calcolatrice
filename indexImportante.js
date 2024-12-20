// sleziono gli elementi in html
const bottone = document.getElementById('bottone');
const ingresso = document.getElementById('ingresso');
const testorisultato = document.getElementById('testorisultato');

// funzione per verificare se una parola è palindroma
function palindroma(parola) {
  for (let i = 0; i < parola.length / 2; i++) {   //loop
    if (parola[i] != parola[parola.length - 1 - i]) {
      testorisultato.style.color = "red";  // cambiare colore al tetso che esce
      return "Non è una parola palindroma."; //scritta che esce quando scrivi una parola palindroma
    }
  }
  testorisultato.style.color = "green";         // cambiare colore al tetso che esce 
  return "È una parola palindroma!";
}

// quando viene cliccato bottone parte la funzione
bottone.addEventListener('click', function () {
  const parolamessa = ingresso.value;               // contiene il valore digitato dall'utente
  if (parolamessa.trim() === "") {        // quando non scrivi niente tipo spazio e basta parte la scritta
    testorisultato.style.color = "gray";                // cambiare colore al tetso che esce 
    testorisultato.textContent = "Inserisci una parola valida!";
  } else {
    const risultato = palindroma(parolamessa);      // verifica se è una parola palindroma
    testorisultato.textContent = risultato;      // mostra il risultato 
  }
});