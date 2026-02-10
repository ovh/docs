---
title: "Comment retrouver le serveur où se trouve ma base de données"
excerpt: "Découvrez comment retrouver le nom du serveur où est hébergé votre base de données mutualisée accessible avec votre hébergement web"
updated: 2026-02-10
---

## Objectif

Au cours de l'utilisation de vos services, vous pouvez être amené à connaître le nom du serveur SQL sur lequel se trouve votre base de données (incluse ou commandée en complément via votre [hébergement web](/links/web/hosting)).

> [!warning]
>
> Ce guide ne concerne pas les bases de données présentes sur une solution [Web Cloud Databases](/links/web/databases)

**Découvrez comment retrouver le nom du serveur où est hébergé votre base de données mutualisée accessible avec votre hébergement web.**

## Prérequis

- Disposer d'une [offre d'hébergement web](/links/web/hosting) OVHcloud.
- Être connecté à votre [espace client OVHcloud](/links/manager).
- Utiliser une base de données incluse ou [commandée en complément](/links/web/hosting-options-startsql) via votre [hébergement web](/links/web/hosting).

## En pratique

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

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
>> Sur la page qui s'affiche, cliquez sur l'onglet `Bases de données`{.action}. 
>>
>> ![Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases.png){.thumbnail}
>> 
> **Étape 4**
>>
>> Dans le tableau qui s'affiche, repérez la colonne intitulée **Serveur**.
>>
>> ![database-server](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}
>>
>> Pour la base de données concernée, vous retrouverez dans cette colonne le nom du serveur SQL (par exemple : **mysqlXXX.euXXX**) sur lequel votre base de données mutualisée est hébergée.
>>
>> > [!warning]
>> >
>> > Ne confondez pas le **Serveur** avec l'**Adresse du serveur** :
>> > - L'**Adresse du serveur** fait partie des identifiants de connexion spécifiques à votre base de données. C'est un paramètre permettant de connecter votre site web avec votre base de données.
>> > - Le **Serveur** représente l'infrastructure sur laquelle est hébergée votre base de données (avec d'autres bases de données). Le nom du serveur peut notamment vous permettre d'identifier si une opération de maintenance ou un incident est en cours sur notre page [https://web-cloud.status-ovhcloud.com/](https://web-cloud.status-ovhcloud.com/).

## Aller plus loin <a name="go-further"></a>

[Résoudre les erreurs les plus courantes liées aux bases de données](/pages/web_cloud/web_hosting/diagnosis_database_errors)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).