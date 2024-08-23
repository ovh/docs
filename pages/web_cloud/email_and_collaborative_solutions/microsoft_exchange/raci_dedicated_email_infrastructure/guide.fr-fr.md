---
title: Partage de responsabilité du produit infrastructure de messagerie dédiée managée
excerpt: "Modèle de responsabilités entre OVHcloud et le client"
updated: 2024-07-10
---

Le RACI ci-dessous détaille les responsabilités partagées entre OVHcloud et le client pour le produit *Managed Dedicated E-mail Infrastructure* qui correpond à l'offre **Trusted Exchange on OVHcloud**.
Ce modèle de responsabilité peut aider à alléger la charge opérationnelle du client.

## Définition du RACI

| Rôles |
| --- |
| R : Est en charge de la Réalisation du processus |
| A : Approbateur de la réalisation du process |
| C : Est Consulté au cours du processus |
| I : Est Informé des résultats du processus |

### 1. Avant l'abonnement

#### 1.1. Spécifier le service selon vos besoins

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Se rensigner sur les capacités et les limites du service (documentation, conditions d'utilisation) | RA | I |
| Définir le modèle de résilience du produit avant souscription | RA | I |
| Définir et configurer un nom de domaine et disposer d'un domaine pour lequel un certificat SSL sera fourni avant la souscription du service | RA | I |
| Définit la version d'Exchange et l'infrastructure dédiée en support du service | | RA |
| Héberger le service dans l'UE | | RA |

### 2. Disponibilité du service

#### 2.1. Installer le service

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Installer, configurer et livrer les briques fonctionnelles du service | I | RA |
| Fournir les licences de service et le certificat SSL | CI | RA |
| Configurer le certificat SSL après livraison par OVHcloud | A | R |
| Fournir un service préconfiguré avec le nombre demandé d'adresses e-mail qui nécessitent une configuration supplémentaire par le client | I | RA |

#### 2.2. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Choisir un outil de migration pour importer des comptes e-mail depuis un autre service | RA | |

#### 2.3. Paramétrage du système d'information client

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Personnaliser le service en fonction des besoins de l'entreprise (alertes domaine, quota de comptes, nombre de comptes, gestion des alias, définition de la politique de mot de passe, flux d' e-mails, etc) | RA | I |

### 3. Utilisation du service

#### 3.1. Opérations

##### **3.1.1. Opérations quotidiennes**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gestion de la confidentialité et de l’intégrité des données hébergées sur le service | RA | |
| Gérer l'accessibilité du réseau et la disponibilité des données sur le service hébergé suivant les SLA OVHcloud | | RA |
| Gérer les risques liés au service |  | RA |
| Gérer les risques liés au logiciel client utilisé (Outlook, Thunderbird, etc.) | RA | |
| Administrer l’infrastructure de services (serveurs, OS, antivirus, stockage) | | RA |
| Administrer le domaine, les adresses e-mail, les groupes de distribution, un connecteur d'envoi, etc. | RA | IR |
| Gérer les sauvegardes sur le service | | RA |
| Effectuer (en option) une sauvegarde des adresses e-mail à l'aide d'un logiciel tiers | RA | I |

##### **3.1.2. Gestion des accès**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer les accès à l'espace client OVHcloud et à l'infrastructure dédiée en fonction de la politique de contrôle d'accès définie | RA | I |
| Définir et implémenter des protocoles de sécurité en fonction des besoins de l'entreprise (IMAP, POP, MAPI, EWS, SMTP) et de la sécurité associée | I | RA |
| Restreindre l'utilisation des protocoles de sécurité en fonction des besoins de l'entreprise (IMAP, POP, MAPI, EWS, SMTP) et de la sécurité associée | A | R |
| Gérer les accès physiques et logiques aux infrastructures pour les équipes OVHcloud | | RA |

##### **3.1.3. Monitoring **

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Surveiller et gérer les alertes pour le fonctionnement des systèmes en support du service | I | RA |
| Gérer le quota sur les adresses e-mail | RA | |
| Gérer le dimensionnement du matériel sur le service |  | RA |
| Tenir à jour les logs générés par le service |  | RA |

##### **3.1.4. Connectivité **

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Gérer le plan d’adressage IP et les systèmes réseau (architecture, protocoles, trafic réseau et accès au service) | | RA |
| Filtrer les flux réseau | RA | |

##### **3.1.5. Gestion **

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Fournir l'inventaire du service utilisé | I | RA |
| Maintenir en état de fonctionnement et de sécurité le service Exchange | I | RA |
| Renouveler le certificat SSL | A | R |

##### **3.1.6. Continuité d’activité**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Définir et maintenir un plan de continuité et de reprise d’activité en fonction des besoins de l’entreprise | | RA |

#### 3.2. Gestion des évènements

##### **3.2.1. Incidents**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Notifier, qualifier et gérer les incidents sur le service Exchange | I | RA |
| Notifier les incidents sur le service Exchange grâce au système de tickets | RA | I |
| Réaliser la sauvegarde et la récupération | I | RA |

##### **3.2.2. Changements**

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Planifier et déployer des mises à jour et des correctifs sur le service, le système d'exploitation et les logiciels en support du service | | RA |
| Remplacer le matériel défectueux pour prendre en charge le service | | RA |
| Ajouter et supprimer les configurations matérielles et logicielles sur le service Exchange | | RA |

### 4. Réversibilité

#### 4.1. Modèle de réversibilité

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Choisir un outil de migration pour exporter les comptes e-mail de l'ancienne infrastructure | RA | |
| Choisir le format du fichier d'extraction en suivant le logiciel utilisé pour la migration | RA | |

#### 4.2. Récupération des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Définir et planifier les opérations de réversion | RA | I |

### 5. Fin de service

#### 5.1. Effacement de la configuration

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Supprimer les configurations en fin de service suite à la résiliation du contrat | I | RA |

#### 5.2. Effacement des données

| **Activité** | **Client** | **OVHcloud** |
| --- | --- | --- |
| Effacer les données du client | I | RA |

## Aller plus loin

[Toute notre documentation sur les solutions collaboratives Microsoft](/products/web-cloud-email-collaborative-solutions-microsoft-exchange)

Échangez avec notre [communauté d'utilisateurs](/links/community).
