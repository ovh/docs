---
title: "Protéger l'interface d'administration de votre site par un fichier .htaccess"
slug: mutualise-htaccess-comment-proteger-lacces-a-un-repertoire-par-une-authentification
legacy_guide_number: 1968
excerpt: "Retrouvez ici comment protéger l'accès à l'administration de votre site avec un fichier .htaccess"
section: Réécriture et authentification
---

**Dernière mise à jour le 14/09/2021**

## Objectif

Il peut parfois être nécessaire de protéger l'accès à une partie de votre site par des identifiants. Vous pourrez notamment mettre en place un fichier **« .htaccess »** afin de protéger l'accès à son interface d'administration. 

**Découvrez comment protéger l'accès à la partie Administrateur de votre site via une authentification par un fichier « .htaccess ».**

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

> [!primary]
>
> La solution proposée ici n'est qu'une possibilité technique parmi d'autres pour mettre en place un espace administrateur sur votre site. Vous pouvez également utiliser la fonctionnalité [Module en 1 clic](../modules-en-1-clic/) proposée par [OVHcloud](https://www.ovh.com/fr/).
>
> Pour toute demande sur la création ou la programmation de votre site, contactez notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ces sujets.
> 

### Créer l'arborescence

Connectez-vous à [l'espace de stockage de votre hébergement](../connexion-espace-stockage-ftp-hebergement-web/) de votre hébergement. Ouvrez le [« dossier racine » de votre site](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-21-ajouter-un-domaine-enregistre-chez-ovhcloud). Créez un fichier **« crypt.php »**.

![root_folder](images/root_folder.png){.thumbnail}

Ouvrez ou créez le dossier destiné à contenir la partie **« admin »** de votre site. Créez dans ce répertoire un fichier **« .htpasswd »** et un fichier **« .htaccess »**.

![folder_admin](images/folder_admin.png){.thumbnail}

> [!primary]
>
> Les fichiers **« .htpasswd »** et **« .htaccess »** peuvent être dans des dossiers différents. Un seul fichier **« .htpasswd »** peut être utilisé par plusieurs **« .htaccess »**.
>
> Les paramétrages indiqués par un fichier **« .htaccess »** s'appliquent au répertoire où il est installé ainsi qu'à tous ses sous-répertoires.
>

### Compléter le fichier « crypt.php »

Inscrivez dans le fichier **« crypt.php »** créé précédemment les lignes suivantes (à répéter selon le nombre de mots de passe à générer):

```php
<?php
if (isset($_POST['login']) AND isset($_POST['pass']))
    {
        $login = $_POST['login'];
        $pass_crypte = crypt($_POST['pass']);
        echo '<p>Copiez cette ligne dans le .htpasswd :<br />' . $login . ':' . $pass_crypte . '</p>';
    }

else
    {
    ?>
    <p>Entrez un nom d'utilisateur et son mot de passe.</p>
    <form method="post">
        <p>
            Nom d'utilisateur : <input type="text" name="login"><br />
            Mot de passe : <input type="text" name="pass"><br /><br />
            <input type="submit" value="Valider">
        </p>
    </form>
     
    <?php
    }
    ?>
```

Si vous disposez d'un hébergement **Pro2014** ou **Performance**, connectez-vous ensuite en [SSH](../mutualise-le-ssh-sur-les-hebergements-mutualises/) à votre hébergement. Exécuter la commande suivante puis récupérer les mots de passe chiffrés :

```bash
php crypt.php
```

> [!warning]
>
> Pour des raisons de sécurité, l'utilisation du SSH est conseillé. Toutefois, si vous disposez d'une offre **Kimsufi Web** ou **Perso2014** et que vous ne souhaitez pas [changer d'offre](https://www.ovh.com/fr/hebergement-web/), vous pouvez aussi exécuter le fichier **« crypt.php »** par votre navigateur Web (Par exemple, en allant sur une url du type **https://mon-domaine.ovh/crypt.php**).
>
> Pour toute question complémentaire sur la méthode à utiliser pour chiffrer les mots de passe dans un fichier **« .htpasswd »**, contactez notre [communauté d'utilisateurs](https://community.ovh.com) ou les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/). En effet, nous ne serons pas en mesure de vous fournir une assistance sur ce sujet.
>

### Compléter le fichier « .htpasswd »

Le fichier **« .htpasswd »** contient la liste des utilisateurs autorisés à se connecter à l'interface d'administration de votre site et leur mot de passe chiffré.

Inscrivez dans ce fichier **pour chaque utilisateur** une ligne indiquant son identifiant et son mot de passe chiffré :

```bash
utilisateur1:mot_de_passe_chiffré_1
utilisateur2:mot_de_passe_chiffré_2
```

### Compléter le fichier « .htaccess »

#### Bloquer l'accès à un répertoire complet

Dans le répertoire à protéger, créez un fichier **« .htaccess »** avec le code suivant :

```bash
AuthName "Indiquez vos identifiants administrateur"
AuthType Basic
AuthUserFile "/home/votre_login_ftp/dossier_racine/admin/.htpasswd"
Require valid-user
```

> [!warning]
>
> Dans cet exemple, il faut remplacer **votre_login_ftp** par votre [identifiant FTP](../connexion-espace-stockage-ftp-hebergement-web/#etape-1-recuperer-les-informations-necessaires-pour-se-connecter). Vous le trouverez dans la rubrique `Hébergements`{.action}, puis dans l'onglet `FTP-SSH`{.action} de l'hébergement concerné.
>
> Pensez également, si besoin, à remplacer dans l'exemple ci-dessous **« dossier_racine »** par le nom du [dossier « racine » contenant les fichiers de votre site](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-21-ajouter-un-domaine-enregistre-chez-ovhcloud).
>

#### Bloquer l'accès à un ou plusieurs fichiers

Pour bloquer l'accès à un ou plusieurs fichiers précis, ajoutez une [directive « Files »](https://httpd.apache.org/docs/2.4/fr/mod/core.html#files){.external} dans le **« .htaccess »** :

```bash
<Files test.php>

AuthName "Indiquez vos identifiants"
AuthType Basic
AuthUserFile "/home/votre_login_ftp/dossier_racine/admin/.htpasswd"
Require valid-user

</Files>
```

> [!warning]
>
> Vous devrez indiquer une [directive <Files>](https://httpd.apache.org/docs/2.4/fr/mod/core.html#files){.external} pour **chaque** fichier à protéger.
>
> Les directives <Files> s'appliquent à l'ensemble des fichiers du même nom ou se terminant par le nom spécifié. Ceci à condition qu'ils soient contenus dans le même répertoire que le **« .htaccess »** ou dans l'un de ses sous-répertoires (Dans la configuration indiquée ici, la directive <Files> s'appliquerait par exemple sur un fichier **« nouveau_test.php »** contenu dans un sous-répertoire du dossier **« admin »**).
>

## Aller plus loin <a name="aller-plus-loin"></a>

[Tout sur le fichier .htaccess](../mutualise-tout-sur-le-fichier-htaccess/)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.