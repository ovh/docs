---
title: "Migration IaaS vers le Public Cloud - Étapes et bonnes pratiques"
excerpt: "Découvrez comment migrer votre infrastructure vers le Public Cloud OVHcloud en utilisant les services IaaS, l’automatisation Terraform et une architecture réseau résiliente"
updated: 2025-06-16
---

## Objectif

Ce guide a pour objectif de former et d’accompagner les clients dans la migration de leur infrastructure vers le Public Cloud en utilisant l’Infrastructure en tant que Service (IaaS).

Il propose une méthodologie détaillée étape par étape pour inventorier les workloads existants, préparer une Landing Zone sécurisée et évolutive, et exploiter des outils tels que Terraform/OpenTofu, Ansible, rclone et rsync afin d’automatiser le déploiement et le transfert des données.

Ce guide présente également les bonnes pratiques pour sélectionner les types d’instances OVHcloud compatibles, configurer les réseaux et garantir la continuité des services pendant la migration.

En suivant ce guide, les utilisateurs pourront construire une infrastructure robuste, optimisée en coûts et cloud-native, parfaitement adaptée à l’écosystème IaaS d’OVHcloud.

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- [Charger les variables d'environnement OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables).
- Connaître le fonctionnement de [Terraform](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform), si vous souhaitez l'utiliser.

## En pratique

Avant de présenter en détail les principales étapes, le schéma ci-dessous offre une vue d’ensemble des grandes phases d’une migration vers le Public Cloud OVHcloud.

![IAAS migration schema](images/schema_migration.png){.thumbnail}

### 1. Réalisez l'inventaire de vos VMs sources, du stockage et de la configuration réseau

Avant de commencer votre migration vers le cloud, il est essentiel de réaliser un inventaire détaillé de toutes vos ressources actuelles :

- **Machines virtuelles (VMs)** : Listez toutes vos VMs en regroupant celles appartenant à une même application (par exemple : un serveur web, un serveur applicatif et une base de données). Cette méthode facilite la migration application par application afin de minimiser les interruptions de service.
- **Stockage** : Identifiez vos volumes de stockage en bloc ainsi que vos buckets de stockage objet.
- **Ressources réseau** : Cartographiez l’ensemble de votre topologie réseau, incluant les réseaux de couche 2 (L2) et couche 3 (L3), les routeurs, les load balancers et les firewalls.

Listez également vos sous-réseaux (subnets) et les identifiants VLAN associés. Ces informations seront indispensables pour configurer correctement votre réseau cible dans l’environnement Public Cloud OVHcloud.

> [!primary]
>
> Grâce à la fonctionnalité vRack d’OVHcloud, vous pouvez créer plus de 4000 VLANs tout en conservant votre plan d’adressage IP existant. Cela simplifie grandement la migration réseau et évite les conflits ou la renumérotation des adresses IP.
>

### 2. Vérifiez et préparez votre Landing Zone avant la migration

La Landing Zone correspond à l’environnement cloud de base où toutes vos ressources vont s’exécuter. Avant de lancer la migration, il est crucial d’évaluer et de configurer cet environnement afin qu’il respecte les bonnes pratiques en matière de scalabilité, sécurité et gestion.

Cette vérification porte sur plusieurs éléments clés :

- **Gestion des identités et des accès (IAM)** : Assurez-vous que les rôles et permissions des utilisateurs sont correctement configurés.
- **Architecture réseau** : Contrôlez la segmentation réseau, les sous-réseaux, VPN et load balancers pour garantir leur bon paramétrage.
- **Conformité et gouvernance** : Vérifiez que les politiques en place répondent à vos exigences réglementaires et organisationnelles.
- **Organisation des ressources** : Définissez une structure claire avec plusieurs comptes ou projets pour bien séparer les workloads.

Utilisez les données d’inventaire de vos VMs, stockage, réseau et dispositifs de sécurité pour affiner le zonage et la segmentation dans le cloud. Corriger les problèmes à ce stade permettra d’obtenir une Landing Zone sécurisée, conforme, facile à gérer et optimisée en coûts.

Enfin, intégrez dès le départ des outils de supervision, de journalisation et de sécurité pour bâtir des opérations agiles et prêtes pour l’avenir.

### 3. Adaptez votre configuration Terraform/OpenTofu

Bien que le Public Cloud d’OVHcloud repose sur OpenStack, il propose également des services propriétaires comme Kubernetes managé et Bases de données managées. Pour cette raison, vous devrez utiliser des fournisseurs OpenTofu ou Terraform spécifiques, adaptés à l’infrastructure OVHcloud.

Vous pouvez créer vos stacks Terraform/OpenTofu en utilisant les fournisseurs pour [OpenStack](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs), OVHcloud, ou des services compatibles S3, selon les ressources que vous souhaitez gérer.

Vous retrouverez dans notre guide « [Using Terraform with OVHcloud (EN)](/pages/manage_and_operate/terraform/terraform-at-ovhcloud) » des exemples pour vous aider à démarrer la création de vos configurations Terraform/OpenTofu pour votre Landing Zone et votre infrastructure cloud.

### 4. Configurez l’architecture réseau cloud dans vos stacks Terraform

Une fois votre configuration Terraform/OpenTofu prête, vous devez automatiser la création des composants réseau clés nécessaires à votre environnement cloud. Cela inclut la définition de :

- Réseaux et sous-réseaux.
- Paramètres DHCP.
- Routeurs.
- Load balancers (équilibreurs de charge).

Ces éléments permettront de connecter et d’organiser efficacement et en toute sécurité toutes vos instances OVHcloud. Une bonne configuration réseau est essentielle pour garantir une communication optimale et des performances fiables de vos ressources cloud.

### 5. Sélectionnez les types d’instances OVHcloud correspondants et les services associés

Avant de déployer vos workloads dans le Public Cloud, vous devez choisir les types d’instances (« flavours ») qui correspondent le mieux à vos machines virtuelles (VMs) existantes. Cela garantit que vos applications migrées fonctionneront comme prévu.

Pour ce faire :

- Analysez les configurations de vos VMs sources (CPU, RAM, stockage, etc.).
- Sélectionnez les instances Public Cloud qui répondent à ces besoins.
- Choisissez le type de disponibilité adapté à vos besoins (1-AZ, 3-AZ ou Local Zone) selon le niveau de résilience et de latence souhaité.

Une fois vos choix effectués, notez les identifiants techniques des instances (par exemple : b3-64, c3-128) afin de pouvoir les utiliser directement dans votre configuration Terraform/OpenTofu.

N’oubliez pas de faire de même pour :

- Les gateways (par exemple : tailles M, L, XL).
- Les load balancers, en fonction du trafic attendu et des besoins en redondance.

Cette étape assure la cohérence entre votre environnement actuel et votre future infrastructure OVHcloud.

### 6. Choisissez et exécutez votre stratégie de migration de VM

#### 6a. Effectuer une migration Lift and Shift

La méthode Lift and Shift vous permet de migrer vos machines virtuelles (VMs) existantes sans modifier significativement leur configuration ou architecture. C’est une façon rapide de déplacer vos charges de travail vers le Public Cloud OVHcloud avec un minimum de réingénierie.

Pour commencer, exportez vos VMs sources depuis votre infrastructure actuelle. OVHcloud supporte plusieurs formats d’images, notamment : ami, ari, aki, vhd, vmdk, raw, qcow2, vhdx, vdi, iso, et ploop.

Une fois exportée, vous devrez téléverser l'image de la VM dans votre projet OVHcloud. Pour cela, assurez-vous d’avoir un environnement Python local prêt et installez le client OpenStack CLI (pour ce faire, suivez ce [guide d’installation](https://docs.openstack.org/newton/user-guide/common/cli-install-openstack-command-line-clients.html)). Vous aurez également besoin de vos identifiants API pour vous authentifier.

Après avoir téléversé l'image, vous pourrez déployer une nouvelle instance à partir de celle-ci via le tableau de bord OVHcloud, la CLI OpenStack ou via Terraform/OpenTofu. Retrouvez les instructions détaillées pour importer une image de VM dans notre guide « [Importez votre propre image](/pages/public_cloud/compute/upload_own_image) ».

Vous pourrez ensuite connecter l’instance au réseau privé défini, attacher un stockage en bloc et configurer les load balancers nécessaires.

Si vous migrez plusieurs VMs, envisagez d’automatiser ce processus avec des scripts ou des outils d’infrastructure as code. Vous pouvez aussi contacter notre équipe [Professional Services](/links/professional-services) pour obtenir de l’aide ou déléguer entièrement la migration.

#### 6b. Effectuer un replatforming avec des déploiements propres

La méthode de replatforming consiste à créer de nouvelles machines virtuelles dans votre environnement OVHcloud Public Cloud et à réinstaller vos applications à partir de zéro. Cette approche est idéale pour un déploiement propre et pour tirer parti des outils modernes d’automatisation et d’infrastructure.

Vous pouvez provisionner les nouvelles instances via vos stacks Terraform/OpenTofu ou directement depuis le tableau de bord OVHcloud, en choisissant les régions, les zones de disponibilité et les types d’instances appropriés.

Une fois l’infrastructure déployée, vous avez deux options :

- Utiliser des playbooks Ansible pour installer et configurer automatiquement vos applications.
- Configurer manuellement vos services sur chaque instance.

Veillez à utiliser les mêmes versions des applications que dans votre environnement source afin d’assurer la compatibilité avec vos données existantes.

Une fois la configuration terminée, migrez vos données avec des outils comme rsync, scp ou des utilitaires de base de données, puis vérifiez que tout fonctionne correctement.

### 7. Migrez le stockage en blocs avec rsync (ou un outil similaire)

Pour migrer votre stockage en blocs vers OVHcloud, commencez par configurer vos volumes de stockage cibles. Vous pouvez le faire soit [manuellement sur l’instance](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance), soit automatiquement via des outils comme Ansible.

Une fois vos volumes prêts, utilisez un outil tel que [rsync](/pages/bare_metal_cloud/dedicated_servers/how-to-copy-data-from-one-dedicated-server-to-another-using-rsync) pour copier les données depuis votre infrastructure source vers le nouvel environnement OVHcloud. Rsync permet un transfert efficace des fichiers et peut reprendre en cas d’interruption.

Cette méthode vous permet de migrer les données de manière progressive et de valider chaque étape.

Si vous avez besoin d’aide pour configurer ou automatiser ce processus sur plusieurs instances, vous pouvez contacter l'équipe [Professional Services](/links/professional-services) d’OVHcloud.

### 8. Migrez le stockage objet avec rclone (ou un outil similaire)

Pour transférer votre stockage objet vers OVHcloud, utilisez un outil comme rclone, compatible avec la majorité des services S3.

Commencez par vérifier que vous disposez des autorisations nécessaires pour accéder aux buckets source et destination. Ensuite :

- Installez rclone sur votre machine locale ou sur une instance cloud.
- Configurez les identifiants d’accès pour les deux environnements (source et OVHcloud).
- Utilisez rclone sync ou rclone copy pour migrer vos données.

Cette méthode assure un transfert fiable et reprenable, même pour de gros volumes de données. Suivez notre guide « [Object Storage - Utiliser Object Storage avec Rclone](/pages/storage_and_backup/object_storage/s3_rclone) » pour connaître toutes les étapes nécessaires.

Si votre configuration inclut des fonctionnalités avancées (versioning, règles de cycle de vie, etc.) ou si vous souhaitez automatiser le processus, [l’équipe Professional Services](/links/professional-services) d’OVHcloud peut vous accompagner avec une approche personnalisée.

### 9. Reconnectez les endpoints et validez les applications

Après la migration, mettez à jour toutes vos applications pour qu’elles utilisent les nouveaux endpoints, y compris ceux liés au stockage objet compatible S3.

Assurez-vous que chaque connexion pointe bien vers les bonnes ressources dans votre environnement OVHcloud.

Enfin, testez l’ensemble de votre workflow et exécutez tous les tests d’intégration pour vérifier que vos applications fonctionnent correctement dans le nouvel environnement.

### 10. Mettez à jour les enregistrements DNS

Une fois que vous avez confirmé que vos applications fonctionnent correctement, mettez à jour vos enregistrements DNS pour qu’ils pointent vers l’adresse IP de votre nouveau load balancer OVHcloud.

Après avoir effectué la modification DNS, relancez vos tests pour vous assurer que tous les services sont pleinement opérationnels et accessibles.

### 11. Décommissionnez l'infrastructure existante

Une fois que vous avez vérifié que votre nouvel environnement OVHcloud fonctionne pleinement, vous pouvez procéder en toute sécurité à l’arrêt et au démantèlement de votre ancienne infrastructure.

Assurez-vous que toutes les données et tous les services ont bien été migrés et sauvegardés avant de mettre hors service les systèmes existants.

### 12. Optimisez avec les Savings Plans

Pour mieux gérer et réduire vos dépenses cloud, appliquez les bonnes pratiques FinOps. OVHcloud propose plusieurs solutions d’optimisation des coûts, dont des [Savings Plans](/links/public-cloud/savings-plan) adaptés à vos habitudes de consommation.

Consultez notre guide « [Comment fonctionnent les Savings Plans ?](/pages/public_cloud/public_cloud_cross_functional/savings_plans) » pour découvrir comment piloter efficacement vos coûts et optimiser vos usages dans le cloud.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et une analyse personnalisée de votre projet.

Échangez avec notre [communauté d'utilisateurs](/links/community) et notre communauté sur [Discord](https://discord.gg/ovhcloud).