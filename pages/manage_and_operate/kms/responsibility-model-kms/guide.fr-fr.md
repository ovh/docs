---
title: Key Management Service (KMS) - Partage des responsabilités
excerpt: "RACI entre OVHcloud et le client pour l'utilisation du KMS OHcloud"
updated: 2024-10-02
---

## Objectif

Le RACI ci-dessous détaille le partage des responsabilités entre OVHcloud et le client pour le service KMS. Ce modèle peut aider le client à utiliser au mieux le service.

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
| Renseigner les données à caractère personnel nécessaires pour la souscription au service | RA | I |
| Choisir la localisation du service en cohérence avec la localisation des instances | RA | I |

### 2. Mise à disposition du service

#### 2.1. Installer le service

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Produire, acheminer, livrer et maintenir les instances physiques et les bâtiments d’hébergement | I | RA |
| Installer les briques fonctionnelles nécessaires au maintient en conditions opérationnelles et de sécurité du service | I | RA |

#### 2.2. Modèle de réversibilité pour les CMK

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Importer et exporter les objets stockés | RA | I |

#### 2.3. Installation du SI client

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Choisir le type de clés et la taille adapté au besoin | RA | I |

### 3. Utilisation du service

#### 3.1. Opérations

##### **3.1.1. Opérations quotidiennes**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer la sécurité logique des données hébergées dans le service | | RA |
| Gérer la disponibilité réseau du service |  | RA |
| Administrer le service |  | RA  |
| Réaliser les backups du service |  | RA |
| Administrer les clés stockés dans le KMS | RA |  |

##### **3.1.2. Gestion des accès**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les droits d’accès à l'interface de gestion (espace client OVHcloud) | RA | I |
| Gérer les accès physiques et logiques des équipes OVHcloud aux infrastructures | I | RA |
| Gérer les accès et la politique de sécurité des utilisateurs du service | RA | I |

##### **3.1.3. Monitoring**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer et monitorer la capacité des serveurs physiques en support des services Public Cloud |  | RA |
| Conserver les logs du control plane |  | RA |
| Monitorer le bon fonctionnement du service | I | RA |
| Réaliser la maintenance des dispositifs de stockage et de sauvegarde fournis |  | RA |
| Conserver les logs généré par le service | RA |  |

##### **3.1.4. Stockage**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer la disponibilité des données |  | RA |

##### **3.1.5. Connectivité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer le fonctionnement des systèmes automatiques de gestion du réseau (architecture, mise en oeuvre, maintenance logicielle et matérielle pour les réseaux publics et privés déployés, IP primaire du serveur dédié) | I | RA |

##### **3.1.6. Gestion**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Fournir l'inventaire usages du service | I | RA |
| Gérer la sécurité de l'infrastructure de gestion (API, control plane) |   | RA |

##### **3.1.7. Continuité d'activité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Maintenir un plan de continuité d’activité et de reprise d’activité pour le service | I | RA |

#### 3.2. Gestion des évènements

##### **3.2.1. Incidents**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Traiter les incidents matériels et réseau (tickets et contacts téléphoniques) | AI | RA |
| Qualifier et intervernir sur les éléments du service | I | RA |

#### **3.2.2. Changements**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Déployer les correctifs, mettre à jour et configurer les OS, softwares, middlewares du service | I | RA |

### 4. Réversibilité

#### 4.1. Modèle de réversibilité pour les CMK

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Planifier les opérations de réversibilité | RA | I |

#### 4.2. Récupération des données pour les CMK

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Migrer / transférer les données pour les objects KMIP | RA |  |

### 5. Fin de service

#### 5.1. Destruction des configurations

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Décommissionner les configurations associées au client après résiliation du contrat | I | RA |

#### 5.2. Destruction des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Supprimer les données sur les volumes de stockage |  | RA |
| Détruire les supports de stockage arrivés en fin de vie ou sur lesquels le processus de destruction sécurisé génère des erreurs |  | RA |
