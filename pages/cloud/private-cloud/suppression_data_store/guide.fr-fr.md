---
title: Suppression d'un datastore
excerpt:
slug: suppression-datastore
legacy_guide_number: '7766789'
section: Fonctionnalités OVH
---

**Dernière mise à jour le 09/08/2018**

## Objectif

Il peut être utile de supprimer un datastore de votre Cluster par exemple pour remplacer un petit datastore pour évoluer vers une taille supérieure.

**Ce guide vous explique comment retirer en toute sécuriter un datastore de votre infrastructure.**

## Prérequis

* Posséder une offre [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external}.
* Accéder à l’interface de gestion vSphere.

## En pratique


> [!warning]
> Attention il n'est pas possible de supprimer les **deux data-stores de 300 Go ou 1,2 To** inclus dans votre pack. Pour des raisons de sécurité, la demande suppression échouera si vous avez des machines virtuelles présentes sur le data-store concerné (vous trouverez la liste dans la fenêtre de validation)
> 

### Sélection


Afin de supprimer un datastore, la première étape consiste à faite un clic droit sur le datastore en questions puis sélectionner `OVH Private Cloud`{.action} puis `Remove storage`{.action}

![](images/RemoveStorage_01.png){.thumbnail}

### Validation

Dans le pop-up, confirmez la suppression avec `Next`{.action}

![](images/RemoveStorage_02.png){.thumbnail}

****

La demande de retrait est bien prise en compte.

![](images/RemoveStorage_03.png){.thumbnail}

### Suivi de la tache

Vous pouvez surveiller la progression de la suppression du datastore via les taches récentes.

![](images/RemoveDatastore.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
