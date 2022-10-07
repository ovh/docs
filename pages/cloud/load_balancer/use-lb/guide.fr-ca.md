---
title: Gestion du service de Répartiteur de charge via l'espace client
slug: utilisation-loadbalancer
excerpt: Résumé des principales fonctionnalités et prise en main du service de Répartiteur de charge via l'espace client
section: Premiers pas
---

**Dernière mise à jour 2017/12/01**

## Objectif

Ce guide a pour but de vous aider lors de la première prise en main de votre Répartiteur de charge en vous présentant les fonctionnalités principales de l'offre.

## Prérequis

- Avoir accès à votre espace client
- Avoir commandé un [Répartiteur de charge](https://www.ovh.com/ca/fr/solutions/load-balancer/)

## En pratique

### Gérer son Répartiteur de charge via l'espace client

Pour gérer votre Répartiteur de charge via l'espace client, rendez-vous dans la partie `Cloud`{.action} (1) puis dans la partie `Répartiteur de charge`{.action} (2) du menu de gauche. La page principale du service apparaîtra ensuite:

![Répartiteur de charge](images/lbip-main.png){.thumbnail}

Sur cette page principale, vous trouverez les informations suivantes:

|Élément|Fonction|
|---|---|
|Statut|Résumé de votre Répartiteur de charge avec le nom du service, les serveurs frontaux (frontends), les fermes fonctionnelles et les serveurs ajoutés|
|Utilisation|Un récapitulatif de l'utilisation de votre Répartiteur de charge|
|Graphiques|Ici vous trouverez les graphiques liés à votre service en connexions simultanées ou en nombre de requêtes par minute|
|Informations|Votre IPv4 et les Additional IP liées ainsi que le nombre d'IPv4 de sortie (détail en cliquant sur les points de suspension)|
|Configuration|Ici vous pourrez personnaliser le nom de votre solution (qui apparaîtra en haut et dans la colonne de gauche). Le(s) texte(s) chiffré(s), qui sont personnalisables, ainsi que le centre de données où se situe votre Répartiteur de charge|
|Abonnement|Vous trouverez ici les détails administratifs de votre solution|


Pour ajouter un `serveur frontal`{.action} ou des `fermes de serveurs`{.action}, cliquez simplement sur leurs boutons respectifs. Un formulaire vous aidera ensuite à configurer chaque partie de votre service.


### Gérer ses serveurs frontaux

Afin d'ajouter des serveurs frontaux, il vous suffit de vous rendre dans la partie `Serveurs frontaux`{.action} et de cliquer sur `Ajouter un serveur frontal`{.action}. Vous aurez alors accès au menu suivant:


![Ajouter un serveur frontal](images/iplb-add-front-end.png){.thumbnail}

Détails des éléments d'un serveur frontal:


|Élément|Fonction|
|---|---|
|Nom|Si vous le souhaitez, vous pouvez nommer votre serveur frontal, très utile quand vous en avez plusieurs afin de les identifier rapidement|
|Protocole|Vous avez le choix entre le HTTP, HTTPS, TCP, SSL TCP (ou TLS) et l'UDP|
|Port|Choisissez ici le port d'écoute à utiliser|
|Centre de données|Vous pouvez choisir entre votre centre de données ou tous pour la création du serveur frontal|
|Ferme par défaut|Si vous avez plusieurs fermes paramétrées, vous pourrez en choisir une par défaut pour chaque serveur frontal|

Vous avez également accès à des paramètres avancés:

![Paramètres avancés](images/advanced_frontend.png){.thumbnail}

|Élément|Fonction|
|---|---|
|Additional IP dédiée|La liste des Additional IP des serveurs distants|
|Resteindre l'accès à des IP|Liste permettant de restreindre l'accès distant au répartiteur de charge, uniquement en IPv4|
|Redirection HTTP|Ajout d'une URL de redirection HTTP|
|Entête HTTP|Ajout ici d'un en-tête HTTP|


### Gérer ses fermes

Afin d'ajouter une ferme de serveurs, il vous suffit de vous rendre dans la partie `Fermes de serveurs`{.action} et de cliquer sur `Ajouter une ferme de serveurs`{.action}. Vous accéderez aux mêmes options principales que pour le serveur frontal. Les options avancées seront par contre différentes:

![Ajout d'une ferme](images/iplb-cluster-adv.png){.thumbnail}

|Élément|Fonction|
|---|---|
|Mode de répartition|Choix entre Round-robin, First, Last, Source ou URI pour votre balancement d'IP|
|Suivi de session|Le suivi de session peut se faire par Cookie ou IP source, à définir ici|
|Sonde|Choix et activation de la sonde|


### Gérer ses serveurs

Une fois votre ferme de serveurs créée il vous reste à y ajouter des serveurs. Ci-essous le détail des options ainsi que des options avancées:


![Ajout de serveur](images/iplb-cluster-add-server.png){.thumbnail}
![Ajout de serveur](images/iplb-cluster-add-server-1.png){.thumbnail}
![Ajout de serveur](images/iplb-cluster-add-server-2.png){.thumbnail}


|Élément|Fonction|
|---|---|
|Nom|Si vous le souhaitez, vous pouvez nommer votre serveur; ceci est très utile quand vous en avez plusieurs afin de les identifier rapidement|
|Adresse IPv4|Ajout de l'IP du service qui agira comme serveur|
|Port|Port du serveur|
|Serveur de secours|Préciser que ce serveur est un serveur de secours|
|Utiliser la sonde de disponibilité de la ferme|Choisir d'utiliser la sonde validée lors de la création de la ferme|
|Chiffrer les requêtes avec SSL|Chiffrer les requêtes avec un certificat SSL|
|Cookie|Ajout d'un cookie de session personnalisé|
|Chaîne de certification|Ajout d'une chaîne de certification|
|Poids de balancement|Choix du poids de balancement pour la répartition de charge|


### Gérer ses certificats SSL

Il est possible d'ajouter un SSL au Répartiteur de charge dans la section `Certificat SSL`{.action}. Vous aurez alors deux possibilités: commander un certificat SSL via OVH ou  ajouter un certificat externe.

#### Certificat SSL OVH

Pour commander un certificat SSL il suffit d'aller dans la section `Certificat SSL`{.action} puis de cliquer sur `Commander un certificat SSL`{.action} et de vous laisser guider:


![Commande d'un certificat SSL](images/iplb-order-ssl.png){.thumbnail}


|Élément|Fonction|
|---|---|
|Type de certificat|Gratuit (Let's Encrypt), Comodo DV ou Comodo EV (détails à cette adresse: https://www.ovh.com/ca/fr/hebergement-web/ssl_mutualise.xml)|
|Fully Qualified Domain Name (FQDN)|Le(s) domaine(s) concerné(s)|

#### Ajout d'un certificat SSL externe

Si vous possédez déjà votre propre certificat SSL, il vous est possible de l'ajouter directement:

![Ajout d'un certificat SSL](images/iplb-add-ssl.png){.thumbnail}

|Élément|Fonction|
|---|---|
|Nom|Choisssez si vous le souhaitez un nom à votre certificat, très utile quand vous en avez plusieurs afin de les identifier rapidement|
|Clé privée|Champ d'ajout de la clef privée à ajouter au service|
|Certificat|Champ d'ajout du certificat|
|Chaîne|Champ d'ajout du certificat racine si nécessaire|


## Aller plus loin

Échangez avec notre communauté d'utilisateurs au <https://community.ovh.com> .