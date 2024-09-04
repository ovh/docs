---
title: Public Cloud Instance security specification
excerpt: Public Cloud Instance security overview
updated: 2024-05-01
---

## Objective

In addition to [the responsibility model for Public Cloud Instance](/pages/public_cloud/compute/responsibility-model-instances), this security fact sheets aims at describing security features and functions associated to the service. It also describes best practices that customers can adopt to secure their instances based on OpenStack technology.

### 1. Certifications

- ISO/IEC 27001
- ISO/IEC 27701
- ISO/IEC 27017
- ISO/IEC 27018
- HDS
- SOC 1 type 1
- SOC 2 type 1
- CSA type 1
- C5 type 1

### 2. Best pratices to be deployed on the service

#### 2.1 Recommendations once the service is delivered

When you sign up for the service, we recommend that you use SSH keys to access your Instance (rather than a login/password) for a better authentication security level for your administrators and to change it regularly. For more information on how to manage your SSH keys, consult this [guide](public_cloud/compute/creating-ssh-keys-pci).

You can use the user interface and the CLI to perform tasks. You must manage and secure your ‘root’ access  to perform certain administrative tasks, as described in this [guide](/pages/public_cloud/compute/become_root_and_change_password).

To filter connections, you must set up a firewall using IPtables. 

#### 2.2 Vulnerability scans

You are authorized to perform vulnerability scans on the service you have subscribed to. OVHcloud doesn't have to be previously informed.
Security measures deployed by OVHcloud (especially network protection) aren't disabled, because such an audit's purpose is to demonstrate a clear vision of the security level of the customer's infrastructure.
You are not authorized to use your service to scan other infrastructures.

### 3. Service Level Agreement (SLA)

The SLA varies between 99.9% and 99.999% and differs between offers and ranges. Please refer to the specific terms and conditions of service for more details.

### 4. Backups

#### 4.1 Technical backups

As a part of our reslience plan in the Control Plane, we perform backups to maintain our Service Level Agreement. These technical backups cannot be activated at the customer's request.


#### 4.2 Customer data backups

| **Option** | **Granularity** | **RPO** | **RTO** | **Documentation** |
| --- | --- | --- | --- | --- |
| Backup of an Instance | Instance | Depends on the date of the last backup and the delay of incident resolution | Depends on the size of the Instance | [Backing up an instance](/pages/public_cloud/compute/save_an_instance)<br>[Backups and restoration](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)|


### 5. Logs

| **Source** | **Content** | **Documentation** |
| --- | --- | --- |
| Control Panel | Logs of interactions made by admin, technical or billing contacts in the Control Panel and services they have access to, using API calls. |- <https://api.ovh.com/console/#/me> (see `/me/api/logs`)<br>- [List of API calls done with your account](https://api.ovh.com/console/#/me/api/logs/self~GET)<br>- [List of API calls done on services you have access to](https://api.ovh.com/console/#/me/api/logs/services~GET)<br>- [Get your audit logs](https://api.ovh.com/console/#/me/logs/audit~GET) |

### 6. API

| **Name** | **Capacity** | **Documentation** |
| --- | --- | --- |
| Control Panel and service | Manage customer accounts and services on which each account has access rights. | [Preparing an environment for using the OpenStack API](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)<br>[Getting started with the OpenStack API](/pages/public_cloud/compute/starting_with_nova)<br>[API Rate Limits](/pages/public_cloud/compute/api_rate_limits) |

### 7. Accounts - User

#### 7.1 Control plane

Using your customer account on the OVHcloud Control Panel, you are able to manage your service using [three different contacts](/pages/account_and_service_management/account_information/managing_contacts).<br>
OVHcloud uses another account with an internal NIC to refer a customer having subscribed to several services.

To enforce security access to your account on the Control Panel, we recommend activating a [two-factor authentication mechanism](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) or [SSO (Single Sign-On) authentication](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-adfs).

You can create your OpenStack users and define several roles following [this guide](/pages/public_cloud/compute/create_and_delete_a_user) according to your access management policy.

You have to activate and manage your tokens in order to access the Keystone API by following this [guide](/pages/public_cloud/compute/managing_tokens).

#### 7.2 Data plane

Once you get your credentials, you are autonomous to create user accounts on your OS and applications you've installed.

### 8. Features and options available at service delivery

#### 8.1 OS hardening and maintenance

Public Cloud Instance is based on OpenStack technology which is managed and maintained by the OVHcloud team.

OVHcloud provides a large catalog of Operating Systems for Windows and Linux distributions. We are committed to updating our catalogue with the latest releases from editors.

The level of hardening applied refers to the basic version supplied by the editor. For an advanced level of hardening, we recommend that you refer to the guidelines published by each editor.

You also have the possibility to import your own image when you deploy your Instance with a supported format. Consult [this guide](/pages/public_cloud/compute/upload_own_image) for more information.

Finally, you remain responsible for monitoring your OS and applying necessary updates, [upgrades](/pages/public_cloud/compute/upgrading_operating_system) and security measures on applications you've installed.

#### 8.2 Network security

To activate a private connection, you can use the [vRack option](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack). This option could be activated at the first step when you create your Public Cloud Instance (which is recommended) or after service subcription.

You should filter and allow necessary connections by using IPtables according to your defined project architecture. 

You can consult these guides to setup your configurations:

[Managing firewall rules and port security on networks using OpenStack CLI](/pages/public_cloud/compute/security_group_private_network).
[Access and security settings in Horizon](/pages/public_cloud/compute/access_and_security_in_horizon).
[Network guides](/products/public-cloud-network).

#### 8.3 Data encryption at rest

To encrypt your data at rest (volume level encyption), you can follow [this guide](https://docs.openstack.org/cinder/pike/configuration/block-storage/volume-encryption.html#create-an-encrypted-volume){.external} when you create a volume storage.

#### 8.4 HDS option

The HDS option can be activated on the service.<br>
The subscription to the [Business support level](https://www.ovhcloud.com/en/support-levels/business/)is mandatory, at least to maintain necessary requirements.

### 9. Reversibility

To ensure reversibility on the service, you may follow the [specific reversibility policy](/pages/account_and_service_management/reversibility/03-public-cloud-reversibility-policy) to import and export your data in complete autonomy. 

#### 9.1 Erasure of customer data

Once you have destroyed your public Cloud project, in the OVHcloud control panel, all allocated resources are released.
