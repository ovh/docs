---
title: "Comment détacher un nom de domaine d'un site web existant ?"
excerpt: "Découvrez comment détacher un nom de domaine ou un sous-domaine d'un site web déjà existant sur votre hébergement web"
updated: 2026-05-04
---

## Objectif

Vous pouvez héberger plusieurs sites web sur une même offre d'hébergement web, même si les noms de domaine ne sont pas enregistrés chez OVHcloud. De plus, vous pouvez associer un ou plusieurs noms de domaine ou sous-domaines à un même site web.

Vous ne souhaitez plus utiliser un nom de domaine ou un sous-domaine pour votre site web ?
Vous voulez associer votre nom de domaine ou votre sous-domaine à un autre site web sur l'un de vos hébergements web ?

**Découvrez comment détacher un nom de domaine ou un sous-domaine d'un site web déjà existant sur votre hébergement web.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting-multisite) compatible.
- Disposer d'un ou de plusieurs [noms de domaine](/links/web/domains).
- Pouvoir modifier la configuration de vos noms de domaine depuis leurs [zones DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergements](/links/control-panel/web-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Hébergements`{.action} > Sélectionnez votre hébergement web

---
<!-- CP-NAV-END:web-hosting -->

## En pratique

> [!warning]
>
> Détacher un nom de domaine ou un sous-domaine d'un site web présent sur votre hébergement web est une manipulation sensible. En effet, après cette opération, votre site web ne sera plus accessible sur Internet avec votre nom de domaine et/ou sous-domaine.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `>`{.action} situé à gauche du nom du site web concerné pour afficher les noms de domaine et sous-domaines associés.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Cliquez ensuite sur le bouton `⁝`{.action} situé à droite du nom de domaine ou sous-domaine concerné, puis sur `Détacher le domaine`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Étape 4**
>>
>> La nouvelle fenêtre qui s'ouvre vous demande de confirmer le détachement du nom de domaine ou du sous-domaine.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Selon votre choix, cochez ou non la case `Configuration automatique (recommandée)`{.action}, puis cliquez sur `Valider`{.action} pour confirmer votre choix.
>>
>> > ![!warning]
>> >
>> > **Cas particulier : Vous avez associé Git sur votre site web et un seul nom de domaine est attaché au site web**
>> >
>> > Si tel est le cas, vous rencontrerez la fenêtre suivante :
>> >
>> > ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>> >
>> > Comme le message l'indique, vous devrez [supprimer votre association Git](/pages/web_cloud/web_hosting/git_integration_webhosting) dans un premier temps, **avant** de détacher votre nom de domaine.

### Cas particulier : Détachement d'un nom de domaine ou d'un sous-domaine pour l'utiliser avec un autre site web

- Si vous souhaitez ajouter votre nom de domaine ou votre sous-domaine à un autre site web existant sur un hébergement web, consultez [ce guide](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).
- Si vous souhaitez créer un nouveau site web sur un hébergement web avec votre nom de domaine ou sous-domaine récemment détaché, consultez [ce guide](/pages/web_cloud/web_hosting/multisites_configure_multisite).

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
