---
title: Migrer une infrastructure vers Hosted Private Cloud
excerpt: Découvrez comment gérer tous les aspects liés à la migration d'une infrastructure vers la solution Hosted Private Cloud
updated: 2021-12-06
---

## Objectif

La migration d'un service Hosted Private Cloud comprend deux aspects :

- Le contexte Hosted Private Cloud OVHcloud qui comprend la partie client, l'administration de votre infrastructure.
- Le contexte VMware qui comprend tout l'eco-système VMware, sur l'infrastructure elle-même.

**Découvrez comment couvrir tous les aspects liés à la migration vers un service Hosted Private Cloud**

> [!primary]
>
> Si vous choisissez de migrer une infrastructure vers un nouveau vDC, veuillez suivre [ce guide dédié](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc).
>

## Prérequis

- Posséder un produit [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la partie `Hosted Private Cloud`{.action} puis `Private Cloud`{.action}.

## En pratique

> [!primary]
>
> Si vous souhaitez être assistés par :
>
> - des partenaires OVHcloud, certifiés et experts sur nos produits, pour vous accompagner dans votre migration ou l'effectuer à votre place, veuillez cliquer sur [ce lien](https://www.ovhcloud.com/fr/private-cloud-migration/).
> - nos experts techniques OVHcloud pour un accompagnement sur mesure et vous conseiller à chacune des étapes de votre projet de migration, veuillez cliquer [ce lien](https://www.ovhcloud.com/fr/private-cloud-migration/).
>

Nous aborderons dans ce guide les notions d'**infrastructure d'origine** et de **Hosted Private Cloud de destination**.

### Contexte Hosted Private Cloud

#### Sécurité

##### **Contexte de connexion au Hosted Private Cloud**

Pour vous connecter à la plateforme VMware, vous pouvez choisir de bloquer l'accès au vSphere par défaut. Pour cela, consultez notre guide sur la [politique d'accès au vCenter](/pages/bare_metal_cloud/managed_bare_metal/vcenter-modify-access-policy).

Suite au changement de politique d'accès, si celle-ci est passée en « restreinte », il faut bien sûr appliquer les mêmes IPs de connexion sur le Hosted Private Cloud de destination que sur l'infrastructure d'origine.

##### **Utilisateurs du Hosted Private Cloud**

Dans le cycle de vie de l'infrastructure d'origine, une liste d'utilisateurs peut avoir été créée pour des besoins métiers, ou des besoins organisationnels. Vous devez donc les créer à nouveau sur le Hosted Private Cloud de destination et leur attribuer les droits adéquats, en fonction de la configuration du Hosted Private Cloud de destination.

Consultez à cet effet nos guides pour [changer les droits d'un utilisateur](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/change_users_rights), [modifier le mot de passe d'un utilisateur](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/changement_du_mot_de_passe_utilisateur) et [associer un e-mail à un utilisateur](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_edit_user).

##### **KMS**

Si des machines virtuelles sont protégées par un chiffrement et que cela constitue un prérequis pour le Hosted Private Cloud de destination, il sera nécessaire de recréer le contexte de chiffrement sur ce dernier.

Consultez donc notre guide sur l'[activation du chiffrement des machines virtuelles](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt) afin d'activer le KMS sur le Hosted Private Cloud de destination.

##### **Certifications**

Pour des raisons de conformité, les options [PCI DSS](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/safety-compliance/pci-dss/) et [HDS](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/safety-compliance/hds/)  peuvent avoir été activées sur l'infrastructure d'origine.

Ces options doivent donc être réactivées sur le Hosted Private Cloud de destination. À cet effet, consultez [notre guide sur leur activation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/activer_l_option_hds_hipaa_ou_pci_dss).

#### Réseau

##### **vRack**

> [!warning]
>
> Des VMnetwork situés dans la même région ne pourront pas être inter-connectés dans un vRack.
>

Vous pouvez, dans le cadre d'une migration, lier vos services Hosted Private Cloud au sein du même vRack. Consultez notre guide sur [l'utilisation du Private Cloud au sein d'un vRack](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/using_private_cloud_in_vrack).

##### **Réseau public**

> [!warning]
>
> Si votre offre Hosted Private Cloud/PCC est antérieure à 2016, nous vous invitons à contacter nos équipes support afin de vérifier les prérequis nécessaires.
>

Si les adresses IP publiques attachées à l'infrastructure d'origine sont nécessaires sur le Hosted Private Cloud de destination, il sera nécessaire d'en effectuer le transfert.

Consultez notre guide pour [migrer des blocs IP entre deux services Hosted Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/ajout_de_bloc_ip#migrer-un-bloc-ip-entre-deux-hosted-private-cloud).

La vidéo ci-dessous vous détaillera également comment déplacer un bloc d'adresses IP entre deux Hosted Private Cloud.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Gemao3Fd7rI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Contexte VMware

#### Etape 1 : préparer votre Hosted Private Cloud de destination

##### **1.1 VMware HA**

La migration implique de refaire la configuration du VMware High Availability (HA), notamment l'ordre et la priorité de boot. Consultez [notre guide sur sa configuration](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_ha_high_availability).

Voici une liste d'éléments à prendre en compte :

- Réglages de monitoring du host
- Réglages de monitoring des VM
- Contrôle d'admission
- Options HA avancées
- Remplacements de VM

**Conseils d'automatisation :**
L'applet de commande Powercli « Get-Cluster » renvoie des informations sur les paramètres de configuration HA et DRS qui peuvent être appliqués au cluster de destination avec l'applet de commande « Set-Cluster ».

##### **1.2 VMware DRS**

La migration implique la reconfiguration de la fonction VMware DRS (Distributed Resource Scheduler), en particulier des règles d'affinité ou d'anti-affinité pour les groupes d'hôtes et de VMs. Consultez notre guide sur la [configuration de VMware DRS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new).

Voici une liste des éléments à prendre en compte:

- Niveau d'automatisation
- Groupes de VMs / d'hôtes
- Règles d'affinité / d'anti-affinité des VMs / hôtes
- Remplacements des machines virtuelles

**Conseils d'automatisation :** [Ce fil de discussion de la communauté VMware](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) détaille les options d'exportation et d'importation des règles d'affinité via powercli.

##### **1.3 Pools de ressources**

La migration nécessite la reconstruction des pools de ressources, notamment les réservations, les partages et les applications virtuelles. Cela s'applique également aux vApps et à toute configuration de commande de démarrage définie dans les vApps.

Pour plus d'informations, consultez la documentation de [VMware pour la gestion des pools de ressources](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external}.

Voici une liste d'éléments à prendre en compte:

- Paramètres des partages CPU/mémoire
- Réservations CPU/mémoire
- Option évolutive CPU/Memory
- Limites CPU/mémoire

**Conseils d'automatisation :** L'applet de commande Powercli « Get-ResourcePool » pour rassembler les informations de la liste de ressources partagées et l'applet de commande « New-ResourcePool » pour recréer la liste de ressources partagées sur le Hosted Private Cloud de destination.

##### **1.4 Clusters des datastores**

Si des clusters de datastores sont présents dans l'infrastructure d'origine, la migration peut nécessiter la recréation de ces clusters de datastores sur le Hosted Private Cloud de destination, si le même niveau de structure et le SDRS sont nécessaires.

Voici une liste des éléments à prendre en compte:

- Niveau d'automatisation SDRS
- Espace SDRS, I/O, règle, stratégie, paramètres d'évacuation des VMs
- Règles d'affinité/anti-affinité SDRS
- Modifications des VMs SDRS

##### **1.5 vSAN**

Si vSAN était activé sur votre infrastructure d'origine, il sera nécessaire de l'activer à nouveau sur le Hosted Private Cloud de destination. Consultez notre guide pour [mettre en œuvre l'hyperconvergence VMware avec vSAN](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_vsan).

##### ** 1.6 Réseaux vSphere**

La migration implique la recréation des groupes de ports virtuels de vRack sur le Hosted Private Cloud de destination pour garantir la cohérence du réseau de VMs. Si des VLAN vRack sont en cours d'utilisation sur le vRack de l'infrastructure d'origine, ils peuvent être utilisés pour étendre le domaine L2 au Hosted Private Cloud de destination afin de permettre un plan de migration plus échelonné. Pour plus d'informations, consultez notre guide sur l'[Utilisation du cloud privé dans un vRack](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/using_private_cloud_in_vrack).

Voici une liste des éléments à prendre en compte:

- Type de VLAN de groupe de ports
- Paramètres de sécurité (**Important dans le cas où le mode promiscuité (*promiscuous mode*) est nécessaire**)
- Paramètres de Teaming et de Failover
- Allocation des ressources réseau du client

Pour plus d'informations, consultez le guide OVHcloud sur [comment créer un V(x)LAN dans un vRack](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/creation_vlan#vlan-vrack) et la documentation de VMware sur [comment modifier les paramètres des groupes de ports distribués](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-FCA2AE5E-83D7-4FEE-8DFF-540BDB559363.html){.external}.

**Conseils d'automatisation :** L'applet de commande Powercli « Export-VDPortGroup » peut récupérer des informations de Portgroups virtuels distribués qui peuvent ensuite être importées dans le Distributed Switch de destination à l'aide de l'applet de commande « New-VDPortgroup -BackupPath ».

> [!warning]
>
> - Certaines appliances de routage virtuel telles que pfSense utilisent CARP pour fournir de la haute disponibilité.
> - Les VMs qui utilisent CARP auront besoin que le « *Promiscuous Mode* » soit activé dans les paramètres de sécurité d'un groupe de ports.
> - Vous pouvez peut activer ce paramètre sur le vRack vDS du vDC de destination.
> - Cependant, si le « *Promiscuous Mode* » doit être activé sur le portgroup « VM Network » du nouveau vDC, merci d’ouvrir un ticket auprès du support OVHcloud avant la migration, afin de maintenir la connectivité durant la migration.
>

##### **1.7 Configuration de Veeam Backup**

Si l'application Veeam fournie par OVHcloud est actuellement utilisée pour sauvegarder les VMs sur l'insfrastructure d'origine, il sera nécessaire de recréer la configuration de sauvegarde pour les VMs dans le Hosted Private Cloud de destination après la migration.

Voici une liste des éléments à prendre en compte:

- Liste des VMs en cours de sauvegarde
- Paramètres de sauvegarde

Pour plus d'informations, consultez notre guide pour [activer et utiliser Veeam Backup Managed](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/veeam_backup_as_a_service).

**Conseils d'automatisation :** L'API OVHcloud fournit des informations liées à chaque sauvegarde de VM via:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
>

La section « sauvegarde » du fichier json retourné fournit des informations sur la configuration de sauvegarde actuelle.

##### **1.8 Organisation de l'inventaire (facultatif)**

Pour des raisons organisationelles, les VMs, les hosts ou les datastores peuvent avoir été placés dans des répertoires.

Si cette organisation est toujours nécessaire, il vous faudra la créer à nouveau dans le Hosted Private Cloud de destination.

**Conseils d'automatisation :** Utilisez l'applet de commande Powercli « Get-Folder » pour collecter les informations sur le dossier et l'applet de commande « New-Folder » pour recréer le dossier sur le Hosted Private Cloud de destination.

##### **1.9 NSX**

###### **1.9.1 Objets NSX**

Les objets NSX incluent les ensembles IP, les ensembles MAC, les services, les groupes de services, les groupes de sécurité, les réseaux, les clusters et les datacenters. Il s'agit d'objets utilisés pour regrouper dynamiquement des entités vSphere en vue de leur utilisation, par exemple, dans une règle de pare-feu NSX Edge.

Ces objets auront des ID localement significatifs dans l'infrastructure d'origine et, une fois recréés dans le Hosted Private Cloud de destination, généreront des ID différents.
Le suivi de ces ID est essentiel pour automatiser la migration des règles de pare-feu Edge et des règles de pare-feu distribuées.

**Conseils d'automatisation :** Le [guide de l'API NSX](https://docs.vmware.com/en/VMware-NSX-Data-Center-for-vSphere/6.4/nsx_64_api.pdf){.external} donne des exemples sur la façon de récupérer les ID d'objets et de les créer.

Exemple: Récupérer un « Service Object » : `GET /api/2.0/services/application/scope/{scopeId}`
<br>
Exemple: Créer un « Service Object » : `POST /api/2.0/services/application/{scopeId}` (le `body` contenant la configuration xml de l'objet de service)

###### **1.9.2 NSX Edges**

Sur le Hosted Private Cloud de destination, il sera nécessaire de recréer les NSX Edges en cours d'utilisation sur l'infrastructure d'origine. Les éléments à recréer sont les suivants:

- Paramètres Edge HA
- Interfaces sur le Edge de destination afin qu'il reflète le Edge d'origine
- Services Edge (pare-feu, NAT, IPSEC, etc.) sur le Edge de destination afin qu'il reflète le Edge d'origine (**REMARQUE :** En cas d'automatisation de ce processus, veillez à faire correspondre les ID d'objets référencés aux ID d'objets qui existent dans le Hosted Private Cloud de destination)

**Conseils d'automatisation :** le [guide de l'API NSX](https://docs.vmware.com/en/VMware-NSX-Data-Center-for-vSphere/6.4/nsx_64_api.pdf){.external} donne des exemples pour récupérer des configurations Edge et pour ajouter des configurations de services sur de nouveaux Edges.

Exemple: Obtenir une configuration Edge actuelle : `GET /api/4.0/edges/{edgeId}`
<br>
Exemple: Pousser un nouvel ensemble de règles de pare-feu sur un Edge : `PUT /api/4.0/edges/{edgeId}/firewall/config` (le `body` contenant la configuration xml du pare-feu)

###### **1.9.3 Pare-feu distribué NSX**

Sur le Hosted Private Cloud de destination, il sera nécessaire de recréer les règles de pare-feu distribué (DFW pour *Distributed Firewall*) qui sont en cours d'utilisation sur l'infrastructure d'origine. Les éléments à recréer sont les suivants:

- Sections DFW sur le DFW de destination afin qu'il reflète le DFW d'origine
- Règles DFW sur le DFW de destination afin qu'il reflète le DFW d'origine (**Remarque**: Si vous automatisez ce processus, veillez à faire correspondres les ID d'objet référencés aux ID d'objet qui existent dans le Hosted Private Cloud de destination)

**Conseils d'automatisation :** Le [guide de l'API NSX](https://docs.vmware.com/en/VMware-NSX-Data-Center-for-vSphere/6.4/nsx_64_api.pdf){.external} donne des exemples sur la façon d'obtenir la configuration DFW et de créer des règles et sections FDW.

Exemple: Obtenir la configuration actuelle de DFW : `GET /api/4.0/firewall/globalroot-0/config`
<br>
Exemple: Créer une section de couche 3 dans un DFW: `POST /api/4.0/firewall/globalroot-0/config/layer3sections` (le `body` contenant la configuration xml de la section)

#### Etape 2 : préparer Veeam pour la migration

Les éléments suivants sont nécessaires :

- des licences SPLA (sur l'infrastructure d'origine et le Hosted Private Cloud de destination);
- une licence Veeam;
- une adresse IP disponible sur l'infrastructure d'origine et le Hosted Private Cloud de destination;
- une machine virtuelle [Veeam Backup & Replication](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication) sur l'infrastructure d'origine;
- [autoriser la machine virtuelle Veeam Backup & Replication à se connecter](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/autoriser_des_ip_a_se_connecter_au_vcenter) sur le vCenter d'origine et de destination.

Consultez notre guide pour [mettre en place Veeam Backup & Replication](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication).

La vidéo ci-dessous vous détaillera comment configurer un Hosted Private Cloud avec la solution Veeam Backup & Replication.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/f8ufrsP4PQw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>La vidéo suivante vous détaillera quant à elle comment faire une réplication de votre infrastructure Hosted Private Cloud avec la solution Veeam Backup & Replication.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NqNtKrJSH8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>Vous pouvez également consulter [la documentation de Veeam](https://www.veeam.com/veeam_backup_10_0_user_guide_vsphere_pg.pdf){.external}.

#### Etape 3 : tâches post-migration

##### **3.1 Règles d'affinité**

Les règles d'affinité sont basées sur des objets de VM  de sorte que les règles ne peuvent être créées qu'après la migration des VM vers le Hosted Private Cloud de destination. Une fois la migration terminée, les règles d'affinité peuvent être réappliquées sur le Hosted Private Cloud de destination.

**Conseils d'automatisation :** [Ce fil de discussion de communauté VMware](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) détaille les options d'exportation et d'importation des règles d'affinité via powercli.

##### **3.2 Configuration de Veeam Backup**

Les sauvegardes Veeam fournies par OVHcloud sont configurées par VM. Par conséquent, elles ne peuvent être réappliquées qu'après la migration. Une fois la migration terminée, les VMs peuvent réactiver leurs sauvegardes Veeam à l'aide de l'interface utilisateur ou de l'API.

**Conseils d'automatisation :** l'API OVHcloud permet d'activer les sauvegardes de VMs pour chaque machine virtuelle via le call API suivant (le `body` contenant la liste des jours de sauvegarde, par exemple backupDays='["Friday","Monday","Saturday","Sunday") :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
