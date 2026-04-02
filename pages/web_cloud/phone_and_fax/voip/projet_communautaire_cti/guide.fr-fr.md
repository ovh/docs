---
title: "Projet communautaire CTI"
excerpt: ''
updated: 2018-03-26
flag: hidden
---

## Téléchargement

Il existe une démonstration qui exploite les événements reçus sous la forme d'une interface web.

Celui-ci peut être téléchargé depuis [l'archive de démonstration CTI](https://events.voip.ovh.net/demo/cti_1.1.tar.gz).

Le projet sera prochainement disponible sur GitHub.

## Page de login

Dans le champ mot de passe, saisissez le token.

![Page de login du CTI](images/img_2580.jpg){.thumbnail}

## Vue d'ensemble

Il est possible de voir les événements en cours et l'historique.

![Vue d'ensemble des événements et de l'historique](images/img_2577.jpg){.thumbnail}

## Vue des files d'appel

Dans la vue des files d'appel, l'ensemble des easyHunting/cloudHunting avec le token.

![Vue des files d'appel easyHunting et cloudHunting](images/img_2578.jpg){.thumbnail}

## Configuration de l'affichage

Dans la configuration de l'affichage,

- Afficher seulement les numéros en cours d'appel" permet de filtrer dans la vue d'ensemble uniquement les files d'appels et les lignes avec des appels en cours.
- Réinitialiser le cache à minuit permet de réinitialiser l'ensemble des informations (statistiques, numéros enregistrés, etc.) à minuit.
- Réinitialiser le cache permet de procéder à la suppression du cache instantanément.

## Configuration du CGI

L'activation du CGI permet la remontée de fiches clientes lors de l'émission ou de la réception d'un appel en faisant appel à une URL. Celui-ci peut être paramétré depuis le menu :
Configuration => Appel du CGI

Le site propose trois types d'exécution d'URL :
Modal => dans le cas de l'ouverture d'une URL de manière "modale". 
 Il est parfois nécessaire d'ajouter une en-tête : Access-Control-Allow-Origin sur le site distant.
Popup => dans les cas de l'ouverture d'une URL sous la forme d'une popup.
Silencieux => dans le cas où la page ne contient pas de page visible (dans le cadre de l'exécution d'un script CGI).
Certaines variables peuvent être déclarées comme dynamique dans l'URL :

- *CALLING* => Le numéro de l'appelant
- *CALLED* => Le numéro de l'appelé
- *EVENT* => Le type d'événement (start_ringing)

![Configuration du CGI pour la remontée de fiches](images/img_2579.jpg){.thumbnail}

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
