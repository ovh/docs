---
title: "Se familiariser avec l'interface Public Cloud"
excerpt: "Visite guidée de l'interface Public Cloud"
updated: 2026-04-07
---

## Objectif

Vous venez de créer votre projet Public Cloud et vous souhaitez en savoir un peu plus sur l'interface utilisateur au sein de l'espace client OVHcloud.

**Découvrez les principales sections de l'interface Public Cloud au sein de l'espace client OVHcloud**

## Prérequis

- Avoir créé un [premier projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accès à l’espace client OVHcloud

- **Lien direct :** [Projets Public Cloud](/links/control-panel/publiccloud-projects)
- **Pour accéder à vos services :** `Public Cloud`{.action} > Sélectionnez votre projet

---
<!-- CP-NAV-END:publiccloud-projects -->

## En pratique

Une fois votre premier projet Public Cloud créé, vous êtes redirigé vers l'interface Public Cloud principale.

### L'accès à vos informations de compte OVHcloud

Les paramètres de votre compte OVHcloud restent accessibles à tout moment, tout comme les notifications ou le changement de langue de l'espace client.

### Votre projet Public Cloud

Comme il est possible de gérer plusieurs projets selon vos quotas, le nom et l’ID de chaque projet restent toujours visibles, quel que soit l’écran que vous consultez. Cette information vous permet de savoir en permanence sur quel environnement vous travaillez. Vous pouvez la retrouver à tout moment dans le menu de gauche.

L'ID peut être nécessaire lors de l'utilisation de la CLI, de certaines demandes de support ou autre. Vous pouvez le copier en cliquant sur l'icône située à sa droite.

Vous pouvez modifier le nom du projet via l'onglet `Paramètres`{.action}. Renseignez un nouveau nom puis cliquez sur `Mettre à jour`{.action}.

### Le menu principal Public Cloud

|Section|Description des options|
|---|---|
|**Compute**|Cette section vous permet de démarrer des instances, c'est-à-dire des serveurs cloud disponibles à la demande.|
|**Storage & backup**|Vous y trouverez différentes solutions de stockage et bases de données, chacune adaptée à des besoins spécifiques.|
|**Network**|Cette section permet de connecter vos ressources Public Cloud entre elles et avec d’autres produits OVHcloud.|
|**Containers & Orchestration**|Cette section propose des outils pour automatiser vos architectures et gagner en flexibilité.|
|**Databases & Analytics**|Ces services aident à gérer vos problématiques de Big Data et d’analyse de données.|
|**AI & Machine Learning**|Vous y trouverez les outils OVHcloud dédiés à l’intelligence artificielle.|
|**Quantum**|Cette section regroupe les services liés au calcul quantique.|
|**Management Interfaces**|Un seul lien vers l’interface Horizon.|
|**Paramètres**|Cette section permet de configurer et gérer les aspects du projet.|

### Les raccourcis

Le centre de l'écran vous propose des raccourcis permettant d'accéder rapidement aux assistants de configuration et aux guides les plus utiles.

#### Les aides à la création de ressources

Pour chaque ressource que vous souhaitez créer, vous serez accompagné par un assistant de configuration qui, étape après étape, vous permet de paramétrer la ressource selon vos besoins.

La plupart du temps, vous devrez choisir la localisation de la ressource, le modèle, quelques paramètres personnalisables et, dans certains cas, le mode de facturation.

### Les outils de gestion

Dans votre projet Public Cloud, plusieurs outils de gestion sont disponibles pour configurer vos ressources, vos utilisateurs et vos paramètres. Vous pouvez y accéder depuis la partie inférieure du menu de gauche. Les outils sont regroupés sous deux sections principales : **Management Interfaces**, qui contient le lien vers l’interface Horizon, et **Paramètres**, qui regroupe toutes les options de configuration du projet (utilisateurs, quotas, SSH, facturation, contacts, etc.).

|Entrée du menu|Description|
|---|---|
|**Horizon**|C'est l'[interface graphique](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) habituellement disponible sur OpenStack. Elle n'est pas modifiée, ce qui permet aux utilisateurs qui ont l'habitude de cette interface de retrouver leurs réflexes.|
|**Utilisateurs & Rôles**|Permet de [créer des utilisateurs](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) et de leur attribuer un rôle. Ces utilisateurs permettent notamment d'accèder directement aux APIs ou à l'interface Horizon. Vous pouvez par exemple créer un utilisateur pour vos opérations de maintenance classiques et un utilisateur pour vos outils d'automatisation, comme par exemple Terraform.|
|**Quota & Régions**|Cet outil vous permet de piloter les localisations et les limites de ressources disponibles sur votre projet.<br><br>**Les quotas** : Suivant certains critères (nombre de factures déjà payées, utilisation d'autres produits OVHcloud), notre système met en place des quotas (des limites) au nombre de ressources que vous pouvez créer, ceci dans le but d'éviter tout problème d'impayés. Par défaut, le système augmente vos quotas automatiquement quand certains critères sont atteints. Vous pouvez cependant [effectuer une augmentation manuelle d'un quota](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota) depuis cet outil.<br><br>**Les régions** : Public Cloud est disponible dans plusieurs localisations dans le monde. De plus, chaque localisation peut comporter plusieurs « régions » (notion propre à OpenStack). Par exemple, pour un client européen, la zone APAC (Asie Pacifique) est désactivée par défaut. Si cela correspond à vos besoins, vous pouvez activer de nouvelles régions depuis ce menu.|
|**Clés SSH**|Un outil qui vous permet de [gérer vos clés SSH](/pages/public_cloud/compute/creating-ssh-keys-pci) de manière centralisée.|
|**Facturation**|Public Cloud fonctionnant en « *pay as you go* », les factures sont éditées en fin de mois. Dans [ce menu](/pages/public_cloud/public_cloud_cross_functional/analyze_billing), vous pourrez suivre votre consommation actuelle, voir une prévision de la prochaine facture et bien sûr retrouver vos précédentes factures.|
|**Crédits & Vouchers**|Ce menu vous permet de consulter la consommation d'un coupon, d'en ajouter un ou d'[ajouter du crédit](/pages/account_and_service_management/managing_billing_payments_and_services/add_cloud_credit_to_project) directement sur votre projet Public Cloud.|
|**Savings Plans**| Il s'agit d'un  modèle de tarification offrant des remises sur le prix de certaines ressources, en contrepartie d’un engagement sur la durée pouvant aller de 1 à 36 mois.|
|**Contacts & droits**|Outre la possibilité de changer le contact technique ou le contact de facturation de votre projet, vous aurez la possibilité d'[ajouter d'autres contacts](/pages/public_cloud/compute/change_project_contacts) (compte OVHcloud) pour administrer techniquement votre projet. Vous pouvez également ajouter des utilisateurs en consultation uniquement (« *read-only* »).|
|**Paramètres du projet**|Ce dernier outil vous permet de configurer les paramètres généraux du projet comme son nom, sa configuration en tant que « projet par défaut du compte », la compatibilité HDS, ou encore de [supprimer votre projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/delete_a_project)|

### Gestion des services

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/nJtrrGhqYrQ?si=xE0hEJxI8G2RSVio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> [!primary]
>
> Dans cette section, nous vous présentons un aperçu des différentes options de gestion des services proposées par OVHcloud, à travers trois outils principaux : l'espace client OVHcloud, Horizon et l'API OpenStack. Chacun de ces outils a été conçu pour répondre à des besoins spécifiques en fonction de votre niveau d'expertise, de vos préférences en termes de gestion, ainsi que de vos exigences de performance et de personnalisation.
>
> La matrice ci-dessous compare les caractéristiques clés de chaque outil afin de vous aider à choisir la solution la mieux adaptée à vos besoins. Que vous soyez débutant, utilisateur intermédiaire ou expert en automatisation, cette comparaison vous permettra de mieux comprendre les avantages, la facilité d'utilisation, les niveaux de compétence requis, et la scalabilité de chaque outil.
>

| Critères/Caractéristiques                   | Espace client OVHcloud | Horizon | OpenStack API |
| ------------------------------------------- | ---------------------- | ------- | ------------- |
| Avantages principaux                        | Interface intuitive, idéale pour une prise en main rapide. | Offre un contrôle accru pour les utilisateurs expérimentés, avec une vue avancée des paramètres. | Automatisation complète, avec intégration fluide à d'autres outils. |
| Niveau de compétence requis                 | Accessible à tous, idéal pour les débutants ou les besoins simples | Intermédiaire, requiert une certaine expertise (Administrateurs systèmes, Ingénieurs Cloud…) | Avancé, nécessite des compétences en scripting/API (Architectes Cloud, Ingénieurs DevOps, Experts en automatisation) |
| Facilité d'utilisation                      | Intuitive et accessible | Avancée mais visuelle | Technique |
| Personnalisation                            | Faible – Idéal pour des configurations standards et rapides, avec un contrôle avancé limité. | Moyenne – Interface graphique offrant des réglages avancés (réseau, stockage, etc.), bien que restreints par l’interface utilisateur. | Très élevée – Personnalisation quasi complète via API, avec possibilité de créer des scripts, des workflows automatisés et des architectures sur mesure. |
| Performances et scalabilité                 | Performances limitées et scalabilité basique. Adapté aux déploiements de petite taille ou non critiques. La scalabilité est généralement manuelle et plus lente. Idéal pour des environnements statiques ou des petits projets. | Performances moyennes avec une gestion améliorée de la scalabilité via l'interface graphique. Scalabilité plus rapide qu'avec l'espace client OVHcloud., mais limitée par l’interface. Adapté aux projets de taille moyenne ou nécessitant une certaine évolutivité. | Performances optimales et scalabilité complète. Permet des déploiements massifs, automatisés et rapides via des scripts ou des outils tiers. Idéal pour des infrastructures dynamiques, des charges lourdes et des environnements nécessitant une haute élasticité. Recommandé pour des architectures critiques. |
| Périmètres d'utilisation (Compute)          | - Création et gestion simplifiée des machines virtuelles (VM).<br> - Redimensionnement des VM après création (modification du modèle flavor à chaud ou à froid, selon les ressources disponibles).<br> - Sélection de configurations standards pour les VM (RAM, CPU, stockage).<br> - Gestion des actions essentielles : démarrage, arrêt et suppression des VM.<br> - Accès aux snapshots pour des sauvegardes rapides et restaurations simplifiées.<br> - Attribution et gestion des adresses Floating IP.<br> - Création et administration basique des disques additionnels.<br> - Supervision des ressources avec un monitoring essentiel (CPU, mémoire, stockage). | - Gestion avancée des accès : prise en charge du contrôle des accès basé sur les rôles (RBAC) pour une gestion multi-utilisateurs sécurisée.<br> - Administration réseau avancée : création et gestion de réseaux privés complexes associés aux VM (réseaux internes, sous-réseaux).<br> - Déploiement de VM avec configurations réseau spécifiques, incluant la gestion de plusieurs interfaces réseau.<br> - Utilisation d'images personnalisées pour la création de VM, en alternative aux images standards proposées par OVHcloud.<br> - Intégration de workflows préconfigurés via Horizon pour automatiser les déploiements et configurations. | - Automatisation complète : toutes les actions disponibles dans l'espace client OVHcloud et Horizon sont réalisables via l’API, avec la possibilité de les automatiser et de les scripter.<br> - Déploiement d’infrastructures en mode Infrastructure as Code (IaC) à l’aide d’outils comme Terraform, Ansible ou de scripts personnalisés.<br> - Intégration aux pipelines CI/CD pour des déploiements automatisés (ex. intégration avec GitLab CI).<br> - Gestion avancée des quotas de ressources (nombre de CPU, RAM total, etc.).<br> - Scalabilité dynamique : ajustement automatique des instances en fonction de la charge via API ou scripts.<br> - Monitoring et collecte de métriques personnalisées via API, offrant plus de granularité que l'interface Horizon ou l'espace client OVHcloud. |
| Périmètres d'utilisation (Network)          | - Création et gestion de réseaux privés (Private Networks).<br> - Association d'adresses Floating IP et d'adresses Additional IP.<br> - Configuration de routage de base (Basic Routing). | - Gestion avancée des règles de sécurité via les groupes de sécurité (Security Groups).<br> - Visualisation des topologies réseau pour une gestion simplifiée.<br> - Support complet des sous-réseaux IPv6 pour une connectivité moderne.<br> - Configuration des politiques QoS (Quality of Service) pour prioriser les ressources réseau. | - Accès à toutes les fonctionnalités disponibles sur Horizon et l'espace client OVHcloud.<br> - Création de routes personnalisées pour une gestion réseau plus flexible.<br> - Configuration précise des politiques QoS (Quality of Service).<br> - Gestion avancée des VRRP (Virtual Router Redundancy Protocol) pour assurer la redondance des routeurs.<br> - Automatisation des actions réseau grâce à des scripts (Infrastructure as Code).<br> - Intégration avec des solutions SDN (Software-Defined Networking) pour une gestion réseau agile. |
| Périmètres d'utilisation (Storage & backup) | - Création et gestion des volumes de stockage : Object Storage, Block Storage et File Storage.<br> - Sauvegarde automatique basique (snapshots) des volumes, avec possibilité de restauration.<br> - Association des volumes de stockage aux instances pour un accès simplifié.<br> - Gestion des conteneurs Object Storage (Swift) pour organiser les données.<br> - Visualisation de l'état des volumes et de l'espace de stockage utilisé.<br> - Ajout et gestion de fichiers dans un Object Storage. | - Gestion avancée des snapshots : rétention, duplication et autres options pour un contrôle précis des sauvegardes.<br> - Gestion détaillée des partages de volumes (multi-attach) pour une flexibilité accrue.<br> - Création et gestion des sauvegardes planifiées avec des politiques de sauvegarde personnalisables.<br> - Surveillance de l'utilisation des quotas de stockage pour un suivi optimal de l'espace disponible. | - Fonctionnalités accessibles via Horizon et l'espace client OVHcloud.<br> - Intégration et automatisation via scripts (Infrastructure as Code) pour une gestion fluide.<br> - Configuration avancée des partages réseau (NFS, CIFS) pour une flexibilité accrue dans l'organisation des fichiers.<br> - Gestion précise des métadonnées des objets dans Object Storage pour un contrôle optimal des données.<br> - Configuration avancée de la réplication et du versioning d'objets pour une haute disponibilité et une gestion des versions complète.<br> - Accès direct à l'API Swift pour une intégration fluide avec des outils tiers.<br> - Création de workflows personnalisés pour automatiser et gérer efficacement les processus de sauvegarde. |

## Aller plus loin

[Créer une première instance Public Cloud et s’y connecter](/pages/public_cloud/compute/public-cloud-first-steps)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
