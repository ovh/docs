---
title: Présentation de l'espace client Hosted Private Cloud OVHcloud
slug: manager-ovh-private-cloud
excerpt: Découvrez les possibilités de votre espace client Hosted Private Cloud
section: Premiers pas
order: 1
---

**Dernière mise à jour le 15/12/2021**

## Objectif

L'espace client OVHcloud vous propose de nombreuses options de paramétrage de votre infrastructure Private Cloud.

**Ce guide vous explique les multiples options possibles.**

## Prérequis

- Une [Infrastrucure Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/)
- Un accès à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

### Accès à l'Interface

Naviguez vers l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et connectez vous avec un compte administrateur.

![LOGIN](images/en01login.png){.thumbnail}

### Vue Hosted Private Cloud

Dans l'onglet `Hosted Private Cloud`{.action}, sélectionnez votre service dans la liste `VMware`{.action}. Vous pouvez renommer votre infrastructure en cliquant le bouton `Crayon`{.action} au centre de l'écran.

![HOSTED](images/en02dashboard.png){.thumbnail}

#### Informations générales

L'onglet `Informations générales`{.action} donne le résumé de vos options Hosted Private Cloud :

- La « Description » est modifiable via le bouton `...`{.action}
- La « Solution logicielle » vous donne la version vCSA installée
- La « Localisation » de votre Hosted Private Cloud
- La « Politique d'accès » de votre infrastructure (`Ouverte` ou `Restreinte`)
- Le « Nombre de datacenters » de votre infrastructure
- Le « Nombre de blocs IP » qui vous sont assignés et l'option d'en ajouter via le bouton `...`{.action}
- Des liens vers les interfaces de gestion sont disponibles.
- Le cadre « Options et conformité » liste les options activées et désactivées. Le bouton `...`{.action} vous permet de les modifier.
- La « Mailing list » vous permet de vous abonner à la liste de diffusion e-mail Hosted Private Cloud OVHcloud
- La date de  « Renouvellement » offre également la possibilité de commander der licenses ou de supprimer le service en cliquant sur le bouton `...`{.action}

![GENERAL](images/en03general.png){.thumbnail}

#### Datacentres

L'onglet Datacentres montre vos datacentres virtuels existants et offre la possibilité d'en ajouter.<br>
La vue Datacentre (voir plus bas), donne tous les détails et options.

![DATACENTERS](images/en04datacenters.png){.thumbnail}

#### Utilisateurs

L'onglet Utilisateurs liste tous les comptes qui peuvent se connecter à vSphere et permet la création de nouveaux comptes.

![USERS](images/en05users.png){.thumbnail}

Le bouton `...`{.action} offre quelques options de modification des utilisateurs:

- Modifier les champs du résumé
- Voir / Modifier les droits utilisateur par Datacentre
- Changer le mot de passe utilisateur
- Supprimer l'utilisateur

Cliquez sur `Voir / Modifier les droits par DC`{.action} pour ouvrir la fenêtre de gestion des droits.

![RIGHTS](images/en06rights.png){.thumbnail}

Cliquez sur le bouton `...`{.action} puis sur `modifier les droits`{.action}.

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

- **Accès au V(X)LAN**: il s'agit de la gestion des droits sur la partie réseau privé (les VXLAN pour la gamme Hosted Private Cloud ou les VLAN pour la gamme SDDC) :

|Droits|Description|
|---|---|
|Aucun|aucun accès|
|Lecture seule|accès en lecture seule|
|Operateur|permet de configurer des machines virtuelles (VM) sur le réseau privé|
|Administrateur|permet de gérer les port groups du switch virtuel (en créer, modifier, supprimer...)|

- **Ajout de ressources**: ce bouton permet d'accorder ou non le droit d'ajouter des ressources supplémentaires via le plugin OVHcloud dans le client vSphere.

#### Sécurité

L'onglet Sécurité permet le controle de la politique d'accès à votre vCenter.<br>
Vous pouvez paramétrer les options à l'aide des boutons sur la droite de l'écran.

![SECURITY](images/en08security.png){.thumbnail}

> [!warning]
>
> Si vous mettez la politique d'accès en mode restreint et que vous ne renseignez aucune IP, aucun utilisateur ne pourra se connecter au client vSphere. Les machines virtuelles resteront toutefois accessibles.
>

En bas de la page, vous pouvez aussi ajouter un Key Management Servers.<br>
Consultez le guide « [Activation du chiffrement des machines virtuelles](https://docs.ovh.com/fr/private-cloud/vm-encrypt/) » pour plus de details.

![KMS](images/en09kms.png){.thumbnail}

#### Opérations

L'onglet Opérations montre le journal de toutes les tâches exécutées sur votre infrastructure.<br>
Vous pouvez trier la liste par types et si une tâche est modifiable, vous verrez un bouton `...`{.action}.

![OPS](images/en10ops.png){.thumbnail}

> [!primary]
>
> Si votre accès au client vSphere n'est pas possible, une maintenance peut être en cours. Cet onglet vous permet de le vérifier.
>

#### Licence Windows

L'onglet Licence Windows vous donne le statut de votre licence Windows SPLA.<br>
Consultez la page des [tarifs](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/images-licenses/).

![SPLA](images/en11spla.png){.thumbnail}

### Vue Datacentre

Un Hosted Private Cloud peut inclure plusieurs datacentres virtuels.<br>
La barre de navigation à votre gauche les liste tous sous le service Hosted Private Cloud selectionné. Cliquez sur l'un d'entre eux pour ouvrir son interface de gestion.<br>
Le nom et la description du datacentre sont modifiables en cliquant sur le bouton `Crayon`{.action}.

![DATACENTER](images/en12datacenter.png){.thumbnail}

#### Informations générales

L'onglet Informations générales donne le résumé de vos options :

- Les champs « Nom » et « Description » sont modifiables via le bouton `...`{.action}
- La « Gamme » montre les services VMware souscrits
- Les champs « Hosts » et « Datastores » vous donnent les quantités d'hôtes et de datastores dans votre Hosted Private Cloud
- « VM Backupée » vous montre le statut de votre solution de sauvegarde
- « Plan de reprise d’activité » vous montre le statut de votre solution de PRA
- Des liens vous redirigent vers les interfaces de gestion

![GENERAL](images/en13general.png){.thumbnail}

#### Hosts

L'onglet Hosts vous montre un résumé de vos hôtes présents sur le datacentre sélectionné.<br>
*Le mode de facturation est modifiable via le bouton `...`{.action} si votre hôte est en facturation à l'heure*<br>
Vous pouvez également ajouter un nouvel hôte via le bouton `Commander un Host`{.action}.

![HOSTS](images/en14hosts.png){.thumbnail}

#### Datastores

L'onglet Datastores vous montre un résumé des Datastores présents sur le datacentre sélectionné.<br>
*Vous pouvez convertir un datastore en global via le bouton `...`{.action}*<br>
Vous pouvez également ajouter un nouveau datastore via le bouton `Commander un Datastore`{.action}.

![DATASTORES](images/en15datastores.png){.thumbnail}

#### Backup

L'onglet Backup vous permet d'activer une solution de sauvegarde Veeam.<br>
Consultez le guide « [Activer et utiliser Veeam Managed Backup](https://docs.ovh.com/fr/private-cloud/veeam-backup-as-a-service/) » pour plus de détails.

![BACKUP](images/en16backup.png){.thumbnail}

Une fois le service activé, la page Backup vous permet également de planifier vos rapports de sauvegarde.

![BACKUP](images/en17backupreport.png){.thumbnail}

#### Plan de reprise d’activité (PRA)

L'onglet Plan de reprise d’activité (PRA) vous permet de construire une solution de PRA avec Zerto.<br>
Consultez le guide « [Mise en oeuvre de Zerto Virtual Replication pour votre PRA](https://docs.ovh.com/fr/private-cloud/zerto-virtual-replication-vmware-vsphere-drp/) » pour plus de détails.

![DRP](images/en18drp.png){.thumbnail}

> [!warning]
>
> Vous devez posséder une seconde solution Hosted Private Cloud pour activer une option Zerto.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
