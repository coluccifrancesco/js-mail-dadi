//  Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
let emailList = ["coluccif2002@gmail.com" , "pincopallo@outlook.com", "jsprobablysucks@reasonablecrashout.com"];

let emailPrompt = prompt("Inserisci la tua email gentilmente");

for (let i = 0; i <= emailList.length; i++){
    if(emailPrompt == emailList[i]){
        console.log('Email controllata ed approvata!');
        break
    } else {
        continue
    }
}
//  stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for