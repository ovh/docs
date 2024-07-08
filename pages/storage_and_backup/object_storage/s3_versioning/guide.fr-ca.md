---
title: "Object Storage - Premiers pas avec la gestion de versions"
excerpt: "Découvrez comment activer et gérer la gestion de versions pour vos buckets de stockage d'objets OVHcloud en utilisant les API"
updated: 2024-07-08
---

> [!primary]
> Ce guide documente l'utilisation via l'API S3. Les futures mises à jour de ce guide détailleront le fonctionnement via l'espace client OVHcloud.

## Objectif

**Ce guide explique comment activer et gérer la gestion de versions pour vos buckets de stockage d'objets OVHcloud en utilisant les API.**

## Prérequis

- [Un projet Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) dans votre compte OVHcloud
- Etre connecté à [l'espace client OVHcloud](/links/manager)
- [Un utilisateur S3](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) déjà créé
- [AWS CLI installé et configuré](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage)

## En pratique

### Concept

La gestion de versions dans le stockage d'objets vous permet de conserver plusieurs variantes d'un objet dans le même bucket. Cette fonctionnalité aide à préserver, récupérer et restaurer chaque version de chaque objet stocké dans vos buckets, facilitant ainsi la récupération en cas d'actions involontaires des utilisateurs ou de défaillances des applications. Par défaut, la gestion de versions est désactivée sur les buckets, et vous devez l'activer explicitement.

### Informations générales

Un bucket de stockage d'objets peut être dans l'un des trois états suivants :

1. **Non versionné** (état par défaut) : aucune version n'est conservée pour les objets.
2. **Versioning activé** : plusieurs versions de chaque objet sont conservées.
3. **Versioning suspendu** : les versions ne sont pas créées pour les nouveaux objets, mais les versions existantes sont conservées.

> [!warning]
> Une fois que le versioning est activé, il ne peut plus être désactivé ; il peut seulement être suspendu.

![Archive](images/versionning.png){.thumbnail}

L'activation et la suspension du versioning se font au niveau du bucket. Une fois activé, tous les objets dans le bucket recevront un identifiant de version unique. Les objets existants auront un identifiant de version nul jusqu'à ce qu'ils soient modifiés.

### Fonctionnement de la gestion de versions

La gestion de versions ajoute une couche de protection à vos données en conservant plusieurs versions d'un objet dans le même bucket. Lorsque vous activez la gestion de versions pour un bucket, chaque objet dans le bucket obtient un identifiant de version unique. Cela signifie qu'à chaque fois qu'un objet est modifié ou supprimé, une nouvelle version est créée et l'ancienne version est conservée. Cela vous permet de récupérer les versions précédentes d'un objet si nécessaire.

- **Téléchargement de nouveaux objets :** un identifiant de version unique est attribué à chaque objet.
- **Modification des objets :** un nouvel identifiant de version est généré et la version précédente est conservée.
- **Suppression des objets :** l'opération de suppression crée un marqueur de suppression mais ne supprime pas les versions précédentes. L'objet peut être restauré en supprimant le marqueur de suppression.

### Identifiants de versions

Chaque objet a un identifiant de version unique, que le versioning S3 soit activé ou non. Dans un bucket avec versioning activé, cet identifiant de version distingue une version des autres versions du même objet.

- **Version actuelle :** la version la plus récemment créée d'un objet (avec la valeur de métadonnée `LastModifiedDate` la plus récente).
- **Versions non actuelles :** versions créées précédemment (avec leurs propres identifiants de version uniques).

Lorsque le versioning n'est pas activé :

- Il n'y a pas de versions non actuelles car le stockage d'objets OVHcloud écrasera toujours la version actuelle avec la dernière version créée lorsque vous téléchargez le même objet (c'est-à-dire avec la même clé).

![Cold Archive concept](images/Withversioningdisabled.png){.thumbnail}

- Si vous supprimez un objet, il sera supprimé de manière permanente car une seule version de votre objet existe à tout moment.

![Cold Archive concept](images/Withversioningdisabled2.png){.thumbnail}

### Avec le versioning activé

Lorsque le versioning est activé :

- Chaque fois que vous téléchargez le même objet, une version non actuelle de l'objet est créée et la dernière version créée devient la version actuelle. Les anciennes versions sont conservées et les données sont protégées contre les suppressions accidentelles ou les défaillances des applications. Vous pouvez les récupérer à tout moment.

![Cold Archive concept](images/Withversioningenabled.png){.thumbnail}

- Si vous supprimez un objet, par défaut, OVHcloud créera un marqueur de suppression (DM) comme nouvelle version actuelle et toutes les versions précédentes resteront. L'objet est ainsi considéré comme « supprimé » et une opération GET object sur cet objet renverra une erreur 404.

![Cold Archive concept](images/Withversioningenabled2.png){.thumbnail}

- Vous pouvez toujours télécharger ou supprimer une version spécifique d'un objet en spécifiant un identifiant de version. Veuillez noter que la suppression d'un objet en spécifiant un numéro de version est irréversible.

![Cold Archive concept](images/Withversioningenabled3.png){.thumbnail}

### Comment activer le versioning

#### Via l'AWS CLI

Pour activer le versioning sur un bucket de stockage d'objets S3, utilisez la commande suivante :

```sh
aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Enabled
```

**Explications :**

- **put-bucket-versioning :** commande AWS CLI pour configurer la gestion des versions.
- **--bucket my-bucket :** remplacez `my-bucket` par le nom de votre bucket.
- **--versioning-configuration Status=Enabled :** active la gestion des versions pour le bucket spécifié.

Après avoir activé la gestion des versions, tous les objets ajoutés au bucket auront un identifiant de version unique. Cela signifie que chaque fois qu'un objet est modifié ou supprimé, une nouvelle version est créée, pouvant être restaurée si nécessaire.

### Comment suspendre la gestion des versions

#### Via l'AWS CLI

Pour suspendre la gestion des versions, définissez l'état de la configuration de la gestion des versions sur `Suspended` :

```sh
aws s3api put-bucket-versioning --bucket my-bucket --versioning-configuration Status=Suspended
```

**Explications :**

- **put-bucket-versioning :** commande AWS CLI pour configurer le versioning.
- **--bucket my-bucket :** remplacez `my-bucket` par le nom de votre bucket.
- **--versioning-configuration Status=Suspended :**  suspend le versioning pour le bucket spécifié.

La suspension du versioning empêche les nouveaux objets de recevoir un identifiant de version. Les objets existants et leurs versions restent inchangés, mais les nouveaux objets n'auront pas d'identifiants de version jusqu'à ce que le versioning soit réactivé.

### Considérations importantes

- **Coûts de stockage :** chaque version d'un objet est stockée comme un objet complet, ce qui entraîne des coûts de stockage S3 standard.
- **Application :** lorsque le versioning est activé, il s'applique à tous les objets dans le bucket, y compris ceux ajoutés avant l'activation du versioning.
- **Suspension :** la suspension du versioning ne supprime pas les versions existantes. Elle empêche seulement la création de nouvelles versions.
- **Permissions :** seul le propriétaire du bucket peut activer ou suspendre le versioning.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
