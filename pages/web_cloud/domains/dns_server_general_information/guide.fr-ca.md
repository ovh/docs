---
title: "Tout savoir sur les serveurs DNS"
excerpt: "Découvrez le rôle des serveurs DNS, ce qu'ils contiennent et comment ils fonctionnent avec un nom de domaine"
updated: 2024-06-17
---

## Objectif

Le sigle **DNS**, signifiant **D**omain **N**ame **S**ystem, est un ensemble d'éléments (serveurs DNS, zones DNS, etc.) permettant de faire correspondre un nom de domaine avec une adresse IP.

**Découvrez le rôle des serveurs DNS, ce qu'ils contiennent et comment ils fonctionnent avec un nom de domaine.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## En pratique

### Rôle des serveurs DNS

Tous les **serveurs DNS** forment ensemble ce que l'on appelle le réseau DNS.

Ce réseau DNS permet de faciliter, pour les utilisateurs, l'accès à Internet et aux différents services qui lui sont associés (sites web, services de messagerie en ligne, etc.).

Ils permettent notamment l'utilisation des [noms de domaine](/links/web/domains) pour accéder à votre site web préféré sans être obligé de retenir l'adresse IP du serveur où est hébergé ce site web.

![DNS resolution](/pages/assets/schemas/dns/dns-resolution.png){.thumbnail}

Il existe 4 types de serveurs DNS.

Retrouvez ci-dessous un tableau présentant ces 4 types de serveurs DNS et leurs interractions. Les exemples donnés dans le tableau seront réalisés à partir d'une requête DNS envoyée depuis un navigateur web pour connaître l'adresse IP du site web *domain.tld*.

|Type de serveur DNS|Description|Exemple|
|---|---|---|
|Résolveur DNS (DNS resolver ou DNS recursive)|Premier serveur qui reçoit la requête DNS émise par un client (navigateur internet, logiciel de messagerie, etc.). Cette étape est représentée par l'étape **1** du schéma ci-dessus. Ce serveur fait la passerelle entre le client et le reste du réseau DNS. Il interroge les trois autres types de serveur DNS jusqu'à ce qu'il récupère l'adresse IP, demandée par la requête DNS, auprès du serveur DNS de référence. Le client envoie la requête DNS pour connaître l'adresse IP du nom de domaine *domain.tld*. |Le navigateur internet envoie une requête DNS pour connaître l'adresse IP du nom de domaine *domain.tld*. Cela permet de connaître le serveur où est hébergé le site web associé au nom de domaine *domain.tld*.|
|Serveur DNS racine (DNS root)|Contient un annuaire pour tous les TLD (noms de domaine de premier niveau tels que *.com*, *.net*, *.fr*, etc.). Il va indiquer au résolveur DNS l'adresse du serveur DNS TLD correspondant à l'extension présente dans la requête DNS demandée par le client (étapes **2** et **3** du schéma ci-dessus).|Le résolveur DNS transmet la requête DNS qu'il a reçue pour *domain.tld* au serveur DNS racine et reçoit en réponse l'adresse du serveur DNS TLD qui gère l'extension *.tld*.|
|Serveurs DNS d'extensions/noms de domaine de premier niveau (DNS TLD)|Contient un annuaire de noms de domaine pour une extension donnée. Il va indiquer au résolveur DNS l'adresse du serveur DNS de référence correspondant au nom de domaine présent dans la requête DNS demandée par le client (étapes **4** et **5** du schéma ci-dessus).|Le résolveur DNS transmet ensuite la requête DNS qu'il a reçue pour *domain.tld* au serveur DNS TLD qui gère les extensions en *.tld* et reçoit en réponse l'adresse du serveur DNS de référence qui gère la zone DNS du nom de domaine *domain.tld*.|
|Serveurs DNS de référence (DNS Authoritative)|Dernier serveur DNS interrogé par le résolveur DNS (étapes **6** et **7** du schéma ci-dessus). Il contient la zone DNS active pour le nom de domaine présent dans la requête DNS demandée par le client. C'est le contenu de ce type de serveur DNS que nous allons détailler dans la suite de ce guide.|Le résolveur DNS transmet ensuite la requête DNS qu'il a reçue pour *domain.tld* au serveur DNS de référence qui gère la zone DNS du nom de domaine *domain.tld* et reçoit en réponse l'adresse IP (exemple 203.0.113.0) du serveur qui hébèrge le site web du nom de domaine *domain.tld*.|

Dès que le résolveur DNS a récupéré l'adresse IP du serveur recherchée via la requête DNS demandée par le client, il renvoie cette adresse IP au client (étape **8** du schéma ci-dessus).

Le client envoie ensuite une autre requête directement au serveur associé à l'adresse IP récupérée grâce à la résolution DNS (étape **9** du schéma ci-dessus). Cela lui permet de s'y connecter ou d'y récupérer les éléments dont il a besoin pour résoudre cette seconde requête (étape **10** du schéma ci-dessus). Dans notre exemple, le client (navigateur web) interroge le serveur ayant pour adresse IP 203.0.113.0 pour récupérer le contenu à afficher pour le site web *domain.tld*.

Consultez notre guide « [Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit) » si vous avez besoin de réaliser cette action pour un nom de domaine enregistré chez OVHcloud.

### Contenu d'un serveur DNS (Authoritative)

Un **serveur DNS (Authoritative)** contient un annuaire de noms de domaine pouvant avoir des extensions (TLD) différentes.

Pour chaque nom de domaine contenu dans l'annuaire est associé une **zone DNS** qui contient la configuration DNS à appliquer au nom de domaine.

Une zone DNS contient des informations techniques, appelées *enregistrements DNS*. La zone DNS est comme un poste d'aiguillage.

> [!success]
>
> - Pour plus d'informations sur les zones DNS, consultez notre guide « [Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information) ».
> - Consultez ensuite notre guide sur [Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records) pour une meilleure compréhension de l'ensemble.
>

De ce fait, ce sont les **serveurs DNS (Authoritative)** qui doivent être déclarés (auprès du bureau d'enregistrement d'un nom de domaine) pour utiliser la zone DNS qu'ils hébergent. 

![DNS](/pages/assets/schemas/dns/dns-server.png){.thumbnail}

### Fonctionnement d'un serveur DNS (Authoritative) avec un nom de domaine

#### Déclaration des serveurs DNS (Authoritative) auprès du bureau d'enregistrement d'un nom de domaine

Pour que la zone DNS associée à un nom de domaine présent dans l'annuaire d'un serveur DNS soit active, il est nécessaire que ce serveur DNS soit déclaré auprès du bureau d'enregistrement du nom de domaine.

Par précaution, on déclare au minimum 2 **serveurs DNS (Authoritative)** (un serveur DNS primaire et un serveur DNS secondaire) auprès du bureau d'enregistrement d'un nom de domaine. Les deux fonctionnent de manière identique. Toutefois, si l'un des deux répond plus rapidement, il sera interrogé prioritairement par les résolveurs DNS. Si l'un des deux ne répond pas ou plus, l'autre serveur DNS sera là pour répondre à la requête DNS.

Parfois, certains fournisseurs DNS proposent plus de 2 **serveurs DNS (Authoritative)** à déclarer auprès de votre nom de domaine. Dans ce cas, renseignez tous les serveurs DNS proposés par votre fournisseur DNS.

## Aller plus loin

[Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information).

[Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records).

[Modifier les serveurs DNS d'un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit).

[Modifier une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).