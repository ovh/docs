---
title: Autoriser des IP à se connecter au vCenter
updated: 2023-01-25
---

## Objectif

L'accès à votre vCenter est restreint uniquement aux adresses IP autorisées.

**Découvrez comment autoriser des adresses IP à se connecter au vCenter.**

## Prérequis

* Être connecté à votre [espace client OVHcloud](/links/manager).
* Posséder une [infrastructure Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/) sur votre compte OVHcloud.

## En pratique

Par défaut, l'accès à votre vCenter est restreint. Il est donc nécessaire d'ajouter les IPs qui seront autorisées à se connecter au service.

Connectez-vous à votre [espace client OVHcloud](/links/manager) et cliquez sur l'onglet `Hosted Private Cloud`{.action}.

Cliquez sur la rubrique `VMware`{.action}, sélectionnez votre infrastructure puis rendez-vous dans l'onglet `Sécurité`{.action}. Cliquez sur `Ajouter une nouvelle plage d'adresses IP`{.action}.

![vCenter](images/restrictIP.JPG){.thumbnail}

Rajoutez ici l'IP concernée et éventuellement une description pour la retrouver plus facilement dans la liste ultérieurement.

Validez cet ajout en cliquant sur `Suivant`{.action}. Une fois que l'IP est bien marquée comme « **Autorisée et mise en place** », la connexion au vSphere sera possible depuis l'adresse IP en question.

![vCenter](images/restrictIP2.JPG){.thumbnail}

> [!primary]
>
> Veuillez noter que, pour des raisons de sécurité, vous ne pourrez autoriser qu'un maximum de 2048 adresses IP à se connecter à votre vCenter.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
