---
title: 'Comprendre les Landing Zones'
excerpt: 'Landing Zones – Tout ce que vous devez savoir pour créer une infrastructure cloud sécurisée et évolutive'
updated: 2025-09-02
---

## Objectifs

Ce guide vous aidera à comprendre les concepts et l'utilisation des Landing Zones : comment elles fournissent les bases en matière de gouvernance, de sécurité, de mise en réseau et d'identité pour vos projets Public Cloud OVHcloud.

## Qu'est ce qu'une Landing Zone ?

S'inspirant de l'exploration spatiale, la Landing Zone est comparable au site d'atterrissage d'un vaisseau spatial, une base sécurisée à partir de laquelle une mission (application ou service) peut exploiter toute l'infrastructure dont elle a besoin pour se déployer.

Dans le contexte des services cloud, il s'agit d'un environnement cloud préconfiguré qui fournit une infrastructure sécurisée, évolutive et conforme pour l'exécution de vos charges de travail. Il garantit que toutes les configurations nécessaires en matière de sécurité, de gouvernance et de réseau sont correctement mises en place avant le déploiement des applications ou des services.

Avantages d'une Landing Zone :

- Simplifie la migration vers le cloud grâce à des environnements standardisés.
- Connecte de manière transparente les réseaux cloud et sur site.
- Renforce la sécurité des données et des applications grâce à une sécurité et une conformité standardisées, conformes aux politiques de l'organisation.
- Améliore la gouvernance des ressources cloud grâce à un déploiement et une gouvernance automatisés, garantissant les meilleures pratiques.
- Optimise les coûts de l'infrastructure cloud grâce à l'évolutivité et à une meilleure utilisation des ressources.

Sans Landing Zone dédiée, les organisations peuvent être confrontées à des incohérences de configuration, des failles de sécurité et une gestion inefficace des ressources.

Consultez la référence d’architecture de la Landing Zone Public Cloud dans [ce guide](/pages/public_cloud/public_cloud_cross_functional/landing_zone_migration).

**Les cinq piliers d'OVHcloud :**

Sur la base de notre expérience en matière de projets et de discussions techniques approfondies avec nos clients, nous avons identifié ces cinq piliers fondamentaux comme essentiels à la mise en place d'une architecture Landing Zone sécurisée, évolutive et facile à maintenir :

1. Gestion des identités et des accès (IAM)
2. Réseau
3. Sécurité et conformité
4. Contrôle de la facturation
5. Observabilité

### 1. Gestion des identités et des accès (IAM)

Une configuration IAM garantit que, dans la pratique, le « principe du moindre privilège » peut être mis en œuvre, en accordant aux utilisateurs et aux services uniquement l'accès nécessaire. 

Les principales caractéristiques de nos services IAM sont les suivantes :

- **Une plateforme centralisée :** utilisez une interface unique pour gérer facilement l'accès à vos ressources et répondre aux exigences réglementaires.
- **Solution standard gratuite :** avec votre compte OVHcloud, vous bénéficiez gratuitement de la fonctionnalité IAM, qui permet l'automatisation des processus et utilise le protocole OAuth2 pour authentifier les scripts en toute sécurité.
- **Gestion des privilèges :** gérez les utilisateurs, les groupes et les applications sur tous les services OVHcloud. Personnalisez les droits d'accès en fonction des rôles, des responsabilités ou des types de ressources pour un travail d'équipe sécurisé.
- **Fédération d'identités (ADFS ou Okta) :** connectez votre annuaire d'entreprise (Azure AD, Google Workspace, etc.) ou toute solution d'authentification basée sur le cloud à OVHcloud afin de centraliser la gestion des comptes et de faciliter la connexion des utilisateurs.

### 2. Réseau

- Le **backbone OVHcloud**, conçu pour garantir des connexions sécurisées et isolées, relie tous nos datacentres. Il offre à vos applications une accessibilité mondiale, une disponibilité constante et une architecture tolérante aux pannes. De plus, l'anti-DDoS est inclus par défaut dans tous les services OVHcloud, sans frais supplémentaires. Vous bénéficiez ainsi d'une solution hautement performante pour une sécurité optimale.
- Le **réseau privé vRack** vous permet de connecter des instances Public Cloud, Hosted Private Cloud, des serveurs Bare Metal et des Load Balancers.
- Le **Load Balancer OVHcloud** fonctionne comme un service distribué et multi-actif, configuré sur différentes zones géographiques. Ces zones indépendantes garantissent une haute disponibilité, car une défaillance dans l'une d'entre elles n'aura pas d'impact sur les autres. Chaque offre Load Balancer est fournie avec un certificat Let's Encrypt, qui active le protocole HTTPS par défaut, sans frais supplémentaires.
- **OVHcloud Connect :**  une connexion privée entre votre réseau et votre vRack OVHcloud. Grâce à une connexion de niveau 2 ou 3, la migration de vos fichiers est un jeu d'enfant. Les options de bande passante vont de 200 Mbps à 10 Gbps, avec un transfert de données illimité. La résilience est encore renforcée par deux connexions PoP supplémentaires.
- **Bring Your Own IP (BYOIP) :** il s'agit d'un moyen simple de maintenir la connectivité publique de votre entreprise, en particulier lorsque vous migrez tout ou partie de vos services vers le cloud.
- **Floating IP :** une solution pour maintenir la connectivité des services de votre entreprise, principalement lorsque vous migrez tout ou partie de vos services vers le cloud.

### 3. Sécurité et conformité

Les mécanismes de sécurité sont essentiels pour la protection des données, la surveillance des menaces et la conformité réglementaire.

- **Conformité :** nos services cloud, qui ont obtenu de nombreuses certifications, offrent un environnement sécurisé qui répond aux exigences de nombreux référentiels. Grâce à nos discussions fréquentes avec l'Agence nationale de la sécurité des systèmes d'information (ANSSI), nous sommes en mesure de fournir à nos clients des outils et des fonctionnalités qui répondent aux normes les plus strictes. Consultez la liste des certifications [ici](/links/compliance).
- **Sécurité :** en plus des différentes fonctionnalités de chiffrement et de redondance de nos produits, nous proposons une suite d'outils pour aider nos clients à respecter leurs politiques de sécurité.

Un **pare-feu** (FW) est un service ou un dispositif de sécurité qui contrôle le **trafic réseau entrant et sortant** en fonction d'un ensemble de règles. Dans le cloud, son rôle est d'appliquer la **segmentation du réseau**, de restreindre l'accès aux ressources clés et de bloquer le trafic non autorisé entre les services.

- Chez OVHcloud, les pare-feux peuvent être configurés au **niveau de l'instance** ou via les **règles d'accès au réseau privé vRack**.
- Les cas d'utilisation courants incluent l'autorisation du SSH uniquement à partir d'adresses IP approuvées, le blocage de l'accès public aux bases de données ou l'isolation des environnements.

Un **hôte bastion (serveur relais)** est un serveur surveillé et fortifié qui sert de **passerelle sécurisée** vers une infrastructure cloud privée (par exemple, des machines virtuelles dans un sous-réseau privé).

- Les administrateurs peuvent se connecter aux ressources internes **via SSH ou RDP**, ce qui limite l'exposition à Internet.
- L'accès doit être restreint (par exemple, à l'aide d'une liste blanche d'adresses IP et d'une authentification multifactorielle) et consigné à des fins d'audit.
- Les utilisateurs d'OVHcloud configurent généralement une **instance Public Cloud basique** comme bastion, qui n'expose que quelques ports ouverts (généralement le port 22).

**La protection des applications Web et des API (WAAP)** est une version moderne du pare-feu d'application Web (WAF) qui combine **plusieurs couches de protection** pour protéger les applications et les API accessibles au public.

Elle comprend :

- **WAF :** protection contre les 10 principales vulnérabilités OWASP (SQLi, XSS)
- **Protection DDoS**
- **Atténuation des bots**
- **Sécurité des API** (limitation du débit, validation des jetons)

OVHcloud protège contre les **attaques DDoS** grâce à ses outils anti-DDoS propriétaires, activement maintenus. Tous les clients peuvent utiliser ce logiciel gratuitement. Le tableau de bord Network Security fournit une vue d'ensemble des activités malveillantes détectées, ce qui montre son efficacité. Pour plus de détails, voir [notre guide dédié](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard).

[**OVHcloud Workflow Management**](/links/public-cloud/workflow-management) : En automatisant et en orchestrant vos opérations cloud, OVHcloud Workflow Management garantit un approvisionnement efficace des ressources, l'application des politiques et la conformité. Il simplifie les procédures complexes, améliorant ainsi l'agilité et le contrôle de vos infrastructures OVHcloud.

[**Veeam Enterprise Plus**](/links/storage/veeam-enterprise) : Pour les environnements d'entreprise, Veeam Enterprise Plus offre des solutions avancées de sauvegarde, de reprise après sinistre et de gestion des données. Qu'elles soient physiques, virtuelles ou dans le cloud, vos charges de travail critiques sont protégées de manière fiable et peuvent être restaurées rapidement.

### 4. Contrôle de la facturation

Le contrôle de la facturation est un pilier essentiel qui garantit la transparence et la prévisibilité des dépenses liées au cloud, ainsi que leur adéquation directe avec les besoins de l'entreprise. Grâce à l'isolation des coûts des projets, à l'application d'un balisage cohérent et à la mise en place de rapports et d'alertes automatisés, les entreprises peuvent garantir la transparence financière et le respect des politiques d'utilisation, tout en conservant leur agilité.

Principales fonctionnalités du contrôle de la facturation :

- **Isolation des coûts par projet :** répartissez la facturation par environnement à l'aide des projets Public Cloud OVHcloud (prod, dev, shared, etc.).
- **Stratégie de balisage :** appliquez des balises standardisées telles que l'environnement, le propriétaire et le centre de coûts à toutes les ressources pour une répartition précise des coûts.
- **Alertes budgétaires :** définissez des seuils d'utilisation ou de dépenses pour recevoir des alertes lorsque vous êtes sur le point de dépasser les limites fixées.
- **Rapports automatisés :** utilisez les API OVHcloud ou les exportations CSV pour créer des tableaux de bord et des rapports programmés à l'intention des parties prenantes.
- **Politiques de gouvernance des coûts :** définissez des politiques pour restreindre les ressources non balisées, contrôler les types d'instances ou nettoyer automatiquement les environnements inutilisés.
- **Estimation des coûts :** utilisez une plateforme FinOps ou consultez les équipes OVHcloud pour obtenir des estimations afin de prévoir les dépenses avant le provisionnement.

### 5. Observabilité

L'observabilité s'appuie sur des données telles que les logs, les métriques et les traces pour fournir des informations sur l'état d'un système et l'évaluer. Grâce à l'observabilité, il est plus facile de comprendre, de suivre et de dépanner le comportement d'un système, en particulier dans les configurations cloud distribuées.

OVHcloud divise l'observabilité en deux parties :

- **Logs Data Platform (LDP) :** la Logs Data Platform gère vos logs ; elle collecte les logs de votre infrastructure et de vos applications, les stocke, puis les affiche dans des tableaux de bord en temps réel, permettant aux utilisateurs d'exécuter des requêtes complexes.

Au-delà de la gestion des logs, la Logs Data Platform sert également de plateforme d'indexation robuste pour différents types de documents. Ce cas d'utilisation spécifique est traité dans un guide séparé.

Pour offrir les fonctionnalités de la Logs Data Platform, OVHcloud intègre différentes technologies open source, notamment OpenSearch, Logstash et Flowgger, afin d'assurer la compatibilité avec une variété de solutions logicielles disponibles sur le marché.

Le cycle de vie d'un log comprend 4 phases distinctes :

- **Génération :** les applications, les systèmes et les services cloud génèrent des logs, qui sont généralement stockés localement dans des fichiers.
- **Ingestion :** les agents d'ingestion, ou entrées, reçoivent les logs dans la Logs Data Platform. Ils vérifient la validité de la source et le formatage des logs en fonction de [ces règles](/pages/manage_and_operate/observability/logs_data_platform/getting_started_field_naming_convention) et peuvent ajouter, mettre à jour ou supprimer des champs avant de transférer vos logs vers le stockage.
- **Stockage :** après leur ingestion, vos logs sont stockés dans la Logs Data Platform. Les données peuvent être stockées de deux manières : sous forme de données indexées accessibles via des API et d'autres outils, ou sous forme de données archivées.
- **Consommation :** il existe de nombreuses façons d'utiliser vos logs. Les utilisateurs de la Logs Data Platform peuvent visualiser les logs en temps réel, créer des tableaux de bord, créer et exécuter des requêtes détaillées à l'aide de l'interface utilisateur ou de l'API, et également configurer des alertes.

## OVHcloud Landing Zone: un guide étape par étape

Pour créer une Landing Zone qui fonctionne bien, il est important d'évaluer les composants nécessaires à sa construction. La Landing Zone idéale doit être suffisamment flexible pour s'adapter à divers besoins, permettant un déploiement automatisé, agile et simple de l'architecture cible.

### Prérequis :

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Un moyen de paiement.
- [Charger les variables d'environnement OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables).

### En pratique

1. Définissez votre stratégie cloud et vos environnements
    - Identifiez vos objectifs d'utilisation du cloud (hébergement web, traitement de données, Kubernetes).
    - Définissez les environnements clés (production, staging ou test).
2. Configurez les projets OVHcloud
    - Créez des projets Public Cloud OVHcloud pour chaque environnement.
    - Avantages : IAM, quotas, accès et isolation.
3. Planifiez et déployez l'architecture réseau
    - Utilisez vRack pour interconnecter les ressources entre les projets ou les régions.
    - Créez des réseaux privés au sein de chaque projet.
    - Utilisez des groupes de sécurité et des règles de pare-feu pour contrôler le trafic.
    - Si nécessaire, mettez en œuvre un modèle en étoile à l'aide de vRack.
4. Configurez le contrôle des identités et des accès
    - Attribuez des rôles par projet (administrateur, lecture seule, DevOps).
    - Appliquez l'authentification multifactorielle (MFA) pour les utilisateurs.
    - Intégrez l'authentification unique (SSO) via l'IAM d'OVHcloud ou un fournisseur externe.
5. Automatisez avec IaC (Terraform)
    - Utilisez le fournisseur Terraform OVH pour gérer :
        - Le provisionnement des projets
        - Les réseaux et vRack
        - Les instances de calcul
        - Les rôles IAM
        - Le DNS (via OVH DNS)
        - Le Bastion Host pour l'accès SSH
        - La surveillance et les alertes centralisées
        - Le stockage d'objets partagé (pour les journaux ou les sauvegardes)

    **Remarque** : stockez le code de l'infrastructure dans un dépôt Git et utilisez GitHub Actions ou GitLab CI pour le CI/CD.

6. Configurez la journalisation et la surveillance
    - Activez la journalisation centralisée à l'aide de :
        - Logs Data Platform (LDP).
        - Solutions open source (ELK ou Grafana Loki).
7. Activez le suivi des coûts et la gouvernance
    - Utilisez la facturation par projet pour isoler les coûts liés au Public Cloud.
    - Configurez des alertes budgétaires manuellement ou via des outils de surveillance.
8. Appliquez des contrôles de sécurité et de conformité
    - Utilisez des groupes de sécurité pour la micro-segmentation.
    - Chiffrez les données au repos et en transit.
    - Utilisez l'Object Storage avec des politiques d'accès sécurisées.
    - Intégrez l'analyse des vulnérabilités dans le CI/CD.

Pour obtenir des conseils sur la création de votre Landing Zone dans OVHcloud, consultez notre [documentation](/pages/public_cloud/public_cloud_cross_functional/landing_zone_migration).

Évitez de considérer votre Landing Zone comme quelque chose que vous pouvez simplement configurer puis ignorer. 
Intégrez plutôt la documentation et les mises à jour continues dans votre processus opérationnel.

**Actions recommandées :**

- **Documentez** l'architecture de votre Landing Zone, le modèle IAM, la conception du réseau et les politiques de sécurité dans une base de connaissances centralisée (ex : Atlassian Confluence, dépôts Git).
- Créez des **runbooks** pour l'intégration de nouveaux projets ou équipes à l'aide de la Landing Zone.
- Mettez en place un **cycle de révision** régulier (ex : trimestriel) pour évaluer :
    - La posture de sécurité (audit IAM, règles de pare-feu, journaux)
    - Les opportunités d'optimisation des coûts
    - Les nouvelles fonctionnalités ou améliorations apportées par OVHcloud
- Intégrez les équipes DevOps, sécurité et finance dans un **groupe de gouvernance de la Landing Zone** afin de vous assurer que la plateforme répond à vos besoins.

Considérez votre Landing Zone comme un produit : itérez, documentez et optimisez-la au fil du temps.

## Allez plus loin

Rejoignez notre [communauté d'utilisateurs](/links/community).