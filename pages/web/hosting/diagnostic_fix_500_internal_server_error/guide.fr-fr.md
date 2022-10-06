---
title: Que faire en cas d’erreur 500 Internal Server Error ?
slug: erreur-500-internal-server-error
excerpt: Diagnostiquez les cas les plus courants d'erreurs 500
section: Diagnostic
order: 06
---

**Dernière mise à jour le 21/07/2022**

## Objectif

Les erreurs 500 « Internal Server Error » peuvent concerner tout ou partie de votre site, être aléatoires ou permanentes. Elles peuvent aussi apparaître sous la forme d'une page blanche.

![error500](images/error-500-2.png){.thumbnail}

Elles proviennent parfois aussi d'une mise à jour effectuée **automatiquement** par un composant de votre site et donc survenir sans action de votre part.

**Découvrez comment diagnostiquer les cas les plus courants d'erreurs 500.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#gofurther) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement mutualisé](https://www.ovhcloud.com/fr/web-hosting/)
- Etre connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être à jour dans les [paiements](https://docs.ovh.com/fr/billing/gerer-factures-ovh/#pay-bills) et [renouvellements](https://docs.ovh.com/fr/billing/renouvellement-automatique-ovh/#renewal-management) des services liés (nom de domaine et hébergement web)

## En pratique

Avant de poursuivre, vérifiez votre site sur plusieurs appareils et navigateurs. Si l'erreur 500 n'apparaît pas dans certains cas de figure (par exemple via un navigateur différent du vôtre), c'est qu'elle n'est pas liée à vos services OVHcloud. Redémarrez vos appareils puis contactez si nécessaire un technicien informatique proche de votre domicile.

Un site est constitué d'un **code source** (les fichiers en .php par exemple, visibles lors d'une connexion à votre hébergement en [FTP](../connexion-espace-stockage-ftp-hebergement-web/)), auquel s'ajoute souvent une **base de données**.
<br>Malgré l'erreur 500, il est fortement conseillé d'effectuer une sauvegarde locale de l'ensemble de vos données avant toute autre manipulation :

- Suivez ce [guide](../mutualise-guide-utilisation-filezilla/) pour récupérer une copie de votre code source.
- Si votre site utilise une base de données, consultez également ce [document](../exportation-bases-donnees/) pour en récupérer une copie.

Dans le cas d'une erreur 500, effectuer une [restauration](#restore) de votre site est tout à fait possible. Il reste toutefois préférable de réaliser un diagnostic approfondi, afin de déterminer l'origine précise de l'erreur.

### Vérifier les logs de votre hébergement

Consultez tout d'abord ce [guide](../mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/) afin de rechercher la cause de l'erreur 500 dans les logs de votre hébergement.

### Passer votre site en mode développement

Afin de faire apparaître d'éventuelles erreurs PHP, passez ensuite votre hébergement en mode `développement` grâce à ces [indications](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/#etape-2-modifier-la-configuration-de-lhebergement-web).

### Tester le fichier .htaccess

Une erreur 500 peut être liée à une anomalie dans un fichier `.htaccess`. Ce fichier est généralement situé au premier niveau dans le dossier contenant votre site sur votre FTP.

Pour le vérifier, [connectez-vous en FTP](../connexion-espace-stockage-ftp-hebergement-web/) à votre hébergement.

Puis renommez ce fichier en `.htaccess.old` et retestez votre site.

Si ce dernier est de nouveau accessible, alors le `.htaccess` est en cause. Il devra donc être modifié. Si vous le souhaitez, contactez l'un de nos [partenaires](https://partner.ovhcloud.com/fr/directory/) à ce sujet.

### Vérifier les permissions sur les dossiers et les fichiers

Les fichiers et dossiers qui constituent votre site possèdent tous un certain niveau de « permissions » en lecture, en écriture et en exécution. Ceci afin de les protéger contre toute manipulation malveillante ou erronée.

Une erreur 500 peut être liée à un niveau de droits d'accès incorrect sur certains des dossiers ou fichiers de votre site.

Pour accéder à ces fichiers, connectez-vous en FTP à votre hébergement en suivant notre [documentation](../connexion-espace-stockage-ftp-hebergement-web/).

Le guide « [Utilisation du logiciel FileZilla avec votre hébergement](../mutualise-guide-utilisation-filezilla/#droits-des-fichiers-dossiers) » vous aidera ensuite à vérifier les éléments suivants :

- La **racine** de votre hébergement (Il s’agit du répertoire noté `/` ou `.` dans votre logiciel FTP) doit être obligatoirement en droits 705 (ce sont les permissions par défaut). Nous vous conseillons de ne pas modifier ce niveau de droits.
- Les dossiers doivent être en droits 705.
- Les fichiers doivent être en droits 604.

### Accéder aux détails des erreurs sur vos scripts

Pour des raisons de sécurité, votre site masque les détails éventuels sur l'origine de l'erreur 500 à toute personne s'y connectant par un navigateur web.

Si vous ou votre développeur souhaitez avoir accès à ces détails, il vous est possible, à partir de la formule d’hébergement [pro2014](https://www.ovhcloud.com/fr/web-hosting/professional-offer/), de vous connecter à votre site via une [connexion ssh](../mutualise-le-ssh-sur-les-hebergements-mutualises/).

### Restaurer votre site à son état antérieur <a name="restore"></a>

> [!warning]
>
> La restauration du code source de votre site concernera l'ensemble des sites de votre hébergement OVHcloud.
>
> Lors d'une restauration, le contenu de votre espace FTP, ou celui de votre base de données, est remplacé par une sauvegarde. Vous ne pourrez donc pas récupérer ensuite les données présentes sur le serveur juste avant la restauration.
>

Pour restaurer le code source de votre site, consultez notre guide « [Restaurer l’espace de stockage de son hébergement web](../restauration-ftp-filezilla-espace-client/) ».

Si votre site comporte une base de données, consultez notre guide « [Restaurer une sauvegarde de votre base de données](../mutualise-guide-importation-dune-base-de-donnees-mysql/#restaurer-une-sauvegarde-depuis-lespace-client) » afin de la restaurer à un état antérieur.

Enfin, si l'erreur 500 est apparue suite à une mise à jour de la version PHP de votre hébergement, consultez notre guide « [Configurer le PHP sur son hébergement](../configurer-le-php-sur-son-hebergement-web-mutu-2014/) » pour revenir à la configuration précédente.

## Aller plus loin <a name="gofurther"></a>

[Tout sur le fichier .htaccess](../mutualise-tout-sur-le-fichier-htaccess/)

[Comment diagnostiquer une page blanche ?](../comment-diagnostiquer-page-blanche/)

[Les codes de reponse d’un serveur HTTP](../mutualise-les-codes-de-reponse-dun-serveur-http/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
