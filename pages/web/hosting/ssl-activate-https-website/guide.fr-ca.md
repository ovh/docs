---
title: 'Passer son site internet en HTTPS grâce au SSL'
slug: passer-site-internet-https-ssl
excerpt: 'Découvrez comment passer votre site internet en HTTPS grâce au SSL'
section: SSL
order: 2
---

**Dernière mise à jour le 05/05/2020**

## Objectif

Grâce à votre hébergement web OVHcloud, vous pouvez bénéficier d'un certificat SSL. Ce dernier permet à un ou plusieurs de vos sites internet de disposer d'une connexion sécurisée en étant par conséquent accessibles en HTTPS. Pour cela, plusieurs étapes sont nécessaires avant que vos sites puissent utiliser cette connexion sécurisée.

**Découvrez comment passer votre site internet en HTTPS grâce au certificat SSL.**

## Prérequis

- Disposer d'un [certificat SSL](https://www.ovh.com/ca/fr/ssl/){.external} installé sur votre [hébergement web OVHcloud](https://www.ovh.com/ca/fr/hebergement-web/){.external}.
- Disposer d'au moins un site internet installé et accessible sur votre hébergement web OVHcloud.
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, partie `Web`{.action}.

## En pratique

La sécurité prend une place de plus en plus importante sur internet. Vous accordez sûrement une attention toute particulière à la confidentialité de vos données et à la manière dont ces dernières transitent sur le web. De manière générale, les internautes accordent davantage leur confiance à des sites permettant des échanges sécurisés, en particulier lorsque les données échangées sont sensibles. 

Lorsque vous visitez un site internet disposant d'une connexion sécurisée, votre navigateur internet vous l'indique dans sa barre d'adresse grâce à plusieurs moyens : un logo (généralement un cadenas), un message, parfois par un code couleur, mais aussi grâce au protocole utilisé, HTTPS plutôt que HTTP. Le fait que votre site internet possède ou non une connexion sécurisée devient alors de plus en plus visible.

![httpswebsite](images/activate-https-website-ssl-step1.png){.thumbnail}

**Passer son site internet en HTTPS peut être une manipulation sensible.** Celle-ci implique plusieurs étapes liées essentiellement à des actions dans la configuration de votre site internet (son code). Ces dernières, si elles ne sont pas effectuées correctement, peuvent avoir diverses répercussions négatives : une moins bonne optimisation de votre référencement sur les moteurs de recherche, ou dans le pire des cas, votre site internet inaccessible. 

Le tableau ci-dessous vous permet de mieux appréhender le changement que vous allez opérer.

|Étapes|Description|Détail|
|---|---|---|
|1|Activer le certificat SSL sur l'hébergement.|Permet d'activer ou de vérifier que le certificat SSL est bien installé sur votre hébergement et est bien activé pour le site concerné.|
|2|Vérifier l'environnement technique.|Permet de vérifier que le passage de votre site en HTTPS n'a pas de répercussions négatives sur ce dernier avant d'initier tout changement.|
|3|Activer le HTTPS sur votre site.|Cette activation permet à votre site d'utiliser le protocole HTTPS. Cette manipulation n'est généralement pas universelle et dépend du site internet que vous utilisez.|
|4|Vérifier le bon fonctionnement de votre site.|Cette dernière étape permet de s'assurer après l'activation du HTTPS que votre site internet s'affiche correctement.|

### Étape 1 : activer le certificat SSL sur l'hébergement

L'activation du certificat SSL sur votre hébergement web s'effectue depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Pour cela, vous devrez réaliser deux manipulations distinctes :

|Manipulation|Description|
|---|---|
|Activer un certificat SSL sur votre hébergement.|Permet à OVHcloud d'installer un certificat SSL sur votre hébergement. Vous devrez choisir entre plusieurs types de certificats. Assurez-vous de sélectionner le plus adapté à votre situation.|
|Activer le SSL sur le multisite concerné.|Le site internet pour lequel vous souhaitez utiliser le HTTPS doit être configuré en tant que « multisite » sur votre hébergement. Assurez-vous alors que le SSL est bien actif pour celui-ci.|

La marche à suivre complète de ces deux manipulations est accessible sur notre documentation « [Gérer un certificat SSL sur son hébergement web](../les-certificats-ssl-sur-les-hebergements-web/){.external} ». Si vous venez d'acquérir votre hébergement OVHcloud, il est cependant possible qu'un certificat SSL gratuit y soit déjà installé et que le multisite bénéficie déjà d'une connexion SSL active.

Pour le vérifier, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Cliquez sur `Hébergements`{.action} dans la barre de services à gauche, puis choisissez l'hébergement web concerné. Assurez-vous d'être bien positionné sur l'onglet `Informations générales`{.action}. En dessous de « Certificat SSL », la mention « Oui » devrait apparaître, vous indiquant qu'un certificat SSL est installé sur votre hébergement web. 

![httpswebsite](images/activate-https-website-ssl-step2.png){.thumbnail}

Positionnez-vous ensuite sur l'onglet `Multisite`{.action}. Le tableau qui s’affiche contient tous les noms de domaine qui ont été ajoutés à votre hébergement. La colonne « SSL » vous permet de voir l'état d'activation de la connexion sécurisée SSL pour vos différents multisites. 

![httpswebsite](images/activate-https-website-ssl-step3.png){.thumbnail}

Si l'une de ces vérifications n'a pas permis de vous assurer qu'un certificat SSL est bien installé sur votre hébergement web et/ou actif sur le multisite concerné, reportez-vous alors à notre documentation « [Gérer un certificat SSL sur son hébergement web](../les-certificats-ssl-sur-les-hebergements-web/){.external} ».

### Étape 2 : vérifier l'environnement technique

Avant d'effectuer tout changement dans la configuration de votre site internet, il est impératif de vous assurer que celui-ci est prêt à accueillir le HTTPS dans de bonnes conditions. Il n'existe pas de démarche universelle, puisque celle-ci dépend du site internet que vous utilisez. 

Ainsi, nous vous recommandons vivement de prendre en considération les éléments ci-dessous. Sachez cependant que ces informations ont pour but de vous aider dans la mesure du possible. Mais elles ne se substituent pas à l’aide d’un webmaster.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d’en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l’éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d’informations dans la section « Aller plus loin » de ce guide. 
>

#### 2.1 Éviter de mélanger du contenu HTTP et HTTPS

De manière générale, lorsque votre site internet s'affiche en HTTPS, vous devez impérativement éviter de mélanger dans une même page, et sur l'ensemble de votre site du contenu en HTTP et HTTPS. Ainsi, si votre site doit s'afficher en HTTPS, faites en sorte que l'intégralité de son contenu se charge en HTTPS.

Si ce n'est pas le cas, vous vous exposez alors à proposer du contenu mixte sur votre site internet, considéré comme du *Mixed Content* par les navigateurs internet. Cela revient en quelque sorte à proposer du contenu considéré comme étant potentiellement non sécurisé sur une page indiquée comme étant sécurisée. Ceci peut avoir deux effets selon le type de contenu mixte :

- **le site s'affiche correctement, mais un avertissement est présent dans la barre d'adresse** : ceci peut indiquer que du contenu considéré comme passif (images, vidéos, etc.) par votre navigateur internet est chargé depuis une source non sécurisée ;

- **certaines parties du site ne s'affichent pas et un avertissement est présent dans la barre d'adresse** : ceci peut indiquer que du contenu considéré comme actif (scripts, iframe, fichiers CSS, etc.) par votre navigateur internet provenant d'une source non sécurisée a été bloqué.

En ce sens, il est donc primordial de vous assurer que l'intégralité du contenu qui sera chargé depuis votre site internet provient d'une source sécurisée. 

![httpswebsite](images/activate-https-website-ssl-step4.png){.thumbnail}

Sachez que même si votre hébergement dispose d'un certificat SSL, le contenu hébergé sur ce dernier peut être chargé en HTTP ou en HTTPS. Ceci est dépendant de la manière dont vous avez identifié ces contenus dans le code de votre site. Ainsi, vous devrez vous assurer que le contenu chargé depuis votre site utilise bien le protocole HTTPS.

Par exemple, apportez une attention particulière aux adresses que vous utilisez dans le code de votre site. Si possible :

- préférez l'utilisation d'adresses relatives comme : `../img/header.png` ;
- évitez les adresses absolues comportant le protocole HTTP, comme : `http://mypersonaldomain.ovh/img/header.png`.

Si cela est nécessaire, vous devrez alors adapter le code de votre site en conséquence. Si cependant vous utilisez un site clés en main (comme WordPress), la structure de ces derniers est généralement déjà prête à l'emploi pour passer en HTTPS. Vous ne devriez donc pas avoir à faire de modifications dans le code-même de votre site.

#### 2.2 Éviter de générer du contenu dupliqué

Selon la manière dont votre site internet est codé, vous devez vous assurer que celui-ci ne sera pas accessible via différentes adresses : la première utilisant le HTTP et la seconde le HTTPS par exemple. Si tel est le cas, vous auriez alors un même contenu accessible depuis plusieurs adresses différentes, ce qui est considéré comme du contenu dupliqué (ou *duplicate content*) par les moteurs de recherche.

Ce phénomène peut avoir un effet négatif sur le référencement de votre site internet. En ce sens, vous devrez vous assurer que celui-ci « force » l'utilisation du HTTPS. Ceci passe par le biais d'une règle de réécriture à implémenter dans le code de votre site lorsque vous souhaiterez activer le HTTPS.

Sachez que si vous utilisez un site clés en main (comme WordPress), la structure de ces derniers gère automatiquement les règles de réécriture. Vous ne devriez donc pas avoir à faire de modification dans le code de votre site.

### Étape 3 : activer le HTTPS sur votre site

Une fois que votre hébergement web dispose d'un certificat SSL fonctionnel, que le multisite concerné bénéficie bien d'une connexion SSL active, et que vous vous êtes assuré que votre site internet est prêt à passer en HTTPS, vous pouvez l'activer.

> [!warning]
>
> Avant d'entamer toute démarche, nous vous recommandons de récupérer une sauvegarde complète de votre site, c'est-à-dire contenant aussi bien des fichiers présents sur l'espace de stockage que de la base de données, si le site en utilise une. 
>

Il existe de multiples manières d'activer le HTTPS sur votre site. Cette opération nécessite de réaliser des manipulations dans la configuration du site internet que vous utilisez. Les informations ci-dessous peuvent vous aider dans cette démarche d'activation, mais elles peuvent aussi se révéler incomplètes ou non pertinentes selon votre cas.

- **Vous utilisez un site clés en main (comme WordPress)** : 

L'activation du HTTPS s'effectue généralement depuis l'interface d'administration de votre site. La dénomination et la manipulation pour activer le HTTPS varient selon le site clés en main que vous utilisez. 

Par exemple, vous pourriez avoir un paramètre intitulé « Forcer HTTPS »  à activer ou devoir modifier le lien complet de votre site pour y rajouter un « s » : « **http**://mypersonaldomain.ovh » deviendrait alors « **https**://mypersonaldomain.ovh ».

Si vous ne savez pas comment réaliser cette manipulation depuis l'interface d'administration de votre site clés en main ou que vous n'êtes pas sûr de vous, rapprochez-vous de la documentation officielle de l'éditeur de votre site. 

- **Vous utilisez un site que vous avez codé vous-même (ou quelqu'un l'a fait pour vous)** : 

L'activation du HTTPS doit sûrement être effectuée directement dans le code de votre site internet. Si vous disposez des connaissances nécessaires, modifiez ainsi le code de votre site afin de l'adapter à l'utilisation du HTTPS. Si vous ne savez pas comment faire, prenez contact avec le webmaster qui a créé ce site pour vous. 

Si vous en avez besoin, vous trouverez ci-dessous un exemple de script à insérer dans un fichier **.htaccess** pouvant vous aider dans votre démarche. Cependant, celui-ci ne se substitue pas à l’aide d’un webmaster. Prenez soin de remplacer l'information générique présente dans ce script par votre propre nom de domaine et à l'adapter si cela est nécessaire.

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.mypersonaldomain.ovh/$1 [R,L]
```

### Étape 4 : vérifier le bon fonctionnement de votre site

Une fois que vous avez activé le HTTPS sur votre site internet, vérifiez que celui-ci fonctionne correctement et que tout son contenu s'affiche comme avant la manipulation. Pour cela, essayez d'accéder à ce dernier, vérifiez si aucun message ou avertissement n'apparaît et prenez quelques instants pour examiner la mise en page de plusieurs parties de votre site. 

Si vous constatez le moindre dysfonctionnement, nous vous recommandons vivement d'essayer rapidement de le résoudre ou de faire machine arrière en désactivant le HTTPS. En cas de réelle nécessité, vous disposez également de la sauvegarde complète de votre site réalisée lors de l'étape précédente.

Si votre site s'affiche correctement et qu'aucun avertissement ne s'affiche après le passage en HTTPS, vous avez correctement effectué la manipulation. Si vous souhaitez activer le HTTPS sur un autre site, vous devrez réitérer l'intégralité des manipulations décrites dans cette documentation.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
