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

Nous allons détailler chaque élément de cette page.

En cas de différents **data-centres** dans un même **Private Cloud**, vous pouvez le choisir dans le menu déroulant. Concernant le **Last refresh** il correspond au dernier rafraîchissement de la **page Web** et non du **vScope** qui lui est mise à jour toutes les **2 à 5 minutes**.

![](images/vScope1.png){.thumbnail}

Le menu **Filer** renseigne sur l'utilisation de vos data-stores que ce soit au niveau du nombre de machine virtuelle ainsi que l'espace consommé.

![](images/vScope2.png){.thumbnail}

En cliquant sur l'icone **Graphs**, vous pouvez obtenir des données **précises** concernant la ressource.

![](images/vScope7.png){.thumbnail}

Le menu pour les hosts affiche en détail les caractéristiques de chaque host dans votre data-centre (**Cores, vCPUs, VM**) ainsi que leurs pourcentages d'utilisation et enfin la connectivité réseau et le nombre de carte réseau physique (**VMNic**).

![](images/vScope4.png){.thumbnail}

Voici la page qui détaille précisément la ressource. Vous avez également accès à un historique d’utilisation sur un jour, une semaine, un mois ou même un an.

![](images/vScope8.png){.thumbnail}

Voici la dernière catégorie qui détaille l'utilisation de chaque **machine virtuelle** dans votre data-centre avec en partie les informations suivantes :

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
