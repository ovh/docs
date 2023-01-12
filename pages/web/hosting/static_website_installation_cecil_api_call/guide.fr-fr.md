---
title: "Tutoriel - Dynamiser le contenu d'une page web avec Cecil"
slug: static-site-generator-cecil-use-api
excerpt: "Découvrez comment dynamiser le contenu d'une page web avec Cecil"
section: 'Tutoriels'
order: 03
---

**Dernière mise à jour le 11/01/2023**

## Objectif

Ce tutoriel vous décrit comment utiliser le générateur de site [Cecil](https://cecil.app/fr/){.external} pour afficher le contenu d'une page dynamique. Le tout en appelant une API pour récupérer et afficher des informations sur une page générée via **Cecil**.

**Découvrez comment dynamiser le contenu d'une page web avec Cecil**

## Prérequis

- Disposer d'une [offre d'hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) incluant un accès SSH. Cet accès permet d'installer en ligne de commande une ou plusieurs solutions alternatives à celles proposées par défaut dans nos offres d'hébergements web.
- Être familiarisé à la saisie en ligne de commande
- Avoir installé et configuré l'application **Cecil** sur votre hébergement (reportez-vous à notre tutoriel sur [l'installation et la configuration de Cecil](https://docs.ovh.com/fr/hosting/install-configure-cecil)).

## En pratique

L'exemple choisi consiste à utiliser l'une des APIs d'un service fournissant des données météorologiques. Ceci en fonction d'une ville saisie par l'utilisateur.

Les étapes sont les suivantes&nbsp;:

- créer une nouvelle page sur Cecil et ajouter cette page au menu du site web
- créer un compte et récupérer la clé permettant de faire des requêtes sur l'API météo
- modifier le fichier `.md` créé en ajoutant du code HTML
- ajouter des `assets` (JavaScript et CSS)
- générer et tester la solution.

### Créer une nouvelle page

Préparez votre environnement en vous connectant en SSH sur votre hébergement web et reportez-vous au guide [Installer et configurer Cecil](https://ovhcloud.com/) pour installer votre application **Cecil** dans un répertoire dédié.

Créez un répertoire et placez-vous dedans&nbsp;:

```sh
mkdir myWebSite
cd myWebSite
```

### Utilisation de l'API OpenWeather

Pour ce tutoriel, nous allons utiliser une API fournie par le site [OpenWeather](https://openweathermap.org/){.external}. Elle permet de connaître les informations météorologiques en fonction du nom d'une ville.

Créez un compte sur <https://home.openweathermap.org/users/sign_up><br>
Une fois votre compte validé (par envoi d'un e-mail de confirmation), rendez-vous sur le menu «&nbsp;My API keys&nbsp;». Une clé a été générée par défaut, récupérez-là et conservez-là pour la suite de ce tutoriel.

![Open Weather API key](images/static_website_installation_cecil_api_call01.png)

### Ajout du code HTML

Créez une nouvelle page avec la commande&nbsp;:

```sh
php cecil.phar new:page weather.md
```

Éditez ensuite la page générée&nbsp;:

```sh
nano pages/weather.md
```

Modifiez l'en-tête du fichier pour que la page apparaisse dans le menu&nbsp;:

```
---
title: "Weather"
date: 2022-11-28
published: true
menu: main
---
```

Après l'en-tête, ajoutez le code HTML pour afficher la ville choisie, les températures renvoyées par l'API et un bouton pour changer de paramètre&nbsp;:

```html
---
title: "Weather"
date: 2022-11-28
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

Générez la pages HTML avec la commande suivante&nbsp;:

```sh
php cecil.phar build
```

Vérifiez le résultat dans votre navigateur et cliquez sur le lien «&nbsp;Weather&nbsp;» qui a été ajouté dans le menu principal&nbsp;:

![Test new page](images/static_website_installation_cecil_api_call02.png)

### Ajouter le code JavaScript

Il est impossible d'ajouter une balise `<script>` dans un fichier Markdown. Vous devrez modifier le template fourni par défaut.

#### Modifier le template

Les templates sont disposés dans le répertoire `layouts`. Vous pouvez les visualiser avec la commande&nbsp;:

```sh
ls -la layouts
```

Le fichier contient un répertoire `blog` et un fichier `index.html.twig`&nbsp;:

![layouts directory](images/static_website_installation_cecil_api_call03.png)

Ouvrez le fichier `index.html.twig` :

![Cecil layouts index file](images/static_website_installation_cecil_api_call04.png)

Le fichier fait référence à un template qui n'est pas présent dans le répertoire. Ce fichier (et d'autres) sont en réalité dans le fichier `cecil.phar`. Les extensions `.phar` désignent des archives de fichiers PHP qui sont manipulables sans être décompressées.
Décompressez les fichiers de cette archive pour les rendre visibles&nbsp;:

```sh
php cecil.phar util:extract
```

Affichez à nouveau le contenu du répertoire `layouts`&nbsp;:

![Cecil layouts directory including uncompressed files](images/static_website_installation_cecil_api_call05.png)

Nous allons modifier le template par défaut pour insérer une balise `<script>` qui contiendra le code permettant l'appel à l'API&nbsp;:

```sh
nano layouts/_default/page.html.twig
```

Cette balise et son contenu sont à placer avant la balise fermante `</body>` en bas de page&nbsp;:

```twig
    </footer>
    {%- include 'partials/googleanalytics.js.twig' with {site} only ~%}
    {% block javascript %}
    <script src="{{ asset('script.js', {minify: true}) }}"></script>
    {% endblock %}
  </body>
</html>
```

Quand un ou plusieurs fichiers `assets` sont modifiés, reconstruisez le cache avec la commande&nbsp;:

```sh
php cecil.phar cache:clear:assets
```

Si les modifications ne sont pas effectives sur votre navigateur internet, videz le cache de celui-ci.
Vous pouvez également supprimer les fichiers générés sur votre hébergement web&nbsp;:

```sh
php cecil.phar clear
```

et reconstruisez votre solution à l'aide de la commande ci-dessous&nbsp;:

```sh
php cecil.phar build
```

#### Ajouter le fichier JavaScript

Les fichiers JavaScript, comme les fichiers CSS, sont à mettre dans le répertoire `assets`. Vous pouvez les organiser dans différents répertoires.

Créez le fichier `script.js` mentionné précédemment à la racine du répertoire `assets`&nbsp;:

```sh
nano assets/script.js
```

Remplacez la valeur de la variable `apiKey` par la clé récupérée précédement sur le site [OpenWeather](https://openweathermap.org/){.external}

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

Rendez-vous sur votre site web via un navigateur Internet&nbsp;:

![Web page with JavaScript running](images/static_website_installation_cecil_api_call06.png)

Cliquez sur «&nbsp;Changez de ville&nbsp;» et saisissez le nom d'une commune&nbsp;:

![Select a new city](images/static_website_installation_cecil_api_call07.png)

![Page updated](images/static_website_installation_cecil_api_call08.png)

### Conclusion

Ce tutoriel vous donne un exemple d'intégration de données dynamiques récupérées sur des sources externes par le biais d'APIs. Construisez et faites vivre un site web en modifiant manuellement le contenu de ces pages ou créez-en de nouvelles. Le tout en enrichissant leurs contenus depuis d'autres sites web.

## Aller plus loin

- le site [OpenWeather](https://openweathermap.org/){.external}
- quelques API à tester sur votre site web
    - [Numbers API](http://numbersapi.com/#42){.external}
    - [NASA](https://api.nasa.gov/){.external}
    - [News API](https://newsapi.org/){.external}
    - [Polygon.io](https://polygon.io/){.external}
    - une liste d'[API publiques](https://github.com/public-api-lists/public-api-lists){.external}
- les [commandes](https://cecil.app/documentation/commands/){.external} **Cecil**.
