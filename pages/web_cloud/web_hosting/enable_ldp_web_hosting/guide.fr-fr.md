---
title: 'Hébergement web - Comment activer et gérer les logs ?'
excerpt: 'Découvrez comment activer et gérer les logs de vos sites web ou vos applications présentes sur votre hébergement web'
updated: 2026-02-02
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

Votre offre [d'hébergement web](/links/web/hosting) génère donc ses propres logs.

Dans certaines situations, vous pouvez être amené à consulter / récupérer les logs  :

- de votre hébergement web ;
- pour l'un des sites web ou l'une des applications présentes sur votre hébergement web.

**Découvrez comment activer, visualiser et gérer les logs de vos sites web ou vos applications présentes sur votre hébergement web.**

> [!warning]
>
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance sur l'interprétation des logs disponibles avec votre hébergement web. Plus d'informations dans la section « [Aller plus loin](#go-further) » de ce tutoriel.

## Prérequis

- Disposer d'une [offre d'hébergement web](/links/web/hosting).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Visualiser les logs en temps réel de votre hébergement web

Pour accéder aux logs en temps réel de votre hébergement web, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, cliquez sur l'onglet `Logs`{.action}.

![Web hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/logs/tab.png){.thumbnail}

C'est dans cette console intégrée que vous trouverez, en temps réel, les logs de votre offre d'hébergemet web.

> [!primary]
>
> Comme précisé ci-dessus, les logs ne sont disponibles ici qu'en temps réel. Cela signifie que ces logs n'apparaîtront que s'ils sont générés au moment où vous vous trouvez sur l'onglet `Logs`{.action}. 
>
> Si vous quittez l'onglet `Logs`{.action} puis revenez dessus ultérieurement, l'historique qui s'affichait auparavant aura disparu.

### Abonner les logs de votre offre d'hébergement web à Logs Data Platform <a name="webhosting-ldp"></a>

[Logs Data Platform](/links/manage-operate/ldp) est une plateforme permettant de gérer vos logs. Elle peut vous être utile si vous disposez d'une très grosse infrastructure ou si vos services génèrent énormément de logs. En effet, cette plateforme est conçue pour faciliter l'aggrégation et la gestion des logs. 

Elle fonctionne en récupérant les logs générés par votre infrastructure / vos sites web ou encore vos applications pour, par exemple :

- les stocker ;
- les afficher dans des tableaux de bord en temps réel ;
- permettre aux utilisateurs d'effectuer des requêtes complexes ;
- les filtrer par date, application, type ou contenu ;

Pour plus de détails sur Logs Data Platform, consultez notre guide d'[introduction à Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN).

Du fait que les offres [d'hébergement web](/links/web/hosting) peuvent être utilisées avec de nombreux services (bases de données, etc.), celles-ci peuvent, en complément des logs en temps réel déjà disponibles, être abonnées par flux de données à Logs Data Platform.

Avec les offres d'hébergement web, vous disposez gratuitement de **1 Go** de rétention de logs. Pour en bénéficier

> [!alert]
>
> En fonction des logs générés par votre hébergement web, les **1 Go** de données peuvent être consommés plus ou moins rapidement.
>
> En effet et en fonction de vos usages, cette consommation de données peut représenter un volume de logs pouvant aller de quelques jours jusqu'à quelques mois voire années.
>
> Si vous souhaitez disposer d'un volume supérieur à **1 Go** pour la rétention de vos logs, vous pourrez souscrire à une offre payante complémentaire.

Pour abonner votre offre d'hébergement web à un flux de données sur Logs Data Platform, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. Sur la page qui s'affiche, cliquez sur l'onglet `Logs`{.action}.
6. Sur la droite de l'encadré où s'affichent vos logs en temps réel, cliquez sur le bouton `S'abonner`{.action}.

![Log Data Platform](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/logs/tab-subscribe.png){.thumbnail}

Dans la nouvelle page qui s'ouvre et si vous disposez de plusieurs solutions Logs Data Platform dans votre [espace client OVHcloud](/links/manager), sélectionnez, dans la liste déroulante située juste en dessous du bouton intitulé `Ajouter un flux de données`, la référence de la Logs Data Platform avec laquelle vous souhaitez vous abonner.

![Log Data Platform](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/logs/data-stream.png){.thumbnail}

Deux cas de figure se présentent alors pour abonner votre offre d'hébergement web.

#### Cas n°1 - S'abonner à un flux déjà existant sur votre solution Logs Data Platform <a name="webhosting-ldp-case1"></a>

Si le flux concerné existe déjà, celui-ci apparaît sous la forme d'une ligne dans le tableau situé en bas de page.
Dans ce cas précis et pour abonner votre offre d'hébergement web à ce flux existant, il vous suffit de cliquer sur le bouton `S'abonner`{.action} situé à droite de la ligne correspondant au flux concerné.

Au bout de quelques secondes et si vous restez sur la même page, un message apparaîtra dans votre espace client pour vous indiquer que l'abonnement a été créé avec succès.

#### Cas n°2 - S'abonner à un nouveau flux de données sur votre solution Logs Data Platform

Si le flux concerné n'existe pas encore, cliquez sur le bouton `Ajouter un flux de données`{.action}.
Vous serez alors redirigé vers une nouvelle page de votre espace client OVHcloud qui vous permettra de créer et d'ajouter un nouveau flux de données sur votre solution Logs Data Platform.

![Log Data Platform](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/logs-data-platform/data-stream/add-data-stream.png){.thumbnail}

Si besoin, consultez nos guides « [Introduction à Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) » (EN) et « [Démarrer rapidement avec Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) » (EN) pour réaliser ces actions.

Une fois les différents formulaires et informations renseignés, cliquez sur le bouton `Sauvegarder`{.action}.

Vous serez ensuite redirigé vers l'onglet `Flux de données` de votre solution Logs Data Platform.

Il ne vous reste plus qu'à abonner votre hébergement web à votre flux nouvellement créé sur votre solution Logs Data Platform.

Pour effectuer cela et, comme expliqué [précédemment](#webhosting-ldp), retournez dans l'onglet `Logs`{.action} de votre offre d'hébergement web pour vous abonner à ce nouveau flux de données, puis suivez cette fois-ci le [Cas n°1](#webhosting-ldp-case1) décrit plus haut.

## Aller plus loin <a name="go-further"></a>

[Introduction à Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN)

[Démarrer rapidement avec Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) (EN)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).