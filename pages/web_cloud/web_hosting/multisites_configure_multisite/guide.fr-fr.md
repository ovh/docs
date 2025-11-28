---
title: 'Partager son hébergement entre plusieurs sites'
excerpt: "Découvrez comment héberger différents sites web sur votre offre d'hébergement web"
updated: 2025-12-02
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

Vous pouvez héberger plusieurs sites web sur une même offre d'hébergement web, même si les noms de domaine ne sont pas enregistrés chez OVHcloud.

Vous souhaitez ajouter un nouveau site web sur votre hébergement web ?

**Découvrez comment héberger différents sites web sur votre offre d'hébergement web.**

> [!primary]
> Si vous avez déjà créé le site web concerné sur votre hébergement web et que vous souhaitez y associer un nouveau nom de domaine ou sous-domaine, consultez **directement** [ce guide](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).

## Prérequis

- Disposer d'une offre [d'hébergement web OVHcloud](/links/web/hosting-multisite) compatible.
- Disposer d'un ou plusieurs [noms de domaine](/links/web/domains).
- Pouvoir modifier la configuration de vos noms de domaine (la [zone DNS](/pages/web_cloud/domains/dns_zone_edit)).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### 1 - Déclarer l'ajout d'un site web sur votre hébergement web présent dans votre espace client OVHcloud

**Cliquez sur l'un des titres ci-dessous pour afficher les explications.**

<a name="add-domain-ovhcloud"></a>

/// details | Ajouter un site web avec nom de domaine géré depuis votre espace client OVHcloud

Cette partie s'applique uniquement si le nom de domaine (et/ou sa zone DNS active) avec lequel vous souhaitez créer votre site web se trouvent **dans votre espace client OVHcloud**.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **7** étapes.

> [!tabs]
> **Etape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 4**
>>
>> Au dessus et à gauche du tableau qui apparaît, cliquez sur le bouton `Ajouter un site`{.action}
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Étape 5**
>>
>> Cochez l'option `Associer un domaine OVHcloud existant`{.action} et cliquez sur `Continuer`{.action}.
>>
>> 

### 3 - Mettre votre site web en ligne <a name="site-online"></a>

Une fois le site web déclaré avec votre nom de domaine sur votre hébergement web, il ne vous reste plus qu’à mettre en ligne le contenu de votre site web. Pour rappel, vous devez réaliser cette manipulation dans le **dossier racine** que vous avez défini lors de l’ajout du site web dans votre espace client OVHcloud.

Pour vous aider dans cette démarche, sachez qu'OVHcloud propose l'installation de modules (WordPress, Joomla!, PrestaShop et Drupal). Vous pouvez ainsi bénéficier d’une structure de site web prête à l’emploi. Le site web sera alors installé automatiquement dans le dossier racine configuré précédemment. Vous pouvez en apprendre plus sur cette possibilité depuis notre documentation intitulée [« Installer son site avec les modules en 1 clic »](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

A contrario, si vous souhaitez installer manuellement votre site web, munissez-vous de ses fichiers puis mettez-les en ligne dans le bon dossier racine présent dans l'espace de stockage de votre hébergement web. Vous pouvez en apprendre plus sur cette possibilité depuis notre documentation intitulée [« Mettre en ligne un site Internet sur son hébergement web »](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).

> [!primary]
>
> Si vous souhaitez ajouter plusieurs sites web, vous devrez répéter les actions décrites dans ce guide.
>
> Nous vous invitons à être vigilant sur le nombre de sites web que vous partagez sur votre hébergement web. Plus celui-ci est élevé, plus les ressources qui lui sont allouées sont sollicitées. [La page de nos offres d'hébergement web](/links/web/hosting) indique le nombre de sites web recommandés que vous pouvez accueillir sur votre hébergement web.

## Aller plus loin

[Installer son site avec les modules en 1 clic.](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Éditer une zone DNS OVHcloud.](/pages/web_cloud/domains/dns_zone_edit)

[Mettre en ligne un site Internet sur son hébergement web.](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).