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
| Backup of an Instance | Instance | Depends on the date of the last backup and the delay of incident resolution | Depends on the size of the Instance | [Backing up an instance](/pages/public_cloud/compute/save_an_instance)<br>[Backups and restoration](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)|


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

You can create your OpenStack users and define several roles following [this guide](/pages/public_cloud/compute/create_and_delete_a_user) according to your access management policy.

You have to activate and manage your tokens in order to access [to Keystone API by following this guide.](/pages/public_cloud/compute/managing_tokens)

### 7.2 Data plane

Once you get your credentials, you are autonomous to create user accounts on your OS and applications you've installed.

## 8.Features and options available at service delivery

### 8.1 OS hardening and maintenance

Public Cloud Instance is based on OpenStack technology which is managed and maintained by OVHcloud team.

OVHcloud provides a large catalog of Opereating Systems for Windows and Linux distributions. We undertake to update our catalog with last realses provided by editors.

The hardening level applyed refers to the basic version provided the editor. For an advanced hardening level, we recommand you to refer to guidelines publiqhed by each editor.

You have also the possibility to import your own image when you deploy your Instance with a supported format following [this guide](/pages/public_cloud/compute/upload_own_image).    

Finally, you ramain responsible for monitoring your OS and applying necessary updates, [upgrades](/pages/public_cloud/compute/upgrading_operating_system) and security measures on applications you've installed.

### 8.2 Network security

To activate a private connection, you can use the [vRack option](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).  This option could be activated at the first step when you create your Public Cloud Instance (which is recommaned) or after service subcription.<br>

You should filter and allow necessay connections by using IPtables according to your defined project architecture. You can fallow these guides to setup your configurations using [OpenStack CLI](/pages/public_cloud/compute/security_group_private_network), [Horizon interface](/pages/public_cloud/compute/access_and_security_in_horizon) and other [network services available at this link](/pages/public_cloud/public_cloud_network_services).


### 8.3 Data encryption at rest

To encrypt your data at disk level, you can follow [this guide](https://docs.openstack.org/cinder/pike/configuration/block-storage/volume-encryption.html#create-an-encrypted-volume) when you create a volume storage.


### 8.4 HDS option

The HDS option can be activated on the service.<br>
The subscription to the Business support level is mandatory, at least to maintain necessary requirements.

## 9.Reversibility

To ensure reversibility on the service, you may follow this [specific reversibility policy](/pages/account_and_service_management/reversibility/03-public-cloud-reversibility-policy) to import and export your data in complete autonomy. 


### 9.1 Erasure of customer data

Once you destroy your Public Cloud project, in the OVHcloud Control Panel, all allocated resources are relased.

