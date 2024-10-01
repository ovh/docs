---
title: Autoriser des IP à se connecter au vCenter
updated: 2020-11-18
---

## Objectif

Il est possible de restreindre l'accès au vCenter en autorisant uniquement certaines adresses IP à s'y connecter. 

**Découvrez comment autoriser des adresses IP à se connecter au vCenter.**

## Prérequis

* Être connecté à votre [espace client OVHcloud](/links/manager){.external}.
* Posséder une [infrastructure Managed Bare Metal](https://www.ovhcloud.com/fr/managed-bare-metal/){.external} sur votre compte OVHcloud.

## En pratique

Lorsque [la politique d'accès au vCenter est restreinte](/pages/bare_metal_cloud/managed_bare_metal/vcenter-modify-access-policy), il est nécessaire d'ajouter les IPs qui seront autorisées à se connecter au service.

L'opération se réalise dans [l'espace client OVHcloud](/links/manager){.external-link}. Dans la section `Bare Metal Cloud`, cliquez sur la rubrique `Managed Bare Metal`. Sélectionnez l'infrastructure puis rendez-vous dans l'onglet `Sécurité` et enfin cliquez sur `Ajouter une nouvelle plage d'adresses IP`{.action}.

![vCenter](images/restrictIP.png){.thumbnail}

Rajoutez ici l'IP concernée et éventuellement une description pour la retrouver facilement dans la liste plus tard.

Il ne reste plus qu'a valider en cliquant sur `Suivant`{.action} et une fois que l'IP est bien marquée comme **"Autorisée et mise en place"**, la connexion au vSphere sera possible depuis l'IP en question.

![vCenter](images/restrictIP2.JPG){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
