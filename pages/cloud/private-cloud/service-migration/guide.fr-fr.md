---
title: Migrer un service Hosted Private Cloud
excerpt: Découvrez comment gérer tous les aspects liés à la migration d'un service Hosted Private Cloud
slug: hpc-migration
section: Premiers pas
order: 6
hidden: true
---

**Dernière mise à jour le 31/07/2020**

## Objectif

La migration d'un service Hosted Private Cloud (HPC) comprend deux aspects :

* Le contexte HPC (OVHcloud) qui comprend la partie client, l'administration de votre infrastructure.
* Le contexte VMware qui comprend tout l'eco-système VMware, sur l'infrastructure elle-même.

**Découvez comment couvrir tous les aspects liés à la migration d'un service Hosted Private Cloud**

## Prérequis

* Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} dans la partie `Server`{.action} puis `Private Cloud`{.action}.
* Posséder un produit [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.

## En pratique

Nous aborderons dans ce guide les notions de **Hosted Private Cloud d'origine (HPC d'origine)** et de **Hosted Private Cloud de destination (HPC de destination)**.

### Contexte HPC :

#### Sécurité

##### **Contexte de connexion au HPC**

Pour vous connecter à la plateforme VMware, vous pouvez choisir de bloquer l'accès au vSphere par défaut. Pour cela, consultrez notre guide sur la [politique d'accès au vCenter](../changer-la-politique-d-acces-au-vcenter/).

Suite au changement de politique d'accès, si celle-ci est passée en « restreinte », il faut bien sûr appliquer les mêmes IPs de connexion sur le HPC de destination que sur le service HPC d'origine.

##### **Utilisateurs du HPC**

Dans le cycle de vie du HPC d'origine, une liste d'utilisateurs peut avoir été créée pour des besoins métiers, ou des besoins organisationnels. Vous devez donc les créer à nouveau sur le HPC de destination et leur attribuer les droits adéquats, en fonction de la configuration du HPC de destination.

Consultez à cet effet nos guides pour [changer les droits d'un utilisateur](../changer-les-droits-d-un-utilisateur/), [modifier le mot de passe d'un utilisateur](../changement-du-mot-de-passe-utilisateur/) et [associer un e-mail à un utilisateur](../associer-email-a-un-utilisateur/).

##### **KMS**

Si des machines virtuelles sont protégées par un chiffrement et que cela constitue un prérequis pour le HPC de destination, il sera nécessaire de recréer le contexte de chiffrement sur ce dernier.

Consultez donc notre guide sur l'[activation du chiffrement des machines virtuelles](../vm-encrypt/) afin d'activer le KMS sur le HPC de destination.

##### **Certifications**

Pour des raisons de conformité, les options [PCI DSS](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/safety-compliance/pci-dss/) et [HDS](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/safety-compliance/hds/)  peuvent avoir été activées sur le HPC d'origine.

Ces options doivent donc être réactivées sur le HPC de destination. À cet effet, consultez [notre guide sur leur activation](../activer-l-option-hds-ou-pci-dss/).

#### Réseau

##### **vRack**

> [!warning]
>
> Des VMnetwork situés dans la même région ne pourront pas être inter-connectés dans un vRack.
>

Vous pouvez, dans le cadre d'une migration lier vos services HPC au sein du même vRack. Consultez notre guide sur [l'utilisation du Private Cloud au sein d'un vRack](../utiliser-le-private-cloud-au-sein-d-un-vrack/).

##### **Réseau public**

> [!warning]
>
> Si votre offre HPC/PCC est antérieure à 2016, nous vous invitons à contacter nos équipes support afin de vérifier les prérequis nécessaires.
>

Si les adresses IP publiques attachées au HPC d'origine sont nécessaires sur le HPC de destinatation, il sera nécessaire d'en effectuer le transfert.

Consultez notre guide pour [migrer des blocs IP entre deux services Hosted Private Cloud](../ajout-de-bloc-ip/#migrer-un-bloc-ip-entre-deux-hosted-private-cloud).

### Contexte VMware :

#### Configuration des clusters

##### **Configuration de VMware HA**

La migration implique de refaire la configuration du VMware High Availability (HA), notamment l'ordre et la priorité de boot. Consultez [notre guide sur sa configuration](../vmware-ha-high-availability/).

##### **Configuration de VMware DRS**

La migration implique de refaire la configuration de la fonction VMware DRS (Distributed Resource Scheduler), notamment les groupes de hosts et de VMs. Consultez [notre guide sur sa configuration](../vmware-drs-distributed-ressource-scheduler-new/).

##### **Pools de ressources**

La migration nécessite de refaire les pools de ressources comprenant les réservations, les partages et les vApp.

Pour en savoir plus, consultez la documentation de VMware sur [la gestion des pools de ressources](https://docs.vmware.com/fr/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external}.

#### Organisation de l'inventaire

Pour des raisons organisationelles, les VMs, les hosts ou les datastores peuvent avoir été placés dans des répertoires.

Si cette organisation est toujours nécessaire, il vous faudra la créer à nouveau dans le HPC de destination.

#### VM

Il existe plusieurs moyens de migrer les VMs d'un Private Cloud à un autre. Nous vous proposons d'effectuer la migration en utilisant la solution Veeam et la technologie Veeam Replication.

Les éléments suivants sont alors nécessaires :

* Des licences SPLA (sur les HPC d'origine et de destination)
* Une licence Veeam
* Une adresse IP disponible sur le HPC d'origine et sur celui de destination.
* Une machine virtuelle [Veeam Backup & Replication](../../storage/veeam-backup-replication/) sur le HPC d'origine
* [Autoriser la machine virtuelle Veeam Backup & Replication à se connecter](../autoriser-des-ip-a-se-connecter-au-vcenter/) sur le vCenter d'origine et de destination

Consultez notre guide pour [mettre en place Veeam Backup & Replication](../../storage/veeam-backup-replication/).

La vidéo ci-dessous vous détaillera comment configurer un HPC avec la solution Veeam Backup & Replication.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/f8ufrsP4PQw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<br>La vidéo suivante vous détaillera quant à elle comment faire une réplication de votre infrastructure HPC avec la solution Veeam Backup & Replication.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NqNtKrJSH8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<br>Vous pouvez également consulter [la documentation de Veeam](https://www.veeam.com/veeam_backup_10_0_user_guide_vsphere_pg.pdf){.external}.

#### vSAN

Si vSAN était activé sur votre HPC source, il sera nécessaire de l'activer à nouveau sur le HPC de destination. Consultez notre guide pour [mettre en œuvre l'hyperconvergence VMware avec vSAN](../vmware-vsan/).

#### Backup

Si vous aviez activé l'offre Veeam Backup Managed sur le HPC source, il sera nécessaire de créer à nouveau les tâches de sauvegarde sur le HPC de destination.

Consultez notre guide pour [activer et utiliser Veeam Backup Managed](../veeam-backup-as-a-service/).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
