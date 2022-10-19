---
title: 'Installer et configurer Cecil'
slug: installer-cecil
excerpt: 'Installer et configurer Cecil, générateur de pages statiques'
section: 'Premiers pas'
order: 
---

**Dernière mise à jour le 18/10/2022**

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

![Installation Cecil](images/static_website_installation_cecil%5B4%5D.png)

#### Gérérer les fichiers statiques

Toujours à la racine, tapez la commande :

```sh
php cecil.phar build
```

Votre fichier se trouve dans le répertoire `_site/mapage/` :

![Installation Cecil](images/static_website_installation_cecil%5B5%5D.png)

## Aller plus loin

- la [page](https://daringfireball.net/projects/markdown/) du créateur du format Markdown
- un [guide](https://www.markdownguide.org/) sur ce format