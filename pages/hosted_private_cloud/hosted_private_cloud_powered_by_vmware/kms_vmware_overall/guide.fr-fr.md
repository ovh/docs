---
title: 'Activer KMS avec Hosted Private Cloud VMware on OVHcloud'
excerpt: 'Découvrez comment activer le service KMS OVHcloud pour sécuriser efficacement vos données sensibles Hosted Private Cloud VMware on OVHcloud'
updated: 2023-06-17
---

## Objectif

**Ce guide complet vous explique comment configurer et optimiser l'utilisation du KMS OVHcloud avec votre Hosted Private Cloud VMware on OVHcloud.**

## Prérequis
- Disposer d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Avoir souscrit une offre [VMware on OVHcloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
- Avoir accès à l'API v2 OVHcloud.
- Avoir accès à l’interface de gestion vSphere de votre PCC (Hosted Private Cloud VMware on OVHcloud).
- Disposez des droits IAM suffisant pour votre compte client OVHcloud et vos ressources Hosted Private Cloud VMware on OVHcloud.

## En pratique

Le KMS OVHcloud est un service managé conçu pour :

Protégez vos données au sein de vos services et applications OVHcloud via des techniques de chiffrement entièrement gérées par OVHcloud.
Générez et stockez en toute sécurité vos clés de chiffrement. Vous pouvez les utiliser soit pour vos services OVHcloud, soit pour vos propres applications sans vous inquiéter de les voir volées, falsifiées ou perdues.

OVHcloud déploiera son propre KMS, avec deux options pour consommer les clés de chiffrement :

- **OMK (OVHcloud Managed Keys)** : service de chiffrement en un clic pour vos services OVHcloud éligibles sans avoir à gérer de clés de chiffrement.
- **CMK (Customer Managed Keys)** : stockage sécurisé de vos clés de chiffrement, que vous les importiez ou que vous les utilisiez générées par OVHcloud.  Il permet une gestion complète du cycle de vie des clés pour les clients, compatible tant au sein qu’en dehors des services OVHcloud, et est accessible via une API REST ou une API KMIP.

Pour assurer la réversibilité complète de vos services, le KMS OVHcloud fournit une API KMIP (Key Management Interoperability Protocol). L'API KMIP vous permet de réutiliser vos clés de chiffrement du KMS OVHcloud dans tous les services non-OVHcloud supportant ce protocole. De plus, vous pouvez transférer en toute transparence vos clés de chiffrement vers un autre KMS compatible KMIP sans perturber l'intégration de vos applications.

Nous détaillerons ici les étapes qu'il faudra suivre pour une configuration réussie de KMS avec votre Hosted Private Cloud VMware on OVHcloud.

## Étape 1 - Vous disposez déja d'un service de gestion de clé (KMS)

#### Comment configurer le chiffrement KMS (Key Management Service) sur vos machines virtuelles dans VMware vSphere ?

Suivez le guide 1 si vous disposez déjà d'un serveur KMS et que vous voulez activer le chiffrement de vos machines virtuelles sur votre Hosted Private Cloud VMware on OVHcloud : [Guide 1 - Configurez le chiffrement des machines virtuelles grâce à un serveur KMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration).

## Étape 2 - Vous n'avez pas de service de gestion de clé KMS

### Comment activer le KMS OVHcloud avec votre Hosted Private Cloud VMware on OVHcloud ?

Si vous n'avez pas de serveur KMS et que vous voulez utiliser celui d'OVHcloud, vous pouvez suivre le : [Guide 3 - Commander un KMS OVHcloud avec votre Hosted Private Cloud VMware on OVHcloud](/pages/manage_and_operate/kms/quick-start).

Une fois votre KMS commandé et activer avec votre Hosted Private Cloud il vous reste la synchronisation avec votre environnement VMware on OVHcloud pour activer le chiffrement. Pour ça allez dans le guide 1 : [Configurez le chiffrement des machines virtuelles grâce à un serveur KMS OVHcloud (KMS/VMWARE)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration).

### Comment activer le chiffrement des machines virtuelles avec le KMS d'OVHcloud ?

Une fois le KMS d'OVHcloud commandé, vous avez la possibilité de le configurer pour qu'il puisse fonctionner en accord avec votre Hosted Private Cloud VMware on OVHcloud.

Pour plus d'information, suivez le guide : [Guide 1 - Configurez le chiffrement des machines virtuelles grâce à un serveur KMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration)

## Étape 3 - Vous n'avez pas de KMS et vous ne voulez pas utiliser celui d'OVHcloud

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>

### Comment utiliser le service natif de gestion de clé vSphere (VNKP) ?

Si vous souhaitez prendre en charge personnellement avec le protocol KMIP votre service de gestion de clé (KMS), veuillez suivre le guide : [Guide 2 - Activation du chiffrement des machines virtuelles avec vSphere Native Key Provider (VNKP)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt-vnkp).

## Aller plus loin

KMS pour Hosted Private Cloud VMware on OVHcloud - Index des guides :

- Guide 1 : [Configurez le chiffrement des machines virtuelles grâce à un serveur KMS OVHcloud (KMS/VMWARE)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration).
- Guide 2 : [Activation du chiffrement des machines virtuelles avec vSphere Native Key Provider (VNKP)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt-vnkp).
- Guide 3 : [Activation/Commande d'un KMS managé par OVHcloud pour votre Hosted Private Cloud VMware on OVHcloud - Premier pas (KMS/IAM/PCC)](/pages/manage_and_operate/kms/quick-start).
- Guide 4 : [Aperçu de l'architecture KMS](/pages/manage_and_operate/kms/architecture-overview).

Vous pouvez aussi suivre notre labs KMS OVHcloud : [LABS KMS OVHcloud](https://labs.ovhcloud.com/en/key-management-service/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.