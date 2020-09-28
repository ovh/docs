---
title: 'Configurer la suppression automatique d’objets'
slug: configurer-la-suppression-automatique-dobjets
legacy_guide_number: 1950
section: Stockage
order: 9
---

## Préambule
Pour faciliter la gestion de votre Object Storage, il est possible que vous ayez besoin de décider de la durée de vie de certains de vos fichiers. Cela peut par exemple vous permettre de garder certaines sauvegardes pendant un laps de temps défini. Ce guide vous explique donc comment supprimer des fichiers de manière automatique après un certain délai, ou a une date en particulier.


### Prérequis
- Préparer l'environnement pour utiliser l'API OpenStack
- Charger les variables d'environnement OpenStack


## Configuration de la suppression des objets
Il existe de 2 façons de supprimer vos fichiers :

- Après un certains nombre de secondes
- À une date donnée


### Apres un certains nombre de secondes
Pour effectuer cela, il faudra configurer le header  **X-Delete-After**  a vos objets :


```bash
root@server:~$ swift post --header "X-Delete-After: 3600" container test.txt
```

Le fichier  **test.txt**  sera donc supprimé après 1 heure.


### A une date donnee
Dans un premier temps, il faudra connaitre la date de suppression en format epoch. Il est possible d'utiliser des [convertisseur](http://www.epochconverter.com/){.external} afin de facilement trouver la valeur à saisir.

Après cela, il est possible de renseigner cette date dans le header  **X-Delete-At**  :


```bash
root@server:~$ swift post --header "X-Delete-At: 1448928000" container test.txt
```

Le fichier  **test.txt**  sera donc supprimé le 01 Décembre 2015.
