---
title: "Hébergement web : passer son site web en HTTPS"
excerpt: "Découvrez comment passer votre site web en HTTPS après avoir activé un certificat SSL"
updated: 2024-02-21
---

## Objectif

Grâce à votre hébergement web OVHcloud, vous pouvez bénéficier d'un [certificat SSL](https://www.ovhcloud.com/fr/web-hosting/options/ssl/). Ce dernier permet à un ou plusieurs de vos sites internet de disposer d'une connexion sécurisée en étant par conséquent accessibles en *HTTPS*. Pour cela, plusieurs étapes sont nécessaires avant que vos sites puissent utiliser cette connexion sécurisée.

**Découvrez comment passer votre site web en HTTPS après avoir activé un certificat SSL.**

## Prérequis

- Disposer d'un [certificat SSL](https://www.ovhcloud.com/fr/web-hosting/options/ssl/){.external} installé sur votre [hébergement web OVHcloud](https://www.ovhcloud.com/fr/web-hosting/){.external}.
- Disposer d'au moins un site web installé et accessible sur votre hébergement web OVHcloud.
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, partie `Web Cloud`{.action}.

## En pratique

La sécurité prend une place de plus en plus conséquente sur internet. Vous accordez sûrement une attention toute particulière à la confidentialité de vos données et à la manière dont ces dernières transitent sur le web. De manière générale, les internautes accordent davantage leur confiance à des sites permettant des échanges sécurisés, en particulier lorsque les données échangées sont sensibles. 

Lorsque vous visitez un site web disposant d'une connexion sécurisée, votre navigateur internet vous l'indique dans sa barre d'adresse grâce à plusieurs moyens comme : 

- un logo (généralement un cadenas) ;
- un message ;
- un code couleur ; 
- au protocole utilisé, *HTTPS* plutôt que *HTTP*. 

Le fait que votre site web possède ou non une connexion sécurisée devient alors de plus en plus visible.

![httpswebsite](images/url-not-secure.png){.thumbnail}

**Passer son site web en *HTTPS* peut être une manipulation sensible.** En effet, l'essentiel des actions à réaliser s'effectueront dans le code source de votre site web. Si elles ne sont pas effectuées correctement, vous risquez une baisse de référencement (SEO) dans les résultats proposés par les moteurs de recherche (Google, Yahoo!, bing, etc.) voire une innaccessibilité totale à votre site web.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

Le tableau ci-dessous résume les principales étapes à réaliser pour passer votre site web en *HTTPS*

|Étapes|Description|Détail|
|---|---|---|
|1|[Activer le certificat SSL sur l'hébergement web](#enable-ssl)|Permet d'activer ou de vérifier qu'un certificat SSL est bien installé sur votre hébergement web et est bien activé pour le site web concerné.|
|2|[Vérifier l'environnement technique](#check-environment)|Permet de vérifier que le passage de votre site en *HTTPS* n'engendrera pas de dysfonctionnements avant d'initier un quelconque changement.|
|3|[Activer le *HTTPS* sur votre site web](#https-enable)|Permet à votre site web  d'utiliser le protocole *HTTPS*. La méthode exposée dans le présent guide n'est pas universelle et dépendra du site web utilisé.|
|4|[Vérifier le bon fonctionnement de votre site web](#check-your-website)|Permet de s'assurer qu'après l'activation du *HTTPS*, votre site web s'affiche correctement.|

### Étape 1 - Activer le certificat SSL sur l'hébergement web <a name="enable-ssl"></a>

Pour activer un certificat SSL sur votre hébergement web ou vérifier qu'un certificat SSL est déjà installé pour votre site web, consultez notre guide : « [Gérer un certificat SSL sur son hébergement web](/pages/web_cloud/web_hosting/ssl_on_webhosting) ».

### Étape 2 - Vérifier l'environnement technique <a name="check-environment"></a>

Avant d'effectuer tout changement dans la configuration de votre site web, il est primordial de vous assurer que celui-ci est prêt à accueillir le *HTTPS* dans de bonnes conditions. Il n'existe pas de démarche universelle, puisque celle-ci dépend du site web que vous utilisez. 

Ainsi, nous vous recommandons vivement de prendre en considération les éléments ci-dessous. Sachez cependant que ces informations ont pour but de vous aider dans la mesure du possible. Mais elles ne se substituent pas à l’aide d’un webmaster.

#### 2.1 Éviter de mélanger du contenu HTTP et HTTPS

De manière générale, lorsque votre site web s'affiche en *HTTPS*, vous devez impérativement éviter de mélanger dans une même page, et sur l'ensemble de votre site du contenu en HTTP et *HTTPS*. Ainsi, si votre site doit s'afficher en *HTTPS*, faites en sorte que l'intégralité de son contenu se charge en *HTTPS*.

Si ce n'est pas le cas, vous vous exposez alors à proposer du contenu mixte sur votre site web, considéré comme du *Mixed Content* par les navigateurs internet. Cela revient en quelque sorte à proposer du contenu considéré comme étant potentiellement non sécurisé sur une page indiquée comme étant sécurisée. Ceci peut avoir deux effets selon le type de contenu mixte :

- **le site s'affiche correctement, mais un avertissement est présent dans la barre d'adresse** : ceci peut indiquer que du contenu considéré comme passif (images, vidéos, etc.) par votre navigateur internet est chargé depuis une source non sécurisée ;

- **certaines parties du site ne s'affichent pas et un avertissement est présent dans la barre d'adresse** : ceci peut indiquer que du contenu considéré comme actif (scripts, iframe, fichiers CSS, etc.) par votre navigateur internet provenant d'une source non sécurisée a été bloqué.

En ce sens, il est donc primordial de vous assurer que l'intégralité du contenu qui sera chargé depuis votre site web provient d'une source sécurisée. 

![httpswebsite](images/connection-isnt-secure.png){.thumbnail}

Sachez que même si votre hébergement dispose d'un certificat SSL, le contenu hébergé sur ce dernier peut être chargé en *HTTP* ou en *HTTPS*. Ceci est dépendant de la manière dont vous avez identifié ces contenus dans le code de votre site. Ainsi, vous devrez vous assurer que le contenu chargé depuis votre site utilise bien le protocole *HTTPS*.

Par exemple, apportez une attention particulière aux adresses que vous utilisez dans le code de votre site. Si possible :

- préférez l'utilisation d'adresses relatives comme : `../img/header.png` ;
- évitez les adresses absolues comportant le protocole *HTTP*, comme : `http://mypersonaldomain.ovh/img/header.png`.

Si cela est nécessaire, vous devrez alors adapter le code de votre site en conséquence. Si cependant vous utilisez un site clés en main (comme WordPress), la structure de ces derniers est généralement déjà prête à l'emploi pour passer en *HTTPS*. Vous ne devriez donc pas avoir à faire de modifications dans le code-même de votre site.

#### 2.2 Éviter de générer du contenu dupliqué

Selon la manière dont votre site web est codé, vous devez vous assurer que celui-ci ne sera pas accessible via différentes adresses : la première utilisant le *HTTP* et la seconde le *HTTPS* par exemple. Si tel est le cas, vous auriez alors un même contenu accessible depuis plusieurs adresses différentes, ce qui est considéré comme du contenu dupliqué (ou *duplicate content*) par les moteurs de recherche.

Ce phénomène peut avoir un effet négatif sur le référencement de votre site web. En ce sens, vous devrez vous assurer que celui-ci « force » l'utilisation du *HTTPS*. Ceci passe par le biais d'une règle de réécriture à implémenter dans le code de votre site lorsque vous souhaiterez activer le *HTTPS*.

Sachez que si vous utilisez un site clés en main (comme WordPress), la structure de ces derniers gère automatiquement les règles de réécriture. Vous ne devriez donc pas avoir à faire de modification dans le code de votre site.

### Étape 3 - Activer le HTTPS sur votre site web <a name="https-enable"></a>

Une fois que votre hébergement web dispose d'un certificat SSL fonctionnel, que le multisite concerné bénéficie bien d'une connexion SSL active, et que vous vous êtes assuré que votre site web est prêt à passer en *HTTPS*, vous pouvez l'activer.

> [!warning]
>
> Avant d'entamer toute démarche, nous vous recommandons de récupérer une sauvegarde complète de votre site web. Cette sauvegarde doit donc contenir non seulement les fichiers présents sur l'espace de stockage FTP, mais aussi ceux de la base de données si le site web en utilise une. 
> En effet, à partir de cette étape, les actions sont à réaliser directement depuis les fichiers qui composent votre site web. N'hésitez pas à contacter un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) si vous rencontrez des difficultés.
>

Il existe de multiples manières d'activer le *HTTPS* sur votre site. Cette opération nécessite de réaliser des manipulations dans la configuration du site web que vous utilisez. Les informations ci-dessous peuvent vous aider dans cette démarche d'activation, mais elles peuvent aussi se révéler incomplètes ou non pertinentes selon votre cas.

- **Vous utilisez un site clés en main (comme WordPress)** : 

L'activation du *HTTPS* s'effectue généralement depuis l'interface d'administration de votre site. La dénomination et la manipulation pour activer le *HTTPS* varient selon le site clés en main que vous utilisez. 

Par exemple, vous pourriez avoir un paramètre intitulé « Forcer *HTTPS* »  à activer ou devoir modifier le lien complet de votre site pour y rajouter un « s » : « **http**://mypersonaldomain.ovh » deviendrait alors « **https**://mypersonaldomain.ovh ».

Si vous ne savez pas comment réaliser cette manipulation depuis l'interface d'administration de votre site clés en main ou que vous n'êtes pas sûr de vous, rapprochez-vous de la documentation officielle de l'éditeur de votre site. 

- **Vous utilisez un site que vous avez codé vous-même (ou quelqu'un l'a fait pour vous)** : 

L'activation du *HTTPS* doit sûrement être effectuée directement dans le code de votre site web. Si vous disposez des connaissances nécessaires, modifiez ainsi le code de votre site afin de l'adapter à l'utilisation du *HTTPS*. Si vous ne savez pas comment faire, prenez contact avec le webmaster qui a créé ce site pour vous. 

Si vous en avez besoin, vous trouverez ci-dessous un exemple de script à insérer dans un fichier **.htaccess** pouvant vous aider dans votre démarche. Cependant, celui-ci ne se substitue pas à l’aide d’un webmaster. Prenez soin de remplacer l'information générique présente dans ce script par votre propre nom de domaine et à l'adapter si cela est nécessaire.

```console
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.mypersonaldomain.ovh/$1 [R,L]
```

**Attention**, pour les offres d'hébergement [Cloud Web](https://www.ovhcloud.com/fr/web-hosting/cloud-web-offer/), le script à utiliser est le suivant :

```console
RewriteEngine On
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
```

### Étape 4 - Vérifier le bon fonctionnement de votre site web <a name="check-your-website"></a>

Une fois que vous avez activé le *HTTPS* sur votre site web, vérifiez que celui-ci fonctionne correctement et que tout son contenu s'affiche comme avant la manipulation. Pour cela, essayez d'accéder à ce dernier, vérifiez si aucun message ou avertissement n'apparaît et prenez quelques instants pour examiner la mise en page de plusieurs parties de votre site. 

Si vous constatez le moindre dysfonctionnement, nous vous recommandons vivement d'essayer rapidement de le résoudre ou de faire machine arrière en désactivant le *HTTPS*. En cas de réelle nécessité, vous disposez également de la sauvegarde complète de votre site réalisée lors de l'étape précédente.

Si votre site s'affiche correctement et qu'aucun avertissement ne s'affiche après le passage en *HTTPS*, vous avez correctement effectué la manipulation. Si vous souhaitez activer le *HTTPS* sur un autre site, vous devrez réitérer l'intégralité des manipulations décrites dans cette documentation.

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.