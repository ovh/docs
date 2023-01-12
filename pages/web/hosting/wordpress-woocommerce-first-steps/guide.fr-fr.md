---
title: "Tutoriel - Utiliser WooCommerce avec le CMS WordPress"
slug: wordpress-woocommerce-first-steps
excerpt: "Découvrez comment utiliser la solution WooCommerce avec le CMS WordPress"
section: "Tutoriels"
order: 
---

**Dernière mise à jour le 12/01/2023**

## Objectif

Ce tutoriel explique comment créer une boutique en ligne avec l'extension open source **WooCommerce** avec le Customer Managment System (CMS) **WordPress**. 

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) à [l'éditeur du CMS WordPress](https://wordpress.com/fr/support/){.external} ou à [l'éditeur de WooCommerce](https://woocommerce.com/){.external} si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

## Prérequis

- Disposer d'une offre d'[hébergement web](https://www.ovhcloud.com/fr/web-hosting/) qui contient au moins une base de données.
- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/)
- Avoir préalablement [installé Wordpress](https://docs.ovh.com/fr/hosting/modules-en-1-clic/) sur votre hébergement web

Si ce n'est pas déjà le cas, nous vous recommandons de passer votre site en HTTPS avant de poursuivre ce tutoriel à l'aide du guide : [Passer son site internet en HTTPS grâce au SSL](https://docs.ovh.com/fr/hosting/passer-site-internet-https-ssl/).

## En pratique

**WooCommerce** est une extension de **WordPress**. Elle s'installe comme n'importe quelle extension.

### Installation

Connectez-vous sur votre interface d'administration en tapant `/wp-admin`  ou `/wp-login` dans votre bare de recherche après l'URL de votre nom de domaine (la redirection se fait automatiquement)&nbsp;:

![Admin page of WordPress](images/wordpress-woocommerce-first-steps%5B1%5D.png){.thumbnail}

Sur le menu de gauche, rendez-vous dans «&nbsp;Extensions&nbsp;» puis cliquez sur «&nbsp;Ajouter&nbsp;»&nbsp;:

![Dashboard, Plugins, Add new](images/wordpress-woocommerce-first-steps%5B2%5D.png){.thumbnail}

Sur la nouvelle page «&nbsp;Ajouter des extensions&nbsp;», saisissez «&nbsp;woocommerce&nbsp;» dans la barre de recherche en haut à droite puis cliquez sur «&nbsp;Installer maintenant&nbsp;» dans l'encadré lié à l'extension **WooCommerce**&nbsp;:

![Install WooCommerce](images/wordpress-woocommerce-first-steps%5B3%5D.png){.thumbnail}

Cliquez maintenant sur «&nbsp;Activer&nbsp;»&nbsp;:

![Activate WooCommerce](images/wordpress-woocommerce-first-steps%5B4%5D.png){.thumbnail}

### Configuration 

#### Méthode 1 (utilisation de l'assistant de configuration)

Si vous n'avez pas encore paramétré votre extension **WooCommerce**, un assistant de configuration vous aide à renseigner les informations relatives à votre site de vente en ligne. Renseignez le formulaire puis cliquez sur «&nbsp;Continuer&nbsp;»&nbsp;:

![Setup Wizard - Store Details](images/wordpress-woocommerce-first-steps%5B5%5D.png){.thumbnail}

Sélectionnez ensuite votre (ou vos) domaine(s) d'activité&nbsp;:

![Setup Wizard - Industry](images/wordpress-woocommerce-first-steps%5B6%5D.png){.thumbnail}

Choisissez le type de produits que vous souhaitez vendre sur votre site web (certaines options sont payantes)&nbsp;:

![Setup Wizard - Product Types](images/wordpress-woocommerce-first-steps%5B7%5D.png){.thumbnail}

Puis précisez la nature de votre activité&nbsp;:

![Setup Wizard - Business Details](images/wordpress-woocommerce-first-steps%5B8%5D.png){.thumbnail}

Ajoutez des fonctionnalités optionnelles (et gratuites) si vous le souhaitez&nbsp;:

![Setup Wizard - Business Details, free features](images/wordpress-woocommerce-first-steps%5B9%5D.png){.thumbnail}

Enfin, choisissez un thème parmi ceux proposés&nbsp;:

![Setup Wizard - Choose a theme](images/wordpress-woocommerce-first-steps%5B10%5D.png){.thumbnail}

**WooCommerce** vous sollicite pour créer un compte pour utiliser l'extension **Jetpack**. C'est une extension installée automatiquement en plus de l'extension **WooCommerce**. Cette création est facultative, vous aurez accès aux fonctions limitées de **Jetpack** sans avoir à vous authentifier.

Votre boutique en ligne est désormais configurée avec les paramètres généraux.

#### Méthode 2 (configuration manuelle)

Cliquez sur «&nbsp;Extensions&nbsp;» pour lister les extensions installées puis sur «&nbsp;Extensions installées&nbsp;». La liste de vos extensions s'affiche. Cliquez sur «&nbsp;Réglages&nbsp;» dans le module **WooCommerce**&nbsp;:

![Setup Wizard - Extension, WooCommerce, Settings](images/wordpress-woocommerce-first-steps%5B11%5D.png){.thumbnail}

Vous avez également accès à ces réglages en cliquant directement sur «&nbsp;WooCommerce&nbsp;» puis sur «&nbsp;Réglages&nbsp;»&nbsp;:

![Setup Wizard - WooCommerce, Settings](images/wordpress-woocommerce-first-steps%5B12%5D.png){.thumbnail}

La page de réglages comprend plusieurs onglets&nbsp;:

![Setup Wizard - WooCommerce, Settings, Tabs](images/wordpress-woocommerce-first-steps%5B13%5D.png){.thumbnail}

### Réglages

#### Général

Cet onglet vous permet de définir les éléments suivants&nbsp;:

- adresse de l'entreprise
- zones de vente et de livraison
- localisation par défaut du client (optionnel)
- activation/désaction des taxes
- coupons
- données monétaires (devise du site, affichage).

![Setup Wizard - WooCommerce, Settings, General tab](images/wordpress-woocommerce-first-steps%5B14%5D.png){.thumbnail}

#### Produits

La gestion de produits se fait via un ensemble de sous-rubriques&nbsp;:

- **Général** : sert à définir des éléments tels que la page d'accueil qui sera affichée par défaut (boutique, mentions légales, panier, etc.), les unités de mesure, la possibilité ou non de mettre des commentaires à propos des produits ou des notes&nbsp;;
- **Inventaire** : sert à paramétrer ou non la gestion de votre stock et à configurer le comportement du site web (stock décrémenté lorsqu'un objet est dans le panier, seuils d'alerte, possibilité de masquer les produits qui ne sont plus en stock)&nbsp;;
- **Produits téléchargeables** : concerne les cas de mise à disposition de documents à télécharger par les utilisateurs&nbsp;:
- **Répertoires de téléchargement approuvés** : précise le ou les répertoires sur le serveur où les fichiers seront téléversés&nbsp;:
- **Avancé&nbsp** : sert à paramétrer plus finement les attributs des produits.

#### Expédition

Si vous avez activé les extensions par défaut proposées gratuitement lors de l'installation, vous disposez de l'extension [WooCommerce Shipping](https://woocommerce.com/fr-fr/woocommerce-shipping/){.external}. Dans le cas contraire, vous pouvez procéder à son installation en vous rendant dans le menu «&nbsp;Extensions&nbsp;»

- **Zones d'expédition** : permet de définir et configurer des zones d'expédition
- **Options de livraison** : sert à paramétrer l'application pour tout ce qui est relatif aux frais d'expédition
- **Classes d'expédition** : peuvent être utilisées pour grouper des produits similaires par type d'envoi.

#### Paiements

Cet onglet sert à activer/désactiver les moyens de paiement que proposés sur votre site web. Reportez-vous à la [documentation officielle](https://woocommerce.com/document/payments/) pour configurer votre ou (vos) moyen(s) de paiement.

#### Comptes et confidentialité

Cette rubrique regroupe toutes les fonctionnalités relatives à la gestion des comptes et des données personnelles.

#### E-mails

Permet de configurer les *e-mails types* envoyés par l'application (inscription, commandes, annulations de commande, etc.).

#### Intégration

Pour géolocaliser vos clients en fonction de leur adresse IP, vous pouvez, dans cette sous-rubrique, entrer la clé de licence de [MaxMind](https://www.maxmind.com/){.external}, service payant de géolocalisation.

#### Avancé

- «&nbsp;Installation des pages&nbsp;» est utile pour modifier les pages vers lesquelles seront redirigés les utilisateurs lors du processus de commande&nbsp;;
- «&nbsp;API REST&nbsp;» est la rubrique pour permettre de configurer et paramétrer les accès à WooCommerce via son API REST&nbsp;;
- «&nbsp;Webhook&nbsp;», où vous pouvez gérer vos fonctions de rappel HTTP&nbsp;;
- «&nbsp;Ancienne API&nbsp;», où il est possible de réactiver l'ancienne API de WooCommerce (désactivée par défaut)&nbsp;;
- «&nbsp;WooCommerce.com&nbsp;» sert à activer ou désactiver le tracking de l'activité de votre site de vente en ligne par WebCommerce, et d'avoir des suggestions pour des extensions dédiées (la majorité sont payantes)&nbsp;;
- «&nbsp;Fonctionnalités&nbsp;», page regroupant les fonctionnalités en test sur WooCommerce ou récemment ajoutées.

## Aller plus loin <a name="go-further"></a>

- le [site officiel WordPress](https://wordpress.org){.external}
- l'extension [Jetpack](https://jetpack.com/){.external}
- le site de [WooCommerce](https://woocommerce.com/){.external}
- le magasin d'[extensions WooCommerce](https://woocommerce.com/products/){.external}
