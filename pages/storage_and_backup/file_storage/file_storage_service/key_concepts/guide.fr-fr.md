---
title: File Storage Service - Concepts clés
excerpt: "Comprenez les concepts fondamentaux du service File Storage OVHcloud, notamment les partages NFS, le contrôle d'accès, l'architecture, la protection des données et sa comparaison avec le stockage par blocs et le stockage d'objets."
updated: 2026-03-31
---

## Objectif

Ce guide explique les concepts clés du service File Storage OVHcloud pour le Public Cloud et vous aide à décider quand utiliser des partages NFS gérés et à comprendre leur place dans votre architecture cloud.

> [!primary]
>
> Pour des instructions détaillées sur la mise en service et le montage, consultez [File Storage Service – Premiers pas](/pages/storage_and_backup/file_storage/file_storage_service/getting_started).
>

## Qu'est-ce que le service File Storage ?

Le service File Storage OVHcloud fournit des partages NFS gérés pour vos charges de travail Compute (instances, clusters Kubernetes et autres clients) via votre réseau privé.

- Basé sur `OpenStack Manila`.
- Les partages sont des exports NFS avec un positionnement réseau contrôlé et des règles d'accès.

Caractéristiques clés :

- `Protocole NFS` – recommandé NFSv4.
- `ReadWriteMany (RWX)` – plusieurs clients peuvent monter le même partage simultanément.
- `Connectivité privée` – destiné aux réseaux privés, pas à l'accès Internet public.

## Comparaison avec d'autres modèles de stockage

| Modèle de données         | Stockage de fichiers (NFS)                                     | Stockage par blocs                                   | Stockage d'objets                               |
| ------------------------- | -------------------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------- |
| Écritures simultanées   | Plusieurs clients (RWX)                                        | Généralement une seule instance                     | Beaucoup de clients via l'API                   |
| Accès typique           | Chemin de montage (/mnt/…)                                     | Disque ou partition du système d'exploitation     | Applications utilisant le SDK/CLI S3<sup>1</sup>          |
| Bon pour                | Fichiers partagés, stockage CMS, pipelines, certains jeux de données ML | Bases de données, disques de démarrage/données, stockage à faible latence | Sauvegardes, archives, actifs statiques, lacs de données |

> [!warning]
>
> Ce tableau est un outil d'aide à la décision. Validez toujours les exigences en matière de latence, de débit et de protocole à l'aide de vos propres tests.
>

## Vue d'ensemble de l'architecture

Composants logiques du service File Storage :

1. **Projet Public Cloud** – limites de facturation et IAM.
2. **Région** – aligne l'emplacement du partage avec vos instances Compute.
3. **Réseau privé et sous-réseau** – le partage est lié à votre réseau privé (VLAN / vRack).
4. **Partage** – export NFS géré (capacité, nom, statut).
5. **ACLs / règles d'accès** – définissent quels clients (adresses IP) peuvent monter le partage.
6. **Clients** – instances ou clusters montant l'export NFS sur un chemin tel que `/mnt/share`.

Opérations et interfaces :

- API OVHcloud v1
- CLI OpenStack (plugin Manila)
- Manila CSI (Kubernetes)
- Terraform
- L'espace client OVHcloud

> [!warning]
>
> Les quotas, les tailles maximales de partage et les limites sont définis dans le catalogue OVHcloud. Vérifiez toujours les valeurs actuelles dans l'espace client OVHcloud.
>

## Protection des données et snapshots

Les snapshots offrent une vue des données à un instant précis :

- **Récupération opérationnelle** – restauration après erreurs ou suppressions accidentelles.
- **Gestion des modifications** – snapshot avant des mises à jour majeures.

> [!primary]
>
> Les snapshots ne remplacent pas les stratégies de sauvegarde complètes, qui doivent inclure des copies hors site, l'immutabilité et la protection contre le rançongiciel.
>

Pour les étapes d'API permettant de gérer les snapshots, consultez [File Storage Service – Gestion des snapshots de partage](/pages/storage_and_backup/file_storage/file_storage_service/create_snapshot).

## Sécurité et responsabilité partagée

Vous restez responsable de :

- **Sécurité du réseau** – conception du réseau privé, routage, pare-feu.
- **Contrôle d'accès NFS** – accès client, règles IP, principe du moindre privilège.
- **Sécurité du système d'exploitation et des applications** – sur tous les clients montant le partage.

## Facturation (niveau général)

- Facturé pour la capacité de partage allouée (par GiB-heure ou équivalent).
- Les snapshots peuvent consommer une capacité supplémentaire et être facturés séparément.
- Consultez l'espace client OVHcloud et les pages de tarification officielles pour les taux actuels.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.
