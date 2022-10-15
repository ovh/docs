---
title: Object Storage Swift - Configurer la suppression automatique des objets
excerpt: 'Découvrez comment configurer la suppression automatique des fichiers après une période donnée ou à une date précise'
slug: pcs/configure-automatic-object-deletion
section: Spécificités de la classe de stockage OpenStack Swift
legacy_guide_number: g1950
order: 070
---

**Dernière mise à jour le 27/10/2021**

## Objectif

Pour gérer facilement votre Object Storage, vous pouvez avoir besoin de définir la durée de vie de certains de vos fichiers. Cela vous permet, par exemple, de ne conserver certaines sauvegardes que pendant une période spécifique.

**Ce guide vous montre comment configurer la suppression automatique des fichiers après une période donnée ou à une date précise.**

## Prérequis

- [Préparer l'environnement pour utiliser l'API OpenStack](https://docs.ovh.com/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/)
- [Charger les variables d’environnement OpenStack](https://docs.ovh.com/fr/public-cloud/charger-les-variables-denvironnement-openstack/)

## En pratique

Il y a deux façons de supprimer vos objets/fichiers :

- Après un certain nombre de secondes
- A une date précise

### Après un certain nombre de secondes

Pour ce faire, configurez l'en-tête `X-Delete-After`.

```bash
root@server:~$ swift copy --header "X-Delete-After : 3600" container test.txt
```

Le fichier test.txt sera supprimé dans une heure.

### À une date précise

Tout d'abord, vous devez savoir quelle est la date de suppression au format unix epoch.
Pour vous aider à trouver la valeur que vous devez utiliser, vous pouvez passer par un [convertisseur](http://www.epochconverter.com/){.external}.

Vous pouvez ensuite saisir cette date dans l'en-tête `X-Delete-At` :

```bash
root@server:~$ swift copy --header "X-Delete-At : 1668877261000" container test.txt
```

Le fichier sera donc supprimé le 19/11/2022.

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur [https://community.ovh.com/](https://community.ovh.com/){.external}.
