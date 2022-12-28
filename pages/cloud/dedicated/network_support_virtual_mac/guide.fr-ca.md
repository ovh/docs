---
title: 'Déterminer si la fonctionnalité des MAC virtuelles est supportée sur un serveur dédié'
slug: network-support-virtual-mac
excerpt: "Découvrez comment déterminer si la fonctionalité des MAC virtuelles est supportée sur un serveur dédié via l'API OVHcloud"
section: 'Réseau & IP'
---

**Dernière mise à jour le 09/12/2021**

## Objectif

Afin d'utiliser la fonctionnalité des MAC virtuelles (VMAC) sur un serveur dédié, vous devez tout d'abord déterminer si ce serveur support cette fonctionnalité.

Le support de cette fonctionalité est un pré-requis de toutes les actions concernant les MAC virtuelles.

**Découvrez comment vérifier si votre serveur dédié supporte la fonctionnalité des MAC virtuelles.**

## Prérequis

* Posséder [un serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/){.external}.
* Être connecté à l'[API OVHcloud](https://ca.api.ovh.com/){.external}.

> [!primary]
> Si vous n'êtes pas familier avec l'utilisation de l'API OVHcloud, consultez notre guide « [Premiers pas avec les API OVHcloud](https://docs.ovh.com/ca/fr/api/first-steps-with-ovh-api/)».

## En pratique

### Obtenir l'information

Utilisez l'appel API suivant :

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/network
>

Saisissez le nom de votre serveur dans le champ `serviceName`, puis cliquez sur `Execute`{.action}.

![SVMAC](images/support_virtual_mac_02.png){.thumbnail}

Vous obtenez alors une liste avec une entrée « vmac / supported » qui sera à « true » ou « false » (valeur booléenne).

![SVMAC](images/support_virtual_mac_04.png){.thumbnail}

> [!primary]
> **Interprétation du résultat**
>
> - **false** : vous ne pouvez pas utiliser les fonctionnalités liées aux MAC virtuelles sur ce serveur.
>
> - **true** : vous pouvez utiliser les fonctionnalités liées aux MAC virtuelles sur ce serveur.
>

## Aller plus loin

[Premiers pas avec les API OVHcloud](https://docs.ovh.com/ca/fr/api/first-steps-with-ovh-api/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.