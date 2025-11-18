---
title: "Cas d'usage - Comment changer le domaine d'un site existant"
excerpt: "Découvrez comment changer le nom de domaine d'un site existant"
updated: 2025-10-28
---

## Objectif

Au cours de la vie de votre site internet, vous pouvez être amené à changer le nom de domaine de votre site.<br>Le cas d'usage le plus courant est un changement de nom d'entreprise.

Ce tutoriel a pour objectif de vous expliquer les principales étapes à suivre lorsque vous souhaitez changer le nom de domaine d'accès à votre site internet.

**Découvrez comment changer le nom de domaine d'un site existant.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

## Prérequis

- Disposer d'un [nom de domaine](/links/web/domains).
- Disposer d'un [hébergement mutualisé OVHcloud](/links/web/hosting).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

> [!warning]
>
> Le changement du nom de domaine pour accéder à votre site peut avoir des conséquences sur son référencement. 
> Soyez vigilant quant aux manipulations que vous allez entreprendre ou contactez un [prestataire spécialisé](/links/partner) dans le référencement si nécessaire.
>

Pour changer le nom de domaine d'accès à votre site web, plusieurs étapes sont à réaliser dans un ordre bien précis.

### Etape 1 - déclarer le nouveau domaine sur votre hébergement mutualisé <a name="step1"></a>

Déclarez votre nouveau nom de domaine à l'aide de notre documentation sur l'[ajout d'un site web sur votre hébergement mutualisé](/pages/web_cloud/web_hosting/multisites_configure_multisite). Déclarez également son sous-domaine en `www` si vous souhaitez, par exemple, que `www.NewDomain.tld` affiche aussi votre site en plus de `NewDomain.tld`.

Plusieurs conditions sont à remplir pour réussir l'étape 1 :

- Votre nouveau domaine doit pointer vers le même « dossier racine » que le domaine utilisé actuellement pour accéder à votre site.
- Vérifiez que votre nouveau domaine pointe bien vers la bonne adresse IP de votre hébergement mutualisé. Pour récupérer l'adresse IP, connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la partie `Web cloud`{.action}, cliquez sur `Hébergements`{.action}, sélectionnez votre hébergement puis récupérez **l'IPv4** dans l'onglet `Informations générales`{.action}.

> [!warning]
>
> Si vous activez les options **IP du pays** ou **CDN** avec votre nouveau domaine, utilisez bien la bonne adresse IP à l'aide de notre documentation recensant [l'ensemble des adresses IP de nos hébergements mutualisés](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
>
> Pour retrouver le numéro du cluster où se trouve votre hébergement, rendez-vous dans la partie `Web cloud`{.action}, cliquez sur `Hébergements`{.action}, sélectionnez votre hébergement puis l'onglet `FTP-SSH`{.action}. Vous visualiserez le numéro du cluster dans le formulaire **Serveur FTP et SFTP** : `ftp.cluster0XX.ovh.net` (où les `X` représentent le numéro de cluster).
>

> **Certificats SSL**
>
> Si le domaine initialement utilisé pour accéder à votre site web dispose d'un certificat SSL, consultez nos 2 guides :
> - [Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting)
> - [Passer son site internet en HTTPS grâce au SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

Si l'ensemble des actions ont été correctement réalisées, les déclarations de vos noms de domaine doivent être strictement identiques **sauf si vous utilisez un certificat SSL payant de type *Sectigo DV*, *Sectigo EV* ou *custom***.

![multisites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/all-domain-same-config-enable.png){.thumbnail}

> [!primary]
>
> Une fois l'étape 1 réalisée, un temps de propagation de 4 à 24 heures maximum est nécessaire avant que les modifications soient effectives.
>

Si votre site n'utilise pas de bases de données et/ou que vous n'effectuez pas de réécriture d'URL pour votre site web, ce dernier doit déjà s'afficher correctement avec votre nouveau domaine. Dans ce cas, passez directement à [l'étape 3](#step3) de ce guide. Si ce n'est pas le cas, poursuivez à l'étape 2 ci-dessous.

### Etape 2 - réécriture des URLs dans votre site web avec le nouveau domaine

La plupart des sites utilisent des bases de données pour fonctionner. L'arborescence de ces dernières est généralement construite autour du domaine initialement utilisé pour votre site. Des actions supplémentaires sont nécessaires pour ces sites.

> [!warning]
>
> Attention, les opérations décrites dans l'étape 2 sont extrêmement sensibles et peuvent avoir des conséquences graves pour votre site web si elle ne sont pas effectuées avec précaution. Si vous avez le moindre doute, ne tentez rien et faites appel à un [prestataire spécialisé](/links/partner).
>
> Avant d'effectuer toute action, nous vous conseillons de récupérer une [sauvegarde de votre espace de stockage FTP](/pages/web_cloud/web_hosting/ftp_save_and_backup) ainsi qu'une [sauvegarde de votre base de données](/pages/web_cloud/web_hosting/sql_database_export). Cela vous permettra de restaurer votre site en cas de mauvaise manipulation.
>

Nous allons distinguer deux types de site web : 

- les CMS (*Content Management System*) tels que WordPress, Joomla!, PrestaShop, Drupal, etc.
- les sites web classiques conçus par vous-même ou par votre prestataire.

#### Cas n°1 : votre site web est un CMS

La plupart des CMS permettent directement, depuis leur espace d'administration *back-office*, de remplacer le domaine initialement déclaré pour votre site par un autre.

Les CMS étant développés par des organismes tiers non gérés par OVHcloud, vous trouverez ci-après les liens vers la documentation officielle des différents CMS proposés en installation sur nos hébergements mutualisés :

- WordPress : <https://wordpress.org/support/article/changing-the-site-url/>
- Joomla! : L’éditeur de ce logiciel ne propose pas, à date, de documentation pour changer le domaine d'accès à votre site web. Nous vous invitons à contacter directement l’éditeur sur ce sujet. Pour plus d’informations, consultez les pages officielles [docs.joomla.org](https://docs.joomla.org/) ou [forum.joomla.org](https://forum.joomla.org/).
- Drupal : L’éditeur de ce logiciel ne propose pas, à date, de documentation pour changer le domaine d'accès à votre site web. Nous vous invitons à contacter directement l’éditeur sur ce sujet. Pour plus d’informations, consultez les pages officielles [drupal.org](https://drupal.org) ou [drupal.fr](https://drupal.fr).
- PrestaShop : L’éditeur de ce logiciel ne propose pas, à date, de documentation pour changer le domaine d'accès à votre site web. Nous vous invitons à contacter directement l’éditeur sur ce sujet. Pour plus d’informations, cliquez [ici](https://help-center.prestashop.com) pour vous rendre sur leur page officielle.

Notez que pour ces CMS, il est également possible d'effectuer ses modifications directement [en base de données](/pages/web_cloud/web_hosting/sql_create_database#acceder-a-linterface-phpmyadmin). Vous devrez changer l'URL d'accès à votre site dans la table prévue à cet effet.

Pour les autres CMS non proposés en installation automatique par OVHcloud, nous vous invitons également à vous rapprocher de leurs supports respectifs pour effectuer cette réécriture en toute sécurité. 

#### Cas n°2 : votre site web est un site « fait maison »

Pour réécrire vos URLs avec votre nouveau domaine, [connectez-vous à la base de données de votre site](/pages/web_cloud/web_hosting/sql_create_database#acceder-a-linterface-phpmyadmin) puis remplacez votre ancien domaine par le nouveau dans la table correspondante. 

N'oubliez pas de vérifier dans votre fichier `.htaccess` si des réécritures d'URL ne sont pas à mettre à jour avec votre nouveau domaine.

Si vous avez fait appel à un prestataire pour la création de votre site, contactez-le afin qu'il effectue la modification en toute sécurité.

> [!success]
>
> Une fois l'étape 2 terminée, votre site doit s'afficher avec votre nouveau domaine.
>

### Etape 3 - retirer l'ancien nom de domaine <a name="step3"></a>

Pour éviter le  « *Duplicate-content* » et lorsque votre nouveau nom de domaine est pleinement opérationnel avec votre site web, vous devrez supprimer la déclaration de votre ancien nom de domaine sur votre site web à l'aide du guide sur la gestion des [sites web sur votre hébergement mutualisé](/pages/web_cloud/web_hosting/multisites_configure_multisite).

> [!warning]
>
> N'oubliez pas de vous occuper de votre certificat SSL *Sectigo EV*, *Sectigo DV* ou *Custom* comme précisé dans [l'étape 1](#step1).
>

Une fois votre ancien nom de domaine dissocié de votre site web présent sur votre hébergement web et s'il est enregistré chez OVHcloud, vous pourrez rediriger ce dernier à l'aide d'une [redirection visible permanente 301](/pages/web_cloud/domains/redirect_domain_name). Cela permettra à vos visiteurs d'être automatiquement redirigés vers votre site en visualisant votre nouveau domaine dans la barre d'adresse/URL de leur navigateur.

## Aller plus loin <a name="go-further"></a>

[Liste des adresses IP de nos hébergements mutualisés](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Passer son site internet en HTTPS grâce au SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Rediriger un domaine](/pages/web_cloud/domains/redirect_domain_name)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).