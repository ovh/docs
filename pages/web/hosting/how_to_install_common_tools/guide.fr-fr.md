---
title: "Comment installer les outils courants utilisés en PHP"
excerpt: "Comment installer les outils courants utilisés en PHP"
slug: how-to-install-common-tools
section: PHP
order: 3
---

**Dernière mise à jour le 24/10/2022**

## Objectif

Ce guide a pour objectif de vous permettre d'installer les différents outils nécessaires au déploiement d'application web et de framework sur votre hébergement.

## Prérequis

Vous devez disposer d'un [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) et savoir vous connecter en SSH sur votre serveur.

## En pratique

### Créer un répertoire tools

Pour mutualiser les outils que vous installerez sur votre hébergement, nous allons les disposer dans un répetoire qui sera situé à la racine de votre serveur :

```sh
mkdir tools
```

Vous pouvez vérifier la création du répertoire à l'aide de la commande `ls` (list) :
```sh
ls -la
```

![list command](images/how_to_install_common_tools%5B1%5D.png)

Déplacez-vous dans ce répertoire :

```sh
cd tools
```

### Installer Composer

[Composer](https://getcomposer.org/) est un gestionnaire de dépendances permettant d'installer les bibliothèques dont on a besoin pour le déploiement d'un projet PHP.

Téléchargez le fichier d'installation et renommez-le :

```php
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
```

Vous pouvez vérifier l'intégrité du fichier téléchargé :

```php
php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
```

La chaîne de caractères en hexidécimal est un hashage fourni par le site et qui servira pour comparer le résultat du hashage du fichier téléchargé. Cette chaîne changera avec la version de Composer, veillez à prendre celle qui est sur le [site officiel](https://getcomposer.org/).

On exécute le fichier téléchargé :

```sh
php composer-setup.php
```

Une fois ce fichier exécuté, vous avez un nouveau fichier créé : composer.phar. En PHP, les fichiers .phar, pour PHP Archive, sont des archives qui permettent d'encapsuler plusieurs fichier dans un seul. Ces fichiers sont directement exécutables en PHP.

Supprimez le fichier `composer-setup` :
```php
php -r "unlink('composer-setup.php');"
```

## Aller plus loin
