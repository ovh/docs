---
title: 'Configurer SMTP sur un service Load Balancer'
slug: case-smtp
excerpt: 'Cas pratique SMTP'
section: 'Cas d''usage'
---

## Introduction
Ce guide a pour but de vous aider à configurer un service OVH Load Balancer OVH pour répartir la charge sur plusieurs serveurs répondant convenablement en SMTP.



> [!warning]
>
> Les questions de ce qu'est un service SMTP, et son fonctionnement, ne seront pas abordées ici.
> Il est considéré que ces informations sont raisonnablement comprises et/ou maîtrisées.
> 



> [!warning]
>
> Nous considérons que vous avez déjà un service SMTP de type postfix installé et configuré sur vos serveurs.
> 



> [!warning]
>
> Nous allons vous guider au travers des différentes étapes.
> Dépendant de vos choix d'architecture, certaines configurations peuvent différer.
> 


Dans ce guide, nous allons configurer un service simple de Load Balancing TCP, pour un (ou plusieurs) serveur(s) SMTP. Un Frontend TCP écoutera le trafic TCP sur le port 25. Il sera configuré pour diriger le trafic sur une Ferme TCP, avec un ou plusieurs Serveurs TCP, selon votre configuration.

Pour rappel, chaque protocole (HTTP, TCP et UDP) dans le service OVH Load Balancer dispose de ses propres Frontends, Fermes et Serveurs associés.



> [!warning]
>
> L'ordre de création des éléments est important.
> En particulier, les Fermes de serveurs doivent être configurées avant de pouvoir leur attacher des Serveurs.
> 

Dans le Manager nous allons retrouver les fonctionnalités détaillées ci-dessous :


![Service OVH Load Balancer](images/iplb_service.png){.thumbnail}



Via l'API OVH, dans la section


> [!api]
>
> @api {GET} /ipLoadbalancing
> 

Pour plus d'informations sur les fonctionnalités de l'API, consulter la page [](use_api_reference/guide.fr-fr.md){.ref}.


## Ajouter une `Ferme`{.action} de serveurs

Nous allons ajouter une Ferme de serveurs TCP à notre service, la partie en charge de répartir le trafic sur les serveurs.


### Via le Manager

Dans l'onglet `Fermes`{.action} de serveurs, cliquez sur le bouton `+TCP/TLS`{.action}.

Remplissez les différents champs. Les champs obligatoires pour une configuration simple sont le *Port* et la *Zone*. Dans notre cas, pour SMTP, le port utilisé est le port 25. Si aucun port n'est spécifié, votre OVH Load Balancer utilisera automatiquement le même port que le Frontend correspondant.

Vous pouvez optionnelement ajouter une sonde de type smtp sur votre Ferme.


![Ajout d'une ferme de serveurs via le Manager](images/add_farm.png){.thumbnail}

Cliquez sur le bouton `Ajouter`{.action} une fois les champs remplis.

Votre Ferme de serveurs devrait apparaître dans la liste, sous l'onglet `Fermes`{.action}.


![Détails de la ferme de serveurs créée](images/resume_farm.png){.thumbnail}


### Via l'API

- Liste des Fermes de serveurs TCP :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/tcp/farm
> 


- Détails d'un serveur TCP spécifique :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> 


- Ajout d'une nouvelle Ferme de serveurs TCP :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/tcp/farm
> 


- Modification d'une Ferme de serveurs spécifique :

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> 


- Suppression d'une Ferme de serveurs spécifique :

> [!api]
>
> @api {DELETE} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> 

## Ajouter un `Serveur`{.action}

Nous allons maintenant ajouter un serveur à notre Ferme de serveurs.


### Via le Manager

Toujours dans l'onglet `Ferme`{.action}, sélectionnez la Ferme dans laquelle vous souhaitez ajouter un serveur en cliquant sur la ligne correspondante. La liste des Serveurs déjà configurés dans la Ferme apparaît en dessous de la liste des Fermes, ainsi qu'un bouton `+Server`{.action}. Cliquez sur ce bouton pour ajouter un nouveau serveur.

Seuls les champs *Adresse IPv4*,  *État* et *Version du ProxyProtocol* sont obligatoires. Si un serveur n'utilise pas le même port que celui défini plus haut dans la Ferme, il est possible de le surcharger dans la configuration du serveur. Cependant, afin de conserver une configuration la plus homogène et maintenable possible, il est recommandé de n'utiliser ce paramètre que dans les cas avancés.



> [!warning]
>
> Il est important de configurer le ProxyProtocol en version v1,
> afin d'obtenir l'IP source réelle sur votre service SMTP.
> Postfix est compatible avec ce protocole.
> 


![Ajour d'un serveur dans une Ferme.](images/add_server.png){.thumbnail}

Cliquez sur le bouton `Ajouter`{.action} une fois les champs remplis.

Votre Serveur devrait apparaître dans la liste des Serveurs l'onglet `Fermes`{.action}, juste en dessous de la liste des Fermes.


![Détails du serveur créé.](images/resume_server.png){.thumbnail}


### Via l'API

- Liste des Serveurs de la Ferme :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> 


- Détails d'un Serveur spécifique :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
> 


- Ajout d'un nouveau Serveur :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> 


- Modification d'un Serveur spécifique :

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> 


- Suppression d'un Serveur spécifique :

> [!api]
>
> @api {DELETE} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> 

## Ajouter un `Frontend`{.action}

Nous allons maintenant ajouter un `Frontend`{.action} à notre service et le connecter à notre Ferme de serveurs. Le Frontend est la partie de votre OVH Load Balancer qui sert à exposer votre service sur Internet.


### Via le Manager

Dans l'onglet `+Frontends`{.action}, cliquez sur le bouton `+TCP/TLS`{.action}.

Remplissez les différents champs. Les seuls champs obligatoires pour une configuration simple sont le *Port* (25 pour un service SMTP standard), la *Zone* et la *Sonde* si vous en avez configuré un dans votre Ferme. Si vous souhaitez que votre service soit disponible sur plusieurs ports en même temps, vous pouvez spécifier une liste de ports séparés par des virgules ou une plage de ports de la forme "<port_de_départ>-<port_de_fin>".

Si vous avez routé des IP Failovers vers votre service OVH Load Balancer, vous pouvez également attacher un Frontend à une ou plusieurs IP Failovers spécifiques.

N'oubliez pas de spécifier comme «Ferme par défaut» la Ferme créée précédemment.


![Ajout d'un frontend](images/add_frontend.png){.thumbnail}

Cliquez sur le bouton `Ajouter`{.action} une fois les champs remplis.

Votre Frontend devrait apparaître dans la liste, sous l'onglet `Frontends`{.action}.


![Détails du frontend créé](images/resume_frontend.png){.thumbnail}


### Via l'API

- Liste des Frontends TCP :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/tcp/frontend
> 


- Détails d'un Frontend spécifique :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> 


- Ajout d'un nouveau Frontend :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/tcp/frontend
> 


- Modification d'un Frontend spécifique :

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> 


- Suppression d'un Frontend spécifique :

> [!api]
>
> @api {DELETE} /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> 


## Appliquer les modifications

Les modifications apportées à votre service OVH Load Balancer doivent être *appliquées explicitement* dans chacune des zones configurées pour votre service OVH Load Balancer. C'est seulement à ce moment qu'elles seront visibles pour vos visiteurs. Cela permet de faire un changement complexe de configuration en plusieurs fois, et de ne l'appliquer que lorsque la configuration est prête.

Si vous avez plusieurs zones, vous devrez appliquer la même configuration pour chacune de vos zones.


### Via le Manager

Rendez-vous sur la page principale de votre service OVH Load Balancer et cliquez sur les boutons `Appliquer:Zone`{.action} pour chacune des zones concernées.


### Via l'API

- Rafraîchir une zone :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
> 


## Configuration de postfix

Afin de rendre compatible postfix avec le *ProxyProtocol* de haproxy, une option est requise dans le fichier de configuration postfix main.cf.

smtp_upstream_proxy_protocol = haproxy

Vous devez ensuite redémarrer votre démon postfix.


## Validation

Une fois toutes ces étapes terminées, vous devriez disposer d'un service de répartition de charge fonctionnel pour vos serveurs SMTP. Vous pouvez alors valider l'état du service en interrogeant votre IPLB comme un serveur SMTP.


![Connexion à SMTP via telnet](images/resume_validate.png){.thumbnail}
