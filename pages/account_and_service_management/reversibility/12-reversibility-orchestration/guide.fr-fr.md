---
title: Politique de réversibilité du produit Orchestration
updated: 2025-06-16
---

## Objectif

Ce document décrit la politique de réversibilité pour la gamme de produits Managed Orchestration, correspondant aux offres de services OVHcloud : Managed Kubernetes Service (MKS) et Managed Rancher Service (MRs).

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les caractéristiques du product Managed Orchestration sont réparties en trois catégories :

- Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
- L'**implémentation OVHcloud** qui nécessite une adaptation à un nouvel environnement de migration.
- Les **fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### Fonctionnalités principales

| Fonctionnalité| Description | Formats | Modèle de migration | Documentation disponible |
| --- | --- | --- | --- | --- |
| **Orchestration via Kubernetes** | Gestion des clusters via API Kubernetes (kubectl, Helm, CI/CD, etc.), conforme CNCF | YAML, JSON, OCI | **Entrant** : déploiement de manifests, Helm charts, images OCI via API standard Kubernetes.<br>**Sortant** : dxport des manifests, Helm charts, images via API standard, réutilisables sur tout cluster Kubernetes compatible. | [Creating a cluster](/pages/public_cloud/containers_orchestration/managed_kubernetes/creating-a-cluster)|
| **Orchestration via Rancher** | Orchestration de conteneurs simplifiant le déploiement, la gestion et la mise à l'échelle des applications conteneurisées. | YAML, JSON, OCI | **Entrant** : import de manifests, Helm charts, images OCI ou cluster via API et interface utilisateur.<br>**Sortant** : export des manifests, Helm charts, images via API, réutilisables sur tout cluster Kubernetes compatible. | [Getting Started with Managed Rancher Service](/pages/public_cloud/containers_orchestration/managed_rancher_service/getting-started)|
| **Export/Import de manifests** | Déploiement, export et migration de ressources via fichiers YAML/JSON standard Kubernetes | YAML, JSON | **Entrant** : import direct des manifests existants.<br>**Sortant** : export des manifests via `kubectl get -o yaml/json`, utilisables sur tout cluster Kubernetes compatible. |[Deploying an application](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-an-application) |
| **IAM** | Gestion de l'identité et des accès aux ressources du cluster par Rancher via un fournisseur d’identité externe. | Active Directory, LDAP, OpenLDAP, Azure AD… | **Entrant** : import ou création de rôles et politiques d’accès via API ou interface utilisateur..<br>**Sortant** : export des configurations via API ou interface utilisateur.| [Configuring authentication](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config)|

### Implémentation OVHcloud

| Fonctionnalité| Description | Formats | Modèle de migration | Documentation disponible |
| --- | --- | --- | --- | --- |
| **Liaison entre Identity Provider et cluster** | Connexion entre l'identity provider et le cluster | JSON | **Entrant** : adaptation des configurations au format OVH avant import via CLI ou IHM.<br>**Sortant** : export des configurations au format OVH, réadaptation à l’environnement cible nécessaire. | [Configuring the OIDC provider on an OVHcloud Managed Kubernetes cluster](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-oidc-provider-config) |
| **Configuration du Control Plane**| Possibilité de modifier certains paramètres pour personnaliser le cluster. | N/A | **Entrant** : configuration de certains paramètres du Control Plane Kubernetes via une API OVHcloud spécifique.<br>**Sortant** : non-exportable directement, réécriture des paramètres dans l’environnement cible.| [Creating a cluster](/pages/public_cloud/containers_orchestration/managed_kubernetes/creating-a-cluster) |
| **Réseau privé et vRack** | Le vRack, ou rack virtuel, est une technologie VLAN privée qui permet la connexion entre les services OVHcloud disponibles sur le dataplane du service Managed Kubernetes  | N/A | **Entrant** : : les services Managed Kubernetes sont inclus par défaut dans vRack.<br>**Sortant** : prenez note de l'architecture réseau et reproduisez-la avec des VLAN.| [ Using vRack Private Network ](/pages/public_cloud/containers_orchestration/managed_kubernetes/using-vrack) |
| **Journalisation** | Traçabilité des actions dans kubernetes. Les logs Rancher ne sont pas accessible au client.| N/A | **Entrant** : N/A<br>**Sortant** : un transfert des logs peut être configuré avec une nécessité d’une intégration au service OVHcloud Logs Data Platfom. | [Managed Kubernetes Service Audit Logs Forwarding](/pages/public_cloud/containers_orchestration/managed_kubernetes/forwarding-audit-logs-to-logs-data-platform) |
| **Add-ons et opérateurs spécifiques** | Certains opérateurs/add-ons déployés via OVHcloud Marketplace ou spécifiques à OVHcloud | YAML, JSON, Helm | **Entrant** : installation possible si compatible.<br>**Sortant** : Adaptation ou remplacement par des équivalents sur la cible (limitation à Rancher standard pour Rancher). |
| **Node pool** | Possibilité de créer un pool de nœud (*node pool*).| N/A | **Entrant** : configuration du node pool via l’interface OVHcloud.<br>**Sortant** : Réutilisation du format du node pool dans un environnement équivalent |[Managing nodes and node pools](/pages/public_cloud/containers_orchestration/managed_kubernetes/managing-nodes) |

### Fonctionnalités spécifiques

| Fonctionnalité| Description | Formats | Modèle de migration | Documentation disponible |
| --- | --- | --- | --- | --- |
| **Espace client/API OVHcloud**| Gestion via l'espace client ou l'API OVHcloud | N/A | **Entrant** : N/A<br>**Sortant** : scripts et API à réécrire pour l'environnement cible, gestion manuelle nécessaire.  | [Spécification API OVHcloud ](https://api.ovh.com/console/?section=%2FallDom&branch=v1)|
| **Rancher OVHcloud Edition** | Offre d’utilisation limitée de Rancher chez OVHcloud. | N/A | **Entrant** : configuration des fonctionnalités si disponible.<br>**Sortant** : scripts/API à réécrire pour la cible, gestion manuelle nécessaire.| [Managed Rancher Service](/links/public-cloud/rancher) |
| **Infrastructure as Code** | Déploiement automatisé via modules Terraform spécifiques à OVHcloud pour les services managés ou via module Terraform Kubernetes ou Rancher pour les services opensource. | N/A | **Entrant :** Ssripts à adapter pour d’autres fournisseurs <br> **Sortant :** réécriture nécessaire des configurations Terraform. | [Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs) |
| **Anti-DDoS** | L'anti-DDoS est un ensemble d'équipements et de moyens mis en place pour absorber les attaques par déni de service. Il comprend une analyse du trafic, « l’aspiration » vers un réseau spécialisé et la mitigation, assurée par la technologie VAC développée par OVHcloud. | N/A | **Entrant :** le système anti-DDoS est un composant de notre infrastructure, activé par défaut. Aucune action n'est requise. <br> **Sortant:** Commander et configurer un anti-DDoS avec le nouveau fournisseur.| [Infrastructure anti-DDoS](/links/security/ddos) |

## Liste des architectures

Managed Orchestration d’OVHcloud repose sur des clusters Kubernetes managés, multi-nœuds, avec haute disponibilité, auto-scaling, gestion centralisée, et intégration réseau privée (vRack). Intégration des principaux outils de monitoring, logging et CI/CD. Les architectures supportent la migration multi-cloud et le déploiement hybride.

Le service Managed Orchestration tourne sur une seule région parmi plusieurs régions, au choix, mises à disposition par OVHcloud. Il est possible de gérer plusieurs clusters dans plusieurs régions (fournies par OVHcloud ou par d’autres fournisseurs) via le service Managed Rancher Service tournant dans une seule région.

## Services Partenaires

Les partenaires OVHcloud sont répertoriés sous le mot-clé **« Migration vers le cloud »** dans [l'annuaire des partenaires dédiés](/links/partner).

OVHcloud propose également un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coût et frais

Facturation en mode pay as you go. La facturation s’arrête lorsque le client ne consomme plus de ressources. Aucun frais de résiliation spécifique n’est appliqué : la suppression du service arrête la facturation immédiatement. Les crédits OVHcloud éventuellement associés ne sont pas transférables.

Suite à la résiliation du service, une libération des ressources est opérée par OVHcloud, ce qui engendre une incapacité à récupérer les données. Il incombe au client d’exporter ses configurations, manifests et images avant la résiliation, en raison de la libération des ressources.

Dans le cas de l’utilisation de Managed Rancher Service, la facturation inclura un montant minimal même dans le cas où il n’orchestrerait aucun cluster.

## Rétention des données après résiliation du contrat

Après suppression du service ou résiliation du contrat, OVHcloud libère les ressources du cluster. Il est donc impératif d’exporter toutes les données et configurations nécessaires avant suppression, aucune restauration n’étant possible après la résiliation.
