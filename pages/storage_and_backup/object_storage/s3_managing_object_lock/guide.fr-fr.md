---
title: "Object Storage - Gestion de l'immuabilité des objets avec Object Lock (WORM)"
excerpt: "Object Lock est une fonctionnalité qui vous permet de stocker des objets en utilisant un modèle WORM (Write Once, Read Many)"
updated: 2026-04-03
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

Object Lock est une fonctionnalité qui vous permet de stocker des objets en utilisant un modèle WORM (**W**rite **O**nce, **R**ead **M**any) et peut être utilisé dans des scénarios où il est impératif que les données ne soient pas modifiées ou supprimées après avoir été écrites.

**Ce guide explique comment gérer l'Object Lock.**

## Concept

Object Lock fournit deux façons de gérer la rétention des objets. La première étant les périodes de rétention et la seconde le Legal hold.

### Comment fonctionne Object Lock ?

Pour comprendre le fonctionnement de Object Lock, nous devons d'abord comprendre comment la suppression d'objets et le *versioning* fonctionnent ensemble. Lorsqu'une opération de suppression d'objet est effectuée sur un objet dans un bucket sur lequel le *versioning* est activé, elle ne supprime pas l'objet de manière permanente, mais crée un marqueur de suppression sur l'objet. Ce marqueur de suppression devient la version la plus récente et la version actuelle de l'objet avec un nouvel ID de version.

Un marqueur de suppression possède les propriétés suivantes :

- Une clé et un ID de version comme tout autre objet.
- Il n'a pas de données associées, donc il ne récupère rien d'une requête GET (vous obtenez une erreur 404).
- Par défaut, il n'est plus affiché dans l'espace client.
- La seule opération que vous pouvez utiliser sur un marqueur de suppression est DELETE, et seul le propriétaire du bucket peut effectuer une telle demande.

Pour supprimer définitivement un objet, vous devez spécifier l'ID de version dans votre demande de suppression d'objet :

```bash
aws s3api delete-object --bucket <bucket_name> --key <object_key> --version-id <version_id>
```

La fonction Object Lock empêche les objets, pendant une durée fixe (mode de rétention) ou indéfiniment (conservation légale), d'être :

- supprimés même si vous spécifiez le *version ID* (vous obtenez une erreur « Access Denied ») ;
- écrasés par le *versioning*.

> [!primary]
>
> Pour utiliser Object Lock, le *versioning* doit être activé.
>

### Périodes de rétention

Une période de rétention définit une durée pendant laquelle un objet reste verrouillé. Pendant cette période, l’objet est protégé et ne peut ni être modifié ni supprimé. La rétention peut être définie en jours ou en années, avec un minimum d’un jour et sans limite maximale.

Lors de la définition d’une période de rétention pour un bucket ou ses objets, vous devez choisir le mode de rétention à appliquer : **Governance** ou **Compliance**.

#### Mode Governance

Le mode **Governance** empêche la plupart des utilisateurs de supprimer ou modifier les objets pendant la période de rétention, tout en permettant à certains utilisateurs disposant de droits spécifiques de gérer la rétention ou de supprimer des objets.

Les utilisateurs autorisés possédant `s3:BypassGovernanceRetention` peuvent ainsi remplacer ou supprimer des objets en mode **Governance**.

> [!primary]
> 
> **Bonne pratique :** utilisez le mode **Governance** lorsque vous souhaitez protéger vos données tout en conservant une certaine flexibilité opérationnelle pour des rôles administratifs spécifiques.
>

#### Mode Compliance

Le mode **Compliance** garantit que les objets ne peuvent être ni modifiés ni supprimés par aucun utilisateur, y compris les administrateurs, pendant toute la période de rétention.

Une fois ce mode activé pour un objet, son mode de rétention et sa durée ne peuvent pas être modifiés.

> [!primary]
>
> **Bonne pratique :** utilisez le mode **Compliance** uniquement si vous devez assurer une immuabilité stricte pour des besoins de conformité ou réglementaires.
>

> [!warning]
>
> Le mode Compliance doit être choisi uniquement si aucun utilisateur, y compris l’administrateur, ne doit pouvoir supprimer ou modifier les objets pendant la période de rétention.
>

### Legal hold

La fonction Legal hold est conçue pour toutes les situations où vous n'êtes pas sûr de la durée pendant laquelle vous voulez que vos objets restent immuables. La fonction Legal hold est un interrupteur ON/OFF qui peut être appliqué à chaque objet, indépendamment de la configuration du verrou, de la rétention de l'objet ou de l'âge de l'objet. Elle peut être appliquée aux objets qui sont verrouillés.

La fonction Legal hold offre la même protection qu'une période de rétention, mais elle n'a pas de date d'expiration. Au lieu de cela, la fonction Legal hold reste en place jusqu'à ce que vous la supprimiez explicitement.

## Prérequis

- Connaître vos informations d'identification Object Storage (`access_key` et `secret_access_key`)
- Avoir installé et configuré l'AWS CLI

Consultez notre guide « [Débuter avec Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) » pour plus de détails.

## En pratique

> [!primary]
>
> Tous les exemples suivants utilisent l'AWS CLI.
>
> Pour en savoir plus sur l'AWS CLI, suivez ce [guide](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).
>

### Permissions

| Nom | Description
|:--|:--|
| `s3:GetObjectRetention` | Permet à l'utilisateur de visualiser le mode et la période de rétention d'un objet.
| `s3:PutObjectRetention` | Permet à l'utilisateur de placer une configuration de rétention sur un objet |
| `s3:GetObjectLegalHold` | Permet à l'utilisateur de visualiser la configuration Legal hold d'un objet.
| `s3:PutObjectLegalHold` | Permet à un utilisateur de placer une configuration Legal hold sur un objet.
| `s3:GetBucketObjectLockConfiguration` | Permet à l'utilisateur de visualiser la configuration de rétention par défaut d'un bucket.
| `s3:PutBucketObjectLockConfiguration` | Permet à l'utilisateur de placer une configuration de rétention sur un bucket spécifique |
| `s3:BypassGovernanceRetention` | Permet à l'utilisateur de contourner le mode *Governance*. |

*Lisez ce [guide](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) pour en savoir plus sur la gestion des identités et des accès.*

### Configuration d'Object Lock

> [!primary]
>
> La commande suivante n'applique pas l'Object Lock aux objets du bucket, elle active seulement la fonctionnalité.
>

```bash
aws s3api create-bucket \
  --bucket <bucket_name> \
  --object-lock-enabled-for-bucket
```

> [!primary]
>
> Cette action active également le *versioning* du bucket.
>

> [!tabs]
> Via AWS CLI
>> Pour utiliser Object Lock, vous devez créer un bucket qui supporte la fonctionnalité avec le flag `--object-lock-enabled-for-bucket`. Si un bucket est créé sans ce flag, il ne pourra pas être ajouté ultérieurement.
>>
>>
>> ```bash
>> aws s3api create-bucket \
>>   --bucket object-lock-bucket \
>>   --object-lock-enabled-for-bucket
>> ```
>>
> Via l'espace client OVHcloud
>> Pour gérer un bucket Object Storage, connectez-vous d'abord à votre [espace client OVHcloud](/links/manager) et ouvrez votre projet `Public Cloud`{.action}.
>>
>> Cliquez sur `Object Storage`{.action} dans la barre de navigation, puis cliquez sur `Créer un conteneur d'objets`{.action}.
>>
>> Lors de la création d’un bucket Object Storage, une étape dédiée permet d’activer l’Object Lock afin de stocker les objets en mode WORM (Write Once, Read Many).
>>
>> Une fois l’Object Lock activé, le paramètre est irréversible pour le bucket concerné. Tous les objets stockés bénéficient ainsi d’une immuabilité garantie jusqu’à la fin de la période de rétention définie.
>>

### Configuration d'Object Lock sur un bucket

Object Lock vous permet de définir une période de rétention sur un bucket spécifique. Une fois définie, la règle spécifiée est appliquée par défaut à chaque nouvel objet placé dans le bucket spécifié.

> [!tabs]
> Via AWS CLI
>> ```bash
>> aws s3api put-object-lock-configuration \
>>   --bucket <bucket_name> \
>>     --object-lock-configuration '{ "ObjectLockEnabled": "Enabled", "Rule": { "DefaultRetention": { "Mode": "GOVERNANCE", "Days": 60 }}}'
>> ```
>>
>> Pour afficher la configuration Object Lock d'un bucket, exécutez :
>>
>> ```bash
>> aws s3api get-object-lock-configuration \
>>   --bucket <bucket_name>
>> ```
>>
>> Le résultat devrait ressembler à ceci :
>>
>> ```json
>> {
>>   "ObjectLockConfiguration" : {
>>     "ObjectLockEnabled" : "Enabled",
>>     "Rule" : {
>>       "DefaultRetention" : {
>>         "Mode" : "GOVERNANCE",
>>         "Days" : 60
>>       }
>>     }
>>   }
>> }
>> ```
>>
> Via l'espace client OVHcloud
>> Pour gérer un bucket Object Storage, connectez-vous d'abord à votre [espace client OVHcloud](/links/manager) et ouvrez votre projet `Public Cloud`{.action}.
>>
>> Cliquez sur `Object Storage`{.action} dans la barre de navigation, sur l'onglet `Mes conteneurs`{.action}, puis cliquez sur le `nom de votre conteneur`{.action}.
>>
>> Depuis l’onglet `Informations générales`{.action}, cliquez sur `Configurer la rétention`{.action}, activez la rétention, puis définissez le mode et la période de rétention applicables. Cliquez ensuite sur le bouton `Sauvegarder`{.action}.
>>

### Comment configurer une période de rétention sur un objet

> [!primary]
>
> Avant de configurer une période de rétention Object Lock sur un objet, assurez-vous que les permissions appropriées sont accordées. Plus précisément, l’utilisateur doit avoir l’autorisation `s3:PutObjectRetention` dans sa politique IAM pour définir la période de rétention avec succès.
>

Pour appliquer une configuration de rétention sur un objet :

```bash
aws s3api put-object-retention \
  --bucket <bucket_name> \
  --key <object_key> \
  --retention '{"Mode":"COMPLIANCE","RetainUntilDate":"2023-01-01T12:00:00.00Z"}'
```

> [!primary]
>
> Le format de la date est standard iso8601 : `Y-m-dTH:M:S.%3fZ`
>

Pour afficher la configuration de rétention d'un objet, exécutez :

```bash
aws s3api get-object-retention \
  --bucket <bucket_name> \
  --key <object_key>
```

Le résultat devrait ressembler à ceci :

```json
{
  "Rétention" : {
  "Mode" : "COMPLIANCE",
  "RetainUntilDate" : "2023-01-01T12:00:00Z"
  }
}
```

#### Contournement du mode Governance

> [!primary]
>
> Si vous avez la permission `s3:BypassGovernanceRetention`, vous pouvez effectuer des opérations sur des versions d'objet verrouillées en mode *Governance* comme si elles n'étaient pas protégées.
>

Pour contourner le mode *Governance*, vous devez indiquer explicitement dans votre requête que vous souhaitez contourner ce mode. Pour ce faire, incluez l'en-tête `--bypass-governance-retention` avec votre requête:

```bash
aws s3api delete-object \
  --bucket <bucket_name> \
  --key <object_key> \
  --bypass-governance-retention
```

### Comment configurer Object Lock Legal hold sur un objet

> [!primary]
>
> Avant de placer un objet en Legal Hold, assurez-vous que les permissions nécessaires sont accordées. L’utilisateur doit avoir la permission `s3:PutObjectLegalHold` dans sa politique IAM pour appliquer ou supprimer un Legal Hold.
>

Pour appliquer une configuration Legal hold à l'objet spécifié :

```bash
aws s3api put-object-legal-hold \
  --bucket <bucket_name> \
  --key <object_key> \
  --legal-hold Status=ON
```

Pour afficher la configuration Legal hold d'un objet, exécutez :

```bash
aws s3api get-object-legal-hold \
  --bucket <bucket_name> \
  --key <object_key>
```

Le résultat devrait ressembler à ceci :

```json
{
  "LegalHold": {
    "Status": "ON"
  }
}
```

### Object Lock et suppression d'objets

Lorsque le *versioning* est activé, une suppression d'objet ne supprime pas l'objet immédiatement mais crée un **marqueur de suppression**. Ce marqueur devient la version actuelle de l’objet avec un nouvel ID.

Un marqueur de suppression :

- A une clé et un ID de version comme tout autre objet.
- Ne contient pas de données (GET retourne 404).
- N'est pas affiché par défaut dans l’espace client.
- Ne peut être manipulé que par DELETE, par le propriétaire du bucket.

La fonction **Object Lock** empêche les objets d’être :

- supprimés même avec un ID de version (renvoie `Access Denied`).
- écrasés par le *versioning*.

#### Fonctionnement des suppressions avec Object Lock

Lorsque l’Object Lock est activé et qu’un objet est protégé par une période de rétention ou une conservation légale, les tentatives de suppression se comportent différemment selon le type de requête :

/// details | **Suppression avec ID de version (DELETE permanente)**

- La suppression est bloquée pendant la période de rétention.
- La réponse renvoyée est 403 Forbidden (Accès refusé).
- Cette protection s’applique à tous les utilisateurs, même les administrateurs, selon le mode de rétention.

Pour supprimer définitivement un objet, vous devez spécifier l’ID de version dans votre demande :

```bash
aws s3api delete-object --bucket my-bucket --key an-object --version-id 123456huijw0
```

> [!primary]
>
> Cette commande échouera si l’objet est protégé par Object Lock en mode Compliance ou Governance sans le contournement adéquat.
>

///

/// details | **Suppression sans ID de version (DELETE simple)**

- La requête renvoie 200 OK.
- Un marqueur de suppression est créé dans le bucket et devient la version actuelle de l’objet.
- L’objet reste protégé par la période de rétention.

**Remarque :** la gestion des marqueurs de suppression et des erreurs d’accès peut se faire via les API/CLI correspondantes.

///

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
