---
title: "Spécification sécurité du service Serveurs Dédiés "
slug: specifications-securite-serveurs-dedies
section: Specifications sécurité des services
updated: 2023-02-14
---

**Dernière mise à jour le 14/02/2023**

## Objectifs
En complément [au modèle de responsabilité entre OVHcloud et le client sur le service Serveurs Dédiés](https://docs.ovh.com/fr/partage-responsabilite/raci-serveurs-dedies/), cette fiche a pour objectif de présenter les particularités 
et fonctions sécurité propres à celui-ci.
Elle met aussi en avant des bonnes pratiques qui permettront au client de l'exploiter au mieux.

## 1. Certifications :
* ISO/IEC 27001 
* ISO/IEC 27701 
* ISO/IEC 27017 
* ISO/IEC 27018 
* HDS 
* SOC 1 type 1 
* SOC 2 type 1 
* CSA type 1 
* C5 type 1 
* CISPE

## 2. Bonnes pratiques à déployer sur le service
### a. Recommandations à la prise en main du service
Une fois le service délivrée et après réception de ses identifiants de connexion à son Serveur Dédié, OVHcloud recommande au client de changer ses identifiants 
et de procéder au durcissement de son Système d'Exploitation. Des références et guides de durcissement sont présentés dans la section 8.a Fourniture d'image OS 
et durcissement.
D'autres guides sont disponibles dans [le corpus documentaire sur les Serveurs Dédiés](https://docs.ovh.com/fr/dedicated/) pour assister le client à la prise 
en main et l'exploitation du service.

### b. Scan de vulnérabilités
Le client est autorisé à réaliser des scans de vulnérabilités sur le service qu'il a souscrit chez OVHcloud depuis n'importe quel service. OVHcloud n'a pas besoin 
d'être prévenu préalablement aux tests. Les mesures de sécurité déployées par OVHcloud (notamment les protections réseau) ne sont pas désactivables, à plus forte 
raison dans le cadre de ce type d'audits qui doivent établir une vision claire de la sécurité de l'infrastructure du client.
Le client n'est pas autorisé à utiliser son service pour scanner d'autres infrastructures.

## 3. Garanties de service
### a. SLA
Reprise des SLA des conditions particulières par composante du service.
| **Composant** | **SLA** | **Méthode de calcul** | **Dédommagement** |
| --- | --- | --- | --- |
| Serveur Dédié | 99,9% minimum (dépends de la gamme) | Nombre total  de minutes du mois considéré déduction faite du nombre de minutes d’Indisponibilité du mois concerné, le tout divisé par le nombre total de minutes du mois considéré. Pour le calcul des dédommagements, le temps d’indisponibilité est calculé à partir de l’ouverture du ticket incident, jusqu'à la résolution du dysfonctionnement. | Crédit de 5% du coût mensuel des Serveurs Dédiés indisponibles, par tranche de 30 minutes entamées d'indisponibilité au-delà du SLA, dans la limite de 50% dudit coût mensuel. |

### b. GTI
| **Typologie d'incident** | **temps d'intervention** | **Temps de rétablissement** | **Dédommagement** |
| --- | --- | --- | --- |
| Incident niveau 1 : indisponibilité totale du service **détecté par OVHcloud** | 1h | 1h à compter du début de l'intervention | Détection de l'incident par OVHcloud |  Crédit de 5% du coût mensuel des Serveurs Dédiés indisponibles, par tranche de 30 minutes entamées d'indisponibilité au-delà du SLA, dans la limite de 50% dudit coût mensuel. |
| Incident niveau 1 : indisponibilité totale du service **signalé par le client** | 1h | 1h à compter du début de l'intervention | Création du ticket par le client | Crédit de 5% du coût mensuel des Serveurs Dédiés indisponibles, par tranche de 30 minutes entamées d'indisponibilité au-delà du SLA, dans la limite de 50% dudit coût mensuel. |
| Incident niveau 2 : dégradation substantielle des performances des Serveurs Dédiés | 1h | ∅ | Création du ticket par le client | Crédit de 5% du coût mensuel des Serveurs Dédiés indisponibles, par tranche de 30 minutes entamées d'indisponibilité au-delà du SLA, dans la limite de 50% dudit coût mensuel. |

## 4. Backups
### a. techniques
Les sauvegardes techniques sont les sauvegardes réalisées par OVHcloud pour assurer les niveaux de service prévus au contrat. Ces sauvegardes ne sont pas prévues pour être activées à la demande du client. Ces backups ne contiennent aucune donnée métier déposée par les clients sur leurs propres serveurs dédiés.

Ce sont des sauvegardes de configurations des infrastructures qui permettent de délivrer le service  aux clients telles que telles que : configuration des routeurs, configurations vRack, affectation des IP, ...

### b. Métier
Liste des fonctionnalités et options de backups adaptées au service.
| **Nom de l'option** | **Granularité** | **RTO** | **RPO** | **Documentation et tutoriels**|
| --- | --- | --- | --- | --- |
| -FTP backup ou Backup Storage est un espace de stockage de 500Go mis à disposition du client suite à la sousciption au service.        -Le service doit être activé par le client.            -Aucune routine de backup n'est configurée par OVHcloud. | Au choix du client | Dépend du choix du client | NA | https://docs.OVHcloud.com/fr/dedicated/services-backup-storage/#ftpftps |
| -Backup Storage est une option de stockage supplémentaire, , qui permet d'avoir un espace disque supplémentaire pouvant atteindre 10To pour déposer des sauvegardes. | Au choix du client | dépend du choix du client | NA | https://docs.OVHcloud.com/fr/dedicated/services-backup-storage/#ftpftps |

## 5. Logs
| **Source** | **Contenu** | **Liens** |
| --- | --- | --- |
| Control Plane (Espace Client) | Logs sur toutes les les interactions réalisées via des appels d'API lancées par les contacts admin, technique ou de facturation et services auxquels ils ont accès. | https://api.OVHcloud.com/console/#/me , voir/me/api/logs , [List of Api calls done with your account](https://api.ovh.com/console/#/me/api/logs/self~GET),  [List of Api calls done on services you have access to](https://api.ovh.com/console/#/me/api/logs/services~GET) |
| Service | Liste des taches lancées sur un serveur donné | https://api.OVHcloud.com/console/#/dedicated/server/%7BserviceName%7D/task~GET |
| Service | Liste des interventions lancées sur un serveur donné | https://api.OVHcloud.com/console/#/dedicated/server/%7BserviceName%7D/intervention~GET |

Les tâches sont des actions lancées par le client sur un Serveur Dédié : Installation de l'OS, redémarrage de l'OS, activation du mode 'rescue', ...

Les interventions sont des actions réalisées par les équipes OVHcloud dans les Datacentres sur les serveurs physiques : vérification de l'état de équipement ou changement de CPU, RAM ou disque défectueux ...

## 6. API
| **Nom** | **Capacités** | **Liens** |
| --- | --- | --- |
| Control Plane et service | Manipulation des comptes client et des services sur lesquels le compte a des droits de management du service du service | https://api.OVHcloud.com/console/#/dedicated/seed/servverconsole/#/dedicr |

## 7. Comptes utilisateurs
### a. Control Plane
A travers sont espace client OVHcloud, le client a la possibilité de gérer le service à l'aide de [trois contacts types](https://docs.ovh.com/fr/customer/gestion-des-contacts/#definition).
Afin de référencer chaque client ayant souscrit à un ou plusieurs services, OVHcloud utilise un compte propriétaire avec un NIC interne. 
Pour renforcer l'accès au compte client, le client a la possibilité d'activer [une authentification à double facteurs (2FA)](https://docs.ovh.com/fr/customer/securiser-son-compte-avec-une-2FA/) ou [l'authentification SSO (Single Sign-On)](https://docs.ovh.com/fr/customer/connect-saml-sso/) en associant son compte à un active Directory externe.

### b. Data Plane
Une fois le service livré, à l'étape d'installation de l'OS, le client a le choix entre l'[utilisation d'une clé SSH](https://docs.ovh.com/fr/dedicated/creer-cle-ssh-serveur-dediees/) (pour les distributions Linux) pour accéder à son serveur où d'un le mot de passe unique, généré automatiquement par OVHcloud s'il n'a pas configuré de clé SSH. 
Le client est autonome pour créer les comptes utilisateurs sur son OS, une fois qu'il a les droits d'administrations sur son serveur.

## 8. Anti-virus
OVHcloud ne prend pas en charge l'installation d'un anti-virus lors de l'installation du système d'exploitation.
Le client est responsable du déploiement des mesures de sécurité sur les serveurs dédiés qu'il opère.

## 9. Services disponibles à l'installation du Service
### a. Fourniture d'images d'OS et durcissement
OVHcloud met à disposition un catalogue de systèmes d'exploitation et s'engage à fournir des systèmes d'exploitation dont la dernière mise à jour date de moins de 30 jours.

Liste des systèmes d'exploitation disponibles chez OVHcloud: https://api.OVHcloud.com/console/#/dedicated/installationTemplate/templateInfos~GET

Liste des systèmes d'exploitation disponibles pour une référence commerciale donnée : https://api.OVHcloud.com/console/#/dedicated/server/osAvailabilities~GET

Liste des systèmes d'exploitation disponibles pour un serveur donné : https://api.OVHcloud.com/console/#/dedicated/server/%7BserviceName%7D/install/compatibleTemplates~GET

Le durcissement des systèmes d'exploitation fourni est celui d'une installation nominale de l’éditeur, pour un durcissement avancé, OVHcloud recommande de se référer aux documentations de chaque éditeur .

| **Editeur** | **Documentation de durcissement** |
| Debian | https://wiki.debian.org/Hardening |
| Redhat | https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/security_hardening/overview-of-security-hardening-security-hardening |
| Ubuntu | https://ubuntu.com/security/certifications/docs/usg |
| Windows | https://docs.microsoft.com/fr-fr/windows/security/threat-protection/windows-security-configuration-framework/windows-security-baselines |

### b. Bring Your Own Image



### c. Monitoring OVHcloud


## 10. Réversibilité


### a. Effacement des données métier

### b. Effacement des données techniques



## 11. Représentation normalisée HDS

























