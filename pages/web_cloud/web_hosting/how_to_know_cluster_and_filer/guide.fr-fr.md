---
title: "Hébergement web - Comment connaître son cluster et son filer"
excerpt: "Découvrez comment retrouver le numéro de cluster et/ou le numéro du filer où se trouve votre hébergement web"
updated: 2025-05-21
---

## Objectif

Les hébergements web fonctionnent sur une infrastructure mutualisée appelée *cluster*. OVHcloud dispose de plusieurs clusters sur lesquels sont répartis plusieurs hébergements web.
Chaque cluster, pour des raisons d'efficacité et de sécurité, est également divisé virtuellement en plusieurs segments appelés *filers*. Les filers contiennent eux-mêmes plusieurs hébergements web.
Au cours de l'utilisation de votre hébergement web, vous pouvez être amenés à devoir connaître le numéro du cluster et/ou du filer où se situe votre hébergement web.

**Découvrez comment retrouver le numéro de cluster et le numéro du filer où se trouve votre hébergement web.**

## Prérequis

- Posséder une [offre d'hébergement web](/links/web/hosting).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Retrouver le numéro du cluster d'un hébergement web

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes :

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `FTP - SSH`{.action}. 
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ftp-ssh.png){.thumbnail}
>> 
> **Étape 4**
>>
>> Sur la nouvelle page, récupérez le numéro du cluster de l'hébergement web sous la mention **Serveur FTP et SFTP** (3 chiffres compris entre `0` et `9`).
>>
>> ![FTP-SSH - numéro du cluster](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/find-cluster-ftp-ssh.png){.thumbnail}

### Retrouver le numéro du filer d'un hébergement web

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes :

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans l'encadré **Informations générales** de la page qui s'affiche, récupérez le numéro du filer sous la mention `Filer`{.action}.
>>
>> ![Numéro du filer](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/filer.png){.thumbnail}

## Aller plus loin

[Hébergement web - Liste des adresses IP par cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).