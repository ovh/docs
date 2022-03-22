---
title: 'Gérer vos instances Public Cloud'
slug: debuter-avec-une-instance-public-cloud
excerpt: 'Découvrez comment gérer vos instances Public Cloud dans l’espace client OVHcloud'
section: 'Premiers pas'
order: 05
---

**Dernière mise à jour le 22/03/2022**

## Objectif

Vous pouvez gérer vos instances Public Cloud dans votre [espace client](https://www.ovh.com/auth?onsuccess=https%3A%2F%2Fwww.ovh.com%2Fmanager%2Fpublic-cloud&ovhSubsidiary=fr).

**Ce guide explique les actions disponibles dans le Panneau de configuration pour une instance Public Cloud.**

## Prérequis

- Un projet [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) dans votre compte OVHcloud
- Une instance [Public Cloud](../premiers-pas-instance-public-cloud/) dans votre projet
- Être connecté votre [espace client OVHcloud](https://www.ovh.com/auth?onsuccess=https%3A%2F%2Fwww.ovh.com%2Fmanager%2Fpublic-cloud&ovhSubsidiary=fr)

## Instructions

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth?onsuccess=https%3A%2F%2Fwww.ovh.com%2Fmanager%2Fpublic-cloud&ovhSubsidiary=fr) et ouvrez votre projet `Public Cloud`{.action}. 

### Utiliser l'interface de gestion des instances

Cliquez sur `Instances`{.action} dans le menu de gauche. 

![public-cloud](images/compute.png){.thumbnail}

Cette page liste l'ensemble de vos instances Public Cloud et certaines de leurs propriétés :

- ID de l'instance, nécessaire pour certains appels API
- La localisation du datacentre, c'est-à-dire la région de l'instance
- Le modèle d'instance
- L'image c'est à dire le système installé sur l'instance
- L'adresse IPv4 de l'instance
- Volumes (disques) additionnels actuellement attachés à l'instance
- Statut de l'instance indiquant si elle est à l'état `Activé`.

### Options de gestion sur le tableau de bord des instances

Sur la page de gestion des instances, cliquez sur le nom de l'instance dans le tableau.

Sélectionnez l'option souhaitée dans le cadre de gauche "Gestion".

![public-cloud](images/management.png){.thumbnail}

Ces actions sont également disponibles sur la page de gestion des instances si vous cliquez sur `...`{.action} dans le tableau.

#### Éditer la configuration de l'instance

Cliquez sur `Éditer`{.action}.

La nouvelle page affiche une version modifiée des options [de création d'instance](../premiers-pas-instance-public-cloud/), dans laquelle vous pouvez modifier les éléments suivants :

- **Renommer l'instance** : Vous pouvez donner un nom à l'instance pour plus de facilité d'identification.
- **Modification de l’image** : Vous pouvez choisir un autre système d'exploitation pour l'instance. (Notez que la réinstallation d'une instance supprimera toutes les données qu'elle contient.)
- **Modification du template** : Vous pouvez changer de modèle d'instance. Veuillez vous référer à [ce guide](../premiers-pas-instance-public-cloud/#etape-3-creer-une-instance) pour plus d'informations sur les options.
- **Modification du type** de facturation : Vous pouvez modifier la période de facturation de l'instance d'une facturation horaire à mensuelle. Veuillez vous référer à [ce guide](../changer-type-facturation-public-cloud/) pour des informations détaillées).

#### Création d'un backup de l'instance

Cliquez sur `Créer un backup`{.action}.

Reportez-vous au guide [Sauvegarder une instance](../sauvegarder-une-instance/) pour des informations détaillées. 

#### Créer un backup automatique de l'instance

Cliquez sur `Créer une sauvegarde automatisée`{.action} automatique.

Reportez-vous au guide [Sauvegarder une instance](../sauvegarder-une-instance/#creer-une-sauvegarde-automatisee-dune-instance) pour des informations détaillées.

#### Suspension de l'instance

Cliquez sur `Arrêter`{.action}.

Cela va mettre l'instance dans un état suspendu. Référez-vous à notre guide [Suspendre ou mettre en pause une instance](../suspendre-ou-mettre-en-pause-une-instance/#arreter-suspend-une-instance_1) pour des informations détaillées.

Cliquez sur `Boot`{.action} pour réactiver l'instance.

#### Utiliser le mode rescue

Cliquez sur `Redémarrer en mode rescue`{.action}.

Cela activera le mode rescue de l'instance. Consultez notre guide [Passer une instance en mode rescue](../passer-une-instance-en-mode-rescue/) pour obtenir des informations détaillées.

#### Redémarrage de l'instance

- Cliquez sur `Redémarrer à chaud (soft)`{.action} pour effectuer un redémarrage au niveau logiciel.
- Cliquez sur `Reboot à froid (hard)`{.action} pour lancer un reboot au niveau matériel.

Confirmez la demande de redémarrage dans la fenêtre qui apparaît.

#### Réservation de l'instance

Cliquez sur `Suspendre`{.action}.

Ceci placera l'instance dans l'état "shelved", affiché ici comme `Suspended`. Consultez notre guide [Suspendre ou mettre en pause une instance](../suspendre-ou-mettre-en-pause-une-instance/#suspendre-shelve-une-instance) pour en savoir plus sur les différents états.

Cliquez sur `Réactiver`{.action} pour restaurer l'état `Activé`.

#### Réinstallation d'une instance

Cliquez sur `Réinstaller`{.action}.

Cette action réinstallera l'instance avec le même système d'exploitation, à condition que l'image soit toujours prise en charge.

Notez que la réinstallation **supprime toutes les données** actuellement stockées sur votre instance.

#### Suppression d'une instance

Cliquez sur `Supprimer`{.action}.

Cette action aura pour effet de supprimer définitivement l'instance ainsi que toutes ses données.

Confirmez le traitement dans la fenêtre qui apparaît.

### Accéder à la console VNC

Cliquez sur `Instances`{.action} dans le menu de gauche. Sur la page de gestion des instances, cliquez sur le nom de l'instance dans le tableau.

Passez du tableau de bord à la console `Console VNC`{.action}.

![public-cloud](images/vnc1.png){.thumbnail}

La console VNC fournit un accès direct à votre instance. Pour que cet accès fonctionne, vous devez d'abord configurer un nom d'utilisateur et un mot de passe sur l'instance. 

Consultez notre [guide "Premiers pas"](../premiers-pas-instance-public-cloud/#etape-4-connexion-a-votre-instance) pour en savoir plus sur les étapes nécessaires.

## Aller plus loin

[Créer une première instance Public Cloud et s’y connecter](../premiers-pas-instance-public-cloud/)

[Présentation d'Horizon](../presentation-dhorizon/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.