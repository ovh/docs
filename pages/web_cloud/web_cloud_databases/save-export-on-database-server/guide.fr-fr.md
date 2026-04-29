---
title: 'Sauvegarder et exporter une base de données sur votre serveur de bases de données'
excerpt: "Découvrez comment sauvegarder et exporter une base de données sur votre serveur Web Cloud Databases depuis l'espace client OVHcloud ou via phpMyAdmin"
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

Votre base de données peut contenir un grand nombre d'informations essentielles pour votre site. Il est donc primordial de pouvoir la sauvegarder ou l'exporter.

**Découvrez comment sauvegarder et exporter votre base de données depuis votre serveur de bases de données.**

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
>

### Sauvegarder et exporter une base de données depuis l'espace client

> [!primary]
>
> - Des sauvegardes sont effectuées automatiquement une fois par jour
> sur toutes vos bases de données.
> - Les sauvegardes automatiques et manuelles sont conservées pendant 30 jours.
> Passé ce délai, elles seront automatiquement supprimées.

#### Réaliser une sauvegarde manuelle

<!-- CP-STEPS-START:save-manual -->

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

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
>> Au niveau de la colonne **Sauvegardes**, le chiffre correspond au nombre de sauvegardes disponibles pour votre base de données.
>>
> **Étape 3**
>>
>> Cliquez sur le bouton `...`{.action} à droite de la base de données, puis sur `Sauvegarder maintenant`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/back-up-now.png){.thumbnail}

<!-- CP-STEPS-END:save-manual -->

#### Exporter une sauvegarde

<!-- CP-STEPS-START:export-backup -->

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
>> Au niveau de la colonne **Sauvegardes**, le chiffre correspond au nombre de sauvegardes disponibles pour votre base de données.
>>
> **Étape 3**
>>
>> Cliquez sur le bouton `...`{.action} à droite de la base de données, puis sur `Afficher les sauvegardes`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/show-backups.png){.thumbnail}
>>
> **Étape 4**
>>
>> La liste des sauvegardes disponibles apparaît. Cliquez sur le bouton `...`{.action} à droite de la sauvegarde choisie, puis sur `Télécharger la sauvegarde`{.action}.

<!-- CP-STEPS-END:export-backup -->

### Sauvegarder et exporter une base de données hors espace client

Si la RAM disponible sur votre serveur ne permet pas de réaliser l'export souhaité, utilisez l'outil OVHcloud dans l'espace client, qui utilise des ressources externes à votre offre. Reportez-vous à la section « [Sauvegarder et exporter une base de données depuis l'espace client](./#sauvegarder-et-exporter-une-base-de-donnees-depuis-lespace-client) » de cette documentation.

**Cliquez sur la méthode d’exportation de votre choix pour afficher le contenu.**

/// details | Exporter une base MySQL ou MariaDB depuis phpMyAdmin OVHcloud

Pour exporter votre base de données directement depuis phpMyAdmin, connectez-vous au préalable en vous aidant du guide « [Se connecter à une base de données](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) ».

Une fois connecté sur phpMyAdmin, cliquez sur le nom de la base de données que vous souhaitez exporter et ensuite sur l’onglet `Exporter`{.action} en haut.

Vous avez deux modes d’exportation possibles. Si vous n’avez pas de besoin spécifique, nous vous conseillons d’utiliser le mode **rapide** au format **SQL**.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-export-backup-web-cloud-db.png){.thumbnail}

///

/// details | Exporter une base MySQL ou MariaDB en ligne de commande

```bash
mysqldump --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base > nom_de_la_base.sql
```

///

/// details | Exporter une base MySQL ou MariaDB depuis un script PHP

```php
1. <?php echo "Votre base est en cours de sauvegarde.......";
2. system("mysqldump --host=serveur --user=utilisateur --port=port --password=password nom_de_la_base > nom_de_la_base.sql");
3. echo "C'est fini. Vous pouvez récupérer la base par FTP";
4. ?>
```

> [!warning]
>
> - Afin d’éviter qu’un tiers n’accède à ce fichier comportant des données sensibles, pensez à sécuriser l’accès à celui-ci en vous aidant du guide : [Comment protéger l’accès à un répertoire par une authentification ?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Cette action est possible uniquement depuis un hébergement OVHcloud mutualisé.

///

/// details | Exporter une base PostgreSQL en ligne de commande

```bash
pg_dump --host=serveur --port=port --user=utilisateur --password=password nom_de_la_base > nom_de_la_base.sql
```

///

/// details | Exporter une base PostgreSQL depuis un script PHP

```php
1. <?php echo "Votre base est en cours de sauvegarde.......";
2. system("PGPASSWORD=mot_de_passe pg_dump --host=serveur --port=port --user=utilisateur --password=password nom_de_la_base > nom_de_la_base.sql");
3. echo "C'est fini. Vous pouvez récupérer la base par FTP";
4. ?>
```

> [!warning]
>
> - Afin d’éviter qu’un tiers n’accède à ce fichier comportant des données sensibles, pensez à sécuriser l’accès à celui-ci en vous aidant du guide : [Comment protéger l’accès à un répertoire par une authentification ?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Cette action est possible uniquement depuis un hébergement OVHcloud mutualisé.

///

## Aller plus loin

[Sauvegarder et exporter une base de données depuis l'espace client](./#sauvegarder-et-exporter-une-base-de-donnees-depuis-lespace-client)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).