---
title: Geolocaliser votre site web dans un pays spécifique
excerpt: "Découvrez comment géolocaliser votre site web à l'aide de nos adresses IP géolocalisées"
updated: 2022-12-22
---

 
## Objectif

Les moteurs de recherche (Google, Bing, Yahoo, ...) utilisent des robots d'indexation et de référencement sur l'ensemble des sites web. Ils référencent en priorité les sites géolocalisés dans le pays depuis lequel vous effectuez votre recherche.

**Exemple**: Si vous lancez une recherche via un moteur de recherche et que vous vous situez en Angleterre, les sites web géolocalisés en Angleterre s'afficheront plus haut dans les résultats de recherche que les autres sites web.

Cette géolocalisation est basée sur l'adresse IP de l'hébergement où se trouve votre site web.

L'option de géolocalisation sur votre hébergement peut être utile pour le référencement (SEO) si votre site web a pour vocation d'être principalement consulté dans un pays différent de celui où se situe votre hébergement mutualisé.

**Découvrez comment géolocaliser votre site web à l'aide de nos adresses IP géolocalisées.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Disposer d'un [hébergement mutualisé OVHcloud](/links/web/hosting)
- Disposer d'un [nom de domaine](/links/web/domains)

## En pratique

Pour les sites web principalement consultés à l'étranger et hébergés sur notre infrastructure d'hébergements mutualisés OVHcloud, nous proposons une option de géolocalisation par adresse IP. Elle permet de mieux référencer les sites web dans le pays où se situe l'adresse IP choisie avec l'option.

Pour utiliser l'option de géolocalisation par IP, connectez-vous à votre [espace client OVHcloud](/links/manager){.external}.

Une fois connecté, rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez l'hébergement concerné dans la liste.<br>
Cliquez ensuite sur l'onglet `Multisite`{.action} puis sur le bouton `...`{.action} situé à droite de votre nom de domaine dans le tableau. Enfin, cliquez sur `Modifier le domaine`{.action}.

![hosting multisites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain.png){.thumbnail}

Dans la nouvelle fenêtre qui s'affiche, cochez la case `IP du pays`{.action} pour faire apparaître le menu déroulant.

![geolocation option](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/country-ip-selection.png){.thumbnail}

Choisissez l'adresse IP du pays pour lequel vous souhaitez géolocaliser votre site, parmi les 12 pays proposés : *République Tchèque, Finlande, France, Allemagne, Irlande, Italie, Littuanie, Pays-bas, Pologne, Portugal, Espagne, Royaumes-Uni*.

Cliquez sur `Suivant`{.action} puis sur `Valider`{.action} depuis la fenêtre récapitulative.

>[!primary]
>
> Si la zone DNS active de votre nom de domaine est entièrement gérée dans votre [espace client OVHcloud](/links/manager), l'entrée de type A dans la zone DNS de votre nom de domaine se changera automatiquement. Vous pouvez vérifier que l'adresse IP a bien été mise à jour à l'aide de notre guide sur [l'édition d'une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
>
> Dans le cas contraire, vous devrez effectuer la modification manuellement auprès du fournisseur qui gère la zone DNS active de votre nom de domaine. Retrouvez [ici](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) la documentation qui recense toutes les adresses IP de notre infrastructure d'hébergements mutualisés OVHcloud.
>
> Dans tous les cas, un délai de propagation de **4 à 24 heures** après la modification sera nécessaire pour que celle-ci soit pleinement effective et visible sur Internet.
>

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).