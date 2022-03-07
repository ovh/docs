---
title: Gestion des ordinateur virtuels 
slug: virtual-machine-management
excerpt: "Gestion des Ordinateurs virtuels dans Prism Central"
section: Premiers pas
order: 06
---

**Dernière mise à jour le 28/02/2022**

## Objectif

Connaitre la gestion des ordinateurs virtuels dans un cluster Nutanix et être capable de créer, modifier et migrer un ordinateur virtuel.


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

Le système Nutanix utilise les mêmes interfaces pour gérer le stockage et la virtualisation, il peut être installé avec plusieurs hyperviseurs (*Hyperv, Vmware Esxi , Ahv*). *Ahv* est fourni avec Nutanix sans devoir acheter de licences supplémentaires pour l'hyperviseur. 

L'offre d'OVHcloud est fournie avec l'hyperviseur *Ahv*.

*Ahv* permet :

* L'utilisation d'ordinateurs virtuels sous Windows et Linux.
* La migration d'ordinateurs virtuels d'un nœud à l'autre d'un cluster.
* La micro-segmentation des VM au travers de **Flow**. 

L'outil **Move** permet de migrer facilement des VM existantes dans un autre environnement virtuel ou non vers Nutanix et son hyperviseur *Ahv*.


Pour plus de détails sur *Ahv* reportez-vous à la section « [Aller plus loin](#gofurther) » de ce guide.

## En pratique

Dans les cas pratiques nous allons voir comment créer un ordinateur virtuel pour Windows, modifier les ressources de cet ordinateur, installer le système d'exploitation Windows et migrer un ordinateur virtuel d'un nœud à l'autre du cluster.


### Création d'une Ordinateur Virtuel un système d'exploitation Windows

L'installation d'un ordinateur virtuel sous Windows nécessite un paramétrage particulier car Microsoft ne fournit pas le pilote pour le contrôleur de disques.

Création d'un ordinateur virtuel pour permettant l'installation de  Windows server 2022

Dans **Prism Central** dans le menu de gauche dépliez `Compute & Storage`{.action} et cliquez sur `VMs`{.action}

![Tableau de Bord Prism Central - Menu VMs](images/PrismCentralDashBooardWithVMMenu.PNG){.thumbnail}

Cliquez sur `Create VM`{.action}

![Tableau de Bord Prism Central - Gestion des VMs ](images/PrismCentralDashVmDashBoard.PNG){.thumbnail}

Saisissez un nom dans `Name`{.action}, Choisissez les options dans dans `VM Properties`{.action} et cliquez sur `Next`{.action}

![Création d'un Ordinateur virtuel - Etape 1](images/CreateVM01.PNG){.thumbnail}

Ajout d'un disques système.

Cliquez sur `Attach Disk`{.action}

![Création d'un Ordinateur virtuel - Etape 2](images/CreateVM02.PNG){.thumbnail}

Saisissez 60 `Capacity`{.action} et cliquez sur `Save`{.action} pour créer un disque de 60 Go.

![Création d'un Ordinateur virtuel - Etape 3](images/CreateVM03.PNG){.thumbnail}

Ajout de 'image ISO de l'installation de Windows Server 2022.

L'image doit être importée avant l'utilisation.

Pour plus de détails sur *L'importation d'images* reportez-vous à la section « [Aller plus loin](#gofurther)

Cliquez sur `Attach Disk`{.action}.

![Création d'un Ordinateur virtuel - Etape 4](images/CreateVM04.PNG){.thumbnail}

Changez ces paramètres `Type`{.action} en **CD-ROM** `Operation`{.action} en **Clone from Image** , `Image`{.action} en **WS2022EN.ISO**.

Ajout de l'image ISO des pilotes spécifiques à *Ahv* notamment le pilote du contrôleur de disques. Cette image aussi doit être importée.

Cliquez sur `Save`{.action}

![Création d'un Ordinateur virtuel - Etape 5](images/CreateVM05.PNG){.thumbnail}

Cliquez `Attach Disk`{.action}

![Création d'un Ordinateur virtuel - Etape 6](images/CreateVM06.PNG){.thumbnail}

Changez ces paramètres `Type`{.action} en **CD-ROM** `Operation`{.action} en **Clone from Image** , `Image`{.action} en **virtio-win-0.1.126.iso**

Cliquez sur `Save`{.action}

![Création d'un Ordinateur virtuel - Etape 7](images/CreateVM07.PNG){.thumbnail}

Configuration du réseau.

Laissez tel quel et Cliquez sur `Attach Subnet`{.action}.

![Création d'un Ordinateur virtuel - Etape 8](images/CreateVM08.PNG){.thumbnail}

Cliquez sur `Save`{.action}.

![Création d'un Ordinateur virtuel - Etape 9](images/CreateVM09.PNG){.thumbnail}

Cliquez sur `Next`{.action}.

![Création d'un Ordinateur virtuel - Etape 10](images/CreateVM10.PNG){.thumbnail}

Dans timezone choisissez le fuseau horaire de votre pays. `zone`{.action} et cliquez sur `Next`{.action}.

![Création d'un Ordinateur virtuel - Etape 11](images/CreateVM11.PNG){.thumbnail}

Cliquez sur `Create VM`{.action}

![Création d'un Ordinateur virtuel - Etape 12](images/CreateVM12.PNG){.thumbnail}

L'ordinateur virtuel nouvellement créé apparait dans le tableau de bord.

![Tableau de bord VMs - VM Créé](images/CreateVM13.PNG){.thumbnail}.
 
### Installation de Windows Server 2022

Sélection de l'ordinateur virtuel sur lequel Windows Server 2022 sera installé. 

Cliquez sur `Case à cocher à coté de l'ordinateur virtuel à gauche`{.action}.

![Installation - WS2022 - Lancement](images/InstallWS2022-01.PNG){.thumbnail}

Démarrage de l'ordinateur virtuel.

Cliquez sur `Menu action`{.action} et Cliquez sur `Power ON`{.action}

![Installation - WS2022 - Démarrage ](images/InstallWS2022-02.PNG){.thumbnail}

Lancement de la console.

Cliquez sur `Menu action`{.action} et Cliquez sur `Launch Console`{.action}

![Installation - WS2022 - Connexion à l'interface ](images/InstallWS2022-03.PNG){.thumbnail}

Lancement de l'installation .

Cliquez sur `Next`{.action}

![Installation - WS2022 - Etape1](images/InstallWS2022-04.PNG){.thumbnail}

Cliquez sur `Install now`{.action}.

![Installation - WS2022 - Etape2](images/InstallWS2022-05.PNG){.thumbnail}

Cliquez sur `Windows Server 2022 Standard (Desktop Experience)`{.action} 

Ensuite Cliquez sur `Next`{.action}.

![Installation - WS2022- Etape3](images/InstallWS2022-06.PNG){.thumbnail}

Séléctionnez `I accept etc...`{.action} et cliquez sur `Next`{.action}.

![Installation - WS2022](images/InstallWS2022-07.PNG){.thumbnail}

Cliquez sur `Load driver`{.action}.

![Installation - WS2022- Etape4](images/InstallWS2022-08.PNG){.thumbnail}

Cliquez sur `Browse`{.action}.

![Installation - WS2022- Etape5](images/InstallWS2022-09.PNG){.thumbnail}

Selectionnez le bon dossier `e:\vioscsi\2k16\amd64`et cliquez sur `OK`{.action}.

![Installation - WS2022- Etape5](images/InstallWS2022-10.PNG){.thumbnail}

Cliquer sur `Next`{.action}.

![Installation - WS2022- Etape6](images/InstallWS2022-11.PNG){.thumbnail}

Le disque de 60 Gb apparait, cliquez sur `Next`{.action}.

![Installation - WS2022- Etape6](images/InstallWS2022-12.PNG){.thumbnail}

Attendre la fin de l'installation.

![Installation - WS2022- Etape7](images/InstallWS2022-13.PNG){.thumbnail}

![Installation - WS2022- Etape8](images/InstallWS2022-14.PNG){.thumbnail}

![Installation - WS2022- Etape9](images/InstallWS2022-15.PNG){.thumbnail}

Saisissez le mot de passe dans `Password`{.action} et `Reenter password`{.action}.

Ensuite Cliquez sur `Finish`{.action}.

![Installation - WS2022- Etape9](images/InstallWS2022-16.PNG){.thumbnail}

Allez dans le gestionnaire de périphérique pour installer le pilote de la carte réseau et un pilote système spécifique à **Ahv**.

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

Maintenant que l'installation du système d'exploitation et des pilotes spécifiques à **Ahv** est terminée il faut installer les **Ngt (Nutanix Guest TOOLS)** qui permettent une meilleure intéraction avec Nutanix notamment au niveau des sauvegardes et des Snapshots.

Avant de lancer l'installation des **Ngt** s'assurer que sur l'ordinateur virtuel concerné un lecteur de CDROM est déconnecté.

Lancez la console de l'ordinateur virtuel et Faites un `click droit sur un lecteur de CDROM`{.action} et Cliquez sur `Eject`{.action}.

![NGT Installation 1](images/Ngt-Installation01.png){.thumbnail}

Revenez dans Prism Central `Selectionnez l'ordinateur virtuel`{.action}.

![NGT Installation 2](images/Ngt-Installation02.png){.thumbnail}

Cliquez dans le menu `Actions`{.action} et cliquez `Install NGT`{.action}.

![NGT Installation 3](images/Ngt-Installation03.png){.thumbnail}

Dans la fenêtre Install NGT cliquez sur `Confirm & Enter Password`{.action}.

![NGT Installation 4](images/Ngt-Installation04.png){.thumbnail}

Dans la deuxième Fenêtre Install NGT cliquez sur `Skip and Mount`{.action}.

![NGT Installation 5](images/Ngt-Installation05.png){.thumbnail}

Revenez dans la console de l'ordinateur virtuel et faites `click droit sur un lecteur de CDROM`{.action}.

Choisir `Install Nutanix Guest Tools`{.action}.

![NGT Installation 6](images/Ngt-Installation06.png){.thumbnail}

Choisir `I agree to the Etc...`{.action} et cliquez sur `Install`{.action}.

![NGT Installation 7](images/Ngt-Installation07.png){.thumbnail}

L'installation se lance.

![NGT Installation 8](images/Ngt-Installation08.png){.thumbnail}

A la fin de l'installation cliquez sur `Close`{.action}.

![NGT Installation 9](images/Ngt-Installation09.png){.thumbnail}

L'installation d'un ordinateur virtuel sous Windows est entierement terminée.

### Migration d'un ordinateur virtuel.

La migration d'un ordinateur virtuel consiste à déplacer une ordinateur virtuel à chaud d'un nœud à l'autre d'un cluster.

Dans la gestion des ordinateurs virtuels de Prism Central cliquez sur `WS2022N`{.action}.

![Migrate - VM01](images/MigrateVM01.png){.thumbnail}

Dans la nouvelle fenêtre,  à coté Host le nom du nœud sur lequel l'ordinateur virtuel fonctionne actuellement est affiché comme ici *NTNX-221060034-A*

 ![Migrate - VM02](images/MigrateVM02.png){.thumbnail}

Cliquez dans le menu `More`{.action} et choisissez `Migrate`{.action}

 ![Migrate - VM03](images/MigrateVM03.png){.thumbnail}

Choisissez un nœud dans `Host`{.action}

![Migrate - VM04](images/MigrateVM04.png){.thumbnail} et cliquez sur `Migrate`{.action}

Lorque la migration sera terminée, le nom du nœud aura changé dans Host.

![Migrate - VM05](images/MigrateVM05.png){.thumbnail} et cliquez sur `Migrate`{.action}












## Aller plus loin <a name="gofurther"></a>

[Présentation d'un cluster Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/)

[Importation d'images dans Nutanix](https://docs.ovh.com/fr/nutanix/image-import)

[Documentation Nutanix sur Ahv](https://portal.nutanix.com/page/documents/details?targetId=AHV-Admin-Guide-v5_20:AHV-Admin-Guide-v5_20)

[Les licences Nutanix](https://www.nutanix.com/products/software-options)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.