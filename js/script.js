$(document).ready(function() {

    /*Quand l'utilisateur clique sur le bouton Menu
basculer entre masquer et afficher le contenu de la liste déroulante  */
    function displayMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    //Ferme / Ouvre le dropdown Menu
    //document.getElementsByClassName("dropbtn").onclick(myFunction());
    $('.dropbtn').on("click", displayMenu);


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
            console.log(response);
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
                //Modifier le DOM ( document)  querySelector est le selecteur de la balise "API2"
                const API2 = document.querySelector(".API2")
                console.log(API2);
                API2.appendChild(content);
            });
        })

    //Ce code sera exécuté en cas d'échec - L'erreur est passée à fail()
    //On peut afficher les informations relatives à la requête et à l'erreur
    .fail(function(error) {
        alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
    })

    //Ce code sera exécuté que la requête soit un succès ou un échec
    .always(function() {
        alert("Requête effectuée.... Veuillez Patienter un instant");
    });




});