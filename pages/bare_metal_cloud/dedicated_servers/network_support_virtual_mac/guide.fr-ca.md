---
title: "Vérifier le support des MAC virtuelles sur un serveur dédié"
excerpt: "Utilisez l'API OVHcloud pour vérifier si l'attribution de MAC virtuelles est supportée sur votre modèle de serveur dédié"
updated: 2025-04-28
---

## Objectif

Afin d'utiliser la fonctionnalité des MAC virtuelles (VMAC) sur un serveur dédié, vous devez tout d'abord déterminer si ce serveur supporte cette fonctionnalité.

Le support de cette fonctionalité est un pré-requis de toutes les actions concernant les MAC virtuelles.

**Découvrez comment vérifier si votre serveur dédié supporte la fonctionnalité des MAC virtuelles.**

## Prérequis

* Posséder [un serveur dédié](/links/bare-metal/bare-metal).
* Être connecté à l'[API OVHcloud](/links/api).

> [!primary]
> Si vous n'êtes pas familier avec l'utilisation de l'API OVHcloud, consultez notre guide « [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps)».

## En pratique

### Obtenir l'information

Utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

Saisissez le nom de votre serveur dans le champ `serviceName`, puis cliquez sur `Execute`{.action}.

![Console API avec champ serviceName pour la vérification vMAC](images/support_virtual_mac_02.png){.thumbnail}

Vous obtenez alors une liste avec une entrée « vmac / supported » qui sera à « true » ou « false » (valeur booléenne).

![Resultat API indiquant si la vMAC est supportee (true ou false)](images/support_virtual_mac_04.png){.thumbnail}

> [!primary]
> **Interprétation du résultat**
>
> - **false** : vous ne pouvez pas utiliser les fonctionnalités liées aux MAC virtuelles sur ce serveur.
>
> - **true** : vous pouvez utiliser les fonctionnalités liées aux MAC virtuelles sur ce serveur.
>

## Aller plus loin

[Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps)

[Assigner une adresse MAC virtuelle à une Additional IP](/pages/bare_metal_cloud/dedicated_servers/network_virtual_mac)

[Configurer des Additional IP en mode bridge sur vos machines virtuelles](/pages/bare_metal_cloud/dedicated_servers/network_bridging)

Échangez avec notre [communauté d'utilisateurs](/links/community).
