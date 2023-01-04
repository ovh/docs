---
title: 'Travailler avec les routes HTTP'
slug: routes
excerpt: 'Dirigez dynamiquement vos requêtes vers une ferme en particulier'
section: Configuration
---

**Dernière mise à jour le 09/04/2018**

## Objectif

Le service Load Balancer OVH redirige le trafic arrivant sur un Frontend vers les Serveurs de la Ferme par défaut de ce Frontend, ou sa redirection par défaut.

Dans certains cas, il est possible d'aller plus loin, et de router, rediriger ou rejeter le trafic selon divers critères. Par exemple, dans le cas d'un service HTTP(S), il est possible de filtrer le trafic en fonction de la méthode HTTP, de l'URL ou même de la valeur d'un Cookie ou d'un En-Tête ! Dans le service OVH Load Balancer, ce sont les `route`{.action}. Une route est une action particulière à réaliser si une ou plusieurs conditions sont réalisées.

## Prérequis

- Disposer d'un [Load Balancer OVH](https://www.ovh.com/ca/fr/solutions/load-balancer/){.external} sur une offre autorisant la création des routes
- Avoir accès à l'[API OVH](https://ca.api.ovh.com/){.external}.

## En pratique

> [!primary]
>
> Bien que ce guide se concentre sur les routes HTTP, le même principe fonctionne en TCP (avec les routes TCP). Cela peut servir pour diriger le trafic HTTP/2 vers une ferme en particulier ou pour rejeter les requêtes venant de certaines IPs.
> 

Cette fonctionnalité étant encore très jeune, elle est uniquement disponible dans l'API. Ce guide vous présentera les principes généraux ainsi que des scénarii d'utilisation des routes tirés de cas d'usages réels.

- **Introduction aux routes**

Une route sert à contrôler le trafic selon différents critères. Il est possible de les exprimer sous la forme de règles, ou conditions, et d'une action.

Par exemple, *SI* l'URL _commence_ par '/wp-admin/' (1) *ET* que la connexion _est_ en HTTP (2) *ALORS* _rediriger_ vers la version HTTPS de la page (3).

Dans cet exemple, il y a deux règles :

- la connexion doit venir d'un frontend HTTP (2) ;
- son URL doit commencer par les pages d'administration de WordPress (1).

Associée à ces règles, il y a une action : rediriger vers la version HTTPS de la page (3).

Il s'agit d'une action « finale ». C'est à dire que si les règles sont validées, l'évaluation des routes s'arrête et l'action est exécutée.

## Présentation de l'API

La gestion des routes n'est accessible qu'au travers de l'[API OVH](https://ca.api.ovh.com/){.external}. Elle est valide uniquement pour les protocoles `http`{.action} et `tcp`{.action}, le chemin `/ipLoadbalancing/{serviceName}/{protocole}/route/`{.action} expose l'API dédiée aux routes.

L'API des routes de votre service OVH Load Balancer a été pensée spécialement pour être souple, puissante et évolutive. Elle est organisée autour de trois sections principales :

1. les API listant les règles et actions disponibles.
2. les API listant les routes configurées sur votre service OVH Load Balancer.
3. les API de configuration des routes de votre service OVH Load Balancer.

> [!primary]
>
> Pour n'afficher que les API liées aux routes dans la console d'API OVH, vous pouvez utiliser le champ `filter`{.action} avec le mot clé route.
> 

Lorsque vous souhaitez configurer une route ou des règles, la première chose à faire est de consulter les actions et les règles disponibles. Cela vous donnera les valeurs possibles pour les champs des APIs de configuration des routes et des règles.

- Une route peut avoir plusieurs Règles.
- Une route peut être attachée à un et un seul Frontend.
- Un Frontend peut avoir plusieurs routes. Dans ce cas, l'ordre d'évaluation dépend de leur type et de leur poids.

Quand une requête arrive sur votre service OVH Load Balancer, les routes sont évaluées successivement en suivant ces principes :

1. d'abord les routes de type reject et rewrite puis enfin les routes de type farm ;
1. à l'intérieur de ces catégories, les routes sont évaluées par poids croissant ;
1. si deux routes ont le même poids, la première créée sera la première évaluée ;
1. seule la première action dont toutes les règles sont validées est exécutée.

### Règles et actions disponibles
Cette première section de l'API contient une liste à jour des actions et règles disponibles pour votre service OVH Load Balancer. Elle contient un appel pour les actions et un autre pour les règles. Ces 2 appels retournent une liste d'objets. Chaque objet indique son nom et s'il s'applique aux routes TCP ou aux routes HTTP ainsi que les valeurs ou types de valeur attendues pour les différents champs de l'API. Si un champ est "null", cela signifie qu'aucune valeur n'est attendue. Si une valeur invalide est fournie, l'API retournera une erreur de validation.


#### Actions

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/availableRouteActions
> 

Pour plus d'information sur cet appel, nous vous invitons à consulter la section [Actions disponibles](#actions-disponibles){.internal}, en bas de ce guide.


#### Règles

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/availableRouteRules
> 

Pour plus d'information sur cet appel, nous vous invitons à consulter la section [Règles disponibles](#regles-disponibles){.internal}, en bas de ce guide.


### Routes configurées
Cette deuxième section de l'API ne contient qu'un seul appel. Il a principalement été pensé pour faciliter l'implémentation de mécanismes d'auto-complétion. Il retourne l'identifiant, le nom et le type de chaque route définie. Les détails d'une route peuvent être obtenus avec un appel GET /ipLoadbalancing/{serviceName}/route/{type}/{routeId} défini plus bas.


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/definedRoutes
> 

Pour plus d'information sur cet appel, nous vous invitons à consulter la section [Manipulation des routes](#manipulation-des-routes){.internal}, en bas de ce guide.


### Configuration des routes
Avec ces principes de base que sont les actions et règles disponibles et l'ordre d'évaluation des routes, les routes peuvent être manipulées de la même manière que les Farms. Création d'une Route, sur laquelle il est possible d'attacher des Règles. Les valeurs possibles pour les règles et les actions étant définies par les appels d'API.

Pour plus d'informations sur ces méthodes, vous pouvez consulter la section [Manipulation des routes](#manipulation-des-routes){.internal}, en bas de ce guide.


## Exemples
Si vous n'êtes pas encore convaincu par la puissance des routes, cette section devrait vous convaincre pour de bon. Sans rentrer dans le détail des appels d'APIs, elle a pour vocation de présenter comment réaliser plusieurs cas d'utilisation inspirés de nos besoins internes chez OVH.

Vous trouverez le détail des appels d'API dans la section [Manipulation des routes](#manipulation-des-routes){.internal}, en bas de ce guide et les sections suivantes.


### Forcer le HTTPS pour les pages de login WordPress
Le HTTPS est devenu la norme. L'objectif est de rendre tous les sites disponibles de manière sécurisée en HTTPS grâce au protocole SSL/TLS. Si vous avez besoin d'un certificat SSL/TLS, vous pouvez utiliser votre service OVH Load Balancer pour en commander un qui sera géré pour vous de manière complètement automatique.

Migrer un site en HTTPS demande du travail, notamment pour éviter les problèmes de "[Mixed-Content](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content){.external}". Il peut être intéressant de migrer section par section, en commençant par sécuriser les pages envoyant des identifiants.

Une approche pourrait être de se baser sur le début des URLs WordPress. Par défaut, l'URL des pages de connexion de WordPress commencent par "/wp-login". Nous aurions donc besoin :

- d'une route avec une action de redirection ;
- d'un règle dans cette route qui détecte les URLs commençant par "/wp-login".

Dans la pratique, cela donne une route :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVH Load Balancer|
|frontendId|Identifiant de votre Frontend HTTP|
|displayName|"Redirection des connexions WordPress vers HTTPS"|
|weight|(vide)|
|action.type|"redirect"|
|action.status|302 pour une redirection temporaire, 301 pour une redirection permanente|
|action.target|"`https://${host}${path}${arguments}`" pour reprendre le même host, chemin et arguments|

Et sur cette route, on vient attacher une règle :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVH Load Balancer|
|routeId|Identifiant de la Route créée juste au dessus|
|field|"uri"|
|subField|(vide)|
|match|"startswith"|
|negate|false|
|pattern|"/wp-login"|

Il ne reste qu'à appliquer la configuration dans la zone concernée et le tour est joué.



> [!warning]
>
> Pour ajouter une nouvelle redirection, il faudra renouveler cette opération. Création d'une route, puis création d'une règle. Si une seconde règle est ajoutée sur la même route, les 2 devront être validées pour que la redirection fonctionne. Concrètement, si les règles sont "startswith /wp-login" et "startswith /wp-admin", la redirection ne fonctionnera jamais car il est impossible que ces 2 conditions soient vraies simultanément.
> 


### Router en fonction d'un domaine (VHost)
C'est la fonctionnalité qui a rendu possible l'essor du web quand il en était à ses balbutiements, avec la possibilité d'exposer plusieurs sites derrière une même adresse IP grâce au champ "Host" des En-Têtes HTTP.

Par exemple, si votre infrastructure est composée d'un VPS par site Internet et d'un service OVH Load Balancer pour assurer la terminaison SSL/TLS et la redirection vers une page de maintenance avec un serveur de "backup" dans les Farms, il était auparavant nécessaire de disposer d'une Additional IP par site, routée vers votre service OVH Load Balancer et un Frontend par IP.

Avec les routes, il devient possible de mutualiser le même Frontend et choisir la Farm de serveurs dynamiquement en fonction du champ "Host".

Pour cela, vous aurez besoin :

- d'une Route par VHost ;
- d'une Règle par Route détectant un domaine spécifique.

Dans la pratique, pour router le domaine www.example.com, cela donne une route :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVH Load Balancer|
|frontendId|Identifiant de votre Frontend|
|displayName|"VHost - www.example.com"|
|weight|(vide)|
|action.type|"farm"|
|action.status|(vide)|
|action.target|Identifiant de la Farm vers laquelle diriger ce domaine|

Et sur cette route, on vient attacher une règle :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVH Load Balancer|
|routeId|Identifiant de la Route créée juste au dessus|
|field|"host"|
|subField|(vide)|
|match|"is"|
|negate|false|
|pattern|"www.example.com" ou le domaine de votre choix|

Il ne reste qu'à appliquer la configuration.


### Réserver une Additional IP à un site en particulier
Si l'on reste sur le scénario de l'hébergement à base de VPS, on peut souhaiter dédier une adresse IP à un client donné. Rendre l'IP disponible se fait facilement en la routant vers votre service OVH Load Balancer puis en configurant un Frontend dédié attaché à cette adresse Additional IP et ayant comme defaultFarmId le VPS cible de ce client.

Néanmoins, que se passe-t-il si un autre client détecte cela et configure son domaine pour pointer vers l'adresse IP du client premium ? Par défaut, cela fonctionnera et son site sera routé vers l'autre VPS. S'il y a un certificat SSL/TLS, cela fonctionnera quand même car l'ensemble des certificats sont automatiquement disponibles pour l'ensemble des Frontends.

Dans ce scénario, l'idée est d'ajouter une règle qui va rejeter les requêtes si le domaine n'est pas le domaine premium. Cela peut se faire simplement avec une route de rejet et une règle.

Dans la pratique, pour réserver un Frontend avec une IP dédiée au domaine www.example.com, cela donne une route :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVH Load Balancer|
|frontendId|Identifiant de votre Frontend|
|displayName|"Restrict to www.example.com"|
|weight|(vide)|
|action.type|"reject"|
|action.status|403|
|action.target|(vide)|

Et sur cette route, on vient attacher une règle :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVH Load Balancer|
|routeId|Identifiant de la Route créée juste au dessus|
|field|"host"|
|subField|(vide)|
|match|"is"|
|negate|true|
|pattern|"www.example.com" ou le domaine de votre choix|

Il ne reste qu'à appliquer la configuration.


### Router en fonction d'une URL et d'une méthode HTTP
Sur certaines infrastructures spécifiques, il est nécessaire de router certaines requêtes vers une Farm spécifique. Par exemple, pour gérer des requêtes rares mais coûteuses sans impacter de la production telles que des requêtes analytiques que l'on ferait fonctionner sur un réplicat en lecture seul des données avec une machine avec plus de mémoire.

Disons par exemple que la requête est envoyée :

- avec la méthode POST ;
- sur une URL correspondant à "^/.*/batch-analytics$"

Pour cet exemple, vous aurez besoin d'une route avec 2 règles, l'une d'entre elles utilisant une expression régulière.

Dans la pratique, cela donne une route :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVH Load Balancer|
|frontendId|Identifiant de votre Frontend|
|displayName|"Route batch analytics to dedicated farm"|
|weight|(vide)|
|action.type|"farm"|
|action.status|(vide)|
|action.target|Identifiant de la Farm vers laquelle diriger ces opérations|

Et sur cette route, on vient attacher 2 règles :

|Champ|Règle 1|Règle 2|
|---|---|---|
|serviceName|Identifiant de votre service OVH Load Balancer|idem|
|routeId|Identifiant de la Route créée juste au dessus|idem|
|field|"method"|"uri"|
|subField|(vide)|(vide)|
|match|"is"|"matches"|
|negate|false|false|
|pattern|"POST"|"^/.*/batch-analytics$"|

Ici, la première règle s'applique sur une énumération. Seules les méthodes HTTP standards sont disponibles. La deuxième règle au contraire exploite toute la puissance des routes en utilisant une expression régulière. Bien que ce soit possible d'utiliser de telles expressions, si vous pouvez vous en passer, les performances n'en seront que meilleures.

Il ne reste qu'à appliquer la configuration dans la zone concernée.


### Router certaines IP et les clients volontaires vers la preproduction
Quand un site prend de l'ampleur, on peut souhaiter mettre en place un environnement de préproduction permettant de valider les évolutions en cours, sans impacter la majorité des utilisateurs. Généralement, lorsque l'on configure ce type environnement, on cherche à réduire autant que possible l'écart entre la production et la préproduction de manière à détecter les problèmes avec le plus de précision possible. Une source de problème classique et pourtant souvent négligée est le nom de domaine. Il est parfois codé "en dur" dans un fichier ou un article. À ce moment, un lien pourra fonctionner en préproduction mais pas en production. Oups...

Au lieu de mettre en place des règles basées sur le nom de domaine, on pourrait mettre en place des règles basées sur l'adresse IP source (par exemple, un proxy d'entreprise) et, éventuellement un Cookie pour les clients volontaires. Ces configurations peuvent être détectées avec deux routes sur votre service OVH Load Balancer.

Pour cet exemple, on considérera :

- que le proxy d'entreprise peut utiliser les adresses 42.42.42.0/24 et que le VPN utilise 1.2.3.4/32 ;
- que les utilisateurs volontaires ont un Cookie "PreprodOptIn", dont la valeur n'a pas d'importance.

Dans la pratique, vous aurez besoin de deux routes identiques :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVH Load Balancer|
|frontendId|Identifiant de votre Frontend|
|displayName|"Route Opt-In and internal users to preproduction environment"|
|weight|(vide)|
|action.type|"farm"|
|action.status|(vide)|
|action.target|Identifiant de la Farm de préproduction|

Puis on vient attacher les 2 règles suivantes, chacune sur une des routes (1 règle par route) :

|Champ|Règle 1|Règle 2|
|---|---|---|
|serviceName|Identifiant de votre service OVH Load Balancer|idem|
|routeId|Identifiant de la 1ère Route|Identifiant de la 2ème Route|
|field|"source"|"cookie"|
|subField|(vide)|"PreprodOptIn"|
|match|"in"|"exists"|
|negate|false|false|
|pattern|"42.42.42.0/24, 1.2.3.4"|(vide)|

La première règle teste si l'IP source est dans une liste de plage d'adresse. Dans ce cas, les différentes plages d'adresses sont séparées par des virgules et peuvent être entourées d'espace pour plus de lisibilité. Si une plage ne contient qu'une seule adresse, le "/32" est implicite mais peut être mis explicitement. Dans tous les cas, la taille de ce champ est limité à 255 caractères.

La seconde règle teste simplement l'existence du cookie. Il serait possible de tester si sa valeur correspond à une expression régulière ou se trouve dans une liste de possibilité, mais cela permet de montrer un exemple simple de ce qui peut être fait avec des cookies. Les règles basées sur les En-Têtes HTTP fonctionnent suivant une approche similaire.

Il ne reste qu'à appliquer la configuration dans la zone concernée.


### Router les WebSockets vers une Ferme dédiée
Lorsqu'un site dispose de fonctions interactives basées sur des WebSockets telles qu'un chat-bot, on peut souhaiter diriger ces connexions vers une Farm de serveurs dédiée à cette tâche. Et c'est en fait très simple. Quand un navigateur cherche à ouvrir une connexion WebSockets, il envoie une requête HTTP standard avec les En-Têtes :

```
Upgrade: websocket
Connection: Upgrade
```

Dans la pratique, il suffit de détecter le premier En-Tête. Cela peut se faire très facilement avec une route et une règle :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVH Load Balancer|
|frontendId|Identifiant de votre Frontend|
|displayName|"Route WebSockets to a dedicated farm"|
|weight|(vide)|
|action.type|"farm"|
|action.status|(vide)|
|action.target|Identifiant de la Farm dédiée au WebSockets|

Et sur cette route, on vient attacher une règle :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVH Load Balancer|
|routeId|Identifiant de la Route créée juste au dessus|
|field|"header"|
|subField|"Upgrade"|
|match|"is"|
|negate|false|
|pattern|"websocket" (sensible aux majuscules / minuscules)|

Il ne reste qu'à appliquer la configuration dans la zone concernée.


## Référence
Vous trouverez ici le détail des appels d'API liés aux routes. Pour une vue plus générale des fonctionnalités des routes, nous vous invitons d'abord à consulter la section [Présentation de l'API](#presentation-de-l-api){.internal} un peu plus haut dans ce guide.


### Manipulation des routes
Les routes TCP et HTTP se configurent de la même manière. Les routes étant plus puissantes en HTTP, cette section se concentre sur les routes et les règles HTTP. Le fonctionnement des routes TCP peut être extrapolé en remplaçant "http" par "tcp" dans les routes. Certains champs n'ayant de sens qu'en HTTP, ils ne sont pas disponibles en TCP.


#### Lister les routes
Cet appel retourne la liste des identifiants numériques des routes définies pour le protocole HTTP. Il est possible de filtrer cette liste par frontendId. Cet appel retourne les routes dans l'ordre dans lequel elles seront évaluées. L'ordre d'évaluation peut être en partie contrôlé avec le "poids" (weight) de la route.


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/route
> 

|Paramètre|Requis|Signification|
|---|---|---|
|serviceName|Requis|Identifiant de votre service Load Balancer|
|frontendId||Identifiant numérique d'un Frontend HTTP auquel les routes sont attachées|

#### Créer une route
Cet appel permet de créer une route. Seule l'action est obligatoire. Une route peut être attachée et détachée d'un Frontend. Il est possible de créer jusqu'à 50 routes sur un service OVH Load Balancer. Cet appel retourne la route créée en cas de succès. Votre service OVH Load Balancer doit être re-déployé pour appliquer les changements.


> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/route
> 

|Paramètre|Requis|Signification|
|---|---|---|
|serviceName|Requis|Identifiant de votre service Load Balancer|
|displayName||Nom d'affichage de votre route (255 caractères maximum)|
|frontendId||Identifiant numérique d'un Frontend HTTP auquel rattacher la route|
|weight||Priorité de la route, entre 1 (passe d'abord) et 255 (passe après les autres)|
|action.type|Requis|Nom du type d'action à exécuter si l'ensemble des règles associées à la route sont validées|
|action.status||Code d'état HTTP pour les actions `reject` et `redirect`|
|action.target||Identifiant numérique de la ferme cible pour les actions `farm`, ou modèle d'URL pour les actions `redirect`|

Les types d'actions possibles sont :

|action|Signification|
|---|---|
|redirect|Rediriger une requète vers `action.target` avec le code d'état HTTP `action.status`|
|reject|Rejeter une requête avec le code d'état HTTP `action.status`|
|farm|Router une requête vers la ferme dont l'identifiant est renseigné dans `action.target`|


Pour plus d'information sur les actions gérées ainsi que le format des paramètres, nous vous invitons à consulter la section [Actions disponibles](#actions-disponibles){.internal} plus bas dans ce guide.


#### Voir le détail d'une route
Cet appel permet de consulter le détail d'une route HTTP, connaissant son identifiant.


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/route/{routeId}
> 

Requête

|Paramètre|Signification|
|---|---|
|serviceName|Identifiant de votre service Load Balancer|
|routeId|Identifiant numérique de la route|

Réponse

|Paramètre|Signification|
|---|---|
|routeId|Identifiant numérique de la route|
|displayName|Nom d'affichage de votre route|
|frontendId|Identifiant numérique du frontend auquel votre route est rattachée|
|weight|Priorité de votre route|
|action.type|Nom du type d'action de votre route|
|action.status|Code d'état HTTP associé|
|action.target|Identifiant numérique de la ferme ou modèle d'URL associé|
|rules|Liste des règles devant être validées pour déclencher l'action de la route. Plus de détails sont disponibles dans la section [Manipulation des Règles](#manipulation-des-regles){.internal}.|

Pour plus d'information sur les actions gérées ainsi que le format des paramètres, nous vous invitons à consulter la section [Actions disponibles](#actions-disponibles){.internal} plus bas dans ce guide.


#### Modifier une route
Cet appel permet de modifier une route HTTP, connaissant son identifiant. Votre service OVH Load Balancer doit être re-déployé pour appliquer les changements.


> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

|Paramètre|Requis|Signification|
|---|---|---|
|serviceName|Requis|Identifiant de votre service Load Balancer|
|routeId|Requis|Identifiant numérique de la route|
|displayName||Nom d'affichage de votre route (255 caractères maximum)|
|frontendId||Identifiant numérique d'un Frontend HTTP auquel rattacher la route|
|weight||Priorité de la route, entre 1 (passe d'abord) et 255 (passe après les autres)|
|action.type|Requis|Nom du type d'action à exécuter si l'ensemble des règles associées à la route sont validées|
|action.status||Code d'état HTTP pour les actions `reject` et `redirect`|
|action.target||Identifiant numérique de la ferme cible pour les actions `farm`, ou modèle d'URL pour les actions `redirect`|

Pour plus d'information sur les actions gérées ainsi que le format des paramètres, nous vous invitons à consulter la section [Actions disponibles](#actions-disponibles){.internal} plus bas dans ce guide.


#### Supprimer une route
Cet appel permet de supprimer une route HTTP, connaissant son identifiant. Lorsqu'une route est supprimée, l'ensemble des règles associées à cette route sont supprimées également. Il n'est pas nécessaire de les supprimer individuellement. Votre service OVH Load Balancer doit être re-déployé pour appliquer les changements.


> [!api]
>
> @api {DELETE} /ipLoadbalancing/{serviceName}/http/route/{routeId}
> 

|Paramètre|Requis|Signification|
|---|---|---|
|serviceName|Requis|Identifiant de votre service Load Balancer|
|routeId|Requis|Identifiant numérique de la route|

### Manipulation des Règles

#### Lister les règles
Cet appel retourne la liste des identifiants numérique des règles définies pour une route donnée.


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
> 

|Paramètre|Requis|Signification|
|---|---|---|
|serviceName|Requis|Identifiant de votre service Load Balancer|
|routeId|Requis|Identifiant numérique de la route|

#### Attacher une règle
Cet appel permet d'attacher une règle à une route. Il est possible d'attacher jusqu'à 5 règles par route sur un service OVH Load Balancer. Cet appel retourne la règle créée en cas de succès. Votre service OVH Load Balancer doit être re-déployé pour appliquer les changements.


> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
> 

|Paramètre|Requis|Signification|
|---|---|---|
|serviceName|Requis|Identifiant de votre service Load Balancer|
|routeId|Requis|Identifiant numérique de la route|
|field|Requis|Nom du paramèter HTTP sur lequel appliquer cette règle|
|subField||Nom de l'en-tête HTTP pour les règles `header` ou nom du cookie pour les règles `cookie`|
|match|Requis|Nom du comparateur à appliquer pour valider la règle|
|negate||Inverse le résultat du comparateur|
|pattern||Argument du comparateur|

`field`

|Valeur|Signification|
|---|---|
|source|Adresse ou liste d'adresses source sous la forme d'IP (a.b.c.d/z)|
|protocol|Protocole. "http" ou "https"|
|method|Méthode HTTP (GET, HEAD, POST, PUT, DELETE, OPTIONS, CONNECT, TRACE)|
|host|Nom de domaine (vhost), sans le numéro de port|
|uri|Chamin de la requête tel que compris entre le premier "/" et le premier "?"|
|param|Paramètre HTTP venant de la partie après le premeir "?"|
|header|En-tête HTTP|
|cookie|Cookie HTTP|

`match`

|Valeur|Signification|
|---|---|
|exists|La propriété doit exister (en-tête ou cookie HTTP par exemple)|
|is|La propriété doit correspondre exactement à `pattern`|
|in|La propriété doit être dans la liste de valeurs (séparées par des virgules) définie par `parttern`|
|contains|La propriété doit contenir la valeur de `pattern`|
|startswith|La propriété doit commencer par la valeur de `pattern`|
|endswith|La propriété doit se terminer par la valeur de `pattern`|
|matches|La propriété doit correspondre à l'expression régulière de `pattern`|

Pour plus d'information sur les règles gérées ainsi que le format des paramètres, nous vous invitons à consulter la section [Règles disponibles](#regles-disponibles){.internal} plus bas dans ce guide.


#### Voir le détail d'une règle
Cet appel permet de consulter le détail d'une règle attachée à une route HTTP, connaissant son identifiant.


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
> 

Requête

|Paramètre|Signification|
|---|---|
|serviceName|Identifiant de votre service Load Balancer|
|routeId|Identifiant numérique de la route|
|ruleId|Identifiant numérique de la règle|

Réponse

|Paramètre|Signification|
|---|---|
|ruleId|Identifiant numérique de la règle|
|field|Nom du paramèter HTTP sur lequel appliquer la règle|
|subField|Nom de l'en-tête HTTP ou du cookie pour la règle|
|match|Nom du comparateur à appliquer pour valider la règle|
|negate|"true" si le résultat du comparateur est inversé|
|pattern|Argument du comparateur. Le sens et la syntaxe dépendent de `match` et de `field`|

Pour plus d'information sur les règles gérées ainsi que le format des paramètres, nous vous invitons à consulter la section [Règles disponibles](#regles-disponibles){.internal} plus bas dans ce guide.


#### Modifier une règle
Cet appel permet de modifier une règle attachée à une route HTTP, connaissant son identifiant. Votre service OVH Load Balancer doit être re-déployé pour appliquer les changements.


> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
> 

|Paramètre|Requis|Signification|
|---|---|---|
|serviceName|Requis|Identifiant de votre service Load Balancer|
|routeId|Requis|Identifiant numérique de la route|
|ruleId|Requis|Identifiant numérique de la règle|
|field|Requis|Nom du paramèter HTTP sur lequel appliquer cette règle|
|subField||Nom de l'en-tête HTTP pour les règles `header` ou nom du cookie pour les règles `cookie`|
|match|Requis|Nom du comparateur à appliquer pour valider la règle|
|negate||Inverse le résultat du comparateur|
|pattern||Argument du comparateur|

Pour plus d'information sur les règles gérées ainsi que le format des paramètres, nous vous invitons à consulter la section [Règles disponibles](#regles-disponibles){.internal} plus bas dans ce guide.


#### Supprimer une règle
Cet appel permet de supprimer une règle attachée à une route HTTP, connaissant son identifiant. Votre service OVH Load Balancer doit être re-déployé pour appliquer les changements.


> [!api]
>
> @api {DELETE} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
> 

|Paramètre|Requis|Signification|
|---|---|---|
|serviceName|Requis|Identifiant de votre service Load Balancer|
|routeId|Requis|Identifiant numérique de la route|
|ruleId|Requis|Identifiant numérique de la règle|

> [!primary]
>
> Si vous souhaitez supprimer une route, il n'est pas nécessaire de supprimer l'ensemble des règles attachées à celle-ci. Les règles sont automatiquement supprimées lorsque vous supprimez une route.
> 


#### Lister l'ensemble des routes TCP et HTTP
Cet appel permet de lister l'ensemble des identifiants, nom d'affichage et type ("http"/"tcp") des routes définies sur un service OVH Load Balancer. Il a été pensé pour simplifier l'implémentation d'auto-complétion.


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/definedRoutes
> 

Requête

|Paramètre|Signification|
|---|---|
|serviceName|Idenfiant de votre service Load Balancer|

Réponse

|Paramètre|Signification|
|---|---|
|type|Type de protocole de la route: "tcp" pour les routes TCP, "http" pour les routes HTTP|
|routeId|Identifiant numérique de la route|
|displayName|Nom d'affichage de la route|

### Actions disponibles
Cet appel retourne la liste des actions disponibles pour les routes TCP et HTTP ainsi que les valeurs attendues pour chacun des champs.

Si un champ est "null", cela signifie qu'aucune valeur n'est attendue. Si une valeur invalide est fournie, l'API retournera une erreur de validation.

L'ensemble des actions gérées par le service OVH Load Balancer sont finales. C'est à dire que l’exécution d'une action entraîne également la fin de l'évaluation des routes.


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/availableRouteActions
> 

Requête

|Paramètre|Signification|
|---|---|
|serviceName|Idenfiant de votre service Load Balancer|

Réponse

|Paramètre|Signification|
|---|---|
|type|Indique si cette action est valide pour une route HTTP ou une route TCP|
|name|Nom de l'action à renseigner dans le champs `type` des routes|
|status|Liste des codes d'état HTTP disponibles pour cette action (champs `status` des routes)|
|destination|Type de valeur attendue dans le champs `destination` des routes|

#### Redirection
Cette action renvoie une redirection au visiteur. Le type de redirection peut être configuré avec le champ status. Lorsque cette action est sélectionnée, aucune Farm ne recevra la requête.

|Paramètre|Valeur|
|---|---|
|type|`redirect`|
|status|301, 302, 303, 307 ou 308|
|target|URL de destination (peut contenir des variables)|

Seuls les codes d'état HTTP de redirection peuvent être spécifiés. Les plus courant sont les codes 301 et 302. Si vous hésitez, vous pouvez prendre le 302 "Redirection temporaire". Les codes d'état HTTP reconnus pour les redirections sont :

|Code de status|Description|
|---|---|
|301|Redirection permanente. La redirection peut être enregistrée par le navigateur.|
|302 (default)|Redirection temporaire. La redirection doit être revalidée à chaque requête par le navigateur.|
|303|Comme le 302 et force l'utilisation de la méthode HTTP GET.|
|307|Comme le 302 et force le ré-utilisation de la même méthode HTTP (GET, POST, ...).|
|308|Comme le 301 et force le ré-utilisation de la même méthode HTTP (GET, POST, ...).|

L'URL de destination peut contenir des variables simples. Cela permet de rediriger simplement vers un autre domaine, un autre protocole ou ajouter un suffixe / préfixe à une URL. Les variables reconnues sont :

|Variable|Description|
|---|---|
|`protocol`|Protocole de la requête ("http" ou "https")|
|`domain`|Nom de domaine de la requête, sans le numéro de port|
|`host`|Champ "Host" de la requête, incluant le numéro de port s'il y en a un|
|`port`|Port de la requête|
|`path`|Chemin de la requête, commence par un '/' et fini avant le premier '?'|
|`arguments`|Arguments de la requête, commence par le '?' si présent|

Par exemple, pour :

- rediriger vers https : `https://${host}${path}${arguments}`
- rediriger vers un nouveau domaine : ${protocol}://new.example.com${path}${arguments}
- préfixer l'url: ${protocol}://${host}/staging${path}${arguments}


#### Rejet
Cette action renvoie un code d'état HTTP d'erreur au visiteur. Le code d'erreur HTTP peut être configuré avec le champ status. Lorsque cette action est sélectionnée, aucune Farm ne recevra la requête.

|Paramètre|Valeur|
|---|---|
|type|`reject`|
|status|200, 400, 403, 405, 408, 429, 500, 502, 503 ou 504|
|target|non disponible|


> [!primary]
>
> Cette action est aussi disponible en TCP. Dans ce cas, le paramètre status n'est pas disponible et la requête est terminée. Les requêtes TCP terminées de cette manière ne sont pas comptabilisées dans de débit de requêtes.
> 

Seuls les codes d'erreur HTTP listés dans l'API peuvent être spécifiés. Les plus courant sont les codes 400 "Bad request" et 403 "Forbidden". 200 peut être utilisé pour bloquer un type de requête tout en simulant un succès et 503 peut être utilisé pour simuler une panne serveur.

|Code de status|Description|
|---|---|
|200|La requête a été exécutée avec succès.|
|400|Requête invalide.|
|403 (default)|Accès interdit.|
|405|Méthode (GET, POST, PUT, ...) invalide ou non gérée.|
|408|La requête a pris trop de temps à être envoyée par le client.|
|429|La client a envoyé trop de requêtes (rate-limiting).|
|500|Erreur serveur générique.|
|502|Erreur de communication avec le serveur.|
|503|Le service est temporairement indisponible.|
|504|Le serveur a mis trop de temps à répondre.|


#### Routage
Cette action dirige les requêtes vers une Farm spécifique, autre que la Ferme par défaut configurée sur le Frontend. La Ferme de destination doit être du même type que le Frontend ("http" ou "tcp").

|Paramètre|Valeur|
|---|---|
|type|`farm`|
|status|non disponible|
|target|Identifiant numérique de la Ferme de destination. Celle-ci doit être du même type|


> [!primary]
>
> Cette action est aussi disponible en TCP. Dans ce cas, la Farm de destination doit être de type "tcp".
> 


### Règles disponibles
Cet appel retourne la liste des règles disponibles pour les routes TCP et HTTP ainsi que les valeurs attendues pour chacun des champs.

Si un champ est "null", cela signifie qu'aucune valeur n'est attendue. Si une valeur invalide est fournie, l'API retournera une erreur de validation.


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/availableRouteRules
> 

Requête

|Paramètre|Signification|
|---|---|
|serviceName|Identifiant de votre service Load Balancer|

Réponse

|Paramètre|Signification|
|---|---|
|type|Type de protocole de la route: "tcp" pour les routes TCP, "http" pour les routes HTTP|
|name|Nom de la propriété sur laquelle s'applique cette règle, à renseigner dans le champs `field`|
|hasSubField|"true" si cette propriété à une "sous propriété" (par exemple : un en-tête ou un cookie)|
|matches|Liste des comparateurs disponibles pour cette règle, à renseigner dans le champs `match`|
|pattern|Tupe de valeur attendue pour le champs `pattern`|
|enum|Liste des valeurs possibles pour le chmaps `pattern` si celui-ci est une énumération|

Les différents types de `pattern` sont :

|Valeur|Signification|
|---|---|
|cidr|Adresse IP (a.b.c.d) ou sous-réseau (a.b.c.d/z)|
|string|Texte libre. Pour l'opérateur `in`, liste de valeurs séparées par des virgules (255 caractères maximum)|
|enum|Le champs est une énumération définie dans `enum`|

#### Protocole
Cette règle permet de filtrer les requêtes en fonction de leur protocole. Dans la pratique, les cas d'usage de cette règle sont assez limités car le protocole dépend du Frontend auquel la Route est attachée or un Frontend ne gère qu'un seul protocole qui est alors connu au moment de la définition de la route.

|Champs|Valeur|
|---|---|
|name|`protocol`|
|hasSubField|non|
|matches|`is` ou `in`|
|pattern|`tcp`, `tls`, `http` ou `https`|

> [!primary]
>
> Cette action est aussi disponible en TCP. Dans ce cas, le protocole "http/2.0" est également disponible. Il se base sur le champ SSL/TLS "ALPN" utilisé par les navigateurs pour annoncer qu'ils tentent d'établir une connexion HTTP/2.0. Cela permet d'avoir un Frontend TCP commun pour la terminaison SSL/TLS du HTTP 1 et 2 puis diriger ces flux en fonction de la version du protocole.
> 


#### Adresse source
Cette règle permet de filtrer les requêtes en fonction de leur adresse source. En la combinant avec une règle basée sur l'URI ou le nom de domaine, cela permet par exemple de restreindre certaines ressources à un proxy d'entreprise tout en exposant toutes les autres ressources sans restrictions au niveau de votre service OVH Load Balancer.

|Champs|Valeur|
|---|---|
|name|`source`|
|hasSubField|non|
|matches|`is` ou `in`|
|pattern|Sous-réseau (a.b.c.d/z) ou adresse (a.b.c.d)|

> [!primary]
>
> Cette action est aussi disponible en TCP avec le même comportement.
> 

Par exemple, pour bloquer un réseau et une adresse en particulier, on pourra utiliser un pattern tel que "4.4.0.0/16, 8.8.8.8".


#### Nom de domaine
Cette règle permet de filtrer les requêtes en fonction de leur nom de domaine. Cela permet par exemple de reproduire la fonction "vhost" de Apache ou router l'ensemble des domaines commençant par "mail." vers un serveur dédié au webmail.

|Champs|Valeur|
|---|---|
|name|`host`|
|hasSubField|non|
|matches|`is`, `in`, `contains`, `startswith`, `endswith` ou `matches`|
|pattern|Chaîne de caractères ou expression régulière|

> [!primary]
>
> Cette action est aussi disponible en TCP. Elle n'aura de sens que si le Frontend est configuré pour accepter des connexions SSL/TLS et que le client envoie une option "SNI". C'est notamment le cas des navigateurs web récents.
> 


#### Méthode HTTP
Cette règle permet de filtrer les requêtes en fonction de la méthode HTTP. Elle sera communément utilisée de paire avec une règle basée sur l'URI ou chemin de la requête pour rendre la règle plus sélective.

|Champs|Valeur|
|---|---|
|name|`method`|
|hasSubField|non|
|matches|`is` ou `in`|
|pattern|`GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `CONNECT`, `OPTIONS` ou `TRACE`|


#### Chemin de la requête
Cette règle permet de filtrer les requêtes en fonction du chemin de la requête ou URI. Le chemin de la requête est la portion comprise entre le 1er '/' inclus et le premier '?' exclu.

|Champs|Valeur|
|---|---|
|name|`uri`|
|hasSubField|non|
|matches|`is`, `in`, `contains`, `startswith`, `endswith` ou `matches`|
|pattern|Chaîne de caractères ou expression régulière|


#### Paramètre de la requête
Cette règle permet de filtrer les requêtes en fonction de l'existence ou de la valeur d'un paramètre spécifique de la requête HTTP. Il s'agit de la partie après le premier '?'. Si un paramètre est spécifié plusieurs fois dans la requête, seul le premier est pris en compte.

|Champs|Valeur|
|---|---|
|name|`param`|
|hasSubField|oui|
|matches|`is`, `in`, `contains`, `startswith`, `endswith` ou `matches`|
|pattern|Chaîne de caractères ou expression régulière|


#### En-Tête HTTP
Cette règle permet de filtrer les requêtes en fonction de l'existence ou de la valeur d'un En-Tête HTTP spécifique. Cela permet par exemple de détecter l'ouverture d'une connexion websocket et la diriger vers une Ferme dédiée.

|Champs|Valeur|
|---|---|
|name|`header`|
|hasSubField|oui|
|matches|`is`, `in`, `contains`, `startswith`, `endswith` ou `matches`|
|pattern|Chaîne de caractères ou expression régulière|


#### Cookie
Cette règle permet de filtrer les requêtes en fonction de l'existence ou de la valeur d'un Cookie HTTP spécifique. Cela permet par exemple de diriger les visiteurs volontaires vers une Ferme de préproduction.

|Champs|Valeur|
|---|---|
|name|`cookie`|
|hasSubField|oui|
|matches|`is`, `in`, `contains`, `startswith`, `endswith` ou `matches`|
|pattern|Chaîne de caractères ou expression régulière|
