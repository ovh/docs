---
title: 'Optimisation des performances de votre site'
excerpt: "Vous trouverez dans ce guide differents conseils concernant l'analyse des lenteurs sur votre site web, ainsi que des pistes d'amelioration."
updated: 2024-01-08
---

## Objectif

Ce guide est destiné aux clients qui souhaitent améliorer le rendement de leur site web.
Il vous permettra d’acquérir des connaissances fondamentales au sujet des facteurs qui peuvent affecter le rendement des sites web.

**Découvrez comment améliorer le rendement de votre site web.**

> [!warning]
> Ce cas d’application vous montrera comment utiliser une ou plusieurs solutions OVHcloud avec des outils externes. Il décrit les mesures à appliquer dans un contexte précis. Veuillez noter que ces mesures doivent être adaptées à votre cas particulier. Si vous éprouvez des difficultés à appliquer ces mesures, veuillez contacter un prestataire de services spécialisés et/ou posez la question à notre [communauté d'utilisateurs](/links/community). OVHcloud ne peut pas vous fournir d’assistance technique à ce sujet.

## Prérequis

- Un [hébergement web OVHcloud](/links/web/hosting){.external}
- Un e-mail confirmant que votre hébergement web a été configuré;
- Un [nom de domaine](/links/web/domains){.external} lié à votre hébergement web;
- Être connecté à votre [espace client OVHcloud](/links/manager){.external}.

## En pratique

### Étape 1 : Définir la portée du problème

#### Les questions auxquelles vous devez répondre :

Si votre site web est lent, il est important de poser les questions ci-dessous pour préciser la portée du problème.

1. **Quand avez-vous remarqué un ralentissement sur votre site web ?**

Cette question vous aide à déterminer si le temps de latence est provoqué par une modification récente au site web, notamment un plugin mal optimisé ou un nouveau thème, susceptible d’envoyer de nombreuses demandes sortantes, qui pourraient être à l’origine du ralentissement de votre site web.

2. **S’agit-il d’un problème ponctuel ou le ralentissement est-il permanent?**

Il serait judicieux de noter la date à laquelle vous avez constaté un ralentissement sur votre site, de déterminer ensuite si ce ralentissement est imputable à une pointe de trafic, ou si d’autres tâches ont commencé à s’exécuter sur l'hébergement au même moment.

3. **Le ralentissement affecte-t-il tout le site web ou juste une partie de celui-ci?**

Si le problème concerne seulement une seule page et non tout le site web, il est impératif d’analyser cette page en particulier et de vérifier la requête ou le script qui serait à l’origine du temps de latence.

4. **Le site affiche-t-il une page d’erreur ? Si oui, de quel type ?**

Vérifiez si des erreurs sont créées pour identifier la source du temps de latence. Pour avoir un meilleur aperçu des erreurs qui surviennent sur votre hébergement, veuillez consulter les fichiers journaux.

Les réponses à ces questions peuvent vous aider à cibler certains points spécifiques et à identifier les zones problématiques pour améliorer le rendement du site.

L’utilisation des CMS comme WordPress, PrestaShop, Drupal ou Joomla! nécessite plusieurs bibliothèques pour qu’une seule page web puisse gérer un grand nombre d’éléments.
Les navigateurs Internet doivent pouvoir charger et lire tous ces éléments.
Nous fournissons des recommandations sur les solutions offertes par l’hébergement web, lesquelles peuvent être utilisées pour les CMS répertoriés ci-dessus sur la [page du produit](/links/web/hosting){.external}.

Pour plus d’information sur les différents forfaits offerts, veuillez consulter [cette page](/links/web/hosting-best-web){.external}.

### Étape 2 : Vérification de la version PHP

Utiliser la dernière version de PHP compatible avec votre site peut avoir une influence considérable sur son rendement.
Pour vérifier si votre site web est compatible avec la dernière version PHP, veuillez vous référer à [la documentation officielle de PHP](https://php.net/eol.php){.external}.

**PHP-FPM**

Nous avons adapté PHP-FPM à notre infrastructure web afin d’accélérer les réponses PHP et de réduire substantiellement la charge du processeur central.
Des tests ont révélé un rendement jusqu’à **7 fois supérieur** à l’ancien mécanisme.

Certaines variables du serveur sont modifiées par l’utilisation de PHP-FPM :

|Variable|sans PHP-FPM|avec PHP-FPM|
| ------------- |:-------------:| -----:|
|max_execution_time|120 s|165 s|
|max_input_vars|2 000|16 000|
|memory_limit|128 Mo|512 Mo|

Pour plus d’information sur les mises à jour PHP, veuillez vous référer à [ce guide](/pages/web_cloud/web_hosting/configure_your_web_hosting){.externe}.

Pour basculer vers l’utilisation de PHP-FPM en version _stable_ ou pour en savoir plus sur les options avancées de votre hébergement web, veuillez consulter [ce guide](/pages/web_cloud/web_hosting/configure_your_web_hosting).

Le fichier _.ovhconfig_ fonctionne à la racine de l’hébergement ou dans un sous-répertoire de niveau 1 (ex. : _/www/_) mais pas dans des répertoires de niveau 2 ou supérieurs (ex. : _/www/test/_ , _/www/test/test2/_)

### Étape 3 : Vérification du contenu média (images, vidéos...)

Lorsqu’on accède à un site web, tout le contenu doit pouvoir être téléchargé par le navigateur.

D'importants ralentissements peuvent être constatés si l'on tente d’accéder à un site web non optimisé depuis un appareil mobile.

L’utilisation d’images et des vidéos compressées constitue un excellent moyen de diminuer le temps de chargement.
De nombreux algorithmes et outils peuvent être utilisés pour optimiser votre contenu. Il existe par ailleurs des plugins pour la plupart des CMS courants.
C’est à vous de choisir ceux qui répondent à vos besoins spécifiques.

Pour plus d’information à ce sujet, veuillez vous référer à l’étape 5 ci-dessous.

### Étape 4 : Optimisation de vos scripts

Établissez une corrélation entre les graphiques d’utilisation des ressources de votre hébergement (voir ci-dessous pour plus d’information) pour déterminer l’origine des retards et consultez les fichiers journaux en vous référant aux dates de ces pointes d’utilisation.

Vous pouvez accéder à vos logs, aux statistiques et aux graphiques directement à partir de [l’espace client OVHcloud](/links/manager){.external}.

Comment accéder aux statistiques et logs :

1. Cliquez sur `Hébergement`{.action} dans la colonne de gauche puis sélectionnez l'hébergement web concerné.
2. Sur la page qui s'affiche, cliquez sur l’onglet `Statistiques et logs`{.action}.
3. Cliquez ensuite sur le bouton `Voir les statistiques`{.action} affiché pour accéder aux statistiques de visite du site web ou sur `Voir les logs`{.action} pour consulter les logs disponibles pour votre hébergement web.

![logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/tab.png){.thumbnail}

Comment accéder aux graphiques :

1. Cliquez sur `Hébergement`{.action} dans la colonne de gauche puis sélectionnez l'hébergement web concerné.
2. Sur la page qui s'affiche, cliquez sur l’onglet `Statistiques et logs`{.action}. Défilez jusqu’au bas de la page où se trouve le graphique lié à l’utilisation de votre hébergement.
3. Sélectionnez le **type** d’information ainsi que la **période** des données affichées.

![graphs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/infrastructure-statistics-graph.png){.thumbnail}

Quels sont les différents types de renseignements qui peuvent être affichés ?

- **Requêtes HTTP**: Indique le nombre moyen de consultations du site. Les consultations sont classées selon le statut HTTP 2xx/3xx/4xx/5xx.

- **Temps de réponse moyen**: Indique le temps de réponse moyen d’une page. Il y a une distinction entre les pages statiques et les pages dynamiques.

- **Dépassement du seuil des ressources**: Ce graphique illustre l’utilisation par les travailleurs PHP pour vous orienter vers un forfait d’hébergement web différent le cas échéant. L’utilisation de PHP-FPM peut contribuer à la diminution des travailleurs PHP.

- **Utilisation du processeur central** : Affiche l’utilisation du processeur central par votre site web. Elle pourrait vous permettre d’identifier une surcharge éventuelle du processeur central.

- **Connexions sortantes**: Cette fonctionnalité vous permet de voir la requête TCP émise par le serveur; par exemple en cas de piratage de votre site web, le serveur pourrait être utilisé pour attaquer d’autres sites web externes. Vous pouvez également vérifier les appels externes envoyés par des modules comme Facebook, Twitter etc. La réduction du nombre de requêtes TCP sortantes constitue un excellent moyen de diminuer le temps de chargement, car si le serveur dont vous sollicitez le contenu tarde à répondre, le temps de chargement de votre site web augmentera.

- **Commandes FTP** : Affiche les différentes commandes FTP qui ont été utilisées par l’hébergement. Par exemple, les tentatives de connexion qui ont réussi et en échec, les téléchargements, les chargements et la suppression des fichiers, etc.

Les deux catégories suivantes sont visibles seulement si vous utilisez actuellement une base de données dans votre forfait d’hébergement. Sélectionnez le nom de votre base de données et la période souhaitée.

- **Temps de réponse SQL** : Affiche le temps de réponse aux requêtes.

- **Requêtes SQL**: Affiche le nombre de requêtes.

### Étape 5 : Vérification des requêtes sur le réseau

La [Surveillance réseau](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor){.external} constitue un outil d’analyse utile qui est intégré au navigateur Mozilla Firefox et qui permet d’analyser en détail le temps de chargement d’une page web. 

Avec cet outil, vous pouvez vérifier les éléments de votre site qui sont plus lents ou plus lourds à charger.
Il permet de circonscrire les images et le contenu qui augmentent la durée de chargement du site web et de définir des priorités si une optimisation est nécessaire.

Vous pouvez accéder à cet outil en appuyant sur la touche F12 de votre clavier (sur Firefox ou Chrome),

La réduction du nombre de requêtes TCP sortantes constitue également un excellent moyen de diminuer le temps de chargement, car si le serveur dont vous sollicitez le contenu tarde à répondre, le temps de chargement de votre site web augmentera également.

**CDN**

Pour améliorer l’accès au site web, les téléchargements et profiter d’un référencement naturellement optimisé, vous pourriez utiliser le OVHcloud CDN (Content Delivery Network) pour stocker vos fichiers, applications et sites à un endroit plus proche de vos utilisateurs finals.

Ainsi, vous améliorez le temps de réponse pour les visiteurs dans le monde entier puisque les parties statiques de votre site web seront téléchargées directement par votre visiteur au point de présence le plus proche de leur emplacement.

Découvrez notre [solution CDN](https://www.ovh.com/fr/cdn/){.external}. 

### Étape 6 : Contrôle du système de gestion du contenu (CMS) et des plugins utilisés

> [!primary]
> Cette étape est facultative si vous n’utilisez pas de CMS.

Pour vous assurer que votre forfait d’hébergement est adaptée aux besoins de votre CMS, vous pouvez consulter une comparaison de nos services sur [la page du produit](/links/web/hosting){.external}. 

- **Utilisation d’un plugin en cache :** L’utilisation d’un CMS implique de nombreuses bibliothèques, si bien qu’une seule page web peut devoir traiter un grand nombre d’éléments. Pour optimiser votre CMS, vous devez utiliser plusieurs plugins en cache pour éviter une régénération du contenu de votre site web chaque fois que le chargement d’une page est en cours. Il est recommandé de rechercher des plugins en cache sur les sites web de la communauté associés au CMS que vous utilisez (Joomla! - PrestaShop - WordPress) pour éviter la régénération de tout le contenu de votre site web chaque fois que vous chargez la page web.

- **Désactivation des plugins non utilisés :** Il serait judicieux de désactiver, voire de supprimer, les plugins non utilisés pour améliorer le rendement de votre site web. Ceci évitera de télécharger des éléments inutiles.

### Étape 7 : Optimisation de votre base de données

> [!primary]
> Cette étape est facultative si vous n’utilisez pas de base de données.

Vous pouvez accéder à votre base de données à l’aide de PHPMyAdmin; l'utilisation détaillée de PHPMyAdmin va au-delà de la portée de ce guide. Par conséquent, nous n’aborderons pas le sujet en détail.
Toutefois, il existe un grand nombre de guides externes qui traitent le sujet.

**Comment accéder à la base de données par le biais de phpMyAdmin :** Pour accéder à votre base de données par le biais de phpMyAdmin, procédez comme suit à partir de [l’espace client OVHcloud](/links/manager){.external} :

- Cliquez sur votre domaine dans la section `Hébergement`{.action} ;

- Cliquez sur l’onglet `Base de données`{.action} ;

- Cliquez sur les 3 points `...`{.action} à droite de votre base de données pour accéder à phpMyAdmin.

**Pourquoi optimiser une base de données?** 

Vous devez entretenir votre base de données pour qu’elle continue de bien fonctionner. Autrement dit, les informations contenues dans la base de données doivent être renvoyées au script qui les a demandées le plus tôt possible. Pour ce faire, la base de données doit être bien structurée et optimisée. Nous allons voir comment optimiser votre base de données.

#### Dans la base de données

- **Indexer la base de données :** Pour augmenter la vitesse des recherches pendant une requête, vous devez indexer les champs qui sont utilisés dans les clauses WHERE. Par exemple : Vous recherchez souvent une personne par ville. Vous devez indexer le champ « ville » avec la requête suivante :

```
ALTER TABLE `test` ADD INDEX (`ville`);
```

- **Nettoyer la base de données :** Existe-t-il des données que vous n’utilisez plus? Pourquoi ne pas les archiver? Cela permet de réduire la taille de vos tables de données et il faudra moins de temps pour interroger la base de données.

#### Dans vos scripts

- **Afficher la limite :** Restreignez le nombre de résultats affichés (par exemple : 10 par page) dans la partie LIMITE de votre requête SQL.

- **Ordonner les requêtes :** Regroupez vos requêtes au début du script comme suit :

```
open_connection
requête1
requête2
...
close_connection

Afficher...
Traiter les données
Bouclage des données...
Afficher...
...
```

Une déconnexion après la requête permet au serveur de la base de données d’être immédiatement disponible pour d’autres requêtes (et évite l’erreur “User already has more than *max_user_connections* active connections”).

#### Optimiser votre base de données en utilisant la mémoire cache

- S’il y a dans votre base de données des éléments qui ne chargent pas, vous devez les mettre en cache. Cette astuce réduit substantiellement la nécessité d’accéder à votre base de données et accélère le temps de chargement de votre site.

- Vous pouvez également exécuter une session en cache, en d’autres termes, vous mettez les résultats de la recherche dans une variable de session. De cette façon, vous n’avez pas besoin d’exécuter une requête identique la prochaine fois; il suffit de récupérer les variables de la session.

- Récupérez seulement les données utilisées : Dans vos requêtes SQL, assurez-vous que vous avez sélectionné uniquement ce dont vous avez besoin, et que vous n’avez pas oublié les liens entre les tableaux.

Par exemple :

```
(where table1.champs = table2.champs2)
```

#### Éviter les options qui font appel à une utilisation intensive des ressources :

Évitez d’utiliser la clause « HAVING » qui peut ralentir les recherches. Évitez également la clause « GROUP BY », à moins que son utilisation soit absolument nécessaire.

#### Web Cloud Databases
Si, en dépit de toutes les modifications et mesures d’optimisation que vous avez appliquées, la base de données est toujours lente, ou si un grand nombre de requêtes sont envoyées à la base de données, vous pourrez éventuellement opter pour notre offre Web Cloud Databases pour disposer de plus de ressources.
[Consulter notre offre Web Cloud Databases sur le site](/links/web/hosting-options-startsql){.external}.

## Aller plus loin

[Modifier la configuration d’un d’hébergement web](/pages/web_cloud/web_hosting/configure_your_web_hosting){.externe}

[Créer une base de données sur son hébergement web](/pages/web_cloud/web_hosting/sql_create_database){.external}

[Premiers pas avec le service Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb){.external}

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).