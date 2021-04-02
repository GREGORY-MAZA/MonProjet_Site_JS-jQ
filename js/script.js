$(document).ready(function() {

    /*Quand l'utilisateur clique sur le bouton Menu
basculer entre masquer et afficher le contenu de la liste déroulante  */
    function displayMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    //Ferme / Ouvre le dropdown Menu
    //document.getElementsByClassName("dropbtn").onclick(myFunction());
    $('.dropbtn').on("click", displayMenu);

    //Modifier le DOM ( document)  querySelector est le selecteur de la balise "API2"
    const API2 = document.querySelector(".API2");

    $.ajax({
            //L'URL de la requête 
            url: "https://www.breakingbadapi.com/api/characters",

            //La méthode d'envoi (type de requête)
            method: "GET",

            //Le format de réponse attendu
            dataType: "json",
        })
        //Ce code sera exécuté en cas de succès - La réponse du serveur est passée à done()
        /*On peut par exemple convertir cette réponse en chaine JSON et insérer
         * cette chaine dans un div id="res"*/
        .done(function(response) {
            //Déclaration d'une const du nom de content pour y mettre une DIV vierge
            const content = document.createElement('div');
            //console.log(response);
            response.forEach(element => {
                const content = document.createElement('div');
                //création des balises paragraph et img
                const paragraph = document.createElement('p');
                const paragraph2 = document.createElement('p');
                //const paragraph3 = document.createElement('p');
                const image = document.createElement('img');

                //injecter les données de l'API dans les balises 
                paragraph.innerHTML = /*"<p>Pseudo : </p>" + */ element.nickname;
                paragraph2.innerHTML = /*"<p>name </p>" + */ element.name;
                //paragraph3.innerHTML = /*"<p>Birthday </p>" + */element.birthday;
                image.src = element.img;

                /*paragraph.style = 'color: red'*/ // ajouter du style CSS
                paragraph.style = 'font-size: 1em';

                //Content = DIV (pour l'exemple et appenchild va mettre les balise injecté des données de l'api
                content.appendChild(paragraph);
                content.appendChild(paragraph2);
                //content.appendChild(paragraph3);
                content.appendChild(image);
                
                //console.log(API2);
                API2.appendChild(content); //Injecter content dans la DIV API2
            });
        })

    //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
    //On peut afficher les informations relatives à la requête et à l'erreur
    .fail(function(error) {
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })

    //Ce code sera exécuté que la requête soit un succès ou un échec
    .always(function() {
        //alert("Requête effectuée.... Veuillez Patienter un instant");
    });
    //Fonction pour récupérer la valeur de la réponse du formulaire
    function afficher() {
        console.log(document.querySelector('#Avis').value); // envoi dans la console la réponse entré dans le form
        const ICI = document.querySelector('#Avis').value; //Déclaration d'une const qui à pour valeur la réponse du formulaire
        const contentForm = document.createElement('div'); // Création d'une balise <div> 
        const reponseForm = document.createElement('p'); // Création d'une balise <p>
        reponseForm.textContent = ICI + " "; // Injecter la valeur de la réponse du form dans la balise <p>
        contentForm.appendChild(reponseForm); //Injecter la balise <p> dans la <div>
        const REP = document.querySelector(".REP"); // Modification du DOM
        REP.appendChild(reponseForm); //injecter reponseForm dans la balise REP

    }

    document.querySelector('#myButton').addEventListener('click', function() {
        afficher();
    })

    //Créer un variable de type tableau contenant les images de la gallery
    let imgGallery = [
        "https://images6.alphacoders.com/321/thumb-1920-321927.jpg",
        "https://images8.alphacoders.com/698/698914.jpg",
        "https://cdn.hipwallpaper.com/i/16/3/moqO34.jpg",
        "https://wcrates.files.wordpress.com/2015/03/1080p-breaking-bad-wallpaper.jpg",
        "https://images.hdqwalls.com/download/breaking-bad-cast-5k-xl-2880x1800.jpg",
        "https://img.wallpapersafari.com/desktop/1920/1080/51/6/z5IQVb.jpg"
    ];
    //Créer une fonction pour afficher les images de la variable imgGallery de type tableau
    function addImgGallery() {

        console.log(imgGallery);
        imgGallery.forEach(element => { //Pour chaque élément du tableau imgGallery
            const contentGallery = document.createElement('div'); //Création d'une balise div
            const imageGallery = document.createElement('img'); //Création d'une balise img
            imageGallery.src = element; // rajouter à la  balise img crée, l'attribut src 
        })
    }


});