# Crossfade-Carousel

Un carrousel d'images apparaissant en fondu.

Le dossier "crossfade" contient le code JS et CSS ainsi que le dossier "images".
Le fichier "index.html" montre la façon d'implanter le carrousel.

Dans le header, les références aux fichiers "crossfade.js" et "crossfade.css" doivent être insérées.

Dans le body, le carrousel est inséré au moyen d'une div ayant la classe ".crossfade-carrousel".
Dans cette div, une liste non numérotée (ul) contient les liens des fichiers images.
L'attribut "data-tempo" exprime en millisecondes le temps d'exposition de chaque image, le temps minimal étant de 2000 millisecondes.

Le ratio des images est de : hauteur = 1/4 de largeur

