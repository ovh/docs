---
title: 'Installer et configurer Cecil'
slug: installer-cecil
excerpt: 'Installer et configurer Cecil, générateur de pages statiques'
section: 'Premiers pas'
order: 
---

**Dernière mise à jour le 17/11/2022**

## Objectif

Ce guide a pour objectif de vous permettre d'installer et de configurer [Cecil](https://cecil.app/), application écrite en PHP permettant de générer et d'administrer des pages web statiques.

Un site web composé essentiellement de pages web statiques vous garantira un meilleur temps de chargement pour vos visiteurs en plus d’une plus grande sécurité. Sans contenu dynamique, vos pages représentent un risque moindre quant aux attaques.

La génération d’un site statique vous permet de disposer d’une grande liberté de création pour vous permettre de créer le site web de vos rêves tout en gagnant du temps car vous n’avez pas à partir de zéro.

## Prérequis

Pour avoir des temps de réponse optimaux, nous préconisons notre [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/). Cette solution inclut, entre autres, un accès SSH qui va vous permettre d'installer, en ligne de commande, une ou plusieurs solutions alternatives à celles proposées dans l'offre.

Pour mettre en place la solution, vous devrez intégrer les éléments suivants :
- être familier de la ligne de commande et de l'utilisation d'un terminal
- savoir transférer ses fichiers en FTP avec un client comme [FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)
- avoir paramétré votre zone DNS pour faire pointer votre nom de domaine (ou votre sous-domaine) sur votre serveur. Cela vous sera utile si vous avez l’intention de créer plusieurs sites statiques sur le même hébergement web.

Vous devez également avoir installé [Composer](https://getcomposer.org/) et avoir votre fichier `composer.phar` à la racine de votre serveur où dans n'importe quel répertoire accessible.

## En pratique

### Préparations

#### Créer le répertoire dans lequel seront vos fichiers

Votre [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) vous permet de gérer plusieurs sites sur votre serveur.

Une fois connecté en SSH à votre serveur, créez un répertoire à la racine avec la commande :
```sh
mkdir monsitestatique
```

Puis allez dans votre ce répertoire :
```sh
cd monsitestatique
```

#### Téléchargez Cecil

Dans le répertoire que vous venez de créer, téléchargez Cecil :

```sh
curl -OL https://github.com/Cecilapp/Cecil/releases/latest/download/cecil.phar
```

#### Installez Cecil

Puis lancer l'installation avec la commande :
```sh
php cecil.phar new:site
```

Vous aurez alors à renseigner certains éléments :
- le titre de votre site _(title)_
- la _baseline_
- l'URL de votre site (par exemple, `https://monsite.ovh`)
- une description de votre site

![Installation Cecil](images/static_website_installation_cecil%5B1%5D.png)

Une fois ces éléments renseignés, vous devez maintenant déployer le site en tapant la commande :
```sh
php cecil.phar build
```

En affichant le contenu du répertoire, vous constaterez la création d'un répertoire `_site` qui contiendra l'ensemble des fichiers HTML et des assets, répertoire sur lequel pointe votre nom de domaine :

![Installation Cecil](images/static_website_installation_cecil%5B2%5D.png)

Vous pouvez maintenant voir le résultat en allant sur votre nom de domaine :

![Installation Cecil](images/static_website_installation_cecil%5B3%5D.png)

#### Configurer son site

Les informations générales de votre site peuvent être configurées dans le fichier `config.yml` :

```sh
nano config.yml
```

Remplacez les informations par défaut par les votres et sauvegardez le fichier.

![Fichier de configuration YAML](images/static_website_installation_cecil%5B4%5D.png)

### Créer sa première page

La création des pages qui contiendront les données de votre site se fait via des fichiers au format _Markdown_. Ces pages sont personnalisables : Cecil utilise le moteur de _template_ [Twig](https://twig.symfony.com/) qui est utilisé par défaut avec le _framework_ [Symfony](https://symfony.com/).

#### Organisation des fichiers

- `assets` contiendra les éléments graphiques, les scripts et les fichiers [Sass](https://sass-lang.com/)
- `layouts` est le répertoire dans lequel seront le ou les _templates_
- `pages` sera l'endroit où seront vos fichiers _Markdown_
- `_site` est le répertoire qui contiendra les fichiers générés et qui sera pointé par votre nom de domaine
- `static` pour tous les fichiers statiques type PDF.

#### Créer un fichier _Markdown_ en ligne de commande

À la racine du site, tapez la commande :

```sh
php cecil.phar new:page mapage.md
```

Un fichier `mapage.md` est alors créé à la racine du répertoire `/pages

![Installation Cecil](images/static_website_installation_cecil%5B5%5D.png)

#### Générer les fichiers statiques

Toujours à la racine, tapez la commande :

```sh
php cecil.phar build
```

Votre fichier se trouve dans le répertoire `_site/mapage/` :

![Installation Cecil](images/static_website_installation_cecil%5B6%5D.png)

Et vous pouvez la visualiser sur votre serveur en tapant l'URL de votre site, suivi de `/mapage/` :

![Résultat navigateur](images/static_website_installation_cecil%5B7%5D.png)

#### Personnaliser les fichiers de votre site

##### **Modification sur le serveur**

L'édition des fichiers _Markdown_ peut se faire directement sur le serveur. Sur votre offre [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/), votre accès SSH pour permet d'utiliser indifféremment [GNU nano](https://nano-editor.org/), [vi](https://ex-vi.sourceforge.net/l) ou [vim](https://www.vim.org/).
Les captures d'écran du présent guide ont été réalisées sous GNU nano.

Éditez le fichier `mapage.md` situé dans le répertoire `pages` en tapant la commande suivante si vous êtes à la racine de votre site :

```sh
 nano pages/mapage.md
```

![Édition du fichier dans GNU nano](images/static_website_installation_cecil%5B8%5D.png)

Ajoutez quelques lignes en respectant la syntaxe _Markdown_ :

![Ajout de contenu dans le fichier](images/static_website_installation_cecil%5B9%5D.png)

Rebuildez vos pages après avoir sauvegardé votre fichier :

```sh
php cecil.phar build
```

Puis retournez sur votre page pour voir le résultat :

![Page mise à jour](images/static_website_installation_cecil%5B10%5D.png)

##### **Modification sur votre poste de travail**

Si vous préférez utiliser votre éditeur de code habituel, connectez-vous avec un client FTP sur votre serveur pour récupérer les fichiers sur votre ordinateurs :

![Téléchargement avec FileZilla](images/static_website_installation_cecil%5B11%5D.png)

Vous pouvez maintenant éditer les fichiers dans votre I.D.E. :

![Affichage dans Visual Studio Code](images/static_website_installation_cecil%5B12%5D.png)

Il vous suffit de renvoyer vos fichiers modifiés ou vos nouveaux fichiers sur votre serveur et de rebuilder pour avoir vos pages en ligne.

#### Ajout la page générée au menu de votre site

Pour ajouter cette nouvelle page dans le menu du site, vous devez modifier manuellement l'en-tête du fichier `.md` en rajoutant la ligne :

```sh
menu: main
```

![Add menu](images/static_website_installation_cecil%5B13%5D.png)

### Utiliser une API

Chaque fichier créée avec le générateur de pages statiques peut contenu du code lui permettant de faire appel à une API pour récupérer des données dynamiques. Dans l'exemple suivant, nous allons créer une page nous permettant d'afficher des données météorologiques.

#### Création d'une page « météo »

Créez une page dédiée pour accéder à la météo :

```sh
php cecil.phar new:page meteo.md
```

Modifiez le contenu de votre page :

```sh
nano pages/meteo.md
```

Lancez la génération de la page :

```sh
php cecil.phar build
```

Vérifiez la visibilité de votre page sur votre navigateur en ajoutant `/meteo` à l'URL de votre site web :

![Visualisation nouvelle page créée](images/static_website_installation_cecil%5B14%5D.png)

#### Choisir une API

L'API choisie pour cet exemple est celle fournie par [OpenWeather](https://openweathermap.org/). 
Créez un compte : https://home.openweathermap.org/users/sign_up

Une fois votre compte validé (par envoi d'un mail de confirmation), allez sur le menu « My API keys ». Une clé a été générée par défaut, nous allons l'utiliser pour la suite.

![Open Weather API key](images/static_website_installation_cecil%5B15%5D.png)

#### Préparer la page web

Éditez le fichier `meteo.md` :

```sh
nano pages/meteo.md
```

Dans ce fichier, ajoutez la partie HTML de la page qui va permetter d'afficher la température de la ville sélectionnées :

```html
---
title: "Meteo"
date: 2022-11-16
published: true
menu: main
---
<h1>Météo</h1>
<div>
    <span id="city">Roubaix</span>
    <div id="temperature"><span id="temperatureValue"></span> °C</div>
    <div id="modify">Changer de ville</div>
</div>
```

#### Modifier les templates

Les templates sont disposés dans le répertoire `layouts`. Vous pouvez les visualiser avec la commande :

```sh
ls -la layouts
```

Le fichier contient un répertoire `blog` et un fichier `index.html.twig` :

![Cecil layouts directory](images/static_website_installation_cecil%5B16%5D.png)

Ouvrez le fichier `index.html.twig` :

![Cecil layouts index file](images/static_website_installation_cecil%5B17%5D.png)

Le fichier fait référence à un template qui n'est pas présent dans le répertoire. Ce fichier (et d'autres) sont en fait dans le fichier `cecil.phar`. Les extensions `.phar` désigne des archives de fichiers PHP qui sont manipulables sans être décompressés.
Décompressez les fichiers de cette archive pour les rendre visibles :

```sh
php cecil.phar util:extract
```

Affichez à nouveau le contenu du répertoire `layouts` :

![Cecil layouts full directory](images/static_website_installation_cecil%5B18%5D.png)

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

#### Fichier JavaScript

Les fichiers JavaScript, comme les fichiers CSS, sont à mettre dans le répertoire `assets`. Libre à vous de les organiser dans différents répertoires.

Nous allons créer le fichier `script.js` mentionné précédemment à la racinte de ce répertoire `assets` :

```sh
nano assets/script.js
```

Pensez à remplacer la valeur de la variable `apiKey` par la clé que vous aurez récupérée sur le site 

```javascript
let apiKey = '123456789'; // Remplacez cette valeur
let city = 'Roubaix'; // Indiquez ici la ville par défaut qui sera affichée sur la page météo
getTemperature(city);

let button = document.querySelector('#modify');
button.addEventListener('click', () => {
    city = prompt('Choose a city');
    getTemperature(city);
});

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

Vous pouvez aller sur votre navigateur :

![Web page with JavaScript running](images/static_website_installation_cecil%5B19%5D.png)

Cliquez sur "Changez de ville" et saisissez le nom d'une commune :

![Select a new city](images/static_website_installation_cecil%5B20%5D.png)

![Page updated](images/static_website_installation_cecil%5B21%5D.png)

## Aller plus loin

- le site de l'application [Cecil](https://cecil.app/)
- la [page](https://daringfireball.net/projects/markdown/) du créateur du format Markdown
- un [guide](https://www.markdownguide.org/) sur ce format
- notre guide sur l'[utilisation de FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)
- le site officiel de [Twig](https://twig.symfony.com/), le moteur de templates utilisé.