---
title: Configurer le Firewall Network
slug: firewall-network
section: Réseau & IP
---

** Dernière mise à jour le 16/11/2017 **

## Objectif

Afin de protéger son infrastructure globale et les serveurs de ses clients, OVH propose un pare-feu paramétrable et intégré à la solution **Anti-DDoS** (VAC) : Firewall Network. Il s'agit d'une option permettant de limiter l’exposition de son service aux attaques provenant du réseau public.

**Ce guide vous explique comment le configurer**.


> [!primary]
>
> VAC* : Plus d'information sur le VAC, notre système de protection des attaques DDoS ici : <https://www.ovh.com/fr/anti-ddos/>.
> 

![Le VAC en détail](images/vac-inside.png){.thumbnail}


## Prérequis

- Disposer d'un service OVH bénéficiant du Firewall Network ([Serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}, [VPS](https://www.ovh.com/fr/vps/){.external}, [instance Public Cloud](https://www.ovh.com/fr/public-cloud/instances/){.external}, [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external}, [IP Failover](https://www.ovh.com/fr/serveurs_dedies/ip_failover.xml){.external}...)
- Avoir accès à l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Avoir des connaissances de base en réseau.


## En pratique

### Activer le Firewall Network

> [!primary]
>
> Le Firewall Network protège les IP qui sont associées à une machine. Vous devrez donc configurer chaque IP indépendamment, aucune configuration globale du serveur n'est donc possible.
> 

L'activation et la configuration se font manuellement depuis l'espace client, dans la section `IP`{.action}, en cliquant sur l'engrenage situé à droite de l'IPv4 concernée.

![Activation du Firewall Network](images/firewall_creation.png){.thumbnail}

- Une validation est ensuite demandée :

![Validation](images/creationvalid.png){.thumbnail}

- Il reste ensuite à l'activer `Activer le firewall`{.action} et à le configurer `Configurer le Firewall`{.action} en cliquant à nouveau sur l'engrenage à côté de l'IPv4:

![Activation de la configuration](images/activationconfig.png){.thumbnail}

Vous pouvez mettre en place jusqu'à **20 règles par IP**.


> [!warning]
>
> Le firewall s'active automatiquement à chaque attaque DDoS et il n'est pas possible de le désactiver avant la fin de l'attaque. C'est pourquoi il est important de garder des règles de firewall à jour.
> Par défaut, vous n'avez pas de règles configurées, donc toutes les connexions peuvent être établies.
> Si vous en avez, pensez à vérifier régulièrement vos règles de firewall (si vous en avez), même si vous le désactivez.
> 



> [!primary]
>
> - Par défaut, la fragmentation UDP est bloquée (DROP). Lors de l'activation du Firewall Network, si vous utilisez un VPN, pensez à configurer correctement votre maximum transmission unit (MTU). Par exemple, sur OpenVPN, vous pouvez cocher `MTU test`{.action}.
> - Le Firewall Network n'est pas pris en compte au sein du réseau OVH. Les règles mises en place n'affectent donc pas les connexions dans ce réseau interne.
>


### Configurer le Firewall Network

L'ajout d'une règle se fait en cliquant à droite sur `Ajouter une règle`{.action} :


![Ajouter une règle](images/ajoutregle1.png){.thumbnail}

Pour chaque règle vous aurez à choisir :

- une priorité (De 0 à 19, 0 étant la première règle appliquée puis les autres) ;
- une action (`Autorise`{.action} ou `Refuse`{.action}) ;
- le protocole ;
- une IP (facultatif) ;
- le port source (TCP uniquement) ;
- le port de destination (TCP uniquement) ;
- les options TCP (TCP uniquement).


![Détail de l'ajout d'une règle](images/ajoutregle4.png){.thumbnail}


> [!primary]
>
> - Priorité 0 : il est conseillé d'autoriser le protocole TCP sur toutes les IPs avec une option `established`{.action}. L’option `established`{.action} permet de vérifier que le paquet fait partie d’une session précédemment ouverte (déjà initiée). Si vous ne l'autorisez pas, le serveur ne recevra pas les retours du protocole TCP des requêtes SYN/ACK.
> - Priorité 19 : un refus sur tout le protocole IPv4 si aucune règle avant la 19e (la dernière possible) n'est remplie.
> 


### Exemple de configuration

Pour ne laisser ouverts que les ports SSH (22), HTTP (80), HTTPS (443), UDP (sur le port 10000) en autorisant l’ICMP, suivez les règles suivantes :

![Exemple de configuration](images/exemple.png){.thumbnail}

Les règles s'ordonnent chronologiquement de 0 (première règle lue) à 19 (dernière règle lue). La chaîne arrête d’être parcourue à partir du moment où une règle s’applique au paquet reçu.

Par exemple, un paquet destiné au port 80/TCP sera attrapé par la règle 2 et les règles suivantes ne seront pas testées. Un paquet destiné au port 25/TCP ne sera attrapé qu’à la dernière règle (19) qui le bloquera, car OVH n'autorise aucune communication sur le port 25 dans les règles précédentes.

> [!warning]
>
> En cas d'activation de la mitigation anti-DDoS vos règles de Firewall Network seront activées même si vous avez désactivé celui-ci. En cas de désactivation, pensez à bien supprimer vos règles.
> 

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.