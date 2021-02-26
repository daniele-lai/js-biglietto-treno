var chilometri = prompt("Iniziamo il viaggio, quanti chilometri vuoi percorrere?");

var eta = prompt("Quanti anni hai?");

var prezzoBiglietto = 0.21 * chilometri;

var scontoGiovani = (20 * prezzoBiglietto) / 100;

var scontoAnziani = (40 * prezzoBiglietto) / 100;

if (eta < 18) {
  prezzoBiglietto = prezzoBiglietto - scontoGiovani;
} else if (eta > 65) {
  prezzoBiglietto = prezzoBiglietto - scontoAnziani;
}

console.log(prezzoBiglietto);
