---
title: Security specification for Public Cloud Instance
excerpt: Public Cloud Instance security overview

---

## Objective

In addition to [the responsibility model for Public Cloud Instance](/pages/public_cloud/compute/responsibility-model-instances), this security fact sheets aims at describing security features and functions associated to the service. It describes also best practices that customers can adopt to secure their Instances based on OpenStack technology.

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

At service subscription, it's recommanded to use SSH keys to access to your Instance (rather than a login/password) for a better authentication security level for your administrators and to change it regularly. [You can follow this link to manage your SSH keys.](/pages/public_cloud/compute/public-cloud-first-steps)<br>

You can use the user interface and CLI to run tasks. You must manage and secure your 'root' access to perform some administration tasks as indicated at [this link.](/pages/public_cloud/compute/become_root_and_change_password) <br>

You must filter connections by using IPtables. 

### 2.2 Vulnerability scans

You are authorized to perform vulnerability scans on the service you have subscribed to. OVHcloud doesn't have to be previously informed.<br>
Security measures deployed by OVHcloud (especially network protection) aren't disabled, because such an audit's purpose is to demonstrate a clear vision of the security level of the customer's infrastructure.<br>
You are not authorized to use your service to scan other infrastructures.

## 3.SLA

The SLA varies between 99,999% - 99,9% and differs following offers /ranges.  You can refer to Particular Conditions of the service for more details. 

## 4.Backups

### 4.1 Technical backups

As a part of our reslience plan in the Control Plane, we perform backups to maintain our Service Level Agreement. These technical backups can not be activated at customer resquest. 


### 4.2 Customer data backups

| **Option** | **granularity** | **RPO** | **RTO** | **Documentation** |
| --- | --- | --- | --- | --- |
| Backup of an Instance | Instance | Depends on the date of the last backup and the delay of incident resolution | Depends on the size of the Instance | [Backing up an instance](/pages/public_cloud/compute/save_an_instance)<br>
[Backups and restoration](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)|


## 5.Logs

| **Source** | **Content** | **Documentation** |
| --- | --- | --- |
| Control Panel | Logs of interactions made by admin, technical or billing contacts in the Control Panel and services they have access to, using API calls. |- <https://api.ovh.com/console/#/me> (see `/me/api/logs`)<br>- [List of API calls done with your account](https://api.ovh.com/console/#/me/api/logs/self~GET)<br>- [List of API calls done on services you have access to](https://api.ovh.com/console/#/me/api/logs/services~GET)<br>-[Get your audit logs](https://api.ovh.com/console/#/me/logs/audit~GET) |

## 6.API

| **Name** | **Capacity** | **Documentation** |
| --- | --- | --- |
| Control Panel and service | Manage customer accounts and services on which each account has access rights. | [Preparing an environment for using the OpenStack API](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)<br>[Getting started with the OpenStack API](/pages/public_cloud/compute/starting_with_nova)<br>[API Rate Limits](/pages/public_cloud/compute/api_rate_limits) |

## 7.Accounts - User

### 7.1 Control plane

Using your customer account on the OVHcloud Control Panel, you are able to manage your service using [three different contacts](/pages/account_and_service_management/account_information/managing_contacts).<br>
OVHcloud uses another account with an internal NIC to refer a customer having subscribed to several services.

To enforce security access to your account on the Control Panel, we recommend activating a [two-factor authentication mechanism](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) or [SSO(Single Sign-On) authentication](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-adfs).



### 7.2 Data plane

Once a VM is created by OVHcloud, on which the customer Database engines run, a TLS certificate is generated and used by the customer to access his DB. The certificate is renewed every three months.

## 8.Features and options available at service delivery

### 8.1 High availability

xxxxxx

### 8.2 Data encryption

#### 8.2.1 Encryption made by the OVHcloud teams

xxxxxxx


#### 8.2.2 In-use encryption on client side


### 8.3 xxxxx

xxxxx

### 8.4 vRack option

You can activate the vRack option at the subscription step or afterwards and have your private network for your Database project. The configuration of your private network can be done by following [this link](/pages/public_cloud/public_cloud_databases/databases_08_vrack).

### 8.5 HDS option

The HDS option can be activated on the service.<br>
This option is available only for "Business" and "Entreprise" plans for this service.<br>
The subscription to the Business support level is mandatory, at least to maintain necessary requirements.

## 9.Reversibility

xxxxxx


### 9.1 Erasure of customer data

xxxxxx

