---
title: 'Comment proteger l’accès a un répertoire par une authentification ?'
slug: mutualise-htaccess-comment-proteger-lacces-a-un-repertoire-par-une-authentification
legacy_guide_number: 1968
excerpt: "Retrouvez ici les manipulations necessaires pour proteger l'acces a un repertoire de votre hebergement via une authentification."
section: 'Réécriture et authentification'
---

**Dernière mise à jour le 07/09/2021**

## Objectif

Il peut parfois être nécessaire de protéger l'accès à une partie de votre site par un mot de passe. Vous pourrez mettre en place cette configuration grâce à un fichier **« .htaccess »**. 

Avant de procéder, il est toutefois nécessaire de préciser que les paramétrages indiqués par un fichier **« .htaccess »** s'appliquent au répertoire où il est installé, ainsi qu'à tous ses sous-répertoires.

**Découvrez comment pour protéger l'acces à un répertoire de votre hébergement via une authentification par un fichier « .htaccess ».**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovh.com/fr/hebergement-web/).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être en possession des identifiants permettant de se connecter à [l'espace de stockage de votre hébergement](../connexion-espace-stockage-ftp-hebergement-web/).

## En pratique

### Créer le fichier « .htpasswd »

Dans un premier temps, il faut créer le fichier qui contiendra la liste des utilisateurs autorisés à se connecter et le mot de passe qui leur sera associé. En général, on crée pour cela un fichier **« .htpasswd »** qui sera ensuite utilisé par le fichier **« .htaccess »**. Il s'agit d'un fichier texte simple, à l'intérieur duquel sont indiqués les noms des utilisateurs et leurs mots de passe sous forme cryptée. Le mot de passe rattaché à ces utilisateurs devra être crypté.

Pour crypter un mot de passe, créez un fichier **« crypt.php »** sur votre hébergement et utilisez la fonction **« crypt() »** de PHP :

```bash
<?php
php echo crypt('motdepasse');
?>
```

Connectez-vous ensuite en [SSH](../mutualise-le-ssh-sur-les-hebergements-mutualises/) à votre hébergement, afin d'exécuter ce fichier et de récupérer le mot de passe crypté :

```bash
php crypt.php
```

> [!warning]
>
> Seules les [offres d'hébergement](https://www.ovh.com/fr/hebergement-web/) **Pro2014** et **Performance** permettent une [connexion en SSH](../mutualise-le-ssh-sur-les-hebergements-mutualises/).
>
> Pour toute question complémentaire sur la méthode à utiliser pour crypter les mots de passe dans un fichier **« .htpasswd »**, contactez notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).
>

Le fichier **« .htpasswd »** ne doit pas forcément être au même endroit que le fichier **« .htaccess »**. Vous pouvez par exemple le placer à la racine de votre hébergement et l'utiliser pour protéger différents répertoires de votre site, étant donné qu'un seul fichier **« .htpasswd »** peut être utilisé par plusieurs fichiers **« .htaccess »**. Le fichier **« .htpasswd »** doit contenir une ligne par utilisateur précisant le nom d'utilisateur et le mot de passe associé.

Ces lignes sont de la forme suivante :


```bash
utilisateur1:mot_de_passe_crypté1
utilisateur2:mot_de_passe_crypté2
```

Une fois le fichier **« .htpasswd »** créé, il ne vous reste plus qu'à l'importer dans [l'espace de stockage de votre hébergement](../connexion-espace-stockage-ftp-hebergement-web/) et à passer à l'étape suivante : la création du fichier **« .htaccess »**.

### Créer le fichier « .htaccess »

Pour bloquer l'accès à un répertoire complet, créez un fichier texte **« .htaccess »** qui sera de la forme suivante et placez-le dans le répertoire à protéger.

> [!warning]
>
> Dans l'exemple suivant, il faut remplacer **votre_login_ftp** par votre [identifiant FTP](../connexion-espace-stockage-ftp-hebergement-web/#etape-1-recuperer-les-informations-necessaires-pour-se-connecter), vous retrouverez celui-ci dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) dans la rubrique `Hébergements`{.action}, puis dans l'onglet `FTP-SSH`{.action} de l'hébergement concerné.
>
> Pensez également, si besoin, à remplacer dans l'exemple ci-dessous **« www »** par le dossier contenant les fichiers de votre site.
>

```bash
AuthName "Accès Restreint"
AuthType Basic
AuthUserFile "/home/votre_login_ftp/www/.htpasswd"
Require valid-user
```

### Bloquer l'accès à un ou plusieurs fichiers

Pour bloquer l'accès à un ou plusieurs fichiers précis, il suffit d'ajouter une [directive <Files>](https://httpd.apache.org/docs/2.4/fr/mod/core.html#files){.external} (une balise par fichier) dans le fichier **« .htaccess »** :

```bash
<Files test.php>

AuthName "Accès Restreint"
AuthType Basic
AuthUserFile "/home/votre_login_ftp/www/.htpasswd"
Require valid-user

</Files>
```

> [!warning]
>
> Les directives <Files> s'appliquent à tout fichier avec le nom spécifié, quel que soit le répertoire ou sous-répertoire dans lequel il se trouve. 
>
> Elles s'appliquent également à tout fichier se terminant par le nom spécifié (Dans l'exemple ci-dessus, la directive <Files> s'appliquerait par exemple sur un fichier **« nouveau_test.php »**).
>

## Aller plus loin <a name="aller-plus-loin"></a>

[Tout sur le fichier .htaccess](../mutualise-tout-sur-le-fichier-htaccess/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.