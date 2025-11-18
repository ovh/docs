---
title: "Web Cloud Databases - Comment autoriser une adresse IP ?"
excerpt: "Découvrez comment autoriser une ou plusieurs adresses IP à accéder à votre solution Web Cloud Databases"
updated: 2025-07-10
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

Les solutions [Web Cloud Databases](/links/web/databases) peuvent être utilisées avec des services OVHcloud ou externes à OVHcloud.

Par défaut et pour des raisons de sécurité, sur ces solutions :

- Seules les adresses IP liées à notre infrastructure d'hébergements mutualisés sont autorisées à accéder au contenu des bases de données. 
- L'accès aux logs de la solution n'est pas restreint en fonction des adresses IP. Cela permet d'y accéder via un ordinateur par exemple.

Vous avez besoin de modifier ces autorisations/restrictions ?

**Découvrez comment autoriser une ou plusieurs adresses IP à accéder à votre solution Web Cloud Databases.**

## Prérequis

- Disposer d'une solution [Web Cloud Databases](/links/web/databases).
- Connaître l'adresse IP (ou la plage d'adresses IP) à autoriser sur votre solution.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Autoriser une adresse IP ou une plage d'adresses IP

> [!primary]
>
> Pour rappel, si vous venez d'activer votre solution [Web Cloud Databases](/links/web/databases) et que vous souhaitez l'utiliser avec une offre d'[hébergement web OVHcloud](/links/web/hosting), les adresses IP de ces offres sont déjà autorisées par défaut.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **5** étapes.

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Web Cloud Databases`{.action}, puis choisissez la solution Web Cloud Databases concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `IPs autorisées`{.action}.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Étape 4**
>>
>> Sur la page qui apparaît, cliquez sur le bouton `Ajouter une adresse IP / masque`{.action} situé au-dessus du tableau.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > Si vous souhaitez modifier une adresse IP ou une plage d'adresses IP déjà autorisée, cliquez directement dans le tableau sur le bouton `...`{.action} situé à droite de la ligne correspondant à l'adresse IP ou à la plage d'adresses IP à modifier, puis sur `Éditer la whitelist`{.action}.
>>
> **Étape 5**
>>
>> Dans la fenêtre qui s'ouvre, plusieurs champs sont à compléter :
>>
>> ![Add an IP address or mask](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP / masque *`{.action} : Saisissez ici l'adresse IP (par exemple : `203.0.113.44`) ou la plage d'adresses IP (par exemple : `203.0.113.0/24` représentant toutes les adresses IP de `203.0.113.0` à `203.0.113.255`) que vous souhaitez autoriser sur votre solution Web Cloud Databases.
>> - `Description`{.action} (facultatif) : Vous pouvez, par exemple, y ajouter des informations sur le rôle de l'adresse IP ou de la plage d'adresses IP concernée.
>> - `Bases de données`{.action} : Cochez cette case pour que l'adresse IP ou la plage d'adresses IP soit autorisée à accéder aux bases de données présentes sur votre solution Web Cloud Databases.
>> - `SFTP`{.action} : Cochez cette case pour que l'adresse IP ou la plage d'adresses IP soit autorisée à accéder aux logs de votre solution Web Cloud Databases.
>>
>> > [!warning]
>> >
>> > Il est fortement déconseillé de cocher la case `Bases de données`{.action} pour autoriser la plage d'adresses IP `0.0.0.0/0` à accéder à vos bases de données.
>> >
>> > En effet, cela permettrait d'autoriser l'accès à vos bases de données à l'ensemble des adresses IPv4 existantes.
>>
>> Une fois les informations saisies, cliquez sur le bouton `Valider`{.action}.

## Cas particuliers

**Cliquez sur les cas ci-dessous pour afficher les informations correspondantes.**

/// details | La plage d'adresses IP 0.0.0.0/0

Lors de l'activation de votre solution Web Cloud Databases, une ligne pour la plage d'adresses IP `0.0.0.0/0` est déjà présente par défaut pour autoriser l'accès en **SFTP** à la solution.

Cette autorisation est volontairement mise en place pour vous permettre d'accéder aux fichiers de logs de votre solution Web Cloud Databases sans avoir à déclarer l'adresse IP de votre point d'accès à Internet. 

En effet, cette adresse IP peut changer régulièrement en fonction des fournisseurs d'accès à Internet.

De plus, nous vous recommandons de **ne pas** modifier cette autorisation et de ne pas autoriser l'accès aux bases de données présentes sur votre solution Web Cloud Databases.

Effectivement, cela permettrait d'autoriser l'accès à vos bases de données à l'ensemble des adresses IPv4 existantes, ce qui représente un risque pour la sécurité de vos données.

///


/// details | L'autorisation d'accès aux hébergements web OVHcloud

Lors de l'activation de votre solution Web Cloud Databases, l'autorisation d'accès aux hébergements web OVHcloud est activée par défaut.

Si vous souhaitez désactiver cette autorisation car vous n'utilisez pas d'hébergement web avec votre solution Web Cloud Databases, suivez successivement les **4** étapes ci-dessous :

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Web Cloud Databases`{.action}, puis choisissez la solution Web Cloud Databases concernée.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `IPs autorisées`{.action}.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Étape 4**
>>
>> Sur la page qui apparaît, décochez la case précédant la mention `Autoriser les hébergements web OVHcloud à accéder à la base de données`{.action}.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}

///

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).
 
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).
 
Échangez avec notre [communauté d'utilisateurs](/links/community).