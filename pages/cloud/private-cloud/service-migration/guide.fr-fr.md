---
title: Migrer une infrastructure vers Hosted Private Cloud
excerpt: Découvrez comment gérer tous les aspects liés à la migration d'une infrastructure vers la solution Hosted Private Cloud
slug: sddc-migration
section: Premiers pas
order: 6
---

**Dernière mise à jour le 24/11/2020**

## Objectif

La migration d'un service Hosted Private Cloud comprend deux aspects :

- Le contexte Hosted Private Cloud OVHcloud qui comprend la partie client, l'administration de votre infrastructure.
- Le contexte VMware qui comprend tout l'eco-système VMware, sur l'infrastructure elle-même.

**Découvez comment couvrir tous les aspects liés à la migration vers un service Hosted Private Cloud**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la partie `Hosted Private Cloud`{.action} puis `Private Cloud`{.action}.
- Posséder un produit [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.

## En pratique

Nous aborderons dans ce guide les notions d'**infrastructure d'origine** et de **Hosted Private Cloud de destination**.

### Contexte Hosted Private Cloud

#### Sécurité

##### **Contexte de connexion au Hosted Private Cloud**

Pour vous connecter à la plateforme VMware, vous pouvez choisir de bloquer l'accès au vSphere par défaut. Pour cela, consultez notre guide sur la [politique d'accès au vCenter](../changer-la-politique-d-acces-au-vcenter/).

Suite au changement de politique d'accès, si celle-ci est passée en « restreinte », il faut bien sûr appliquer les mêmes IPs de connexion sur le Hosted Private Cloud de destination que sur l'infrastructure d'origine.

##### **Utilisateurs du Hosted Private Cloud**

Dans le cycle de vie de l'infrastructure d'origine, une liste d'utilisateurs peut avoir été créée pour des besoins métiers, ou des besoins organisationnels. Vous devez donc les créer à nouveau sur le Hosted Private Cloud de destination et leur attribuer les droits adéquats, en fonction de la configuration du Hosted Private Cloud de destination.

Consultez à cet effet nos guides pour [changer les droits d'un utilisateur](../changer-les-droits-d-un-utilisateur/), [modifier le mot de passe d'un utilisateur](../changement-du-mot-de-passe-utilisateur/) et [associer un e-mail à un utilisateur](../associer-email-a-un-utilisateur/).

##### **KMS**

Si des machines virtuelles sont protégées par un chiffrement et que cela constitue un prérequis pour le Hosted Private Cloud de destination, il sera nécessaire de recréer le contexte de chiffrement sur ce dernier.

Consultez donc notre guide sur l'[activation du chiffrement des machines virtuelles](../vm-encrypt/) afin d'activer le KMS sur le Hosted Private Cloud de destination.

##### **Certifications**

Pour des raisons de conformité, les options [PCI DSS](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/safety-compliance/pci-dss/) et [HDS](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/safety-compliance/hds/)  peuvent avoir été activées sur l'infrastructure d'origine.

Ces options doivent donc être réactivées sur le Hosted Private Cloud de destination. À cet effet, consultez [notre guide sur leur activation](../activer-l-option-hds-ou-pci-dss/).

#### Réseau

##### **vRack**

> [!warning]
>
> Des VMnetwork situés dans la même région ne pourront pas être inter-connectés dans un vRack.
>

Vous pouvez, dans le cadre d'une migration, lier vos services Hosted Private Cloud au sein du même vRack. Consultez notre guide sur [l'utilisation du Private Cloud au sein d'un vRack](../utiliser-le-private-cloud-au-sein-d-un-vrack/).

##### **Réseau public**

> [!warning]
>
> Si votre offre Hosted Private Cloud/PCC est antérieure à 2016, nous vous invitons à contacter nos équipes support afin de vérifier les prérequis nécessaires.
>

Si les adresses IP publiques attachées à l'infrastructure d'origine sont nécessaires sur le Hosted Private Cloud de destination, il sera nécessaire d'en effectuer le transfert.

Consultez notre guide pour [migrer des blocs IP entre deux services Hosted Private Cloud](../ajout-de-bloc-ip/#migrer-un-bloc-ip-entre-deux-hosted-private-cloud).

La vidéo ci-dessous vous détaillera également comment déplacer un bloc d'adresses IP entre deux Hosted Private Cloud.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Gemao3Fd7rI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### **Portgroups**

Vérifiez les paramètres des Portgroups, notamment les paramètres liés à la sécurité, aux VLAN, Teaming et Failover. S'ils ont été modifiés sur l'infrastructure d'origine, la même configuration devra être appliquée sur le Hosted Private Cloud de destination.

Pour plus d'informations, consultez la documentation de VMware :
<br>- [Paramètres généraux des portgroups](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-FCA2AE5E-83D7-4FEE-8DFF-540BDB559363.html) 
<br>- [Teaming & Failover](https://docs.vmware.com/en/VMware-vSphere/6.0/com.vmware.vsphere.hostclient.doc/GUID-BB8EC262-5F85-4F42-AFC5-5FED456E2C11.html)

### Contexte VMware

#### Configuration des clusters

##### **Configuration de VMware HA**

La migration implique de refaire la configuration du VMware High Availability (HA), notamment l'ordre et la priorité de boot. Consultez [notre guide sur sa configuration](../vmware-ha-high-availability/).

Voici une liste d'éléments à prendre en compte :

- Réglages de monitoring du host
- Réglages de monitoring des VM
- Contrôle d'admission
- Options HA avancées
- Remplacements de VM

**Conseils d'automatisation :**
L'applet de commande Powercli « Get-Cluster » renvoie des informations sur les paramètres de configuration HA et DRS qui peuvent être appliqués au cluster de destination avec l'applet de commande « Set-Cluster ».

##### **Configuration de VMware DRS**

La migration implique la reconfiguration de la fonction VMware DRS (Distributed Resource Scheduler), en particulier des règles d'affinité ou d'anti-affinité pour les groupes d'hôtes et de VMs. Consultez notre guide sur la [configuration de VMware DRS](../vmware-drs-distributed-ressource-scheduler-new/).

Voici une liste des éléments à prendre en compte:

- Niveau d'automatisation
- Groupes de VMs / d'hôtes
- Règles d'affinité / d'anti-affinité des VMs / hôtes
- Remplacements des machines virtuelles

**Conseils d'automatisation :** [Ce fil de discussion de la communauté VMware](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) détaille les options d'exportation et d'importation des règles d'affinité via powercli.

##### **Pools de ressources**

La migration nécessite la reconstruction des pools de ressources, notamment les réservations, les partages et les applications virtuelles. Cela s'applique également aux vApps et à toute configuration de commande de démarrage définie dans les vApps.

Pour plus d'informations, consultez la documentation de [VMware pour la gestion des pools de ressources](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external}.

Voici une liste d'éléments à prendre en compte:

- Paramètres des partages CPU/mémoire
- Réservations CPU/mémoire
- Option évolutive CPU/Memory
- Limites CPU/mémoire

**Conseils d'automatisation :** L'applet de commande Powercli « Get-ResourcePool » pour rassembler les informations de la liste de ressources partagées et l'applet de commande « New-ResourcePool » pour recréer la liste de ressources partagées sur le Hosted Private Cloud de destination.

##### **Clusters des datastores**

Si des clusters de datastores sont présents dans l'infrastructure d'origine, la migration peut nécessiter la recréation de ces clusters de datastores sur le Hosted Private Cloud de destination, si le même niveau de structure et le SDRS sont nécessaires.

Voici une liste des éléments à prendre en compte:

- Niveau d'automatisation SDRS
- Espace SDRS, I/O, règle, stratégie, paramètres d'évacuation des VMs
- Règles d'affinité/anti-affinité SDRS
- Modifications des VMs SDRS

##### **Réseaux**

La migration implique la recréation des groupes de ports virtuels de vRack sur le Hosted Private Cloud de destination pour garantir la cohérence du réseau de VMs. Si des VLAN vRack sont en cours d'utilisation sur le vRack de l'infrastructure d'origine, ils peuvent être utilisés pour étendre le domaine L2 au Hosted Private Cloud de destination afin de permettre un plan de migration plus échelonné. Pour plus d'informations, consultez notre guide sur l'[Utilisation du cloud privé dans un vRack](../utiliser-le-private-cloud-au-sein-d-un-vrack/).

Voici une liste des éléments à prendre en compte:

- Type de VLAN de groupe de ports
- Paramètres de sécurité
- Paramètres de Teaming et de Failover
- Allocation des ressources réseau du client

**Conseils d'automatisation :** L'applet de commande Powercli « Export-VDPortGroup » peut récupérer des informations de Portgroups virtuels distribués qui peuvent ensuite être importées dans le Distributed Switch de destination à l'aide de l'applet de commande « New-VDPortgroup -BackupPath ».

##### **OVHcloud Veeam Backup**

Si l'application Veeam fournie par OVHcloud est actuellement utilisée pour sauvegarder les VMs sur l'insfrastructure d'origine, il sera nécessaire de recréer la configuration de sauvegarde pour les VMs dans le Hosted Private Cloud de destination après la migration.

Voici une liste des éléments à prendre en compte:

- Liste des VMs en cours de sauvegarde
- Paramètres de sauvegarde

Pour plus d'informations, consultez notre guide pour [activer et utiliser Veeam Backup Managed](../veeam-backup-as-a-service/).

**Conseils d'automatisation :** L'API OVHcloud fournit des informations liées à chaque sauvegarde de VM via:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
>

La section « sauvegarde » du fichier json retourné fournit des informations sur la configuration de sauvegarde actuelle.

#### Organisation de l'inventaire

Pour des raisons organisationelles, les VMs, les hosts ou les datastores peuvent avoir été placés dans des répertoires.

Si cette organisation est toujours nécessaire, il vous faudra la créer à nouveau dans le Hosted Private Cloud de destination.

**Conseils d'automatisation :** Utilisez l'applet de commande Powercli « Get-Folder » pour collecter les informations sur le dossier et l'applet de commande « New-Folder » pour recréer le dossier sur le Hosted Private Cloud de destination.

#### VM

Il existe plusieurs moyens de migrer les VMs d'une infrastructure à une autre. Nous vous proposons d'effectuer la migration en utilisant la solution Veeam et la technologie Veeam Replication.

Les éléments suivants sont alors nécessaires :

- des licences SPLA (sur l'infrastructure d'origine et le Hosted Private Cloud de destination);
- une licence Veeam;
- une adresse IP disponible sur l'infrastructure d'origine et le Hosted Private Cloud de destination;
- une machine virtuelle [Veeam Backup & Replication](../../storage/veeam-backup-replication/) sur l'infrastructure d'origine;
- [autoriser la machine virtuelle Veeam Backup & Replication à se connecter](../autoriser-des-ip-a-se-connecter-au-vcenter/) sur le vCenter d'origine et de destination.

Consultez notre guide pour [mettre en place Veeam Backup & Replication](../../storage/veeam-backup-replication/).

La vidéo ci-dessous vous détaillera comment configurer un Hosted Private Cloud avec la solution Veeam Backup & Replication.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/f8ufrsP4PQw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<br>La vidéo suivante vous détaillera quant à elle comment faire une réplication de votre infrastructure Hosted Private Cloud avec la solution Veeam Backup & Replication.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NqNtKrJSH8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<br>Vous pouvez également consulter [la documentation de Veeam](https://www.veeam.com/veeam_backup_10_0_user_guide_vsphere_pg.pdf){.external}.

#### vSAN

Si vSAN était activé sur votre infrastructure source, il sera nécessaire de l'activer à nouveau sur le Hosted Private Cloud de destination. Consultez notre guide pour [mettre en œuvre l'hyperconvergence VMware avec vSAN](../vmware-vsan/).

#### Configuration NSX

##### **Configuration de NSX Edge**

La migration implique la recréation de vos NSX Edge Gateways dans le Hosted Private Cloud de destination.

Les éléments suivants sont à prendre en compte :

- Services Edge (règles de pare-feu, DHCP, DNS, NAT, Load-balancer, VPN, routage)
- Configuration de l'interface
- Configuration HA
- Configuration Syslog
- Allocation des ressources
- Objets Edge NSX (ensembles IP, services, groupes de services)

##### **Configuration du pare-feu distribué NSX**

La migration implique la recréation du Pare-feu distribué NSX dans le Hosted Private Cloud de destination.

Les éléments suivants sont à prendre en compte :

- Sections du pare-feu distribué NSX
- Règles de pare-feu distribué NSX (source, destination, service, application, action, logging)
- Objets NSX Distributed Firewall (Groupes de sécurité, Ensembles IP, Ensembles MAC, Services, Groupes de services, Pools IP, Balises de sécurité)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
