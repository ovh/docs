---
title: Configurer le Coupe-feu Réseau
slug: firewall-network
section: Réseau & IP
---

**Dernière mise à jour le 25/01/2018**

## Objectif

Afin de protéger son infrastructure globale et les serveurs de ses clients, OVH propose un coupe-feu paramétrable et intégré à la solution **Anti-DDoS** (VAC) : le Pare-feu Réseau Il s'agit d'une option permettant de limiter l’exposition de son service aux attaques provenant du réseau public.

**Ce guide vous explique comment le configurer**.


> [!primary]
>
> VAC* : Plus d'information sur le VAC, notre système de protection des attaques DDoS ici : https://www.ovh.com/ca/fr/anti-ddos/
> 

![Le VAC en détail](images/vac-inside.png){.thumbnail}


## Prérequis

- Disposer d'un service OVH bénéficiant du Coupe-feu Réseau ([Serveur dédié](https://www.ovh.com/ca/fr/serveurs_dedies/){.external}, [VPS](https://www.ovh.com/ca/fr/vps/){.external}, [instance Cloud Public](https://www.ovh.com/ca/fr/public-cloud/instances/){.external}, [Private Cloud](https://www.ovh.com/ca/fr/private-cloud/){.external}, [IP Failover](https://www.ovh.com/ca/fr/serveurs_dedies/ip_failover.xml){.external}...)
- Avoir accès à l'[espace client OVH](https://ca.ovh.com/auth/?action=gotomanager){.external}.
- Avoir des connaissances de base en réseau.


## En pratique

### Activer le Coupe-feu Réseau

> [!primary]
>
> Le Pare-feu Réseau protège les IP qui sont associées à une machine. Vous devrez donc configurer chaque IP indépendamment, aucune configuration globale du serveur n'est donc cependant n'étant possible.
> 

L'activation et la configuration se font manuellement depuis l'espace client, dans la section `IP`{.action}, en cliquant sur l'engrenage situé à droite de l'IPv4 concernée.

![Activation du Pare-feu Réseau](images/firewall_creation.png){.thumbnail}

- Une validation est ensuite demandée :

![Validation](images/creationvalid.png){.thumbnail}

- Il reste ensuite à l'activer `Activer le pare-feu`{.action} et à le configurer `Configurer le pare-feu`{.action} en cliquant à nouveau sur l'engrenage à côté de l'IPv4:

![Activation de la configuration](images/activationconfig.png){.thumbnail}

Vous pouvez mettre en place jusqu'à **20 règles par IP**.


> [!warning]
>
> Le pare-feu s'active automatiquement à chaque attaque DDoS et il n'est pas possible de le désactiver avant la fin de l'attaque. C'est pourquoi il est important de garder des règles de pare-feu à jour. Par défaut, vous n'avez pas de règles configurées, donc toutes les connexions peuvent être établies. Si vous en avez, pensez à vérifier régulièrement vos règles de pare-feu  (si vous en avez), même si vous le désactivez.
> 


> [!primary]
>
> - Par défaut, la fragmentation UDP est bloquée (DROP) par défaut. Lors de l'activation du Coupe-feu Réseau, si vous utilisez un VPN, pensez à configurer correctement votre maximum transmission unit (MTU). Par exemple, sur OpenVPN, vous pouvez cocher `MTU test`{.action}.
> - Le  Coupe-feu Réseau n'est pas pris en compte au sein du réseau OVH. Les règles mises en place n'affectent donc pas les connexions dans ce réseau interne.
>


### Configurer le Coupe-feu Réseau

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

Pour ne laisser ouverts que les ports SSH (22), HTTP (80), HTTPS (443), UDP (sur le port 10000) en autorisant l’ICMP, nous devons suivre suivez les règles suivantes :

![Exemple de configuration](images/exemple.png){.thumbnail}

Les règles s'ordonnent chronologiquement de 0 (première règle lue) à 19 (dernière règle lue). La chaîne arrête d’être parcourue à partir du moment où une règle s’applique au paquet reçu.

Par exemple, un paquet destiné au port 80/TCP sera attrapé par la règle 2 et les règles suivantes ne seront pas testées. Un paquet destiné au port 25/TCP ne sera attrapé qu’à la dernière règle (19) qui le bloquera, car OVH n'autorise aucune communication sur le port 25 dans les règles précédentes.

> [!warning]
>
> En cas d'activation de la mitigation anti-DDOS vos règles de Coupe-feu Réseau seront activées même si vous avez désactivé celui-ci. En cas de désactivation, pensez à bien supprimer vos règles.
> 

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.