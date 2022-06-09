---
title: Redeploiment de votre Cluster
slug: nutanix-hci
excerpt: "Redeploiement du cluster Nutanix au travers de l'API d'OVHcloud"
section: Premiers pas
order: 03
---

**Dernière mise à jour le 09/06/2022**

## Objectif

Reconditionner un cluster avec des paramètres réseaux personnalisées au travers de l'API d'OVHcloud

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)


## Présentation des besoins techniques pour la reconfiguration d'un cluster.

Avant de reconfigurer un cluster il est necessaire de connaitre les besoins techniques pour la reconfiguration d'un cluster.

La liste des adresses IP necessaire varie en fonction du nombre de serveurs achetés et du choix de configuration de Prism Central (Mode alone ou mode Scale) voici le détail des besoins

- 2 adresses IP privés par serveur (OVHcloud propose une solution avec 18 serveurs ce qui fera au maximum 36 adresses IP privés)
- Une adresse IP privé pour l'adresse IP virtuelle de Prism ELEMENT.
- Une adresse IP pour l'adresse IP de Prism Central
- 3 adresses IP optionnelles pour un déploiement de Prism Central en mode scale avec 3 machines virtuelles
- Une adresse IP pour la passerelle
- Certaines adresses du plan IP choisie sont réservées pour le LOAD-BALANCER elle seront toujours avec le réseau XX.XX.XX.128 et un masque à 255.255.255.228. soit les adresses comprise en XX.XX.XX.129 & XX.XX.XX.158 du réseau choisi

**Exemple1 :**  Reconfiguration d'un cluster avec 3 nœuds sur un plan IP en 192.168.10.0/24

- Serveur1: adresse VM CVM1 : 192.168.10.1, adresse IP hyperviseur 192.168.10.21.
- Serveur2: adresse VM CVM2 : 192.168.10.2, adresse IP hyperviseur 192.168.10.22.
- Serveur3: adresse VM CVM3 : 192.168.10.3, adresse IP hyperviseur 192.168.10.23.
- Adresse virtuelle Prism Element : 192.168.10.111.
- Adresse virtuelle Prism Central : 192.168.10.222.
- réservé pour le load balancer 192.168.10.128 à 192.168.10.159.
- Passerelle 192.168.10.254

**Exemple2 :**  Reconfiguration d'un cluster avec 4 nœuds en mode Scale pour Prism Central sur un plan IP en 172.16.0.0/16

- Serveur1: adresse VM CVM1 : 172.16.10.1, adresse IP hyperviseur 172.16.10.21.
- Serveur2: adresse VM CVM2 : 172.16.10.2, adresse IP hyperviseur 172.16.10.22.
- Serveur3: adresse VM CVM3 : 172.16.10.3, adresse IP hyperviseur 172.16.10.23.
- Serveur4: adresse VM CVM4 : 172.16.10.4, adresse IP hyperviseur 172.16.10.24.
- Adresse virtuelle Prism Element : 172.16.10.111.
- Adresse virtuelle Prism Central : 172.16.10.222.
- VM Prism Central : 172.16.10.223 à 172.16.10.225
- Le load balancer 172.16.10.128 à 172.16.10.159.
- Passerelle 172.16.0.254

## En pratique

Nous allons redeployer un cluster de 3 nœuds comme dans l'exemple 1 du chapitre précedent.

> [!warning]
> L'opération de reploiement du cluster est irreversible toutes les données du cluster sont supprimée
> et un nouveau mot de passe du compte admin sera généré et envoyé sur la boite à lettre du compte client.

Se connecter à l'API d'OVHcloud au travers de l'interface WEB [API OVHcloud](https://api.ovh.com) avec votre compte client

Cliquer sur  `Explore the OVH API`{.action} au milieu de l'écran.

![API connection 01](images/00-connectionapi01.png)

Cliquer sur `Login`{.action} en haut à droite.

![API connection 02](images/00-connectionapi02.png)

Saisissez ces informations.

- **Email** : `nom ou email du compte client`
- **Password** : `Mot de passe du compte client`

et cliquez sur `Login`{.action}.

![API connection 03](images/00-connectionapi03.png)

Cliquez sur `Authorize`{.action}.

![API connection 04](images/00-connectionapi04.png)

Au travers de l'interface cliquez sur `Nutanix`{.action}.

![Cluster Redeployment 01](images/01-cluster-redeployment01.png)

Choisissez `Update nutanix cluster info`{.action}.

![Cluster Redeployment 02](images/01-cluster-redeployment02.png)

Remplissez ces données :

**ServiceName** : `Nom FQDN de votre cluster Nutanix`{.action}.
**redeploycluster** : `Cochez la case`{.action}.
**gatewayCidr** : `l'adresse IP de la paserelle suivi du masque de sous réseau`{.action}.

En dessous de **nodes* completez ces données :  

**ahvip** : `Adresse IP de l'hyperviseur du premier nœud`{.action}y.
**cvmip** : `Adresse IP de la CVM du second nœud`{.action}.

Cliquez sur le bouton en signe de `Plus`{.action}.

![Cluster Redeployment 03](images/01-cluster-redeployment03.png)

Rajouter les informations du deuxième nœud :

**ahvip** : `Adresse IP de l'hyperviseur du deuxième nœud`{.action}.
**cvmip** : `Adresse IP de la CVM du deuxième nœud`{.action}.

Cliquez sur le bouton en signe de `Plus`{.action}.

![Cluster Redeployment 04](images/01-cluster-redeployment04.png)

Inserer les information du dernier nœud :

**ahvip** : `Adresse IP de l'hyperviseur du dernier nœud`{.action}.
**cvmip** : `Adresse IP de la CVM du dernier nœud`{.action}.

Faites défilez la fenêtre du navigateur avec la `barre de défilement`{.action}.

![Cluster Redeployment 04](images/01-cluster-redeployment04.png)

Cochez `define property`{.action} cochez `Empty array`{.action}, choisissez dans **type** alone et saisir dans **vip** `L'adresse IP de Prim Central`{.action}.

Ensuite saisissez dans **prismElementVip** `L'adresse IP de Prim Element`{.action} suivi dans **redondancyFactor** `Numero du facteur de redondance`{.action} et dans **version** du  `numéro de version du cluster`{.action}

Cliquez sur `Execute`{.action} pour lancer le redeploiement du cluster.

![Cluster Redeployment 05](images/01-cluster-redeployment04.png)

> [!info]
> Le redeploiment du cluster durera au minimum deux heures il faudra attendre de recevoir un message
> dans la boite à lettre du compte client.

## Aller plus loin


[Utilisation de l'API d'OVHCLOUD](https://docs.ovh.com/fr/api/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
