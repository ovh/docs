---
title: Object Storage - Limites techniques
slug: s3/limitations
excerpt: "Retrouvez ici les limites techniques de l'offre S3 Object Storage"
section: Informations générales
order: 025
updated: 2023-02-23
---

**Dernière mise à jour le 23/02/2023**

## Objectif

Retrouvez ici les limites techniques relatives à l'offre S3 Object Storage.

### Nombre maximum de buckets par projet

100

### Nombre maximum d'objets dans un bucket

Illimité

### Bande passante maximale par connexion

1 Gbps / connexion

### Nombre maximum de requêtes par seconde en écriture sur un bucket

300 (au-delà la qualité de service n'est plus garantie)

### Taille maximum par object / mpu / part

- 5Go maximum par object
- 10000 parts maximum dans un mpu
- 5Mo est la taille minimum pour un part

### Nombre maximum de comptes utilisateurs par projet

1000

### Attribution de noms

- Doit comporter entre 3 et 63 caractères.
- Doit commencer et se terminer par des caractères alphanumériques minuscules (de a à z et de 0 à 9).
- Peut comporter les signes de ponctuation suivants : « . » et « - ».
- Doit être unique au sein d'une même région OVHcloud.
- Ne peut comporter plusieurs signes de ponctuation à la suite (« .. » ou « -. » ou « .- » ou « -- »).
- Ne peut ressembler à une adresse IP (192.168.1.1).


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
