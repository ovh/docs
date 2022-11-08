---
title: "Installer le CMS headless Cockpit sur votre offre Hébergement Performance"
excerpt: "Découvrer comment installer et configurer le CMS Cockpit sur votre serveur en utilisant SSH"
slug: how_to_install_cockpit
section: CMS
order: 09
---

**Dernière mise à jour le 07/11/2022**

## Objectif

Ce guide a pour objectif de vous permettre d'installer le CMS (Content Management System) Headless [Cockpit](https://getcockpit.com/) sur votre [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) et de le configurer.
Cockpit va vous permettre de créer et structurer votre contenu, qui sera accessible via des API.

## Prérequis

Pour avoir des performances optimales, nous préconisons notre [Hébergement Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/). Cette solution inclut, entre autres, un accès SSH qui va vous permettre d'installer une ou plusieurs solutions alternatives à celles proposées dans l'offre.

Pour mettre en place Cockpit, vous devrez intégrer les éléments suivants :
- être familier de la ligne de commande et de l'utilisation d'un terminal
- avoir paramétré votre zone DNS pour faire pointer votre nom de domaine (ou votre sous-domaine) sur votre serveur.

Cockpit utilise soit une base de données [MongoDB](https://www.mongodb.com/), soit la base de donnée [SQLite](https://www.sqlite.org/) intégrée à PHP.
Ce guide a été élaboré avec SQLite.

## En pratique

### Installer Cockpit

#### Préparer votre serveur

Dans votre Manager, configurez le pointage de votre nom de domaine vers le répertoire `cockpit`.
Votre hébergement dispose de toutes les extensions requises pour installer votre solution.

#### Téléchargez Cockpit

À la racine de votre serveur, créez un répertoire `cockpit` :

```sh
mkdir cockpit
```

Allez dans ce répertoire :

```sh
cd cockpit
```

Clonez les fichiers depuis le dépôt GitHub du projet Cockpit :

```sh
git clone https://github.com/Cockpit-HQ/Cockpit.git .
```

#### Installez Cockpit

L'installation se fait par votre navigateur en saisissant le nom de domaine que vous avez configuré suivi de `/install` : https://monsite.ovh/install (en remplaçant `monsite.ovh` par votre domaine).

![Page d'installation de Cockpit](images/how_to_install_cockpit%5B1%5D.png)

### Accédez à l'interface d'administration

Revenez sur votre nom de domaine et saisissez les login et mot de passe par défaut (admin/admin) :

![Accès interface admin](images/how_to_install_cockpit%5B2%5D.png)

### Configurer votre application

Les éléments de configuration se trouvent dans le fichier `config.php` situé dans le répertoire `/config/`.
À la racine de votre application, éditez ce fichier de configuration :

```sh
nano config/config.php
```

Le fichier sera vide par défaut :

```php
return [

];
```

Pour changer le nom de votre application, ajoutez la propriété `app.name` : 

```php
return [
    'app.name' => 'Mon projet Cockpit'
];
```

Vous trouverez plus de détail sur la [documentation](https://getcockpit.com/documentation/core/quickstart/configuration) relative à la configuration de Cockpit.

## Aller plus loin
