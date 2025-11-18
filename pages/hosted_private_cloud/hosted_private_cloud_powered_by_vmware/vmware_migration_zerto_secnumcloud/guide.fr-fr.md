---
title: Move2Cloud - Migration de charges de travail VMware vers OVHcloud Hosted Private Cloud SecNumCloud avec Zerto
excerpt: "Découvrez comment migrer des charges VMware on-premises vers un Hosted Private Cloud qualifié SecNumCloud à l’aide de Zerto Virtual Replication"
updated: 2025-07-17
---

## Objectif

Ce guide explique comment migrer vos charges de travail VMware on-premises vers un **Hosted Private Cloud (HPC) SecNumCloud OVHcloud** en utilisant **Zerto Virtual Replication**.

> [!primary]
> **Ce guide s’applique aux environnements Hosted Private Cloud qualifiés SecNumCloud (SNC).**
> Certaines fonctionnalités disponibles dans les environnements standards comme **OVHcloud IAM**, le **vRack** ou le **réseau NSX-T avancé** peuvent être restreintes ou indisponibles ici.
> Pour les environnements standards, consultez le guide suivant :
> [Move2Cloud - Migration de charges de travail VMware vers le Hosted Private Cloud OVHcloud avec Zerto](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_migration_zerto)

## Prérequis

Avant de commencer, assurez-vous de détenir :

- Un inventaire complet de vos machines virtuelles (VM) : FQDN, adresse IP, version du système d'exploitation, dépendances applicatives.
- Un plan de migration par lots regroupés par pile applicative.
- Une liste complète des VLAN, sous-réseaux et segments du réseau cible.
- Un environnement HPC correctement dimensionné (hosts, datastores, vSAN, NSX-T).
- Un tunnel VPN IPsec fonctionnel entre votre infrastructure sur site et OVHcloud.
- Un accès à la console Zerto et aux interfaces vCenter sur les deux environnements.

> [!warning]
> Depuis mai 2025, **Zerto ne prend pas en charge la réplication des VM avec le chiffrement VMEncrypt activé**.
> Le chiffrement au repos de vSAN est pris en charge. Vous pouvez également chiffrer vos VM après la migration.

## En pratique

![Move2CloudZerto](/pages/assets/screens/other/zerto/move2cloud-zerto.png){.thumbnail}

### Étape 1 : Définir votre périmètre de migration

À la fin de cette étape, vous détiendrez une liste structurée des charges de travail à migrer et la conception du réseau associée.

#### Étape 1.1 : Créer un inventaire des VM sources

Répertoriez toutes les machines virtuelles à migrer avec les informations suivantes :

- FQDN et adresse IP statique.
- Système d’exploitation et sa version.
- Application ou service associé.
- Dépendances entre les VM (par exemple : web/app/db).

Cet inventaire vous permet de regrouper les machines virtuelles en piles d'applications cohérentes pour la migration par lots.

#### Étape 1.2 : Regrouper les VM en lots de migration

Organisez vos VMs en lots applicatifs cohérents.

Chaque lot doit contenir toutes les machines virtuelles nécessaires à la migration et à l’exploitation d’une seule application, comme :

- VM frontend web.
- VM applicative.
- VM backend de base de données.

#### Étape 1.3 : Documenter la configuration réseau existante

Notez la configuration réseau complète utilisée par vos VM sources :

- Les VLAN utilisés et les sous-réseaux associés.
- Les plages d'adresses IP à conserver.
- Les flux autorisés (IP source/destination, ports, protocoles).

Cette conception réseau sera recréée dans votre tenant HPC OVHcloud à l'aide de segments de superposition NSX-T.

Retrouvez plus d'informations sur la planification du réseau dans notre guide « [Premiers pas avec NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps) ».

Pour obtenir des conseils supplémentaires sur l'utilisation de Zerto, référez-vous à la documentation suivante : [Installer la solution Zerto](https://help.zerto.com/bundle/Install.HV.HTML/page/Installing_the_Zerto_Solution.htm).

### Étape 2 : Planifier les ressources de votre Hosted Private Cloud

Cette étape vous aide à déterminer les ressources de calcul, de stockage et de réseau requises pour votre environnement HPC.

#### Étape 2.1 : Estimer le CPU et la mémoire

Examinez votre infrastructure actuelle pour calculer combien de vCPU et de RAM vous aurez besoin dans l'environnement cible.

Utilisez votre ratio de consolidation pCPU/vCPU existant pour dimensionner le nombre de `ESXi hosts` requis.

#### Étape 2.2 : Définir la capacité de stockage

En fonction de vos charges de travail, sélectionnez le type de stockage le plus approprié :

- `Datastores NFS` pour les charges de travail générales.
- `vSAN` pour les applications exigeantes en performances.

Estimez l'espace disque total nécessaire, plus la redondance le cas échéant.  
Si vos charges de travail nécessitent des IOPS élevées, vSAN est l'option privilégiée.

#### Étape 2.3 : Planifier le réseau cible

Planifiez votre réseau virtuel avec NSX-T :

- Seuls **les segments de superposition** sont pris en charge; les segments adossés à des VLAN ne sont pas autorisés.
- Définissez les besoins en matière de passerelles (Tier-0 et Tier-1) en fonction du routage interne.
- Configurez les règles de pare-feu pour le trafic est-ouest.

Aucune exposition directe à Internet n'est autorisée. Tous les accès doivent passer par des bastions ou des liens VPN approuvés.

> [!primary]
> La fonctionnalité [Bring Your Own IP (BYOIP)](/links/network/byoip) n'est pas disponible dans les environnements SecNumCloud.

### Étape 3 : Activer l'accès au vCenter

L'accès à `vCenter`{.action} est restreint par défaut dans les environnements SecNumCloud.

Vous devez demander l'accès au support OVHcloud.

1. Créez un ticket depuis votre [espace client OVHcloud](/links/manager).
2. Sélectionnez votre `Hosted Private Cloud`{.action}.
3. Fournissez la liste des IP sources qui nécessitent un accès.

Pour des instructions détaillées, référez-vous à notre guide « [Autoriser des IP à se connecter au vCenter](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/autoriser_des_ip_a_se_connecter_au_vcenter) ».

### Étape 4 : Configurer les rôles et les permissions

Cette étape garantit que les administrateurs et les outils comme Zerto ont un accès correct aux ressources vSphere au sein de votre Hosted Private Cloud OVHcloud.

#### Étape 4.1 : Utiliser la solution IAM (Identity and Access Management) d’OVHcloud

Configurez les rôles et permissions dans votre `Hosted Private Cloud`{.action} via la solution **IAM d'OVHcloud**.

> [!warning]
> **La solution IAM d'OVHcloud n’est pas disponible dans les environnements qualifiés SecNumCloud (SNC), PCI-DSS ou HDS.**
> Si vous utilisez l'un de ces environnements qualifiés, vous devez configurer les rôles et les autorisations directement dans vSphere ou utiliser une solution IAM externe telle que Microsoft Active Directory ou Okta.

Pour des instructions détaillées, référez-vous au [guide de configuration IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started).

#### Étape 4.2 : Connecter votre propre solution IAM

Si vous préférez utiliser votre fournisseur d'identité existant (comme Active Directory ou Okta), déployez un service d'annuaire directement dans votre tenant OVHcloud.

Vous pouvez également associer la solution IAM d’OVHcloud à votre serveur ADFS existant pour activer l’authentification unique basée sur SAML.

Pour cela, suivez notre guide « [Activer les connexions Active Directory Federation Services (AD FS) SSO avec votre compte OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-adfs) ».

#### Étape 4.3 : Comptes de service Zerto

Les composants Zerto nécessitent des rôles et des autorisations vSphere spécifiques pour fonctionner. Vous pouvez :

- Créer un compte dédié `zerto-admin` dans vSphere.
- Attribuer les privilèges nécessaires pour gérer la réplication et la restauration.

Les détails sur les autorisations requises sont disponibles dans la documentation de Zerto : [Rôles et autorisations dans Zerto](https://help.zerto.com/bundle/Admin.VC.HTML.90/page/Roles_and_Permissions_Within_.htm).

### Étape 5 : Construire le réseau cible

Avant de commencer tout test de réplication ou de failover de VM, votre réseau Hosted Private Cloud doit être prêt à recevoir les charges de travail. 

Cela inclut notamment la réplication de la structure source, la création des segments de réseau appropriés et la configuration des règles de pare-feu nécessaires.

#### Étape 5.1 : Recréer vos segments

Dans les environnements SecNumCloud, les segments sauvegardés par VLAN et le vRack ne sont pas disponibles.

Lors de la livraison de votre HPC, celui-ci est configuré par défaut avec un commutateur virtuel distribué. Vous devez utiliser uniquement des segments de superposition NSX-T.

Utilisez `NSX Manager` pour :

- Créer des segments de superposition pour chaque lot d'applications ou zone de service.
- Reproduire le plan d'adressage IP depuis votre inventaire.
- Attacher des segments aux passerelles concernées (généralement Tier-1).

N'exposez aucun segment à Internet. L'accès doit être routé par des bastions ou des liens VPN privés.

#### Étape 5.2 : Configurer le routage et les passerelles NSX-T

Dans les environnements SNC, les passerelles NSX-T sont utilisées uniquement pour le routage interne ou les flux VPN sécurisés.

- Une **Gateway Tier-1** gère le routage interne entre les segments de superposition.
- Les **Gateways Tier-0** peuvent être déployées, mais uniquement pour les liaisons VPN montantes approuvées.

Utilisez l'interface `NSX Manager` pour définir et gérer la configuration de votre passerelle.

Aucune connectivité IP externe/publique n'est autorisée.

#### Étape 5.3 : COnfigurer les règles de firewall

NSX-T fournit un **pare-feu distribué** qui contrôle le trafic est-ouest entre les machines virtuelles. Vous devez définir des règles pour :

- Les ports spécifiques des applications (par exemple : web → app, app → db).
- L'accès à la gestion des composants vCenter et Zerto.
- Facultatif : Les zones de quarantaine ou d'isolement pour les VM de test.

Si vous n'utilisez pas NSX-T, mettez en œuvre des règles similaires à l'aide du pare-feu de l'appliance virtuelle de votre choix (par exemple : FortiVM, Stormshield ou Palo Alto VM-Series).

Vous retrouverez un aperçu de la façon dont NSX gère ces fonctionnalités dans notre guide : [Premiers pas avec NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps).

> [!primary]
>
> Dans un environnement SecNumCloud, les règles de pare-feu doivent strictement restreindre le trafic aux flux internes ou aux points d'entrée sécurisés du VPN. Aucune règle DNAT/SNAT vers l'Internet public n'est autorisée.
>

### Étape 6 : Déployer les services core dans le HPC cible

Vos charges de travail migrées nécessiteront des services d'infrastructure de base pour fonctionner correctement lorsqu'elles seront en cours d'exécution dans votre Hosted Private Cloud.

#### Étape 6.1 : Déployer NTP

Assurez-vous que toutes les machines virtuelles et tous les services utilisent une source de temps cohérente. Vous pouvez configurer vos charges de travail HPC pour utiliser `ntp.ovh.net` comme serveur de temps fiable.

#### Étape 6.2 : Déployer les DNS

Si vos applications s'appuient sur une résolution DNS interne, déployez un contrôleur de domaine ou un serveur DNS dédié au sein de votre environnement HPC. Il peut s’agir d’un clone de votre serveur on-premises ou d’une nouvelle instance.

### Étape 6.3 : Mise en place des services d'authentification

Si votre authentification est basée sur Active Directory, déployez un contrôleur de domaine réplica dans le HPC.

Vous pouvez également établir une communication sécurisée entre l'AD on-premises et le client pour éviter la duplication des identités.

### Étape 7 : Installer et activer Zerto sur le tenant OVHcloud

Zerto doit être installé par OVHcloud dans les environnements SecNumCloud.

1. Créez un ticket depuis votre [espace client OVHcloud](/links/manager).
2. Sélectionnez votre `Hosted Private Cloud`{.action}.
3. Demandez l'installation de **Zerto Virtual Replication** pour votre client SNC.
4. Patientez le temps du déploiement par OVHcloud des ZVM, des ZVRA et des règles de pare-feu requises.

Tous les détails sont disponibles dans notre guide « [Utiliser Zerto entre OVHcloud et une plateforme tierce](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto-virtual-replication-customer-to-ovhcloud) ».

### Étape 8 : Installer Zerto sur le site source

Vous devez installer manuellement les composants Zerto sur votre infrastructure on-premises.

Suivez la procédure décrite dans le guide Zerto suivant : [Réaliser une installation rapide](https://help.zerto.com/bundle/Install.VC.HTML/page/Performing_an_Express_Installation.htm).

Les principaux composants sont les suivants :

- ZVM : Installé sur un serveur Windows avec accès vSphere.
- ZVRA : Déployé sur chaque hôte ESXi hébergeant des VM protégées.

Assurez-vous que :

- Les ports TCP 9071 et 9081 sont ouverts entre les ZVM.
- Les ports TCP 4007 et 4008 sont ouverts entre les ZVRA.

### Étape 9 : Configurer le tunnel VPN IPsec

Zerto nécessite **une communication directe** entre les ZVM et les ZVRA. Le NAT n'est pas pris en charge.

Mettez en place un tunnel IPsec site-à-site entre votre pare-feu local et l'environnement OVHcloud.

Vous pouvez utiliser n'importe quel périphérique compatible (par exemple : Fortinet, Palo Alto ou OPNsense).

Les détails et les paramètres sont disponibles dans notre guide « [Utiliser Zerto entre OVHcloud et une plateforme tierce](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto-virtual-replication-customer-to-ovhcloud) ».

### Étape 10 : Coupler les sites et créer des VPG

Une fois les ZVM en ligne et la communication validée :

1. Utilisez la console Zerto pour **coupler les deux sites**.
2. Créez votre premier **Virtual Protection Group (VPG)**.

Un VPG regroupe toutes les VM qui doivent être répliquées et basculées ensemble.

Retrouvez plus d'informations dans le guide Zerto suivant : [Créer un VPG](https://help.zerto.com/bundle/Admin.ZSSP.HTML.10.0_U3/page/Creating_a_VPG.htm) .

### Étape 11 : Surveiller l'état de la réplication

Surveillez chaque VPG depuis l'interface utilisateur Zerto :

- Confirmez que la réplication est active.
- Vérifiez le RPO (Recovery Point Objective).
- Résolvez les alertes avant d'exécuter un test ou un failover.

Si besoin, consultez le guide Zerto suivant : [Surveillance des groupes de protection virtuels](https://help.zerto.com/bundle/Admin.ZSSP.HTML.10.0_U3/page/Monitoring_Virtual_Protection_Groups.htm).

### Étape 12 : Exécuter un test de failover

Avant de migrer les charges de travail de production, testez le comportement de vos VM dans le tenant OVHcloud.

Utilisez l'option `Failover Test` dans l'interface utilisateur Zerto. Cela permet de mettre sous tension les machines virtuelles répliquées sans impacter la production.

Retrouvez ci-dessous les guides de Zerto à ce sujet :

- [Démarrage et arrêt des tests de failover](https://help.zerto.com/bundle/Admin.VC.HTML.10.0_U3/page/StartingFailoverTest.htm)
- [Que se passe-t-il après avoir démarré un test ?](https://help.zerto.com/bundle/Admin.VC.HTML.10.0_U3/page/What_Happens_After_Starting_a_Test.htm)

### Étape 13 : Exécuter la migration prévue

Lorsque vous êtes prêt à migrer :

1. Utilisez l'opération **Move** dans Zerto pour migrer chaque VPG.
2. Choisissez la stratégie de validation (manuelle, automatique, annulation).

Pour obtenir des instructions complètes, référez-vous au guide Zerto suivant : [Processus de déplacement](https://help.zerto.com/bundle/Admin.ZSSP.HTML.10.0_U3/page/The_Move_Process.htm).

### Étape 14 : Valider la disponibilité de l'application

Après le déplacement :

- Vérifiez que toutes les VM sont sous tension.
- Testez la connectivité (AD, DNS, Bastion, Internet).
- Validez chaque application et service.

### Étape 15 : Valider ou annuler la migration

Si tous les tests réussissent, validez l'opération dans Zerto.

Si quelque chose ne fonctionne pas, vous pouvez annuler le déplacement et revenir à votre environnement local.

Voir le guide Zerto suivant : [Déplacement des machines virtuelles protégées vers le site distant](https://help.zerto.com/bundle/Admin.ZSSP.HTML.10.0_U3/page/Moving_Protected_Virtual_Machines_to_the_Remote_Site.htm).

### Étape 16 : Utiliser Storage vMotion pour placer les VM sur le stockage cible

Après la migration, vous pouvez souhaiter déplacer certaines machines virtuelles vers un autre datastore ou une autre stratégie vSAN.

Utilisez `Storage vMotion`{.action} via `vSphere Client`{.action} :

1. Faites un clic droit sur la VM puis cliquez sur `Migrer`{.action}.
2. Sélectionnez `Modifier le stockage uniquement`{.action}.
3. Choisissez le datastore de destination ou la stratégie vSAN.

Pour plus de détails, consultez notre guide « [VMware Storage vMotion](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_storage_vmotion) ».

### Étape 17 : Sauvegarder vos charges de travail

Une fois vos VM en production, sécurisez-les avec un plan de sauvegarde.

Vous disposez de 2 options :

- **Option 1** : Utiliser **Veeam Backup as a Service** si vous souhaitez une solution de sauvegarde managée intégrée à votre HPC.
- **Option 2** : Déployer votre propre serveur Veeam Backup et utiliser **Veeam Backup & Replication for Public Cloud**.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou demandez une analyse personnalisée de votre projet à nos experts de l’équipe [Professional Services](/links/professional-services).

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le canal [Discord](https://discord.gg/ovhcloud) dédié.

Échangez avec notre [communauté d'utilisateurs](/links/community).