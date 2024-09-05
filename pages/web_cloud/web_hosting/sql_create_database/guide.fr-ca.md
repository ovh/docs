---
title: "Créer une base de données sur son hébergement web"
excerpt: "Découvrez comment créer une base de données sur votre hébergement web OVHcloud"
updated: 2024-09-04
---

## Objectif

Une base de données (BDD) est utilisée pour stocker des éléments dynamiques (données de connexion, données utilisateurs, données d'affichage, données nécessaires au bon fonctionnement de votre site web, etc.). Ces bases de données sont utilisées dans la majorité des systèmes de gestion de contenu (CMS) modernes, tels que *WordPress*, *Joomla!*, *Drupal* ou *PrestaShop*.

**Découvrez comment créer une base de données sur votre hébergement web OVHcloud**

## Prérequis

- Disposer d'une offre d'[hébergement web OVHcloud](/links/web/hosting) incluant au moins une base de données.
- Disposer d’une base de données disponible en « création » parmi celles incluses dans votre offre d’hébergement web. Si besoin, vous pouvez ajouter des bases de données [Start SQL](/links/web/hosting-options-startsql) à votre hébergement web.
- Disposer d'un accès à l'[espace client OVHcloud](/links/manager) avec les [autorisations nécessaires](/pages/account_and_service_management/account_information/managing_contacts) pour gérer votre hébergement web.

## En pratique

### Étape 1 - Accéder à l'onglet de gestion des bases de données d'un hébergement web

Connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} dans la colonne de gauche, choisissez l'offre d'hébergement sur laquelle vous souhaitez créer une base de données puis cliquez sur l'onglet `Bases de données`{.action}.

Le tableau de cette section contient toutes les bases de données créées avec votre hébergement web.

![databasecreation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}

Dans le tableau, les bases de données peuvent disposer de plusieurs statuts différents :

- **Incluse** : indique que la base de données est comprise dans votre offre d’hébergement web. Elle n’engendre pas de surcoût supplémentaire.</br></br>
- **Optionnelle** : indique que la base de données a été souscrite en complément des bases de données incluses avec votre hébergement web. Vous payez un complément pour disposer de cette base de données supplémentaire sur votre hébergement web.</br></br>
- **Incluse - retirée de la vente** : indique que la base de données incluse va bientôt être retirée de la vente et devenir obsolète. </br>Nous vous recommandons, **avant** que la base de données ne devienne obsolète, de récupérer son contenu pour le placer dans une nouvelle base de données plus récente (dont la fin de vente n'est pas encore programmée).</br></br>
- **Optionnelle - retirée de la vente** : indique que la base de données souscrite en complément sur votre hébergement web va bientôt être retirée de la vente et devenir obsolète. </br>Nous vous recommandons, **avant** que la base de données ne devienne obsolète, de récupérer son contenu pour le placer dans une nouvelle base de données plus récente (dont la fin de vente n'est pas encore programmée).

> [!success]
>
> Pour dupliquer rapidement le contenu d'une base de données « **Incluse - retirée de la vente** » ou « **Optionnelle - retirée de la vente** » dans une nouvelle base de données dont l'obsolescence n'est pas encore programmée, consultez notre guide « [Dupliquer le contenu d'une base de données OVHcloud dans une autre](/pages/web_cloud/web_hosting/copy_database) ».
>

### Étape 2 - Créer la base de données

Il existe deux façons de créer une nouvelle base de données :

- **Si vous n’avez pas encore créé de base de données** : cliquez sur le bouton `Créer une base de données`{.action}.

- **Si vous avez déjà créé une base de données** : cliquez sur le bouton `Actions`{.action} puis sur `Créer une base de données`{.action}.

Dans la fenêtre qui s’ouvre, sélectionnez les informations suivantes :

![database-creation-step1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-step-1.png){.thumbnail}

|Information|Description|  
|---|---|
|**Sélectionnez le type de base de données**|Choisissez la taille de la base de données. Cette taille fait référence à l'espace dont dispose votre base de données pour le stockage des données.|
|**Sélectionnez le moteur de la base de données à ajouter**|Choisissez le moteur que la base de données doit utiliser. Actuellement, les bases de données inclues dans votre [offre d’hébergement web OVHcloud](/links/web/hosting) sont uniquement disponibles avec le moteur MySQL.|
|**Sélectionnez la version de la base de données à ajouter**|Choisissez la version utilisée par le moteur de la base de données. Assurez-vous que votre site web soit compatible avec la version que vous avez choisie.|

> [!primary]
>
> La mise à jour de la version du moteur d'une base de données déjà créée est actuellement indisponible.
>

Ensuite, cliquez sur `Suivant`{.action}.

Une nouvelle fenêtre s'affiche :

![database-creation-step2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-step-2.png){.thumbnail}

|Information|Description|
|---|---|
|**Utilisateur**|Entrez un nom d'utilisateur qui sera associé à votre base de données (6 caractères maximum en plus du préfixe utilisateur déjà renseigné).|
|**Mot de passe**|Entrez un mot de passe pour cet utilisateur en respectant les *critères* mentionnés plus bas.|
|**Confirmation**|Saisissez de nouveau le mot de passe pour cet utilisateur.|

> [!primary]
>
> Pour des raisons de sécurité, suivez les conditions requises lors de la création de votre mot de passe.
>
> Nous vous recommandons également de :
>
> - définir un mot de passe différent pour chacun de vos services;
> - créer un mot de passe ne contenant aucune informations personnelles (nom, prénom, date de naissance, etc.);
> - renouveler votre mot de passe régulièrement;
> - ne pas conserver de traces écrites de votre mot de passe et de ne pas l'envoyer à d'autres personnes (y compris par le biais de votre adresse e-mail);
> - ne pas sauvegarder votre mot de passe sur votre navigateur internet, même si votre navigateur vous le propose.
>

> [!warning]
>
> N'oubliez pas que si vous changez le mot de passe d'une base de données, toutes les applications qui accèdent à cette base doivent être mises à jour en conséquence.
>

Complétez les informations requises et cliquez sur `Suivant`{.action}.

![database-creation-step3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-step-3.png){.thumbnail}

Vérifiez que toutes les informations affichées dans le résumé sont correctes. Si tel est le cas, cliquez sur `Confirmer`{.action} pour lancer la création de votre base de données.

> [!primary]
>
> Lorsque vous cliquez sur `Confirmer`{.action}, la création de la base de données peut prendre jusqu'à **15 minutes**. Rechargez la page web de votre [espace client OVHcloud](/links/manager) si la base de données n'apparaît pas automatiquement dans le tableau listant vos bases de données.
>

Répétez ce processus autant de fois que vous le souhaitez afin de créer plusieurs bases de données (dans la limite des bases de données disponibles dans votre offre).

> [!warning]
>
> Une fois la création de la base de données validée, le nom d'utilisateur et le nom de la base de données ne sont plus modifiables.
>

### Étape 3 - Gérer votre base de données <a name="step3"></a>

> [!warning]
>
> Ce guide ne remplace pas l’assistance d'un professionnel en développement. Nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du logiciel de votre solution si vous rencontrez des difficultés. OVHcloud ne sera pas en mesure de vous fournir une assistance à ce propos. Retrouverez plus d’informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

À présent, vous pouvez utiliser votre base de données. Pour ce faire, vous aurez besoin de vos informations de connexion :

- le *nom d'utilisateur* et le *mot de passe* que vous avez défini,
- le *nom de la base de données* que vous avez indiqué,
- l'*adresse du serveur*.

> [!primary]
>
> S'il vous est demandé et quelle que soit la base de données [Start SQL](/links/web/hosting-options-startsql) ajoutée ou incluse avec votre hébergement web OVHcloud, le numéro de **port** à utiliser est le **3306**.
>

Ces informations sont essentielles pour que votre site web puisse se connecter à la base de données.

Si besoin, pour récupérer ces informations de connexion, connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} dans la colonne de gauche, choisissez l'offre d'hébergement sur laquelle vous souhaitez récupérer les informations de connexion à votre base de données puis cliquez sur l'onglet `Bases de données`{.action}.

Vous retrouverez l'ensemble des informations de connexion à votre base de données dans le tableau qui s'affiche. Ceci à l'exception du *mot de passe* pour des raisons de sécurité.

> [!warning]
>
> Si vous ne vous souvenez plus de votre mot de passe de connexion à votre base de données, consultez notre guide « [Changer le mot de passe de sa base de données](/pages/web_cloud/web_hosting/sql_change_password) ».
>

Selon le logiciel utilisé, il est possible que cette connexion nécessite d'être configurée manuellement ou via une interface générée par l'interface de configuration (backend) du site web. Étant donné que cette procédure concerne la configuration de votre site web et non votre hébergement OVHcloud, nous vous recommandons de consulter les ressources disponibles en ligne ou de faire appel à un [prestataire spécialisé](/links/partner).

> [!primary]
>
> Les bases de données liées à votre hébergement web sont uniquement accessibles via une application ou un script directement installé sur votre hébergement web ou via l'interface phpMyAdmin.
>

#### Accéder à l’interface phpMyAdmin

OVHcloud fournit un outil en ligne pour la gestion des bases de données, « phpMyAdmin ». Pour trouver le lien d'accès à cette application, connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} dans la colonne de gauche, choisissez l'offre d'hébergement sur laquelle vous souhaitez récupérer les informations de connexion à votre base de données puis cliquez sur l'onglet `Bases de données`{.action}. Dans le tableau qui s'affiche, cliquez sur le bouton `...`{.action} à droite de la base de données concernée, puis cliquez sur `Accéder à phpMyAdmin`{.action} dans le menu déroulant.

![phpMyAdmin Go Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-interface-login.png){.thumbnail}

Renseignez les informations d'accès à votre base de données puis cliquez sur `Connexion`{.action}.

Si besoin, consultez l'[étape 3](#step3) du présent guide pour retrouvez les informations de connexion à votre base de données.

#### Se servir des sauvegardes des bases de données

Pour chaque base de données d'hébergement web, des snapshots sont créés automatiquement chaque jour (jusqu'à 32 maximum). Vous pouvez donc restaurer rapidement une version antérieure d'une base de données à partir de votre espace client OVHcloud.

Pour vérifier les snapshots disponibles ainsi que leur date et heure de création, connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Cliquez sur `Hébergements`{.action} dans la colonne de gauche, choisissez l'offre d'hébergement sur laquelle vous souhaitez consulter les snapshots disponibles pour votre base de données puis cliquez sur l'onglet `Bases de données`{.action}. Dans le tableau qui s'affiche, cliquez sur le symbole juste à côté du cercle vert. Vous pouvez également télécharger chaque sauvegarde d'une base de données depuis ce même endroit. Retrouvez plus d'informations sur le sujet dans notre guide « [Récupérer la sauvegarde de la base de données d’un hébergement web](/pages/web_cloud/web_hosting/sql_database_export) ».

#### Comprendre les problèmes courants

**Trop de connexions**

Les bases de données d'hébergement web sont limitées à 30 connexions simultanées (variable système *max_connections*). Les demandes SQL doivent donc être optimisées pour éviter ce genre d'erreur. Si les problèmes persistent malgré tout, des mesures alternatives doivent être envisagées. Par exemple, vous pouvez migrer votre base de données sur une base de données [Web Cloud Databases](/links/web/databases) ou encore réaliser une [mise à niveau de votre offre d'hébergement web](/links/web/hosting-best-web).

**Erreurs de connexion / « introuvable »**

Apparaît généralement lorsqu'on n'utilise pas le nom réel de la base de données dans le fichier de connexion à la base de données présent dans son site web.

La meilleure pratique consiste à toujours utiliser le nom réel de la base de données pour les scripts et les fichiers de configuration au lieu des adresses IP ou du _localhost_.

**Quota dépassé pour les bases de données**

Si une base de données d'hébergement web dépasse l'espace de stockage recommandé, elle basculera automatiquement en « Lecture seule » / « Sélection seule ». L’administrateur recevra une notification par e-mail.

Une fois que la base de données a été optimisée (purgée), recalculez son quota dans votre espace client OVHcloud pour le débloquer à nouveau. Retrouvez plus d'informations sur le sujet dans notre guide « [Que faire lorsque le quota de stockage de ma base de données est dépassé ?](/pages/web_cloud/web_hosting/sql_overquota_database) »

## Aller plus loin <a name="go-further"></a>

[Modifier le mot de passe de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_change_password)

[Récupérer la sauvegarde de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_database_export)

[Importer une sauvegarde dans la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

[Optimiser les performances de votre site web](/pages/web_cloud/web_hosting/optimise_your_website_performance)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).