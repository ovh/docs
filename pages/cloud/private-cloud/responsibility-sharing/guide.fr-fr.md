---
title: Partage de responsabilité - VMware on OVHcloud
slug: vmware-on-ovhcloud-raci
section: FAQ
excerpt: "Partage de responsabilité entre OVHcloud et le client pour l'utilisation du produit VMware on OVHcloud"
kb: Hosted Private Cloud

---

**Dernière mise à jour le 07/02/2023**

## Objectif

Le RACI ci-dessous détaille le partage des responsabilités entre OVHcloud et le client pour le service VMware on OVHcloud. Ce modèle peut aider le client à utiliser le service VMware on OVHcloud au mieux.

| Rôles |
| --- |
|R : Est en charge de la Réalisation du processus|
|A : Est gArant de la bonne fin du processus|
|C : Est Consulté pendant le processus|
|I : est Informé des résultats du processus|

### 1. Avant la souscription

#### 1.1. Spécifier le service en fonction des besoins

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Choisir la localisation du vCenter | RA | I |
| Choisir l’offre VMware on OVHcloud adaptée en fonction des besoins | RA | I |
| Dimensionner les serveurs en fonction des besoins | RA | I |
| Choisir les logiciels VMware (vSphere, vROps, vScope, vSAN, NSX, TKG…) en fonction des besoins | RA | I |
| Décider de la version des logiciels VMware à utiliser | I | RA |

### 2. Mise à disposition du service

#### 2.1. Installer le service

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Produire, acheminer, livrer et maintenir les machines physiques et les bâtiments d’hébergement | I | RA |
| Installer et configurer les briques fonctionnelles internes au serveur dédié nécessaires au maintien en conditions opérationnelles et au maintien en conditions de sécurité (firmware, BIOS, BMC, IPMI...) |  | RA |
| Acheter et détenir les licences et droits d’utilisation VMware | I | RA  |
| Déployer la configuration réseau initiale sur les équipements | I | RA |
| Installer le vCenter | I | RA |
| Fournir les templates de TKGm  | I | RA |
| Adapter la configuration du service après sa livraison initiale | RA |  |

#### 2.1. Installation du SI client

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Déployer les containers | RA |  |
| Déployer les logiciels à l’intérieur des containers | RA |  |
| Fournir les données aux containers | RA |  |
| Configurer le réseau de manière à rendre le SI installé fonctionnel | RA |  |

### 3. Utilisation du service

#### 3.1. Opérations

##### **3.1.1. Opérations quotidiennes**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Assurer l'accessibilité du vCenter sur le réseau |  | RA |
| Administrer les applicatifs installés sur le vCenter | RA |  |
| Décider d’ajouter / supprimer une option sur le vCenter, demander le remplacement d'un matériel défectueux au sein du vCenter | RA | I |
| Réaliser l’ajout / suppression des options / du matériel sur le vCenter | I | RA |
| Configurer le vCenter | RA |  |
| Assurer l’accessibilité et le bon fonctionnement du service TKGm | RA |  |
| Assurer l’accessibilité et le bon fonctionnement du SI installé | RA |  |
| Déployer une politique de backups sur les données traitées par le SI installé | RA |  |

##### **3.1.2. Gestion des accès**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer la politique de sécurité des utilisateurs du Service | RA |  |
| Gérer les accès au manager | RA | I |
| Gérer l’accès aux ressources gérées par le vCenter | RA |  |
| Gérer les accès physiques et logiques des équipes OVHcloud aux infrastructures | I | RA |

##### **3.1.3. Monitoring**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Surveiller le bon fonctionnement des dispositifs physiques (utilités) en support du vCenter | I | RA |
| Suivre les performances des ressources physiques | RA | R |
| Traiter et acquitter les alarmes provenant des dispositifs managés du vCenter | I | RA |
| Conserver les logs du système d’information hébergé sur le vCenter |  | RA |
| Conserver logs du Control Plane qui supervise le vCenter |  | RA |
| Suivre les performances des services installés sur le vCenter | RA |  |
| Suivre les performances du service TKGm | RA |  |
| Adapter les ressources allouées en fonction des performances observées et attendues | RA | I |
| Fournir les journaux d’infrastructure (API, hyperviseur, cluster, kubernetes) | I | RA |
| Vérifier la bonne application des politiques de backup | RA |  |

##### **3.1.4. Stockage**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Créer, modifier, contrôler, restaurer, supprimer les jobs de backups | RA |  |
| Gérer le contenu hébergé sur les infrastructures | RA |  |
| Assurer la continuité et la durabilité des données | RA |  |
| Réaliser la maintenance des dispositifs de stockage et de sauvegarde fournis par OVHcloud |  | RA |
| Chiffrer les données sensibles | RA |  |
| Veeam Managed Backup – souscrire à l’option | RA | I |
| Veeam Managed Backup - Upgrade the Veeam solution |  | RA |
| Veeam Managed Backup - Licensing |  | RA |
| Veeam Managed Backup - Monitoring and availability of Veeam components |  | RA |
| Veeam Managed Backup - Job creation | RA |  |
| Veeam Managed Backup - Job deletion | RA |  |
| Veeam Managed Backup - Job modification | RA |  |
| Veeam Managed Backup - Backup restore | RA |  |


##### **3.1.5. Connectivité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Assurer le fonctionnement des systèmes automatiques de gestion du réseau (architecture, mise en oeuvre, maintenance logicielle et matérielle pour les réseaux publics et privés déployés) | I | RA |
| Gérer le plan d’adressage IP | RA | I |

##### **3.1.6. Gestion**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Assurer la sécurité des infrastructures de gestion (API, control plane) | R | RA |
| Assurer la sécurité du logiciel VMware, des Softwares et Middlewares installés sur le vCenter | R | RA |
| Gérer la sécurité physique des équipements et infrastructures hébergés chez OVHcloud | I | RA |
| Gérer la sécurité des données déposées par le Client sur le vCenter | RA |  |
| Fournir l’inventaire des infrastructures et services mis en œuvre dans le vCenter | I | RA |
| Gérer les risques relatifs à l’infrastructure mise à disposition dans le vCenter |  | RA |
| Gérer les risques relatifs au SI hébergé géré dans le vCenter | RA |  |
| Maintenir en conditions opérationnelles et de sécurité le service vCenter (inclut mise a jour mineure/majeure des hosts, du vCenter, NSX, vROps, vSAN et application les patchs de sécurité. Liste non exhaustive | RI | RA |
| Maintenir en conditions opérationnelles et de sécurité le SI géré | RA | R |

##### **3.1.7. Continuité d'activité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les systèmes de gestion automatiques de l’infrastructure mise à disposition | I | RA |
| Maintenir un plan de continuité d’activité et de reprise d’activité pour le SI hébergé | RA |  |
| Réaliser des tests périodiques de restauration du SI géré | RA |  |
| Zerto - setup a Disaster Recovery Plan | RA | I |
| Zerto - Setup of the solution between 2 Private Cloud | I | RA |
| Zerto - Licensing | I | RA |
| Zerto - Configure VPG and RPO | RA | I |
| Zerto - Monitoring and availability of Zerto components | I | RA |

##### **3.1.7. NSX**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Déployer, configurer, maintenir, mettre à jour les NSX Controller |  | RA |
| Déployer, configurer, maintenir, mettre à jour les NSX Edges | I | RA |

#### 3.2. Gestion des évènements

##### **3.2.1. Incidents**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Remplacer les éléments matériels défectueux du vCenter | I | RA |
| Ouvrir les tickets d'incidents relatif à un dysfonctionnement matériel du vCenter | RA | I |
| Ouvrir les tickets d'incidents relatif aux logiciels VMware | RA | I |
| Traiter les incidents matériels et réseau ou relatifs aux logiciels VMware (tickets et contacts téléphoniques) | AI | RA |
| Notifier un incident sur le vCenter | R | RA |
| Intervenir sur un incident affectant le vCenter | I | RA |
| Intervenir sur un incident affectant le SI géré | RA |  |

#### **3.2.2. Changements**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Déployer les correctifs, mettre à jour le vCenter et ses composants  | I | RA |
| Demander la modification des ressources allouées au vCenter | RA | I |
| Réaliser les modifications de ressources allouées demandé par le client | RA | I |

### 4. Réversibilité

#### 4.1. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Créer et déployer le plan de réversibilité du SI géré | RA |  |
| Planifier les opérations de réversibilité | RA |  |
| Choisir les infrastructures de repli | RA |  |

#### 4.2. Récupération des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les opérations de réversibilité | RA |  |
| Migrer / transférer les données | RA |  |

### 5. Fin de service

#### 5.1. Destruction des configurations

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Rompre le contrat de fourniture de service | RA | I |
| Décommissionner les configurations associées au client |  | RA |

#### 5.2. Destruction des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Opérer la destruction sécurisée des données sur les supports de stockage |  | RA |
| Détruire les données relatives à la configuration du vCenter |  | RA |
| Fournir une attestation de destruction (sur demande) | I | RA |
