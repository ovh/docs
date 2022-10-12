---
title: "Installer la solution CMS headless Sylius sur votre offre Hébergement Performance"
excerpt: "Découvrer comment mettre en œuvre la solution Sylius sur votre serveur en utilisant SSH"
slug: how_to_install_sylius
section: CMS
order: 08
---

**Dernière mise à jour le 12/10/2022**

## Objectif

Sylius est un _CMS Headless_ basé sur la framework PHP [Symfony](https://symfony.com/). L'outil propose les fonctionnalités habituelles que l'on peut rencontrer sur une plateforme e-commerce avec un _back office_ permettant de régler précisément tous les éléments du site. Enfin, son approche _headless_ permet de personnaliser au mieux la partie _front_de l'application.

## Prérequis

Pour avoir des performances optimales, nous préconisons notre [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/). Cette solution inclut, entre autres, un accès SSH qui va vous permettre d'installer une ou plusieurs solutions alternatives à celles proposées dans l'offre.

Pour mettre en place votre solution Sylius, vous devrez intégrer les éléments suivants :
- être familier de la ligne de commande et de l'utilisation d'un terminal
- avoir paramétré votre zone DNS pour faire pointer votre nom de domaine (ou votre sous-domaine) sur votre serveur.

Il faudra, de plus, installer des applicatifs nécessaires à l'installation de Sylius (Composer, NodeJS et Yarn).

## En pratique

### Préparer l'environnement

#### Configurer le pointage de son nom de domaine

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!! Préciser !!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

#### Base de données

Votre [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) dispose d'un serveur SQL privé.
L'éditeur recommande l'utilisation de MySQL en version 5.7+ ou 8.0+.

Vous pourvez vous reporter au guide [Créer une base de données sur son hébergement web](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/)

#### Installer et utiliser un terminal

Si vous utilisez MacOS ou un système Linux, vous pourrez utiliser votre terminal habituel.

Sous Windows, nous devons installer un terminal ou un émulateur de terminal :
- [Windows Terminal](https://www.microsoft.com/store/productId/9N0DX20HK701), accessible dans le Windows Store (à ne pas confondre avec CMD)
- Git Bash, si vous avez installé [Git](https://git-scm.com/) sur votre machine
- [ConEmu](https://conemu.github.io/)
- [Cmder](https://cmder.app/) (qui inclut ConEmu)
- _etc._

#### Se connecter en SSH

##### SSH ?

Le terme SSH _(Secure Shell)_ désigne à la fois un programme _(shell)_ et un protocole. Ce protocole permet à deux machines de communiquer entre elles, après avoir échangé des clés de chiffrement rendant impossible la lecture des données transitant sur le réseau. 

##### Accéder à son serveur

Ouvrez votre terminal et taper la commande suivante en remplaçant _login_ par celui qui vous a été communiqué

```sh
ssh login@ssh.clusterxxx.hosting.ovh.net
```

>[!warning]
>Vous êtes alors invité à saisir votre mot de passe.
>Attention : la saisie du mot de passe n'a aucun effet à l'écran pour des raisons de sécurité.

Une fois connecté à votre serveur, vous aurez une fenêtre similaire à celle-ci :

![Accès SSH](images/cms_headless-manual_installation_sylius%5B1%5D.png)

### Installations

#### Composer

Incontournable pour les développeurs PHP, [Composer](https://getcomposer.org/) est un gestionnaire de dépendance.

Vous pouvez utiliser PHP directement en ligne de commande dans votre terminal. Pour connaître la version du langage qui tourne sur votre serveur, tapez la commande suivante :
```sh
php -v
```

>[!warning]
>Sylius nécessite _a minima_ la version 8.0 de PHP.
>Si cette version n'est pas la bonne, vous pouvez consulter le guide [Modifier la configuration de son hébergement web](https://docs.ovh.com/fr/hosting/modifier-lenvironnement-dexecution-de-mon-hebergement-web/)

Pour installer Composer, suivez les indications disponibles sur la page [download](https://getcomposer.org/download/), dans la rubrique «&nbsp;Command-line installation&nbsp;».

Télécharger l'installeur depuis le site de Composert et changer le nom après le téléchargement :
 ```sh
 php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
 ```

 Vérifier l'intégrité du fichier téléchargé :
 ```sh
 php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
 ```

>[!warning]
>La chaîne de caractères en hexidécimal est un hashage fourni par le site et qui servira pour comparer le résultat du hashage du fichier téléchargé.
>Cette chaîne changera avec la version de Composer, veillez à prendre celle qui est sur le site officiel.

Le fichier téléchargé et recommé, on l'exécute :
```sh
php composer-setup.php
```

Une fois ce fichier exécuté, vous avez un nouveau fichier créé : `composer.phar`.
En PHP, les fichiers `.phar`, pour _PHP Archive_, sont des archives qui permettent d'encapsuler plusieurs fichier dans un seul. Ces fichiers sont directement exécutables en PHP.

Le fichier composer-setup n'étant plus nécessaire, il sera supprimé :
```sh
php -r "unlink('composer-setup.php');"
```

#### NodeJS

L'installation de NodeJS est nécessaire pour utiliser de gestionnaire de paquet `npm` _(Node Package Manager)_.
Vous ne disposez pas de droits adminstrateur sur la serveur, mais vous avez néanmoins la possibilité d'ajouter `npm` en le téléchargeant et en le déployant dans un répertoire dédié.

Il faut d'abord télécharger la dernière version LTS _(long term support)_ de la version 12 de NodeJs à l'aide de la commande `curl` :
```sh
curl -sLO https://nodejs.org/dist/latest-v12.x/node-v12.22.12-linux-x64.tar.xz
```

>[!warning]
>Les version plus récentes de NodeJS posent actuellement des problèmes dans cette configuration pour la suite de l'installation.

On crée un répertoire pour y décompresser le fichier téléchargée :
```sh
mkdir node
tar xJf node-v16.17.1-linux-x64.tar.xz --strip-components=1 --no-same-owner -C node
```

On peut vérifier le bon fonctionnement de NodeJS en tapant la commande suivante :
```sh
node/bin/node -v
```

Vous verrez alors la version de NodeJS qui a été téléchargée s'afficher (v16.17.1 pour notre exemple).

#### Installer Sylius

Sylius nécessite que l'allocation mémoire faite pour l'exécution des scripts ait une valeur supérieure ou égale à 1024M.

Pour installer Sylius dans un répertoire dédié à la racine de votre serveur, en supprimant la limite d'allocation mémoire par défaut, tapez la commande suivante :
```sh
php -d memory_limit=-1 composer.phar create-project sylius/sylius-standard sylius --no-scripts
```

L'ensemble des fichiers sera installé dans le répertoire `sylius` :

![Répertoire Sylius](images/cms_headless-manual_installation_sylius%5B2%5D.png)

#### Configurer Sylius - Partie _back end_

##### **Accès à la base de données**

Avant de lancer Sylius pour la première fois, il faut configurer la connexion à la base de données que nous avons configurée précédemment.

Cette configuration se fait dans le fichier `.env` situé à la racine de votre projet Sylius :

![Localisation fichier .env](images/cms_headless-manual_installation_sylius%5B3%5D.png)

Pour éditer ce fichier, nous allons utiliser nano, un éditeur disponible nativement sur votre serveur, en lançant la commande :

```sh
nano sylius/.env
```

Votre éditeur s'ouvre et vous pouvez découvrir le fichier de configuration installé par défaut :

![Édition fichier .env dans nano](images/cms_headless-manual_installation_sylius%5B4%5D.png)

La ligne qui nous intéresse est la suivante :

```sh
DATABASE_URL=mysql://root@127.0.0.1/sylius_%kernel.environment%
```

Il s'agit de remplacer les éléments définis par défaut par vos paramètres (les valeurs indiquées sont à remplacer par celles disponibles sur votre manager) :

```sh
DATABASE_URL=mysql://username:password@host:port/bdd
```

- username : votre accès à votre base de données
- password : le mot de passe qui a été défini
- host : adresse de l'hôte
- port : le port qui a été attribué
- bdd : le nom de votre base de données.

##### **Configurer l'application en mode « production »**

Symfony, et donc Sylius, possède plusieurs modes de fonctionnement dont deux majeurs : un mode « développement » et un mode « production ».

Dans le premier cas, des outils de débogage sont mis à disposition du développeur. La contrepartie est une lenteur d'exécution. Nous allons donc modifier ce même fichier ```.env``` en ajustant la directive nous permettant de choisir l'un ou l'autre mode :

```sh
APP_ENV=prod
```

##### **Installation de Doctrine**

Doctrine est un ORM _(object-relational mapping)_ fonctionnant nativement avec le _framework_ Symfony permettant de d'établir une couche d'abstraction entre le code en PHP et la base de données relationnelle choisie.

Il faut d'abord se déplacer dans le répertoire du projet :
```sh
cd sylius
```

Puis lancer l'installation avec Composer :
```sh
php ../composer.phar require doctrine/dbal:"^2.6"
```

##### **Installer Sylius**

Maintenant que tous les éléments nécessaires au fonctionnement de Sylius sont en place, nous allons pouvoir procéder à son installation :

```sh
php bin/console sylius:install
```

Vous aurez alors cet affichage :

![Installation Sylius, étape 1](images/cms_headless-manual_installation_sylius%5B5%5D.png)

Répondez « N » à la première question pour créer ou écraser la base de données, vous l'avez déjà créée sur votre Manager :

```sh
Would you like to reset it? (y/N)
```

À la question suivante, répondre « y » pour effacer la base de données

```sh
Warning! This action will erase your database.
Do you want to reset it? (y/N)
```

Il est vous est demandé de saisir dans quelle monnaie vous voulez configurer votre site. Saisissez « EUR » :

```sh
Currency (press enter to use USD): EUR
```

Puis la langue que vous souhaitez utiliser :

```sh
Language (press enter to use en_US): fr_FR
```

Il suffit, ensuite, de répondre aux différents éléments demandés par l'application :

- l'adresse mail du compte administrateur
- le login à utiliser pour se connecter au compte (laisser vide pour utiliser l'adresse mail précédemment saisie)
- un mot de passe et sa confirmation.

L'installation de Sylius sur votre serveur est terminée, mais il faut encore configurer quelques éléments pour le rendre pleinement opérationnel.

#### Configurer Sylius - Partie _front end_

Sylius est installé, la base de données renseignée, mais à ce stage, si vous allez sur votre site, vous n'aurez qu'une interface minimaliste : le lien vers les feuilles de style de fonctionne pas (erreur 404).

##### **Installer Yarn**

Pour la gestion des assets (feuilles de style, JavaScript), Sylius utilise [Gulp](https://gulpjs.com/), une librairie JavaScript permettant l'automatisation de certaines tâches répétitives. Yarn est un gestionnaire de dépendance pour NodeJS (à l'image de ce qu'est Composer pour PHP).

Installer Yarn à la racine du projet :

```sh
../node/bin/npm install yarn
```









## Aller plus loin
