---
title: Migrer une infrastructure vers Managed Bare Metal
excerpt: Découvrez comment gérer tous les aspects liés à la migration d'une infrastructure vers la solution Managed Bare Metal
updated: 2020-11-23
---

## Objectif

La migration d'un service Managed Bare Metal comprend deux aspects :

* Le contexte Managed Bare Metal OVHcloud qui comprend la partie client, l'administration de votre infrastructure.
* Le contexte VMware qui comprend tout l'eco-système VMware, sur l'infrastructure elle-même.

**Découvrez comment couvrir tous les aspects liés à la migration vers un service Managed Bare Metal**

> [!primary]
>
> Si vous choisissez de migrer une infrastructure vers un nouveau vDC, veuillez suivre [ce guide dédié](/pages/bare_metal_cloud/managed_bare_metal/service-migration-vdc).
>

## Prérequis

* Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la partie `Bare Metal Cloud`{.action} puis `Managed Bare Metal`{.action}.
* Posséder un produit [Managed Bare Metal](https://www.ovhcloud.com/fr/managed-bare-metal/){.external}.

## En pratique

Nous aborderons dans ce guide les notions d'**infrastructure d'origine** et de **Managed Bare Metal de destination**.

### Contexte Managed Bare Metal

#### Sécurité

##### **Contexte de connexion au Managed Bare Metal**

Pour vous connecter à la plateforme VMware, vous pouvez choisir de bloquer l'accès au vSphere par défaut. Pour cela, consultez notre guide sur la [politique d'accès au vCenter](/pages/bare_metal_cloud/managed_bare_metal/vcenter-modify-access-policy).

Suite au changement de politique d'accès, si celle-ci est passée en « restreinte », il faut bien sûr appliquer les mêmes IPs de connexion sur le Managed Bare Metal de destination que sur l'infrastructure d'origine.

##### **Utilisateurs du Managed Bare Metal**

Dans le cycle de vie de l'infrastructure d'origine, une liste d'utilisateurs peut avoir été créée pour des besoins métiers, ou des besoins organisationnels. Vous devez donc les créer à nouveau sur le Managed Bare Metal de destination et leur attribuer les droits adéquats, en fonction de la configuration du Managed Bare Metal de destination.

Consultez à cet effet nos guides pour [changer les droits d'un utilisateur](/pages/bare_metal_cloud/managed_bare_metal/change-user-rights), [modifier le mot de passe d'un utilisateur](/pages/bare_metal_cloud/managed_bare_metal/changer-user-password) et [associer un e-mail à un utilisateur](/pages/bare_metal_cloud/managed_bare_metal/vsphere-edit-user).

##### **KMS**

Si des machines virtuelles sont protégées par un chiffrement et que cela constitue un prérequis pour le Managed Bare Metal de destination, il sera nécessaire de recréer le contexte de chiffrement sur ce dernier.

Consultez donc notre guide sur l'[activation du chiffrement des machines virtuelles](/pages/bare_metal_cloud/managed_bare_metal/vm_encrypt) afin d'activer le KMS sur le Managed Bare Metal de destination.

#### Réseau

##### **vRack**

> [!warning]
>
> Des VMnetwork situés dans la même région ne pourront pas être inter-connectés dans un vRack.
>

Vous pouvez, dans le cadre d'une migration, lier vos services Managed Bare Metal au sein du même vRack. Consultez notre guide sur [l'utilisation du Private Cloud au sein d'un vRack](/pages/bare_metal_cloud/managed_bare_metal/using-vrack).

##### **Réseau public**

> [!warning]
>
> Si votre offre Private Cloud/PCC est antérieure à 2016, nous vous invitons à contacter nos équipes support afin de vérifier les prérequis nécessaires.
>

Si les adresses IP publiques attachées à l'infrastructure d'origine sont nécessaires sur le Managed Bare Metal de destination, il sera nécessaire d'en effectuer le transfert.

Consultez notre guide pour [migrer des blocs IP entre deux services Managed Bare Metal](/pages/bare_metal_cloud/managed_bare_metal/ip-block-addition#migrer-un-bloc-ip-entre-deux-managed-bare-metal).

La vidéo ci-dessous vous détaillera également comment déplacer un bloc d'adresses IP entre deux Hosted Private Cloud. Cette méthode est également applicable à une solution Managed Bare Metal.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Gemao3Fd7rI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Contexte VMware

#### Configuration des clusters

##### **Configuration de VMware HA**

La migration implique de refaire la configuration du VMware High Availability (HA), notamment l'ordre et la priorité de boot. Consultez [notre guide sur sa configuration](/pages/bare_metal_cloud/managed_bare_metal/vmware_ha_high_availability).

Voici une liste d'éléments à prendre en compte :

* Réglages de monitoring du host
* Réglages de monitoring des VM
* Contrôle d'admission
* Options HA avancées
* Remplacements de VM

**Conseils d'automatisation :**
L'applet de commande Powercli « Get-Cluster » renvoie des informations sur les paramètres de configuration HA et DRS qui peuvent être appliqués au cluster de destination avec l'applet de commande « Set-Cluster ».

##### **Configuration de VMware DRS**

La migration implique la reconfiguration de la fonction VMware DRS (Distributed Resource Scheduler), en particulier des règles d'affinité ou d'anti-affinité pour les groupes d'hôtes et de VMs. Consultez notre guide sur la [configuration de VMware DRS](/pages/bare_metal_cloud/managed_bare_metal/vmware_drs_distributed_ressource_scheduler).

Voici une liste des éléments à prendre en compte:

* Niveau d'automatisation
* Groupes de VMs / d'hôtes
* Règles d'affinité / d'anti-affinité des VMs / hôtes
* Remplacements des machines virtuelles

**Conseils d'automatisation :** [Ce fil de discussion de la communauté VMware](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) détaille les options d'exportation et d'importation des règles d'affinité via powercli.

##### **Pools de ressources**

La migration nécessite la reconstruction des pools de ressources, notamment les réservations, les partages et les applications virtuelles. Cela s'applique également aux vApps et à toute configuration de commande de démarrage définie dans les vApps.

Pour plus d'informations, consultez la documentation de [VMware pour la gestion des pools de ressources](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external}.

Voici une liste d'éléments à prendre en compte:

* Paramètres des partages CPU/mémoire
* Réservations CPU/mémoire
* Option évolutive CPU/Memory
* Limites CPU/mémoire

**Conseils d'automatisation :** L'applet de commande Powercli « Get-ResourcePool » pour rassembler les informations de la liste de ressources partagées et l'applet de commande « New-ResourcePool » pour recréer la liste de ressources partagées sur le Managed Bare Metal de destination.

##### **Clusters des datastores**

Si des clusters de datastores sont présents dans l'infrastructure d'origine, la migration peut nécessiter la recréation de ces clusters de datastores sur le Managed Bare Metal de destination, si le même niveau de structure et le SDRS sont nécessaires.

Voici une liste des éléments à prendre en compte:

* Niveau d'automatisation SDRS
* Espace SDRS, I/O, règle, stratégie, paramètres d'évacuation des VMs
* Règles d'affinité/anti-affinité SDRS
* Modifications des VMs SDRS

##### **Réseaux**

La migration implique la recréation des groupes de ports virtuels de vRack sur le Managed Bare Metal de destination pour garantir la cohérence du réseau de VMs. Si des VLAN vRack sont en cours d'utilisation sur le vRack de l'infrastructure d'origine, ils peuvent être utilisés pour étendre le domaine L2 au Managed Bare Metal de destination afin de permettre un plan de migration plus échelonné. Pour plus d'informations, consultez notre guide sur l'[Utilisation du cloud privé dans un vRack](/pages/bare_metal_cloud/managed_bare_metal/using-vrack).

Voici une liste des éléments à prendre en compte:

* Type de VLAN des portgroups
* Paramètres de sécurité
* Paramètres de Teaming et de Failover
* Allocation des ressources réseau du client

Pour plus d'informations, consultez la documentation de VMware :
<br>- [Paramètres généraux des portgroups](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-FCA2AE5E-83D7-4FEE-8DFF-540BDB559363.html) 
<br>- [Teaming & Failover](https://docs.vmware.com/en/VMware-vSphere/6.0/com.vmware.vsphere.hostclient.doc/GUID-BB8EC262-5F85-4F42-AFC5-5FED456E2C11.html)

**Conseils d'automatisation :** L'applet de commande Powercli « Export-VDPortGroup » peut récupérer des informations de Portgroups virtuels distribués qui peuvent ensuite être importées dans le Distributed Switch de destination à l'aide de l'applet de commande « New-VDPortgroup -BackupPath ».

##### **OVHcloud Veeam Backup**

Si l'application Veeam fournie par OVHcloud est actuellement utilisée pour sauvegarder les VMs sur l'insfrastructure d'origine, il sera nécessaire de recréer la configuration de sauvegarde pour les VMs dans le Managed Bare Metal de destination après la migration.

Voici une liste des éléments à prendre en compte:

* Liste des VMs en cours de sauvegarde
* Paramètres de sauvegarde

Consultez notre guide pour [activer et utiliser Veeam Backup Managed](/pages/bare_metal_cloud/managed_bare_metal/veeam_backup_as_a_service).

**Conseils d'automatisation :** L'API OVHcloud fournit des informations liées à chaque sauvegarde de VM via:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
>

La section « sauvegarde » du fichier json retourné fournit des informations sur la configuration de sauvegarde actuelle.

#### Organisation de l'inventaire

Pour des raisons organisationelles, les VMs, les hosts ou les datastores peuvent avoir été placés dans des répertoires.

Si cette organisation est toujours nécessaire, il vous faudra la créer à nouveau dans le Managed Bare Metal de destination.

**Conseils d'automatisation :** Utilisez l'applet de commande Powercli « Get-Folder » pour collecter les informations sur le dossier et l'applet de commande « New-Folder » pour recréer le dossier sur le Managed Bare Metal de destination.

#### VM

Il existe plusieurs moyens de migrer les VMs d'une infrastructure à une autre. Nous vous proposons d'effectuer la migration en utilisant la solution Veeam et la technologie Veeam Replication.

Les éléments suivants sont alors nécessaires :

* des licences SPLA (sur l'infrastructure d'origine et le Managed Bare Metal de destination);
* une licence Veeam;
* une adresse IP disponible sur l'infrastructure d'origine et le Managed Bare Metal de destination;
* une machine virtuelle [Veeam Backup & Replication](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication) sur l'infrastructure d'origine;
* [autoriser la machine virtuelle Veeam Backup & Replication à se connecter](/pages/bare_metal_cloud/managed_bare_metal/vcenter-authorise-ip-access) sur le vCenter d'origine et de destination.

Consultez notre guide pour [mettre en place Veeam Backup & Replication](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication).

La vidéo ci-dessous vous détaille comment configurer un Hosted Private Cloud avec la solution Veeam Backup & Replication. Cette méthode est également applicable à une solution Managed Bare Metal.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/f8ufrsP4PQw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>La vidéo suivante vous détaille quant à elle comment faire une réplication de votre infrastructure Hosted Private Cloud avec la solution Veeam Backup & Replication. Ce tutoriel est aussi valable pour une solution Managed Bare Metal.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NqNtKrJSH8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>Vous pouvez également consulter [la documentation de Veeam](https://www.veeam.com/veeam_backup_10_0_user_guide_vsphere_pg.pdf){.external}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
