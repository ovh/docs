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

Cliquez sur `Attach Disk`{.action}.

![Create HYCUVM 04](images/02-createhycuvm04.png){.thumbnail}

Choisissez `Disk`{.action} dans **Type**,  `Clone from Image`{.action} pour **Operation** et `hycu-4.3.0-4122`{.action} sur **Image** . Ensuite cliquez sur `Save`{.action}

![Create HYCUVM 05](images/02-createhycuvm05.png){.thumbnail}

Cliquez sur `Attach Disk`{.action}

![Create HYCUVM 06](images/02-createhycuvm06.png){.thumbnail}

Choisissez `Disk`{.action} dans **Type**, `Allocate on Storage Container`{.action} pour **Operation** et `default-container`{.action} sur **Storage Container** . Changez la taille à dans capacity à `32Gib`{.action} et cliquez sur `Save`{.action}.

![Create HYCUVM 07](images/02-createhycuvm07.png){.thumbnail}

Cliquez sur `Attach to Subnet`{.action}

![Create HYCUVM 08](images/02-createhycuvm08.png){.thumbnail}

Sélectionnez le réseau `base`{.action} dans **Subnet** et `Connected`{.action} pour **Network Connection State** ensuite cliquez sur `Save`{.action}.

![Create HYCUVM 09](images/02-createhycuvm09.png){.thumbnail}

Cliquez sur `Next`{.action}

![Create HYCUVM 10](images/02-createhycuvm10.png){.thumbnail}

Modifiez les options de **Guest Customization** avec `Cloud-init (Linux)`{.action} dans **Script Type** et `Custom Script`{.action} pour **Configuration Method**.

Modifiez ce script avec ces valeurs

- < Adresse IP > par l'adresse IP locale du cluster.
- < GATEWAY > par la passerelle locale du cluster pour aller sur Internet.
- < DNS > par le DNS utilisé sur Internet.

```yaml
#cloud-config
bootcmd:
- /opt/grizzly/bin/cloud_init_setup.sh hycubc < Adresse IP > < GATEWAY >  < DNS > "hycu.local,ntnx.local"
```

Copiez `le script`{.action} et collez-le à l'emplacement réservé pour le script au dessous de **Clear Script**, ensuite cliquez sur `Next`{.action}.

![Create HYCUVM 11](images/02-createhycuvm11.png){.thumbnail}

Cliquez sur `Create VM`{.action}.

![Create HYCUVM 12](images/02-createhycuvm12.png){.thumbnail}

Sélectionnez la machine virtuelle créée en utilisant la `case à cocher`{.action} à droite de la machine virtuelle.

![Create HYCUVM 13](images/02-createhycuvm13.png){.thumbnail}

Cliquez sur `Power On`{.action} dans le menu  `Actions`.

![Create HYCUVM 14](images/02-createhycuvm14.png){.thumbnail}.

La machine virtuelle est démarrée et possède l'adresse IP définie dans le fichier de script.

![Create HYCUVM 15](images/02-createhycuvm15.png){.thumbnail}

#### Connexion et configuration d'HYCU

Connectez vous avec un navigateur à l'adresse IP interne ou externe si un redirection a été faite à l'interface d'administration d'HYCU qui doit avoir cette forme **https://adresseiplocale:8443** ou **https://adressepublique:8443**

Saisissez  `le mot de passe par défaut`{.action} et cliquez sur `Sign In`{.action}.

![Configura HYCU 01](images/02-configurehycu01.png){.thumbnail}

En premier lieu il est nécessaire de changer le mot de passe de connexion.

Cliquez sur `Change Password`{.action} dans le menu `admin`{.action} en haut à droite de l'interface.

![Configura HYCU 02](images/02-configurehycu02.png){.thumbnail}

Saisissez `le mot de passe par défaut`{.action} dans **OLD PASSWORD** , `le nouveau mot de passe`{.action} dans **PASSWORD** et **CONFIRM PASSWORD** ensuite cliquez sur `Save`{.action}.

![Configura HYCU 03](images/02-configurehycu02.png){.thumbnail}

Nous allons connecter HYCU au cluster NUTANIX

Cliquez sur l'icône en forme `d'engrenage`{.action} en haut à gauche et choisir `Sources`{.action}

![Configura HYCU 04](images/02-configurehycu04.png){.thumbnail}

Saisissez ces informations:

- URL: `https://url_prism_element_local:9440`{.action}
- USERNAME: utilisateur créé dans **Prism Element** pour HYCU
- PASSWORD: mot de passe de l'utilisateur **Prism Element** pour HYCU

Cliquez sur `Next`{.action}

![Configura HYCU 05](images/03-configurehycu05.png){.thumbnail}

Saisissez ces informations:

- URL: `https://url_prism_central_local:9440`{.action}
- USERNAME: `utilisateur de Prism Central`{.action}
- PASSWORD: `mot de passe de Prism Central`{.action}

Cliquez sur `Next`{.action}.

![Configura HYCU 06](images/03-configurehycu06.png){.thumbnail}

L'information `VALIDATION SUCCESSFUL` apparait pour signifier que les informations saisies sont correctes , cliquez sur `Save`{.action}.

![Configura HYCU 07](images/03-configurehycu07.png){.thumbnail}

Cliquez sur `Close`{.action}.

![Configura HYCU 08](images/03-configurehycu08.png){.thumbnail}

Sélectionnez `Targets`{.action} dans le menu à gauche et cliquez sur `+ Add`{.action} en haut à droite de l'interface.

![Configura HYCU 09](images/03-configurehycu09.png){.thumbnail}

Saisissez ces informations fournies par OVHcloud lors d'un abonnement à **High Performance Object Storage** ou **Standard Object Storage (SWIFT)** d'OVHcloud.

- Name: `Nom`{.action}
- Size: `Taille du stockage`{.action}
- Type: `AWS S3/Compatible`{.action}

faites défilez la `barre de défilement`{.action}. 

![Configura HYCU 10](images/03-configurehycu10.png){.thumbnail}.

Finalisez la saisie des informations:

- Service ENDPOINT: `URL Stockage S3`{.action}
- BUCKET NAME: `Nom du bucket`{.action}
- ACCESS KEY ID: `Clés d'accès au bucket`{.action}
- SECRET ACCESS KEY `clesecrete`{.action}

Activez la `TARGET ENCRYPTION`{.action} et cliquez sur `Save`{.action}.

![Configura HYCU 11](images/03-configurehycu11.png){.thumbnail}.

La cible est activée elle servira pour les sauvegardes des machine virtuelle du cluster NUTANIX.

![Configura HYCU 12](images/03-configurehycu12.png){.thumbnail}.

### Mise à jour d'HYCU

HYCU fournie régulierement des mises à jours voici le processus de mise à jours

#### Ajout des sources d'HYCU

Cliquez sur 



















### Mise à jour d'HYCU

Installer l'image

Lancer la mise à jour à partir d'HYCU




### Configuration de la sauvegarde

### test de restauration



## Aller plus loin

[Hyper-convergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/)





Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
