---
title: Installation de SAP HANA sur un serveur SLES
slug: sap-installation-sap-hana-sles
excerpt: "Ce guide fournit des instructions générales sur l'installation de SAP HANA sur un serveur SUSE Linux Enterprise"
section: Premiers pas
order: 02
---

**Dernière mise à jour le 04/02/2022**

## Objectif

OVHcloud fournit du matériel certifié SAP sur lequel construire une solution SAP HANA.

**Ce guide fournit des instructions générales sur l'installation d'un système SAP HANA sur un serveur SLES15 SP3 hébergé sur du matériel OVHcloud.**

> [!warning]
>
> Bien que les éléments contenus dans ce guide aient été formulés avec toute la vigilance requise, OVHcloud ne garantit pas et ne déclare pas que les éléments contenus dans ce guide constituent un guide officiel SAP.
>
> Toutes les tâches d'intégration technique/d'installation/d'administration des solutions SAP doivent être validées par un professionnel SAP.

## Prérequis

Vous devez avoir :

- consulté le [SAP HANA Master Guide](https://help.sap.com/viewer/eb3777d5495d46c5b2fa773206bbfb46/2.0.01/en-US);
- dimensionné et structuré votre infrastructure SAP HANA et répertoires de données;
- installé toutes les dernières sources et tous les paquets nécessaires;
- appliqué tous les processus de fine-tuning requis par SAP.

Reportez-vous à la documentation sur [comment préparer un système SLES OVHcloud pour SAP HANA](../sap-preparation-sles-pour-sap-hana/).

## En pratique

### Architecture de l'hôte cible

![architecture de l'hôte cible](images/1-sap-hana-host.png){.thumbnail}

### Procédure d'installation

Afin d'installer le serveur de base de données SAP HANA, nous allons utiliser l'outil SAP **HANA DataBase LifeCycle Manager** que nous appellerons **HDBLCM** tout au long de ce document.

Deux versions du HDBLCM sont disponibles :

- Non-résident (situé sur le support d'installation)
- Résident (situé dans '/hana/shared/<SID>/HDBLCM')

Le HDBLCM « non-résident » vous permet :

- d'installer SAP HANA et ses composants;
- de mettre à jour SAP HANA et ses composants.

Le HDBLCM « résident » vous permet de :

- configurer la communication inter-services;
- configurer la connexion SLD;
- renommer un système SAP HANA;
- désinstaller SAP HANA et/ou les composants;
- procéder à la désinscription de SAP HANA;
- installer/mettre à jour des composants supplémentaires;
- ajouter des hôtes supplémentaires.

**NB : vous pouvez utiliser HDBLCM via une interface graphique, ligne de commande ou une interface Web.**

<ol start="1">
   <li>Téléchargez les dernières sources de SAP HANA à partir <a href=https://launchpad.support.sap.com/#/softwarecenter>du software-center SAP</a>: </li>
</ol>

**NB : il faut toujours utiliser la version HDBLCM correspondante à votre système SAP.**

<ol start="2">
   <li>Exécutez l'outil SAP HDBLCM : </li>
</ol>

```bash
/hana/shared/src/DATA_UNITS/HDB_SERVER_LINUX_X86_64/hdblcm --verify_signature
SAP HANA Lifecycle Management - SAP HANA Database 2.00.058.00.1634122452
************************************************************************
Scanning software locations...
Detected components:
   SAP HANA Database (2.00.058.00.1634122452) in /hana/shared/sps/SAP_HANA_DATABASE/server
   SAP HANA Database Client (2.10.15.1634075415) in /hana/shared/sps/SAP_HANA_CLIENT/client
Do you want to specify additional components location? (y/n) [n]: n
```

<ol start="3">
   <li>Sélectionnez l'action d'installation : </li>
</ol>

```bash
Index | Action             | Description
------------------------------------------------------------------------------------
1     | HDB (update)       | Update SAP HANA Database version 2.00.057.00.1629894416
      |                    | xx-hana-ovh (Database Worker (worker))
2     | install            | Install new system
3     | extract_components | Extract components
4     | Exit (do nothing)  |
```

<ol start="4">
   <li>Suivez l'assistant d'installation : </li>
</ol>

```bash
Select additional components for installation: Enter 2,3 to install both server and client
Enter local hostwork group: leave empty as this is a SCOS deployment
Select System Usage / Enter Index [4]:
Index | System Usage | Description
-------------------------------------------------------------------------------
1     | production   | System is used in a production environment
2     | test         | System is used for testing, not production
3     | development  | System is used for development, not production
4     | custom       | System usage is neither production, test nor development
Installation path: #please refer to the LVM section of the SLES for SAP HANA cookbook.
Enter Local host name: #default should pick up the current hostname
Do you want to add hosts to the system?: #As this is a SCOS deployment, enter ‘n’
Enter the SAP HANA System ID : # The SAP system ID (SID) is the identifier for the SAP HANA system.
Do you want to enable data and log volume encryption? [n]: y
Enter Location of Data Volumes [/hana/data/HDB]:
Enter Location of Log Volumes [/hana/log/HDB]:
Restrict maximum memory allocation? [n]: n
Apply System Size Dependent Resource Limits? (SAP Note 3014176) [y]:
Enter SAP Host Agent User (sapadm) Password:
Confirm SAP Host Agent User (sapadm) Password:
Enter SAP Host Agent User (sapadm) Password:
Confirm SAP Host Agent User (sapadm) Password:
Enter System Administrator (hdbadm) Password:
Confirm System Administrator (hdbadm) Password:
Enter System Administrator (hdbadm) Password:
Confirm System Administrator (hdbadm) Password:
Enter System Administrator Home Directory [/usr/sap/HDB/home]:
Enter System Administrator Login Shell [/bin/sh]:
Enter System Administrator User ID [1001]:
Enter ID of User Group (sapsys) [79]:
Enter System Database User (SYSTEM) Password:
Enter System Database User (SYSTEM) Password:
Enter System Database User (SYSTEM) Password:
Confirm System Database User (SYSTEM) Password:
Restart system after machine reboot? [n]: y
```

> [!primary]
>
> Sidenote sur le SID : 3 caractères sont autorisés. Lettres **ou** chiffres, le mélange n'est pas autorisé.
>
> NB : vous pouvez modifier l'ID système après le déploiement, mais cela est plus complexe que de le définir directement.
> NB2 : cet identifiant doit être unique dans votre écosystème SAP.
>
> Exemple : HDB
> Exemple 2 : HD1 #correspond à HANA Development 1
> Exemple 3 : HP1 #correspond à HANA Production 1

> [!primary]
>
> Note sur le numéro d'instance : un numéro d'instance SAP est un numéro à deux chiffres compris entre 0 et 97 (98 et 99 sont réservés à des fins de routage).
>
> Ce numéro permet de différencier les instances entre elles car il est possible d’installer plusieurs instances sur un même serveur.


<ol start="5">
   <li>Vérifiez le résumé de l'installateur : </li>
</ol>

```bash
Summary before execution:
=========================
SAP HANA Database System Installation
   Installation Parameters
      SAP HANA System ID: HDB
      Instance Number: 00
      Configure Python version: python2
      Local Host Worker Group: default
      System Usage: test
      Do you want to enable data and log volume encryption?: Yes
      Location of Data Volumes: /hana/data/HDB
      Location of Log Volumes: /hana/log/HDB
      SAP HANA Database secure store: ssfs
      Certificate Host Names: xx-hana-ovh -> xx-hana-ovh
      System Administrator Home Directory: /usr/sap/HDB/home
      System Administrator Login Shell: /bin/sh
      System Administrator User ID: 1001
      ID of User Group (sapsys): 79
      SAP HANA Database Client Installation Path: /hana/shared/HDB/hdbclient
      Remote Execution: ssh
      Database Isolation: low
      Verify the authenticity of SAP HANA components: Yes
      Install Execution Mode: standard
      Installation Path: /hana/shared
      Local Host Name: xx-hana-ovh
   Software Components
      SAP HANA Database
         Install version 2.00.057.00.1629894416
         Location: /hana/shared/src/DATA_UNITS/HDB_SERVER_LINUX_X86_64/server
      SAP HANA Local Secure Store
         Do not install
      SAP HANA AFL (incl.PAL,BFL,OFL)
         Do not install
      SAP HANA EML AFL
         Do not install
      SAP HANA EPM-MDS
         Do not install
      SAP HANA Database Client
         Install version 2.9.28.1627673934
         Location: /hana/shared/src/DATA_UNITS/HDB_CLIENT_LINUX_X86_64/client
      SAP HANA Studio
         Do not install
      SAP HANA Smart Data Access
         Do not install
      SAP HANA XS Advanced Runtime
         Do not install
   Log File Locations
      Log directory: /var/tmp/hdb_HDB_hdblcm_install_2021-10-20_09.26.04
      Trace location: /var/tmp/hdblcm_2021-10-20_09.26.04_29443.trc
Note: Volume encryption will be enabled. You need to back up root keys after the installation.
```

<ol start="6">
<li>Appuyez sur « y » pour lancer l'installation : </li>
</ol>

```bash
Do you want to continue? (y/n):
```

### Étapes de post-installation

<ol start="1">
   <li>Vérifiez que les processus de base de données HANA sont en cours d'exécution : </li>
</ol>

```bash
hdbadm@sv-hana:/usr/sap/HDB/HDB00> ./HDB info
USER          PID     PPID  %CPU        VSZ        RSS COMMAND
hdbadm       9627     9626   0.0      19052       7676 -sh
hdbadm      21442     9627   0.0      15432       3928  \_ /bin/sh ./HDB info
hdbadm      21475    21442   0.0      39048       3752      \_ ps fx -U hdbadm -o user:8,pid:8,ppid:8,pcpu:5,vsz:10,rss:10,args
hdbadm      28803        1   0.0      23292       3196 sapstart pf=/hana/shared/HDB/profile/HDB_HDB00
hdbadm      28810    28803   0.0     461388      73236  \_ /usr/sap/HDB/HDB00/sv-hana/trace/hdb.sapHDB_HDB00 -d -nw -f /usr/sap/ HDB/HDB00/sv-hana/daemon.ini pf=/usr/sap/HDB/SYS/profile/HDB_HDB00_sv
hdbadm      28830    28810   0.7    7645668    4552072      \_ hdbnameserver
hdbadm      29087    28810   0.1    2548960     184576      \_ hdbcompileserver
hdbadm      29090    28810   0.1    2793308     214696      \_ hdbpreprocessor
hdbadm      29137    28810   2.1    9995564    7187052      \_ hdbindexserver -port 30003
hdbadm      29140    28810   0.6    6072836    1632940      \_ hdbxsengine -port 30007
hdbadm      29529    28810   0.1    4503448     484688      \_ hdbwebdispatcher
hdbadm       4905        1   0.0     715972      52900 hdbrsutil  --start --port 30003 --volume 3 --volumesuffix mnt00001/ hdb00003.00003 --identifier 1634742350
hdbadm       4512        1   0.0     715920      52384 hdbrsutil  --start --port 30001 --volume 1 --volumesuffix mnt00001/ hdb00001 --identifier 1634742319
hdbadm       4043        1   0.0     569080      31524 /usr/sap/HDB/HDB00/exe/sapstartsrv pf=/hana/shared/HDB/profile/HDB_HDB00  -D -u hdbadm
```

<ol start="2">
   <li>Testez la connexion à la base de données à l'aide de hdbsql (outil de ligne de commande permettant d'exécuter des instructions sur une base de données SAP HANA) : </li>
</ol>

```bash
hdbsql -i 00 -d SystemDb -u SYSTEM
Password:
Welcome to the SAP HANA Database interactive terminal.
hdbsql SYSTEMDB=> SELECT * FROM M_DATABASES;
DATABASE_NAME,DESCRIPTION,ACTIVE_STATUS,ACTIVE_STATUS_DETAILS,OS_USER,OS_GROUP,RESTART_MODE,FALLBACK_SNAPSHOT_CREATE_TIME
"SYSTEMDB","SystemDB-HDB-00","YES","","","","DEFAULT",?
"HDB","HDB-00","YES","","","","DEFAULT",?
```

<ol start="3">
   <li>Sauvegardez les clés de chiffrement racine (voir SAP HANA Administration Guide)</li>
   <li>Installez la licence SAP HANA</li>
   <li>Installez les outils d'administration (<a href="https://help.sap.com/viewer/a2a49126a5c546a9864aae22c05c3d0e/2.0.02/en-US"> SAP HANA Studio</a>, <a href="https://help.sap.com/viewer/df02d156db744412ad1f9e887aba68ad/2.5.0.0/en-US">SAP HANA Cockpit</a> etc...)</li>
</ol>

## Aller plus loin

Documentation générale sur [comment mettre à jour SAP HANA sur un système SLES OVHcloud](../sap-mise-a-jour-sap-hana/).

Documentation générale sur [comment sauvegarder SAP HANA sur un système SLES OVHcloud](../backup-sap-hana/).
