---
title: Mise en place de NCM Self Service (CALM) 
slug: prism-central-expansion
excerpt: 'Comment activer Self Service et (CALM dans votre cluster Nutanix' 
section: Utilisation avancée
order: 06
---

**Dernière mise à jour le 11/01/2023**

## Objectif

**Ce guide vous montre comment mettre en place NCM Self-Service (Calm) sur votre cluster Nutanix**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur le cluster via Prism Central
- D'avoir des licences en BYOL pour ce service (Ces licences ne sont pas disponibles avec le Pack advanced).
- Posséder un VLAN supplémentaire dans votre cluster qui fait propose du DCHP en IPAM et qui a accès à Internet 

## Présentation

NCM Self Service est une solution d'orchestration hétorogène qui permet l'administration de votre infrastucture à la fois sur la gestion des machines virtuelles et sur des serveurs distants. Il est possible de déployer et de maintenir des applications et des services.

## En pratique

Nous allons activer CALM, créer deux applications et les publier sur le portail d'applications.

Le deux applications que nous allons publier seront :

- Un serveur WEB Nginx sous Linux Ubuntu.
- Un serveur WEB IIS sous Windows server.

### Activation de CALM



Au travers du menu de Prism Central cliquez sur `Calm`{.action} dans la rubrique Services.

![01 create Project 01](images/01-create-project-01.png)

### Création d'un projet

Cliquez sur l'icône `Project`{.action} dans la rubrique Services.

![01 create Project 01](images/01-create-project-01.png)


### Création d'applications

Nous allons crééer deux applications, tester le bon fonctionnement et les publier dans le marketplace du cluster.

#### Création de l'application WEB Nginx sous Linux Ubuntu


#### Création de l'application WEB IIS sous Windows

### Publication des applications dans le Market Place





## Aller plus loin <a name="gofurther"></a>

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

[Nutanix NCM Self Service (CALM)](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Calm-Admin-Operations-Guide-v3_6_0:Nutanix-Calm-Admin-Operations-Guide-v3_6_0).
