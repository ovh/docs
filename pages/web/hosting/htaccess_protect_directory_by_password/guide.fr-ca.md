---
title: 'Comment proteger l’accès a un répertoire par une authentification ?'
slug: mutualise-htaccess-comment-proteger-lacces-a-un-repertoire-par-une-authentification
legacy_guide_number: 1968
excerpt: 'Retrouvez ici les manipulations necessaires pour proteger l''acces a un repertoire de votre hebergement via une authentification.'
section: 'Réécriture et authentification'
---

Vous pouvez réaliser ceci grâce à un fichier .htaccess. Avant de procéder, il est nécessaire de préciser quelques petites choses par rapport aux fichiers .htaccess. Tout d'abord, il faut savoir qu'il s'agit de fichiers particuliers pour le serveur web, et que ces fichiers n'apparaissent pas dans l'arborescence du répertoire concerné si un internaute fait un accès à un répertoire listable (qui ne contient pas de page index, et dont le listage n'est pas interdit). Ensuite, il faut bien prendre en compte que les paramétrages indiqués par un fichier .htaccess s'appliquent au répertoire où le fichier est installé, ainsi qu'à tout ses sous-répertoires.


> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Procedure a suivre

### Creer le fichier de mot de passe
Dans un premier temps, il faut créer le fichier qui contiendra la liste des utilisateurs ayant le droit de se connecter et le mot de passe qui leur est associé. En général, on crée pour cela un fichier .htpasswd qui sera ensuite utilisé par le fichier .htaccess. Il s'agit d'un fichier texte simple, à l'intérieur duquel sont indiqués les noms des utilisateurs et leurs mots de passe sous forme cryptée. Le mot de passe rattaché à ces utilisateurs devra être crypté. Vous trouverez plusieurs manière de faire sur internet.

Sous windows, vous ne pouvez pas créer directement un fichier nommé .htaccess ou .htpasswd. Il vous suffit alors de le nommer autrement, de le transférer sur votre espace web, et de le renommer en .htaccess ou .htpasswd ensuite à l'aide de votre client FTP.

Le fichier .htpasswd ne doit pas forcément être au même endroit que le fichier .htaccess. Vous pouvez par exemple le placer à la racine de votre hébergement, et l'utiliser pour protéger différents répertoires de votre site, étant donné qu'un seul fichier .htpasswd peut être utilisé par plusieurs fichiers .htaccess. Le fichier .htpasswd doit contenir une ligne par utilisateur précisant le nom d'utilisateur et le mot de passe associé.

Ces lignes sont de la forme suivante :


```bash
utilisateur:mot_de_passe_crypté
```

Exemple pour l'utilisateur : "Admin" et le mot de passe : "ovh1234" cela donnerait la ligne suivante : Admin:gl0IiOirI2n6M

Une fois le fichier .htpasswd créé, il ne vous reste plus qu'à le placer sur votre hébergement et à passer à l'étape suivante : la création des fichiers .htaccess. Pensez à mettre un retour chariot a la suite du mot de passe crypté.


### Creer le fichier .htaccess
Pour bloquer l'accès à un répertoire complet, créez un fichier texte .htaccess qui sera de la forme suivante, et placez-le dans le répertoire à protéger.

**ATTENTION** , Dans l'exemple suivant, il faut remplacer *votre_login_ftp* par votre identifiant FTP, vous retrouverez celui-ci dans votre espace client dans la rubrique "Plateforme", puis dans l'onglet "FTP"


```bash
AuthUserFile /home/votre_login_ftp/www/.htpasswd
AuthGroupFile /dev/null
AuthName "Accès Restreint"
AuthType Basic
require valid-user
```

*Dans l'exemple ci-dessus, votre fichier .htpasswd se situe dans le dossier /www sur votre hébergement mutualisé*.



> [!success]
>
> Pour les offres Start et 1000GP, le chemin à mettre dans la ligne authuserfile est différent.
> Il vous a été communiqué dans le mail d'activation. Dans le cas contraire ou si vous avez égaré ce mail, vous pouvez utiliser le script PHP suivant :
> 
> ```php
> 1. <?php
> 2. echo realpath("path.php");
> 3. ?>
> ```
>

### Bloquer l'acces a un ou plusieurs fichiers precis
Pour bloquer l'accès à un ou plusieurs fichiers précis, il suffit d'ajouter les balises (une balise FILES par fichier) :


```bash
<Files test.php>

AuthUserFile /home/votre_login_ftp/www/.htpasswd
AuthGroupFile /dev/null
AuthName "Accès Restreint"
AuthType basic
require valid-user

</Files>
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.