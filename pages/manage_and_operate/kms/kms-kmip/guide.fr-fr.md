---
title: "Utilisation du protocole KMIP"
excerpt: "Comment communiquer avec le KMS OVHcloud avec le protocole KMIP"
updated: 2024-10-17
---

> [!warning]
>
> Le KMS OVHcloud est actuellement en phase bêta. Ce guide peut donc être incomplet et sera mis à jour lors de la bêta.
> N’hésitez pas à nous faire des retours sur le canal Discord dédié : <https://discord.gg/ovhcloud>.
>

## Objectif

L'objectif de ce guide est de présenter l'utilisation du protocole KMIP ainsi que les différentes opérations et types supportées par le KMS OVHcloud

## Prérequis

- Disposer d'un [compte client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Avoir [commandé un KMS OVHcloud et créer un certificat d'accès](/pages/manage_and_operate/kms/quick-start)

## En pratique

### Description

Le protocole [KMIP](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=kmip) - Key Management Interoperability Protocol - est un protocole conçu pour standardiser les communications avec un KMS.
Ainsi tout produit supportant le KMIP (comme VMware vSphere, Veeam, Nutanix, etc.) peut nativement s'interfacer avec un KMS compatible KMIP comme le KMS OVHcloud.

Cela permet d'assurer une connexion facilité, ainsi que la réversibilité de cette configuration.

### Connexion d'un produit compatible KMIP avec le KMS OVHcloud

La procédure de configuration varie en fonction du produit à intégrer, mais ne nécessite aucune configuration préalable sur le KMS OVHcloud autre que de générer un certificat d'accès.
Les éditeurs de logiciel fournissent en général des guides dédiés à cet objectif.

### Utilisation direct

Il est aussi possible d'utiliser les API KMIP directement.

L'authentification sur ce protocole s’effectue avec un certificat client, de la même façon qu’avec l’API REST.  Il faut donc ouvrir un flux TLS tout en fournissant un certificat d'accès valide.

A partir de là il est possible d'échanger des messages KMIP tels que définit dans le standard. Selon votre stack technologique, nous vous recommandons des librairies telles que :

- PyKMIP pour python (https://github.com/OpenKMIP/PyKMIP)
- Libkmip pour le C (https://github.com/OpenKMIP/libkmip)

### Couverture KMIP

Le KMS OVHcloud couvre un sous-ensemble des versions 1.0 à 1.4 du standard KMIP.
Le détail de la couverture est disponible ci-dessous

> **Legend:**
> - N/A : Non applicable
> - ✅ : Couverture complète
> - 🚧 : Couverture partielle
> - ❌ : Non implémenté
> - 🚫 : Déprécié

#### Messages

|                      | v1.0 | v1.1 | v1.2 | v1.3 | v1.4 |
| -------------------- | ---- | ---- | ---- | ---- | ---- |
| Request Message      |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Response Message     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |

#### Operations

| Operation            | v1.0 | v1.1 | v1.2 | v1.3 | v1.4 |
| -------------------- | ---- | ---- | ---- | ---- | ---- |
| Create               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Create Key Pair      |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Register             |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Re-key               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| DeriveKey            |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Certify              |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Re-certify           |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Locate               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Check                |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Get                  |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Get Attributes       |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Get Attribute List   |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Add Attribute        |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Modify Attribute     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Delete Attribute     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Obtain Lease         |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Get Usage Allocation |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Activate             |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Revoke               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Destroy              |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Archive              |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Recover              |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Validate             |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Query                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Cancel               |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Poll                 |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Notify               |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Put                  |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| Discover             |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| Re-key Key Pair      |  N/A |  ❌  |  ❌  |  ❌  |  ❌  |
| Encrypt              |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Decrypt              |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Sign                 |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Signature Verify     |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| MAC                  |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| MAC Verify           |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| RNG Retrieve         |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| RNG Seed             |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Hash                 |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Create Split Key     |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Join Split Key       |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Export               |  N/A |  N/A |  N/A |  N/A |  ❌  |
| Import               |  N/A |  N/A |  N/A |  N/A |  ❌  |

#### Managed Objects

| Object        | v1.0 | v1.1 | v1.2 | v1.3 | v1.4 |
| ------------- | ---- | ---- | ---- | ---- | ---- |
| Certificate   |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Symmetric Key |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Public Key    |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Private Key   |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Split Key     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Template      |  ✅  |  ✅  |  ✅  |  🚫  |  🚫  |
| Secret Data   |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Opaque Object |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| PGP Key       |  N/A |  N/A |  ✅  |  ✅  |  ✅  |

#### Base Objects

| Object                                   | v1.0 | v1.1 | v1.2 | v1.3 | v1.4 |
| ---------------------------------------- | ---- | ---- | ---- | ---- | ---- |
| Attribute                                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Credential                               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Key Block                                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Key Value                                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Key Wrapping Data                        |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Key Wrapping Specification               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Transparent Key Structures               |  🚧  |  🚧  |  🚧  |  🚧  |  🚧  |
| Template-Attribute Structures            |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Extension Information                    |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| Data                                     |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Data Length                              |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Signature Data                           |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| MAC Data                                 |  N/A |  N/A |  ❌  |  ❌  |  ❌  |
| Nonce                                    |  N/A |  N/A |  ✅  |  ✅  |  ✅  |
| Correlation Value                        |  N/A |  N/A |  N/A |  ❌  |  ❌  |
| Init Indicator                           |  N/A |  N/A |  N/A |  ❌  |  ❌  |
| Final Indicator                          |  N/A |  N/A |  N/A |  ❌  |  ❌  |
| RNG Parameter                            |  N/A |  N/A |  N/A |  ✅  |  ✅  |
| Profile Information                      |  N/A |  N/A |  N/A |  ✅  |  ✅  |
| Validation Information                   |  N/A |  N/A |  N/A |  ✅  |  ✅  |
| Capability Information                   |  N/A |  N/A |  N/A |  ✅  |  ✅  |
| Authenticated Encryption Additional Data |  N/A |  N/A |  N/A |  N/A |  ❌  |
| Authenticated Encryption Tag             |  N/A |  N/A |  N/A |  N/A |  ❌  |

##### Transparent Key Structures

| Object                   | v1.0 | v1.1 | v1.2 | v1.3 | v1.4 |
| ------------------------ | ---- | ---- | ---- | ---- | ---- |
| Symmetric Key            |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| DSA Private/Public Key   |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| RSA Private/Public Key   |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| DH Private/Public Key    |  ❌  |  ❌  |  ❌  |  ❌  |  ❌  |
| ECDSA Private/Public Key |  ✅  |  ✅  |  ✅  |  🚫  |  🚫  |
| ECDH Private/Public Key  |  ❌  |  ❌  |  ❌  |  🚫  |  🚫  |
| ECMQV Private/Public     |  ❌  |  ❌  |  ❌  |  🚫  |  🚫  |
| EC Private/Public        |  N/A |  N/A |  N/A |  ✅  |  ✅  |

#### Attributes

| Attribute                        | v1.0 | v1.1 | v1.2 | v1.3 | v1.4 |
| -------------------------------- | ---- | ---- | ---- | ---- | ---- |
| Unique Identifier                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Name                             |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Object Type                      |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Cryptographic Algorithm          |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Cryptographic Length             |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Cryptographic Parameters         |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Cryptographic Domain Parameters  |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Certificate Type                 |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Certificate Identifier           |  ✅  |  🚫  |  🚫  |  🚫  |  🚫  |
| Certificate Subject              |  ✅  |  🚫  |  🚫  |  🚫  |  🚫  |
| Certificate Issuer               |  ✅  |  🚫  |  🚫  |  🚫  |  🚫  |
| Digest                           |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Operation Policy Name            |  ✅  |  ✅  |  ✅  |  🚫  |  🚫  |
| Cryptographic Usage Mask         |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Lease Time                       |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Usage Limits                     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| State                            |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Initial Date                     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Activation Date                  |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Process Start Date               |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Protect Stop Date                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Deactivation Date                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Destroy Date                     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Compromise Occurence Date        |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Compromise Date                  |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Revocation Reason                |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Archive Date                     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Object Group                     |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Link                             |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Application Specific Information |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Contact Information              |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Last Change Date                 |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Custom Attribute                 |  ✅  |  ✅  |  ✅  |  ✅  |  ✅  |
| Certificate Length               |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| X.509 Certificate Identifier     |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| X.509 Certificate Subject        |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| X.509 Certificate Issuer         |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| Digital Signature Algorithm      |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| Fresh                            |  N/A |  ✅  |  ✅  |  ✅  |  ✅  |
| Alternative Name                 |  N/A |  N/A |  ✅  |  ✅  |  ✅  |
| Key Value Present                |  N/A |  N/A |  ✅  |  ✅  |  ✅  |
| Key Value Location               |  N/A |  N/A |  ✅  |  ✅  |  ✅  |
| Original Creation Date           |  N/A |  N/A |  ✅  |  ✅  |  ✅  |
| Random Number Generator          |  N/A |  N/A |  N/A |  ✅  |  ✅  |
| PKCS#12 Friendly Name            |  N/A |  N/A |  N/A |  N/A |  ✅  |
| Description                      |  N/A |  N/A |  N/A |  N/A |  ✅  |
| Comment                          |  N/A |  N/A |  N/A |  N/A |  ✅  |
| Sensitive                        |  N/A |  N/A |  N/A |  N/A |  ✅  |
| Always Sensitive                 |  N/A |  N/A |  N/A |  N/A |  ✅  |
| Extractable                      |  N/A |  N/A |  N/A |  N/A |  ✅  |
| Never Extractable                |  N/A |  N/A |  N/A |  N/A |  ✅  |

## Aller plus loin

Le site de l'[OASIS](https://www.oasis-open.org/committees/tc_home.php?wg_abbrev=kmip)
Échangez avec notre [communauté d'utilisateurs](/links/community).
