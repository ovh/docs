---
title: 'Sauvegarder et exporter une base de données sur votre serveur de bases de données'
excerpt: 'Découvrez comment sauvegarder et exporter votre base de données'
updated: 2023-10-26
---

## Objectif

Votre base de données peut contenir un grand nombre d'informations essentielles pour votre site. Il est donc primordial de pouvoir la sauvegarder, ou encore de l'exporter.

**Découvrez comment sauvegarder et exporter votre base de données depuis votre serveur de bases de données.**

## Prérequis

- Disposer d'une [instance Web Cloud Databases](/links/web/databases){.external} (incluse dans une offre d'[hébergement web Performance](/links/web/hosting)).
- Être connecté à votre [espace client OVHcloud](/links/manager){.external}.

## En pratique

> [!primary]
>
> Il est à noter que les offres [Web Cloud Databases](https://www.ovh.com/fr/cloud-databases){.external} ne donnent pas accès au système de gestion de base de données, mais aux bases de données hébergées sur celui-ci. 
> <br> - Il n'y a pas d'accès super utilisateur « root ». 
> <br> - Les commandes SQL génériques fonctionnent normalement, et les logiciels de type HeidiSQL, SQuirreL SQL  ou Adminer sont pleinement compatibles.
> 

### Sauvegarder et exporter une base de données depuis l'espace client

Rendez-vous dans votre [espace client OVHcloud](/links/manager){.external}. Cliquez sur  l'onglet `Web Cloud`, puis sur `Web Cloud Databases`{.action}. Sélectionnez le nom de votre serveur de bases de données. Dirigez-vous dans l'onglet `Bases de données`.

Au niveau de la colonne **« Sauvegardes »**, le chiffre correspond au nombre de sauvegardes disponibles pour votre base de données.

> [!primary]
>
> - Des sauvegardes sont effectuées automatiquement une fois par jour
> sur toutes vos bases de données.
> - Les sauvegardes automatiques et manuelles sont conservées pendant 30 jours.
> Passé ce délai, elles seront automatiquement supprimées.

#### 1\. Réaliser une sauvegarde manuelle 

Cliquez sur le bouton `...`{.action} à droite de la base de données, puis sur `Sauvegarder maintenant`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/back-up-now.png){.thumbnail}

#### 2\. Exporter une sauvegarde

Cliquez sur le bouton `...`{.action} à droite de la base de données, puis sur `Afficher les sauvegardes`{.action}

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/show-backups.png){.thumbnail}

La liste des sauvegardes disponibles apparaît,  cliquez sur le bouton `...`{.action} à droite de la sauvegarde choisie, puis sur `Télécharger la sauvegarde`{.action} pour récupérer cette sauvegarde.

### Sauvegarder et exporter une base de données hors espace client

#### 1\. Export de base de données MySQL ou MariaDB

 Dans certains cas, il se peut que la RAM disponible sur votre serveur de bases de données ne permette pas de réaliser l'export souhaité. Si tel est le cas, nous vous recommandons d'utiliser l'outil OVHcloud dans l'espace client. En effet, celui-ci permettra l'utilisation de ressources externes à votre offre pour réaliser cette opération. Reportez-vous à la section [« Sauvegarder et exporter une base de données depuis l'espace client »](./#sauvegarder-et-exporter-une-base-de-donnees-depuis-lespace-client){.external} de cette documentation.

##### 1\.1 Exporter ma base MySQL ou MariaDB depuis phpMyAdmin OVHcloud 

Pour exporter votre base de données directement depuis phpMyAdmin, il est nécessaire de vous y connecter au préalable. Vous pouvez pour cela vous aider du guide [« Se connecter a une base de données  »](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server){.external}

Une fois connecté sur phpMyAdmin, cliquez sur le nom de la base de données que vous souhaitez exporter et ensuite sur l'onglet `Exporter`{.action} en haut.

Vous avez deux modes d'exportation possibles. Si vous n'avez pas de besoin spécifique, nous vous conseillons d'utiliser le mode **rapide** au format **SQL**.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-export-backup-web-cloud-db.png){.thumbnail}

##### 1\.2 Exporter ma base MySQL ou MariaDB en ligne de commande

```bash
mysqldump --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base > nom_de_la_base.sql
```

##### 1\.3 Exporter ma base MySQL ou MariaDB depuis un script PHP

```php
1. <?php echo "Votre base est en cours de sauvegarde.......";
2. system("mysqldump --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base > nom_de_la_base.sql");
3. echo "C'est fini. Vous pouvez récupérer la base par FTP";
4. ?>
```

> [!warning]
>
> - Afin d'éviter qu'un tiers n'accède à ce fichier comportant des données sensibles, pensez à sécuriser l'accès à celui-ci en vous aidant du guide : [Comment protéger l’accès a un répertoire par une authentification ?](/pages/web_cloud/web_hosting/ssh_on_webhosting){.external}
> - Cette action est possible uniquement depuis un hébergement OVHcloud mutualisé.
>

#### 2\. Export et import de bases de données PostgreSQL hors espace client

 Dans certains cas, il se peut que la RAM disponible sur votre serveur de bases de données ne permette pas de réaliser l'export souhaité. Si tel est le cas, nous vous recommandons d'utiliser l'outil OVHcloud dans l'espace client. En effet, celui-ci permettra l'utilisation de ressources externes à votre offre pour réaliser cette opération. Reportez-vous à la section [« Sauvegarder et exporter une base de données depuis l'espace client »](./#sauvegarder-et-exporter-une-base-de-donnees-depuis-lespace-client){.external} de cette documentation.
 
##### 2\.1 Exporter ma base PostgreSQL en ligne de commande

```bash
pg_dump --host=serveur --port=port --user=utilisateur --password=password nom_de_la_base > nom_de_la_base.sql
```

##### 2\.2 Exporter ma base PostgreSQL depuis un script PHP

```php
1. <?php echo "Votre base est en cours de sauvegarde.......";
2. system("PGPASSWORD=mot_de_passe pg_dump --host=serveur --port=port --user=utilisateur --password=password nom_de_la_base > nom_de_la_base.sql");
3. echo "C'est fini. Vous pouvez récupérer la base par FTP";
4. ?>
```

> [!warning]
>
> - Afin d'éviter qu'un tiers n'accède à ce fichier comportant des données sensibles, pensez à sécuriser l'accès à celui-ci en vous aidant du guide : [Comment protéger l’accès a un répertoire par une authentification ?](/pages/web_cloud/web_hosting/ssh_on_webhosting){.external}
> - Cette action est possible uniquement depuis un hébergement OVHcloud mutualisé.
>

## Aller plus loin

[Sauvegarder et exporter une base de données depuis l'espace client](./#sauvegarder-et-exporter-une-base-de-donnees-depuis-lespace-client){.external}

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).