---
title: "Qu'est ce qu'un serveur DNS ?"
excerpt: "Découvrez le rôle des serveurs DNS, ce qu'ils contiennent et comment ils fonctionnent avec un nom de domaine"
updated: 2024-06-06
---

## Objectif

Le sigle **DNS**, signifiant **D**omain **N**ame **S**ystem, est un ensemble d'éléments (serveurs DNS, zones DNS, etc.) permettant de faire correspondre un nom de domaine avec une adresse IP.

**Découvrez le rôle des serveurs DNS, ce qu'ils contiennent et comment ils fonctionnent avec un nom de domaine.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## En pratique

### Rôle d'un serveur DNS

Tous les **serveurs DNS** (y compris les résolveurs DNS récursifs) forment ensemble ce que l'on appelle le réseau DNS.

Ce réseau DNS permet de faciliter, pour les utilisateurs, l'accès à Internet et aux différents services qui lui sont associés (sites web, services de messagerie en ligne, etc.).

Ils permettent notamment l'utilisation des [noms de domaine](/links/web/domains) pour, par exemple, accéder à votre site web préféré sans être obligé de retenir l'adresse IP du serveur où est hébergé ce site web.

Consultez notre guide « [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit) » si vous avez besoin de réaliser cette action pour un nom de domaine enregistré chez OVHcloud.

### Contenu d'un serveur DNS

Un **serveur DNS** contient généralement un annuaire de noms de domaines.

Pour chaque nom de domaine contenu dans l'annuaire est associé un fichier de configuration DNS, appelé **zone DNS**.

Une zone DNS contient des informations techniques, appelées *enregistrements DNS*. La zone DNS est comme un poste d'aiguillage.

> [!success]
>
> - Pour plus d'informations sur les zones DNS, consultez notre guide « [Qu'est ce qu'une zone DNS ?](/pages/web_cloud/domains/dns_zone_general_information) ».
> - Consultez ensuite notre guide sur [Les enregistrements DNS](/pages/web_cloud/domains/dns_zone_general_information) pour une meilleure compréhension de l'ensemble.
>

De ce fait, ce sont les **serveurs DNS** qui doivent être déclarés auprès du nom de domaine pour utiliser la zone DNS qu'ils hébergent. 

![DNS](images/dns-server.png){.thumbnail}

### Fonctionnement d'un serveur DNS avec un nom de domaine

#### Déclaration des serveurs DNS auprès du bureau d'enregistrement d'un nom de domaine

De manière générale, pour que la zone DNS associée à un nom de domaine présent dans l'annuaire d'un serveur DNS soit active, il est nécessaire que ce serveur DNS soit déclaré auprès du bureau d'enregistrement du nom de domaine.

De plus, les **serveurs DNS** fonctionnent généralement par paire :

1. Un serveur DNS *principal* qui redirige les flux de requêtes reçus par le nom de domaine vers la zone DNS (hébergée sur le serveur DNS pour le nom de domaine). La zone DNS effectue ainsi la *résolution DNS* pour rediriger les flux vers les bons services (serveurs, site web, e-mails, etc.) associés au nom de domaine.
2. Un serveur DNS *secondaire* dit *de secours* qui est utilisé si le serveur DNS *principal* est saturé, indisponible ou répond moins rapidement que le serveur DNS *secondaire*.

Parfois, certains fournisseurs DNS proposent plus de 2 **serveurs DNS** à déclarer auprès de votre nom de domaine. Dans ce cas, renseignez tous les serveurs DNS proposés par votre fournisseur DNS.

#### Résolution d'une requête DNS

Pour comprendre plus globalement la place qu'occupent les serveurs DNS dans le réseau DNS, n'hésitez pas à consulter notre page web expliquant [comment fonctionne un serveur DNS](/links/web/domains-dns-server).

## Aller plus loin

[Qu'est ce qu'une zone DNS ?](/pages/web_cloud/domains/dns_zone_general_information)

[Les enregitrements DNS](/pages/web_cloud/domains/dns_zone_records)

[Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit).

[Modifier une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).