---
title: Installer le Real Time Monitoring (RTM)
slug: installer-rtm
excerpt: Découvrez comment installer le Real Time Monitoring sur Linux ou Windows
section: Diagnostic et mode Rescue
---

**Dernière mise à jour le 11/12/2017**

## Objectif

Le Real Time Monitoring (RTM) permet de monitorer partiellement votre serveur et son activité. Vous pourrez retrouver sur votre espace client : l'utilisation du processeur (CPU), de la mémoire vive (RAM), les ports ouverts... L’installation du paquet RTM est nécessaire pour que ces informations puissent être disponibles.

**Ce guide vous explique comment installer le RTM sur Windows ou Linux**

## Prérequis

- Être connecté en SSH (ou sur votre interface graphique) sur votre serveur Linux (accès *root*).
- Être connecté au bureau à distance sur votre serveur Windows (accès *administrateur*).
- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

Vous pourrez surveiller votre serveur une fois le RTM installé sur votre espace client, partie `Dédié`{.action}. Sur la page principale de votre serveur, vous obtiendrez les informations du monitoring dans `Real Time Monitoring` :

![Real Time Monitoring](images/rtm.png)

> [!primary]
>
> Des règles de pare-feu peuvent empêcher la surveillance de votre infrastructure malgré l'ajout du RTM. N'oubliez pas d'ouvrir l'accès à votre serveur aux IP de notre monitoring. Vous trouverez le détail [ici](https://docs.ovh.com/fr/dedicated/monitoring-ip-ovh/).
> 

### Installer le RTM sous Linux

Une fois connecté en SSH sur votre serveur, il suffit d'exécuter la commande suivante :

```sh
wget ftp://ftp.ovh.net/made-in-ovh/rtm/install_rtm.sh -O install_rtm.sh | sh install_rtm.sh
```

### Installer le RTM sous Windows

Une fois connecté au bureau à distance, voici la marche à suivre :

- installer ActivePerl si le RTM n'a jamais été installé. Il peut être téléchargé via le lien : <http://www.activestate.com/activeperl/> ;
- télécharger et installer la dernière version de RTM ici : <ftp://ftp.ovh.net/made-in-ovh/rtm/windows/> ;
- faites un clic droit sur le fichier puis cliquer sur `Exécuter en tant qu'administrateur`{.action}.


## Aller plus loin

[Les IP de monitoring d'OVH](https://docs.ovh.com/fr/dedicated/monitoring-ip-ovh/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.