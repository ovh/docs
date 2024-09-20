---
title: "Hébergement web - Consulter les statistiques et logs d'un site web"
excerpt: "Découvrez comment consulter les statistiques et les logs de votre site web grâce à votre offre d'hébergement web"
updated: 2024-02-23
---

## Objectif

L'accès aux logs et aux statistiques de votre site web est compris dans votre offre d'hébergement web, accessible via votre espace client OVHcloud.

**Découvrez comment consulter les statistiques et les logs de votre site web grâce à votre offre d'hébergement web.**

## Prérequis

- Disposer d'une offre d'[hébergement web](/links/web/hosting){.external} compatible.
- Être connecté à votre [espace client OVHcloud](/links/manager){.external}.

## En pratique

Pour accéder aux différentes données statistiques et logs de votre hébergement web, effectuez les actions suivantes : 

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, cliquez sur l'onglet `Statistiques et logs`{.action}.

L'écran qui s’affiche est composé de 4 sections :

- [Statistiques de visite](#website-stats) : présente de nombreuses statistiques concernant votre hébergement web.
- [Logs du site web](#website-logs) : affiche les logs bruts de votre hébergement web.
- [Statistiques de l'infrastructure](#infra-stats) : présente des statistiques graphiques (requêtes HTTP et SQL, commandes FTP, utilisation CPU, connexions sortantes, etc.)
- [Administration des utilisateurs](#admin-user) : affiche les utilisateurs autorisés à accéder aux statistiques

![statistics and logs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/tab.png){.thumbnail}

### Statistiques de visite <a name="website-stats"></a>

Pour mieux suivre et piloter le trafic de vos sites web, vous disposez de **OVHcloud Web Statistics**, un outil de statistiques de visites et de mesure d’audience de vos sites web hébergés sur votre offre d'hébergement web.

![ows dashboard](/pages/assets/screens/other/web-tools/logs/ows-presentation.gif){.thumbnail}

Le tableau de bord d'**OVHcloud Web Statistics** présente 7 sections :

- **Dashboard** : visualisation du trafic sur les sites de votre hébergement web.
- **Browsers** : classement des navigateurs internet les plus utilisés pour consulter vos sites.
- **Geolocalization** : proportion de visiteurs en fonction de leur localisation.
- **Requests** : classement des pages les plus consultées sur vos sites.
- **Robots** : visualisation des robots qui passent sur vos sites.
- **Status** : statistiques des échecs et réussites rencontrés en fonction des codes HTTP retournés.
- **FAQ** : rubrique dédiée aux questions les plus courantes. Explique également les termes technique que vous pouvez rencontrer dans l'outil.

Le champ `Period selection` en haut à droite vous permet de sélectionner une période précise.

### Logs du site web <a name="website-logs"></a>

> [primary]
>
> Nous ne serons pas en mesure de vous accompagner sur l'interprétation des logs de votre hébergement web car cela relève uniquement du développement web et non de l'hébergement web.
>
> N'hésitez pas à contacter un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés.
>

Vous pouvez visualiser les logs bruts de votre site web avec un différé d'environ 5 minutes.

![osl statistiques dashboard](/pages/assets/screens/other/web-tools/logs/osl-statistics-board.png){.thumbnail}

Différents type de logs sont à votre disposition :

- **Logs Web** : contiennent les différents logs de consultation de votre site web, ainsi que les différentes actions réalisées à partir de votre site web. Cela vous permet par exemple de repérer des tentatives d'actions malveillantes.
- **Logs FTP** : les différentes connexions / commandes en FTP seront enregistrées et conservées dans ces logs.
- **Logs erreur** : retrouvez ici les différentes erreurs générées par votre site web.
- **Logs CGI** : les différents appels aux scripts cgi.bin qui ont été réalisés sont enregistrés dans ces logs.
- **Logs out** : contiennent l'historique des différentes requêtes externes (connexions sortantes TCP) réalisées depuis votre hébergements web vers des infrastructures distantes.
- **Logs SSH** : ces logs indiquent les différentes connexions / commandes réalisées avec le protocole SSH.
- **Logs CRON** : retrouvez ici les résultats de l'exécution de vos tâches planifiées [(CRON)](/pages/web_cloud/web_hosting/cron_tasks) sur votre hébergement web.

### Statistiques de l'infrastructure <a name="infra-stats"></a>

Retrouvez dans cette section l'activité de l'infrastructure de votre hébergement web, afin de visualiser la consommation des ressources mises à votre disposition.

![infrastructure statistics](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/infrastructure-statistics-graph.png){.thumbnail}

Il est possible d'afficher différent types de graphiques, depuis le menu déroulant en haut à gauche :

- **Commandes FTP** : indique les commandes principales (upload, download, login, delete) réalisées en utilisant le protocole FTP sur votre hébergement web.
- **Requêtes HTTP** : indique le nombre et le code retour des requêtes HTTP exécutées sur votre hébergement web. Le tout en distinguant les différents codes HTTP (2xx/3xx, 4xx et 5xx). Si besoin, vous pouvez retrouver la liste des codes HTTP et leur signification en effectuant directement une recherche via un moteur de recherche (Google, Yahoo!, bing, etc.).
- **Connexions sortantes** : requêtes émises de votre site web vers un site web extérieur.
- **Utilisation du CPU** : niveau de consommation du processeur sur votre instance d'hébergement web.
- **Dépassement du plafond de ressources** : indique les moments où votre hébergement web dépasse son quota de ressources.
- **Requêtes SQL** : quantité de requêtes vers les bases de données de votre hébergement web.
- **Temps de réponse SQL** : temps de réponse des requêtes émises vers les bases de données de votre hébergement web.

### Administration des utilisateurs <a name="admin-user"></a>

La création d'un utilisateur permettra à une personne d'accéder aux statistiques de votre hébergement web sans avoir accès à votre espace client OVHcloud.

Dans la section `Administration des utilisateurs`{.action}, cliquez sur `Créer un nouvel utilisateur`{.action} puis suivez les intructions pour finaliser la création d'un nouvel utilisateur.

![create a new user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/create-a-new-user.png){.thumbnail}

Pour accéder aux statistiques de votre site web avec un utilisateur que vous avez créé, vous devez saisir l'adresse suivante en remplaçant `000` par le numéro du cluster de votre hébergement web et `domain.tld` par le nom de domaine de votre site web (sans les `www`) :

```bash
https://logs.cluster000.hosting.ovh.net/domain.tld/
```

Vous pouvez également récupérer le lien d'accès aux statistiques / logs directement depuis votre espace client :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, cliquez sur l'onglet `Statistiques et logs`{.action}.
6. Rendez-vous dans la section `Statistiques de visite`{.action}.
7. Cliquez sur le bouton `Voir les statistiques`{.action}.

![website visit statistics](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-statistics.png){.thumbnail}

Sur la nouvelle page qui apparaît, récupérez l'URL située dans la barre d'adresse de votre navigateur internet.

> [!warning]
>
> Si vous avez activé les logs séparés sur une [entrée multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite), les utilisateurs créés ici ne peuvent pas accéder aux statistiques de cette entrée multisite spécifique.
>

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).