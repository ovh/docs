---
title: Gestioon des segments
slug: nsx-t-segment-management
excerpt: Comment créer des segments et utiliser des segments
section: NSX-T
order: 02
---

**Dernière mise à jour le 12/12/2022**

> [!warning]
> Les guides concernant NSX-T dans la solution VMware ne sont pas définitifs, il seront modifiés lors de la sortie en version BETA et finalisés quand la version définitive sera prête. 
>

## Objectif

**Découvrir la création et l'utilisation des segment dans l'interface NSX-T et vCenter**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), celui-ci recevant les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX-T (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
- Etre connecté à votre interface vCenter.
- Avoir **NSX-T** déployé.

## Présentation

Dans une solution NSX-T un segment est un domaine de niveau 2 virtuel (nommé précemment logical switch) il peut être de deux types :

- **VLAN-backed segments** : la communication entre les hotes et les VM doit se faire au travers de VLANs et d'un switch de niveau 2.
- **Overlay-backed segments** : la connexion se fait à l'aide d'une surcouche logicielle entre les hotes et les VM.

Les segments sont liés à des zones de transports qui sont prédéfinies par OVHcloud. 

Les segments peuvent être reliés à **ovh-T1-gw** dans ce cas il faut créer une réseau avec une passerelle afin de permettre un trafic sortant au dela de ce segment, soit avec un autre segment soit avec l'extérieur du cluster.

## En pratiques

### Création d'un segment dans l'interface NSX-T.

Nous allons créer un segment relié à **Tier-1 Gateway** avec un sous réseau en 192.168.1.0/24 et une passerelle en 192.168.1.254 au travers d'un *Overlay-backed segment*.

A partir de l'interface NSX-T allez dans l'onglet `Networking`{.action}.

![01 Create Segment 01](images/01-create-segment01.png)

Cliquez à gauche sur `Segments`{.action}.

![01 Create Segment 02](images/01-create-segment02.png)

Cliquez à droite sur `ADD SEGMENT`{.action}.

![01 Create Segment 03](images/01-create-segment03.png)

Choisissez ces informations :

* **Name** : Nom de votre segment.
* **Connected Gateway** : gateway prédefinie ovh-T1-gw | Tier1.
* **Transport Zone** : zone prédéfinie ovh-tz-overlay.
* **Subnet** : Adresse la passerelle sur segment avec l'étendue comme par exemple 192.168.1.254/24.

Ensuite cliquez à droite sur `SAVE`{.action}.

![01 Create Segment 04](images/01-create-segment04.png)

Cliquez sur `NO`{.action}.

![01 Create Segment 05](images/01-create-segment05.png)

Le nouveau segment apparait dans la liste.

![01 Create Segment 06](images/01-create-segment06.png)

Toujours dans l'onglet `Networking` cliquez à gauche sur `Network Topology`{.action} pour voir le nouveau segment et son emplacement dans le réseau. 

![02 Display Network Topology 01](images/02-display-network-topology-with-onesegment01.png)

### Connexion d'une machine virtuelle à ce segment.

Allez dans l'interface vCenter de votre cluster Hosted Private Cloud.

Faites un clic droit sur la `machine virtuelle`{.action} et cliquez sur `Modifier les paramètres`{.action}.

![03 Connect Network Card to Segment 01](images/03-connect-network-card-vm-to-segment01.png)

Allez dans la barre de défilement à droite de votre adaptater réseau et choisissez `Parcourir`{.action}.

![03 Connect Network Card to Segment 02](images/03-connect-network-card-vm-to-segment02.png)

Sélectionnez le `réseau`{.action} qui porte le nom de votre segment. et cliquez sur `OK`{.action}.

![03 Connect Network Card to Segment 03](images/03-connect-network-card-vm-to-segment03.png)

Cliquez sur `OK`{.action}.

![03 Connect Network Card to Segment 04](images/03-connect-network-card-vm-to-segment04.png)

Maintenant que votre machine virtuelle est connecté au segment revenez sur l'interface NSX-T.

Allez dans l'onglet `Networking`{.action} choisissez `Network Topology`{.action}.

![04 display network topology with one segment and one vm 01](images/04-display-network-topology-with-onesegment-and-one-vm01.png)

La machine virtuelle associée au réseau apparait dans la topologie du réseau.

Aidez-vous de la première partie du guide pour créer un deuxième segment nommé ov2-segment avec ces paramètres **192.168.2.254/24** afin d'avoir deux segments :

* **ov1-segment** sur le sous-réseau **192.168.1.0/24**
* **ov2-segment** dans le sous réseau **192.168.2.0/24**

![05 display four VM on two segment01](images/05-display-four-vm-on-two-segment01.png)

Ensuite à partir de la console **vCenter**, mettez deux machines virtuelles sur le premier segment et deux autres sur le deuxième segment.

Revenez sur l'interface NSX-T dans `Network Topology`{.action}. pour faire apparaitre la nouvelle configuration réseau.

![05 display four VM on two segment02](images/05-display-four-vm-on-two-segment02.png)

Les deux segments sont reliés à la passerelle **ovh-T1-gw**, un routage entre les deux sous-réseau est activé sans aucunes restrictions réseaux par défaut.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

