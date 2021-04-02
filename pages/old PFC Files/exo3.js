// you can write js here
console.log('exo-3');



//déclaration d'une variable playerInput qui demande grace a prompt une valeur à l'utilisateur
let playerInput = prompt("Veuillez choisir votre arme ! ( pierre, feuille, ciseau) ?").toLowerCase();

// déclaration de la fonction getPlayerChoice avec en parametre la variable playerInput 
//si l'utilisateur a rentré une valeur autre que pierre, feuille ou ciseau. Un message d'erreur sera envoyé dans la console
function getPlayerChoice(playerInput) {
    if ((playerInput == "pierre") || (playerInput == "feuille") || (playerInput == "ciseau") || (playerInput == "bomb")) {
        return playerInput;
    } else {
        console.log("!! ERROR !! Il faut choisir entre : pierre, feuille ou ciseau");
    }
}

//Appelle de la fonction qui nous retourne la réponse de l'utilisateur ou une erreur 
getPlayerChoice(playerInput);

//déclaration de la fonction pour que l'ordinateur puisse faire un choix random
//Si le choix du CPU est égal à 0 il nous retournera "pierre" pour 1 "feuille" sinon "ciseau"
function getComputerChoice() {
    let CPUchoice = Math.floor(Math.random() * 3);

    if (CPUchoice == 0) {
        CPUchoice = "pierre";
    }
    if (CPUchoice == 1) {
        CPUchoice = "feuille";
    } else {
        CPUchoice = "ciseau";
    }
    return CPUchoice;
}


// fonction pour trouver le resultat
//Nous devons déclarer les 3 variables pour pouvoir s'en servir avec le return

function findWinner(playerInput, CPUchoice) {
    let egality = "Egalité";
    let loose = "You loose !";
    let win = "You win !";

    if (playerInput === CPUchoice) {
        return egality
    }
    if ((playerInput == "pierre") && (CPUchoice == "ciseau")) {
        return win;
    }
    if ((playerInput == "ciseau") && (CPUchoice == "feuille")) {
        return win;
    }
    if ((playerInput == "feuille") && (CPUchoice == "pierre")) {
        return win;
    }
    if (playerInput == "bomb") {
        return win;
    } else {
        return loose;
    }


}

// Mettre le résulstat des fonctions dans des variables afin de pouvoir s'en servir avec le console.log

playerInput = getPlayerChoice(playerInput);
console.log(playerInput);

CPUchoice = getComputerChoice();
console.log(CPUchoice);

FINAL = findWinner(playerInput, CPUchoice);
console.log(FINAL);