---
title: Étape 4 - attribuer des bureaux virtuels aux utilisateurs
slug: attribution-desk
excerpt: Apprenez à ajouter des utilisateurs sur vos différents bureaux virtuels
section: Mise en place
order: 4
---

**Dernière mise à jour le 2018/02/21**

## Objectif

Maintenant que [votre pool est créé](https://docs.ovh.com/ca/fr/cloud-desktop-infrastructure/howto-create-pool/){.external}, vous pouvez autoriser des utilisateurs sur les différents bureaux virtuels.

**Ce guide vous explique comment effectuer des ajouts d'utilisateurs.**


## Prérequis

- Avoir créé des utilisateurs dans l'Active Directory si une [relation d'approbation a été créée](https://docs.ovh.com/fr/cloud-desktop-infrastructure/approval-ad/){.external} ou avoir créé les utilisateurs dans l'[espace client OVH](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.
- Être connecté sur l'interface VMware Horizon 7.1.



## En pratique

### Gérer les utilisateurs

À la livraison de la plateforme, dix utilisateurs génériques (*vdiXX* où XX représente un nombre) sont créés. Les informations de connexion sont indiquées dans le courriel de livraison.

La création de nouveaux utilisateurs est détaillée dans ce guide : [Création des utilisateurs](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-users/){.external}.


## Attribuer les bureaux virtuels

Les opérations se déroulent dans VMware Horizon 7.1. L'onglet `Entitlements`{.action} du pool permet d'associer des utilisateurs à celui-ci afin de leur donner un accès aux bureaux virtuels déployés.

- Cliquez sur `Add Entitlement`{.action} pour ouvrir le menu contextuel.

![Add Entitlement](images/1200.png){.thumbnail}

- Cherchez et sélectionnez le ou les utilisateurs à associer, puis validez.

![Selection de l'utilisateur](images/1201.png){.thumbnail}


Les utilisateurs associés à un pool peuvent à présent [se connecter et utiliser les bureaux virtuels](https://docs.ovh.com/ca/fr/cloud-desktop-infrastructure/connexion-desk/){.external}.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.