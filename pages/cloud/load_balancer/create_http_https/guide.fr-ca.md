---
title: Configurer un service OVH Load Balancer HTTP/HTTPS
slug: configure-iplb
excerpt: Configuration d’un service Load Balancer
section: Configuration
---


## Objectif

Ce guide a pour but de vous aider à créer votre premier service HTTP/HTTPS avec la nouvelle offre OVHcloud Load Balancer OVHcloud. Nous allons ici configurer un service OVHcloud Load Balancer simple pour répartir la charge HTTP d'un service, tel qu'un site web.

Un frontend sera créé pour écouter sur le port 80, tandis qu'un autre écoutera sur le port 443 avec un certificat SSL/TLS. Ces frontends seront configurés pour diriger leur trafic vers une ferme HTTP commune. Cette ferme peut disposer d'un ou plusieurs serveurs, selon la configuration choisie / adaptée.

Pour rappel, le service OVHcloud Load Balancer est composé de 4 parties élémentaires :

- les `Frontends` ;
- les `Fermes` de serveurs et leurs `Serveurs` ;
- les `Routes` avancée entre les Frontends et les Fermes de serveurs (bientôt disponible dans le manager) ;
- les certificats `SSL/TLS` permettant de chiffrer les connexions TCP et/ou HTTP.


## Prérequis

- Disposer d'un Load Balancer
- Pouvoir ajouter ou configurer
    - une Ferme
    - un Serveur
    - un Frontend
    - un Certificat SSL

## Introduction

> [!warning]
>
> Nous allons vous guider au travers des différentes étapes. Dépendant de vos choix d'architecture certaines configurations peuvent différer.
> 

Avant de vous lancer, si vous ne l'avez pas encore lue, nous vous conseillons de consulter présentation générale du service OVHcloud Load Balancer: [Présentation de l’OVHcloud Load Balancer](https://docs.ovh.com/ca/fr/load-balancer/iplb-presentation/){.ref}


> [!warning]
>
> L'ordre de création des éléments est important. En particulier, les Fermes de serveurs doivent être configurées avant de pouvoir leur attacher un certificat SSL/TLS ou des Serveurs. De même, les Frontends doivent être configurés après les Fermes de serveurs afin de pouvoir configurer la Ferme par défaut du Frontend.
> 

Dans le Manager nous allons retrouver les fonctionnalités détaillées ci-dessous:


![Service OVHcloud Load Balancer](images/iplb_service.png){.thumbnail}

Pour plus d'informations sur les fonctionnalités du Manager, consulter la page [](https://docs.ovh.com/ca/fr/load-balancer/utilisation-loadbalancer/){.ref}

Via l'API OVHcloud, dans la section


> [!api]
>
> @api {GET} /ipLoadbalancing
> 
Pour plus d'informations sur les fonctionnalités de l'API, consulter la page [Référence Rapide API Load Balancer](https://docs.ovh.com/ca/fr/load-balancer/iplb-api-reference/){.ref}


## Ajouter une Ferme de serveurs
Nous allons ajouter une Ferme de serveurs HTTP à notre service, la partie en charge de répartir le trafic sur les serveurs.


### Via le Manager
Dans l'onglet `Fermes de serveurs`{.action} de serveurs, cliquez sur le bouton `Ajouter une ferme de serveurs`{.action}.

Remplissez les champs, les seuls champs obligatoires pour une configuration simple sont le *Protocole* et le *Datacentre*. Il est recommandé de définir explicitement un *Port*, généralement le port 80 pour un service web. Si aucun port n'est pas spécifié, votre OVHcloud Load Balancer utilisera automatiquement le même port que le Frontend correspondant et les probes pourront ne pas fonctionner comme attendu.

Si vous ajoutez plusieurs serveurs dans votre Ferme, il est recommandé de configurer une `Sonde de disponibilité` HTTP. Lorsqu'une sonde est configurée, le service OVHcloud Load Balancer pourra automatiquement désactiver un serveur qui serait en panne ou en maintenance, de manière à ne pas impacter les visiteurs.


![Ajout d'une ferme de serveurs via le Manager](images/add_backend.png){.thumbnail}

Cliquez sur le bouton `Ajouter`{.action} une fois les champs remplis.

Votre Ferme de serveurs devrait apparaitre dans la liste, sous l'onglet `Fermes de serveurs`{.action}.


![Détails de la ferme de serveurs créée](images/resume_backend.png){.thumbnail}


### Via l'API

- Liste des Fermes de serveurs HTTP :


> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm
> 

- Détails d'un serveur HTTP spécifique :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

- Ajout d'une nouvelle Ferme de serveurs HTTP :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/farm
> 

- Modification d'une Ferme de serveurs spécifique :

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

- Suppression d'une Ferme de serveurs spécifique :

> [!api]
>
> @api {DELETE} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

## Ajouter un Serveur
Nous allons maintenant ajouter un serveur à notre Ferme de serveurs.


### Via le Manager
Toujours dans l'onglet `Fermes de serveurs`{.action}, sélectionnez la Ferme dans laquelle vous souhaitez ajouter un serveur en cliquant sur la ligne correspondante. La liste des Serveurs déjà configurés dans la Ferme apparaît en dessous de la liste des Fermes, ainsi qu'un bouton `Ajouter un serveur`{.action}. Cliquez sur ce bouton pour ajouter un nouveau serveur.

Seul le champ *Adresse IPv4* est obligatoire. Si un serveur n'utilise pas le même port que celui défini plus haut dans la Ferme, il est possible de le surcharger dans la configuration du serveur. Cependant, afin de conserver une configuration la plus homogène et maintenable possible, il est recommandé de n'utiliser ce paramètre que dans les cas avancés.


![Ajour d'un serveur dans une Ferme.](images/add_server.png){.thumbnail}

Cliquez sur le bouton `Ajouter`{.action} une fois les champs remplis.

Votre Serveur devrait apparaître dans la liste des Serveurs, dans l'onglet `Fermes de serveurs`{.action}, juste en dessous de la liste des Fermes.


![Détails du serveur créé.](images/resume_server.png){.thumbnail}


### Via l'API

- Liste des Serveurs de la Ferme :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

- Détails d'un Serveur spécifique :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
> 

- Ajout d'un nouveau Serveur :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

- Modification d'un Serveur spécifique :

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

- Suppression d'un Serveur spécifique :

> [!api]
>
> @api {DELETE} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> 

## Ajouter un Frontend
Nous allons maintenant ajouter un `Frontend` à notre service et le connecter à notre Ferme de serveurs. Le Frontend est la partie de votre OVHcloud Load Balancer qui sert à exposer votre service sur Internet. Dans un premier temps, nous allons le configurer en HTTP uniquement, sans certificat SSL/TLS.


### Via le Manager
Dans l'onglet `Frontends`{.action}, cliquez sur le bouton `Ajouter un frontend`{.action}.

Remplissez les champs, les seuls champs obligatoires pour une configuration simple sont le *Protocole*, le *Port* (80 pour un service web HTTP standard) et le *Datacentre*. Si vous souhaitez que votre service soit disponible sur plusieurs ports en même temps, vous pouvez spécifier une liste de ports séparés par des virgules ou une plage de ports de la forme "START_PORT-END_PORT".

Si vous avez routé des Additional IPs vers votre service OVHcloud Load Balancer, vous pouvez également attacher un Frontend à une ou plusieurs Additional IPs spécifiques.


![Ajout d'un frontend](images/add_frontend.png){.thumbnail}

Cliquez sur le bouton `Ajouter`{.action} une fois les champs remplis.

Votre Frontend devrait apparaître dans la liste, sous l'onglet `Frontends`{.action}.


![Détails du frontend créé](images/resume_frontend.png){.thumbnail}


### Via l'API

- Liste des Frontends HTTP :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/frontend
> 

- Détails d'un Frontend spécifique :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

- Ajout d'un nouveau Frontend :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/frontend
> 

- Modification d'un Frontend spécifique :

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

- Suppression d'un Frontend spécifique :

> [!api]
>
> @api {DELETE} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

## Ajouter un certificat SSL/TLS
La section précédente décrivait la configuration générale pour un Frontend HTTP. Cette section décrit les étapes supplémentaires pour activer le support du protocole HTTPS sur un Frontend HTTP. En particulier, il faudra :

- basculer le Frontend sur le port 443, standard pour le protocole HTTPS ;
- configurer un certificat SSL/TLS afin d'authentifier et chiffrer les connexions.

Que vous optiez pour une configuration via l'API ou via le Manager, vous aurez le choix entre 2 stratégies pour vos certificats SSL/TLS. Le choix de la stratégie dépendra de vos besoin ainsi que des solutions actuellement en place.

- Importer un certificat SSL/TLS existant.
- Commander un certificat SSL/TLS géré automatiquement. La commande de certificats DV et EV arrivera prochainement.

Si vous optez pour l'importation d'un certificat SSL/TLS commandé et géré par vos soins, vous devrez le renouveler périodiquement vous même et le mettre à jour dans votre service OVHcloud Load Balancer. La majorité des certificats sont valide pour 1 an. Certains peuvent l'être plus longtemps. Les certificats Let's Encrypt ne sont quant à eux valides que 3 mois. Il est recommandé d'utiliser le service géré automatiquement par votre OVHcloud Load Balancer pour ces derniers afin de ne pas accidentellement rater une échéance.

Si vous optez pour un certificat géré par votre service OVHcloud Load Balancer, celui-ci sera automatiquement commandé, validé, installé et renouvelé périodiquement par votre OVHcloud Load Balancer. Pour que les opérations de validation et de renouvellement fonctionne, il est nécessaire que le ou les domaines pour lesquels vous commandez ce certificat soient routés vers votre service OVHcloud Load Balancer. Cela implique que les champs *A* et *AAAA* de votre domaine pointent respectivement sur l'IPv4 et l'IPv6 de votre OVHcloud Load Balancer ou l'une de ses Additional IPs. Lors de la commande, vous recevrez un email qui vous guideras dans les étapes de la validation.



>
> Afin d'assurer la continuité de service lors du basculement de votre domaine vers l'IP de votre service OVHcloud Load Balancer afin de valider votre certificat, une bonne pratique est de commencer par configurer et tester complètement la configuration HTTP sur le port 80. De cette manière, votre site reste accessible sans interruption.
> Si votre site dispose déjà d'une connexion HTTPS et que vous souhaitez migrer vers des certificats gérés par votre service OVHcloud Load Balancer, vous pouvez importer vos certificats existants, configurer et tester votre Frontend HTTPS et enfin commander un nouveau certificat pour le même domaine. Il sera automatiquement pris en compte avant l'expiration de votre ancien certificat.
> 

Les certificats configurés sur votre service OVHcloud Load Balancer sont automatiquement disponible pour l'ensemble des Frontend de votre service OVHcloud Load Balancer sur lesquels l'options *SSL* est activée.


### Via le Manager
La liste des certificats SSL/TLS configurés sur votre service OVHcloud Load Balancer se trouve dans l'onglet `Certificats SSL`{.action}. Cette interface vous propose les 2 options évoquées un peu plus haut, à savoir, importer un certificat `Ajouter un certificat SSL`{.action} existant et `Commander un certificat SSL`{.action} géré automatiquement par votre service OVHcloud Load Balancer.


![Boutons d'ajout de certificats](images/certificat.png){.thumbnail}

Si vous optez pour l'importation d'un certificat SSL/TLS existant, cliquez sur `Ajouter un certificat SSL`{.action}. Les champs *Clef privée* et *Certificat* sont obligatoires.

Cliquez sur le bouton `Ajouter`{.action} une fois les champs remplis. Votre certificat apparaîtra alors dans la liste des certificats.


![Ajout d'un certificat existant](images/add_certificat_custom.png){.thumbnail}

Pour ajouter un certificat Let's Encrypt, cliquez sur `Commander un certificat SSL`{.action}, renseignez votre domaines, assurez vous que celui-ci pointe bien sur votre service OVHcloud Load Balancer et laissez vous guider par les mails que vous recevrez. Vous le verrez ensuite apparaître dans la liste des certificats disponibles.


![Command d'un certificat Let's Encrypt](images/add_certificat_letsencrypt.png){.thumbnail}

Une fois votre / vos certificats configurés, vous pouvez créer un Frontend HTTPS, sur le même modèle que le Frontend HTTP créé plus haut avec le port 443 et l'option *SSL* active. Optionnellement, vous pouvez également activer l'option *HSTS*. Si cette option est active, les navigateurs enregistreront que ce site Internet ne dois *plus jamais* être visité sans HTTPS après leur première visite en HTTPS. Cela permet de renforcer la sécurité globale en se protégeant contre les attaques de type "Homme du milieu" dans laquelle un acteur malveillant pour faire croire que votre site Internet n'est pas disponible en HTTPS et forcer vos visiteurs à basculer en "HTTP".



> [!warning]
>
> Bien que l'ajout de sécurité soit conséquent, il est recommandé d'attendre quelques temps avant d'activer cette option, le temps de s'assurer qu'il n'y a pas d'effets de bords en HTTPS. En effet, une fois HSTS activé, il n'y a plus de retour arrière possible.
> 


### Via l'API

- Lister les certificats SSL/TLS en place :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/ssl
> 

- Obtenir les détails d'un certificat SSL/TLS :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/ssl/{id}
> 

- Ajout d'un nouveau certificat SSL/TLS existant :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/ssl
> 

- Modification d'un certificat SSL/TLS spécifique (seul le nom affiché peut être modifié) :

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/ssl/{id}
> 

- Suppression d'un certificat SSL/TLS spécifique :

> [!api]
>
> @api {DELETE} /ipLoadbalancing/{serviceName}/ssl/{id}
> 

## Appliquer les modifications
Les modifications apportées à votre service OVHcloud Load Balancer soivent être *appliquées explicitement* dans chacune des zones configurées pour votre service OVHcloud Load Balancer. C'est seulement à ce moment qu'elles seront visibles pour vos visiteurs. Cela permet de faire un changement complexe de configuration en une seule fois.

Si vous avez plusieurs zones, vous devrez appliquer la même configuration pour chacune de vos zones.


### Via le Manager
Rendez-vous sur la page d'accueil de votre service OVHcloud Load Balancer et cliquez sur le bouton `Appliquer la configuration`{.action}.

![Appliquer la configuration](images/btn_apply_configuration.png){.thumbnail}

Selectionnez ensuite la liste des zones que vous souhaitez deployer, et cliquez sur le bouton `Appliquer la configuration`{.action}.

![Appliquer la configuration zones](images/btn_apply_configuration_zones.png){.thumbnail}


### Via l'API

- Raffraichir une zone :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
> 

## Validation
Une fois toutes ces étapes terminées, vous devriez disposer d'un service de répartition de charge fonctionnel, vous pouvez valider l'état du service en vistant votre site.
