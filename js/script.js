// Chiedere il numero di chilometri e l'età
var chilometri = prompt("Iniziamo il viaggio, quanti chilometri vuoi percorrere?");

var eta = prompt("Quanti anni hai?");

//Calcolare prezzo base del biglietto
var prezzoBiglietto = 0.21 * chilometri;

//Calcolare sconti
var scontoGiovani = (20 * prezzoBiglietto) / 100;

var scontoAnziani = (40 * prezzoBiglietto) / 100;

if (eta < 18) {
  prezzoBiglietto = prezzoBiglietto - scontoGiovani;
} else if (eta > 65) {
  prezzoBiglietto = prezzoBiglietto - scontoAnziani;
}

document.getElementById('prezzo_finale').innerHTML = "Il prezzo del tuo biglietto è: " + prezzoBiglietto + " euro"
