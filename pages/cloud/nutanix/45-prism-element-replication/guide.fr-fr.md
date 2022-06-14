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


## Présentation de la réplication synchrone et asynchrone

Il est possible au travers de Prism Element de faire des réplications entre clusters si ils sont reliés ensemble.

Avec le pack **Nutanix Standard** d'OVHcloud il est possible faire une réplication asynchrone toutes les heures.

Il est possible de faire une réplication synchrone avec un délai de réplication compris entre 1 et 15 minutes pour cela il faut choisir le pack **Nutanix Advanced** d'OVHcloud.

## En pratique

Nous allons interconnecter deux cluster Nutanix se trouvant dans les datacenter d'OVHcloud ,l'un au CANADA et l'autre en FRANCE au travers d'un VPN IPSEC sur deux plans d'adresses IP differents qui sont :

** `192.168.0.0/24` pour le cluster se trouvant dans un Datacenter en FRANCE
** `192.168.10.0/24` pour le cluster se trouvant dans un Datacenter au CANADA

### Configuration des sites distants

Connectez vous sur **Prism Element** du cluster de la France à partir de **Prism Central**

Au travers du menu Home cliquez sur `Data Protection`{.action}.

![01 Create Remote Site From FRANCE01](images/01-create-remote-site-from-france01.png){.thumbnail} 

Cliquez sur `Remote Site`{.action} à gauche de l'écran.

![01 Create Remote Site From FRANCE02](images/01-create-remote-site-from-france02.png){.thumbnail}

Cliquez `+ Remote Site`{.action} à droite de l'écran pour rajouter un site distant

![01 Create Remote Site From FRANCE03](images/01-create-remote-site-from-france03.png){.thumbnail}

Choisissez `Physical Cluster`{.action} dans le sous menu

![01 Create Remote Site From FRANCE04](images/01-create-remote-site-from-france04.png){.thumbnail}

Nommez le site distant dans `REMOTE SITE NAME` , saisissez l'adresse IP du **Prism Element** du site distant au canada dans `CLUSTER VIRTUAL IP` et cliquez sur `Add Site`{.action}

![01 Create Remote Site From FRANCE05](images/01-create-remote-site-from-france05.png){.thumbnail}

Cliquez La `barre de défilement`{.action}

![01 Create Remote Site From FRANCE06](images/01-create-remote-site-from-france06.png){.thumbnail}

Dans **Network Mapping** Selectionnez v pour **Source Cluster** et **Destination Cluster** et cliquez sur le bouton `+`{.action}  

![01 Create Remote Site From FRANCE07](images/01-create-remote-site-from-france07.png){.thumbnail}

Faites la même opération avec `AHV: VLAN50` en cliquant sur le bouton `+`{.action} pour valider la correspondance des réseaux sources et destinations

![01 Create Remote Site From FRANCE08](images/01-create-remote-site-from-france08.png){.thumbnail}

Choisissez le `default-container...` dans Source **VStore** et **Destination VStore** et cliquez sur le bouton `+`{.action} pour la correspondance des stockages sources et destination 

![01 Create Remote Site From FRANCE09](images/01-create-remote-site-from-france09.png){.thumbnail}

Cliquez sur `Save`{.action}

![01 Create Remote Site From FRANCE10](images/01-create-remote-site-from-france10.png){.thumbnail}

Le site distant apparait dans la liste **Remote Site**

![01 Create Remote Site From FRANCE11](images/01-create-remote-site-from-france11.png){.thumbnail}

### Mise en place réplication entre site

### Bascule des VM en mode programmé

### Bascule des VM en mode PRA











## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
