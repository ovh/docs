---
title: "VMware Cloud Director - Sauvegarde avec Veeam Data Platform"
excerpt: "Découvrez comment effectuer des sauvegardes et des restaurations avec Veeam (Plug-In) Data Platform / Protection pour votre VCD managé on OVHcloud"
updated: 2024-08-12
---

## Objectif

**Ce guide vous décrit les solutions de sauvegarde et de restauration du plugin VCD Veeam Data Platform.**

## Prérequis

- Un compte vCloud Director administrateur avec une Organisation VCD
- Un utilisateur avec le rôle Administrateur de l'organisation pour vous connecter au portail en libre-service Veeam Data Platform (le nouvel utilisateur admin d'un datacenter virtuel a le rôle par défaut).
- Avoir pris connaissances des guides VCD :
    - [Les concepts fondamentaux](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts)
    - [Comment se connecter à son organisation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-logging)
    - [Comment utiliser l'interface utilisateur](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-getting-started)
- Avoir une connaissance du fonctionnement de Veeam Backup

## En pratique

Veeam Data Platform accompagne VCD. Il utilise l'API VMware Cloud Director pour sauvegarder les vApps et les VMs et les restaurer directement dans la hiérarchie VMware Cloud Director.

Le service Veeam Data Platform est disponible et prêt à l'emploi pour les 3 offres OVHcloud (voir le [catalogue des fonctionnalités](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts#key-features)).

> [!warning]
>
> Pour que les options de traitement d'image et d'indexation du système de fichiers invité (compatibles avec l'application Veeam) fonctionnent avec les machines virtuelles Windows®, les outils VMware les plus récents doivent être installés. Les VMs Linux ne prennent pas en charge la reconnaissance des applications ou l'indexation du système de fichiers invité.
>
> Si vous utilisez le traitement d'images supportant les applications pour les sauvegardes de base de données MS SQL ou Oracle, les options compatibles avec les applications et restaurations d'éléments ne seront pas prises en charge. Une restauration complète de la machine virtuelle doit être réalisée, cela implique une fenêtre de temps d'arrêt pour tous les utilisateurs de la base de données. Il est impossible de relancer manuellement un échec de sauvegarde immuable. Vous devez exécuter une sauvegarde complète active ou attendre l'exécution de la prochaine sauvegarde planifiée (consultez la [documentation Veeam pour en savoir plus](https://helpcenter.veeam.com/docs/backup/vsphere/vcloud_manage_backup.html?ver=120)).


### Étape 1 - Sauvegarde

#### Accéder à la console d'administration Veeam Data Platform

Le service **Veeam Data Platform** dispose d’un plugin VCD pour sauvegarder des VMs et des vApp à partir de n’importe quel Virtual Data Center (VDC) de l’organisation. Il est disponible au niveau de l'organisation pour tout utilisateur VMware Cloud Director ayant le rôle d'administrateur de l'organisation.

Lorsque vous utilisez l'intégration VCD Protection des données avec Veeam pour créer des tâches de sauvegarde, vous pouvez choisir n'importe quelle instance de machine virtuelle à partir de n'importe quel datacenter virtuel de l'organisation.

Pour accéder au Portail Protection des données avec Veeam depuis Cloud Director, connectez-vous au portail client VCD avec un compte vCloud Director disposant des droits appropriés.

Dans le menu de la barre centrale supérieure, cliquez sur `Plus`{.action} et sélectionnez `Protection des données avec Veeam`{.action}

![VCD access to Veeam Backup](images/vcd_veeam_backup.png){.thumbnail}

La fenêtre du Plugin Veeam VCD s'ouvrira avec un bandeau gris/noir.

![VCD access to Veeam Backup](images/vcd_veeam_backup_repo_2.png){.thumbnail}

### Sauvegarder avec Veeam Data Platform

#### Repository

Par défaut, vous disposez des repository suivants :

- **Repository Bronze** : Ce repository est basé sur la classe [OVHcloud Object Storage Standard](/links/public-cloud/object-storage). Nous utiliserons un bucket le plus proche de votre environnement VCD.
- **Repository Silver** : Ce repository est basé sur la classe [OVHcloud Object Storage Standard](/links/public-cloud/object-storage). Nous utiliserons un Veeam SOBR (Scale-out Backup Repository) avec des compartiments de niveau de performance plus proches de votre environnement VCD et un niveau de capacité "tier" à partir de buckets d'une autre région OVHcloud. Nous utilisons également le mode de copie Veeam SOBR pour ajouter les sauvegardes des « performance extents » aux « capacity extents » dès leur création.

Troisième choix, le **Gold repository** inclut les options précédentes + OVHcloud Object Storage High performance :

- **Repository Gold** : Ce repository est basé sur la classe [OVHcloud Object Storage High performance](/links/public-cloud/object-storage).

Depuis votre espace client, vous pouvez activer le "Gold repository".

Tous ces repository ont un quota de stockage de 100 To. Vous pouvez contacter les [équipes de support](https://help.ovhcloud.com/csm?id=csm_get_help) pour augmenter ce quota.

#### Données incluses dans les sauvegardes

Lorsque Veeam Backup & Replication réalise des sauvegardes de vApp et de VM, il capture en plus les métadonnées de vApp.

Les métadonnées des applications virtuelles (vApp) et VM incluent :

- Les informations générales sur les **vApp** (applications virtuelles), où résident les VMs, telles que : **Nom des vApp**, **descriptions**, **description des VMs**.
- Les informations sur les réseaux **vApp** et les réseaux d'organisation auxquels le vApp est connecté.
- Les options de démarrage des **VM** (VM Startup options).
- Les informations utilisateurs.
- Le bail (Lease).
- Le quota.
- Les Modèles de stockages (Templates).

Les métadonnées vApp/VM sont stockées avec le contenu de la machine virtuelle. La capture des métadonnées vApp/VM est importante pour la restauration : sans elle, vous ne serez pas en mesure de restaurer les vApp et les VM vers VMware Cloud Director.

#### Les tâches de sauvegardes (*jobs*)

Les tâches de sauvegarde nécessitent 4 paramètres par défaut :

1. Les paramètres de tâches *(jobs*) : Nom / Dépôt ou Quota (Bronze/Silver/Gold : 100GB) / Description / Rétention (Jours/point de restauration)
2. Machines virtuelles (VM) : Ajout ou exclusion de machines virtuelles / vApp / vCloud Organisation
3. Traitement invité : Traitement prenant en charge les applications / Indexation du système de fichiers invité / Informations d'identification du système d'exploitation invité (credentials)
4. Notifications e-mail : Activation de notifications e-mail

Pour les machines virtuelles gérées par VMware Cloud Director, Veeam Backup & Replication offre un type spécial de tâche de sauvegarde : les tâches de sauvegarde VMware Cloud Director. Les tâches de sauvegarde de VMware Cloud Director traitent les objets VMware Cloud Director, assurent leur restauration correcte et la prise en charge des fonctionnalités spécifiques à Cloud Director.

Il est recommandé d'utiliser les tâches de sauvegarde de VMware Cloud Director pour sauvegarder les machines virtuelles gérées par VMware Cloud Director. Si vous sauvegardez des machines virtuelles gérées par VMware Cloud Director à l'aide d'une tâche de sauvegarde régulière, Veeam Backup & Replication effectuera une sauvegarde au niveau du serveur vCenter sous-jacent et ne capturera pas les métadonnées vApp. Par conséquent, vous ne serez pas en mesure de restaurer une machine virtuelle pleinement opérationnelle sur VMware Cloud Director.

#### Comment créer une tâche de sauvegarde avec Veeam Data Platform ?

Vous allez créer votre premiere tâche de sauvegarde depuis le plugin VCD Veeam Data Platform  :

Dans la console VCD Veeam, cliquez sur `Plus`{.action} et sélectionnez `Protection des données avec Veeam`{.action}

![VCD access to Veeam Backup](images/vcd_veeam_backup.png){.thumbnail}

Cliquez sur `Jobs`{.action} puis sur `Create`{.action}

![VCD Backup Job Veeam creation](images/vcd_veeam_backup_job_creation.png){.thumbnail}

Dans la fenêtre qui s'ouvre, spécifiez le nom de la tâche de sauvegarde, la description et la politique de rétention. Une fois les éléments définis (Job name, description, retention), cliquez sur `Next`{.action}.

![VCD Backup Job Veeam creation](images/vcd_veeam_backup_jobs.png){.thumbnail}

Vous devez ensuite choisir votre machine virtuelle (VM). Pour cela, cliquez sur `Add`{.action}.

![VCD Backup Job Veeam creation](images/vcd_veeam_backup_job_creation_3.png){.thumbnail}

Vous pouvez dérouler l'arborescence de votre organisation VMware Cloud Director et sélectionner votre VM.

Cliquez sur `Next`{.action}.

![VCD Backup Job Veeam creation](images/vcd_veeam_backup_job_creation_4.png){.thumbnail}

Votre machine virtuelle apparait alors dans la liste.

Cliquez sur `Next.`{.action}

![VCD Backup Job Veeam creation](images/vcd_veeam_backup_job_creation_5.png){.thumbnail}

> [!warning]
>
> L'étape suivante est primordiale car il s'agit d'ajouter les *credentials* nécessaires à votre VM.
> Si vous utilisez les réglages "Guest OS processing", vous devez ajouter l'identifiant et le mot de passe de votre utilisateur de sauvegarde selon votre type d'OS.
>
> Si vous avez des clés SSH à ajouter pour Linux, vous pouvez le faire.
>
> Pour Windows vous pouvez choisir un compte standard ou un compte de service managé.

Cliquez sur `Next`{.action}

![VCD Backup Job Veeam creation](images/vcd_veeam_backup_job_creation_6.png){.thumbnail}

Si nécessaire, vous pouvez ajouter des options de monitoring pour vos tâches de sauvegarde. Cliquez enfin sur `Finish`{.action}.

![VCD Backup Job Veeam creation](images/vcd_veeam_backup_job_creation_7.png){.thumbnail}

La tâche de sauvegarde apparait dans la liste.

### Comment sauvegarder une machine virtuelle avec Veeam ?

> [!primary]
>
> Aucun agent n'est nécessaire au fonctionnement des sauvegardes avec Veeam Data Platform depuis une machine virtuelle ou une vApp.
>

> [!warning]
> Pour pouvoir ajouter une tâche de sauvegarde depuis une VM (.. action -> ... Ajouter une tâche à Veeam), il doit être préalablement créé.
>

Dans la console VMware Cloud Director, cliquez sur `Centre de données`{.action} puis sur `Machines virtuelles`{.action}.

Choisissez une VM. Cliquez sur `Actions`{.action}, puis sur `Protection des données avec Veeam`{.action} et enfin sur `Ajouter une tâche à Veeam`{.action}.

![Backup VM](images/vcd_veeam_backup_vm.png){.thumbnail}

### Étape 2 - Restauration

#### Comment restaurer une VM ?

Veeam Backup dispose de plusieurs fonctionnalités de restauration :

- La connaissance des applications (Application Awareness)
- La stratégie par VM (Policies)

#### Données incluses dans les restaurations

Veeam Backup & Replication permet une restauration complète des VM vers VMware Cloud Director. Vous pouvez restaurer des VM distinctes vers des vApps, ainsi que des données de VM.

Pour la restauration, Veeam Backup & Replication utilise les métadonnées de la VM enregistrées dans un fichier de sauvegarde et restaure des attributs spécifiques de la VM. En conséquence, vous obtenez une machine virtuelle pleinement opérationnelle dans VMware Cloud Director, vous n'avez pas besoin d'importer la machine virtuelle restaurée dans VMware Cloud Director et d'ajuster les paramètres manuellement.

La restauration inclut les options suivantes :

- Restauration complète pour les vApps et les VM : **Full restore for vApps and VMs**
- Restauration des disques des VM : **VM files**
- Restauration des fichiers VM : **VM disks**

Dans ce cas, faites une restauration de type **Full (entière/complète)**.

#### Restauration entière "Full" d'une VM (machine virtuelle)

Le service backup managé par OVHcloud vous permet de restaurer des VMs classiques qui font partie de vApps et des VM autonomes qui ont été créées dans votre portail OVHcloud VMware Cloud Director.

Lorsque vous restaurez des VMs normales ou autonomes dans la hiérarchie vCloud Director, le processus de restauration comprend les étapes suivantes :

- Veeam utilise les métadonnées vApp capturées pour définir les paramètres vApp et l'emplacement d'origine de la machine virtuelle dans la hiérarchie VMware Cloud Director. 
- Veeam restaure les VMs du fichier de sauvegarde à leur emplacement d'origine ou à un autre emplacement. De plus, Veeam restaure tous les paramètres des VM.

#### Comment restaurer une machine virtuelle depuis le plugin Veeam Data Platform VCD ?

Pour effectuer une restauration complète, cliquez sur `Entire VM Restore`{.action}

![VCD_Veeam_restore_vm_1](images/vcd_veeam_restore_vm.png){.thumbnail}

Depuis la fenêtre que s'affiche, cliquez sur `Restore to the original location`{.action} pour la restauration d'une VM complète (full).

Puis cliquez sur `Next.`{.action}.

![VCD_Veeam_restore_vm_2](images/vcd_veeam_restore_vm_2.png){.thumbnail}

Dans la dernière étape, cliquez sur `Finish`{.action}. Si vous le souhaitez, vous pouvez aussi lancer la VM en cochant la case `Power on VM automatically`{.action}.

![VCD_Veeam_restore_vm_3](images/vcd_veeam_restore_vm_3.png){.thumbnail}

Ce processus est simplifié grâce à VCD, Veeam et OVHcloud.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
