---
title: "Gérer l’historique d'une zone DNS"
excerpt: "Découvrez comment consulter, comparer, télécharger et restaurer vos sauvegardes de zone DNS"
updated: 2023-12-11
---

## Objectif

La zone **D**omain **N**ame **S**ystem (**DNS**) d’un nom de domaine constitue le fichier de configuration de ce dernier. Elle se compose d’informations techniques, appelées *enregistrements DNS*. La zone DNS est, en quelque sorte, comme un centre d'aiguillage.

Vous pouvez, par exemple, y préciser :

- L'adresse IP (enregistrements DNS de type *A* et *AAAA*) de votre hébergement web pour afficher votre site web avec votre nom de domaine.
- Les serveurs e-mail (enregistrements DNS de type *MX*) vers lesquels votre nom de domaine doit rediriger les e-mails qu'il reçoit. Cela vous permet de les consulter sur votre (vos) adresse(s) e-mail(s) personnalisée(s) avec votre nom de domaine.
- Des informations liées à la sécurité / l'authentification de vos services (hébergement web, serveur web, serveur e-mail, etc.)  associés à votre nom de domaine (enregistrements DNS de type *SPF*, *DKIM*, *DMARC*, etc.).

N'hésitez pas à consulter notre documentation sur [les enregistrements DNS et l'édition d'une zone DNS](dns_zone_edit1.) depuis votre [espace client OVHcloud](manager.) si vous souhaitez en apprendre plus sur le sujet.
Pour diverses raisons, vous pouvez être amené à appliquer une ancienne configuration DNS à votre nom de domaine.

Désormais, la gestion des DNS est facilitée grâce à l’historique de vos zones DNS.

**Découvrez comment consulter, comparer, télécharger et restaurer vos sauvegardes de zone DNS**

## Prérequis

- Disposer d'une zone DNS pour votre nom de domaine dans votre [espace client OVHcloud](manager.)
- Être connecté à l’[espace client OVHcloud](manager.)
- Disposer d'un accès à la gestion du nom de domaine concerné

## En pratique

Pour accéder à cette fonctionnalité, connectez-vous à votre [espace client OVHcloud](manager.) puis rendez-vous dans la partie `Web Cloud`{.action} sur la partie haute de l'interface. Dans la colonne de gauche, dirigez-vous dans l’onglet `Noms de domaine`{.action}, puis sélectionnez le nom de domaine lié à la zone DNS que vous souhaitez manipuler.

Sur la page qui s'affiche et si vous n'êtes pas déjà redirigé dans cet onglet, cliquez sur l'onglet `Zone DNS`{.action}.

Le tableau qui apparaît représente la zone DNS de votre nom de domaine. Vous y retrouvez la liste des enregistrements DNS qu'elle contient. Sur la droite du tableau, plusieurs boutons vous permettent d’effectuer des actions sur votre zone DNS. 

![DNS history tool](dns-zone-history.png){.thumbnail}

Cliquez sur `Voir l’historique de ma zone DNS`{.action}. 

Sur la nouvelle page qui s'affiche, un tableau apparaît contenant l'historique des sauvegardes de votre zone DNS, classé de la date la plus récente à la plus ancienne. En tête de ce tableau se trouve la version actuelle de votre zone DNS. Sur cette page, vous pouvez effectuer les actions suivantes :

- [Visualiser une zone DNS](#view.)
- [Télécharger une zone DNS](#download.)
- [Restaurer une zone DNS](#restore.)
- [Comparer deux zones DNS](#compare.)

### Visualiser une zone DNS <a name="view"></a>

Pour visualiser la zone DNS de votre choix, identifiez la ligne correspondante dans le tableau puis cliquez sur l'icône présente dans la colonne `Voir`{.action}.

![Visualiser une zone DNS](visualize-dns-eyes.png){.thumbnail}

Les données de la zone DNS concernée s’affichent.

![Détail d'une zone DNS](details-dns-zone.png){.thumbnail}

Cliquez sur `Fermer`{.action} pour revenir à la page principale « Historique de la zone DNS ».

### Télécharger une zone DNS <a name="download"></a>

Pour télécharger la zone DNS de votre choix, identifiez la ligne correspondante dans le tableau puis cliquez sur l'icône présente dans la colonne `Télécharger`{.action}.

![Télécharger une zone DNS](download-dns-zone.png){.thumbnail}

La zone DNS se télécharge au format .txt.

### Restaurer une zone DNS <a name="restore"></a>

Si vous souhaitez remplacer votre zone DNS actuelle par une autre, il vous suffit de restaurer une zone DNS plus ancienne. Dans le tableau contenant l’historique de vos zones DNS, identifiez la ligne correspondant à la zone DNS que vous voulez restaurer (pensez à bien vérifier la date à gauche de la ligne) puis cliquez sur l'icône présente dans la colonne `Restaurer`{.action}.

![Restaurer une zone DNS](restore-dns-zone.png){.thumbnail}

La fenêtre suivante s’affiche.

![Confirmation restauration zone DNS](confirmation-restore-dns-zone.png){.thumbnail}

Vérifiez que la date indiquée dans le message correspond à la zone DNS que vous voulez restaurer. Comme la bannière jaune l’indique, n’oubliez pas que la zone DNS actuelle (présente tout en haut dans la liste de l’historique des zones DNS) sera supprimée et remplacée par la zone DNS que vous souhaitez restaurer.

Cliquez sur `Restaurer`{.action} pour confirmer la restauration ou sur `Annuler`{.action}.

> [!primary]
>
> La modification ou la restauration d'une zone DNS entraîne un délai de propagation de **4** à **24** heures pour être totalement prise en compte sur le réseau DNS.
>

### Comparer deux zones DNS <a name="compare"></a>

Vous pouvez comparer le contenu de deux zones DNS. Dans le tableau contenant l’historique de votre zone DNS, identifiez les deux lignes correspondant aux deux zones DNS que vous voulez comparer (vérifiez bien la date à gauche de chaque ligne) puis sélectionnez-les. Pour comparer ces deux versions de zone DNS, cliquez en haut à gauche sur `Comparer les versions`{.action}.

![Comparer deux zones DNS](compare-two-dns-zone.png){.thumbnail}

Une nouvelle page apparaît, affichant le contenu des deux zones DNS. Au-dessus de chaque version s’affiche la date correspondante. Par défaut, la version de la zone DNS la plus récente se trouve à gauche et la plus ancienne à droite. Un code couleur vous aide à identifier les différences de contenu.<br>
À gauche, le contenu surligné en rouge a été modifié ou supprimé sur la version plus récente.<br>
À droite, le contenu surligné en vert a été modifié ou ajouté par rapport à la version plus ancienne. 

Vous avez également la possibilité de mettre à jour les dates des versions que vous souhaitez comparer grâce aux deux listes déroulantes.

![Détails comparaison deux zones DNS](compare-dns-zone-details.png){.thumbnail}

Grâce à ce guide, vous pouvez désormais comparer deux zones DNS, mais également visualiser, télécharger, restaurer et supprimer une zone DNS.

## Aller plus loin

[Se connecter à l'espace client OVHcloud](ovhcloud-account-login1.)

[Créer une zone DNS chez OVHcloud](dns_zone_create1.)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](partner.).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](support.).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.