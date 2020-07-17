---
title: Infrastructure Blue-Green
slug: blue-green
excerpt: Cas pratique
section: Cas d'usage
---


## Introduction
Avec ce guide nous vous proposons d'explorer un cas d'usage particulier de votre service OVHcloud Load Balancer : configurer son service pour gérer facilement une infrastructure production / développement également appelée Blue-Green.


## Déploiement Blue-Green
Un déploiement `Blue-Green`{.action} permet de s'affranchir du temps d'indisponibilité de votre infrastructure. L'intérêt principal est que ce type de déploiement vous offre la possibilité de préparer vos mises à jour et / ou maintenances dans un environnement isolé de votre environnement de production. Vous pouvez ainsi tester vos modifications avant leur mise en production mais aussi revenir rapidement en arrière en cas de détection d'un dysfonctionnement, tout ceci avec des délais d'indisponibilité quasiment nuls.


### Prérequis
Pour mettre en oeuvre un déploiement de type `Blue-Green`{.action} vous devez disposer des éléments suivants :

- un service OVHcloud Load Balancer ;
- un premier serveur qui porte votre infrastructure de production ;
- un second serveur qui porte une infrastructure similaire dédiée au développement ;


### Scénario
Le scénario que nous vous proposons ici est le suivant : vous disposez d'une infrastructure qui vous permet de mettre en ligne votre site internet.

Cette infrastructure héberge le code de votre site mais aussi les applications (serveurs web, serveurs de base de données, etc.) nécessaires à la mise en ligne du site. Régulièrement vous êtes confronté à la nécessité de mettre à jour vos applications et / ou votre code. Vous souhaitez être en mesure de tester vos mises à jours sans impacter ni la disponibilité ni le bon fonctionnement du site exposé à vos clients.

Une solution possible pour atteindre ces objectifs est de mettre en œuvre un déploiement `Blue-Green`{.action}.

Le principe d'un déploiement `Blue-Green`{.action} consiste à vous permettre de basculer facilement d'une infrastructure de développement vers une infrastructure de production, et vice-versa. Cette bascule doit pouvoir se faire de manière transparente pour vos différents utilisateurs. Pour ce faire nous allons assigner le port HTTP standard 80 pour les accès à l'infrastructure de production et le port arbitraire 8888 pour les accès à l'infrastructure de développement.


## Déployer les infrastructures
Dans le cadre du scénario proposé, votre service IP Load Balancing joue un rôle central. Il est l'élément qui vous permet d'exposer simultanément vos 2 infrastructures (production et développement) à vos différents utilisateurs.

L'infrastructure de production est accessible à vos clients sur le service HTTP standard (port 80). L'infrastructure de développement quant à elle est accessible à vos développeurs / administrateurs sur le port non-standard 8888.

Durant la phase initiale d'installation, nous allons assigner arbitrairement un rôle à chacune des parties de notre infrastructure. L'`infrastructure A`{.action} sera assignée à la production tandis que l'`infrastructure B`{.action} sera assignée au développement. Nous considérerons qu'à ce stade elles sont similaires.

Le déploiement `Blue-Green`{.action} consiste à basculer de l'infrastructure A vers l'infrastructure B lorsque cette dernière est prête à exposer votre site après que vos changements aient été appliqués et testés. C'est l'IPBL qui se chargera de gérer cette bascule.

Le schéma suivant détail l'architecture générale :


![Schéma général de l'architecture blue-green](images/scheme.png){.thumbnail}


### Infrastructure A
Cette infrastructure est composée d'une ferme de serveurs qui sera ultérieurement associée à un frontend de votre IPLB. Cette ferme expose au frontend un service de type HTTP, TCP ou UDP. Elle se charge également de la répartition de charge en transmettant aux serveurs le trafic reçu par le frontend. Pour plus de précision sur le rôle des différents éléments du service OVHcloud Load Balancer, vous pouvez vous réferer à cette documentation : [](use_presentation/guide.fr-fr.md){.ref}.

Dans le cadre de notre scénario, nous déclarons une ferme de serveurs pour le service HTTP. A noter que vous pouvez créer autant de fermes que de services TCP et / ou UDP nécessaires au bon fonctionnement du service final exposé à vos clients.

Depuis le manager :


![Ajout d'une nouvelle ferme HTTP dédié à l'infrastructure A](images/ferme1.png){.thumbnail}


![Renseigner la configuration de la ferme](images/backend1.png){.thumbnail}

Via l'Api :


> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/farm
> 

|Paramètre|Signification|
|---|---|
|serviceName|L'identifiant de votre service Load Balancer|

Les appels complémentaires suivants vous permettront respectivement de lister, modifier ou supprimer vos fermes.


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm
> 

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/farm
> 

> [!api]
>
> @api {DELETE} /ipLoadbalancing/{serviceName}/http/farm
> 

Associer un serveur à votre ferme, il s'agit ici du serveur physique portant votre infrastructure de production. Le service exposé au frontend est fournis par le port 8080 du serveur. A noter que vous pouvez associer à chaque ferme un ou plusieurs serveurs (pour par exemple répartir la charge et / ou offrir une meilleur tolérance aux pannes).

Depuis le manager :


![Ajout d'un nouveau serveur à la ferme HTTP A](images/serveur1.png){.thumbnail}


![Renseigner la configuration du serveur HTTP A](images/server1.png){.thumbnail}

Via l'Api :


> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

|Paramètre|Requis|Signification|Exemple|
|---|---|---|---|
|serviceName|Requis|L'identifiant de votre service Load Balancer|loadbalancer-abcdef0123456789|
|farmId|Requis|L'identifiant de votre ferme de serveurs|77212|
|address|Requis|L'addresse IPv4 de votre serveur|10.10.1.100|
|displayName||Le nom du serveur associé à votre ferme|Serveur HTTP A|
|port||Le port du serveur associé à votre ferme|8080|

Les appels complémentaires suivants vous permettront respectivement de lister, modifier ou supprimer vos serveurs.


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

> [!api]
>
> @api {DELETE} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

### Infrastructure B
Cette seconde infrastructure est fonctionnellement jumelle de la précédente, elle est également composée d'une ferme de serveurs qui sera ultérieurement associée à un second frontend de votre IPLB. Cette ferme expose au frontend le même service que la ferme précédemment créé. Ce service est fournis sur les serveurs par le port 8080.

Déployer la ferme de serveurs pour le service HTTP (et / ou tout autre service TCP ou UDP nécessaire au fonctionnement du service final exposé à vos clients).

Depuis le manager Sunrise :


![Ajout d'une nouvelle ferme HTTP dédié à l'infrastructure B](images/ferme2.png){.thumbnail}


![Création d'une seconde ferme dédiée à l'infrastructure B](images/backend2.png){.thumbnail}

Via l'Api :


> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/farm
> 

|Paramètre|Signification|
|---|---|
|serviceName|L'identifiant de votre service Load Balancer|

Associer un serveur à votre ferme, il s'agit ici du (ou des) serveur(s) physique(s) portant votre infrastructure de développement.

Depuis le manager :


![Ajout d'une nouveau serveur à la ferme HTTP B](images/serveur2.png){.thumbnail}


![Renseigner la configuration du serveur HTTP B](images/server2.png){.thumbnail}

Via l'Api :


> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 


|Paramètre|Requis|Signification|Exemple|
|---|---|---|---|
|serviceName|Requis|L'identifiant de votre service Load Balancer|loadbalancer-abcdef0123456789|
|farmId|Requis|L'identifiant de votre ferme de serveurs|77213|
|address|Requis|L'addresse IPv4 de votre serveur|10.10.2.100|
|displayName||Le nom du serveur associé à votre ferme|Serveur HTTP B|
|port||Le port du serveur associé à votre ferme|8080|

A ce stade voici l'état de la configuration de vos 2 fermes :

![Configuration des fermes](images/farms.png){.thumbnail}

## Les frontends
Toute la magie du déploiement `Blue-Green`{.action} se situe au niveau de la configuration de vos frontends. A ce stade nous avons configuré 2 infrastructures fonctionnellement jumelles en déclarant, pour chaque infrastructure, une (ou plusieurs) ferme(s) de serveurs, avec pour chaque ferme son (ses) serveur(s) associé(s).

Pour permettre de basculer simplement d'une infrastructure à une autre nous allons nous servir des frontends.

Pour cela nous devons déclarer 2 frontends. Le premier permettra d'accéder à l'infrastructure de production tandis que le second se chargera des accès à l'infrastructure de développement. Les accès à l'une ou l'autre des infrastructures seront controlés grâce aux ports exposés à vos clients.



> [!warning]
>
> Si le service final exposé à vos clients nécessite plusieurs fermes de serveurs (par exemple : les ports 80 et 443), vous devrez déclarer un `frontend`{.action} pour chacune de vos fermes.
> 


### Frontend Blue
Ce `frontend`{.action} est dédié aux accès à l'infrastructure de production, les ports exposés à vos clients sont les ports standards d'accès au service. Dans le cas présent nous exposons un service HTTP, nous allons donc utiliser le port 80 (443 si vous souhaitez une terminaison SSL).

Depuis le manager :


![Ajout du frontend dédié à la production, Blue Frontend](images/frontend1.png){.thumbnail}


![Renseigner la configuration du frontend Blue](images/fblue.png){.thumbnail}

Via l'Api :


> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/frontend
> 

|Paramètre|Requis|Signification|Exemple|
|---|---|---|---|
|serviceName|Requis|L'identifiant de votre Load Balancer|loadbalancer-abcdef0123456789|
|defaultFarmId||L'identifiant de la ferme de production|77212|
|displayName||Le nom donné au frontend|Blue Frontend|
|port|Requis|Le port exposé par votre frontend à vos clients|80|
|zone|Requis|La zone dans laquelle vous souhaitez déployer votre frontend|all|

### Frontend Green
Ce `frontend`{.action} est dédié aux accès à l'infrastructure de développement, les ports exposés à vos clients seront des ports non-standards que vous pouvez choisir arbitrairement. Dans le cas présent nous allons exposer le service HTTP de développement sur le port 8888.

Depuis le manager :


![Ajout du frontend dédié au développement, Green Frontend](images/frontend2.png){.thumbnail}


![Renseigner la configuration du frontend Green](images/fgreen.png){.thumbnail}

Via l'Api :


> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/frontend
> 

|Paramètre|Requis|Signification|Exemple|
|---|---|---|---|
|serviceName|Requis|L'identifiant de votre Load Balancer|loadbalancer-abcdef0123456789|
|defaultFarmId||L'identifiant de la ferme de production|77213|
|displayName||Le nom donné au frontend|Green Frontend|
|port|Requis|Le port exposé par votre frontend à vos clients|8888|
|zone|Requis|La zone dans laquelle vous souhaitez déployer votre frontend|all|

## Gérer les déploiements

### Déploiement initial
Après avoir finalisé la configuration des différents composants de votre service OVHcloud Load Balancer, il ne vous reste plus qu'à appliquer vos changements.

Depuis le manager :


![Appliquer vos changements sur la zone](images/deploy.png){.thumbnail}

Via l'Api :


> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
> 

|Paramètre|Signification|
|---|---|
|serviceName|L'identifiant de votre service Load Balancer|

### Bascule production / preproduction
À ce stade notre environnement initial est déployé et prêt à être utilisé. Comment l'utiliser ?

De manière assez simple finalement, il suffira désormais de basculer vos frontends d'une ferme de serveur à une autre !

Reprenons notre scénario :

- l'infrastructure de production (A) est déployée sur la `Ferme HTTP A`{.action} (id 77212) qui est elle même attachée au `Serveur HTTP A`{.action}. L'accès à cette infrastructure se fait par l'intermédiaire du `Frontend Blue`{.action}.
- l'infrastructure de développement (B) est déployée sur la `Ferme HTTP B`{.action} (id 77213) qui est elle même attachée au `Serveur HTTP B`{.action}. L'accès à cette infrastructure se fait par l'intermédiaire du `Frontend Green`{.action}.

Après avoir réalisé vos modifications / mises à jours sur l'`infrastructure B`{.action} et validé le bon fonctionnement du service, vous décidez de l'assigner à la production.

Pour faire la bascule entre les 2 fermes, il suffira simplement de mettre à jour vos différents frontends en modifiant l'identifiant de la ferme à laquelle ils sont rattachés et d'appliquer la modification.

Le `Frontend Blue`{.action} (id 70089) va donc être associé à la `Ferme B`{.action} (infrastructure B, nouvelle production, id 77213).

Le `Frontend Green`{.action} (id 70090) quant à lui sera désormais associé à la `Ferme A`{.action} (infrastructure A, nouvelle développement, id 77212).

Résultat sur le manager Sunrise après mise à jour des frontends et application de la nouvelle configuration :


![Résultat après la mise à jour des frontends](images/switch.png){.thumbnail}

Via l'Api : mise à jour des frontends et application des modifications


> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

|Paramètre|Signification|Exemple|
|---|---|---|
|ServiceName|L'identifiant de votre service Load Balancer|loadbalancer-abcdef0123456789|
|frontendId|L'identifiant de votre frontend de production|70089|
|defaultFarmId|L'identifiant de votre ferme de serveurs de développement|77213|

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

|Paramètre|Signification|Exemple|
|---|---|---|
|ServiceName|L'identifiant de votre service Load Balancer|loadbalancer-abcdef0123456789|
|frontendId|L'identifiant de votre frontend de production|70090|
|defaultFarmId|L'identifiant de votre ferme de serveurs de développement|77212|

Pour appliquer vos changements et réaliser effectivement la bascule production / développement.


> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
> 

|Paramètre|Signification|
|---|---|
|serviceName|L'identifiant de votre service Load Balancer|

## Conclusion
Vous disposez désormais d'une infrastructure vous permettant de gérer simplement et efficacement vos déploiements `Blue-Green`{.action}.

Les développeurs disposent d'un accès à l'infrastructure de développement sur le port 8888 (ou tout autre port que vous auriez préférer définir) tandis que vos clients continuent d'accéder au service en production via le port HTTP standard (80 dans le cas de notre exemple).

L'infrastructure présentée ici se limite à l'exposition d'un seul et unique port, elle peut bien entendue être développée en ajoutant d'autres ports. Vous pouvez par exemple vouloir également exposer votre site sur le port HTTPS standard (443). Ceci peut se faire en définissant de nouvelles fermes dédiées à chaque nouveau port que vous souhaitez exposer et en les associant à leurs frontends correspondant (un pour le port standard exposé en production, le second pour le port arbitraire dédié aux développements).

Une autre possibilité pour consolider encore un peu plus votre infrastructure est de multiplier les serveurs attachés à votre (vos) ferme(s). Ceci vous permettra d'ajouter à la simplicité de réalisation de vos déploiements une redondance de vos services (garantissant ainsi leur disponibilité) ainsi qu'une capacité de répartition de charge.
