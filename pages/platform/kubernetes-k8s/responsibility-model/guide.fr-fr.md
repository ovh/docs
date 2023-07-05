---
title: "Partage de responsabilité sur le service OVHcloud managed Kubernetes"
slug: Kubernetes-raci
section: Premiers pas
excerpt: "Partage de responsabilité entre OVHcloud et le client pour l'utilisation du service Kubernetes Managé"
updated: 2023-07-05
---

**Dernière mise à jour le 05/07/2023**

## Objectif

Le RACI ci-dessous détaille le partage des responsabilités entre OVHcloud et le client pour le service managed Kubernetes. Ce modèle peut aider le client à utiliser le service VMware on OVHcloud au mieux.

| Rôles |
| --- |
|R : Est en charge de la Réalisation du processus|
|A : Est Approbateur de la réalisation du processus|
|C : Est Consulté pendant le processus|
|I : est Informé des résultats du processus|

### 1. Avant la souscription

#### 1.1. Spécifier le service en fonction des besoins

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Choisir le projet public cloud dans lequel sera créé le Cluster Kubernetes | A | I |
| Choisir le réseau privé ou public dans lequel le cluster Kubernetes sera exécuté | A | I |
| Choisir la localisation du service | RA | I |
| Décider de la version de Kubernetes à utiliser | A | IR |
| Concevoir les applications exécutées sur le cluster Kubernetes de manière à ne pas stocker de données persistantes importantes en local (les nœuds sont gérés en mode cattle) : Ex : utilisation de volume peristant CINDER | A | I |


### 2. Mise à disposition du service

#### 2.1. Installer le service

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Installer le cluster Kubernetes Managé selon la configuration initiale demandée par le client | I | RA |
| Adapter la configuration du service après sa livraison initiale | RA |  |


#### 2.2. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Utiliser les API kubenetes native pour importer/exporter (création, suppression) les données sur le cluster : fichiers au format YAML ou JSON | RA |  |


#### 2.3. Installation du SI client

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Créer le fichier YAML de configuration d’un conteneur   | RA |   |
| Démarrer les logiciels conteneurisés | RA |   |
| Fournir les données aux conteneurs | RA |   |
| Modifier la configuration par défaut du réseau de manière à sécuriser les connexions internes et externes au cluster Kubernetes | RA |   |


### 3. Utilisation du service

#### 3.1. Opérations

##### **3.1.1. Opérations quotidiennes**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer l’accessibilité et le bon fonctionnement du service Kubernetes Managé |  | RA |
| Gérer l’accessibilité et le bon fonctionnement du SI installé | RA |  |
| Déployer une politique de backups sur les données traitées par le SI installé | RA |   |

##### **3.1.2. Gestion des accès**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer des accès à l'espace client OVHcloud (Control Plane) à travers un projet Public Cloud | RA | I |
| Gérer les accès physiques et logiques des équipes OVHcloud aux infrastructures |  | RA |
| Gérer l’accès aux ressources gérées par le service Kubernetes Managé | RA |  |


##### **3.1.3. Monitoring**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Suivre les performances du service Kubernetes Managé | I | RA |
| Adapter les ressources allouées au control plane kubenetes en fonction de l’infrastructure managée par kubernetes |  | RA |
| Ajuster l’infrastructure managée par kubernetes en fonction des besoins en ressources des logiciels installés | RA | I |
| Surveiller le système d’information déployé via le service Kubernetes Managé | RA |  |
| Conserver les logs du SI déployé | RA |  |
| Vérifier la bonne application des politiques de backup | RA |  |

##### **3.1.4. Stockage**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Chiffrer les données sensibles du SI dans le cluster kubernetes| RA |  |


##### **3.1.5. Connectivité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Filtrer les accès administrateur et utilisateur au service Managed Kubernetes | RA | I |
| Router les paquets à l’intérieur du projet géré par le service Managed Kubernetes | RA |  |
| Appliquer les mesures de sécurité adaptées aux flux internes et externes du SI géré | RA |  |
| Appliquer les mesures de sécurité adaptées aux flux à destination du control plane du service Managed Kubernetes (routage FQDN, certificats TLS) |  | RA |

##### **3.1.6. Gestion**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Fournir l’inventaire des infrastructures et services mis en œuvre dans le projet Managed Kubernetes | I | RA |
| Gérer les risques relatifs à l’infrastructure mise à disposition dans le cadre de Managed Kubernetes |  | RA |
| Gérer les risques relatifs au SI hébergé géré par le service Managed Kubernetes | RA |  |
| Forcer les mises à niveau des versions du service kubernetes qui ne sont plus maintenues par OVHcloud | I | RA |
| Mise à disposition des patchs et montées de version du service managée kubernetes pour installation | I | RA |
| Appliquer les mises à jour nécessaires en fonction de la politique de mise à jour définie | RA |  |
| Maintenir en conditions opérationnelles et de sécurité le SI géré | RA |  |


##### **3.1.7. Continuité d'activité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Déployer la politique de continuité d’activité sur le service kubernetes managé |  | RA |
| Réaliser des tests périodiques de restauration du service Managed Kubernetes |  | RA |
| Mettre en place le plan de continuité d'activité du SI installé | RA |  |
| Réaliser des tests périodiques de restauration du SI géré | RA |  |

#### 3.2. Gestion des évènements

##### **3.2.1. Incidents**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Notifier un incident sur le service Managed Kubernetes en passant par le service de support (ticket, tel …) | RA | I |
| Gérer et notifier les incidents détectés sur les infrastructures managées du service Managed Kubernetes en cas d’impact avéré pour le client | I | RA |
| Intervenir sur un incident affectant le service Managed Kubernetes |  | RA |
| Intervenir sur les incidents causés par une mauvaise configuration du service (mauvaise configuration réseau, mauvaise répartition des workloads, sursollicitassions du control plane kubernetes, …) | RA | CI |
| Intervenir sur un incident affectant le SI géré | RA |  |

#### **3.2.2. Changements**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Déployer les mises à jour et maintenances nécessaires sur le service kubernetes managées (API, infrastructures, besoins en stockages…) | I | RA |
| Déployer les mises à jour nécessaires sur les conteneurs managés | RA |  |
| Demander la modification des ressources allouées au service Kubernetes Managé | RA | I |
| Réaliser les modifications de ressources allouées demandé par le client | I | RA |


### 4. Réversibilité

#### 4.1. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Utiliser les API kubenetes native pour importer/exporter (création, suppression) les données sur le cluster : fichiers au format YAML ou JSON | RA |  |
| Créer et déployer le plan de réversibilité du SI géré | RA |  |

#### 4.2. Récupération des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les opérations de réversibilité | RA | I |
| Migrer / transférer les données | RA |  |

### 5. Fin de service

#### 5.1. Destruction des configurations

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Supprimer le cluster kubernetes dans le projet public cloud | RA | I |
| Détruire les configurations du kubernetes managé propre au client suite à la résiliation du service |  | RA |

#### 5.2. Destruction des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Détruire les données métier du client en fin de service |  | RA |
| Détruire les données externes au cluster en fin de service (ex : volume persistant ) | RA |  |
| Détruire les données relatives à la configuration du kubernetes managé |   | RA |
