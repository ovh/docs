---
title: "Gestion du service OVHcloud Load Balancer via l'espace client"
slug: utilisation-iplb
excerpt: "Résumé des principales fonctionnalités et prise en main du service Load Balancer via l'espace client OVHcloud"
section: Premiers pas
order: 02
---

**Dernière mise à jour le 04/04/2022**

## Objectif

Ce guide a pour but de vous aider lors de la première prise en main de votre Load Balancer en vous présentant les fonctionnalités principales de l'offre.

## Prérequis

- Posséder une offre [OVHcloud Load balancer](https://www.ovh.com/fr/solutions/load-balancer/) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

### Gérer son Load Balancer via l'espace client

Pour gérer votre Load Balancer via l'espace client, rendez-vous dans la partie `Bare metal Cloud`{.action} puis dans `Load Balancer`{.action}. Sélectionnez votre service.

Sur la page de résumé de votre service Load Balancer, vous trouverez les menus suivants :

|Menu|Détails|
|---|---|
|Statut|Résumé de votre Load Balancer avec le nom du service, les frontends, les fermes fonctionnelles et les serveurs ajoutés|
|Utilisation|Un récapitulatif de l'utilisation de votre LoadBalancer|
|Graphiques|Des graphiques présentant le nombre de connexions simultanées ou le nombre de requêtes par minute|
|Informations|Votre IPv4 et les Additional IP liées, ainsi que le nombre d'IPv4 de sortie (obtenez des détails en cliquant sur le bouton `...`{.action})|
|Configuration|Personnalisez ici le nom de votre offre. Retrouvez aussi le(s) cipher(s), qui sont personnalisables, ainsi que le datacenter où se situe votre Load Balancer|
|Abonnement|Vous trouverez ici les détails administratifs de votre offre|

Pour ajouter des `Frontends`{.action} ou des `Fermes de serveurs`{.action}, cliquez simplement sur les onglets respectifs. Un formulaire vous aidera ensuite à configurer chaque partie de votre service.

### Gérer ses frontends

Afin d'ajouter des frontends, il vous suffit de vous rendre dans l'onglet `Frontends`{.action} et de cliquer sur `Ajouter un frontend`{.action}. Vous aurez alors accès au menu suivant :

![Ajout frontend](images/add_frontend.png){.thumbnail}

Détails des éléments d'un frontend :

|Élément|Fonction|
|---|---|
|Nom|Vous pouvez nommer ici votre frontend, afin notamment de l'identifier rapidement si vous en avez plusieurs |
|Protocole|Vous avez le choix entre le HTTP, HTTPS, TCP, SSL TCP (ou TLS) et l'UDP|
|Port|Choisissez ici le port d'écoute à utiliser|
|Datacenter|Vous pouvez choisir entre un datacenter en particulier ou tous pour la création du frontend|
|Ferme par défaut|Si vous avez plusieurs fermes paramétrées, vous pourrez en choisir une par défaut pour chaque frontend|

Vous avez également accès à des paramètres avancés :

![Parametres avances](images/advanced_frontend.png){.thumbnail}

|Élément|Fonction|
|---|---|
|Dedicated Additional IP|La liste des Additional IP des serveurs distants|
|Restreindre l'accès à des IPs|Liste permettant de restreindre l'accès distant au Load Balancer, uniquement en IPv4|
|Redirection HTTP|Ajout d'une URL de redirection HTTP|
|Entête HTTP|Ajout d'un en-tête HTTP|

### Gérer ses fermes

Afin d'ajouter une ferme de serveurs, il vous suffit de vous rendre dans l'onglet `Fermes de serveurs`{.action} et de cliquer sur `Ajouter une ferme de serveurs`{.action}. Vous accéderez aux mêmes options principales que pour le frontend. Les options avancées seront par contre différentes :

![Ajout d'une ferme](images/advanced_cluster.png){.thumbnail}

|Élément|Fonction|
|---|---|
|Mode de répartition|Choix entre Round-robin, First, Last, Source ou URI pour votre balancement d'IP|
|Suivi de session|Le suivi de session peut se faire par cookie ou IP Source, à définir ici|
|Sonde|Choix et activation de la sonde|

### Gérer ses serveurs

Une fois votre ferme de serveurs créée, il vous reste à y ajouter des serveurs. Retrouvez ci-dessous le détail des options ainsi que des options avancées :

![Ajout serveur](images/add_server.png){.thumbnail}
![Ajout serveur](images/add_server_advanced.png){.thumbnail}

|Élément|Fonction|
|---|---|
|Nom|Si vous le souhaitez, vous pouvez nommer votre serveur, afin de l'identifier rapidement quand vous en avez plusieurs|
|Adresse IPv4|Ajout de l'IP du service qui agira comme serveur|
|Port|Port du serveur|
|Serveur de secours|Préciser que ce serveur est un serveur de secours|
|Utiliser la sonde de disponibilité de la ferme|Choisir d'utiliser la sonde validée lors de la création de la ferme|
|Chiffrer les requêtes avec SSL|Chiffrer les requêtes avec un certificat SSL|
|Cookie|Ajout d'un cookie de session personnalisé|
|Chaîne de certification|Ajout d'une chaîne de certification|
|Poids de balancement|Choix du poids de balancement pour la répartition de charge|

### Gérer ses certificats SSL

Il est possible d'ajouter un SSL au Load Balancer depuis l'onglet `Certificats SSL`{.action}. Vous aurez alors deux possibilités : commander un certificat SSL via OVHcloud ou ajouter un certificat externe.

#### Certificat SSL OVHcloud

Pour commander un certificat SSL, sélectionnez l'onglet `Certificat SSL`{.action} puis cliquez sur `Commander un certificat SSL`{.action}.

![Commande d'un certificat SSL](images/ordering_ssl.png){.thumbnail}

|Élément|Fonction|
|---|---|
|Nom|Si vous le souhaitez, vous pouvez nommer votre certificat, afin de l'identifier rapidement quand vous en avez plusieurs|
|Type de certificat|Gratuit (Let's Encrypt), Comodo DV ou Comodo EV ([Pour plus de détails](https://www.ovhcloud.com/fr/web-hosting/options/ssl/))|
|Fully Qualified Domain Name (FQDN)|Le(s) domaine(s) concerné(s)|

#### Ajout d'un certificat SSL externe

Si vous possédez déjà votre propre certificat SSL, il vous est possible de l'ajouter directement :

![Ajout d'un certificat SSL](images/external_ssl-00.png){.thumbnail}
![Ajout d'un certificat SSL](images/external_ssl.png){.thumbnail}

|Élément|Fonction|
|---|---|
|Nom|Choisissez si vous le souhaitez un nom à votre certificat, afin de l'identifier rapidement quand vous en avez plusieurs|
|Clef privée|Champ d'ajout de la clef privée à ajouter au service|
|Certificat|Champ d'ajout du certificat|
|Chaîne|Champ d'ajout du certificat racine si nécessaire|

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
