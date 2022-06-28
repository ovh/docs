---
title: 'Restaurer et importer une base de données sur votre serveur de bases de données'
slug: restaurer-importer-base-de-donnees
excerpt: 'Découvrez comment restaurer et importer votre base de données'
section: 'Configuration'
order: 5
---

**Dernière mise à jour le 24/06/2022**

## Objectif

À la suite d'une erreur sur votre base de donnée, vous devez être en mesure de restaurer une sauvegarde ou encore de pouvoir importer une base de données locale. 

**Découvrez comment restaurer et importer votre base de données sur votre serveur de bases de données.**

## Prérequis

- Disposer d'une [instance CloudDB](https://www.ovh.com/fr/cloud/cloud-databases/){.external} (incluse dans une offre d'[hébergement web performance](https://www.ovhcloud.com/fr/web-hosting/)).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

## En pratique

> [!primary]
>
> Il est à noter que les offres [CloudDB](https://www.ovh.com/fr/cloud-databases){.external} ne donnent pas accès au système de gestion de base de données, mais aux bases de données hébergées sur celui-ci.
> <br> - Il n'y a pas d'accès super utilisateur « root ».
> <br> - Les commandes SQL génériques fonctionnent normalement, et les logiciels de type HeidiSQL, SQuirreL SQL ou Adminer sont pleinement compatibles.
> 

### Restaurer et importer une base de données depuis l'espace client

Rendez-vous dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Cliquez sur l'onglet `Web Cloud`, puis sur `Base de données`{.action}. Sélectionnez le nom de votre serveur de bases de données. Dirigez-vous-vous dans l'onglet `Bases de données`.

Au niveau de la colonne **« Sauvegardes »**, le chiffre correspond au nombre de sauvegardes disponibles pour votre base de données.

#### 1\. Restaurer une sauvegarde existante

Cliquez sur le bouton `...`{.action} à droite de la base de données, puis sur `Afficher les sauvegardes`{.action}.

La liste des sauvegardes disponibles apparaît, cliquez sur le bouton `...`{.action} à droite de la sauvegarde choisie, puis sur `Restaurer la sauvegarde`{.action}.

![clouddb](images/private-sql-restore01.png){.thumbnail}

> [!warning]
>
> La restauration implique l'écrasement du contenu de la base de données et donc une potentielle perte de données. Si vous n'êtes pas sûr de ce que vous faites, nous vous invitons à effectuer une sauvegarde auparavant.
> 

#### 2\. Importer une sauvegarde locale

Cliquez sur le bouton `...`{.action} à droite de la base de données, puis sur `Importer un fichier`{.action}.

![clouddb](images/private-sql-import01.png){.thumbnail}

***Vous avez deux possibilités :***

##### 2\.1 Importer un nouveau fichier

Cliquez ensuite sur **« Importer un nouveau fichier »**, puis sur `Suivant`{.action}.

Indiquez un nom pour votre fichier importé, cliquez sur `Parcourir`{.action} pour le sélectionner, puis `Envoyer`{.action}, et enfin sur `Suivant`{.action}.

> [!warning]
>
> Le fichier doit être au format « .sql », « .txt » ou « .gz ».
> 

![clouddb](images/private-sql-import02.png){.thumbnail}

Cochez, si vous le désirez, **« Vider la base de données actuelle »** avant l'import, et **« Envoyer un e-mail à la fin de l'import »** pour être informé de la fin de l'opération sur l'adresse e-mail de référence de votre compte OVHcloud, puis cliquez sur `Valider`{.action}.

##### 2\.2 Utiliser un fichier existant

Si vous aviez déjà importé un fichier auparavant, il est possible de choisir l'option **« Importer un fichier existant »**.

Choisissez ensuite le fichier dans le menu déroulant, puis cliquez sur `Suivant`{.action}.

![clouddb](images/private-sql-import03.png){.thumbnail}

Cochez, si vous le désirez, **« Vider la base de données actuelle »** avant l'import, et **« Envoyer un e-mail à la fin de l'import »** pour être informé de la fin de l'opération sur l'adresse e-mail de référence de votre compte OVHcloud, puis cliquez sur `Valider`{.action}.

### Import de base de données MySQL ou MariaDB hors espace client

Dans certains cas, la RAM disponible dans votre serveur de bases de données ne permet pas de réaliser l'import souhaité en dehors de l'espace client. Si tel est le cas, nous vous recommandons d'utiliser l'outil OVHcloud dans l'espace client. Reportez-vous à la section [« Restaurer et importer une base de données depuis l'espace client »](./#sauvegarde-restauration-et-importation-depuis-lespace-client_1){.external} de cette documentation.


#### Importer ma base MySQL ou MariaDB depuis phpMyAdmin
Pour importer votre base de données directement depuis phpMyAdmin, il est nécessaire de vous y connecter au préalable, vous pouvez pour cela vous aider du paragraphe [« Se connecter a une base de données MySQL ou MariaDB »](https://docs.ovh.com/fr/clouddb/connexion-base-de-donnees-serveur-bdd/#se-connecter-a-une-base-de-donnees-mysql-ou-mariadb){.external}

Une fois connecté sur phpMyAdmin, sélectionnez votre base de données en cliquant sur son nom.

Cliquez ensuite sur l'onglet `Importer`{.action}.

Sélectionnez votre fichier de sauvegarde en cliquant `Parcourir`{.action} (attention, le fichier ne peut pas dépasser 100 Mo).

> [!primary]
>
> Nous vous conseillons de fractionner votre base de données en plusieurs fichiers lorsqu'elle excède les 100 Mo et effectuer plusieurs importations depuis phpMyAdmin.<br>
> L'importation de fichier dépassant les 100 Mo peut se faire depuis l'espace client en suivant l'étape [« Sauvegarder, restaurer et importer une base de données depuis l'espace client »](./#sauvegarder-restaurer-et-importer-une-base-de-donnees-depuis-lespace-client) 


Laissez les options par défaut et cliquez sur `Exécuter`{.action} pour lancer l'importation.

![clouddb](images/private-sql-import04.png){.thumbnail}

#### Importer ma base MySQL ou MariaDB en ligne de commande

Cette action est uniquement possible en [SSH](https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/){.external} depuis un hébergement mutualisé OVHcloud.

```bash
cat nom_de_la_base.sql | mysql --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base
```
#### Importer ma base MySQL ou MariaDB depuis un fichier PHP

```php
1. <?php
2. echo "Votre base est en cours de restauration.......<br>";
3. system("cat nom_de_la_base.sql | mysql --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base");
4. echo "C'est fini. Votre base est en place sur cet hébergement.";
5. ?>
```

> [!warning]
>
> - Afin d'éviter que quelqu'un accède à ce fichier comportant des données sensibles, pensez à sécuriser l'accès à celui-ci en vous aidant du guide : [Comment protéger l’accès a un répertoire par une authentification ?]( ../../hosting/mutualise-htaccess-comment-proteger-lacces-a-un-repertoire-par-une-authentification/){.external}
> - Cette action est possible uniquement depuis un hébergement OVHcloud mutualisé.
>

### Importer une base de données PostgreSQL hors espace client

Dans certains cas, il se peut que la RAM disponible dans votre serveur de bases de données ne permette pas de réaliser l'import souhaité. Si tel est le cas, nous vous recommandons d'utiliser l'outil OVHcloud dans l'espace client. Reportez-vous à la section [« Restaurer et importer une base de données depuis l'espace client »](./#sauvegarde-restauration-et-importation-depuis-lespace-client_1){.external} de cette documentation.

#### Importer ma base PostgreSQL en ligne de commande

Cette action est uniquement possible en [SSH](https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/){.external} depuis un hébergement mutualisé OVHcloud en version stable ou supérieure.

```bash
psql --host=serveur --port=port --user=utilisateur --password=password nom_de_la_base < nom_de_la_base.sql
```

#### Importer ma base PostgreSQL depuis un fichier PHP

```php
1. <?php
2. echo "Votre base est en cours de restauration.......<br>";
3. system("PGPASSWORD=mot_de_passe psql --host=serveur --port=port --user=utilisateur --password=password nom_de_la_base < nom_de_la_base.sql");
4. echo "C'est fini. Votre base est en place sur cet hébergement.";
5. ?>
```

> [!warning]
>
> - Afin d'éviter que quelqu'un accède à ce fichier comportant des données sensibles, pensez à sécuriser l'accès à celui-ci en vous aidant du guide [Comment protéger l’accès a un répertoire par une authentification ?](https://docs.ovh.com/fr/hosting/mutualise-le-ssh-sur-les-hebergements-mutualises/){.external}
> - Cette action est possible uniquement depuis un hébergement OVHcloud mutualisé.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

