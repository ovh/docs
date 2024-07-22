---
title:'OKMS integration for VMware on OVHcloud'
excerpt:'Find out how to set up the OVHcloud KMS within Hosted Private Cloud VMware on OVHcloud to effectively secure your sensitive data'
updated: 2023-07-22
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

| **Hosted Private Cloud API Calls**                                           | **Commentaires**                                                |
|------------------------------------------------------------------------------|-----------------------------------------------------------------|
| **API V2**                                                                   |                                                                 |
| **Credentials :**                                                            |                                                                 |
| **GET** /okms/resource/{okmsId}/credential                                   | - List all access credentials.                                  |
| **POST** /okms/resource/{okmsId}/credential                                  | - Request a new access credential.                              |
| **GET** /okms/resource/{okmsId}/credential/{credentialId}                    | - Get an access credential.                                     |
| **DEL** /okms/resource/{okmsId}/credential/{credentialId}                    | - Revoke and delete an access credential.                       |
|                                                                              |                                                                 |
| **Reference :**                                                              |                                                                 |
| **GET** /okms/reference/serviceKey                                           | - Get service key type, size, curve and operations combination. |
| ---                                                                          |                                                                 |
| **Resources :**                                                              |                                                                 |
| **GET** /okms/resource                                                       | - List OVHcloud KMS services.                                   |
| **GET** /okms/resource/{okmsId}                                              | - Get an OVHcloud KMS service.                                  |
|                                                                              |                                                                 |
| **Service Keys :**                                                           |                                                                 |
| **GET** /okms/resource/{okmsId}/serviceKey                                   | - List all keys.                                                |
| **POST** /okms/resource/{okmsId}/serviceKey                                  | - Create or import a service key.                               |
| **GET** /okms/resource/{okmsId}/serviceKey/{keyId}                           | - Retrieve a key.                                               |
| **PUT** /okms/resource/{okmsId}/serviceKey/{keyId}                           | - Update a service key.                                         |
| **DEL** /okms/resource/{okmsId}/serviceKey/{keyId}                           | - Delete the given service key.                                 |
|                                                                              |                                                                 |
| **API V1**                                                                   |                                                                 | 
| **Authentification :**                                                       |                                                                 |
| GET /dedicatedCloud/{serviceName}/vmEncryption/kms                           | - List virtual machine encryption KMS servers.                  |
| POST /dedicatedCloud/{serviceName}/vmEncryption/kms                          | - Create virtual machine encryption KMS server.                 |
| GET /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}                   | - Get virtual machine encryption KMS server.                    |
| DEL /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}                   | - Remove virtual machine encryption KMS server.                 |
| POST /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties | - Update virtual machine encryption KMS server.                 |


///

# Guide KMS HPC

## Step 1 - Order an OVHcloud KMS (OKMS) within VMware on OVHcloud HPC

/// details | Étape 1

///
## Step 2 - Activate OVHcloud KMS (OKMS) with vCenter
/// details | Étape 2

///

## Step 3 - Enabling VM encryption in vSphere with OKMS

/// details | Étape 3

///

## Go further

Join and chat with our [community of users](/links/community).