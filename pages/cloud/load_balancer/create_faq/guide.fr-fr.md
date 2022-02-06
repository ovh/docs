---
title: 'Load Balancer FAQ'
slug: iplb-faq
excerpt: 'FAQ Load Balancer'
section: FAQ
---

## Comment configurer mon Firewall pour accepter le trafic provenant du service Load Balancer OVHcloud ?
Lors de l'utilisation du Load-Balancer, vos clients ne se connectent pas directement à vos serveurs. Une bonne pratique est de mettre en place un Firewall (Pare-Feu) pour autoriser uniquement le trafic provenant du service Load Balancer OVHcloud.

- Pour déterminer les IPs à autoriser dans votre Firewall, vous pouvez utiliser la fonction API suivante :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/natIp
> 


## Comment connaître l'état de mon service ?
Parfois, il peut être utile de connaître l'état de votre service Load Balancer OVHcloud.

- Pour déterminer l'état de votre service, vous pouvez utiliser la fonction API suivante :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/instancesState
> 

L'état des différentes instances du Load Balancer OVHcloud peut être `running` (actif), `reload` (en cours de rafraîchissement), `unknown` (pas encore démarré) ou `dead` (inactif).


## Comment ajouter une IP fail-over au service Load Balancer OVHcloud ?
L'IP fail-over est une IP supplémentaire sur laquelle peut être joint votre service en plus de l'IP principale. L'IP fail-over peut être basculée d'un service à un autre en quelques secondes.

- Pour ajouter une IP fail-over à un service Load Balancer OVHcloud :

> [!api]
>
> @api {POST} /ip/{ip}/move
> 

- Appliquer les modifications :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
> 


## Comment lister les IP failover rattachées au service Load Balancer OVHcloud ?

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/failover
> 


## Comment commander un certificat SSL gratuit ?
Il est possible de commander un certificat SSL gratuit pour le Load Balancer OVHcloud.

- Pour commander un certificat gratuit, vous pouvez utiliser la fonction API suivante, en renseignant le champs `fqdn` :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/freeCertificate
> 

Il est possible de commander un certificat multi-domaine ; le champs `fqdn` prend comme paramètre un tableau de chaîne de caractères.

Pour que la commande se finalise, il faut obligatoirement que le nom de domaine choisi pointe vers votre Load Balancer OVHcloud.


## Comment lister les certificats SSL associés au Load Balancer OVHcloud ?

- Pour lister les certificats SSL associés au Load Balancer OVHcloud, vous pouvez utiliser la fonction API suivante :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/ssl
>

Les certificats commandés (gratuit ou non) sont de type `built`. Ceux ajoutés par vous-même sont de type `custom`.

Un certificat de type `built_not_routed` est un certificat qui a été commandé et livré, mais dont le domaine n'a pas put être validé. Usuellement, c'est parce que le domaine ne pointe plus vers le Load Balancer OVHcloud.

- Pour obtenir les détails d'un certificat SSL, vous pouvez utiliser la fonction API suivante :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/ssl/{id}
>

