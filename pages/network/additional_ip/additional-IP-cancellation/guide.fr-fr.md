---
title:  Résilier un service Additional IP
excerpt: "Découvrez comment résilier un service Additional IP via les API OVHcloud"
updated: 2022-12-22
---

> [!primary]
>
> Depuis le 6 octobre 2022, notre solution « IP Failover » s'appelle désormais [Additional IP](https://www.ovhcloud.com/fr/network/additional-ip/). Cela n'a pas d'impact sur ses fonctionnalités.
>

## Objectif

Comme tous les services OVHcloud, les services Additional IP peuvent être résiliés à tout moment.

> [!primary]
> Pour le moment, un service Additional IP ne peut pas être résilié via l'espace client OVHcloud. Cette fonctionnalité arrivera très prochainement.
>

**Découvrez comment résilier votre service Additional IP via les API OVHcloud.**

## Prérequis

- Disposer d'un [service Additional IP](https://www.ovhcloud.com/fr/network/additional-ip/).
- Être connecté à la [console API OVHcloud](https://eu.api.ovh.com/).
- Consulter le guide [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.

## En pratique

### Résilier un service Additional IP via les API

Connectez-vous sur la page web des [API OVHcloud](https://api.ovh.com/).

Vous devez d'abord déterminer le nom du service à résilier. Pour cela, utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /ip GET /ip/service
>

Pour résilier le service, utilisez l'appel suivant :

> [!api]
>
> @api {v1} /ip POST /ip/service/{serviceName}/terminate
>

- `serviceName` : le nom du service Additional IP obtenu via l'appel API précédent.

Vous recevrez ensuite un e-mail vous demandant de confirmer la résiliation. La résiliation sera effective après confirmation.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
