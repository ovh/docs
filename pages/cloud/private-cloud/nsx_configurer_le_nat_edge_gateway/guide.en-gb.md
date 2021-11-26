---
title: NSX Edge NAT Configuration
slug: nsx-edge-nat-configuration
excerpt: Use NAT rules to redirect traffic
section: NSX
order: 06
---

**Last updated 11/26/2021**

## Objective

NAT stands for network address translation. It’s a way to map multiple addresses to a single one.      
There are two types of NAT:
- DNAT stands for Destination NAT. It modifies the destination address and is used for inbound traffic.
- SNAT stands for Souce NAT. It modifies the source address and is used for outbound traffic.

**This guide explains how to create NAT rules**

## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))
- Have an [NSX Edge Services Gateway](https://docs.ovh.com/gb/en/private-cloud/how-to-deploy-an-nsx-edge-gateway/) deployed

## Instructions

### Interface access

In the vSphere interface menu, go to the `Networking and Security`{.action} dashboard.

![Menu](images/en01dash.png){.thumbnail}


On the left side, navigate to the `NSX Edges`{.action} section then click on the appliance you're setting up.

![NSX](images/en02nsx.png){.thumbnail}


Go to the `NAT`{.action} tab.


### DNAT


### SNAT

### Publish

Pour commencer, rendez-vous dans la partie "NSX Edges" afin de trouver la liste des Edges déjà déployées. Dans l'exemple ci-dessous nous avons déjà une Edge déployée sur laquelle il faut effectuer un double-clic.

![](images/content-docs-cloud-private-cloud-configure_edge_nat-images-configure_nsx_edge_nat_1.JPG){.thumbnail}

Rendez-vous dans l'onglet "NAT" afin d'avoir accès à la page de configuration des règles de NAT de la Edge sur laquelle vous êtes.

![](images/content-docs-cloud-private-cloud-configure_edge_nat-images-configure_nsx_edge_nat_2.PNG){.thumbnail}

Pour créer une règle, cliquez sur "Add" (petit "+" vert) afin d'avoir accès à deux types de règles possibles :

- "Add DNAT Rule" : pour créer une règle concernant le trafic qui a pour destination vos VMs (public vers privé) ;
- "Add SNAT Rule" : pour créer une règle concernant le trafic provenant de vos VMs (privé vers public).

![](images/content-docs-cloud-private-cloud-configure_edge_nat-images-configure_nsx_edge_nat_3.PNG){.thumbnail}

Le pare-feu de la Edge doit être actif pour que les règles de NAT soient prises en compte.

### Ajouter une règle DNAT

Le choix de "Ajouter une règle DNAT" vous propose la possibilité de l'appliquer sur chaque interface réseau de la Edge.

Vous pouvez configurer l'IP source du trafic (ou la plage complète, en indiquant le préfixe) au niveau de la carte réseau publique de la Edge ainsi que le protocole pris en compte.

Vous pouvez ensuite configurer le port appelé initialement et le router sur un port similaire ou différent en fonction du besoin vers une IP interne (ou une plage complète, en indiquant le préfixe).

![](images/content-docs-cloud-private-cloud-configure_edge_nat-images-configure_nsx_edge_nat_4.PNG){.thumbnail}

### Ajouter une règle SNAT

"Ajouter une règle SNAT" vous offre la possibilité de l'appliquer sur chaque interface réseau de la Edge.

Vous pouvez simplement configurer l'IP privée source (ou la plage complète, en indiquant le préfixe) et l'IP publique traduite afin de permettre la sortie du trafic.

![](images/content-docs-cloud-private-cloud-configure_edge_nat-images-configure_nsx_edge_nat_5.PNG){.thumbnail}

N'oubliez pas de publier les règles afin qu'elles soient prises en compte.

### Exemple de règles

Vous trouverez ci-dessous un exemple de configuration NAT.

- La règle 1 permet une sortie de l'intégralité de la plage privée configurée (192.168.50.0/24) quel que soit le port utilisé vers une IP publique unique configurée sur la Edge.

- La règle 2 permet une redirection d'une IP publique (Original IP Address, 213.186.33.99 qui est le DNS OVH utilisé en IP publique dans l'exemple) vers une IP privée (192.168.50.1 dans l'exemple) si l'IP publique est atteinte sur son port 80. Dans l'exemple, un appel sur le port 80 de l'IP publique redirige vers le port 80 de l'IP privée, mais le port pourrait être différent de part et d'autre.

![](images/content-docs-cloud-private-cloud-configure_edge_nat-images-configure_nsx_edge_nat_6.PNG){.thumbnail}

Selon votre version de NSX, des colonnes supplémentaires peuvent ou non être disponibles.*


## Go further

Join our community of users on <https://community.ovh.com/en/>.
