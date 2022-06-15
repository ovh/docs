---
title: Réplication asynchrone ou synchrone au travers de Prism Element
slug: prism-element-nutanix-replication
excerpt: "Comment mettre en place la réplication asynchrone ou synchrone au travers de Prism Element"
section: Plan de reprise d'activité
order: 03
---

**Dernière mise à jour le 14/06/2022**

## Objectif

**Cette page montre comment mettre en place une réplication entre cluster au travers de Prism Element**


> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>
> Certaines options comme l'utilisation de la compression ou de la déduplication nécessitent des licences particulières fournies par Nutanix au travers d'OVHcloud, nous vous invitons à vous renseigner auprès du service commercial OVHcloud pour plus d'informations.

## Prérequis

- Disposer de deux clusters Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur vos clusters via Prism Central
- d'avoir mis en place une interconnexion entre deux clusters au travers d'un VPN IPSEC


## Présentation de la réplication synchrone et asynchrone

Il est possible au travers de Prism Element de faire des réplications entre clusters si ils sont connectés ensemble.

Avec le pack **Nutanix Standard** d'OVHcloud il est possible faire une réplication asynchrone toutes les heures entre deux clusters.

Une réplication synchrone avec un délai de réplication compris entre 1 et 15 minutes est possible mais pour cela il faut choisir le pack **Nutanix Advanced** d'OVHcloud. 

## En pratique

Nous allons utiliser deux clusters Nutanix se trouvant dans les datacenter d'OVHcloud ,l'un au CANADA et l'autre en FRANCE connectés au travers d'un VPN IPSEC sur deux plans d'adressages IP differents qui sont :

* ** `192.168.0.0/24` pour le cluster se trouvant dans un Datacenter en FRANCE
* ** `192.168.10.0/24` pour le cluster se trouvant dans un Datacenter au CANADA

### Configuration des sites distants

Connectez-vous au travers de  **Prism Element** sur le cluster en France à partir de **Prism Central**. comme indiqué sur cette documentation [Hyperconvergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/)

Cliquez sur `Data Protection`{.action} depuis le menu `Home`.

![01 Create Remote Site From FRANCE01](images/01-create-remote-site-from-france01.png){.thumbnail} 

Cliquez sur `Remote Site`{.action} à gauche de l'écran.

![01 Create Remote Site From FRANCE02](images/01-create-remote-site-from-france02.png){.thumbnail}

Cliquez `+ Remote Site`{.action} à droite de l'écran pour rajouter un site distant.

![01 Create Remote Site From FRANCE03](images/01-create-remote-site-from-france03.png){.thumbnail}

Choisissez `Physical Cluster`{.action} dans le sous menu.

![01 Create Remote Site From FRANCE04](images/01-create-remote-site-from-france04.png){.thumbnail}

Nommez le site distant dans `REMOTE SITE NAME` , saisissez l'adresse IP de **Prism Element** du site distant en FRANCE dans `CLUSTER VIRTUAL IP` et cliquez sur `Add Site`{.action}.

![01 Create Remote Site From FRANCE05](images/01-create-remote-site-from-france05.png){.thumbnail}

Faites défiler la fenêtre à l'aide de La `barre de défilement`{.action}.

![01 Create Remote Site From FRANCE06](images/01-create-remote-site-from-france06.png){.thumbnail}

Dans la rubrique **Network Mapping** Sélectionnez `AHV: base`pour **Source Cluster** et **Destination Cluster** et cliquez sur le bouton `+`{.action}  

![01 Create Remote Site From FRANCE07](images/01-create-remote-site-from-france07.png){.thumbnail}

Si vous avez un autre VLAN Faites la même opération avec le nom du VLAN `AHV: VLAN50` en cliquant sur le bouton `+`{.action} pour valider l'association des réseaux sources et destinations.

![01 Create Remote Site From FRANCE08](images/01-create-remote-site-from-france08.png){.thumbnail}

Choisissez `default-container...` dans Source **VStore** et **Destination VStore** et cliquez sur le bouton `+`{.action} pour la correspondance des stockages sources et destination. 

![01 Create Remote Site From FRANCE09](images/01-create-remote-site-from-france09.png){.thumbnail}

Cliquez sur `Save`{.action}

![01 Create Remote Site From FRANCE10](images/01-create-remote-site-from-france10.png){.thumbnail}

Le site distant apparait dans la liste **Remote Site**.

![01 Create Remote Site From FRANCE11](images/01-create-remote-site-from-france11.png){.thumbnail}

Nous allons maintenant nous connecter sur l'interface **Prism Element** du site distant au CANADA et faire la même operation.

Au travers du menu Home cliquez sur `Data Protection`{.action}.

![02 Create Remote Site From CANADA01](images/02-create-remote-site-from-canada01.png){.thumbnail} 

Cliquez sur `Remote Site`{.action} à gauche de l'écran.

![02 Create Remote Site From CANADA02](images/02-create-remote-site-from-canada02.png){.thumbnail}

Cliquez `+ Remote Site`{.action} à droite de l'écran pour rajouter un site distant

![02 Create Remote Site From CANADA03](images/02-create-remote-site-from-canada03.png){.thumbnail}

Choisissez `Physical Cluster`{.action} dans le sous menu.

![02 Create Remote Site From CANADA04](images/02-create-remote-site-from-canada04.png){.thumbnail}

Nommez le site distant dans `REMOTE SITE NAME`, saisissez l'adresse IP de **Prism Element** du site distant au canada dans `CLUSTER VIRTUAL IP` et cliquez sur `Add Site`{.action}.

![02 Create Remote Site From CANADA05](images/02-create-remote-site-from-canada05.png){.thumbnail}

Faites défiler la fenêtre à l'aide de La `barre de défilement`{.action}.

![02 Create Remote Site From CANADA06](images/02-create-remote-site-from-canada06.png){.thumbnail}

Dans **Network Mapping** Selectionnez `AHV: base`pour **Source Cluster** et **Destination Cluster** et cliquez sur le bouton `+`{.action}  

![02 Create Remote Site From CANADA07](images/02-create-remote-site-from-canada07.png){.thumbnail}

Si vous avez un autre VLAN Faites la même opération avec le nom du VLAN `AHV: VLAN50` en cliquant sur le bouton `+`{.action} pour valider l'association des réseaux source et destination.

![02 Create Remote Site From CANADA08](images/02-create-remote-site-from-canada08.png){.thumbnail}

Choisissez `default-container...` dans Source **VStore** et **Destination VStore** et cliquez sur le bouton `+`{.action} pour la correspondance des stockages source et destination. 

![02 Create Remote Site From CANADA09](images/02-create-remote-site-from-canada09.png){.thumbnail}

Cliquez sur `Save`{.action}.

![02 Create Remote Site From CANADA10](images/02-create-remote-site-from-canada10.png){.thumbnail}

Le site distant apparait dans la liste **Remote Site**.

![02 Create Remote Site From CANADA11](images/02-create-remote-site-from-canada11.png){.thumbnail}

### Mise en place de la réplication entre site

Maintenant que les deux sites se connaissent nous allons mettre en place un réplication asynchrone de 3 ordinateurs virtuels se trouvant en France vers le site distant du Canada.

Revenez sur l'interface **Prism Element** du cluster se trouvant en France.

Choisissez dans le menu principal `Data Protection`{.action}

![03 Create dataprotection 01](images/03-create-dataprotection01.png){.thumbnail}

Au travers du tableau de bord **Data Protection** cliquez en haut à droite sur `+ Protection Domain`{.action}.

![03 Create dataprotection 02](images/03-create-dataprotection02.png){.thumbnail}

Cliquez sur `Async DR`{.action}.

![03 Create dataprotection 03](images/03-create-dataprotection03.png){.thumbnail}

Saisissez un  `Nom` et cliquez sur `Create`{.action}.

![03 Create dataprotection 04](images/03-create-dataprotection04.png){.thumbnail}

Sélectionnez `trois machines` virtuelles et cliquez sur `Protect Selected Entities`{.action}.

![03 Create dataprotection 05](images/03-create-dataprotection05.png){.thumbnail}

Cliquez sur `Next`{.action}

![03 Create dataprotection 05](images/03-create-dataprotection05.png){.thumbnail}

Cliquez sur `New Schedule`{.action} pour programmer la planification.

![03 Create dataprotection 07](images/03-create-dataprotection07.png){.thumbnail}

Choisissez dans ***Repeat every** `1 hour` , et prenez comme politique de rétention `2 snapshots` en local et sur le site distant, ensuite cliquez sur `Create Schedule`{.action}



![03 Create dataprotection 08](images/03-create-dataprotection08.png){.thumbnail}


La tâche de réplication est crée pour fonctionner toutes les heures ce sera une réplication asynchrone fournie avec la licence **Nutanix Standard** d'OVHcloud. cliquez sur `Close`{.action} pour fermer la fenêtre.

> [!primary]
> 
> Il est possible de modifier la planification pour être plus rapprochée , la réplication va basculer du mode asynchrone au mode synchrone il faudra alors changer la licences avec le pack **Nutanix Advanced**.


![03 Create dataprotection 09](images/03-create-dataprotection09.png){.thumbnail}

Le domaine de protection est créé et apparait dans la liste des réplications.

![03 Create dataprotection 10](images/03-create-dataprotection10.png){.thumbnail}


### Migration des machines virtuelles

Il est possible de basculer les machines virtuelles d'un cluster à l'autre sans perte de données si nos deux clusters sont actifs et qu'ils communiquent entre eux. lors de la migration une réplication sera faite après l'arrêt des machines virtuelles.

Allez sur **Prism Element** où se trouve les machine virtuelles répliquées.

Au travers du tableau de bord **Data Protection** cliquez sur `Migrate`{.action}. 

![04 Migrate VM to CANADA 01](images/04-migrate-to-canada01.png){.thumbnail}

Sélectionnez le site distant,  saisissez `MIGRATE` et cliquez sur `Migrate`{.action}

![04 Migrate VM to CANADA 02](images/04-migrate-to-canada02.png){.thumbnail}

Les machines virtuelles qui sont membres du domaine de protection vont être éteintes, basculer sur l'autre cluster et disparaitre du cluster d'origine.

![04 Migrate VM to CANADA 03](images/04-migrate-to-canada03.png){.thumbnail}

### Bascule des machine virtuelle avec le cluster d'origine indisponible.

Il est possible d'activer les machines virtuelles sur un site distant en cas d'indisponibilité du site d'origine mais les machines virtuelles seront dans l'état de la dernière réplication. Si la réplication est asynchrone il est possible de perdre jusqu'a 1 heure de données.

Connectez-vous sur se site distant avec **Prism Element** 

Allez sur le tableau de bord **Data Protection** 

Sélectionnez le site à activer et cliquez sur `Activate`{.action}. 

![05 Active VM on remote site 01](images/05-activate-protection-domain01.png){.thumbnail}

Cliquez sur `Yes`{.action}. 

![05 Active VM on remote site 02](images/05-activate-protection-domain02.png){.thumbnail}

les machines virtuelles vont apparaitrent dans la console de **Prism Element** elles seront dans l'état de la dernière réplication, les données modifiées entre temps seront perdues. 


## Aller plus loin

[Documentation Nutanix sur Data Protection and Disaster Recovery](https://portal.nutanix.com/page/documents/solutions/details?targetId=BP-2005-Data-Protection:top-backup-and-disaster-recovery-on-remote-sites.html)


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
