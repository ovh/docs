---
title: Présentation du service OVHcloud Load Balancer
excerpt: Découvrez la solution OVHcloud Load Balancer pour distribuer et sécuriser votre trafic
updated: 2025-10-29
---

## Objectif

Le **Load Balancer OVHcloud** est un service entièrement managé, conçu pour garantir la haute disponibilité, les performances et la scalabilité de vos applications.
Son rôle principal est de distribuer la charge de travail entre différents serveurs ou applications.
Il vous suffit de configurer vos services derrière le Load Balancer — OVHcloud prend en charge la redondance, la sécurité et la distribution mondiale du trafic.

## Prérequis

- Être connecté à l’[espace client OVHcloud](/links/manager)
- Au moins un service à équilibrer (Serveur Dédié, VPS, instance Public Cloud, etc.)

## En pratique

Le Load Balancer s’appuie sur des **technologies open source de référence** pour gérer différents types de trafic :

| Type | Description | Avantages | Technologie |
|---|---|---|---|
| HTTP/HTTPS | Tous les services web et API | Optimisé pour le traitement L7 (couche applicative), redirection d’URL, en-têtes, ACLs | HAProxy |
| TCP | Services réseau non-HTTP | Compatible avec toutes les applications TCP | HAProxy |
| UDP | Tout trafic UDP | Compatible avec toutes les applications UDP | Nginx |

### Fonctionnalités principales

- **Protection anti-DDoS intégrée** pour tous les types de trafic
- **Réseau Anycast mondial** pour une latence optimisée et un basculement automatique
- **Support avancé HTTP/HTTPS** : redirections, en-têtes, ACLs, etc.
- **Compatibilité avec les IP supplémentaires et le vRack** : améliorez la disponibilité et les performances grâce au réseau avancé
- **Haute disponibilité** : instances redondantes isolées pour assurer la résilience
- **Scalabilité** : ajoutez ou retirez des serveurs et des fermes sans interruption de service

### Vue d’ensemble de l’architecture

Le Load Balancer est constitué de trois composants principaux :

| Composant | Fonction |
|---|---|
| **Front-end** | Définit le protocole d’entrée (HTTP/TCP/UDP) et le port d’écoute |
| **Ferme** | Répartit le trafic en provenance du front-end entre les serveurs |
| **Serveur** | Taite le trafic applicatif entrant et sortant |

![Schéma général](images/diag_gen2025.png){.thumbnail}

## Avantages

### Répartir et scaler sans interruption

Répartissez les charges entre plusieurs serveurs et augmentez horizontalement vos ressources sans interruption de service.

![Répartition de charge](images/distribute_load2025.png){.thumbnail}

### Haute disponibilité et continuité de service

Des sondes automatiques détectent les serveurs non réactifs et redirigent instantanément le trafic, minimisant ainsi les interruptions.

![Haute disponibilité](images/eliminate_downtimes2025.png){.thumbnail}

### Maintenance simplifiée

Mettez une ferme ou un serveur en mode maintenance sans impacter les utilisateurs, puis réintégrez-le facilement après intervention.

![Maintenance simplifiée](images/facilitate_maintenance2025.png){.thumbnail}

### Intégration avec les services OVHcloud

Combinez facilement le Load Balancer avec d’autres services OVHcloud :

- Instances Public Cloud
- VPS
- Serveurs Dédiés
- Réseau privé vRack

![Combiner vos services](images/mix_and_match2025.png){.thumbnail}

### Distribution géographique (Anycast)

Fournissez un service à vos utilisateurs partout dans le monde avec une faible latence et un routage résilient.

![Anycast](images/anycast2025.png){.thumbnail}

### Cas d’usage variés

Prenez en charge de multiples services via du trafic HTTP(S), TCP et UDP.

#### Serveurs de messagerie

Équilibrez la charge entre vos serveurs de messagerie.

![Mail](images/mail2025.png){.thumbnail}

#### Bases de données

Équilibrez vos bases de données et rendez-les redondantes.

![Bases de données](images/database2025.png){.thumbnail}

## Pour aller plus loin

- [En apprendre plus sur la répartition de charge (Wikipedia)](https://fr.wikipedia.org/wiki/R%C3%A9partition_de_charge)  
- [Site officiel HAProxy](http://www.haproxy.org/#desc)
- [Documentation Nginx](https://nginx.org/en/docs/)

Rejoignez notre [communauté d’utilisateurs](/links/community).