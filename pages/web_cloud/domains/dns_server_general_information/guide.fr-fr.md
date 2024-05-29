---
title: "Qu'est ce qu'un serveur DNS ?"
excerpt: 'Découvrez le rôle des serveurs DNS, ce qu'ils contiennent et comment ils fonctionnent avec un nom de domaine'
updated: 2024-05-29
---

## Objectif

Le sigle DNS, signifiant **D**omain **N**ame **S**ystem, est un ensemble d'éléments (serveurs DNS, zones DNS, etc.) permettant de faire correspondre un nom de domaine avec une adresse IP.

**Découvrez le rôle des serveurs DNS, ce qu'ils contiennent et comment ils fonctionnent avec un nom de domaine.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### En pratique

Les **serveurs DNS** contiennent des fichiers de configurations DNS pour des noms de domaine, appelés **zones DNS**.

Une zone DNS contient des informations techniques, appelées *enregistrements DNS*. La zone DNS est comme un poste d'aiguillage.

Par exemple, vous pouvez y préciser :

- L'adresse IP (enregistrements DNS de type *A* et *AAAA*) de votre hébergement web pour afficher votre site web avec votre nom de domaine.
- Les serveurs e-mail (enregistrements DNS de type *MX*) vers lesquels votre nom de domaine doit rediriger les e-mails qu'il reçoit. Cela vous permet de les consulter sur votre (vos) adresse(s) e-mail(s) personnalisée(s) avec votre nom de domaine.
- Des informations liées à la sécurité / l'authentification de vos services (hébergement web, serveur web, serveur e-mail, etc.) associés à votre nom de domaine (enregistrements DNS de type *SPF*, *DKIM*, *DMARC*, etc.).

Pour plus d'information sur les zones DNS, consultez notre guide « [Editer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

De ce fait, ce sont les **serveurs DNS** qui doivent être déclarés auprès du nom de domaine pour utiliser la zone DNS qu'ils hébergent. 

![DNS](images/dns-server.png){.thumbnail}

Les **serveurs DNS** fonctionnent généralement par paire :

- Un serveur DNS *principal* qui redirige les flux de requêtes reçus par le nom de domaine vers la zone DNS qu'il héberge pour ce dernier. La zone DNS effectue ainsi la *résolution DNS* pour rediriger les flux vers les bons services (serveurs, site web, e-mails, etc.) associés au nom de domaine.
- Un serveur DNS *secondaire* dit *de secours* qui est utilisé si le serveur *principal* est saturé, indisponible ou répond moins rapidement que le serveur *secondaire*.

Parfois, certains fournisseurs DNS proposent plus de 2 **serveurs DNS** à déclarer auprès de votre nom de domaine. Dans ce cas, renseignez tous les serveurs DNS proposés par votre fournisseur DNS.

## Aller plus loin

[Modification d'une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.