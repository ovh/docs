---
title: Modifier un Volume Block Storage
excerpt: "Découvrez comment changer le type d'un volume block storage en utilisant Openstack"
updated: 2023-07-05
---

## Objectif

L'objectif de ce guide est de vous montrer comment changer un type de volume block storage Classic ou High speed à High speed gen2.

## Prérequis

- [Accéder à l'interface Horizon](/pages/platform/public-cloud/introducing_horizon)
- Un volume [Block storage](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance) créé dans votre projet [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/)

## Instructions

Lors de la modification d'un type de volume block storage en un volume "High speed gen2", la politique de migration doit être modifiée de "Never" à "On Demand".

Par défaut, la politque de migration est définie sur "Never", car le volume reste sur le même cluster CEPH. Cependant, pour le 'High speed gen2', le volume devra être migré vers un nouveau cluster.

Cette modification peut être réalisée via Horizon ou l’interface de ligne de commande Openstack.

### Depuis l'interface Horizon

Connectez-vous à l'[interface Horizon](https://horizon.cloud.ovh.net/auth/login/) et assurez-vous d'être dans la bonne région. Vous pouvez le vérifier en haut à gauche. 

![Sélection de région](images/region2021.png){.thumbnail}

Cliquez sur le menu `Volumes`{.action} à gauche puis sur `Volumes`{.action}.
Cliquez sur la flèche déroulante à côté de `Edit Volume`{.action} et sélectionnez `Change Volume Type`{.action}.

![Choix de l'option](images/selectoption.png){.thumbnail}

Dans la fenêtre qui s'affiche, cliquez sur le menu déroulant sous `Type` et sélectionnez `high-speed-gen-2`{.action}. Ensuite, cliquez sur la flèche déroulante sous `Migration Policy` et sélectionnez `On Demand`{.action}.

Une fois fait, cliquez sur `Change Volume Type`{.action} de volume pour valider le changement.

![Choix de l'option](images/changevolume.png){.thumbnail}


### Depuis la CLI Openstack

Une fois votre environnement prêt, tapez ce qui suit en ligne de commande :

```bash
$ openstack volume set --type NEW_TYPE --retype-policy on-demand VOLUME_NAME_OR_ID
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.