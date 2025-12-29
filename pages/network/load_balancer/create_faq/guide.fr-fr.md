---
title: 'OVHcloud Load Balancer FAQ'
excerpt: 'Questions fréquentes concernant le service OVHcloud Load Balancer'
updated: 2025-11-12
---

## Objectif

Retrouvez dans ce document les questions les plus fréquemment posées et les instructions correspondantes pour effectuer des tâches de gestion et de configuration courantes sur votre service OVHcloud Load Balancer.

## FAQ

### Comment configurer mon pare-feu pour accepter le trafic provenant de l'OVHcloud Load Balancer ?

Lorsque vous utilisez le Load Balancer, vos clients ne se connectent pas directement à vos serveurs. Il est recommandé de configurer un pare-feu permettant uniquement le trafic provenant du service OVHcloud Load Balancer.

#### Via l'API OVHcloud

Pour identifier les adresses IP que vous devez autoriser dans votre pare-feu, vous pouvez utiliser l'appel API suivant :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/natIp
> 

#### Via l'espace client OVHcloud

Dans le tableau de bord de votre service Load Balancer, accédez à l'onglet `Accueil`{.action}. Dans le cadre **Informations**, cliquez sur le bouton `...`{.action} à droite de la mention **IPv4 de sortie** et sélectionnez `Consulter`{.action}.

Une fenêtre s'ouvrira, listant les adresses IP que vous devez autoriser dans votre pare-feu.

### Comment connaître le statut de mon service ?

Parfois, il peut être utile de connaître le statut de votre service OVHcloud Load Balancer.

#### Via l'API OVHcloud

Pour déterminer le statut de votre service, vous pouvez utiliser l'appel API suivant :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/instancesState
> 

Les différents statuts de l'OVHcloud Load Balancer peuvent être :

- `running` : Actif.
- `reload` : Mise à jour en cours.
- `unknown` : Non encore démarré.
- `dead` : Inactif.

#### Via l'espace client OVHcloud

Dans le tableau de bord de votre service Load Balancer, accédez à l'onglet `Accueil`{.action}. Retrouvez dans le cadre **Statut** le nom interne de votre service Load Balancer ainsi que son statut.

### Comment ajouter une Additional IP à l'OVHcloud Load Balancer ?

Une Additional IP est une adresse IP secondaire qui peut être associée à votre service en plus de votre adresse IP principale. L'Additional IP peut être transférée d'un serveur à un autre en quelques secondes.

#### Via l'API OVHcloud

Pour ajouter une Additional IP à votre service OVHcloud Load Balancer :

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/move
> 

Appliquez le changement :

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

#### Via l'espace client OVHcloud

Dans le tableau de bord de votre service Load Balancer, accédez à l'onglet `Frontends`{.action} et cliquez sur le bouton `Ajouter un frontend`{.action}.

Ensuite, affichez les `Paramètres avancés`{.action} et sélectionnez les Additional IPs (listées sur l'interface comme « Dedicated IP failover ») que vous souhaitez ajouter à votre frontend.

### Comment lister les Additional IPs routées vers le service OVHcloud Load Balancer ?

Utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/failover
> 

### Comment commander un certificat SSL gratuit ?

#### Via l'espace client OVHcloud

Dans le tableau de bord de votre service Load Balancer, accédez à l'onglet `Certificats SSL`{.action} et cliquez sur le bouton `Commander un certificat SSL`{.action}.
Remplissez le FQDN dans le champ dédié, puis cliquez sur `Commander`{.action}.

Pour que la commande soit validée, il est nécessaire que le nom de domaine pointe vers votre service OVHcloud Load Balancer.

#### Via l'API OVHcloud

Il est possible de commander un certificat SSL gratuit pour le service OVHcloud Load Balancer.

Pour ce faire, vous pouvez utiliser l'appel API suivant et renseigner votre domaine dans le champ `fqdn` :

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/freeCertificate
> 

Il est possible de commander un certificat multi-domaines ; le champ `fqdn` accepte une entrée de type chaîne de caractères.

Pour que la commande soit validée, il est nécessaire que le nom de domaine pointe vers votre service OVHcloud Load Balancer.

### Comment lister les certificats SSL associés à l'OVHcloud Load Balancer ?

#### Via l'espace client OVHcloud

Dans le tableau de bord de votre service Load Balancer, accédez à l'onglet `Certificats SSL`{.action}, où vous trouverez un tableau listant les certificats associés à ce Load Balancer.

Pour obtenir les détails d'un certificat SSL, cliquez sur le bouton `...`{.action} à droite du certificat souhaité, puis sélectionnez `Voir un aperçu`{.action}.

#### Via l'API OVHcloud

Pour lister les certificats SSL associés à l'OVHcloud Load Balancer, vous pouvez utiliser l'appel API suivant :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl
>

Les certificats SSL commandés (gratuits ou non) apparaîtront comme `built`. Ceux ajoutés par vous-même apparaîtront comme `custom`.

Un certificat SSL apparaissant comme `built_not_routed` est un certificat qui a été commandé et livré, mais dont le domaine ne peut pas être validé. Cela est généralement dû au fait que le domaine ne pointe plus vers le service OVHcloud Load Balancer.

Pour obtenir les détails d'un certificat SSL, vous pouvez utiliser l'appel API suivant :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl/{id}
>

## Aller plus loin

Trouvez les détails de tous les appels API liés à l'OVHcloud Load Balancer dans [ce guide](/pages/network/load_balancer/use_api_details).

Rejoignez notre [communauté d'utilisateurs](/links/community).
