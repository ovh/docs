---
title:'OKMS au sein de Hosted Private Cloud VMware on OVHcloud'
      'Chiffrement de VM avec OKMS dans VMware on OVHcloud'
      'Commande et activation de OKMS pour VMware on OVHcloud'
excerpt:'Découvrez comment mettre en place le service de gestion de clé OVHcloud (OKMS) au sein de Hosted Private Cloud VMware on OVHcloud pour sécuriser efficacement vos données sensibles'
        'Découvrez comment activer le chiffrement de données dans votre environnement VMware on OVHcloud grâce au KMS managé OVHcloud (OKMS)'
        'Protégez votre confidentialité et assurez la sécurité de vos informations sensibles VMware on OVHcloud avec la solution avancée de gestion de clé KMS OVHcloud'
        'Activation du chiffrement avec la solution KMS OVHcloud (OKMS) pour sécurisez votre Hosted Private Cloud VMware on OVHcloud'
        'Confidentialité renforcée avec le KMS OVHcloud (OKMS) au sein de Hosted Private Cloud VMware on OVHcloud'
updated: 2023-07-01
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
> OVHcloud KMS (OKMS) est disponible en bêta. Ce guide peut être incomplet et sera mis à jour lors de la bêta.
> N’hésitez pas à nous faire part de vos feedbacks sur le canal [Discord](https://discord.gg/ovhcloud){.external} dédié.
>

## Objectif

**Commander et configurer un KMS OVHcloud (OKMS) pour activer le chiffrement de vos machines virtuelles Hosted Private Cloud VMware on OVHcloud.**

## Prérequis

- Avoir souscrit une offre Private Cloud.
- Avoir accès à l’interface de gestion vSphere.
- Avoir configurer les rêgles IAM avec votre PCC Hosted Private Cloud VMware on OVHcloud.
- Posséder des machines virtuelles avec une version Hardware 13 (minimum).
- Une clef de chiffrement RSA
- Un certificat SSL (PEM)

or 

- Disposer d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Avoir souscrit une offre [VMware on OVHcloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
- Avoir accès à l’interface de gestion vSphere de votre PCC (Hosted Private Cloud VMware on OVHcloud).
- Avoir lu les guides : 
  - [Activer KMS au sein de Hosted Private Cloud VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/kms_vmware_overall).
  - [Premier pas (KMS + IAM + vSphere)](/pages/manage_and_operate/kms/quick-start).

## En pratique

/// details | Introduction

Pour plus d'information sur les choix qui s'offre à vous avec KMS et Hosted Private Cloud VMware on OVHcloud, lisez le guide [Activer KMS au sein de Hosted Private Cloud VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/kms_vmware_overall).

Nous allons ici configurer le chiffrement de machines virtuelles avec le KMS OVHcloud OKMS au sein d'un environnement Hosted Private Cloud VMware on OVHcloud.

### Urls OKMS

| Type    | URL                              |
|---------|----------------------------------|
| KMIP    | eu-west-rbx.okms.ovh.net         |
| KMIP    | eu-west-rbx.okms.ovh.net         |
| REST    | eu-west-rbx.okms.ovh.net         |
| Swagger | swagger-eu-west-rbx.okms.ovh.net |

## Listing des appels API KMS Hosted Private Cloud VMware on OVHcloud

| **Hosted Private Cloud API Calls**                                          | **Commentaires**                         |
|-----------------------------------------------------------------------------|------------------------------------------|
| **API V2**                                                                  |                                          |
| **Credentials :**                                                           |                                          |
| **GET** /okms/resource/{okmsId}/credential                                  | - List all access credentials            |
| **POST** /okms/resource/{okmsId}/credential                                 | - Request a new access credential        |
| **GET** /okms/resource/{okmsId}/credential/{credentialId}                   | - Get an access credential               |
| **DEL** /okms/resource/{okmsId}/credential/{credentialId}                   | - Revoke and delete an access credential |
| ---                                                                         | ---                                      |
| **Reference :**                                                             |                                          |
| **GET** /okms/reference/serviceKey                                          |                                          |
| ---                                                                         | ---                                      |
| **Resources :**                                                             |                                          |
| **GET** /okms/resource                                                      |                                          |
| **GET** /okms/resource/{okmsId}                                             |                                          |
| ---                                                                         | ---                                      |
| **Service Keys :**                                                          |                                          |
| **GET** /okms/resource/{okmsId}/serviceKey                                  |                                          |
| **POST** /okms/resource/{okmsId}/serviceKey                                 |                                          |
| **GET** /okms/resource/{okmsId}/serviceKey/{keyId}                          |                                          |
| **PUT** /okms/resource/{okmsId}/serviceKey/{keyId}                          |                                          |
| **DEL** /okms/resource/{okmsId}/serviceKey/{keyId}                          |                                          |
|                                                                             |                                          |
| **API V1**                                                                  |                                          | 
| **Authentification :**                                                      |                                          |
| GET /dedicatedCloud/{serviceName}/vmEncryption/kms                          |   List virtual machine encryption KMS servers                                        |
| POST /dedicatedCloud/{serviceName}/vmEncryption/kms                         |   Create virtual machine encryption KMS server                                        |
| GET /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}                  |     Get virtual machine encryption KMS server                                      |
| DEL /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}                  |   Remove virtual machine encryption KMS server                                        |
| POST /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties |   Update virtual machine encryption KMS server                                        |


///

# Guide KMS HPC

## Étape 1 - Commande d'un KMS OVHcloud au sein de Hosted Private CLoud VMware on OVHcloud
/// details | Étape 1

///
## Étape 2 - Activation du KMS OVHcloud avec vCenter
/// details | Étape 2

///

## Étape 3 - Activation du chiffrement des machines virtuelles dans vSphere
/// details | Étape 3

///

## Allez plus loin

Rejoignez et échangez avec notre [communauté d'utilisateurs](/links/community).