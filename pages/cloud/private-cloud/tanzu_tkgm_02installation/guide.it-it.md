---
title: Installazione della griglia Tanzu Kubernetes (EN)
slug: tanzu-tkgm-installation
excerpt: Learn how to integrate Tanzu Kubernetes Grid into your Hosted Private Cloud powered by VMware infrastructure 
section: Tanzu
order: 03
routes:
    canonical: 'https://docs.ovh.com/gb/en/private-cloud/tanzu-tkgm-installation/'
---

**Last updated 10th November 2022**

## Objective

**This guide documents how to install Tanzu Kubernetes Grid on your Hosted Private Cloud powered by VMware cluster**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. However, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/) if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Introduction

VMware Tanzu Kubernetes Grid is a Kubernetes platform provided by **VMware** and maintained as part of the **Hosted Private Cloud powered by VMware** solution.

You can install this product on your OVHcloud infrastructure to take advantage of its features and scalability.

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- A user account with access to vSphere
- A VLAN with internet access and a DHCP server
- You must have these resources:
    - 8 GB of memory, 4 vCPUs, and 250 GB of storage for the management virtual machine named **Bootstrap**.
    - 16 GB of memory, 4 vCPU, 40 GB of storage per Kubernetes node (it takes 6 nodes to install the management cluster in production mode and 6 nodes per **Workload** cluster in the same mode).

## Instructions

We will install **VMware Tanzu Kubernetes Grid** on a **Hosted Private Cloud powered by VMware** cluster and use VLAN 10 with these settings:

- **LAN**: `192.168.0.0/24`.
- **DHCP Range**: `192.168.0.50 -> 192.168.0.100`.
- **Gateway**: `192.168.0.254`.

> [!primary]
> This information is given as an example, it is quite possible to use another range and another VLAN.
>

At the end of the installation, seven additional virtual machines will be on your VMware cluster, six for running the **TKG** management cluster and one for managing it.

![00 admin cluster diagram](images/00-admin-cluster-diagram01.png){.thumbnail}

### Importing OVA model for **Tanzu KUBERNETES Grid** into your infrastructure

VMware provides a virtual machine as an OVA template, which contains all the elements to run a node of the **Tanzu Kubernetes Grid** cluster. This virtual machine is available in **OVH Templates**.

Log in to the OVHcloud homepage for your VMware cluster, and click `OVH Templates`{.action} to the right.

![01 integrate TKGM OVA 01](images/01-integrate-tkgm-ova01.png){.thumbnail}

In the **Select a template** window, choose the fourth template from the top that has this information:

- **Family**: Linux
- **Distribution**: not specified
- **Version**: 3

![01 integrate TKGM OVA 02](images/01-integrate-tkgm-ova02.png){.thumbnail}

Click the `Copy`{.action} icon to the right to copy the URL which name must end in **photon-3-kube-v1.23.8+vmware.1.ovf**. Then click `Close`{.action}.

![01 integrate TKGM OVA 03](images/01-integrate-tkgm-ova03.png){.thumbnail}

Log in to your vSphere console, right-click your cluster and choose `Deploy an OVF Template`{.action}.

![01 integrate TKGM OVA 03b](images/01-integrate-tkgm-ova03b.png){.thumbnail}

Select `URL`{.action}, paste the previously copied URL and click `NEXT`{.action}.

![01 integrate TKGM OVA 04](images/01-integrate-tkgm-ova04.png){.thumbnail}

Leave the default location and click `NEXT`{.action}.

![01 integrate TKGM OVA 05](images/01-integrate-tkgm-ova05.png){.thumbnail}

Choose the cluster and click `NEXT`{.action}.

![01 integrate TKGM OVA 06](images/01-integrate-tkgm-ova06.png){.thumbnail}

Review your information and click `NEXT`{.action}.

![01 integrate TKGM OVA 07](images/01-integrate-tkgm-ova07.png){.thumbnail}

Check `I accept all licence agreements`{.action} and click `NEXT`{.action}.

![01 integrate TKGM OVA 08](images/01-integrate-tkgm-ova08.png){.thumbnail}

Select a shared storage in NFS v3, then click `NEXT`{.action}.

![01 integrate TKGM OVA 09](images/01-integrate-tkgm-ova09.png){.thumbnail}

Choose the destination network on `VLAN 10`{.action} and click `NEXT`{.action}.

![01 integrate TKGM OVA 10](images/01-integrate-tkgm-ova10.png){.thumbnail}

Click `FINISH`{.action}.

![01 integrate TKGM OVA 11](images/01-integrate-tkgm-ova11.png){.thumbnail}

Select the `Monitor`{.action} tab and click `Tasks`{.action}.

![01 integrate TKGM OVA 12](images/01-integrate-tkgm-ova12.png){.thumbnail}

Wait for the `Deploy OVF template` and `Import OVF package` tasks to complete.

![01 integrate TKGM OVA 13](images/01-integrate-tkgm-ova13.png){.thumbnail}

Right-click the deployed VM and choose `Convert to Template`{.action} from the `Template`{.action} menu.

![01 integrate TKGM OVA 14](images/01-integrate-tkgm-ova14.png){.thumbnail}

Answer `YES`{.action} to convert the virtual machine.

![01 integrate TKGM OVA 15](images/01-integrate-tkgm-ova15.png){.thumbnail}

Go to `Virtual Machines (and templates)`{.action} to see the template you have created.

> [!primary]
>
> This template will be used when deploying **Tanzu Kubernetes Grid** clusters. It is used for the initial deployment of the administration cluster and for the installation of additional *WorkLoad* clusters. It should not be deleted from the **VMware** cluster.
>

![01 integrate TKGM OVA 16](images/01-integrate-tkgm-ova16.png){.thumbnail}

### Installation of the virtual machine **Bootstrap** provided by OVHcloud

This virtual machine was created by OVHcloud from the documentation [Installing the CLI tool manually for deploying **Tanzu Kubernetes GRID**](https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/1.5/vmware-tanzu-kubernetes-grid-15/GUID-install-cli.html). It is available as a template in **OVH Templates**.

Log in to the OVHcloud homepage for your VMware cluster, and click `OVH Templates`{.action} to the right.

![02 Add Bootstrapvm 01](images/02-add-bootstrap-vm-from-ova01.png){.thumbnail}

In the **Select a template** window, choose the third template from the top that contains this information:

- **Family**: Linux
- **Distribution**: Ubuntu
- **Version**: 22

![02 Add Bootstrapvm 02](images/02-add-bootstrap-vm-from-ova02.png){.thumbnail}

Click the `Copy`{.action} icon to the right to copy the URL, the URL should end with **Ubuntu-22.04_TKGm-1.6_with_x.ovf**. Then click `Close`{.action}.

![02 Add Bootstrapvm 03](images/02-add-bootstrap-vm-from-ova03.png){.thumbnail}

In the vSphere interface, right-click the cluster and choose `Deploy an OVF Template`{.action} from the menu.

![02 Add Bootstrapvm 03b](images/02-add-bootstrap-vm-from-ova03b.png){.thumbnail}

Select `URL`{.action}, paste the previously copied URL and click `NEXT`{.action}.

![02 Add Bootstrapvm 04](images/02-add-bootstrap-vm-from-ova04.png){.thumbnail}

Leave the default positioning and click `NEXT`{.action}.

![02 Add Bootstrapvm 05](images/02-add-bootstrap-vm-from-ova05.png){.thumbnail}

Leave `Cluster1` and click `NEXT`{.action}.

![02 Add Bootstrapvm 06](images/02-add-bootstrap-vm-from-ova06.png){.thumbnail}

Click `NEXT`{.action} to validate your choices.

![02 Add Bootstrapvm 07](images/02-add-bootstrap-vm-from-ova07.png){.thumbnail}

Select a shared storage in NFS v3 and click `NEXT`{.action}.

![02 Add Bootstrapvm 08](images/02-add-bootstrap-vm-from-ova08.png){.thumbnail}

Choose `VLAN10` for the destination network and click `NEXT`{.action}.

![02 Add Bootstrapvm 09](images/02-add-bootstrap-vm-from-ova09.png){.thumbnail}

Add this information in **Networking**:

- **Hostname**: `bootstrap`
- **IP Address**: `192.168.0.199`
- **Network CIDR Prefix**: `24`
- **Gateway**: `192.168.0.254`
- **DNS**: `213.186.33.99`

> [!primary]
>
> The DNS server chosen in this guide is the OVHcloud server.
>

Enter and confirm the password in **OS Credentials** and click `NEXT`{.action}.

![02 Add Bootstrapvm 10](images/02-add-bootstrap-vm-from-ova10.png){.thumbnail}

Click `FINISH`{.action}.

![02 Add Bootstrapvm 11](images/02-add-bootstrap-vm-from-ova11.png){.thumbnail}

Right-click the virtual machine you created, go to `Power`{.action} and click `Power On`{.action}.

![02 Add Bootstrapvm 12](images/02-add-bootstrap-vm-from-ova12.png){.thumbnail}

The booted virtual machine can be accessed via the console with the graphical interface or via **SSH**.

Go to the virtual machine you have created, and click `LAUNCH WEB CONSOLE`{.action}.

![02 Add Bootstrapvm 13](images/02-add-bootstrap-vm-from-ova13.png){.thumbnail}

The graphical interface for the Linux virtual machine is then available.

![02 Add Bootstrapvm 14](images/02-add-bootstrap-vm-from-ova14.png){.thumbnail}

### Allowing access to the PCC cluster from the **Bootstrap** virtual machine

The configuration and administration tools for **Tanzu Kubernetes Grid** are installed on the **Bootstrap** virtual machine. This virtual machine must be able to connect to the Internet and to the vSphere cluster.

Write down **the public IP address** you use on this virtual machine and use this guide [Authorise IP addresses to connect to vCenter](https://docs.ovh.com/it/private-cloud/autorizzare-ip-ad-accedere-al-vcenter/) to grant access to the vSphere cluster to the new virtual machine.

### Deploying the **Tanzu Kubernetes Grid** cluster on your infrastructure 

Log in to the `Ubuntu-22.04_TKGm-1.5.4_with_x` virtual machine, open a terminal, and run this command to create an **RSA** key:

```bash
ssh-keygen -t rsa -b 4096 -C "youremail@yourdomain.com"
```

![03 Create TKG CLUSTER 01](images/03-create-tkg-cluster01.png){.thumbnail}

Two files are created in the **~/.ssh** folder:

- **id_rsa.pub** 
- **id_rsa** 

Stay on the console and run this command:

```bash
tanzu management-cluster create --ui --bind 192.168.0.199:8080
```

> [!primary]
>
> When you run this command from the Linux console with the graphical interface, the web browser launches and connects to `https://192.168.0.199:8080`. If you have run this command from an **SSH** connection, you will need to connect to `https://192.168.0.199:8080` from a virtual machine on the same network with a graphical interface and an operational web browser.
>

![03 Create TKG CLUSTER 02](images/03-create-tkg-cluster02.png){.thumbnail}

Click `Deploy`{.action} below **VMware vSphere**.

![03 Create TKG CLUSTER 03](images/03-create-tkg-cluster03.png){.thumbnail}

Enter this information:

- **VCENTER SERVER**: `VMware cluster FQDN`
- **USERNAME**: `VMware cluster user`
- **PASSWORD**: `VMware cluster user password`

Then click `CONNECT`{.action}.

![03 Create TKG CLUSTER 04](images/03-create-tkg-cluster04.png){.thumbnail}

At the verification step of the **SSL Thumbprint**, click `CONTINUE`{.action}.

![03 Create TKG CLUSTER 05](images/03-create-tkg-cluster05.png){.thumbnail}

Click the cross in the top right to close the **vSphere 7.0.3 Environment Detected** window.

![03 Create TKG CLUSTER 06](images/03-create-tkg-cluster06.png){.thumbnail}

Paste the contents of the **~.ssh/id_rsa.pub** file into **SSH PUBLIC KEY** and click `NEXT`{.action}.

![03 Create TKG CLUSTER 07](images/03-create-tkg-cluster07.png){.thumbnail}

Select `Production`{.action} on the right and select the `large etc...` **INSTANCE TYPE**.

Enter these values:

- **MANAGEMENT CLUSTER NAME (OPTIONAL)**: `tkgm-management-cluster`.
- **CONTROL PLANE ENDPOINT**: `192.168.0.10`.

Click `NEXT`{.action} to proceed to the next step.

![03 Create TKG CLUSTER 08](images/03-create-tkg-cluster08.png){.thumbnail}

Click `NEXT`{.action}.

![03 Create TKG CLUSTER 09](images/03-create-tkg-cluster09.png){.thumbnail}

In the **Metadata** option and then in the **LABELS (OPTIONAL)** section, type `tkgm` for the name and its value.

Click `NEXT`{.action}.

![03 Create TKG CLUSTER 10](images/03-create-tkg-cluster10.png){.thumbnail}

Enter these options:

- **VM FOLDER**: `Storage folder for virtual machines`.
- **DATASTORE**: `Storage of virtual machines to be placed on a shared storage` .
- **CLUSTERS, HOSTS, AND RESOURCE POOLS**: `Cluster1`.

Click `NEXT`{.action}.

![03 Create TKG CLUSTER 11](images/03-create-tkg-cluster11.png){.thumbnail}

In **NETWORK NAME** select `VLAN10`{.action}.

Click `NEXT`{.action}.

![03 Create TKG CLUSTER 12](images/03-create-tkg-cluster12.png){.thumbnail}

Disable the `Activate Identity Management Settings`{.action} option and click `NEXT`{.action}. 

![03 Create TKG CLUSTER 13](images/03-create-tkg-cluster13.png){.thumbnail}

Select the OVA image integrated into the `photon-3-kube-v1.22.9+vmware.1` cluster from the **OS Image** menu and click `NEXT`{.action}.

![03 Create TKG CLUSTER 14](images/03-create-tkg-cluster14.png){.thumbnail}

Uncheck `Participate in the Customer Experience Improvement Program`{.action} and click `NEXT`{.action}.

![03 Create TKG CLUSTER 15](images/03-create-tkg-cluster15.png){.thumbnail}

Click `REVIEW CONFIGURATION`{.action}.

![03 Create TKG CLUSTER 16](images/03-create-tkg-cluster16.png){.thumbnail}

> [!primary]
> Take note of the name of the yaml file below **CLI Command Equivalent**, it will serve as a template for deploying a **WorkLoad** cluster.
>

Scroll through the window and click `DEPLOY MANAGEMENT CLUSTER`{.action} 

![03 Create TKG CLUSTER 17](images/03-create-tkg-cluster17.png){.thumbnail}

The **Tanzu Kubernetes Grid** cluster deployment is started, please wait for it to complete.

> [!primary]
> The deployment will be completed when you see the **Management cluster created** and **Successfully installed all required plugins** messages in the window.
>
> ![03 Create TKG CLUSTER 18](images/03-create-tkg-cluster18.png){.thumbnail}
>
> Another indication that the installation is complete can be found in the console of the **Bootstrap** virtual machine in which will appear the **Management cluster created** and **You can now create your first workload cluster etc...** messages.

> [!warning]
> 
> Write down or copy the name of the **yaml** file in the `/home/tanzu/.config/tanzu/tkg/clusterconfigs` folder, it will be used to create a configuration file for installing a *WorkLoad cluster*
>

![03 Create TKG CLUSTER 19](images/03-create-tkg-cluster19.png){.thumbnail}

Go to the vCenter interface to see the seven virtual machines created.

![04 VM CREATED ADFTER INSTALLATION 01](images/04-vm-created-after-installation01.png){.thumbnail}

## Go further

[Administrating a TKG cluster](https://docs.ovh.com/it/private-cloud/tanzu-tkgm-management)

[Introducing VMware Tanzu Kubernetes Grid](https://tanzu.vmware.com/kubernetes-grid)

[Documentation de VMware Tanzu Kubenetes Grid](https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/index.html)

[Manual installation of the CLI tool for the deployment of Tanzu Kubernetes GRID](https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/1.5/vmware-tanzu-kubernetes-grid-15/GUID-install-cli.html)

Join our community of users on <https://community.ovh.com/en/>.
