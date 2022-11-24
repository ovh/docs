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

### Ajouter le code JavaScript

Il n'est pas possible d'ajouter une balise `<script>` dans un fichier Markdown. Il est nécessaire de modifier le template fourni par défaut pour permettre l'ajout de cette balise.

#### Modifier le template

Les templates sont disposés dans le répertoire `layouts`. Vous pouvez les visualiser avec la commande :

```sh
ls -la layouts
```

Le fichier contient un répertoire `blog` et un fichier `index.html.twig` :

![layouts directory](images/static_website_installation_cecil_api_call%5B3%5D.png)

Ouvrez le fichier `index.html.twig` :

![Cecil layouts index file](images/static_website_installation_cecil_api_call%5B4%5D.png)

Le fichier fait référence à un template qui n'est pas présent dans le répertoire. Ce fichier (et d'autres) sont en fait dans le fichier `cecil.phar`. Les extensions `.phar` désigne des archives de fichiers PHP qui sont manipulables sans être décompressés.
Décompressez les fichiers de cette archive pour les rendre visibles :

```sh
php cecil.phar util:extract
```

Affichez à nouveau le contenu du répertoire `layouts` :

![Cecil layouts directory including uncompressed files](images/static_website_installation_cecil_api_call%5B5%5D.png)

Nous allons modifier le template par défaut pour insérer une balise `<script>` qui contiendra le code permettant l'appel à l'API :

```sh
nano layouts/_default/page.html.twig
```

Cette balise et son contenu sont à placer avant la balise fermante `</body>` en page de page :

```twig
    </footer>
    {%- include 'partials/googleanalytics.js.twig' with {site} only ~%}
    {% block javascript %}
    <script src="{{ asset('script.js', {minify: true}) }}"></script>
    {% endblock %}
  </body>
</html>
```

Quand un ou des fichiers assets sont modifiés, reconstruisez-le le cache avec la commande :

```sh
php cecil.phar cache:clear:assets
```

Si les modifications ne sont pas effectives sur votre navigateur, pensez à vider le cache de celui-ci et rebuilder votre solution :

```sh
php cecil.phar build
```

#### Ajouter le fichier JavaScript

Les fichiers JavaScript, comme les fichiers CSS, sont à mettre dans le répertoire `assets`. Libre à vous de les organiser dans différents répertoires.

Nous allons créer le fichier `script.js` mentionné précédemment à la racinte de ce répertoire `assets` :

```sh
nano assets/script.js
```

Pensez à remplacer la valeur de la variable `apiKey` par la clé que vous aurez récupérée sur le site 

```javascript
let apiKey = '123456789'; // Remplacez cette valeur
let city = 'Roubaix'; // Indiquez ici la ville par défaut qui sera affichée sur la page météo
getTemperature(city);  // Appel de la fonction appelant l'API avec le paramètre 'city'

// Ajout d'un événement sur le click du bouton « Change city »
let button = document.querySelector('#modify');
button.addEventListener('click', () => {
    city = prompt('Choose a city');
    getTemperature(city);
});

// Fonction d'appel à l'API en utilisant un objet XMLHttpRequest pour une requête asynchrone
function getTemperature(city) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';
    let xhrQuery = new XMLHttpRequest();
    xhrQuery.open('GET', url);
    xhrQuery.responseType = 'json';
    xhrQuery.send();

    xhrQuery.onload = function() {
        if (xhrQuery.readyState === XMLHttpRequest.DONE) {
            if (xhrQuery.status === 200) {
                let city = xhrQuery.response.name;
                let temperature = xhrQuery.response.main.temp;
                document.querySelector('#city').textContent = city;
                document.querySelector('#temperatureValue').textContent = temperature;
            } else {
                alert('A problem has occurred, please come try later.');
            }
        }
    };
}
```

### Tests

Vous pouvez aller sur votre navigateur :

![Web page with JavaScript running](images/static_website_installation_cecil_api_call%5B6%5D.png)

Cliquez sur "Changez de ville" et saisissez le nom d'une commune :

![Select a new city](images/static_website_installation_cecil_api_call%5B7%5D.png)

![Page updated](images/static_website_installation_cecil_api_call%5B8%5D.png)

### Conclusion

Ce guide vous donne un exemple de la façon dont vous pouvez intégrer des données dynamiques récupérées sur des sources externes par le biais d'API. Vous pouvez ainsi construire et faire vivre un site en modifiant manuellement les contenus des pages et en en créant de nouvelles, tout en enrichissant leur contenu depuis d'autres sites.

## Aller plus loin

- le site [OpenWeather](https://openweathermap.org/)
- quelques API à tester sur votre site
    - [Numbers API](http://numbersapi.com/#42)
    - [NASA](https://api.nasa.gov/)
    - [News API](https://newsapi.org/)
    - [Polygon.io](https://polygon.io/)
    - une liste d'[API publiques](https://github.com/public-api-lists/public-api-lists).