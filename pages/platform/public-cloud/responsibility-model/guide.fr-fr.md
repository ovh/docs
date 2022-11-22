---
title: RACI instances Public Cloud
slug: raci-instances-public-cloud
section: RACI instances Public Cloud
excerpt: RACI entre OVHcloud et le client pour l'utilisation des instances Public Cloud
---

**Dernière mise à jour le xx décembre 2022**

## Objectif

Le RACI ci-dessous détaille le partage des responsabilités entre OVHcloud et le client pour les instances Public Cloud. Ce modèle peut aider le client à utiliser au mieux le service.

| Rôles |
| --- |
|R : Est en charge de la Réalisation du processus|
|A : Est Approbateur de la réalisation du processus|
|C : Est Consulté pendant le processus|
|I : Est Informé des résultats du processus|

### 1. Avant la souscription

#### 1.1. Spécifier le service en fonction des besoins

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Choisir la gamme d'instances en fonction des besoins (CPU, RAM, General Purpose ...)  | RA | I |
| Renseigner les données à caractère personnel nécessaires pour la souscription au service | RA | I |
| Choisir la localisation du service | RA | I |

### 2. Mise à disposition du service

#### 2.1. Installer le service

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Produire, acheminer, livrer et maintenir les instances physiques et les bâtiments d’hébergement | I | RA |
| Installer les briques fonctionnelles internes à l'instance nécessaires au maintien en conditions opérationnelles et au maintien en conditions de sécurité (firmware, BIOS) | I | RA |
| Déployer la configuration réseau initiale du service | I | RA |
| Acheter et détenir les licences et droits d’utilisation pour les OS Microsoft proposés au cathalogue d'OVHcloud | CI | RA |
| Acheter et détenir les licences et droits d'utilisation pour les autres types d'OS utilisés | RA |  |

#### 2.2. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Importer des images aux formats supportés par l'infrastructure OpenStack | RA | C |

#### 2.3. Installation du SI client

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Installer l'OS | RA | RI |
| Installer l'ensemble des logiciels souhaités | RA |  |

### 3. Utilisation du service

#### 3.1. Opérations

##### **3.1.1. Opérations quotidiennes**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer la sécurité logique des données installées sur l'instance (confidentialité, intégrité, sauvegardes, …) |RA |  | 
| Assurer l'accessibilité de l'instance sur le réseau |  | RA |
| Décider d’ajouter / supprimer une option sur l'instance | RA | I |
| Réaliser l’ajout / suppression des options ou du matériel sur l'instance | I | RA |
| Installer les briques de sécurité nécessaires en fonction des besoins | RA |  |
| Administrer les applicatifs installés sur l'instance | RA |   |
| Réaliser les backups | RA |  |
| Réaliser les backups suite à la demande du Client (en option) | CI | RA |

##### **3.1.2. Gestion des accès**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les droits d’accès à l'interface de gestion (espace client OVHcloud) | RA | I |
| Gérer les accès physiques et logiques des équipes OVHcloud aux infrastructures | I | RA |
| Gérer les accès et la politique de sécurité des utilisateurs du service | RA |  |

##### **3.1.3. Monitoring**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer et monitorer la capacité des serveurs physiques en support des services Public Cloud |  | RA |
| Gérer et monitorer la capacité des services Public Cloud | RA |  |
| Surveiller le bon fonctionnement des logiciels installés sur les instances | RA |  |
| Conserver les logs du control plane qui supervise l'instance (API, hyperviseur) |  | RA |
| Conserver les logs du système d’information hébergé sur l'instance | RA |  |
| Monitorer et surveiller le bon fonctionnement des dispositifs physiques (utilités) en support des instances | I | RA |
| Créer, modifier, contrôler, restaurer, supprimer les jobs de backups | RA |  |
| Créer les jobs des backups suite à la souscription à l'option Automated backups | AI | R |
| Réaliser la maintenance des dispositifs de stockage et de sauvegarde fournis |  | RA |

##### **3.1.4. Stockage**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Assurer le chiffrement des données sur l'espace de stockage alloué | RA |  |

##### **3.1.5. Connectivité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer le plan d’adressage IP et choisir les protocoles réseaux adéquats | RA | I |
| Filtrer les accès réseau à l'instance | RA | I |
| Assurer le fonctionnement des systèmes automatiques de gestion du réseau (architecture, mise en oeuvre, maintenance logicielle et matérielle pour les réseaux publics et privés déployés) | I | RA |


##### **3.1.6. Gestion**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Fournir l'inventaire des instances consommées | I | RA |
| Assurer la sécurité des infrastructures de gestion (API, control plane) |   | RA |
| Assurer la sécurité des OS, softwares et middlewares installés sur les instances | RA |  |
| Gérer la sécurité physique des équipements et infrastructures hébergés | I | RA |
| Gérer la sécurité des données herbergées sur les instances | RA |  |

##### **3.1.7. Continuité d'activité**
| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Réaliser des tests périodiques de restauration de données | RA |  |
| Maintenir un plan de continuité d’activité et de reprise d’activité pour le SI hébergé | RA | C |
| Gérer les systèmes de gestion automatiques de l’infrastructure mise à disposition | I | RA |

#### 3.2. Gestion des évènements

##### **3.2.1. Incidents**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Traiter les incidents matériels et réseau (tickets et contacts téléphoniques) | AI | RA |
| Traiter les autres incidents | RA |  |
| Remplacer les éléments matériels défectueux de l'infrastructure en support des instances | I | RA |
| Restaurer les sauvegardes de l'instance | RA |  |
| Restaurer les sauvegardes en cas de souscription à une option gérée par OVHcloud | A | R |

#### **3.2.2. Changements**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Déployer les correctifs, mettre à jour et configurer les OS, softwares, middlewares et systèmes d’information hébergés sur les instances | RA |  |

### 4. Réversion

#### 4.1. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Planifier les opérations de réversibilité | RA |  |
| Choisir les infrastructures de repli | RA |  |
| Exporter les données au format QCOW2 | RA | I |

#### 4.2. Récupération des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les opérations de réversibilité | RA |  |
| Migrer / transférer les données | RA |  |

### 5. Fin de service

#### 5.1. Destruction des configurations

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Décommissionner les configurations associées au client après résiliation du contrat |  | RA |

#### 5.2. Destruction des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Supprimer les données sur les instances |  | RA |
| Détruire les supports de stockage arrivés en fin de vie ou sur lesquels le processus de destruction sécurisé génère des erreurs |  | RA |
