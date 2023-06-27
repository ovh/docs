---
title: "Object Storage - Partage des responsabilités"
excerpt: "RACI entre OVHcloud et le client pour l'utilisation du Object Storage Public Cloud"
updated: 2023-03-20
---

**Dernière mise à jour le 20/03/2023**

## Objectif

Le RACI ci-dessous détaille le partage des responsabilités entre OVHcloud et le client pour le service Object Storage Public Cloud. Ce modèle peut aider le client à utiliser au mieux les gammes de services suivantes : 

- Standard Object Storage-S3 API
- High Performance Object Storage-S3 API
- Standard Object Storage-Swift API

| Rôles |
| --- |
|R : Est en charge de la **R**éalisation du processus|
|A : Est **A**pprobateur de la réalisation du processus|
|C : Est **C**onsulté pendant le processus|
|I : Est **I**nformé des résultats du processus|

### 1. Avant la souscription

#### 1.1. Spécifier le service en fonction des besoins

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Choisir la gamme de Conteneur Object Storage en fonction des besoins (SWIFT, S3 High Speed, S3 Standard, ...)| RA | I |
| Renseigner les données à caractère personnel nécessaires pour la souscription au service | RA | I |
| Choisir la localisation du service| RA | I |

### 2. Mise à disposition du service

#### 2.1. Installer le service

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Produire, acheminer, livrer et maintenir les instances physiques et les bâtiments d’hébergement | I | RA |

#### 2.2. Installation du SI client

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Créer les identifiants de connexion S3 pour un utilisateur OpenStack | RA |  |

### 3. Utilisation du service

#### 3.1. Opérations

##### **3.1.1. Opérations quotidiennes**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Fournir, gérer l'accessibilité des conteneurs et objets |  | RA |
| Gérer la sécurité des conteneurs et objets créés (object lock, SSE-C, etc) | RA |  |
| Administrer le service de stockage | I | RA  |
| Administrer les données | RA |   |
| Réaliser les backups | RA |  |

##### **3.1.2. Gestion des accès**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer l’accès à l'interface de gestion (espace client OVHcloud) | RA | I |
| Gérer les accès physiques et logiques des équipes OVHcloud aux infrastructures |  | RA |
| Gérer la sécurité logique (politique de sécurité S3) des conteneurs et objets créés | RA |  |

##### **3.1.3. Monitoring**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer et monitorer la capacité des serveurs physiques utilisés pour le Service Object Storage |  | RA |
| Conserver les logs du Service Object Storage|  | RA |
| Monitorer le bon fonctionnement des dispositifs physiques en support du stockage| I | RA |
| Créer, modifier, contrôler, restaurer, supprimer les backups | RA |  |
| Réaliser la maintenance des dispositifs de stockage fournis |  | RA |

##### **3.1.4. Stockage**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer le chiffrement des données avant le dépôt sur l'Object Storage | RA |  |
| Gérer le chiffrement des données sur l'espace de stockage alloué en utilisant SSE-C et avec les clés fournies par le Client | A | R |

##### **3.1.5. Gestion**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Fournir l'inventaire sur les conteneurs et objets créés | I | RA |
| Gérer la sécurité de l'infrastructure de gestion (API, control plane) |   | RA |
| Gérer la sécurité physique des équipements et infrastructures hébergés | I | RA |

##### **3.1.6. Continuité d'activité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Réaliser des tests périodiques de restauration de données | RA |  |
| Maintenir un plan de continuité d’activité et de reprise d’activité pour le SI hébergé | RA |  |
| Gérer les systèmes de gestion automatiques de l’infrastructure mise à disposition | I | RA |

#### 3.2. Gestion des évènements

##### **3.2.1. Incidents**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Traiter les incidents sur le service (tickets et contacts téléphoniques) | AI | RA |
| Remplacer les éléments matériels défectueux sur les clusters Object Storage |  | RA |

### 4. Réversibilité

#### 4.1. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Planifier les opérations de réversibilité | RA |  |
| Choisir les infrastructures de repli | RA | CI |
| Choisir le format des données à exporter | RA |  |

#### 4.2. Récupération des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les opérations de réversibilité | RA |  |
| Migrer / transférer les données | RA |  |

### 5. Fin de service

#### 5.1. Destruction des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Supprimer les données du Service Conteneurs Object Storage via les API S3 | RA |  |
| Détruire les supports de stockage arrivés en fin de vie ou sur lesquels le processus de destruction sécurisé génère des erreurs |  | RA |


## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.