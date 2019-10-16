---
title: Gestion des services
excerpt:
slug: service
section: APIv6
---

**Dernière mise à jour le 15/10/2019**

## Objectif

Nous allons décrire une partie du cycle de vie des services chez OVH
via les routes d'API /service & /services

/service Regroupe les actions communes à tous types de services chez OVH :
- Factures
- Gestion du cycle de vie
- Contacts associés
- Point d'entre d'API pour la gestion technique éventuelle.

## Prérequis

- Être connecté aux [API OVH](https://api.ovh.com/console){.external}.
- Avoir [créer ses identifiants pour l'API OVH](https://api.ovh.com/g934.first_step_with_api){.external}.
- Avoir un compte client avec un tag Reseller (contacter votre commercial pour connaitre votre éligibilité le cas échéant).

## En pratique

### Ressources

- service : Entité de base qui est contractualisée auprès d'OVH
- serviceId : identifiant unique chez OVH du service

### Déroulement des opérations

#### suspension

> [!api]
>
> @api {POST} /service/{serviceId}/suspend
>

L'appel change l'état du service pour suspension :
- state : expired

La facture est alors bloquée.

#### reopen

Le cas échéant

> [!api]
>
> @api {POST} /service/{serviceId}/reopen
>

L'appel entraine la réouverture du service et l'édition de la facture sur la période entre la date de suspend et la date de reopen.

#### terminate

Pour finir :

> [!api]
>
> @api {POST} /service/{serviceId}/terminate
>

L'appel entraine la suppression du service et des données et l'édition de la facture sur la période entre la date de suspend et la date de terminate.

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.

