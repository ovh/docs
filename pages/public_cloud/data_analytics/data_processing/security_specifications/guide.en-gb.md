---
title: Security specifications for Data processing
excerpt: Data Processing security overview

---

## Objective

This security fact sheets aims at describing security features and functions associated to the service. It describes also best practices that customers can adopt to secure their Data Processing service that can be activated on a Public Cloud project. 

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

### 2.1 Recommandations once the service is delivered

You must filter connections to tier processes and apply [IP restriction indicated at this link](/pages/public_cloud/data_analytics/data_processing/01_CONCEPTS_Capabilities

) in order to access to your data.

Once you have subscribed to OVHcloud Object storage service, use best practices to secure your access to your Object storage service such as : [collecting credentials] (    /pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage

) or [managing accesses](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) .

### 2.2 Vulnerability scans

You are authorized to perform vulnerability scans on the service you have subscribed to. OVHcloud doesn't have to be previously informed.<br>
Security measures deployed by OVHcloud (especially network protection) aren't disabled, because such an audit's purpose is to demonstrate a clear vision of the security level of the customer's infrastructure.<br>
You are not authorized to use your service to scan other infrastructures.
Tests could be made on the service API and the web page for spark dashboard (stateless).

## 3.SLA
In the event of a Job failing as part of the Service, the Client may receive a credit equal to 100% of the amount paid by the Client for the portion of the Service affected during the month in question, with a limit of up to five (5) hours per Job.

In case of subscription to Object storage service, SLA of this service applies too. More details are available in particular conditions of the service.

## 4.Backups and retention
You are autonomous for defining data input and output for your storage purpose.

The object storage service is used for two objectives : job code (as an input) and job logs (as an output).

Your must use High Performance Object Storage for temporary storage or store checkpoints for Spark Streaming

To lock your data stored in the Object storage service, manage versioning and preventing from unwanted modification or deletion, you can follow this guide for [data immutability on Object storage service](/pages/storage_and_backup/object_storage/s3_managing_object_lock

).



## 5.Logs

| **Source** | **Content** | **Documentation** |
| --- | --- | --- |
| Control Panel | Logs of interactions made by admin, technical or billing contacts in the Control Panel and services they have access to, using API calls. |- <https://api.ovh.com/console/#/me> (see `/me/api/logs`)<br>- [List of API calls done with your account](https://api.ovh.com/console/#/me/api/logs/self~GET)<br>- [List of API calls done on services you have access to](https://api.ovh.com/console/#/me/api/logs/services~GET)<br>-[Get your audit logs](https://api.ovh.com/console/#/me/logs/audit~GET) |
| Service | 1000 last logs for service usage | See Sheet 'log' in the Control Panel<br>- or via API (for Cassandra service as an example `/cloud/project/{serviceName}/database/cassandra/{clusterId}/logs`<br>- `/cloud/project/{serviceName}/database/{serviceType}/{clusterId}/logs` |

## 6.API

| **Name** | **Capacity** | **Link** |
| --- | --- | --- |
| Control Panel and service | Manage customer accounts and services on which each account has access rights. | [https://eu.api.ovh.com/console/#/dbaas/logs](https://eu.api.ovh.com/console/#/dbaas/logs)) |

## 7.Accounts - User

### 7.1 Control plane

Using your customer account on the OVHcloud Control Panel, you are able to manage your service using [three different contacts](/pages/account_and_service_management/account_information/managing_contacts).<br>
OVHcloud uses another account with an internal NIC to refer a customer having subscribed to several services.

To enforce security access to your account on the Control Panel, we recommend activating a [two-factor authentication mechanism](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) or [SSO(Single Sign-On) authentication](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-adfs).

You can also [create your own IAM policy](/pages/account_and_service_management/account_information/iam-policy-ui) on the service, with a user interface or [via API](/pages/account_and_service_management/account_information/iam-policies-api), and manage your users and groups.<br>
You can troubleshoot your IAM policy configuration and analyse actions [by using API calls to get logs](/pages/manage_and_operate/iam/iam-troubleshooting).

### 7.2 Data plane

Once a VM is created by OVHcloud, on which the customer Database engines run, a TLS certificate is generated and used by the customer to access his DB. The certificate is renewed every three months.

## 8.Features and options available at service delivery

### 8.1 High availability

Three plans are made available on the service : Essential, Business and Enterprise plans.<br>
You can choose a "Business" or "Enterprise" offer to benefit from a high availability service as your data will be replicated across two or three nodes following the chosen plan.<br>
For MongoDB, high availability is offered with "Production" and "Advanced" plans. 

### 8.2 Data encryption

#### 8.2.1 Encryption made by the OVHcloud teams

All network traffic on the infrastructure managing the Databases service is encrypted. Databases volumes are also encrypted with a unique key specific for each customer project.<br>
These operations are made, by default, by the OVHcloud operation team.

> [!primary]
>
> Currently, OVHcloud does not offer KMS as a service, you cannot bring your own keys. KMIP is managed by OVHcloud.
>

For a MongoDB engine :

- **Nodes:** service instances and the underlying VMs use full volume encryption using [LUKS](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup) with a randomly generated ephemeral key for each instance and each volume. 
The key is never re-used and will be trashed at the destruction of the instance, so there’s a natural key rotation with roll-forward upgrades. 
We use the LUKS2 mode aes-cbc-essiv:sha256 with a 512-bit key.
- **Backups:** backups are encrypted with a randomly generated key. This key is Asymetric RSA4096.

For all the databases engines such as MySQL, PostgreSQL, Redis and so on, at-rest data encryption covers both active service instances as well as service backups in cloud object storage :

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

Currently, we do not provide in-use encryption except for MongoDB Enterprise plans, based on MongoDB Client-Side Field Level Encryption.<br>
Data is encrypted client-side with customer-controlled encryption keys, before being sent, stored, or retrieved from the database.<br>
Client-Side Field Level Encryption (FLE) is an in-use encryption capability that enables a client application to encrypt sensitive data before storing it in the MongoDB database. Sensitive data is transparently encrypted, remains encrypted throughout its lifecycle, and is only decrypted on the client side.

### 8.3 CVE monitoring

The OVHcloud operation team in charge of the maintenance of Public Cloud Databases services is constantly monitoring CVE on the different DBMS available. This monitoring is done through different channels, official mailing lists, security community, internal security check...<br>

We are also in constant communication with the MongoDB team, in order to provide fast and smooth transition to the latest security version of MongoDB.

### 8.4 vRack option

You can activate the vRack option at the subscription step or afterwards and have your private network for your Database project. The configuration of your private network can be done by following [this link](/pages/public_cloud/public_cloud_databases/databases_08_vrack).

### 8.5 HDS option

The HDS option can be activated on the service.<br>
This option is available only for "Business" and "Entreprise" plans for this service.<br>
The subscription to the Business support level is mandatory, at least to maintain necessary requirements.

## 9.Reversibility

You can  import and export your data  following recommendations provided by editors for each Database engine technology. Here are some examples :

- For MongoDB, you can refer to this link : <https://www.mongodb.com/docs/compass/current/import-export/>
- For Redis, you can refer to this link : <https://docs.redis.com/latest/rs/databases/import-export/>

### 9.1 Erasure of customer data

Once you destroy your Public Cloud project (your Database project) in the OVHcloud Control Panel, all allocated resources are relased automtically, including used encryption keys.<br>
As the encryption keys are unique for each project, they will be deleted after service decommmissioning. Data can not be retrieved after.

## Go further

[Public Cloud Databases documentation](/products/public-cloud-databases)

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.
