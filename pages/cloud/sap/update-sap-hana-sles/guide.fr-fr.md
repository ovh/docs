---
title: Mettre à jour SAP HANA
slug: sap-mise-a-jour-sap-hana
excerpt: "Ce guide fournit des instructions générales sur la mise à jour d'un serveur et d'un client SAP HANA"
section: Utilisation avancée
order: 02
updated: 2022-02-04
---

**Dernière mise à jour le 04/02/2022**

## Objectif

OVHcloud fournit du matériel certifié SAP sur lequel construire une solution SAP.

**Ce guide fournit des instructions générales sur la mise à jour d'un serveur et/ou d'un client SAP HANA hébergé sur du matériel OVHcloud.**

> [!warning]
>
> Bien que les éléments contenus dans ce guide aient été formulés avec toute la vigilance requise, OVHcloud ne garantit pas et ne déclare pas que les éléments contenus dans ce guide constituent un guide officiel SAP.
>
> Toutes les tâches d'intégration technique/d'installation/d'administration des solutions SAP doivent être validées par un professionnel SAP.

SAP fournit plusieurs types de révisions pour maintenir les applications à jour :

- Révisions SAP HANA : le terme « Révision » désigne un package de maintenance d'un composant de base SAP HANA (SAP HANA Database, Studio, Client)
- Support Package : toutes les autres parties de la plateforme SAP HANA
- Support Package Stacks (SPS) : nouvelles fonctionnalités de la plateforme SAP HANA introduites une fois par an. Les SPS peuvent inclure des révisions ainsi que des Support Packages (packages de support)

*** Pour plus de détails, voir la note SAP 2378962 ***

Vérifiez si une révision est disponible à intervalles réguliers afin de garder votre système à jour.

Vous pouvez utiliser le [SAP Maintenance Planner](https://support.sap.com/en/alm/solution-manager/processes-72/maintenance-planner.html){.external} pour planifier toutes les modifications de votre écosystème SAP ainsi que [SAP Product Availability Matrix](https://userapps.support.sap.com/sap/support/pam){.external}.

## Prérequis

Merci de vous assurer que :

- vous avez lu toutes les instructions de mise à jour des différents composants.
- vous avez tous les paquets/librairies/sources nécessaires pour installer les révisions. Vous pouvez trouver les packages de support actuellement disponibles sur le SAP Service Marketplace à l'adresse [http://service.sap.com/sp-stacksInformation](http://service.sap.com/sp-stacksInformation){.external}.
- le patch/les révisions correspondent à la version de votre système SAP.
- la dernière version de l'outil d'archivage SAPCAR est disponible sur le système d'installation. Pour plus d'informations sur SAPCAR, voir la SAP Note 2452588.
- vous avez effectué les préparatifs nécessaires à la réalisation des sauvegardes de la base de données SAP HANA et des autres composants.
- vous disposez du login/password pour les utilisateurs suivants :
    - <sid>utilisateur adm
    - utilisateur sapadm
    - S-user pour le SAP Service Marketplace (SMP)

## Instructions

### Procédure de mise à jour

Dans ce guide, nous effectuerons une mise à jour avec le gestionnaire de cycle de vie (HDBLCM) de la base de données SAP HANA.

> [!alert]
> Sauvegardez tous les systèmes/bases de données avant de procéder à la mise à jour.

<ol start="1">
  <li>Téléchargez l'archive SAR de révision sur le serveur SAP HANA.</li>
  <li>Extrayez l'archive à l'aide de SAPCAR.</li>
</ol>

```bash
sapcar -xvf HCMT_058_0-80003261.SAR
```

<ol start="3">
  <li>Connectez-vous en tant qu'utilisateur '<sid>adm'. (ex: hdbadm)</li>
</ol>

```bash
su - hdbadm
```

<ol start="4">
  <li>Arrêtez le serveur de base de données : </li>
</ol>

```bash
HDB stop
    Stopping instance using: /usr/sap/HDB/SYS/exe/hdb/sapcontrol -prot NI_HTTP -nr 00 -function Stop 400
    Stop
    OK
    Waiting for stopped instance using: /usr/sap/HDB/SYS/exe/hdb/sapcontrol -prot NI_HTTP -nr 00 -function WaitforStopped 600 2
    WaitforStopped
    OK
    hdbdaemon is stopped.
```

<ol start="5">
  <li>Lancez HDBLCM dans le dossier SPS :</li>
</ol>

```bash
/hana/shared/sps/SAP_HANA_DATABASE/hdblcm
    SAP HANA Lifecycle Management - SAP HANA Database 2.00.058.00.1634122452
    ************************************************************************
    Scanning software locations...
    Detected components:
    SAP HANA Database (2.00.058.00.1634122452) in /hana/shared/sps/SAP_HANA_DATABASE/server
    SAP HANA Database Client (2.10.15.1634075415) in /hana/shared/sps/SAP_HANA_CLIENT/client
    Do you want to specify additional components location? (y/n) [n]: n
```

<ol start="6">
  <li>Sélectionnez l'action HDB (update) pour mettre à jour : </li>
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

<ol start="7">
  <li>Choisissez les composants à mettre à jour : </li>
</ol>

```bash
Index | Components | Description
-----------------------------------------------------------------------------
1     | all        | All components
2     | server     | Update SAP HANA Database from version 2.00.057.00.1629894416 to version 2.00.058.00.1634122452
3     | client     | Update SAP HANA Database Client from version 2.9.28.1627673934 to version 2.10.15.1634075415
```

*** NB : Tous les composants doivent être patchés : client, hdb, hostagent et tous les autres composants (SAP Hana APL, Studio, etc.) ***

<ol start="8">
  <li>Sélectionnez les options requises : </li>
</ol>

```bash
Enter comma-separated list of the selected indices [1]: 1
Enter System Database User Name [SYSTEM]:
Enter System Database User (SYSTEM) Password:
Apply System Size Dependent Resource Limits? (SAP Note 3014176) [y]: n
```

<ol start="9">
  <li>L'assistant fournit un récapitulatif que vous devez confirmer pour continuer : </li>
</ol>

```bash
Summary before execution:
=========================
SAP HANA Database
    Update Parameters
        SAP HANA System ID: HDB
        Remote Execution: ssh
        Configure Python version: python2
        Update Execution Mode: standard
        SAP HANA Database secure store: ssfs
        System Database User Name: SYSTEM
        Apply System Size Dependent Resource Limits? (SAP Note 3014176): No
    Software Components
        SAP HANA Database
            Update from version 2.00.057.00.1629894416 to 2.00.058.00.1634122452
            Location: /hana/shared/sps/SAP_HANA_DATABASE/server
        SAP HANA Database Client
            Update from version 2.9.28.1627673934 to 2.10.15.1634075415
            Location: /hana/shared/sps/SAP_HANA_CLIENT/client
    Log File Locations
        Log directory: /var/tmp/hdb_HDB_hdblcm_update_2021-10-20_17.03.02
        Trace location: /var/tmp/hdblcm_2021-10-20_17.03.02_3615.trc
Do you want to continue? (y/n): y
```

<ol start="10">
  <li>Une fois la mise à jour de HDBLCM terminée, vous pouvez démarrer la base de données : </li>
</ol>

```bash
SAP HANA Database components updated
Log file written to '/var/tmp/hdb_HDB_hdblcm_update_2021-10-20_17.03.02/hdblcm.log' on host 'xx-hana-ovh'.
# HDB start
Starting instance using: /usr/sap/HDB/SYS/exe/hdb/sapcontrol -prot NI_HTTP -nr 00 -function StartWait 2700 2
Start
OK
StartWait
OK
```

### Post-update

<ol start="1">
  <li>Assurez-vous que la base de données a été correctement mise à jour avec la version requise, soit dans le cockpit HANA/Studio, soit directement sur le serveur :</li>
</ol>

```bash
/usr/sap/HDB/HDB00> HDB version
HDB version info:
version:             2.00.058.00.1634122452
branch:              fa/hana2sp05
machine config:      linuxx86_64
```

<ol start="2">
  <li>Vérifiez que SAP peut se connecter à la base de données HANA.</li>
  <li>Redéployez les vues de calcul. Pour plus d'informations, consultez la note SAP 1962472 - Le redéploiement des vues de calcul est recommandé lors de la mise à niveau vers un nouveau SPS.</li>
</ol>

# Aller plus loin

Documentation sur [comment sauvegarder SAP HANA sur un système SLES OVHcloud](../backup-sap-hana).
