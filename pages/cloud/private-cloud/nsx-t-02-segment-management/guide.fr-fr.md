---
title: Gestion des segments dans NSX-T
slug: nsx-t-segment-management
excerpt: Comment créer des segments et les utiliser
section: NSX-T
order: 02
---

**Dernière mise à jour le 10/02/2023**

> [!warning]
> Les guides concernant NSX-T dans la solution Hosted Private Cloud Powered by VMware ne sont pas définitifs, ils seront modifiés lors de la sortie en version BETA et finalisés quand la version définitive sera prête. 
>

## Objectif

**Découvrir la création et l'utilisation des segment dans l'interface NSX-T et vCenter**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), celui-ci recevant les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX-T (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
- Avoir **NSX-T** déployé.

## Présentation

Dans une solution NSX-T un segment est un domaine de niveau 2 virtuel (nommé précédemment logical switch) il peut être de deux types :

* **VLAN-backed segments** : La communication entre les hôtes et les machines virtuelles se fait au travers de VLANs et d'un switch de niveau 2. Pour que ces segments puissent communiquer avec les éléments de NSX-T (Internet et les autres segments) il faut rajouter une interface sur les passerelles de type **Tier-1 Gateways** comme **ovh-T1-gw**.

* **Overlay-backed segments** : La connexion se fait à l'aide d'une surcouche logicielle qui établit des tunnels entre les hôtes et les machines virtuelles. Lors de la configuration d'un segment de ce type il est obligatoire de rajouter une adresse dans un sous-réseau pour permettre la communication en dehors de ce segment. Ils doivent être connectés aux passerelles de type **Tier-1 Gateways** comme **ovh-T1-gw**.

Les segments sont liés à des zones de transports qui sont prédéfinies par OVHcloud. 

* **system-owned-vlan-transport-zone-for-rtep | VLAN** : Zone prévue pour les réseaux étendues RTEP
* **system-owned-vlan-transport-zone-for-evpn | VLAN** : Zone prévue pour les VPN.
* **ovh-tz-overlay | VLAN** : Zone pour les segments de type Overlay derrière les passerelles de type **Tier-1 Gateways** comme **ovh-T1-gw**.
* **ovh-tz-public | VLAN** : Zone connectée au réseau public sur un VLAN unique fourni par OVHcloud.
* **ovh-tz-vrack | VLAN** : Zone reliée au vRACK Ovhcloud sur lequel il est possible de créer des segments avec un VLAN particulier.


## En pratique

### Création d'un segment de type overlay dans l'interface NSX-T

Nous allons créer un segment *Overlay-backed segment* relié à **ovh-T1-gw** dans un sous réseau en 192.168.1.0/24 avec comme passerelle 192.168.1.254.

A partir de l'interface NSX-T allez dans l'onglet `Networking`{.action}.

![01 Create Segment 01](images/01-create-segment01.png){.thumbnail}

Cliquez à gauche sur `Segments`{.action}.

![01 Create Segment 02](images/01-create-segment02.png){.thumbnail}

Cliquez à droite sur `ADD SEGMENT`{.action}.

![01 Create Segment 03](images/01-create-segment03.png){.thumbnail}

Choisissez ces informations :

* **Name** : Nom de votre segment.
* **Connected Gateway** : gateway prédefinie ovh-T1-gw | Tier1.
* **Transport Zone** : zone prédéfinie ovh-tz-overlay.
* **Subnet** : Adresse de la passerelle du segment dans ce format 192.168.1.254/24.

Ensuite cliquez à droite sur `SAVE`{.action}.

![01 Create Segment 04](images/01-create-segment04.png){.thumbnail}

Cliquez sur `NO`{.action}.

![01 Create Segment 05](images/01-create-segment05.png){.thumbnail}

Le nouveau segment apparait dans la liste.

![01 Create Segment 06](images/01-create-segment06.png){.thumbnail}

Toujours dans l'onglet `Networking` cliquez à gauche sur `Network Topology`{.action} pour voir le nouveau segment et son emplacement dans le réseau. 

![02 Display Network Topology 01](images/02-display-network-topology-with-onesegment01.png){.thumbnail}

### Connexion d'une machine virtuelle à un segment de type overlay.

Allez dans l'interface vCenter de votre cluster Hosted Private Cloud.

Faites un clic droit sur la `machine virtuelle`{.action} et cliquez sur `Modifier les paramètres`{.action}.

![03 Connect Network Card to Segment 01](images/03-connect-network-card-vm-to-segment01.png){.thumbnail}

Allez dans la barre de défilement à droite de votre adaptateur réseau et choisissez `Parcourir`{.action}.

![03 Connect Network Card to Segment 02](images/03-connect-network-card-vm-to-segment02.png){.thumbnail}

Sélectionnez le `réseau`{.action} qui porte le nom de votre segment. et cliquez sur `OK`{.action}.

![03 Connect Network Card to Segment 03](images/03-connect-network-card-vm-to-segment03.png){.thumbnail}

Cliquez sur `OK`{.action}.

![03 Connect Network Card to Segment 04](images/03-connect-network-card-vm-to-segment04.png){.thumbnail}

Maintenant que votre machine virtuelle est connectée au segment revenez sur l'interface NSX-T.

Allez dans l'onglet `Networking`{.action} choisissez `Network Topology`{.action}.

![04 display network topology with one segment and one vm 01](images/04-display-network-topology-with-onesegment-and-one-vm01.png){.thumbnail}

La machine virtuelle associée au réseau apparait dans la topologie du réseau.

Aidez-vous de la première partie du guide pour créer un deuxième segment nommé ov2-segment avec ces paramètres **192.168.2.254/24** afin d'avoir deux segments connectés à **ovh-T1-gw**.

![05 display four VM on two segment01](images/05-display-four-vm-on-two-segment01.png){.thumbnail}

Ensuite à partir de la console **vCenter**, mettez deux machines virtuelles sur le premier segment et deux autres sur le deuxième segment.

Revenez sur l'interface NSX-T dans `Network Topology`{.action} pour faire apparaitre la nouvelle configuration réseau.

![05 display four VM on two segment02](images/05-display-four-vm-on-two-segment02.png){.thumbnail}

Les deux segments sont reliés à la passerelle **ovh-T1-gw**, le routage entre les deux sous-réseaux est activé sans aucunes restrictions réseaux par défaut.

### Création d'un segment sur un VLAN 

Au travers de l'interface de NSX-T cliquez allez sur l'onglet `Networking`{.action} et cliquez sur `Segments`{.action} à gauche dans la rubrique **Connectivity**.

![06 Add vlan segment 01](images/06-add-vlan-segment01.png){.thumbnail}

Remplissez ces informations :

* **Name** : Saisissez `vlan100-vrack-segment`.
* **Transport Zone** : Sélectionnez `ovh-tz-vrack`.
* **VLAN** : Tapez le nombre `100`.
* **Subnets** : Saisissez l'adresse et le range de la passerelle sur ce segment `192.168.100.254/24.

Ensuite cliquez sur `SAVE`{.action}.

![06 Add vlan segment 02](images/06-add-vlan-segment02.png){.thumbnail}

Cliquez sur `NO`{.action}.

![06 Add vlan segment 03](images/06-add-vlan-segment03.png){.thumbnail}

### Connexion d'un segment de type VLAN à la passerelle **ovh-T1-gw**

Vous pouvez router le réseau venant d'un segment de type VLAN vers Internet et les autres segments en créant une interface sur la passerelle **ovh-T1-gw**. Lors de la création de l'interface il faut utiliser la même adresse IP que celle indiquée dans le sous-réseau du segment.

Au travers de l'interface NSX-T allez dans l'onglet `Networking`{.action} et cliquez sur `Tier-1 Gateways`{.action} à gauche dans la rubrique **Connectivity**.

Ensuite cliquez sur le `trois points de suspensions verticaux`{.action} et choisissez `Edit`{.action} dans le menu

![07 add interfaces to ovh-T1-gw with vlan 01](images/07-add-interface-on-ovh-t1-gw01.png){.thumbnail}

Cliquez sur la `Flêche vers le bas`{.action} à gauche de **SERVICE INTERFACES** et cliquez sur `Set`{.action} qui vient de s'afficher à droite de **Service Interfaces**.

![07 add interfaces to ovh-T1-gw with vlan 02](images/07-add-interface-on-ovh-t1-gw02.png){.thumbnail}

Cliquez sur `ADD INTERFACE`{.action}.

![07 add interfaces to ovh-T1-gw with vlan 03](images/07-add-interface-on-ovh-t1-gw03.png){.thumbnail}

Choisissez ces informations :

* **Name** : Saisissez `vlan100-interface` comme nom de votre interfaces.
* **IP Address / Mask** : Saisissez l'adresse IP de l'interface `192.168.100.254/24` qui doit correspondre à la passerelle.
* **Connected To(Segment)** : Prenez le segment qui est sur le vlan 100 sur le vrack nommé `vlan100-vrack-segment`.

Ensuite cliquez sur `SAVE`{.action} pour valider la création de l'interface sur **ovh-t0-gw**.

![07 add interfaces to ovh-T1-gw with vlan 04](images/07-add-interface-on-ovh-t1-gw04.png){.thumbnail}

Cliquez sur `CLOSE`{.action}

![07 add interfaces to ovh-T1-gw with vlan 05](images/07-add-interface-on-ovh-t1-gw05.png){.thumbnail}

Le nombre 1 à coté de **Service Interfaces** indique que l'interface est créée, cliquez sur `CLOSE EDITING`{.action} pour finaliser la création de l'interface.

![07 add interfaces to ovh-T1-gw with vlan 05](images/07-add-interface-on-ovh-t1-gw06.png){.thumbnail}

Vous pouvez maitenant vous connecter en dehors de ce segment au travers de l'interface avec la passerelle 192.168.100.254/24.

### Affectation d'un segment de type VLAN à une machine virtuelle

Allez dans votre interface vSphere et faites un `clic droit`{.action} sur votre machine virtuelle et choisissez `Modifier les paramètres`{.action}.

![08 connect VM to VLAN segment 01](images/08-connect-vm-to-vlan-segment01.png){.thumbnail}

Positionnez-vous sur votre adapteur réseau et cliquez sur `Parcourir`{.action}.

![08 connect VM to VLAN segment 02](images/08-connect-vm-to-vlan-segment02.png){.thumbnail}

Cliquez sur le `segment`{.action} associé à votre VLAN et cliquez sur `OK`{.action}.

![08 connect VM to VLAN segment 03](images/08-connect-vm-to-vlan-segment03.png){.thumbnail}

Cliquez sur `OK`{.action} pour valider les changements.

![08 connect VM to VLAN segment 04](images/08-connect-vm-to-vlan-segment04.png){.thumbnail}

### Affichage d'une topologie réseau avec des segments en overlay et d'autres segments sur des VLAN

Revenez dans l'interface NSX-T, allez sur l'onglet `Networking`{.action}, et cliquez à gauche sur `Network Topology`{.action} pour afficher une vue graphique du réseau. Vous verrez les réseaux de type Overlay et ceux de type VLAN connectées au travers d'une INTERFACE sur **ovh-t1-gw**.

![09 display network topology vlan overlay01](images/09-display-network-topology-vlan-overlay01.png){.thumbnail}

## Aller plus loin

[Premiers pas avec NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-first-steps/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

