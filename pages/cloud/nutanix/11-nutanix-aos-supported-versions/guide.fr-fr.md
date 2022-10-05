---
title: Versions de Nutanix AOS supportées par OVHcloud
slug: nutanix-aos-supported-versions
excerpt: "Vérifiez les versions de Nutanix AOS supportées par OVHcloud"
section: Premiers pas
order: 11
---

**Dernière mise à jour le 05/10/2022**

## Objectif

**Découvrez quelle versions de Nutanix AOS sont supportées sur les clusters Nutanix OVHcloud.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer d'un Cluster Nutanix dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur la page des [API OVHcloud](https://api.ovh.com/).

## Présentation des versions supportées sur un cluster Nutanix OVHcloud

Nutanix propose deux versions d'AOS qui sont régulièrement mises à jour :

- **Une version LTS (*Long Term Support*)** mise à jour 1 fois par an. Ces versions sont maintenues pendant une plus longue période et fournissent des corrections de bugs pendant une période prolongée.
- **Une version STS (*Short Term Support*)** mise à jour entre 2 et 4 fois par an. Ces versions proposent des nouvelles fonctionnalités et des mises à niveaux régulières.

Lorsqu'une version **LTS** ou **STS** sort la version précédente reste supportée trois mois.

OVHcloud intègre au produit **Hosted Private Cloud powered by Nutanix** les versions LTS à leurs dates de sortie par Nutanix, une fois par an. En ce qui concerne les versions STS, OVHcloud intègre au produit **Hosted Private Cloud powered by Nutanix** un maximum de 3 versions STS par an aux dates de sortie de Nutanix.

> [!warning]
>
> Vous pouvez utiliser **LCM** pour faire des mises à jours correctives des versions **LTS** et **STS**.
> 
> Lors de ces mises à jours, **LCM** peut proposer une nouvelle version qui n'est pas encore qualifiée par OVHcloud. Attendez qu'elle soit validée par OVHcloud pour continuer à bénéficier du support.
>

Les versions supportées par OVHCloud sont les suivantes :

| Catégorie de version          | Numéro de version                      |
| ----------------------------- | -------------------------------------- |
| **LTS**                       | 5.20 & 6.5                             |
|                               |                                        |
| **STS**                       | 6.1                                    |
|                               |                                        |

Ce guide sera régulièrement mis à jour avec les versions supportées. 

Il est possible de voir les versions qualifiées au travers de l'API OVHcloud. 

## En pratique

Nous allons vérifier les versions supportées au travers de l'API OVHcloud.

Connectez-vous à l'[API OVHcloud](https://api.ovh.com). Pour plus de détails sur le fonctionnement de l'API OVHcloud, consultez notre guide [Premiers pas avec les API OVHcloud](https://docs.ovh.com/fr/api/first-steps-with-ovh-api/.)

Utilisez l'appel API suivant :

> [!api]
>
> @api {get} /nutanix/{serviceName}
>

Saisissez ces données :

- **ServiceName :** `Nom FQDN de votre Cluster Nutanix`.

Cliquez sur `Execute`{.action} pour récupérer les informations de versions.

![01 Get version 01](images/01-get-supported-version01.png)

Le résultat de la requête apparaît en dessous de `availableVersions` avec les deux versions supportées sur un cluster Nutanix OVHcloud. La première est la version LTS, celle en dessous est la version STS.

![01 Get version 02](images/01-get-supported-version02.png)

## Aller plus loin

[Plan de mise à jours Nutanix AOS](https://portal.nutanix.com/page/documents/kbs/details?targetId=kA00e000000LIi9CAG)

[Utilisation de l'API OVHcloud](https://docs.ovh.com/fr/api/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
