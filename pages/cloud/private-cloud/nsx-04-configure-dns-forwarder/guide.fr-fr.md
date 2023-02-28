---
title: Configuration du redirecteur DNS dans NSX
slug: nsx-configure-dns-forwarder
excerpt: Découvrez comment ajouter un redirecteur DNS à NSX
section: NSX
order: 04
updated: 2023-02-27
---

**Dernière mise à jour le 27/02/2023**

## Objectif

Il est possible d'utiliser un redirecteur DNS dans NSX. Son rôle est de centraliser toutes les requêtes DNS et de les rediriger vers des serveurs DNS externes, ce qui permet de réduire le flux réseau. Vous pouvez attacher le redirecteur DNS sur la passerelle nord-sud (ovh-T0-gw) ou la passerelle est-ouest (ovh-T1-gw), en fonction de vos besoins.

**Découvrez comment configurer un redirecteur DNS dans NSX.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud powered by VMware](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), celui-ci recevant les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)).
- Avoir **NSX** déployé avec un segment configuré dans votre configuration NSX. Vous pouvez vous aider de notre guide sur la [gestion des segments dans NSX](https://docs.ovh.com/fr/private-cloud/nsx-segment-management).

## En pratique

Nous allons créer un redirecteur DNS et l'attacher à la passerelle nord-sud (ovh-T0-gw), il sera utilisable sur l'ensemble des segments de NSX.

### Configuration du redirecteur DNS

Dans l'interface NSX, allez dans l'onglet `Networking`{.action} et cliquez sur `DNS`{.action} à gauche dans la rubrique **IP Management**. Cliquez ensuite sur `ADD DNS SERVICE`{.action}.

![Configure DNS forwarder 01](images/01-configure-dns-forwarder01.png){.thumbnail}

Renseignez ces informations :

- **Name** : nom de votre service, par exemple `dns-forwarder`.
- **Tier-0/Tier-1 Gateway** : votre passerelle Nord-Sud `ovh-T0-gw`.
- **DNS Service IP** : adresse IP privée non utilisé dans vos segments comme `192.168.200.1`.

Cliquez ensuite sur les `trois points verticaux`{.action} en dessous de **Default DNS Zone**.

![Configure DNS forwarder 02](images/01-configure-dns-forwarder02.png){.thumbnail}

Cliquez sur `Add New Default Zone`{.action}.

![Configure DNS forwarder 03](images/01-configure-dns-forwarder03.png){.thumbnail}

Renseignez ces valeurs :

- **Name** : nom de la zone, par exemple `cdns.ovh.net`.
- **DNS Servers** : serveur DNS OVHcloud `213.186.33.99`.

Cliquez ensuite sur `SAVE`{.action}.

![Configure DNS forwarder 04](images/01-configure-dns-forwarder04.png){.thumbnail}

Cliquez à nouveau sur `SAVE`{.action}.

![Configure DNS forwarder 05](images/01-configure-dns-forwarder05.png){.thumbnail}

Votre redirecteur DNS est actif et utilisable sur tous vos segments en Overlay ou VLAN connectés à votre passerelle nord-sud (ovh-t0-gw).

![Configure DNS forwarder 06](images/01-configure-dns-forwarder06.png){.thumbnail}

### Modification du serveur DHCP pour utiliser un redirecteur DNS

Si vous avez configuré des serveurs DHCP dans NSX comme indiqué dans notre guide de [configuration du DHCP](https://docs.ovh.com/fr/private-cloud/nsx-dhcp-configuration), vous pouvez modifier la configuration pour utiliser le redirecteur DNS dans vos configurations DHCP.

Nous allons voir comment modifier le serveur DNS sur la configuration DHCP d'un de vos segments.

Restez sur l'onglet `Networking`{.action} et cliquez sur `Segments`{.action} à gauche dans la rubrique **Connectivity**. 

Cliquez ensuite sur les `trois points verticaux`{.action} à coté de votre segment et cliquez sur `Edit`{.action} dans le menu.

![Modify DHCP overlay segment 01](images/02-modify-dhcp-overlay-segment01.png){.thumbnail}

Cliquez sur `EDIT DHCP CONFIG`{.action}.

![Modify DHCP overlay segment 02](images/02-modify-dhcp-overlay-segment02.png){.thumbnail}

Cliquez sur la `croix`{.action} à droite du DNS existant dans l'option **DNS Servers**, afin de l'enlever de la configuration.

![Modify DHCP overlay segment 03](images/02-modify-dhcp-overlay-segment03.png){.thumbnail}

Ajoutez, dans **DNS Servers**, l'adresse IP de votre redirecteur DNS, par exemple `192.168.200.1`{.action} et cliquez sur `APPLY`{.action}.

![Modify DHCP overlay segment 04](images/02-modify-dhcp-overlay-segment04.png){.thumbnail}

Cliquez sur `SAVE`{.action}.

![Modify DHCP overlay segment 05](images/02-modify-dhcp-overlay-segment05.png){.thumbnail}

Cliquez sur `CLOSE EDITING`{.action}.

![Modify DHCP overlay segment 06](images/02-modify-dhcp-overlay-segment06.png){.thumbnail}

Le paramétrage DHCP de votre segment utilise maintenant le redirecteur DNS créé précédemment.

## Aller plus loin

[Premiers pas avec NSX](https://docs.ovh.com/fr/private-cloud/nsx-first-steps/)

[Gestion des segments dans NSX](https://docs.ovh.com/fr/private-cloud/nsx-segment-management/)

[Configuration du DHCP](https://docs.ovh.com/fr/private-cloud/nsx-dhcp-configuration/)

[Documentation VMware sur le service DNS dans NSX](https://docs.vmware.com/en/VMware-NSX-Data-Center/3.2/administration/GUID-A0172881-BB25-4992-A499-14F9BE3BE7F2.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
