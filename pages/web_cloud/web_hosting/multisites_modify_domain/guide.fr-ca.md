---
title: 'Hébergement web - Modifier un nom de domaine déjà associé à un hébergement'
excerpt: "Découvrez comment modifier les paramètres d'association d'un nom de domaine/sous-domaine déjà déclaré sur votre offre d'hébergement web"
updated: 2024-09-04
---

## Objectif

Lors de l'utilisation de votre hébergement web ou de la mise à jour de votre site web, vous pouvez être amené à modifier des paramètres de votre nom de domaine ou de votre sous-domaine déjà associé à votre hébergement web.

> [!primary]
>
> Ce guide explique uniquement comment modifier un nom de domaine ou un sous-domaine déjà déclaré sur un hébergement web OVHcloud. Si vous souhaitez associer un nouveau nom de domaine/sous-domaine à votre hébergement web, consultez notre guide « [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».
>

**Découvrez comment modifier les paramètres d'association d'un nom de domaine/sous-domaine déjà déclaré sur votre offre d'hébergement web.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Disposer d'une offre [d'hébergement web OVHcloud](/links/web/hosting).
- Disposer d'un ou plusieurs [noms de domaine](/links/web/domains).
- Disposer des droits suffisants sur l’ensemble des services concernées. Retrouvez plus d'informations sur notre guide « [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts) ».

## En pratique

> [!warning]
>
> La modification des paramètres d'association d'un nom de domaine ou d'un sous-domaine peut, en cas de mauvaise manipulation, entraîner une interruption d'accès à vos services (votre site web). Si vous avez des doutes sur les modifications à réaliser, n'hésitez pas à faire appel à un prestataire spécialisé
>

Pour modifier les paramètres d'association d'un nom de domaine ou d'un sous-domaine déjà déclaré sur votre offre d'hébergement web, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, cliquez sur l'onglet `Multisite`{.action}.
6. Dans le tableau qui apparaît en dessous de l'onglet et à droite du nom de domaine/sous-domaine concerné, cliquez sur le bouton `...`{.action}, puis sur `Modifier le domaine`{.action}.

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

La fenêtre suivante s'affiche : 

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}

Dans la suite de ce guide, vous trouverez un descriptif de chacun des paramètres disponibles dans la fenêtre ci-dessus. Suite à la lecture des différentes descriptions ci-dessous et une fois vos modifications faites, cliquez sur le bouton `Suivant`{.action} situé en bas à droite de la fenêtre, puis passez à l'[étape 2](#step2).

### Étape 1 - Description des paramètres modifiables <a name="step1"></a>

> [!primary]
>
> Le formulaire `Nom du domaine`{.action} n'est pas modifiable car il s'agit d'une modification des paramètres du nom de domaine associé à l'hébergement web. Si l'action souhaitée consiste à associer un nouveau nom de domaine/sous-domaine à votre hébergement web, consultez notre guide « [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».
>

#### Modifier le « dossier racine »

> [!warning]
> **Cas particulier : configuration avec Git**
>
> Pour modifier le `Dossier racine`{.action} déclaré pour votre nom de domaine et si une configuration existe avec Git pour ce même nom de domaine, vous devrez d'abord supprimer cette configuration.
>
> Si une configuration existe avec Git, un message apparaîtra juste en dessous du formulaire :
>
> ![Modify domain associed with git](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled-git-message.png){.thumbnail}
>
> Pour supprimer la configuration Git d'un nom de domaine/sous-domaine associé à votre hébergement, consultez notre guide « [Configurer et utiliser Git avec son hébergement web OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting) ».
>

Le formulaire `Dossier racine`{.action} indique le nom du dossier contenant les éléments qui s'affichent avec votre nom de domaine. Cela peut être, par exemple, un dossier qui contient les fichiers de votre site web.

Au cours de l'utilisation de vos services, vous pouvez être amené à devoir changer le `Dossier racine`{.action} déclaré pour votre nom de domaine. Cela peut survenir lorsque, par exemple :

- Vous avez développé un nouveau site web dans un nouveau dossier présent dans l'espace de stockage FTP de votre hébergement web. 
- Vous souhaitez rediriger votre nom de domaine vers un dossier vide pour ensuite y placer un nouveau site web.
- Etc.

C'est donc dans ce formulaire que vous devrez remplacer le nom du dossier pré-rempli par le nom du nouveau dossier souhaité.

> [!success]
>
> Si vous renseignez un nom de dossier inexistant dans l'espace de stockage FTP de votre hébergement web, celui-ci sera automatiquement créé par nos robots dans votre espace de stockage FTP.
>

#### Autres options disponibles

##### L'option « SSL »

Cochez/décochez cette case uniquement si vous souhaitez activer/désactiver le SSL gratuit **Let's Encrypt** pour votre nom de domaine/sous-domaine. Il n'est pas nécessaire de cocher cette case pour les autres offres SSL proposées chez OVHcloud.

Retrouvez plus d'informations sur les options/offres SSL disponibles dans notre documentation dédiée « [Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting) ».

##### L'option « Activer CDN »

Pour pouvoir utiliser cette option, vous devez avoir au préalable souscrit à une offre CDN OVHcloud ou disposer d'une offre d'hébergement web Performance.

Cochez/décochez cette case afin d'activer/désactiver l'option CDN pour votre nom de domaine ou votre sous-domaine.

Retrouvez plus d'informations sur les options/offres CDN disponibles dans notre documentation dédiée « [Accélérer mon site web en utilisant le CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) ».

##### L'option « Activer le firewall »

Cette option permet de filtrer les requêtes entrantes pour protéger votre hébergement web des attaques les plus courantes.

Retrouvez plus d'informations sur cette option dans notre documentation dédiée « [Activation du pare-feu applicatif](/pages/web_cloud/web_hosting/multisites_activating_application_firewall) ».

##### L'option « Logs séparés »

Cochez/décochez cette option uniquement si vous souhaitez séparer les logs de votre nom de domaine des autres noms de domaines déclarés en parallèle sur votre hébergement web.

Concernant cette option, apprenez-en plus grâce à notre [page sur les statistiques détaillées](/links/web/hosting-traffic-analysis).

Une fois vos modifications faites, cliquez sur le bouton `Suivant`{.action} situé en bas à droite de la fenêtre afin de passer à l'[étape 2](#step2).

### Étape 2 - Résumé des modifications <a name="step2"></a>

Une fois que vous avez cliqué sur le bouton `Suivant`{.action}, vous retrouvez un résumé des paramètres que vous vous apprêtez à appliquer à votre nom de domaine :

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Si l'ensemble des paramètres sont configurés selon vos souhaits, cliquez sur le bouton `Confirmer`{.action}.

En fonction des options sélectionnées, les modifications peuvent prendre de quelques minutes à quelques heures à être appliquées.

Si, pour les options **SSL**, **CDN**, **IP du pays** et **logs séparés**, les modifications ne sont pas prises en compte au bout de 24 heures, nous vous invitons à consulter les guides (et pages) respectifs indiqués pour l'ensemble des options décrites dans l'[étape 1](#step1), afin de vérifier que toutes les conditions requises ont bien été suivies, respectées et réalisées.

## Aller plus loin

[Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Accélérer mon site web en utilisant le CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).

[Activer le pare-feu applicatif](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).