---
title: 'Mise en service de l'offre OVHcloud Connect'
slug: occdedicated-delivery
excerpt: 'Processus de mise en service de l’offre OVHcloud Connect Dedicated'
section: Premiers pas
---

**Dernière mise à jour le 07/09/2020**

## Objectif

OVHCloud Connect permet de connecter votre réseau d'entreprise de manière totalement isolée et sécurisée jusqu'à votre réseau privé chez OVHcloud (datacentres OVHcloud sur une échelle locale et internationale).

**Ce guide détaille la mise en place d'une interconnexion OVHcloud Connect**.

## Prérequis

### Demander les documentations OVHcloud Connect au support et à votre Account Manager 

Deux guides sont disponibles :

* Le Deployment Guide faisant office de document de référence afin de connaître tous les détails techniques liés au produit OVHcloud Connect.
* Le « Cookbook » qui condense les informations du Deployment Guide et qui fournit également des exemples de configurations possibles.

### Définir l'architecture cible

En fonction de vos besoins, choisissez entre une ou plusieurs interconnexions de niveau 2 ou de niveau 3 à une vitesse de 1 Gbps ou 10 Gbps. L'interconnexion de niveau 3 avec le protocole  BGP autorise plus de souplesse et de redondance avec de la haute-disponibilité entre différents points de présence (PoPs).

Si vous avez besoin de davantage d'informations, vous pouvez contacter votre Account Manager afin d'organiser un atelier avec votre fournisseur de réseau WAN et une ressource OVHcloud experte dans la solution OVHcloud Connect.

## En pratique

### Étape 1: Commander directement sur le site OVHcloud la ou les interconnexions OVHcloud Connect

En suivant ce [**lien**](https://www.ovh.com/fr/solutions/ovhcloud-connect/){.external}, vous pourrez commander, avec vos identifiants OVHcloud, **chaque** interconnexion. Les caractéristiques suivantes vous seront proposées :

* La vitesse maximale du port: 

    - 1 Gbps ;
    - 10 Gbps.
<br>

* Le nombre de ports sur les routeurs OVHcloud Connect: 

    - 1 port ; 
    - 2 ports (L2: protocole LACP obligatoire, L3: BGP obligatoire) pour avoir une redondance locale au PoP.
<br>

* Le point de présence (PoP) du OVHcloud Connect: 

    - La liste de nos points de présence OVHcloud Connect est visible sur ce [**lien**](https://www.ovh.com/fr/solutions/ovhcloud-connect/){.external} et est mise à jour régulièrement.
    - En cas de demande de connexion à un point de présence (PoP) non disponible à ce jour, contactez le support ou votre Account Manager pour obtenir plus d'informations.
<br>

* La couche réseau du modèle OSI de l'interconnexion: 

    - Niveau 2 : Ethernet; 
    - Niveau 3 : BGP.

En cas d'architecture avec deux interconnexions OVHcloud Connect dans deux points de présence différents, vous devrez passer 2 commandes différentes.

Une fois votre commande régularisée, vous recevrez, à l'adresse de votre contact de facturation, un e-mail récapitulatif contenant :

* Les informations de configuration à fournir au support OVHcloud pour la mise en place de votre OVHcloud Connect; 

* La Letter of Authorization (LOA), afin que vous ou votre fournisseur puissiez commander la cross-connexion dans la MeetMe Room (MMR) auprès du gestionnaire du point de présence.

### Étape 2 : commander, auprès de votre fournisseur de réseau WAN, l'interconnexion vers le(s) point(s) de présence OVHcloud Connect

Votre fournisseur de réseau WAN ou vos équipes techniques devront aussi commander la cross-connexion dans la MeetMe Room (MMR) auprès du gestionnaire du point de présence.

### Étape 3 : renvoyer au support la configuration de votre ou vos interconnexions OVHcloud Connect

La configuration de votre ou vos interconnexions OVHcloud Connect doit être validée au préalable par vos équipes techniques ou votre fournisseur de réseau WAN.

Les informations à fournir sont les suivantes pour les configurations de niveau 3 :

**Côté point de présence (PoP)**

| Nom du PoP    | Vitesse du port | Réseau /30 d'interconnexion | AS id privé pour les routeurs OVHcloud | AS id privé ou public pour vos routeurs |
|:-------:|:------:|:-----:|:---:|:---:|
| PoP 1   | 1 or 10 Gbps | x.x.x.x/30 | entre 64 512 et 65 534 | xxx |
| PoP 2 (option) |1 or 10 Gbps |x.x.x.x/30 | le même qu'au dessus|  le même qu'au dessus |  

Les routeurs OVHcloud Connect côté PoP auront la première adresse IP utilisable du réseau /30.

**Côté Datacenter OVHcloud**

| Nom du Datacenter | Réseau d'arrivée a minima /28 dans le vRack | Si routage statique dans le vRack, route statique | Si routage statique dans le vRack, prochain saut ( next hop ) | Si routage dynamique BGP dans le vRack, AS id privé pour vos routeurs virtuels | Si routage dynamique BGP dans le vRack, adresse IP de votre routeur virtuel de réseau /28| ID de votre vRack |
|:-------:|:------:|:-----:|:---:|:---:|:---:|:---:|
| DC1 | x.x.x.x/28 |  |  | | |pn-xxx |
| DC2 (option) | différent de celui du dessus |  |  | | | le même qu'au dessus |

Côté datacenter, les trois premières adresses IP utilisables du réseau d'arrivée souhaitée dans le tableau ci-dessus seront réservées pour les routeurs OVHcloud Connect (la première IP pour l'adresse virtuelle du cluster VRRP, la deuxième IP pour le routeur 1 du cluster, la troisième IP pour le routeur 2 du cluster). 

En cas de questions sur la configuration à mettre en place, contactez le support ou votre Account Manager.


### En cas de difficultés lors de la mise en place d'une interconnexion OVHcloud Connect

Lors de la mise en place, les problèmes les plus fréquemment rencontrés sont :

* L'absence de croisement entre les éléments de réception et transmissions RX/Tx entre les routeurs OVHcloud et « vos » routeurs. Demandez alors l'inversement de la fibre optique au gestionnaire du point de présence;

* Vérifiez les niveaux optiques en émission/réception. Si après croisement des paires, aucun signal en réception n'est présent, faites vérifier à nouveau la cross-connect et les positions avec la LOA.

* Désactivez l'auto-négociation. Forcer la vitesse ne suffit pas toujours, des commandes supplémentaires peuvent être nécessaires.

| Modèle OS | Commande |
|:---------:|:--------------------------------:|
| IOS | speed nonegotiate |
| NX-OS | no negotiation auto |

* Vérifiez votre type de SFP/SFP+: 1000Base-LX/LH pour une vitesse de 1Gb/s, 10GBase-LR pour une vitesse de 10Gb/s

* L'annonce de plus de 100 réseaux à travers chaque session BGP entraîne une extinction automatique de la session. Pour se prémunir de cet arrêt, vous devez consolider vos réseaux;

* En cas de doute sur la configuration, contactez le support pour avoir un extrait de celle mise en place par OVHcloud.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
