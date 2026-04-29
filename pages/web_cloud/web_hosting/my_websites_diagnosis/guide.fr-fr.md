---
title: "Comment vérifier l'association « nom de domaine / site web » ?"
excerpt: "Utilisez notre outil de diagnostic pour vérifier que votre nom de domaine ou sous-domaine est bien déclaré avec votre site web sur votre hébergement web"
updated: 2026-05-04
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

**Utilisez notre outil de diagnostic pour vérifier que votre nom de domaine ou sous-domaine est bien déclaré avec votre site web sur votre hébergement web.**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting-multisite) compatible.
- Disposer d'un ou de plusieurs [noms de domaine](/links/web/domains).
- Pouvoir modifier la configuration de vos noms de domaine depuis la [zone DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergements](/links/control-panel/web-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Hébergements`{.action} > Sélectionnez votre hébergement web

---
<!-- CP-NAV-END:web-hosting -->

## En pratique

### Accéder à l'outil de diagnostic

<!-- CP-STEPS-START:diagnose-website -->
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
> **Étape 4**
>>
>> Les noms de domaine ou sous-domaines associés à votre site web apparaissent. 
>>
>> ![Domains associated websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab-with-domains-associated-displayed.png){.thumbnail}
>>
>> La colonne `Diagnostic` vous informe si votre nom de domaine pointe correctement vers l'hébergement web associé. Elle permet de vérifier rapidement que la configuration DNS de votre nom de domaine est correctement effectuée avec votre hébergement web. Ainsi, cette colonne vous aide à identifier et à résoudre d'éventuels problèmes de pointage. Pour chaque nom de domaine, trois résultats de diagnostic sont possibles :
>>
>> - `A/AAAA` vert.
>> - `A/AAAA` jaune.
>> - `A/AAAA` gris.
>>
>> Consultez la partie « [Interprétation des couleurs de l'outil de diagnostic](#interpretation) » de ce guide pour connaître la signification de ces 3 couleurs.
<!-- CP-STEPS-END:diagnose-website -->

<!-- CP-STEPS-START:diagnostic-status-interpretation -->
### Interprétation des couleurs de l'outil de diagnostic <a name="interpretation"></a>

**Cliquez sur les indicateurs d'état correspondants ci-dessous pour voir leurs explications.**

/// details | A/AAAA vert

![A and AAAA green](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-green-info.png){.thumbnail}

Lorsque l'icône `A/AAAA` est verte dans la colonne `Diagnostic`, cela signifie que l'enregistrement **A** (pour les adresses IPv4) et/ou l'enregistrement **AAAA** (pour les adresses IPv6) de votre nom de domaine pointe correctement vers l'adresse IP de votre hébergement web. La configuration DNS de votre nom de domaine est donc conforme pour fonctionner avec le site web de votre hébergement web.

/// 

/// details | A/AAAA jaune

![A and AAAA yellow](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-yellow-info.png){.thumbnail}

Lorsque l'icône `A/AAAA` est jaune dans la colonne `Diagnostic`, cela signifie que l'enregistrement **A** (IPv4) et/ou **AAAA** (IPv6) de votre nom de domaine pointe vers une adresse IP, mais qu'il ne s'agit pas de celle de l'hébergement web depuis lequel vous consultez la colonne `Diagnostic`.

Pour résoudre les problèmes de pointage DNS de votre nom de domaine et vous assurer qu'il pointe correctement vers l'hébergement web souhaité, suivez les étapes décrites dans notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

/// 

/// details | A/AAAA gris

![A and AAAA grey](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/diagnostic-grey-info.png){.thumbnail}

Lorsque l'icône `A/AAAA` est grise dans la colonne `Diagnostic`, cela signifie que le nom de domaine ne pointe actuellement vers aucune adresse IP et qu'aucun enregistrement **A** (IPv4) ou **AAAA** (IPv6) n'est configuré pour ce nom de domaine.

Pour ajouter les enregistrements **A** et/ou **AAAA** et configurer correctement votre nom de domaine, suivez les étapes décrites dans notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

///

<!-- CP-STEPS-END:diagnostic-status-interpretation -->

## Aller plus loin

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Mettre en ligne un site web sur son hébergement web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
