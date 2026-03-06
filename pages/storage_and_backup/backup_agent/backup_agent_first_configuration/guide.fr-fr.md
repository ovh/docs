---
title: "Backup Agent - Comment configurer votre première sauvegarde"
excerpt: "Découvrez comment configurer votre première sauvegarde sur votre serveur Bare Metal avec le produit Backup Agent depuis l'espace client OVHcloud"
updated: 2026-03-05
---

## Objectif

Vous venez de commander votre offre Backup Agent pour votre serveur Bare Metal, découvrez comment mettre en place vos premières sauvegardes.

**Ce guide explique comment configurer votre première sauvegarde avec Backup Agent sur un serveur Bare Metal.**

> [!primary]
> 
> Retrouvez plus d'informations sur le produit Backup Agent sur [cette page](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).

## Prérequis

- Avoir commandé un service Backup Agent au moment de la commande de votre serveur Bare Metal ou ultérieurement via le menu `Backup Agent`{.action} de votre espace client.
- Avoir démarré et configuré un système d’exploitation sur votre serveur Bare Metal.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Accès à l’espace client OVHcloud

- **Lien direct :** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

> [!warning]
>
> Vous devez vous assurer de pouvoir rendre votre serveur joignable par notre infrastructure Veeam.
> Vous recevrez les informations exactes dans votre e-mail de livraison.
>
> Voici les informations à autoriser sur votre serveur Bare Metal :
>
> - IP/DNS du serveur: `vspc-cgw1.prod01.eu-west-rbx.backup.ovh.net` ou `vspc-cgw21.prod01.eu-west-rbx.backup.ovh.net`
> - Port: 6180
>
> Nous vous recommandons également de permettre à votre serveur de joindre des adresses externes pour envoyer vos données vers le Vault. Il n'y a pas besoin d'autoriser un flux entrant dans ce cadre.

## En pratique

Les étapes pour créer une sauvegarde pour votre serveur sont les suivantes :

- Ajouter votre serveur dans votre Backup Agent.
- Télécharger l'agent.
- Installer l'agent sur votre serveur.

Une fois l'agent installé, celui-ci recevra la politique de sauvegarde et permettra d'opérer les sauvegardes.

Une fois ces étapes terminées, votre première sauvegarde sera lancée.

### Ajouter votre serveur dans votre Backup Agent

Cliquez sur [ce lien](/links/control-panel/baremetal-backup-agent) pour accéder à la section `Backup Agent`{.action}, puis cliquez sur votre vspc-tenant dans la partie `Services`{.action}.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Allez dans la partie `Agents`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

> [!primary]
>
> Vous devriez retrouver dans le tableau le serveur Bare Metal que vous avez sélectionné dans votre commande, avec le statut `not_installed`. C'est normal à ce stade, il vous faut maintenant installer l'agent sur votre serveur.
>

Cliquez sur le bouton `Télécharger`{.action} en haut du tableau listant vos agents.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Sélectionnez votre système d'exploitation et choisissez soit de télécharger le fichier d'installation ou d'utiliser une des commandes proposées pour le récupérer.

![Backup Agent Step 13](images/01-backup-agent-step13.png){.thumbnail}

Pour installer votre agent sur votre serveur Bare Metal, cliquez sur l'onglet correspondant à votre système d'exploitation :

> [!tabs]
> Windows
>>
>> Une fois le fichier d'installation sur votre serveur Bare Metal, vous pouvez l'exécuter et suivre la procédure du logiciel :
>>
>> ![Backup Agent Step 01](images/01-backup-agent-step01.png){.thumbnail}
>>
>> ![Backup Agent Step 02](images/01-backup-agent-step02.png){.thumbnail}
>>
>> ![Backup Agent Step 03](images/01-backup-agent-step03.png){.thumbnail}
>>
>> ![Backup Agent Step 04](images/01-backup-agent-step04.png){.thumbnail}
>>
>> ![Backup Agent Step 05](images/01-backup-agent-step05.png){.thumbnail}
>>
>> Une fois installé, votre agent se connecte à notre infrastructure pour récupérer votre politique de sauvegarde :
>>
>> ![Backup Agent Step 06](images/01-backup-agent-step06.png){.thumbnail}
>>
>> ![Backup Agent Step 07](images/01-backup-agent-step07.png){.thumbnail}
>>
>> Enfin, une fois la politique de sauvegarde prise en compte, vous pourrez voir votre agent de sauvegarde configuré et présent sur votre serveur Bare Metal :
>>
>> ![Backup Agent Step 08](images/01-backup-agent-step08.png){.thumbnail}
>>
>> ![Backup Agent Step 09](images/01-backup-agent-step09.png){.thumbnail}
>>
> Linux
>> Sélectionnez votre système d'exploitation et choisissez soit de télécharger le fichier d'installation ou d'utiliser une des commandes proposées pour le récupérer.
>>
>> ![Backup Agent Step 14](images/01-backup-agent-step14.png){.thumbnail}
>>
>> Une fois le fichier d'installation sur votre serveur, accédez au dossier le contenant et exécutez le fichier ainsi :
>>
>> ```bash
>> sudo ./LinuxAgentPackages.<YOURCOMPANYNAME>.sh
>> ```
>>
>> Une fois l'installation complétée, vous pourrez le vérifier avec cette commande :
>>
>> ```bash
>> sudo veeamconsoleconfig -s
>>
>> Management agent
>>     Connection state       : Connected
>>     Cloud gateway          : <OVHDOMAIN>:6180
>>     Connection account     : <UTILISATEUR>
>> ```
>> 
>> Vous pouvez alors constater qu'un élément n'est pas encore installé :
>>
>> ```bash
>> Backup agent
>>    Status                 : Not installed
>> ```
>>
>> C'est normal à ce stade, nous allons appliquer une configuration permettant de déployer le Backup Agent avec une politique de sauvegarde.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).