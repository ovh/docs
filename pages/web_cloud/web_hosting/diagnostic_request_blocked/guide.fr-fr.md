---
title: "Que faire si la page « Your request has been blocked » s’affiche ?"
excerpt: "Découvrez comment agir si votre site web affiche une page « Your request has been blocked »"
updated: 2025-07-16
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

L'infrastructure mutualisée où se trouvent les hébergements web OVHcloud dispose de plusieurs systèmes de sécurité.
Si votre site web affiche une page « Your request has been blocked », cela signifie que l'une des requêtes que vous tentez d'exécuter vers votre site web a été bloquée par nos systèmes de sécurité.

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

**Découvrez comment agir si votre site web affiche une page « Your request has been blocked ».**

## Prérequis

- Disposer d'une [offre d'hébergement web](/links/web/hosting) OVHcloud.
- Disposer des [identifiants de connexion](/pages/web_cloud/web_hosting/ftp_connection) à l'espace de stockage FTP de votre hébergement web.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

La page « Your request has been blocked » peut s'afficher pour diverses raisons (liste non exhaustive) :

- La requête est effectuée depuis un navigateur Internet (Firefox, Chrome, Safari, Edge, etc.) non mis à jour.
- Un très grand nombre de requêtes, similaires ou non, sont effectuées dans un délai extrêmement court.
- La requête tente d'exécuter des actions non autorisées sur l'infrastructure mutualisée où se trouve votre hébergement web.

### 1 - Vérifiez que votre navigateur Internet est à jour

Rendez-vous dans les paramètres de votre navigateur Internet et vérifiez si une mise à jour est disponible.

/// details | Cliquez ici pour obtenir plus d'informations concernant la mise à jour de votre navigateur Internet

Vous trouverez ci-dessous les procédures de mise à jour des principaux navigateurs Internet (documentations fournies par leurs éditeurs) :

- [Firefox](https://support.mozilla.org/fr/kb/mettre-jour-firefox-derniere-version).
- [Chrome](https://support.google.com/chrome/answer/95414?hl=fr&co=GENIE.Platform%3DDesktop&oco=0).
- [Safari](https://support.apple.com/fr-fr/102665).
- [Edge](https://support.microsoft.com/fr-fr/topic/param%C3%A8tres-de-mise-%C3%A0-jour-de-microsoft-edge-af8aaca2-1b69-4870-94fe-18822dbb7ef1).

Si votre navigateur Internet n'est pas présent dans la liste ci-dessus, consultez sa documentation en ligne ou contactez le support de son éditeur.

///

Dès lors que votre navigateur Internet est à jour, tentez à nouveau d'accéder à votre site web. Si la situation persiste, poursuivez la lecture de ce guide.

### 2 - Récupérez les informations présentes sur la page « Your request has been blocked » et contactez le support

Le système de sécurité qui bloque vos requêtes se trouve en amont de votre hébergement web. Par conséquent, vous n'aurez pas accès aux logs de ce système de sécurité depuis votre espace client OVHcloud.

#### 2.1 - Récupérez les informations présentes sur la page « Your request has been blocked »

Dans un premier temps, récupérez les trois informations ci-dessous qui s'affichent sur la page « Your request has been blocked » :

- `IP address` (par exemple : 203.0.113.0).
- `Date` (par exemple : 2025-07-01T16:30:45:150Z).
- `Request ID` (par exemple : AbCdEf-your-request-ID-GhIjKlM).

#### 2.2 - Contactez le support

Une fois ces données recueillies, créez un [ticket d'assistance](https://help.ovhcloud.com/csm?id=csm_get_help) depuis le centre d'aide OVHcloud, en y précisant :

- Le message rencontré sur la page (« Your request has been blocked »).
- Les trois éléments récupérés précédemment (`IP address`, `Date` et `Request ID`).
- L’URL à partir de laquelle la page s’affiche (par exemple : `https://www.domain.tld/index.php`).
- Le navigateur Internet utilisé.

Le support reviendra vers vous dans les plus brefs délais pour vous indiquer l'origine de ce blocage.

## Aller plus loin

[Cas d'usage - Conseils suite au piratage de votre site Web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).