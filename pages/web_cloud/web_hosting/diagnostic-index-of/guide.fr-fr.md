---
title: "Que faire en cas de page « Index of » ?"
excerpt: "Découvrez comment remettre votre site en ligne quand il affiche une page « Index of »"
updated: 2025-12-11
---

## Objectif

Une page **« Index of »** apparaît dans au moins l'un des cas suivants :

- La [configuration de votre nom de domaine avec votre site web](/pages/web_cloud/web_hosting/multisites_configure_multisite) n’est pas correctement paramétrée vers votre répertoire cible.
- Le dossier cible vers lequel votre nom de domaine pointe ne contient pas de fichiers **« index.html »** ou **« index.php »**.

![index_of](/pages/assets/screens/other/browsers/errors/index-of.png){.thumbnail}

**Découvrez comment corriger l’affichage d’une page « Index of ».**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#go-further) de ce guide.
>

## Prérequis

- Disposer d'un [nom de domaine](/links/web/domains)
- Disposer d'une [offre d'hébergement web](/links/web/hosting)
- Être connecté à votre [espace client OVHcloud](/links/manager)

## En pratique

### Comprendre l'origine de la page « Index of »

Votre nom de domaine est déclaré pour accéder à un répertoire cible (un « `Dossier racine` ») sur le serveur [FTP](/pages/web_cloud/web_hosting/ftp_connection) de votre hébergement web mutualisé. Ceci via l'onglet [Mes sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) de votre hébergement web présent dans votre [espace client OVHcloud](/links/manager).

La page **Index of** indique que le répertoire cible concerné ne contient pas de fichier **index.php** ou **index.html**. Un fichier de ce type constitue le « *point d'entrée* » de votre site web. Le nom de ce fichier est normalisé.

Pour afficher votre site web, vous devrez donc, depuis l'onglet `Mes sites`{.action} de votre hébergement web, relier votre nom de domaine au site web dont le `Dossier racine` contient ce fichier **index.php** ou **index.html**.

> [!primary]
>
> Pour relier temporairement votre domaine à un `Dossier racine` ne contenant pas de fichier **index.php** ou **index.html**, vous pouvez interdire l'affichage de la liste des dossiers de votre site en suivant ce [tutoriel](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do#empecher-le-listage-du-contenu-dun-repertoire). Vous pouvez également protéger l'accès à vos dossiers par un [mot de passe](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> Nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés à mettre en place cette configuration. En effet, nos équipes support ne seront pas en mesure de vous fournir une assistance pour toute modification de la programmation interne de votre site web.

### Résoudre le cas le plus courant d’une page « Index of »

Vous avez importé les fichiers de votre site **domain.tld** dans le dossier `www` de votre hébergement par [FTP](/pages/web_cloud/web_hosting/ftp_connection). Or, le site web auquel est associé votre nom de domaine n'est pas relié à ce dossier dans la colonne `Dossier racine`.

![index_of_multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders-empty.png){.thumbnail}

Le `Dossier racine` n'est, à date, pas modifiable une fois le site web créé.

Vous devrez détacher votre nom de domaine du site web existant depuis l'onglet `Mes sites`{.action} de votre hébergement web. Pour cela, consultez notre guide « [Comment détacher un nom de domaine d'un site web existant ?](/pages/web_cloud/web_hosting/my_websites_detach_domain_existing_website) ».

Vous pourrez ensuite ajouter un nouveau site web avec votre nom de domaine à l'aide de notre guide « [Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite) ». Si votre site web dispose d'une configuration avec Git, consultez préalablement notre guide « [Configurer et utiliser Git avec son hébergement web OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting) » **avant** de `Détacher le domaine`{.action}.

Vérifiez que votre site web s'affiche correctement. Dans le cas contraire, redémarrez votre appareil et videz le cache de votre navigateur si nécessaire.

Assurez-vous également qu'un fichier **index.php** ou **index.html** est présent dans votre répertoire cible.

## Aller plus loin <a name="go-further"></a>

[Résoudre les erreurs les plus fréquentes liées aux modules en 1 clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Résoudre l’erreur « Site non installé »](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Partager son hébergement entre plusieurs sites](/pages/web_cloud/web_hosting/multisites_configure_multisite)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).