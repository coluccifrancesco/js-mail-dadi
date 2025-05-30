//   http://127.0.0.1:3000/dadi/index.html

//   Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Chiedo al giocatore che numero vuole da 1 a 6
let userChoice = Number(prompt('Scegli un numero da 1 a 6'));

// Chiedo al computer di scegliere un numero da 1 a 6
let computerChoice = Math.floor(Math.random() * 5) + 1;


// Il numero più alto estratto vince
if (userChoice < 1 || userChoice > 6){
    console.log('Non barare e ricarica la pagina')
} else if (userChoice > computerChoice){
    console.log(userChoice + ': il tuo numero')
    console.log(computerChoice + ' il numero del computer')
    console.log('Hai vinto!');
} else if (userChoice < computerChoice){
    console.log(userChoice + ': il tuo numero')
    console.log(computerChoice + ': il numero del computer')
    console.log('Hai perso')
} else {
    console.log(userChoice + ': il tuo numero')
    console.log(computerChoice + ': il numero del computer')
    console.log('Pareggio')
}