---
title: Changer les droits d’un utilisateur
slug: changer-les-droits-d-un-utilisateur
section: Fonctionnalités OVH
---

**Dernière mise à jour le 30/04/2020**

## Objectif

Ce guide a pour objectif d'expliquer les détails de la gestion de droits utilisateurs sur l'offre Private Cloud d'OVHcloud.

**Découvrez comment gérer la gestion des droits utilisateurs sur votre infrastructure.**

## Prérequis

* Posséder une offre [Hosted Private cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
* Etre connecter à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

Il faut pour cela cliquer sur **Server** puis **Private Cloud** et enfin choisir l'infrastructure sur laquelle vous souhaitez modifier les utilisateurs.

Rendez-vous dans l'onglet **Utilisateurs** et cliquez sur les trois points à droite de la ligne de l'utilisateur concerné pour afficher le menu.

![Voir / Modifier les droits par DC](images/user_rights_1.png){.thumbnail}

A partir de ce menu, vous avez la possibilité de modifier les droits de vos utilisateurs vSphere par Datacenter :

![Modifier les droits](images/user_rights_2.png){.thumbnail}

| Accès  | Droit possible | Description |
|---|---|---|
| Accès vSphere | Aucun / Lecture seule / Lecture et Ecriture | Droits globaux de l'utilisateur sur vSphere |
| Accès au vmNetwork | Aucun / Lecture seule / Opérateur | Droits de management sur la partie réseau public (appelé VM Network dans l'interface vSphere) |
| Accès au V(x)Lans | Aucun / Lecture seule / Opérateur / Administrateur | Droits de management sur la partie réseau privé (VxLan et VLAN) |
| Ajout de ressource | Oui / Non | Droit d'ajouter des ressources supplémentaires via le plugin OVHcloud dans vSphere Client (Host, Datastore, Sauvegarde Veeam) |

![Modifier les droits](images/user_rights_3.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
