---
title: Using Terraform with OVHcloud
excerpt: Find out about useful resources in order to use Terraform with OVHcloud
slug: terraform-at-ovhcloud
section: Terraform
order: 01
---

**Last updated 27th December 2022**

## Introduction

[Terraform](https://www.terraform.io/) is an open-source infrastructure as code (IaC) tool created by [Hashicorp](https://www.hashicorp.com/) in 2014, written in Go. It aims at building, changing and version controlling your infrastructure. You can define and provision your infrastructure by writing the definition of your resources in Hashicorp Configuration Language (HCL).

It is widely used and you can also use it with OVHcloud.

At the heart of the Terraform product is the concept of [provider](https://developer.hashicorp.com/terraform/language/providers) which is a plugin that enables interaction with an API. 

## Providers

Based on your automation needs at OVHcloud, you have to pick one or more of the following Terraform providers:

- [OVH provider](https://registry.terraform.io/providers/ovh/ovh/latest) that interacts with [OVHcloud API portal](https://api.ovh.com/). You can refer to [this guide](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/) to learn more on how to use the API portal.
- [OpenStack provider](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/lastest) : the open standard cloud computing platform that OVHcloud is using to power its Public Cloud service. For more information, check [this page](https://www.ovhcloud.com/en-gb/public-cloud/openstack/).
- [Hashicorp AWS provider](https://registry.terraform.io/providers/hashicorp/aws/latest/) to automate the operations of the S3 Object Storage.
- [Hashicorp Kubernetes provider](https://registry.terraform.io/providers/hashicorp/kubernetes/latest) : once you have provisionned a Kubernetes cluster with OVH provider, you can manage your Kubernetes configuration with this provider.
- [Hashicorp vSphere provider](https://registry.terraform.io/providers/hashicorp/vsphere/latest) to automate the operations of OVHcloud [Hosted Private Cloud powered by VMware](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/).
- [Nutanix provider](https://registry.terraform.io/providers/nutanix/nutanix/latest) to automate the operations of OVHcloud [Hosted Private Cloud powered by Nutanix](https://www.ovhcloud.com/en-gb/hosted-private-cloud/nutanix/).

## Mapping OVHcloud GUI to Terraform providers & resources

OVHcloud console GUI (also called "Control Panel" or "Manager") hides some background API complexity to the user. From a GUI concept, it may be difficult to find the correct provider and the associated 
[resource](https://developer.hashicorp.com/terraform/language/resources). The tables below are here to help.

> [!primary]
>
> - The following categories are based on the Control Panel 'New version (Beta)' from December 2022.
> - If no resource is not available but a Terraform [data source](https://developer.hashicorp.com/terraform/language/data-sources) is, this is mentioned in the table with "[data source]".
 
### Bare Metal Cloud

| Control Panel concept | Terraform provider | Resource or Data Source  |
| --- | --- | --- |
| Dedicated Server | ovh | [data source] [ovh_dedicated_server](https://registry.terraform.io/providers/ovh/ovh/latest/docs/data-sources/dedicated_server) |
| Virtual Private Server | ovh | [ovh_vps](https://registry.terraform.io/providers/ovh/ovh/latest/docs/data-sources/vps) |
| HA-NAS | ovh | soon to come ovh_dedicated_nasha_partition |
| Enterprise File Storage | ovh | not available |
| Cloud Disk array | ovh | [data source] [ovh_dedicated_ceph](https://registry.terraform.io/providers/ovh/ovh/latest/docs/data-sources/dedicated_ceph)|
| Veam Cloud Connect | not available ||
| Logs Data Platform | ovh | partially available :<br/>- [ovh_dbaas_logs_graylog_output_stream](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/dbaas_logs_graylog_output_stream) <br/> - [ovh_dbaas_logs_input](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/dbaas_logs_input) <br/>- [data source] [ovh_dbaas_logs_input_engine](https://registry.terraform.io/providers/ovh/ovh/latest/docs/data-sources/dbaas_logs_input_engine)

### Hosted Private Cloud

| Control Panel concept | Terraform provider | Resource or Data Source  |
| --- | --- | --- |
| VMware   |- not available for ordering<br/>- [vsphere](https://registry.terraform.io/providers/hashicorp/vsphere/latest/docs) for management| see provider|
| Nutanix |- not available for ordering<br/>- [nutanix](https://registry.terraform.io/providers/nutanix/nutanix/lastest) for management| see provider|

### Public Cloud

#### Compute

| Control Panel concept | Terraform provider(s) | Resource or Data Source  |
| --- | --- | --- |
| Instances & Bare Metal  | openstack | [openstack_compute_instance_v2](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/compute_instance_v2) |

#### Storage and Backup

| Control Panel concept | Terraform provider(s) | Resource or Data Source  |
| --- | --- | --- |
| Block Storage  | openstack | [blockstorage_volume_v3](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/blockstorage_volume_v3)|
| Object Storage (Swift) | openstack | [objectstorage_object_v1](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/objectstorage_object_v1) |
| S3 storage | Hashicorp aws | [aws_s3_bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket)|
| S3 users | ovh | [ovh_cloud_project_user](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/cloud_project_user) with *objectstore_operator* role|
| Databases | ovh | [cloud_project_database](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/cloud_project_database) and [cloud_project_database_database](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/cloud_project_database_database)|
| Volume Snapshot | openstack | [openstack_blockstorage_snapshot_v3](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/data-sources/blockstorage_snapshot_v3)|
| Scheduled Instance Backup | ovh | not available (see this [feature request](https://github.com/ovh/terraform-provider-ovh/issues/330) on ovh provider project)|
| Cloud Archive | openstack | [objectstorage_object_v1](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/objectstorage_object_v1) with [storage_policy](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/objectstorage_container_v1#storage_policy) set to “PCA” in order to create an “archive” swift container |

#### Network

| Control Panel concept | Terraform provider(s) | Resource or Data Source  |
| --- | --- | --- |
| Private network (vRack) | ovh & openstack | - [ovh_vrack_cloudproject](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/vrack_cloudproject) <br/>- [openstack_networking_network_v2](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/data-sources/networking_network_v2) <br/>- [openstack_networking_subnet_v2](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_subnet_v2)|
|Public IPs - Floating IPs| openstack | [openstack_networking_floatingip_v2](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_floatingip_v2)
|Public IPs - Additional IPs| ovh | [ovh_ip_service](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/ip_service)
|Gateway| openstack | [openstack_networking_router_v2](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/networking_router_v2)

#### Containers & Orchestration

| Control Panel concept | Terraform provider(s) | Resource or Data Source  |
| --- | --- | --- |
|Managed Kubernetes Service - Cluster operations|ovh|[ovh_cloud_project_kube](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/cloud_project_kube)
|Managed Kubernetes Service - Application deployment operations|Hashicorp Kubernetes|[kubernetes_namespace](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/namespace) [kubernetes_deployment](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/deployment)|
|Kubernetes Load Balancer|Hashicorp kubernetes|[kubernetes_service](https://registry.terraform.io/providers/hashicorp/kubernetes/latest/docs/resources/service) as described in this [tutorial](https://docs.ovh.com/gb/en/kubernetes/using-lb/)|
|Managed Private Registry|ovh|[ovh_cloud_project_containerregistry](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/cloud_project_containerregistry)<br/>[ovh_cloud_project_containerregistry_user](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/cloud_project_containerregistry_user)|
|Workflow Management|ovh|not available (see this [feature request](https://github.com/ovh/terraform-provider-ovh/issues/330) on ovh provider project)|

#### AI & Machine Learning

| Control Panel concept | Terraform provider(s) | Resource or Data Source  |
| --- | --- | --- |
| AI Notebooks | not available||
| AI Training | not available||
| AI Deploy | not available||

#### Data & Analytics

| Control Panel concept | Terraform provider(s) | Resource or Data Source  |
| --- | --- | --- |
| Data Processing | not available||
| Logs Data Platform | ovh | partially available :<br/>- [ovh_dbaas_logs_graylog_output_stream](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/dbaas_logs_graylog_output_stream) <br/> - [ovh_dbaas_logs_input](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/dbaas_logs_input) <br/>- [data source] [ovh_dbaas_logs_input_engine](https://registry.terraform.io/providers/ovh/ovh/latest/docs/data-sources/dbaas_logs_input_engine)

#### Settings

| Control Panel concept | Terraform provider(s) | Resource or Data Source  |
| --- | --- | --- |
| Users & Roles | ovh | [ovh_cloud_project_user](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/cloud_project_user#role_names)|
| Quotas & Regions | not available||
| SSH keys | ovh & openstack | [ovh_me_ssh_key](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/me_ssh_key). If you use the openstack provider for compute, you will need to use [openstack_compute_keypair_v2](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs/resources/compute_keypair_v2) to manage the ssh keys|
| Project Settings | ovh | [ovh_cloud_project](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/cloud_project)|

### Web Cloud

#### Domain Names

| Control Panel concept | Terraform provider(s) | Resource or Data Source  |
| --- | --- | --- |
| Domain name | ovh | [ovh_domain_zone](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/ovh_domain_zone)
| DNS Zone record | ovh | [ovh_domain_zone_record](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/ovh_domain_zone_record)|
| DNS Server | not available ||
| Redirection | ovh | [ovh_domain_zone_redirection](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/ovh_domain_zone_redirection)|
| DynHost | not available ||
| GLUE Record | not available ||

#### Web

| Control Panel concept | Terraform provider(s) | Resource or Data Source  |
| --- | --- | --- |
| Hosting plan |  not available ||
| Database | ovh | [ovh_hosting_privatedatabase](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/hosting_privatedatabase)|
| Web PaaS | not available ||
| Emails | not available ||
| Microsoft | not available ||

### Network

| Control Panel concept | Terraform provider(s) | Resource or Data Source  |
| --- | --- | --- |
| vRack private network | ovh | [ovh_vrack](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/vrack)|
| Public IP Adresses - Additional IPs | ovh | [ovh_ip_service](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/ip_service) |
| OVH Cloud Connect | not available ||
| Load Balancer |ovh| [ovh_iploadbalancing](https://registry.terraform.io/providers/ovh/ovh/latest/docs/resources/iploadbalancing)|
| CDN Infrastructure| not available ||

### Telecom

This universe is currently not supported by Terraform providers

## Resources

### Terraform with OVHcloud examples

- [Public Cloud examples repository on GitHub](https://github.com/ovh/public-cloud-examples)
- [Creating a kubernetes cluster on Terraform](https://docs.ovh.com/gb/en/kubernetes/creating-a-cluster-through-terraform/)
- [Creating a private registry (Harbor) through Terraform](https://docs.ovh.com/gb/en/private-registry/creating-a-private-registry-through-terraform/)

### OVH Provider

- [Registry entry](https://registry.terraform.io/providers/ovh/ovh/latest)
- [Documentation](https://registry.terraform.io/providers/ovh/ovh/latest/docs)
- Source code on [GitHub](https://github.com/ovh/terraform-provider-ovh) (contributions are welcome !): 
