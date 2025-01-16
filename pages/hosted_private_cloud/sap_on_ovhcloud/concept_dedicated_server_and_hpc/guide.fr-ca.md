---
title: "SAP HANA on Bare Metal et serveurs d'application SAP sur VMware on OVHcloud"
excerpt: "Cette page vous présente une architecture hybride utilisant un serveur dédié HGR-SAP et la solution VMware on OVHcloud"
updated: 2023-09-28
---

## Objectif

Ce concept vous permet de construire une architecture basée sur une base de données SAP HANA jusqu'à 1,5 TB et la solution VMware on OVHcloud pour utiliser l'ensemble des fonctionnalités (templates OVA, Zerto, NSX, DRS, Fault Tolerance, High Availability) pour vos serveurs d'application SAP sur une unique localisation OVHcloud ou multiple.

![schema](images/concept-hybrid.png){.thumbnail}

| Objectif | Description |
| --- | --- |
| Objectif #1 | Construire une infrastructure SAP aux coûts maîtrisés, basée sur la solution VMware on OVHcloud pour les serveurs d'application SAP et des serveurs dédiés pour héberger les bases de données SAP HANA. |
| Objectif #2 | Aucun besoin de conformité avec les réglementations telles que la qualification SecNumCloud ou la certification PCI DSS. |
| Objectif #3 | Une perte de données maximale admissible de 15 minutes. |
| Objectif #4 (optionnel) | Une infrastructure SAP disponible sur une seconde localisation OVHcloud qui peut être activée dans le cas d'un incident majeur affectant la localisation OVHcloud principale. Cette seconde localisation OVHcloud propose une perte de données maximale admissible proche de zéro. |

## Éléments du concept

### 1 - Connectivité réseau

Afin de garantir la qualité de la liaison entre vos locaux et votre infrastructure SAP hébergée sur OVHcloud, nous recommandons d'utiliser OVHcloud Connect. Cette solution vous fournit un lien sécurisé et performant entre vos locaux et OVHcloud. Pour obtenir plus d'informations, veuillez vous référer à la [documentation OVHcloud Connect](https://www.ovhcloud.com/fr-ca/network/ovhcloud-connect/).

Si vous ne souhaitez pas utiliser OVHcloud Connect, un VPN point-à-point peut également être déployé avec NSX. Pour connaître les étapes de configuration d'une passerelle VPN NSX avec OVHcloud, veuillez vous référer à [notre documentation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx_configurer_un_vpn_via_une_gateway_edge).

### 2 - Base de données SAP HANA

La base de données SAP HANA est hébergée sur un serveur dédié de la gamme SAP HANA on Bare Metal (références HGR-SAP-1/2/3). Pour découvrir comment déployer une base de données SAP HANA sur un serveur dédié OVHcloud, nous vous conseillons [notre documentation](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_install_sles_sap_hana_dedicated_server).

Déployer une base de données SAP HANA sur un serveur dédié offre une [infrastructure aux coûts maîtrisés](https://www.ovhcloud.com/fr-ca/bare-metal/uc-sap-hana/) conforme aux exigences SAP TDI (Tailored Datacenter Integration).

Dans le but de réduire la perte de données maximale admissible et le temps d'indisponibilité de votre infrastructure SAP sur une unique localisation OVHcloud, vous avez la possibilité d'ajouter une autre base de données SAP HANA sur un second serveur dédié et de configurer une réplication SAP HANA. Pour découvrir les différentes réplications supportées par SAP HANA, veuillez vous référer à la documentation officielle SAP disponible sur [SAP Help Portal](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/86267e1ed56940bb8e4a45557cee0e43.html?locale=en-US). Dans ce contexte, vous pourriez utiliser une réplication en mode SYNC.

Cette architecture vous prémunit d'une coupure de service causée par un incident matériel sur votre base de données SAP HANA hébergée sur une unique localisation OVHcloud.

### 3  - Serveurs d'application SAP

Les serveurs d'application SAP sont hébergés sur la solution VMware on OVHcloud. Nous conseillons de prendre connaissance de la [SAP Note 2161991](https://launchpad.support.sap.com/#/notes/2161991), particulièrement les chapitres 2 et 3, ainsi que la [SAP Note 2015392](https://launchpad.support.sap.com/#/notes/2015392) pour appliquer une configuration de vos machines virtuelles conforme.

La fonctionnalité Fault Tolerance fournie par VMware garantie la disponibilité de vos serveurs d'application SAP en cas de défauts sur l'hôte ESXi. Votre machine virtuelle est automatiquement activée sur un autre membre du cluster VMware. Nous conseillons de l'activer pour vos machines virtuelles qui hébergent les SAP Central Services (SCS), si vous ne gérez pas un cluster SAP pour ce service d'une autre manière. Le Fault Tolerance peut également être activé sur vos serveurs d'application SAP hébergeant un service critique.
Cependant, pour être en capacité d'activer le Fault Tolerance, la machine virtuelle ne peut excéder 8 vCPU et 128 GB de mémoire.

Pour les serveurs d'application SAP n'hébergeant pas de service critique, nous recommandons de vérifier que la fonctionnalité vSphere HA est activée sur votre cluster VMware. Cette fonctionnalité surveille l'état de santé de chaque hôte ESXi dans le cluster et redémarre automatiquement les machines virtuelles qui étaient hébergées sur l'hôte ESXi affecté.

La fonctionnalité vSphere Distributed Resource Scheduler peut également être activée et liée à une règle VM/Host pour éviter d'héberger l'ensemble des serveurs d'application SAP sur le même hôte ESXi.

### 4 - Infrastructure de sauvegarde

Nous recommandons d'utiliser un bucket Object Storage sur une localisation OVHcloud différente de celle où votre infrastructure est hébergée, pour vous protéger d'un incident majeur sur la localisation OVHcloud principale.

#### 4.1 - Base de données SAP HANA

OVHcloud fournit OVHcloud Backint Agent for SAP HANA pour sauvegarder votre base de données SAP sur un bucket Object Storage sur OVHcloud.

Cet agent backint vous permet de tirer parti des avantages d'un Object Storage, comme la politique de rétention ou encore la politique des objets immuables. Pour en savoir plus sur OVHcloud Backint Agent for SAP HANA, nous conseillons de prendre connaissance de ces guides :

- [Installer et utiliser OVHcloud Backint Agent pour SAP HANA](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_install_ovhcloud_backint_agent)
- [Utiliser OVHcloud Backint Agent avec plusieurs buckets Object Storage](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_configure_ovhcloud_backint_agent_several_buckets)

Pour garantir la restauration de la configuration de SAP HANA (fichiers INI), nous suggérons d'appliquer la valeur « true » pour le paramètre `include_configuration_backup`. Ce paramètre active la sauvegarde de tous les paramètres stockés dans les fichiers INI durant la sauvegarde des données de la base de données SAP HANA.

#### 4.2 - Système de fichiers

Afin de protéger vos systèmes de fichiers sur lesquels se trouvent des fichiers SAP importants, une solution économique peut être déployée avec l'exécution quotidienne d'un script copiant le contenu de ces systèmes de fichiers sensibles vers un bucket Object Storage OVHcloud.

Avec cette solution, seul le contenu de ces systèmes de fichiers sensibles est protégé. En cas de perte totale de la machine virtuelle, une construction complète de la machine virtuelle devra être effectuée avant d'effectuer la restauration du contenu.

Une autre solution pour accélérer la restauration d'une machine virtuelle est de déployer ou d'utiliser un serveur Veeam Enterprise Plus existant dans votre solution VMware on OVHcloud liée à un Object Storage OVHcloud.

Veeam Enterprise Plus vous permet de sauvegarder et de restaurer des snapshots de vos machines virtuelles. Cela vous assure une restauration rapide en cas d'incident sur votre solution VMware on OVHcloud.

Pour en savoir plus sur l'installation d'un serveur Veeam Enterprise Plus dans votre solution VMware on OVHcloud, veuillez vous référer à la [documentation OVHcloud](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication).

### 5 - Longue durée et archivage

Certaines données nécessitent d'être stockées et sauvegardées avec une rétention longue pour des raisons légales et/ou techniques, idéalement dans un espace de stockage dédié avec des accès limités une fois que la donnée a été écrite. OVHcloud propose une solution nommée Cold Archive pour ce type de besoin, solution ayant un haut niveau de sécurité pour vos données.

Plus d'information sur [OVHcloud](https://www.ovhcloud.com/fr-ca/public-cloud/cold-archive/).

### 6 - Connexion du support SAP

Concernant la connexion du support SAP à votre infrastructure SAP sur OVHcloud, nous vous conseillons de déployer une machine virtuelle dans votre solution VMware on OVHcloud puis de réaliser l'installation du service SAProuter sur cette machine virtuelle en suivant les instructions de la [documentation officielle SAP](https://support.sap.com/en/tools/connectivity-tools/saprouter/install-saprouter.html).

Sur votre NSX, vous devrez configurer une route entrante afin d'acheminer le trafic provenant du support SAP vers votre SAProuter.

Comme cette machine virtuelle est exposée sur Internet, adaptez vos règles de filtrage réseau entrantes pour n'autoriser que la connexion provenant des adresses IP publiques du support SAP. N'autorisez la communication depuis votre SAProuter vers votre infrastructure SAP que sur les ports et protocoles nécessaires. Toutes les informations sont disponibles sur les [pages du support SAP](https://support.sap.com/en/tools/connectivity-tools/saprouter/install-saprouter.html).

Nous vous proposons un [guide](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_vmware_saprouter) pour la mise en place du SAProuter dans un contexte VMware on OVHcloud et NSX.

### 7 - Double localisation OVHcloud (optionnel)

Pour éliminer le risque de perte d'une unique localisation OVHcloud, envisagez d'ajouter une seconde localisation OVHcloud.

#### 7.1 - Connectivité réseau

Comme avec la localisation OVHcloud principale, nous recommandons d'utiliser OVHcloud Connect. Si cette solution n'est pas envisageable pour vous, un VPN point-à-point peut également être déployé avec NSX pour la seconde localisation OVHcloud.

#### 7.2 - Base de données SAP HANA

Le système de réplication SAP HANA appelé SAP HSR est utilisé pour répliquer les données et la configuration de la localisation OVHcloud 1 (localisation OVHcloud principale) vers votre localisation OVHcloud 2 (localisation OVHcloud secondaire). Cette réplication vous permet de sécuriser vos données sur une autre base de données SAP HANA et ainsi réduire la perte de données maximale admissible.

Pour configurer une réplication SAP HANA, veuillez vous référer à la documentation SAP officielle disponible sur [SAP Help Portal](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/86267e1ed56940bb8e4a45557cee0e43.html?locale=en-US). Cependant, dans le contexte de ce concept avec deux localisations OVHcloud, nous vous conseillons d'activer la compression pour les données et les logs et d'utiliser le mode de réplication ASYNC. Plus d'information sur [SAP Help Portal](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/92447e0a105c4facad3553b28aaec318.html).

> [!warning]
> Si vous déclenchez une bascule vers votre seconde localisation OVHcloud, vous devriez également basculer les serveurs d'application SAP afin de garantir la performance entre vos serveurs d'application SAP et votre base de données SAP HANA.
>

Il est également possible d'ajouter une autre base de données SAP HANA sur la localisation OVHcloud principale sur un second serveur dédié et ainsi réduire la perte de données maximale admissible et le temps de rétablissement du service en cas d'incident matériel sur votre localisation OVHcloud principale.

Une réplication n-tier est structurée de la manière suivante :

SAP HANA1<sub>(OVHcloud localisation 1)</sub> -> SAP HANA2<sub>(OVHcloud localisation 1)</sub> -> SAP HANA3<sub>(OVHcloud localisation 2)</sub>.

Pour connaître les étapes de configuration de la réplication, veuillez vous référer à la documentation sur [SAP Help Portal](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/ca6f4c62c45b4c85a109c7faf62881fc.html?locale=en-US).

#### 7.3 - Serveurs d'application SAP

Afin de sécuriser votre infrastructure en cas d'incident majeur sur votre localisation OVHcloud principale, nous vous conseillons d'activer la fonctionnalité appelée Zerto pour votre solution VMware on OVHcloud, vous permettant de répliquer vos machines virtuelles sur un service VMware on OVHcloud hébergé sur une seconde localisation OVHcloud. Avec cette fonctionnalité, vous sécurisez vos serveurs d'application SAP sur une seconde localisation OVHcloud avec une réplication synchrone. Vous réduisez ainsi le temps de rétablissement du service et la perte de données maximale admissible si vous basculez sur votre localisation secondaire OVHcloud.

Pour découvrir les étapes d'activation de cette fonctionnalité, veuillez vous référer à la [documentation OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service).

> [!warning]
> Si vous déclenchez une bascule sur votre seconde localisation OVHcloud à travers Zerto, la base de données SAP HANA doit également basculer, afin d'assurer la performance entre vos serveurs d'application SAP et la base de données SAP HANA.
>

#### 7.4 - Infrastructure de sauvegarde

Comme mentionné précédemment, nous recommandons d'utiliser un bucket Object Storage sur une localisation OVHcloud différente de celle où votre infrastructure SAP est en production, afin d'éviter un incident majeur sur votre localisation OVHcloud principale. Une sauvegarde croisée est plus prudente pour vos données d'entreprise.

#### 7.5 - Connexion du support SAP

Pour garantir la continuité de la connexion avec le support SAP, nous recommandons de configurer un second SAProuter sur la seconde localisation OVHcloud. Si votre plan de reprise d'activité est déclenché et si le support SAP doit se connecter à vos systèmes SAP, seule l'adresse IP publique sur le SAP Support LaunchPad devra être mise à jour pour restaurer la connexion.

## Aller plus loin

- [Guide SAP HANA Administration pour SAP HANA Platform](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/86267e1ed56940bb8e4a45557cee0e43.html?locale=en-US)
- [2161991 - VMware vSphere configuration guideline](https://launchpad.support.sap.com/#/notes/2161991)
- [2015392 - VMware recommendations for latency-sensitive SAP applications](https://launchpad.support.sap.com/#/notes/2015392)
- [Utiliser Zerto Virtual Replication entre deux datacenters OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)
- [Installer Veeam Backup & Replication](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication)
- [Installer un SAProuter](https://support.sap.com/en/tools/connectivity-tools/saprouter/install-saprouter.html)
- [Déployer un SAProuter avec NSX](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_vmware_saprouter)
- [Installer et utiliser OVHcloud Backint Agent for SAP HANA](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_install_ovhcloud_backint_agent)
- [Utiliser OVHcloud Backint Agent avec plusieurs buckets Object Storage](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_configure_ovhcloud_backint_agent_several_buckets)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
