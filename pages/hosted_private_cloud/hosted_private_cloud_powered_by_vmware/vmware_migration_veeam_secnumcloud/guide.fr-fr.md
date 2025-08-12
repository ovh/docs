---
title: Move2Cloud - Migration de charges VMware vers OVHcloud SecNumCloud avec Veeam Replication
excerpt: "Découvrez comment migrer vos charges de travail VMware on-premises vers un environnement Hosted Private Cloud SecNumCloud d’OVHcloud à l’aide de Veeam Replication."
updated: 2025-04-18
---

## Objectif

Ce guide explique comment migrer vos charges de travail VMware on-premises vers un **environnement OVHcloud Hosted Private Cloud (HPC) qualifié SecNumCloud**, en utilisant **Veeam Replication**.

>[!primary]
> **Ce guide s’applique aux environnements Hosted Private Cloud qualifiés SecNumCloud (SNC).**  
> Certaines fonctionnalités, comme OVHcloud IAM, ne sont pas disponibles dans les environnements SNC.

## Prérequis

Avant de commencer, assurez-vous de détenir :

- Un inventaire à jour des machines virtuelles avec FQDN, adresses IP, versions des OS et dépendances.
- Un plan de migration par lots, regroupés par pile applicative.
- Une liste complète des sous-réseaux et VLANs pour l’HPC cible.
- Des ressources de calcul et de stockage correctement dimensionnées (hosts, datastores, vSAN).
- Un tunnel VPN configuré ou un lien OVHcloud Connect (sans NAT).
- L’accès à [Veeam Backup & Replication](https://www.veeam.com/downloads.html?ad=top-sub-menu).
- Un second compte OVHcloud (NIC) pour commander le service Veeam Enterprise (obligatoire en environnement SNC).

## En pratique

![migration](images/secnumcloud.png){.thumbnail}

### Étape 1 : Faire l’inventaire des VMs source et de la configuration réseau

- Listez toutes les VMs sources avec leur FQDN, IP et version de système d’exploitation.
- Regroupez les VMs par dépendance applicative (web/app/db) pour définir des lots de migration.
- Répertoriez les sous-réseaux et VLANs. Le vRack d’OVHcloud prend en charge plus de 4000 VLANs, ce qui vous permet de conserver votre plan IP initial.

### Étape 2 : Dimensionner les ressources de votre HPC

- Définissez les besoins en cœurs, RAM et stockage selon votre ratio de consolidation actuel (ex. vCPU/pCPU).
- Choisissez entre **datastores NFS** et **vSAN** selon vos besoins en IOPS.
- Si vous utilisez NSX-T :
    - Planifiez les segments et overlays.
    - Évaluez le trafic nord/sud.
    - Choisissez vos pare-feu virtuels (Stormshield, FortiVM, Palo Alto VM-Series).
- Pour les services exposés à Internet, demandez des IP publiques supplémentaires ou utilisez la [fonction BYOIP](/links/network/byoip).

### Étape 3 : Autoriser l’accès à vCenter via une liste blanche IP

L’accès à vCenter est restreint par défaut dans les environnements OVHcloud. Pour le débloquer :

- Suivez le guide « [Autoriser des IP à se connecter au vCenter](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/autoriser_des_ip_a_se_connecter_au_vcenter) » pour autoriser les IP de votre infrastructure source et des composants Veeam.
- Pour éviter la double authentification (2FA) sur les composants Veeam, consultez la section *Application access permission* du guide « [Utilisation de la double authentification (2FA) sur votre infrastructure Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/utilisation_2FA) ».

### Étape 4 : Configurer les rôles et autorisations

IAM n’étant pas disponible en SecNumCloud, la gestion des accès utilisateurs se fait localement dans vSphere.  
Pour savoir comment créer des comptes locaux et activer l’authentification à deux facteurs, suivez le guide « [Interface securisée](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/interface-secure) ».

### Étape 5 : Construire votre réseau cible

Préparez en amont l’architecture réseau :

- Créez une **matrice de flux** indiquant le trafic autorisé entre VMs (VLAN + protocole).
- Utilisez les **distributed vSwitches (dVS)** et VLANs préconfigurés par OVHcloud.
- Si vous utilisez NSX-T, vous devrez configurer les gateways Tier-0/Tier-1 et les règles de firewall distribué.

Pour débuter avec NSX-T, référez-vous au guide « [Premiers pas avec NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps) ».

### Étape 6 : Déployer les services cœur

Pour limiter les échanges réseau avec votre infrastructure on-premise, déployez directement dans l’HPC cible :

- **NTP** : Utilisez `ntp.ovh.net`.
- **DNS** : Installez un contrôleur de domaine si nécessaire.
- **Authentification** : Mettez en place une solution locale ou hybride.

### Étape 7 : Installer le serveur Veeam B&R dans le HPC OVHcloud

Vous devez déployer un serveur **Veeam Backup & Replication (B&R)** directement dans le Hosted Private Cloud.  
En environnement SNC, cette commande doit être passée depuis un **second NIC OVHcloud**.

Pour l’installation pas à pas, suivez notre guide « [Installer Veeam Backup & Replication](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication) ».

### Étape 8 : Mettre en place la connectivité sécurisée

Créez un tunnel sécurisé entre votre infrastructure on-premise et l’HPC en utilisant :

- [NSX avec IPsec](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-12-configure-ipsec)
- [Stormshield](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/IPSec_VPN/IPSEC_VPN.htm) ou [OPNsense](https://docs.opnsense.org/manual/how-tos/ipsec-s2s.html)

Pour plus de performance et une latence réduite, vous pouvez utiliser [OVHcloud Connect](/links/network/ovhcloud-connect).

> [!warning]
> Les environnements SNC requièrent des SPN. Pour en savoir plus, consultez le guide  « [VPN-SPN - Présentation du concept](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-vpn-spn) ».

### Étape 9 : Déployer le proxy Veeam on-premise

Sur votre infrastructure source, configurez un serveur pour jouer le rôle de **proxy Veeam**, chargé du transfert des données pendant la réplication.

Suivez le [guide officiel de configuration du proxy Veeam](https://helpcenter.veeam.com/docs/backup/vsphere/add_vmware_proxy.html?ver=120).

### Étape 10 : Créer les jobs de réplication

Dans Veeam B&R, configurez vos jobs de réplication avec pour cible le Hosted Private Cloud.

Suivez les étapes détaillées dans [ce guide Veeam](https://helpcenter.veeam.com/docs/backup/vsphere/replica_job.html?ver=120).

### Étape 11 : Lancer la réplication

Démarrez les jobs de réplication et suivez leur progression depuis la console Veeam.

Pour les modifier, suspendre ou redémarrer, consultez [cette section de la documentation Veeam](https://helpcenter.veeam.com/docs/backup/vsphere/managing_replication_jobs.html?ver=120).

### Étape 12 : Tester la réplication

Une fois les jobs terminés, vous pouvez effectuer un test de bascule (`Failover Now`).

Pour cela, référez-vous au documentations suivantes :

- [Guide Failover](https://helpcenter.veeam.com/docs/backup/vsphere/failover.html?ver=120)
- [Annulation du failover](https://helpcenter.veeam.com/docs/backup/vsphere/undo_failover.html?ver=120)

### Étape 13 : Effectuer la migration finale

Le jour de la bascule, exécutez un `Planned Failover` dans Veeam. Cela éteint les VMs on-premise, synchronise les dernières données, puis démarre les VMs dans l’HPC.

Suivez le guide « [Planned Failover](https://helpcenter.veeam.com/docs/backup/vsphere/planned_failover.html?ver=120) ».

### Étape 14 : Vérifier les applications

Après la bascule :

- Assurez-vous que toutes les VMs sont en ligne et accessibles.
- Testez l’AD, les DNS, l'antivirus, les bases de données, les services web et les applicatifs critiques.

### Étape 15 : Confirmer la bascule permanente

Pour finaliser la migration, utilisez la fonction `Permanent Failover` dans Veeam.

Suivez le guide « [Permanent Failover](https://helpcenter.veeam.com/docs/backup/vsphere/permanent_failover.html?ver=120) ».

### Étape 16 : Migrer les VMs vers le stockage cible

Vos charges sont maintenant dans le cloud. Utilisez **Storage vMotion** pour déplacer les VMs vers les datastores NFS ou vSAN adaptés à vos besoins.

Consultez le guide « [VMware Storage vMotion](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_storage_vmotion) ».

### Étape 17 : Créer des jobs de sauvegarde

Protégez vos VMs à long terme en créant des jobs de sauvegarde Veeam vers le **stockage objet OVHcloud** (compatible S3<sup>(1)</sup>).

Suivez les étapes décrites dans notre guide « [Object Storage - Utiliser Object Storage avec Veeam](/pages/storage_and_backup/object_storage/s3_veeam) ».

<sup>1</sup> : S3 est une marque déposée d’Amazon Technologies, Inc. Le service d’OVHcloud n’est ni sponsorisé, ni approuvé, ni affilié de quelque manière que ce soit à Amazon Technologies, Inc.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou demandez une analyse personnalisée de votre projet à nos experts de l’équipe [Professional Services](/links/professional-services).

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le canal [Discord](https://discord.gg/ovhcloud) dédié.

Échangez avec notre [communauté d'utilisateurs](/links/community).