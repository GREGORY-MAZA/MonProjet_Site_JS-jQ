$(document).ready(function() {

    /*Quand l'utilisateur clique sur le bouton Menu
basculer entre masquer et afficher le contenu de la liste déroulante  */
    function displayMenu() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    //Ferme / Ouvre le dropdown Menu
    //document.getElementsByClassName("dropbtn").onclick(myFunction());
    $('.dropbtn').on("click", displayMenu);




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
    console.log(imgGallery);

    function addImgGallery() {


        imgGallery.forEach(element => { //Pour chaque élément du tableau imgGallery
            const imageGallery = document.createElement('img'); //Création d'une balise img
            imageGallery.src = element; //

            const newGallery = document.querySelector(".Gallery")
            newGallery.appendChild(imageGallery);

        })
    }
    addImgGallery();

    let ButtonRow = document.querySelector('#myButtonColumn');
    let ButtonColumn = document.querySelector('#myButtonRow');

    /*function color() {
        ButtonRow.style = 'color: red';
    }*/

    let imgGalleryColumn = document.querySelector('.Gallery');
    let imgGalleryRow = document.querySelector('.Gallery');
    let sizeImageColumn = document.querySelectorAll('.Gallery img');



    function column() {

        imgGalleryColumn.style = 'flex-direction: column; align-content: center; margin: 10px';
        sizeImageColumn.style = 'width: 1200px; height: auto'
    }

    function row() {
        imgGalleryRow.style = 'flex-direction: row;'
    }

    $('#myButtonColumn').click(event => {
        column();

    })

    $('#myButtonRow').click(event => {
        row();
    })
});