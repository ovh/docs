---
title: Restaurer des sauvegardes via les API OVHcloud
excerpt: Découvrez comment restaurer des sauvegardes Veeam Managed Backup via les API OVHcloud
updated: 2021-03-29
---

## Objectif

**Ce guide vous explique comment identifier et restaurer des sauvegardes via les API OVHcloud**

## Prérequis

- Être connecté aux [API OVHcloud](https://api.ovh.com/)
- [Veeam Managed Backup activé](/pages/bare_metal_cloud/managed_bare_metal/veeam_backup_as_a_service) sur votre offre Managed Bare Metal

## En pratique

Si vous n'êtes pas habitué au fonctionnement des API OVHcloud, consultez notre guide [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps).

### Étape 1 : générer un rapport de sauvegardes

Il vous faut dans un premier temps cibler les sauvegardes à restaurer.

Connectez-vous sur [https://api.ovh.com/](https://api.ovh.com/) et utilisez l'appel suivant :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/generateReport

Renseignez les variables :

- serviceName : la référence de votre PCC sous la forme `pcc-XX-XX-XX-XX`
- datacenterId : l'ID du datacentre sur lequel est activée votre solution Veeam Managed Backup

Cet appel va générer un rapport de sauvegardes. Il sera envoyé par e-mail à l'adresse référencée sur le compte administrateur du service Hosted Private Cloud.
<br>L'e-mail liste les éléments suivants :

- Nom de la VM
- Sauvegardes effectuées (BackupJobName)
- Taille de chaque sauvegarde
- **Dossier de stockage (BackupRepository)**
- Dernier point de restauration

![email](images/backup-report-email.png){.thumbnail}

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
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/batchRestore
>

Renseignez les variables :

- serviceName : la référence de votre PCC sous la forme `pcc-XX-XX-XX-XX`
- datacenterId : l'ID du datacentre sur lequel est activée votre solution Veeam Managed Backup
- backupJobName (facultatif) : le nom d'une sauvegarde (obtenu à l'étape 1) sous la forme `pcc-XXX-XXX-XXX-XXX_vm-XXX` si vous ne souhaitez restaurer qu'une seule VM.
- backupRepositoryName : le nom du backupRepository obtenu à l'étape 1

Une fois la restauration terminée, vous retrouverez, dans votre interface vSphere, les VM correspondant aux sauvegardes restaurées.
<br>Afin de les identifier, leurs noms contiennent le suffixe *BatchRestore* ainsi qu'un horodatage de la restauration.
<br>Les VM sont restaurées éteintes. À votre charge de les allumer.

![vSphere](images/vcenter.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
