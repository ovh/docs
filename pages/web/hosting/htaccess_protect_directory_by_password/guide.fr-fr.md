---
title: 'Comment proteger l’accès a un répertoire par une authentification ?'
slug: mutualise-htaccess-comment-proteger-lacces-a-un-repertoire-par-une-authentification
legacy_guide_number: 1968
excerpt: "Retrouvez ici les manipulations necessaires pour proteger l'acces a un repertoire de votre hebergement via une authentification."
section: 'Réécriture et authentification'
---

**Dernière mise à jour le 06/09/2021**

## Objectif

Il peut parfois être nécessaire de protéger l'accès à une partie de votre site par un mot de passe. Vous pourrez réaliser cette modification grâce à un fichier **« .htaccess »**. 

Avant de procéder, il est toutefois nécessaire de préciser que les paramétrages indiqués par un fichier **« .htaccess »** s'appliquent au répertoire où le fichier est installé, ainsi qu'à tous ses sous-répertoires.

**Découvrez comment pour proteger l'acces à un répertoire de votre hébergement via une authentification par un fichier « .htaccess ».**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#aller-plus-loin) de ce guide.
>

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovh.com/fr/hebergement-web/)
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être en possession des identifiants permettant de [se connecter à l'espace de stockage de votre hébergement](../connexion-espace-stockage-ftp-hebergement-web/).

## En pratique

### Créer le fichier .htpasswd

Dans un premier temps, il faut créer le fichier qui contiendra la liste des utilisateurs ayant le droit de se connecter et le mot de passe qui leur est associé. En général, on crée pour cela un fichier **« .htpasswd »** qui sera ensuite utilisé par le fichier **« .htaccess »**. Il s'agit d'un fichier texte simple, à l'intérieur duquel sont indiqués les noms des utilisateurs et leurs mots de passe sous forme cryptée. Le mot de passe rattaché à ces utilisateurs devra être crypté. 

> [!primary]
>
> Pour toute question sur la méthode à utiliser pour crypter les mots de passe dans un fichier **« .htpasswd »**, contactez notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).
>

Sous Windows, vous ne pouvez pas créer directement un fichier nommé **« .htaccess »** ou **« .htpasswd »**. Il vous suffit alors de le nommer autrement, de le transférer sur votre espace web et de le renommer en **« .htaccess »** ou **« .htpasswd »** ensuite à l'aide de votre [client FTP](../connexion-espace-stockage-ftp-hebergement-web/#etape-2-acceder-a-votre-espace-de-stockage).

Le fichier **« .htpasswd »** ne doit pas forcément être au même endroit que le fichier **« .htaccess »**. Vous pouvez par exemple le placer à la racine de votre hébergement et l'utiliser pour protéger différents répertoires de votre site, étant donné qu'un seul fichier **« .htpasswd »** peut être utilisé par plusieurs fichiers **« .htaccess »**. Le fichier **« .htpasswd »** doit contenir une ligne par utilisateur précisant le nom d'utilisateur et le mot de passe associé.

Ces lignes sont de la forme suivante :


```bash
utilisateur:mot_de_passe_crypté
```

Une fois le fichier **« .htpasswd »** créé, il ne vous reste plus qu'à le placer sur votre hébergement et à passer à l'étape suivante : la création des fichiers **« .htaccess »**. Pensez à revenir à la ligne à la suite du mot de passe crypté.

### Créer le fichier « .htaccess »

Pour bloquer l'accès à un répertoire complet, créez un fichier texte **« .htaccess »** qui sera de la forme suivante et placez-le dans le répertoire à protéger.

**ATTENTION** , Dans l'exemple suivant, il faut remplacer **votre_login_ftp** par votre identifiant FTP, vous retrouverez celui-ci dans votre [espace client](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) dans la rubrique `Hébergements`{.action}, puis dans l'onglet `FTP-SSH`{.action}.


```bash
AuthUserFile /home/votre_login_ftp/www/.htpasswd
AuthGroupFile /dev/null
AuthName "Accès Restreint"
AuthType Basic
require valid-user
```

*Dans l'exemple ci-dessus, votre fichier  **« .htpasswd »** se situe dans le dossier /www sur votre hébergement mutualisé*.

### Bloquer l'accès à un ou plusieurs fichiers précis

Pour bloquer l'accès à un ou plusieurs fichiers précis, il suffit d'y ajouter les balises php suivantes (une balise FILES par fichier) :


```bash
<Files test.php>

AuthUserFile /home/votre_login_ftp/www/.htpasswd
AuthGroupFile /dev/null
AuthName "Accès Restreint"
AuthType basic
require valid-user

</Files>
```

## Aller plus loin <a name="aller-plus-loin"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous invitons à consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.