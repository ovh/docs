---
title: 'Public Cloud Instances - Concepts clés'
excerpt: 'Découvrez les fondamentaux du Public Cloud Compute : fonctionnement des instances, familles et tailles disponibles, déploiements multi-AZ, gestion des images, sécurité SSH, mécanismes de sauvegarde, réseau public/privé, et avantages des Savings Plans.'
updated: 2025-12-05
---

## Objectif

Ce guide vise à vous donner une compréhension claire des concepts fondamentaux nécessaires à la création, à la configuration et à la gestion de vos premières instances OVHcloud Public Cloud Compute. Vous apprendrez comment fonctionnent les instances, comment choisir le bon type d'instance, et comment les éléments-clés tels que les images, les zones de disponibilité, le réseau, la Sécurité et les sauvegardes s'articulent au sein de l'écosystème OVHcloud.

## Qu'est-ce qu'une instance (Machine Virtuelle) ?

Une instance, ou Machine Virtuelle (VM), est un serveur entièrement isolé s'exécutant sur l'infrastructure physique partagée d'OVHcloud. Elle fonctionne comme un serveur traditionnel, mais offre la flexibilité et l'évolutivité du cloud. Vous choisissez le système d'exploitation, définissez les ressources CPU, RAM et Stockage, et déployez vos applications, sites web ou environnements de développement.

Les instances Public Cloud Compute offrent :

- Création à la demande et dimensionnement flexible – Échelonner les ressources selon vos besoins.
- Facturation au fur et à mesure – Facturé à l'heure ou au mois selon l'utilisation réelle.
- Intégration transparente avec les services OVHcloud – y compris le stockage objet (*Object Storage*), le réseau, les sauvegardes, et plus encore.

Les instances peuvent être gérées via l'espace client OVHcloud, l'interface Horizon, les points d'accès API, ou via des outils d'automatisation et d'orchestration tels que l'OVHcloud CLI et Terraform.

## Types d'instances

OVHcloud propose plusieurs familles d'instances conçues pour répondre à différents besoins de charge de travail. Chaque famille propose une gamme de tailles (*flavors*) pour correspondre précisément à vos besoins en ressources.

| Types d'instances  | Description                      | Cas d'utilisation typiques                                                                                                                                                        |
| ------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Générale           | Équilibre CPU et Mémoire         | Adaptée aux serveurs de développement, applications web et charges de travail d'entreprise générales. Fournit un ratio équilibré entre CPU et RAM.                                            |
| Optimisée CPU      | Haute performance processeur     | Idéale pour les applications intensives en calcul, les tâches de traitement parallèle, les pipelines CI/CD, ou les microservices nécessitant une fréquence CPU élevée.                                     |
| Optimisée Mémoire  | Capacité mémoire élevée          | Conçue pour l'analyse de données, les charges de travail big data et le cache de base de données. Présente des rapports mémoire/CPU élevés et des IOPS accélérés. Les cœurs virtuels sont cadencés à 2 GHz ou plus.       |
| Optimisée Stockage | Haute performance IOPS           | Équipée de stockage NVMe pour des E/S disque ultra rapides, idéale pour les bases de données et les applications big data.                                                                     |
| GPU                | Graphisme accéléré matériel      | Fournit une performance de calcul parallèle exceptionnelle, jusqu'à 1 000 fois plus rapide que le CPU pour certaines charges de travail. Adaptée à l'IA, l'apprentissage profond et le rendu 3D.               |
| Découverte         | Ressources partagées, économique | Instances d'entrée de gamme avec ressources partagées, offrant une performance stable à prix abordable. Idéale pour les environnements de test, la formation ou les projets de preuve de concept. | 

Chaque famille d'instances inclut plusieurs tailles (flavors) pour vous aider à adapter l'instance aux besoins spécifiques de vos applications.

## Localisation et zones de disponibilité

Les instances Public Cloud d'OVHcloud sont déployées sur [plusieurs centres de données à travers le monde](/links/infrareg), assurant une haute disponibilité et une proximité avec vos utilisateurs. Exemples de régions :

- GRA – Gravelines, France
- BHS – Beauharnois, Canada
- DE – Francfort, Allemagne

**Types de zones de disponibilité :**

| Types de zone                   | Description                                                                    | Utilisation recommandée                                                                                        |
| ------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 1-AZ (Single Availability Zone) | Les instances sont déployées dans une seule zone.                                   | Environnements simples, développement, tests, ou charges de travail non critiques.                                  |
| 3-AZ (Triple Availability Zone) | Les instances sont réparties sur trois zones redondantes au sein de la même région. | Charges de travail de production nécessitant une haute disponibilité et une tolérance aux pannes.                                  |
| Local Zones                     | Emplacements périphériques plus proches des utilisateurs finaux pour réduire le délai. | Applications sensibles au délai telles que le traitement de données en temps réel, les jeux en ligne ou les services web interactifs. | 

> [!primary]
> 
> **Meilleure pratique** : Pour les charges de travail critiques, privilégiez un [déploiement multi-AZ](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture) pour assurer la résilience et la continuité du service.
>

## Images système disponibles

Lors de la création d'une instance, vous sélectionnez une image qui inclut le système d'exploitation et, éventuellement, des applications préinstallées. OVHcloud propose une variété d'images pour répondre à des besoins divers :

- **Distributions Linux** : Ubuntu, Debian, CentOS, AlmaLinux, Rocky Linux et autres. Ces images sont prêtes à l'emploi pour les serveurs web, les environnements de développement et les charges de travail générales.
- **Windows Server** : Versions avec licences intégrées, permettant un déploiement immédiat pour les applications basées sur Microsoft et les charges de travail d'entreprise.
- **Applications préconfigurées** : Images qui incluent des logiciels tels que cPanel, Plesk, Docker ou NVIDIA GPU Cloud (NGC). Elles simplifient le déploiement et accélèrent le passage à la production.
- **[Images personnalisées](/pages/public_cloud/compute/upload_own_image)** : Vous pouvez importer vos propres images au format QCOW2 ou RAW, offrant un contrôle complet sur votre environnement et permettant des migrations, des modèles standardisés ou des configurations spécialisées.

**Cycle de vie et support** : OVHcloud met régulièrement à jour le catalogue d'images. Consultez toujours les annonces sur le cycle de vie et la fin du support pour vous assurer que vos images restent sécurisées et supportées. Voir [ici](/pages/public_cloud/compute/image-life-cycle).

## Clés SSH

Les clés SSH offrent un moyen sécurisé d'accéder à vos instances sans utiliser de mots de passe. Elles se composent de deux éléments :

- **Clé publique** : Installée sur l'instance pour permettre l'accès.
- **Clé privée** : Conservée en toute sécurité sur votre machine locale et utilisée pour authentifier la connexion.

L'authentification SSH assure un accès chiffré et fiable à vos serveurs.

Meilleures pratiques :

- Ne partagez jamais votre clé privée.
- Utilisez une clé unique pour chaque utilisateur.
- Stockez vos clés dans un gestionnaire ou un coffre-fort sécurisé.

Pour des instructions détaillées sur la création et l'utilisation des clés SSH, consultez le guide [OVHcloud sur le SSH](/pages/public_cloud/compute/creating-ssh-keys-pci).

## Sauvegardes

Les sauvegardes protègent vos données et configurations contre les pertes accidentelles ou les erreurs. OVHcloud propose plusieurs mécanismes de sauvegarde pour assurer la sécurité de vos instances et de vos données :

- **Types de sauvegardes :**
    - Sauvegardes manuelles : Prenez un instantané de votre disque à tout moment.
    - Sauvegardes automatiques : Sauvegardes planifiées créées à intervalles réguliers.
    - Création et restauration d'instance : Déployez une nouvelle instance directement à partir d'une sauvegarde existante.
- **Emplacements de sauvegarde :**
    - Sauvegarde locale : Stockée dans la même région que votre instance.
    - Sauvegarde distante : Crée automatiquement une copie de la sauvegarde locale dans une région de votre choix.

> [!primary]
>
> **Meilleure pratique** : Les sauvegardes ne remplacent pas une [architecture résiliente](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture). Pour les environnements critiques, combinez les sauvegardes avec la réplication multi-AZ pour assurer une protection maximale des données et une disponibilité optimale du service.
>

## Réseaux publics et privés

Les instances Public Cloud d'OVHcloud peuvent être connectées à différents types de réseaux selon vos besoins d'application.

| Types de réseau        | Description                                                                                   | Cas d'utilisation                                                                            |
| -----------------------| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Réseau public          | Les instances sont connectées à Internet via une adresse IP publique.                         | Hébergement de sites web, d'API, ou fournir un accès distant à vos serveurs.                  |
| Réseau privé (vRack)   | Une interconnexion privée entre vos ressources OVHcloud, isolée d'Internet.                   | Connexion de bases de données, services backend, ou communication interne entre instances. | 

Le vRack vous permet de créer un réseau sécurisé et isolé, même à travers différentes régions ou projets.

**Exemple** : Hébergez votre base de données sur un réseau privé tout en exposant uniquement votre serveur web sur le réseau public.

Pour plus de détails sur la configuration des réseaux Public Cloud, consultez le guide officiel [OVHcloud sur les réseaux](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts).

## Savings Plans

Les Savings Plans vous permettent de réduire vos coûts Public Cloud Compute en échange d'un engagement d'utilisation constante sur une période définie, allant de 1 mois à 3 ans.

**Avantages-clés :**

- **Coûts réduits** : Plus économique que la facturation en *pay-as-you-go*.
- **Application automatique** : Les économies s'appliquent automatiquement à toutes les instances compatibles.
- **Flexible** : Vous pouvez changer les types ou tailles d'instances tout en conservant les avantages de votre plan.

**Cas d'utilisation idéaux :**

- Charges de travail stables et prévisibles, telles que les applications de production ou les serveurs d'entreprise.
- Services avec des besoins en ressources constants qui bénéficient d'une optimisation des coûts.

Les Savings Plans vous aident à optimiser votre budget tout en maintenant les performances et la fiabilité de votre environnement cloud. Pour plus d'informations, consultez le guide officiel [OVHcloud sur les Savings Plans](/pages/public_cloud/public_cloud_cross_functional/savings_plans).

## Aller plus loin

Une fois que vous maîtrisez les concepts fondamentaux du Public Cloud Compute d'OVHcloud, vous pouvez explorer des opérations et tâches de gestion plus avancées.

- [Comment créer une instance Public Cloud et y accéder](/pages/public_cloud/compute/public-cloud-first-steps)
- [Gérer vos instances Public Cloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)
- [Démarrer une instance sur un volume bootable](/pages/public_cloud/compute/start_instance_on_attached_volume)
- [Mettre en veille ou suspendre une instance](/pages/public_cloud/compute/suspend_or_pause_an_instance)
- [Premiers pas avec des applications préinstallées](/pages/public_cloud/compute/apps_first_steps)
- [Ajouter des crédits cloud](/pages/account_and_service_management/managing_billing_payments_and_services/add_cloud_credit_to_project)

Rejoignez notre [communauté d'utilisateurs](/links/community).