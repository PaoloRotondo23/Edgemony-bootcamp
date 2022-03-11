/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare a dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?
// RISPOSTA: 
//3.14 perché è il valore costante di PI è 3.14 e la condizione di if ovvero PI >=3 non comporta modifiche al valore della costante che quindi risulterà essere 3.14.

const PI = 3.14;

console.log(PI);

if (PI >= 3) {
  console.log(PI);
}

// Es. 2: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: 
//"Il mio colore preferito è violet" perché la variate favColour "violet" è presente anche all'interno di "if" e "Ci sono" 12 "mesi in un anno." perché la variante monthsInYear è 12.

var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual'è il risultato dei console.log?
// RISPOSTA: 
//"Sugo di pomodoro freschissimo rucola, prosciutto crudo e scaglie di grana." perché nel console log della funzione "makePizza" abbiamo scritto "theSecond + ", " + moreIngredients" quindi riporterà la stringa di "theSecond" prima e la stringa del secondo console log della funzione "makePizza" dopo.

function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo";
  // { ... }
  console.log(theSecond + ", " + moreIngredients);
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond);
}