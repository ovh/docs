---
title: "Backup Agent - Comment configurer votre première sauvegarde"
excerpt: "Comment configurer votre première sauvegarde sur votre serveur Bare Metal avec le produit Backup Agent"
updated: 2026-01-09
---

## Objectif

Vous venez de commander votre offre Backup Agent pour votre serveur Bare Metal, découvrez comment mettre en place vos premières sauvegardes.

## Prérequis

- Être connecté à l’[espace client OVHcloud](/links/manager).
- Avoir commandé  un service Backup Agent au moment de la commande de votre serveur Bare Metal ou ultérieurement via le menu `Backup Agent`{.action} de votre espace client.
- Avoir démarré et configuré un système d'exploitation sur votre serveur Bare Metal.

## En pratique

Afin de pouvoir configurer votre première sauvegarde, vous devez installer l'agent sur votre serveur Bare Metal.

Le fonctionnement est le suivant :

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

Une fois l'agent installé, celui-ci recevra la politique de sauvegarde et permettra d'opérer les sauvegardes.

Pour installer votre agent sur votre serveur Bare Metal, voici la démarche à suivre selon votre système d'exploitation :

### Windows

Connectez-vous à votre [espace client OVHcloud](/links/manager) et rendez-vous dans la partie `Backup Agent`{.action}.

![Backup Agent Menu](images/01-backup-agent-step15.png){.thumbnail}

Cliquez sur votre vspc-tenant, dans la partie `Services`{.action}.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Allez dans la partie `Agents`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

Cliquez sur le bouton `Télécharger`{.action} en haut du tableau listant vos agents.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Sélectionnez votre système d'exploitation et choisissez soit de télécharger le fichier d'installation ou d'utiliser une des commandes proposées pour le récupérer.

![Backup Agent Step 13](images/01-backup-agent-step13.png){.thumbnail}

Une fois le fichier d'installation sur votre Bare Metal, vous pouvez l'exécuter et suivre la procédure du logiciel :

![Backup Agent Step 01](images/01-backup-agent-step01.png){.thumbnail}

![Backup Agent Step 02](images/01-backup-agent-step02.png){.thumbnail}

![Backup Agent Step 03](images/01-backup-agent-step03.png){.thumbnail}

![Backup Agent Step 04](images/01-backup-agent-step04.png){.thumbnail}

![Backup Agent Step 05](images/01-backup-agent-step05.png){.thumbnail}

Une fois installé, vous pourrez voir votre agent se connecter à notre infrastructure afin de redescendre votre politique de sauvegarde :

![Backup Agent Step 06](images/01-backup-agent-step06.png){.thumbnail}

![Backup Agent Step 07](images/01-backup-agent-step07.png){.thumbnail}

Enfin, une fois la politique de sauvegarde prise en compte, vous pourrez voir votre agent de sauvegarde configuré et présent sur votre serveur Baremetal :

![Backup Agent Step 08](images/01-backup-agent-step08.png){.thumbnail}

![Backup Agent Step 09](images/01-backup-agent-step09.png){.thumbnail}

Par défaut, vos sauvegardes sont déclenchées entre 22h00 et 06h00, mais vous pouvez lancer des sauvegardes manuellement en cliquant sur le bouton `Backup Now`{.action}.

### Linux

Connectez-vous à votre [espace client OVHcloud](/links/manager) et rendez-vous dans la partie `Backup Agent`{.action}.

![Backup Agent Menu](images/01-backup-agent-step15.png){.thumbnail}

Cliquer sur votre vspc-tenant, dans la partie `Services`{.action}.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Allez dans la partie `Agents`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

Cliquez sur le bouton `Télécharger`{.action} en haut du tableau listant vos agents.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Sélectionnez votre système d'exploitation et choisissez soit de télécharger le fichier d'installation ou d'utiliser une des commandes proposées pour le récupérer.

![Backup Agent Step 14](images/01-backup-agent-step14.png){.thumbnail}

Une fois le fichier d'installation sur votre serveur, accédez au dossier le contenant et exécutez le fichier de la manière suivante :

```bash
sudo ./LinuxAgentPackages.<NOMDEVOTRECOMPANY>.sh
```

Une fois l'installation complétée, vous pourrez le vérifier avec cette commande :

```bash
sudo veeamconsoleconfig -s

Management agent
    Connection state       : Connected
    Cloud gateway          : <OVHDOMAIN>:6180
    Connection account     : <UTILISATEUR>
```

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).