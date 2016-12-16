# Crossfade-Carousel

Un carrousel d'images apparaissant en fondu.

Le dossier "crossfade" contient le code JS et CSS ainsi que le dossier "images".
Le fichier "index.html" montre la façon d'implanter le carrousel.

1) Dans le header, insérer les références aux fichiers "crossfade.js" et "crossfade.css".
2) Dans le body, insérer la carrousel en quelqes lignes seulement :

<div class="crossfade_carrousel" data-tempo="5000">
    <ul>
        <li><a href="images/nature-1.jpg"></a></li>
        <li><a href="images/nature-2.jpg"></a></li>
        <li><a href="images/nature-3.jpg"></a></li>
        <li><a href="images/nature-4.jpg"></a></li>
        <li><a href="images/nature-5.jpg"></a></li>
    </ul>
</div>

L'attribut "data-tempo" exprime en millisecondes le temps d'exposition de chaque image. Le temps minimal est de 2000 millisecondes.
