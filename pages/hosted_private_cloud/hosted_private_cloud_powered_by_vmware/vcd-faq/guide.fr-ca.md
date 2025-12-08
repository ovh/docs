---
title: "Public VCF as-a-Service - FAQ"
excerpt: "Retrouvez les questions les plus fréquentes concernant Public VCF as-a-Service"
updated: 2025-09-30
---

## FAQ

**Retrouvez ci-dessous les questions les plus fréquentes concernant Public VCF as-a-Service par OVHcloud**

> [!faq]
> **Qu’est-ce que Public VCF as-a-Service par OVHcloud** ? <a name="VCDonOVH"></a>
> > Il s’agit d’un nouveau produit disponible dans l’offre VMware on OVHcloud qui vous fournit un datacenter virtuel alimenté par la technologie VMware, en plus d’une infrastructure mutualisée hébergée et exploitée par OVHcloud.
> > 
> > Public VCF as-a-Service par OVHcloud sera disponible en 3 niveaux :
> > - Public VCF as-a-Service Standard, fournissant les capacités standard de virtualisation de la pile VMware.
> > - Public VCF as-a-Service Advanced, qui comprendPublic VCF as-a-Service standard ainsi que des capacités avancées de mise en réseau et de sécurité.
> > - Public VCF as-a-Service Premium, qui comprend les fonctionnalités des niveaux précédents ainsi qu'un stockage vSAN haute performance au niveau Advanced.
> >
> > Pour plus d'informations, voir la page [les principes clés de Public VCF as-a-Service sur OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts#key-features).
> > 
> **Comment la migration sera-t-elle effectuée par OVHcloud** ? <a name="migrationVCD"></a>
> > Si vous choisissez de migrer vers Public VCF as-a-Service, OVHcloud se chargera de la migration pour vous, vous pouvez suivre le guide suivant [Public VCF as-a-Service - Migration depuis VMware vSphere on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_migration_use-cases) pour toutes informations complémentaires sur le processus complet.
> > Par exception, nous ne facturerons pas les nouveaux prix actuels du serveur/hôte pendant le processus de migration. Nous absorberons les coûts liés à l’augmentation du prix des licences pendant la migration. Que vous choisissiez ou non de continuer à utiliser la solution actuelle, vous bénéficierez tout de suite des nouveaux tarifs Public VCF as-a-Service à compter du 1er mai 2024.
> > Cependant, notre objectif est de migrer vers Public VCF as-a-Service dès que nous sommes prêts. Nous vous avertirons 1 à 2 semaines avant le début de votre migration, qui sera effectuée sans temps d'arrêt. Si, pour des raisons techniques, une migration à chaud ne peut pas être effectuée, nous discuterons avec vous de la meilleure façon de procéder.
> > 
> **Comment migrer mes données vers Public VCF as-a-Service** ? <a name="migrationdata"></a>
> > Vos données restent sur les *filers* Leclerc v3, nous allons exposer à Public VCF as-a-Service le stockage comme nous exposons le stockage à vSphere. La migration « en direct » entre deux hôtes avec le même CPU (Intel) se fait via vMotion.
> >
> **Puis-je toujours avoir accès à vSphere ESXi et à l’API vCenter avec Public VCF as-a-Service** ? <a name="accessAPI"></a>
> > Avec Public VCF as-a-Service, vous ne pouvez pas accéder aux API vSphere ESXi et vCenter. Vous aurez accès à l’API de Cloud Director et pourrez utiliser des outils comme [Terraform](https://registry.terraform.io/providers/vmware/vcd/latest/docs).
> >
> **Puis-je quand même utiliser des produits comme Veeam, Naviko, Rubik pour sauvegarder mes VM** ? <a name="backupTools"></a>
> > Non. Avec Public VCF as-a-Service, vous ne pouvez pas utiliser d’outil demandant l’accès à vSphere ESXi ou vCenter. Cependant, nous avons mis en place une solution Veeam managé pour la mise en place de vos sauvegardes.
> >
> **Comment sont configurées les sauvegardes avec Public VCF as-a-Service** ?
> > Pour les Backup, nous vous proposerons **Veeam Managed Backup** avec un plugin intégré pour les backup de VM, vous pouvez suivre le guide suivant pour plus d'information : [Public VCF as-a-Service - Sauvegarde avec Veeam Data Platform](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup).
> > Pour la configuration des sauvegardes, nous vous proposons 3 types de jobs par défaut avec Veeam, mais vous pourrez ajouter des politiques différentes si besoin. Des frais peuvent être constatés avec l'activation du plugin Veeam Data Plateform.
> > La consommation sera basée par VM et par mois et la consommation de stockage par mois.
> >
> **Puis-je utiliser des règles comme l’affinité et l’anti-affinité comme précédemment avec vSphere** ? <a name="rulesvSphere"></a>
> > Avec Public VCF as-a-Service, vous pouvez définir l’affinité de groupe pour les machines virtuelles et des règles comme l’anti-affinité pour séparer différentes machines virtuelles.
> > 
> **Quelles certifications s'appliquent au nouveau service Public VCF as-a-Service** ? <a name="certifications"></a>
> > Lors du lancement du service, aucune certification spécifique ne sera applicable au service Public VCF as-a-Service par OVHcloud.
> > Cependant, la prise en charge des certifications HDS, ISO27001, SOC2 ou PCI-DSS est un des objectifs de notre feuille de route.
> >
> **Puis-je choisir avec Public VCF as-a-Service le type de disque Thin ou Thick lorsque je crée une nouvelle machine virtuelle ou un nouveau disque** ?
> > Non. Avec Public VCF as-a-Service, chaque disque consomme du stockage dans une organisation Virtual Datacenter (VDC). Il n'existe aucun réglage de type Thin ou Thick associé pour le tenant d'un client.
> >
> **Puis-je utiliser mes licences Windows Server existantes dans Public VCF as-a-Service ?** <a name="windowsLicenses"></a>
> > Cela dépend du type de licence que vous possédez :
> >
> > - **Licences Software Subscription** : Oui, vous pouvez les utiliser dans OVHcloud Public VCF as-a-Service.
> > - **Licences logicielles perpétuelles** : Non, elles ne peuvent pas être utilisées dans OVHcloud Public VCF as-a-Service.
> >
> > Si votre organisation dispose des deux types de licences, seules les licences par abonnement sont éligibles dans cette solution.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
