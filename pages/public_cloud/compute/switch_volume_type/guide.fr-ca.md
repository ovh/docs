---
title: Modifier un Volume Block Storage
excerpt: "Découvrez comment changer le type d'un volume block storage en utilisant OpenStack"
updated: 2026-01-13
---

## Objectif

L'objectif de ce guide est de vous montrer comment changer un type de volume Block Storage, de Classic ou High speed à High speed gen2.

## Prérequis

- Avoir accès à [l'espace client OVHcloud](/links/manager) ou à [l'interface Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon).
- Un volume [Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) créé dans votre projet [Public Cloud](/links/public-cloud/public-cloud).

## En pratique

Lors de la modification d'un type de volume Block Storage en un volume « High speed gen2 », la politique de migration doit être modifiée de `Never` à `On Demand`.

Par défaut, la politque de migration est définie sur `Never` car le volume reste sur le même cluster CEPH. Cependant, pour le « High speed gen2 », le volume devra être migré vers un nouveau cluster.

Cette modification peut être réalisée via Horizon ou via l’interface de ligne de commande OpenStack.

> [!warning]
>
> Si le volume Block Storage est attaché à une instance, vous devez d'abord le détacher avant de continuer. Pour plus d'informations, consultez la section **Détacher un volume** du guide « [Créer et configurer un disque supplémentaire sur une instance](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance#detach-a-volume) ».
>
> Le changement de type de volume (retyping) via l'espace client OVHcloud ou l’API OVHcloud est disponible uniquement pour les volumes non chiffrés. Il n'est pas possible de modifier le type des volumes chiffrés de type **-LUKS** via ces interfaces.
>
> Le retyping est possible via OpenStack / Horizon uniquement pour des volumes **-LUKS** vers **-LUKS**. Dans ce cas, la restauration du volume après retyping n’est pas possible.
> 
> Les conversions **-LUKS** vers **non -LUKS** ne sont pas prises en charge, y compris via OpenStack / Horizon.
>

> [!tabs]
> Depuis l'espace client OVHcloud
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), accédez à la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné. Ensuite, cliquez sur `Block Storage`{.action} dans le menu de gauche sous **Storage & Backup**.
>>
>> Repérez le volume concerné dans la liste, puis cliquez sur le bouton `...`{.action} situé à droite de celui-ci. Choisissez ensuite `Modifier le type du volume`{.action}.
>>
>> Une fenêtre s’ouvre et vous permet de consulter les différents types de volumes disponibles. Sélectionnez le type souhaité, puis confirmez votre choix en cliquant sur `Modifier`{.action}.
>>
>> > [!primary]
>> >
>> > La mise à jour du type de volume (retyping) peut prendre plusieurs minutes.
>> >
>>
> Depuis l'interface Horizon
>>
>> Connectez-vous à [l'interface Horizon](https://horizon.cloud.ovh.net/auth/login/) et assurez-vous d'être dans la bonne région. Vous pouvez le vérifier en haut à gauche. 
>>
>> ![Sélection de région](images/region2021.png){.thumbnail}
>>
>> Cliquez sur le menu `Volumes`{.action} à gauche puis sur `Volumes`{.action}.
>>
>> Cliquez sur la flèche déroulante à côté de `Edit Volume`{.action} et sélectionnez `Change Volume Type`{.action}.
>>
>> ![Choix de l'option](images/selectoption.png){.thumbnail}
>>
>> Dans la fenêtre qui s'affiche, cliquez sur le menu déroulant sous `Type` et sélectionnez `high-speed-gen-2`{.action}. Cliquez ensuite sur la flèche déroulante sous `Migration Policy` et sélectionnez `On Demand`{.action}.
>>
>> Une fois ces actions effectuées, cliquez sur `Change Volume Type`{.action} pour valider le changement.
>>
>> ![Choix de l'option](images/changevolume.png){.thumbnail}
>>
> Depuis la CLI OpenStack
>>
>> Avant de commencer, consultez le guide suivant :
>>
>> - [Préparer l’environnement pour utiliser l’API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).
>>
>> Tout d'abord, listez les types de volumes disponibles dans votre région avec la commande suivante :
>>
>> ```bash
>> #~$ openstack volume type list
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | ID                                   | Name                                               | Is Public |
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | 27844ef7-1a9a-4944-be59-6e4eb19a71f6 | high-speed-gen2                                    | True      |
>> | 23f75fef-d4f6-416a-a884-95aa3fd45695 | classic                                            | True      |
>> | 2f78e8af-93c9-4e5c-b177-83c4a7ec456a | high-speed                                         | True      |
>> | 9c5b1e42-3d8f-4a67-a9d2-84f3b2e7c1aa | high-speed-gen2-luks                               | True      |
>> | f41d7c8e-6a2b-4b91-9e73-2d6c0a58e94f | classic-luks                                       | True      |
>> | c8e92a5d-0f6e-4e3b-b1a4-7a9d6f3c2e8b | high-speed-luks                                    | True      |
>> ---------------------------------------------------------------------------------------------------------
>> ```
>>
>> > [!warning]
>> > Veuillez noter que si les types de volumes « high-speed-gen2 » ou **-LUKS** n'apparaissent pas dans la liste, cela signifie qu'ils ne sont pas disponibles dans cette région.
>> >
>> > Les types de volumes **-LUKS** ne sont affichés que lorsqu’ils sont pris en charge dans la région et compatibles avec le type de chiffrement du volume.
>> >
>>
>> Modifiez ensuite le type de volume avec la commande suivante :
>>
>> ```bash
>> $ openstack volume set --type <VOLUME_TYPE> --retype-policy on-demand <VOLUME_NAME_OR_ID>
>> ```
>>

## Aller plus loin

Pour découvrir comment migrer un volume Block Storage vers un volume chiffré LUKS, consultez notre guide dédié : [Migrer un volume Block Storage vers un volume chiffré LUKS](/pages/public_cloud/compute/migrating-non-encrypted-to-encrypted-volume).

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).