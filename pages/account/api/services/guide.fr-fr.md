---
title: 'Gestion des services'
excerpt: 'Gérer le cycle de vie de vos services OVH après leur livraison'
slug: ovh-api-service
section: 'OVH APIv6'
---

**Dernière mise à jour le 15/10/2019**

## Objectif

Nous allons décrire une partie du cycle de vie des services chez OVH
via les routes d'API /service & /services

La route d'API **/service** regroupe les actions communes à tous types de services chez OVH :

* Factures
* Gestion du cycle de vie
* Contacts associés
* Point d'entrée d'API pour la gestion technique éventuelle.

## Prérequis

* Être connecté aux [API OVH](https://api.ovh.com/console){.external}.
* Avoir [créé ses identifiants pour l'API OVH](https://api.ovh.com/g934.first_step_with_api){.external}.
* Avoir un compte client avec un tag Reseller (contactez votre commercial pour connaître votre éligibilité le cas échéant).

## En pratique

### Ressources

* service : Entité de base qui est contractualisée auprès d'OVH
* serviceId : Identifiant unique du service chez OVH 

### Déroulement des opérations

#### Suspension

> [!api]
>
> @api {POST} /service/{serviceId}/suspend
>

L'appel change l'état du service pour le passer en suspension :

* state : expired

La facture est alors bloquée.

#### Réouverture

Le cas échéant :

> [!api]
>
> @api {POST} /service/{serviceId}/reopen
>

L'appel entraîne la réouverture du service et l'édition de la facture sur la période entre la date de suspension et la date de réouverture.

#### Suppression

Pour finir :

> [!api]
>
> @api {POST} /service/{serviceId}/terminate
>

L'appel entraîne la suppression du service et des données et l'édition de la facture sur la période entre la date de suspension et la date de suppression.

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
