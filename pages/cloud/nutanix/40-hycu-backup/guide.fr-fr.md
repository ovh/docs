---
title: Configurer HYCU Backup       
slug: hycu-backup
excerpt: "Installation de la sauvegarde HYCU Backup sur un cluster Nutanix"
section: Sauvegardes
order: 01
---

**Dernière mise à jour le 15/04/2022**

## Objectif


HYCU for Nutanix est un logiciel de sauvegarde disponible pour Nutanix. 

**Apprenez à installer, configurer et utiliser HYCU sur un cluster Nutanix avec un stockage de type object Storage fourni par OVHCloud**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>
> La licence HYCU n'est pas fournie par OVHcloud il faudra contacter le service commercial d'HYCU ou d'OVHcloud 


## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur le cluster via Prism Central. 
- Avoir un abonnement de stockage chez OVHcloud du type **High Performance Object Storage** ou **Standard Object Storage (SWIFT)**


## En pratique

Connectez-vous à **Prism Central**.

Pour plus d'informations sur la connexion au cluster reportez-vous à la section « [Aller plus loin](#gofurther) » de ce guide. 

### Installer et configurer le logiciel HYCU

#### Ajouter l'image d'installation d'HYCU

Au travers du menu principal cliquez sur `Images`{.action} depuis le menu `Compute & Storage`{.action}

![Add Image HYCU 01](images/00-addimagehycu01.png){.thumbnail}

Cliquez sur `Add Image`{.action}`.

![Add Image HYCU 02](images/00-addimagehycu02.png){.thumbnail}

Choisissez `URL`{.action} comme type de source, saisissez `https://download.hycu.com/ec/v4.3.0/hycu-4.3.0-4122.qcow2` dans **Enter Image URL** et cliquez sur `Upload file`{.action}.

![Add Image HYCU 03](images/00-addimagehycu03.png){.thumbnail}

Enlevez l'extension **.qcow2** derrière le nom et laissez `hycu-4.3.0-4122`{.action}, saisissez une `description`{.action} et cliquez sur `Next`{.action}.

![Add Image HYCU 04](images/00-addimagehycu04.png){.thumbnail}

Cliquez sur `Save`{.action} pour importer l'image.

![Add Image HYCU 05](images/00-addimagehycu05.png){.thumbnail}

Sur le tableau de bord **Prism Central** cliquez sur le `nom du cluster`{.action} dans la section **Cluster Quick Access** pour aller sur **Prism Element**.

![Configure ISCSI 01](images/00-configureiscsi01.png){.thumbnail}

#### Configurer l'adresse IP pour ISCSI

Allez dans les paramètres en cliquant sur l'icône représentant un `engrenage`{.action}.

![Configure ISCSI 02](images/00-configureiscsi02.png){.thumbnail}


Cliquez sur `Cluster Details`{.action}.

![Configure ISCSI 03](images/00-configureiscsi03.png){.thumbnail}


Saisissez `une adresse IP locale non utilisée`{.action} dans **Virtual IP** et cliquez sur `Save`{.action}.

![Configure ISCSI 04](images/00-configureiscsi04.png){.thumbnail}

Vérifiez votre choix et cliquez sur `Yes`{.action}.

![Configure ISCSI 05](images/00-configureiscsi05.png){.thumbnail}

L'adresse IP est affichée dans **virtual IP**.

![Configure ISCSI 06](images/00-configureiscsi06.png){.thumbnail}

#### Ajouter un compte utilisateur dans **Prism Element** pour HYCU

Cliquez sur l'engrenage pour aller dans la configuration de **Prism Element**

![Add local user to Prism Element 01](images/01-adduserprismelement01.png){.thumbnail}

Faites défiler le menu et cliquez sur `Local User Management`{.action}.

![Add local user to Prism Element 02](images/01-adduserprismelement02.png){.thumbnail}

Cliquez sur `New User`{.action}.

![Add local user to Prism Element 03](images/01-adduserprismelement03.png){.thumbnail}

Saisissez ces valeurs :

- **Username** : `svc_hycu`{.action}
- **First Name** : `HYCU`{.action}
- **Last Name** : `HYCU`{.action}
- **Email** : `hycu@example.com`{.action}
- **Password** : `mot de passe`{.action}

Cochez la case `Cluster Admin`{.action} et cliquez sur `Save`{.action}

![Add local user to Prism Element 04](images/01-adduserprismelement04.png){.thumbnail}

L'utilisateur est créé.

![Add local user to Prism Element 05](images/01-adduserprismelement05.png){.thumbnail}

#### Créer la machine virtuelle pour HYCU

Allez dans **Prism Central**.

Au travers du menu principal cliquez sur `VMs`{.action} depuis le menu `Compute & Storage`{.action}.

![Create HYCUVM 01](images/02-createhycuvm01.png){.thumbnail}

Cliquez sur `Create VM`{.action}.

![Create HYCUVM 02](images/02-createhycuvm02.png){.thumbnail}

Nommez la machine virtuelle dans `Name`{.action} et modifiez les propriétés de la machine virtuelle avec ces paramètres:

- **CPU** :  `4 vCPU`{.action}
- **Cores Per CPU** : `2 Cores`{.action}
- **Memory** : `8GB`{.action}

Cliquez sur `Next`{.action}.

![Create HYCUVM 03](images/02-createhycuvm03.png){.thumbnail}

Cliquez sur `Attach Disk`{.action}.

![Create HYCUVM 04](images/02-createhycuvm04.png){.thumbnail}

Saisissez ces informations :

- **Type** : `Disk`{.action}
- **Operation** : `Clone from Image`{.action}
- **Image** : `hycu-4.3.0-4122`{.action}

Cliquez sur `Save`{.action}

![Create HYCUVM 05](images/02-createhycuvm05.png){.thumbnail}

Cliquez sur `Attach Disk`{.action}

![Create HYCUVM 06](images/02-createhycuvm06.png){.thumbnail}

Choisissez ces options :

- **Type** : `Disk`{.action}
- **Operation** : `Allocate on Storage Container`{.action}
- **Image** : `default-container`{.action}
- **Capacity** : `32Gib`{.action}

Cliquez sur `Save`{.action}.

![Create HYCUVM 07](images/02-createhycuvm07.png){.thumbnail}

Cliquez sur `Attach to Subnet`{.action}.

![Create HYCUVM 08](images/02-createhycuvm08.png){.thumbnail}

Sélectionnez le réseau `base`{.action} dans **Subnet** et `Connected`{.action} pour **Network Connection State** ensuite cliquez sur `Save`{.action}.

![Create HYCUVM 09](images/02-createhycuvm09.png){.thumbnail}

Cliquez sur `Next`{.action}

![Create HYCUVM 10](images/02-createhycuvm10.png){.thumbnail}

Créer un fiche **yaml** en modifiant ces valeurs :

- **< Adresse IP >** : Adresse IP locale du cluster.
- **< GATEWAY >** : Passerelle locale du cluster pour aller sur Internet.
- **< DNS >** : DNS utilisé sur Internet.

```yaml
#cloud-config
bootcmd:
- /opt/grizzly/bin/cloud_init_setup.sh hycubc < Adresse IP > < GATEWAY >  < DNS > "hycu.local,ntnx.local"
```
Modifiez les options de **Guest Customization** avec `Cloud-init (Linux)`{.action} dans **Script Type** et `Custom Script`{.action} pour **Configuration Method**.

Copiez `le contenu du script yaml`{.action} et collez-le à `l'emplacement réservé`{.action} au-dessous de **Clear Script**, ensuite cliquez sur `Next`{.action}.

![Create HYCUVM 11](images/02-createhycuvm11.png){.thumbnail}

Cliquez sur `Create VM`{.action}.

![Create HYCUVM 12](images/02-createhycuvm12.png){.thumbnail}

Sélectionnez la machine virtuelle créée en utilisant la `case à cocher`{.action} à droite de la machine virtuelle.

![Create HYCUVM 13](images/02-createhycuvm13.png){.thumbnail}

Cliquez sur `Power On`{.action} dans le menu  `Actions`.

![Create HYCUVM 14](images/02-createhycuvm14.png){.thumbnail}.

La machine virtuelle est démarrée et possède l'adresse IP définie dans **cloud-init**.

![Create HYCUVM 15](images/02-createhycuvm15.png){.thumbnail}

#### Configurer HYCU

Connectez-vous avec un navigateur WEB à l'adresse IP interne ou externe si une redirection existe à l'interface d'administration d'HYCU qui doit avoir cette forme **https://adresseiplocale:8443** ou **https://adressepublique:8443**

Saisissez `le mot de passe par défaut`{.action} et cliquez sur `Sign In`{.action}.

![Configure HYCU 01](images/03-configurehycu01.png){.thumbnail}

Changez le mot de passe de connexion pour plus de sécurité.

Cliquez sur `Change Password`{.action} dans le menu `admin`{.action} en haut à droite de l'interface.

![Configure HYCU 02](images/03-configurehycu02.png){.thumbnail}

Saisissez `le mot de passe par défaut`{.action} dans **OLD PASSWORD** , `le nouveau mot de passe`{.action} dans **PASSWORD** et **CONFIRM PASSWORD** ensuite cliquez sur `Save`{.action}.

![Configure HYCU 03](images/03-configurehycu03.png){.thumbnail}

Nous allons connecter HYCU au cluster NUTANIX

Cliquez sur l'icône `Administration`{.action} en forme d'engrenage en haut à droite et choisir `Sources`{.action}

![Configure HYCU 04](images/03-configurehycu04.png){.thumbnail}

Saisissez les informations concernant **Prism Element** :

- **URL** : `https://url_prism_element_local:9440`{.action}
- **USERNAME** : `utilisateur **Prism Element**`{.action} 
- **PASSWORD** : `mot de passe de l'utilisateur **Prism Element**`{.action} 

Cliquez sur `Next`{.action}

![Configure HYCU 05](images/03-configurehycu05.png){.thumbnail}

Saisissez ces informations concernant **Prism Central** :

- **URL** : `https://url_prism_central_local:9440`{.action}
- **USERNAME** : `utilisateur de Prism Central`{.action}
- **PASSWORD** : `mot de passe de Prism Central`{.action}

Cliquez sur `Next`{.action}.

![Configure HYCU 06](images/03-configurehycu06.png){.thumbnail}

L'information `VALIDATION SUCCESSFUL` apparait pour signifier que les informations saisies sont correctes, cliquez sur `Save`{.action}.

![Configure HYCU 07](images/03-configurehycu07.png){.thumbnail}

Cliquez sur `Close`{.action}.

![Configure HYCU 08](images/03-configurehycu08.png){.thumbnail}

Sélectionnez `Targets`{.action} dans le menu à gauche et cliquez sur `+ Add`{.action} en haut à droite de l'interface.

![Configure HYCU 09](images/03-configurehycu09.png){.thumbnail}

Saisissez les informations fournies par OVHcloud lors d'un abonnement à **High Performance Object Storage** ou **Standard Object Storage (SWIFT)** d'OVHcloud.

- **Name** : `Nom`{.action}
- **Size** : `Taille du stockage`{.action}
- **Type** : `AWS S3/Compatible`{.action}

Activez `ENABLE COMPRESSION`{.action} et faites défilez la fenêtre avec la `barre de défilement`{.action}. 

![Configure HYCU 10](images/03-configurehycu10.png){.thumbnail}.

Finalisez la saisie des informations:

- SERVICE ENDPOINT: `URL Stockage S3`{.action}
- BUCKET NAME: `Nom du bucket`{.action}
- ACCESS KEY ID: `Clés d'accès au bucket`{.action}
- SECRET ACCESS KEY `clesecrete`{.action}

Activez `TARGET ENCRYPTION`{.action} et cliquez sur `Save`{.action}.

![Configure HYCU 11](images/03-configurehycu11.png){.thumbnail}.

La cible est activée pour les sauvegardes du cluster NUTANIX.

![Configure HYCU 12](images/03-configurehycu12.png){.thumbnail}.

### Mettre à jour d'HYCU

HYCU fournie régulièrement des mises à jour voici le processus de mise à jours

#### Ajouter les sources d'une nouvelle version d'HYCU

Au travers du menu principal de **Prism Central** cliquez sur `Images`{.action} depuis le menu `Compute & Storage`{.action}

![Add Image HYCU for update 01](images/04-addimageforupdate01.png){.thumbnail}

Cliquez sur `Add Image`{.action}`.

![Add Image HYCU for update 02](images/04-addimageforupdate02.png){.thumbnail}

Sélectionnez `URL`{.action}`. 

Saisissez l'URL de l'image qcow2 de la dernière version d'HYCU comme par exemple. `https://download.hycu.com/ec/v4.3.1/hotfixes/4.3.1-616/hycu-4.3.1-616.qcow2`. 

Cliquez sur `Upload file`{.action}.

![Add Image HYCU for update 03](images/04-addimageforupdate03.png){.thumbnail}

Enlevez l'extension .qcow2 derrière le nom `hycu-'4.3.1-616`{.action} saisissez une `Description`{.action} et cliquez sur `Next`{.action}.

![Add Image HYCU for update 04](images/04-addimageforupdate04.png){.thumbnail}

Cliquez sur `Save`{.action} pour importer l'image et attendez que l'image soit importée.

![Add Image HYCU for update 05](images/04-addimageforupdate05.png){.thumbnail}

#### Lancer la mise à jour à partir d'HYCU

Connectez-vous avec un navigateur à l'adresse IP interne ou externe si une redirection a été faite à l'interface d'administration d'HYCU qui doit avoir cette forme **https://adresseiplocale:8443** ou **https://adressepublique:8443**

Allez dans la configuration d'HYCU en cliquant sur l'icône `Administration`{.action} en forme d'engrenage et choisir `Power Options`{.action}.

![Before Update 01](images/05-beforeupdate01.png){.thumbnail}
 
Sélectionnez sur `Suspend All`{.action}, cochez sur `AUTO RESUME AFTER`{.action} , laissez `1`{.action} à **Hours** et cliquez sur `Save`{.action}.

![Before Update 02](images/05-beforeupdate02.png){.thumbnail}

Revenez dans le menu de configuration en cliquant sur l'icône `Administration`{.action} en forme d'engrenage et cliquez sur `Software Upgrade`{.action}.

![Update 01](images/06-updatehycu01.png){.thumbnail}

Choisissez la `Dernière version`{.action} dans **AVAILABLE VERSIONS** et cliquez sur `Software Upgrade`{.action}.

![Update HYCU 02](images/06-updatehycu02.png){.thumbnail}

Cliquez sur `Yes`{.action} pour lancer le processus de mise à jour.

![Update HYCU 03](images/06-updatehycu03.png){.thumbnail}

la mise à jour éffectue une copie de la machine virtuelle avant de lancer la mise à jour en cas de défaillance de la mise à jour.

![Update HYCU 04](images/06-updatehycu04.png){.thumbnail}

Connectez-vous à l'interface d'administration d'HYCU. 

Allez dans les paramètres en cliquant sur l'icône en forme `d'engrenage`{.action} et cliquez sur `Power Options`{.action}.

![After Update 01](images/07-afterupdate01.png){.thumbnail}

Décochez `Suspend All`{.action} et cliquez sur `Save`{.action}.

![After Update 01](images/07-afterupdate02.png){.thumbnail}

### Configurer la sauvegarde

Restez dans l'interface HYCU.

#### Paramétrer les mots de passe de connexions au machines virtuelles

Connectez-vous sur le menu `Virtual Machines`{.action} à gauche et cliquez sur l'îcone `Credentials`{.action} en forme de Clé en haut à droite de l'interface.

![Add credential 01](images/08-addcredential01.png){.thumbnail}

Cliquez sur le signe `+`{.action}.

![Add credential 02](images/08-addcredential02.png){.thumbnail}

Saisissez ces valeurs:

- **NAME** : `Nom du stockage de mot de passe`{.action}.
- **PROTOCOL** : `AUTOMATIC`{.action}.
- **USERNAME** : `compte utilisateur de la machine virtuelle`{.action}.
- **PASSWORD** : `mot de passe`{.action}.

Cliquez sur `Save`{.action}.

![Add credential 03](images/08-addcredential03.png){.thumbnail}

Cliquez sur le signe `+`{.action} pour rajouter un autre compte.

![Add credential 04](images/08-addcredential04.png){.thumbnail}

Saisissez ces valeurs:

- **NAME** : `Nom du stockage de mot de passe`{.action}.
- **PROTOCOL** : `AUTOMATIC`{.action}.
- **USERNAME** : `compte utilisateur de la machine virtuelle`{.action}.
- **PASSWORD** `mot de passe`{.action}.

Cliquez sur `Save`{.action}.

![Add credential 05](images/08-addcredential05.png){.thumbnail}

Cliquez sur `Close`{.action}

Sélectionnez les machines virtuelles qui vont utiliser un mot de passe en cochant `la case à cocher`{.action} à droite de la machine virtuelle et cliquez sur l'icône `credentials`{.action} en forme de clé.

![Add vm to credential 01](images/08-addvmtocredential01.png){.thumbnail}

Sélectionnez dans NAME le `mot de passe`{.action} et cliquez sur `Assign`{.action}.

![Add vm to credential 02](images/08-addvmtocredential02.png){.thumbnail}

Sélectionnez une autre machine virtuelle qui va utiliser un mot de passe en cochant `la case à cocher`{.action} à droite de la machine virtuelle et cliquez sur l'icône `credentials`{.action} en forme de clé.

![Add vm to credential 03](images/08-addvmtocredential03.png){.thumbnail}

Sélectionnez dans **NAME** le `mot de passe`{.action} et cliquez sur `Assign`{.action}.

![Add vm to credential 04](images/08-addvmtocredential04.png){.thumbnail}

#### Créer des stratégies de sauvegardes

Allez dans le menu `policies`{.action} à gauche et cliquez en haut à droite sur l'icône avec le signe `+`{.action}.

![Create Policy ](images/09-createpolicy01.png){.thumbnail}

Saisissez ces informations:

- **NAME** : `HYCU VM`{.action}.
- **BACKUP EVERY** : `4 hours`{.action}.
- **BACKUP THRESHOLD** : `42`{.action}.

Laissez l'option `BACKUP`{.action} cochée et faites défiler la `barre de défilement`{.action} à droite.

![Create Policy for HYCU 01 ](images/09-createpolicyforhycuvm01.png){.thumbnail}

Cliquez sur `Save`{.action}.

![Create Policy for HYCU 02 ](images/09-createpolicyforhycuvm02.png){.thumbnail}

Cette stratégie est créée pour la machine virtuelle HYCU. 

Dans le menu `policies` cliquez en haut à droite sur l'icône avec le signe `+`{.action}.

![Create Policy ](images/09-createpolicy01.png){.thumbnail}

Choisissez le nom de la stratégie `BACKUP to S3 OVHcloud and local SNAPSHOTS`{.action} dans **NAME**

Cochez l'option `FAST RESTORE`{.action}, laissez l'option `BACKUP`{.action} cochée 

Modifier les `options de sauvegardes dans`{.action} dans  **Backup**, modifier la valeur **BACKUP THREESHOLD** avec `25`{.action}. Faites défiler la `barre de défilement`{.action} à droite.

![Create Policy for General Usage 01 ](images/10-createpolicyforgeneralusage01.png){.thumbnail}

Modifier l'option **Fast restore** avec vos paramètres et cliquez sur `Save`{.action}

![Create Policy for General Usage 02 ](images/10-createpolicyforgeneralusage02.png){.thumbnail}

Cette stratégie fait une sauvegarde sur le stockage S3 d'OVHcloud et aussi des snapshots à l'intérieur du cluster NUTANIX,  ce qui permet une plus grande rapidité de restauration.

#### Affecter des stratégies de sauvegardes

Sélectionnez toutes les machines virtuelles en cliquant en haut à gauche sur la `case à cocher`{.action} à coté de **NAME** et ensuite cliquez sur l'icône `Policies`{.action} en forme de bouclier en haut à droite pour affecter une stratégie à toutes les machines virtuelles.

![Exclude ALL VM for BACKUP](images/10-excludeallvmfrombackup01.png){.thumbnail}

Choisissez la stratégie `Exclude`{.action} et cliquez sur `Assign`{.action}

![Exclude ALL VM for BACKUP](images/10-excludeallvmfrombackup02.png){.thumbnail}

Sélectionnez la machines virtuelle HYCU en cliquant à gauche sur la `case à cocher`{.action} à coté de la machine virtuelle HYCU et ensuite cliquez sur l'icône `Policies`{.action} en forme de bouclier en haut à droite pour affecter une stratégie à cette machine virtuelle.

![Affect policy to HYCU VM 01](images/11-addhycuvmtopolicy01.png){.thumbnail}

Choisissez la stratégie `HYCU VM`{.action} et cliquez sur `Assign`{.action}

![Affect policy to HYCU VM 02](images/11-addhycuvmtopolicy02.png){.thumbnail}

Sélectionnez quatre machines virtuelles en cliquant à gauche sur les `cases à cocher`{.action} à coté de ces machines virtuelles ensuite cliquez sur l'icône `Policies`{.action} en forme de bouclier en haut à droite pour affecter une stratégie.

![Affect policy to HYCU VM 01](images/11-addsomevmtopolicy01.png){.thumbnail}

Choisissez la stratégie `BACKUP to S3 OVHcloud and local SNAPSHOTS`{.action} et cliquez sur `Assign`{.action}

![Affect policy to HYCU VM 02](images/11-addsomevmtopolicy02.png){.thumbnail}

### Contrôler l'état des sauvegardes

Allez dans le menu `Dasboard`{.action} à gauche pour afficher le tableau de bord et connaitre l'état de la sauvegarde.

![Display Dashboard](images/12-dashbord01.png){.thumbnail}

Allez dans le menu `Jobs`{.action} à gauche pour afficher l'état des travaux.

![Display JobState](images/12-jobstate01.png){.thumbnail}

### Restaurer à partir d'HYCU

Utilisez le menu `Virtual Machines`{.action} et cliquez sur  `une machine virtuelle sauvegardée`{.action}.

![Restore VM 01](images/13-restorevm01.png){.thumbnail}

#### Restaurer une machine virtuelle

Cliquez en bas à droite sur l'icône `Restore VM`{.action}.

![Restore VM 02](images/13-restorevm02.png){.thumbnail}

Sélectionnez `Restore VM`{.action} et cliquez sur `Next`{.action}.

![Restore VM 03](images/13-restorevm03.png){.thumbnail}

Laissez les options par défaut et cliquez sur `Restore`{.action}.

![Restore VM 04](images/13-restorevm04.png){.thumbnail}

La machine virtuelle va être entierement restaurée. 

#### Récupérer un fichier

Cliquez en bas à droite sur l'icône `Restore files`{.action}

![Restore FILES 01](images/15-restorefile01.png){.thumbnail}

Laissez `AUTOMATIC`{.action} dans RESTORE FROM et cliquez sur `Next`{.action}.

![Restore FILES 02](images/15-restorefile02.png){.thumbnail}

Sélectionnez `le fichier à restaurer`{.action} et cliquez sur `Next`{.action}.

![Restore FILES 03](images/15-restorefile03.png){.thumbnail}

Laissez les options par défaut et cliquez sur `Next`{.action}.

![Restore FILES 04](images/15-restorefile04.png){.thumbnail}

Choisissez `Rename restored`{.action} et cliquez sur `Restore`{.action}.

![Restore FILES 05](images/15-restorefile05.png){.thumbnail}

Le fichier restauré sera dans la machine virtuelle avec un nouveau nom pour ne pas supprimer l'ancien.

#### Restaurer une application 

Cliquez sur le menu `Applications`{.action} ensuite choisissez une application à restaurer en cliquant sur une `application`{.action} en dessous de **Name**.

![Restore Application 01](images/16-restoreapplication01.png){.thumbnail}

Cliquez sur l'icône `Restore`{.action} en bas à droite.

![Restore Application 02](images/16-restoreapplication02.png){.thumbnail}

Sélectionnez `Restore databases`{.action} et cliquez sur `Next`{.action}.

![Restore Application 03](images/16-restoreapplication03.png){.thumbnail}

Choisissez `Une base de données`{.action} et cliquez sur `Next`{.action}.

![Restore Application 04](images/16-restoreapplication04.png){.thumbnail}

Désactivez `OVERWRITE EXISTING DATABASES`{.action} et cliquez sur `Restore`{.action}.

![Restore Application 05](images/16-restoreapplication05.png){.thumbnail}

La base de données sera restaurée dans une nouvelle base de données.

## Aller plus loin

[Hyper-convergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/)

[Page d'accueil HYCU](https://www.hycu.com/)

[Documentation HYCU](https://support.hycu.com/hc/en-us/sections/115001018365-Product-documentation)

[Solution OVHcloud Object Storage](https://www.ovhcloud.com/en/public-cloud/object-storage/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

