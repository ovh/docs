---
title: "Guide - WordPress and WooCommerce, first steps"
slug: wordpress-woocommerce-first-steps
excerpt: "Wordpress and WooCommerce, first steps"
section: Tutoriel
order: 
---

**Last update 19th december 2022**

## Objective

This tutorial aims to help you create an online shop with the open source WooCommerce extension for the WordPress CMS. 

## Requirements

You must have web hosting and a domain name pointing to it, have installed WordPress (our guide [First steps WordPress](https://ovhcloud.com/)) and be able to log in to the administration interface.
If you don't have any hosting yet, you can choose from our [web hosting](https://www.ovhcloud.com/en-gb/web-hosting/) solutions.

It's recommanded to activate HTTPS on your website with an SSL certificate before any operation as specified in our [guide](https://docs.ovh.com/gb/en/hosting/activate-https-website-ssl/).

## Instructions

WooCommerce is a WordPress extension and therefore installs like any other extension.

### Installation

Log in to your administration interface by typing `/wp-admin` or `/wp-login` after your domaine name&nbsp;:

![Admin page of WordPress](images/wordpress-woocommerce-first-steps%5B1%5D.png){.thumbnail}

On the left menu, click on &ldquo;Plug-in&rdquo; then &ldquo;Add New&rdquo;&nbsp;:

![Dashboard, Plugins, Add new](images/wordpress-woocommerce-first-steps%5B2%5D.png){.thumbnail}

On this new page &ldquo;Add Plugins&rdquo;, type «&nbsp;woocommerce&nbsp;» in the search bar positionned on the top rught on your screen, then click on &ldquo;Install now&rdquo; WooCommerce plugin frame&nbsp;:

![Install WooCommerce](images/wordpress-woocommerce-first-steps%5B3%5D.png){.thumbnail}

Now click on &ldquo;Activate&rdquo;&nbsp;:

![Activate WooCommerce](images/wordpress-woocommerce-first-steps%5B4%5D.png){.thumbnail}

### Settings - 1st method (with the setup wizard)

If you have not yet set up your WooCommerce extension, a configuration wizard will help you fill in the information about your online sales site then click on &ldquo;Continuer&rdquo;&nbsp;:

![Setup Wizard - Store Details](images/wordpress-woocommerce-first-steps%5B5%5D.png){.thumbnail}

Select your industries&nbsp;:

![Setup Wizard - Industry](images/wordpress-woocommerce-first-steps%5B6%5D.png){.thumbnail}

Select the types of products you want to sell on your web site (some options are not free)&nbsp;:

![Setup Wizard - Product Types](images/wordpress-woocommerce-first-steps%5B7%5D.png){.thumbnail}

Then give some informations about your business&nbsp;:

![Setup Wizard - Business Details](images/wordpress-woocommerce-first-steps%5B8%5D.png){.thumbnail}

You will then be asked to add optional and free features&nbsp;:

![Setup Wizard - Business Details, free features](images/wordpress-woocommerce-first-steps%5B9%5D.png){.thumbnail}

At least, choose a theme&nbsp;:

![Setup Wizard - Choose a theme](images/wordpress-woocommerce-first-steps%5B10%5D.png){.thumbnail}

You will then be asked to create an account to use the **Jetpack** extension, automatically installed with WooCommerce. This is not necessary&nbsp;: you will have access to the limited functions of Jetpack without having an account.

Your online shop is then configured with the general settings.

### Settings - 2d method (manual)

List the installed plugins by clicking on &ldquo;Plugind&rdquo; then &ldquo;Installed plugins&rdquo;. Your installeds plugins are displayed. Click now on &ldquo;Settings&rdquo; in the WooCommerce frame.

![Setup Wizard - Extension, WooCommerce, Settings](images/wordpress-woocommerce-first-steps%5B11%5D.png){.thumbnail}

You can directly access to this settings by clicking on &ldquo;WooCommerce&rdquo; then &ldquo;Settings&rdquo;.

![Setup Wizard - WooCommerce, Settings](images/wordpress-woocommerce-first-steps%5B12%5D.png){.thumbnail}

The settings page include many tabs&nbsp;:

![Setup Wizard - WooCommerce, Settings, Tabs](images/wordpress-woocommerce-first-steps%5B13%5D.png){.thumbnail}

### Settings

#### General

This add is used to set the following parameters&nbsp;:

- address
- selling location
- default customer location
- enabling taxes
- enabling coupons
- currency options (currency, display).

![Setup Wizard - WooCommerce, Settings, General tab](images/wordpress-woocommerce-first-steps%5B14%5D.png){.thumbnail}

#### Products

Product management is done through a set of sub-sections&nbsp;:

- «&nbsp;Général&nbsp;» sert à définir des éléments tels que la page d'accueil qui sera affichée par défaut (boutique, mentions légales, panier, etc.), les unités de mesure, la possibilité ou non de mettre des commentaires à propos des produits ou des notes&nbsp;;
- «&nbsp;Inventaire&nbsp;» servira à paramétrer la gestion de votre stock (ou ne pas la gérer), et de configurer le comportement du site (stock décrémenté lorsqu'un objet est dans le panier, seuils d'alerte, possibilité de masquer les produits qui ne sont plus en stock)&nbsp;;
- «&nbsp;Produits téléchargeables&nbsp;» concerne les cas de mise à disposition de documents à télécharger par les utilisateurs&nbsp;:
- «&nbsp;Répertoires de téléchargement approuvés&nbsp;», précise le ou les répertoires sur le serveur où les fichiers seront téléversés&nbsp;:
- «&nbsp;Avancé&nbsp;» sert à paramétrer plus finement les attributs des produits.

#### Shipping

Si vous avez laissé activées les extensions proposées gratuitement par défaut lors de l'installation, vous disposez de l'extension [WooCommerce Shipping](https://woocommerce.com/fr-fr/woocommerce-shipping/). Dans le cas contraire, vous pouvez procéder à son installation en vous rendant dans le menu «&nbsp;Extensions&nbsp;»

- «&nbsp;Zones d'expédition&nbsp;» vous permet de définir et configurer des zones d'expédition
- «&nbsp;Options de livraison&nbsp;» sert à paramétrer l'application pour tout ce qui est relatif aux frais d'expédition
- les «&nbsp;Classes d'expédition&nbsp;» peuvent être utilisées pour grouper des produits similaires par type d'envoi.

#### Payments

Dans cet onglet, vous pouvez activer ou désactiver les moyens de paiement que vous proposerez sur votre site. Reportez-vous à la [documentation officielle](https://woocommerce.com/document/payments/) pour configurer votre ou vos moyens de paiement.

#### Accounts & Privacy

Cette rubrique regroupe toutes les fonctionnalités relatives à la gestion des comptes et des données personnelles.

#### Emails

Vous pouvez configurer les e-mails types qui sont envoyés par l'application (inscription, commandes, annulations de commande, etc.).

#### Integration

Pour géolocaliser vos clients en fonction de leur adresse IP, vous pouvez, dans cette sous-rubrique, entrer la clé de licence de [MaxMind](https://www.maxmind.com/), service payant de géolocalisation.

#### Advanced

- «&nbsp;Installation des pages&nbsp;» est utile pour modifier les pages vers lesquelles seront redirigés les utilisateurs lors du processus de commande&nbsp;;
- «&nbsp;API REST&nbsp;» est la rubrique pour permettre de configurer et paramétrer les accès à WooCommerce via son API REST&nbsp;;
- «&nbsp;Webhook&nbsp;», où vous pouvez gérer vos fonctions de rappel HTTP&nbsp;;
- «&nbsp;Ancienne API&nbsp;», où il est possible de réactiver l'ancienne API de WooCommerce (désactivée par défaut)&nbsp;;
- «&nbsp;WooCommerce.com&nbsp;» sert à activer ou désactiver le tracking de l'activité de votre site de vente en ligne par WebCommerce, et d'avoir des suggestions pour des extensions dédiées (la majorité sont payantes)&nbsp;;
- «&nbsp;FonctionnalitésP&nbsp;», page regroupant les fonctionnalités en test sur WooCommerce ou récemment ajoutées.

## Go further

- the [Jetpack](https://jetpack.com/) plugin
- the [WooCommerce](https://woocommerce.com/) website
- the [WooCommerce extensions](https://woocommerce.com/products/) store.