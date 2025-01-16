---
title: "Partage de responsabilité sur les solutions SAP on OVHcloud"
excerpt: "Partage de responsabilité entre OVHcloud et le client pour l'utilisation des solutions SAP on OVHcloud"
updated: 2023-12-08
---

## Objectif

Le RACI ci-dessous détaille le partage des responsabilités entre OVHcloud et le client pour les solutions SAP on OVHcloud. Ce modèle peut aider le client à utiliser au mieux les solutions SAP on OVHcloud. Il complète le [RACI "Serveurs dédiés"](/pages/account_and_service_management/responsibility_sharing/dedicated-servers) qui s'applique pour le service SAP HANA on Bare Metal, et le [RACI "VMware on OVHcloud"](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/responsibility-sharing) qui s'applique pour le service SAP HANA on Private Cloud. L'acronyme "SLES4SAP BYOL" est utilisé pour "SUSE Linux Enterprise Server for SAP Applications Bring Your Own License".

| Rôles |
| --- |
|R : Est en charge de la Réalisation du processus|
|A : Est Approbateur de la réalisation du processus|
|C : Est Consulté pendant le processus|
|I : est Informé des résultats du processus|

### 1. Avant la souscription

#### 1.1. Spécifier le service en fonction des besoins

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Choisir de souscrire au service [Serveur Dédié](/pages/account_and_service_management/responsibility_sharing/dedicated-servers) ou [VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/responsibility-sharing) en fonction des besoins et suivre les modèles de responsabilités associés | RA | CI |
| X | X | Souscrire auprès de SUSE la licence OS nécessaire pour l'utilisation de l'image SLES4SAP BYOL | RA |  |
| X | X | Détenir les droits de licences des logiciels SAP déployés sur les infrastructures | RA |  |
| X | X | Souscrire à l'offre Object Storage d'OVHcloud s'il est prévu d'utiliser l'agent de sauvegarde OVHcloud Backint Agent for SAP HANA pour les sauvegardes | RA | CI |

### 2. Mise à disposition du service

#### 2.1. Installer le service

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Mise à disposition du service souscrit et des fonctionnalités disponibles (OVHcloud Backint Agent for SAP HANA, image OS SLES4SAP BYOL) | I | RA |
|  | X | Mise à disposition du service souscrit et des fonctionnalités disponibles (Modules Terraform de déploiement d'infrastructures SAP 'as code', Pre-installation SAP HANA) | I | RA |
| X | X | Informer l'éditeur SUSE du déploiement d'un OS SLES4SAP BYOL | I | RA |
| X | X | Fournir les guides de configuration des options et fonctionnalités SAP fournies par OVHcloud | I | RA |
|  | X | Fournir les sources d'installation SAP HANA dans un bucket Object Storage d'OVHcloud | RA | I |

#### 2.2. Modèle de réversibilité

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Gérer la migration d'une machine avec l'OS SLES4SAP vers OVHcloud | RA |  |
| X | X | Gérer la migration des applicatifs SAP vers OVHcloud | RA |  |

#### 2.3. Installation du SI client

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Déployer l'OS  | RA |  |
| X | X | Déployer le Système d'Information en fonction des besoins | RA |  |
| X | X | Choisir de configurer les sauvegardes SAP HANA avec "OVHcloud Backint Agent for SAP HANA" | RA |  |
|  | X | Choisir de lancer le déploiement d'infrastructures SAP "as code"  | RA |  |
| X | X | Vérifier la conformité de l'installation SAP, des infrastructures sous-jacentes et des bonnes pratiques associées | RA |  |

### 3. Utilisation du service

#### 3.1. Opérations

##### **3.1.1. Opérations quotidiennes**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Administrer les composants choisis et installés | RA |  |
| X | X | Programmer des sauvegardes SAP HANA, y compris via "OVHcloud Backint Agent for SAP HANA" | RA |  |

##### **3.1.2. Gestion des accès**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Gérer les comptes utilisateurs, leurs accès à l'intégralité des éléments SAP, y compris la base de données SAP HANA et les systèmes d'exploitation | RA |  |

##### **3.1.3. Monitoring**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Monitorer l'exécution des sauvegardes SAP HANA et autres logiciels SAP installés | RA |  |

##### **3.1.4. Stockage**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Chiffrer les sauvegardes SAP HANA, y compris celles réalisées avec "OVHcloud Backint Agent for SAP HANA" | RA |  |

##### **3.1.5. Connectivité**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Gérer les configurations réseau de l'intégralité de l'architecture SAP | RA |  |

##### **3.1.6. Gestion**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Gérer les risques liés aux logiciels SAP installés | RA |  |
| X | X | Gérer les risques liés aux infrastructures sous-jacentes livrées par OVHcloud |  | RA |
| X | X | Maintenir en conditions opérationnelles et conditions de sécurité les logiciels SAP installés | RA |  |

##### **3.1.7. Continuité d'activité**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Effectuer des tests de restauration réguliers de l'ensemble des composants SAP, y compris de la base de données SAP HANA | RA |  |
| X | X | Maintenir un plan de continuité et de reprise d'activité sur le SI installé | RA |  |

#### 3.2. Gestion des évènements

##### **3.2.1. Incidents**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Analyser et corriger des problèmes avérés liés au développement- (bugs, dysfonctionnement, etc ..)  du 'OVHcloud Backint Agent' | I | RA |
| X | X | Gérer les incidents liés à l'OS SLES4SAP en mode BYOL et ouvrir des tickets auprès de l'éditeur SUSE si nécessaire | RA |  |
| X | X | Gérer les incidents liés aux solutions SAP | RA |  |

#### **3.2.2. Changements**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Gérer le cycle de vie de l'OS SLES4SAP, réaliser les opérations de patching et de montée de versions | RA |  |
| X | X | Gérer le cycle de vie des solutions SAP, réaliser les opérations de patching et de montée de versions, y compris pour la base de données SAP HANA | RA |  |

### 4. Réversibilité

#### 4.1. Modèle de réversibilité

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Choisir l'infrastructure de repli | RA |  |

#### 4.2. Récupération des données

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Choisir de migrer les données soit selon le modèle de migration des infrastructures sous-jacentes, soit d'utiliser les outils de migration de l'éditeur SP (exemple OS / DB migration ou autre ) | RA |  |

### 5. Fin de service

#### 5.1. Destruction des configurations

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Suppression des sauvegardes SAP HANA, y compris celles réalisées par "OVHcloud Backint Agent for SAP HANA" sur le service Object Storage d'OVHcloud | RA |  |
| X | X | Résilier les services sous-jacents en support des logiciels SAP installés | RA | I |
| X | X | Décommissionner les configurations liées aux services fournis  | I | RA |

#### 5.2. Destruction des données

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Détruire les supports de stockage arrivés en fin de vie ou sur lesquels le processus de destruction sécurisé génère des erreurs |  | RA |
