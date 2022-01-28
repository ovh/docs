---
title: Understanding vScope
slug: vscope
excerpt: The vScope interface allows you to monitor your infrastructure
section: Services et options OVHcloud
order: 01
---

**Last Updated on 28/01/2022**

## Objective

OVH puts an infrastructure **supervision** and **monitoring** tool at your disposal called **vScope**.

It's a web based utility gathering and presenting all the **useful** information on your resources.

**This guide describes the functionalities of the interface**

## Instructions

To access the vScope interface, clic on the vScope icon in the login window of your Hosted Private Cloud.

![](images/gatewayPCC.png){.thumbnail}

A **vScope** access link is also available in your manager utility.

![](images/managerLink.png){.thumbnail}

In both cases, you'll be directed to a new browser tab with this URL.

![](images/vScope12.png){.thumbnail}

Use your vSphere**username** and **password** to log on the interface.

![](images/vScope11.png){.thumbnail}

You are now connected to **vScope** an can monitor your resources. For example, you can see in the main window the number of Cores and VMs on each host as well as CPU and RAM consumption or network traffic.

![](images/vScope.png){.thumbnail}

Here are details on the different elements.

In cases of multiples **datacenters** inside a single **Private Cloud**, you can select them in the scrolling menu. **Last refresh** is the last **web page** refresh, not the **vScope** on. vScope refreshes every **2 to 5 minutes**.

![](images/vScope1.png){.thumbnail}

The **Filer** menu gives an insight on datastore usage in terms of VMs and storage space.

![](images/vScope2.png){.thumbnail}

Clicking on the **Graphs** icon, you can see more details on the chosen resource.

![](images/vScope7.png){.thumbnail}

The Hosts menu offers all the characteristics for each host in your datacenter (**Cores, vCPUs, VM**) and the usage percentage as well as network connectivity on all physical network cards (**VMNic**).

![](images/vScope4.png){.thumbnail}

The detailed view also shows historical data over a day, week, month or year as needed.

![](images/vScope8.png){.thumbnail}

The last Voici la dernière catégorie qui détaille l'utilisation de chaque **machine virtuelle** dans votre data-centre avec en partie les informations suivantes :

- Etat des VMtools
- Trafic réseau
- Taille de la VM
- Activation FT (Fault Tolerance)
- CPU Ready Time
- Disk IO
- Disk Latency

![](images/vScope6.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
