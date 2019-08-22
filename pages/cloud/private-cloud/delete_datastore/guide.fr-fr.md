---
title: Supprimer un datastore
slug: suppression-data-store
excerpt: Découvrez comment supprimer un datastore de votre Private Cloud
legacy_guide_number: '7766789'
section: Fonctionnalités OVH
order: 07
---

**Dernière mise à jour le 10/08/2018**

## Objectif

Dans certains cas il peut être utile de supprimer un datastore de votre cluster, par exemple pour le remplacer ou le faire évoluer vers une taille supérieure.

**Ce guide vous explique comment retirer en toute sécurité un datastore de votre infrastructure.**


## Prérequis

* Posséder une offre [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external}.
* Accéder à l’interface de gestion vSphere.


## En pratique

> [!warning]
>
> Attention, il n'est pas possible de supprimer les **deux datastores de 300 Go ou 1,2 To** inclus dans votre pack. Pour des raisons de sécurité, la demande de suppression échouera également si vous avez des machines virtuelles (VM) présentes sur le datastore concerné (vous trouverez la liste dans la fenêtre de validation).
> 


Pour supprimer un datastore, la première étape consiste à effectuer un clic droit sur la ressource concernée. Sélectionnez `OVH Private Cloud`{.action}, puis `Remove storage`{.action}.

![Choix du datastore](images/removestorage_01.png){.thumbnail}

Une fenêtre de confirmation s'ouvre. Validez alors avec `Next`{.action}.

![Confirmation de la suppression](images/removestorage_02.png){.thumbnail}

La demande de suppression est dès lors prise en compte.

![Suppression validée](images/removestorage_03.png){.thumbnail}


Il est possible de surveiller la progression de la suppression du datastore via les tâches récentes.

![Tâche de suivi de la suppression](images/removedatastore.png){.thumbnail}


## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
