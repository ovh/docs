---
title: Configurer HYCU Backup       
slug: hycu-backup
excerpt: "Installation de la sauvegarde HYCU Backup sur un cluster Nutanix"
section: Sauvegardes
order: 02
---

**Dernière mise à jour le 13/04/2022**

## Objectif


HYCU backup est un logiciel de sauvegarde disponible pour Nutanix. 

**Apprenez à installer , configurer HYCU sur un cluster Nutanix avec un stockage de type S3 chez OVHCloud**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>
> La licence HYCU n'est pas fournie par OVHcloud il faudra contacter le service commercial d'HYCU ou D'OVHcloud 


## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur le cluster via Prism Central. 
- Avoir un abonnement de stockage chez OVHcloud comme **High Performance Object Storage** ou **Standard Object Storage (SWIFT)**


## En pratique

Connectez-vous à **Prism Central**.

Pour plus d'informations sur la connexion au cluster reportez-vous à la section « [Aller plus loin](#gofurther) » de ce guide. 

### Installation et configuration du logiciel HYCU

#### Ajout de l'image d'installation d'HYCU

Au travers du menu principal cliquez sur `Images`{.action} depuis le menu `Compute & Storage`{.action}

![Add Image HYCU 01](images/00-addimagehycu01.png){.thumbnail}

Cliquez sur `Add Image`{.action}`.

![Add Image HYCU 02](images/00-addimagehycu02.png){.thumbnail}

Sélectionnez `URL`{.action}` saisissez l'URL de l'image qcow2 de la dernière version d'HYCU comme par exemple 
`https://download.hycu.com/ec/v4.3.0/hycu-4.3.0-4122.qcow2` et cliquez sur `Upload file`{.action}.

![Add Image HYCU 03](images/00-addimagehycu03.png){.thumbnail}

Enlevez l'extension .qcow2 derrière le nom `hycu-'4.3.0-4122`{.action} saissisez une `Description`{.action} et cliquez sur `Next`{.action}.

![Add Image HYCU 04](images/00-addimagehycu04.png){.thumbnail}

Cliquez sur `Save`{.action} pour importer l'image et attendez que l'image soit importée.

![Add Image HYCU 05](images/00-addimagehycu05.png){.thumbnail}

Cliquez sur `nom du cluster`{.action} sur le nom du cluster pour aller dans **Prism Element**.

#### Configuration adresse IP pour ISCSI

![Configure ISCSI 01](images/00-configurureiscsi01.png){.thumbnail}

Allez dans les paramètres en cliquant sur l'icone représentant un `Engrenage`{.action}.

![Configure ISCSI 02](images/00-configurureiscsi02.png){.thumbnail}

Cliquez sur `Cluster Details`{.action}.

![Configure ISCSI 03](images/00-configurureiscsi03.png){.thumbnail}

Saisissez `une adresse IP non utilisée`{.action} sur le réseau local et cliquez sur `Save`{.action}.

![Configure ISCSI 04](images/00-configurureiscsi04.png){.thumbnail}

Vérifiez votre choix et cliquez sur `Yes`{.action}.

![Configure ISCSI 05](images/00-configurureiscsi05.png){.thumbnail}

L'adresse IP apparaire dans virtual IP

![Configure ISCSI 06](images/00-configurureiscsi06.png){.thumbnail}

#### Ajout compte utilisateur sur **Prism Element** pour HYCU

Dans **Prism Element** cliquez sur l'engrenage pour aller dans la configuration de **Prism Element**

![Add local user to Prism Element 01](images/01-adduserprismelement01.png){.thumbnail}

Faites défiler le menu et cliquez sur `Local User Management`{.action}.

![Add local user to Prism Element 02](images/01-adduserprismelement02.png){.thumbnail}

Cliquez sur `New User`{.action}.

![Add local user to Prism Element 03](images/01-adduserprismelement03.png){.thumbnail}

Saisissez le `svc_hycu`{.action} dans **Username**, `HYCU`{.action} pour **First Name** encore `HYCU`{.action} pour **Last Name**, `hycu@example.com`{.action} dans **Email**, `mot de passe`{.action} dans **Password**

Cochez la case `Cluster Admin`{.action} et cliquez sur `Save`{.action}

![Add local user to Prism Element 04](images/01-adduserprismelement04.png){.thumbnail}

L'utilisateur est créé.

![Add local user to Prism Element 05](images/01-adduserprismelement05.png){.thumbnail}

#### Création de la VM HYCU

Allez dans **Prism Central**

Au travers du menu principal cliquez sur `VMs`{.action} depuis le menu `Compute & Storage`{.action}.

![Create HYCUVM 01](images/02-createhycuvm01.png){.thumbnail}

Cliquez sur `Create VM`{.action}.

![Create HYCUVM 02](images/02-createhycuvm02.png){.thumbnail}


Nommez la machine virtuelle dans `Name`{.action} , Modifiez les propriétés de la machine virtuelle avec  `4 vCPU, 2 coeurs et 8 Gb`{.action} ensuite cliquez sur `Next`{.action}.

![Create HYCUVM 03](images/02-createhycuvm03.png){.thumbnail}







### Mise à jour d'HYCU

Installer l'image

Lancer la mise à jour à partir d'HYCU




### Configuration de la sauvegarde

### test de restauration



## Aller plus loin

[Hyper-convergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/)





Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
