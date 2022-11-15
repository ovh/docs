---
title: "Mon site est lent. Que faire ?" 
excerpt: "Identifiez l'origine des lenteurs de votre site web et découvrez comment résoudre cette situation"
slug: slow-website-fix
section: Diagnostic
order: 01
---

**Dernière mise à jour le 10/11/2022**

## Objectif

Un ralentissement sur votre site résulte d'un chargement excessivement long pour afficher l'ensemble ou certaines parties de votre site. 

Si le chargement est trop long, la requête effectuée depuis votre navigateur peut alors atteindre le temps maximal d'exécution autorisé par le serveur où se trouve votre hébergement. Dans ce cas, le serveur retourne le code « **504 Gateway Timeout** » pour signaler au visiteur que la variable « max_execution_time » a été atteinte, ce qui stoppe également l'exécution de la requête demandée.

Les lenteurs ont principalement deux origines :

- une surcharge au niveau de l'infrastructure mutualisée sur laquelle est hébergée votre site ;
- une requête trop longue ou trop lourde à s'exécuter sur l'infrastucture mutualisée où est hébergé votre site. 

La grande majorité des lenteurs proviennent en réalité du site internet et non de son hébergement mutualisé. Nous avons créé ce guide afin de vous aider au mieux dans cette situation.

Dans de rares cas, les lenteurs d'affichage peuvent aussi provenir de votre fournisseur d'accès à Internet ou à un débit de connexion Internet trop faible. Vérifiez votre connectivité réseau **avant** de poursuivre vos diagnostics.

**Découvrez comment diagnostiquer l'origine des lenteurs de votre site web et agir en conséquence.**

> [!primary]
>
> **Après la réalisation de l'ensemble des diagnostics indiqués dans ce guide**, s'il s'avère que le ralentissement provient de notre infrastructure d'hébergements, nous vous rappelons qu'elle est mutualisée entre plusieurs utilisateurs.
>
> Les utilisateurs se partagent les ressources de l'infrastructure d'hébergements mutualisés pour faire fonctionner leurs sites web. Si l'un d'entre eux sur-sollicite l'infrastructure mutualisée, cela peut avoir des conséquences sur les autres hébergements présents sur cette même infrastructure.
>
> Nos offres d'hébergements mutualisés ne disposent pas de « Service Level Agreement » (SLA). 
>
> Si vous avez besoin d'un service offrant un taux de disponibilité SLA supérieur à 99%, nous vous conseillons d'envisager l'utilisation d'un [Serveur Privé Virtuel (VPS)](https://www.ovhcloud.com/fr/vps/) ou d'un [Serveur Dédié](https://www.ovhcloud.com/fr/bare-metal/).
>
> Par ailleurs, les performances de l'infrastructure d'hébergements mutualisés OVHcloud sont monitorées 24 heures sur 24 et 7 jours sur 7. Ceci afin de vous garantir un haut taux de disponibilité et, le cas échéant, un rétablissement rapide de vos services en cas de surcharge avérée.*
>

## Prérequis

- Disposer d'un site hébergé sur l'une de nos offres d'[hébergement mutualisé OVHcloud](https://www.ovhcloud.com/fr/web-hosting/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance **dès lors que l'infrastructure où votre offre d'hébergement mutualisé est présente n'est pas en cause**. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

> [!success]
>
> Nous vous conseillons de noter vos résultats de diagnostic au fur et à mesure de votre avancée dans ce guide. En effet, ces résultats s'avèreront très utiles pour la résolution de votre situation, quelle que soit l'origine de la lenteur.
>

### Comprendre la notion de Time To First Byte (TTFB)

Le *Time To First Byte* (TTFB) représente la durée que votre hébergement web va mettre pour renvoyer le premier octet de données à votre navigateur Internet suite à une requête effectuée par ce dernier pour afficher votre site web.

Lorsqu'il n'y a pas de surcharge au niveau de l'infrastructure d'hébergement mutualisé et que votre site internet est optimisé au maximum, le TTFB n'exède pas les 800ms.

**Un TTFB élevé ne signifie pas automatiquement que vos lenteurs proviennent de votre hébergement mutualisé.**

En effet, pour des Content Managment System (CMS) tels que WordPress, Joomla!, PrestaShop ou Drupal, la page que vous appelez depuis votre navigateur Internet peut elle-même générer des requêtes complémentaires en interne sur votre hébergement. Votre hébergement ne renverra rien à votre navigateur tant que ces requêtes internes ne seront pas elle-même finalisées.

> **Exemple**:
>
> Depuis votre navigateur Internet, vous demandez d'afficher la page d'accueil de votre site web. La requête va donc appeler par défaut le fichier « **index.php** » de votre site web.
>
> Une fois la requête arrivée sur le fichier « **index.php** », celui-ci est alors exécuté par le serveur web de votre hébergement mutualisé. 
>
>Dans son exécution, le fichier « **index.php** » doit récupérer des informations parmi les autres fichiers qui composent votre site web, voire des éléments présents dans votre base de données. 
>
>Chacune de ces demandes d'informations génère une requête interne sur votre service d'hébergement. 
>
>Le fichier « **index.php** » attendra d'avoir le résultat de toutes les requêtes internes qu'il a demandé **avant** de renvoyer le premier octet de donnée à votre navigateur internet.
>
>Si votre fichier « **index.php** » génère des requêtes « lentes » ou lourdes à s'exécuter, le TTFB sera alors élevé et votre site mettra plusieurs secondes à s'afficher. Les performances de votre offre d'hébergement ne sont alors pas en cause.

Des outils de diagnostic en ligne vous permettent de récupérer le TTFB de votre hébergement. Cependant, la plupart d'entres eux fonctionnent comme des navigateurs Internet et leurs résultats sont donc à relativiser.<br>
En effet, ces outils ne sont pas en mesure de prendre en compte les requêtes internes demandées par le fichier que vous avez appelé via votre navigateur,comme dans l'exemple ci-dessus avec le fichier « **index.php** ».

### Etape 1 - déterminez si les lenteurs proviennent de l'hébergement ou de votre site web

Cette première étape vous permet de déterminer si les lenteurs proviennent :

- soit de votre site, de par son fonctionnement interne ;
- soit de l'infrastructure d'hébergement mutualisé où votre site se trouve.

Tous les diagnostics de l'étape 1 doivent être réalisés **sans exception** afin de déterminer si les ralentissements proviennent de vos services d'hébergement web ou du site internet que vous hébergez dessus.

#### 1.1 - Vérifiez l'état de vos services OVHcloud

Pour être sûr que vos services (hébergement mutualisé **et** base de données) ne font pas l'objet d'une maintenance ou d'un incident, récupérez les informations sur le cluster et le filer de votre hébergement mutualisé ainsi que les informations générales relatives à votre base de données. Vous pourrez ensuite vérifier leur statut sur [status.ovhcloud.com](https://web-cloud.status-ovhcloud.com/).

Pour connaître le cluster et le filer où se trouve votre hébergement mutualisé, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez l'hébergement web concerné. Dans l'onglet `Informations générales`{.action}, repérez le `datacentre` de votre hébergement mutualisé ainsi que le `filer` où il se trouve.

![Récupérer Filer](images/DropFilerCluster1.png){.thumbnail}

Cliquez ensuite sur l'onglet `Multisites`{.action} pour récupérer le numéro du cluster où se trouve votre hébergement mutualisé.

![Récupérer cluster](images/DropFilerCluster2.png){.thumbnail}

> [!success]
>
> Si un incident ou une maintenance sont déclarés sur l'infrastructure où se trouve votre hébergement mutualisé, suivez ceux-ci jusqu'à leur résolution par nos administrateurs. **Aucune autre action n'est à réaliser à votre niveau**.
>
> Vous pouvez vous inscrire avec votre adresse e-mail à la déclaration d'incident ou de maintenance, afin d'être notifié par e-mail de l'avancée des opérations.
>
> Une fois le statut de l'incident ou de la maintenance marqué comme **résolu**, la stabilisation de la charge accumulée peut nécessiter un délai de **3 heures** maximum après la notification de résolution pour se résorber complètement.
>

Si aucun incident ou aucune maintenance ne sont déclarés, poursuivez vos diagnostics.

#### 1.2 - Tester le site sur plusieurs appareils

Testez votre site web depuis un autre appareil/ordinateur puis depuis un autre point d'accès à Internet. Le tout en vidant le cache de votre navigateur à chaque tentative, afin que votre site soit directement chargé depuis l'hébergement web.

#### 1.3 - Testez l'hébergement avec un fichier indépendant de votre site web

Placez, à la racine de votre site web dans l'[espace de stockage FTP de votre hébergement mutualisé](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/), un fichier que vous nommerez `phpinfo.php`.

Dans ce fichier, insérez le code suivant :

```bash
<?php
phpinfo();
?>
```

> [!warning]
>
> Dans certains cas, les fichiers « **.htaccess** » présents dans les répertoires/dossiers situés en amont ou au même niveau que l'endroit où vous avez placé votre fichier « **phpinfo.php** » peuvent influer sur l'affichage dans un navigateur Internet du « **phpinfo.php** ». 
>
> Les manipulations sur un fichier « **.htaccess** » peuvent avoir des conséquences sur l'affichage de votre site. Faites appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés à réaliser ce qui suit.
>
> S'il ne s'affiche pas et **uniquement pour les utilisateurs avertis**, renommez vos fichiers « **.htaccess** » en « **.htaccess_OLD** » afin que le serveur ne les exécutent plus le temps de votre test. Renommez-les correctement une fois votre diagnostic effectué.
>

**Exemple**: si le nom de domaine permettant l'accès à votre site est « domain.tld » et si le fichier « **phpinfo.php** » a bien été placé à la racine de votre site web, celui-ci sera accessible grâce à l'URL suivante : `http://domain.tld/phpinfo.php` (ou `https://domain.tld/phpinfo.php`).

> [!primary]
>
> Si l'appel du fichier « **phpinfo.php** » affiche **instantanément** un tableau de configuration, cela signifie que les ralentissements ne proviennent pas de l'hébergement mutualisé où se trouve votre site web. En effet, dans le cas contraire, ce fichier s'afficherait aussi lentement que vos autres pages. 
>
> En d'autres termes, si les lenteurs sont présentes uniquement sur une partie des pages ou du contenu de votre site web, cela signifie que l'hébergement mutualisé **n'est pas la cause des lenteurs** rencontrées sur votre site web.
>

#### 1.4 - Testez la connectivité de votre base de données :

Connectez-vous à votre base de données en suivant **l'étape 3** de notre guide sur la [création d'une base de données mutualisée](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/).

Si vous utilisez une base de données sur une offre **CloudDB**, consultez notre guide sur [la connexion à votre base de données présente sur une offre Cloud DB](https://docs.ovh.com/fr/clouddb/connexion-base-de-donnees-serveur-bdd/).

Si la connexion est réussie, vous arrivez sur l'interface suivante :

![PHPMyAdmin](images/pma.png){.thumbnail}

> [!warning]
>
> Si vous rencontrez une erreur, consultez notre documentation sur les [erreurs courantes rencontrées avec une base de données](https://docs.ovh.com/fr/hosting/erreurs-frequentes-bases-de-donnees/). Agissez ensuite à l'aide du guide ci-dessus pour corriger votre situation puis tentez à nouveau de vous connecter à votre base de données.
>

#### 1.5 - Interprétation des diagnostics effectués

**Cas n°1**

Les affirmations suivantes s'appliquent **toutes** à votre situation :

- au moins une page, un script ou un fichier (y compris le fichier « **phpinfo.php** ») s'est chargé(e) rapidement lors des tests de l'étape 1 ;
- la connexion à votre base de données s'est correctement effectuée lors des tests de l'étape 1.

> Cela signifie que les lenteurs que vous rencontrez proviennent directement des scripts qui composent votre site web. Vous pouvez passer directement à [l'étape 2](#step2) pour suivre les conseils d'optimisation afin de résoudre votre situation.

**Cas n°2**

Les affirmations suivantes s'appliquent **toutes** à votre situation :

- **aucun incident et aucune maintenance** ne sont déclarés, ou n'ont été déclarés comme **résolus** il y a moins de trois heures, pour vos services d'hébergement web sur notre site [status-ovhcloud.com](https://web-cloud.status-ovhcloud.com/) ;
- le **cas n°1** détaillé ci-dessus ne correspond pas à votre configuration.

> Des investigations côté OVHcloud seront nécessaires. Contactez nos services d'assistance sur les solutions Web, afin qu'ils confirment avec vous l'origine des ralentissements que vous rencontrez.

### Etape 2 - identifiez la (les) source(s) qui génère(nt) les lenteurs au niveau de votre site web <a name="step2"></a>

A ce stade, vous savez désormais que les ralentissements sont générés par les pages/scripts/fichiers qui composent votre site web.

> [!warning]
>
> Si vous éprouvez des difficultés pour réaliser les actions qui vont suivre, vous pouvez contacter l'un de nos [prestataires spécialisés](https://partner.ovhcloud.com/fr/). En effet, OVHcloud n'apportera pas d'assistance sur le développement et/ou l'optimisation du contenu de votre site web.
>

Retrouvez ci-après les actions à réaliser pour identifier la ou les source(s) des lenteurs et optimiser votre site web.

#### 2.1 - Vérifiez la configuration de votre hébergement web

Vérifiez le moteur PHP, la version PHP et l'environnement d'exécution utilisés sur votre hébergement web, en vous aidant de notre guide sur la [configuration de votre hébergement web](https://docs.ovh.com/fr/hosting/modifier-lenvironnement-dexecution-de-mon-hebergement-web/).

Si vous utilisez sur votre hébergement web une version de PHP obsolète, le moteur « **PHP CGI** » et/ou l'environnement « **legacy** » et **si votre site web est compatible**, privilégiez l'utilisation du moteur « **PHP** » (PHP FPM), l'environnement « **stable** » ou « **stable64** » avec la version de PHP la plus récente possible.

Pour comparer les versions de PHP disponibles en fonction de l'environnement d'exécution utilisé, consultez **l'étape 2** du guide sur la [configuration de la version PHP sur votre hébergement](https://docs.ovh.com/fr/hosting/configurer-le-php-sur-son-hebergement-web-mutu-2014/).

Utiliser une version de PHP récente, l'environnement d'exécution « **stable** » ou « **stable64** » avec le moteur « **PHP** » (PHP FPM) rend votre site beaucoup plus fluide et rapide. A titre indicatif, le moteur « **PHP** » (PHP FPM) peut être jusqu'à 50 fois plus performant que le moteur « **PHP CGI** » pour exécuter ses tâches.

#### 2.2 - Analysez les connexions sortantes / connexions TCP réalisées par votre hébergement web

Les connexions sortantes sont très gourmandes en terme de ressources. Quand ces connecions sont nombreuses, quand elles ne s'exécutent pas correctement ou quand elles restent active trop longtemps, elles monopolisent tellement de ressources au niveau de votre hébergement web qu'il n'en reste plus suffisamment pour faire fonctionner normalement le reste de votre site web. 

Cela se traduit par des ralentissements voire des codes « 504 gateway timeout ».

Pour analyser les connexions sortantes de votre hébergement, consultez les logs **OUT** de ce dernier. Vous pouvez vous aider de notre documentation sur [la consultation des logs de votre hébergement](https://docs.ovh.com/fr/hosting/mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/).

Si vous constatez qu'il y a beaucoup de connexions sortantes sur votre hébergement, comparez vos logs **OUT** avec vos logs **WEB** à l'aide de l'horodatage de ces derniers. Cela vous permettra d'identifier le ou les script(s) responsable(s) de cette situation.

Si vous utilisez un Content Management System (CMS) tel que WordPress, Joomla!, PrestaShop ou Drupal, identifiez le(s) plugin(s) et/ou le thème générant ce flux de connexions sortantes.

#### 2.3 - Analysez le flux de requêtes HTTP effectué vers votre hébergement web :

Pour effectuer cette action, consultez les logs **WEB** de votre hébergement web à l'aide de notre documentation sur [comment consulter les logs de votre hébergement](https://docs.ovh.com/fr/hosting/mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/).

Les requêtes les plus gourmandes en terme de ressources sont les requêtes HTTP de type **POST** puis celles de type **PUT**. Ces dernières effectuent respectivement des modifications et des insertions.

Les requêtes HTTP de type **GET** ne font que récupérer des éléments présents sur l'hébergement, pour les afficher dans votre navigateur Internet. Elles sont généralement peu gourmandes en terme de ressources. Elle peuvent toutefois générer des ralentissements si plusieurs centaines d'entre elles sont demandées chaque seconde sur un intervalle de plusieurs minutes.

Si vous constatez dans vos logs l'une des situations suivantes :

- des requêtes de type **POST** ou **PUT** sont effectuées plusieurs fois par minute et de manière permanente ;
- des requêtes **POST** ou **PUT** sont exécutées plusieurs fois par minute sur un même fichier.

Identifiez et optimisez alors le script/fichier en cause pour diminuer le flux de requêtes HTTP.

En effet, moins le nombre de requêtes sera élevé, moins les ressources allouées à votre hébergement mutualisé seront sollicitées.

> [!success]
>
> Pour identifier les éléments longs à se charger sur l'une des pages de votre site web, vous pouvez par exemple effectuer une analyse réseau à l'aide du navigateur **Firefox**. 
>
> Pour cela, appuyez sur la touche `F12` lorsque vous êtes sur votre navigateur Firefox puis sélectionnez l'onglet `Réseau`. Rechargez votre page web à l'aide des touches `Ctrl + Maj + R` pour que l'outil vous affiche les requêtes exécutées pour charger votre page. Identifiez les éléments les plus longs à charger pour ensuite les optimiser.
>
> ![Analyse réseau Firefox](images/F12.png){.thumbnail}
>

Pour diminuer le flux de requêtes à chacun des chargements de vos pages, vous pouvez également mettre en place un Content Delivery Network (CDN). Celui-ci permettra de mettre en cache le contenu statique de votre site web. Votre hébergement web sera moins sollicité et disposera de plus de ressources pour traiter le reste des requêtes qui ne peuvent pas être mises en cache.

> [!primary]
>
> OVHcloud propose plusieurs [offres CDN](https://www.ovhcloud.com/fr/web-hosting/options/). Si vous souhaitez en utiliser ou en activer une pour votre hébergement web, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) puis consultez notre guide sur [l'utilisation du CDN OVHcloud](https://docs.ovh.com/fr/hosting/accelerer-mon-site-web-en-utilisant-le-cdn/).
>

#### 2.4 - optimisez votre base de données

> [!warning]
>
> Les actions que vous réalisez dans votre base de données peuvent avoir des conséquences irréversibles si elles ne sont pas réalisées méthodiquement et correctement. Faites appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous n'êtes pas certain des actions à réaliser. 
>

Vérifiez si un nombre conséquent de requêtes sont effectuées vers votre base de données.<br>
En effet, cette situation peut engendrer une sur-sollicitation et aboutir à des ralentissements, voire à des codes « 504 Gateway Timeout ».

Vérifiez également la taille de vos tables présentes dans votre base de données.<br>
Si une table est appelée régulièrement et que celle-ci est volumineuse, le chargement de cette table peut se faire plus lentement et engendrer des requêtes lentes.<br>
L'accumulation de ces requêtes lentes peut générer un ralentissement d'accès au site, voire un code « 504 Gateway Timeout ».

Si vous avez des tables volumineuses ou des flux de requêtes en base de données conséquents, optimisez vos tables et mettez en place des solutions permettant de diminuer les flux de requêtes vers votre base de données.

Si vous constatez que des données inutilisées ou obsolètes sont présentes dans votre base de données, nettoyez celle-ci pour améliorer ses performances au quotidien.

#### 2.5 - Optimisez vos images

Si, par exemple, une image est présente sur votre site en résolution « 1000x2000 » et que celle-ci s'affiche au maximum en 100x200 pixels sur la page de votre site web, cela engendre une consommation de ressources côté hébergement qui peut être optimisée.

En effet, le serveur devra réaliser une opération de redimensionnement de l'image pour ensuite l’afficher à la taille demandée sur le site web.

Si votre site contient beaucoup d'images, cela peut représenter une consommation de ressources non négligeable au niveau des ressources allouées à votre hébergement.

Redimensionnez l'ensemble de vos images pour diminuer au maximum la consommation des ressources.

#### 2.6 - Optimisez le reste de votre site web

Consultez notre guide sur l'[optimisation des performances pour votre site Internet](https://docs.ovh.com/fr/hosting/optimisation-performances-site/).

Vous pouvez trouver des pistes d'optimisation pour votre site en l'analysant sur [gtmetrix.com](https://gtmetrix.com){.external} (ce site n'est pas affilié à OVHcloud).

> [!success]
>
> Indépendamment des lenteurs, plus votre site web sera optimisé, plus son référencement naturel dans les moteurs de recherche sera également optimisé.

### Conclusion

Si votre hébergement web et votre base de données **ne sont pas en cause** et que votre site web continue d'être lent, malgré la réalisation de **toutes les étapes** de ce guide, cela signifie probablement que l'offre que vous utilisez pour héberger votre site web n'est pas ou plus adaptée à votre besoin. 

Vous pouvez envisager une [offre d'hébergement mutualisée](https://www.ovhcloud.com/fr/web-hosting/) supérieure ou une infrastructure dédiée telle qu'un [Serveur Privé Virtuel (VPS)](https://www.ovhcloud.com/fr/vps/) ou un [Serveur Dédié](https://www.ovhcloud.com/fr/bare-metal/). 

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, consultez nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
