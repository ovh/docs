---
title: "OPCP - Stockage Block Ceph RBD : Performance, Résilience et Scalabilité avec OpenStack"
excerpt: "Découvrez le stockage Block Ceph RBD d’OVHcloud OPCP : performance, haute disponibilité et fonctionnalités avancées pour vos environnements OpenStack."
updated: 2025-11-12
---

> [!primary]
>
> Veuillez noter que ces informations peuvent évoluer avant la disponibilité générale (GA). Selon nos estimations actuelles, la GA est prévue pour **mars 2026**. Nous nous engageons à vous tenir informés de toute modification, mais nous vous recommandons de consulter régulièrement ce guide pour obtenir les informations les plus récentes. Merci de votre compréhension.
>

## Objectif

Ce guide présente l’architecture de stockage Block mise en œuvre dans **OPCP**, basée sur OpenStack. Il explique comment le stockage persistant des machines virtuelles (VM) est assuré par **Ceph RADOS Block Device** (RBD), une solution open-source, distribuée et hautement scalable, conçue pour répondre aux besoins des entreprises modernes.

L’objectif est de montrer comment cette couche de stockage garantit performance, résilience et scalabilité, permettant aux équipes de se concentrer sur le développement et le déploiement d’applications sans être limitées par l’infrastructure.

## 1. Performance et Scalabilité : conçues pour évoluer

Contrairement aux solutions de stockage traditionnelles, l’infrastructure Ceph répartit les données et les charges de travail sur l’ensemble des nœuds physiques du cluster.

Cette approche élimine les goulots d’étranglement et permet une scalabilité linéaire adaptée aux environnements exigeants.

| Fonctionnalité              | Avantage client |
| --------------------------- | --------------- |
| Entrées/Sorties distribuées | **Élimination des goulots d’étranglement :** les opérations de lecture et d’écriture sont simultanément réparties sur de nombreux périphériques. Cette répartition assure un **débit élevé** et une **latence faible et constante**, indispensables aux applications et bases de données critiques. |
| Scalabilité horizontale     | **Croissance sans interruption :** l’augmentation de la capacité de stockage se fait simplement en ajoutant des serveurs standards au cluster. Le système intègre automatiquement le nouveau matériel et rééquilibre les données en arrière-plan, **sans provoquer de temps d’arrêt**. |
| Provisionnement dynamique   | **Efficacité optimisée :** les volumes sont alloués instantanément mais n’utilisent de l’espace physique que lorsque les données sont réellement écrites. Cette approche améliore considérablement l’**utilisation et l’efficacité** du pool de stockage physique. |

## 2. Résilience et protection des donnée

L’architecture fondamentale de Ceph est conçue pour offrir une **tolérance maximale aux pannes**, garantissant que les défaillances matérielles n’entraînent ni interruption de service ni perte de données.

**Réplication automatique (Haute disponibilité) :**

- Chaque donnée est automatiquement copiée et stockée sur plusieurs disques et serveurs physiques distincts (typiquement 3 copies).
- En cas de panne d’un disque ou d’un serveur, les machines virtuelles continuent de fonctionner normalement, accédant aux copies restantes sans interruption.

**Auto-réparation :**

- Lorsqu’un périphérique tombe en panne, Ceph détecte immédiatement l’anomalie et réplique les données perdues sur les dispositifs sains restants.
- Ce processus restaure automatiquement le **niveau de protection des données défini**.

**Absence de point de défaillance unique :**

- Le système fonctionne sans contrôleur central ni composant matériel propriétaire, garantissant une **redondance réelle** et un **temps de disponibilité maximal** pour les services cloud.

## 3. Spécifications techniques et limites

Cette section détaille les principales caractéristiques techniques et exigences de compatibilité pour les utilisateurs déployant des applications sur la plateforme OVHcloud OPCP.

### A. Compatibilité et accès

| Élement                        | Détail              | Description                                                                                                                                 |
| ------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Type de stockage               | Stockage Block      | Présenté à la VM comme un périphérique block SCSI ou virtio standard, équivalent à un disque physique pour des performances optimales.       |
| Compatibilité POSIX            | Oui (via OS invité) | Ceph RBD fournit le périphérique block brut ; le système de fichiers du système invité (XFS, ext4, NTFS, etc.) garantit la conformité POSIX. |
| Système de fichiers réseau     | Non                 | Il ne s’agit pas d’un NFS ou SMB partagé. Chaque volume est dédié à une seule VM à un instant donné pour des performances maximales.        |

### B. Limites et dimensionnement

| Métrique                                  | Valeur/par défaut | Notes                                                                                                                                                          |
| ----------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Taille maximale d’un volume               | 16 To             | Limite pour assurer performance optimale et facilité de gestion sous OpenStack. Des pools personnalisés peuvent supporter des tailles supérieures sur demande. |
| Taille minimale d’un volume               | 1 Go              | Plus petite unité de volume déployable via Cinder.                                                                                                             |
| Disponibilité du volume                   | Instantanée       | L’allocation et l’attachement des volumes se font immédiatement via l’API ou le tableau de bord OpenStack.                                                     |

### C. Performance et qualité de service (QoS)

La plateforme propose plusieurs **niveaux de performance** via les types de volumes Cinder (Storage Classes), avec des limites I/O garanties par le système QoS de Ceph RBD :

| Classe de stockage            | IOPS          | Débit    | Cas d’usage                                                                                   |
| ----------------------------- | ------------- | -------- | --------------------------------------------------------------------------------------------- |
| Stockage distribué (Standard) | 1 000 / 1 000 | 100 MB/s | VM générales, serveurs web, environnements de test et développement.                          |
| Stockage distribué (High)     | 3 000 / 3 000 | 200 MB/s | Bases de données, moteurs d’analytique, applications à fort trafic ou sensibles à la latence. |
| Stockage distribué (Insane)   | 7 500 / 7 500 | 300 MB/s | Workloads extrêmes, systèmes transactionnels critiques, infrastructure de deep learning.      |

> [!primary]
>
> **Note :** ces seuils sont appliqués par le système QoS de Ceph. Les volumes peuvent parfois dépasser ces limites si les ressources système le permettent, mais les garanties assurent une performance prévisible, même en période de forte sollicitation.
>

### 4. Fonctionnalités avancées de gestion des données

Le backend **Ceph RBD** offre des outils avancés pour la gestion du cycle de vie des volumes, simplifiant et accélérant les opérations pour les utilisateurs cloud.

- **Snapshots instantanés :** Création de **copies ponctuelles efficaces en espace** de tout volume, permettant un rollback rapide ou la création de nouveaux environnements en quelques secondes.
- **Clonage rapide (Copy-on-Write) :** Provisionnement rapide de nouveaux volumes **lecture/écriture** à partir de snapshots ou d’images existantes. La technologie **CoW (Copy-on-Write)** économise de l’espace disque et accélère le déploiement des VM.
- **Redimensionnement “à chaud” des volumes :** Augmentation de la taille d’un volume attaché à une VM en fonctionnement, **sans éteindre ni redémarrer la VM.**
- **Support de la migration à chaud (Live Migration) :** Le stockage distribué permet la migration non disruptive des machines virtuelles actives entre les nœuds de calcul.
- **Démarrage depuis un volume (Boot from Volume) :** Lancement direct d’une VM à partir d’un volume Cinder, garantissant que le disque racine bénéficie immédiatement de **toutes les fonctionnalités de haute disponibilité et avancées de Ceph RBD.**
- **Prêt pour la reprise après sinistre (RBD Mirroring) :** L’architecture Ceph sous-jacente prend en charge le **mirroring asynchrone des volumes** vers un cluster Ceph distant, offrant une solution robuste pour le **plan de reprise après sinistre (DRP)**.

