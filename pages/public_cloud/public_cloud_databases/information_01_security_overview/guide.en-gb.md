---
title: Concepts - Security overview
excerpt: Public Cloud Databases security overview
updated: 2023-05-23
---

## Objective

In addition to [the responsibility model for Public Cloud Database services](/pages/public_cloud/public_cloud_databases/information_03_shared_responsibility), this security fact sheets aims to describe security features and functions associated to the service. It describes also best practices that the client could adopt to secure his databases. 

## 1.Certifications
- ISO/IEC 27001
- ISO/IEC 27701
- ISO/IEC 27017
- ISO/IEC 27018
- HDS
- SOC 1 type 1
- SOC 2 type 1
- CSA type 1
- C5 type 1

## 2.Best pratices to be deployed on the service

### 2.1 Recommandations once service delivered
Once you have followed [these first steps to subscribe you this service](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) and reset the default password communicated to access to the service.
You must after filter connections by using IPtable.
You can also activate a private connection by using the vRack option.

### 2.2 Vulnerability scans
You are authorized to perform vulnerability scans on the service you have subscribed to. OVHcloud doesn't have to be previously informed.
Security measures deployed by OVHcloud (especially network protection) aren't disabled, the reason why such audit purpose must demonstrate the clear vision about the security level of customer infrastructure.
You are not authorized to use your service to scan other infrastructure.

## 3.SLA
SLA are available only for "Business" and "Enterprise" plans of this service.
Exception for Mongo DB, SLA are available for "Production" and "Advanced" plans.
SLA for Business range are 99,90% and for Enterprise range are 99,95%.
The calculation method of SLA consists on the total number of minutes in the month in question deducted from the number of minutes of unavailability over the month in question. The total is divided by the total number of minutes in the month.
Service credits could be 10%, 25 % or 100% of the hourly cost per hour of unavailability of the affected Service. You can refer to Particular Conditions of the service to get more details about monthly available rate for each service range or plan and credits limitation.w

## 4.Backups
### 4.1 Technical backups
Technical backups are backups made by OVHcloud to maintain Service Level Agreement. These backups could not be activated at customer request.

### 4.2 Customer data backups
Customer data (DB) is backed up, automated and oparated following different frequencies. Those backups are encrypted and uploaded to a remote, replicated storage backend, in a different datacenter from the database service. Details about frequencies,, RPO and locations are listed following type of services and ranges at [this link](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups).
Customer data backup health status is checked daily by OVHcloud.
If you need to restore your data using a backup, you can follow [this guide](/pages/public_cloud/public_cloud_databases/databases_06_restore_backup) and create a new service for the purpose.

## 5.Logs
| **Source** | **Content** | **Documentation** |
| --- | --- | --- |
| Control Panel | Logs of interactions made by admin, technical or billing contacts on customer panel and services they have access to,using API calls. |- <https://api.ovh.com/console/#/me> (see `/me/api/logs`)<br>- [List of API calls done with your account](https://api.ovh.com/console/#/me/api/logs/self~GET)<br>- [List of API calls done on services you have access to](https://api.ovh.com/console/#/me/api/logs/services~GET)<br>-[Get your audit logs (https://api.ovh.com/console/#/me/logs/audit~GET)] |
| Service | 1000 last logs for service usage | See Sheet 'log' in the control panel<br>- or via API (for Cassandra service as an example /cloud/project/{serviceName}/database/cassandra/{clusterId}/logs<br>- /cloud/project/{serviceName}/database/{serviceType}/{clusterId}/logs |

## 6.API

| **Name** | **Capacity** | **Link** |
| --- | --- | --- |
| Control Panel and service | Manage customer accounts and services on which each account has rights to access. | [https://eu.api.ovh.com/console/#/dbaas/logs](https://eu.api.ovh.com/console/#/dbaas/logs)) |

## 7.Accounts - User
### 7.1 Control plane
Using your customer account on the OVHcloud Control Panel, you are able to manage your service using [three different contacts](/pages/account_and_service_management/account_information/managing_contacts).
OVHcloud adopts another account with an internal NIC to refer a customer having subscribed to several services.
To enforce security access to your account on the control panel, we recommand to activate a [two-factor authentication mechanism](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) or [SSO(Single Sign-On) authentication](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-adfs).
You can also [create your own IAM policy](/pages/account_and_service_management/account_information/iam-policy-ui) on the service, with user interface or [via API](/pages/account_and_service_management/account_information/iam-policies-api), and manage your users and groups.
You can follow your IAM policy configuration and analyse actions [by using API calls to get logs and following this link](   /pages/manage_and_operate/iam/iam-troubleshooting).


### 7.2 Data plane
Once VM is created by OVHcloud, where the customer Database engines run, a TLS certficate is generated and used by the customer to access to his DB. The certificate is renewed every three months.


## 8.Features and options available at service delivery
### 8.1 High availability
Three plans are made available on the service : Essential, Business and Enterprise plan.
You can shoose "Business" or "Enterprise" offer to benefit of a high availability service as your data will be replicated across two or three nodes following the shosen plan.
For Mongo DB, high availability is made with "Production" and "Advanced" plans. 

### 8.2 Data encryption
#### 8.2.1 Encryptation made by OVHcloud team
All network traffic on the infrastructure managing Databases service is encrypted. Databases volumes are also encrypted with a unique key specific for each customer project.
These operations are made, by default, by OVHcloud operation team.
> [!primary]
>
> Currently, OVHcloud does not offer a KMS as a service, you cannot bring your own keys. KMIP is managed by OVHcloud.
>
For MongoDB engine :

- **Nodes:** service instances and the underlying VMs use full volume encryption using LUKS with a randomly generated ephemeral key for each instance and each volume. 
The key is never re-used and will be trashed at the destruction of the instance, so there’s a natural key rotation with roll-forward upgrades. 
We use the LUKS2 mode aes-cbc-essiv:sha256 with a 512-bit key.

- **Backups:** backups are encrypted with a randomly generated key. This key is Asymetric RSA4096.

For all the databases engines such as MySQL, PostgreSQL, Redis, and so on, at-rest data encryption covers both active service instances as well as service backups in cloud object storage :

- **Nodes:** service instances and the underlying VMs use full volume encryption using [LUKS](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) with a randomly generated ephemeral key for each instance and each volume. 
The key is never re-used and will be trashed at the destruction of the instance, so there’s a natural key rotation with roll-forward upgrades. 
We use the LUKS2 default mode aes-xts-plain64:sha256 with a 512-bit key.

- **Backups:** backups are encrypted with a randomly generated key per file. These keys are in turn encrypted with a RSA key-encryption key-pair and stored in the header section of each backup segment. 
The file encryption is performed with AES-256 in CTR mode with HMAC-SHA256 for integrity protection. 
The RSA key-pair is randomly generated for each service. The key lengths are 256-bit for block encryption, 512-bit for the integrity protection and 3072-bits for the RSA key.


#### 8.2.2 In-use encryption on client side
> [!primary]
>
> Currently, OVHcloud does not offer a KMS as a service, you cannot bring your own keys. KMIP is managed by OVHcloud.
>
Currently, we do not provide in-use encryption except for MongoDB Enterprise plans, based on MongoDB Client-Side Field Level Encryption.
Data is encrypted client-side with customer-controlled encryption keys, before being sent, stored, or retrieved from the database
Client-Side Field Level Encryption (FLE) is an in-use encryption capability that enables a client application to encrypt sensitive data before storing it in the MongoDB database. Sensitive data is transparently encrypted, remains encrypted throughout its lifecycle, and is only decrypted on the client side.


### 8.3 CVE monitoring

OVHcloud operation team in charge of the maintenance of the Public Cloud Databases services is constantly monitoring CVE on the different DBMS available. This monitoring is done through different channels, official mailing lists, security community, internal security check...

We are also in constant communication with MongoDB team, in order to provide fast and smooth transition to the latest security version of MongoDB.

### 8.4 vRack option
You can activate vRack option at the subsription step or after and have your private network for your Database project. [The configuration of your private network could be done by following this link](/pages/public_cloud/public_cloud_databases/databases_08_vrack).

### 8.5 HDS option
HDS option could be activated on the service.
This option is available only for "Business" and "Entreprise" plans for this service.
The subscription to the Business support level is at least mandatory to maintain necessary requirements.

## 9.Reversibility
You can  import and export your data  following recommndations provided by editors for each Database engine technology. Here are some examples :
For MongoDB, you can refer to this link : https://www.mongodb.com/docs/compass/current/import-export/
For Redis, you can refer to this link : https://docs.redis.com/latest/rs/databases/import-export/

### 9.1 Erasure of customer data 
Once you destroy your public cloud project (your Database project) on the control panel, all allocated ressources are relased automtically including keys encryption used.
As the encryption keys are unique for each project, it will be deleated after service decommmissioning. Data could not be retrieved after.


## Go further

[Public Cloud Databases documentation](/products/public-cloud-databases)

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.
