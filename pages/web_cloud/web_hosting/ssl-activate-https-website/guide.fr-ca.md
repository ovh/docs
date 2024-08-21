---
title: "Hébergement web - Passer son site web en HTTPS"
excerpt: "Découvrez comment passer votre site web en HTTPS après avoir activé un certificat SSL"
updated: 2024-02-26
---

## Objectif

Grâce à votre hébergement web OVHcloud, vous pouvez bénéficier d'un [certificat SSL](/links/web/hosting-options-ssl). Ce dernier permet à un ou plusieurs de vos sites internet de disposer d'une connexion sécurisée en étant par conséquent accessibles en *HTTPS*. Pour cela, plusieurs étapes sont nécessaires avant que vos sites puissent utiliser cette connexion sécurisée.

**Découvrez comment passer votre site web en HTTPS après avoir activé un certificat SSL.**

## Prérequis

- Disposer d'un [certificat SSL](/links/web/hosting-options-ssl){.external} installé sur votre [hébergement web OVHcloud](/links/web/hosting){.external}.
- Disposer d'au moins un site web installé et accessible sur votre hébergement web OVHcloud.
- Être connecté à l'[espace client OVHcloud](/links/manager){.external}, partie `Web Cloud`{.action}.

## En pratique

La sécurité prend une place de plus en plus conséquente sur internet. Vous accordez sûrement une attention toute particulière à la confidentialité de vos données et à la manière dont ces dernières transitent sur le web. De manière générale, les internautes accordent davantage leur confiance à des sites web permettant des échanges sécurisés, en particulier lorsque les données échangées sont sensibles. 

Lorsque vous visitez un site web disposant d'une connexion sécurisée, votre navigateur internet vous l'indique dans sa barre d'adresse (URL) grâce à plusieurs moyens comme : 

- un logo (généralement un cadenas) ;
- un message ;
- un code couleur ; 
- le protocole utilisé, *HTTPS* plutôt que *HTTP*.

Le fait que votre site web possède ou non une connexion sécurisée devient de plus en plus visible.

![httpswebsite](/pages/assets/screens/other/browsers/urls/url-not-secure.png){.thumbnail}

**Passer son site web en *HTTPS* peut être une manipulation sensible**. En effet, l'essentiel des actions à réaliser s'effectueront dans le code source de votre site web. Si elles ne sont pas effectuées correctement, vous risquez une baisse de référencement (SEO) dans les résultats proposés par les moteurs de recherche (Google, Yahoo!, bing, etc.), voire une inaccessibilité totale de votre site web.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

Retrouvez ci-dessous les principales étapes décrites dans la suite de ce guide pour passer votre site web en *HTTPS* :

- [Étape 1 - Activer le certificat SSL sur l'hébergement web](#enable-ssl) : permet d'activer ou de vérifier qu'un certificat SSL est bien installé sur votre hébergement web/site web concerné.
- [Étape 2 - Vérifier l'environnement technique pour votre site web](#check-environment) : permet de vérifier que le passage de votre site en *HTTPS* n'engendrera pas de dysfonctionnements avant d'initier un quelconque changement.
- [Étape 3 - Activer le *HTTPS* sur votre site web](#https-enable) : permet à votre site web d'utiliser le protocole *HTTPS*. La méthode exposée dans ce guide n'est pas universelle et dépendra du site web utilisé.
- [Étape 4 - Vérifier le bon fonctionnement de votre site web](#check-your-website) : permet de s'assurer que votre site web s'affiche correctement après l'activation du *HTTPS*.

### Étape 1 - Activer le certificat SSL sur l'hébergement web <a name="enable-ssl"></a>

Pour activer un certificat SSL sur votre hébergement web ou vérifier qu'un certificat SSL est déjà installé pour votre site web, consultez notre guide : « [Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting) ».

### Étape 2 - Vérifier l'environnement technique pour votre site web <a name="check-environment"></a>

Avant d'effectuer tout changement dans la configuration de votre site web, il est primordial de vous assurer que celui-ci est prêt à utiliser le protocole *HTTPS* correctement. Il n'existe pas de démarche universelle, puisque celle-ci dépend du site web que vous utilisez.

Les informations ci-dessous sont donc génériques. Nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés.

#### 2.1 - Évitez de mélanger du contenu HTTP et HTTPS

Lorsque votre site web s'affiche en *HTTPS*, vous devez éviter de mélanger, dans une même page et sur l'ensemble de votre site web, du contenu en *HTTP* et *HTTPS*. Ainsi, si votre site web doit s'afficher en *HTTPS*, assurez-vous que l'intégralité de son contenu se charge en *HTTPS*.

Si ce n'est pas le cas, vous proposerez sur votre site web du contenu considéré comme mixte (*Mixed Content*) par les navigateurs internet, c'est à dire du contenu considéré comme potentiellement non sécurisé sur une page déclarée sécurisée.

Deux cas de figure de *Mixed Content* peuvent être rencontrés :

- **Le site web s'affiche correctement, mais un avertissement est présent dans la barre d'adresse**. Du contenu considéré comme passif (images, vidéos, etc.) par votre navigateur internet est chargé sur votre page depuis une source non sécurisée.

- **Certaines parties du site web ne s'affichent pas et un avertissement est présent dans la barre d'adresse**. Du contenu considéré comme actif par votre navigateur internet (scripts, iframe, fichiers CSS, etc.), provenant d'une source non sécurisée, a été bloqué.

Vérifiez que l'intégralité du contenu chargé depuis votre site web provient d'une source sécurisée.

![httpswebsite](/pages/assets/screens/other/browsers/urls/connection-isnt-secure.png){.thumbnail}

Sachez que même si votre hébergement dispose d'un certificat SSL, le contenu hébergé sur ce dernier peut être chargé en *HTTP* ou en *HTTPS*. Ceci dépend de la manière dont vous avez identifié ces contenus dans le code de votre site web. Ainsi, vérifiez que tout le contenu chargé depuis votre site web utilise bien le protocole *HTTPS*.

Par exemple, apportez une attention particulière aux adresses que vous utilisez dans le code de votre site web. Si possible :

- préférez l'utilisation d'adresses relatives comme : `../img/header.png` ;
- évitez les adresses absolues comportant le protocole *HTTP*, comme : `http://domain.tld/img/header.png`.

Si nécessaire, adaptez le code de votre site web en conséquence. 

Si vous utilisez un « site clés en main » (WordPress, PrestaShop, Drupal, Joomla!), la structure de ces sites est généralement déjà conçue pour passer en *HTTPS*. Vous ne devriez pas avoir à faire de modifications dans le code de votre site web.

#### 2.2 - Évitez de générer du contenu dupliqué

Selon la manière dont votre site web est codé, assurez-vous que celui-ci ne sera pas accessible via différentes adresses, la première utilisant le *HTTP* et la seconde le *HTTPS* par exemple. Si tel est le cas, un même contenu sera accessible depuis plusieurs adresses différentes, ce qui est considéré comme du contenu dupliqué ( *duplicate content*) par les moteurs de recherche.

Ce phénomène peut baisser le niveau de référencement (SEO) de votre site web. Vérifiez donc que votre code « force » l'utilisation du *HTTPS*, par le biais d'une règle de réécriture à placer dans le code de votre site web lorsque vous souhaiterez activer le *HTTPS*.

Sachez que si vous utilisez un « site clés en main », sa structure gère automatiquement les règles de réécriture. Vous ne devriez donc pas avoir à faire de modification dans le code de votre site web.

### Étape 3 - Activer le HTTPS sur votre site web <a name="https-enable"></a>

Dès que votre hébergement web dispose d'un certificat SSL actif, que le [multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite) concerné bénéficie bien d'une connexion SSL active et que votre site web est prêt à passer en *HTTPS*, vous pouvez l'activer.

> [!warning]
>
> Avant d'entamer toute démarche, nous vous recommandons de récupérer une sauvegarde complète de votre site web. Cette sauvegarde doit contenir non seulement les fichiers présents sur l'[espace de stockage FTP](/pages/web_cloud/web_hosting/ftp_save_and_backup), mais aussi ceux de [la base de données](/pages/web_cloud/web_hosting/sql_database_export) si le site web en utilise une.
>
> En effet, à partir de cette étape, les actions sont à réaliser directement depuis les fichiers qui composent votre site web. N'hésitez pas à contacter un [prestataire spécialisé](/links/partner) si vous rencontrez des difficultés.
>

Il existe de multiples manières d'activer le *HTTPS* sur votre site web. Cette opération nécessite de réaliser des manipulations dans la configuration du site web que vous utilisez. Les informations ci-dessous peuvent vous aider dans cette démarche d'activation, mais elles peuvent aussi se révéler incomplètes ou non pertinentes selon votre cas d'usage.

- **Vous utilisez un « site clés en main » (WordPress, PrestaShop, Drupal, Joomla!, etc.)** :

L'activation du *HTTPS* s'effectue généralement depuis l'interface d'administration de votre site web. La dénomination et la manipulation pour activer le *HTTPS* varient selon le « site clés en main » que vous utilisez. 

Par exemple, vous pourriez avoir un paramètre intitulé « Forcer *HTTPS* »  à activer ou devoir modifier le lien complet de votre site web pour y rajouter un `s` : « **http**://domain.tld » deviendrait alors « **https**://domain.tld ».

Si vous ne savez pas comment réaliser cette manipulation depuis l'interface d'administration de votre « site clés en main » ou en cas de doute, rapprochez-vous de la documentation officielle de l'éditeur de votre site web. 

- **Vous utilisez un site web codé par vous-même (ou par un prestataire)** : 

L'activation du *HTTPS* doit sûrement être effectuée directement dans le code de votre site web. Si vous disposez des connaissances nécessaires, modifiez le code de votre site afin de l'adapter à l'utilisation du *HTTPS*. En cas de doute sur les manipulations à réaliser, prenez contact avec le développeur de votre site web. 

Si besoin, vous trouverez ci-dessous quelques exemples de scripts à insérer dans un fichier **.htaccess**. Cependant, ceux-ci ne se substituent pas à l’aide d’un webmaster. Remplacez le nom de domaine `domain.tld` présent dans le premier script par votre propre nom de domaine et adaptez-le si nécessaire.

```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://domain.tld/$1 [R,L]
```

Ce premier exemple de script a pour effet de rediriger toutes les URLs arrivées via le port 80 en *HTTP* vers l'URL sécurisée en *HTTPS* `https://domain.tld/`.

```bash
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Ce deuxième exemple de script a pour effet de transformer toutes les URLs arrivées via le protocole *HTTP* en *HTTPS*, tout en conservant intact le reste de l'URL situé après les `://`.

Pour ce deuxième exemple, vérifiez bien que tous vos noms de domaine ou sous-domaines cibles ont bien un certificat SSL actif.

### Étape 4 - Vérifier le bon fonctionnement de votre site web <a name="check-your-website"></a>

Une fois le *HTTPS* activé sur votre site web, vérifiez que celui-ci fonctionne correctement et que tout son contenu s'affiche comme avant la manipulation. Pour cela, essayez d'accéder à ce dernier, vérifiez si aucun message ou avertissement n'apparaît et prenez quelques instants pour examiner la mise en page de plusieurs parties de votre site web. 

Si vous constatez le moindre dysfonctionnement, essayez de le résoudre le plus rapidement possible ou faites machine arrière en désactivant le *HTTPS*. En cas de réelle nécessité, vous disposez également de la sauvegarde complète de votre site web réalisée lors de l'[étape 3](#https-enable).

Si votre site web s'affiche correctement et qu'aucun avertissement n'apparaît après le passage en *HTTPS*, vous avez correctement effectué la manipulation. Si vous souhaitez activer le *HTTPS* sur un autre site web, réitérez l'intégralité des manipulations décrites dans cette documentation.

## Aller plus loin <a name="go-further"></a>

[Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).