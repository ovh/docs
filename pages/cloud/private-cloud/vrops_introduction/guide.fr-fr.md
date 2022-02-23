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

Pour accéder à vROPS, tapez l'adresse de votre dedicated cloud dans un navigateur.<br>
Cliquez sur l'icone vROPS.<br>

![](images/en01logpage.png){.thumbnail}

Utilisez votre identifiant vSphere ou l'utilisateur vROPS local que vous possédez.

![](images/en02log.png){.thumbnail}

Vous êtes sur la page d'accueil vROPS avec l'accès à toutes les fonctionnalités.

![](images/en03home.png){.thumbnail}

### Data Sources

La section Data Sources liste les différents espaces monitorés by vROPS. Par défaut, seule votre infrastructure OHVcloud est intégrée.

![](images/en04datasources.png){.thumbnail}

Cliquer sur `ADD ACCOUNT`{.action} vous donne la possibilité de centraliser de multiples espaces, de VMware à Azure en passant par AWS.

![](images/en04datasourcesb.png){.thumbnail}


### Environment

La section Environment inventorie votre infrastructure et vous donne accès au monitoring de tous vos objets. Un objets peut être un hôte, un dispositif réseau, une VM , une application... 

![](images/en05environment.png){.thumbnail}

### Visualize

La section Visualize contient les dashboards et rapports. Il existe une multitude de dashboards prédéfinis pour vous renseigner sur la santé de votre infrastructure.

![](images/en06dashboards.png){.thumbnail}

Vous pouvez cependant créer votre propre dashboard personalisé en cliquant sur `+ Create`{.action}.<br>
Choisissez et organisez les widgets à votre convenance.

![](images/en06dashboardsb.png){.thumbnail}

### Troubleshoot

La section Troubleshoot vous présente les alertes et logs. Vous pourrez voir et creuser les disfonctionnements existant. Des liens vers les documentations vous seront proposés en fonction de votre contexte.

![](images/en07troubleshoot.png){.thumbnail}

### Optimize

La section Optimize vous donne un aperçu et des recommandation sur la capacité de votre infrastructure. L'analyse des données de monitoring de vROPS vous montre les infos pour dimentionner l'environnement au plus près de votre utilisation.

![](images/en08optimize.png){.thumbnail}

### Plan

La section Plan contient les outils de tendance et de management de capacité pour prévoir l'évolution de votre infrastructure.<br>
Des outils d'analyse de coût sont aussi intégrés pour vous aider à budgeter.

![](images/en09plan.png){.thumbnail}

### Configure

La section Configure définit les différentes mesures et les plafonds de réponse au travers d'alertes et de règles.<br>
Vous pouvez paramétrer des groupes, profiles, règles et/ou alertes et les réponses appropriées en fonction des besoins de votre infrastructure.

![](images/en10configure.png){.thumbnail}

### Automation

La section Automation vous laisse planifier des tâches de maintenance uniques ou récurrentes.<br>
Ces tâches peuvent être assignées à un ou plusieurs objets répartis sur de multiples espaces.

![](images/en11automation.png){.thumbnail}

### Administration

La section Administration pilote l'accès à vROPS et la récupération de données.<br>
C'est par exemple ici que vous pouvez créer des comptes utilisateur vROPS. 

![](images/en12administration.png){.thumbnail}


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
