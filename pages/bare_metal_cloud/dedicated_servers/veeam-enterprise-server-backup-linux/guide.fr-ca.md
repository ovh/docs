---
title: Sauvegarder un serveur Bare Metal Linux avec Veeam Enterprise
excerpt: Découvrez comment faire un backup de votre serveur Bare Metal Linux avec Veeam Backup and Replication (Enterprise)
updated: 2024-04-05
---

## Objectif

Qu'il s'agisse d'une panne matérielle ou de la suppression accidentelle d'un fichier important, effectuer des sauvegardes fréquentes est extrêmement important et peut vous faire économiser de nombreuses heures de travail inutiles.

**Découvrez comment réaliser une sauvegarde de votre serveur Bare Metal Linux avec Veeam Backup and Replication (Enterprise).**

> [!primary]
> Pour sauvegarder un serveur Bare Metal Windows avec Veeam Agent pour Microsoft Windows, consultez [ce guide](/pages/bare_metal_cloud/dedicated_servers/veeam-enterprise-server-backup-windows-agent).

## Prérequis

- Un [serveur Bare Metal Linux OVHcloud](/links/bare-metal/bare-metal)
- [Veeam Backup & Replication installé et enregistré](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication)

> [!warning]
> Pour suivre les étapes de ce guide, vous devez avoir préalablement suivi les étapes détaillées de notre premier guide « [Préparer une sauvegarde de serveur Bare Metal avec Veeam Enterprise](/pages/bare_metal_cloud/dedicated_servers/veeam-enterprise-server-backup-preparation) ».

## En pratique

Dans l'onglet `Home`{.action} de Veeam, cliquez sur le bouton `Backup Job`{.action} et sélectionnez l'option `Linux computer...`.

![Home - backup job](images/backup01.png){.thumbnail}

Dans la section **Job Mode**, sélectionnez le **Type** de serveur et le **Mode** pour la sauvegarde.

Cliquez ensuite sur le bouton `Next`{.action}.

![Job mode - type and mode](images/backup02.png){.thumbnail}

Dans la section **Name**, attribuez un **Nom** et une **Description** à votre tâche de sauvegarde.

Cliquez ensuite sur le bouton `Next`{.action}.

![Name - name and description](images/backup03.png){.thumbnail}

Dans la section **Computers**, cliquez sur le bouton `Add...`{.action}.

![Ordinateurs - ajouter](images/backup04.png){.thumbnail}

Dans la fenêtre **Add Computer**, entrez le **nom d'hôte ou l'adresse IP** du serveur.

Cliquez ensuite sur le bouton `Add...`{.action}, sélectionnez `Stored`{.action} puis `Linux account...`{.action}.

![Ajouter un ordinateur - nom d'hôte ou adresse IP](images/backup05.png){.thumbnail}

Entrez le **Nom d'utilisateur** et le **Mot de passe**, cochez la case **Elevate account privileges automatically** puis cliquez sur `OK`{.action}.

![Ajouter un ordinateur - nom d'utilisateur et mot de passe](images/backup06.png){.thumbnail}

Dans la section **Backup Mode**, sélectionnez le mode de sauvegarde de cette tâche de sauvegarde.

Cliquez ensuite sur le bouton `Next`{.action}.

![Mode de sauvegarde - mode de sélection](images/backup07.png){.thumbnail}

Dans la section **Storage**, choisissez le **Backup repository** (répertoire de sauegarde) et les paramètres.

Cliquez ensuite sur le bouton `Next`{.action}.

![Stockage - Backup repository](images/backup08.png){.thumbnail}

Cliquez de nouveau sur le bouton `Next`{.action} pour ignorer la section **Guest Processing**,$ car aucune configuration n'y est nécessaire.

Dans la section **Schedule**, vous pouvez cocher la case `Run the job automatically`{.action} si vous souhaitez que la tâche de sauvegarde se produise de manière récurrente.

Pour ce guide, nous allons exécuter la sauvegarde manuellement. Nous allons donc cliquer sur le bouton `Apply`{.action} pour continuer.

![Schedule](images/backup09.png){.thumbnail}

Vérifiez que toutes les informations sont correctes dans la section **Summary**.

Si vous souhaitez lancer la tâche de sauvegarde dès la fin de la configuration, cochez la case `Run the job when I click Finish`{.action}.

![Summary](images/backup10.png){.thumbnail}

Cliquez sur le bouton `Finish`{.action} pour terminer la configuration de la tâche de sauvegarde. Une nouvelle fenêtre s'ouvre, vous permettant de visualiser le détail de la sauvegarde en cours.

![détails de la sauvegarde](images/backup11.png){.thumbnail}

Une fois la tâche terminée, votre sauvegarde sera alors scréée.

Pour plus d'informations sur la restauration d'un serveur Bare Metal, consultez notre guide « [Restaurer un serveur Bare Metal avec Veeam Backup & Replication](/pages/bare_metal_cloud/dedicated_servers/veeam-enterprise-server-restore) ».

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
