---
title:  Résilier un service Additional IP
excerpt: "Découvrez comment résilier un service Additional IP via les API OVHcloud"
slug: cancel-additional-ip
section: Additional IP
---

**Dernière mise à jour le 19/12/2022**

> [!primary]
>
> Depuis le 6 octobre 2022, notre solution "IP Failover" s'appelle désormais [Additional IP](https://www.ovhcloud.com/fr/network/additional-ip/). Cela n'a pas d'impact sur ses fonctionnalités.
>

## Objectif

Comme tous les services OVHcloud, les services Additional IP peuvent être résiliés à tout moment.

> [!primary]
> Pour le moment, un service Additional IP ne peut pas être résilier via l'espace client. Cette fonctionnalité arrivera très prochainement.
>

**Découvez comment résilier votre service Additional IP via les API OVHcloud.**

## Prérequis

- Disposer d'un [service Additional IP](https://www.ovhcloud.com/fr/network/additional-ip/).
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

## En pratique

### Résilier un service Additional IP via les API

Connectez-vous sur la page page web des [API OVHcloud](https://api.ovh.com/).

Vous devez d'abord déterminer le nom du service à résilier :

> [!api]
>
> @api {GET} /ip/service
>

Pour résilier le service, utilisez l'appel suivant :

> [!api]
>
> @api {POST} /ip/service/{serviceName}/terminate
>

- `serviceName` : le nom du service Additional IP obtenu via l'appel précédent

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
