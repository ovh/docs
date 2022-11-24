---
title: 'Cecil - Dynamiser le contenu d'une page'
slug: static-site-generator-cecil-use-api
excerpt: 'Cecil - Get datas from an API to fill a static web page'
section: 'Tutoriels'
order: 03
---

**Dernière mise à jour le 24/11/2022**

## Objectif

Dans ce guide, nous verrons comment utiliser le générateur de site [Cecil](https://cecil.app/fr/) pour rendre le contenu d'une page dynamique en appelant une API pour récupérer des informations et les afficher sur une page générée par la solution.

## Prérequis

Afin de garantir un temps de chargement des pages optimal, nous vous recommandons notre solution de web hosting [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/).

Vous devrez également :

- être à l'aise avec la ligne de commande
- avoir installé et configuré l'application Cecil sur votre hébergement (reportez-vous au guide [Installer et configurer Cecil]()).

## En pratique

L'exemple choisi consiste à utiliser une API d'un service fournissant des données météorologiques en fonction d'une ville saisie par l'utilisateur.

Les étapes sont les suivantes :

- créer une nouvelle page sur Cecil et ajouter cette page au menu du site
- créer un compte et récupérer la clé permettant de faire des requêtes sur l'API météo
- modifier le fichier `.md` créé en ajoutant du code HTML
- ajouter des assets (JavaScript et CSS)
- générer et tester la solution.

### Créer une nouvelle page

Préparez votre environnement en vous connectant en SSH sur votre serveur et reportez-vous au guide [Installer et configurer Cecil]() pour installer votre application Cecil dans un répertoire dédié.

Créez un répertoire et placez-vous dedans :

```sh
mkdir myWebSite
cd myWebSite
```

### Utilisation de l'API OpenWeather

Pour ce guide, nous allons utiliser une API fournie par le site [OpenWeather](https://openweathermap.org/) permettant de connaître les informations météorologiques en fonction du nom d'une ville.

Créez un compte : https://home.openweathermap.org/users/sign_up<br>
Une fois votre compte validé (par envoi d'un mail de confirmation), allez sur le menu « My API keys ». Une clé a été générée par défaut, nous allons l'utiliser pour la suite.

![Open Weather API key](images/static_website_installation_cecil_api_call%5B1%5D.png)

### Ajout du code HTML

Créez une nouvelle page avec la commande :

```sh
php cecil.phar new:page weather.md
```

Éditez ensuite la page générée :

```sh
nano pages/weather.md
```

Modifiez l'en-tête du fichier pour que la page apparaisse dans le menu :

```
---
title: "Weather"
date: 2022-11-24
published: true
menu: main
---
```

Après l'en-tête, ajoutez le code HTML pour afficher la ville choisie, le température renvoyées par l'API et un bouton pour changer de paramètre :

```html
---
title: "Weather"
date: 2022-11-24
published: true
menu: main
---
<h1>Weather</h1>
<div>
    <span id="city">Roubaix</span>
    <div id="temperature"><span id="temperatureValue"></span> °C</div>
    <div id="modify">Change city</div>
</div>
```

Générez la pages HTML avec la commande suivante :

```sh
php cecil.phar build
```

Vérifiez dans votre navigateur et cliquez sur le lien « Weather » qui a été ajouté dans le menu principal :

![Test new page](images/static_website_installation_cecil_api_call%5B2%5D.png)

### Ajouter des assets

### Tests

## Aller plus loin

- le site [OpenWeather](https://openweathermap.org/)
- quelques API à tester sur votre site
    - [Numbers API](http://numbersapi.com/#42)
    - [NASA](https://api.nasa.gov/)
    - [News API](https://newsapi.org/)
    - [Polygon.io](https://polygon.io/)
    - une liste d'[API publiques](https://github.com/public-api-lists/public-api-lists).