---
title: 'Démarrez avec MySQL et MariaDB'
slug: demarrez-avec-mysql-et-mariadb
excerpt: 'Utilisez vos bases de données'
section: 'Premiers pas'
order: 02
---

**Dernière mise à jour le 29/06/2022**

## Objectif

Vous désirez utiliser MySQL ou MariaDB pour vos bases de données ?

### Qu'est-ce qu'une base de données MySQL ?

MySQL est un système de gestion de bases de données relationnelles développé pour des performances élevées en lecture, contrairement à d'autres systèmes.

Ce moteur est open source et sa maison mère n'est autre qu'Oracle.

### Qu'est-ce qu'une base de données MariaDB ?

MariaDB est un dérivé (fork) du système de gestion de bases de données MySQL.

Ce moteur est 100% compatible, et se veut plus "libre" que sa grande sœur MySQL. Tous les bugs et roadmaps sont librement accessibles, contrairement à la version d'Oracle. En plus de cela, le moteur de stockage InnoDB est remplacé par XtraDB et d'autres optimisations promettent des gains en performances.

**Découvrez comment créer et gérer vos bases de données MySQL ou MariaDB**

## Prérequis

- Disposer d'une [instance CloudDB](https://www.ovh.com/fr/cloud/cloud-databases/)(incluse dans une offre d'[hébergement web performance](https://www.ovhcloud.com/fr/web-hosting/))
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Avoir consulté le [guide de démarrage de CloudDB](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/)

## En pratique

### Connexion à la base de données

> [!primary]
>
> Cette offre ne donne pas accès au Host mais aux bases de données hébergées sur celui-ci. Les commandes SQL génériques fonctionnent sans aucun problème, et les logiciels type HeidiSQL ou SQuirreL SQL sont pleinement compatibles.
> 

> [!primary]
>
> MariaDB étant un dérivé de MySQL, les différentes commandes sont exactement les mêmes pour ces 2 types de bases de données.
> 

Afin de vous connecter à votre base, assurez-vous de :

- Disposer de l'adresse de votre instance CloudDB
- Disposer du port de votre instance CloudDB
- Disposer du nom d'utilisateur de votre instance CloudDB
- Disposer du mot de passe associé à l'utilisateur
- Disposer du nom de votre base de données

Toutes ces informations sont disponibles dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

Un guide est également disponible : [Premiers pas avec le service CloudDB](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/)

#### Connexion en ligne de commande

```bash
mysql --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base
```

#### Connexion en script PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

#### Connexion par logiciel (SQuirreL SQL)

- Lancez SQuirreL SQL et cliquez sur `Aliases`{.action}, puis sur `+`{.action}.

![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Remplissez les champs ci-dessous puis validez avec le bouton `OK`{.action} :
    - **Name** : Choisissez un nom
    - **Driver** : Choisissez `MySQL Driver`
    - **URL** : Indiquez l'adresse du serveur et le port sous la forme `jdbc:mysql://server:port`
    - **User Name** : Indiquez le nom d'utilisateur
    - **Password** : Indiquez le mot de passe

![config connection](images/2.PNG){.thumbnail}

- Validez à nouveau avec le bouton `Connect`{.action}.

![valid connection](images/3.PNG){.thumbnail}

Vous êtes maintenant bien connecté à votre base de données :

![config connection](images/4.PNG){.thumbnail}

#### Connexion par phpMyAdmin

Vous pouvez utiliser phpMyAdmin pour explorer le contenu de votre base de données. Pour cela, installez phpMyAdmin sur votre propre serveur ou hébergement web. Durant cette installation, veillez à bien paramétrer les informations de votre serveur CloudDB et de la base de données souhaitée afin que phpMyAdmin puisse s'y connecter.

### Exporter et importer une base de données MySQL ou MariaDB

- **Exporter ma base en ligne de commande**

```bash
mysqldump --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base > nom_de_la_base.sql
```

- **Importer ma base en ligne de commande**

```bash
cat nom_de_la_base.sql | mysql --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base
```

> [!primary]
>
> Dans certains cas, il se peut que la RAM disponible dans votre instance CloudDB ne permette pas de réaliser l'export ou l'import souhaité. Si tel est le cas, nous vous recommandons d'utiliser l'outil fourni par OVHcloud dans votre espace client. Reportez-vous à la documentation « [Premiers pas avec le service CloudDB ](https://docs.ovh.com/fr/clouddb/debuter-avec-clouddb/#importation-dune-base-de-donnees) » si nécessaire.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
