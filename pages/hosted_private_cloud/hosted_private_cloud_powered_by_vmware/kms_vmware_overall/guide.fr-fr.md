---
title: 'Activer KMS avec Hosted Private Cloud VMware on OVHcloud'
excerpt: 'Découvrez comment activer le service KMS OVHcloud pour sécuriser efficacement vos données sensibles Hosted Private Cloud VMware on OVHcloud'
updated: 2023-06-18
---

> [!warning]
>
> OVHcloud KMS sera bientôt disponible en bêta. Ce guide peut être incomplet et sera mis à jour lors de la bêta.
> N’hésitez pas à nous faire part de vos feedbacks sur le canal Discord dédié : <https://discord.gg/ovhcloud>.
>

## Objectif

**Ce guide complet vous explique comment configurer et optimiser l'utilisation du KMS OVHcloud avec votre Hosted Private Cloud VMware on OVHcloud.**

## Prérequis
- Disposer d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Avoir souscrit une offre [VMware on OVHcloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
- Avoir accès à l'API v2 OVHcloud.
- Avoir accès à l’interface de gestion vSphere de votre PCC (Hosted Private Cloud VMware on OVHcloud).
- Disposez des droits IAM suffisant pour votre compte client OVHcloud et vos ressources Hosted Private Cloud VMware on OVHcloud.

## En pratique

> [!primary]
>
> Prenez en compte que l'activation de KMS est gratuite, mais vous serez facturé pour l'utilisation du service KMS OVHcloud selon le tarif standard.
> Pour plus d'information, consultez la page [Labs KMS OVHcloud](https://labs.ovhcloud.com/en/key-management-service/).{.external}.


Le KMS OVHcloud est un service managé conçu pour :

Protégez vos données au sein de vos services et applications OVHcloud via des techniques de chiffrement entièrement gérées par OVHcloud.
Générez et stockez en toute sécurité vos clés de chiffrement. Vous pouvez les utiliser soit pour vos services OVHcloud, soit pour vos propres applications sans vous inquiéter de les voir volées, falsifiées ou perdues.

OVHcloud déploiera son propre KMS, avec deux options pour consommer les clés de chiffrement :

- **OMK (OVHcloud Managed Keys)** : service de chiffrement en un clic pour vos services OVHcloud éligibles sans avoir à gérer de clés de chiffrement.
- **CMK (Customer Managed Keys)** : stockage sécurisé de vos clés de chiffrement, que vous les importiez ou que vous les utilisiez générées par OVHcloud.  Il permet une gestion complète du cycle de vie des clés pour les clients, compatible tant au sein qu’en dehors des services OVHcloud, et est accessible via une API REST ou une API KMIP.

Pour assurer la réversibilité complète de vos services, le KMS OVHcloud fournit une API KMIP (Key Management Interoperability Protocol). L'API KMIP vous permet de réutiliser vos clés de chiffrement du KMS OVHcloud dans tous les services non-OVHcloud supportant ce protocole. De plus, vous pouvez transférer en toute transparence vos clés de chiffrement vers un autre KMS compatible KMIP sans perturber l'intégration de vos applications.

Nous détaillerons ici les étapes qu'il faudra suivre pour une configuration réussie de KMS avec votre Hosted Private Cloud VMware on OVHcloud.

### Cas d'usage

- Chiffrement et déchiffrement des données Hosted Private VMware on OVHcloud.
- Stockage des clés de chiffrement avec le KMS OVHcloud (CMK).
- Importer votre propre service de gestion de clé (KMS) avec vNKP.
- Gestion du cycle de vie de vos clés (utilisation, rotation, révocation, etc..) KMS.

### Avantages des services KMS

Le KMS OVHcloud vous permet de profiter des avantages d'un service managé ainsi d'autres fonctionnalités :

- CLI : Le KMS OVHcloud dispose d'une CLI qui vous permet d'intéragir avec l'API OVHcloud ainsi que des commandes dédiées pour automatiser vos actions KMS.
- Control Panel : Vous disposez d'une section KMS pour l'ajout de votre serveur KMS au sein du control panel Hosted Private Cloud VMware on OVHcloud.
- REST API or KMIP API : Vous disposez des API OVHcloud qui vous permet d'interagir avec le KMS OVHcloud et votre Hosted Private Cloud VMware on OVHcloud.
  Ces clés de chiffrement peuvent être utilisées soit :
- Avec une intégration en un clic au sein des services OVHcloud (comme l’Object Storage ou le Hosted Private Cloud par exemple). Les clés de chiffrement gérées par le service de gestion de clés OVHcloud KMS sont utilisées pour chiffrer/déchiffrer vos données au sein de vos services OVHcloud, mais vous gardez le contrôle de leur cycle de vie (utilisation, rotation, révocation...).
Ou au sein des propres applications du client avec une API REST ou une API KMIP dédiée pour :
- Chiffrer/déchiffrer les données sur le KMS pour les petites données à l'aide d'AES-GCM ou localement à l'aide d'une clé de données dérivée
- Signer ou vérifier sur KMS en utilisant ECDSA SHA-256, SHA-384 et SHA-512 ou RSA avec remplissage PKCS1 SHA-256, SHA-384 et SHA-512 ou vérifier localement en utilisant une clé publique.

### Comparaison des fonctionnalités OMK / CMK

|                                   | OMK (OVHcloud Managed Key)                                                                                                                                                                       | CMK (Customer Managed Key)               |
|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| Use in OVHcloud eligible services | 	Yes	                                                                                                                                                                                            | Yes                                      |
| Use in external applications	     | n/a                                                                                                                                                                                              | Yes via a REST API or a KMIP API         |
| Key lifecycle management          | 	n/a (Managed by OVHcloud) | 	Yes (creation, rotation, revocation...) |
| Access management                 | 	n/a	| Yes with OVHcloud lAM                    |
| Logs access                       | n/a                                                                                                                                                                                              | 	Yes with OVHcloud Logs Data Platform    |
| Bring Your Own key                | 	n/a                                                                                                                                                                                             | 	Yes                                     |
| Key types                         | Symmetric keys of 128, 192 and 256 bits Asymmetric keys using: RSA-1024, RSA-2048, RSA-3072 or RSA-4096  Elliptic curve keys using EC-256, EC-384, EC-521 with curves values P-256, P-384, P-521 |

## Étape 1 - Vous disposez déja d'un service de gestion de clé (KMS)

Si vous disposez déja d'un service de gestion de clés (KMS) et vous voulez l'utiliser sur votre Hosted Private Cloud VMware on OVHcloud.

#### Comment configurer le chiffrement des disques sur vos machines virtuelles dans VMware vSphere ?

Suivez le guide 1 si vous disposez déjà d'un service de gestion de clé (KMS) et que vous voulez activer le chiffrement de vos machines virtuelles sur votre Hosted Private Cloud VMware on OVHcloud : [Guide 1 - Configurez le chiffrement des machines virtuelles grâce à un serveur KMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration).

## Étape 2 - Vous n'avez pas de service de gestion de clé KMS

Vous ne disposez donc pas de service de gestion de clé (KMS) et vous voulez utiliser celui proposé par OVHcloud pour chiffrer vos données Hosted Private Cloud VMware on OVHcloud.

### Comment activer le KMS OVHcloud avec votre Hosted Private Cloud VMware on OVHcloud ?

Si vous n'avez pas de serveur KMS et que vous voulez utiliser celui d'OVHcloud, vous pouvez suivre le : [Guide 3 - Commander un KMS OVHcloud avec votre Hosted Private Cloud VMware on OVHcloud](/pages/manage_and_operate/kms/quick-start).

Une fois votre KMS commandé et activer avec votre Hosted Private Cloud il vous reste la synchronisation avec votre environnement VMware on OVHcloud pour activer le chiffrement. Pour ça allez dans le guide 1 : [Configurez le chiffrement des machines virtuelles grâce à un serveur KMS OVHcloud (KMS/VMWARE)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration).

### Comment activer le chiffrement des machines virtuelles avec le KMS d'OVHcloud ?

Une fois le KMS d'OVHcloud commandé, vous avez la possibilité de le configurer pour qu'il puisse fonctionner en accord avec votre Hosted Private Cloud VMware on OVHcloud.

Pour plus d'information, suivez le guide : [Guide 1 - Configurez le chiffrement des machines virtuelles grâce à un serveur KMS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration)

## Étape 3 - Vous n'avez pas de service de gestion de clé (KMS) et vous ne voulez pas utiliser celui d'OVHcloud

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>

### Comment utiliser le service natif de gestion de clé vSphere (vNKP) ?

Si vous souhaitez prendre en charge personnellement le management de vos clés de chiffrement (KMS) avec le protocol KMIP. 

Vous pouvez le faire avec la technologie Hosted Private Cloud VMWare on OVHcloud vNKP mise à votre disposition. Pour ça, suivez le : [Guide 2 - Activation du chiffrement des machines virtuelles avec vSphere Native Key Provider (vNKP)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt-vnkp).

## Aller plus loin

KMS pour Hosted Private Cloud VMware on OVHcloud - Index des guides :

- Guide 1 : [Configurez le chiffrement des machines virtuelles dans vSphere grâce à un serveur KMS OVHcloud (KMS OVHcloud + vSphere)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_kms_vsphere_configuration).
- Guide 2 : [Activation du chiffrement des machines virtuelles avec vSphere Native Key Provider (vNKP)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt-vnkp).
- Guide 3 : [Activation/Commande d'un KMS managé par OVHcloud pour votre Hosted Private Cloud VMware on OVHcloud - Premier pas (KMS + IAM + vSphere)](/pages/manage_and_operate/kms/quick-start).
- Guide 4 : [Aperçu de l'architecture KMS](/pages/manage_and_operate/kms/architecture-overview).

Vous pouvez aussi suivre notre labs KMS OVHcloud : [LABS KMS OVHcloud](https://labs.ovhcloud.com/en/key-management-service/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.