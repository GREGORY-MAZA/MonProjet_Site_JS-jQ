$(document).ready(function() {
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
            /*let data = JSON.stringify(response[1]);
            /*$("div#API").append(data);*/
            /*console.log(data);*/
            console.log(response[0]);
            const content = document.createElement('div');
            response.forEach(element => {

                //SELECTEUR des éléments
                $("<article>\
                        <p>" + element.nickname + "</p>\
                        <p>" + element.name + "</p>\
                        <img src='" + element.img + "'>\
                    </article>\
                                ").appendTo(".API2"); //Permet d'intégrer à l'intérieur de la div crée
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

/*response.forEach(element => {
                const paragraph = document.createElement('p');
                const paragraph2 = document.createElement('p');
                const image = document.createElement('img');

                paragraph.innerHTML = element.nickname;
                paragraph2.innerHTML = element.name;
                image.innerHTML = element.img;
                $('img').attr('src', "element.img");

                paragraph.style = 'color: red'

                content.appendChild(paragraph);
                content.appendChild(paragraph2);
                content.appendChild(image);*/