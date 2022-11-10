---
title: Administração de grade de cluster de gerenciamento Tanzu (EN)
slug: tanzu-tkgm-management
excerpt: TKG administration to create a Workload cluster and add applications to this cluster
section: Tanzu
order: 04
routes:
    canonical: 'https://docs.ovh.com/gb/en/private-cloud/tanzu-tkgm-management/'
---

**Last updated 10th November 2022**

## Objective

**This guide documents how to create a *Workload* cluster and add applications to it.**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. However, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/) if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/pt/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)
- A user account with access to vSphere
- You need to have the **Tanzu Kubernetes GRID** administration cluster installed, using the [Install Tanzu Kubernetes Grid](https://docs.ovh.com/pt/private-cloud/tanzu-tkgm-installation) guide.
- A VLAN with Internet access and a DHCP server
- You must have these resources:
    - 16 GB memory, 4 vCPU, 40 GB storage per Kubernetes node (requires 6 nodes per **Workload** cluster in production mode).

## Instructions

We will deploy a *Workload* cluster on a **Tanzu Kubernetes Grid** management cluster and add an application.

At the end of the installation, you will have six new virtual machines in addition to the seven that are required for the management cluster to work. 

![00 Cluster administration & workload Diagram01](images/00-tkc-mc-wc01.png){.thumbnail}

### Deploying a *Workload cluster*

The *Workload* cluster can be deployed on the same network as the administration cluster or on another network. In our case, we will deploy it on the same network for demonstration purposes. If you want to change networks, simply put the portgroup in the same configuration YAML of your workload cluster, as explained below in the `VSPHERE_NETWORK` section. Ensure that the management cluster can communicate with the workload cluster.

Once you have added this cluster, you can then install applications. 

Copy the file that was used to create the administration cluster into a file named **tkg-workload-cluster.yaml**.

```bash
cp ~/.config/tanzu/tkg/clusterconfigs/tkgmfile.yaml ~/tkg-workload-cluster.yaml
```

Edit the contents of the **~/tkg-workload-cluster.yaml** file by changing these values:

```yaml
CLUSTER_NAME: tkg-workload-cluster
VSPHERE_CONTROL_PLANE_ENDPOINT: 192.168.0.11
```

Run this command to create the cluster:

```bash
tanzu cluster create --file tkg-workload-cluster.yaml
```

Connect to the cluster with these commands:

```bash
# Authorisation of cluster connection
tanzu cluster kubeconfig get tkg-workload-cluster --admin
# Positioning on tkg-workload-cluster cluster
# Administrative accounts always have this form clustername-admin@clustername
kubectl config use-context tkg-workload-cluster-admin@tkg-workload-cluster
```

Log in to your vSphere interface to see the six virtual machines in the *Workload* cluster.

![01 vm created 01](images/01-vm-created-after-cwl-deployment01.png){.thumbnail}

### Load Balancer installation

The **Load Balancer** links the *Workload* cluster network to the external network on the VMware cluster. To do this, we will use the **kube-vip** package, which will act as a *load balancer* between the internal network of the cluster and the VLAN10 network. You can find more information on the [kube-vip](https://kube-vip.io/) documentation.

Run these commands from the **Bootstrap** virtual machine:

```bash
# Creating a folder to host the kube-vip application from git
mkdir ~/kube-vip
# Moving into this folder
cd ~/kube-vip
# Data recovery from GitHub
git clone https://github.com/vrabbi/tkgm-customizations.git
# Moving to the application subfolder
cd tkgm-customizations/carvel-packages/kube-vip-package/
# Applying pre-configuration
kubectl apply -n tanzu-package-repo-global -f metadata.yml
kubectl apply -n tanzu-package-repo-global -f package.yaml
```

Create the file **~/kube-vip/tkgm-customizations/carvel-packages/kube-vip-package/values.yaml** with this content that corresponds to the IP addresses that can be used on VLAN10 to deploy an application.

```yaml
vip_range: 192.168.0.210-192.168.0.250
```

Install the package using these commands:

```bash
# Installation
tanzu package install kubevip -p kubevip.terasky.com -v 0.3.9 -f values.yaml
# Checking for the kubevip package
 kubectl get packages -A
```

### Installing an application

For demonstration purposes, we will deploy an application named **yelb** that uses 4 pods, one of which will be available via the kubevip load balancer. you can find more information on this [example KUBERNETES YELB](https://github.com/mreferre/yelb).

Run these commands to install a new application in the **Workload** cluster from the **Bootstrap** virtual machine.

```bash
# Creating a namespace for this application
kubectl create ns yelb
# Deploying the application from a source on the Internet
kubectl\
 -n yelb apply -f\
 https://raw.githubusercontent.com/lamw/yelb/master/deployments/platformdeployment/Kubernetes/yaml/yelb-k8s-loadbalancer.yaml
# Checking that the application is properly installed
kubectl get all -n yelb
```

The IP addresses internal to the KUBERNETES cluster appear in the **CLUSTER-IP** column, applications that are visible from outside the cluster have an IP address in the **EXTERNAL-IP** column.

In this example, the website is accessible via the address **192.168.0.223** on port **80**.

![02 Verify Application 01](images/02-verify-application-01.png){.thumbnail}

In the **Bootstrap** console, use the web browser to connect to the URL `http://192.168.0.223`.

![02 Verify Application 02](images/02-verify-application-02.png){.thumbnail}

An application can consist of multiple pods that communicate with each other through the internal network of the workflow cluster. Some ports are opened on the VMware cluster network using the kube-vip module.

![03 apps and load balancing](images/03-internetworkcommunication01.png){.thumbnail}

## Go further

[Installing Tanzu Kubernetes Grid](https://docs.ovh.com/pt/private-cloud/tanzu-tkgm-installation)

[Tanzu Kubernetes Grid VMware Overview](https://tanzu.vmware.com/kubernetes-grid)

[VMware de Tanzu Kubenetes Grid documentation](https://https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/index.html)

[Manual installation of the CLI tool for the deployment of Tanzu Kubernetes GRID](https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/1.5/vmware-tanzu-kubernetes-grid-15/GUID-install-cli.html)

Join our community of users on <https://community.ovh.com/en/>.
