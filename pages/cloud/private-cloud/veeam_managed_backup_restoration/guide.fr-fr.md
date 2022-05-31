---
title: Restaurer des sauvegardes via les API OVHcloud
slug: veeam-backup-restoration
excerpt: Découvrez comment restaurer des sauvegardes Veeam Managed Backup via les API OVHcloud
section: Services et options OVHcloud
order: 06
---

**Dernière mise à jour le 29/03/2021**

## Objectif

**Ce guide vous explique comment identifier et restaurer des sauvegardes via les API OVHcloud**

## Prérequis

- Être connecté aux [API OVHcloud](https://api.ovh.com/)
- [Veeam Managed Backup activé](../veeam-backup-as-a-service) sur votre offre Hosted Private Cloud

## En pratique

Si vous n'êtes pas habitué au fonctionnement des API OVHcloud, consultez notre guide [Premiers pas avec les API OVHcloud](../../api/first-steps-with-ovh-api/).

### Étape 1 : générer un rapport de sauvegardes

Il vous faut dans un premier temps cibler les sauvegardes à restaurer.

Connectez-vous sur [https://api.ovh.com/](https://api.ovh.com/) et utilisez l'appel suivant :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/generateReport

Renseignez les variables :

- serviceName : la référence de votre PCC sous la forme `pcc-XX-XX-XX-XX`
- datacenterId : l'ID du datacentre sur lequel est activée votre solution Veeam Managed Backup

Cet appel va générer un rapport de sauvegardes. Il sera envoyé par e-mail à l'adresse référencée sur le compte administrateur du service Hosted Private Cloud.
<br>L'e-mail liste les éléments suivants :

- Nom de la VM
- Sauvegarde effectuée (BackupJobName)
- Taille de chaque sauvegarde
- **Dossier de stockage (BackupRepository)**
- Dernier point de restauration

![email](images/backup-report-email2.png){.thumbnail}

Prenez note du dossier de stockage (BackupRepository), celui-ci vous permettra de restaurer les sauvegardes à l'étape suivante.

### Étape 2 : restaurer les sauvegardes

> [!warning]
>
> Avant de lancer la restauration sur votre datastore, assurez-vous que celui-ci dispose d'une capacité de stockage suffisante pour accueillir l'ensemble des données à restaurer.
>
> Si ce n'est pas le cas, vous en serez averti par e-mail et l'opération sera annulée.

L'appel API va restaurer les derniers points de restauration valides de chaque sauvegarde présente sur le dossier de stockage.

Connectez-vous sur [https://api.ovh.com/](https://api.ovh.com/) et utilisez l'appel suivant :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/batchRestore
>

Renseignez les variables :

- serviceName : la référence de votre PCC sous la forme `pcc-XX-XX-XX-XX`
- datacenterId : l'ID du datacentre sur lequel est activée votre solution Veeam Managed Backup
- backupJobName (facultatif) : le nom d'une sauvegarde (obtenu à l'étape 1) sous la forme `pcc-XXX-XXX-XXX-XXX_vm-XXX` si vous ne souhaitez restaurer qu'une seule VM.
- backupRepositoryName : le nom du backupRepository (obtenu à l'étape 1).

Une fois la restauration terminée, vous retrouverez, dans votre interface vSphere, les VM correspondant aux sauvegardes restaurées.
<br>Afin de les identifier, leurs noms contiennent le suffixe *BatchRestore* ainsi qu'un horodatage de la restauration.
<br>Les VM sont restaurées éteintes. À votre charge de les allumer.

![vSphere](images/vcenter2.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
