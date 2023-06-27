---
title: "Spécifications de sécurité du service Serveurs Dédiés"
updated: 2023-02-16
---

**Dernière mise à jour le 16/02/2023**

## Objectif

En complément au [modèle de responsabilité entre OVHcloud et le client sur le service Serveurs Dédiés](/pages/account/responsibility-sharing/dedicated-servers), cette fiche a pour objectif de présenter les particularités et fonctions de sécurité propres à ce service. Elle met aussi en avant des bonnes pratiques qui permettront au client de l'exploiter au mieux.

## 1 - Certifications

- ISO/IEC 27001
- ISO/IEC 27701
- ISO/IEC 27017
- ISO/IEC 27018
- HDS
- SOC 1 type 1
- SOC 2 type 1
- CSA type 1
- C5 type 1
- CISPE

## 2 - Bonnes pratiques à déployer sur le service

### 2.1 - Recommandations à la prise en main du service

Une fois le service délivré et après réception des identifiants de connexion à son Serveur Dédié, OVHcloud recommande au client de changer ses identifiants 
et de procéder au durcissement de son système d'exploitation. Des références et guides de durcissement sont présentés dans la section [9.1 Fourniture d'image OS 
et durcissement](#os-images) de cette page.<br>
D'autres guides sont disponibles dans [le corpus documentaire sur les Serveurs Dédiés](/products/bare-metal-cloud-dedicated-servers) pour assister le client à la prise 
en main et l'exploitation du service.

### 2.2 - Scan de vulnérabilités

Le client est autorisé à réaliser des scans de vulnérabilités sur le service qu'il a souscrit chez OVHcloud depuis n'importe quel service. OVHcloud n'a pas besoin 
d'être prévenu préalablement aux tests. Les mesures de sécurité déployées par OVHcloud (notamment les protections réseau) ne sont pas désactivables, à plus forte 
raison dans le cadre de ce type d'audits qui doivent établir une vision claire de la sécurité de l'infrastructure du client.
Le client n'est pas autorisé à utiliser son service pour scanner d'autres infrastructures.

## 3 - Garanties de service

### 3.1 - SLA

Reprise des SLA des conditions particulières par composante du service.

| **Composant** | **SLA** | **Méthode de calcul** | **Dédommagement** |
| --- | --- | --- | --- |
| Serveur Dédié | 99,9% minimum (dépend de la gamme) | Nombre total  de minutes du mois considéré, déduction faite du nombre de minutes d’indisponibilité du mois concerné, le tout divisé par le nombre total de minutes du mois considéré. Pour le calcul des dédommagements, le temps d’indisponibilité est calculé à partir de l’ouverture du ticket incident, jusqu'à la résolution du dysfonctionnement. | Crédit de 5% du coût mensuel des Serveurs Dédiés indisponibles, par tranches de 30 minutes entamées d'indisponibilité au-delà du SLA, dans la limite de 50% dudit coût mensuel. |

### 3.2 - GTI

| **Typologie d'incident** | **Temps d'intervention** | **Temps de rétablissement** | **Dédommagement** |
| --- | --- | --- | --- |
| Incident niveau 1 : indisponibilité totale du service **détectée par OVHcloud** | 1h | 1h à compter du début de l'intervention | Détection de l'incident par OVHcloud | Crédit de 5% du coût mensuel des Serveurs Dédiés indisponibles, par tranches de 30 minutes entamées d'indisponibilité au-delà du SLA, dans la limite de 50% dudit coût mensuel. |
| Incident niveau 1 : indisponibilité totale du service **signalée par le client** | 1h | 1h à compter du début de l'intervention | Création du ticket par le client | Crédit de 5% du coût mensuel des Serveurs Dédiés indisponibles, par tranches de 30 minutes entamées d'indisponibilité au-delà du SLA, dans la limite de 50% dudit coût mensuel. |
| Incident niveau 2 : dégradation substantielle des performances des Serveurs Dédiés | 1h | ∅ | Création du ticket par le client | Crédit de 5% du coût mensuel des Serveurs Dédiés indisponibles, par tranches de 30 minutes entamées d'indisponibilité au-delà du SLA, dans la limite de 50% dudit coût mensuel. |

## 4 - Backups

### 4.1 - Sauvegardes techniques

Les sauvegardes techniques sont les sauvegardes réalisées par OVHcloud pour assurer les niveaux de service prévus au contrat. Ces sauvegardes ne sont pas prévues pour être activées à la demande du client. Ces backups ne contiennent aucune donnée métier déposée par les clients sur leurs propres serveurs dédiés.

Ce sont des sauvegardes de configurations des infrastructures qui permettent de délivrer le service aux clients telles que : configuration des routeurs, configurations vRack, affectation des IP, etc ...

### 4.2 - Sauvegardes métier

Liste des fonctionnalités et options de backups adaptées au service :

| **Nom de l'option** | **Granularité** | **RTO** | **RPO** | **Documentation et tutoriels**|
| --- | --- | --- | --- | --- |
| - FTP backup ou Backup Storage est un espace de stockage de 500Go mis à disposition du client suite à la souscription au service.<br> - Le service doit être activé par le client.<br> - Aucune routine de backup n'est configurée par OVHcloud. | Au choix du client | Dépend du choix du client | N/A | [Utiliser Backup Storage sur un serveur dédié](/pages/cloud/dedicated/services_backup_storage) |
| - Backup Storage est une option de stockage supplémentaire qui permet d'avoir un espace disque supplémentaire pouvant atteindre 10To pour déposer des sauvegardes. | Au choix du client | Dépend du choix du client |  N/A | [Utiliser Backup Storage sur un serveur dédié](/pages/cloud/dedicated/services_backup_storage) |

## 5 - Logs

> [!primary]
> Consultez le guide [Premiers pas avec les API OVHcloud](/pages/account/api/first-steps) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.

| **Source** | **Contenu** | **Liens** |
| --- | --- | --- |
| Control Plane (Espace Client) | Logs sur toutes les interactions réalisées via des appels API, lancés par les contacts administrateur, technique ou de facturation, sur les services auxquels ils ont accès. |- <https://api.ovh.com/console/#/me> (voir les appels `/me/api/logs`)<br>- [List of API calls done with your account](https://api.ovh.com/console/#/me/api/logs/self~GET)<br>- [List of API calls done on services you have access to](https://api.ovh.com/console/#/me/api/logs/services~GET) |
| Service | Liste des tâches lancées sur un serveur donné | [Dedicated Servers ToDos](https://api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/task~GET)|
| Service | Liste des interventions lancées sur un serveur donné | [Technical interventions history](https://api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/intervention~GET) |

Les tâches sont des actions lancées par le client sur un Serveur Dédié : installation de l'OS, redémarrage de l'OS, activation du mode 'rescue', etc ...

Les interventions sont des actions réalisées par les équipes OVHcloud dans les Datacentres sur les serveurs physiques : vérification de l'état de l'équipement, changement de CPU, RAM ou disque défectueux, etc ...

## 6 - API

| **Nom** | **Capacités** | **Liens** |
| --- | --- | --- |
| Control Plane et service | Manipulation des comptes client et des services sur lesquels le compte a des droits de gestion du service | [API calls for Dedicated Servers](https://api.ovh.com/console/#/dedicated/server) |

## 7 - Comptes utilisateurs

### 7.1 - Control Plane

A travers son espace client OVHcloud, le client a la possibilité de gérer le service à l'aide de [trois contacts types](/pages/account/customer/managing_contacts#definition).

Afin de référencer chaque client ayant souscrit à un ou plusieurs services, OVHcloud utilise un compte propriétaire avec un NIC interne. 

Pour renforcer l'accès au compte client, le client a la possibilité d'activer [une authentification à double facteur (2FA)](/pages/account/customer/secure-ovhcloud-account-with-2fa) ou [l'authentification SSO (Single Sign-On)](/products/customer-connect-saml-sso) en associant son compte à un Active Directory externe.

### 7.2 - Data Plane

Une fois le service livré, à l'étape d'installation de l'OS, le client a le choix entre l'[utilisation d'une clé SSH](/pages/cloud/dedicated/creating-ssh-keys-dedicated) (pour les distributions Linux) pour accéder à son serveur où d'un mot de passe unique, généré automatiquement par OVHcloud s'il n'a pas configuré de clé SSH.

Le client est autonome pour créer les comptes utilisateurs sur son OS, une fois qu'il a les droits d'administration sur son serveur.

## 8 - Antivirus

OVHcloud ne prend pas en charge l'installation d'un antivirus lors de l'installation du système d'exploitation.
Le client est responsable du déploiement des mesures de sécurité sur les serveurs dédiés qu'il opère.

## 9 - Services disponibles à l'installation du Service

### 9.1 - Fourniture d'images d'OS et durcissement <a name="os-images"></a>

> [!primary]
> Consultez le guide [Premiers pas avec les API OVHcloud](/pages/account/api/first-steps) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.

OVHcloud met à disposition un catalogue de systèmes d'exploitation et s'engage à fournir des systèmes d'exploitation dont la dernière mise à jour date de moins de 30 jours.

- [Liste des systèmes d'exploitation disponibles chez OVHcloud](https://api.ovh.com/console/#/dedicated/installationTemplate/templateInfos~GET)
- [Liste des systèmes d'exploitation disponibles pour une référence commerciale donnée](https://api.ovh.com/console/#/dedicated/server/osAvailabilities~GET)
- [Liste des systèmes d'exploitation disponibles pour un serveur donné](https://api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/compatibleTemplates~GET)

Le durcissement des systèmes d'exploitation fournis est celui d'une installation nominale de l’éditeur. Pour un durcissement avancé, OVHcloud recommande de se référer aux documentations de chaque éditeur .

| **Editeur** | **Documentation de durcissement** |
| --- | --- |
| Debian | <https://wiki.debian.org/Hardening> |
| Redhat | <https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/security_hardening/overview-of-security-hardening-security-hardening> |
| Ubuntu | <https://ubuntu.com/security/certifications/docs/usg> |
| Windows | <https://docs.microsoft.com/fr-fr/windows/security/threat-protection/windows-security-configuration-framework/windows-security-baselines> |

### 9.2 - Bring Your Own Image

Bring Your Own Image est une fonctionnalité qui permet au client d'importer une image de son choix sur un serveur en dehors du catalogue proposé par OVHcloud. 
Les prérequis et modes d'emploi sont disponibles sur [ce lien](/pages/cloud/dedicated/bring-your-own-image).

### 9.3 - Monitoring OVHcloud

Un service de monitoring est activé par défaut par OVHcloud pour suivre l'état des serveurs des clients, via le protocole ICMP. Le client a la possibilité de suivre l'état de ses propres serveurs ou de désactiver ce service, via son espace client OVHcloud ou via un appel API.

Le client a également la possibilité d'activer la supervision d'autres services réseaux qui sont désactivés par défaut.

Il appartient au client de suivre les guides de durcissement des éditeurs d'OS et de restreindre les flux ICMP au strict nécessaire.

Afin de continuer à bénéficier du service de monitoring OVHcloud, le client doit configurer [des règles de filtrage](/pages/cloud/dedicated/network_ip_monitoring) sur le pare-feu interne de ses serveurs et sélectionner les autres services dont il souhaite suivre l'état.

OVHcloud propose une fonctionnalité appelée [OVHcloud Link Aggrégation](/pages/cloud/dedicated/ola-enable-manager) qui peut être activée par le client et qui lui permet de bénéficier d'un réseau privé à haut débit et redondé pour ses Serveurs Dédiés.

Si le client active cette fonctionnalité, le monitoring réalisé par OVHcloud sera désactivé.

## 10 - Réversibilité

Afin d'assurer la portabilité et la réversibilité des données sur le service, OVHcloud permet au client d'exporter et importer ses données en toute autonomie.
Les principe de portabilité d'OVHcloud sont décrits dans sa propre [politique de portabilité](/pages/account/reversibility/00-global-reversibility-policy) et ceux spécifiques au service Serveurs Dédiés sont indiqués dans sa [politique spécifique](/pages/account/reversibility/01-dedicated-servers-reversibility-policy).

### 10.1 - Effacement des données métier

Suite au décommissionnement du service par le client et avant l'extraction du disque dur du rack, un robot d'effacement applique une procédure d'effacement sécurisé des données basée sur le standard NIST SP 800-88 r1 niveau 'Purge'.
En cas de contraintes ou limitations techniques sur certaines gammes de disques durs et quand le niveau 'Purge' ne peut s'appliquer, c'est l'effacement au niveau 'Clear' qui s'exécute.

### 10.2 - Effacement des données techniques

Suite au décommissionnement du service par le client, OVHcloud procède à la libération des ressources qui lui sont allouées, comme les adresses IP et la suppression des configurations réalisées lors de la livraison du service.

## 11. Représentation normalisée HDS

- **Administrateur de la sécurité** : OVHcloud
- **Acteur de service** :

| **Code** | **Identité** | **Rôle** |
| --- | --- | --- |
| OVHcloud | OVHcloud | Opérateur de l'offre certifiée HDS |

**Instances des données de santé** :

| **Code** | **Description** | **Acteur** |
| --- | --- | --- |
| RBX1 | Datacenter Roubaix 1 (FR) | OVHcloud |
| RBX2 | Datacenter Roubaix 2 (FR) | OVHcloud |
| RBX4 | Datacenter Roubaix 4 (FR) | OVHcloud |
| RBX356 | Datacenter Roubaix 3-5-6 (FR) | OVHcloud |
| RBX7 | Datacenter Roubaix 7 (FR) | OVHcloud |
| RBX8 | Datacenter Roubaix 8 (FR) | OVHcloud |
| RBX8(SNC) | Zone SecNumCloud du datacenter Roubaix 8 (FR) | OVHcloud |
| GRA | Gravelines (FR) | OVHcloud |
| SBG3 | Datacenter Strasbourg 3 (FR) | OVHcloud |
| SBG3(SNC) | Zone SecNumCloud du datacenter Strasbourg 3 (FR | OVHcloud |
| SBG4 | Datacenter Strasbourg 4 (FR) | OVHcloud |
| SBG5 | Datacenter Strasbourg 5 (FR) | OVHcloud |
| SBG5(SNC) | Datacenter Strasbourg 5 (FR) | OVHcloud |
| BHS | Datacenter Beauharnois (CA) | OVHcloud |
| ERI | Datacenter Erith (UK) | OVHcloud |
| LIM | Datacenter Limburg (DE) | OVHcloud |
| WAW | Datacenter Ozarow (PL) | OVHcloud |

**Conformité de la prise en compte des objectifs de sécurité** :

![TAB](images/spec_HDS.PNG){.thumbnail}

**Commentaires :**

- Le client choisit les instances (lieux) sur lesquelles il déploie ses serveurs d'hébergement de données de santé. Si le client souhaite déployer sur plusieurs instances (lieux), il devra souscrire plusieurs fois au service.
- Objectif B : OVHcloud a pris en compte les risques relatifs à la réallocation des espaces de stockage de ses offres. La copie de données de santé à caractère personnel sur des supports portables est interdite chez OVHcloud. La matérialisation de données de santé à caractère personnel sous format papier ne fait pas partie de la prestation. OVHcloud n'a pas accès au service numérique en santé dans le cadre de cette offre.
- Objectif C : Dans le cadre de cette offre, OVHcloud fournit exclusivement un matériel informatique conforme à la commande du client. Le client opère ce matériel en complète autonomie. Par conséquent, les flux réseau sont complètement opérés par le client, sans aucune intervention d'OVHcloud. C'est la raison pour laquelle cet objectif n'est pas adressé dans le tableau ci-dessus.
- Objectif D : Dans le cadre de cette offre, OVHcloud ne maîtrise que l'interface de gestion de l'offre (espace client OVHcloud) et la fourniture du premier code administrateur du matériel. Le client doit respecter le reste des attentes formalisées dans cet objectif. Nous recommandons au client de mettre en œuvre un système robuste de gestion des accès pour l'ensemble de ses accès métiers.
- Objectif F : OVHcloud répond à cet objectif de sécurité dans la limite de sa capacité à agir sur le matériel mis à disposition du client. Nous recommandons au client de mettre en œuvre des processus de maintien en conditions opérationnelles et de sécurité de son matériel à l'état de l'art.

