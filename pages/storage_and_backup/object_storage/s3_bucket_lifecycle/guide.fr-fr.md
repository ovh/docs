---
title: Object Storage - Gestion intelligente du stockage avec des règles lifecycle
excerpt: "Découvrez comment optimiser vos coûts de stockage avec les règles lifecycle d'OVHcloud"
updated: 2025-01-10
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

**Découvrez comment optimiser vos coûts de stockage avec les règles lifecycle d'OVHcloud.**

> [!warning]
>
> Actuellement, la feature est en bêta.
> 
> La mise en place de la fonctionnalité se fera en 2 phases :
>
> - Phase 1 : publication de l'expiration uniquement
> - Phase 2 : prise en charge des transitions

## Introduction

### Qu'est ce qu'un lifecycle ?

Le bucket lifecycle dans OVHcloud Object Storage est une fonctionnalité qui vous permet d'optimiser vos coûts de stockages en gérant vos objets tout au long de leur cycle de vie (**lifecycle**). En téléchargeant une configuration de lifecycle vers un bucket, vous définissez un ensemble de règles que la solution Object Storage applique aux objets du bucket en question pour effectuer des actions spécifiques.

Il y a 2 types d'actions qu'OVHcloud Object Storage effectue sur vos objets :

- **expiration** : ces actions déterminent la date d'expiration de vos objets. Les objets expirés sont alors automatiquement supprimés.
- **transition** : ces actions déterminent le moment où vos objets sont transférés vers un niveau de stockage moins coûteux. Par exemple, vous pourriez vouloir transférer vos objets stockés dans le niveau Haute performance vers le niveau Standard après 30 jours.

### Exemples de cas d'usage

En tirant parti de la fonctionnalité de configuration du lifecycle, vous pouvez demander à OVHcloud Object Storage de :

- **nettoyer les téléchargements multi-parties incomplets** : supposons que vous ayez téléchargé un grand nombre d'objets volumineux (>5GB) en utilisant des téléchargements multi-parties, mais que pour certaines raisons, pour de nombreux objets, le téléchargement multi-parties ne s'est pas terminé avec succès. Dans ce cas, même si vous n'avez pas téléchargé toutes les parties d'un objet, vous devez quand même payer le coût de stockage des parties téléchargées. Dans ce cas, vous pourriez vouloir nettoyer les parties de tous les téléchargements multi-parties incomplets afin d'économiser de l'argent.
- **nettoyer les anciennes données inutilisées** : supposons que vous ayez une application qui stocke ses logs dans un bucket. Votre organisation peut définir une politique de conservation des logs de 30 jours. Passé ce délai, les logs ne sont plus nécessaires et vous voudrez peut-être les supprimer pour économiser de l'argent.
- **optimiser les coûts de stockage en transférant les données rarement consultées vers un niveau de stockage moins coûteux** : supposons que vous ayez certains fichiers qui sont souvent utilisés pendant une brève période avant d'être à peine réutilisés. Il se peut que vous n'ayez plus besoin d'y accéder immédiatement, mais votre organisation ou la législation peut vous obliger à les conserver pendant un certain temps. Une fois ce délai écoulé, vous pouvez les supprimer pour économiser de l'argent.

### Considérations particulières

Lorsqu'un objet atteint la fin de sa durée de vie selon la configuration de son lifecycle, le résultat des actions de transition ou d'expiration effectuées par OVHcloud Object Storage varie en fonction de l'état de versioning du bucket :

- **non versionné** : il n'existe qu'une seule version de l'objet, la version courante, et elle est supprimée définitivement.
- **versionné** : un marqueur de suppression est créé et devient la version courante. Vous pouvez également choisir le nombre d'anciennes versions que vous souhaitez conserver. Si la version courante de l'objet est la seule version de l'objet et qu'il s'agit également d'un marqueur de suppression, ce dernier sera supprimé.
- **versioning suspendu** : actuellement, nous ne permettons pas la suspension du versioning si vous avez une configuration de lifecycle en vigueur. De la même manière, nous ne permettons pas le téléchargement d'une configuration de lifecycle si le versioning est suspendu sur le bucket.

## Expiration

Les règles de lifecycle sont traitées de manière asynchrone et dans la mesure du possible. La plupart des règles sont appliquées dans les 24 heures, mais cela peut prendre plus de temps dans le cas d'un très grand nombre d'objets ou lors du traitement de nombreux objets. Pendant ce délai, vous continuez à être facturé pour le niveau de stockage actuel de l'objet, même si la règle (par exemple, l'expiration ou la transition) a déjà été déclenchée mais n'est pas encore terminée. Par exemple, si un objet doit être supprimé le 30e jour, mais qu'il n'est traité que le 32e jour, vous pouvez être facturé pour deux jours supplémentaires.

### Dates d'expiration conflictuelles

En règle générale, la fonction lifecycle est conçue pour vous aider à optimiser vos coûts de stockage. Par exemple, si deux règles d'expiration se chevauchent, c'est-à-dire qu'elles ciblent le même ensemble d'objets mais avec des dates d'expiration différentes, la règle avec la durée la plus courte est appliquée, garantissant que les données ne sont pas conservées au-delà du délai prévu : OVHcloud Object Storage essaie toujours de choisir la voie la plus rentable pour vous.

En règle générale, lorsque plusieurs règles s'appliquent au même ensemble d'objets dans une configuration de bucket lifecycle :

- La suppression permanente a la priorité sur la transition
- La transition a la priorité sur la création de marqueurs de suppression
- La date d'expiration/de transition la plus courte a la priorité sur la plus longue.

### Versions courantes et versions non courantes

Dans un bucket versionné, chaque objet a une version courante et zéro ou plusieurs versions non courantes. Lorsque vous supprimez un objet :

- Si vous ne spécifiez pas d'identifiant de version dans votre demande de suppression, un marqueur de suppression est créé au lieu de supprimer l'objet. La version courante de l'objet devient non courante et le marqueur de suppression devient la version courante.
- Si vous spécifiez un ID de version dans votre demande de suppression, la version de l'objet spécifiée est définitivement supprimée (aucun marqueur de suppression n'est créé).
- Un marqueur de suppression avec zéro version non courante est appelé marqueur de suppression d'objet expiré.

### Configuration

> [!primary]
>
> La version 1 de la configuration d'un lifecycle (avec l'attribut Prefix en dehors de Filter) est obsolète. Nous tolérons la version 1 en transformant automatiquement le json pour qu'il corresponde au format de la version 2. Cependant, nous vous conseillons vivement de n'utiliser que la version 2, comme décrit ci-dessous.
>

/// details | Voici la structure de base d'une configuration JSON pour un lifecycle contenant des règles d'expiration


```JSON
{
  "Rules": [
    {
      "ID": "string",
      "Status": "Enabled"|"Disabled",
      "Filter": {
        "Prefix": "string",
        "Tag": {
          "Key": "string",
          "Value": "string"
        },
        "ObjectSizeGreaterThan": long,
        "ObjectSizeLessThan": long,
        "And": {
          "Prefix": "string",
          "Tags": [
            {
              "Key": "string",
              "Value": "string"
            }
          ],
          "ObjectSizeGreaterThan": long,
          "ObjectSizeLessThan": long
        }
      },
      "Expiration": {
        "Date": timestamp,
        "Days": integer,
        "ExpiredObjectDeleteMarker": "true"|"false"
      },
      "NoncurrentVersionExpiration": {
        "NoncurrentDays": integer,
        "NewerNoncurrentVersions": integer
      },
      "AbortIncompleteMultipartUpload": {
        "DaysAfterInitiation": integer
      }
    }
  ]
}
```

| Attribut                                            | Requis | Description |
| --------------------------------------------------- | -------- | ----------- |
| Rules                                               | oui      | Tableau de règles de lifecycle |
| ID                                                  | oui      | Un identifiant unique pour une règle de lifecycle. |
| Status                                              | oui      | Indique si une règle de lifecycle est activée ou désactivée. |
| Filter                                              | oui      | Un filtre qui identifie le sous-ensemble d'objets auquel la règle de réplication s'applique. Pour répliquer tous les objets du bucket, spécifiez un objet vide. |
| Filter.Prefix                                       | non       | Un préfixe de nom de clé d'objet qui identifie l'objet ou les objets auxquels la règle s'applique. Pour inclure tous les objets dans un bucket, spécifiez une chaîne vide. |
| Filter.Tag                                          | non       | Filtrer les objets par clé et/ou valeur de tag. |
| Filter.Tag.Key                                      | non       | Clé du filtre de tag. |
| Filter.Tag.Value                                    | non       | Valeur du filtre de tag. |
| Filter.ObjectSizeGreaterThan                        | non       | Taille minimale de l'objet auquel la règle s'applique. |
| Filter.ObjectSizeLessThan                           | non       | Taille maximale de l'objet auquel la règle s'applique. |
| Filter.And                                          | non       | Vous pouvez appliquer plusieurs critères de sélection dans le filtre. Un AND logique s'applique à plusieurs critères de filtrage. |
| Filter.And.Tags                                     | non       | Un tableau de filtres de tag. Tout les tags du tableau doivent exister dans les tags de l'objet pour que la règle s'applique. |
| Expiration                                          | oui*     | Une action de lifecycle qui applique une opération de suppression à l'ensemble des objets filtrés. </br></br> ⚠️ Obligatoire si Transitions ou AbortIncompleteMultipartUpload n'est pas présent. |
| Expiration.Date                                     | non*      | Indique la date à laquelle les objets doivent être supprimés. La valeur de la date doit être au format ISO 8601 et l'heure doit toujours être fixée à minuit UTC. </br></br> ⚠️ Cet attribut n'est pas obligatoire si Days est présent.  </br> ⚠️ Cet attribut s'exclut mutuellement avec Days, c'est-à-dire que vous avez soit Date, soit Days, mais vous ne pouvez pas spécifier les deux. |
| Expiration.Days                                     | oui*     | Indique la durée en jours après laquelle les objets doivent être supprimés. La valeur doit être un nombre entier égal ou supérieur à 1. </br></br> ⚠️ Cet attribut est obligatoire si Date n'est pas présent. </br> ⚠️ Cet attribut s'exclut mutuellement avec Date, c'est-à-dire que vous avez soit Date, soit Days, mais vous ne pouvez pas spécifier les deux. |
| Expiration.ExpiredObjectDeleteMarker                | non       | Indique si OVHcloud Object Storage doit immédiatement supprimer les marqueurs de suppression qui n'ont pas de versions non courantes (marqueurs de suppression expirés). </br></br> ⚠️ Vous ne pouvez pas spécifier Days ou Date avec ExpiredObjectDeleteMarker dans la même règle. Lorsque vous spécifiez Days/Date, les marqueurs de suppression expirés sont automatiquement supprimés comme des objets normaux lorsqu'ils satisfont aux critères d'âge. ExpiredObjectDeleteMarker est utilisé pour nettoyer les marqueurs de suppression dès qu'ils deviennent la seule version. Vous devez créer une règle séparée avec uniquement l'attribut ExpiredObjectDeleteMarker dans Expiration. </br> ⚠️ Lorsque vous utilisez l'action de lifecycle ExpiredObjectDeleteMarker, la règle ne peut pas spécifier un filtre basé sur un tag. |
| NoncurrentVersionExpiration                         | non       | Une Action de lifecycle qui indique quand les versions d'objets non courantes doivent être supprimées. Cette action n'affecte pas les versions courantes. Elle supprime uniquement les versions qui ne sont pas à jour. |
| NoncurrentVersionExpiration.NoncurrentDays          | non       | Indique le nombre de jours avant qu'une version non courante soit éligible à la suppression après qu'elle soit devenue non courante, c'est-à-dire l'âge minimum d'une version non courante. </br> Exemple : </br></br>  Supposons que vous ayez un objet A avec 10 versions : </br> - A v10 (current version, creation date: 2024-10-23) </br> - A v9 (non-current version, creation date: 2024-10-22) </br> - A v8 (non-current version, creation date: 2024-10-21) </br> - A v7 (non-current version, creation date: 2024-10-20) </br> - A v6 (non-current version, creation date: 2024-10-19) </br> - A v5 (non-current version, creation date: 2024-10-18) </br> - A v4 (non-current version, creation date: 2024-10-17) </br> - A v3 (non-current version, creation date: 2024-10-16) </br> - A v2 (non-current version, creation date: 2024-10-15) </br> - A v1 (non-current version, creation date: 2024-10-14) </br></br> Si la date actuelle est 2024-10-23 et **NoncurrentDays**=5, la règle de lifecycle supprimera les versions non courantes datant de plus de 5 jours, c'est-à-dire v1, v2, v3, v4 et v5. |
| NoncurrentVersionExpiration.NewerNoncurrentVersions | non       | Indique le nombre de versions non courantes les plus récentes à conserver. Le maximum est de 100. </br></br> Exemple: </br> Supposons que vous ayez un objet B avec 10 versions : </br> - B v10 (current version, creation date: 2024-10-23) </br> - B v9 (non-current version, creation date: 2024-10-22) </br> - B v8 (non-current version, creation date: 2024-10-21) </br> - B v7 (non-current version, creation date: 2024-10-20) </br> - B v6 (non-current version, creation date: 2024-10-19) </br> - B v5 (non-current version, creation date: 2024-10-18) </br> - B v4 (non-current version, creation date: 2024-10-17) </br> - B v3 (non-current version, creation date: 2024-10-16) </br> - B v2 (non-current version, creation date: 2024-10-15) </br> - B v1 (non-current version, creation date: 2024-10-14) </br></br> Si **NewerNoncurrentVersions**=3, la règle de lifecycle supprimera toutes les versions non courantes à l'exception des trois plus récentes, à savoir v9, v8 et v7. |
| AbortIncompleteMultipartUpload                      | non       | Une action de lifecycle qui applique une opération de suppression sur les parties d'un téléchargement multi-parties incomplet. |
| AbortIncompleteMultipartUpload.DaysAfterInitiation  | non       | Indique le nombre de jours après lequel toutes les parties de tous les téléchargements multi-parties incomplets sont supprimées et interrompt les téléchargements multi-parties sous-jacents. |

///

### Obtenir la date d'expiration programmée

Si un objet est programmé pour être supprimé, un appel HEAD-OBJECT renvoie un en-tête de réponse http spécial x-amz-expiration qui contient un timestamp indiquant sa date d'expiration et un identifiant de la règle du lifecycle qui a été appliquée.

Le format de l'en-tête est le suivant : `x-amz-expiration: expiry-date=<timestamp>, rule-id=<rule-id>`

- expiry-date : obtenue en additionnant la date de création et le délai d'expiration
- rule-id : l'identifiant de la règle correspondante qui déclenche la suppression

**Exemple** : Obtenir la date d'expiration via un appel API http direct

```http
HEAD /{key}
Host: {bucket}.s3.{region}.io.cloud.ovh.net
...
 
HTTP/1.1 200 OK
...
x-amz-expiration: expiry-date="Fri, 21 Dec 2024 00:00:00 GMT", rule-id="123456789"
```

**Exemple** : Obtenir la date d'expiration via le CLI

```bash
~$ aws s3api head-bucket --bucket $bucket --key $object_name
{
  ...
  "Expiration" : "expiry-date=\"Fri, 21 Dec 2024 00:00:00 GMT\", rule-id=\"123456789\"",
  ...
}
```

### Exemples de configurations d'expiration

/// details | Supprimer tous les objets d'un bucket non versionné

Étant donné que le bucket n'est pas versionné, la configuration suivante supprimera définitivement tous les objets du bucket au bout de 30 jours :

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": { },
      "Expiration": {
        "Days": 30
      }
    }
  ]
}
```

///

/// details | Abandonner les téléchargements multi-parties incomplets

La configuration suivante demandera à OVHcloud Object Storage d'annuler tous les téléchargements incomplets identifiés par le préfixe « /mpus » et de supprimer les parties déjà téléchargées dans les 7 jours suivant leur lancement :

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "/mpus"
      },
      "AbortIncompleteMultipartUpload": {
        "DaysAfterInitiation": 7
      }
    }
  ]
}
```

///

/// details | Expirer des objets dans un bucket non versionné avec des préfixes qui se chevauchent

Dans la configuration suivante, il y a 2 règles de lifecycle :

- La règle « 123456 » supprime définitivement tous les objets dont le préfixe est « old » 30 jours après leur création.
- La règle « 456789 » supprime définitivement tous les objets dont le préfixe est « old/logs » 65 jours après leur création.

Le même ensemble d'objets est éligible aux deux règles de lifecycle. Dans ce cas, la première règle s'appliquera après 30 jours et la seconde sera alors ignorée car les objets auront déjà été supprimés.

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "/old"
      },
      "Expiration": {
        "Days": 30
      }
    },
    {
      "ID": "456789",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "/old/logs"
      },
      "Expiration": {
        "Days": 65
      }
    }
  ]
}
```

///

/// details | Expirer des objets dans un bucket non versionné avec des tags qui se chevauchent

Dans la configuration suivante, il y a 2 règles de lifecycle :

- La règle « 123456 » supprime définitivement tous les objets tagués « age » avec la valeur « old » 30 jours après leur création.
- La règle « 456789 » supprime définitivement tous les objets tagués « type » avec la valeur « logs » 65 jours après leur création.

Si un objet porte les deux tags, c'est-à-dire si un objet est tagué « âge » avec la valeur « old » et « type » avec la valeur « logs », la première règle s'appliquera après 30 jours et la deuxième règle sera alors ignorée parce que l'objet aura déjà été retiré.

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Tag": {
           "Key": "age",
           "Value": "old"
        }
      },
      "Expiration": {
        "Days": 30
      }
    },
    {
      "ID": "456789",
      "Status": "Enabled",
      "Filter": {        
        "Tag": {
           "Key": "type",
           "Value": "logs"
        }       },
      "Expiration": {
        "Days": 65
      }
    }
  ]
}
```

///

/// details | Expirer des objets dans un bucket versionné

Dans un bucket versionné, la configuration suivante effectue ces actions :

- Après 45 jours, tous les objets portant le préfixe « old/ » expirent automatiquement en créant des marqueurs de suppression pour chacune des versions courantes de l'objet : la version courante devient non courante et le marqueur de suppression devient la version courante.
- Toutes les versions non courantes datant de plus de 15 jours des objets sélectionnés sont alors supprimées, à l'exception des 3 versions non courantes les plus récentes. S'il y a moins de 3 versions non courantes, l'action NoncurrentVersionExpiration ne sera pas appliquée.

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "old/"
      },
      "Expiration": {
        "Days": 45
      },
      "NoncurrentVersionExpiration": {
        "NoncurrentDays": 15,
        "NewerNoncurrentVersions": 3
      }
    }
  ]
}
```

///

## Transition

### Transitions supportées

> [!warning]
>
> Seules les transitions d'un niveau de stockage plus coûteux vers un niveau de stockage moins coûteux sont autorisées. En outre, toutes les transitions vers Cold Archive ne sont pas prises en charge actuellement.
> 

Les transitions actuellement prises en charge sont les suivantes :

| de/vers          | High Performance | Standard  | Cold Archive |
| ---------------- | ---------------- | --------- | ------------ |
| High Performance |        -         | oui       | non          |
| Standard         | interdit         | -         | non          |
| Cold Archive     | interdit         | interdit  | -            |

### Taille minimale de l'objet

OVHcloud Object Storage empêchera toute transition vers un autre niveau de stockage pour les objets inférieurs à **128KB**.

### Délai de transition minimal

La durée minimale des règles de transition est de **30 jours**, ce qui signifie que votre configuration de lifecycle ne sera pas valide et que vous obtiendrez une erreur si le nombre de jours pour votre règle de transition est inférieur à 30 jours. En pratique, cela signifie que la fonction de lifecycle ne prendra en compte que les objets datant de plus de **30 jours**.

### Expiration vs transitions

Comme nous l'avons déjà mentionné, lorsque vous avez plusieurs règles dans une configuration de bucket lifecycle qui s'appliquent au même ensemble d'objets :

- La suppression permanente a la priorité sur la transition.
- La transition est prioritaire sur la création de marqueurs de suppression.
- La date d'expiration/de transition la plus courte est prioritaire sur la plus longue.

### Configuration

/// details | Voici la structure de base d'une configuration d'un lifecycle JSON contenant des règles de transition :

```JSON
{
  "Rules": [
    {   
       ...
         
       "Transitions": [
           {
             "Date": timestamp,
             "Days": integer,
             "StorageClass": "STANDARD"
           }
        ],
       "NoncurrentVersionTransitions": [
          {
              "NoncurrentDays": integer,
              "StorageClass": "STANDARD",
              "NewerNoncurrentVersions": integer
          }
       ]
    }
  ]
}
```

| Attribut                                             | Requis   | Description 
| ---------------------------------------------------- | -------- | ------------
| Transitions                                          | oui*     | Un tableau d'opérations lifecycle qui copient automatiquement tous les objets sélectionnés de leur niveau de stockage actuel vers le niveau de stockage le plus efficace. |
| Transitions.Date                                     | no*      | Indique la date à laquelle les objets doivent être transférés. La valeur de la date doit être au format ISO 8601 et l'heure doit toujours être fixée à minuit UTC. </br></br> ⚠️ Cet attribut n'est pas obligatoire si Days est présent. </br> ⚠️ cet attribut s'exclut mutuellement avec Days, c'est-à-dire que vous avez soit Date, soit Days, mais vous ne pouvez pas spécifier les deux. |
| Transitions.Days                                     | oui*     | Indique la durée en jours après laquelle les objets doivent être transférés. La valeur doit être un nombre entier égal ou supérieur à 30. </br></br> ⚠️ Cet attribut est obligatoire si Date n'est pas présent. </br> ⚠️ cet attribut s'exclut mutuellement avec Date, c'est-à-dire que vous avez soit Date, soit Days, mais vous ne pouvez pas spécifier les deux. |
| Transitions.StorageClass                             | oui      | Indique la classe de stockage cible. Actuellement, seul « STANDARD » est disponible. |
| NoncurrentVersionTransitions                         | no       | Un tableau d'actions de lifecycle qui indique quand les versions d'objets non courantes doivent être transférées. Ces actions n'affectent pas les versions courantes. Elles n'assurent la transition que pour les versions qui ne sont pas courantes. |
| NoncurrentVersionTransitions.NoncurrentDays          | no       | Indique le nombre de jours avant qu'une version non courante soit éligible à la transition après être devenue non courante, c'est-à-dire l'âge minimum d'une version non courante. |
| NoncurrentVersionTransitions.NewerNoncurrentVersions | no       | Indique le nombre de versions non courantes les plus récentes à conserver dans leur niveau de stockage actuel. Le maximum est de 100. |

///

### Exemples de configurations de transition

/// details | Objets de transition dans un bucket non versionné

La configuration suivante fait passer tous les objets ayant le préfixe « old » du niveau de stockage Haute performance au niveau de stockage Standard (EXPRESS_ONEZONE à STANDARD) 30 jours après leur création.

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "old/"
      },      
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "STANDARD"
        }
      ]
     }
  ]
}
```

///

/// details | Transition d'objets dans un bucket versionné

La configuration suivante spécifie les actions suivantes :

- La version courante de tous les objets sera transférée du niveau Haute performance au niveau Standard 30 jours après leur création.
- Si les objets ont des versions non courantes, toutes les versions non courantes datant de plus de 5 jours seront transférées du niveau Haute performance au niveau Standard.

Dans ce scénario, supposons que vous téléchargiez un objet comportant plusieurs versions :

- v5 (current version, creation date 2024-10-23)
- v4 (current version, creation date 2024-10-23)
- v3 (current version, creation date 2024-10-22)
- v2 (current version, creation date 2024-10-18)
- v1 (current version, creation date 2024-10-17)

Si la date actuelle est 2024-10-23 :

- v5 sera transférée 30 jours après le 2024-10-23
- v1 sera transférée puisqu'elle est une version non courante depuis déjà 5 jours 

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": { },      
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "STANDARD"
        }
      ],
      "NoncurrentVersionTransitions": [
        {
          "NoncurrentDays": 5,
          "StorageClass": "STANDARD"
        }
       ]
     }
  ]
}
```

///

/// details | Combinaison d'expiration et de transition

La configuration du lifecycle suivante s'applique à tous les objets dont le préfixe est « old » et dont le tag« type » a pour valeur « logs ». Elle spécifie les actions suivantes :

- 30 jours après leur création, les objets seront transférés du niveau High Performance au niveau Standard.
- 90 jours après leur création, les objets seront supprimés.

Dans ce scénario, les objets seront stockés dans le niveau haute performance pendant 30 jours, puis 60 jours dans le niveau standard avant d'être définitivement supprimés.

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "old/",
        "Tag": {
          "Key": "type",
          "Value": "logs"
        }
      },
      "Expiration": {
        "Days": 90,
      },      
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "STANDARD"
        }
      ]
    }
  ]
}
```

///

/// details | Combinaison de règles d'expiration et de transition avec des règles contradictoires

La configuration suivante du lifecycle est téléchargée dans un bucket non versionné. Elle définit deux règles qui s'appliquent à tous les objets ayant le préfixe « old » et le tag « type » avec la valeur « logs » :

- 90 jours après leur création, les objets seront expirés.
- 90 jours après leur création, les objets seront transitonnés.

Dans ce scénario, deux règles imposent à OVHcloud Object Storage d'effectuer simultanément deux actions différentes sur le même ensemble d'objets. La suppression permanente étant prioritaire sur la transition, les objets sont supprimés au bout de 90 jours et il n'y a plus d'intérêt à changer de classe de stockage.

```JSON
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "old/",
        "Tag": {
          "Key": "type",
          "Value": "logs"
        }
      },
      "Expiration": {
        "Days": 90,
      }
    },
    {
      "ID": "456789",
      "Status": "Enabled",
      "Filter": {
        "Prefix": "old/",
        "Tag": {
          "Key": "type",
          "Value": "logs"
        }
      },
      "Transitions": [
        {
          "Days": 90,
          "StorageClass": "STANDARD"
        }
      ]
    }
  ]
}
```

///

## En pratique

### Via le CLI

Comme prérequis, vous devez avoir un bucket contenant des données sur lesquelles vous voulez appliquer la configuration du lifecycle et avoir les permissions nécessaires (par défaut le propriétaire du bucket ou la permission **s3:putLifecycleConfiguration** donnée via une politique d'accès utilisateur) pour le faire.

/// details | Créez un fichier de configuration de lifecycle à l'aide de votre éditeur préféré.

**Exemple** : La configuration suivante vise à vider un bucket après 30 jours.

```bash
$ cat lifecycle.json
{
  "Rules": [
    {
      "ID": "123456",
      "Status": "Enabled",
      "Filter": { },
      "Expiration": {
        "Days": 20,
      },
      "NoncurrentVersionExpiration": {
        "NoncurrentDays": 10
      }
    },
    {
      "ID": "654789",
      "Status": "Enabled",
      "Filter": { },
      "Expiration": {
        "ExpiredObjectDeleteMarker": true,
      }
    },
    {
      "ID": "963852",
      "Status": "Enabled",
      "Filter": { }
      "AbortIncompleteMultipartUpload": {
        "DaysAfterInitiation": 10
      }
    }
  ]
}
```

Transférez le fichier dans le bucket :

```bash
$ aws s3api put-bucket-lifecycle-configuration --bucket my-bucket --lifecycle-configuration file://lifecycle.json
```

///

### Via l'espace client OVHcloud (à venir)

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
