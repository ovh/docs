---
title: 'Restaurer et importer une base de données sur votre serveur de bases de données'
excerpt: "Découvrez comment restaurer et importer une base de données sur votre serveur Web Cloud Databases depuis l'espace client OVHcloud ou via phpMyAdmin"
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

En cas d'erreur sur votre base de données, vous devez pouvoir restaurer une sauvegarde ou importer une base locale.

**Découvrez comment restaurer et importer votre base de données sur votre serveur de bases de données.**

## Prérequis

- Disposer d'une [instance Web Cloud Databases](/links/web/databases) (incluse dans une offre d'[hébergement web Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Sélectionnez votre service de base de données

---
<!-- CP-NAV-END:web-cloud-databases -->

## En pratique

> [!primary]
>
> Les offres [Web Cloud Databases](/links/web/databases) ne donnent pas accès au système de gestion de base de données, mais aux bases de données hébergées sur celui-ci.
>
> - Il n'y a pas d'accès super utilisateur « root ».
> - Les commandes SQL génériques fonctionnent normalement, et les logiciels de type HeidiSQL, SQuirreL SQL ou Adminer sont pleinement compatibles.

### Restaurer et importer une base de données depuis l'espace client

#### Restaurer une sauvegarde existante


Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `Bases de données`{.action}.
>>
>> Au niveau de la colonne **« Sauvegardes »**, le chiffre correspond au nombre de sauvegardes disponibles pour votre base de données.
>>
> **Étape 3**
>>
>> Cliquez sur le bouton `...`{.action} à droite de la base de données, puis sur `Afficher les sauvegardes`{.action}.
>>
> **Étape 4**
>>
>> La liste des sauvegardes disponibles apparaît. Cliquez sur le bouton `...`{.action} à droite de la sauvegarde choisie, puis sur `Restaurer la sauvegarde`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/restore-the-backup.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > La restauration implique l'écrasement du contenu de la base de données et donc une potentielle perte de données. Si vous n'êtes pas sûr de ce que vous faites, nous vous invitons à effectuer une sauvegarde auparavant.


#### Importer une sauvegarde locale


Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Web Cloud Databases](/links/control-panel/web-cloud-databases), puis choisissez la solution concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur l'onglet `Bases de données`{.action}.
>>
> **Étape 3**
>>
>> Cliquez sur le bouton `...`{.action} à droite de la base de données, puis sur `Importer un fichier`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/import-file.png){.thumbnail}
>>
> **Étape 4**
>>
>> ***Vous avez deux possibilités :***
>>
>> **1 - Importer un nouveau fichier**
>>
>> Cliquez ensuite sur **« Importer un nouveau fichier »**, puis sur `Suivant`{.action}.
>>
>> Indiquez un nom pour votre fichier importé, cliquez sur `Parcourir`{.action} pour le sélectionner, puis `Envoyer`{.action}, et enfin sur `Suivant`{.action}.
>>
>> > [!warning]
>> >
>> > Le fichier doit être au format « .sql », « .txt » ou « .gz ».
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-2.png){.thumbnail}
>>
>> Cochez, si vous le désirez, **« Vider la base de données actuelle »** avant l'import, et **« Envoyer un e-mail à la fin de l'import »** pour être informé de la fin de l'opération sur l'adresse e-mail de référence de votre compte OVHcloud, puis cliquez sur `Valider`{.action}.
>>
>> **2 - Utiliser un fichier existant**
>>
>> Si vous aviez déjà importé un fichier auparavant, il est possible de choisir l'option **« Importer un fichier existant »**.
>>
>> Choisissez ensuite le fichier dans le menu déroulant, puis cliquez sur `Suivant`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-existing-file-step-2.png){.thumbnail}
>>
>> Cochez, si vous le désirez, **« Vider la base de données actuelle »** avant l'import, et **« Envoyer un e-mail à la fin de l'import »** pour être informé de la fin de l'opération sur l'adresse e-mail de référence de votre compte OVHcloud, puis cliquez sur `Valider`{.action}.


### Importer une base de données hors espace client

Dans certains cas, la RAM disponible dans votre serveur de bases de données ne permet pas de réaliser l’import souhaité en dehors de l’espace client. Si tel est le cas, nous vous recommandons d’utiliser l’outil OVHcloud dans l’espace client. Reportez-vous à la section « [Restaurer et importer une base de données depuis l’espace client](./#restaurer-et-importer-une-base-de-donnees-depuis-lespace-client) » de cette documentation.

**Cliquez sur la méthode d'importation de votre choix pour afficher le contenu.**

/// details | Importer une base MySQL ou MariaDB depuis phpMyAdmin

Pour importer votre base de données directement depuis phpMyAdmin, connectez-vous au préalable en vous aidant du paragraphe « [Se connecter à une base de données MySQL ou MariaDB](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#se-connecter-a-une-base-de-donnees-mysql-ou-mariadb) ».

Une fois connecté sur phpMyAdmin, sélectionnez votre base de données en cliquant sur son nom.

Cliquez ensuite sur l’onglet `Importer`{.action}.

Sélectionnez votre fichier de sauvegarde en cliquant sur `Parcourir`{.action} (attention, le fichier ne peut pas dépasser 100 Mo).

> [!primary]
>
> Nous vous conseillons de fractionner votre base de données en plusieurs fichiers lorsqu’elle excède les 100 Mo et d’effectuer plusieurs importations depuis phpMyAdmin.
> L’importation de fichier dépassant les 100 Mo peut se faire depuis l’espace client en suivant l’étape « [Restaurer et importer une base de données depuis l’espace client](./#restaurer-et-importer-une-base-de-donnees-depuis-lespace-client) ».

Laissez les options par défaut et cliquez sur `Exécuter`{.action} pour lancer l’importation.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-upload-backup-web-cloud-db.png){.thumbnail}

///

/// details | Importer une base MySQL ou MariaDB en ligne de commande

Cette action est uniquement possible en [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) depuis un hébergement mutualisé OVHcloud.

```bash
cat nom_de_la_base.sql | mysql --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base
```

///

/// details | Importer une base MySQL ou MariaDB depuis un fichier PHP

```php
1. <?php
2. echo "Votre base est en cours de restauration.......<br>";
3. system("cat nom_de_la_base.sql | mysql --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base");
4. echo "C'est fini. Votre base est en place sur cet hébergement.";
5. ?>
```

> [!warning]
>
> - Afin d’éviter que quelqu’un accède à ce fichier comportant des données sensibles, pensez à sécuriser l’accès à celui-ci en vous aidant du guide : [Comment protéger l’accès à un répertoire par une authentification ?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Cette action est possible uniquement depuis un hébergement OVHcloud mutualisé.

///

/// details | Importer une base PostgreSQL en ligne de commande

Cette action est uniquement possible en [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) depuis un hébergement mutualisé OVHcloud en version stable ou supérieure.

```bash
psql --host=serveur --port=port --user=utilisateur --password=password nom_de_la_base < nom_de_la_base.sql
```

///

/// details | Importer une base PostgreSQL depuis un fichier PHP

```php
1. <?php
2. echo "Votre base est en cours de restauration.......<br>";
3. system("PGPASSWORD=mot_de_passe psql --host=serveur --port=port --user=utilisateur --password=password nom_de_la_base < nom_de_la_base.sql");
4. echo "C'est fini. Votre base est en place sur cet hébergement.";
5. ?>
```

> [!warning]
>
> - Afin d’éviter que quelqu’un accède à ce fichier comportant des données sensibles, pensez à sécuriser l’accès à celui-ci en vous aidant du guide [Comment protéger l’accès à un répertoire par une authentification ?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Cette action est possible uniquement depuis un hébergement OVHcloud mutualisé.

///

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
