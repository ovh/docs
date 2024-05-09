---
title: "Partage de responsabilité sur le service Hosted Private Cloud by VMware sous la qualification SecNumCloud"
excerpt: "Partage de responsabilité entre OVHcloud et le client pour l'utilisation du produit VMware on OVHcloud sous la qualification SecNumCloud"
updated: 2024-01-22
---

## Objectif

Le RACI ci-dessous détaille le partage des responsabilités entre OVHcloud et le client pour le service Hosted Private Cloud by VMware sous la qualifcation SecNumCloud. Ce modèle peut aider le client à utiliser le service VMware on OVHcloud au mieux.

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
| Choisir la localisation des infrastructures | RA | I |
| Dimensionner les infrastructures en fonction des besoins | RA | I |
| Choisir les options en fonction des besoins | RA | I |

### 2. Mise à disposition du service

#### 2.1. Installer le service

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Produire, acheminer, livrer et maintenir les machines physiques et les datacentres | CI | RA |
| Acheter et détenir les licences et droits d’utilisation pour les OS achetés chez OVHcloud | RI | RA  |
| Acheter et détenir les licences et droits d’utilisation pour les softwares fournis par OVHcloud | I | RA  |
| Acheter et détenir les licences et droits d’utilisation pour la solution VMware (Private Cloud) | I | RA  |
| Acheter et détenir les licences et droits d’utilisation pour les solutions de backup fournies par OVHcloud | I | RA  |
| Déployer le service initial en conformité avec le Référentiel SecNumCloud | I | RA |
| Déployer la configuration réseau initiale sur les équipements | I | RA |

#### 2.2. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Fournir la documentation technique correspondant à l’offre SecNumCloud | I | RA |
| Rédiger un plan de continuité d’activité et le plan de reprise d’activité pour le SI hébergé, en cohérence avec la sensibilité du SI hébergé | RA |  |

#### 2.3. Installation du SI client

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Créer / installer / optimiser de nouvelles VMs | RA |  I |
| Installer et configurer les softwares et middlewares sur l’Infrastructure as a Service | RA |   |
| Acheter et détenir les licences et droits d’utilisation pour les OS en mode Bring Your Own Licence | RA |   |
| Configurer l’ensemble des instances virtuelles déployées sur le IaaS | RA |  I |

### 3. Utilisation du service

#### 3.1. Opérations

##### **3.1.1. Opérations quotidiennes**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Exploiter l’ensemble des instances virtuelles déployées dans l'IaaS | RA | I |
| Décider d’ajouter / supprimer des ressources au datacentre virtuel | RA | I |
| Réaliser l’ajout / suppression des ressources au datacentre virtuel | I | RA |
| Ajouter / supprimer des ressources aux VMs | RA |  |

##### **3.1.2. Gestion des accès**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les accès et la politique de sécurité des utilisateurs du Service | RA |  |
| Gérer les accès physiques et logiques des équipes OVHcloud aux infrastructures | I | RA |
| Gérer les accès à l'espace client | RA | I |
| Gérer les accès à l’interface de gestion de la virtualisation | RA | I |

##### **3.1.3. Monitoring**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Surveiller le bon fonctionnement des dispositifs physiques (utilités) en support de l'Infrastructure as a Service | I | RA |
| Suivre les performances des ressources physiques | RI | A |
| Suivre les performances des VMs | RA | I |
| Traiter et acquitter les alarmes provenant des dispositifs managés de l’Infrastructure as a Service  | I | RA |
| Conserver les logs générés par l’Infrastructure as a Service | I | RA |
| Conserver les logs du système d’information hébergé sur l’Infrastructure as a Service | RA | I |

##### **3.1.4. Stockage**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Créer, modifier, contrôler, restaurer, supprimer les jobs de backups | RA |  |
| Gérer le contenu hébergé sur les infrastructures | RA |  |
| Gérer la continuité et l'intégrité des données | RA |  |
| Réaliser la maintenance des dispositifs de stockage et de sauvegarde fournis par OVHcloud | C | RA |

##### **3.1.5. Connectivité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Assurer le fonctionnement des systèmes automatiques de gestion du réseau (architecture, mise en œuvre, maintenance logicielle et matérielle pour les réseaux publics et privés déployés)| I | RA |
| Gérer le plan d’adressage IP | RA | I |

##### **3.1.6. Gestion**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Tenir un inventaire des dispositifs fournis par OVHcloud | I | RA |
| Tenir un inventaire complet de l’ensemble des dispositifs | RA |  |
| Rédiger et fournir un rapport mensuel de traitement des incidents, changements et demandes pris en charge par OVHcloud| I | RA |
| Maintenir et fournir la  documentation technique correspondant à l’offre SecNumCloud| I | RA |
| Gérer la sécurité des infrastructures de gestion (API, Gateway SSL) de l'IaaS | I | RA |
| Gérer la sécurité des infrastructures de gestion (API, bastion, etc.) hébergées | RA | I |
| Gérer la sécurité des VMs | RA | I |
| Gérer la sécurité des Softwares et Middlewares installés sur les VMs | RA | I |
| Gérer la sécurité des données déposées par le Client sur l’IaaS | RA | I |
| Gérer la sécurité physique des équipements et infrastructures hébergés chez OVHcloud | I | RA |
| Gérer la maintenance de la solution VMware managée et ses extensions | C | RA |
| Réaliser le suivi commercial et contractuel du Client (devis, commande, livraison et facturation) | I | RA  |
| Réaliser le suivi commercial et contractuel de la prestation fournie (devis, commande, livraison et facturation) | RA | I  |
| Obtenir le support d’experts par l’intermédiaire du Techical Account Manager | A | R  |

##### **3.1.7. Continuité d'activité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les systèmes de gestion automatiques de l’infrastructure mise à disposition | I | RA |
| Maintenir un plan de continuité d’activité et de reprise d’activité pour le SI hébergé | RA | C |

#### 3.2. Gestion des évènements

##### **3.2.1. Incidents**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Remplacer les éléments défectueux sur les dispositifs physiques supportant l’Infrastructure as a Service | I | RA |
| Intervenir sur les éléments managés de l’IaaS | C | RA |
| Qualifier les incidents survenus sur les éléments managés de l’IaaS | C | RA |
| Rédiger et fournir une analyse post mortem | C | RA |
| Coopérer avec OVHcloud dans le cadre de la résolution des incidents | RA | CI |
| Coopérer avec le Client dans le cadre de la résolution des incidents | CI | RA |

#### **3.2.2. Changements**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Déployer les correctifs, mettre à jour et configurer les softwares, middlewares et systèmes d’information hébergés sur l’Infrastructure as a Service | RA | C |
| Optimiser les VMs | RA | C |
| Valider la demande d’un changement de matériel d’infrastructure soumise par OVHcloud | A | R |
| Mettre à jour les composants embarqués dans les instances virtuelles  | RA | C |
| Planifier les changements demandés par le client | C | RA |
| Réaliser les changements nécessaires pour maintenir la conformité de l'IaaS à SecNumCloud| I | RA |
| Prononcer la recette | RA | C |
| Déployer les correctifs, mettre à jour et configurer l’ensemble des éléments constitutifs de l’Infrastructure as a Service | I | RA |
| Déployer les correctifs, mettre à jour et configurer l’ensemble des éléments constitutifs du système d’information hébergé sur l’IaaS | RA | C |
| Réaliser les interventions préventives sur les éléments managés de l’IaaS  | A | R |
| Mettre à jour l’hyperviseur  | I | RA |
| Mettre à jour les VMs | RA | I |

### 4. Réversibilité

#### 4.1. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Planifier les opérations de réversibilité | RA | I |
| Choisir les infrastructures de repli | RA |  |

#### 4.2. Récupération des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les opérations de réversibilité | RA | I |
| Migrer / transférer les données | RA |  |

### 5. Fin de service

#### 5.1. Destruction des configurations

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Demander la fin de tout ou partie du Service | RA | I |
| Décommissionner les configurations du Cloud Privé et options associées au client suite à la rupture du contrat | I | RA |

#### 5.2. Destruction des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Opérer la destruction sécurisée des données sur les supports de stockage |  | RA |
| Détruire les supports de stockage arrivés en fin de vie ou sur lesquels les processus de destruction sécurisée génèrent des erreurs |  | RA |
| Fournir une attestation de destruction (sur demande) | I | RA |
