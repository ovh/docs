---
title: Ajouter une nouvelle passerelle Tier-1 Gateways
slug: nsx-t-add-new-tier1-gateway
excerpt: Comment ajouter une passerelle de type Tier-1 Gateways
section: NSX-T
order: 10
---

**Dernière mise à jour le 23/02/2023**

> [!warning]
> Les guides concernant NSX-T dans la solution Hosted Private Cloud Powered by VMware ne sont pas définitifs, ils seront modifiés lors de la sortie en version BETA et finalisés quand la version définitive sera prête. 
>

## Objectif

**Comment ajouter une passerelle est-ouest (Tier-1 Gateway) dans votre configuration NSX-T**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), celui-ci recevant les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX-T (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
- Avoir **NSX-T** déployé


## Présentation

Lors de la livraison de NSX-T par OVHcloud, vous avez sur votre configuration une passerelle de type nord-sud (ovh-T0-gw) et une passerelle de type est-ouest (ovh-T1-gw).
Il vous est possible de créer des passerelles supplémentaires de type nord-sud ou est-ouest.

> [!warning]
> La création d'un passerelle nord-sud est possible mais il certaines options ne sont pas disponible, ne créez pas de passerelles nord-sud elles ne vous servirons à rien.

## En pratique

Nous allons ajouter une nouvelle passerelle de type est-ouest (Tier-1-Gateways) et la relier à la passerelle nord-sud fourni par OVHcloud (ovh-T0-gw).

Ensuite nous allons créer un segment et lui attacher une machine virtuelle. 



## Aller plus loin

[Premiers pas avec NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-first-steps/)

[Gestion des segments dans NSX-T](https://docs.ovh.com/fr/nsx-t-segment-management/)

[Documentation VMware pour le rajout d'une passerelle Tier-1 Gateway](https://docs.vmware.com/en/VMware-NSX-T-Data-Center/3.2/administration/GUID-EEBA627A-0860-477A-95A7-7645BA562D62.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

