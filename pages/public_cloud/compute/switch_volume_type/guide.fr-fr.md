---
title: Modifier un Volume Block Storage
excerpt: "Découvrez comment changer le type d'un volume block storage en utilisant Openstack"
updated: 2025-06-17
---

## Objectif

L'objectif de ce guide est de vous montrer comment changer un type de volume Block Storage, de Classic ou High speed à High speed gen2 ou encore à un version `lus` (chiffrée) de votre storage.

## Prérequis

- [Accéder à l'interface Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)
- Un volume [Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) créé dans votre projet [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/)

## En pratique

> [!primary]
>
> En complément des volumes Classic, High speed et Highs speed gen2, trois nouvelles versions chiffrées au repos sont désormais proposées :
>
> - classic-lus
> - high-speed-lus
> - high-speed-gen2-lus
>

### Pourquoi choisir un volume chiffré ?

Les volumes Block Storage en version `-lus` (chiffré) offrent le même niveau de performance que leurs équivalents non chiffrés, avec un chiffrement des données au repos intégré par OVHcloud.

Cas d’usage principaux :

- **Données sensibles :** projets contenant des informations personnelles, financières, médicales ou confidentielles.
- **Exigences réglementaires :** conformité avec des standards comme :
    - RGPD (Règlement Général sur la Protection des Données)
    - ISO 27001, HIPAA, SOC 2, etc.
- **Environnements critiques :**
    - Systèmes bancaires
    - Données de santé
    - Applications métiers avec contraintes de sécurité

Principe de fonctionnement du chiffrement :

- Le chiffrement est automatique et transparent : aucune configuration n’est nécessaire côté client.
- Les clés sont gérées par OVHcloud, dans un système sécurisé.
- Le chiffrement n’impacte pas les performances du volume.

> [!primary]
>
> Opter pour une version chiffrée permet de renforcer la sécurité sans modifier votre architecture ou vos processus.
>

### Modifier un volume Block Storage

Lors de la modification d'un type de volume Block Storage en un volume « High speed gen2 », la politique de migration doit être modifiée de `Never` à `On Demand`.

Par défaut, la politque de migration est définie sur `Never` car le volume reste sur le même cluster CEPH. Cependant, pour le « High speed gen2 », le volume devra être migré vers un nouveau cluster.

Cette modification peut être réalisée via Horizon ou via l’interface de ligne de commande OpenStack.

> [!warning]
> Si le volume est attaché à une Instance, vous devez d'abord le détacher avant de continuer. Pour plus d'informations, consultez [cette section](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance#detacher-un-volume) du guide correspondant.
>
> La conversion vers un volume `-lus` (chiffré) n’est disponible que via la CLI OpenStack pour le moment. Elle n’est pas encore accessible depuis l'interface Horizon.
>

> [!tabs]
> Via l'interface Horizon
>> Connectez-vous à l'[interface Horizon](https://horizon.cloud.ovh.net/auth/login/) et assurez-vous d'être dans la bonne région. Vous pouvez le vérifier en haut à gauche. 
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
> Via la CLI Openstack
>> Avant de commencer, consultez le guide suivant :
>>
>> - [Préparer l’environnement pour utiliser l’API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).
>>
>> Tout d'abord, listez les types de volumes disponibles dans votre région avec la commande suivante :
>>
>> ```bash
>> #~$ openstack volume type list
>> +--------------------------------------+-----------------------------------------------+----------+
>> | ID                                   | Name                                          | Is Public |
>> +--------------------------------------+-----------------------------------------------+----------+
>> | 27844ef7-1a9a-4944-be59-6e4eb19a71f6 | high-speed-gen2                                    | True |
>> | 23f75fef-d4f6-416a-a884-95aa3fd45695 | classic                                            | True |
>> | 2f78e8af-93c9-4e5c-b177-83c4a7ec456a | high-speed                                         | True |
>> | bee392e6-1a9a-4944-be59-e62559be582e | high-speed-gen2-lus                                | True |
>> | 4d1a6718-d4f6-416a-4591-5048fcba6024 | classic-lus                                        | True |
>> | 9facd26c-4a42-4e5c-b177-562ed6bf0de6 | high-speed-lus                                     | True |
>> ----------------------------------------------------------------------------------------------------
>> ```
>>
>> > [!warning]
>> > Veuillez noter que si le type de volume « high-speed-gen2 » n'apparaît pas dans la liste, cela signifie qu'il n'est pas disponible dans cette région.
>> >
>>
>> Modifiez ensuite le type de volume avec la commande suivante :
>>
>> ```bash
>> $ openstack volume set --type high-speed-gen2 --retype-policy on-demand VOLUME_NAME_OR_ID
>> ```
>>

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).