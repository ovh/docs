---
title: "Qu'est ce qu'un serveur DNS ?"
excerpt: 'Découvrez le rôle des serveurs DNS, ce qu'ils contiennent et comment ils fonctionnent avec un nom de domaine'
updated: 2024-05-30
---

## Objectif

Le sigle **DNS**, signifiant **D**omain **N**ame **S**ystem, est un ensemble d'éléments (serveurs DNS, zones DNS, etc.) permettant de faire correspondre un nom de domaine avec une adresse IP.

**Découvrez le rôle des serveurs DNS, ce qu'ils contiennent et comment ils fonctionnent avec un nom de domaine.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## En pratique

### Rôle d'un serveur DNS

Tous les **serveurs DNS** (y compris les résolveurs DNS récursifs) forment ensemble ce que l'on appelle le réseau DNS.

Ce réseau DNS permet de faciliter, aux humains, l'accès à Internet et aux différents services qui lui sont associés (sites web, services de messagerie en ligne, etc.).

Ils permettent notamment l'utilisation des [noms de domaine](/links/web/domains) pour, par exemple, accéder à votre site web préféré sans être obligé de retenir l'adresse IP du serveur où est hébergé ce site web.

### Contenu d'un serveur DNS

Un **serveur DNS** contient généralement un annuaire de noms de domaines.

Pour chaque nom de domaine contenu dans l'annuaire est associé un fichier de configuration DNS, appelé **zone DNS**.

Une zone DNS contient des informations techniques, appelées *enregistrements DNS*. La zone DNS est comme un poste d'aiguillage.

Par exemple, vous pouvez y préciser :

- L'adresse IP (enregistrements DNS de type *A* et *AAAA*) de votre hébergement web pour afficher votre site web avec votre nom de domaine.
- Les serveurs e-mail (enregistrements DNS de type *MX*) vers lesquels votre nom de domaine doit rediriger les e-mails qu'il reçoit. Cela vous permet de les consulter sur votre (vos) adresse(s) e-mail(s) personnalisée(s) avec votre nom de domaine.
- Des informations liées à la sécurité / l'authentification de vos services (hébergement web, serveur web, serveur e-mail, etc.) associés à votre nom de domaine (enregistrements DNS de type *SPF*, *DKIM*, *DMARC*, etc.).

Pour plus d'information sur les zones DNS, consultez notre guide « [Editer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

De ce fait, ce sont les **serveurs DNS** qui doivent être déclarés auprès du nom de domaine pour utiliser la zone DNS qu'ils hébergent. 

![DNS](images/dns-server.png){.thumbnail}

### Fonctionnement d'un serveur DNS avec un nom de domaine

#### Déclaration des serveurs DNS auprès du bureau d'enregistrement d'un nom de domaine

De manière générale, pour que la zone DNS associée à un nom de domaine présent dans l'annuaire d'un serveur DNS soit active, il est nécessaire que ce serveur DNS soit déclaré auprès du bureau d'enregistrement du nom de domaine.

De plus, les **serveurs DNS** fonctionnent généralement par paire :

- Un serveur DNS *principal* qui redirige les flux de requêtes reçus par le nom de domaine vers la zone DNS qu'il héberge pour ce dernier. La zone DNS effectue ainsi la *résolution DNS* pour rediriger les flux vers les bons services (serveurs, site web, e-mails, etc.) associés au nom de domaine.
- Un serveur DNS *secondaire* dit *de secours* qui est utilisé si le serveur *principal* est saturé, indisponible ou répond moins rapidement que le serveur *secondaire*.

Parfois, certains fournisseurs DNS proposent plus de 2 **serveurs DNS** à déclarer auprès de votre nom de domaine. Dans ce cas, renseignez tous les serveurs DNS proposés par votre fournisseur DNS.

#### Résolution d'une requête DNS

Pour terminer et afin de comprendre plus globalement la place qu'occupe les serveurs DNS dans le réseau DNS, n'hésitez pas à consulter notre page web expliquant [comment fonctionne un serveur DNS](/links/web/domains-dns-server)

## Aller plus loin

[Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit).

[Modifier une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.