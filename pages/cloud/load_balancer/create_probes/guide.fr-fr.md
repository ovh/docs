---
title: "Configuration des sondes sur un service OVHcloud Load Balancer"
slug: probes
excerpt: "Découvrez les principes généraux et des cas d'usage pour les sondes"
section: Configuration
---

**Dernière mise à jour le à 25/03/2022**

## Objectif

L'OVHcloud Load Balancer permet de répartir le trafic entrant sur un frontend vers un ensemble de serveurs d'une ferme de destination.

Il peut arriver que l'un des serveurs de votre ferme ne soit plus disponible pour différentes raisons, comme une surcharge, un incident ou une maintenance planifiée. Lorsqu'il rencontre une erreur de connexion, votre OVHcloud Load Balancer va tenter de basculer le trafic sur un autre serveur. La connexion sera ralentie, mais continuera de fonctionner.

Cependant, les causes de certaines indisponibilités sont plus subtiles. Par exemple, si une nouvelle version du code est en cours de déploiement, l'application peut se trouver momentanément dans un état transitoire et retourner des erreurs 500. Dans ce cas précis, une solution serait de marquer les serveurs concernés comme indisponibles dans l'API avant le début de la maintenance, appliquer la configuration et la mise à jour, puis marquer à nouveau le serveur comme disponible. Cette méthode n'est pas idéale mais fonctionne.<br> 
Pour plus de détails sur le déploiement d'une architecture Blue-Green avec votre OVHcloud Load Balancer, référez-vous à [ce guide](../blue-green).

Les sondes (*probes* en anglais) sont des tests de santé. Elles interrogent périodiquement chacun de vos serveurs pour s'assurer qu'ils sont opérationnels. Si une erreur est détectée, le serveur est automatiquement désactivé jusqu'à ce que la situation soit rétablie.

Ce service étant encore jeune, l'essentiel de ses fonctionnalités est uniquement disponible dans l'API.

**Ce guide vous présentera les principes généraux, ainsi que des scénarios d'utilisation des sondes, tirés de cas d'usages réels.**

## Prérequis

- Posséder une offre [OVHcloud Load balancer](https://www.ovh.com/fr/solutions/load-balancer/) dans votre compte OVHcloud. Le service doit être correctement configuré, avec un paramétrage des fermes et des serveurs.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

### Présentation de l'API des sondes

L'API des sondes de votre OVHcloud Load Balancer a été pensée pour être souple et évolutive.

Les sondes se configurent directement sur les fermes. Tous les serveurs d'une même ferme appliquent ainsi exactement la même sonde. Cependant, l'activation ou la désactivation d'une sonde est spécifique à chaque serveur. Il est donc possible de ne « surveiller » que certains serveurs d'une même ferme.

La liste des sondes disponibles et de leurs paramètres peut être consultée avec l'appel d'API :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/availableFarmProbes
> 

Pour plus d'informations sur cet appel, nous vous invitons à consulter la section [Sondes disponibles](#available-probes) en bas de ce guide.

Les sondes retournées par cette liste peuvent être configurées sur les fermes `http` et `tcp` via les appels :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/farm
> 

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/tcp/farm
> 

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> 

Pour plus d'informations sur ces appels, vous pouvez consulter la section [Manipulation des sondes](#handling-probes) de ce guide.


### Exemples

#### Vérifier si le serveur accepte des connexions TCP

Il s'agit de la sonde la plus simple à mettre en place. Elle est compatible avec les fermes `tcp` et `http`. Si aucune autre sonde n'est configurée, vous pouvez activer celle-ci pour commencer. Elle fonctionne en essayant périodiquement d'ouvrir une connexion sur chacun de vos serveurs. Si la connexion échoue deux fois de suite, le serveur est mis de côté jusqu'à ce qu'il réponde à nouveau.

Dans la pratique, cela donne une sonde :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre OVHcloud Load Balancer|
|farmId|Identifiant de votre ferme TCP ou HTTP|
|probe.type|"tcp"|

Tous les autres champs probe peuvent rester à leur valeur par défaut. Il ne reste ensuite qu'à appliquer la configuration dans la zone concernée.

#### Tester une page HTTP spécifique

Par défaut, la sonde HTTP envoie une requête `OPTIONS` sur `/` en HTTP/1.0, sans nom de domaine. Cela suffit dans beaucoup de cas, mais certains serveurs ne gèrent pas cette méthode.<br>
Il est possible de faire des tests beaucoup plus puissants avec la sonde HTTP. Par exemple, une bonne pratique lors de l'exposition d'un service HTTP consiste à ajouter une route dédiée aux sondes. Il est courant de retrouver des `/status`, `/health`, `/check` qui renvoient une synthèse de l'état du service.

Dans la pratique, si vous voulez configurer la sonde pour envoyer une requête `GET` sur [http://api.example.com/status](http://api.example.com/status){.external}, cela donne :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre OVHcloud Load Balancer|
|farmId|Identifiant de votre ferme TCP ou HTTP|
|probe.type|http|
|probe.method|GET|
|probe.url|[http://api.example.com/status](http://api.example.com/status){.external}|
|probe.match|status|
|probe.pattern|200 (plusieurs codes d'état peuvent être ajoutés, en les séparant par des virgules)|

Tous les autres champs probe peuvent rester à leur valeur par défaut. Il suffit ensuite d'appliquer la configuration dans la zone concernée.

#### Utiliser un test HTTP externe

Que se passe-t-il si votre service est, par exemple, un serveur IMAP qui repose sur un serveur LDAP pour l'authentification ?<br>
Il est possible que le serveur accepte des connexions mais qu'il ait un souci temporaire de connexion avec le serveur LDAP. Si cela arrive, les clients qui seraient dirigés vers ce serveur pourraient se connecter mais pas s'authentifier. Le serveur devrait donc être retiré de la ferme.

Si une sonde de type `tcp` est utilisée, elle arrivera à se connecter et considérera que le service est disponible bien que ce ne soit pas le cas.

Dans ce scénario, l'idéal serait que le test de santé puisse confirmer que le service de base fonctionne. Il est possible d'indiquer un port spécifique à utiliser dans les tests. Cela permet de mettre en place des tests arbitraires pour un service et les exposer en HTTP, sur un port dédié.

Par exemple, dans ce scénario, il serait possible d'avoir un serveur HTTP sur le port 8080 qui teste le serveur IMAP via l'url `/service/imap/status` et retourne *OK* lorsque tout va bien. Ce qui donnerait dans la pratique :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre OVHcloud Load Balancer|
|farmId|Identifiant de votre ferme TCP ou HTTP|
|probe.type|http|
|probe.port|8080|
|probe.method|GET|
|probe.url|/service/imap/status|
|probe.match|contains|
|probe.pattern|OK|

Il ne reste ensuite qu'à appliquer la configuration dans la zone concernée.

> [!warning]
>
> Si le service HTTP dédié à la surveillance de votre service IMAP tombe lui-même en panne, le service IMAP sera considéré comme en panne lui aussi, même s'il est en parfait état de fonctionnement.
> 

### Référence

#### Manipulation des sondes <a name="handling-probes"></a>

##### **Configurer une sonde**

Les sondes peuvent être configurées sur une nouvelle ferme (`POST`) ou une ferme existante (`PUT`). Les deux méthodes étant équivalentes, seule la seconde (`PUT`) sera présentée ici.

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName**
>> >
>> >> L'identifiant de votre OVHcloud Load Balancer.
>> >
>> > **farmId**
>> >
>> >> L'identifiant numérique de votre `ferme`.
>> >
>> > **probe**
>> >
>> >> **type**
>> >>
>> >> > Le type de la `probe` à activer. Les types de sonde gérés sont :
>> >> >
>> >> > `tcp` pour un test de connexion TCP basique ;
>> >> >
>> >> > `http` pour un test de connexion HTTP. Il est possible de spécifier l'URL et la méthode ;
>> >> >
>> >> > `smtp` pour un test de connexion SMTP basique ;
>> >> >
>> >> > `mysql` pour un test de connexion MySQL basique ;
>> >> >
>> >> > `pgslq` pour un test de connexion PostgreSQL basique ;
>> >> >
>> >> > `oco` pour une validation de l'état général retourné sur le port 79.
>> >
>> >> **interval**
>> >>
>> >> > L'intervalle en secondes entre deux tentatives de la sonde. Il doit être au moins de 30 secondes.
>> >
>> >> **port**
>> >>
>> >> > Le port que la sonde doit utiliser, s'il est différent de celui configuré sur la ferme.
>> >> > Cela permet de déléguer la validation de l'état du serveur à un service tiers sur la machine et de réaliser des sondes arbitraires.
>> >
>> >> **method**
>> >>
>> >> > La méthode HTTP à utiliser si la sonde est de type "http".
>> >> > Les méthodes compatibles sont `GET`, `HEAD` et `OPTIONS` (par défaut).
>> >
>> >> **url**
>> >>
>> >> > L'URL à utiliser pour les tests, si la sonde est de type "http".
>> >> > Sa forme doit être `[[https?://]www.example.com]/path/to/check`.
>> >> > Si un domaine est spécifié, la requête sera envoyée en HTTP/1.1 au lieu de HTTP/1.0 par défaut.
>> >
>> >> **match**
>> >>
>> >> > Le type de comparateur à utiliser pour vérifier que le serveur est en bonne santé.
>> >> > Les comparateurs gérés sont `default`, `status`, `contains` et `matches`.
>> >> > Les comparateurs sont compatibles avec les sondes "http" et "tcp".
>> >
>> >> **pattern**
>> >>
>> >> > La valeur à utiliser en argument du comparateur si différent de "default".
>> >
>> >> **forceSsl**
>> >>
>> >> > Cela définit si la sonde doit fonctionner en SSL/TLS même si la ferme est configurée pour se connecter en TCP classique.
>> >> > Cela peut servir par exemple lorsque votre OVHcloud Load Balancer est configuré pour faire suivre le trafic HTTPS en TCP sans le déchiffrer.
>

D'autres paramètres peuvent être édités via cet appel. Dans la mesure où ce guide se concentre sur les sondes, ils ne sont pas documentés ici.

Si un port autre que le port de base de la ferme est configuré sur la sonde, les paramètres `proxyprotocol` et `ssl` sont réinitialisés. Prenons l'exemple d'une ferme configurée pour utiliser le `proxyprotocol` sur le *port* **4242** et d'une sonde associée employant le *port* **8080** : cette dernière n'enverra pas l'en-tête `proxyprotocol` lorsqu'elle se connectera sur le *port* **8080**. Il en est de même pour le `ssl`, qui peut néanmoins être forcé.

> [!warning]
>
> Lorsqu'une sonde est configurée sur une ferme, elle doit être activée sur les serveurs.
> 

##### **Activer les sondes sur un serveur**

Pour qu'une sonde soit active, il faut qu'elle ait été configurée sur la ferme et activée sur les serveurs concernés. Cet appel permet d'activer la prise en compte de la sonde :

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName**
>> >
>> >> L'identifiant de votre OVHcloud Load Balancer.
>> >
>> > **farmId**
>> >
>> >> L'identifiant numérique de votre `ferme`.
>> >
>> > **serverId**
>> >
>> >> L'identifiant numérique de votre `serveur`.
>> >
>> > **probe**
>> >
>> >> Si les `probe` doivent être prises en compte ou non.
>

D'autres paramètres peuvent être édités via cet appel. Dans la mesure où ce guide se concentre sur les sondes, ils ne sont pas documentés ici.

#### Comparateurs disponibles

Quatre comparateurs sont disponibles pour valider le résultat d'une sonde :

|Comparateur|Description|
|---|---|
|default|Lance un test de base, sans paramètre.|
|status|Liste séparée par des virgules de code de retour HTTP valides.|
|contains|Vérifie que le pattern se trouve dans la réponse.|
|matches|Vérifie que la réponse correspond à l'expression régulière pattern.|

Les comparateurs `contains` et `matches` cherchent une correspondance dans les 16 premiers ko de la réponse. Si celle-ci est plus longue, la partie au-delà sera ignorée lors de la recherche. Notez que pour de meilleures performances, nous vous recommandons de retourner le moins d'informations possible dans vos sondes.

#### Sondes disponibles <a name="available-probes"></a>

La liste des sondes disponibles peut être obtenue avec l'appel API :

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/availableFarmProbes
>> >
>>
>
> Réponse :
>
>> > **type**
>> >
>> >> Le type de la `probe` à configurer dans le champ `probe.type` des `fermes`.
>> >>
>> >> Les types de sonde gérés sont :
>> >>
>> >> `tcp` pour un test de connexion TCP basique ;
>> >>
>> >> `http` pour un test de connexion HTTP. Il est possible de spécifier l'URL et la méthode ;
>> >>
>> >> `smtp` pour un test de connexion SMTP basique ;
>> >>
>> >> `mysql` pour un test de connexion MySQL basique ;
>> >>
>> >> `pgslq` pour un test de connexion PostgreSQL basique ;
>> >>
>> >> `oco` pour une validation de l'état général retourné sur le port 79.
>> >
>> > **port**
>> >
>> >> Cela définit si le port peut être configuré pour cette sonde.
>> >
>> > **method**
>> >
>> >> La liste de méthodes HTTP gérées ou `null` s'il n'en existe aucune.
>> >
>> > **url**
>> >
>> >> Cela définit si l'URL de la sonde peut être configurée.
>> >
>> > **matches**
>> >
>> >> La liste de comparateurs disponibles pour cette sonde.
>> >> L'interprétation du champ `probe.pattern` dépend de ce champ.
>> >> Les comparateurs potentiellement gérés sont :
>> >>
>> >> `default` test le plus simple, sans conditions particulières. `probe.pattern` doit être vide ;
>> >>
>> >> `status` vérifie que le code d'état HTTP est dans la liste délimitée par des virgules ;
>> >>
>> >> `contains` vérifie que la réponse du serveur contient `probe.pattern` ;
>> >>
>> >> `matches` vérifie que la réponse du serveur correspond à `probe.pattern`.
>

##### **TCP**

Cette sonde tente d'établir une connexion TCP avec le serveur. Si ce dernier envoie une « bannière », il est possible de vérifier qu'elle correspond à un schéma. Le test par défaut s'assure simplement que la connexion peut être établie.

|Champs|Description|
|---|---|
|type|`tcp`|
|port|Configurable|
|method|Non supporté|
|URL|Non supporté|
|matches|`default`, `contains` ou `matches`|


##### **HTTP**

Cette sonde tente d'établir une connexion HTTP avec le serveur. Si ce dernier répond, il est possible de vérifier son code d'état HTTP ou que le corps de la réponse correspond à un schéma. Le test par défaut envoie une requête OPTIONS sur la page '/' en HTTP/1.0, sans champ Host.

|Champs|Description|
|---|---|
|type|`http`|
|port|Configurable|
|method|`GET`, `HEAD` ou `OPTIONS`|
|URL|URL de la forme [[https?://]www.example.com]/path/to/check|
|matches|`default`, `contains` ou `matches`|

Si une URL est spécifiée, le nom de domaine et le protocole sont opérationels. Si un nom de domaine est spécifié, le champ "Host" de la requête sera renseigné et la requête sera envoyée en HTTP/1.1. Si le protocole est spécifié, il doit être cohérent avec la configuration SSL de la ferme.

> [!primary]
>
> Il est conseillé de configurer au moins la méthode avec GET.
> En effet, certains serveurs -dont Nginx- ne gèrent pas la méthode OPTIONS sans configuration préalable.
> 

##### **SMTP**

Cette sonde tente d'établir une connexion SMTP avec le serveur et envoie la commande "HELLO localhost". Si ce dernier répond, la sonde vérifie que le code de retour commence par un "2" (succès). Cette sonde n'a pas d'options de configuration particulières.

|Champs|Description|
|---|---|
|type|`smtp`|
|port|Configurable|
|method|Non supporté|
|URL|Non supporté|
|matches|`default`|


##### **MySQL**

Cette sonde tente d'établir une connexion MySQL avec le serveur et analyse la réponse du serveur. Cette sonde n'a pas d'options de configuration particulières.

|Champs|Description|
|---|---|
|type|`mysql`|
|port|Configurable|
|method|Non supporté|
|URL|Non supporté|
|matches|`default`|


##### **PostgreSQL**

Cette sonde tente d'établir une connexion PostgreSQL avec le serveur et analyse la réponse du serveur. Cette sonde n'a pas d'options de configuration particulières.

|Champs|Description|
|---|---|
|type|`pgsql`|
|port|Configurable|
|method|Non supporté|
|URL|Non supporté|
|matches|`default`|


##### **oco**

Cette sonde tente d'établir une connexion TCP sur le port 79 de votre serveur et vérifie que la réponse commence par un "2" (succès). Cette sonde n'a pas d'options de configuration particulières.

|Champs|Description|
|---|---|
|type|`oco`|
|port|Non configurable|
|method|Non supporté|
|URL|Non supporté|
|matches|`default`|

### Depuis l'espace client OVHcloud

La configuration des sondes se fait lors de l'ajout (ou modification) d'une ferme de serveurs, dans les paramètres avancés.

![Paramètres avancés d'une ferme](images/farm_advanced_settings.png){.thumbnail}

Vous avez alors accès à la configuration du type de sonde.

![Paramètres d'une sonde](images/farm_advanced_settings_unfolded.png){.thumbnail}

Si le type de sonde sélectionné le permet, vous pouvez configurer les paramètres avancés spécifiques à cette sonde.

![Paramètres avancés d'une sonde](images/probe_settings.png){.thumbnail}

Une nouvelle fenêtre de configuration apparaît avec les paramètres de la sonde.

![Paramètres avancés d'une sonde](images/probe_settings_dialog.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
