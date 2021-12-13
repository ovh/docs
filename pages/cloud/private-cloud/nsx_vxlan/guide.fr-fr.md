---
title: Comment créer un VxLAN
slug: nsx_creation_vxlan
excerpt: Découvrez comment créer des VxLANs sur votre NSX Edge Gateway
section: NSX
---

**Dernière mise à jour le 13/12/2021**

## Objectif

OVHcloud installe une base de 10 VxLANs sur la NSX Edge Gateway.

**Ce guide explique comment ajouter des VxLAN supplémentaires.**

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
- Avoir déployer une [NSX Edge Services Gateway](https://docs.ovh.com/fr/private-cloud/comment-deployer-une-nsx-edge-gateway/)

## En pratique

Dans l'interface vSphere, allez dans le Tableau de bord `Mise en réseau et sécurité`{.action}.

![Menu](images/en01dash.png){.thumbnail}


Sur la gauche de votre écran, naviguez vers `Commutateurs logiques`{.action}.<br>
La vue vous montre les vxlans existants.<br>
Cliquez sur `+ Ajouter`{.action} pour en ajouter un.

![SWITCHES](images/en02switches.png){.thumbnail}


Nommez le nouveau commutateur logique et choisissez vos options:
- La Zone de transport définit quels hôtes un commutateur logique peut atteindre. Par défaut, OVHcloud crée une zone de transport par datacenter.
- Le Mode de réplication typique est monodiffusion permettant la gestion du traffic entre les hôtes par les services NSX.
- IP Discovery limits the saturation of ARP traffic in individual VxLAN segments and is recommended
- MAC Learning builds a VLAN/MAC learning table on each vNIC. It is only recommended if you are using virtual network adapters that are performing VLAN trunking.<br>
Click `Add`{.action} when done.

![SWITCHES](images/en03new.png){.thumbnail}


Your VxLAN is now created and functional, you will find it in the Logical Switches view

![SWITCHES](images/en04created.png){.thumbnail}


It is also visible in the Networking view

![NETWORK](images/en05network.png){.thumbnail}


Congratulations and thank you.
