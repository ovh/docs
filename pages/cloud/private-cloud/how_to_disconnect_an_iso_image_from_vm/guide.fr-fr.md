---
title: "Déconnecter l'image ISO d'une VM"
excerpt: "Comment déconnecter une image ISO d'une machine virtuelle ?"
slug: disconnect_iso_from_vm
section: Premiers pas
---

**Dernière mise à jour le 27/04/2022**

## Objectif

Si un ISO est connecté à une VM, celle-ci ne peut être migrée, ni manuellement, ni automatiquement. Cela peut donc empêcher le fonctionnement correct de DRS et la mise en maintenance de l'hôte qui l'héberge.

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), afin de recevoir les identifiants de connexion.
- Avoir un identifiant utilisateur actif (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))


## En pratique

Si vous décochez simplement la case `Connecter`{.action} du Datastore ISO File, la VM est toujours liée à l'ISO :

![Disconnect](images/disconnect1.png){.thumbnail}

Pour déconnecter l'ISO, cliquez d'abord sur la flèche déroulante à côté de CD/DVD drive 1 et sélectionnez `Client Device`{.action}.

![Disconnect](images/disconnect2.png){.thumbnail}

L'ISO est maintenant déconnecté :

![Disconnect](images/disconnect3.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.