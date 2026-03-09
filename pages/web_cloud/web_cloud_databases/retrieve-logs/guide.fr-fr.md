---
title: 'Web Cloud Databases - Comment gérer les logs ?'
excerpt: 'Découvrez comment gérer les logs de vos bases de données hébergées sur votre serveur Web Cloud Databases'
updated: 2025-02-20
---

## Objectif

Un log correspond à un événement survenu sur un système informatique (serveur, ordinateur, application, site web, base de données, réseau informatique, etc.).
Par exemple, un log peut enregistrer et contenir un ou plusieurs des éléments suivants : 

- L'horodatage (date, heure, minute, seconde, etc.) de l'événement.
- La nature de l'événement (connexion, déconnexion, erreur, download, upload, alerte, etc.).
- Des informations complémentaires sur l'événement (page ou fichier consulté, application lancée, serveur distant appelé, nom d'un fichier chargé ou téléchargé, etc.)
- L'origine de l'événement (identifiant de l'utilisateur, adresse IP source, programme source, etc.).
- L'état du système où se déroule l'événement (ressources disponible, mémoire restante, utilisation du CPU, etc.).

La plupart du temps, les logs sont générés directement par les systèmes informatiques où les événements se réalisent.
Ils sont stockés et historisés dans des fichiers textes également appelés fichiers de logs.

De ce fait, les fichiers de logs permettent d'effectuer les actions suivantes :

- Analyser le comportement du système informatique générant les logs.
- Identifier les erreurs survenues sur le système informatique.
- Résoudre les erreurs rencontrées sur le système informatique.
- Optimiser et améliorer les performances du système informatique.

Votre offre [Web Cloud Databases](/links/web/databases) génère donc ses propres logs.

Dans certaines situations, vous pouvez être amené à consulter / récupérer les logs  :

- de votre serveur Web Cloud Databases ;
- pour l'une des bases de données hébergée sur votre serveur Web Cloud Databases.

**Découvrez comment visualiser et gérer les logs de votre offre Web Cloud Databases.**

## Prérequis

- Disposer d'une [instance Web Cloud Databases](/links/web/databases).
<!-- CP-NAV-START:web-cloud-databases -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Cloud Databases](/links/control-panel/web-cloud-databases)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Sélectionnez votre service de base de données

---
<!-- CP-NAV-END:web-cloud-databases -->

## En pratique

> [!warning]
>
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance sur l'interprétation des logs disponibles avec votre solution Web Cloud Databases. Plus d'informations dans la section « [Aller plus loin](#go-further) » de ce tutoriel.
>

### Visualiser les logs en temps réel de votre Web Cloud Databases

Pour accéder aux logs en temps réel de votre Web Cloud Databases, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu `Web Cloud Databases`{.action}.
4. Sélectionnez l'instance Web Cloud Databases concernée.
5. Sur la page qui s'affiche, cliquez sur l'onglet `Logs`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab.png){.thumbnail}

C'est dans cette console intégrée que vous trouverez, en temps réel, les logs de votre solution Web Cloud Databases.

> [!primary]
>
> Comme précisé ci-dessus, les logs ne sont disponibles ici qu'en temps réel. Cela signifie que ces logs n'apparaîtront que s'ils sont générés au moment où vous vous trouvez sur l'onglet `Logs`{.action}. 
>
> Si vous quittez l'onglet `Logs`{.action} puis revenez dessus ultérieurement, l'historique qui s'affichait auparavant aura disparu.
>

### Récupérer l'historique des logs de votre solution Web Cloud Databases

Pour récupérer l'historique des logs de votre solution Web Cloud Databases, vous devrez vous y connecter en SFTP.

> [!warning]
>
> Avant de vous connecter, vérifiez que l'adresse IP publique du poste que vous utilisez est bien autorisée sur votre serveur Web Cloud Databases, avec l'option `SFTP` cochée.
>
> Pour vérifier cela, récupérez l'adresse IP publique de votre point d'accès à Internet puis consultez la section **Autoriser une adresse IP** de [ce guide](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

Pour retrouver les informations de connexion en SFTP à votre solution Web Cloud Databases, réalisez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu `Web Cloud Databases`{.action}.
4. Sélectionnez la solution Web Cloud Databases concernée.
5. Sur la page qui s'affiche, restez sur l'onglet `Informations générales`{.action} puis positionnez-vous au niveau de l'encadré intitulé `Informations de connexion`{.action}.
6. En dessous de la mention `SFTP`{.action}, vous retrouverez l'ensemble des informations nécessaires pour vous connecter en SFTP.

> [!primary]
>
> Si vous ne connaissez pas le `Mot de passe du serveur`, cliquez sur le bouton `...`{.action} à droite pour le modifier.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/sftp-login.png){.thumbnail}

Une fois les identifiants de connexion SFTP récupérés, connectez-vous par l'intermédiaire d'un client FTP (FileZilla, Cyberduck, WinSCP, etc.).

Pour FileZilla, rendez-vous en haut à gauche dans le menu `Fichier`{.action}, puis cliquez sur `Gestionnaire de sites`{.action}.

Cliquez sur `Nouveau site`{.action} puis saisissez les paramètres relevés précédemment.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/filezilla/site-manager.png){.thumbnail}

Le fichier de logs, nommé `stdout.log`, se trouve à la racine.

Vous pourrez le télécharger sur votre poste pour le consulter.

> [!primary]
>
> Un fichier supplémentaire de logs intitulé `slow-query.log` peut apparaître à la racine SFTP de votre serveur Web Cloud Databases.
> Ce fichier contient l'historique des requêtes lentes qui se sont exécutées sur votre serveur Web Cloud Databases. 
> 
> Par défaut, la valeur est définie à 1 seconde sur les solutions Web Cloud Databases dans la variable **long_query_time**.
> 
> Grâce à ce fichier, vous pourrez optimiser vos scripts et le contenu de votre (vos) base(s) de données afin d'améliorer les performances de vos différents services associés.
>

### Abonner les logs de votre solution Web Cloud Databases à Logs Data Platform <a name="wcdb-ldp"></a>

[Logs Data Platform](/links/manage-operate/ldp) est une plateforme permettant de gérer vos logs. Elle peut vous être utile si vous disposez d'une très grosse infrastructure ou si vos services génèrent énormément de logs. En effet, cette plateforme est conçue pour faciliter l'aggrégation et la gestion des logs. 

Elle fonctionne en récupérant les logs générés par votre infrastructure / vos sites web ou encore vos applications pour, par exemple :

- les stocker ;
- les afficher dans des tableaux de bord en temps réel ;
- permettre aux utilisateurs d'effectuer des requêtes complexes ;
- les filtrer par date, application, type ou contenu ;

Pour plus de détails sur Logs Data Platform, consultez notre guide d'[introduction à Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN).

Du fait que les solutions [Web Cloud Databases](/links/web/databases) peuvent être utilisées avec de nombreux services (hébergements mutualisés, VPS, serveurs dédiés, etc.), celles-ci peuvent, en complément des logs en temps réel déjà disponibles, être abonnées par flux de données à Logs Data Platform.

Pour abonner votre solution Web Cloud Databases à un flux de données sur Logs Data Platform, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu `Web Cloud Databases`{.action}.
4. Sélectionnez l'instance Web Cloud Databases concernée.
5. Sur la page qui s'affiche, cliquez sur l'onglet `Logs`{.action}.
6. Sur la droite de l'encadré où s'affichent vos logs en temps réel, cliquez sur le bouton `S'abonner`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}

Dans la nouvelle page qui s'ouvre et si vous disposez de plusieurs solutions Logs Data Platform dans votre [espace client OVHcloud](/links/manager), sélectionnez, dans la liste déroulante située juste en dessous du bouton intitulé `Ajouter un flux de données`, la référence de la Logs Data Platform avec laquelle vous souhaitez vous abonner.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}

Deux cas de figure se présentent alors pour abonner votre solution Web Cloud Databases.

#### Cas n°1 - S'abonner à un flux déjà existant sur votre solution Logs Data Platform <a name="wcdb-ldp-case1"></a>

Si le flux concerné existe déjà, celui-ci apparaît sous la forme d'une ligne dans le tableau situé en bas de page.
Dans ce cas précis et pour abonner votre solution Web Cloud Databases à ce flux existant, il vous suffit de cliquer sur le bouton `S'abonner`{.action} situé à droite de la ligne correspondant au flux concerné.

Au bout de quelques secondes et si vous restez sur la même page, un message apparaîtra dans votre espace client pour vous indiquer que l'abonnement a été créé avec succès.

#### Cas n°2 - S'abonner à un nouveau flux de données sur votre solution Logs Data Platform

Si le flux concerné n'existe pas encore, cliquez sur le bouton `Ajouter un flux de données`{.action}.
Vous serez alors redirigé vers une nouvelle page de votre espace client OVHcloud qui vous permettra de créer et d'ajouter un nouveau flux de données sur votre solution Logs Data Platform.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/logs-data-platform/data-stream/add-data-stream.png){.thumbnail}

Si besoin, consultez nos guides « [Introduction à Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) » (EN) et « [Démarrer rapidement avec Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) » (EN) pour réaliser ces actions.

Une fois les différents formulaires et informations renseignés, cliquez sur le bouton `Sauvegarder`{.action}.

Vous serez ensuite redirigé vers l'onglet `Flux de données` de votre solution Logs Data Platform.

Il ne vous reste plus qu'à abonner votre solution Web Cloud Databases à votre flux nouvellement créé sur votre solution Logs Data Platform.

Pour effectuer cela et, comme expliqué [précédemment](#wcdb-ldp), retournez dans l'onglet `Logs`{.action} de votre solution Web Cloud Databases pour vous abonner à ce nouveau flux de données, puis suivez cette fois-ci le [Cas n°1](#wcdb-ldp-case1) décrit plus haut.

## Aller plus loin <a name="go-further"></a>

[Premiers pas avec votre Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

[Introduction à Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN)

[Démarrer rapidement avec Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) (EN)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).