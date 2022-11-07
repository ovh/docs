---
title: "Résoudre les lenteurs rencontrées sur votre site" 
excerpt: "Diagnostiquez l'origine des lenteurs de votre site web"
slug: web-hosting-slownesses
section: Diagnostic
order: 01
---

**Dernière mise à jour le 04/11/2022**

## Objectif

L'objectif de cette documentation est de vous permettre de diagnostiquer l'origine des lenteurs que vous rencontrez sur votre site web afin d'agir en conséquence.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance **dès lors où l'infrastructure où votre offre d'hébergement mutualisé est présente n'est pas en cause**. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

**Découvrez comment diagnostiquer l'origine des lenteurs de votre site web**

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

> [!warning]
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

### Etape 1 : Déterminer si les lenteurs proviennent de l'hébergement ou de votre site web

Identifiez si les lenteurs proviennent de votre site en lui-même de part son fonctionnement interne ou de l'infrastructure d'hébergement mutualisé où il se trouve.

**Tous les diagnostics de l'étape 1 doivent être réalisés sans exception afin de déterminer si les ralentissements proviennent de vos services d'hébergement web ou de votre site internet que vous hébergez dessus.**

#### 1.1 : Vérifer l'état de vos services OVHcloud

Pour être sûr que vos services (hébergement mutualisé **et** base de données) ne font pas l'objet d'une maintenance ou d'un incident, récupérez le cluster et le filer de votre hébergement mutualisé ainsi que les informations générales relatives à votre base de données puis rendez-vous sur <https://web-cloud.status-ovhcloud.com/>.

Pour connaître le cluster et le filer où se trouve votre hébergement mutualisé, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la partie `Web Cloud`{.action}, cliquez sur `Hébergements`{.action} puis choisissez l'hébergement web concerné. Dans l'onglet `Informations générales`{.action}, repérez le **datacentre** de votre hébergement mutualisé ainsi que le filer **filer** où il se trouve.

![slowness](images/DropFilerCluster1.png){.thumbnail}

Cliquez ensuite sur l'onglet `Multisites`{.action} pour récupérez le numéro du cluster où se trouve votre hébergement mutualisé.

![slowness](images/DropFilerCluster2.png){.thumbnail}

> [!success]
>
> Si un incident ou une maintenance est déclaré sur l'infrastructure où se trouve votre hébergement mutualisé, suivez celle-ci jusqu'à sa résolution par nos administrateurs. **Aucune autre action n'est à réaliser à votre niveau**.
>
> Vous pouvez vous inscrire avec votre adresse e-mail à la déclaration d'incident ou de maintenance pour être notifié par mail de l'avancée des opérations.
>
> *Sachez qu'une fois que l'incident ou la maintenance est marqué comme **résolu**, un délais de stabilisation de la charge accumulée peut survenir. Ce dernier prendra au maximum **3 heures** après la notification de résolution pour se résorber complètement.*
>
> Si aucun incident ou aucune maintenance n'est déclaré, poursuivez vos diagnostics.
>

####  1.2 : Tester le site sur plusieurs appareils

Testez votre site internet depuis un autre appareil/ordinateur puis depuis un autre point d'accès à Internet. Le tout en vidant le cache de votre navigateur internet à chaque tentative afin que votre site soit directement chargé depuis l'hébergement.

####  1.3 : Tester l'hébergement avec un fichier indépendant de votre site web

Si, dans **tous les précédents tests** les lenteurs sont présentes, placez à la racine de votre site dans l'[espace de stockage FTP de votre hébergement mutualisé](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) un fichier que vous nommerez « phpinfo.php ».

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
> En d'autres termes, si les lenteurs sont présentes uniquement sur une partie des pages ou du contenu de votre site, cela signifie que l'hébergement mutualisé **n'est pas la cause des lenteurs** que vous rencontrez sur votre site web.
>

#### 1.4 : Testez la connectivité et la vitesse d'exécution de votre base de données :

Connectez-vous à votre base de données en suivant **l'étape 3** de notre guide sur la [création d'une base de données mutualisée](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/).

Si vous utilisez une base de données sur une offre **« Cloud DB »**, consultez notre guide sur [la connexion à votre base de données présente sur une offre Cloud DB](https://docs.ovh.com/fr/clouddb/connexion-base-de-donnees-serveur-bdd/).

Si la connexion est réussie, vous arrivez sur l'interface suivante :

![slowness](images/pma.png){.thumbnail}

Cliquez sur l'onglet `SQL`{.action} pour ouvrir le menu de saisie de commandes puis saisissez la commande « Benchmark » suivante : 

```bash
SELECT benchmark(1000000,1+2);
```

Cliquez ensuite sur `Go` pour lancer la requête.

![slowness](images/benchmark.png){.thumbnail}

Une fois l'exécution terminée, un temps d'exécution s'affiche avec le résultat de la commande « Benchmark » :

![slowness](images/benchmark2.png){.thumbnail}

Effectuez l'opération 3 fois en espaçant les essais de 5 minutes puis notez les temps d'exécution.

Le temps total d'exécution de la requête « Benchmark » ne doit pas excéder les valeurs suivantes en fonction de la base de données que vous utilisez :

- 1,4 secondes pour une base de données présente sur une offre **Cloud DB**
- 1,6 secondes pour une base de données mutualisée de type **perso**
- 1.7 secondes pour une base de données mutualisée de type **pro**

Si les temps d'exécution sont inférieurs aux valeurs ci-dessus, cela signifie que **l'infrastructure hébergeant votre base de données n'est pas en cause**.

Profitez-en pour vérifiez si un nombre conséquent de requêtes sont effectuées vers votre base de données.
En effet, cette situation peut engendrer une charge de traitement et dans certains cas aboutir à des ralentissements voire à des codes « 504 Gateway Timeout ».

Vérifiez également la taille de vos tables présentes dans votre base de données.
Effectivement, si une table est appelée régulièrement et que celle-ci est volumineuse, le chargement de cette table peut se faire plus lentement.
Cette situation peut engendrer des requêtes lentes.
Le cumul de ces requêtes peut se manifester par un ralentissement d'accès au site voire un code « 504 Gateway Timeout ».

Si vous avez des tables volumineuses ou des flux de requêtes en base de données conséquents, nous vous invitons à optimiser vos tables et à mettre en place des solutions permettant de diminuer vos flux de requêtes vers votre base de données.

#### Interprétation des diagnostics effectués lors de l'étape 1 :

**Cas 1 :** Si au moins une page, un script ou un fichier (y compris le fichier **« phpinfo.php »**) testés lors de l'étape 1 s'est chargé rapidement et que votre base de données a exécuté la commande « Benchmark » rapidement, cela signifie que les lenteurs que vous rencontrez provienent directement des scripts qui composent votre site. Vous pouvez passer directement à [l'étape 2](#step2) pour suivre les conseils d'optimisation afin de résoudre votre situation.

**Cas 2 :** Si au moins une page, un script ou un fichier (y compris le fichier **« phpinfo.php »**) testés lors de l'étape 1 s'est chargé rapidement, que la commande « Benchmark » excède les temps totaux d'exécution indiqués plus haut dans ce guide mais que vous avez constaté des tables volumineuses ou un flux de requêtes conséquent vers votre base de données, cela signifie que les lenteurs que vous rencontrez provienent directement des scripts qui composent votre site. Vous pouvez passer directement à [l'étape 2](#step2) pour suivre les conseils d'optimisation afin de résoudre votre situation.

**Cas 3 :** Si **aucun incident et aucune maintenance** n'est déclaré ou n'a été déclaré comme **résolu** il y a moins de trois heures pour vos services d'hébergement web sur notre site <https://web-cloud.status-ovhcloud.com/> et pour les cas autres que les **cas 1** et **2**, des investigations côté OVHcloud seront nécessaires. Contactez le support Web afin qu'ils confirment avec vous l'origine des ralentissements que vous rencontrez.

### Etape 2 : Identifier la (les) source(s) qui génère les lenteurs au niveau de votre site web <a name="step2"></a>

A ce stade du guide, vous savez désormais que les ralentissments sont générés par les pages/scripts/fichiers qui composent votre site web.

> [!warning]
>
> Si vous éprouvez des difficultés pour réaliser les actions qui vont suivre, vous pouvez contacter l'un de nos [prestataires spécialisés](https://partner.ovhcloud.com/fr/). En effet, OVHcloud n'apportera pas d'assistance sur le développement et/ou l'ioptimisation du contenu de votre site web.
>

Retrouvez ci-après quelques pistes à vérifier pour faire disparaître les ralentissements que vous rencontrez.

Cependant, j'ai observé les différents points suivants (pouvant expliquer les codes 504) :

-- Par moments, un certain nombre de connexions sortantes sont effectuées depuis votre site au travers de l'hébergement.
En effet, les connexions sortantes sont très gourmandes en termes de ressources et peuvent, dans certains cas, engendrer des ralentissements de votre site et même des codes « 504 gateway timeout ».
Je vous conseille de vérifier quel(s) élément(s) de votre site génère(nt) cette situation.
S'il s'agit d'un CMS (Wordpress, Joomla, Prestashop, Drupal, ...), je vous invite à identifier le(s) plugin(s) et/ou thème générant ce flux de connexions sortantes.

Afin de retrouver ces connexions sortantes dans les logs de votre hébergement, vous pouvez consulter la seconde partie du guide présent ci-dessous :
https://docs.ovh.com/fr/hosting/mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/

-- Le fichier de configuration de votre hébergement peut également être optimisé.
Ceci afin que le fonctionnement de votre site soit un peu plus "fluide".
Si possible (et si vos sites sont compatibles), je vous invite à optimiser votre configuration d'hébergement en "php 7.0 stable" (minimum) à l'aide du guide présent ci-dessous :
https://docs.ovh.com/fr/hosting/modifier-lenvironnement-dexecution-de-mon-hebergement-web/

-- Par moments, un certain nombre de requêtes sont effectuées vers votre site sur des intervalles assez courts.
Cela peut également, dans certains cas, augmenter la sollicitation du service, générer des ralentissements et même des codes 504 timeout.
Je vous invite à vérifier si le nombre de requêtes (appelées pour charger l'une des pages de votre site) ne peut pas être optimisé.
Effectivement, moins le nombre de requêtes sera élevé, moins de ressources allouées à votre hébergement mutualisé seront nécessaires pour charger la page.

Afin d’analyser les logs web de votre hébergement, je vous invite à consulter le guide ci-après :
https://docs.ovh.com/fr/hosting/mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/

-- Si votre site internet contient beaucoup d'images, je vous préconise de vérifier si celles-ci sont optimisées et ne nécessitent pas un redimensionnement lors de l'affichage sur votre site.

Par exemple, si une image est présente sur votre site en résolution « 1000x2000 » et que celle-ci s'affiche au maximum en 100x200 pixels sur la page de votre site, cela peut engendrer une consommation de ressources côté hébergement qui peut être évitée.
Effectivement, le serveur (en plus des autres actions qu'il doit effectuer) devra réaliser une opération de redimensionnement de l'image pour ensuite l’afficher à la taille demandée sur le site.
Si votre site contient beaucoup d'images, cela peut représenter une consommation non négligeable au niveau des ressources allouées à votre hébergement.



De manière plus générale, je vous invite à consulter le guide présent ci-dessous concernant l'optimisation de performance pour un site internet :
https://docs.ovh.com/fr/hosting/optimisation-performances-site/

Vous pouvez également retrouver des pistes d'optimisation de votre site en l'analysant sur la page https://gtmetrix.com (non gérée par OVHCloud).