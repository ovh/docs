---
title: Partage de responsabilité - Nutanix on OVHcloud
excerpt: "Partage de responsabilité entre OVHcloud et le client pour l'utilisation du produit Nutanix on OVHcloud"
kb: Hosted Private Cloud
category_l1: Nutanix on OVHcloud
category_l2: Responsibility sharing
updated: 2023-07-13
---

## Objectif

Le RACI ci-dessous détaille le partage des responsabilités entre OVHcloud et le client pour le service Nutanix on OVHcloud. Ce modèle peut aider le client à utiliser le service Nutanix on OVHcloud au mieux.

| Rôles |
| --- |
|R : Est en charge de la Réalisation du processus|
|A : Est Approbateur de la finalisation du processus|
|C : Est Consulté pendant le processus|
|I : est Informé des résultats du processus|

### 1. Avant la souscription

#### 1.1. Spécifier le service en fonction des besoins

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Prendre connaissance de l'offre commerciale et limitations liées au service (site web, Conditions Particulières, ...) | RA | CI |
| Choisir la localisation du cluster Nutanix  | RA | I |
| Choisir le pack de licences Nutanix, mis à disposition par OVHcloud, en fonction des besoins ou importer ses propres Licences  | RA | I |
| Choisir le modèle et la gamme du serveur dédié selon les besoins et critères définis  | RA | I |
| Choisir les options de configuration des serveurs dédiés en fonction des besoins | RA | I |
| Choisir la configuration des options supplémentaires du cluster Nutanix en fonction des besoins (Fault Tolerance Domain, Replication Factor, Fonctionnalité Erasure Coding) | RA | I |


### 2. Mise à disposition du service

#### 2.1. Installer le service

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Produire, acheminer, livrer et maintenir les machines physiques et les bâtiments d’hébergement | I | RA |
| Installer et configurer les briques fonctionnelles internes au serveur dédié nécessaires au maintien en conditions opérationnelles et au maintien en conditions de sécurité (firmware, BIOS, BMC, IPMI...) | I | RA |
| Déployer la configuration réseau initiale sur les équipements (vRack, IPLB et les noeuds du cluster Nutanix) | I | RA |
| Installer le Nutanix Acroplis Operating System (AOS)  | I | RA |

#### 2.2. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Importer des machines virtuelles depuis une source compatible avec la solution Nutanix (VMware, Hyper-V, AHV) manuellement ou via l'outil Nutanix Move | RA | I |


#### 2.3. Installation du SI client

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Créer de nouvelles machines virtuelles | RA |  |
| Acheter et détenir les licences et droits d’utilisation pour les OS | RA |  |
| Installer l'OS des machines virtuelles | RA |  |
| Installer et configurer les softwares et middlewares sur le cluster | RA |  |
| Modifier les configurations par défaut du réseau afin de sécuriser les connexions internes et externes au cluster | RA |  |

### 3. Utilisation du service

#### 3.1. Opérations

##### **3.1.1. Opérations quotidiennes**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer l'accessibilité du Serveur Dédié sur le réseau |  | RA |
| Configurer et administrer la solution Nutanix | RA |  |
| Administrer les applicatifs installés sur la couche de virtualisation Nutanix  | RA |  |
| Demander le remplacement d'un matériel défectueux sur le Serveur Dédié | RA | CI |
| Réaliser l’ajout / suppression du matériel défectueux sur le Serveur Dédié | CI | RA |
| Gérer les risques liés au SI installé | RA |  |
| Déployer et s'assurer du bon fonctionnement de la politique de backups sur le SI du client | RA |  |

##### **3.1.2. Gestion des accès**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer des accès à l'espace Client OVHcloud (Control Plane) | RA | I |
| Gérer les accès des utilisateurs au cluster Nutanix (ex : interface d'administration Prism, SSH, CLI) | RA |  |
| Gérer les accès et la politique de sécurité des utilisateurs du SI | RA |  |
| Gérer les accès physiques et logiques des équipes OVHcloud aux infrastructures | I | RA |


##### **3.1.3. Monitoring**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Surveiller le bon fonctionnement des dispositifs physiques (utilités) en support du Serveur Dédié | I | RA |
| Suivre les performances des ressources physiques | RA | CI |
| Conserver les logs d'administration du cluster Nutanix rendus disponibles via les différents outils Nutanix (ex : Prism, SSH, CLI) ou via des outils tiers et du SI hébergé | RA |  |
| Conserver les logs du Control Plane qui supervise et administre le service Nutanix on OVHcloud |  | RA |
| Suivre les performances du cluster Nutanix (alertes incidents, rapport d'utilisation, etc ..) et autres logiciels installés par le client sur son SI | RA |  |
| Suivre les performances utilisation du service IPLB intégré à l'offre Nutanix on OVHcloud (via les graphiques de performance) | RA | I |


##### **3.1.4. Stockage**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Créer, modifier, contrôler, restaurer, supprimer les jobs de backups | RA |  |
| Gérer le contenu hébergé sur les infrastructures | RA |  |
| Gérer la continuité et la durabilité des données | RA |  |
| Réaliser la maintenance des dispositifs de stockage et de sauvegarde mis en place par le client | RA |  |
| Réaliser la maintenance des dispositifs de stockage et de sauvegarde mis à disposition par OVHcloud (hors intégrité des sauvegardes) | CI | RA |

##### **3.1.5. Connectivité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer le fonctionnement des systèmes automatiques de gestion du réseau (architecture, mise en oeuvre, maintenance logicielle et matérielle pour les réseaux publics et privés déployés, IP primaire du serveur dédié) | I | RA |
| Mettre en place une architecture réseau adaptée aux besoins (vrack, IPLB, accès réseaux privés et publics, etc...) | RA | I |
| Gérer le plan d’adressage IP privé du client au niveau du Cluster Nutanix | RA |  |
| Gérer le plan d’adressage IP public fournit avec le service Nutanix on OVHcloud | CI | RA |

##### **3.1.6. Gestion**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Tenir un inventaire des dispositifs fournis par OVHcloud | I | RA |
| Gérer la sécurité des infrastructures de gestion (control plane) |  | RA |
| Gérer la sécurité du logiciel Nutanix, des Softwares et Middlewares installés sur le cluster | RA |  |
| Gérer la sécurité des données déposées par le Client sur son infrastructure | RA |  |
| Gérer la sécurité physique des équipements et infrastructures hébergés chez OVHcloud | I | RA |
| Gérer la maintenance de la solution Nutanix et ses extensions | RA |  |

##### **3.1.7. Continuité d'activité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les systèmes de gestion automatiques de l’infrastructure mise à disposition | I | RA |
| Maintenir un plan de continuité d’activité et de reprise d’activité pour le SI hébergé | RA |  |

#### 3.2. Gestion des évènements

##### **3.2.1. Incidents**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Ouvrir les tickets d'incidents relatifs au logiciel Nutanix (en cas de souscription à l'offre packagée et de dysfonctionnement sur le logiciel Nutanix) | RA | I |
| Ouvrir les tickets d'incidents relatifs à l'offre Bring your Own Licence (lié au un dysfonctionnement matériel du Serveur Dédié ) | RA | I |
| Remplacer les éléments matériels défectueux du Serveur Dédié suite à la qualification de l'incident | I | RA |
| Traiter les autres incidents | RA |  |
| Restaurer les sauvegardes de la machine virtuelle | RA |  |

#### **3.2.2. Changements**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Déployer les correctifs, mettre à jour et configurer la couche de virtualisation Nutanix ainsi que les softwares, middlewares et SI hébergé | RA |  |
| Mettre à disposition la nouvelle version du firmware du serveur dédié | I | RA |
| Mettre à jour les machines virtuelles | RA |  |
| Valider la demande d’un changement de matériel défectueux d’infrastructure soumise par OVHcloud | A | R |
| Planifier les changements demandés par le client | RA | RI |

### 4. Réversibilité

#### 4.1. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Planifier les opérations de réversibilité | RA | I |
| Choisir les infrastructures de repli | RA |  |

#### 4.2. Récupération des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Exporter les machines virtuelles vers des infrastructures compatibles avec la solution Nutanix (VMware, Hyper-V, AHV) manuellement ou via l'outil Nutanix Move  | RA | C |
| Migrer / transférer les données | RA |  |

### 5. Fin de service

#### 5.1. Destruction des configurations

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Décommissionner les configurations associés au client suite à la rupture du contrat | I | RA |

#### 5.2. Destruction des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Opérer la suppression sécurisée des données sur les supports de stockage |  | RA |
| Détruire les supports de stockage arrivés en fin de vie ou sur lesquels le processus de destruction sécurisé génère des erreurs |  | RA |
| Fournir une attestation de destruction (sur demande) | I | RA |
