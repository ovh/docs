---
title: Configuration du DHCP
slug: nsx-t-dhcp-configuration
excerpt: Ajout d'un serveur DHCP à un segment
section: NSX-T
order: 03
---

**Dernière mise à jour le 07/02/2023**

> [!warning]
> Les guides concernant NSX-T dans la solution Hosted Private Cloud Powered by VMware ne sont pas définitifs, ils seront modifiés lors de la sortie en version BETA et finalisés quand la version définitive sera prête. 
>

## Objectif

**Comment faire pour configurer un serveur DHCP dans un segment Overlay ou VLAN**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), celui-ci recevant les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX-T (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
- Avoir **NSX-T** déployé avec un segment de type overlay configuré dans votre configuration NSX-T, vous pouvez vous aider de ce guide [Gestion des segments dans NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-segment-management).


## En pratique

Nous allons configurer le DHCP pour un segment en Overlay derrière la passerelle **ovh-t1-gw** et pour un segment sur un VLAN sur la passerelle **ovh-t0-gw**. 

### Configuration commune du DHCP pour tous les segments de type overlay

Tout d'abord nous allons créer une serveur DCHP commun à tous les segments en Overlay.

Au travers de l'interface NSX-T allez dans l'onglet `Networking`{.action} et cliquez sur `DHCP`{.action} à gauche dans la rubrique **IP Management**. Ensuite cliquez sur `ADD DHCP PROFILE`{.action}.

![01 Common DHCP configuration 01](images/01-common-dhcp-configuration01.png){.thumbnail}

Saisissez un `Nom`{.action} dans **Name** et cliquez sur `SAVE`{.action}

![01 Common DHCP configuration 02](images/01-common-dhcp-configuration02.png){.thumbnail}

Le serveur DCHP est actif il utilise une réseau en 100.96.0.1/30, n'utilisez pas ce réseau dans un de vos segments.

![01 Common DHCP configuration 03](images/01-common-dhcp-configuration03.png){.thumbnail}

### Affectation du DHCP à passerelle **ovh-t1-gateway**

Toujours dans l'onglet `Networking`{.action} cliquez sur `Tier-1-Gateways`{.action} à gauche dans la rubrique **Connectivity**.

![02 Attach DHCP to OVHT1 GATEWAY 01](images/02-attach-dhcp-to-ovht1-gateway01.png){.thumbnail}

Cliquez sur les `trois petits points`{.action} et choisissez `Edit`{.action} dans le menu.

![01 Common DHCP configuration 04](images/`Set DHCP Configuration`{.action}.

![02 Attach DHCP to OVHT1 GATEWAY 02](images/02-attach-dhcp-to-ovht1-gateway02.png){.thumbnail}

Cliquez sur `Set DHCP Configuration`{.action}.

![02 Attach DHCP to OVHT1 GATEWAY 03](images/02-attach-dhcp-to-ovht1-gateway03.png){.thumbnail}

Choississez `DHCP Server`{.action} dans **Type**, et votre `configuration DHCP`{.action} dans **DHCP Server Profile**. Ensuite cliquez sur `SAVE`{.action}.

![02 Attach DHCP to OVHT1 GATEWAY 04](images/02-attach-dhcp-to-ovht1-gateway04.png){.thumbnail}

Cliquez sur `SAVE`{.action}.

![02 Attach DHCP to OVHT1 GATEWAY 05](images/02-attach-dhcp-to-ovht1-gateway05.png){.thumbnail}

Cliquez sur `CLOSE EDITING`{.action}.

![02 Attach DHCP to OVHT1 GATEWAY 06](images/02-attach-dhcp-to-ovht1-gateway06.png){.thumbnail}

### Mise en place du DHCP sur un segment de type Overlay

A partir de l'interface NSX-T allez dans l'onglet `Networking`{.action} et cliquez sur `Segments`{.action} à gauche dans la rubrique **Connectivity**

![03 add DHCP ON Segment 01](images/03-configure-dhcp-overlay-segment01.png){.thumbnail}

Allez dans la rubrique `Segments`{.action}, cliquez sur l'icône de configuration indiqué avec `trois points verticaux`{.action} à gauche de votre segment et choisissez `Edit`{.action}.

![03 add DHCP ON Segment 02](images/03-configure-dhcp-overlay-segment02.png){.thumbnail}

Cliquez sur `Set DHCP CONFIG`{.action}.

![03 add DHCP ON Segment 03](images/03-configure-dhcp-overlay-segment03.png){.thumbnail}

Remplissez ces informations :

* **DHCP Type** : Laissez `Gateway DHCP Server`{.action}.
* **DHCP Ranges** : Saisissez votre étendue `192.168.1.10-192.168.1.200`{.action}.
* **DNS Servers** : Ecrivez le DHCP OVHcloud `2&3.186.33.99`{.action}.

Et cliquez sur `APPLY`{.action}.

![03 add DHCP ON Segment 04](images/03-configure-dhcp-overlay-segment01.png){.thumbnail}

Cliquez sur `SAVE`{.action}.

![03 add DHCP ON Segment 05](images/03-configure-dhcp-overlay-segment06.png){.thumbnail}

Cliquez sur `CLOSE EDITIND`{.action}.

![03 add DHCP ON Segment 06](images/03-configure-dhcp-overlay-segment06.png){.thumbnail}

Les machines virtuelles sur ce segment peuvent maintenant être configurées en DHCP.

### Mise en place du DCHP sur un segment de type VLAN

Nous allons activer un serveur DHCP sur un segment de type VLAN connecté 

## Aller plus loin

[Premiers pas avec NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-first-steps/)

[Gestion des segments dans NSX-T](https://docs.ovh.com/fr/nsx-t-segment-management/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

