---
title: Présentation de l'espace client Private Cloud OVHcloud
slug: manager-ovh-private-cloud
excerpt: Découvrez les possibilités de votre espace client Private Cloud
section: Premiers pas
order: 1
---

**Dernière mise à jour le 15/12/2021**

## Objectif

L'espace client OVHcloud vous propose de nombreuses options de paramétrage de votre infrastructure Private Cloud.

**Ce guide vous explique les multiples options possibles.**


## Prérequis

- Une [Infrastrucure Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/)
- Un accès à l'[OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)


## En pratique


### Accès à l'Interface

Naviguez vers l'[OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) et connectez vous avec un compte administrateur.

![LOGIN](images/en01ogin.png){.thumbnail}


### Vue Hosted Private Cloud


Dans l'onglet "Hosted Private Cloud" sélectionnez votre service dans la liste `VMWare`{.action}. Vous pouvez renommer votre infrastructure en cliquant le boutton ![Pen](images/buttonpen.png){.thumbnail} au centre de l'écran.

![HOSTED](images/en02dashboard.png){.thumbnail}


#### Informations générales

L'onglet Informations générales donne le résumé de vos options de Private Cloud.

- La "Description" est modifiable avec le bouton ![Dots](images/buttondots.png){.thumbnail}
- La "Solution logicielle" vous donne la version vCSA installée
- La "Localisation" de votre Private Cloud
- La  "Politique d'accès" de votre infrastructure (`Ouverte` ou `Restreinte`) 
- Le "Nombre de datacenters" de votre infrastructure
- Le "Nombre de blocs IP" qui vous sont assignés et l'option d'en ajouter avec le bouton ![Dots](images/buttondots.png){.thumbnail}
- Liens vers les interfaces de management
- Le cadre "Options et conformité" liste les options activées et désactivées avec les boutons ![Dots](images/buttondots.png){.thumbnail} pour les modifier
- La "Mailing list" vous permet de vous abonner à la liste de l'OVHcloud Hosted Private Cloud
- La date de "Renouvellement" offre également la possibilité de commander der licenses ou de supprimer le service en cliquant sur ![Dots](images/buttondots.png){.thumbnail}

![GENERAL](images/en03general.png){.thumbnail}


#### Datacentres

L'onglet Datacentres montre vos datacentres virtuels existant et offre la possibilité d'en ajouter par le clic d'un bouton.<br>
La vue Datacentre (voir plus bas), donne tous les détails et options. 

![DATACENTERS](images/en04datacenters.png){.thumbnail}


#### Utilisateurs

L'onglet Utilisateurs liste tous les comptes qui peuvent se connecter à vSphere et permet la création de nouveaux comptes.

![USERS](images/en05users.png){.thumbnail}

Le bouton ![Dots](images/buttondots.png){.thumbnail} offre quelques options de modification des utilisateurs
- Modifier les champs du résumé
- Voir / Modifier les droits utilisateur par Datacentre
- Changer le mot de passe utilisateur
- Supprimer l'utilisateur

Cliquer `Voir / Modifier les droits par DC`{.action} ouvre la fenêtre de gestion des droits.

![RIGHTS](images/en06rights.png){.thumbnail}


Cliquez ![Dots](images/buttondots.png){.thumbnail} puis `modifier les droits`{.action}.

- **Accès vSphere**: il s'agit des droits globaux de l'utilisateur sur le vSphere :

|Droits|Description|
|---|---|
|Aucun|aucun accès|
|Lecture seule|accès en lecture seule|
|Lecture/Ecriture|accès en lecture/écriture|
|Operateur|accès réservé aux administrateurs OVHcloud|

- **Accès au VM Network**: il s'agit de la gestion des droits sur la partie réseau public (appelée `VM Network` dans l'interface vSphere) :

|Droits|Description|
|---|---|
|Aucun|aucun accès|
|Lecture seule|accès en lecture seule|
|Operateur|permet de configurer des machines virtuelles (VM) sur le réseau public|

- **Accès au V(X)LAN**: il s'agit de la gestion des droits sur la partie réseau privé les VXLAN pour la gamme Dedicated Cloud ou les VLAN pour la gamme SDDC :

|Droits|Description|
|---|---|
|Aucun|aucun accès|
|Lecture seule|accès en lecture seule|
|Operateur|permet de configurer des machines virtuelles (VM) sur le réseau privé|
|Administrateur|permet de gérer les port groups du switch virtuel (en créer, modifier, supprimer...)|

- **Ajout de ressources**: ce bouton permet d'accorder ou non le droit d'ajouter des ressources supplémentaires via le plugin OVH dans le vSphere client.


#### Sécurité

L'onglet Sécurité permet le controle de la politique d'accès à votre vCenter.<br>
Vous pouvez paramétrer les options à l'aide des boutons sur la droite de l'écran.

![SECURITY](images/en08security.png){.thumbnail}

> [!warning]
>
> Si vous mettez la politique d'accès en mode restreint et que vous ne renseignez aucune IP, aucun utilisateur ne pourra se connecter au client vSphere. Les machines virtuelles resteront toutefois accessibles.
> 

En bas de la page, vous pouvez aussi ajouter un Key Management Servers.<br>
Rendez-vous sur [Activation du chiffrement des machines virtuelles](https://docs.ovh.com/fr/private-cloud/vm-encrypt/) pour plus de details.

![KMS](images/en09kms.png){.thumbnail}


#### Opérations

L'onglet Opérations montre le journal de toutes les tâches exécutées sur votre infrastructure.<br>
Vous pouvez trier la liste par types et si une tâche est modifiable, vous verrez un bouton ![Dots](images/buttondots.png){.thumbnail}.

![OPS](images/en10ops.png){.thumbnail}


> [!primary]
>
> Si votre accès au client vSphere n'est pas possible, une maintenance peut être en cours, cet onglet vous permet de le vérifier.
>


#### Licence Windows

L'onglet Licence Windows vous donne le statut de votre licence Windows SPLA.<br>
Retrouvez la page des [tarifs](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/images-licenses/).

![SPLA](images/en11spla.png){.thumbnail}


### Vue Datacentre

Un Hosted Private Cloud peut inclure plusieurs datacentres virtuels.<br>
La barre de navigation à votre gauche les liste tous sous le service Hosted Public Cloud selectionné. Cliquez sur l'un d'entre eux pour ouvrir son interface de management.<br>
Le nom et la description du datacentre sont modifiable en cliquant sur ![Pen](images/buttonpen.png){.thumbnail}.

![DATACENTER](images/en12datacenter.png){.thumbnail}


#### Informations générales


L'onglet Informations générales donne le résumé de vos options.

- Les champs "Nom" et "Description" sont modifiables via le bouton ![Dots](images/buttondots.png){.thumbnail}
- La "Gamme" montre les services VMWare souscrits
- Les champs "Hosts" and "Datastores" vous donnent les quantités de chaque dans votre Private Cloud
- "VM Backupée" vous montre le statut de votre solution de sauvegarde
- "Plan de reprise d’activité" vous montre le statut de votre solution de PRA
- Liens vers les interfaces de management

![GENERAL](images/en13general.png){.thumbnail}


#### Hosts

L'onglet Hosts vous montre un résumé de vos hôtes présents sur le datacentre sélectionné.<br>
*Le mode de facturation est modifiable via le bouton ![Dots](images/buttondots.png){.thumbnail} si votre hôte est en facturation à l'heure*<br>
Vous pouvez également ajouter un nouvel hôte avec le bouton `Commander un Host`{.action}.

![HOSTS](images/en14hosts.png){.thumbnail}


#### Datastores

L'onglet Datastores vous montre un résumé des Datastores présents sur le datacentre sélectionné.<br>
*Vous pouvez convertir un datastore en global via le bouton ![Dots](images/buttondots.png){.thumbnail}*<br>
Vous pouvez également ajouter un nouveau datastore avec le bouton `Commander un Datastore`{.action}.

![DATASTORES](images/en15datastores.png){.thumbnail}


#### Backup

L'onglet Backup vous permet d'activer une solution de sauvegarde Veeam.<br>
Rendez-vous sur [Activer et utiliser Veeam Managed Backup](https://docs.ovh.com/fr/private-cloud/veeam-backup-as-a-service/) pour plus de détails.

![BACKUP](images/en16backup.png){.thumbnail}


Une fois le service activé, la page Backup vous permet également de planifier vos rapports de sauvergarde.

![BACKUP](images/en17backupreport.png){.thumbnail}


#### Plan de reprise d’activité (PRA)

L'onglet Plan de reprise d’activité (PRA) vous permet de construire une solution de PRA avec Zerto.<br>
Rendz-vous sur [Mise en oeuvre de Zerto Virtual Replication pour votre PRA](https://docs.ovh.com/fr/private-cloud/zerto-virtual-replication-vmware-vsphere-drp/) pour plus de détails.

![DRP](images/en18drp.png){.thumbnail}

> [!warning]
>
>  Vous devez possédez une solution Private Cloud secondaire pour activer une option Zerto.
>


Bravo et merci.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
