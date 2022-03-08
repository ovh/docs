---
title: Gestion des ordinateurs virtuels 
slug: virtual-machine-management
excerpt: "Decouvrez la gestion des ordinateurs virtuels dans Prism Central"
section: Premiers pas
order: 06
---

**Dernière mise à jour le 28/02/2022**

## Objectif

Connaitre la gestion des ordinateurs virtuels dans un cluster Nutanix et être capable de créer et de migrer un ordinateur virtuel.


> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>
> Certains logiciels nécessitent une licence comme les produits Microsoft il faudra alors s'assurer que tous les systèmes et logiciels installés possèdent ces licences.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté à Prism Central sur le cluster

## Présentation de la gestion des ordinateurs virtuels dans Prism Central

Le système Nutanix utilise les mêmes interfaces pour gérer le stockage et la virtualisation, il peut être installé avec plusieurs hyperviseurs (**Hyperv, Vmware Esxi , AHV**). **AHV** est fourni avec Nutanix sans devoir acheter de licences supplémentaires pour l'hyperviseur. 

L'offre d'OVHcloud est fournie avec l'hyperviseur **AHV**.

**AHV** permet entre autre de :

* L'utilisation d'ordinateurs virtuels sous Windows et Linux.
* La migration d'ordinateurs virtuels d'un nœud à l'autre d'un cluster.
* La micro-segmentation et la sécurisation du réseau entre ordinateurs virtuels en utilisant le logiciel **Flow**. 

L'outil **Move** permet de migrer facilement des ordinateurs virtuels existants d'autres environnements (**Esxi, HyperV & AWS**) vers Nutanix et son hyperviseur **AHV**.

Pour plus de détails sur **AHV** reportez-vous à la section « [Aller plus loin](#gofurther) » de ce guide.

## En pratique

les cas pratiques montrent la création d'un ordinateur virtuel sous Windows Serveur 2022 et de la migration d'un ordinateur virtuel.

### Création d'une Ordinateur virtuel pour un système d'exploitation Windows 2022

L'installation d'un ordinateur virtuel sous Windows Server 2022 nécessite un paramétrage particulier car Microsoft ne fournit pas le pilote pour le contrôleur de disques de l'hyperviseur **AHV**.

#### Création de l'ordinateur virtuel Windows Server 2022
 
Dans **Prism Central** dans le menu de gauche dépliez `Compute & Storage`{.action} et cliquez sur `VMs`{.action}

![Tableau de Bord Prism Central - Menu VMs](images/PrismCentralDashBooardWithVMMenu.PNG){.thumbnail}

Cliquez sur `Create VM`{.action}

![Tableau de Bord Prism Central - Gestion des VMs ](images/PrismCentralDashVmDashBoard.PNG){.thumbnail}

Saisissez un nom dans `Name`{.action}, Choisissez les options dans dans `VM Properties`{.action} et cliquez sur `Next`{.action}

![Création d'un Ordinateur virtuel - Etape 1](images/CreateVM01.PNG){.thumbnail}

Ajout d'un disque système.

Cliquez sur `Attach Disk`{.action}

![Création d'un Ordinateur virtuel - Etape 2](images/CreateVM02.PNG){.thumbnail}

Saisissez dans capacity `60`{.action} et cliquez sur `Save`{.action} pour créer un disque de 60 Go.

![Création d'un Ordinateur virtuel - Etape 3](images/CreateVM03.PNG){.thumbnail}

Ajout de 'image ISO de l'installation de Windows Server 2022.

L'image doit être importée avant d'être utilisable dans un nouvel Ordinateur Virtuel.

Pour plus de détails sur *L'importation d'images* reportez-vous à la section « [Aller plus loin](#gofurther).


Cliquez sur `Attach Disk`{.action}.

![Création d'un Ordinateur virtuel - Etape 4](images/CreateVM04.PNG){.thumbnail}


Changez ces paramètres `Type`{.action} en **CD-ROM** `Operation`{.action} en **Clone from Image** , `Image`{.action} en **WS2022EN.ISO**.

et cliquez sur `Save`{.action}.

![Création d'un Ordinateur virtuel - Etape 5](images/CreateVM05.PNG){.thumbnail}

Ajout de l'image ISO contenant les pilotes spécifiques à **AHV** notamment le pilote du contrôleur de disques. Cette image aussi doit être importée. Elle est disponible sur le site Internet de Nutanix si l'on a un compte client.

Cliquez `Attach Disk`{.action}.

![Création d'un Ordinateur virtuel - Etape 6](images/CreateVM06.PNG){.thumbnail}

Changez ces paramètres `Type`{.action} en **CD-ROM** `Operation`{.action} en **Clone from Image** , `Image`{.action} en **virtio-win-0.1.126.iso**.

Cliquez sur `Save`{.action}

![Création d'un Ordinateur virtuel - Etape 7](images/CreateVM07.PNG){.thumbnail}

Configuration du réseau.

Cliquez sur `Attach Subnet`{.action}.

![Création d'un Ordinateur virtuel - Etape 8](images/CreateVM08.PNG){.thumbnail}

Laissez tel quel et cliquez sur `Save`{.action}.


![Création d'un Ordinateur virtuel - Etape 9](images/CreateVM09.PNG){.thumbnail}

Cliquez sur `Next`{.action}.


![Création d'un Ordinateur virtuel - Etape 10](images/CreateVM10.PNG){.thumbnail}

Choisissez le fuseau horaire de votre pays. `zone`{.action} et cliquez sur `Next`{.action}.

![Création d'un Ordinateur virtuel - Etape 11](images/CreateVM11.PNG){.thumbnail}

Cliquez sur `Create VM`{.action}

![Création d'un Ordinateur virtuel - Etape 12](images/CreateVM12.PNG){.thumbnail}

L'ordinateur virtuel nouvellement créé apparait dans le tableau de bord.

![Tableau de bord VMs - VM Créé](images/CreateVM13.PNG){.thumbnail}.
 
#### Installation de Windows Server 2022

Sélectionnez l'ordinateur virtuel sur lequel Windows Server 2022. 

Cliquez sur la `Case à cocher à coté de l'ordinateur virtuel à gauche`{.action}.

![Installation - WS2022 - Lancement](images/InstallWS2022-01.PNG){.thumbnail}

Démarrez l'ordinateur virtuel.

Cliquez sur `Menu action`{.action} et Cliquez sur `Power ON`{.action}

![Installation - WS2022 - Démarrage ](images/InstallWS2022-02.PNG){.thumbnail}

Lancez la console.

Cliquez sur `Menu action`{.action} et Cliquez sur `Launch Console`{.action}

![Installation - WS2022 - Connexion à l'interface ](images/InstallWS2022-03.PNG){.thumbnail}

Commencez l'installation.

Choisissez vos paramètres régionaux et Cliquez sur `Next`{.action}

![Installation - WS2022 - Etape1](images/InstallWS2022-04.PNG){.thumbnail}

Cliquez sur `Install now`{.action}.

![Installation - WS2022 - Etape2](images/InstallWS2022-05.PNG){.thumbnail}

Cliquez sur `Windows Server 2022 Standard (Desktop Experience)`{.action} 

Ensuite Cliquez sur `Next`{.action}.

![Installation - WS2022- Etape3](images/InstallWS2022-06.PNG){.thumbnail}

Sélectionnez `I accept etc...`{.action} et cliquez sur `Next`{.action}.

![Installation - WS2022](images/InstallWS2022-07.PNG){.thumbnail}

Cliquez sur `Load driver`{.action}.

![Installation - WS2022- Etape4](images/InstallWS2022-08.PNG){.thumbnail}

Cliquez sur `Browse`{.action}.

![Installation - WS2022- Etape5](images/InstallWS2022-09.PNG){.thumbnail}

Selectionnez le bon dossier `e:\vioscsi\2k16\amd64`et cliquez sur `OK`{.action}.

![Installation - WS2022- Etape5](images/InstallWS2022-10.PNG){.thumbnail}

Selectionnnez `Red Hat VirtIO SCSI etc..`{.action}Cliquez sur `Next`{.action}.

![Installation - WS2022- Etape6](images/InstallWS2022-11.PNG){.thumbnail}

Le disque de 60 Gb apparait, cliquez sur `Next`{.action}.

![Installation - WS2022- Etape6](images/InstallWS2022-12.PNG){.thumbnail}

Attendez la fin de l'installation.

![Installation - WS2022- Etape7](images/InstallWS2022-13.PNG){.thumbnail}

![Installation - WS2022- Etape8](images/InstallWS2022-14.PNG){.thumbnail}

![Installation - WS2022- Etape9](images/InstallWS2022-15.PNG){.thumbnail}

Saisissez le mot de passe dans `Password`{.action} et `Reenter password`{.action}.

Ensuite Cliquez sur `Finish`{.action}.

![Installation - WS2022- Etape9](images/InstallWS2022-16.PNG){.thumbnail}

Allez dans le gestionnaire de périphériques de Windows pour installer le pilote de la carte réseau et un pilote système spécifique à **AHV**.

Faites `Clic droit sur Ethernet Controller`{.action} et cliquez sur `Update Driver`{.action}.

![Post Installation - WS2022- Pilotes Etape 1](images/InstallWS2022-17.PNG){.thumbnail}

Selectionnez le dossier **E:\NetKVM\2k16\amd64** et cliquez sur `Next`{.action}.

![Post Installation - WS2022- Pilotes Etape 3](images/InstallWS2022-18.PNG){.thumbnail}

Cliquez sur `Install`{.action}.

![Post Installation - WS2022- Pilotes Etape 4](images/InstallWS2022-19.PNG){.thumbnail}

Faites `Clic droit sur PCI Device dans Other Devices`{.action} et cliquez sur `Update Driver`{.action}.

![Post Installation - WS2022- Pilotes Etape 2](images/InstallWS2022-20.PNG){.thumbnail}

Selectionnez le dossier **E:\Balloon\2k16\amd64** et cliquez sur `Next`{.action}.

![Post Installation - WS2022- Pilotes Etape 3](images/InstallWS2022-21.PNG){.thumbnail}


Pour finir l'installation Cliquez sur `Close`{.action}.


![Post Installation - WS2022- Pilotes Etape 4](images/InstallWS2022-22.PNG){.thumbnail}

Installation des **NGT (Nutanix Guest TOOLS)** qui permettent une meilleure intéraction avec Nutanix notamment au niveau des sauvegardes et des Snapshots.

Lancez la console de l'ordinateur virtuel et Faites un `click droit sur un lecteur de CDROM`{.action} et Cliquez sur `Eject`{.action}.

![NGT Installation 1](images/Ngt-Installation01.png){.thumbnail}

Revenez dans Prism Central `Selectionnez l'ordinateur virtuel`{.action}.

![NGT Installation 2](images/Ngt-Installation02.png){.thumbnail}


Cliquez dans le menu `Actions`{.action} et cliquez `Install NGT`{.action}.

![NGT Installation 3](images/Ngt-Installation03.png){.thumbnail}

Cliquez sur `Confirm & Enter Password`{.action}. 

![NGT Installation 4](images/Ngt-Installation04.png){.thumbnail}

Cliquez sur `Skip and Mount`{.action}.

![NGT Installation 5](images/Ngt-Installation05.png){.thumbnail}

Revenez dans la console de l'ordinateur virtuel et faites `click droit le lecteur de CDROM`{.action}. contenant les **NGT (Nutanix Guest Tools)**

Choisissez `Install Nutanix Guest Tools`{.action}.

![NGT Installation 6](images/Ngt-Installation06.png){.thumbnail}

Choisissez `I agree to the Etc...`{.action} et cliquez sur `Install`{.action}.

![NGT Installation 7](images/Ngt-Installation07.png){.thumbnail}

L'installation se lance.

![NGT Installation 8](images/Ngt-Installation08.png){.thumbnail}

A la fin de l'installation cliquez sur `Close`{.action}.

![NGT Installation 9](images/Ngt-Installation09.png){.thumbnail}

L'installation d'un ordinateur virtuel sous Windows est entierement terminée.

### Migration d'un ordinateur virtuel.

La migration d'un ordinateur virtuel consiste à déplacer une ordinateur virtuel à chaud d'un nœud à l'autre d'un cluster. 

Si l'on a plusieurs clusters et les bonnes licences il est possible de faire de la migration d'un cluster à l'autre aussi. 

Cette documentation ne montre qu'un migration à l'intérieur du même cluster.

Dans la gestion des ordinateurs virtuels de Prism Central cliquez sur `WS2022N`{.action}.

![Migrate - VM01](images/MigrateVM01.PNG){.thumbnail}

contrôler sur quel nœud l'ordinateur fonctionne actuellement  il est affiché à coté de Host au milieu de la fenêtre

 ![Migrate - VM02](images/MigrateVM02.PNG){.thumbnail}

Cliquez dans le menu `More`{.action} et choisissez `Migrate`{.action}

 ![Migrate - VM03](images/MigrateVM03.PNG){.thumbnail}

Choisissez un nœud dans `Host`{.action}

![Migrate - VM04](images/MigrateVM04.PNG){.thumbnail}

le nom du nœud est changé dans Host si la  migration s'est bien terminée

![Migrate - VM05](images/MigrateVM05.PNG){.thumbnail}

## Aller plus loin <a name="gofurther"></a>

[Présentation d'un cluster Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/)

[Importation d'images dans Nutanix](https://docs.ovh.com/fr/nutanix/image-import/)

[Documentation Nutanix sur AHV](https://portal.nutanix.com/page/documents/details?targetId=AHV-Admin-Guide-v5_20:AHV-Admin-Guide-v5_20)

[Les licences Nutanix](https://www.nutanix.com/products/software-options)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.