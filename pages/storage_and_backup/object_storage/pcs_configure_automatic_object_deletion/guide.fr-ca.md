---
title: Object Storage Swift - Configurer la suppression automatique des objets
excerpt: 'Découvrez comment configurer la suppression automatique des fichiers après une période donnée ou à une date précise'
legacy_guide_number: g1950
updated: 2021-10-27
---

**Dernière mise à jour le 27/10/2021**

## Objectif

Pour gérer facilement votre Object Storage, vous pouvez avoir besoin de définir la durée de vie de certains de vos fichiers. Cela vous permet, par exemple, de ne conserver certaines sauvegardes que pendant une période spécifique.

**Ce guide vous montre comment configurer la suppression automatique des fichiers après une période donnée ou à une date précise.**

## Prérequis

- [Préparer l'environnement pour utiliser l'API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [Charger les variables d’environnement OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables)

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

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Rejoignez notre communauté d'utilisateurs sur [https://community.ovh.com/](https://community.ovh.com/){.external}.
