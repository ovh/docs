---
title: "Comment identifier le serveur de votre base de données"
excerpt: "Découvrez comment retrouver le nom du serveur qui héberge votre base de données mutualisée, accessible avec votre hébergement web"
updated: 2026-02-12
---

## Objectif

Au cours de l'utilisation de vos services, vous pouvez être amené à devoir connaître le nom du serveur SQL sur lequel se trouve votre base de données (incluse ou commandée en complément via votre [hébergement web](/links/web/hosting)).

> [!warning]
>
> Ce guide ne concerne pas les bases de données présentes sur une solution [Web Cloud Databases](/links/web/databases).

**Découvrez comment retrouver le nom du serveur qui héberge votre base de données mutualisée, accessible avec votre hébergement web.**

## Prérequis

- Disposer d'une [offre d'hébergement web OVHcloud](/links/web/hosting).
- Utiliser une base de données incluse ou [commandée en complément](/links/web/hosting-options-startsql) via votre hébergement web.

<!-- CP-NAV-START:web-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergements](/links/control-panel/web-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Hébergements`{.action} > Sélectionnez votre hébergement web

---
<!-- CP-NAV-END:web-hosting -->

## En pratique

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Bases de données`{.action}. 
>>
>> ![Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases.png){.thumbnail}
>> 
> **Étape 3**
>>
>> Dans le tableau, repérez la colonne **Serveur**.
>>
>> ![database-server](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}
>>
>> Pour la base de données concernée, vous retrouverez dans cette colonne le nom du serveur SQL (par exemple : **mysqlXXX.euXXX**) sur lequel votre base de données mutualisée est hébergée.
>>
>> > [!warning]
>> >
>> > Ne confondez pas le **Serveur** avec l'**Adresse du serveur** :
>> >
>> > - L'**Adresse du serveur** fait partie des identifiants de connexion spécifiques à votre base de données et permet de connecter votre site web à celle-ci.
>> > - Le **Serveur** représente l'infrastructure qui héberge votre base de données, ainsi que d'autres bases. Le nom du serveur permet de vérifier s'il est concerné par une opération de maintenance ou un incident déclaré sur notre page [Web Cloud Status](https://web-cloud.status-ovhcloud.com/).

## Aller plus loin <a name="go-further"></a>

[Résoudre les erreurs les plus courantes liées aux bases de données](/pages/web_cloud/web_hosting/diagnosis_database_errors)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).