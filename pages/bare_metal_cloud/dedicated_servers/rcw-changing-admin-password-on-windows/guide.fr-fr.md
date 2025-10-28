---
title: "Comment réinitialiser le mot de passe administrateur avec Rescue-Customer-Windows"
excerpt: "Comment réinitialiser le mot de passe administrateur avec Rescue-Customer-Windows"
updated: 2025-10-22
---

## Objectif

Ce guide vous explique comment réinitialiser le mot de passe `Administrator` grâce au **Windows customer rescue system**.

## Prérequis

- Microsoft Windows Server 2016 ou supérieur installé sur votre [serveur dédié](/links/bare-metal/bare-metal)
- Au moins 16 Go de RAM installés sur le serveur
- Accès à l’[espace client OVHcloud](/links/manager)

> [!warning]
>
> Ce guide n’est pas applicable à l'**ancien système Windows rescue (mode rescue WinPE)** (voir le [guide du mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) pour plus de détails).
>
> Si votre version de Windows Server n'est pas prise en charge, vous ne pourrez peut-être pas activer le système rescue actuel pour Windows. Dans ce cas, veuillez consulter notre guide expliquant [comment réinitialiser le mot de passe administrateur Windows avec le système Windows rescue *legacy*](/pages/bare_metal_cloud/dedicated_servers/changing-admin-password-on-windows).  
> Vous y trouverez également une méthode alternative pour réinitialiser le mot de passe administrateur à l’aide du système rescue customer OVHcloud basé sur Debian.

## En pratique

### Étape 1 - Redémarrer le serveur en mode rescue <a name="step1"></a>

Le système doit être démarré en mode **Windows customer rescue system** avant que le mot de passe puisse être changé.

Pour plus de détails, référez-vous au [guide sur le mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

### Étape 2 - Effacer le mot de passe courant <a name="step2"></a>

Connectez-vous au serveur grace à la « Connexion Bureau à distance » (RDP) et aux informations d'identification transmises par e-mail.

Notez que le nom d'utilisateur est `Administrator`.

- Si votre serveur utilise un RAID logiciel sur le disque système, vous devez d'abord l'importer avant de pouvoir réinitialiser le mot de passe : suivez les instructions de la [section A](#sectionA) de ce guide.
- Si votre serveur n'utilise pas de RAID logiciel sur le disque système, vous pouvez directement réinitialiser le mot de passe en suivant les instructions de la [section B](#sectionB) de ce guide.

#### A - Importer votre disque local Windows <a name="sectionA"></a>

##### 1. Accéder à la gestion des disques

Faites un clic droit sur le menu `Démarrer`{.action} et selectionnez `Disk Management`{.action}.

![disk_manager_menu](images/disk_manager_menu.png){.thumbnail}

Vous pouvez désormais visualiser les disques et volumes du serveur.

![disk_manager_window](images/disk_manager_window1.png){.thumbnail}

Le disque contenant Windows sur votre serveur est probablement le *disk 1*, vous devez donc l'importer pour pouvoir y accéder.

Notez que si votre serveur comporte plusieurs groupes de disques, le numéro de disque contenant Windows peut être différent et vous pourriez avoir à importer plusieurs disques avant de trouver celui-ci.

Vous devez également importer le deuxième disque pour importer correctement le volume de RAID logiciel.

##### 2. Importer les disques

Faites un clic droit sur *Disk 1* et sélectionnez `Online`{.action}.

![disk_import_disk1](images/disk_manager_disk1on.png){.thumbnail}

Faites la même chose avec le deuxième disque (Disk 2) pour importer correctement le volume de RAID logiciel.

Faites un clic droit sur *Disk 2* et sélectionnez`Online`{.action}.

![disk_import_disk2](images/disk_manager_disk2on.png){.thumbnail}

Les disques sont maintenant vus comme « *Dynamic* » et « *Foreign* ».

Faites un clic droit sur *Disk 1* et sélectionnez `Import Foreign Disks`{.action}.

![disk_import_menu](images/disk_manager_diskimport.png){.thumbnail}

Cliquez deux fois sur `OK`{.action}.

![disk_import1](images/disk_import1.png){.thumbnail}

![disk_import2](images/disk_import2.png){.thumbnail}

Le disque local est désormais accessible et le disque Windows correpsond au volume "(E:)" (qui s'étale sur deux disques configurés en RAID logiciel de type Mirrored volume).

![disk_import_sync](images/disk_import_sync.png){.thumbnail}

> [!primary]
> Dans cet exemple, l'état du volume est "Resynching" car le serveur a été brutalement redémarré en mode rescue. C'est un état normal qui n'est pas causé par le rescue en lui-même.  
> Cela n'affectera pas les données du volume et la resynchronisation continuera une fois le serveur redémarré sur son système installé.

> [!warning]
>
> Vous devez utiliser le chemin vers votre dossier local Windows (ici c'est E:\Windows) quand vous naviguerez pour trouver le fichier de configuration _SAM_ dans la section suivante.

Vous pouvez maintenant réinitialiser le mot de passe en suivant les instruction de la section suivante.

#### B - - Réinitialiser le mot de passe <a name="sectionB"></a>

Pour réinitialiser un mot de passe, l'utilitaire NTPWEdit est nécessaire.

Un fois connecté via le Bureau à distance (RDP) ouvrez le navigateur internet (MS Edge) et téléchargez l'utilitaire à partir du [site web officiel](http://www.cdslow.org.ru/files/ntpwedit/ntpwed07.zip).

Naviguez jusqu'au dossier où se trouve le fichier ZIP téléchargé et extrayez le contenu.

Ouvrez ensuite l'exécutable `ntpwedit64.exe` pour démarrer l'application.

Sur cette interface, vous pouvez manipuler le fichier *SAM* afin d'effacer le mot de passe de l'utilisateur admin.

Vous devez naviguer dans le dossier local Windows pour y trouver le fichier *SAM* de votre système.

Cliquez sur le bouton `...`{.action} pour naviguer dans le lecteur où se trouve le dossier local Windows.

Généralement, c'est le lecteur `Windows (E:\)`

![ntpwedit1](images/ntpwedit_1.png){.thumbnail}

Naviguez jusqu'à `E:\WINDOWS\SYSTEM32\CONFIG\`.

Sélectionnez et ouvrez le fichier *SAM* pour voir les comptes utilisateurs en sélectionnant `Open`{.action}.

![ntpwedit_sam](images/SAM.png)

Sélectionnez le compte utilisateur « admin » puis cliquez sur `Change password`{.action}.

![ntpwedit2](images/ntpwedit_2.png){.thumbnail}

Dans la fenêtre qui apparaît, tapez votre nouveau mot de passe dans les deux champs et cliquez sur `OK`{.action}.

> [!warning]
>
> Le nouveau mot de passe sera accepté sans vérification de sa complexité.
>
> Gardez à l'esprit que ce mot de passe permettra de se connecter à distance sur le serveur, une fois redémarré sur son système d'exploitation.

Terminez en cliquant sur `Save changes`{.action} puis sur `Exit`{.action}.

Le serveur doit alors être redémarré sur le système d'exploitation normal.

### Étape 3 - Redémarrer le serveur <a name="step3"></a>

Commencez par changer le netboot en `Booter sur le disque dur`{.action} dans l'espace client OVHcloud (voir [Etape 1](#step1)).

Puis redémarrez le serveur à partir de l'espace client. Cliquez sur le bouton `...`{.action} près de la section « État des services » et sélectionnez `Redémarrer`{.action}.

![reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/cp_dedicated_restart.png){.thumbnail}

## Aller plus loin

Rejoignez notre [communauté d'utilisateurs](/links/community)
