---
title: "Déploiement d'une infrastructure blue-green"
excerpt: "Ce guide vous montre comment déployer une infrastructure blue-green avec le Load Balancer OVHcloud"
updated: 2025-10-24
---

## Objectif

Ce guide présente un cas d'usage spécifique du service Load Balancer OVHcloud : la configuration d'un service visant à faciliter le basculement fluide du trafic entre l'environnement de production et un nouvel environnement candidat à la production, également appelé infrastructure **blue-green**.

Une infrastructure **blue-green** vous permet d'éviter toute interruption de service de votre infrastructure. Le principal avantage de ce type de déploiement est de pouvoir préparer des mises à jour et/ou des opérations de maintenance dans un environnement isolé de votre environnement de production. Vous pouvez ainsi tester vos modifications avant la mise en production, les annuler rapidement en cas de défaillance, et ce, avec une interruption de service quasi nulle.

**Ce guide vous montre comment déployer une infrastructure blue-green avec le Load Balancer OVHcloud.**

## Prérequis

Pour déployer une infrastructure **blue-green**, vous avez besoin des composants suivants :

- Un service [Load Balancer OVHcloud](/links/network/load-balancer)
- Un accès à l'[espace client OVHcloud](/links/manager)
- Deux [serveurs dédiés](/links/bare-metal/bare-metal), l'un hébergeant votre environnement de production, l'autre, un serveur de configuration similaire hébergeant votre environnement de développement.

## En pratique

### Scénario

Vous disposez d'une infrastructure conçue pour héberger votre site Web en direct.

Cet environnement héberge le code de votre site Web, ainsi que toutes les applications essentielles (serveurs Web, serveurs de bases de données, etc.). Vous devez mettre à jour vos applications et/ou votre code régulièrement. Vous souhaitez pouvoir tester vos mises à jour sans impact sur la disponibilité ou la fonctionnalité du site Web pour les utilisateurs finaux.

Une façon d'y parvenir est de déployer une infrastructure **blue-green**.

Le principe d'un déploiement **blue-green** implique de pouvoir basculer facilement d'une infrastructure de développement à une infrastructure de production, et inversement. Ce basculement doit être transparent pour vos utilisateurs. Pour ce faire, le trafic public sera acheminé vers le port HTTP standard 80 pour l'accès à l'infrastructure de production, et un port non standard, tel que 8888, sera utilisé pour l'accès à l'infrastructure de développement.

## Déploiement des infrastructures

Dans ce scénario, votre service Load Balancer joue un rôle central. C'est l'élément que vous utilisez pour exposer simultanément vos deux infrastructures (production et développement) à différents utilisateurs.

L'infrastructure de production est accessible pour vos clients sur le service HTTP standard (port 80), et votre infrastructure de développement est accessible pour les développeurs et administrateurs sur le port non standard 8888.

Au cours de la phase de configuration initiale, les rôles sont provisoirement attribués à chaque composant de l'infrastructure. **L'infrastructure A** sert d'environnement de production initial, tandis que **l'infrastructure B** sert d'environnement de staging. À ce stade, nous allons les considérer comme similaires l'une à l'autre.

Une infrastructure **blue-green** implique le basculement de l'infrastructure A vers l'infrastructure B, une fois que l'infrastructure B est prête à exposer votre site Web après que vos modifications ont été appliquées et testées. Le Load Balancer gérera ce basculement.

Le schéma ci-dessous donne une idée générale de l'architecture :

![General diagram of blue-green architecture](images/scheme.png){.thumbnail}

### Infrastructure A

Cette infrastructure est composée d'une ferme de serveurs qui sera associée plus tard à un front-end de votre Load Balancer. Cette ferme exposera un service HTTP, TCP ou UDP au front-end. Elle assure également l'équilibrage de charge en envoyant le trafic entrant du front-end aux serveurs. Pour plus de détails sur le rôle des différents composants du service Load Balancer OVHcloud, vous pouvez lire le guide suivant : [Présentation du service OVHcloud Load Balancer ](/pages/network/load_balancer/use_presentation).

Dans notre scénario, nous allons déclarer une ferme de serveurs pour le service HTTP. Veuillez noter que vous pouvez créer autant de fermes (ainsi que de services TCP et/ou UDP) que nécessaire pour que votre service final soit accessible pour vos clients.

#### Via l'espace client OVHcloud

![Add a new HTTP farm dedicated to infrastructure A](images/ferme1.png){.thumbnail}

#### Via l'API OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm
> 

|Paramètre|Signification|
|---|---|
|serviceName|Votre ID de service Load Balancer|

Avec les appels supplémentaires listés ci-dessous, vous pouvez respectivement lister, modifier et supprimer vos fermes de serveurs:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm
> 

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm
> 

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm
> 

Associez un **serveur dédié** à votre ferme s'il héberge votre infrastructure de production. Le service est exposé au front-end via le port 8080 du serveur. Notez que vous pouvez associer un ou plusieurs serveurs à chaque ferme (par exemple, pour équilibrer la charge ou offrir une tolérance aux pannes plus élevée).

#### Via l'espace client OVHcloud

![Add a new server to the farm HTTP A](images/serveur1.png){.thumbnail}

![Enter the HTTP A server’s configuration](images/server1.png){.thumbnail}

#### Via l'API OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

|Paramètre|Requis|Signification|Exemple|
|---|---|---|---|
|serviceName|Requis|Votre ID de service Load Balancer|loadbalancer-abcdef0123456789|
|farmId|Requis|Votre ID de ferme de serveurs|77212|
|address|Requis|L'adresse IPv4 de votre serveur|10.10.1.100|
|displayName||Le nom du serveur associé à votre ferme|HTTP A server|
|port||Le port du serveur associé à votre ferme|8080|

Avec les appels supplémentaires listés ci-dessous, vous pouvez respectivement lister, modifier et supprimer vos serveurs:

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

### Infrastructure B

Fonctionnellement, cette deuxième infrastructure est identique à la première. Elle est également composée d'une ferme de serveurs qui sera associée plus tard à un second front-end de votre Load Balancer. Cette ferme de serveurs expose le même service au front-end que la première ferme de serveurs. Ce service est fourni sur les serveurs par le port 8080.

Déployez la ferme de serveurs pour le service HTTP (et/ou tout autre service TCP ou UDP requis pour que votre service final soit exposé à vos clients).

#### Via l'espace client OVHcloud

![Add a new HTTP farm dedicated to infrastructure B](images/ferme2.png){.thumbnail}

![Create a second farm dedicated to infrastructure B](images/backend2.png){.thumbnail}

#### Via l'API OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm
> 

|Paramètre|Signification|
|---|---|
|serviceName|Votre ID de service Load Balancer|

Associez un serveur à votre ferme. Ici, il s'agit d'un ou plusieurs **serveurs dédiés** hébergeant votre infrastructure de développement.

#### Via l'espace client OVHcloud

![Add a new server to the farm HTTP B](images/serveur2.png){.thumbnail}

![Enter the HTTP B server’s configuration](images/server2.png){.thumbnail}

#### Via l'API OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

|Paramètre|Requis|Signification|Exemple|
|---|---|---|---|
|serviceName|Requis|Votre ID de service Load Balancer|loadbalancer-abcdef0123456789|
|farmId|Requis|Votre ID de ferme de serveurs|77213|
|address|Requis|L'adresse IPv4 de votre serveur|10.10.2.100|
|displayName||Le nom du serveur associé à votre ferme|HTTP B server|
|port||Le port du serveur associé à votre ferme|8080|

À ce stade, voici l'état de la configuration de vos deux fermes :

![Farm configuration](images/farms.png){.thumbnail}

## Front-ends

La magie du déploiement **blue-green** réside dans la configuration de vos front-ends. À ce stade, nous avons configuré deux infrastructures fonctionnellement identiques. Pour les deux infrastructures, vous avez déclaré une ou plusieurs fermes de serveurs, chacune avec son propre ensemble de serveurs associés.

Pour basculer simplement d'une infrastructure à l'autre, nous utiliserons des front-ends.

Pour ce faire, nous devons déclarer deux front-ends. Le premier vous donnera accès à votre infrastructure de production, tandis que le second vous donnera accès à votre infrastructure de développement. Vous pouvez contrôler l'accès à une infrastructure ou à l'autre en utilisant les ports que vous exposez à vos clients.

> [!warning]
>
> Si le service final que vous exposez à vos clients nécessite plusieurs fermes de serveurs (par ex. les ports 80 et 443), vous devrez déclarer un **front-end** pour chacune de vos fermes.
> 

### Front-end Blue

Ce **front-end** est dédié à l'accès à l'infrastructure de production. Les ports exposés à vos clients sont les ports standard pour l'accès au service. Dans ce cas, nous exposons un service HTTP, nous utiliserons donc le port 80 (443 si vous souhaitez une terminaison SSL).

#### Via l'espace client OVHcloud

![Adding a front-end dedicated to production, a blue front-end](images/frontend1.png){.thumbnail}

![Enter the blue front-end’s configuration](images/fblue.png){.thumbnail}

#### Via l'API OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
> 

|Paramètre|Requis|Signification|Exemple|
|---|---|---|---|
|serviceName|Requis|Votre ID de service Load Balancer|loadbalancer-abcdef0123456789|
|defaultFarmId||Votre ID de ferme de production|77212|
|displayName||Le nom donné au front-end|Blue front-end|
|port|Requis|Le port exposé à vos clients par votre front-end|80|
|zone|Requis|La zone dans laquelle vous souhaitez déployer votre front-end|all|

### Front-end Green

Ce **front-end** est dédié à l'accès à l'infrastructure de développement. Les ports exposés à vos clients seront des ports non standard que vous pourrez choisir arbitrairement. Dans ce cas, nous exposerons le service de développement HTTP sur le port 8888.

#### Via l'espace client OVHcloud

![Add the green front-end, dedicated to development](images/frontend2.png){.thumbnail}

![Enter the green front-end’s configuration](images/fgreen.png){.thumbnail}

#### Via l'API OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
> 

|Paramètre|Requis|Signification|Exemple|
|---|---|---|---|
|serviceName|Requis|Votre ID de service Load Balancer|loadbalancer-abcdef0123456789|
|defaultFarmId||Votre ID de ferme de production|77213|
|displayName||Le nom donné au front-end|Green front-end|
|port|Requis|Le port exposé à vos clients par votre front-end|8888|
|zone|Requis|La zone dans laquelle vous souhaitez déployer votre front-end|all|

## Gestion des déploiements

### Déploiement initial

Une fois que vous avez terminé de configurer les composants du service Load Balancer OVHcloud, il ne vous reste plus qu'à appliquer vos modifications.

#### Via l'espace client OVHcloud

![Apply your changes to the zone](images/deploy.png){.thumbnail}

#### Via l'API OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

|Paramètre|Signification|
|---|---|
|serviceName|Votre ID de service Load Balancer|

### Changement de production ou de mise en scène

À ce stade, notre environnement initial est déployé et prêt à l'emploi. Maintenant, vous devez basculer vos front-ends d'une ferme de serveurs à une autre.

Prenons notre scénario :

- L'infrastructure de production (A) est déployée sur la **ferme HTTP A** (id 77212), qui est elle-même attachée au **serveur HTTP A**. Cette infrastructure est accessible via le **front-end blue**.
- L'infrastructure de développement (B) est déployée sur la **ferme HTTP B** (id 77213), qui est elle-même attachée au **serveur HTTP B**. Cette infrastructure est accessible via le **front-end green**.

Une fois que vous avez modifié/appliqué les mises à jour à l'**infrastructure B** et vérifié que le service fonctionne correctement, vous décidez de la mettre en production.

Pour basculer entre les deux fermes, vous pouvez simplement mettre à jour vos différents front-ends en modifiant l'ID de la ferme à laquelle il est attaché, et en appliquant la modification.

Le **front-end blue** (id 70089) sera alors associé à la **Ferme B** (infrastructure B, nouvelle production, id 77213).

Le **front-end green** (id 70090) sera alors associé à la **Ferme A** (infrastructure A, nouveau développement, id 77212).

Voici le résultat attendu dans l'espace client OVHcloud après la mise à jour des front-ends et l'application de la nouvelle configuration :

![Result after updating front-ends](images/switch.png){.thumbnail}

#### Via l'API OVHcloud : mise à jour des front-ends et application des modifications

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

|Paramètre|Signification|Exemple|
|---|---|---|
|serviceName|Votre ID de service Load Balancer|loadbalancer-abcdef0123456789|
|frontendId|Votre ID de front-end de production|70089|
|defaultFarmId|Votre ID de ferme de serveurs de développement|77213|

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

|Paramètre|Signification|Exemple|
|---|---|---|
|serviceName|Votre ID de service Load Balancer|loadbalancer-abcdef0123456789|
|frontendId|Votre ID de front-end de production|70090|
|defaultFarmId|Votre ID de ferme de serveurs de développement|77212|

#### Appliquer vos modifications et basculer effectivement les environnements de production et de développement

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

|Paramètre|Signification|
|---|---|
|serviceName|Votre ID de service Load Balancer|

## Conclusion

Vous avez réussi à mettre en œuvre une infrastructure hautement disponible pour la gestion des déploiements blue-green.

Les développeurs ont accès à un environnement de développement sur le port 8888 (ou tout port non standard configurable), tandis que vos clients continuent d'accéder au service en production via le port HTTP standard (80).

L'infrastructure présentée ici est limitée à un seul port, mais elle peut être étendue en ajoutant d'autres ports. Par exemple, vous pouvez également exposer votre site Web sur le port HTTPS standard (443). Vous pouvez le faire en définissant de nouvelles fermes dédiées à chaque port que vous souhaitez exposer, et en les associant à leurs front-ends correspondants (un pour le port standard exposé en production, le second pour le port arbitraire dédié au développement).

Une autre façon de consolider davantage votre infrastructure est de multiplier les serveurs attachés à vos fermes. De cette façon, vous pouvez rendre vos services plus redondants (garantissant ainsi la disponibilité) et ajouter également une capacité d'équilibrage de charge.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).