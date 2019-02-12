//Inizializzo Variabili
var price1Km = 0.21;
var discountYoung;
var discountOld;
var age = prompt("Quanti anni hai?");
var km = prompt("Quanti Km vuoi fare?");
var price = km * price1Km;

//Valorizzo Variabili
discountYoung = price * 20 / 100;
discountOld = price * 40 / 100;

//Inizio Condizioni
if (age < 18) {
  alert(price - discountYoung + " Euro");
}

else if (age > 65) {
  alert(price - discountOld + " Euro");
}

else {
  alert(price + " Euro");
}
