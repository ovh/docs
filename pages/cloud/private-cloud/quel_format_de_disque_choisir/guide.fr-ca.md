---
title: Quel format de disque choisir
slug: quel-format-de-disque-choisir
excerpt: Découvrez les différents types de formats de disque 
legacy_guide_number: '1441955'
section: Gestion des machines virtuelles
order: 04
---

**Dernière mise à jour le 25/06/2020**

## Objectif

VMware propose 3 formats de disque pour les machines virtuelles.

** Ce guide explique les différences entre ces formats **

## En pratique

### Thin provisioning

Le *Thin provisioning* est un type de format de disque, faisant consommer uniquement l'espace dont il a besoin sur le datastore et grandissant au fur et à mesure.

On peut alors allouer un disque de 1To qui sera reconnu comme 1To par le système d'exploitation de la VM, mais n'occupera sur le datastore que l'espace occupé par le *guest OS* (par exemple 20Go). 

Ce qui veut dire qu'on pourrait allouer sur un datastore de 1.2To une capacité de 50 To (50 VM de 1To alloué) mais n'occuper que 1To (20Go occupé / VM dans notre exemple).

> [!warning]
>
> Il est important dans cette situation de maîtriser la consommation d'écriture de ces VMs, afin de ne pas augmenter de manière conséquente l'occupation des différents disques des VMs et ainsi remplir le datastore. 
> Le datastore rempli empêchera toute nouvelle écriture et pourra potentiellement provoquer l'arrêt des VMs.
>

On ne peut pas réclamer l'espace qui a été occupé. 

Exemple : si on occupe 40 Go sur un disk thin de 100Go et que l'on supprime 20Go de données dans la VM, l'espace occupé sur le datastore sera toujours de 40Go et l'espace alloué de 100Go.


### Thick provisioning Eager zero

Le *Thick provisioning Eager zero* est un type de format de disque occupant tout l'espace alloué sur le datastore. 

Une VM de 100Go alloués en *thick* occupera 100Go d'espace sur le datastore.

Le disque de la VM est rempli de zéro à la création du disk sur le volume VMFS.

### Thick provisioning Lazy zero

Le *Thick provisioning Lazy zero* est un type de format de disque occupant tout l'espace alloué sur le datastore.

Une VM de 100Go alloués en *thick*  occupera 100Go d'espace sur le datastore.

L'espace alloué est réservé au disque de la VM, mais les zéro sont écris au moment où la VM a besoin de l'espace disque.

### Exemple

Exemple pour des VMs de 100Go avec un *Guest OS* de 40Go :


|Type de disk|Espace alloué|Block zeroed|Espace occupé|
|---|---|---|---|
|Eager Zero|À la création de VM|À la création de VM|100Go|
|Lazy Zero|À la création de VM|Quand le block est écrit la première fois|100Go|
|Thin|Quand le block est écrit la première fois|Quand le block est écrit la première fois|40Go|

### Format de disque chez OVHcloud

Sur le stockage de type datastore d'une infrastructure Private Cloud, seul le *Thin provisioning* est disponible.

Sur le stockage vSan, les 3 types de formats sont possibles.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
