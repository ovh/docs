---
title: "Installer la solution CMS headless Sylius sur votre offre Hébergement Performance"
excerpt: "Découvrer comment mettre en œuvre la solution Sylius sur votre serveur en utilisant SSH"
slug: how_to_install_sylius
section: CMS
order: 08
---

**Dernière mise à jour le 06/10/2022**

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
![Accès SSH](images/cms_headless-manual_installation_sylius%20%5B1%5D.png)

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

Il faut d'abord télécharger la dernière version LTS _(long term support)_ de NodeJs à l'aide de la commande `curl` :
```sh
curl -sLO https://nodejs.org/dist/latest-v16.x/node-v16.17.1-linux-x64.tar.xz
```

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

## Aller plus loin

