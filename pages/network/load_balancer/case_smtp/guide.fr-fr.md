---
title: 'Comment configurer le SMTP sur un service Load Balancer'
excerpt: 'Découvrez comment utiliser le SMTP avec le Load Balancer OVHcloud'
updated: 2025-10-24
---

## Objectif

**Ce guide détaille la configuration du Load Balancer OVHcloud afin de distribuer le trafic entre plusieurs serveurs SMTP.**

## Prérequis

- Posséder une offre [OVHcloud Load balancer](/links/network/load-balancer) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](/links/manager).
- Posséder un service SMTP de type Postfix installé et configuré sur vos serveurs.

## En pratique

> [!warning]
>
> Ce guide présuppose une connaissance fonctionnelle du protocole SMTP et de son service.
>

Dans ce guide, nous configurons un service simple d'équilibrage de charge TCP pour un (ou plusieurs) serveur(s) SMTP. Un *frontend* TCP écoutera le trafic TCP sur le port 25. Il sera configuré pour diriger le trafic vers une ferme TCP, comprenant un ou plusieurs serveurs TCP, selon la configuration retenue.

Pour rappel, chaque protocole (HTTP, TCP et UDP) du service OVHcloud Load Balancer dispose de ses propres *frontends*, fermes et serveurs associés.

> [!warning]
>
> L'ordre de création des éléments est important.
> En particulier, les fermes de serveurs doivent être configurées **avant** de pouvoir leur attacher des serveurs.
>

Les fonctionnalités détaillées ci-dessous sont disponibles dans l'espace client OVHcloud :

![Service OVHcloud Load Balancer](images/iplb_service.png){.thumbnail}

Depuis l'API OVHcloud :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing
> 

Pour plus d'informations sur les fonctionnalités de l'API, consultez la page « [Détails des fonctions API](/pages/network/load_balancer/use_api_details) ».

### Ajouter une ferme de serveurs

Une ferme de serveurs TCP doit être ajoutée à notre service ; ce composant est en charge de la répartition du trafic sur les serveurs.

#### Depuis l'espace client OVHcloud

Dans l'onglet `Fermes`{.action} de serveurs, cliquez sur le bouton `+TCP/TLS`{.action}.

Remplissez les différents champs. Les champs obligatoires pour une configuration simple sont le *Port* et la *Zone*. Dans notre cas, pour SMTP, le port utilisé est le port 25. Si aucun port n'est spécifié, votre OVHcloud Load Balancer utilisera automatiquement le même port que le *frontend* correspondant.

Vous pouvez optionnelement ajouter une sonde de type SMTP sur votre ferme.

![Ajout d'une ferme de serveurs via le Manager](images/add_farm.png){.thumbnail}

![Ajout d'une ferme de serveurs via le Manager](images/add_farm_Probe.png){.thumbnail}

Cliquez sur le bouton `Ajouter`{.action} une fois les champs remplis.

Votre ferme de serveurs devrait apparaître dans la liste, sous l'onglet `Fermes`{.action}.

![Détails de la ferme de serveurs créée](images/resume_farm.png){.thumbnail}

#### Depuis l'API OVHcloud

- Liste des fermes de serveurs TCP :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm
> 

- Détails d'une ferme de serveurs TCP :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> 

- Ajout d'une nouvelle ferme de serveurs TCP :

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm
> 

- Modification d'une ferme de serveurs spécifique :

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> 

- Suppression d'une ferme de serveurs spécifique :

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> 

### Ajouter un serveur

Un serveur doit maintenant être ajouté à la ferme de serveurs.

#### Depuis l'espace client OVHcloud

Toujours dans l'onglet `Fermes`{.action}, sélectionnez la ferme dans laquelle vous souhaitez ajouter un serveur en cliquant sur la ligne correspondante. La liste des serveurs déjà configurés dans la ferme apparaît en dessous de la liste des fermes, ainsi qu'un bouton `+Server`{.action}. Cliquez sur ce bouton pour ajouter un nouveau serveur.

Les champs obligatoires sont l'*Adresse IPv4*, l'*État* et la *Version du ProxyProtocol*. Si un port de serveur est configuré, il remplacera le port défini au niveau de la ferme. Afin de conserver une configuration la plus homogène et maintenable possible, il est recommandé de n'utiliser ce paramètre que dans les cas avancés.

> [!warning]
>
> Il est important de configurer le ProxyProtocol en version v1 afin d'obtenir l'IP source réelle sur votre service SMTP.
> Postfix est compatible avec ce protocole.
> 

![Ajout d'un serveur dans une ferme](images/add_server.png){.thumbnail}

![Ajout d'un serveur dans une ferme](images/add_server_advance.png){.thumbnail}

Cliquez sur le bouton `Ajouter`{.action} une fois les champs remplis.

Votre serveur devrait apparaître dans la liste des serveurs dans l'onglet `Fermes`{.action}, juste en dessous de la liste des fermes.

![Détails du serveur créé](images/resume_server.png){.thumbnail}

### Depuis l'API OVHcloud

- Liste des serveurs de la ferme :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> 

- Détails d'un serveur spécifique :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
> 

- Ajout d'un nouveau serveur :

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> 

- Modification d'un serveur spécifique :

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> 

- Suppression d'un serveur spécifique :

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> 

### Ajouter un frontend

Un *frontend* doit maintenant être ajouté à notre service et connecté à la ferme de serveurs. Le *frontend* est le composant de votre OVHcloud Load Balancer qui expose votre service sur Internet.

#### Depuis l'espace client OVHcloud

Dans l'onglet `+Frontends`{.action}, cliquez sur le bouton `+TCP/TLS`{.action}.

Remplissez les différents champs. Les seuls champs obligatoires pour une configuration simple sont le *Port* (25 pour un service SMTP standard), la *Zone*, la *Ferme par défaut* et la *Sonde* (si vous en avez configuré une dans votre Ferme). Si vous souhaitez que votre service soit disponible sur plusieurs ports en même temps, vous pouvez spécifier une liste de ports séparés par des virgules ou une plage de ports de la forme "<port\_de\_départ>-<port\_de\_fin>".

Si vous avez routé des Additional IP vers votre service OVHcloud Load Balancer, vous pouvez également attacher un *frontend* à une ou plusieurs Additional IP spécifiques.

Assurez-vous de spécifier la ferme créée précédemment comme « Ferme par défaut ».

![Ajout d'un frontend](images/add_frontend.png){.thumbnail}

Cliquez sur le bouton `Ajouter`{.action} une fois les champs remplis.

Votre *frontend* devrait apparaître dans la liste, sous l'onglet `Frontends`{.action}.

![Détails du frontend créé](images/resume_frontend.png){.thumbnail}

#### Depuis l'API OVHcloud

- Liste des *frontends* TCP :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend
> 

- Détails d'un *frontend* spécifique :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> 

- Ajout d'un nouveau *frontend* :

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/frontend
> 

- Modification d'un *frontend* spécifique :

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> 

- Suppression d'un *frontend* spécifique :

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> 

### Appliquer les modifications

Les modifications apportées à votre service OVHcloud Load Balancer doivent être **appliquées explicitement** dans chacune des zones configurées pour votre service. C'est seulement à ce moment qu'elles deviendront visibles pour vos visiteurs. Ce processus permet de préparer des changements de configuration complexes et de ne les appliquer qu'une fois la configuration entièrement prête.

Si vous avez plusieurs zones, la même configuration devra être appliquée pour chacune de vos zones.

#### Depuis l'espace client OVHcloud

Rendez-vous sur la page principale de votre service OVHcloud Load Balancer et cliquez sur les boutons `Appliquer:Zone`{.action} pour chacune des zones concernées.

#### Depuis l'API OVHcloud

- Rafraîchir une zone :

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

### Configuration de Postfix

Afin de rendre Postfix compatible avec le *ProxyProtocol* de HAProxy, une option est requise dans le fichier de configuration `postfix main.cf` :

```bash
smtp_upstream_proxy_protocol = haproxy
```

Le daemon Postfix doit ensuite être redémarré.

### Validation

Une fois toutes ces étapes terminées, vous devriez disposer d'un service de répartition de charge fonctionnel pour vos serveurs SMTP. Vous pouvez alors valider l'état du service en interrogeant votre IPLB comme un serveur SMTP.

![Connexion à SMTP via telnet](images/resume_validate.png){.thumbnail}

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
