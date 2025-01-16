---
title: "Infrastructure SAP avec la solution VMware on OVHcloud"
excerpt: "Ce concept vous présente une architecture utilisant la solution VMware on OVHcloud SAP HANA pack"
updated: 2023-09-05
---

## Objectif

Ce concept vous permet de construire une architecture basée sur une base de données jusqu'à 1,5 TB et utiliser l'ensemble des fonctionnalités VMware on OVHcloud (templates, Zerto, NSX, DRS, Fault Tolerance, High Availability) pour votre infrastructure SAP sur une unique localisation OVHcloud ou multiple.

![schema](images/concept-vmware.png){.thumbnail}

| Objectif | Description |
| --- | --- |
| Objectif #1 | Construire une infrastructure SAP basée sur OVHcloud Managed VMware vSphere®, Hyperconverged Storage SAP HANA pack ou OVHcloud Managed VMware vSphere®, Software-Defined Datacenter SAP HANA pack. |
| Objectif #2 | Aucun besoin de conformité avec les réglementations de qualification SecNumCloud ou de certification PCI DSS. |
| Objectif #3 | Une perte de données maximale admissible de 15 minutes. |
| Objective #4 (optionnel) | Une infrastructure SAP disponible sur une seconde localisation OVHcloud qui peut être activée dans le cas d'un incident majeur affectant la localisation OVHcloud principale. Cette seconde localisation OVHcloud propose une perte de données maximale admissible proche de zéro. |

## Éléments du concept

### 1 - Connectivité réseau

Afin de garantir la qualité de la liaison entre vos locaux et votre infrastructure SAP hébergée sur OVHcloud, nous recommandons d'utiliser OVHcloud Connect. Cette solution vous fournit un lien sécurisé et performant entre vos locaux et OVHcloud. Pour obtenir plus d'informations, veuillez vous référer à la [documentation OVHcloud Connect](https://www.ovhcloud.com/fr-ca/network/ovhcloud-connect/).

Si vous ne souhaitez pas utiliser OVHcloud Connect, un VPN point-à-point peut également être déployé avec NSX. Pour connaître les étapes de configuration d'une passerelle VPN NSX avec OVHcloud, veuillez vous référer à [notre documentation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-12-configure-ipsec).

### 2 - Base de données SAP HANA

Nous recommandons de prendre connaissance de la [SAP Note 2161991](https://launchpad.support.sap.com/#/notes/2161991), spécifiquement les chapitres 2 et 3, la [SAP Note 2015392](https://launchpad.support.sap.com/#/notes/2015392) ainsi que le [SAP Confluence](https://wiki.scn.sap.com/wiki/pages/viewpage.action?pageId=517013587) pour appliquer une configuration conforme entre SAP et les machines virtuelles.

OVHcloud propose un template de machine virtuelle SAP HANA. Vous avez la possibilité de l'utiliser pour déployer une machine virtuelle pour SAP HANA avec SUSE Linux Enterprise Server for SAP Application (SLES4SAP) d'installé (en mode BYOL), ainsi que les disques configurés suivant les recommandations de SAP et VMware.

Ce template offre également la possibilité de déployer une base de données SAP HANA et OVHcloud Backint Agent for SAP HANA après avoir rempli un formulaire. Pour en savoir plus à propos de ce template, veuillez vous référer à [notre guide](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_sap_hana_template_vmware).

La fonctionnalité Fault Tolerance fournie par VMware n'est pas applicable pour protéger les machines virtuelles SAP HANA. Cela est dû aux limitations de gestion des ressources par la fonctionnalité Fault Tolerance. Cependant, nous conseillons d'activer la fonctionnalité vSphere HA qui supervise l'état de santé de chaque host ESXi dans le cluster et redémarre automatiquement les machines virtuelles qui étaient hébergées sur le host ESXi impacté.

Nous recommandons d'être attentif avec le « NUMA sharing ». Pour en savoir plus à ce sujet, veuillez vous référer au [SAP Confluence](https://wiki.scn.sap.com/wiki/display/VIRTUALIZATION/SAP+HANA+on+VMware+vSphere) et à la [SAP Note 2470289](https://launchpad.support.sap.com/#/notes/2470289).

Si vous souhaitez réduire le temps maximal admissible de coupure de service et de perte de données sur une unique localisation OVHcloud, vous avez la possibilité de gérer un cluster SAP HANA avec SUSE. Nous proposons une [documentation dédiée](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_configure_sap_hana_cluster) pour vous aider à l'implémentation de cette configuration. Dans ce contexte, nous recommandons de créer des règles d'anti-affinité dans le but d'éviter d'héberger les bases de données SAP HANA sur le même host ESXi.

### 3 - Serveurs d'application SAP

La fonctionnalité Fault Tolerance fournit par VMware garantit la disponibilité de vos serveurs d'application SAP en cas d'incident sur un host ESXi. Vos machines virtuelles sont automatiquement activées sur un autre membre de votre cluster VMware. Nous conseillons d'activer cette fonctionnalité sur vos machines virtuelles qui hébergent les services centraux SAP (SCS) et si vous ne gérez pas un cluster SAP pour ce service par un autre moyen. La fonctionnalité Fault Tolerance peut également être activée pour vos serveurs d'application SAP qui hébergent des services critiques. Découvrez comment activer cette fonctionnalité dans [notre guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_fault_tolerance).

Cependant, pour activer cette fonctionnalité, la machine virtuelle ne peut excéder les 8 vCPUs et les 128 GB de mémoire.

Pour les serveurs d'application SAP qui n'hébergent pas de service critique, la fonctionnalité vSphere HA est recommandée.

Enfin, la fonctionnalité vSphere Distributed Resource Scheduler peut également être activée avec une règle VM/Host dans le but d'éviter d'héberger l'ensemble des serveurs d'application SAP sur un même host ESXi. Pour en savoir plus sur cette fonctionnalité, veuillez vous référer à [notre guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new).

### 4 - Infrastructure de sauvegarde

Nous recommandons d'utiliser un bucket Object Storage sur une localisation OVHcloud différente de celle où votre infrastructure est hébergée, pour vous protéger d'un incident majeur sur la localisation OVHcloud principale.

#### 4.1 - Base de données SAP HANA

OVHcloud fournit OVHcloud Backint Agent for SAP HANA pour sauvegarder votre base de données SAP sur un bucket Object Storage sur OVHcloud.

Cet agent backint vous permet de tirer parti des avantages d'un Object Storage, comme la politique de rétention ou encore la politique des objets immuables. Pour en savoir plus sur OVHcloud Backint Agent for SAP HANA, nous conseillons de prendre connaissance de ces guides :

- [Installer et utiliser OVHcloud Backint Agent pour SAP HANA](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_install_ovhcloud_backint_agent)
- [Utiliser OVHcloud Backint Agent avec plusieurs buckets Object Storage](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_configure_ovhcloud_backint_agent_several_buckets)

Pour garantir la restauration de la configuration de SAP HANA (fichiers INI), nous suggérons d'appliquer la valeur « true » pour le paramètre `include_configuration_backup`. Ce paramètre active la sauvegarde de tous les paramètres stockés dans les fichiers INI durant la sauvegarde des données de la base de données SAP HANA.

#### 4.2 - Système de fichiers

Afin de protéger vos systèmes de fichiers sur lesquels se trouvent des fichiers SAP importants, une solution économique peut être déployée avec l'exécution quotidienne d'un script copiant le contenu de ces systèmes de fichiers sensibles vers un bucket Object Storage sur OVHcloud.

Avec cette solution, seul le contenu de ces systèmes de fichiers sensibles est protégé. En cas de perte totale de la machine virtuelle, une construction complète de la machine virtuelle devra démarrer et la restauration du contenu pourra être réalisée.

Une autre solution pour accélérer la restauration d'une machine virtuelle est de déployer ou d'utiliser un serveur Veeam Backup and Replication existant dans votre solution VMware on OVHcloud lié à un Object Storage OVHcloud.

Veeam Backup and Replication vous permet de sauvegarder et de restaurer des snapshots de vos machines virtuelles. Cela vous assure une restauration rapide en cas d'incident sur votre solution VMware on OVHcloud.

Pour en savoir plus sur l'installation d'un serveur Veeam Backup and Replication dans votre solution VMware on OVHcloud, veuillez vous référer à la [documentation OVHcloud](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication).

### 5 - Longue durée et archivage

Certaines données nécessitent d'être stockées et sauvegardées avec une rétention longue pour des raisons légales et/ou techniques, idéalement dans un espace de stockage dédié avec des accès limités une fois que la donnée a été écrite. OVHcloud propose une solution nommée Cold Archive pour ce type de besoin, solution ayant un haut niveau de sécurité pour vos données.

Plus d'information sur [OVHcloud](https://www.ovhcloud.com/fr-ca/public-cloud/cold-archive/).

### 6 - Connexion du support SAP

Afin de permettre la connexion du support SAP à votre infrastructure SAP sur OVHcloud, nous vous conseillons de déployer une machine virtuelle dans votre solution VMware on OVHcloud, puis de réaliser l'installation du service SAProuter sur cette machine virtuelle en suivant les instructions de la [documentation officielle SAP](https://support.sap.com/en/tools/connectivity-tools/saprouter/install-saprouter.html).

Sur votre NSX, vous devrez configurer une route entrante afin d'acheminer le trafic provenant du support SAP vers votre SAProuter.

Comme cette machine virtuelle est exposée sur Internet, adaptez vos règles de filtrage réseau entrantes pour n'autoriser que la connexion provenant des adresses IP publiques du support SAP. N'autorisez la communication depuis votre SAProuter vers votre infrastructure SAP que sur les ports et protocoles nécessaires. Toutes les informations sont disponibles sur les [pages du support SAP](https://support.sap.com/en/tools/connectivity-tools/saprouter/install-saprouter.html).

Nous proposons une [documentation](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_vmware_saprouter) pour vous aider à déployer d'un SAProuter avec NSX.

### 7 - Double localisation OVHcloud (optionnel)

Pour éliminer le risque de perte d'une unique localisation OVHcloud, envisagez d'ajouter une seconde localisation OVHcloud.

#### 7.1 - Connectivité réseau

Comme avec la localisation OVHcloud primaire, nous recommandons d'utiliser OVHcloud Connect. Si cette solution n'est pas envisageable pour vous, un VPN point-à-point peut également être déployé avec NSX pour la seconde localisation OVHcloud.

#### 7.2 - Base de données SAP HANA

Le système de réplication SAP HANA appelé SAP HSR est utilisé pour répliquer les données et la configuration de la localisation OVHcloud principale vers votre localisation OVHcloud secondaire. Cette réplication vous permet de sécuriser vos données sur une autre base de données SAP HANA et ainsi réduire la perte de données maximale admissible.

Pour découvrir les modes de réplication supportés par SAP HANA, veuillez vous référer à la documentation SAP officielle disponible sur [SAP Help Portal](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/86267e1ed56940bb8e4a45557cee0e43.html?locale=en-US). Cependant, dans le contexte de ce concept avec deux localisations OVHcloud, nous vous conseillons d'activer la compression pour les données et les logs et d'utiliser le mode de réplication ASYNC. Plus d'information sur [SAP Help Portal](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/92447e0a105c4facad3553b28aaec318.html).

> [!warning]
> Si vous déclenchez une bascule vers votre seconde localisation OVHcloud, vous devriez également basculer les serveurs applicatifs SAP afin de garantir la performance entre vos serveurs applicatifs SAP et votre base de données SAP HANA.

Une autre solution est d'utiliser la fonctionnalité nommée Zerto dans votre solution VMware on OVHcloud, permettant de répliquer vos machines virtuelles sur solution VMware on OVHcloud hébergée sur une seconde localisation OVHcloud. Par défaut, toutes les 15 minutes, une sauvegarde des fichiers de log SAP HANA est écrite sur disque. Par conséquent, avec cette solution technique, la perte de données maximale admissible est de 15 minutes.

Si vous êtes intéressés par l'utilisation de Zerto dans un contexte SAP HANA, nous vous conseillons la [documentation Zerto](https://www.zerto.com/wp-content/uploads/2022/08/SAP-HANA-Data-Management-Using-Zerto.pdf).

#### 7.3 - Serveurs d'application SAP

Afin de sécuriser votre infrastructure en cas d'incident majeur sur votre localisation OVHcloud principale, nous vous conseillons d'activer la fonctionnalité Zerto pour votre solution VMware on OVHcloud, vous permettant de répliquer vos machines virtuelles sur une solution VMware on OVHcloud hébergée sur une seconde localisation OVHcloud. Avec cette fonctionnalité, vous sécurisez vos serveurs d'application SAP sur une seconde localisation OVHcloud avec une réplication synchrone. Vous réduisez ainsi le temps de rétablissement du service et la perte de données maximale admissible si vous basculez sur votre localisation secondaire OVHcloud.

Pour découvrir les étapes d'activation de cette fonctionnalité, veuillez vous référer à la [documentation OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service).

> [!warning]
> Si vous déclenchez une bascule sur votre localisation OVHcloud secondaire à travers Zerto, la base de données SAP HANA doit également basculer, afin d'assurer la performance entre vos serveurs applicatifs SAP et la base de données SAP HANA.

#### 7.4 - Infrastructure de sauvegarde

Comme mentionné précédemment, nous recommandons d'utiliser un bucket Object Storage sur une localisation OVHcloud différente de celle où votre infrastructure SAP est en production, afin d'éviter un incident majeur sur votre localisation OVHcloud principale. Une sauvegarde croisée est plus prudente pour vos données d'entreprise.

#### 7.5 Connexion du support SAP

Pour garantir la continuité de la connexion avec le support SAP, nous recommandons de configurer un second SAProuter sur la seconde localisation OVHcloud. Si votre plan de reprise d'activité est déclenché et si le support SAP doit se connecter à vos systèmes SAP, seule l'adresse IP publique sur le SAP Support LaunchPad devra être mise à jour pour restaurer la connexion.

## Aller plus loin

- [Setting up Zerto Virtual Replication between two OVHcloud datacenters](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)
- [Setting up Veeam Backup & Replication](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication)
- [Installing SAProuter](https://support.sap.com/en/tools/connectivity-tools/saprouter/install-saprouter.html)
- [Déployer un SAProuter avec NSX](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_vmware_saprouter)
- [Installer et utiliser OVHcloud Backint Agent pour SAP HANA](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_install_ovhcloud_backint_agent)
- [Utiliser OVHcloud Backint Agent avec plusieurs buckets Object Storage](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_configure_ovhcloud_backint_agent_several_buckets)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
