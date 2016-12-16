/*
CARROUSEL AVEC FADING
M2VO © 2016
*/

var crossfade;                                          // Le composant
var crossfadeImages = [];                               // Liste des images
var crossfadeIndexImage;                                // Index de la dernière image chargée
var crossfadeImgSuperieure;                             // Image supérieure (c'est l'image sur laquelle on fait varier l'opacité)
var crossfadeImgInferieure;                             // Image inférieure (uniquement visible lorsque l'image supérieure à une opacité à 0)
var crossfadeTempo;                                     // Temporisation entre deux vues (minimum = 2000 millisecondes)

function crossfadeInit() {
    crossfade = document.querySelector(".crossfade-carousel");
    // Récupérer le tempo (s'il existe)
    var tempo = Number(crossfade.getAttribute("data-tempo")); 
    crossfadeFixerTempo(tempo);
    // Récupérer la liste des images
    var liens = crossfade.querySelectorAll("a");
    liens.forEach(function(lien) {
        crossfadeImages.push(lien.href);
    });
    crossfadeIndexImage = 0;
    // créer l'image inférieure
    crossfadeImgInferieure = document.createElement("img");
    crossfadeImgInferieure.classList.add("inferieure");
    crossfadeImgInferieure.setAttribute("src", crossfadeImages[crossfadeIndexImage]);
    crossfade.appendChild(crossfadeImgInferieure);
    // Créer l'image supérieure
    crossfadeImgSuperieure = document.createElement("img");
    crossfadeImgSuperieure.classList.add("superieure");
    crossfadeImgSuperieure.setAttribute("src", crossfadeImages[crossfadeIndexImage]);
    crossfade.appendChild(crossfadeImgSuperieure);
}

function crossfadeChange() {
    // Incrémenter l'index de l'image
    crossfadeIncrementerIndexImage();
    if (crossfadeImgSuperieure.style.opacity == "1") {
        // Changer l'image inférieure
        crossfadeImgInferieure.setAttribute("src", crossfadeImages[crossfadeIndexImage]);
        // Masquer l'image supérieure pour dévoiler l'image inférieure'
        crossfadeImgSuperieure.style.opacity = "0";
    }
    else {
        // Changer l'image supérieure
        crossfadeImgSuperieure.setAttribute("src", crossfadeImages[crossfadeIndexImage]);
        // Faire apparaître l'image supérieure
        crossfadeImgSuperieure.style.opacity = "1";
    }
    // Relancer un nouveau Timeout
    setTimeout(crossfadeChange, crossfadeTempo);
}

function crossfadeFixerTempo(tempo) {
    // Changer le tempo (minimum 2000 millisecondes)
    if (isNaN(tempo) || tempo < 2000) tempo = 2000;
    crossfadeTempo = tempo;
}

function crossfadeIncrementerIndexImage() {
    // Incrémenter l'index de l'image
    crossfadeIndexImage ++;
    // Si l'index supérieur au nombre d'images, réinitialiser l'index à 0
    if (crossfadeIndexImage >= crossfadeImages.length) crossfadeIndexImage = 0;
}   

document.addEventListener("DOMContentLoaded", function(event){
    // Lorsque le DOM a été chargé
    // Initialiser le composant
    crossfadeInit();
    // Lancer le premier timeout
    setTimeout(crossfadeChange, crossfadeTempo) ;
});
