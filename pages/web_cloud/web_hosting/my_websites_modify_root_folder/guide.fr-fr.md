---
title: "Comment modifier le dossier racine d'un site web existant ?"
excerpt: "Découvrez comment modifier le dossier racine déclaré pour un site web déjà existant sur votre hébergement web depuis votre espace client OVHcloud"
updated: 2026-05-04
---

## Objectif

Vous pouvez héberger plusieurs sites web sur une même offre d'hébergement web, même si les noms de domaine ne sont pas enregistrés chez OVHcloud. De plus, vous pouvez associer un ou plusieurs noms de domaine ou sous-domaines à un même site web.

En utilisant vos services, vous pouvez être amené à :

- remplacer l'intégralité du contenu d'un site web existant, sans le supprimer de votre hébergement web. Le tout réalisé sans interruption d'accès et en toute transparence pour les visiteurs de votre site web.
- installer un [module en 1 clic](/pages/web_cloud/web_hosting/cms_install_1_click_modules) ou un [autre CMS](/pages/web_cloud/web_hosting/cms_manual_installation) pour remplacer le contenu d'un site web existant, sans supprimer l'ancien contenu de votre hébergement web. Dans ce cas précis, vous devez ensuite construire les différentes pages de votre nouveau site web via votre navigateur Internet.
- réorganiser les noms des dossiers racines de vos sites web dans l'espace de stockage de votre hébergement web sans couper l'accès à vos différents sites web.

**Découvrez comment modifier le dossier racine déclaré pour un site web déjà existant sur votre hébergement web depuis votre espace client OVHcloud.**

> [!primary]
> Cette procédure s'applique à la [nouvelle version de l'espace client OVHcloud](/links/control-panel-ovhcloud), actuellement disponible en bêta. Pour la suivre, basculez vers cette interface depuis votre espace client habituel.
>
> Si vous n'avez pas encore créé le site web concerné sur votre hébergement web, consultez **directement** [ce guide](/pages/web_cloud/web_hosting/multisites_configure_multisite).
>
> Si votre site web dispose d'une configuration avec Git, consultez préalablement notre guide « [Configurer et utiliser Git avec son hébergement web OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting) » pour supprimer l'association avec Git **avant** de poursuivre. En effet, la modification du dossier racine déclaré pour un site web est indisponible si votre site web est configuré avec Git. Si tel était le cas, le changement de dossier racine perturberait l'association avec Git.

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting-multisite) compatible.
- Disposer d'un ou de plusieurs [noms de domaine](/links/web/domains).

<!-- CP-NAV-START:web-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergements](/links/control-panel/web-hosting-sites)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Hébergements`{.action} > `Sites`{.action} > Sélectionnez votre hébergement web

---
<!-- CP-NAV-END:web-hosting -->

## En pratique

> [!warning]
> Ce guide présente exclusivement les actions à réaliser depuis votre [espace client OVHcloud](/links/manager).
>
> À l'exception du cas où vous souhaitez installer un module en 1 clic pour construire le site web progressivement, vous devrez au préalable :
>
> - créer le nouveau dossier racine dans [l'espace de stockage](/pages/web_cloud/web_hosting/ftp_connection) de votre hébergement web.
> - placer l'intégralité du nouveau contenu de votre site web à l'intérieur de ce nouveau dossier.
> - Si le nouveau contenu de votre site web fonctionne avec une base de données, vous devrez également [créer une base de données](/pages/web_cloud/web_hosting/sql_create_database), puis y [importer le contenu relatif à cette base de données](/pages/web_cloud/web_hosting/sql_importing_mysql_database).
> - placer les identifiants d'accès à la base de données dans le fichier contenant les informations de connexion à la base de données. Ce fichier doit déjà être présent dans le nouveau dossier racine.
>
> **Sans ces actions, l'affichage de votre site web sera interrompu**.
>
> En effet, la suite de ce guide décrit uniquement la procédure permettant de modifier, depuis votre espace client OVHcloud, le dossier racine initialement défini pour votre site web. Cette action est obligatoire afin que le site web affiche le contenu du nouveau dossier, en remplacement de l'ancien.

Cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting-sites), puis choisissez l'hébergement web concerné.
>>
>> ![Hébergements](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-sites.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![Mes sites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-sites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, cliquez sur le bouton `⁝`{.action} situé à droite du site web concerné, puis sur `Modifier le site`{.action}.
>>
>> ![Options du site](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Étape 4**
>>
>> Dans la fenêtre qui s'ouvre et dans le formulaire **Dossier racine**, remplacez l'ancien dossier racine par le nouveau.
>>
>> ![Modifier le dossier racine](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/edit-site-folder.png){.thumbnail}
>>
>> Cliquez ensuite sur `Confirmer`{.action}.
>>

## Aller plus loin

[Mettre en ligne un site web sur son hébergement web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).