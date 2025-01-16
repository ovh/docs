---
title: "Veeam Cloud Connect - Comment migrer les données de Veeam Cloud Connect vers Object Storage"
excerpt: "Découvrez deux solutions pour migrer vos données Veeam Cloud Connect vers Object Storage avec Veeam Backup & Replication Enterprise Edition"
flag: hidden
updated: 2024-12-11
---

## Objectif

**Ce guide vous détaille comment migrer vos données depuis Veeam Cloud Connect vers Object Storage.** 

Vous y trouverez deux approches : l'une sans nouveau serveur Veeam Enterprise et l'autre avec un nouveau serveur.

## Prérequis

- Accès à l'interface de gestion de Veeam Cloud Connect.
- Une installation de Veeam Backup & Replication Enterprise Edition compatible avec votre infrastructure actuelle.
- Les droits administratifs nécessaires pour configurer les repositories de sauvegarde et gérer les jobs.

## En pratique

### Option 1 - Migration sans nouveau serveur Veeam Enterprise

> [!primary]
>
>  Cette procédure peut varier selon votre configuration. Référez-vous aux guides officiels de Veeam pour des instructions détaillées.

1\. **Créer un espace de stockage Object Storage (bucket).**

Suivez les étapes de ce guide : [Object Storage - Création d'un bucket](/pages/storage_and_backup/object_storage/s3_create_bucket).

2\. **Configurer un nouveau repository de sauvegarde.**

Consultez notre guide : [Object Storage - Utiliser Object Storage avec Veeam](/pages/storage_and_backup/object_storage/s3_veeam).

3\. **Exporter les données de backup depuis Veeam Cloud Connect.**

Utilisez l'option `Export Entire Backup Chain`{.action} dans la console Cloud Connect.

Pour plus de détails, consultez la documentation officielle : [Déplacer les sauvegardes](https://helpcenter.veeam.com/docs/backup/vsphere/move_backup.html?ver=120#repo).

4\. **Importer les fichiers de sauvegarde dans le nouveau repository.**

Utilisez l'option `Add Existing Backup`{.action} dans la console Veeam Backup & Replication Enterprise Edition.

5\. **Configurer ou modifier un job de sauvegarde.**

Incluez les données migrées dans un job existant ou créez un nouveau job.

### Option 2 - Migration avec un nouveau serveur Veeam Enterprise

> [!primary]
>
>  Cette procédure peut varier selon votre configuration. Référez-vous aux guides officiels de Veeam pour des instructions détaillées.

1\. **Créer un espace de stockage Object Storage (bucket).**

Suivez les étapes de ce guide : [Object Storage - Création d'un bucket](/pages/storage_and_backup/object_storage/s3_create_bucket).

2\. **Installer et configurer Veeam Backup & Replication sur le nouveau serveur.**

Vérifiez que la version est compatible avec votre installation actuelle de Veeam Cloud Connect.

3\. **Configurer un nouveau repository de sauvegarde sur le serveur.**

Consultez notre guide : [Object Storage - Utiliser Object Storage avec Veeam](/pages/storage_and_backup/object_storage/s3_veeam).

4\. **Exporter les données de backup depuis Veeam Cloud Connect.**

Utilisez l'option `Export Entire Backup Chain`{.action} dans la console Cloud Connect.

Pour plus de détails, consultez la documentation officielle : [Déplacer les sauvegardes](https://helpcenter.veeam.com/docs/backup/vsphere/move_backup.html?ver=120#repo).

5\. **Importer les fichiers de sauvegarde dans le nouveau repository.**

Utilisez l'option `Add Existing Backup`{.action} dans la console Veeam Backup & Replication Enterprise Edition.

6\. **Configurer ou modifier un job de sauvegarde.**

Incluez les données migrées dans un job existant ou créez un nouveau job.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
