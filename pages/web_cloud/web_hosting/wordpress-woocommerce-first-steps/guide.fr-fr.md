---
title: "Tutoriel - Utiliser WooCommerce avec le CMS WordPress"
excerpt: "Découvrez comment utiliser la solution WooCommerce avec le CMS WordPress"
updated: 2023-02-23
---

## Objectif

Découvrez comment créer une boutique en ligne avec l'extension open source **WooCommerce** avec le Content Management System (CMS) **WordPress**. 

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner), à [l'éditeur du CMS WordPress](https://wordpress.com/fr/support/){.external} ou à [l'éditeur de WooCommerce](https://woocommerce.com/){.external} si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce tutoriel.
>

## Prérequis

- Disposer d'une offre d'[hébergement web](/links/web/hosting) qui contient au moins une base de données.
- Disposer d'un [nom de domaine](/links/web/domains).
- Avoir préalablement [installé WordPress](/pages/web_cloud/web_hosting/cms_install_1_click_modules) sur votre hébergement web.

Si ce n'est pas déjà le cas, nous vous recommandons de passer votre site en HTTPS avant de poursuivre ce tutoriel à l'aide du guide « [Passer son site internet en HTTPS grâce au SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website) ».

## En pratique

**WooCommerce** est une extension de **WordPress**. Elle s'installe comme n'importe quelle extension.

### Installation

Connectez-vous sur votre interface d'administration en tapant `/wp-admin` ou `/wp-login` dans votre barre de recherche après l'URL de votre nom de domaine (la redirection se fait automatiquement) :

![Admin page of WordPress](/pages/assets/screens/other/cms/wordpress/woocommerce/admin-login.png){.thumbnail}

Dans le menu de gauche, rendez-vous dans `Extensions`{.action} puis cliquez sur `Ajouter`{.action} :

![Dashboard, Plugins, Add new](/pages/assets/screens/other/cms/wordpress/woocommerce/plugins.png){.thumbnail}

Sur la nouvelle page `Ajouter des extensions`{.action}, saisissez « woocommerce » dans la barre de recherche en haut à droite puis cliquez sur `Installer maintenant`{.action} dans l'encadré lié à l'extension **WooCommerce** :

![Install WooCommerce](/pages/assets/screens/other/cms/wordpress/woocommerce/add-plugin-woocommerce-install-now.png){.thumbnail}

Cliquez maintenant sur `Activer`{.action} :

![Activate WooCommerce](/pages/assets/screens/other/cms/wordpress/woocommerce/add-plugin-woocommerce-activate.png){.thumbnail}

### Configuration 

#### Méthode n°1 - utilisation de l'assistant de configuration

Si vous n'avez pas encore paramétré votre extension **WooCommerce**, un assistant de configuration vous aide à renseigner les informations relatives à votre site de vente en ligne. Renseignez le formulaire puis cliquez sur `Continuer`{.action} :

![Setup Wizard - Store Details](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-store-details.png){.thumbnail}

Sélectionnez ensuite votre (ou vos) domaine(s) d'activité :

![Setup Wizard - Industry](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-industry.png){.thumbnail}

Choisissez le type de produits que vous souhaitez vendre sur votre site web (certaines options sont payantes) :

![Setup Wizard - Product Types](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-product-types.png){.thumbnail}

Précisez ensuite la nature de votre activité :

![Setup Wizard - Business Details](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-business-details.png){.thumbnail}

Ajoutez des fonctionnalités optionnelles (et gratuites) si vous le souhaitez :

![Setup Wizard - Business Details, free features](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-business-details-2.png){.thumbnail}

Enfin, choisissez un thème parmi ceux proposés :

![Setup Wizard - Choose a theme](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-theme.png){.thumbnail}

**WooCommerce** vous sollicite alors pour créer un compte afin d'utiliser l'extension **Jetpack**, extension installée automatiquement en plus de l'extension **WooCommerce**. Cette création de compte est facultative, vous aurez accès aux fonctions limitées de **Jetpack** sans avoir à vous authentifier.

Votre boutique en ligne est désormais configurée avec les paramètres généraux.

#### Méthode n°2 - configuration manuelle

Cliquez sur `Extensions`{.action} pour lister les extensions installées puis sur `Extensions installées`. La liste de vos extensions s'affiche. Cliquez sur `Réglages`{.action} dans le module **WooCommerce** :

![Setup Wizard - Extension, WooCommerce, Settings](/pages/assets/screens/other/cms/wordpress/woocommerce/plugins-woocommerce.png){.thumbnail}

Vous avez également accès à ces réglages en cliquant directement sur `WooCommerce`{.action} puis sur `Réglages`{.action} :

![Setup Wizard - WooCommerce, Settings](/pages/assets/screens/other/cms/wordpress/woocommerce/dashboard-woocommerce-settings.png){.thumbnail}

### Réglages

La page de réglages comprend plusieurs onglets :

![Setup Wizard - WooCommerce, Settings, Tabs](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-general.png){.thumbnail}

#### Général

Cet onglet vous permet de définir les éléments suivants :

- adresse de l'entreprise
- zones de vente et de livraison
- localisation par défaut du client (optionnel)
- activation/désaction des taxes
- coupons
- données monétaires (devise du site, affichage).

![Setup Wizard - WooCommerce, Settings, General tab](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-general-currency.png){.thumbnail}

#### Produits

La gestion de produits se fait via un ensemble de sous-rubriques :

- **Général** : sert à définir des éléments tels que la page d'accueil qui sera affichée par défaut (boutique, mentions légales, panier, etc.), les unités de mesure, la possibilité ou non de mettre des commentaires à propos des produits ou des notes.
- **Inventaire** : sert à paramétrer ou non la gestion de votre stock et à configurer le comportement du site web (stock décrémenté lorsqu'un objet est dans le panier, seuils d'alerte, possibilité de masquer les produits qui ne sont plus en stock).
- **Produits téléchargeables** : concerne les cas de mise à disposition de documents à télécharger par les utilisateurs.
- **Répertoires de téléchargement approuvés** : précise le ou les répertoires sur le serveur où les fichiers seront téléversés.
- **Avancé** : sert à paramétrer plus finement les attributs des produits.

#### Expédition

Si vous avez activé les extensions par défaut proposées gratuitement lors de l'installation, vous disposez de l'extension [WooCommerce Shipping](https://woocommerce.com/fr-fr/woocommerce-shipping/){.external}. Dans le cas contraire, vous pouvez procéder à son installation en vous rendant dans le menu `Extensions`{.action}.

- **Zones d'expédition** : permet de définir et configurer des zones d'expédition.
- **Options de livraison** : sert à paramétrer l'application pour tout ce qui est relatif aux frais d'expédition.
- **Classes d'expédition** : peuvent être utilisées pour grouper des produits similaires par type d'envoi.

#### Paiements

Cet onglet sert à activer/désactiver les moyens de paiement proposés sur votre site web. Reportez-vous à la [documentation officielle](https://woocommerce.com/document/payments/) pour configurer votre ou (vos) moyen(s) de paiement.

#### Comptes et confidentialité

Cette rubrique regroupe toutes les fonctionnalités relatives à la gestion des comptes et des données personnelles.

#### E-mails

Permet de configurer les *e-mails types* envoyés par l'application (inscription, commandes, annulations de commande, etc.).

#### Intégration

Pour géolocaliser vos clients en fonction de leur adresse IP, vous pouvez, dans cette sous-rubrique, entrer la clé de licence de [MaxMind](https://www.maxmind.com/){.external}, service payant de géolocalisation.

#### Avancé

- **Installation des pages** : utile pour modifier les pages vers lesquelles seront redirigés les utilisateurs lors du processus de commande.
- **API REST** : rubrique permettant de configurer et paramétrer les accès à WooCommerce via son API REST.
- **Webhook** : gérer vos fonctions de rappel HTTP.
- **Ancienne API** : réactiver l'ancienne API de WooCommerce (désactivée par défaut).
- **WooCommerce.com** : activer ou désactiver le tracking de l'activité de votre site de vente en ligne par WooCommerce, avoir des suggestions pour des extensions dédiées (la majorité sont payantes).
- **Fonctionnalités** : page regroupant les fonctionnalités en test sur WooCommerce ou récemment ajoutées.

## Aller plus loin <a name="go-further"></a>

Quelques liens utiles :

- Le [site officiel WordPress](https://wordpress.org){.external}.
- L'extension [Jetpack](https://jetpack.com/){.external}
- Le site de [WooCommerce](https://woocommerce.com/){.external}
- Le magasin d'[extensions WooCommerce](https://woocommerce.com/products/){.external}

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).