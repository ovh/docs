---
title: Object Storage - Limites techniques
excerpt: "Retrouvez ici les limites techniques de l'offre S3 Object Storage"
updated: 2024-10-24
---

## Objectif

Retrouvez ici les limites techniques relatives à l'offre S3 Object Storage OVHcloud.

## Performance

### Bande passante maximale par connexion

1 Gbps / connexion.

Étant donné que la solution **S3 Object Storage OVHcloud** est un système hautement distribué, l’utilisation de **requêtes parallèles** vous aidera à surmonter cette limitation. En fonction de votre application et de votre cas d'usage, cette opération peut être effectuée en initiant simultanément des demandes (également appelées demandes simultanées).

Découvrez comment maximiser vos performances avec [ce guide](/pages/storage_and_backup/object_storage/s3_performance_optimization).

### Nombre maximum de requêtes par seconde en écriture sur un bucket

300 (au-delà de ce nombre, la qualité de service n'est plus garantie).

Cette valeur maximale est une limite souple qui peut être facilement dépassée en adoptant les bonnes pratiques pour répartir les E/S le plus largement possible dans le cluster de stockage objet, en tirant parti du **mécanisme de *sharding***.

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

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
