---
title: Migrer une infrastructure vers un nouveau vDC
routes:
    canonical: 'https://docs.ovh.com/fr/private-cloud/sddc-migration/'
excerpt: Découvrez comment déplacer vos VMs d'un vDC existant vers un nouveau vDC dans la même infrastructure VMware
slug: vdc-migration
section: Premiers pas
order: 6
hidden: true
---

**Dernière mise à jour le 26/08/2022**

**Ce guide explique comment déplacer des machines virtuelles (VM) d'un virtual DataCenter (vDC) d'origine (DC ou SDDC) vers un nouveau vDC de destination (Essentials ou Premier).**

> [!warning]
>
> L'ajout d'un vDC de nouvelle génération et donc la possibilité de déplacer des VMs vers ce nouveau vDC n'est pas encore disponible pour toutes les infrastructures VMware car des mises à niveau et des opérations de maintenance sont en cours. Nous vous avertirons dès que cette possibilité vous sera accessible.
>

## Objectif

En 2020, OVHcloud a lancé 2 nouvelles gammes, Essentials et Premier. Vous pouvez désormais passer des gammes commerciales antérieures à 2019 aux nouvelles gammes tout en conservant la même infrastructure VMware (pcc-123-123-123-123) grâce aux fonctionnalités Storage Motion et vMotion.

Ce processus comporte deux aspects :

- L'infrastructure OVHcloud elle-même, qui inclut la côté client de l'administration d'une infrastructure.
- L'infrastructure VMware, qui inclut l'ensemble de l'écosystème VMware.

## Prérequis

- Une infrastructure PCC (SDDC ou DC)
- Un [nouveau vRack ou un vRack vide](https://docs.ovh.com/fr/private-cloud/utiliser-le-private-cloud-au-sein-d-un-vrack/) ajouté sur votre infrastructure PCC (SDDC ou DC)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la partie `Hosted Private Cloud`{.action}.
- Être connecté à votre interface d'administration vSphere

## En pratique

> [!primary]
>
> Si vous souhaitez être assistés par :
>
> - des partenaires OVHcloud, certifiés et experts sur nos produits, pour vous accompagner dans votre migration ou l'effectuer à votre place, veuillez cliquer sur [ce lien](https://www.ovhcloud.com/fr/private-cloud-migration/).
> - nos experts techniques OVHcloud pour un accompagnement sur mesure et vous conseiller à chacune des étapes de votre projet de migration, veuillez cliquer [ce lien](https://www.ovhcloud.com/fr/private-cloud-migration/).
>

Ce guide utilise les notions de **vDC d'origine** et de **vDC de destination**. Voici un index des tâches à réaliser:

[Etape 1 Concevoir votre infrastructure](#design)<br />
&ensp;&ensp;[Etape 1.1 Choisir entre Premier et Essentials](#premoress)<br />
&ensp;&ensp;[Etape 1.2 Selectionner vos hosts (compute)](#selecthosts)<br />
&ensp;&ensp;[Etape 1.3 Selectionner vos datastores (storage)](#selectdatastores)<br />
[Etape 2 Construire votre nouvelle infrastructure](#build)<br />
&ensp;&ensp;[Etape 2.1 Ajouter un nouveau vDC de destination](#addvdc)<br />
&emsp;&emsp;[Etape 2.1.1 Vérifier l'éligibilité de vos services](#eligible)<br />
&emsp;&emsp;[Etape 2.1.2 Obtenir votre "serviceName"](#checkupgrade)<br />
&emsp;&emsp;[Etape 2.1.3 Obtenir votre "planCode"](#checkupgradeto)<br />
&emsp;&emsp;[Etape 2.1.4 Vérifier avec vos "serviceName" et "planCode" votre possibilité d'ajouter un vDC Premier ou Essentials](#snandpncheck)<br />
&emsp;&emsp;[Etape 2.1.5 Valider votre commande](#createorder)<br />
&ensp;&ensp;[Etape 2.2 Ajouter des nouveaux hosts et datastores](#addhostandds)<br />
&ensp;&ensp;[Etape 2.3 Convertir une datastore comme global](#converttoglobal)<br />
[Etape 3 Preparer votre vDC de destination dans le contexte OVHcloud](#preparevdcovhcontext)<br />
&ensp;&ensp;[Etape 3.1 Vérifier les caractéristiques héritées (Certifications, KMS, restrictions d'accès)](#checkovhcontext)<br />
&emsp;&emsp;[Etape 3.1.1 Certifications](#certs)<br />
&emsp;&emsp;[Etape 3.1.2 Key Management Server (KMS)](#kms)<br />
&emsp;&emsp;[Etape 3.1.3 Restrictions d'accès](#access)<br />
&ensp;&ensp;[Etape 3.2 Gérer les droits des utilisateurs](#userrights)<br />
&ensp;&ensp;[Etape 3.3 Activer les options Veeam Managed Backup & Zerto Disaster Recovery](#activateveeamzerto)<br />
&ensp;&ensp;[Etape 3.4 Vérifier votre réseau (vRack, IP publique)](#checknetwork)<br />
&emsp;&emsp;[Etape 3.4.1 vRack](#vrack)<br />
&emsp;&emsp;[Etape 3.4.2 Réseau publique](#publicnetwork)<br />
[Etape 4 Préparer votre vDC de destination dans le contexte VMware](#preparevdcvmwarecontext)<br />
&ensp;&ensp;[Etape 4.1 Reconfigurer VMware High Availability (HA)](#ha)<br />
&ensp;&ensp;[Etape 4.2 Reconfigurer VMware Distributed Resource Scheduler (DRS)](#drs)<br />
&ensp;&ensp;[Etape 4.3 Reconstruire vos resource pools](#respools)<br />
&ensp;&ensp;[Etape 4.4 Recréer vos Datastores Clusters (si pertinent)](#dsclusters)<br />
&ensp;&ensp;[Etape 4.5 Activer vSAN (si pertinent)](#vsan)<br />
&ensp;&ensp;[Etape 4.6 Recréer votre configuration réseau vSphere](#vspherenetwork)<br />
&ensp;&ensp;[Etape 4.7 Vérifier l'organisation de votre inventaire (si pertinent)](#inventory)<br />
&ensp;&ensp;[Etape 4.8 Reconfigurer NSX (si pertinent)](#nsx)<br />
&emsp;&emsp;[Etape 4.8.1 v(x)lan Transport Zones](#transportzones)<br />
&emsp;&emsp;[Etape 4.8.2 NSX Edges](#edges)<br />
&emsp;&emsp;[Etape 4.8.3 NSX Distributed Logical Routing](#dlr)<br />
&emsp;&emsp;[Etape 4.8.4 NSX Distributed Firewall](#dfw)<br />
&ensp;&ensp;[Etape 4.9 Etendre la protection Zerto Disaster Recovery Protection (si pertinent)](#zerto)<br />
&emsp;&emsp;[Etape 4.9.1 VPG Source](#vpgsource)<br />
&emsp;&emsp;[Etape 4.9.2 VPG Destination](#vpgdest)<br />
[Etape 5 Déplacer vos machines virtuelles](#migrate)<br />
&ensp;&ensp;[Etape 5.1 Storage Motion](#svmotion)<br />
&ensp;&ensp;[Etape 5.2 vMotion](#vmotion)<br />
[Etape 6 Finaliser votre migration](#finalizemigration)<br />
&ensp;&ensp;[Etape 6.1 Reconfigurer Veeam Managed Backup (si pertinent)](#reconveeam)<br />
&ensp;&ensp;[Etape 6.2 Reconfigurer Zerto Disaster Recovery (si pertinent)](#reconzerto)<br />
&ensp;&ensp;[Etape 6.3 Recréer les règles d'affinité](#recreateaffinity)<br />
&ensp;&ensp;[Etape 6.4 Passer les hosts en mode maintenance](#hostmm)<br />
&ensp;&ensp;[Etape 6.5 Supprimer les anciens datastores](#removeoldds)<br />
&ensp;&ensp;[Etape 6.6 Supprimer les anciens hosts](#removeoldhosts)<br />
&ensp;&ensp;[Etape 6.7 Supprimer le vDC source](#removeoldvdc)<br />

<a name="design"></a>
### Etape 1 Concevoir votre infrastructure

À la fin de l'étape 1, vous devriez avoir une vision claire de la gamme commerciale 2020 vers laquelle vous souhaitez passer, ainsi que des hosts et des datastores que vous souhaitez utiliser.

<a name="premoress"></a>
#### Etape 1.1 Choisir entre Premier et Essentials

En tant que client Hosted Private Cloud VMware avec des hosts antérieurs à 2020, vous souhaitez passer aux hosts 2020.
Tout d'abord, vous devrez sélectionner une gamme commerciale entre [Essentials](https://www.ovhcloud.com/fr/managed-bare-metal/) (processeur Intel 2018, pas de NSX, pas de certification, bande passante réseau ~ 1Gbps) et [Premier](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/) (CPU Intel 2020, NSX obligatoire, certifications disponibles, bande passante réseau ~10Gbps)
Veuillez noter que ce choix est définitif. 

Voici quelques lignes directrices pour aider votre décision :

- Si vous utilisez ou prévoyez d'utiliser [NSX](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/nsx-datacenter-vsphere/) => vous devez ajouter un vDC de destination [Premier](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/).
- Si vous avez besoin que votre infrastructure VMware soit [certifiée](https://www.ovhcloud.com/fr/enterprise/certification-conformity/) (HDS, PCI-DSS, HIPA) => vous devez ajouter un vDC de destination [ Premier](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/).
- Si vous n'avez pas NSX sur votre infrastructure actuelle et que vous n'avez pas besoin de certifications => vous pouvez choisir entre un vDC de destination [Essentials](https://www.ovhcloud.com/fr/managed-bare-metal/) ou [Premier](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/). En règle générale, les hosts Essentials ont un meilleur rapport coût/cœur tandis que Premier optimise le rapport coût/RAM. Vous pouvez comparer les [hosts Essentials](https://www.ovhcloud.com/en-gb/managed-bare-metal/options/) et les [hosts Premier](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/hosts/).
- Les options Veeam Managed Backup et Zerto Disaster Recovery sont disponibles sur Essentials et Premier.
- Si votre infrastructure actuelle est en AMD-2013, vous ne pourrez pas migrer vers Premier.

![decision tree](images/ESSorPRE.png){.thumbnail}

<a name="selecthosts"></a>
#### Etape 1.2 Sélectionner vos hosts (compute)

Vous avez maintenant choisi votre gamme commerciale.

En fonction de vos besoins en termes de calcul (CPU, RAM), vous pouvez sélectionner le type et le nombre d'hosts que vous souhaitez commander entre les [hosts Essentials](https://www.ovhcloud.com/fr/managed-bare-metal/options/) et les [hosts Premier](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/hosts/). Par exemple, si vous utilisez actuellement 3xDC2016 XL+, et que vous avez choisi Essentials, vous pouvez passer à 3xESS128 (grâce à un processeur plus puissant) ou 3xESS256 (si la RAM est votre critère de choix).

Attention, ce choix n'est pas définitif, vous pouvez commencer par 3xESS128 et passer à  3xESS256 par la suite.

<a name="selectdatastores"></a>
#### Etape 1.3 Sélectionner vos datastores (storage) <a name="introduction"></a>

Vous avez maintenant choisi votre gamme commerciale et vos hosts. Veuillez noter que certains de vos datastores actuels peuvent être compatibles avec les nouvelles gammes, c'est-à-dire que ces datastores peuvent être définis comme globaux. Un datastore global est un datastore partagé sur tous les clusters/vDC au sein d'une infrastructure VMware, c'est-à-dire partagé entre le vDC d'origine  et le vDC de destination. Vous pouvez utiliser l'API OVHcloud pour vérifier la compatibilité des datastores :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/checkGlobalCompatible
>

**Résultat attendu :** boolean

Si le retour API est `TRUE`, ce datastore est compatible avec les nouvelles gammes et vous pourrez le conserver. Vous pourrez le définir comme global par la suite dans le processus de mise à jour.
Si le retour API est `FALSE`, ce datastore n'est pas compatible, il faudra alors commander de nouveaux datastores, soit des [datastores Essentials](https://www.ovhcloud.com/fr/managed-bare-metal/options/) soit des [datastores Premier](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/datastores-nfs/).<br>
En fonction de vos besoins en capacité de stockage, vous pouvez choisir le type et le nombre de datastores à commander.

Il vous suffit de remplacer les datastores qui ne sont pas compatibles. Il vous sera possible de libérer les datastores qui ne sont pas compatibles à la fin du processus.

Veuillez noter que ce choix n'est pas définitif, vous pouvez commencer par 4x3Tb et passer à 2x6Tb par la suite.

<a name="build"></a>
### Etape 2 Construire votre nouvelle infrastructure

A la fin de l'étape 2, vous devriez avoir au sein de votre infrastructure VMware actuelle (pcc -123-123-123-123) un nouveau vDC de destination avec des hosts 2020 et des datastores globales.

<a name="addvdc"></a>
#### Etape 2.1 Ajouter un nouveau vDC de destination

Vous pouvez ajouter un vDC de destination en procédant comme suit :

<a name="eligible"></a>
##### Etape 2.1.1 Vérifier l'éligibilité de vos services

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/commercialRange/compliance
>

**Résultat attendu :** vous retrouverez la liste des gammes commerciales compatibles avec votre infrastructure VMware, dont Essentials ou Premier si vous êtes compatible. Veuillez noter que l'ajout d'un vDC 2020 n'est pas encore disponible pour tous les services car des opérations de mise à niveau et de maintenance sont en cours. Nous vous avertirons dès que cette migration sera possible pour votre infrastructure.

<a name="checkupgrade"></a>
##### Etape 2.1.2 Obtenir votre "serviceName"

> [!api]
>
> @api {GET} /order/upgrade/privateCloudManagementFee
>

**Résultat attendu :** vous devriez obtenir "pcc-123-123-123-123/managementfee" 

<a name="checkupgradeto"></a>
##### Etape 2.1.3 Obtenir votre "planCode"

> [!api]
>
> @api {GET} /order/upgrade/privateCloudManagementFee/{serviceName}
>

**Résultat attendu :** vous devriez obtenir le planCode à utiliser lors du prochain call API de type "pcc-management-fee-premier" or "pcc-management-fee-essentials"

<a name="snandpncheck"></a>
##### Etape 2.1.4 Vérifier avec vos "serviceName" et "planCode" votre possibilité d'ajouter un vDC Premier ou Essentials

> [!api]
>
> @api {GET} /order/upgrade/privateCloudManagementFee/{serviceName}/{planCode} ( quantity : 1 )
>

**Résultat attendu :** vous devriez obtenir une commande provisoire pour l'ajout d'un vDC Premier ou Essentials

<a name="createorder"></a>
##### Etape 2.1.5 Valider votre commande

> [!api]
>
> @api {POST} /order/upgrade/privateCloudManagementFee/{serviceName}/{planCode} ( quantity : 1 )
>

**Résultat attendu :** order.upgrade.OperationAndOrder

Cet appel API génère un bon de commande qui doit être validé. Si vous n'avez pas de moyen de paiement, merci de contacter le support ou votre Account Manager pour le faire valider.

> [!primary]
>
> Tant que vous n’aurez pas attribué les autorisations nécessaires aux utilisateurs sur le nouveau vDC, vous ne pourrez pas voir le nouveau vDC dans le client vSphere.
>

<a name="addhostandds"></a>
#### Etape 2.2 Ajouter des nouveaux hosts et datastores

Au sein de l'espace client OVHcloud, vous devriez voir votre nouveau vDC dans votre infrastructure. vous pouvez procéder à la commande des nouvelles ressources (sélectionnées à l'étape 1) dans le nouveau vDC de destination en suivant ce [guide d'informations sur la facturation Private Cloud](https://docs.ovh.com/fr/private-cloud/facturation-private-cloud/#ressources-mensuelles_1).

<a name="converttoglobal"></a>
#### Etape 2.3 Convertir une datastore comme global

Vous avez maintenant de nouveaux datastores dans le nouveau vDC de destination ainsi que des datastores compatibles dans votre vDC existant (étape 1.3). Vous pouvez procéder à la conversion en datastore global.

Exécutez l'API OVHcloud pour convertir les datastores en global:

> [!api]
>
> @api {POST}  /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/convertToGlobal
>

**Résultat attendu :** Informations de tâche

<a name="preparevdcovhcontext"></a>
### Etape 3 Préparer votre vDC de destination dans le contexte OVHcloud

<a name="checkovhcontext"></a>
#### Etape 3.1 Vérifier les caractéristiques héritées (Certifications, KMS, restrictions d'accès)

<a name="certs"></a>
##### Etape 3.1.1 Certifications

Ces options sont activées par infrastructure VMware et s'appliquent à n'importe quel vDC.
Si une option a été activée, elle reste disponible sur le vDC de destination.

<a name="kms"></a>
##### Etape 3.1.2 Key Management Server (KMS)

Cette option est à activer et configurer par infrastructure VMware et s'applique à n'importe quel vDC.
Si les machines virtuelles sont protégées par le chiffrement, elles restent protégées sur le vDC de destination.

<a name="access"></a>
##### Etape 3.1.3 Restrictions d'accès

Pour vous connecter à votre infrastructure VMware, vous pouvez choisir de bloquer l'accès au vSphere par défaut. Pour cela, consultez notre guide sur la [politique d'accès au vCenter](../changer-la-politique-d-acces-au-vcenter/).

Suite au changement de politique d'accès, si celle-ci est passée en « restreinte », le nouveau vDC héritera de la politique d'accès utilisée par le vDC d'origine.

<a name="userrights"></a>
#### Etape 3.2 Gérer les droits des utilisateurs

Dans le cycle de vie du vDC d'origine, une liste d'utilisateurs peut avoir été créée pour des besoins métiers, ou des besoins organisationnels. Ces utilisateurs seront également présents sur le nouveau vDC mais n'auront aucun droit sur ce nouveau vDC. Vous devrez donc attribuer les droits appropriés aux utilisateurs, en fonction de la configuration du vDC de destination.

Consultez à cet effet nos guides pour [changer les droits d'un utilisateur](../changer-les-droits-d-un-utilisateur/), [modifier le mot de passe d'un utilisateur](../changement-du-mot-de-passe-utilisateur/) et [associer un e-mail à un utilisateur](../associer-email-a-un-utilisateur/).

<a name="activateveeamzerto"></a>
#### Etape 3.3 Activer les options Veeam Managed Backup & Zerto Disaster Recovery

Ces options sont à activer et à configurer par vDC.
Vous devez activer la/les option(s) concernée(s) sur le nouveau vDC.

<a name="checknetwork"></a>
#### Etape 3.4 Vérifier votre réseau (vRack, IP publique)

<a name="vrack"></a>
##### Etape 3.4.1 vRack

> [!warning]
>
> Des VMnetworks situés dans la même région ne pourront pas être inter-connectés dans un vRack.
>

Par défaut, dans le cadre d'une migration, le nouveau vDC sera lié au même vRack que le vDC d'origine. Consultez notre guide sur [l'utilisation de Hosted Private Cloud au sein d'un vRack](../utiliser-le-private-cloud-au-sein-d-un-vrack/).

<a name="publicnetwork"></a>
##### Etape 3.4.2 Réseau publique

Les adresses IP publiques attachées au vDC d'origine seront automatiquement disponibles pour une utilisation dans le vDC de destination.

<a name="preparevdcvmwarecontext"></a>
### Etape 4 Préparer votre vDC de destination dans le contexte VMware

<a name="ha"></a>
#### Etape 4.1 Reconfigurer VMware High Availability (HA)

L'installation d'un nouveau vDC de destination implique de refaire la configuration du VMware High Availability (HA), notamment l'ordre et la priorité de boot. Consultez [notre guide sur sa configuration](../vmware-ha-high-availability/).

Voici une liste d'éléments à prendre en compte :

- Réglages de monitoring du host
- Réglages de monitoring des VM
- Contrôle d'admission
- Options HA avancées
- Remplacements de VM

**Conseils d'automatisation :** L'applet de commande Powercli « Get-Cluster » renvoie des informations sur les paramètres de configuration HA et DRS qui peuvent être appliqués au cluster de destination avec l'applet de commande « Set-Cluster ».

<a name="drs"></a>
#### Etape 4.2 Reconfigurer VMware Distributed Resource Scheduler (DRS)

L'installation d'un nouveau vDC de destination implique la reconfiguration de la fonction VMware DRS (Distributed Resource Scheduler), en particulier des règles d'affinité ou d'anti-affinité pour les groupes d'hôtes et de VMs. Consultez notre guide sur la [configuration de VMware DRS](../vmware-drs-distributed-ressource-scheduler-new/).

Voici une liste des éléments à prendre en compte :

- Niveau d'automatisation
- Groupes de VMs / d'hôtes
- Règles d'affinité / d'anti-affinité des VMs / hôtes
- Remplacements des machines virtuelles

**Conseils d'automatisation :** [Ce fil de discussion de la communauté VMware](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) détaille les options d'exportation et d'importation des règles d'affinité via powercli.

<a name="respools"></a>
#### Etape 4.3 Reconstruire vos resource pools

L'installation d'un nouveau vDC de destination nécessite la reconstruction des pools de ressources, notamment les réservations, les partages et les applications virtuelles. Cela s'applique également aux vApps et à toute configuration de commande de démarrage définie dans les vApps.

Pour plus d'informations, consultez la documentation de [VMware pour la gestion des pools de ressources](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external}.

Voici une liste d'éléments à prendre en compte:

- Paramètres des partages CPU/mémoire
- Réservations CPU/mémoire
- Option évolutive CPU/Memory
- Limites CPU/mémoire

**Conseils d'automatisation :** L'applet de commande Powercli « Get-ResourcePool » rassemble les informations de la liste de ressources partagées et l'applet de commande « New-ResourcePool » recrée la liste de ressources partagées sur le vDC de destination.

<a name="dsclusters"></a>
#### Etape 4.4 Recréer vos Datastores Clusters (si pertinent)

Si des clusters de datastores sont présents dans le vDC d'origine, l'installation d'un nouveau vDC de destination peut nécessiter la recréation de ces clusters de datastores sur le vDC de destination, si le même niveau de structure et le SDRS sont nécessaires.

Voici une liste des éléments à prendre en compte:

- Niveau d'automatisation SDRS
- Espace SDRS, I/O, règle, stratégie, paramètres d'évacuation des VMs
- Règles d'affinité/anti-affinité SDRS
- Modifications des VMs SDRS
<a name="vsan"></a>
#### Etape 4.5 Activer vSAN (si pertinent)

Si vSAN était activé sur votre vDC d'origine, il sera nécessaire de l'activer à nouveau sur le vDC de destination. Consultez notre guide pour [mettre en œuvre l'hyperconvergence VMware avec vSAN](../vmware-vsan/).
<a name="vspherenetwork"></a>
#### Etape 4.6 Recréer votre configuration réseau vSphere

L'installation d'un nouveau vDC de destination implique la recréation des groupes de ports virtuels de vRack sur le vDC de destination pour garantir la cohérence du réseau de VMs. Si des VLAN vRack sont en cours d'utilisation sur le vRack du vDC d'origine, ils peuvent être utilisés pour étendre le domaine L2 au vDC de destination afin de permettre un plan de migration plus échelonné. Pour plus d'informations, consultez notre guide sur l'[Utilisation du cloud privé dans un vRack](../utiliser-le-private-cloud-au-sein-d-un-vrack/).

Voici une liste des éléments à prendre en compte:

- Type de VLAN de groupe de ports
- Paramètres de sécurité (**Important dans le cas où le mode promiscuité (*promiscuous mode*) est nécessaire**)
- Paramètres de Teaming et de Failover
- Allocation des ressources réseau du client

Pour plus d'informations, consultez le guide OVHcloud sur [comment créer un V(x)LAN dans un vRack](../creation-vlan-vxlan/#vlan-vrack) et la documentation de VMware sur [comment modifier les paramètres des groupes de ports distribués](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-FCA2AE5E-83D7-4FEE-8DFF-540BDB559363.html){.external}.

**Conseils d'automatisation :** L'applet de commande Powercli « Export-VDPortGroup » peut récupérer des informations de Portgroups virtuels distribués qui peuvent ensuite être importées dans le Distributed Switch de destination à l'aide de l'applet de commande « New-VDPortgroup -BackupPath ».

> [!warning]
>
> - Certaines appliances de routage virtuel telles que pfSense utilisent CARP pour fournir de la haute disponibilité.
> - Les VMs qui utilisent CARP auront besoin que le « *Promiscuous Mode* » soit activé dans les paramètres de sécurité d'un groupe de ports.
> - Vous pouvez peut activer ce paramètre sur le vRack vDS du vDC de destination.
> - Cependant, si le « *Promiscuous Mode* » doit être activé sur le portgroup « VM Network » du nouveau vDC, merci d’ouvrir un ticket auprès du support OVHcloud avant la migration, afin de maintenir la connectivité durant la migration.
>
<a name="inventory"></a>
#### Etape 4.7 Vérifier l'organisation de votre inventaire (si pertinent)

Pour des raisons organisationelles, les VMs, les hosts ou les datastores peuvent avoir été placés dans des répertoires.

Si cette organisation est toujours nécessaire, il vous faudra la créer à nouveau dans le vDC de destination.
<a name="nsx"></a>
#### Etape 4.8 Configurer NSX (si pertinent)
<a name="transportzones"></a>
##### Etape 4.8.1 v(x)lan Transport Zones

Que les VXLANs ou les DLRs soient utilisés ou pas dans le vDC d'origine, il sera nécessaire d'étendre la ou les zones de transport lors de la migration depuis le vDC d'origine vers le vDC de destination si des NSX Edges sont en cours d'utilisation. Cela permettra de créer des ID réseau VXLAN à l'échelle du PCC, qui faciliteront la migration Edge

La zone de transport VXLAN détermine les limites d'un réseau soutenu par VXLAN et le routage d'un DLR. L'extension des zones de transport garantit que les mêmes réseaux VXLAN et les mêmes DLR sont disponibles dans les vDC d'origine et de destination.
Pour ce faire, vous devez modifier la zone de transport actuelle afin d'inclure les nouveaux clusters qui se trouvent dans le vDC de destination.

Pour ce faire, suivez les étapes suivantes :

1\. Dans le client vSphere, rendez-vous dans `Networking and Security`{.action}, puis dans `Installation and Upgrade`{.action}.

2\. Cliquez sur l'onglet `Logical Network Settings`{.action}, puis sur l'onglet `Transport Zones`{.action}.

3\. Sélectionnez alors une zone de transport et cliquez sur l'option `Connect Clusters`{.action}.

4\. Sélectionnez le ou les nouveaux clusters qui se trouvent dans le vDC de destination et choisissez `Save`{.action}.

5\. Répétez cette opération pour toutes les zones de transport en cours d'utilisation.

Vous pouvez également créer de nouveaux réseaux VXLAN en suivant ces étapes :

1\. Dans le client vSphere, rendez-vous dans `Networking and Security`{.action}, puis dans `Logical Switches`{.action}.

2\. Cliquez sur `+ Add`{.action}.

3\. Donnez un nom au Switch logique/VXLAN et choisissez la zone de transport.

4\. Cliquez sur `Add`{.action}.
<a name="edges"></a>
##### Etape 4.8.2 NSX Edges

Pour migrer une gateway Edge, nous devons demander au Manager NSX de redéployer la gateway Edge dans le vDC de destination. Cela permet d'assurer la cohérence au sein de la base de données du Manager NSX. Pour ce faire, il est nécessaire que toutes les interfaces d’une Edge gateway soient attachées aux VXLANs.

> [!primary]
>
> Dans ce guide, la haute disponibilité (HA) est désactivée avant la migration de la gateway NSX Edge. Cela permet de réduire les temps d'inactivité. Il est possible de migrer une gateway Edge avec la HA activée, mais le temps d'inactivité sera plus long puisque deux Edges NSX devront alors être migrées au lieu d'une seule.
>

> **Prérequis :**
>
> - Si des VLANs vRack sont en cours d'utilisation, assurez-vous que les VLANs sont recréés dans le vDC de destination et que le vDC d'origine et de destination font partie du même vRack. Cela permettra la communication L2 entre les vDC.
>
> - Pour la migration Edge, tous les portgroups VLAN (y compris le VM Network) seront basculés vers des portgroups VXLAN. Le Edge sera ensuite migré vers le nouveau vDC. Enfin, une nouvelle bascule vers des portgroups VLAN sera effectuée. Nous vous conseillons de garder une trace des réseaux qui ont été basculés.
>

Vous pouvez migrer un NSX Edge en suivant ces étapes :

1\. Dans le client vSphere, accédez à `Networking and Security`{.action}.

2\. Accédez à `NSX Edges`{.action}.

3\. Choisissez le NSX Edge à migrer.

4\. Cliquez sur l'onglet `Configure`{.action}.

5\. Cliquez sur l'onglet `High Availability`{.action}.

6\. Cliquez sur `Edit`{.action}.

7\. Affectez la valeur **Disabled** à l'option « HA Status » et attendez la fin de la tâche.

8\. Cliquez sur l'onglet `Interfaces`{.action}.

9\. L'objectif ici est de basculer toute interface connectée à un portgroup VLAN, vers un portgroup VXLAN. Par exemple :

- Etape 1 - Sélectionnez l'interface qui est connectée au VM Network (ou tout autre portgroup VLAN)
- Etape 2 - Cliquez sur `Edit`{.action}.
- Etape 3 - Cliquez sur l'icône « Crayon » à côté du champ « Connected to ».
- Etape 4 - Dans l'onglet « Logical switch », choisissez un réseau VXLAN temporaire auquel connecter cette interface. **Prenez note du mappage VLAN à VXLAN**.
- Etape 5 - Cliquez sur `OK`{.action}.
- Etape 6 - Cliquez sur `Save`{.action}.
- Etape 7 - Répétez cette opération pour tous les autres portgroups VLAN.

> [!primary]
>
> - Prenez note des réseaux VLAN correspondant aux nouveaux réseaux VXLAN.
>
> - Toute VM passant d'un réseau VLAN  à un réseau temporaire VXLAN subira une déconnexion du réseau.
>

10\. Une fois tous les réseaux VLAN transformés en réseaux VXLAN, cliquez sur l'onglet  `Appliance Settings`{.action}.

11\. Sous l'en-tête `Edge Appliance VMs`, sélectionnez la roue crantée et cliquez sur  `Edit`{.action}.

12\. Indiquez ici les paramètres pointant vers le nouveau vDC et cliquez sur `Save`{.action}.

13\. La gateway Edge sera redéployée dans le vDC de destination.

> [!primary]
>
> Si vous voyez les détails de deux edge dans la section « Edge Appliance VMs » même si vous avez désactivé HA, vous devrez soit répéter les étapes ci-dessus pour migrer cette edge « fantôme », soit cliquer sur la roue crantée pour cette edge fantôme et « non déployée » et cliquer sur `Supprimer`{.action}.
>

14\. Une fois la tâche de redéploiement terminée, cliquez sur l'onglet `Configure`{.action}.

15\. Cliquez sur l'onglet `Interfaces`{.action}.

16\. L'objectif ici est de rétablir tout réseau VLAN qui a été modifié en réseau VXLAN à l'étape 9, et de revenir au réseau VLAN correct qui existe dans le nouveau vDC.

17\. Réactivez HA sur la Edge.

18\. Répétez cette opération pour tous les autres NSX Edge.

> [!primary]
>
> Si vous avez migré la Edge alors que HA était activé et que vous rencontrez des problèmes de connectivité, il est recommandé de basculer les edge HA et de tester à nouveau. Pour ce faire, accédez à `Configure`{.action}, `Appliance Settings`{.action} et sélectionnez la roue crantée de la edge active, puis sélectionnez `Set Admin State Down`{.action}. Testez à nouveau puis repassez le statut admin à « Up ».
>
<a name="dlr"></a>
##### Etape 4.8.3 NSX Distributed Logical Routing

Une fois que la zone de transport NSX a été étendue au nouveau vDC, le routage logique distribué est disponible dans les hôtes ESXi sur le vDC de destination.

Les routeurs logiques distribués NSX ne doivent être migrés que lorsqu'une VM de contrôle est déployée en appui du DLR qui facilite le routage dynamique.

Si une VM de contrôle est déployée, suivez les étapes de migration NSX Edge ci-dessus.

Notez qu’il n’est pas nécessaire de changer d’interface car les DLR **doivent** déjà se connecter aux VXLANs.
<a name="dfw"></a>
##### Etape 4.8.4 NSX Distributed Firewall

Le pare-feu distribué NSX protège automatiquement l'intégralité du vDC. Ainsi, tout nouveau vDC sera également protégé.

Cependant, il est extrêmement important de comprendre que les objets placés dans le pare-feu distribué correspondront à l'ID d'objet significatif en local. Par exemple, si un groupe de ports VLAN vRack est utilisé dans une règle dans le pare-feu distribué, il référencera le groupe de ports à partir du vDC d'origine uniquement et non à partir d'un groupe de ports vRack recréé dans le vDC de destination.

Il sera nécessaire de vérifier si le pare-feu distribué contient des objets significatifs en local et de modifier le pare-feu distribué afin qu'il puisse également voir les objets dans le nouveau vDC. Par exemple, une règle qui utilise un groupe de ports VLAN vRack à partir du vDC d'origine peut être modifiée pour utiliser à la fois le groupe de ports VLAN vRack d'origine et le nouveau groupe de ports VLAN vRack dans le vDC de destination.

Les objets devant être considérés :

- Clusters
- Datacenters
- Groupes de ports distribués
- Groupe de ports Legacy
- Resource Pool
- vApp
<a name="zerto"></a>
#### Etape 4.9 Etendre la protection Zerto Disaster Recovery Protection (si pertinent)

Zerto Replication est configuré au niveau du vDC. Afin de protéger la charge de travail sur le nouveau vDC, certaines actions sont nécessaires.

> **Prérequis :**
>
> - Avoir un nouveau vDC
> - Disposer sous le nouveau vDC d’un cluster host avec le nombre de hosts requis (identique au cluster source et au minimum deux hosts)
> - Avoir sous le nouveau vDC un datastore accessible depuis les 2 hosts
> - Avoir activé Zerto Replication sur le nouveau vDC
>

Exécutez l'API OVHcloud pour préparer la migration :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/startMigration
>

`{datacenterId}` est le **nouvel** id vDC, vous pouvez l'obtenir avec l'appel API suivant :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

Une tâche est lancée sur l'infrastructure pour déployer vRA sur chacun des hosts du nouveau vDC. Attention, les hosts commandés sur le nouveau datacenter après avoir exécuté cet appel API, ne disposeront plus de Z-VRA automatiquement, dans ce cas précis, il faudra contacter le support afin de déployer les Z-VRA sur les nouveaux hosts. Ce changement ne va durer que le temps de migration de votre infrastructure, jusqu'à ce que vous utilisiez l'appel API de fin de migration zerto (Etape 6.2)

Ensuite, Zerto Replication fonctionnera sur les deux datacentres :

- l'ancien est toujours en cours d'exécution et protège votre charge de travail
- le nouveau est prêt à accueillir votre charge de travail

L'étape suivante dépend de la configuration actuelle par [groupe de protection virtuelle](../zerto-virtual-replication-vmware-vsphere-drp/) :

- source de la réplication
- destination de la réplication
<a name="vpgsource"></a>
##### Etape 4.9.1 VPG Source

Avec la migration sur le nouveau vDC, Zerto continuera de protéger la charge de travail avec vRA déployé sur le cluster et les hôtes cibles.
<a name="vpgdest"></a>
##### Etape 4.9.2 VPG Destination

Malheureusement, il n'y a aucun moyen de mettre à jour la configuration de VPG, la seule option est de supprimer le VPG et d'en créer un nouveau.
<a name="migrate"></a>
### Etape 5 Déplacer vos machines virtuelles
<a name="svmotion"></a>
#### Etape 5.1 Storage Motion

Vous disposez désormais d'anciens datastores dans votre anciens vDC (non compatibles avec les nouvelles gammes) et de datastores globaux (anciens datastores compatibles ou nouveaux). Vous pouvez utiliser [Storage Motion](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vcenterhost.doc/GUID-AB266895-BAA4-4BF3-894E-47F99DC7B77F.html) pour déplacer une machine virtuelle (VM) et ses fichiers disque d'un datastore à une autre sans impact sur le fonctionnement de la VM.
<a name="vmotion"></a>
#### Etape 5.2 vMotion

Comme le vDC d'origine et le vDC de destination se trouvent dans le même vCenter, VMware vMotion peut être utilisé à chaud ou à froid pour migrer des VMs.

**Hot vMotion** peut être utilisé lorsque le chipset du CPU est le même entre la source et la destination (par exemple Intel à Intel).

**Cold vMotion** peut être utilisé lorsque le chipset du CPU est différent entre la source et la destination (par exemple, AMD à Intel).

Voici une liste des aspects à prendre en compte:

- Chipsets de CPU hôte ESXi sur les vDC d'origine et de destination
- Modes EVC sur les clusters d'origine et de destination
- Les versions vDS sont les mêmes entre le vDC d'origine et le vDC de destination. Il est possible de mettre à jour le vDS vRACK du vDC d'origine. Pour le vDS avec le VM Network (VXLAN vDS), veuillez contacter le support afin que le vDS soit mis à jour.

> [!primary]
> Il est recommandé de tester le chemin de migration avec des VMs à faible impact ou de tester les VMs avant la migration de production.
>
<a name="finalizemigration"></a>
### Etape 6 Finaliser votre migration
<a name="reconveeam"></a>
#### Etape 6.1 Reconfigurer Veeam Managed Backup (si pertinent)

Si l'application Veeam fournie par OVHcloud est actuellement utilisée pour sauvegarder les VMs sur le vDC d'origine, il sera nécessaire d'utiliser l'API OVHcloud pour vérifier à nouveau les tâches de sauvegarde après la migration des machines virtuelles sur le vDC de destination.

Voici comment procéder:

1\. Activez la sauvegarde pour le nouveau vDC.

2\. Migrez les machines virtuelles du vDC d'origine vers le vDC de destination.

3\. Exécutez l'API OVHcloud pour vérifier à nouveau la date de sauvegarde:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/checkBackupJobs
>

> [!warning]
>
> Cet appel API est à exécuter sur l'ancien vDC (vDC source).

4\. Répétez les étapes 2 et 3 pour toutes les machines virtuelles dont les sauvegardes sont activées et qui ont été migrées vers le nouveau vDC.

Désactivez Veeam Backup sur l'ancien vDC. Cela peut se faire via l'appel API suivant :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable
>

`{datacenterId}` est l'**ancien** id vDC, vous pouvez l'obtenir avec l'appel API suivant :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>
<a name="reconzerto"></a>
#### Etape 6.2 Reconfigurer Zerto Disaster Recovery (si pertinent)

Exécutez l'API OVHcloud pour finaliser la migration :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/endMigration
>

`{datacenterId}` est le **nouvel** id vDC, vous pouvez l'obtenir avec l'appel API suivant :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

Une tâche est lancée pour :

- Vérifier si aucun VPG de destination n'existe encore sur le datacentre : ils DOIVENT être retirés.
- Basculer l’option Zerto Replication (souscription) de l’ancien vers le nouveau vDC.
- Retirer tous les vRA des hôtes sur l'ancien vDC.
<a name="recreateaffinity"></a>
#### Etape 6.3 Recréer les règles d'affinité

Les règles d'affinité sont basées sur des objets de VM de sorte que les règles ne peuvent être créées qu'après la migration des VMs vers le vDC de destination. Une fois la migration terminée, les règles d'affinité peuvent être réappliquées sur le vDC de destination.

**Conseils d'automatisation :** [Ce fil de discussion de communauté VMware](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) détaille les options d'exportation et d'importation des règles d'affinité via powercli.
<a name="hostmm"></a>
#### Etape 6.4 Passer les hosts en mode maintenance

Vous devez mettre les hôtes en mode maintenance en procédant comme suit :

1. Dans le client vSphere, accédez à `Hosts and Clusters`{.action}.
2. Accédez à un `Host`{.action}.
3. Faites un clic droit sur le Host.
4. Accédez à `Maintenance Mode`{.action}.
5. Cliquez sur `Enter Maintenance Mode`{.action}.

Répétez l'action pour chaque hôte.
<a name="removeoldds"></a>
#### Etape 6.5 Supprimer les anciens datastores

À cette étape, on peut considérer qu’il n’y a plus de données et/ou de VM sur l’ancien vDC, donc on peut supprimer des ressources.

Dans les instructions suivantes, `{datacenterId}` est l'**ancien** id vDC, vous pouvez l'obtenir avec l'appel API suivant :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

Avec l'API, obtenez la liste des ID du filer (datastore) :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer
>

Puis pour chaque ID :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove
>

Dans le cas d'un datastore global, vous pouvez utiliser l'appel API suivant :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/filer/{filerId}/remove
>

Une tâche est créée pour chaque appel, vous pouvez suivre l'avancement avec :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}
>

> [!warning]
>
> Attendez la fin complète des tâches avant de poursuivre.
>
<a name="removeoldhosts"></a>
#### Etape 6.6 Supprimer les anciens hosts

Dans les instructions suivantes, `{datacenterId}` est l'**ancien** id vDC, vous pouvez l'obtenir avec l'appel API suivant :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

Avec l'API, obtenez la liste des ID d'hôte :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host
>

Puis pour chaque ID :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove
>

Une tâche est créée pour chaque appel, vous pouvez suivre l'avancement avec :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{hostId}/task/{taskId}
>

> [!warning]
>
> Attendez la fin complète des tâches avant de poursuivre.
>
<a name="removeoldvdc"></a>
#### Etape 6.7 Supprimer le vDC source

Dans les instructions suivantes, `{datacenterId}` est l'**ancien** id vDC, vous pouvez l'obtenir avec l'appel API suivant :

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

Avec l'API, demandez la suppression du vDC :

> [!api]
>
> @api {DELETE} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}
>

## FAQ

Retrouvez ci-dessous une liste de questions fréquemment posées au sujet de la migration vDC.

> [!faq]
>
> Quels sont les impacts lors du partage de mes datastores entre mes vDC ?
>> Il n'y a aucun impact sur votre production, sur la facturation ou sur les snapshots ZFS. Cependant, il n'est actuellement pas possible d'annuler le partage d'un datastore. Nous modifierons cela plus tard.
> Est-ce que les VMs (avec IP publiques) seront accessibles depuis l’extérieur si elles sont dans le nouveau vDC quand les PFSENSE sont dans l’ancien vDC ?
>> Oui, le VM network est au niveau de l'infrastructure VMware et donc sur les 2 vDC.
> Est-il possible de mettre en place un PFSENSE dans l'ancien vDC et un autre dans le nouveau vDC ?
>> Oui, il est même nécessaire d'avoir 2 PFSENSE différents pour éviter les conflits d'IP.
> Les vxlan sont-ils disponibles sur les deux vDC ?
>> Les vxlan sont disponibles uniquement sur Premier et non sur Essentials.
> Nous n'utilisons pas NSX. La procédure de migration indique que les vDS source/destination doivent avoir la même version. Sur la source, notre unique vDS est en 6.0.0 donc j'imagine qu'il faut le mettre à jour. La documentation / la video / et l'interface indiquent qu'on peut le faire nous-mêmes sans coupure si c'est du vRack. Je pensais que c'était du vRack mais nous ne pouvons pas mettre à jour (le menu est grisé). Est-ce que ça signifie que c'est du vxlan ? Comment fait-on la différence entre vRack et vxlan ?
>> S'il est grisé, il s'agit sans doute du DVS publique (vmnetwork) /vxlan. Le DVS vrack est un second DVS avec le mot "vrack" a la fin. N'hésitez pas a ouvrir un ticket support afin que nous puissions confirmer cela avec vous et faire l'upgrade DVS si nécéssaire.
> Comment savoir si mes adaptateurs réseau sont VLAN ou VxLAN et compatibles avec Essentials ? Dans vSphere, je vois par exemple et sans plus de détails : vxw-dvs-74-virtualwire-20-sid-....
>> Tout ce qui est %-virtualwire-% est du vxlan.
> Si j'ai plusieurs VM qui passent par le même EDGE NSX, faudra-t-il faire la migration de l'ensemble des VM et du EDGE en même temps, au risque de ne plus avoir de liaison Internet sur certaines VM dans le cas contraire ?
>> Oui, il faudrait déplacer l'EDGE avec un redéploiement avant de déplacer les VMs. En fonction des cas, avec réseaux étendus ou pas, les 2 actions peuvent être séparées.
> Est-ce qu'on peut créer un pool DRS pour les datastores globaux ? Je crois avoir déjà essayé sans succès entre 2 vDC 2014 / 2016.
>> Il y a effectivement des limitations pour les datastores globaux. Nous conseillons de ne les utiliser que pour faire la migration entre les deux vDC,  d'avoir ensuite des datastores "standard" sur le nouveau vDC et de rendre les datastores globaux a la fin de la migration.
> Nous avons un SDDC 2016 avec 6 x 6 To SSD Acceleraded (commandés en 2021) avec "convert to global" disponible dans l'espace client OVHcloud. Peut-on les convertir en global et les garder en l'état dans le nouveau vDC (pour éviter la phase de storage vMotion) ? Note: les 6 DS sont dans un cluster de stockage.
>> Oui, si les VMs pointent sur ces DS, il n'y aura pas d'étapes de storage motion.
> Quelles sont les limitations/différences au niveau de la migration selon la gamme choisie (Essentials ou Premier)?
>> Il n'y a pas de différences entre un upgrade vers Essentials ou vers Premier. L'unique différence est présente sur les étapes liées au composant NSX. Ces étapes sont nécessaires pour un upgrade vers Premier et non pertinentes pour un upgrade vers Essentials.
> Combien de temps faut-il prévoir pour cette migration (en fonction du nombre de VM)?
>> Les vitesses constatées pour l'étape de Storage Motion sont entre 0.5 et 1To par heure. Concernant le vMotion, cela dépend fortement de la taille de la VM, en moyenne moins d'une minute; cela peut prendre jusqu'à 3 minutes pour les VM de plusieurs To.
> Quelles sont les licences Microsoft disponibles en mode SPLA ?
>> Les licences Windows (standard et datacentre) et SQL Server (standard et web) sont disponibles sur les offres 2020 en mode SPLA.
> Je dois upgrader 2 infrastructures VMware, actuellement utilisées dans le cadre d'un PRA zerto avec la réplication des données. Est-il nécessaire de faire d'abord un upgrade de mon infrastructure secondaire ou primaire ?
>> Il n'y a pas d'obligation, nous vous recommandons d'upgrader d'abord l'infrastructure secondaire pour maîtriser le processus avant d'upgrader l'infrastructure principale.
> Le plafond historique sur les ressources horaires sera-t-il toujours déployé ?
>> Non, le plafond de facturation horaire est désactivé sur les offres 2020 (Premier & Essentials). Toutes les anciennes gammes continueront à fonctionner avec le plafond de facturation horaire en place
> Le prix des anciennes offres va-t-il évoluer?
>> Non, il n'y a pas de modification tarifaire des anciennes offres prévue.
>  Dans quelle langue les Services Professionnels d’OVHcloud sont-ils disponibles ?
>> Les Services professionnels OVHcloud sont disponibles en français et en anglais.
> Est-ce que les Services Professionnels d’OVHcloud peuvent recréer mes comptes utilisateurs & configurations NSX pour moi ?
>> Nos Services Professionnels n’effectuent aucune opération sur l’infrastructure du client. Nous sommes là pour vous aider, vous guider et vous conseiller. Dans ce cas de figure, nous allons diriger notre client vers un partenaire qui pourra exécuter les opérations dans l'infrastructure client. 
> Quelle est la durée de vie des crédits du Pack of Technical Advice Services ?
>> Le pack est valide pour une durée de 3 mois à compter de la commande.
> Comment savoir combien d'heures de Crédits ont été utilisées et sont restantes ?
>> Votre interlocuteur commercial ou référent technique OVHcloud est en mesure de fournir ces informations.
> Que se passe-t-il si la session du service de conseil prend moins de temps que prévu ?
>> Une session est planifiée et comptabilisée en blocs de 1 heure. Par exemple, une session programmée sur 2 heures et durant 1,5 heure serait facturée sur 2 heures. Une session prévue pour 3 heures mais durant seulement 1,5 heure serait facturée à 2 heures.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
