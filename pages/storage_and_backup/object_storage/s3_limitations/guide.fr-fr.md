---
title: Object Storage - Limites techniques
excerpt: "Retrouvez ici les limites techniques de l'offre Object Storage"
updated: 2026-02-18
---

## Objectif

Retrouvez ici les limites techniques relatives à l'offre Object Storage.

## Performance

### Bande passante maximale par connexion

1 Gbps / connexion.

Étant donné que la solution **Object Storage** est un système hautement distribué, l’utilisation de **requêtes parallèles** vous aidera à surmonter cette limitation. En fonction de votre application et de votre cas d'usage, cette opération peut être effectuée en initiant simultanément des requêtes (également appelées *concurrent requests*).

Découvrez comment maximiser vos performances avec [ce guide](/pages/storage_and_backup/object_storage/s3_performance_optimization).

### Nombre maximal par défaut de requêtes par seconde en écriture et lecture sur un bucket

Default maximum number of write and read requests per second on a bucket

- PUT: 300 requêtes par seconde
- GET: 900 requêtes par seconde

Il est important de rappeler que ces valeurs maximales sont des *"soft limits"* et peuvent être facilement dépassées en adoptant de bonnes pratiques pour répartir les E/S le plus largement possible dans le cluster de stockage objet, en tirant parti du **mécanisme de *sharding***. En effet, un ramp-up progressif des requêtes permet de maximiser les performances et de capitaliser sur ce *sharding* natif de l’infrastructure. En d’autres termes, les limitations peuvent être levées grâce à une bonne répartition des noms des prefixes/clés d’objets et ainsi atteindre des milliers de requêtes par seconde tant en lecture qu’en écriture. 

Découvrez comment maximiser vos performances avec [ce guide](/pages/storage_and_backup/object_storage/s3_performance_optimization).

## Limitations du bucket

### Nombre maximum de buckets par projet

- 100 (par défaut)
- 1000 (nécessite une intervenion manuelle, veuillez [contacter notre support](https://help.ovhcloud.com/csm?id=csm_get_help) à cet effet)

### Nombre maximum d'objets dans un bucket

Illimité

### Attribution de noms

- Doit comporter entre 3 et 63 caractères.
- Doit commencer et se terminer par des caractères alphanumériques minuscules (de a à z et de 0 à 9).
- Doit être unique au sein d'OVHcloud.
- Peut comporter les signes de ponctuation suivants : « . » et « - ».
- Ne peut comporter plusieurs signes de ponctuation à la suite (« .. » ou « -. » ou « .- » ou « -- »).
- Ne peut ressembler à une adresse IP (192.168.1.1).

> [!warning]
>
> Pour une meilleure compatibilité, nous vous recommandons d'éviter d'utiliser des points (.) dans les noms de bucket, sauf pour les buckets qui sont utilisés uniquement pour l'hébergement de sites web statiques. Si vous incluez des points dans le nom d'un bucket, vous ne pouvez pas utiliser l'adressage de type *virtual host* en HTTPS, à moins d'effectuer votre propre validation de certificat. En effet, les certificats de sécurité utilisés pour l'hébergement virtuel des buckets ne fonctionnent pas pour les buckets dont le nom comporte des points.
>

## Limitations des objets

### Taille maximum par object / mpu / part

#### Via un seule requête PUT

Maximum 5 Go par objet (pour un objet dont la taille est supérieure à 5 Go, procédez à un *multi-part upload*).

#### Via un multi-part upload (MPU)

- La taille pour une seule *part* doit être comprise entre 5 Mo (minimum) et 5 Go (maximum)
- 10000 *parts* maximum en mpu

La taille théorique maximale d’un seul *Large Object* uploadé via MPU est donc de 48To.

### Nombre maximum de comptes utilisateurs par projet

1000

### Attribution de noms

- Doit comporter entre 3 et 63 caractères.
- Doit commencer et se terminer par des caractères alphanumériques minuscules (de a à z et de 0 à 9).
- Doit être unique au sein d'OVHcloud.
- Peut comporter les signes de ponctuation suivants : « . » et « - ».
- Ne peut comporter plusieurs signes de ponctuation à la suite (« .. » ou « -. » ou « .- » ou « -- »).
- Ne peut ressembler à une adresse IP (192.168.1.1).

### Disponibilité des fonctionnalités

Consultez notre guide [Object Storage - Compatibilité](/pages/storage_and_backup/object_storage/s3_s3_compliancy).

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).

