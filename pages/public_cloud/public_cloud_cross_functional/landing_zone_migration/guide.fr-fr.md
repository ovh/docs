---
title: "Architectures de référence - Créer une Landing Zone avec OVHcloud Public Cloud"
excerpt: "Guide pratique pour concevoir une Landing Zone sécurisée et évolutive sur le Public Cloud OVHcloud, couvrant la mise en réseau, l'IAM, les sauvegardes, etc."
updated: 2025-08-25
---

## Objectif

Ce guide aide les utilisateurs du Public Cloud d'OVHcloud à concevoir et déployer une Landing Zone sécurisée et évolutive en présentant les composants clés et les meilleures pratiques.

Il couvre la configuration réseau de base (vRack, sous-réseaux, passerelles, adresses Floating IP), la gestion du trafic (load balancer) et les couches de sécurité (pare-feu, WAAP, Bastion).

Il comprend également des conseils sur le choix de l'infrastructure, l'IAM, les sauvegardes, le logging, la connectivité privée et le contrôle des coûts, offrant ainsi une base claire pour des environnements cloud prêts pour la production.

## Prérequis

- Être connecté à [l'espace client OVHcloud](/links/manager).
- [Avoir configuré les variables d'environnement OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables).
- Être familier de [Terraform](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform), si vous avez l'intention de l'utiliser.
- Compréhension de base des [concepts de réseau cloud](/links/public-cloud/network) (par exemple, sous-réseaux, gateways, adresses Floating IP).

## En pratique

Pour vous aider à concevoir une infrastructure cloud sécurisée, évolutive et prête pour la production, le diagramme suivant illustre les étapes clés de la création d'une Landing Zone sur le Public Cloud d'OVHcloud :

![Landing zone architecture diagram](images/landing_zone_architecture.png){.thumbnail}

Chaque étape numérotée correspond à un composant ou à une action du processus de configuration. Vous trouverez ci-dessous des explications détaillées pour chacune d'entre elles :

### 0. Configuration du vRack

Un vRack (Virtual Rack) est le composant fondamental qui permet la mise en réseau privée entre les ressources.

Lorsque vous créez un projet Public Cloud, OVHcloud vous provisionne automatiquement un vRack. Cette couche virtuelle isole vos communications internes et permet des interconnexions sécurisées entre les services (instances, bases de données, gateways, etc.) à travers les régions et même entre différents services OVHcloud (Bare Metal, Hosted Private Cloud).

Vous utiliserez le vRack pour attacher tous les sous-réseaux privés et connecter de manière sécurisée les services publics et privés.

### 1. Créer un sous-réseau privé

À l'intérieur du vRack, définissez des sous-réseaux privés pour segmenter votre réseau. Par exemple, vous pouvez avoir des sous-réseaux distincts pour le frontend, le backend, les bases de données et les bastions.

- Les sous-réseaux peuvent être créés dans différentes régions.
- Choisissez des blocs CIDR appropriés pour éviter les chevauchements et faciliter les évolutions futures.
- Les sous-réseaux peuvent être de couche 2 (plats) ou de couche 3 (routés avec gateway).

La création de sous-réseaux s'effectue depuis l'espace client OVHcloud, via l'API OpenStack ou à l'aide de Terraform.

### 2. Configurer une Gateway

Pour activer la communication sortante ou inter-zones pour votre sous-réseau privé, configurez une gateway réseau pour le Public Cloud. Elle agit comme un dispositif NAT pour permettre le trafic depuis votre sous-réseau privé vers Internet ou d'autres ressources publiques.

- Requise pour le téléchargement de paquets, les appels API externes, etc.
- Vous pouvez acheminer le trafic via la gateway vers un pare-feu ou un WAAP si nécessaire.
- Chaque gateway est régionale et ne connecte que les sous-réseaux de cette région.

Suivez [ce guide](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) pour configurer une gateway.

### 3. Attribuer des adresses Floating IP

Une adresse Floating IP est une adresse IP publique que vous pouvez associer à une ressource (généralement une instance ou un load balancer) au sein d'un réseau privé.

Exemples d'utilisation :

- Exposition d'une seule machine virtuelle pour l'accès SSH (par exemple, pour un bastion)
- Applications publiques hébergées dans un sous-réseau privé
- Failover et migration entre zones

Utilisez les adresses Floating IP pour exposer en toute sécurité certaines ressources privées (par exemple, des instances, des services) à l'Internet public. Suivez [ce guide](/pages/public_cloud/public_cloud_network_services/getting-started-03-attach-floating-ip-to-instance) pour associer une adresse Floating IP.

### 4. Configurer un Load Balancer

Un Load Balancer OVHcloud vous permet de répartir le trafic entre plusieurs instances backend situées dans différentes zones de disponibilité.

- Choisissez le mode de répartition de charge : HTTP(S), TCP ou passthrough.
- Prend en charge les health checks, la terminaison SSL et les sessions persistantes.
- Intégré aux adresses Floating IP pour une exposition publique ou une utilisation privée.

Ceci est essentiel pour créer des applications hautement disponibles et répartir intelligemment la charge.

Suivez [ce guide](/pages/public_cloud/public_cloud_network_services/getting-started-01-create-lb-service) pour configurer et utiliser un Load Balancer.

### 5. Mettre en œuvre des règles de pare-feu

Bien qu'OVHcloud ne fournisse pas de pare-feu intégré en tant que service, vous pouvez :

- Utiliser des groupes de sécurité sur chaque instance (similaire à AWS)
- Déployer un pare-feu virtuel tiers tel que Stormshield dans votre vRack
- Les solutions de pare-feu doivent inspecter le trafic nord-sud (entrant/sortant) et est-ouest (interne) le cas échéant.

Suivez [ce guide](/pages/public_cloud/public_cloud_network_services/tutorial-stormshield_network_security_vrack) pour configurer et utiliser un pare-feu Stormshield.

### 6. Ajouter la protection WAAP

Pour protéger vos applications web et API, déployez un service de protection des applications web et API (WAAP) tel qu'Ubika.

- Protège contre les attaques DDoS, les injections SQL, les XSS et les 10 principales menaces OWASP
- Offre une gestion des bots, un WAF, une gateway API et une limitation du débit
- Peut être inséré de manière transparente entre votre Load Balancer et vos services backend

Suivez [ce guide](/pages/public_cloud/public_cloud_network_services/tutorial-ubika_vrack) pour déployer une protection WAAP avec Ubika.

### 7. Configurer un hôte Bastion

Un Bastion est un point d’accès sécurisé pour gérer les instances situées dans des sous-réseaux privés. OVHcloud fournit à cet effet un outil bastion open-source renforcé et audité.

Utilisez-le pour :

- Appliquer un accès SSH sécurisé et audité
- Définir des autorisations utilisateur affinées (LDAP, AD, IAM)
- Monitorer les logs d'accès et la relecture de session

Voir [documentation sur Bastion](https://ovh.github.io/the-bastion/index.html) sur notre compte GitHub.

### 8. Activer la connectivité privée (OCC)

Si vous avez besoin de connecter votre infrastructure sur site ou d'autres services OVHcloud de manière sécurisée à la Landing Zone, utilisez OVHcloud Connect (OCC).

- Liaison dédiée de couche 2 ou de couche 3 entre votre site et les POP OVHcloud
- Contourne l'Internet public, idéal pour les applications sensibles à la conformité et à la latence
- Intégré au vRack

Consultez [cette documentation](/pages/network/ovhcloud_connect/occ-direct-control-panel).

### 9. Déployez votre infrastructure

Une fois le réseau et la sécurité mis en place, déployez vos services principaux :

- Compute : instances Public Cloud (GP/CPU/GPU)
- Containers : Managed Kubernetes Service
- Stockage :
    - Block storage (via volumes)
    - Object Storage (compatible S3<sup>1</sup>)
    - Public Cloud File Storage (NFSv4)
- Databases: MongoDB, PostgreSQL, MySQL, Kafka managés

Ces services peuvent être gérés à l'aide de l'espace client OVHcloud, de l'interface CLI OpenStack ou de Terraform.

### 10. Configurer la gestion des identités et des accès (IAM)

L'IAM est essentiel pour définir qui peut accéder à quoi et dans quelles conditions. Avec OVHcloud IAM, vous pouvez :

- Créer et attribuer des rôles et des politiques par utilisateur/groupe
- Intégrer SAML, OIDC ou utiliser l'IAM natif
- Isoler l'accès par projet, service ou région

Consultez la [documentation associée](/pages/public_cloud/public_cloud_cross_functional/securing_and_structuring_projects).

### 11. Définir les politiques de sauvegarde

Assurez la continuité de vos activités en protégeant vos données et workloads critiques :

- Snapshots : idéaux pour les restaurations à court terme ou les sauvegardes avant mise à jour
- Sauvegardes d'instances : images complètes pour la restauration ou le clonage
- Veeam Enterprise : disponible pour les workflows avancés de sauvegarde/restauration

Définissez une stratégie de sauvegarde alignée sur vos objectifs RPO (Recovery Point Objective) et RTO (Recovery Time Objective).

### 12. Centralisez les logs avec Logs Data Platform

Logs Data Platform (LDP) vous permet de :

- Agréger les logs provenant des applications, des systèmes et des périphériques réseau
- Créer des tableaux de bord et des alertes (compatibles avec Kibana et Grafana)
- Conserver les logs en fonction des exigences de conformité (RGPD, ISO 27001, etc.)

Ceci est essentiel pour l'observabilité, les audits de sécurité et le dépannage. Suivez [cette documentation](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

### 13. Mettre en œuvre le contrôle et le suivi des coûts

Maîtrisez vos dépenses cloud grâce à :

- Des alertes budgétaires et des tableaux de bord de consommation
- Un accès API aux rapports d'utilisation des coûts
- Un suivi quotidien/horaire des ressources

Utilisez les tags, les rôles IAM et les alertes pour associer les coûts aux équipes, aux environnements ou aux services. Pour plus d'informations, consultez [cette documentation](/pages/public_cloud/public_cloud_cross_functional/analyze_billing).

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Rejoignez notre [communauté d'utilisateurs](/links/community) et visitez notre [canal Discord](https://discord.gg/ovhcloud).

_<sup>1</sup>: S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit._