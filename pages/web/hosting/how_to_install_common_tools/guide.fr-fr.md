---
title: "Comment installer les outils courants et modifier certaines caractéristiques de votre serveur"
excerpt: ""
slug: how-to-install-common-tools-and-change-settings-on-your-server
section: 
order: 
---

**Dernière mise à jour le 12/01/2023**

## Objectif

Ce guide a pour objectif de vous permettre d'installer les différents outils nécessaires au déploiement d'application web et de framework sur votre hébergement.
Vous trouverez égalements des conseils en terme de pratique vous permettant de gagner du temps sur des tâches répétitives.

## Prérequis

Vous devez disposer d'un [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) et savoir vous connecter en SSH sur votre serveur.

## En pratique

### Composer

#### Installation

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

Exécutez le fichier téléchargé :

```sh
php composer-setup.php
```

Une fois ce fichier exécuté, vous avez un nouveau fichier créé : composer.phar. En PHP, les fichiers .phar, pour PHP Archive, sont des archives qui permettent d'encapsuler plusieurs fichier dans un seul. Ces fichiers sont directement exécutables en PHP.

Supprimez le fichier `composer-setup` :
```php
php -r "unlink('composer-setup.php');"
```

#### Utilisation

Pour utiliser Composer dans n'importe quel projet pour installer un composant, saisir la commande sous cette forme (pour installer Bootstrap dans l'exemple) :
```sh
php ~/composer.phar require twbs/bootstrap
```

### NodeJS

NodeJS peut s'avérer nécessaire pour utiliser la commande `npm` qui permettra d'installer certains utilitaires.

#### Installation

Dans le répertoire `tools`, téléchargez la dernière version _Long Term Support (LTS)_ :

```sh
curl -sLO https://nodejs.org/dist/latest-v16.x/node-v16.18.0-linux-x64.tar.xz
```

Créez un répertoire `node` :

```sh
mkdir node
```

Décompressez le fichier téléchargé dans ce répertoire :

```sh
tar xJf node-v16.18.0-linux-x64.tar.xz --strip-components=1 --no-same-owner -C node
```

Vérifiez le contenu de votre répertoire :

```sh
ls -la ~/node
```

#### Utilisation

Ajoutez le répertoire contenant le programme `npm` dans le path :

```sh
export PATH=~/node/bin:$PATH
```

Verifiez :

```sh
which npm
```

### Paramètres de votre serveur

Nos hébergements mutualisés vous permettent de modifier certaines caractéristiques de votre serveur.

#### Modifier la langue

Pour connaître la langue en vigueur, tapez la commande&nbsp;:

```sh
echo $LANG
```

Il est possible de modifier la langue de cette façon&nbsp;:

```sh
export LANG=en_US.utf8
```

Cette modification ne sera plus effective une fois votre session terminée. Pour que le changement de langue soit persistant, vous devez modifier le fichier `.bashrc` situé à la racine de votre serveur. Éditez le fichier avec la commande suivante&nbsp;:

```sh
nano .bashrc
```

Ajoutez à la fin du fichier une variable d'environnement `LANG` qui sera suivie de la commande `export`&nbsp;:

```sh
# .bashrc

# User specific aliases and functions

# Source global definitions
if [ -f /etc/bashrc ]; then
        . /etc/bashrc
fi

LANG="fr_FR.utf8"
export LANG
```

Vous devez vous déconnecter puis revenir sur votre session pour que les modifications soient prises en compte.

### Clé SSH

#### Charger sa clé SSH en mémoire

Lors de l'utilisation de votre clé SSH, votre passphrase vous est systématiquement demandée. Pour éviter de la saisie à chaque fois, vous pouvez la charger en mémoire.

Dans votre terminal, saisissez la commande&nbsp;:

```ssh
eval $(ssh-agent -s)
```

Puis&nbsp;:

```ssh
ssh-add
```

Vous serez alors amené à saisir la passphrase associée à votre clé SSH. Elle ne sera plus demandée par la suite tant que le terminal que vous utilisez n'est pas fermé.

## Aller plus loin

- [Composer](https://getcomposer.org/)
- [Packagist](https://packagist.org/), dépôt regroupant les paquets installables avec Composer