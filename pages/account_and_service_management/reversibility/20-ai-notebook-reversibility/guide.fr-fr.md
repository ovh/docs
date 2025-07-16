---
title: "Politique de réversibilité du produit Notebook Interface"
updated: 2025-07-10
---

## Objectif

Ce document est la politique de réversibilité du produit Notebook Interface couvrant l’offre commerciale d’OVHcloud AI Notebooks.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les fonctionnalités du produit sont réparties en trois catégories :

1. Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
2. Les **implémentations OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
3. Les **fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### 1 - Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Import et export de notebooks | Stockage des notebooks aux formats standards Jupyter (.ipynb) ou VS Code Notebook avec import et export sans adaptation | (.ipynb), Python, CSV, TXT | **Entrante** : téléchargement direct de fichiers .ipynb ou conversion via Jupyter/VS Code. <br>**Sortante** : export direct des notebooks .ipynb, réutilisables sur tout environnement Jupyter ou autre compatible.  |[Se servir de données dans un notebook via l'espace client](/pages/public_cloud/ai_machine_learning/notebook_guide_data_ui) |
| Support des frameworks IA standards | Pré installation d’environnements comme TensorFlow, PyTorch, Scikit-learn, MXNet, Hugging Face, etc. | Notebooks, Python scripts | **Entrante** : import de notebooks/scripts utilisant ces frameworks. <br>**Sortante** : export des notebooks/scripts, réutilisables sur toute plateforme supportant ces frameworks.  | [Tutoriel - Utiliser Tensorboard dans un notebook](/pages/public_cloud/ai_machine_learning/notebook_tuto_02_tensorboard) |
| Gestion des environnements personnalisés | Installation de librairies et dépendances via pip/conda, spécifique à chaque notebook | YAML (environnements), requirements.txt | **Entrante** : recréation de l’environnement via des fichiers `requirements.txt/environment.yml`. <br>**Sortante** : export manuel de la liste des packages, adaptation et réinstallation sur l’environnement cible. | [Caractéristiques, capacités et limites](/pages/public_cloud/ai_machine_learning/notebook_guide_capabilities) |
| Intégration VS Code | Support de l’édition via Visual Studio Code pour les Notebooks | Notebooks, Python scripts | **Entrante** : import possible, mais nécessite adaptation de l’environnement si la cible ne supporte pas VS Code. <br>**Sortante** : export des notebooks/scripts, adaptation éventuelle de la configuration VS Code sur l’environnement cible | [Caractéristiques, capacités et limites](/pages/public_cloud/ai_machine_learning/notebook_guide_capabilities) |

### 2 - Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Stockage objet compatible S3<sup>1</sup | Les données utilisateur sont synchronisées sur un Object Storage OVHcloud compatible S3 après arrêt/suppression du Notebook. Le stockage S3 peut se faire avec un produit OVHcloud ou en dehors des infrastructures OVHcloud.| S3 (objets, fichiers) | **Entrante** : import de données via un Object Storage S3 ou téléchargement direct. <br>**Sortante** : export des fichiers/datasets via un Object Storage S3, réutilisables sur tout autre stockage compatible S3 | [Caractéristiques, capacités et limites](/pages/public_cloud/ai_machine_learning/notebook_guide_capabilities) <br> [Politique de révesibilité du produit Object Storage ](/pages/account_and_service_management/reversibility/16-object-storage-reversibility) |
| Gestion des accès utilisateurs | Gestion des accès via l’interface OVHcloud, version non standardisée | NA | **Entrante** : configuration manuelle des accès sur l’interface <br>**Sortante** : adaptation de la gestion des droits selon l’outil cible (JupyterHub, VS Code Live Share, etc.). | [Se servir de données dans un notebook via l'espace client](/pages/public_cloud/ai_machine_learning/notebook_guide_data_ui) |

### 3 - Fonctionnalités spécifiques

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| L'API OVHcloud, CLI et SDK Python| Gestion, automatisation et migration des notebooks via API REST, CLI AI et SDK Python propres à OVHcloud. | JSON, YAML, Python | **Entrante** : outils et interfaces de gestion disponibles par défaut <br>**Sortante** : les API et CLI dépendront des environnements cibles et peuvent nécessiter une adaptation. | [AI Notebooks - Premiers pas](/pages/public_cloud/ai_machine_learning/notebook_guide_introduction_definition) |
| Anti-DDoS | L’anti-DDoS est un ensemble d’outils et de mécanismes conçus pour absorber les attaques par déni de service. Il comprend l'analyse du trafic, le « nettoyage » via un réseau spécialisé et la mitigation grâce à la technologie VAC développée par OVHcloud. | N/A | **Entrante** : le système anti-DDoS fait partie de notre infrastructure et est activé par défaut. Aucune action n'est requise. <br> **Sortante** : commander et configurer une solution anti-DDoS auprès du nouveau fournisseur | [OVHcloud DDoS Protection](/links/security/antiddos) |

## Liste des architectures

L’offre de service d’OVHcloud propose des environnements Jupyter et Visual Studio Code managés, avec une allocation de ressources CPU/GPU à la demande. 
Les notebooks sont isolés par utilisateur et projet, avec un stockage persistant sur un service Object Storage compatible S3. Les principaux frameworks IA (TensorFlow, PyTorch, Scikit-learn, MXNet, Hugging Face) sont préinstallés avec intégration native des outils de data science (Matplotlib, Seaborn, Pandas). L’architecture supporte l’arrêt et redémarrage des notebooks, la synchronisation automatique des données et la gestion multi-utilisateurs.

## Services partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés « **Data center expansion and Migration** ».

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

### Coûts et frais

La facturation est en mode pay as you go. Aucun frais de résiliation spécifique n’est appliqué. L’arrêt ou la suppression d’un notebook arrête la facturation des ressources de calcul. Le stockage associé (Object Storage) reste facturé tant que les données ne sont pas supprimées. L’export des notebooks et données est nécessaire avant la suppression définitive et résiliation du service.

### Conservation des données après résiliation du contrat

Après suppression d’un notebook, OVHcloud synchronise automatiquement les données utilisateur sur un Object Storage compatible S3. Les notebooks et fichiers restent accessibles sur cet espace de stockage jusqu’à leur suppression manuelle par l’utilisateur. Une fois les données supprimées de cet espace, aucune restauration n’est possible. Il est donc impératif d’exporter toutes les données nécessaires avant le décommissionnement du service.

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.