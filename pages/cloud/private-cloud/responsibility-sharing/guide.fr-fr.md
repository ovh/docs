---
title: Partage de responsabilité - VMware on OVHcloud
slug: vmware-on-ovhcloud-raci
section: Getting started
excerpt: "Partage de responsabilité entre OVHcloud et le client pour l'utilisation du produit VMware on OVHcloud"
kb: Hosted Private Cloud

---

**Dernière mise à jour le 06/03/2023**

## Objectif

Le RACI ci-dessous détaille le partage des responsabilités entre OVHcloud et le client pour le service VMware on OVHcloud. Ce modèle peut aider le client à utiliser le service VMware on OVHcloud au mieux.

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
| Choisir la localisation des infrastructures (vCenter) | RA | I |
| Dimensionner les infrastructures en fonction des besoins | RA | I |
| Choisir les options en fonction des besoins | RA | I |
| Choisir la version software VMware à utiliser | I | RA |
| Décider d'utiliser la version TKG (Tanzu Kubernetes Grid) proposée | RA |  |
| Choisir la localisation des infrastructures de déploiement du service TKG | RA |  |

### 2. Mise à disposition du service

#### 2.1. Installer le service

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Produire, acheminer, livrer et maintenir les machines physiques et les bâtiments d’hébergement | I | RA |
| Installer et configurer les briques fonctionnelles internes au serveur dédié nécessaires au maintien en conditions opérationnelles et au maintien en conditions de sécurité (firmware, BIOS, BMC, IPMI...) |  | RA |
| Acheter et détenir les licences et droits d’utilisation pour les OS achetés chez OVHcloud | I | RA  |
| Acheter et détenir les licences et droits d’utilisation pour les softwares fournis par OVHcloud | I | RA  |
| Acheter et détenir les licences et droits d’utilisation pour la solution VMware (Private Cloud) | I | RA  |
| Installer le vCenter | I | RA |
| Déployer la configuration réseau initiale sur les équipements | I | RA |
| Fournir les modèles d'image OVA pour TKG à jour  | I | RA |
| Fournir le support client suite au déploiement du service TKG (ticket, debug)  | A | CR |
| Adapter la configuration du service une fois livré | RA |  |

#### 2.2. Modèle de réversibilité 
| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Importer les données aux formats VMDK ou tout autre format supporté par l’hyperviseur VMware | RA | C |
| Décider d'utiliser l'outil OVFTOOL pour importer des machines virtuelles au format .OVF | RA |  |


#### 2.3. Installation du SI client

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Créer / installer / optimiser de nouvelles VMs | RA |  I |
| Installer et configurer les softwares et middlewares sur l’Infrastructure as a Service | RA |   |
| Acheter et détenir les licences et droits d’utilisation pour les OS en mode Bring Your Own Licence | RA |   |
| Configurer l’ensemble des instances virtuelles déployées sur le IaaS | RA |  I |
| Déployer les conteneurs sur les VM suite à l'intégration de TKG sur l'infrastructure | RA |   |
| Installer et configurer les logiciels à l’intérieur des conteneurs | RA |   |
| Fournir (ou importer)  les données aux conteneurs | RA |   |
| Concevoir le projet de manière à ne pas stocker les données persistantes en local (utiliser les volumes persistants et partagés afin de stocker les données de manière permanentes : volume NFS ou stockage vSAN) | RA |   |
| Configurer le réseau de manière à rendre le SI installé fonctionnel | RA |  |

### 3. Utilisation du service

#### 3.1. Opérations

##### **3.1.1. Opérations quotidiennes**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer l'accès réseau au vCenter | RA | I |
| Gérer les accès selon les besoins à l'infrastructure de service Managée  | I | RA |
| Exploiter l’ensemble des instances virtuelles déployées dans le service | RA | I |
| Décider d’ajouter / supprimer des ressources au datacentre virtuel | RA | I |
| Réaliser l’ajout / suppression des ressources au datacentre virtuel | I | RA |
| Ajouter / supprimer des ressources aux VMs | RA |  |
| Gérer l'accessibilité et le bon fonctionnement du service VMware Tanzu installé | RA |  |
| Gérer l'accessibilité et le bon fonctionnement du SI installé sur le VMs | RA |  |
| Gérer les risques lié au SI installé | RA |  |
| Déployer une politique de backups sur le SI installé | RA | I |

##### **3.1.2. Gestion des accès**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer des accès à l'espace Client OVHcloud (Control Plane) | RA | I |
| Gérer les accès physiques et logiques des équipes OVHcloud aux infrastructures (vCenter) | I | RA |
| Gérer les accès à l’interface de gestion de la virtualisation | RA | I |
| Gérer les accès et la politique de sécurité des utilisateurs du SI | RA |  |


##### **3.1.3. Monitoring**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Surveiller le bon fonctionnement des dispositifs physiques (utilités) en support de l'infrastructure as a service | I | RA |
| Suivre les performances des ressources physiques | RA | R |
| Suivre les performances des VMs et du service TKG | RA | I |
| Traiter et acquitter les alarmes provenant des dispositifs managés de l’Infrastructure as a Service (vCenter) | I | RA |
| Conserver les logs générés par l’Infrastructure as a Service (vCenter) | RA | RA |
| Conserver les logs générés par l'offre VMware Tanzu choisie | RA |  |
| Conserver les logs  du système d’information hébergé sur l’Infrastructure as a Service | RA |  |



##### **3.1.4. Stockage**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Créer, modifier, contrôler, restaurer, supprimer les jobs de backups via la solution choisie par le client | RA |  |
| Chiffrer les sauvegardes de données suite à la souscription à l’option Veeam Managed Backup | AI | RI |
| Chiffrer les VMs en fonction des besoin via la solution vNKP | RA |  |
| Gérer le contenu hébergé sur les infrastructures | RA |  |
| Gérer la continuité et la durabilité des données | RA |  |
| Réaliser la maintenance des dispositifs de stockage et de sauvegarde fournis par OVHcloud | C | RA |



##### **3.1.5. Connectivité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
|  Gérer le fonctionnement des systèmes automatiques de gestion du réseau (architecture, mise en œuvre, maintenance logicielle et matérielle pour les réseaux publics et privés déployés sur NSX Controller et NSX Edges) | I | RA |
| Mettre en place une architecture réseau adaptée aux besoins | RA | I |
| Gérer le plan d’adressage IP | RA | I |

##### **3.1.6. Gestion**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Tenir un inventaire des dispositifs fournis par OVHcloud | I | RA |
| Tenir un inventaire complet de l’ensemble des dispositifs | RA |  |
| Gérer la sécurité des infrastructures de gestion (API, Contrôl Plane) |  | RA |
| Gérer la sécurité des VMs | RA | I |
| Gérer la sécurité des Softwares et Middlewares installés sur les VMs | RA | I |
| Gérer la sécurité des données déposées par le Client sur l’IaaS | RA | I |
| Gérer la sécurité physique des équipements et infrastructures hébergés chez OVHcloud | I | RA |
| Gérer la maintenance de la solution VMware managée et ses extensions | I | RA |
| Gérer la maintenance de la version TKG | RA |   |

##### **3.1.7. Continuité d'activité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les systèmes de gestion automatiques de l’infrastructure mise à disposition | I | RA |
| Maintenir d’un plan de continuité d’activité et de reprise d’activité pour le SI hébergé | RA | CI |


#### 3.2. Gestion des évènements

##### **3.2.1. Incidents**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Remplacer les éléments défectueux sur les dispositifs physiques supportant l’Infrastructure as a Service | I | RA |
| Qualifier, Intervenir sur les éléments managés de l’Infrastructure as a Service (vCenter) | C | RA |
| Traiter les incidents (tickets et contacts téléphoniques) | AI | RA |
| Intervenir sur un incident affectant le SI hébergé et services non managés | RA |  |

#### **3.2.2. Changements**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Déployer les correctifs, mettre à jour et configurer les softwares, middlewares et systèmes d’information hébergés sur l’Infrastructure as a Service | RA |  |
| Optimiser les VMs | RA | I |
| Valider la demande d’un changement de matériel d’infrastructure soumise par OVHcloud | A | R |
| Planifier les changements demandés par le client | RA | RI |
| Prononcer la recette | RA | C |
| Déployer les correctifs, mettre à jour et configurer l’ensemble des éléments constitutifs de l’Infrastructure as a Service managée | RI | RA |
| Réaliser les interventions préventives sur les éléments managés de l’Infrastructure as a Service | A | R |
| Mettre à jour l’hyperviseur  | I | RA |
| Permettre à OVH de mettre un host en maintenance à n'importe quel moment pour donner lieu à la mise à jour (sous réserve de provisionnement de ressources par le client)  | RA | I |
| Mettre à jour les VMs | RA |  |


### 4. Réversibilité

#### 4.1. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Planifier les opérations de réversibilité | RA | I |
| Choisir les infrastructures de repli | RA |  |

#### 4.2. Récupération des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les opérations de réversibilité : extraction manuelle, API, OVFTOOL ou logiciels tiers compatible avec l'offre VMware | RA | I |
| Migrer / transférer les données | RA |  |

### 5. Fin de service

#### 5.1. Destruction des configurations

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Décommissionner les configurations du PCC et ses options associés au client suite à la rupture du contrat | I | RA |

#### 5.2. Destruction des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Opérer la destruction sécurisée des données sur les supports de stockage |  | RA |
| Détruire les supports de stockage arrivés en fin de vie ou sur lesquels les processus de destruction sécurisé génèrent des erreurs |  | RA |
| Fournir une attestation de destruction (sur demande) | I | RA |
