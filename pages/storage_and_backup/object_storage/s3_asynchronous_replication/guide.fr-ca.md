---
title: Object Storage - Maîtrisez la réplication asynchrone sur vos buckets
excerpt: Apprenez à automatiser et à gérer la réplication d'objets entre des buckets pour améliorer la disponibilité, la redondance et la conformité des données
updated: 2024-04-15
---

> [!warning]
> La fonctionnalité de réplication asynchrone entre buckets est actuellement en phase bêta.
> Ce guide peut donc être incomplet et sera mis à jour lors de la bêta. Notre équipe reste disponible sur notre canal Discord dédié. N’hésitez pas à nous rejoindre et à nous contacter : https://discord.gg/ovhcloud. Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Object Storage.

## Introduction

La réplication d'objets est une fonctionnalité puissante qui facilite la réplication automatique et asynchrone d'objets au sein d'un bucket source vers un ou plusieurs buckets de destination. Cette fonctionnalité est essentielle pour maintenir la cohérence, la disponibilité et la redondance des données sur différents emplacements de stockage.

Les buckets de destination peuvent résider dans une seule région ou être répartis sur plusieurs régions, en fonction de vos besoins spécifiques. Cette flexibilité permet le placement et la gestion stratégiques des données sur les réseaux d'infrastructure mondiaux.

## Objectif

Ce guide vise à vous doter des connaissances et des compétences pour :

- **Configurer la réplication d'objets** : apprenez à configurer la réplication d'objets entre des buckets pour la duplication automatisée des données d'une source vers une ou plusieurs destinations.
- **Améliorer la disponibilité des données** : comprendre comment la réplication d'objets améliore la résilience des données en créant des copies dans différentes régions ou zones de stockage.
- **Mise en conformité** : découvrez comment la réplication contribue au respect des exigences réglementaires en matière de géo-redondance et de sauvegarde des données.
- **Réduire les coûts de stockage** : découvrez des stratégies pour réduire les dépenses de stockage en répliquant les données vers des classes de stockage plus rentables.
- **Faciliter le partage des données** : découvrez comment la réplication d'objets rationalise le partage et la synchronisation des données entre les équipes, améliorant ainsi l'efficacité opérationnelle.

## Prérequis

- **Compte de stockage cloud** : un compte actif ayant accès à des services de stockage cloud prenant en charge la réplication d'objets.
- **Buckets configurés** : au moins deux buckets configurés au sein de votre compte de stockage cloud, désignés comme source et destination.
- **Sauvegarde de données** : sauvegarde récente de vos données, particulièrement importante si vous configurez une réplication pour des données existantes afin d'éviter une perte accidentelle.
- **Compréhension des classes de stockage** : sonnaissance des différentes classes de stockage proposées par votre service cloud, ainsi que de leurs implications en termes de coût et de performance.
- **Familiarité avec les politiques de stockage cloud** : connaissance des politiques et des permissions nécessaires pour effectuer la réplication d'objets.
- **Accès aux outils CLI ou à la console de gestion** : possibilité d'utiliser les outils d'interface de ligne de commande (CLI) ou la console de gestion de votre fournisseur de cloud pour configurer et gérer les règles de réplication.
- **Versioning activé** : le versioning doit être activé sur vos buckets si votre service cloud l'exige pour la réplication d'objets.
- **Utilisateur S3** : un compte utilisateur S3 déjà créé au sein de votre projet.
- **Configuration AWS CLI** : AWS CLI installé et configuré sur votre système. Pour obtenir un guide sur la configuration du CLI, reportez-vous à la documentation OVHcloud « [Premiers pas avec Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).

## En pratique

### Cas d’utilisation clés pour la réplication d’objets

- *Copies d'objets exactes avec réplication des métadonnées** : la réplication ne consiste pas seulement à dupliquer l’objet, elle inclut la réplication de toutes les métadonnées associées (ex : heure de création de l’objet, ID de version, etc.). Cela garantit que les copies sont des copies conformes des objets sources, tout en préservant l’intégrité et la cohérence des applications critiques.

- **Synchronisation des données entre les équipes** : cela facilite la synchronisation transparente des données entre les différentes équipes, améliorant la collaboration et le partage des données en fonction de contrôles d'accès et de règles prédéfinis. Il est essentiel de noter que, bien que la synchronisation des données soit un avantage important, les options et les configurations de stockage doivent être gérées avec soin afin de s'assurer qu'elles répondent aux besoins spécifiques de chaque équipe en termes d'accès et de sécurité.

- **Gestion rentable du stockage des données** : les entreprises doivent explorer d'autres stratégies pour optimiser leurs coûts de sauvegarde et de stockage, compte tenu des limites actuelles liées à la réplication des données. À l'heure actuelle, il est important de souligner que la réplication des données se produit uniquement au sein de la même classe de stockage. Si la source est dans une classe de stockage HIGH-PERFORMANCE, tous les objets répliqués seront également dans HIGH-PERFORMANCE. Néanmoins, les entreprises peuvent toujours optimiser la gestion de leur stockage en évaluant soigneusement leurs besoins et en sélectionnant la classe de stockage la plus appropriée dès le départ pour équilibrer les coûts et les performances sans compromettre la disponibilité ou la durabilité des données.

- **Résilience accrue des données entre les régions** : améliorez vos stratégies de protection des données en répliquant les données critiques sur plusieurs régions géographiques. Cela augmente la résilience contre la perte de données et assure la continuité des activités face aux perturbations régionales.

- **Latence réduite pour un accès global** : le positionnement de vos données au plus près de vos utilisateurs finaux minimise la latence d'accès et améliore l'expérience globale de l'utilisateur. La réplication permet un positionnement stratégique des données dans les régions OVHcloud les plus proches de votre clientèle.

- **Gain d’efficacité pour les charges de travail computationnelles** : en rapprochant vos données de vos ressources de calcul OVHcloud, la réplication améliore l’efficacité et les performances de vos charges de travail, facilitant ainsi un traitement et une analyse plus rapides des données.

- **Conformité et respect de la réglementation** : de nombreux cadres de conformité exigent que les données soient stockées à une distance considérable du site principal ou nécessitent plusieurs copies des données critiques. La réplication d’objets simplifie le processus de satisfaction de ces exigences en permettant une réplication automatique sur de grandes distances et sur plusieurs supports de stockage.

La mise en œuvre de la réplication d'objets garantit non seulement la sécurité et la disponibilité de vos données, mais améliore également l'efficacité opérationnelle et la conformité.

### Qu’est-ce que la réplication asynchrone ?

#### Concepts de base

La réplication asynchrone d’OVHcloud S3 Object Storage est conçue pour faciliter plusieurs opérations clés dans la gestion et la protection de vos données. Cela inclut les actions suivantes :

- **Création d'une copie exacte**

![Schéma 1](images/1.png)

- **Répliquer les données dans la même région**

![Schéma 2](images/2.png)

- **Répliquer les données dans une autre région**

![Schéma 3](images/3.png)

- **Répliquer les données dans deux autres régions**

![Schéma 4](images/4.png)

### Ce qui est répliqué et ce qui ne l’est pas

Le tableau suivant présente le comportement par défaut de la fonctionnalité de réplication asynchrone d’OVHcloud Object Storage :

| Ce qui est répliqué                                       | Ce qui n'est pas répliqué                                    |
|-----------------------------------------------------------|--------------------------------------------------------------|
| Objets créés *après* l'application de la configuration de réplication | Les marqueurs de suppression, c'est-à-dire que les objets supprimés dans le bucket source ne sont pas automatiquement supprimés dans le bucket destinataire |
| Objets non chiffrés | Les réplicas d’objets, c’est-à-dire les objets résultant d’une opération de réplication précédente |
|  | Objets déjà répliqués vers une destination précédente |
| Métadonnées d'objet des objets sources vers les réplicas | Objets stockés dans le stockage temporaire Cold Archive |
| Les objets du bucket source dont le propriétaire dispose des autorisations nécessaires pour lire et accéder aux ACL | Configurations de buckets, c’est-à-dire configuration du cycle de vie, configuration CORS, ACL de buckets, etc. |
| Mises à jour de la liste de contrôle d'accès des objets | Actions résultant des actions de configuration du cycle de vie |
| Tags d'objets | Objets créés *avant* l'upload de la configuration de réplication |
| Configuration de la rétention des verrous d'objet S3 | Réplication vers un bucket dans un autre projet Public Cloud, c'est-à-dire que les buckets source et de destination doivent se trouver dans le même projet |

### Configuration de la réplication

Une configuration de réplication est définie via un ensemble de règles dans un fichier JSON. Ce fichier est téléchargé et appliqué au bucket source, en détaillant la façon dont les objets doivent être répliqués.

### Chaque règle de réplication définit :

- Un **ID de règle unique** pour identifier la règle.
- Une **priorité de règle** pour déterminer l'ordre d'exécution lorsque plusieurs règles existent.
- Un **bucket de destination** où seront stockés les objets répliqués.
- Les **objets à répliquer** : par défaut, tous les objets sont éligibles à la réplication. Toutefois, vous pouvez spécifier un sous-ensemble d'objets en les filtrant avec un préfixe et/ou des tags.

### Structure des règles de réplication

La structure de base d'une règle de réplication dans le fichier JSON de configuration est la suivante :

```json
{
  "Role": "arn:aws:iam::<your_project_id>:role/s3-replication",
  "Rules": [
    {
      "ID": "string",
      "Priority": integer,
      "Filter": {
        "Prefix": "string",
        "Tag": {
          "Key": "string",
          "Value": "string"
        },
        "And": {
          "Prefix": "string",
          "Tags": [
            {
              "Key": "string",
              "Value": "string"
            }
          ]
        }
      },
      "Status": "Enabled"|"Disabled",
      "Destination": {
        "Bucket": "arn:aws:s3:::<your_bucket_name>",
      },
      "DeleteMarkerReplication": {
        "Status": "Enabled"|"Disabled"
      }
    }
  ]
}
```

| Attribut | Description | Requis |
|-----|----|----|
| Tag | Filtrer les objets par clé et/ou valeur de tag. | Non |
| Status | Indique si votre règle de réplication est *Activée* ou *Désactivée*. | Oui |
| Role | Rôle IAM OVHcloud nécessaire pour permettre à l'Object Storage OVHcloud d'accéder aux données du bucket source et d'écrire des données dans les buckets de destination. Actuellement, OVHcloud a défini un rôle unique : `s3-replication`. | Oui |
| Priority | S'il existe plusieurs règles avec le même bucket de destination, les objets seront répliqués en fonction de la règle ayant la priorité la plus élevée. Plus le nombre est élevé, plus la priorité est élevée. | Oui |
| Prefix | Préfixe de nom de clé d'objet qui identifie le ou les objets auxquels la règle s'applique. Pour inclure tous les objets d'un bucket, spécifiez une chaîne vide. | Non |
| ID | Chaque règle de réplication possède un ID unique. | Oui |
| Filter | Filtre qui identifie le sous-ensemble d'objets auquel la règle de réplication s'applique. Pour répliquer tous les objets du bucket, spécifiez un objet vide. | Oui |
| Destination | Conteneur d'informations sur la destination de réplication et ses configurations. | Oui |
| DeleteMarkerReplication | Indique si les opérations de suppression doivent être répliquées. | Oui |
| Bucket | Le bucket de destination (pour effectuer une réplication vers plusieurs destinations, vous devez créer plusieurs règles de réplication). | Oui |
| And | Vous pouvez appliquer plusieurs critères de sélection dans le filtre. | Non |

### Réplication des marqueurs de suppression (Delete marker replication)

> [!warning]
> **IMPORTANT**
> 
> Si vous spécifiez un filtre (`Filter`) dans votre configuration de réplication, vous **devez** inclure également un élément `DeleteMarkerReplication`. Si votre élément `Filter` comprend un élément `Tag`, le statut `DeleteMarkerReplication` **doit être défini sur _Disabled_**.
>

### Présentation des marqueurs de suppression

Lorsqu'une opération de suppression d'objet est effectuée sur un objet dans un bucket avec gestion des versions, elle ne supprime pas l'objet de manière permanente, mais crée un marqueur de suppression sur l'objet. Ce marqueur de suppression devient la dernière version de l'objet avec un nouvel ID de version.

Un marqueur de suppression possède les propriétés suivantes :

- Une clé et un ID de version comme tout autre objet.
- Il n'a pas de données associées, donc il ne récupère rien d'une requête `GET` (vous obtenez une erreur 404).
- Par défaut, il n'est plus affiché dans l'espace client.
- La seule opération que vous pouvez utiliser sur un marqueur de suppression est `DELETE`, et seul le propriétaire du bucket peut émettre une telle demande.

Pour supprimer définitivement un objet, vous devez spécifier l'ID de version dans votre demande de suppression (`DELETE`) d'objet.

> [!warning]
> Par défaut, OVHcloud Object Storage ne réplique ni les marqueurs de suppression ni la suppression définitive vers les buckets de destination. Ce comportement protège vos données contre les suppressions non autorisées ou involontaires.

Toutefois, vous pouvez toujours répliquer des marqueurs de suppression en ajoutant l'élément `DeleteMarkerReplication` à votre règle de configuration de réplication. `DeleteMarkerReplication` spécifie si les marqueurs de suppression doivent ou non être répliqués (lorsque le versioning est activé, une opération de suppression est effectuée sur un objet ; elle ne supprime pas réellement l'objet, mais elle le signale par un marqueur de suppression).

```json
{
  "Role": "arn:aws:iam::<your_project_id>:role/s3-replication",
  "Rules": [
    {
      ...
      "DeleteMarkerReplication": {
        "Status": "Enabled"|"Disabled"
      }
    }
  ]
}
```

### Vérification de l'état de réplication

L'état de réplication permet de déterminer l'état d'un objet en cours de réplication. Pour obtenir l'état de réplication d'un objet, vous pouvez utiliser la commande `head-object `via le AWS CLI :

```bash
$ aws s3api head-object --bucket <source_bucket> --key <object_name>
{
   "LastMoodified" : "Fri, 15 Mar 2024 10:18:15 GMT",
   "ContentLength": 3481,
   "Etag": "\"417947d3634d4645e05ca9e875f5b202\"",
   "VersionId": "17104978950.04081",
   "ContentType": "binary/octet-stream",
   "Metadata": { },
   "StorageClass": "STANDARD",
   "ReplicationStatus": "COMPLETED"
}
```

> [!warning]
> L'état de réplication ne s'applique qu'aux objets éligibles à la réplication.

L'attribut `ReplicationStatus` peut avoir les valeurs suivantes :

| Objet source | Objet répliqué |
|--|--|
| COMPLETED | REPLICA |
| FAILED | n/a car la copie n'existe pas |
| PENDING | n/a car la copie n'existe pas encore|

> [!warning]
> Lorsque vous répliquez des objets vers plusieurs buckets de destination, la valeur de `ReplicationStatus` est *COMPLETED* uniquement lorsque l'objet source a été répliqué avec succès vers tous les buckets de destination, sinon l'attribut reste à la valeur *PENDING*.
> 
> Si la réplication d'une ou plusieurs destinations échoue, la valeur de l'attribut devient *FAILED*.

#### Exemples de configuration de réplication

Réplication simple entre 2 buckets :

```json
{
  "Role": "arn:aws:iam::<your_project_id>:role/s3-replication",
  "Rules": [
    {
      "ID": "ruleId",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": { },
      "DeleteMarkerReplication": { "Status": "Disabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::destination-bucket"
      }
    }
  ]
}
```

Cette configuration répliquera tous les objets (indiqués par le champ `Filter` vide) vers le bucket `destination-bucket`.

#### Réplication des marqueurs de suppression

```json
{
  "Role": "arn:aws:iam::<your_project_id>:role/s3-replication",
  "Rules": [
    {
      "ID": "ruleId",
      "Status": "Enabled",
      "Priority": 1,
      "Filter" : {
        "Prefix": "backup",
        "Tag": {"Key":"important", "Value":"true"}
      },
      "Destination": {
        "Bucket": "arn:aws:s3:::destination-bucket"
      },
      "DeleteMarkerReplication": { "Status": "Disabled" },
    }
  ]
}
```

Cette configuration répliquera tous les objets qui ont le préfixe « backup » et le tag « important » défini sur « true » dans le bucket `destination-bucket`. En outre, nous indiquons que les opérations de suppression dans le bucket source doivent également être répliquées.

#### Réplication de la source vers plusieurs régions

```json
{
  "Role": "arn:aws:iam::<your_project_id>:role/s3-replication",
  "Rules": [
    {
      "ID": "rule1",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": { }
      "Destination": {
        "Bucket": "arn:aws:s3:::region1-destination-bucket"
      },
  "DeleteMarkerReplication": {
    "Status": "Disabled"
  }
    },
    {
      "ID": "rule2",
      "Status": "Enabled",
      "Priority": 2,
      "Filter": { }
      "Destination": {
        "Bucket": "arn:aws:s3:::region2-destination-bucket"
      },
    "DeleteMarkerReplication": {
    "Status": "Disabled"
    }
    }
  ]
}
```

Supposons que le bucket source, le bucket `region1-destination-bucket` et le bucket `region2-destination-bucket` soient 3 buckets dans 3 régions OVHcloud, cette configuration vous permettra de sauvegarder tous les objets du bucket source dans 2 régions différentes.

#### Réplication de 2 sous-ensembles d'objets vers différents buckets de destination

```json
{
  "Role": "arn:aws:iam::<your_project_id>:role/s3-replication",
  "Rules": [
    {
      "ID": "rule1",
      "Status": "Enabled",
      "Priority": 1,
      "Filter" : {
        "Prefix": "dev"
      },
      "Destination": {
        "Bucket": "arn:aws:s3:::destination-bucket1"
      },
      "DeleteMarkerReplication": { "Status": "Disabled" },
    },
    {
      "ID": "rule2",
      "Status": "Enabled",
      "Priority": 2,
      "Filter" : {
        "Prefix": "prod"
      },
      "Destination": {
        "Bucket": "arn:aws:s3:::destination-bucket2"
      },
      "DeleteMarkerReplication": { "Status": "Disabled" }
    }
  ]
}
```

**Cette configuration contient 2 règles de réplication** :

- `rule1` répliquera tous les objets avec le préfixe « dev » vers le bucket `destination-bucket1` et répliquera également les opérations de suppression.
- `rule2` répliquera tous les objets avec le préfixe « prod » dans le bucket `destination-bucket2` sans répliquer les opérations de suppression.


> [!warning]
> Le contrôle de version doit être activé dans le bucket source et le(s) bucket(s) de destination.

### Utilisation de la CLI

#### Créer le bucket source

Le bucket source est le bucket dont les objets sont automatiquement répliqués.

```bash
$ aws s3 mb s3://<bucket_name>
aws --profile default s3 mb s3://<bucket_name>
```

**_Exemple:_** Création d'un bucket source dans la région SBG et dans la classe de stockage « Standard ».

```bash
$ aws s3 mb s3://my-source-bucket
aws --endpoint-url https://s3.sbg.io.cloud.ovh.net --profile default s3 mb s3://my-source-bucket
```

#### Activer le versioning dans le bucket de destination et la source

```bash
$ aws --endpoint-url https://s3.<region_in_lowercase>.<storage_class>.cloud.ovh.net --profile default s3api put-bucket-versioning --bucket my-destination-bucket --versioning-configuration Status=Enabled
$ aws --endpoint-url https://s3.<region_in_lowercase>.<storage_class>.cloud.ovh.net --profile default s3api put-bucket-versioning --bucket my-source-bucket --versioning-configuration Status=Enabled

```

#### Appliquer la configuration de réplication

À l'aide de la CLI AWS, la configuration de réplication est appliquée au bucket source.

```bash
$ aws --endpoint-url https://s3.gra.io.cloud.ovh.net --profile default s3api put-bucket-replication --bucket <source> --replication-configuration file://<<conf.json>
```

**_Exemple:_** : Répliquer tous les objets avec le préfixe « docs » ayant un tag « importance » avec la valeur « high » vers `my-destination-bucket` et répliquer les marqueurs de suppression, c'est-à-dire que les objets marqués comme supprimés dans la source seront marqués comme supprimés dans la destination.

```bash
{
   "Role": "arn:aws:iam::<your_project_id>:role/s3-replication",
   "Rules": [
    {
      "ID": "replication-rule-456",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {
        "And": {
          "Prefix": "docs"
        }
      },
      "Destination": {
        "Bucket": "arn:aws:s3:::my-destination-bucket"
      },
      "DeleteMarkerReplication": {
        "Status": "Enabled"
      }
    }
  ]

}
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
