---
title: Passer d'une facturation à l'heure à mensuelle
excerpt: Découvrez comment modifier le type de facturation de votre instance Public Cloud
slug: changer-type-facturation-public-cloud
section: Base de connaissances
---

**Dernière mise à jour le 21/02/2018**

## Objectif

En créant une instance Public Cloud, il est possible de choisir entre une facturation à l'heure ou une facturation mensuelle. Les instances « à l'heure » sont facturées en *pay-as-you-go*, c'est-à-dire que l'utilisateur paie en fin de mois la somme des heures consommées. Les instances « mensuelles », elles, doivent être réglées à l'avance pour le mois à venir et sont moins onéreuses (50 % de réduction). Si la facturation à l'heure a été initialement choisie, il est cependant possible de la modifier en facturation mensuelle à tout moment.

**Ce guide explique comment passer d'une facturation à l'heure vers une facturation mensuelle.**

> [!warning]
>
> Le passage d'une facturation mensuelle vers une facturation à l'heure n'est pas possible. Il faudra supprimer l'instance en facturation mensuelle et en créer une nouvelle à l'heure.
>


## Prérequis

- Avoir créé une [instance Public Cloud](https://www.ovh.com/fr/public-cloud/instances/){.external}.
- Être connecté à [l'espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.


## En pratique

Dans [l'espace client](https://www.ovh.com/auth/?action=gotomanager){.external} choisissez l'instance pour laquelle vous souhaitez modifier le mode de facturation et sélectionnez les options de celle-ci. Vous aurez alors accès au bouton `Passer au forfait mensuel`{.action} :

![Modification de calcul](images/1_swich_to_monthly_sub.png){.thumbnail}

Il vous reste à confirmer la modification :

![Confirmation modification de calcul](images/2_switch_to_monthly_confirm.png){.thumbnail}

Suite à cette modification, une facture sera émise d’un montant correspondant au nombre de jours restant jusqu’à la fin du mois. À la fin du mois, la facture intègrera le coût des heures de l'instance du mois écoulé en configuration « horaire », mais également le coût du mois à venir en configuration « mensuelle ».


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.