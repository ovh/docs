---
title: Copier un datastore entre deux PCC
slug: datastore-copy
excerpt: Découvrez comment accéder à la copie d'un datastore d'un PCC depuis un autre PCC via les API OVHcloud
section: Fonctionnalités OVHcloud
hidden: true
---

**Dernière mise à jour le 02/04/2021**

## Objectif

Suite à l'incident survenu sur le datacentre SBG, vous pouvez migrer les datastores d'un PCC situé à SBG3 vers un PCC de destination.

**Découvrez comment acceder à la copie d'un datastore d'un PCC depuis un autre PCC via les API OVHcloud**

## Prérequis

- Un ou plusieurs datastores à SBG3
- Être connecté aux [API OVHcloud](https://api.ovh.com/)
- Être connecté à votre [interface vSphere](../connexion-interface-vsphere/).

> [!warning]
>
> Si votre PCC source dispose d'une certification [HDS](https://www.ovhcloud.com/fr/enterprise/certification-conformity/hds/) ou [PCI-DSS](https://www.ovhcloud.com/fr/enterprise/certification-conformity/pci-dss/), votre PCC de destination devra disposer de la même certification **active** afin de récupérer le datastore.
>
> Pour plus d'informations, consultez notre guide [Activation de la mise en conformité Healthcare (HDS) ou Payment Services (PCI DSS)](../activer-l-option-hds-ou-pci-dss/).
>

## En pratique

Si vous n'êtes pas habitué au fonctionnement des API OVHcloud, consultez notre guide [Premiers pas avec les API OVHcloud](../../api/api-premiers-pas/).

### Etape 1 : récupérer le filerId du datastore

Vous devez d'abord cibler le filerId à copier.

Connectez-vous sur [https://api.ovh.com/](https://api.ovh.com/).

Si vous avez déjà récupéré vos accès à l'infrastructure de Strasbourg, utilisez l'appel suivant :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/filer

Renseignez la variable :

- serviceName : le nom du PCC d'origine situé à SBG (ex: pcc-192-0-2-15).

Si, au contraire, vous n'avez pas encore récupéré vos accès à l'infrastructure de Strasbourg, utilisez l'appel suivant :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer

Renseignez les variables :

- serviceName : le nom du PCC d'origine situé à SBG (ex: pcc-192-0-2-15).
- datacenterId : l'ID du datacentre source (ex: 1337).

### Etape 2 : lancer la copie du datastore

> [!warning]
>
> Le PCC de destination doit être situé dans l'une des zones suivantes : RBX (Roubaix), LIM (Francfort) ou ERI (Londres).
>

Une fois le filerId identifié, utilisez l'appel suivant pour copier le datastore sur le PCC de destination :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/copyFiler

Renseignez les variables :

- serviceName : le nom du PCC de destination (ex: pcc-192-0-2-50).
- datacenterId: l'ID du datacentre de destination (ex: 1515).
- filerId : le filerId récupéré à l'étape précédente (ex: 001234).

La réplication des données peut durer plusieurs heures. Lorsque celle-ci est terminée, vous recevrez un e-mail confirmant la réussite de la copie.

### Etape 3 : connaître l’état d’avancement de la copie

Pour accéder à l’état d’avancement de la copie des datastores, effectuez l’appel suivant :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/copyFilerStatus

Renseignez les variables :

- serviceName : le nom du PCC de destination (ex: pcc-192-0-2-50).
- datacenterId : l’ID du datacentre de destination (ex : 1515).

Si une copie a été demandée, l’API vous retournera l’ensemble des opérations de copies, en attente, en cours ou terminées (pourcentage de progression, taille des données transférées, état de la tâche, etc.).

### Etape 4 : accéder à la copie depuis vSphere

Dans votre [interface vSphere](../connexion-interface-vsphere/), placez-vous dans la vue `Stockage`{.action}.

![ds_restore](images/ds-restore.png){.thumbnail}

La copie est présentée au travers d'un datastore sur tous les hosts du datacenter de destination, sous le nom `restore-XXXXXX` (XXXXXX désignant le numéro du datastore source).

> [!warning]
>
> Le datastore récupéré est en lecture-seule.
>

Pour les machines virtuelles, il faut [enregistrer celles-ci dans l'inventaire vSphere](../vsphere-register-vm-vmx) puis les [cloner](../cloner-une-vm) vers un des datastores **avant** de pouvoir les démarrer.

> [!warning]
>
> N'allumez vos VM qu'après les avoir clonées. Dans le cas contraire, vous obtiendrez le message d'erreur « Impossible d’écrire le fichier VMX ».
>

Si vous rencontrez le message d'erreur « Impossible d’écrire le fichier VMX » ou « Erreur provoquée par le fichier /vmfs/volumes/xxxx/xxx.vmdk », appliquez la procédure suivante :

- copiez la VM vers l'un de vos datastores;
- enregistrez la VM (si vous ne l'avez pas déjà effectué);
- clonez la VM;
- allumez la VM.

### Etape 5 : Supprimer la copie

Une fois les données récupérées, vous pouvez supprimer la copie du serveur de fichiers en suivant la documentation relative à la [suppression d'un datastore](../suppression-data-store/)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
