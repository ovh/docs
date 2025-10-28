---
title: "Comment supprimer une zone DNS OVHcloud"
excerpt: "Découvrez comment supprimer une zone DNS pour votre nom de domaine via votre espace client OVHcloud"
updated: 2025-10-14
---

## Objectif

La zone **D**omain **N**ame **S**ystem (**DNS**) d’un nom de domaine est son fichier de configuration. Elle se compose d’informations techniques, appelées *enregistrements DNS*. La zone DNS est, en quelque sorte, comme un centre d'aiguillage.

Pour plus d'information sur les zones et les serveurs DNS, consultez les guides suivants : 

- [Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

Vous pouvez, par exemple, être amené à supprimer une zone DNS pour votre nom de domaine chez OVHcloud dans les cas suivants (liste non exhaustive) :

- Vous utilisez une zone DNS active pour votre nom de domaine chez un autre fournisseur que OVHcloud.
- Vous n'utilisez plus le nom de domaine associé à la zone DNS présente chez OVHcloud.
- Vous avez migré vos services chez un autre fournisseur et vous souhaitez résilier vos services OVHcloud.

> [!primary]
>
> La création / modification / suppression d'une zone DNS dans votre [espace client OVHcloud](/links/manager) est totalement gratuite.

**Découvrez comment supprimer une zone DNS chez OVHcloud pour votre nom de domaine via votre espace client OVHcloud.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Avoir une zone DNS dans votre espace client OVHcloud.
- Disposer des droits suffisants sur la zone DNS à supprimer. Retrouvez plus d'informations sur notre guide « [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts) ».

> [!primary]
>
> Supprimer une zone DNS ne supprime pas l'enregistrement du nom de domaine auquel elle est associée. Vous ne perdrez donc pas votre nom de domaine en supprimant une zone DNS associée à celui-ci.

## En pratique

> [!warning]
>
> Avant de poursuivre, vérifiez que la zone DNS que vous souhaitez supprimer n'est plus utilisée par votre nom de domaine.
>
> En effet, si vous supprimez la zone DNS active pour votre nom de domaine, cela engendrera une interruption de vos services en ligne (site web, adresses e-mail, etc.).
>
> Effectuez un [WHOIS](/links/web/domains-whois) de votre nom de domaine pour savoir si la zone DNS active de votre nom de domaine est celle présente chez OVHcloud ou non.
>
> Si la zone DNS active pour votre nom de domaine est celle présente chez OVHcloud et que vous souhaitez remplacer celle-ci par une zone DNS hébergée ailleurs, consultez notre guide « [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit) » avant d'effectuer une quelconque suppression de zone DNS.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), cliquez sur votre nom en haut à droite puis sur `Mes offres & services`{.action}.
>>
>> ![Mes offres & services](/pages/assets/screens/control_panel/product-selection/right-menu/my-solutions-and-services.png){.thumbnail}
>>
> **Étape 2**
>>
>> Dans le tableau présent sur la page qui s'affiche, cliquez sur le bouton `...`{.action} à droite de la zone DNS à résilier, puis sur `Résilier mon service`{.action}.
>>
>> ![résilier](/pages/assets/screens/control_panel/product-selection/right-column/my-solutions-and-services/dns-zone-cancel-my-subscription.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la nouvelle page qui apparaît, précisez la raison de votre demande de résiliation et votre projet, puis cliquez sur `Valider`{.action}.
>>
>> ![cancel the service](/pages/assets/screens/control_panel/product-selection/right-column/my-solutions-and-services/dns-zone-delete-your-service.png){.thumbnail}
>>
> **Étape 4**
>>
>> La résiliation de votre service aura lieu à la **date d'effet** indiquée dans le tableau « Gestion de mes offres et services ». Si vous ne voyez pas le statut « Résiliation programmée » apparaître, rafraîchissez la page.
>>
>> > [!primary]
>> >
>> > Si vous souhaitez supprimer immédiatement une zone DNS de votre [espace client OVHcloud](/links/manager), réalisez les 4 étapes pour demander la résiliation à la date d'effet, puis contactez le support OVHcloud en créant un ticket d'assistance depuis le [centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help).
>> > Précisez dans le ticket la zone DNS concernée et votre souhait explicite de la supprimer immédiatement sans attendre la date d'effet.

## Aller plus loin

[Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).