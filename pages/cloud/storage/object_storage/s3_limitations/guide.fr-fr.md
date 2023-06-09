---
title: Object Storage - Limites techniques
excerpt: "Retrouvez ici les limites techniques de l'offre S3 Object Storage"
updated: 2023-06-01
---

**Dernière mise à jour le 01/06/2023**

## Objectif

Retrouvez ici les limites techniques relatives à l'offre S3 Object Storage.

### Nombre maximum de buckets par projet

- 100 (par défaut)
- 1000 (nécessite une intervenion manuelle, veuillez contacter notre support à cet effet)

### Nombre maximum d'objets dans un bucket

Illimité

### Bande passante maximale par connexion

1 Gbps / connexion

### Nombre maximum de requêtes par seconde en écriture sur un bucket

300 (au-delà la qualité de service n'est plus garantie)

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
- Doit être unique au sein d'une même région OVHcloud.
- Peut comporter les signes de ponctuation suivants : « . » et « - ».
- Ne peut comporter plusieurs signes de ponctuation à la suite (« .. » ou « -. » ou « .- » ou « -- »).
- Ne peut ressembler à une adresse IP (192.168.1.1).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
