---
title: "Visualiser et gérer tous ses sites web depuis son espace client OVHcloud"
excerpt: "Découvrez comment consulter et gérer l'ensemble de vos sites web depuis votre espace client OVHcloud"
updated: 2025-05-27
---

## Objectif

La vue `Sites internet` permet de centraliser l'affichage de l'ensemble de vos sites web, indépendamment de leur hébergement. Elle facilite le suivi des fonctionnalités activées pour chaque site web et donne un accès rapide aux actions essentielles. Cette interface est particulièrement utile pour les agences ou les professionnels du web qui gèrent un grand nombre de domaines répartis sur plusieurs hébergements.

**Découvrez comment visualiser et gérer tous vos sites web depuis votre espace client.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager).
- Posséder une [offre d'hébergement web](/links/web/hosting).

## En pratique

### Accéder à la vue `Sites internet`

Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}. Dans le menu de gauche, cliquez sur `Sites internet`{.action}. Un tableau s'affiche, regroupant l'ensemble de vos sites web et de leurs principales informations.

![vue_sites_internet](images/website_view_tab.png){.thumbnail}

#### Nom de Domaine

Affiche le nom de domaine principal du site web, tel qu’il est configuré dans l’onglet Multisite de votre hébergement.

Au clic, vous êtes redirigé vers l'onglet `Multisite`{.action} de l'hébergement concerné.

#### Diagnostic

Vous informe si votre nom de domaine pointe correctement vers l'hébergement web associé. Pour chaque nom de domaine, trois résultats de diagnostic sont possibles :

- `A/AAAA` vert : Les enregistrements A et/ou AAAA de votre nom de domaine pointent correctement vers l'adresse IP de votre hébergement web.
- `A/AAAA` jaune : Les enregistrements A et/ou AAAA de votre nom de domaine pointent vers une adresse IP différente de celle de votre hébergement web.
- `A/AAAA` gris : Aucun enregistrement A ou AAAA n'est configuré, votre nom de domaine ne pointe vers aucune adresse IP.

Au clic, vous êtes redirigé vers l'onglet `Multisite`{.action} de l'hébergement concerné.

Pour plus de détails concernant le diagnostic, consultez la section « Diagnostiquer vos noms de domaine » de notre guide « [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».

#### Dossier racine

Indique le répertoire de votre hébergement (par exemple : www, app, public_html, etc.) vers lequel le domaine pointe.

Au clic, vous êtes redirigé vers l'onglet `Multisite`{.action} de l'hébergement concerné.

#### Nom du service

Nom technique du service d’hébergement web sur lequel le site est configuré, sous la forme `abcdv.clusterXX.hosting.ovh.net`.

Au clic, vous êtes redirigé vers l'onglet `Informations générales`{.action} de l'hébergement concerné.

#### Nom d'affichage

Alias personnalisé défini par le client pour mieux identifier son service dans l'espace client.

Au clic, vous êtes redirigé vers l'onglet `Informations générales`{.action} de l'hébergement concerné.

#### Offre

Affiche le type d’offre associée à l’hébergement : Starter, Perso, Pro ou Performance.

Au clic, vous êtes redirigé vers l'onglet `Informations générales`{.action} de l'hébergement concerné.

#### Git

Affiche le statut de l’intégration Git sur le site web :

- Actif : Le dépôt Git est connecté.
- Inactif : Le dépôt Git n'est pas activé.
- En cours : Le dépôt Git est en cours de configuration.
- Erreur : Une erreur est détectée dans la configuration du dépôt Git.

Au clic, vous êtes redirigé vers l'onglet `Multisite`{.action} de l'hébergement concerné.

#### Logs séparés

Indique si un espace de logs est activé sur le domaine sélectionné.

Au clic, vous êtes redirigé vers l'onglet `Multisite`{.action} de l'hébergement concerné.

Consultez notre page « [Suivez et analysez le trafic de vos sites web](/links/web/hosting-traffic-analysis) » pour plus d'informations.

> [!warning]
>
> Les logs séparés ne peuvent pas être activés pour un nom de domaine externe. Cette option est uniquement disponible pour les domaines enregistrés chez OVHcloud.
>

#### CDN

Affiche le statut du CDN (**C**ontent **D**elivery **N**etwork) sur le nom de domaine :

- Actif : Le CDN est en fonctionnement.
- Inactif : Le CDN est désactivé.
- N/A : Non applicable (offre non compatible).

Au clic, vous êtes redirigé vers l'onglet `Multisite`{.action} de l'hébergement concerné.

Le CDN permet de mettre en cache des éléments statiques de votre site web, comme des images. Consultez notre page « [Shared CDN](/links/web/hosting-options-cdn) » pour plus d'informations.

#### SSL

Indique si le SSL est activé ou non sur le nom de domaine concerné.

Au clic, vous êtes redirigé vers l'onglet `Multisite`{.action} de l'hébergement concerné.

Le SSL vous permet de bénéficier d'une connexion sécurisée (**https://**) sur le nom de domaine sélectionné. Consultez notre page « [Sécurisez efficacement votre site web OVHcloud avec un certificat SSL premium](/links/web/hosting-options-ssl) » pour plus d'informations.

#### Firewall

Indique si le pare-feu applicatif est activé ou non sur le domaine.

Au clic, vous êtes redirigé vers l'onglet `Multisite`{.action} de l'hébergement concerné.

Consultez notre page « [Les options indispensables pour votre hébergement web](/links/web/hosting-options) » pour plus d'informations.

#### Boost

Indique si l'option boost est activée ou non sur votre hébergement web. L'option Boost permet d'augmenter temporairement les ressources CPU et RAM de votre hébergement web.

Au clic, vous êtes redirigé vers l'onglet `Booster mon offre`{.action} de l'hébergement concerné.

Pour plus de détails concernant l'option Boost, consultez la section « Booster temporairement votre hébergement Performance » de notre guide « [Hébergement web - Comment faire évoluer son offre](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer) ».

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).