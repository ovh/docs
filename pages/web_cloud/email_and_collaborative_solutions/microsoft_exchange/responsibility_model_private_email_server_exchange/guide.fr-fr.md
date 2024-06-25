---
title : Modèle de responsabilité du produit Serveur de messagerie managé sur une infrastructure mutualisée
extrait : « Modèle de responsabilités entre OVHcloud et le client »
Mise à jour : 2024-6-25
---

Le RACI ci-dessous détaille les responsabilités partagées entre OVHcloud et le client pour le produit Managed E-mail Server on Mutualized Infrastructure appelé service Private Exchange a OVHcloud.
Ce modèle partagé peut aider à alléger le fardeau opérationnel du client.

Définition ## RACI

| Rôles |
| --- |
| R : Est en charge de la Réalisation du processus |
| A : Approbateur de la réalisation du process |
| C : Est consulté au cours du processus |
| I : Est informé des résultats du processus |

### 1. Avant l'abonnement

#### 1.1. Spécifiez le service selon vos besoins

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Se rensigner sur les capacités et les limites du service (documentation, conditions d'utilisation) | RA | I |
| Définir et configurer un nom de domaine et disposer d'un domaine pour lequel un certificat SSL sera fourni avant la souscription du service | RA | I |
| Définit la version d'Exchange et le serveur privé virtuel en support du service | | RA |
| Héberger le service dans l'UE | | RA |

### 2. Disponibilité du service

#### 2.1. Installer le service

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Installer, configurer et livrer des briques fonctionnelles du service | I | RA |
| Fournir les licences de service et le certificat SSL | CI | RA |
| Configurer le certificat SSL après livraison par OVHcloud | A | R |
| Fournit un service préconfiguré avec le nombre demandé de boîtes aux lettres qui nécessitent une configuration supplémentaire par le client | I | RA |

#### 2.2. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Choisir un outil de migration pour importer des comptes e-mail d'un autre service | RA | |

#### 2.3. Paramétrage du système d'information client

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Personnaliser le service en fonction des besoins de l'entreprise (alertes domaine, quota de comptes, nombre de comptes, gestion des alias, définition de la politique de mot de passe, flux de mails...) | RA | I |

### 3. Utilisation du service

#### 3.1. Opérations

##### **3.1.1. Opérations quotidiennes**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gestion de la confidentialité et de l’intégrité des données hébergées sur le service | RA | |
| Gérer l'accessibilité du réseau et la disponibilité des données sur le service hébergé suivant le SLA OVHcloud | | RA |
| Gérer les risques liés au logiciel client utilisé (Outlook, Thunderbird, etc.) | RA | |
| Administrer l’infrastructure de services (serveurs, OS, antivirus, stockage) | | RA |
| Administrer le domaine, les boîtes aux lettres, les groupes de distribution, un connecteur d'envoi, etc. | RA | IR |
| Gérer les sauvegardes sur le service | | RA |
| Effectuer (en option) une sauvegarde des boîtes aux lettres à l'aide d'un logiciel tiers | RA | I |

##### **3.1.2. Gestion des accès**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les accès à l'espace client OVHcloud et au serveur privé suivant la politique de contrôle d'accès définie | RA | I |
| Restreindre l'utilisation des protocoles de sécurité en fonction des besoins de l'entreprise (IMAP, POP, MAPI, EWS, SMTP) et de la sécurité associée | A | R |
| Gérer les accès physiques et logiques aux infrastructures pour les équipes OVHcloud | | RA |

##### **3.1.3. Monitoring **

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Surveiller et gérer les alertes pour le fonctionnement des systèmes en support du service | I | RA |
| Gérer le quota sur les boîtes aux lettres | RA | |
| Gérer le dimensionnement du matériel sur le service |   | RA |
| Tenir à jour les logs générés par le service |   | RA |



##### **3.1.4. Connectivité **

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gestion du plan d’adressage IP et des systèmes réseau (architecture, protocoles, trafic réseau et accès au service) | | RA |
| Filtre les flux réseau | RA | |

##### **3.1.5. Gestion **

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Fournir l'inventaire du service utilisé | I | RA |
| Maintenir en état de fonctionnement et de sécurité le service Exchange | I | RA |
| Renouveler le certificat SSL | A | R |

##### **3.1.7. Continuité d’activité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Définir et maintenir un plan de continuité et de reprise d’activité en fonction des besoins de l’entreprise | | RA |

#### 3.2. Gestion des événements

##### **3.2.1. Incidents**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Notifier, qualifier et gérer les incidents sur le service | I | RA |
| Notifier les incidents sur le service Exchange grâce au système de tickets | RA | I |
| Réaliser la sauvegarde et la récupération | I | RA |

##### **3.2.2. Changements**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Planifier et déployer des mises à jour et des correctifs sur le service, le système d'exploitation et les logiciels en support du service | | RA |
| Remplacer le matériel défectueux pour prendre en charge le service | | RA |


### 4. Rétablissement

#### 4.1. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Choisir un outil de migration pour exporter les comptes e-mail de l'ancienne infrastructure | RA | |
| Choisissez le format du fichier d'extraction en suivant le logiciel utilisé pour la migration | RA | |


#### 4.2. Récupération des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Définit et planifie les opérations de réversion | RA | I |

### 5. Fin de service

#### 5.1. Suppression de la configuration

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Supprimer les configurations en fin de service suite à la résiliation du contrat| I | RA |

#### 5.2. Suppression des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Détruire les données du client | I | RA |

## Aller plus loin

[Toute notre documentation sur les solutions collaboratives Microsoft](/products/web-cloud-email-collaborative-solutions-microsoft-exchange)

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
