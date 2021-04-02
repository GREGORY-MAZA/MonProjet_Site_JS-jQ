$(document).ready(function() {

function global() {
    let playerResponse = $(this).attr('id');
    console.log('joueur 1 '+ playerResponse);
    CPUchoice = getComputerChoice();
    console.log('CPU '+ CPUchoice);
    FINAL = findWinner(playerResponse, CPUchoice);
    console.log(FINAL);    
}

function displayMenu() { /*bouton Menu basculer entre masquer et afficher le contenu de la liste déroulante  */
    document.getElementById("myDropdown").classList.toggle("show");
}

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





    $("button").on("click", global);


    $('.dropbtn').on("click", displayMenu);
});