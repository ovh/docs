---
title: Migration vers Nutanix au travers de MOVE
slug: move-to-nutanix
excerpt: 'Installer, configurer et utiliser l'outil de migration MOVE'
section: "Utilisation avancée"
order: 01
---

**Dernière mise à jour le 30/03/2022**

## Objectif

Nutanix fourni un outil qui se nomme **Nutanix MOVE** et qui permet de faire des migration depuis un autre environnement vers **AHV*


**Ce guide a vous explique comment éffectuer une migration avec ce logiciel**.


> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>
> Certaines options comme l'utilisation de la compression ou de la déduplication nécessitent des licences particulières fournies par Nutanix au travers d'OVHcloud, nous vous invitons à vous renseigner auprès du service commercial OVHcloud pour plus d'informations.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur le cluster via Prism Central
- Avoir une connexion à un environnement autre que Nutanix 

## Présentation de **Nutanix MOVE**

**Nutanix Move** est un outil qui permet d'effectuer des migrations de machines virtuelles depuis **VMware ESXI**, **Hyper**, **Azure** et **AWS** vers **AHV** il peut aussi être utilisé pour faire des migrations de Nutanix **AHV** vers **AWS**.

Ce logiciel se présente comme une machine virtuelle dont les sources sont disponibles sur le site de Nutanix avec un compte client.

Pour une meilleure utilisation il est conseillé d'installer **Nutanix Move** au plus près de la destination.

le logiciel **Nutanix Move** est le seul à communiquer entre la source et la destination.

> [!warning]
> Il est fortement déconseillé d'utiliser **Nutanix Move** Avec des machines virtuelles sous Windows Server exécutant **Active Directory** ou **Microsoft Exchange** il est plus judicieux de faire une migration selon les préconisations de Microsoft 
> Pour les machines virtuelles qui utilisent des bases de données sous **Microsoft SQL** lors de finalisation d'un migration il est préferable d'avoir le service de la base de données stoppé.
> IL faut vérifier la compatibilité le machine virtuelle d'origine avec l'environnement Nutanix de destination.

## En pratique

Nous allons voir comment effectuer une migration entre un environnement distant sur HYPERV et un environnement NUTANIX OVHCloud.

La source et la destination sont sur deux réseaux privés interconnectés au travers d'un VPN **IPSEC**.

### Préparation des machines virtuelles d'origines avant migration.

Connectez vous sur ce site pour vérifier la comptabilité des machines sources avec le futur environnement sous Nutanix

[Matrice de comptatibilité Nutanix](https://portal.nutanix.com/page/documents/compatibility-interoperability-matrix/guestos)

#### Spécificité des machines virtuelles sous LINUNX

Si la machine virtuelle utilise un noyau avec une version minimale en 2.6.X il n'est pas nécessaire de préparer la machine virtuelle source elle peuvent démarrer sur le cluster NUTANIX avec ce pilote de disques. Pour les machine virtuelles plus anciennes il faut faire quelques opérations particulières.

#### Particularité de l'environnement Microsoft

Microsoft ne fourni pas les pilotes **VIRTIO** pour les pilotes de la carte SCSI et de la carte réseau il faut les installer au préalable avant de faire une migration l'outil **Nutanix Move**

> [!primary]
> Microsoft Windows 2008 n'est plus supporté ni par Microsoft ni par Nutanix mais néanmoins il est possible d'installer des pilotes VIRTIO anciens et de tenter une migration.
>

Connectez vous sur le site de Nutanix avec un compte client pour télécharger les pilotes VIRTIO [Lien de téléchargement des pilotes VIRTIO](https://portal.nutanix.com/page/downloads?product=ahv&bit=VirtIO)

Saisissez votre nom d'utilisateur dans `Emails`, votre mot de passe dans `Passwords` et cliquez sur `Log In`{.action} 

![Download Virtio](images/DownloadVirtio01.PNG)

Sur le portail Nutanix téléchargez la version qui vous convient en cliquant sur un des `Downloads`{.action}

Nous allons prendre le pilote pour **Amd64** 

![Download Virtio](images/DownloadVirtio02.PNG)

A partir d'un ordinateur source sous Windows double-cliquez sur `Nutanix-VirtIO-1.1.7-amd64`{.action}

![Installing guest driver 01](images/VirtGuestInstall01.PNG)

Cliquez sur `I accept the terms in the license Agreement`{.action} ainsi que sur `Install`{.action}

![Installing guest driver 02](images/VirtGuestInstall02.PNG)

Cliquez sur `Finish`{.action} pour terminer l'installation sans avoir à redémarrer l'ordinateur source.

### Installation de MOVE sur le Cluster NUTANIX.

#### Téléchargement et importation des sources. 

Récupérez le fichier au format **qcow2** sur ce site [Téléchargement MOVE](https://portal.nutanix.com/page/downloads?product=move)

Connectez-vous avec un compte enregistré chez Nutanix

![Login Portal](images/PortalLogin.PNG)

cliquez sur `Downloads`{.action} à droite de Move QCOW2 file for AHV

![Download Move](images/DownloadMove.PNG)

Importez l'image téléchargée de Move dans Nutanix. Pour plus d'information sur l'importation d'images cliquez sur ce lien [Importation d'images](https://docs.ovh.com/fr/nutanix/image-import/).

#### Installation de la machine virtuelle **Move**

Créez une machine virtuelle à partir de de l'image Move

Depuis Prism Central, ouvrez le menu principal via le bouton en haut à gauche.

![Move Install 01](images/MoveInstall01.PNG)

Cliquez dans le menu sur `VMs`{.action}

![Move Install 02](images/MoveInstall02.PNG)

Cliquez sur `Create VM`{.action}

![Move Install 03](images/MoveInstall03.PNG)

Saisissez **Nutanix MOVE** dans `Name`{.action}  

Choisissez ces options **2 vCPU**, **2 Cores** et **8 GB** dans `VM Properties`{.action} et Cliquez sur `Next`{.action}

![Move Install 04](images/MoveInstall05.PNG)

Cliquez sur `Attach Disk`{.action}

![Move Install 05](images/MoveInstall05.PNG)

Cliquez sur `Attach Disk`{.action}

![Move Install 06](images/MoveInstall05.PNG)

Choississez ces options **Disk**, **Clone from Image** et **move-4.3.0.qcow2**  ensuite cliquez sur `Save`{.action}

Cliquez sur `Attach to Subnet`{.action}

![Move Install 07](images/MoveInstall07.PNG)

Choisissez le réseau dans `Subnet`, vérifiez qu'il soit bien connecté dans `Network Connection State` et cliquez sur `Save`{.action}

![Move Install 08](images/MoveInstall08.PNG)

Cliquez sur `Next`{.action} 

![Move Install 09](images/MoveInstall09.PNG)

Laissez les options de timezone par défaut et cliquez sur `Next`{.action}

![Move Install 10](images/MoveInstall10.PNG)

Cliquez sur sur `Create VM`{.action} pour finaliser l'installation de la machine virtuelle **Nutanix Move**

![Move Install 11](images/MoveInstall11.PNG)

Sélectionnez la machine virtuelle **Nutanix Move** et cliquez sur le menu `Actions`{.action}

![Move Install 12](images/MoveInstall12.PNG)

Cliquez sur `Power On`{.action} dans le menu action pour démarrer la machine virtuelle.

![Move Install 13](images/MoveInstall13.PNG)

La machine virtuelle est démarrée et l'on obtient une adresse IP si un serveur **DHCP** est opérationnel sur ce réseau.

![Move Install 14](images/MoveInstall13.PNG)

Cette installation de Nutanix Move se fait sur un réseau ou il y'a un serveur DHCP mais il est possible de configurer la machine virtuelle sur un réseau sans serveur **DHCP** 

Pour plus de détails sur **Nutanix MOVE**, reportez-vous à la section « [Aller plus loin](#gofurther) » de ce guide.

### Configuration de **Nutanix Move** 

#### Connexion à l'interface WEB et création d'environnements pour la migration

Connectez-vous à l'adresse IP de la machine virtuelle **Nutanix Move** au travers d'un navigateur WEB en HTTPS comme ceci **https://addresseipnutanixmove/**

Cliquez sur `I have read and agree to terms and conditions`{.action} suivi de  `Continue`{.action} pour accepter la licence

![MoveConfigure 01](images/MoveConfigure01.PNG)

Cliquez sur `OK`{.action} pour poursuivre

![MoveConfigure 02](images/MoveConfigure02.PNG)

Choisissez un mot de passe dans `Enter new Password`{.action} , confirmez le dans `Re-Enter new Password`{.action} et cliquez sur `Set Password`{.action} pour valider la création du mot de passe de Nutanix Move.

![MoveConfigure 03](images/MoveConfigure03.PNG)

Saisissez le mot de passe dans `Password`{.action} et cliquez sur `Log In`{.action} pour se connecter à l'interface WEB de **Nutanix MOVE**.

![MoveConfigure 04](images/MoveConfigure04.PNG)

Cliquez sur `Add Environment`{.action}

![MoveConfigure 05](images/MoveConfigure05.PNG)

Choisissez `Nutanix AOS`{.action} 

![MoveConfigure 06](images/MoveConfigure06.PNG)

Saisissez ces informations **PRISM-CENTRAL-DESTINATION** dans `Environment Name`{.action}, l'adresse IP privée de **Prism Central** dans `Nutanix Environment`{.action}, Un compte d'administration de **Prism Central** dans `Username `{.action}, le mot de passe de compte dans `Password`{.action} et cliquez sur `ADD`{.action} pour ajouter **Prism Central** comme environnement. 

![MoveConfigure 07](images/MoveConfigure07.PNG)

Choisissez `Microsoft Hyper-V`{.action} 

![MoveConfigure 08](images/MoveConfigure08.PNG)

Cliquez sur `Add Environment`{.action}

![MoveConfigure 09](images/MoveConfigure09.PNG)

Saisissez ces informations **HYPERV-SOURCE** dans `Environment Name`{.action}, l'adresse IP privée du serveur **HYPER-V** dans `Hyper-V Server/Cluster`{.action}, un compte d'administration **HYPER-V** dans `Username `{.action} , le mot de passe de ce compte dans `Password`{.action} et cliquez sur `ADD`{.action} pour ajouter **Prism Central** comme environnement. 

![MoveConfigure 10](images/MoveConfigure10.PNG)

Les deux environements de migrations apparaissents en haut à gauche.

![MoveConfigure 11](images/MoveConfigure11.PNG)


#### Création d'un plan de migration d'un serveur HYPER-V vers un environnement NUTANIX.

Nous allons créer un plan de migration à partir des deux environements crées précedemment.

Cliquez sur `Create a Migration Plan`{.action}

![CreateMigrationPLan 01](images/CreateMigrationPlan01.PNG)

Choisissez un nom dans `Plan Name`{.action} et cliquez sur `Proceed`{.action}

![CreateMigrationPLan 02](images/CreateMigrationPlan02.PNG)

Saisissez ces informations **HYPERV-SOURCE** dans `Select a Source`{.action},  **PRISM-CENTRAL-DESTINATION** dans `Hyper-V Server/Cluster`{.action}, le nom du CLUSTER dans `Target Cluster`{.action}, le nom du container de destination dans `Target Container`{.action} ensuite cliquez sur `NEXT`{.action} pour passer à l'étape suivante.

![CreateMigrationPLan 03](images/CreateMigrationPlan03.PNG)

Sélectionnez les machines virtuelles que vous voulez migrer de l'environnement **HYPER-V** vers **AOS** en cliquant à gauche de la VM sur l'icone `Clic ICONE`{.action}, selectionnez les machines virtuelles et cliquez sur `Next`{.action} pour continuer la création du plan de migration.

![CreateMigrationPLan 04](images/CreateMigrationPlan04.PNG)

Choisissez le réseau dans `Target Network`{.action} et cliquez sur `Next`{.action}.

![CreateMigrationPLan 05](images/CreateMigrationPlan05.PNG)

Cliquez sur `Next`{.action} pour valider la migration.

![CreateMigrationPLan 06](images/CreateMigrationPlan06.PNG)

Cliquez sur `Save`{.action} pour Enregistrer le plan de migration sans l'éxecuter.

![CreateMigrationPLan 07](images/CreateMigrationPlan07.PNG)

#### Lancement de la migration

Le plan de migration est créé il est possible de le lancer manuellement.

Sélectionnez la `Case à cocher près du Plan de migration`{.action}.

![CreateMigrationPLan 08](images/CreateMigrationPlan08.PNG)

Dans le menu `Action` cliquez sur `Start`{.action}.

![CreateMigrationPLan 09](images/CreateMigrationPlan09.PNG)

La migration est en cours et apparait en progrès `in progress` dans la colonne `Status` à droite de l'écran.

![CreateMigrationPLan 10](images/CreateMigrationPlan10.PNG)

#### Finalisation de la migration

Vérifiez que vous pouvez basculer en vous postionnant avec la souris sur `In Progress` un fenêtre va apparaitre avec à l'intérieur cette information **Ready to Cutover N** N correspond aux nombre d'ordinateurs qui peuvent basculer. Cliquez sur `In Progress`{.action} pour lancer le processus de finalisation.

![Cut Over 01](images/CutOver01.PNG)

Sélectionnez tous les ordinateurs en cliquant sur la case à cocher `VM Name`{.action} et en cliquez sur `Cutover`{.action}.

![Cut Over 02](images/CutOver02.PNG)

Cliquez sur Continue. 

![Cut Over 03](images/CutOver03.PNG)

La finalisation est en cours veuillez attendre elle apparait `Final data sync in progress`

![Cut Over 03](images/CutOver04.PNG)

Le status de migration apparait dans `Migration Status` si l'on voit **Completed** c'est que la migration est terminée.

![Cut Over 03](images/CutOver05.PNG)

Si l'on se connecte dans **Prism Central** les 3 Ordinateurs virtuels migrés apparaissent et sont démarrés

![Cut Over 03](images/CutOver06.PNG)

## Aller plus loin <a name="gofurther"></a>



[Installation et configuration de Move](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Move-v4_3:Nutanix-Move-v4_3)


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
