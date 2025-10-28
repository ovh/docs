---
title: "OKMS - Aperçu de l'architecture"
excerpt: "Découvrez comment nous gérons la sécurité de l'infrastructure OKMS"
updated: 2025-10-24
---

## Objectif

Ce guide explique comment nous gérons la résilience du service de gestion de clés KMS (*Key Management Service*) et du Secret Manager OVHcloud.

## En pratique

L’architecture OKMS poursuit trois objectifs principaux :

- **Confidentialité** : vous assurer que personne d'autre que vous ne puisse accéder à votre clé.
- **Disponibilité** : vous offrir un haut niveau de résilience et donc une haute disponibilité.
- **Intégrité** : vous assurer que les clés ne peuvent pas être perdues ou altérées.

### Gestion des accès

L’accès aux clés est contrôlé par l'[IAM OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui).
Seuls les utilisateurs autorisés par une stratégie IAM peuvent gérer les clés ou les utiliser pour chiffrer ou signer des données.

Même les employés OVHcloud n’ont pas accès à vos clés.

### Architecture OKMS

Chaque région OKMS est complètement indépendante des autres régions et utilise des ressources dédiées.

#### Régions 1-AZ

L'architecture d'une région mono-AZ repose sur deux zones situées dans des bâtiments distincts au sein d'un ou de plusieurs centres de données d'une même région, où les serveurs sont répartis.

Pour accroître la résilience des régions 1-AZ, un serveur de base de données réplica est déployé dans une région voisine. La réplication vers la région distante peut prendre quelques secondes de plus que la réplication vers la région principale.

![Présentation de l'architecture](images/KMS_Overview_1AZ.png){.thumbnail}

#### Régions 3-AZ

Pour les régions 3-AZ, l'architecture mono-AZ est dupliquée sur les 3 zones de disponiblité.

![Architecture overview](images/KMS_Overview_3AZ.png){.thumbnail}

### Emplacement des composants KMS

Chaque région OKMS se compose de plusieurs hôtes dans une seule région OVHcloud.

Ces hôtes sont partitionnés en deux zones différentes, de sorte qu'une panne matérielle unique rendant les deux zones indisponibles en même temps est aussi peu probable que possible.

#### Résilience des données

- **Réplication de base de données**

Le service de gestion de clés ne renvoie pas d'état de réussite pour les opérations d'écriture (par exemple, la création ou l'importation de matériel de clé), sauf si les données ont été répliquées avec succès dans au moins deux bases de données (la principale et le réplica synchrone). Cela permet de s'assurer qu'en cas de perte de l'une des bases de données, aucune donnée ne sera perdue.

Un système d'auto-basculement est également en place pour réassigner automatiquement la base de données dans le cas où la base principale ou le réplica synchrone ne serait plus disponible. Ainsi, la perte d’une seule base de données parmi les trois n’entraîne aucune interruption de service, hormis durant la courte phase de basculement (environ une minute).

Néanmoins, si deux zones ou deux bases de données ne sont plus disponibles simultanément, le service OKMS bascule en mode lecture seule : toutes les opérations d’écriture (création de clés, gestion de secrets, mise à jour de métadonnées, etc.) échouent. Les clés existantes restent disponibles pour les opérations cryptographiques, et les secrets restent accessibles.

- **Sauvegarde de base de données**

Des sauvegardes incrémentales régulières sont effectuées toutes les 5 minutes maximum, et un backup complet est réalisé quotidiennement. Chaque sauvegarde est stockée dans deux régions différentes.
Ces sauvegardes sont conservées pendant 30 jours.

#### Sécurité des données

Toutes les données des clients sont toujours stockées chiffrées dans les bases de données, et les sauvegardes sont elles-mêmes chiffrées.

#### Emplacement de sauvegarde

L'emplacement de la sauvegarde dépend de l'emplacement du service OKMS.

- **EU-WEST-RBX**
    - KMS Backup Region 1 : EU-WEST-SBG
    - KMS Backup Region 2 : EU-WEST-GRA
- **EU-WEST-SBG**
    - KMS Backup Region 1 : EU-WEST-RBX
    - KMS Backup Region 2 : EU-WEST-GRA
- **EU-WEST-PAR**
    - KMS Backup Region 1 : EU-WEST-GRA
    - KMS Backup Region 2 : EU-WEST-SBG
- **EU-WEST-GRA**
    - KMS Backup Region 1 : EU-WEST-GRA
    - KMS Backup Region 2 : EU-WEST-RBX
- **EU-WEST-LIM**
    - KMS Backup Region 1 : EU-WEST-LIM
    - KMS Backup Region 2 : EU-WEST-SBG
- **EU-SOUTH-MIL**
    - KMS Backup Region 1 : EU-WEST-GRA
    - KMS Backup Region 2 : EU-WEST-SBG
- **CA-EAST-BHS**
    - KMS Backup Region 1 : CA-EAST-BHS
    - KMS Backup Region 2 : CA-EAST-TOR
- **CA-EAST-TOR**
    - KMS Backup Region 1 : CA-EAST-BHS
    - KMS Backup Region 2 : CA-EAST-TOR
- **AP-SOUTHEAST-SGP**
    - KMS Backup Region 1 : AP-SOUTHEAST-SGP
    - KMS Backup Region 2 : AP-SOUTHEAST-SYD
- **AP-SOUTHEAST-SYD**
    - KMS Backup Region 1 : AP-SOUTHEAST-SGP
    - KMS Backup Region 2 : AP-SOUTHEAST-SYD

### Scénarios d'incidents

#### Que se passe-t-il en cas de perte d’un hôte dans une zone ?

Les clés restent disponibles et le trafic est redirigé vers une autre zone.
Les demandes en cours de traitement peuvent expirer ou retourner des erreurs, en fonction de l'hôte affecté.

#### Que se passe-t-il en cas de perte d’une zone ?

Les clés restent disponibles et le trafic est redirigé vers une autre zone.
Les demandes en cours de traitement peuvent expirer ou retourner des erreurs.

#### Que se passe-t-il en cas de perte d'une région ?

Les régions 3-AZ sont conçues pour pallier ce scénario, néanmoins celui-ci peut apparaître sur les régions 1-AZ.

Dans ce cas, les clés créées au cours des dernières secondes peuvent être perdues et le service OKMS devient indisponible.

La réplication de la base de données sera utilisée lors de la reconstruction de la région pour récupérer les clés stockées.

## Certification PCI-DSS

Les régions concernées par la certification PCI-DSS sont :

- EU-WEST-RBX
- EU-WEST-SBG
- EU-WEST-GRA
- EU-WEST-LIM
- CA-EAST-BHS

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).