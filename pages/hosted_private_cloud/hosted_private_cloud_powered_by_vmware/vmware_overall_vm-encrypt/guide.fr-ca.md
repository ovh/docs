---
title: "KMS for VMware on OVHcloud - Solution et cas d'usages pour chiffrer des VM"
excerpt: "Découvrez les solutions qui s'offrent à vous pour le chiffrement de VM avec ou sans OKMS au sein de votre Hosted Private Cloud VMware vSphere managé on OVHcloud"
updated: 2024-08-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

> [!primary]
>
> Cette fonctionnalité est disponible en version bêta.
>

## Objectif

**Ce guide présente les options qui s'offrent à vous pour chiffrer vos VM avec ou sans KMS.**

## Prérequis

- Disposer d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Avoir souscrit une offre [VMware on OVHcloud](/links/hosted-private-cloud/vmware).
- Avoir accès à l’interface de gestion vSphere de votre Hosted Private Cloud VMware on OVHcloud).
- Disposer des droits IAM suffisants avec votre compte de service OVHcloud et vos ressources KMS Hosted Private Cloud VMware on OVHcloud. Consultez les guides suivants :
  - [IAM pour VMware on OVHcloud - Présentation et FAQ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started).
  - [IAM pour VMware on OVHcloud - Comment activer IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_activation).
  - [IAM pour VMware on OVHcloud - Comment créer un rôle vSphere IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role).
  - [IAM pour VMware on OVHcloud - Comment associer un rôle vSphere et un utilisateur à une politique IAM](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy).

## En pratique

> [!primary]
>
> Prenez en compte que l'activation de KMS est gratuite, mais vous serez facturé pour l'utilisation du service KMS OVHcloud selon le tarif standard.
>

### Étape 1 - Introduction

**Les avantages du chiffrement de VM avec le KMS OVHcloud (OKMS).**

Le KMS OVHcloud est un service managé conçu pour :

1. Protéger vos données au sein de vos services et applications OVHcloud via des techniques de chiffrement entièrement gérées par OVHcloud. Générez et stockez en toute sécurité vos clés de chiffrement. Vous pouvez les utiliser soit pour vos services OVHcloud, soit pour vos propres applications sans vous inquiéter de les voir volées, falsifiées ou perdues.
2. Assurer la réversibilité complète de vos services. Le KMS OVHcloud fournit une API KMIP (Key Management Interoperability Protocol) et une API Rest. L'API KMIP vous permet de réutiliser les clés de chiffrement du KMS OVHcloud dans tous les services non-OVHcloud supportant ce protocole. De plus, vous pouvez transférer en toute transparence vos clés de chiffrement vers un autre KMS compatible KMIP sans perturber l'intégration de vos applications.
3. Avoir une infrastructure de service managé redondante et *serverless*.

Nous détaillerons ici les étapes qu'il faudra suivre pour une configuration réussie de KMS avec votre Hosted Private Cloud VMware on OVHcloud.

#### L'authentification

À ce jour, l'authentification est uniquement possible au sein du KMS OVHcloud (OKMS) grâce à la méthode **mtls** (mutual tls), du protocole officiel tls [rfc8705](https://www.rfc-editor.org/rfc/rfc8705.html) et KMIP pour la gestion (création, suppression etc..) au sein de l'environnement VMware on OVHcloud.

#### Cas d'usages

- Chiffrement et déchiffrement des données Hosted Private VMware on OVHcloud (stratégies de chiffrement de VM au sein de vSphere, vApp etc..).
- Génération de clé KMS depuis vSphere avec le KMS OVHcloud.
- Stockage des clés de chiffrement avec le KMS OVHcloud au sein d'un environnement Hosted Private Cloud VMware on OVHcloud.
- Gestion du cycle de vie de vos clés (utilisation, rotation, révocation, etc..) KMS.
- Utilisation d'IAM et du KMS OVHcloud (OKMS) avec votre Hosted Private Cloud VMware on OVHcloud.
- Interconnexion des services OVHcloud ou pas avec le KMS.

#### Avantages du KMS OVHcloud

Le KMS OVHcloud vous permet de profiter des avantages d'un service managé de gestion de clé (KMS as a service) au sein de l'univers Hosted Private Cloud VMware on OVHcloud.

Pour plus d'informations sur les avantages de l'usage du KMS OVHcloud, consultez le guide :

- « [Guide 3 - KMS - Aperçu de l'architecture](/pages/manage_and_operate/kms/architecture-overview) »

Cette architecture est redondante et permet ainsi de subir des pannes sans que celles-ci n'affectent son service.

#### KMIP

KMIP fournit un service compatible avec vCenter et le chiffrement basé sur l'hôte au sein de VMware vSphere on OVHcloud.

### Étape 2 - Présentation des choix pour chiffrer des machines virtuelles

> [!primary]
>
> À partir de la mise à jour 2 de vSphere 7.0, les machines virtuelles chiffrées et les TPM virtuels peuvent continuer à fonctionner même lorsque le serveur de clés est temporairement hors connexion ou indisponible.
>
> Vérifiez que le serveur de clés (KMS) figure dans le Guide de compatibilité VMware pour les serveurs de gestion de clés (KMS), qu'il est conforme à KMIP 1.1 et qu'il peut s'agir d'un serveur et d'une fonderie de clés symétriques [KMS compatibility - Official documentation](https://www.vmware.com/resources/compatibility/search.php?deviceCategory=kms).
>

**Quelles options s'offrent à vous pour activer le chiffrement de VM au sein de vSphere managé on OVHcloud** ?

#### Option 1 - Sans OKMS

/// details | Avec un KMS externe (BYOK - non OVHcloud)

> [!warning]
>
> Réfléchissez bien aux dépendances de votre infrastructure par rapport au serveur clé. Pour plus d'informations, consultez le « [Guide 2 - HPC - Activer le chiffrement de VM avec OKMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt).
>
> Certaines solutions KMS sont livrées comme des images virtuelles, ce qui permet de créer une boucle de dépendance ou d'autres problèmes de disponibilité avec un mauvais emplacement de l'appliance KMS.
>

**Comment activer le chiffrement des disques sur vos VM** ?

Il vous faut configurer KMS sur votre Hosted Private Cloud VMware on OVHcloud, en suivant les instructions du guide suivant :

- « [Guide 5 - HPC - Activation du chiffrement de VM avec un KMS externe](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt) »

Vous disposez ici des appels API nécessaires à la verification et l'activation du chiffrement sur vos machines virtuelles Hosted Private Cloud VMware on OVHcloud.

Ainsi que des paramètres à l'ajout d'un cluster KMS externe :

- « [Guide 2 - HPC - Activer le chiffrement de VM avec OKMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt) »

- « [Documentation officielle - Compatibilité KMS](https://www.vmware.com/resources/compatibility/search.php?deviceCategory=kms) »

**BYOK** : Bring your owwn key.

///

#### Option 2 - Avec KMS

/// details | Avec un KMS OVHcloud (OKMS)

**Comment activer le KMS OVHcloud avec votre Hosted Private Cloud VMware on OVHcloud** ?

Si vous n'avez pas de service de gestion de clé KMS et que vous voulez utiliser celui proposé par OVHcloud (OKMS) pour chiffrer vos VMs Hosted Private Cloud VMware on OVHcloud, vous pouvez suivre les instructions du guide ci-dessous :

- « [Guide 2 - HPC - Activer le chiffrement de VM avec OKMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt#activation-okms) »

Une fois votre KMS commandé et activé avec votre Hosted Private Cloud, il vous reste à effectuer la synchronisation avec votre environnement VMware on OVHcloud pour activer le chiffrement. Pour cela, suivez les instructions du guide ci-dessous :

- « [Guide 2 - HPC - Activer le chiffrement de VM avec OKMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt#add-okms) »

Nous utiliserons pour cette option un **Fournisseur de clé standard.**

![Standard Key Provider](images/key_provider.png){.thumbnail}

**Comment activer le chiffrement avec le OKMS** ?

Une fois le KMS d'OVHcloud commandé, vous avez la possibilité de le configurer pour qu'il puisse fonctionner en accord avec votre Hosted Private Cloud VMware on OVHcloud.

Pour plus d'informations, suivez le guide :

- « [Guide 2 - HPC - Activer le chiffrement de VM avec OKMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt#activation-chiffrement) »

Si vous avez quelques zones d'ombres sur l'ensemble des étapes à suivre, de la commande jusqu'à l'activation du chiffrement des VM, consultez le [sommaire du guide 2](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt#summary) ».

Nous utiliserons pour cette option un **Fournisseur de clé standard.**

![Standard Key Provider](images/key_provider.png){.thumbnail}

///

#### Option 3 - Sans KMS (vNKP)

/// details | Avec vMware Native Key Protocol

> [!primary]
>
> Attention, vNKP n'est pas un service de gestion de clé KMS (sans KMS/OKMS).
>

Cette option convient si vous n'avez pas de service de gestion de clé externe et que vous ne voulez pas utiliser celui de OVHcloud (OKMS).

**Comment activer le chiffrement de VM avec vNKP** ?

Si vous ne voulez pas profiter des avantages du KMS OVHcloud (OKMS) et que vous voulez quand même activer le chiffrement de vos VMs, vous pouvez le faire en ajoutant un **Fournisseur de clés natives.**

![Native Key Provider](images/key_provider_native.png){.thumbnail}

Ce guide vous détaille en précision les étapes à suivre :

- « [Guide 4 - HPC - Activation du chiffrement de VM avec un vNKP](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt-vnkp) ».

///

## Aller plus loin

KMS pour Hosted Private Cloud VMware on OVHcloud - Index des guides :

- « [Guide 1 - KMS - Premiers pas](/pages/manage_and_operate/kms/quick-start) »
- « [Guide 2 - HPC - Activer le chiffrement de VM avec OKMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_okms_vm-encrypt) »
- « [Guide 3 - KMS - Aperçu de l'architecture](/pages/manage_and_operate/kms/architecture-overview) »
- « [Guide 4 - HPC - Activation du chiffrement de VM avec un vNKP](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt-vnkp) »
- « [Guide 5 - HPC - Activation du chiffrement de VM avec un KMS externe](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt) »

Documentation officielle :

- « [Présentation VMware de vSphere Native Key Provider](https://docs.vmware.com/fr/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-54B9FBA2-FDB1-400B-A6AE-81BF3AC9DF97.html#GUID-54B9FBA2-FDB1-400B-A6AE-81BF3AC9DF97) »
- « [Documentation VMware du processus de chiffrement sur vSphere](https://docs.vmware.com/fr/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-4A8FA061-0F20-4338-914A-2B7A57051495.html#GUID-4A8FA061-0F20-4338-914A-2B7A57051495) »

Vous pouvez aussi suivre le labs KMS OVHcloud : « [Labs KMS OVHcloud](https://labs.ovhcloud.com/en/key-management-service/) ».

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou [rendez-vous ici](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).