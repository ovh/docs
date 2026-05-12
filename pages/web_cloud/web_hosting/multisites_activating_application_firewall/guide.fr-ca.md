---
title: "Activation du pare-feu applicatif"
excerpt: "Découvrez comment activer le pare-feu applicatif sur une offre d'hébergement Web"
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

*ModSecurity* est un module Apache complémentaire qui filtre toutes les requêtes entrantes sur votre serveur Web. Il renforce la sécurité contre les vulnérabilités connues en interceptant et en filtrant les demandes avant qu'elles ne soient traitées par des scripts.

L'ensemble préconfiguré de règles de base, le « Core Rule Set » (CRS), de notre *ModSecurity* protège vos sites Web contre les attaques les plus courantes, par exemple :

- Trojans
- Injections d'emails
- Failles des fichiers PDF
- Injections de fichiers sur votre hébergement
- Injections de type SQL ou XSS
- etc.

**Découvrez comment activer le pare-feu applicatif depuis votre espace client OVHcloud, afin d'obtenir une protection améliorée.**

> [!primary]
>
> Du fait que votre hébergement web est présent sur une infrastructure mutualisée, vous ne pouvez pas modifiez les paramètres de configuration du pare-feu.

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting).
- Disposer d'au moins un [nom de domaine](/links/web/domains) attaché à l'hébergement.

<!-- CP-NAV-START:web-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergements](/links/control-panel/web-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Hébergements`{.action} > Sélectionnez votre hébergement web

---
<!-- CP-NAV-END:web-hosting -->

## En pratique

**Cliquez sur les titres ci-dessous pour afficher les explications.**

/// details | Activer le pare-feu applicatif sur l'ensemble de votre hébergement web dans la configuration PHP

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
>> Dans le cadre **Configuration**, vous trouverez la mention **Version PHP Globale**.
>>
>> ![Global PHP version](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration.png){.thumbnail}
>>
>> Cliquez sur le bouton `...`{.action} à droite de la mention **Version PHP Globale**, puis sur `Modifier la configuration`{.action}.
>>
> **Étape 3**
>>
>> Dans la fenêtre qui s'ouvre, sélectionnez l'élément `Modifier la configuration courante`{.action} et cliquez sur le bouton `Suivant`{.action}.
>>
>> ![managephpconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/application-firewall-step-2.png){.thumbnail}
>>
>> Dans la nouvelle fenêtre, assurez-vous que l'option **Pare-feu applicatif** est définie sur `Activé`{.action}. Cliquez ensuite sur le bouton `Valider`{.action}.

///

/// details | Activer le pare-feu applicatif uniquement sur un nom de domaine ou un sous-domaine spécifique

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
>> Cliquez ensuite sur le bouton `⁝`{.action} situé à droite du nom de domaine ou sous-domaine concerné, puis sur `Modifier le domaine`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Étape 4**
>>
>> Dans la fenêtre de configuration, cochez la case `Activer le pare-feu`{.action}. Vous pouvez également inclure le sous-domaine `www` dans cette configuration en cochant la case correspondante en haut (si ce dernier est également déclaré sur le même site web).
>>
>> ![Modify a domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-enable-firewall-step-1.png){.thumbnail}
>>
>> Cliquez sur `Suivant`{.action}, puis sur `Confirmer`{.action} pour valider la modification des paramètres.
>>
>> Une fois le pare-feu activé pour votre nom de domaine ou sous-domaine, la mention **Activé** apparaît dans la colonne **Firewall**.
>>
>> Si la mention **Activé** n'apparaît pas au bout de quelques minutes sur la ligne correspondante au nom de domaine ou sous-domaine concerné, rechargez la page.

///

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
