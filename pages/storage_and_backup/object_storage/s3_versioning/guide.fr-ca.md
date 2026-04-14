---
title: "Object Storage - Premiers pas avec la gestion de versions"
excerpt: "Découvrez comment activer et gérer la gestion de versions pour vos buckets Object Storage OVHcloud en utilisant les API"
updated: 2026-04-14
---

## Objectif

**Ce guide explique comment activer et gérer la gestion de versions pour vos buckets Object Storage OVHcloud en utilisant les API.**

## Prérequis

- [Un projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) dans votre compte OVHcloud
- [Un utilisateur Object Storage](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) déjà créé
- [AWS CLI installé et configuré](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage)

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Projets Public Cloud](/links/control-panel/publiccloud-projects)
- **Pour accéder à vos services :** `Public Cloud`{.action} > Sélectionnez votre projet

---
<!-- CP-NAV-END:publiccloud-projects -->

## En pratique

### Concept

La gestion de versions vous permet de conserver plusieurs variantes d'un objet dans le même bucket. Cette fonctionnalité aide à préserver, récupérer et restaurer chaque version de chaque objet stocké dans vos buckets, facilitant ainsi la récupération en cas d'actions involontaires des utilisateurs ou de défaillances des applications. Par défaut, la gestion de versions est désactivée sur les buckets, et vous devez l'activer explicitement.

### Informations générales

Un bucket Object Storage peut être dans l'un des trois états suivants :

1. **Non versionné** (état par défaut) : aucune version n'est conservée pour les objets.
2. **Versioning activé** : plusieurs versions de chaque objet sont conservées.
3. **Versioning suspendu** : les versions ne sont pas créées pour les nouveaux objets, mais les versions existantes sont conservées.

> [!warning]
> Une fois que le versioning est activé, il ne peut plus être désactivé ; il peut seulement être suspendu.

![États du versioning](images/versionning.png){.thumbnail}

L'activation et la suspension du versioning se font au niveau du bucket. Une fois activé, tous les objets dans le bucket recevront un identifiant de version unique. Les objets existants auront un identifiant de version nul jusqu'à ce qu'ils soient modifiés.

### Fonctionnement de la gestion de versions

La gestion de versions ajoute une couche de protection à vos données en conservant plusieurs versions d'un objet dans le même bucket. Lorsque vous activez la gestion de versions pour un bucket, chaque objet dans le bucket obtient un identifiant de version unique. Cela signifie qu'à chaque fois qu'un objet est modifié ou supprimé, une nouvelle version est créée et l'ancienne version est conservée. Cela vous permet de récupérer les versions précédentes d'un objet si nécessaire.

- **Téléchargement de nouveaux objets :** un identifiant de version unique est attribué à chaque objet.
- **Modification des objets :** un nouvel identifiant de version est généré et la version précédente est conservée.
- **Suppression des objets :** l'opération de suppression crée un marqueur de suppression mais ne supprime pas les versions précédentes. L'objet peut être restauré en supprimant le marqueur de suppression.

### Identifiants de versions

Chaque objet a un identifiant de version unique, que le versioning soit activé ou non. Dans un bucket avec versioning activé, cet identifiant de version distingue une version des autres versions du même objet.

- **Version actuelle :** la version la plus récemment créée d'un objet (avec la valeur de métadonnée `LastModifiedDate` la plus récente).
- **Versions non actuelles :** versions créées précédemment (avec leurs propres identifiants de version uniques).

Lorsque le versioning n'est pas activé :

- Il n'y a pas de versions non actuelles car l'Object Storage OVHcloud écrasera toujours la version actuelle avec la dernière version créée lorsque vous téléchargez le même objet (c'est-à-dire avec la même clé).

![Versioning désactivé](images/Withversioningdisabled.png){.thumbnail}

- Si vous supprimez un objet, il sera supprimé de manière permanente car une seule version de votre objet existe à tout moment.

![Suppression permanente sans versioning](images/Withversioningdisabled2.png){.thumbnail}

### Avec le versioning activé

Lorsque le versioning est activé :

- Chaque fois que vous téléchargez le même objet, une version non actuelle de l'objet est créée et la dernière version créée devient la version actuelle. Les anciennes versions sont conservées et les données sont protégées contre les suppressions accidentelles ou les défaillances des applications. Vous pouvez les récupérer à tout moment.

![Versioning activé](images/Withversioningenabled.png){.thumbnail}

- Si vous supprimez un objet, par défaut, OVHcloud crée un marqueur de suppression (DM) comme nouvelle version actuelle et toutes les versions précédentes restent. L'objet est ainsi considéré comme « supprimé » et une opération GET object sur cet objet renverra une erreur 404.

![Marqueur de suppression avec versioning](images/Withversioningenabled2.png){.thumbnail}

- Vous pouvez toujours télécharger ou supprimer une version spécifique d'un objet en spécifiant un identifiant de version. La suppression d'un objet en spécifiant un numéro de version est irréversible.

![Téléchargement ou suppression de versions spécifiques](images/Withversioningenabled3.png){.thumbnail}

### Comment activer le versioning

> [!tabs]
> Via l'AWS CLI
>> Pour activer le versioning sur un bucket Object Storage, utilisez la commande suivante :
>>
>> ```sh
>> aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Enabled
>> ```
>>
>> **Explications :**
>>
>> - `put-bucket-versioning` : commande AWS CLI pour configurer la gestion des versions.
>> - `--bucket my-bucket` : remplacez `my-bucket` par le nom de votre bucket.
>> - `--versioning-configuration Status=Enabled` : active la gestion des versions pour le bucket spécifié.
>>
>> Après avoir activé la gestion des versions, tous les objets ajoutés au bucket auront un identifiant de version unique. Cela signifie que chaque fois qu'un objet est modifié ou supprimé, une nouvelle version est créée, pouvant être restaurée si nécessaire.
>>
> Via l'espace client OVHcloud
>> Pour activer le versioning sur un bucket Object Storage, deux options sont disponibles :
>>
>> - Lors de la création du bucket, activez l’option de versioning dans l’étape qui lui est associée.
>>
>> - Pour un bucket existant, vous pouvez modifier ses paramètres depuis l'espace client OVHcloud, dans l'onglet `Informations générales`{.action}.
>>

### Comment suspendre la gestion des versions

> [!tabs]
> Via l'AWS CLI
>>
>> Pour suspendre la gestion des versions, définissez l'état de la configuration de la gestion des versions sur `Suspended` :
>>
>> ```sh
>> aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Suspended
>> ```
>>
>> **Explications :**
>>
>> - `put-bucket-versioning` : commande AWS CLI pour configurer le versioning.
>> - `--bucket my-bucket` : remplacez `my-bucket` par le nom de votre bucket.
>> - `--versioning-configuration Status=Suspended` : suspend le versioning pour le bucket spécifié.
>>
>> La suspension du versioning empêche les nouveaux objets de recevoir un identifiant de version. Les objets existants et leurs versions restent inchangés, mais les nouveaux objets n'auront pas d'identifiants de version jusqu'à ce que le versioning soit réactivé.
>>

### Gérer et accéder aux versions d’objets

#### Afficher les versions d'objets

> [!tabs]
> Via l'espace client OVHcloud
>> Vous pouvez afficher ou masquer les versions d'objets dans un bucket Object Storage en cliquant sur le bouton `Voir les versions`{.action} dans l'onglet `Objets`{.action}.
>>

#### Afficher les différentes versions d'un objet

> [!tabs]
> Via l'espace client OVHcloud
>> Pour consulter les différentes versions d'un objet, cliquez sur l'objet en question dans l'onglet `Objets`{.action}. Vous serez redirigé vers une page affichant ses détails. Pour voir les versions disponibles, cliquez sur l'onglet `Versions`{.action}.
>>

#### Télécharger une version actuelle ou antérieure d’un objet

> [!tabs]
> Via l'espace client OVHcloud
>> Depuis la page principale de votre bucket Object Storage (si l'affichage des versions est activé) ou depuis l'onglet `Versions`{.action} de la page de détails de l'objet (voir l'étape précédente), vous pouvez télécharger la version souhaitée en cliquant sur le bouton `...`{.action}, puis sur `Télécharger`{.action}.
>>

### Suppression d’objets : suppression simple, définitive et gestion des Delete Markers

> [!primary]
>
> Si le versioning est activé sur votre bucket Object Storage, la suppression d’un objet ajoute un Delete Marker : l’objet disparaît de la vue par défaut, mais reste visible via l’option `Voir les versions`{.action}.
>
> Cette protection permet de restaurer un objet supprimé par erreur.
>

> [!tabs]
> Via l'espace client OVHcloud
>> Depuis l'onglet `Objets`{.action} de votre bucket Object Storage, vous pouvez supprimer un objet en cliquant sur le bouton `corbeille`{.action}.
>>
>> Pour supprimer définitivement une version spécifique, cliquez sur l'objet concerné, accédez à l'onglet `Versions`{.action}, cliquez sur le bouton `...`{.action}, sélectionnez `Supprimer`{.action}, puis confirmez la suppression définitive.
>>
>>
> Via l'AWS CLI
>> Pour supprimer un objet, utilisez la commande suivante :
>>
>> ```bash
>> aws s3api delete-object --bucket <bucket_name> --key <object_key>
>> ```
>>
>> Si vous souhaitez voir les différentes versions d'un objet, utilisez la commande suivante :
>>
>> ```bash
>> aws s3api list-object-versions --bucket <bucket_name> --prefix <object_key>
>> ```
>>
>> Pour supprimer une version spécifique d'un objet :
>>
>> ```bash
>> aws s3api delete-object --bucket <bucket_name> --key <object_key> --version-id <version_id>
>> ```
>>
>> Si vous souhaitez supprimer un delete marker pour récupérer votre version d'objet, procédez comme suit :
>>
>> - Listez les delete markers et identifiez l'identifiant de version du delete marker :
>>
>> ```bash
>> aws s3api list-object-versions --bucket <bucket_name> --prefix <object_key> \
>>   --query "DeleteMarkers" --output json
>> ```
>>
>> - Supprimez ce delete marker :
>>
>> ```bash
>> aws s3api delete-object \
>>   --bucket <bucket_name> \
>>   --key <object_key> \
>>   --version-id <delete_marker_version_id>
>> ```
>>
>> L’objet sera de nouveau accessible comme s’il n’avait jamais été supprimé.
>>

### Considérations importantes

- **Coûts de stockage :** chaque version d'un objet est stockée comme un objet complet, ce qui entraîne des coûts de stockage Object Storage - Standard.
- **Application :** lorsque le versioning est activé, il s'applique à tous les objets dans le bucket, y compris ceux ajoutés avant l'activation du versioning.
- **Suspension :** la suspension du versioning ne supprime pas les versions existantes. Elle empêche seulement la création de nouvelles versions.
- **Permissions :** seul le propriétaire du bucket peut activer ou suspendre le versioning.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
