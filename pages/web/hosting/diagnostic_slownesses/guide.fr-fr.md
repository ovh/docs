---
title: "Résoudre les lenteurs rencontrées sur votre site" 
excerpt: "Diagnostiquez l'origine des lenteurs de votre site web"
slug: web-hosting-slownesses
section: Diagnostic
order: 04
---

**Dernière mise à jour le 04/11/2022**

## Objectif

L'objectif de cette documentation est de vous permettre de diagnostiquer l'origine des lenteurs que vous rencontrez sur votre site web afin d'agir en conséquence.

**Découvrez comment diagnostiquer l'origine des lenteurs de votre site web**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance **dès lors où l'infrastructure où votre offre d'hébergement mutualisé est présente n'est pas en cause**. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

> [!primary]
>
> Si **après la réalisation de l'ensemble des diagnostics indiqués dans ce guide** il s'avère que le ralentissement provient de notre infrastructure, sachez que nos offres d'hébergement mutualisés ne disposent pas de « Service Level agreement » (SLA). 
>
> Ceci du fait que l'infrastructure d'hébergement est mutualisée entre plusieurs utilisateurs. Ces derniers se partagent les ressources de l'infrastructure d'hébergement mutualisée pour faire fonctionner leurs sites web. 
>
> Si l'un d'entre eux sur-sollicite l'infrastructure mutualisée, cela peut avoir des conséquences sur les autres hébergements présents sur cette même infrastructure.
>
> Si vous avez besoin d'un service disposant d'un taux de disponibilité SLA suppérieur à 99%, nous vous invitons à utiliser une solution VPS ou Serveur Dédié qui sera plus adapté à votre besoin.
>
> *Sachez que les performances de l'infrastructure d'hébergement mutualisé OVHcloud sont monitorées 24 heures sur 24 et 7 jours sur 7. Ceci afin de vous garantir un haut taux de disponibilité et, le cas échéant un rétablissement rapide de vos services en cas de surcharge avérée.*
>

## Prérequis

- Disposer d'un site hébergé sur l'une de nos offres d'[hébergement mutualisé OVHcloud](https://www.ovhcloud.com/fr/web-hosting/) sur lequel vous rencontrez des ralentissements.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

> ![!success]
>
> Nous vous conseillons de noter vos résultats de diagnostic au fûr et à mesure de votre avancée dans ce guide. En effet et du fait qu'un certain nombre de diagnostics sont précisés ci-après, les résultats s'avèreront très utiles pour la résolution de votre situation. Ceci quelque soit l'origine de la lenteur.
>

### Comprendre la notion de ralentissement/lenteur

Les ralentissements sur votre site peuvent se traduire par un chargement excessivement long pour afficher l'ensemble ou certaines parties de votre site. 

Si le chargement est trop long, la requête effectuée depuis votre navigateur peut atteindre le temps maximal d'exécution autorisé par le serveur où se trouve votre hébergement. Dans ce cas le serveur retourne le code **« 504 Gateway Timeout »** pour signaler au visiteur que la variable « max_execution_time » a été atteinte : ce qui stoppe également l'exécution de la requête demandée.

Les lenteurs ont principalement deux origines :

- Une surcharge au niveau de l'infrastructure mutualisée sur laquelle est hébergée votre site.
- Une requête trop longue ou trop lourde à s'exécuter sur l'infrastucture mutualisée où est hébergé votre site. 

*La quasi totalité des lenteurs proviennent en réalité du site internet et non de son hébergement mutualisé : c'est pour cela que nous avons décidés de créer le présent guide afin de vous aider au mieux dans cette situation.*

Dans de rares cas, les lenteurs d'affichage peuvent aussi provenir de votre fournisseur d'accès à Internet ou à un débit de connexion Internet trop faible.

### Comprendre la notion de Time To First Bite (TTFB)

Le TTFB représente la durée que votre hébergement web va mettre entre le moment ou vous émettez la requête pour afficher votre site web dans votre navigateur internet et le premier octet de données qui sera reçu en réponse à la requête demandée par votre navigateur.

Lorsqu'il n'y a pas de surcharge au niveau de l'infrastructure d'hébergement mutualisé et que votre site internet est optimisé au maximum, le TTFB n'exède pas les 800ms.

>[!warning]
>
> Un TTFB élevé n'est pas non plus le signe que vos lenteurs proviennent de votre hébergement mutualisé. 
>
> En effet, pour Content Managment System (CMS) tels que WordPress, Joomla!, PrestaShop ou Drupal, la page que vous appelez depuis votre navigateur internet peut elle-même générer des requêtes complémentaires en interne sur l'infrastructure. Votre page ne va alors rien renvoyer à votre navigateur tant que ces propres requêtes ne lui auront pas retournées leurs résultats.
>
> **Exemple** : Si vous demandez depuis votre navigateur internet d'afficher la page d'accueil de votre site, la requête va donc appeler le fichier **« index.php »** de votre site. 
>
> Une fois la requête arrivée sur le fichier **« index.php »**, celui-ci est alors exécuté par le serveur web de votre hébergement mutualisé. 
>
> Dans son exécution, le fichier **« index.php »** doit récupérer des informations parmi les autres fichiers qui composent votre site mais aussi des éléments présents dans votre base de données. 
>
> Chacune de ces demandes d'information génère une requête interne sur votre service d'hébergement. 
>
> Le fichier **« index.php »** attendra d'avoir le résultat de toutes les requêtes qu'il a demandé **avant** de renvoyer le premier octet de donnée à votre navigateur internet.
>
> Si votre fichier **« index.php »** génère des requêtes "lentes" ou longues à s'exécuter, le TTFB sera alors élevé et votre site mettra plusieurs secondes à s'afficher. Ceci **sans que les performances de votre offre d'hébergement ne soit en cause**.
>

Il existe des outils de diagnostic en ligne qui vous permettent de récupérez le TTFB de votre hébergement. Faites attention car la plupart d'entres eux fonctionnent comme des navigateurs internet et incluent des délais supplémentaires dans le TTFB. Ces systèmes ne sont pas non plus en mesure de prendre en compte les requêtes internes demandées par le fichier que vous avez appelé via votre navigateur. Ceci comme dans l'exemple ci-dessus avec le fichier **« index.php »**.

### Identifier l'origine de la lenteur

Identifiez si les lenteurs proviennent de votre site en lui-même de part son fonctionnement interne ou de l'infrastructure d'hébergement mutualisé où il se trouve.

#### Tester le site sur plusieurs appareils

Testez votre site internet depuis un autre appareil/ordinateur puis depuis un autre point d'accès à Internet. Le tout en vidant le cache de votre navigateur internet à chaque tentative afin que votre site soit directement chargé depuis l'hébergement.

Si, dans **tous les cas**, les lenteurs sont présentes, placez à la racine de votre site dans l'espace de stockage FTP de votre hébergement mutualisé un fichier que vous nommerez « phpinfo.php ».

Dans ce fichier, placez ensuite le code suivant :

```bash
<?php
phpinfo();
?>
```

> [!warning]
>
> Dans certains cas, les fichiers **« .htaccess »** présents dans les répertoires/dossiers situés en amont ou au même niveau que l'endroit où vous avez placé votre fichier **« phpinfo.php »** peuvent influer sur l'affichage dans un navigateur internet du **« phpinfo.php »**. 
> S'il ne s'affiche pas, renommez le fichier **« .htaccess »** en **« .htaccess_OLD »** afin que le serveur ne l'exécute plus le temps de votre test. Renommez-le correctement une fois votre diagnostic effectué.
>

**Exemple**: Si votre nom de domaine permettant l'accès à votre site est « domain.tld » et si le fichier « phpinfo.php » a bien été placé à la racine de votre site web, celui-ci sera accessible grâce à l'URL suivante : `http://domain.tld/phpinfo.php` (ou `https://domain.tld/phpinfo.php`).

> [!primary]
>
> Si l'appel du fichier **« phpinfo.php »** affiche instantanément un tableau de configuration, vous savez d'ors et déjà que les ralentissements ne proviennent pas de l'hébergement mutualisé où se trouve votre site. En effet, dans le cas contraire, ce fichier s'afficherait aussi lentement que vos autres pages. 
>

