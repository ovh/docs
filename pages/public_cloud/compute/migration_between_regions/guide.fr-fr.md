---
title: 'Migration d’instances entre zones de disponibilité (AZ)'
excerpt: 'Ce guide décrit comment migrer une instance Public Cloud OVHcloud entre deux zones de disponibilité (AZ), 1AZ et 3AZ. Il couvre les étapes de sauvegarde, transfert et recréation, avec instructions via le Manager, Horizon ou la CLI OpenStack.'
updated: 2025-10-15
---

## Objectifs

Ce guide explique comment migrer une instance Public Cloud d’une zone de disponibilité (AZ) à une autre, de 1AZ vers 3AZ ou inversement. Il centralise les étapes clés (sauvegarde, transfert et recréation) et redirige vers les guides détaillés pour chaque élément.

## prérequis

- Avoir une [instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

> [!primary]
>
> Avant d’effectuer une migration d’instance, il est important de bien comprendre les différences entre les types de déploiement proposés dans le Public Cloud OVHcloud. Chaque mode (1AZ, 3AZ ou Local Zones) a un impact direct sur la résilience, la disponibilité et la conception de votre infrastructure.
>
> Pour en savoir plus, consultez la documentation : [Comparaison et résilience des modes de déploiement - Comprendre les régions 3-AZ / 1-AZ / Local Zones](/pages/public_cloud/public_cloud_cross_functional/deployment_modes_comparison_resilience_details).
>

### Étape 1. Sauvegarder son instance

Commencez par créer une sauvegarde de votre instance à migrer, ou utilisez une sauvegarde existante si elle est toujours valide.

OVHcloud propose deux types de sauvegardes, avec des comportements différents selon le type de migration souhaité :

- Sauvegarde locale : Nécessite un transfert manuel si vous migrez vers une autre région ou AZ.
- Sauvegarde distante (backup distant) (**recommandée**) : Gérée automatiquement par OVHcloud, la sauvegarde locale est répliquée dans la région choisie. Aucun transfert manuel n’est requis.

> [!primary]
>
> Si votre sauvegarde locale a été effectuée dans une région 3AZ et que vous souhaitez recréer l’instance dans une autre AZ de cette même région, aucun transfert n’est nécessaire.
>
> Les sauvegardes locales sont accessibles depuis toutes les zones de disponibilité d’une région 3AZ. Vous pouvez directement passer à l’étape de recréation de l’instance.
>

La sauvegarde d'une instance peut être réalisée :

- via l'espace client OVHcloud.
- via l'API OVHcloud.
- via la CLI Openstack.
- via Horizon.

Retrouvez toutes les informations détaillées dans la partie **Créer une sauvegarde d'une instance** de notre guide « [Sauvegarder une instance](/pages/public_cloud/compute/save_an_instance) ».

### Étape 2. Migrer sa sauvegarde vers une autre région

> [!primary]
>
> Si vous avez utilisé une sauvegarde distante, vous pouvez passer directement à [l'étape 3. Restaurer l’instance dans la nouvelle région](#step3recreateinstance).
>

> [!tabs]
> Via la CLI Openstack
>> Pour transférer votre sauvegarde d'une AZ à une autre via la CLI Openstack, veuillez suivre notre guide « [Télécharger et transférer la sauvegarde d'une instance d'une région OpenStack à une autre](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another) ».
>>

### Étape 3. Restaurer l’instance dans la nouvelle région <a name="step3recreateinstance"></a>

La restauration de l'instance dans la nouvelle région peut être réalisée :

- via l'espace client OVHcloud.
- via l'API OVHcloud.
- via la CLI Openstack.
- via Horizon.

Retrouvez toutes les informations détaillées dans la partie **Créer une instance a partir d'une sauvegarde** de notre guide « [Créer / restaurer un serveur virtuel a partir d’une sauvegarde](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup) ».

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).