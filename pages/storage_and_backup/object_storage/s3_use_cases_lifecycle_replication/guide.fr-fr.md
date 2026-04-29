---
title: "Object Storage - Cas d'usage lifecycle et réplication"
excerpt: "Découvrez comment combiner les lifecycle policies et la réplication asynchrone de l'Object Storage OVHcloud pour répondre à des cas d'usage avancés de gestion des données"
updated: 2026-04-29
---

## Objectif

OVHcloud Object Storage propose deux fonctionnalités d'automatisation puissantes qui, combinées, permettent de répondre à un large éventail de cas de gestion de données en production :

- Les **lifecycle policies** automatisent les transitions entre classes de stockage (Standard → Infrequent Access → Active Archive → Cold Archive) et l'expiration (suppression) des objets selon des règles que vous définissez.
- La **réplication asynchrone** copie automatiquement les objets d'un bucket source vers un ou plusieurs buckets de destination, au sein d'une même région ou entre différentes régions.

Utilisées séparément, chacune de ces fonctionnalités apporte déjà une valeur significative. Combinées, elles permettent de mettre en place des architectures à la fois économiques, résilientes et conformes.

Ce guide couvre 7 cas d'usage combinant ces deux fonctionnalités :

1. [Archivage réglementaire et conformité](#cas-dusage-1-archivage-reglementaire-et-conformite)
2. [Reprise après sinistre](#cas-dusage-2-reprise-apres-sinistre)
3. [Data lake et tiering automatisé](#cas-dusage-3-data-lake-et-tiering-automatise)
4. [Distribution géographique de contenu](#cas-dusage-4-distribution-geographique-de-contenu)
5. [Gestion des environnements Dev/Staging](#cas-dusage-5-gestion-des-environnements-devstaging)
6. [Logs et observabilité](#cas-dusage-6-logs-et-observabilite)
7. [Sauvegarde SaaS multi-tenant](#cas-dusage-7-sauvegarde-saas-multi-tenant)

## Prérequis

- Disposer d'un [projet Public Cloud OVHcloud](/links/public-cloud/public-cloud) actif.
- Disposer de buckets Object Storage créés dans une ou plusieurs régions OVHcloud. Consultez notre guide « [Premiers pas avec l'Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) » si nécessaire.
- Connaître les classes de stockage OVHcloud. Consultez notre guide « [Choisir la classe de stockage adaptée à vos besoins](/pages/storage_and_backup/object_storage/s3_choosing_the_right_storage_class_for_your_needs) ».
- Connaître les lifecycle policies. Consultez notre guide « [Object Storage - Gérer le cycle de vie des objets](/pages/storage_and_backup/object_storage/s3_bucket_lifecycle) ».
- Connaître la réplication asynchrone. Consultez notre guide « [Object Storage - Maîtriser la réplication asynchrone sur vos buckets](/pages/storage_and_backup/object_storage/s3_asynchronous_replication) ».
- **Pour les étapes CLI uniquement** : disposer de l'AWS CLI installée et configurée avec vos identifiants et endpoint Object Storage OVHcloud. Consultez notre guide « [Premiers pas avec l'Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) ».

> [!primary]
> Chaque étape peut être réalisée depuis l'**espace client OVHcloud** ou avec la **CLI AWS**. Les deux approches sont décrites pour chaque étape. Les exemples CLI utilisent le format d'endpoint OVHcloud :
> ```bash
> --endpoint-url https://s3.<region>.io.cloud.ovh.net
> ```
> Remplacez `<region>` par le slug de votre région (par exemple `gra`, `sbg`, `de`, `uk`) et remplacez tous les noms de buckets et préfixes par vos propres valeurs.

## Référence du mapping des classes de stockage

Tous les exemples CLI de ce guide utilisent les valeurs de `StorageClass` de l'API S3<sup>1</sup> requises pour les **opérations d'écriture** (PUT, transitions lifecycle, destination de réplication) sur l'endpoint `.io` d'OVHcloud. Le mapping diffère entre les **régions 3-AZ** et les **régions 1-AZ**.

> [!primary]
> Le mapping ci-dessous reflète l'état actuel depuis le **3 janvier 2026**. Consultez le guide « [Object Storage - Endpoints et disponibilité géographique](/pages/storage_and_backup/object_storage/s3_location) » pour la référence complète et à jour.

**Régions 3-AZ (ex. Paris `eu-west-par`, Milan `eu-south-mil`)**

| Valeur `StorageClass` de l'API S3 | Classe de stockage OVHcloud |
|---|---|
| `EXPRESS_ONEZONE` | High Performance |
| `STANDARD` (aussi `INTELLIGENT_TIERING` ou défaut) | Standard |
| `STANDARD_IA` (aussi `ONEZONE_IA`) | Infrequent Access |
| `GLACIER_IR` (aussi `GLACIER`) | Active Archive |
| `DEEP_ARCHIVE` | Cold Archive |

**Régions 1-AZ (ex. GRA, SBG, DE, UK, BHS, WAW, ...)**

| Valeur `StorageClass` de l'API S3 | Classe de stockage OVHcloud |
|---|---|
| `EXPRESS_ONEZONE` | High Performance |
| `STANDARD` (aussi `INTELLIGENT_TIERING` ou défaut) | Standard |
| `STANDARD_IA` (aussi `ONEZONE_IA`, `GLACIER_IR`, `GLACIER`, `DEEP_ARCHIVE`) | Infrequent Access |

> [!warning]
> Dans les **régions 1-AZ**, `GLACIER_IR`, `GLACIER` et `DEEP_ARCHIVE` mappent tous vers **Infrequent Access** — aucun niveau d'archivage plus profond n'est disponible dans les régions 1-AZ. Cold Archive est actuellement disponible uniquement dans les régions 3-AZ, et uniquement à Paris (`eu-west-par`).

> [!warning]
> Ce mapping s'applique uniquement à l'endpoint `.io`. L'ancien endpoint `.perf` utilise un mapping différent et n'est maintenu qu'à des fins de rétrocompatibilité.

## Cas d'usage 1 - Archivage réglementaire et conformité

### Contexte

Les organisations des secteurs réglementés (finance, santé, juridique) doivent conserver certaines données pendant des durées légalement imposées — souvent 5 à 10 ans — tout en maîtrisant les coûts de stockage et en garantissant la disponibilité des données dans une juridiction secondaire si nécessaire. Une exigence typique combine :

- Une transition automatique vers des classes de stockage moins coûteuses à mesure que les données vieillissent
- Une copie conforme dans une région géographiquement distincte

### Architecture

| Bucket | Région | Rôle |
|--------|--------|------|
| `compliance-primary-<region>` | ex. GRA | Reçoit tous les nouveaux objets ; applique les transitions lifecycle |
| `compliance-archive-<region2>` | ex. DE | Destination de réplication ; reçoit une copie de chaque objet pour la rétention à long terme |

La lifecycle policy sur le **bucket primaire** gère l'optimisation des coûts. La réplication asynchrone vers le **bucket secondaire** assure la redondance géographique et les exigences de juridiction. Le bucket secondaire peut avoir sa propre lifecycle policy indépendante pour la rétention à long terme.

### Étape 1 - Activer le versioning sur les deux buckets

La réplication asynchrone nécessite que le versioning soit activé sur les buckets source et destination.

**Via l'espace client OVHcloud**

Accédez à la section [Public Cloud](/links/control-panel/publiccloud-projects) de votre espace client OVHcloud et sélectionnez votre projet. Cliquez sur `Object Storage`{.action} dans le menu de gauche, puis cliquez sur le nom de votre bucket source (`compliance-primary-<region>`) depuis l'onglet `Mes conteneurs`{.action}. Rendez-vous dans l'onglet `Informations générales`{.action}, activez le versioning et cliquez sur `Confirmer`{.action}. Répétez cette opération pour le bucket de destination (`compliance-archive-<region2>`).

**Via l'AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket compliance-primary-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket compliance-archive-<region2> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

### Étape 2 - Configurer la réplication sur le bucket primaire

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket source, puis sélectionnez l'onglet `Réplication`{.action}. Cliquez sur `Ajouter une règle de réplication`{.action}. Définissez le bucket de destination sur `compliance-archive-<region2>`, choisissez **Standard** comme classe de stockage de destination, activez la **Réplication des marqueurs de suppression** et cliquez sur `Créer`{.action}.

**Via l'AWS CLI**

Créez un fichier nommé `replication-compliance.json` :

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "replicate-all-to-compliance-region",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {},
      "DeleteMarkerReplication": { "Status": "Enabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::compliance-archive-<region2>",
        "StorageClass": "STANDARD"
      }
    }
  ]
}
```

Appliquez-le :

```bash
aws s3api put-bucket-replication \
  --bucket compliance-primary-<region> \
  --replication-configuration file://replication-compliance.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Étape 3 - Appliquer la lifecycle policy sur le bucket primaire

Cette configuration fait transiter les objets par Infrequent Access, Active Archive et Cold Archive à mesure qu'ils vieillissent. Les niveaux d'archivage ne sont disponibles que dans les régions 3-AZ.

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket source et sélectionnez l'onglet `Lifecycle`{.action}. Cliquez sur `Créer une règle`{.action}. Laissez le filtre de préfixe vide. Pour les **régions 3-AZ**, ajoutez trois actions de transition : **Infrequent Access** au jour 30, **Active Archive** au jour 90 et **Cold Archive** au jour 365. Pour les **régions 1-AZ**, ajoutez uniquement la transition **Infrequent Access** au jour 30. Cliquez sur `Créer la règle`{.action}.

**Via l'AWS CLI**

Créez un fichier nommé `lifecycle-compliance.json` :

> [!primary]
> L'exemple ci-dessous cible une **région 3-AZ** (ex. Paris `eu-west-par`). Il utilise `GLACIER_IR` pour Active Archive et `DEEP_ARCHIVE` pour Cold Archive, tous deux disponibles en 3-AZ uniquement. Pour les **régions 1-AZ**, supprimez les deux transitions d'archivage — seul `STANDARD_IA` est disponible.

```json
{
  "Rules": [
    {
      "ID": "compliance-tiering",
      "Status": "Enabled",
      "Filter": {},
      "Transitions": [
        { "Days": 30,  "StorageClass": "STANDARD_IA" },
        { "Days": 90,  "StorageClass": "GLACIER_IR" },
        { "Days": 365, "StorageClass": "DEEP_ARCHIVE" }
      ]
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket compliance-primary-<region> \
  --lifecycle-configuration file://lifecycle-compliance.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Étape 4 - Appliquer une lifecycle de rétention à long terme sur le bucket secondaire

Cette configuration retient les objets pendant 7 ans (2555 jours) avant expiration.

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket de destination et sélectionnez l'onglet `Lifecycle`{.action}. Cliquez sur `Créer une règle`{.action}. Laissez le filtre de préfixe vide. Ajoutez une action d'expiration définie à **2555 jours**. Cliquez sur `Créer la règle`{.action}.

**Via l'AWS CLI**

```json
{
  "Rules": [
    {
      "ID": "long-term-retention",
      "Status": "Enabled",
      "Filter": {},
      "Expiration": { "Days": 2555 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket compliance-archive-<region2> \
  --lifecycle-configuration file://lifecycle-archive.json \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

> [!primary]
> La réplication copie l'objet au moment de sa création. Si l'objet transite vers une classe de stockage moins coûteuse sur le bucket primaire, le réplica dans le bucket secondaire conserve sa propre classe de stockage de manière indépendante. Vous pouvez ainsi optimiser les coûts différemment de chaque côté.

## Cas d'usage 2 - Reprise après sinistre

### Contexte

Une stratégie de reprise après sinistre pour l'Object Storage nécessite une copie de toutes les données dans une région distante, avec des objectifs de délai de reprise (RTO) et de point de reprise (RPO) alignés sur votre SLA. Le schéma type est le suivant :

- **Bucket primaire** : rétention courte, classe Standard, coût réduit
- **Bucket DR** : copie complète dans une région distante, rétention plus longue en classe Infrequent Access pour réduire le coût en veille

La réplication asynchrone maintient le bucket DR à jour (environ 15 minutes de latence). Les lifecycle policies sur le bucket primaire maîtrisent les coûts en faisant expirer les objets déjà répliqués en sécurité.

### Architecture

| Bucket | Région | Rôle |
|--------|--------|------|
| `dr-primary-<region>` | ex. GRA | Données de production ; lifecycle de rétention courte |
| `dr-backup-<region2>` | ex. UK | Réplica DR ; classe Infrequent Access ; rétention plus longue |

### Étape 1 - Activer le versioning sur les deux buckets

**Via l'espace client OVHcloud**

Accédez à la section [Public Cloud](/links/control-panel/publiccloud-projects) de votre espace client OVHcloud et sélectionnez votre projet. Cliquez sur `Object Storage`{.action} dans le menu de gauche. Pour chaque bucket (`dr-primary-<region>` et `dr-backup-<region2>`), cliquez sur son nom depuis l'onglet `Mes conteneurs`{.action}, puis dans l'onglet `Informations générales`{.action}, activez le versioning et cliquez sur `Confirmer`{.action}.

**Via l'AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket dr-primary-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket dr-backup-<region2> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

### Étape 2 - Configurer la réplication vers le bucket DR

Les objets répliqués sont stockés directement en Infrequent Access côté DR pour réduire les coûts en veille.

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket primaire et sélectionnez l'onglet `Réplication`{.action}. Cliquez sur `Ajouter une règle de réplication`{.action}. Définissez la destination sur `dr-backup-<region2>`, choisissez **Infrequent Access** comme classe de stockage de destination, désactivez la **Réplication des marqueurs de suppression** pour protéger la copie DR des suppressions accidentelles, et cliquez sur `Créer`{.action}.

**Via l'AWS CLI**

Créez un fichier nommé `replication-dr.json` :

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "dr-replication",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {},
      "DeleteMarkerReplication": { "Status": "Disabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::dr-backup-<region2>",
        "StorageClass": "STANDARD_IA"
      }
    }
  ]
}
```

```bash
aws s3api put-bucket-replication \
  --bucket dr-primary-<region> \
  --replication-configuration file://replication-dr.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Étape 3 - Appliquer une lifecycle de rétention courte sur le bucket primaire

Les objets expirent après 60 jours ; les versions non courantes sont nettoyées après 7 jours.

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket primaire et sélectionnez l'onglet `Lifecycle`{.action}. Cliquez sur `Créer une règle`{.action}. Laissez le préfixe vide. Ajoutez une action d'expiration à **60 jours** et une expiration des versions non courantes à **7 jours**. Cliquez sur `Créer la règle`{.action}.

**Via l'AWS CLI**

```json
{
  "Rules": [
    {
      "ID": "primary-short-retention",
      "Status": "Enabled",
      "Filter": {},
      "Expiration": { "Days": 60 },
      "NoncurrentVersionExpiration": { "NoncurrentDays": 7 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket dr-primary-<region> \
  --lifecycle-configuration file://lifecycle-dr-primary.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Étape 4 - Appliquer une lifecycle de rétention plus longue sur le bucket DR

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket DR et sélectionnez l'onglet `Lifecycle`{.action}. Cliquez sur `Créer une règle`{.action}. Laissez le préfixe vide. Définissez l'expiration à **365 jours** et l'expiration des versions non courantes à **30 jours**. Cliquez sur `Créer la règle`{.action}.

**Via l'AWS CLI**

```json
{
  "Rules": [
    {
      "ID": "dr-retention",
      "Status": "Enabled",
      "Filter": {},
      "Expiration": { "Days": 365 },
      "NoncurrentVersionExpiration": { "NoncurrentDays": 30 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket dr-backup-<region2> \
  --lifecycle-configuration file://lifecycle-dr-backup.json \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

> [!warning]
> La **Réplication des marqueurs de suppression** est désactivée dans la règle de réplication DR ci-dessus. Cela empêche les suppressions effectuées sur le bucket primaire de se propager vers le bucket DR, protégeant le réplica contre les suppressions accidentelles ou malveillantes. Ajustez ce paramètre si votre cas d'usage nécessite une cohérence totale entre les deux buckets.

## Cas d'usage 3 - Data lake et tiering automatisé

### Contexte

Les architectures data lake génèrent de grands volumes d'objets interrogés fréquemment lorsqu'ils sont récents (chauds), occasionnellement après quelques semaines (tièdes), et rarement au-delà de quelques mois (froids). Stocker l'ensemble des données dans la même classe de stockage est inutilement coûteux. La combinaison du tiering lifecycle sur un bucket central et de la réplication vers un bucket dédié à l'analytique permet de :

- Réduire automatiquement les coûts à mesure que les données vieillissent sur le bucket data lake principal
- Disposer d'une copie stable en classe Standard pour les outils d'analytique dans une autre région, non affectée par les transitions de tiering

### Architecture

| Bucket | Région | Rôle |
|--------|--------|------|
| `datalake-main-<region>` | ex. GRA | Data lake principal ; lifecycle de tiering |
| `datalake-analytics-<region2>` | ex. DE | Réplica analytique ; reste en classe Standard |

### Étape 1 - Activer le versioning sur les deux buckets

**Via l'espace client OVHcloud**

Accédez à la section [Public Cloud](/links/control-panel/publiccloud-projects) de votre espace client OVHcloud et sélectionnez votre projet. Cliquez sur `Object Storage`{.action} dans le menu de gauche. Pour chaque bucket, cliquez sur son nom depuis l'onglet `Mes conteneurs`{.action}, puis dans l'onglet `Informations générales`{.action}, activez le versioning et cliquez sur `Confirmer`{.action}.

**Via l'AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket datalake-main-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket datalake-analytics-<region2> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

### Étape 2 - Configurer la réplication vers le bucket analytique

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket data lake principal et sélectionnez l'onglet `Réplication`{.action}. Cliquez sur `Ajouter une règle de réplication`{.action}. Laissez le filtre de préfixe vide. Définissez la destination sur `datalake-analytics-<region2>`, choisissez **Standard** comme classe de stockage de destination, désactivez la **Réplication des marqueurs de suppression** et cliquez sur `Créer`{.action}.

**Via l'AWS CLI**

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "replicate-to-analytics",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {},
      "DeleteMarkerReplication": { "Status": "Disabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::datalake-analytics-<region2>",
        "StorageClass": "STANDARD"
      }
    }
  ]
}
```

```bash
aws s3api put-bucket-replication \
  --bucket datalake-main-<region> \
  --replication-configuration file://replication-datalake.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Étape 3 - Appliquer la lifecycle de tiering par préfixe sur le bucket principal

Cette configuration applique des calendriers de tiering différents aux données brutes et aux données traitées, grâce aux filtres de préfixe.

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket principal et sélectionnez l'onglet `Lifecycle`{.action}. Utilisez `Créer une règle`{.action} pour créer deux règles séparément :

- **Règle 1** - préfixe `raw/` : transitions vers **Infrequent Access** au jour 30, **Active Archive** au jour 90, **Cold Archive** au jour 365 (3-AZ uniquement)
- **Règle 2** - préfixe `processed/` : transitions vers **Infrequent Access** au jour 60, **Active Archive** au jour 180 (3-AZ uniquement)

**Via l'AWS CLI**

> [!primary]
> `GLACIER_IR` mappe vers Active Archive et `DEEP_ARCHIVE` vers Cold Archive — les deux sont disponibles uniquement dans les **régions 3-AZ**. Pour les **régions 1-AZ**, utilisez uniquement `STANDARD_IA`.

```json
{
  "Rules": [
    {
      "ID": "tier-raw-data",
      "Status": "Enabled",
      "Filter": { "Prefix": "raw/" },
      "Transitions": [
        { "Days": 30,  "StorageClass": "STANDARD_IA" },
        { "Days": 90,  "StorageClass": "GLACIER_IR" },
        { "Days": 365, "StorageClass": "DEEP_ARCHIVE" }
      ]
    },
    {
      "ID": "tier-processed-data",
      "Status": "Enabled",
      "Filter": { "Prefix": "processed/" },
      "Transitions": [
        { "Days": 60,  "StorageClass": "STANDARD_IA" },
        { "Days": 180, "StorageClass": "GLACIER_IR" }
      ]
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket datalake-main-<region> \
  --lifecycle-configuration file://lifecycle-datalake.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

> [!primary]
> Le réplica analytique conserve tous les objets en classe Standard, quelle que soit la transition appliquée sur la source. Vos outils d'analytique accèdent toujours à des données immédiatement disponibles, sans délai de restauration ni coûts supplémentaires.

## Cas d'usage 4 - Distribution géographique de contenu

### Contexte

Les organisations qui distribuent des assets statiques (fichiers média, paquets logiciels, mises à jour de firmware, documentation) à des utilisateurs dans plusieurs régions ont intérêt à conserver des copies proches de leurs utilisateurs finaux. La combinaison de la réplication et des lifecycles vous offre :

- La propagation automatique du nouveau contenu vers les buckets régionaux
- L'expiration automatique des versions obsolètes en local, évitant la dérive du stockage dans le temps

### Architecture

| Bucket | Région | Rôle |
|--------|--------|------|
| `content-origin-<region>` | ex. GRA | Origine principale ; tout le contenu est téléversé ici |
| `content-eu-west-<region2>` | ex. UK | Réplica de périphérie régional |
| `content-eu-central-<region3>` | ex. DE | Réplica de périphérie régional |

### Étape 1 - Activer le versioning sur tous les buckets

**Via l'espace client OVHcloud**

Accédez à la section [Public Cloud](/links/control-panel/publiccloud-projects) de votre espace client OVHcloud et sélectionnez votre projet. Cliquez sur `Object Storage`{.action} dans le menu de gauche. Pour chacun des trois buckets, cliquez sur son nom depuis l'onglet `Mes conteneurs`{.action}, puis dans l'onglet `Informations générales`{.action}, activez le versioning et cliquez sur `Confirmer`{.action}.

**Via l'AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket content-origin-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket content-eu-west-<region2> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket content-eu-central-<region3> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region3>.io.cloud.ovh.net
```

### Étape 2 - Configurer la réplication multi-destination sur le bucket d'origine

L'Object Storage OVHcloud prend en charge plusieurs règles de réplication sur un même bucket.

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket d'origine et sélectionnez l'onglet `Réplication`{.action}. Cliquez sur `Ajouter une règle de réplication`{.action}. Laissez le préfixe vide, définissez la destination sur `content-eu-west-<region2>`, activez la **Réplication des marqueurs de suppression** et cliquez sur `Créer`{.action}. Cliquez à nouveau sur `Ajouter une règle de réplication`{.action} pour ajouter une seconde règle avec pour destination `content-eu-central-<region3>` et les mêmes paramètres.

**Via l'AWS CLI**

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "replicate-to-eu-west",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {},
      "DeleteMarkerReplication": { "Status": "Enabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::content-eu-west-<region2>",
        "StorageClass": "STANDARD"
      }
    },
    {
      "ID": "replicate-to-eu-central",
      "Status": "Enabled",
      "Priority": 2,
      "Filter": {},
      "DeleteMarkerReplication": { "Status": "Enabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::content-eu-central-<region3>",
        "StorageClass": "STANDARD"
      }
    }
  ]
}
```

```bash
aws s3api put-bucket-replication \
  --bucket content-origin-<region> \
  --replication-configuration file://replication-content.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Étape 3 - Appliquer la lifecycle d'expiration sur les buckets régionaux

Supprimez les versions non courantes après 30 jours pour éviter l'accumulation de contenu obsolète.

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom d'un bucket régional et sélectionnez l'onglet `Lifecycle`{.action}. Cliquez sur `Créer une règle`{.action}. Laissez le préfixe vide. Définissez l'expiration des versions non courantes à **30 jours** et le nettoyage des uploads multipart incomplets à **7 jours**. Cliquez sur `Créer la règle`{.action}. Répétez l'opération pour l'autre bucket régional.

**Via l'AWS CLI**

```json
{
  "Rules": [
    {
      "ID": "expire-noncurrent-versions",
      "Status": "Enabled",
      "Filter": {},
      "NoncurrentVersionExpiration": { "NoncurrentDays": 30 },
      "AbortIncompleteMultipartUpload": { "DaysAfterInitiation": 7 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket content-eu-west-<region2> \
  --lifecycle-configuration file://lifecycle-regional.json \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net

aws s3api put-bucket-lifecycle-configuration \
  --bucket content-eu-central-<region3> \
  --lifecycle-configuration file://lifecycle-regional.json \
  --endpoint-url https://s3.<region3>.io.cloud.ovh.net
```

> [!primary]
> Lorsque la **Réplication des marqueurs de suppression** est activée, la suppression d'un objet sur le bucket d'origine propage le marqueur de suppression vers tous les réplicas régionaux. La règle `NoncurrentVersionExpiration` nettoie ensuite automatiquement les données de version obsolètes après 30 jours — aucun nettoyage manuel n'est nécessaire.

## Cas d'usage 5 - Gestion des environnements Dev/Staging

### Contexte

Les environnements de développement et de staging ont souvent besoin d'une copie réaliste des données de production pour exécuter des tests significatifs. Sans automatisation, la synchronisation des données est manuelle et sujette aux erreurs. La combinaison de la réplication et de lifecycles agressives permet de :

- Synchroniser automatiquement les données de production vers le staging grâce à la réplication
- Nettoyer automatiquement les données de staging grâce à des règles d'expiration courtes, évitant l'accumulation de coûts sur les environnements non-production

### Architecture

| Bucket | Région | Rôle |
|--------|--------|------|
| `prod-data-<region>` | ex. GRA | Bucket de production ; lifecycle standard |
| `staging-data-<region>` | ex. GRA (même région) | Réplica staging ; expiration agressive |

> [!primary]
> La réplication entre deux buckets dans la même région est supportée et n'engendre pas de coût d'egress. Il s'agit de la configuration typique pour les cas d'usage dev/staging où la séparation géographique n'est pas requise.

### Étape 1 - Activer le versioning sur les deux buckets

**Via l'espace client OVHcloud**

Accédez à la section [Public Cloud](/links/control-panel/publiccloud-projects) de votre espace client OVHcloud et sélectionnez votre projet. Cliquez sur `Object Storage`{.action} dans le menu de gauche. Pour chaque bucket, cliquez sur son nom depuis l'onglet `Mes conteneurs`{.action}, puis dans l'onglet `Informations générales`{.action}, activez le versioning et cliquez sur `Confirmer`{.action}.

**Via l'AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket prod-data-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket staging-data-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Étape 2 - Configurer la réplication de la production vers le staging

Seul le préfixe `datasets/` est répliqué afin de limiter le volume de données copiées vers le staging.

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket de production et sélectionnez l'onglet `Réplication`{.action}. Cliquez sur `Ajouter une règle de réplication`{.action}. Définissez le filtre de préfixe sur `datasets/`, la destination sur `staging-data-<region>`, laissez la classe de stockage **Standard**, désactivez la **Réplication des marqueurs de suppression** et cliquez sur `Créer`{.action}.

**Via l'AWS CLI**

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "prod-to-staging",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": { "Prefix": "datasets/" },
      "DeleteMarkerReplication": { "Status": "Disabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::staging-data-<region>",
        "StorageClass": "STANDARD"
      }
    }
  ]
}
```

```bash
aws s3api put-bucket-replication \
  --bucket prod-data-<region> \
  --replication-configuration file://replication-staging.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Étape 3 - Appliquer une expiration agressive sur le bucket staging

Les objets expirent après 14 jours ; les versions non courantes sont nettoyées après 3 jours.

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket staging et sélectionnez l'onglet `Lifecycle`{.action}. Cliquez sur `Créer une règle`{.action}. Laissez le préfixe vide. Définissez l'expiration à **14 jours**, l'expiration des versions non courantes à **3 jours** et le nettoyage des uploads multipart incomplets à **1 jour**. Cliquez sur `Créer la règle`{.action}.

**Via l'AWS CLI**

```json
{
  "Rules": [
    {
      "ID": "staging-cleanup",
      "Status": "Enabled",
      "Filter": {},
      "Expiration": { "Days": 14 },
      "NoncurrentVersionExpiration": { "NoncurrentDays": 3 },
      "AbortIncompleteMultipartUpload": { "DaysAfterInitiation": 1 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket staging-data-<region> \
  --lifecycle-configuration file://lifecycle-staging.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

> [!warning]
> La **Réplication des marqueurs de suppression** est désactivée dans la règle de réplication ci-dessus. Cela garantit que les suppressions effectuées sur le bucket de production ne se propagent pas vers le staging, permettant aux environnements de staging de continuer à fonctionner avec leur copie locale des données même après la suppression des objets en production.

## Cas d'usage 6 - Logs et observabilité

### Contexte

Les données de logs ont des exigences de rétention hétérogènes selon leur type :

- **Logs d'accès** : rétention courte (30 jours), volume élevé, valeur faible après quelques semaines
- **Logs d'erreurs applicatifs** : rétention moyenne (90 jours), utiles pour les post-mortems d'incidents
- **Logs d'audit et de sécurité** : rétention longue (1 à 7 ans), requise pour la conformité

La combinaison de lifecycles par préfixe et de la réplication vers un bucket de sécurité ou SIEM centralisé permet une gestion granulaire et automatisée de la rétention sans intervention manuelle.

### Architecture

| Bucket | Région | Rôle |
|--------|--------|------|
| `logs-primary-<region>` | ex. GRA | Reçoit tous les logs sous des préfixes typés |
| `logs-security-<region2>` | ex. DE | Réplica sécurité/SIEM ; reçoit uniquement les logs d'audit |

### Étape 1 - Activer le versioning sur les deux buckets

**Via l'espace client OVHcloud**

Accédez à la section [Public Cloud](/links/control-panel/publiccloud-projects) de votre espace client OVHcloud et sélectionnez votre projet. Cliquez sur `Object Storage`{.action} dans le menu de gauche. Pour chaque bucket, cliquez sur son nom depuis l'onglet `Mes conteneurs`{.action}, puis dans l'onglet `Informations générales`{.action}, activez le versioning et cliquez sur `Confirmer`{.action}.

**Via l'AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket logs-primary-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket logs-security-<region2> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

### Étape 2 - Configurer la réplication sélective pour les logs d'audit uniquement

Seul le préfixe `audit/` est répliqué vers le bucket de sécurité.

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket de logs primaire et sélectionnez l'onglet `Réplication`{.action}. Cliquez sur `Ajouter une règle de réplication`{.action}. Définissez le filtre de préfixe sur `audit/`, la destination sur `logs-security-<region2>`, choisissez **Infrequent Access** comme classe de stockage de destination, désactivez la **Réplication des marqueurs de suppression** et cliquez sur `Créer`{.action}.

**Via l'AWS CLI**

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "replicate-audit-to-security",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": { "Prefix": "audit/" },
      "DeleteMarkerReplication": { "Status": "Disabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::logs-security-<region2>",
        "StorageClass": "STANDARD_IA"
      }
    }
  ]
}
```

```bash
aws s3api put-bucket-replication \
  --bucket logs-primary-<region> \
  --replication-configuration file://replication-logs.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Étape 3 - Appliquer des lifecycles différenciées sur le bucket primaire

Appliquez des règles d'expiration et de transition distinctes par type de log grâce aux filtres de préfixe.

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket de logs primaire et sélectionnez l'onglet `Lifecycle`{.action}. Utilisez `Créer une règle`{.action} pour créer trois règles :

- **Règle 1** - préfixe `access/` : expiration à **30 jours**
- **Règle 2** - préfixe `errors/` : transition vers **Infrequent Access** au jour 30, expiration à **90 jours**
- **Règle 3** - préfixe `audit/` : transition vers **Infrequent Access** au jour 90, **Active Archive** au jour 365 (3-AZ uniquement), **Cold Archive** au jour 730 (3-AZ uniquement), expiration à **2555 jours**

**Via l'AWS CLI**

> [!primary]
> `GLACIER_IR` (Active Archive) et `DEEP_ARCHIVE` (Cold Archive) sont disponibles uniquement dans les **régions 3-AZ**. Pour les **régions 1-AZ**, utilisez uniquement `STANDARD_IA` pour la règle `audit/`.

```json
{
  "Rules": [
    {
      "ID": "expire-access-logs",
      "Status": "Enabled",
      "Filter": { "Prefix": "access/" },
      "Expiration": { "Days": 30 }
    },
    {
      "ID": "expire-error-logs",
      "Status": "Enabled",
      "Filter": { "Prefix": "errors/" },
      "Transitions": [
        { "Days": 30, "StorageClass": "STANDARD_IA" }
      ],
      "Expiration": { "Days": 90 }
    },
    {
      "ID": "archive-audit-logs",
      "Status": "Enabled",
      "Filter": { "Prefix": "audit/" },
      "Transitions": [
        { "Days": 90,  "StorageClass": "STANDARD_IA" },
        { "Days": 365, "StorageClass": "GLACIER_IR" },
        { "Days": 730, "StorageClass": "DEEP_ARCHIVE" }
      ],
      "Expiration": { "Days": 2555 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket logs-primary-<region> \
  --lifecycle-configuration file://lifecycle-logs.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Étape 4 - Appliquer la rétention à long terme sur le bucket de sécurité

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket de sécurité et sélectionnez l'onglet `Lifecycle`{.action}. Cliquez sur `Créer une règle`{.action}. Laissez le préfixe vide. Pour les **régions 3-AZ**, ajoutez les transitions : **Infrequent Access** au jour 90, **Active Archive** au jour 365 et **Cold Archive** au jour 730. Pour les **régions 1-AZ**, ajoutez uniquement la transition **Infrequent Access** au jour 90. Définissez l'expiration à **2555 jours**. Cliquez sur `Créer la règle`{.action}.

**Via l'AWS CLI**

> [!primary]
> `GLACIER_IR` (Active Archive) et `DEEP_ARCHIVE` (Cold Archive) sont disponibles uniquement dans les **régions 3-AZ**. Pour les **régions 1-AZ**, utilisez uniquement `STANDARD_IA`.

```json
{
  "Rules": [
    {
      "ID": "security-long-term-retention",
      "Status": "Enabled",
      "Filter": {},
      "Transitions": [
        { "Days": 90,  "StorageClass": "STANDARD_IA" },
        { "Days": 365, "StorageClass": "GLACIER_IR" },
        { "Days": 730, "StorageClass": "DEEP_ARCHIVE" }
      ],
      "Expiration": { "Days": 2555 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket logs-security-<region2> \
  --lifecycle-configuration file://lifecycle-security.json \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

> [!primary]
> En structurant votre pipeline de logs avec des préfixes typés (`access/`, `errors/`, `audit/`), vous pouvez appliquer des règles de lifecycle précises à chaque catégorie indépendamment. L'ajout d'un nouveau type de log ne nécessite qu'un nouveau préfixe et une nouvelle règle de lifecycle — aucune refactorisation du pipeline n'est nécessaire.

## Cas d'usage 7 - Sauvegarde SaaS multi-tenant

### Contexte

Les plateformes SaaS servant plusieurs tenants doivent souvent fournir des garanties de sauvegarde et d'isolation des données par tenant. Les exigences courantes incluent :

- L'isolation des données par tenant (données de chaque tenant stockées sous un préfixe dédié)
- Des politiques de rétention par tenant reflétant les SLA contractuels
- La réplication hors site des données tenant pour la résilience et la conformité

Ce cas d'usage illustre un modèle **préfixe par tenant** au sein d'un bucket partagé, combiné à des règles de lifecycle basées sur les tags pour appliquer des politiques différenciées par tenant.

### Architecture

| Bucket | Région | Rôle |
|--------|--------|------|
| `saas-tenants-<region>` | ex. GRA | Bucket multi-tenant principal ; isolation des données par préfixe |
| `saas-backup-<region2>` | ex. DE | Réplica de sauvegarde hors site pour tous les tenants |

Les objets sont stockés sous les préfixes `tenants/<tenant-id>/`. Les objets de chaque tenant sont tagués au moment du téléversement avec un tag `tenant-tier` (ex. `standard` ou `premium`), permettant des lifecycles différenciées.

### Étape 1 - Activer le versioning sur les deux buckets

**Via l'espace client OVHcloud**

Accédez à la section [Public Cloud](/links/control-panel/publiccloud-projects) de votre espace client OVHcloud et sélectionnez votre projet. Cliquez sur `Object Storage`{.action} dans le menu de gauche. Pour chaque bucket, cliquez sur son nom depuis l'onglet `Mes conteneurs`{.action}, puis dans l'onglet `Informations générales`{.action}, activez le versioning et cliquez sur `Confirmer`{.action}.

**Via l'AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket saas-tenants-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket saas-backup-<region2> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

### Étape 2 - Téléverser les objets avec les tags de métadonnées tenant

Les objets doivent être tagués au moment du téléversement pour que les règles de lifecycle basées sur les tags puissent les identifier correctement.

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket tenants. Sélectionnez l'onglet `Objets`{.action} et cliquez sur `Ajouter des objets`{.action}. Avant de confirmer le téléversement, développez la section **Tags**. Ajoutez un tag avec la clé `tenant-id` et la valeur `tenant-abc123`, et un second tag avec la clé `tenant-tier` et la valeur `premium`. Sélectionnez votre fichier et cliquez sur `Importer`{.action}.

**Via l'AWS CLI**

```bash
aws s3api put-object \
  --bucket saas-tenants-<region> \
  --key "tenants/tenant-abc123/backup-2025-04-15.tar.gz" \
  --body backup-2025-04-15.tar.gz \
  --tagging "tenant-id=tenant-abc123&tenant-tier=premium" \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Étape 3 - Configurer la réplication vers le bucket de sauvegarde

**Via l'espace client OVHcloud**

Depuis l'onglet `Mes conteneurs`{.action}, cliquez sur le nom de votre bucket tenants et sélectionnez l'onglet `Réplication`{.action}. Cliquez sur `Ajouter une règle de réplication`{.action}. Définissez le filtre de préfixe sur `tenants/`, la destination sur `saas-backup-<region2>`, choisissez **Infrequent Access** comme classe de stockage de destination, désactivez la **Réplication des marqueurs de suppression** et cliquez sur `Créer`{.action}.

**Via l'AWS CLI**

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "replicate-all-tenants",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": { "Prefix": "tenants/" },
      "DeleteMarkerReplication": { "Status": "Disabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::saas-backup-<region2>",
        "StorageClass": "STANDARD_IA"
      }
    }
  ]
}
```

```bash
aws s3api put-bucket-replication \
  --bucket saas-tenants-<region> \
  --replication-configuration file://replication-saas.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Étape 4 - Appliquer des lifecycles basées sur les tags pour une rétention différenciée

> [!primary]
> Les filtres de lifecycle basés sur les tags sont actuellement configurables via l'AWS CLI. Pour les règles à base de tags dans l'espace client OVHcloud, vérifiez l'onglet `Lifecycle`{.action} de votre bucket — la prise en charge des filtres par tag peut avoir été ajoutée depuis la publication de ce guide.

**Via l'AWS CLI**

```json
{
  "Rules": [
    {
      "ID": "standard-tier-retention",
      "Status": "Enabled",
      "Filter": {
        "Tag": { "Key": "tenant-tier", "Value": "standard" }
      },
      "Transitions": [
        { "Days": 30, "StorageClass": "STANDARD_IA" }
      ],
      "Expiration": { "Days": 90 },
      "NoncurrentVersionExpiration": { "NoncurrentDays": 7 }
    },
    {
      "ID": "premium-tier-retention",
      "Status": "Enabled",
      "Filter": {
        "Tag": { "Key": "tenant-tier", "Value": "premium" }
      },
      "Transitions": [
        { "Days": 60,  "StorageClass": "STANDARD_IA" },
        { "Days": 180, "StorageClass": "GLACIER_IR" },
        { "Days": 365, "StorageClass": "DEEP_ARCHIVE" }
      ],
      "Expiration": { "Days": 730 },
      "NoncurrentVersionExpiration": { "NoncurrentDays": 30 }
    }
  ]
}
```

> [!primary]
> `GLACIER_IR` (Active Archive) et `DEEP_ARCHIVE` (Cold Archive) dans la règle `premium` sont disponibles uniquement dans les **régions 3-AZ**. Pour les **régions 1-AZ**, utilisez uniquement `STANDARD_IA`.

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket saas-tenants-<region> \
  --lifecycle-configuration file://lifecycle-saas.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

> [!warning]
> Les règles de lifecycle basées sur les tags nécessitent que chaque objet soit tagué correctement au moment du téléversement. Pensez à appliquer cette contrainte au niveau applicatif pour garantir la cohérence entre tous les téléversements des tenants. Si le niveau d'un tenant change, retaguer les objets existants permettra à la règle de lifecycle appropriée de s'appliquer à partir de ce moment.

## Récapitulatif

Le tableau ci-dessous fournit une référence rapide des choix de configuration clés pour les 7 cas d'usage :

| Cas d'usage | Périmètre de réplication | Réplication des marqueurs de suppression | Lifecycle primaire | Lifecycle secondaire |
|----------|------------------|--------------------------|-------------------|---------------------|
| Archivage réglementaire | Tous les objets | Activée | Tiering (30 → 90 → 365 jours) | Expiration à 7 ans |
| Reprise après sinistre | Tous les objets | Désactivée | Expiration à 60 jours | Expiration à 1 an |
| Data lake tiering | Tous les objets | Désactivée | Tiering par préfixe | Aucune (classe Standard conservée) |
| Distribution géo de contenu | Tous les objets | Activée | Aucune sur l'origine | Expiration des versions non courantes |
| Sync Dev/Staging | Filtre préfixe (`datasets/`) | Désactivée | Standard | Expiration à 14 jours |
| Logs et observabilité | Filtre préfixe (`audit/`) | Désactivée | Expiration différenciée par préfixe | Rétention long terme + tiering |
| SaaS multi-tenant | Filtre préfixe (`tenants/`) | Désactivée | Rétention différenciée par tag | Infrequent Access (tous tenants) |

> [!warning]
> Les règles de lifecycle de l'Object Storage sont évaluées une fois par jour. Il peut y avoir un délai allant jusqu'à 24 heures entre le moment où un objet remplit les critères d'une transition ou d'une expiration et le moment où l'action est effectivement réalisée. Pendant ce délai, les objets continuent d'être facturés au tarif de leur classe de stockage actuelle.

## Aller plus loin

- [Object Storage - Gérer le cycle de vie des objets](/pages/storage_and_backup/object_storage/s3_bucket_lifecycle)
- [Object Storage - Maîtriser la réplication asynchrone sur vos buckets](/pages/storage_and_backup/object_storage/s3_asynchronous_replication)
- [Object Storage - Choisir la classe de stockage adaptée à vos besoins](/pages/storage_and_backup/object_storage/s3_choosing_the_right_storage_class_for_your_needs)
- [Object Storage - Premiers pas avec l'Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage)
- [Object Storage - Endpoints et disponibilité géographique](/pages/storage_and_backup/object_storage/s3_location)

Échangez avec notre [communauté d'utilisateurs](/links/community).

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.
