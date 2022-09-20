---
title: Interconnexion de clusters au travers de vRACK
slug: nutanix-vrack-interconnection
excerpt: "Mise en place d'une interconnexion de deux clusters au travers d'un vRACK d'OVHCLOUD"
section: Plan de reprise d'activité
order: 03
---

**Dernière mise à jour le 19/09/2022**

## Objectif

Ce guide vous présente comment interconnecter deux clusters Nutanix Fournis par OVHcloud au travers d'un même vRack sur deux sites OVHcloud distants avec une latence de moins de 5ms. Le guide montre l'interconnexion entre les datacenters de Gravelines et celui de Roubaix. 


> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer de deux clusters Nutanix fournis par OVHcloud, sur des sites différents avec une latence inférieurs à 5 milliseconde.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur vos clusters via Prism Central.


## En pratique

Nous allons interconnecter deux clusters Nutanix sur deux sites distants l'un à Gravelines et l'autre à Roubaix au travers du même vRack. Pour plus d'informations concernant les vRack OHVcloud vous pouvez consulter cette présentation [vRack](https://www.ovh.com/fr/solutions/vrack/)

### Préparation des deux clusters avant l'interconnexion

Pour que les deux clusters puissent communiquer correctement il faut qu'ils soient sur le même adresse IP privé dans notre guide nous allons utiliser le plan IP `192.168.0.0/22` avec ces adresses :

 **Cluster1** à Gravelines

- Serveur 1 : adresse VM **CVM** `192.168.2.1`, adresse IP hyperviseur **AHV** `192.168.2.21`.
- Serveur 2 : adresse VM **CVM** `192.168.2.2`, adresse IP hyperviseur **AHV** `192.168.2.22`.
- Serveur 3 : adresse VM **CVM** `192.168.2.3`, adresse IP hyperviseur **AHV** `192.168.2.23`.
- Adresse virtuelle de **Prism Element** : `192.168.2.100`.
- Adresse IP  **Prism Central** :`192.168.2.101`.
- Etendue réservée pour le load balancer : `192.168.2.128 à 192.168.2.159`.
- Passerelle : `192.168.2.254`.
- Version du cluster : `6.1`.

**Cluster2** à Roubaix

- Serveur 1 : adresse VM **CVM** `192.168.1.1`, adresse IP hyperviseur **AHV** `192.168.1.21`.
- Serveur 2 : adresse VM **CVM** `192.168.1.2`, adresse IP hyperviseur **AHV** `192.168.1.22`.
- Serveur 3 : adresse VM **CVM** `192.168.1.3`, adresse IP hyperviseur **AHV** `192.168.1.23`.
- Adresse virtuelle de **Prism Element** : `192.168.1.100`.
- Adresse IP  **Prism Central** :`192.168.1.101`.
- Etendue réservée pour le load balancer : `192.168.1.128 à 192.168.1.159`.
- Passerelle : `192.168.2.254`.
- Version du cluster : `6.1`.

Aidez-vous de ce guide pour redéployer vos deux clusters [Redéploiment personnalisé de votre Cluster](https://docs.ovh.com/fr/nutanix/cluster-custom-redeployment/)

### Arret d'une des deux passerelles OVHgateway

la connexion Internet sortante est fournie par les machines virtuelles OVHGateway avec la même adresse IP sur les deux sites nous allons arrêter la machine virtuelle du **Cluster2** à Roubaix.

Au travers de **Prism Central** dans la gestion des machines virtuelles sélectionnez `OVHgateway`, ensuite choisissez `GUest Shutdown`{.action} dans le menu `Actions`{.action}.

![01 OVHgateway Shutdown](images/01-ovhgateway-shutdown01.png){.thumbnail}









Connectez vous au serveur Prism Central de Roubaix au travers de l'URL https://clustername.nutanix.ovhcloud.net:9440 et 

### Modification de la configuration des vRack

Cette opération consiste à supprimer l'affectation du vRack du deuxième site et d'ensuite d'affecter le vRack du premier site au deuxième site. Cette opération se fait à partir de l'espace client OVHcloud. 

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). 

Allez sur le 






### Changement des informations concernant le load balancer







## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
