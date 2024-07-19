---
title: "Récupérer la sauvegarde d'une base de données supprimée"
excerpt: "Découvrez comment retrouver la sauvegarde d'une base de données lorsque celle-ci a été supprimée depuis votre espace client OVHcloud"
updated: 2024-07-19
---

## Objectif

La plupart de nos offres d'[hébergement web](/links/web/hosting) comprennent des bases de données. Si, accidentellement, vous supprimez une base de données associée à votre hébergement web, vous pouvez tenter d'en récupérer la sauvegarde via nos API.

**Découvrez comment retrouver, via les API OVHcloud, la sauvegarde d'une base de données lorsque celle-ci a été supprimée depuis votre espace client OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Toutefois, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance complémentaire sur les API. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web OVHcloud](/links/web/hosting) active comprenant une (ou plusieurs) base(s) de données mutualisée(s) OVHcloud associée(s).
- La suppresion de la base de donnée doit dater de moins de 30 jours.

## En pratique

Les API OVHcloud sont mises à disposition pour permettre aux développeurs ou aux intégrateurs d'associer, par exemple, des fonctionnalités présentes ou non dans l'espace client OVHcloud directement dans leurs applications ou solutions.

> [!warning]
>
> Les sauvegardes proposées par OVHcloud pour les hébergements mutualisés et leurs bases de données associées sont non-contractuelles. Nous vous les proposons en complément de vos services afin de vous aider dans les situations urgentes. Nous vous recommandons d'effectuer régulièrement vos propres sauvegardes de sécurité pour pallier aux éventuelles pertes de données.
>
> De plus, lorsqu'une base de données est supprimée par son utilisateur ou son administrateur, OVHcloud ne pourra pas garantir la récupération de la sauvegarde de celle-ci pour les raisons citées ci-dessus.
>

### Étape 1 - Récupérer le nom de l'hébergement web auquel était associée la base de données supprimée

Pour récupérer le nom de votre hébergement web, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. En haut à gauche de la page qui s'affiche, retrouvez le nom de votre hébergement web à droite de la mention `Hébergements /`{.action}.

![API](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-webhosting-name.png){.thumbnail}

### Étape 2 - Se connecter aux API OVHcloud et leur permettre l'accès à vos services

Pour cela, effectuez les actions suivantes : 

- Rendez-vous sur notre site [API OVHcloud](/links/api) (vérifiez bien que vous êtes sur `https://eu.api.ovh.com` si vos services sont hébergés en Europe et sur `https://ca.api.ovh.com` s'ils sont hébergés en dehors de l'Europe).
- Sur la page qui s'affiche, cliquez au centre sur `Explore the OVHcloud API`{.action}.
- Sur la nouvelle page qui apparaît et dans la partie gauche de la page, positionnez-vous sur le formulaire situé à droite du formulaire `v1`{.action}, puis sélectionnez/saisissez le choix `/hosting/web`.
- Parmi la liste d'API qui apparaît en dessous dans la colonne de gauche, recherchez et cliquez sur l'API suivante :

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-research.png){.thumbnail}

Vous pouvez aussi cliquez directement sur l'API pour y accéder :

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump
>

- Sur la partie droite de la page s'affiche alors l'API avec ses différents formulaires à remplir.
- Cliquez sur le bouton situé en haut à droite intitulé `Authenticate`{.action}, puis sur le bouton `Login with OVHcloud SSO`{.action}.
- L'interface de connexion à votre [espace client OVHcloud](/links/manager) s'ouvre.
- Connectez-vous avec votre identifiant client, puis cliquez sur `Authorize`{.action} pour utiliser les API OVHcloud avec les services présents dans votre espace client.
- Vous êtes ensuite automatiquement redirigé vers la page précédente de l'API **GET /hosting/web/{serviceName}/dump** tout en étant connecté à votre espace client OVHcloud.

### Étape 3 - Vérifier la disponibilité des sauvegardes et récupérer l'ID de la dernière sauvegarde

Pour cela, remplissez les différents formulaires comme détaillé ci-dessous :

- Pour la section intitulée `PATH PARAMETERS` :
    - `serviceName` : Renseignez le nom de votre hébergement web précédemment récupéré lors de l'étape 1 de ce guide.

- Pour la section intitulée `QUERY-STRING PARAMETERS` :
    - `creationDate.from` : Laissez le formulaire vide.
    - `creationDate.to` : Laissez le formulaire vide.
    - `databaseName` : Saisissez le nom de la base de donnée supprimée accidentellement. (exemple : **deletedDatabase.mysql.db**).
    - `deletionDate.from` : Laissez le formulaire vide.
    - `deletionDate.to` : Laissez le formulaire vide.
    - `orphan` : Saisissez en minuscule la valeur : `true`.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump.png){.thumbnail}

Une fois les différents formulaires remplis, cliquez sur le bouton bleu `Try`{.action} situé en bas à droite des deux sections préalablement remplies.

Si tout a été renseigné correctement et que des sauvegardes sont disponibles pour la base de données supprimée, une liste de numéros d'identifiants de sauvegarde apparaît dans la fenêtre `RESPONSE`{.action} lorsque vous descendez sur la page en dessous du bouton `Try`{.action}.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-response.png){.thumbnail}

Chacun de ces numéros correspond à un identifiant de sauvegarde disponible (ID). Ces numéros d'identifiants de sauvegarde apparaissent du plus récent au plus ancien. **Copiez l'ID le plus haut de la liste** (sans la `,` à la fin) si vous souhaitez récupérer (à l'étape 4 de ce guide) la toute dernière sauvegarde de votre base de données supprimée.

Si aucun ID n'apparait dans la fenêtre, vérifiez que vous êtes bien connecté avec le bon identifiant client OVHcloud (si vous en avez plusieurs). Vérifiez également les informations saisies dans les sections **PATH PARAMETERS** et **QUERY-STRING PARAMETERS**. Relancez ensuite l'opération.

Si malgré tout vous n'avez toujours pas d'ID qui apparaît, c'est qu'il n'y a pas ou plus de sauvegardes disponibles pour la base de données supprimée sur notre infrastructure.

### Étape 4 - Récupérer la dernière sauvegarde

Grâce au numéro d'identifiant de sauvegarde récupéré lors de l'étape 3, vous pourrez télécharger, à l'aide d'un lien généré par API, la dernière sauvegarde de votre base de données supprimée.

Pour cela, restez sur notre site [API OVHcloud](/links/api) et effectuez les actions suivantes :

- Dans la partie gauche de la page, positionnez-vous sur le formulaire situé à droite du formulaire `v1`{.action}, puis sélectionnez/saisissez le choix `/hosting/web`{.action}.
- Parmi la liste d'API qui apparaît en dessous dans la colonne de gauche, recherchez et cliquez sur l'API suivante :

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id-research.png){.thumbnail}

Vous pouvez aussi cliquez directement sur l'API pour y accéder :

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump/{id}
>

- Sur la partie droite de la page s'affiche alors l'API avec ses différents formulaires à remplir.

Remplissez les différents formulaires de la partie `PATH PARAMETERS` ainsi :

- `id` : Copiez le numéro d'identifiant de sauvegarde récupéré lors de l'étape 3. Si vous n'étiez pas déconnecté de notre site API OVHcloud, l'interface peut directement vous proposer les différents numéros d'ID de sauvegarde disponibles. Si tel est le cas, vous pouvez directement cliquer sur le premier numéro d'ID de la liste présente juste en dessous du formulaire **id**.
- `serviceName` : Renseignez le nom de votre hébergement web précédemment récupéré lors de l'étape 1 de ce guide.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id.png){.thumbnail}

Une fois les différents formulaires remplis, cliquez sur le bouton bleu `Try`{.action} situé en bas à droite de la section préalablement remplie.

Si tout a été renseigné correctement, le résultat suivant apparaît dans la fenêtre `RESPONSE`{.action} lorsque vous descendez sur la page en dessous du bouton `Try`{.action} :

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id-response.png){.thumbnail}

```bash
{
  "taskId": null,
  "orphan": true,
  "status": "created",
  "deletionDate": "2024-07-18T20:02:00+02:00",
  "databaseName": "deleteDatabase.mysql.db",
  "url": "Find here the complete URL to download the deleted database backup",
  "type": "now",
  "creationDate": "2024-06-17T22:17:42+02:00",
  "id": 22XXXXX888
}
```

> [!warning]
>
> Les lignes présentes dans le résultat ci-dessus n'apparaissent pas toujours dans cet ordre.
>

Dans ce résultat, copiez l'intégralité de l'URL en « HTTPS » **sans les guillements** présente à droite de la mention `"url":`, puis collez-la dans la barre de recherche de votre navigateur internet pour initier le téléchargement de la sauvegarde.

### Étape 5 - Créer une nouvelle base de données, importer le fichier de sauvegarde et rétablir la liaison entre votre site web et la nouvelle base de données

Une fois la sauvegarde de votre base de données récupérée, vous devrez créer une nouvelle base de données. Pour cela, consultez notre guide « [Créer une base de données sur son hébergement web](/pages/web_cloud/web_hosting/sql_create_database) ».

Lorsque cette nouvelle base de données sera créée, importez la sauvegarde à l'aide de notre guide « [Importer une sauvegarde dans la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_importing_mysql_database) ».

Pour terminer, liez votre base de données OVHcloud avec le fichier de configuration de votre site web présent dans l'[espace de stockage FTP de votre hébergement OVHcloud](/pages/web_cloud/web_hosting/ftp_connection).
Pour cela, remplacez les informations de connexion de la base de données supprimée accidentellement par celles de votre nouvelle base de données OVHcloud. Ces informations se trouvent dans le fichier de « configuration/connexion à votre base de données » de votre site web.

> [!success]
>
> Pour lier votre nouvelle base de données si vous utilisez un Content Management System (CMS) comme WordPress, Joomla!, Drupal ou PrestaShop, retrouvez les informations sur leurs fichiers de configuration depuis **l'étape 2** du guide « [Modifier le mot de passe d'une base de données](/pages/web_cloud/web_hosting/sql_change_password) ».
>

## Aller plus loin <a name="go-further"></a>

[Créer une base de données sur son hébergement web](/pages/web_cloud/web_hosting/sql_create_database).

[Importer une sauvegarde dans la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Modifier le mot de passe d'une base de données](/pages/web_cloud/web_hosting/sql_change_password).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).