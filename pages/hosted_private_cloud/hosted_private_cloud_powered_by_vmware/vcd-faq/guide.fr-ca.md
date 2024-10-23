---
title: "VMware Cloud Director - FAQ"
excerpt: "Retrouvez les questions les plus fréquentes concernant VCD"
updated: 2024-10-07
---

## FAQ

**Retrouvez ci-dessous les questions les plus fréquentes concernant VMWare Cloud Director par OVHcloud**

> [!faq]
> **Qu’est-ce que VMware Cloud Director par OVHcloud** ? <a name="VCDonOVH"></a>
> > Il s’agit d’un nouveau produit disponible dans l’offre VMware on OVHcloud qui vous fournit un datacenter virtuel alimenté par la technologie VMware, en plus d’une infrastructure mutualisée hébergée et exploitée par OVHcloud.
> > 
> > VMware Cloud Director par OVHcloud sera disponible en 3 niveaux :
> > - VCD Standard, fournissant les capacités standard de virtualisation de la pile VMware.
> > - VCD Advanced, qui comprend VCD standard ainsi que des capacités avancées de mise en réseau et de sécurité.
> > - VCD Premium, qui comprend les fonctionnalités des niveaux précédents ainsi qu'un stockage vSAN haute performance au niveau Advanced.
> >
> > Pour plus d'informations, voir la page [les principes clés de VCD sur OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts#key-features).
> > 
> **Comment la migration sera-t-elle effectuée par OVHcloud** ? <a name="migrationVCD"></a>
> > Si vous choisissez de migrer vers VCD, OVHcloud se chargera de la migration pour vous, vous pouvez suivre le guide suivant [VMware Cloud Director - Migration depuis VMware vSphere on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_migration_use-cases) pour toutes informations complémentaires sur le processus complet.
> > Par exception, nous ne facturerons pas les nouveaux prix actuels du serveur/hôte pendant le processus de migration. Nous absorberons les coûts liés à l’augmentation du prix des licences pendant la migration. Que vous choisissiez ou non de continuer à utiliser la solution actuelle, vous bénéficierez tout de suite des nouveaux tarifs VCD à compter du 1er mai 2024.
> > Cependant, notre objectif est de migrer vers VCD dès que nous sommes prêts. Nous vous avertirons 1 à 2 semaines avant le début de votre migration, qui sera effectuée sans temps d'arrêt. Si, pour des raisons techniques, une migration à chaud ne peut pas être effectuée, nous discuterons avec vous de la meilleure façon de procéder.
> > 
> **Comment migrer mes données vers VCD** ? <a name="migrationdata"></a>
> > Vos données restent sur les *filers* Leclerc v3, nous allons exposer à VCD le stockage comme nous exposons le stockage à vSphere. La migration « en direct » entre deux hôtes avec le même CPU (Intel) se fait via vMotion.
> >
> **Puis-je toujours avoir accès à vSphere ESXi et à l’API vCenter avec VMware Cloud Director** ? <a name="accessAPI"></a>
> > Avec VMware Cloud Director, vous ne pouvez pas accéder aux API vSphere ESXi et vCenter. Vous aurez accès à l’API de Cloud Director et pourrez utiliser des outils comme [Terraform](https://registry.terraform.io/providers/vmware/vcd/latest/docs).
> >
> **Puis-je quand même utiliser des produits comme Veeam, Naviko, Rubik pour sauvegarder mes VM** ? <a name="backupTools"></a>
> > Non. Avec VMware Cloud Director, vous ne pouvez pas utiliser d’outil demandant l’accès à vSphere ESXi ou vCenter. Cependant, nous avons mis en place une solution Veeam managé pour la mise en place de vos sauvegardes.
> >
> **Comment sont configurées les sauvegardes avec VCD** ?
> > Pour les Backup, nous vous proposerons **Veeam Managed Backup** avec un plugin intégré pour les backup de VM, vous pouvez suivre le guide suivant pour plus d'information : [VMware Cloud Director - Sauvegarde avec Veeam Data Platform](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup).
> > Pour la configuration des sauvegardes, nous vous proposons 3 types de jobs par défaut avec Veeam, mais vous pourrez ajouter des politiques différentes si besoin. Des frais peuvent être constatés avec l'activation du plugin Veeam Data Plateform.
> > La consommation sera basée par VM et par mois et la consommation de stockage par mois.
> >
> **Puis-je utiliser des règles comme l’affinité et l’anti-affinité comme précédemment avec vSphere** ? <a name="rulesvSphere"></a>
> > Avec VMware Cloud Director, vous pouvez définir l’affinité de groupe pour les machines virtuelles et des règles comme l’anti-affinité pour séparer différentes machines virtuelles.
> > 
> **Quelles certifications s'appliquent au nouveau service VCD** ? <a name="certifications"></a>
> > Lors du lancement du service, aucune certification spécifique ne sera applicable au service VMware Cloud Director par OVHcloud.
> > Cependant, la prise en charge des certifications HDS, ISO27001, SOC2 ou PCI-DSS est un des objectifs de notre feuille de route.
> >
> **Puis-je choisir avec VMware Cloud Director le type de disque Thin ou Thick lorsque je crée une nouvelle machine virtuelle ou un nouveau disque** ?
> > Non. Avec VMware Cloud Director, chaque disque consomme du stockage dans une organisation Virtual Datacenter (VDC). Il n'existe aucun réglage de type Thin ou Thick associé pour le tenant d'un client.
> >

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](https://community.ovh.com).
