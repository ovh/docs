---
title: 'Utiliser le snapshot'
excerpt: 'Découvrez comment activer et utiliser l’option snapshot depuis l’espace client OVHcloud'
slug: snapshot-vps
section: Sauvegarde
order: 1
---

**Dernière mise à jour le 22/04/2020**

## Objectif

La création d'un snapshot (instantané) est un moyen simple et rapide de sauvegarder un système fonctionnel avant d'y apporter des modifications pouvant avoir des conséquences non souhaitées ou imprévues. Par exemple, tester une nouvelle configuration ou un nouveau logiciel. 
Un snapshot ne constitue pas pour autant une sauvegarde complète du système.

**Ce guide explique l'utilisation des snapshots pour votre VPS.**

> [!primary]
>Avant d'appliquer une option de sauvegarde, nous vous recommandons de consulter les [options VPS](https://www.ovhcloud.com/fr/vps/options/) afin de comparer les détails et tarifs de chaque option.
>

## Prérequis

- Avoir accès à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager).
- Un [VPS OVHcloud](https://www.ovhcloud.com/fr/vps/) déjà configuré.

## En pratique

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, partie `Server`{.action}. Cliquez sur `VPS`{.action} dans la barre de services à gauche, puis choisissez le serveur VPS concerné.

### Étape 1 : souscrire l'option snapshot

Depuis l'onglet `Accueil`{.action}, descendez jusqu'au menu « Résumé des options ». Cliquez sur `...`{.action} à droite de l'option `«Snapshot»` puis cliquez sur `Commander`{.action} dans le menu qui s'affiche alors.

![snapshotvps](images/snapshot_vps_step1b.png){.thumbnail}

Veuillez alors prendre connaissance des informations de tarification de cette option, puis cliquez sur `Commander`{.action}. Vous serez guidé dans le processus de commande et recevrez un e-mail de confirmation.

### Étape 2 : prendre un snapshot

Une fois l'option activée, cliquez sur `...`{.action} à droite de l'option « Snapshot » puis cliquez sur `Prendre un Snapshot`{.action} dans le menu qui apparaît. La création du snapshot peut prendre quelques minutes. Par la suite, l'horodatage de la création s'affiche dans le menu « Résumé des options ».

### Étape 3 : supprimer/restaurer un snapshot

Étant donné que vous ne pouvez activer qu'un seul snapshot à la fois, vous devez supprimer le snapshot existant avant d'en créer un nouveau. Choisissez simplement `Supprimer le snapshot`{.action} dans le menu contextuel.

![snapshotvps](images/snapshot_vps_step2.png){.thumbnail}

Si vous êtes sûr de vouloir restaurer votre VPS à l'état du snapshot, cliquez sur `Restaurer le snapshot`{.action} et confirmez la restauration dans la fenêtre qui s'affiche alors.

## Aller plus loin

[Utiliser la sauvegarde automatique sur un VPS](https://docs.ovh.com/fr/vps/autobackup-vps/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.