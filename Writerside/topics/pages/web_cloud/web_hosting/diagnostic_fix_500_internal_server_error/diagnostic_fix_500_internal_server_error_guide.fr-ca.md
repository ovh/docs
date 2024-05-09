---
title: "Que faire en cas d’erreur 500 Internal Server Error ?"
excerpt: "Diagnostiquez les cas les plus courants d'erreurs 500"
updated: 2023-11-22
---

## Objectif

Les erreurs 500 « Internal Server Error » peuvent concerner tout ou partie de votre site, être aléatoires ou permanentes. Elles peuvent aussi apparaître sous la forme d'une page blanche.

![error500](http-500.png){.thumbnail}

Elles proviennent parfois aussi d'une mise à jour effectuée **automatiquement** par un composant de votre site et donc survenir sans action de votre part.

**Découvrez comment diagnostiquer les cas les plus courants d'erreurs 500.**

> [!warning]
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](partner.) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](diagnostic_fix_500_internal_server_error_#go-further.) de ce guide.

## Prérequis

- Disposer d'une [offre d'hébergement mutualisé](hosting.)
- Etre connecté à votre [espace client OVHcloud](manager.)
- Être à jour dans les [paiements](invoice_management#pay-bills.) et [renouvellements](how_to_use_automatic_renewal#renewal-management.) des services liés (nom de domaine et hébergement web)

## En pratique

Avant de poursuivre, vérifiez votre site sur plusieurs appareils et navigateurs. Si l'erreur 500 n'apparaît pas dans certains cas de figure (par exemple via un navigateur différent du vôtre), c'est qu'elle n'est pas liée à vos services OVHcloud. Redémarrez vos appareils puis contactez si nécessaire un technicien informatique proche de votre domicile.

Un site est constitué d'un **code source** (les fichiers en .php par exemple, visibles lors d'une connexion à votre hébergement en [FTP](ftp_connection1.)), auquel s'ajoute souvent une **base de données**.
<br>Malgré l'erreur 500, il est fortement conseillé d'effectuer une sauvegarde locale de l'ensemble de vos données avant toute autre manipulation :

- Suivez ce [guide](ftp_filezilla_user_guide1.) pour récupérer une copie de votre code source.
- Si votre site utilise une base de données, consultez également ce [document](sql_database_export1.) pour en récupérer une copie.

Dans le cas d'une erreur 500, effectuer une [restauration](diagnostic_fix_500_internal_server_error_#restore.) de votre site est tout à fait possible. Il reste toutefois préférable de réaliser un diagnostic approfondi, afin de déterminer l'origine précise de l'erreur.

### Vérifier les logs de votre hébergement

Consultez tout d'abord ce [guide](logs_and_statistics1.) afin de rechercher la cause de l'erreur 500 dans les logs de votre hébergement.

### Passer votre site en mode développement

Afin de faire apparaître d'éventuelles erreurs PHP, passez ensuite votre hébergement en mode `développement` grâce à ces [indications](configure_your_web_hosting#modifier-la-configuration-de-lhebergement-web-depuis-lespace-client.).

### Tester le fichier .htaccess

Une erreur 500 peut être liée à une anomalie dans un fichier `.htaccess`. Ce fichier est généralement situé au premier niveau dans le dossier contenant votre site sur votre FTP.

Pour le vérifier, [connectez-vous en FTP](ftp_connection1.) à votre hébergement.

Puis renommez ce fichier en `.htaccess.old` et retestez votre site.

Si ce dernier est de nouveau accessible, alors le `.htaccess` est en cause. Il devra donc être modifié. Si vous le souhaitez, contactez l'un de nos [partenaires](partner.) à ce sujet.

### Vérifier les permissions sur les dossiers et les fichiers

Les fichiers et dossiers qui constituent votre site possèdent tous un certain niveau de « permissions » en lecture, en écriture et en exécution. Ceci afin de les protéger contre toute manipulation malveillante ou erronée.

Une erreur 500 peut être liée à un niveau de droits d'accès incorrect sur certains des dossiers ou fichiers de votre site.

Pour accéder à ces fichiers, connectez-vous en FTP à votre hébergement en suivant notre [documentation](ftp_connection1.).

Le guide « [Utilisation du logiciel FileZilla avec votre hébergement](ftp_filezilla_user_guide#droits-des-fichiers-dossiers.) » vous aidera ensuite à vérifier les éléments suivants :

- La **racine** de votre hébergement (Il s’agit du répertoire noté `/` ou `.` dans votre logiciel FTP) doit être obligatoirement en droits 705 (ce sont les permissions par défaut). Nous vous conseillons de ne pas modifier ce niveau de droits.
- Les dossiers doivent être en droits 705.
- Les fichiers doivent être en droits 604.

### Accéder aux détails des erreurs sur vos scripts

Pour des raisons de sécurité, votre site masque les détails éventuels sur l'origine de l'erreur 500 à toute personne s'y connectant par un navigateur web.

Si vous ou votre développeur souhaitez avoir accès à ces détails, il vous est possible, à partir de la formule d’hébergement [Pro](hosting-professional-offer.), de vous connecter à votre site via une [connexion ssh](ssh_on_webhosting1.).

### Vérifier l'état de la base de données

Pour toute erreur 500 pouvant être en lien avec la base de données de votre site web, appuyez-vous sur notre documentation [« Résoudre les erreurs les plus fréquentes liées aux bases de données »](diagnosis_database_errors1.).

### Restaurer votre site à son état antérieur <a name="restore"></a>

> [!warning]
> La restauration du code source de votre site concernera l'ensemble des sites de votre hébergement OVHcloud.
>
> Lors d'une restauration, le contenu de votre espace FTP, ou celui de votre base de données, est remplacé par une sauvegarde. Vous ne pourrez donc pas récupérer ensuite les données présentes sur le serveur juste avant la restauration.

Pour restaurer le code source de votre site, consultez notre guide « [Restaurer l’espace de stockage de son hébergement web](ftp_save_and_backup1.) ».

Si votre site comporte une base de données, consultez notre guide « [Restaurer une sauvegarde de votre base de données](sql_importing_mysql_database#restaurer-une-sauvegarde-depuis-lespace-client.) » afin de la restaurer à un état antérieur.

Enfin, si l'erreur 500 est apparue suite à une mise à jour de la version PHP de votre hébergement, consultez notre guide « [Configurer le PHP sur son hébergement](configure_your_web_hosting1.) » pour revenir à la configuration précédente.

## Aller plus loin <a name="go-further"></a>

[Que faire si mon site est inaccessible ?](diagnostic-website-not-accessible1.)

[Que faire en cas d'erreur « Votre connexion n'est pas privée » ?](diagnostic-not-secured1.)

[Que faire en cas de page « Index of » ?](diagnostic-index-of1.)

[Que faire en cas de page « 403 forbidden » ?](diagnostic_403_forbidden1.)

[Résoudre les erreurs les plus fréquentes liées aux bases de données](diagnosis_database_errors1.)

[Mon site est lent. Que faire ?](diagnostic_slownesses1.)

[Résoudre l'erreur « Site non installé »](multisites_website_not_installed1.)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](partner.).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.