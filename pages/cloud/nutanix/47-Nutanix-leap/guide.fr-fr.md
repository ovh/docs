---
title: Réplication avancée avec LEAP
slug: leap-replication
excerpt: "Mise en place de réplications avancées avec LEAP"
section: Plan de reprise d'activité
order: 05
---

**Dernière mise à jour le 07/06/2022**

## Objectif

Mettre en place Nutanix LEAP pour effectuer des réplications et des plans de reprises d'activités évolués avec **Prism Central**

## Présentation

Nutanix LEAP permet :

- de faire des réplication asynchrones, nearsync et synchrone. 
- de tester les réplications.
- d'automatiser la bascule sur un autre site suite à un évenement.
- Avec Leap il est possible de faire une réplication dans le cloud de Nutanix avec la solution Xi-Leap mais cette option n'est pas possible avec les pack de licence OVHcloud.



> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>


## Prérequis

- Disposer de deux clusters Nutanix dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté à vos clusters via **Prism Central**.
- Avoir mis en place une interconnexion entre deux clusters, par exemple via un VPN IPsec. ou vRack si il faut une réplication synchrone.
- Nutanix Leap a besoin de plus de resources sur la ou les VM Prism central en fonction du mode
    + Single Mode : 4Go de RAM
    + Scale Mode avec 3 machines virtuelles **Prism Central** : 8 Go de RAM par machines virtuelles

## En pratique

Notre plan de reprise d'activité au travers de Nutanix Leap sera mis en place entre deux CLUSTER, l'un se trouvant au Canada et l'autre se trouvant en France. Les deux clusters sont réliés par un VPN voici le résumé de la configuration :

- Lan d'administration sur cluster en France 192.168.0.0/24
- Lan d'administration du cluster au Canada 192.168.10.0/24

- Lan commun au deux clusters contenant les machines virtuelles du plan de reprise d'activité 192.168.50.0/24

Toutes les opérations se feront au travers de **Prism Central**
 
### Mise en service de LEAP

#### Ajout d'une adresse IP en iSCSI sur chaque cluster 
Avant d'activer **LEAP** il est nécessaire de rajouter une address IP pour les connexions iSCSI sur chacun des clusters

Connectez-vous à **Prism Element** au travers de **Prism Central** du cluster en France, pour vous aider vous pouvez utiliser ce guide [Hyperconvergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/).

Au travers du tableau de bord de **Prism Element** en haut à gauche cliquez sur `Le nom du cluster`{.action}.

![00 Add iSCSI address in FRANCE01](images/00-isci-add-address-france-01.png){.thumbnail}

Saisissez une `adresse IP du réseau d'administration non utilisée` dans **iSCSI Data Service IP**  et cliquez sur `Save`{.action}.

![00 Add iSCSI address in FRANCE01](images/00-isci-add-address-france-02.png){.thumbnail}

Effectuez la même opération sur le cluster se trouvant au Canada

Dans le tableau de bord de **Prism Element** en haut à gauche cliquez sur `Le nom du cluster`{.action}.

![01 Add iSCSI address in CANADA01](images/01-isci-add-address-canada-01.png){.thumbnail}

Saisissez une `adresse IP du réseau d'administration non utilisée` dans **iSCSI Data Service IP**  et cliquez sur `Save`{.action}.

![01 Add iSCSI address in CANADA01](images/00-isci-add-address-canada-02.png){.thumbnail}

#### Activation de LEAP

Revenez sur l'interface **Prism Central** du cluster se trouvant en France













### Connexion des deux clusters.

> [!warning]
> Il est impossible d'avoir des machines virtuelles qui utilisent **Domain Protection** à partir de **Prism Element** si l'on veut utiliser **Nutanix Leap** , il faudra s'assurer que les machines virtuells ne fassent plus partie du **Domain Protection**.
>


### Mise en place d'une réplication du site en FRANCE vers le site au CANADA.






### Activation d'un plan  de reprise d'activité.

### Test d'insdiponibilité d'un site






## Aller plus loin

[Documentation Nutanix LEAP](https://portal.nutanix.com/page/documents/details?targetId=Leap-Xi-Leap-Admin-Guide-v6_1:Leap-Xi-Leap-Admin-Guide-v6_1)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
