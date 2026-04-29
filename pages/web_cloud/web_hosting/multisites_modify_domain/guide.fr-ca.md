---
title: 'Hébergement web - Modifier un nom de domaine déjà associé à un hébergement'
excerpt: "Découvrez comment modifier les paramètres d'association d'un nom de domaine/sous-domaine déjà déclaré sur votre offre d'hébergement web"
updated: 2026-05-04
---

## Objectif

Lors de l'utilisation de votre hébergement web ou de la mise à jour de votre site web, vous pouvez être amené à modifier des paramètres de votre nom de domaine ou de votre sous-domaine déjà associé à votre hébergement web.

> [!primary]
>
> Ce guide explique uniquement comment modifier un nom de domaine ou un sous-domaine déjà déclaré sur un hébergement web OVHcloud.
>
> - Pour associer un nouveau nom de domaine ou sous-domaine à votre site web présent sur votre hébergement web, consultez notre guide « [Comment associer un nom de domaine à un site web existant ?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website) ».
> - Pour ajouter un nouveau site web sur votre hébergement web, consultez notre guide « [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».

**Découvrez comment modifier les paramètres d'association d'un nom de domaine/sous-domaine déjà déclaré sur votre offre d'hébergement web.**

## Prérequis

- Disposer d'une offre [d'hébergement web OVHcloud](/links/web/hosting).
- Disposer d'un ou plusieurs [noms de domaine](/links/web/domains).
- Disposer des droits suffisants sur l’ensemble des services concernées. Retrouvez plus d'informations sur notre guide « [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts) ».

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
> La modification des paramètres d'association d'un nom de domaine ou d'un sous-domaine peut, en cas de mauvaise manipulation, entraîner une interruption d'accès à vos services (votre site web). Si vous avez des doutes sur les modifications à réaliser, n'hésitez pas à faire appel à un prestataire spécialisé.

<!-- CP-STEPS-START:modify-domain-settings -->
Pour modifier les paramètres d'association d'un nom de domaine ou d'un sous-domaine déjà déclaré sur votre offre d'hébergement web, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

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
>> La fenêtre suivante s'affiche : 
>>
>> ![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}
>>
>> Dans la suite de ce guide, vous trouverez un descriptif de chacun des paramètres disponibles dans la fenêtre ci-dessus. Suite à la lecture des différentes descriptions présentes dans la partie « [Description des paramètres modifiables](#step1) » et une fois vos modifications faites, cliquez sur le bouton `Suivant`{.action} situé en bas à droite de la fenêtre, puis passez à la [partie 2](#step2).
<!-- CP-STEPS-END:modify-domain-settings -->

### 1 - Description des paramètres modifiables <a name="step1"></a>

<!-- CP-STEPS-START:description-editable-parameters -->
> [!primary]
>
> Les champs `Nom du domaine`{.action} et `Dossier racine`{.action} ne sont pas modifiables, car il s'agit de paramètres relatifs au site web présent sur votre hébergement web.
>
> - Pour associer un nouveau nom de domaine ou sous-domaine à un site web présent sur votre hébergement web, consultez notre guide « [Comment associer un nom de domaine à un site web existant ?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website) ».
> - Pour changer le dossier racine de votre site web, consultez notre guide « [Comment modifier le dossier racine d'un site web existant ?](/pages/web_cloud/web_hosting/my_websites_modify_root_folder) ».

#### Option « Activer CDN »

Pour pouvoir utiliser cette option, vous devez avoir au préalable souscrit à une offre CDN OVHcloud ou disposer d'une offre d'hébergement web Performance.

Cochez/décochez cette case afin d'activer/désactiver l'option CDN pour votre nom de domaine ou votre sous-domaine.

Retrouvez plus d'informations sur les options/offres CDN disponibles dans notre documentation dédiée « [Accélérer mon site web en utilisant le CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) ».

#### Option « Activer le firewall »

Cette option permet de filtrer les requêtes entrantes pour protéger votre hébergement web des attaques les plus courantes.

Retrouvez plus d'informations sur cette option dans notre documentation dédiée « [Activation du pare-feu applicatif](/pages/web_cloud/web_hosting/multisites_activating_application_firewall) ».

#### Option « Logs séparés »

Cochez/décochez cette option uniquement si vous souhaitez séparer les logs de votre nom de domaine des autres noms de domaines déclarés en parallèle sur votre hébergement web.

Concernant cette option, apprenez-en plus grâce à notre [page sur les statistiques détaillées](/links/web/hosting-traffic-analysis).

Une fois vos modifications faites, cliquez sur le bouton `Suivant`{.action} situé en bas à droite de la fenêtre afin de passer à la [partie 2](#step2).


<!-- CP-STEPS-END:description-editable-parameters -->

### 2 - Résumé des modifications <a name="step2"></a>

<!-- CP-STEPS-START:confirm-domain-changes -->
Une fois que vous avez cliqué sur le bouton `Suivant`{.action}, vous retrouvez un résumé des paramètres que vous vous apprêtez à appliquer à votre nom de domaine :

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Si l'ensemble des paramètres sont configurés selon vos souhaits, cliquez sur le bouton `Confirmer`{.action}.
<!-- CP-STEPS-END:confirm-domain-changes -->

En fonction des options sélectionnées, les modifications peuvent prendre de quelques minutes à quelques heures à être appliquées.

Si, pour les options **CDN**, **IP du pays** et **logs séparés**, les modifications ne sont pas prises en compte au bout de 24 heures, nous vous invitons à consulter les guides (et pages) respectifs indiqués pour l'ensemble des options décrites dans la [partie 1](#step1), afin de vérifier que toutes les conditions requises ont bien été suivies, respectées et réalisées.

## Aller plus loin

[Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Accélérer mon site web en utilisant le CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).

[Activer le pare-feu applicatif](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
