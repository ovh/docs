---
title: 'Démarrez avec MySQL et MariaDB'
excerpt: 'Utilisez vos bases de données'
updated: 2023-07-26
---

## Objectif

Vous désirez utiliser MySQL ou MariaDB pour vos bases de données ?

### Qu'est-ce qu'une base de données MySQL ?

MySQL est un système de gestion de bases de données relationnelles développé pour des performances élevées en lecture, contrairement à d'autres systèmes.

Ce moteur est open source et sa maison mère n'est autre qu'Oracle.

### Qu'est-ce qu'une base de données MariaDB ?

MariaDB est un dérivé (fork) du système de gestion de bases de données MySQL.

Ce moteur est 100% compatible, et se veut plus "libre" que sa grande sœur MySQL. Tous les bugs et roadmaps sont librement accessibles, contrairement à la version d'Oracle.

**Découvrez comment créer et gérer vos bases de données MySQL ou MariaDB**

## Prérequis

- Disposer d'une [instance Web Cloud Databases](https//www.ovhcloud.com/fr-ca/web-cloud/databases/) (incluse dans une offre d'[hébergement web performance](/links/web/hosting))
- Être connecté à votre [espace client OVHcloud](/links/manager)
- Avoir consulté le [guide de démarrage de Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

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

- Disposer de l'adresse de votre instance Web Cloud Databases
- Disposer du port de votre instance Web Cloud Databases
- Disposer du nom d'utilisateur de votre instance Web Cloud Databases
- Disposer du mot de passe associé à l'utilisateur
- Disposer du nom de votre base de données

Toutes ces informations sont disponibles dans votre [espace client OVHcloud](/links/manager){.external}.

Un guide est également disponible : [Premiers pas avec le service Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

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

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Remplissez les champs ci-dessous puis validez avec le bouton `OK`{.action} :
    - **Name** : Choisissez un nom
    - **Driver** : Choisissez `MySQL Driver`
    - **URL** : Indiquez l'adresse du serveur et le port sous la forme `jdbc:mysql://server:port`
    - **User Name** : Indiquez le nom d'utilisateur
    - **Password** : Indiquez le mot de passe

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Validez à nouveau avec le bouton `Connect`{.action}.

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Vous êtes maintenant bien connecté à votre base de données :

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

#### Connexion par phpMyAdmin

Vous pouvez utiliser phpMyAdmin pour explorer le contenu de votre base de données. Pour cela, installez phpMyAdmin sur votre propre serveur ou hébergement web. Durant cette installation, veillez à bien paramétrer les informations de votre serveur Web Cloud Databases et de la base de données souhaitée afin que phpMyAdmin puisse s'y connecter.

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
> Dans certains cas, il se peut que la RAM disponible dans votre instance Web Cloud Databases ne permette pas de réaliser l'export ou l'import souhaité. Si tel est le cas, nous vous recommandons d'utiliser l'outil fourni par OVHcloud dans votre espace client. Reportez-vous à la documentation « [Premiers pas avec le service Web Cloud Databases ](/pages/web_cloud/web_cloud_databases/starting_with_clouddb#importation-dune-base-de-donnees) » si nécessaire.
>

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).