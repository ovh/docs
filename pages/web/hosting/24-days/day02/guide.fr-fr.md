---
title: 'Choisir et configurer un nom de domaine'
slug: day02
excerpt: 'Ou comment s’assurer que les visiteurs vous retrouvent'
section: 'Cas d''usage'
---

mypersonaldomain.ovh est encore une super idée, sur le papier. Puisque le nom est déjà trouvé, il est temps de réserver le nom de domaine. Mais déjà, qu'est-ce qu'un nom de domaine ?

Nous avons vu [hier le fonctionnement des sites web](https://docs.ovh.com/fr/hosting/24-days/day01/) sans parler des noms de domaine alors qu'il s'agit de l'un des points les plus importants d'un site web.

> [!warning]
>
> Ce tutoriel vous présente l’utilisation d’une ou de plusieurs solutions OVH avec des outils externes et vous décrit des manipulations réalisées dans un contexte précis. Pensez à les adapter en fonction de votre situation !
>
> Si vous rencontrez des difficultés lors de ces manipulations, nous vous invitons à faire appel à un prestataire spécialisé et/ou à poser vos questions à notre communauté sur <https://community.ovh.com/>. OVH ne sera pas en mesure de vous fournir une assistance.
>

## Qu'est ce qu'un nom de domaine ?
Le nom de domaine, c'est comme une enseigne numérique : il représente votre activité avec un nom qui lui correspond. C’est un élément importants de votre identité virtuelle. Il permet d'accéder facilement à votre site web, mais aussi de gérer votre image en personnalisant les adresses e-mail : [georges@mypersonaldomain.ovh](mailto:georges@mypersonaldomain.ovh){.external} fait plus professionnel que l'adresse e-mail fournie par votre fournisseur d'accès.

## Comment choisir un nom de domaine ?

### Choisir une bonne enseigne
Le choix de votre nom de domaine peut se faire en fonction de différents paramètres. Il peut s'agir simplement du nom de votre marque. La société **Rondcoin** peut commander un nom de domaine du même nom.

Une contrainte, les noms de domaine sont uniques et sont donc parfois indisponible car déjà pris par d’autres. Dans ce cas, il est possible de jouer sur les mots avec le nom que vous souhaitez enregistrer. Si le nom de domaine rondcoin avait déjà été pris, l'équipe aurait pu sélectionner comme nom **lerondcoin** ou **rondcoin-annonces**. Le principal étant que le nom soit court, clair, percutant et que vos utilisateurs s'en souviennent facilement.

Lorsque vous cherchez votre nom de domaine, il est possible de consulter sa disponibilité directement sur le site de OVH : [https://www.ovh.com/fr/domaines/](https://www.ovh.com/fr/domaines/){.external}.

S'il est indiqué disponible, le domaine est enregistrable. S'il est indiqué comme transférable, c'est que le nom de domaine est déjà enregistré par un tiers.

### Le choix de l'extension
Les noms de domaines sont généralement composés d'un nom, suivi d'un point, et suivi d'une extension. Cette extension se nomme **TLD**. Il en existe de différents types :

- **Les incontournables** .com, .org, .net : elles sont les extensions les plus utilisées dans le monde. Leur avantage est leur popularité et donc qu'elles rassurent les utilisateurs. La difficulté est de trouver un nom de domaine disponible et il est souvent nécessaire de faire varier le nom pour en trouver un disponible.
- **Les géographiques** .fr, .paris, .bzh : ce sont des extensions liées à un pays, une région ou même une ville. Elles sont utiles principalement si votre projet comporte une dimension géographique. Nous vous conseillons d’enregistrer au minimum deux noms de domaine, un avec une extension « incontournable » et un autre avec une extension géographique, celle de votre pays, comme le .fr ou le .be par exemple.
- **Et bien d' autres** comme .pro, .shop, .blog, .tech : elles permettent de donner une information supplémentaire liée, par exemple, à votre activité. Le nom de domaine **rondcoin.tech** peut permettre de créer une redirection vers le site mypersonaldomain.ovh et donne ainsi immédiatement le ton des articles du blog.

Certains TLD nécessitent des conditions pour obtenir la délégation des noms de domaines. Pour certains TLD, il faut par exemple justifier d'une adresse postale dans le pays qu'il désigne.

Pour le site web mypersonaldomain.ovh, vous aurez compris que nous allons utiliser le TLD .ovh. Ce dernier est ouvert à tous et fait partie des extensions les moins chères du marché. Pratique. :)

## Comment fonctionnent les noms de domaines ?
Pour fonctionner, le navigateur utilise le réseau Internet afin de se connecter au serveur. Imaginons quelques instants que le réseau Internet soit assuré par un facteur. Le navigateur est donc l’expéditeur d’une lettre et le serveur sa destination. Pour que le facteur sache où déposer le courrier, il doit avoir des coordonnées bien précises comme les coordonnées GPS (par exemple : latitude : 50.691559, longitude : 3.200255). Sans entrer dans les détails, le réseau Internet fonctionne comme cela : chaque machine bénéficie d’une coordonnée unique dénommée adresse IP (par exemple : 127.0.0.1).

**Mais avez-vous déjà envoyé une lettre avec ses coordonnées GPS ?**

Comme il est bien trop difficile de retenir des coordonnées précises, que ce soit dans le cas du facteur ou dans le cas d’Internet, des systèmes d’adresses alternatifs ont été mis en place. Pour le facteur, il s’agit des adresses postales : rue, code postal et ville, qui sont répertoriées dans des annuaires. Et c’est le facteur qui est en charge de faire la conversion entre le nom de la rue et la boîte aux lettres correspondante. Pour Internet, il s’agit de noms de domaine : **ovh.com** en est un. C’est le nom du site web. Des serveurs spécifiques ont le rôle d’annuaire : les serveurs DNS. Ils se chargent de convertir un nom de domaine en une adresse IP.

Ainsi, lors de votre première connexion à un site web, le navigateur demande au serveur DNS (l’annuaire) quelle est l’adresse IP du nom de domaine qui vient d’être entré. Ensuite, il le garde en mémoire quelque temps et envoie toutes les requêtes à l’adresse IP correspondante, qui retourne alors le site web.

## Comment gérer son nom de domaine de manière optimale ?
Lorsque vous commandez votre nom de domaine, OVH vous propose de configurer et de maintenir automatiquement les serveurs DNS, en toute simplicité. Vous pouvez aussi, bien entendu, décider de les gérer vous-même. Dans ce cas, vous trouverez plus d'informations dans [ce guide](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/).

### Créer des sous-domaines
Lorsque l’on a enregistré un nom de domaine, il est possible de créer des sous-domaines. Par exemple, pour Rondcoin, nous pouvons créer test.mypersonaldomain.ovh ou encore avent.mypersonaldomain.ovh. La seule limite restant l’imagination. Nous verrons bientôt comment créer un sous-domaine pour que l’équipe de Rondcoin puisse publier des articles sur blog.mypersonaldomain.ovh.

### Cacher vos informations personnelles
Si vous souhaitez savoir qui se cache derrière un nom de domaine en particulier, vous pouvez utiliser un service public et gratuit qui se nomme Whois. Ce service retourne les informations légales sur le propriétaire du nom de domaine : nom, prénom, adresse, e-mail, etc. OVH vous propose ce service Whois directement depuis [https://www.ovh.com/fr/support/outils/check_whois.pl](https://www.ovh.com/fr/support/outils/check_whois.pl){.external}.

Comme ces informations sont publiques, OVH vous propose gratuitement un service dénommé **OwO** qui cachera ces informations. Toutes les correspondances effectuées depuis les informations Whois vous seront transférées mais vos informations personnelles resteront cachées à celui ou celle qui consulte le Whois.

Le service **OwO** est activable lors de la commande ou dans l’espace client.

### Améliorer la vitesse de votre site avec DNS Anycast
Si vous souhaitez de meilleures performances, vous pouvez utiliser un service nommé **DNS Anycast** qui utilise des serveurs DNS performants répartis tout autour de la planète. Les performances de la première requête vers votre site sont meilleures, quel que soit le lieu où se trouvent les visiteurs de votre site web. Cette option est disponible lors de la commande de votre nom de domaine, ou depuis votre espace client.

OVH fournit des serveurs DNS par défaut lorsque vous commandez un nom de domaine, mais ces serveurs sont seulement localisés en France.

### Améliorer la sécurité du nom de domaine avec DNSSEC
Le protocole DNS qui permet aux noms de domaine de fonctionner a été créé tout au début d’Internet, à une période où les premiers internautes se faisaient confiance et lorsque les tentatives de piratage étaient plus rares. Par défaut, tous les échanges utilisant le protocole DNS sont dans un format non authentifié, et qu’il est possible d’intercepter. Un attaquant peut ainsi falsifier les échanges et modifier l’adresse IP correspondante, s’il a la main sur le réseau (sur un réseau wifi sans mot de passe par exemple).

Pour cela, un protocole plus sécurisé permet d'authentifier la source de l'annuaire et de s'assurer que seul le serveur qui gère le nom de domaine est légitime pour annoncer l'adresse IP. Ce protocole est DNSSEC. Les aspects techniques de DNSSEC ne sont pas l'objet de ce calendrier de l'avent, mais sachez qu'il est géré gratuitement par OVH.

Il suffit d’activer l’option DNSSEC lors de votre commande. Si vous ne l’avez pas activée ou que vous ne savez pas si c’est le cas, vous pouvez aussi le vérifier et l’activer depuis votre espace client. La démarche à suivre se trouve [dans ce guide](https://docs.ovh.com/fr/domains/securiser-votre-domaine-avec-dnssec/).

En ce deuxième jour, nous avons vu l’importance du nom de domaine pour un site web, comment le choisir et le configurer avec les différentes options disponibles. Cependant, votre nom de domaine ne sert pas à grand-chose si vous n’avez pas un hébergement pour votre site web. Demain, nous verrons comment choisir la [meilleure offre en fonction de votre besoin](https://docs.ovh.com/fr/hosting/24-days/day03/).

À demain.

| Article précédent | Article suivant |
|---|---|
| [Les bases des sites web](https://docs.ovh.com/fr/hosting/24-days/day01/) | [Choisir un hébergement web qui me correspond](https://docs.ovh.com/fr/hosting/24-days/day03/) |
