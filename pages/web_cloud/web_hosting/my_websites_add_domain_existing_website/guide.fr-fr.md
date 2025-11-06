---
title: "Comment associer un nom de domaine à un site web existant ?"
excerpt: "Découvrez comment associer un nom de domaine ou un sous-domaine à un site web déjà existant sur votre hébergement web"
updated: 2025-10-30
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

Vous pouvez héberger plusieurs sites web sur une même offre d'hébergement web, même si les noms de domaine ne sont pas enregistrés chez OVHcloud. De plus, vous pouvez associer un ou plusieurs noms de domaine ou sous-domaines à un même site web.

> [!primary]
> Si vous n'avez pas encore créé le site web concerné sur votre hébergement web, consultez **directement** [ce guide](/pages/web_cloud/web_hosting/multisites_configure_multisite).

**Découvrez comment associer un nom de domaine ou un sous-domaine à un site web déjà existant sur votre hébergement web.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting-multisite) compatible.
- Disposer d'un ou de plusieurs [noms de domaine](/links/web/domains).
- Pouvoir modifier la configuration de vos noms de domaine depuis leurs [zones DNS](/pages/web_cloud/domains/dns_zone_edit).
- Être connecté à votre [espace client OVHcloud](/links/manager), partie `Web Cloud`{.action}.

## En pratique

### Ajouter un nom de domaine ou un sous-domaine à un site web existant

**Cliquez sur l'un des titres ci-dessous pour afficher les explications.**

/// details | Ajouter un nom de domaine géré depuis votre espace client OVHcloud

Cette partie s'applique uniquement si votre nom de domaine et/ou sa zone DNS active se trouvent **dans votre espace client OVHcloud**.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **7** étapes.

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
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 4**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Ajouter un domaine ou sous-domaine`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Étape 5**
>>
>> Cochez l'option `Ajouter un domaine enregistré chez OVHcloud`{.action}, puis sélectionnez le nom de domaine concerné dans la liste en dessous.
>>
>> > [!primary]
>> > Pour ajouter un sous-domaine, vous devez d’abord sélectionner le nom de domaine dans la liste (par exemple : domain.tld). L’étape suivante vous permettra d’indiquer le sous-domaine (par exemple : **sub**.domain.tld).
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-ovh-step-1.png){.thumbnail}
>>
>> Cliquez ensuite sur `Suivant`{.action}.
>>
> **Étape 6**
>>
>> Vous devez à présent personnaliser l’ajout du nom de domaine ou du sous-domaine. Selon votre offre d'[hébergement web](/links/web/hosting), certains éléments parmi les choix proposés ne pourront pas être sélectionnés.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-ovh-step-2.png){.thumbnail}
>>
>> |Information|Description|
>> |---|---|
>> |Domaine|Par défaut, le nom de domaine que vous avez sélectionné est renseigné automatiquement. Vous pouvez y ajouter un sous-domaine (par exemple : **sub**.domain.tld) et créer simultanément le sous-domaine « www » correspondant (par exemple : **www.sub**.domain.tld). En définitive, ce nom de domaine sera l'adresse Internet du site web que vous souhaitez afficher.|
>> |Activer le CDN|Permet d'activer le CDN (mise en cache des éléments statiques de votre site web, comme les images) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [notre page CDN](/links/web/hosting-options-cdn). En activant le SSL et le CDN, vous pourrez également bénéficier du protocole **HTTP2** (ce dernier est activé par défaut dans notre datacentre de Gravelines).|
>> |IP du pays|Permet de bénéficier d'une adresse IP géolocalisée (parmi une liste de pays) pour le nom de domaine sélectionné. Apprenez-en plus grâce à [cette page](/links/web/hosting-options).|
>> |Activer le firewall|Permet d'activer un pare-feu (filtrage et analyse des requêtes) sur le nom de domaine sélectionné. Apprenez-en plus grâce à [cette page](/links/web/hosting-options).|
>> |Logs séparés|Permet d'activer un nouvel espace de logs sur le domaine sélectionné. Vous devrez choisir un nom de domaine dans une liste qui déterminera le nom d'accès à ce nouvel espace. Apprenez-en plus grâce à [cette page](/links/web/hosting-traffic-analysis).|
>>
>> Une fois les informations complétées, cliquez sur le bouton `Suivant`{.action}.
>>
> **Étape 7**
>>
>> Vérifiez ensuite le récapitulatif qui s'affiche.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-ovh-step-3.png){.thumbnail}
>>
>> En ayant sélectionné un nom de domaine enregistré chez OVHcloud, vous avez la possibilité de modifier automatiquement ou manuellement sa configuration DNS :
>> - **Pour une configuration DNS automatique**, cochez la case `Configuration automatique (recommandée)`{.action} ;
>> - **Pour une configuration DNS manuelle**, décochez la case `Configuration automatique (recommandée)`{.action} puis notez les informations qui s'affichent. Pour réaliser ce paramétrage, aidez-vous de notre documentation « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».
>>
>> Pour terminer, cliquez sur `Valider`{.action} pour initier l’ajout du nom de domaine. Cela peut prendre jusqu'à une heure. Cependant, la modification de la configuration DNS de votre nom de domaine nécessite un temps de propagation pouvant prendre jusqu'à 24 heures pour être pleinement effective.

///

/// details | Ajouter un nom de domaine externe à OVHcloud

Cette partie s’applique uniquement si votre nom de domaine n'est pas enregistré chez OVHcloud **ou** s'il n'est pas enregistré dans **votre** compte OVHcloud. 

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **7** étapes.

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
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 4**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Ajouter un domaine ou sous-domaine`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Étape 5**
>>
>> Cochez l'option `Ajouter un domaine externe`{.action}, puis cliquez sur `Suivant`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Étape 6**
>>
>> Vous devez à présent personnaliser l’ajout du nom de domaine ou du sous-domaine. À noter que certaines options comprises dans votre offre d'[hébergement web](/links/web/hosting) ne peuvent pas être activées pendant ce processus. Vous devrez finaliser la manipulation avant de pouvoir les utiliser, en modifiant les paramètres du nom de domaine ou du sous-domaine lorsqu’il sera ajouté.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-2.png){.thumbnail}
>>
>> |Information|Description|
>> |---|---|
>> |Domaine|Renseignez le nom de domaine que vous souhaitez utiliser. Ajoutez au besoin un sous-domaine (par exemple : **sub**.domain.tld) et créez simultanément le sous-domaine « www » correspondant (par exemple : **www.sub**.domain.tld). En définitive, celui-ci correspondra à l'adresse Internet du site que vous souhaitez mettre en ligne. Sachez que vous devez être en mesure de modifier la configuration du domaine depuis sa [zone DNS](/pages/web_cloud/domains/dns_zone_edit) afin que l'ajout puisse être finalisé.|
>>
>> Une fois les informations complétées, cliquez sur le bouton `Suivant`{.action}.
>>
> **Étape 7**
>>
>> Vérifiez ensuite le récapitulatif qui s'affiche.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Tout ajout d'un nom de domaine externe à OVHcloud nécessite une validation supplémentaire obligatoire. Cela nous permet de nous assurer que l'ajout du domaine externe est légitime. Un message vous invitera donc à modifier la configuration DNS du nom de domaine.
>>
>> Notez les éléments qui s’affichent, puis cliquez sur le bouton `Valider`{.action}. Dès lors, le nom de domaine est ajouté de manière temporaire, le temps que vous puissiez modifier sa configuration DNS.
>>
>> > [!warning]
>> >
>> > Vous devez **rapidement** effectuer ces modifications pour que votre nom de domaine soit correctement ajouté. Dans le cas contraire, l'ajout de votre nom de domaine sera annulé.
>> >
>> > Les entrées DNS de type **A** et **TXT** doivent obligatoirement être placées dans la zone DNS active de votre nom de domaine pour qu'il soit ajouté à votre site web. Seules les entrées DNS de type **AAAA** sont optionnelles.
>> >
>> > Notez que si vous souhaitez ajouter `sub.domain.tld`, vous devrez créer l'entrée TXT `ovhcontrol.domain.tld` et non l'entrée `ovhcontrol.sub.domain.tld`.
>> > Pour retrouver cette dernière, retrouvez les [serveurs DNS](/pages/web_cloud/domains/dns_server_edit) auxquels votre nom de domaine est lié. Vous devrez valider uniquement le nom de domaine, pas tous ses sous-domaines.|

### Offre e-mail incluse avec votre hébergement web

La plupart des offres d'[hébergement web OVHcloud](/links/web/hosting) disposent d'une option incluse de création d'adresses e-mail personnalisées avec votre nom de domaine.

Cette option e-mail peut être activée pour **un seul** nom de domaine. Cela signifie que si vous hébergez plusieurs sites web avec plusieurs noms de domaine différents sur votre hébergement web, vous ne pourrez activer cette option que pour un seul de vos noms de domaine.

N'hésitez pas à consulter [notre guide dédié](/pages/web_cloud/web_hosting/activate-email-hosting) pour plus de détails sur l'activation de cette option.

## Aller plus loin

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Mettre en ligne un site web sur son hébergement web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).