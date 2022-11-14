---
title: 'Installer et configurer Cecil'
slug: installer-cecil
excerpt: 'Installer et configurer Cecil, générateur de pages statiques'
section: 'Premiers pas'
order: 
---

**Dernière mise à jour le 14/11/2022**

## Objectif

Ce guide a pour objectif de vous permettre d'installer et de configurer [Cecil](https://cecil.app/), application écrite en PHP permettant de générer et administrer des pages web statiques.

## Prérequis

Pour avoir des temps de réponse optimaux, nous préconisons notre [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/). Cette solution inclut, entre autres, un accès SSH qui va vous permettre d'installer une ou plusieurs solutions alternatives à celles proposées dans l'offre.

Pour mettre en place la solution, vous devrez intégrer les éléments suivants :
- être familier de la ligne de commande et de l'utilisation d'un terminal
- savoir transférer ses fichiers en FTP avec un client comme [FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)
- avoir paramétré votre zone DNS pour faire pointer votre nom de domaine (ou votre sous-domaine) sur votre serveur.

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
- l'URL de votre site
- une description de votre site

![Installation Cecil](images/static_website_installation_cecil%5B1%5D.png)

Une fois ces éléments renseignés, vous devez maintenant déployer le site en tapant la commande :
```sh
php cecil.phar build
```

En affichant le contenu du répertoire, vous constaterez la création d'un répertoire `_site` qui contiendra l'ensemble des fichiers HTML et des assets, répetoire sur lequel pointe votre nom de domaine :

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

#### Gérérer les fichiers statiques

Toujours à la racine, tapez la commande :

```sh
php cecil.phar build
```

Votre fichier se trouve dans le répertoire `_site/mapage/` :

![Installation Cecil](images/static_website_installation_cecil%5B6%5D.png)

Et vous pouvez la visualiser sur votre serveur en tapant l'URL de votre site, suivi de `/mapage/` :

![Résultat navigateur](images/static_website_installation_cecil%5B7%5D.png)

#### Modifier ses fichiers

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

![Visualisation nouvelle page créée](images/static_website_installation_cecil%5B13%5D.png)

#### Choisir une API

L'API choisie pour cet exemple est celle fournie par [OpenWeather](https://openweathermap.org/). 
Créez un compte : https://home.openweathermap.org/users/sign_up

Une fois votre compte validé (par envoi d'un mail de confirmation), allez sur le menu « My API keys ». Une clé a été générée par défaut, nous allons l'utiliser pour la suite.

![Open Weather API key](images/static_website_installation_cecil%5B14%5D.png)

#### Préparer la page web

Éditez le fichier `meteo.md` :

```sh
nano pages/meteo.md
```

Dans ce fichier, ajoutez la partie HTML de la page qui va permetter d'afficher la température de la ville sélectionnées :

```html
---
title: "Meteo"
date: 2022-11-14
published: true
---
<h1>Météo</h1>
<div>
    <span id="city">Roubaix</span>
    <div id="temperature"><span id="temperatureValue"></span> °C</div>
    <div id="modify">Changer de ville</div>
</div>
<script src="script.js"></script>
```

## Aller plus loin

- le site de l'application [Cecil](https://cecil.app/)
- la [page](https://daringfireball.net/projects/markdown/) du créateur du format Markdown
- un [guide](https://www.markdownguide.org/) sur ce format
- notre guide sur l'[utilisation de FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/)