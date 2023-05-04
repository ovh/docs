---
title: Que faire en cas de page « Index of » ?
excerpt: Découvrez comment remettre votre site en ligne quand il affiche une page « Index of »
slug: diagnostic-index-of
section: Diagnostic
order: 07
updated: 2023-05-04
---

**Dernière mise à jour le 04/05/2023**

## Objectif

Une page **« Index of »** apparaît dans au moins l'un des cas suivants :

- La configuration [Multisite](/pages/web/hosting/multisites_configure_multisite) de votre nom de domaine n’est pas correctement paramétrée vers votre répertoire cible
- Le dossier cible vers lequel votre nom de domaine pointe ne contient pas de fichiers **« index.html »** ou **« index.php »**

![index_of](images/index_of.png){.thumbnail}

**Découvrez comment corriger l’affichage d’une page « Index of ».**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#gofurther) de ce guide.
>

## Prérequis

- Disposer d'un [nom de domaine](https://www.ovhcloud.com/fr/domains/)
- Disposer d'une [offre d'hébergement web](https://www.ovhcloud.com/fr/web-hosting/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

### Comprendre l'origine de la page « Index of »

Votre nom de domaine est déclaré pour accéder à un répertoire cible (un « `Dossier racine` ») sur le serveur [FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) de votre hébergement web mutualisé. Ceci via l'onglet [Multisite](/pages/web/hosting/multisites_configure_multisite) de votre hébergement web présent dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

La page **Index of** indique que le répertoire cible concerné ne contient pas de fichier **index.php** ou **index.html**. Un fichier de ce type constitue le « *point d'entrée* » de votre site web. Le nom de ce fichier est normalisé.

Pour afficher votre site web, vous devrez donc, depuis la partie `Multisite`{.action} de votre hébergement, relier votre domaine au `Dossier racine` qui contient ce fichier **index.php** ou **index.html**.

> [!primary]
>
> Pour relier temporairement votre domaine à un `Dossier racine` ne contenant pas de fichier **index.php** ou **index.html**, vous pouvez interdire l'affichage de la liste des dossiers de votre site en suivant ce [tutoriel](https://docs.ovh.com/fr/hosting/mutualise-htaccess-les-autres-operations-realisables-avec-des-fichiers-htaccess/#empecher-le-listage-du-contenu-dun-repertoire). Vous pouvez également protéger l'accès à vos dossiers par un [mot de passe](https://docs.ovh.com/fr/hosting/mutualise-htaccess-comment-proteger-lacces-a-un-repertoire-par-une-authentification/).
>
> Nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) si vous éprouvez des difficultés à mettre en place cette configuration. En effet, nos équipes support ne seront pas en mesure de vous fournir une assistance pour toute modification de la programmation interne de votre site web.

### Résoudre le cas le plus courant d’une page « Index of »

Vous avez importé les fichiers de votre site **mydomain.ovh** dans le dossier `www` de votre hébergement par [FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/). Hors, votre nom de domaine n'est pas relié à ce dossier dans la colonne `Dossier racine` de votre `Multisite`{.action}.

![index_of_multisite](images/index_of_multisite.png){.thumbnail}

Modifiez le `Dossier racine` en cliquant sur le bouton `...`{.action} à droite du tableau puis sur `Modifier le domaine`{.action} :

![modify_domain](images/modify_domain.png){.thumbnail}

Dans la fenêtre qui s'affiche :

* Cochez la case `Modifier également le sous domaine www.mydomain.ovh`{.action} (1) ;
* Indiquez le répertoire contenant le fichier **index.php** ou **index.html** de votre site comme `Dossier racine` (2) ;
* Cliquez sur `Suivant` (3).

![change_root_folder](images/change_root_folder01.png){.thumbnail}

> [!primary]
>
> Utiliser le répertoire `www` comme `Dossier racine` n'est en aucun cas obligatoire. Vous pouvez installer votre site dans un autre dossier de votre [serveur FTP](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).
>

Dans la fenêtre suivante, cliquez sur `Valider`{.action}.

![modify_root_folder_confirm](images/modify_root_folder_confirm.png){.thumbnail}

Sous quelques minutes (en rafraîchissant votre navigateur), vous obtiendrez le résultat suivant :


![multisite_modified](images/multisite_modified.png){.thumbnail}

Vérifiez que votre site web s'affiche correctement. Dans le cas contraire, redémarrez votre appareil et videz le cache de votre navigateur si nécessaire.

Assurez-vous également qu'un fichier **index.php** ou **index.html** est présent dans votre répertoire cible.

## Aller plus loin <a name="gofurther"></a>

[Résoudre les erreurs les plus fréquentes liées aux modules en 1 clic](https://docs.ovh.com/fr/hosting/erreurs-frequentes-modules-en-1-clic/)

[Résoudre l’erreur « Site non installé »](https://docs.ovh.com/fr/hosting/erreur-site-non-installe/)

[Partager son hébergement entre plusieurs sites](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.