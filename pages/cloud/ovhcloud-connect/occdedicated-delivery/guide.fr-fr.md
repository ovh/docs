---
title: 'Mise en service'
slug: occdedicated-delivery
excerpt: 'Processus de mise en service de l’offre OVHcloud Connect Dedicated'
section: Dedicated
---

**Dernière mise à jour le 12/12/2019**

## Objectif

Nous allons lister les différentes étapes de la mise en place d'une interconnexion OVHcloud Connect.

### Étape 1 : demander les documentations OVHcloud Connect au support et à votre Account Manager 

Deux guides sont disponibles :

* Le Deployment Guide faisant office de document de référence afin de connaître tous les détails techniques liés au produit OVHcloud Connect.

* Le « Cookbook » qui condense les informations du Deployment Guide et qui fournit également des exemples de configurations possibles.

### Étape 2 : définir l'architecture cible

En fonction de vos besoins, choisissez entre une ou plusieurs interconnexions de niveau 2 ou de niveau 3 à une vitesse de 1 Gbps ou 10 Gbps . L'interconnexion de niveau 3 avec le protocole  BGP autorise plus de souplesse et de redondance avec de la haute-disponibilité entre différents points de présence (PoPs).

Si vous avez besoin de davantage d'informations, vous pouvez contacter votre Account Manager afin d'organiser un atelier avec votre fournisseur de réseau WAN et une ressource OVHcloud experte dans la solution OVHcloud Connect.


### Étape 3 : commander directement sur le site OVHcloud la ou les interconnexions OVHcloud Connect

En suivant ce [**lien**](https://www.ovh.com/fr/solutions/ovhcloud-connect/){.external}, vous pourrez commander, avec vos identifiants OVHcloud, **chaque** interconnexion. Les caractéristiques suivantes vous seront proposées :

* La vitesse maximale du port: 

    - 1 Gbps ;
    - 10 Gbps.

* Le nombre de ports sur les routeurs OVHcloud Connect: 

    - 1 port ; 
    - 2 ports grâce au protocole LACP pour avoir une redondance locale au PoP.

* Le point de présence (PoP) du OVHcloud Connect: 

    - La liste de nos points de présence OVHcloud Connect est visible sur ce [**lien**](https://www.ovh.com/fr/solutions/ovhcloud-connect/){.external} et est mise à jour régulièrement.
    - En cas de demande de connexion à un point de présence (PoP) non disponible à ce jour, contactez le support ou votre Account Manager pour avoir plus d'informations.

* La couche réseau du modèle OSI de l'interconnexion: 

    - Niveau 2 : Ethernet; 
    - Niveau 3 : BGP.

En cas d'architecture avec deux interconnexions OVHcloud Connect dans deux points de présence différents, vous devrez passer 2 commandes différentes.

Une fois votre commande régularisée, vous recevrez, à l'adresse de votre contact de facturation, un e-mail récapitulatif contenant :

* Les informations de configuration à fournir au support OVHcloud pour la mise en place de votre OVHcloud Connect; 

* La Letter of Authorization (LOA), afin que vous ou votre fournisseur puissiez commander la cross-connexion dans la MeetMe Room (MMR) auprès du gestionnaire du point de présence.

### Étape 4 : commander, auprès de votre fournisseur de réseau WAN, l'interconnexion vers le ou les points de présence OVHcloud Connect

Votre fournisseur de réseau WAN ou vos équipes techniques devront aussi commander la cross-connexion dans la MeetMe Room (MMR) auprès du gestionnaire du point de présence.

### Étape 5 : renvoyer au support la configuration de votre ou vos interconnexions OVHcloud Connect, validée par vos équipes techniques ou votre fournisseur de réseau WAN

Les informations à fournir sont les suivantes pour les configurations de niveau 3 :

**Côté point de présence (PoP)**

| Nom du PoP    | Vitesse du port | Réseau /30 d'interconnexion | AS id privé pour les routeurs OVH | AS id privé ou public pour vos routeurs |
|:-------:|:------:|:-----:|:---:|:---:|
| PoP 1   | 1 or 10 Gbps | x.x.x.x/30 | entre 64 512 et 65 534 | xxx |
| PoP 2 (option) |1 or 10 Gbps |x.x.x.x/30 | le même qu'au dessus|  le même qu'au dessus |  

Les routeurs OVHcloud Connect côté PoP auront la première adresse IP utilisable du réseau /30.

**Côté Datacenter OVHcloud**

| Nom du Datacenter | Réseau d'arrivée a minima /28 dans le vRack | Si routage statique dans le vRack, route statique | Si routage statique dans le vRack, prochain saut ( next hop ) | Si routage dynamique BGP dans le vRack, AS id privé pour vos routeurs virtuels | Si routage dynamique BGP dans le vRack, adresse IP de votre routeur virtuel de réseau /28| ID de votre vRack |
|:-------:|:------:|:-----:|:---:|:---:|:---:|:---:|
| DC1 | x.x.x.x/28 |  |  | | |pn-xxx |
| DC2 (option) | différent de celui du dessus |  |  | | | le même qu'au dessus |

Côté datacenter, les routeurs OVHcloud Connect  auront les trois premières adresses IP utilisables du réseau d'arrivée souhaitée dans le tableau du ci-dessus (La première IP pour le routeur 1 du cluster, la deuxième IP pour le routeur 2 du cluster et la troisième IP pour l'adresse de VRF). 


En cas de questions sur la configuration à mettre en place, contactez le support ou votre Account Manager.


### 6. En cas de problèmes lors de la mise en place d'une interconnexion OVHcloud Connect

Lors de la mise en place, les problèmes les plus fréquemment rencontrés sont :

* L'absence de croisement entre les éléments de reception et transmissions RX/Tx entre les routeurs OVHcloud et "vos" routeurs. Demandez l'inversement de la fibre optique au gestionnaire du point de présence;

* L'annonce de plus de 100 réseaux à travers les sessions BGP entraine une extinction automatique du ou des ports. Pour se prémunir de cet arrêts, vous devez consolider vos réseaux ou utiliser des routes reflectors;

* En cas de doute sur la configuration, contactez le support pour avoir un extrait de celle mise en place par OVHcloud.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>