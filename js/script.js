// Descrizione:
// Scrivere un programma che chieda all’utente:

// - Il numero di chilometri da percorrere
// - Età del passeggero

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).


// AZIONE DEL BOTTONE SUBMIT
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function()  {

    const ticketPrice = document.getElementById("price");
 
   // Prendere il valore del input.
   const distanceToRun = document.getElementById("distance");
   const distance = distanceToRun.value;

   let ageofUser = document.getElementById("age");
   let age = ageofUser.value;

    let price = distance * 0.21
    console.log (price)


    if  (age < 18){
        price -=  (price * 20 / 100);
    } 
   
    else if (age >= 65){
        price -= (price * 40 / 100);
    }

    //output

    result.innerHTML = `Il prezzo del biglietto è ${price.toFixed(2)}€`

})
