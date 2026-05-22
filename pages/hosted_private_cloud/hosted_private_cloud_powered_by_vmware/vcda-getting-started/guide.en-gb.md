---
title: "Public VCFaaS Migration with VCDA - Getting Started"
excerpt: "Learn how to prepare the migration of your VMware workloads to your Public VCFaaS organization using VMware Cloud Director Availability (VCDA)"
updated: 2026-05-22
---

## Objective

OVHcloud offers a migration feature for the Public VCFaaS product based on **VMware Cloud Director Availability (VCDA)**. This solution lets VMware customers running an on-premise vSphere or VMware Cloud Director environment migrate their virtual machines to their Public VCFaaS organization at OVHcloud.

**This guide introduces the feature, its architecture and the preparation steps: downloading the VCDA appliance, deploying it locally and running the initial setup.**

> [!primary]
>
> Once you have completed this guide, refer to [Trigger your first migration to Public VCFaaS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcda-trigger-migration) to start your first migration.

## Requirements

- An active [Public VCFaaS](/links/hosted-private-cloud/vmware-vcd-organization) organization.
- A source environment running VMware vSphere or VMware Cloud Director on-premise.
- An account on the [Broadcom Support](https://support.broadcom.com/) portal to download the **VMware Cloud Director Availability** appliance.
- Administrator credentials on your source vCenter (SSO user).

## Instructions

### Understanding the Public VCFaaS migration feature

The Public VCFaaS migration feature is based on **VMware Cloud Director Availability (VCDA)**, a VMware solution dedicated to replicating and migrating virtual machines between vSphere and Cloud Director environments.

In practice, you deploy a **VCDA on-premise appliance** in your source infrastructure. This appliance is responsible for:

- establishing a secure channel (tunnel) to the VCDA service hosted by OVHcloud on the Public VCFaaS side;
- replicating the disks of the selected VMs to your organization;
- performing the cutover (migration) once replication is complete.

#### Solution architecture

The diagram below shows the data flows between your source site and your Public VCFaaS organization:

```
┌──────────────────────────────────┐               ┌──────────────────────────────────────┐
│       Customer site (on-premise) │               │           OVHcloud - Public VCFaaS   │
│                                  │               │                                      │
│   ┌──────────┐    ┌───────────┐  │   Replication │    ┌─────────────────────────────┐   │
│   │ vSphere  │    │   VCDA    │  │   (HTTPS/443) │    │   VCDA Cloud Service        │   │
│   │    or    │───▶│ on-premise│  │═══════════════│═══▶│   (hosted by OVHcloud)      │   │
│   │   VCD    │    │ appliance │  │               │    └─────────────┬───────────────┘   │
│   └──────────┘    └───────────┘  │               │                  │                   │
│                                  │               │                  ▼                   │
│                                  │               │    ┌─────────────────────────────┐   │
│                                  │               │    │   VCD Organization          │   │
│                                  │               │    │   (customer vDC)            │   │
│                                  │               │    └─────────────────────────────┘   │
└──────────────────────────────────┘               └──────────────────────────────────────┘
```

> [!primary]
>
> The VCDA on-premise appliance is **free** and provided by Broadcom. No additional licence is required on the OVHcloud side to use the Public VCFaaS migration feature.

### Step 1: Download the VCDA On-Premise appliance

Log in to the [Broadcom Support](https://support.broadcom.com/group/ecx/free-downloads) portal with your account.

On the `Free Downloads`{.action} page, locate the **VMware Cloud Director Availability** entry.

![Broadcom Free Downloads](images/01-broadcom-downloads.png){.thumbnail}

Select the latest available version (`4.7.x` at the time of writing).

![VCDA version selection](images/02-vcda-versions.png){.thumbnail}

Then download the **VMware Cloud Director Availability On-premises Appliance** (OVA file). Keep this file - it will be used in the next step.

![Downloading the VCDA On-premises appliance](images/03-vcda-download.png){.thumbnail}

### Step 2: Deploy the appliance in your source infrastructure

Once the OVA file is downloaded, deploy it in your source environment.

> [!primary]
>
> For detailed instructions on deploying an OVF template on vSphere, refer to the guide [Deploying an OVF template](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/ovf_template).
>
> For the official Broadcom documentation describing the VCDA on-premise appliance installation (prerequisites, deployment options, initial configuration), refer to [Deploying the On-Premises to Cloud Director Replication Appliance](https://techdocs.broadcom.com/us/en/vmware-cis/live-recovery/cloud-director-availability/4-7/on-prem-availability-install-config-and-upgrade-guide-4-7/installing-and-configuring-vcav-on-premises/deploying-the-vcda-on-prem-appliance.html).

During the deployment, pay attention to the following parameters:

- **Network**: select a network that allows the appliance to reach:
    - your source vCenter / VCD (Lookup Service);
    - the OVHcloud VCDA service on the internet (HTTPS / port 443).
- **IP configuration**: assign a static IP address to the appliance for easier access.
- **Root password**: set a strong password following security best practices.

### Step 3: Connect to the appliance administration portal

Once the appliance is deployed and powered on, access its web interface from a browser:

```
https://<appliance-IP>
```

Log in with the **root** account and the password defined during deployment.

![VCDA login page](images/04-vcda-login.png){.thumbnail}

### Step 4: Initialise the appliance

Once logged in, the VMware Cloud Director Availability interface is displayed. In the **Getting Started** section, click `Run the initial setup wizard`{.action} to start the initialisation wizard.

In the `Initial Setup`{.action} window, fill in the following fields:

|Field|Description|Example|
|---|---|---|
|**Site name**|Descriptive name identifying your source site|`my-onprem-site`|
|**Lookup Service Address**|URL of your vCenter Lookup Service|`https://<VCENTER-IP-OR-FQDN>/lookupservice/sdk`|
|**SSO Admin Username**|User with SSO administrator rights|`administrator@vsphere.local`|
|**Password**|Password of the SSO account|*(your password)*|

Click `Apply`{.action}, then accept the server certificate when prompted.

The initial setup completes automatically. The main dashboard of the appliance is then displayed:

![VCDA dashboard after initialisation](images/05-vcda-dashboard.png){.thumbnail}

In the **System health** section, check that the following services have the **OK** status:

- Lookup Service
- vSphere plugin
- Cloud Service
- Manager Service

> [!warning]
>
> If one of the services is in error, check:
>
> - the network connectivity between the appliance and your vCenter;
> - the validity of the SSO credentials;
> - that the appliance has internet access on port `443`.

### Step 5: Pair the appliance with your Public VCFaaS organization

Pairing means declaring the OVHcloud VCDA cloud service as a remote site of your on-premise appliance. This operation is done from the VCDA on-premise UI through a guided wizard.

From the left menu, click `Settings`{.action}. In the remote sites list, click `New Cloud Pairing`{.action} to open the wizard.

#### Step 5.1: Site Details

Enter the information identifying your site to the cloud provider:

|Field|Description|Example|
|---|---|---|
|**Site name**|Descriptive name for your on-premise vSphere site|`my-onprem-site`|
|**Description**|Free-form description of the site|*(optional)*|

![Site Details](images/06-pairing-site-details.png){.thumbnail}

Click `Next`{.action}.

#### Step 5.2: Lookup Service

Enter the connection details for your source vCenter **Lookup Service**:

|Field|Description|Example|
|---|---|---|
|**Lookup Service Address**|URL of your vCenter Lookup Service|`https://<VCENTER-IP-OR-FQDN>:443/lookupservice/sdk`|
|**SSO Admin Username**|User with SSO administrator rights|`administrator@vsphere.local`|
|**Password**|Password of the SSO account|*(your password)*|

![Lookup Service Details](images/07-pairing-lookup-service.png){.thumbnail}

> [!warning]
>
> Applying the configuration installs the **VMware Cloud Director Availability** plugin in your vSphere Client. To be able to use the plugin, the address you enter (FQDN or IP) must match the one you will use to access the vSphere Web Client.

Click `Next`{.action}.

#### Step 5.3: Cloud Service Details

Enter the connection details for the OVHcloud VCDA service associated with your Public VCFaaS organization:

|Field|Description|Value|
|---|---|---|
|**Public Service Endpoint address**|Public URL of the OVHcloud VCDA service|*Provided by OVHcloud at activation*|
|**Authorization type**|Authentication type to use|`VCD Local User`{.action}|
|**Organization Admin**|Administrator user of your Public VCFaaS organization|`<user>@<organization>`|
|**Organization Password**|Password of the account|*(your password)*|

You can also enable the following options:

- **Allow access from Cloud**: allows OVHcloud to modify existing replications and perform migrate/failover operations from the Cloud Director portal;
- **Allow log collection from Cloud**: allows OVHcloud to collect on-premise appliance logs for support purposes.

![Cloud Service Details](images/08-pairing-cloud-service.png){.thumbnail}

Click `Next`{.action}.

#### Step 5.4: Ready To Complete

Review the pairing summary and click `Finish`{.action} to complete the configuration.

Once paired, the OVHcloud cloud site appears in the remote sites list of your appliance. You can now start your first migration by following the [Trigger your first migration to Public VCFaaS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcda-trigger-migration) guide.

## Go further

- [Trigger your first migration to Public VCFaaS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcda-trigger-migration)
- [How to use the Public VCF as-a-Service user interface](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-getting-started)
- [Official VMware Cloud Director Availability documentation](https://techdocs.broadcom.com/us/en/vmware-cis/cloud-director/vmware-cloud-director-availability.html)

If you need training or technical assistance to implement our solutions, please contact your sales representative or click [here](/links/professional-services) to get a quote and ask for a custom analysis of your project from our Professional Services experts.

Join our [community of users](/links/community).
