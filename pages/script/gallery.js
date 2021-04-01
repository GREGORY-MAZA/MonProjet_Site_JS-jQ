$(document).ready(function() {

    /* //////////////////////////////////////// MES VARIABLES //////////////////////////////////////// */

    let imgGallery = [
        "https://images6.alphacoders.com/321/thumb-1920-321927.jpg",
        "https://images8.alphacoders.com/698/698914.jpg",
        "https://cdn.hipwallpaper.com/i/16/3/moqO34.jpg",
        "https://wcrates.files.wordpress.com/2015/03/1080p-breaking-bad-wallpaper.jpg",
        "https://images.hdqwalls.com/download/breaking-bad-cast-5k-xl-2880x1800.jpg",
        "https://img.wallpapersafari.com/desktop/1920/1080/51/6/z5IQVb.jpg"
    ]; //Créer un variable de type tableau contenant les images de la gallery

    /* //////////////////////////////////////// MES SELECTEURS //////////////////////////////////////// */

    let ButtonRow = document.querySelector('#myButtonColumn'); // Select <button id=myButtonColumn>
    let ButtonColumn = document.querySelector('#myButtonRow'); // Select <button id=myButtonRow>
    let imgGalleryColumn = document.querySelector('.Gallery'); // Select <div class=Gallery> 
    let imgGalleryRow = document.querySelector('.Gallery'); // Select <div class=Gallery>
    let sizeImageColumn = document.querySelectorAll('.Gallery img');


    /* //////////////////////////////////////// MES FONCTIONS //////////////////////////////////////// */

    function removeMe(classe) {
        let remove = document.getElementsByClassName(classe);
        remove.innerHTML = "";
    }

    /*_________________________________________________________________________________________________*/

    function column() {
        imgGalleryColumn.style = 'flex-direction: column; align-content: center; margin: 10px';
        sizeImageColumn.style = 'width: 1200px; height: auto'
    }
    /*_________________________________________________________________________________________________*/
    function row() {
        imgGalleryRow.style = 'flex-direction: row;'
    }
    /*_________________________________________________________________________________________________*/
    function addImage() {
        console.log(document.querySelector('#addImageText').value);
        let myAddImage = (document.querySelector('#addImageText').value); // Select de la valeur entrée dans la zone de text pour la mettre dans let myAddImage
        let imageUrl = document.createElement('img'); // Création de la balise <img> placer dans let imageUrl
        imageUrl.setAttribute('src', myAddImage); // Donne à la balise img l'attribut src et la valeur de myAddImage qui est la valeur rentré dans la zone de texte
        document.querySelector('.Gallery').appendChild(imageUrl); // Ajout de la balise img rempli dans la balise <div class=Gallery>    
    }
    /*_________________________________________________________________________________________________*/
    function addImgGallery() {
        imgGallery.forEach(element => { //Pour chaque élément du tableau imgGallery
            const imageGallery = document.createElement('img'); //Création d'une balise img
            imageGallery.src = element; //Ajout de l'attribut src dans la balise img
            const newGallery = document.querySelector(".Gallery") //Select <div class=Gallery> pour mettre la valeur dans const newGallery
            newGallery.appendChild(imageGallery); //Ajout de la valeur de imageGallery dans la balise newGallery qui est <div class=Gallery>
        })
    }
    /*_________________________________________________________________________________________________*/

    function displayMenu() { /*bouton Menu basculer entre masquer et afficher le contenu de la liste déroulante  */
        document.getElementById("myDropdown").classList.toggle("show");
    }

    /* //////////////////////////////////////// FONCTION & LOG CALL //////////////////////////////////////// */
    console.log(imgGallery);
    addImgGallery();
    //addImage();
    /* //////////////////////////////////////// MES EVENEMENTS //////////////////////////////////////// */

    $('#myButtonColumn').click(event => { column(); })
    $('#myButtonRow').click(event => { row(); })

    document.querySelector('#myAddButtonImage').addEventListener('click', function() { addImage(); })

    $('.dropbtn').on("click", displayMenu);
});