---
title: Introduction à vRealize Operations - vROPS
slug: vrops-introduction
excerpt: Connectez-vous à vROPS et monitorez votre infrastructure
section: vRops
order: 01
---

**Dernière mise à jour le 23/02/2022**

## Objectif

vRealize Operations est un outil de management de vos opérations. Il contrôle vos infrastructures physiques, virtuelles et cloud tout en permettant des opérations de maintenance.

**Ce guide est une introduction à l'interface de vROPS.**

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur vSphere et/ou vROPS actif (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))


## En pratique

### Accès à l'interface

To access vROPS, type in your dedicated cloud address in a browser.<br>
Click on the vROPS icon.<br>

![](images/en01logpage.png){.thumbnail}

Use your vSphere login or the vROPS local user that you own.

![](images/en02log.png){.thumbnail}

You are now on the vROPS Home page with access to all its functionalities.

![](images/en03home.png){.thumbnail}

### Data Sources

The Data Sources section lists the different spaces monitored by vROPS. By default, your OHVcloud infrastructure is added.

![](images/en04datasources.png){.thumbnail}

Clicking on `ADD ACCOUNT`{.action} gives you the ability to centralize multiple spaces, from VMware to Azure through AWS.

![](images/en04datasourcesb.png){.thumbnail}


### Environment

The Environment section inventories your infrastructure and gives you access to monitoring of all your objects. Objects can be Hosts, Network devices, VMs, Applications... 

![](images/en05environment.png){.thumbnail}

### Visualize

The Visualize section holds dashboards and reports. There are plenty of premade dashboards that will give you quick views on your Infrastructure's health.

![](images/en06dashboards.png){.thumbnail}

You can still `+ Create`{.action} your own Dashboard to get a more specific view that will cater to your specific needs.<br>
You can pick and choose widget to be displayed.

![](images/en06dashboardsb.png){.thumbnail}

### Troubleshoot

The Troubleshoot section is your alert and log repository. There, you will be able to see and dig into the problems you're experiencing. Contextual links to documentation and fixes are also provided.

![](images/en07troubleshoot.png){.thumbnail}

### Optimize

The Optimize section gives you an insight and recommandations on the Capacity of your infrastructure. The monitoring analysis performed by vROPS displays usage and right-sizing info to enable you to scale your environment.

![](images/en08optimize.png){.thumbnail}

### Plan

The Plan section gives you trend and capacity management tools so you can future proof your infrastructure.<br>
Cost analysis and planning is also helpful for budgeting purposes.

![](images/en09plan.png){.thumbnail}

### Configure

The Configure section defines your metrics and threshold reactions through policies and alerts.<br>
You will be able to set up groups, profile, policies and/or alerts and appropriate response to tailor your infrastructure needs.

![](images/en10configure.png){.thumbnail}

### Automation

The Automation section schedules one time or scheduled maintenance jobs.<br>
Those jobs can be assigned to single or multiple objects over multiple spaces.

![](images/en11automation.png){.thumbnail}

### Administration

The Administration section pilots vROPS access and data clollection.<br>
This is where you can create specific vROPS accounts to be used. 

![](images/en12administration.png){.thumbnail}


## Go further

Join our community of users on <https://community.ovh.com/en/>.
