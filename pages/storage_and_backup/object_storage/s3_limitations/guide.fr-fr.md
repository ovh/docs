---
title: Object Storage - Limites techniques
excerpt: "Retrouvez ici les limites techniques de l'offre Object Storage"
updated: 2026-03-13
---

## Objectif

Retrouvez ici les limites techniques relatives à l'offre Object Storage.

## Performance

### Bande passante maximale par connexion

1 Gbps / connexion.

Étant donné que la solution **Object Storage** est un système hautement distribué, l’utilisation de **requêtes parallèles** vous aidera à surmonter cette limitation. En fonction de votre application et de votre cas d'usage, cette opération peut être effectuée en initiant simultanément des requêtes (également appelées *concurrent requests*).

Découvrez comment maximiser vos performances avec [ce guide](/pages/storage_and_backup/object_storage/s3_performance_optimization).

### Nombre maximal par défaut de requêtes par seconde en écriture et lecture sur un bucket

- PUT: 300 requêtes par seconde
- GET: 900 requêtes par seconde

Il est important de rappeler que ces valeurs maximales sont des *"soft limits"* et peuvent être facilement dépassées en adoptant de bonnes pratiques pour répartir les E/S le plus largement possible dans le cluster de stockage objet, en tirant parti du **mécanisme de *sharding***. En effet, un ramp-up progressif des requêtes permet de maximiser les performances et de capitaliser sur ce *sharding* natif de l’infrastructure. En d’autres termes, les limitations peuvent être levées grâce à une bonne répartition des noms des préfixes/clés d'objets et ainsi atteindre des milliers de requêtes par seconde tant en lecture qu'en écriture.

Découvrez comment maximiser vos performances avec [ce guide](/pages/storage_and_backup/object_storage/s3_performance_optimization).

## Quotas et limitations par défaut du service

| Ressource | Quota par défaut | Détails supplémentaires |
| --- | --- | --- |
| **Nombre maximum de buckets par projet** | 100 | Jusqu'à 1 000 buckets via une [demande auprès du support](https://help.ovhcloud.com/csm?id=csm_get_help) |
| **Nombre maximum d'objets dans un bucket** | illimité | - |
| **Taille des *part*** | De 5 MiB à 5 GiB | - |
| **Nombre maximum de *part* par MPU** | 10 000 | - |
| **Taille maximale d'objet** | 48 TiB | Ce maximum peut être atteint en utilisant du Multi-Part Upload (MPU). Via une seule requête PUT, la taille maximale de l'objet est de 5 GiB |
| **Nombre maximum d'utilisateurs par projet** | 1 000 | - |
| **Nombre maximum de règles de *lifecycle*** | 1 000 | Comprendre les [règles de *lifecycle*](/pages/storage_and_backup/object_storage/s3_bucket_lifecycle) |
| **Nombre maximum de règles de réplication** | 1 000 | Comprendre la [réplication de buckets](/pages/storage_and_backup/object_storage/s3_asynchronous_replication) |
| **Nombre maximum de tags de bucket** | 50 | - |
| **Nombre maximum de tags d'objet** | 10 | - |
| **Nombre maximum de versions par objet** | 100 000 | Au-delà de cette valeur, une erreur 403 est renvoyée avec le code MaxVersionsReached. Comprendre la [*versioning* des objets](/pages/storage_and_backup/object_storage/s3_versioning) |

### Attribution des noms de buckets et d'objets

- Doit comporter entre 3 et 63 caractères.
- Doit commencer et se terminer par des caractères alphanumériques en minuscules (a à z et 0 à 9).
- Doit être unique au sein d'OVHcloud.
- Peut contenir les signes de ponctuation suivants : `.` et `-`.
- Ne doit pas contenir plusieurs signes de ponctuation à la suite (par exemple `..` ou `-.` ou `.-` ou `--`).
- Ne doit pas ressembler à une adresse IP (192.168.1.1).

### Disponibilité des fonctionnalités

Consultez notre guide [Object Storage - Compatibilité](/pages/storage_and_backup/object_storage/s3_s3_compliancy).

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).

