---
title: "Récupérer la sauvegarde d'une base de données supprimée"
excerpt: "Découvrez comment retrouver la sauvegarde d'une base de données lorsque celle-ci a été supprimée depuis votre espace client OVHcloud"
updated: 2024-07-18
---

## Objectif

La plupart de nos offres d'[hébergement web](/links/web/hosting) comprennent des bases de données. Si, accidentellement, vous supprimez une base de données associée à votre hébergement web, vous pouvez tenter d'en récupérer la sauvegarde via nos APIs.
  
**Découvrez comment retrouver, via les APIs OVHcloud, la sauvegarde d'une base de données lorsque celle-ci a été supprimée depuis votre espace client OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Toutefois, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance complémentaire sur les APIs. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>
  
## Prérequis

- Disposer d'une [offre d'hébergement web OVHcloud](/links/web/hosting) active comprenant une (ou plusieurs) base(s) de données mutualisée(s) OVHcloud associée(s).
- La suppresion de la base de donnée doit dater de moins de 30 jours.
  
## En pratique

Les APIs OVHcloud sont mises à disposition pour permettre aux développeurs ou aux intégrateurs d'associer, par exemple, des fonctionnalités présentes ou non dans l'espace client OVHcloud directement dans leurs applications ou solutions.

> [!warning]
>
> Les sauvegardes proposées par OVHcloud pour les hébergements mutualisés sont non-contractuelles. Nous vous les proposons en complément de vos services afin de vous aider dans les situations urgentes. Nous vous recommandons d'effectuer régulièrement vos propres sauvegardes de sécurité pour pallier aux éventuelles pertes de données.
>
> De plus, lorsqu'une base de données est supprimée par son utilisateur ou son administrateur, OVHcloud ne pourra pas garantir à 100% la récupération de la sauvegarde de cette base de données pour les raisons citées ci-dessus.
>

### Étape 1 - Récupérer le nom de l'hébergement web sur lequel était associé la base de données supprimée

Pour récupérer le nom de votre hébergement web, effectuez les actions suivantes :

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
2. Sur la ligne située en haut de l'espace client, cliquez sur l'onglet `Web Cloud`{.action}.
3. Dans la colonne de gauche, cliquez sur le menu déroulant `Hébergements`{.action}.
4. Sélectionnez l'hébergement web concerné.
5. En haut à gauche de la page qui s'affiche, vous retrouverez le nom de votre hébergement web à droite de la mention `Hébergements /`{.action}.
  
### Étape 2 - Se connecter aux APIs OVHcloud et leur permettre l'accès à vos services

Pour cela, effectuez les actions suivantes : 

- Rendez-vous sur notre site [APIs OVHcloud](/links/apis) (vérifiez bien que vous êtes sur `https://eu.api.ovh.com` si vos services sont hébergés en Europe et sur `https://ca.api.ovh.com` s'ils sont hébergés en dehors de l'Europe).
- Sur la page qui s'affiche, cliquez au centre sur `Explore the OVHcloud API`{.action}.
- Sur la nouvelle page qui apparaît et dans la partie gauche de la page, positionnez-vous sur le formulaire situé à droite du formulaire `v1`{.action}, puis sélectionnez/saisissez le choix `/hosting/web`{.action}.
- Parmi la liste d'APIs qui apparaît en dessous dans la colonne de gauche, rechercher et cliquez sur l'API suivante : **GET /hosting/web/{serviceName}/dump**.
- Sur la partie droite de la page s'affiche alors l'API avec ses différents formulaires à remplir.
- Cliquez sur le bouton situé en haut à droite intitulé `Authenticate`{.action}, puis sur le bouton `Login with OVHcloud SSO`{.action}.
- L''interface de connexion à votre [espace client OVHcloud](/links/manager) apparaît.
- Connectez-vous avec votre identifiant client OVHcloud, puis cliquez sur `Authorize`{.action} pour pouvoir utiliser les APIs OVHcloud avec les services présents dans votre espace client OVHcloud.
- Vous êtes ensuite automatiquement redirigé vers la page précédente de l'API **GET /hosting/web/{serviceName}/dump** tout en étant connecté à votre espace client OVHcloud.
  
### Étape 3 - Vérifier la disponibilité des sauvegardes et récupérer l'ID de la dernière sauvegarde

Pour cela, remplissez les différents formulaires comme suit :

- Pour la section intitulée **PATH PARAMETERS** :
    -  **serviceName** : Renseignez le nom de votre hébergement web précédemment récupéré lors de l'étape 1 de ce guide.

- Pour la section intitulée **QUERY-STRING PARAMETERS** :
    - **creationDate.from** : Laissez le formulaire vide.
    - **creationDate.to** : Laissez le formulaire vide.
    - **databaseName** : Saisissez le nom de la base de donnée supprimée accidentellement. (exemple : **deletedDatabase.mysql.db**).
    - **deletionDate.from** : Laissez le formulaire vide.
    - **deletionDate.to** : Laissez le formulaire vide.
    - **orphan** : Saisissez en minuscule la valeur : `true`.

Une fois les différents formulaires remplis, cliquez sur le bouton bleu `Try`{.action} situé en bas à droite des deux sections préalablement remplies.

Si tout a été renseigné correctement et que des sauvegardes sont disponibles pour la base de données supprimée, une liste de numéros d'identifiant de sauvegarde apparaît dans la fenêtre `RESPONSE`{.action} lorsque vous descendez sur la page et en dessous du bouton `Try`{.action}.

Chacun de ses numéros correspond à une sauvegarde disponible. Ces numéros d'identifiant de sauvegarde apparaissent du plus récent au plus ancien. **Copiez le numéro le plus haut de la liste** (sans la `,` à la fin) si vous souhaitez récupérer la toute dernière sauvegarde de votre base de données supprimée lors de l'étape 4 de ce guide.

Si aucun numéro n'apparait dans la fenêtre, vérifiez que vous vous êtes bien connecté avec le bon identifiant client OVHcloud (si vous en avez plusieurs) et vérifiez les informations saisies dans les sections **PATH PARAMETERS** et **QUERY-STRING PARAMETERS**. Relancez ensuite l'opération.

Si malgré tout aucun numéro d'identifiant n'apparaît, c'est qu'il n'y a pas ou plus de sauvegardes disponibles pour la base de données supprimée sur notre infrastructure.

### Étape 4 - Récupérer la dernière sauvegarde


  
## Aller plus loin <a name="go-further"></a>
 
Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).
 
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).
 
Échangez avec notre [communauté d'utilisateurs](/links/community).