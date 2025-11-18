---
title: "Que faire si la page « Your IP has been banned » s'affiche ?"
excerpt: "Découvrez comment débloquer votre adresse IP si votre site web affiche une page « Your IP has been banned »"
updated: 2025-07-11
---

## Objectif

L'infrastructure mutualisée où se trouvent les hébergements web OVHcloud dispose de plusieurs systèmes de sécurité.
Si votre site web affiche une page « Your IP has been banned », cela signifie que l'adresse IP depuis laquelle vous tentez d'accéder à votre site web a été temporairement bloquée par nos systèmes de sécurité.

![your-ip-has-been-banned](/pages/assets/screens/other/browsers/errors/your-ip-has-been-banned.png){.thumbnail}

**Découvrez comment débloquer votre adresse IP si votre site web affiche une page « Your IP has been banned ».**

## Prérequis

- Disposer d'une [offre d'hébergement web](/links/web/hosting) OVHcloud.
- Disposer des [identifiants de connexion](/pages/web_cloud/web_hosting/ftp_connection) à l'espace de stockage FTP de votre hébergement web.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

La page « Your IP has been banned » peut s'afficher pour diverses raisons (liste non exhaustive) :

- Un très grand nombre de requêtes, similaires ou non, sont effectuées dans un délai extrêmement court depuis la même adresse IP.
- Les requêtes effectuées depuis l'adresse IP en question sont suspectes.

### 1 - Récupérez les informations présentes sur la page « Your IP has been banned »

Dans un premier temps, récupérez les trois informations ci-dessous qui s'affichent sur la page « Your IP has been banned » :

- `IP address` (par exemple : 203.0.113.0).
- `Date` (par exemple : 2025-07-01T16:30:45:150Z).
- `Request ID` (par exemple : AbCdEf-your-request-ID-GhIjKlM).

### 2 - Contactez le support

Une fois ces données recueillies, créez un [ticket d'assistance](https://help.ovhcloud.com/csm?id=csm_get_help) depuis le centre d'aide OVHcloud, en y précisant :

- Le message rencontré sur la page (« Your IP has been banned »).
- Les trois éléments récupérés précédemment (`IP address`, `Date` et `Request ID`).
- L’URL à partir de laquelle la page s’affiche (par exemple : `https://www.domain.tld/index.php`).
- Le navigateur Internet utilisé.

Le support reviendra vers vous dans les plus brefs délais pour vous indiquer l'origine de ce blocage.

## Aller plus loin

[Cas d'usage - Conseils suite au piratage de votre site Web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).