---
title: "Tutoriel - Protéger un répertoire ou l'interface d'administration de votre site web par des fichiers « .htaccess » et « .htpasswd »"
excerpt: "Decouvrez comment protéger un répertoire ou l'accès à l'administration de votre site web via une authentification avec les fichiers « .htaccess » et « .htpasswd »"
updated: 2023-05-31
---

**Dernière mise à jour le 31/05/2023**

## Objectif

Ce tutoriel explique comment mettre en place une authentification « utilisateur/mot de passe » pour accéder à tout ou partie de votre site web via un navigateur Internet. 

Ceci en utilisant deux fichiers de configuration (HTTP) Apache à placer dans [l'espace FTP](/pages/web/hosting/ftp_connection) de votre hébergement Web : 

- « **.htaccess** » : pour plus d'informations sur les fonctionnalités de ce fichier, consultez notre tutoriel sur les [« Opérations réalisables avec un fichier « .htaccess » »](/pages/web/hosting/htaccess_what_else_can_you_do).
- « **.htpasswd** » : en complément de ce tutoriel, consultez la [documentation officielle Apache](https://httpd.apache.org/docs/2.4/fr/programs/htpasswd.html) relative à ce fichier.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>
> Les exemples qui vont suivre sont à mettre en place dans des fichiers nommées « .htaccess » et « .htpasswd ». Attention, les règles que vous définissez dans ces fichiers ont des conséquences directes sur votre site web. Vérifiez systématiquement les règles que vous ajoutez avant de les appliquer à votre site web. 
> 

**Découvrez comment protéger un répertoire ou l'accès à la partie administrateur de votre site web via une authentification avec les fichiers « .htaccess » et « .htpasswd ».**

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovhcloud.com/fr/web-hosting/).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Disposer des identifiants de connexion à [l'espace FTP de votre hébergement](/pages/web/hosting/ftp_connection).

## En pratique

> [!primary]
>
> La solution de sécurité proposée ici n'est qu'une possibilité technique parmi d'autres. 
>
> Sachez, par exemple, que si vous utilisez un **C**ontent **M**anagement **S**ystem (**CMS**), d'autres solutions de sécurité existent.
>
> Si vous utilisez un CMS Wordpress, OVHcloud met également à disposition un tutoriel sur comment [utiliser le fichier htaccess avec WordPress](/pages/web/hosting/htaccess_how_to_protect_wordpress).
>
> Pour toute question relative à la création, l'utilisation ou la programmation de votre site web, le support OVHcloud ne sera pas en mesure de vous apporter une assistance sur ces sujets.
>
> Pour cela, contactez notre [communauté d'utilisateurs](https://community.ovh.com) ou nos [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).
>

Nous allons vous expliquer les 4 étapes principales à réaliser pour protéger l'accès à un répertoire ou tout ou partie de votre site web :

- Créer des fichiers « crypt.php », « .htaccess » et « .htpasswd » ;
- Générer des mots de passe chiffrés avec le fichier « crypt.php » ;
- Définir des utilisateurs et des mots de passe chiffrés avec le fichier « .htpasswd » ;
- Configurer des règles dans le fichier « .htaccess » et supprimer le fichier « crypt.php ».

> [!warning]
>
> Les étapes qui vont suivre optimiseront la sécurité de vos données hébergées.
> De ce fait et si vos sites web sont compatibles, nous vous recommandons fortement d'utiliser la version de PHP la plus récente possible.
> 
> Pour modifier la version de PHP de vos sites web sur votre hébergement web, consultez les guides suivants :
> 
> - [Modifier la configuration de son hébergement web](/pages/web/hosting/ovhconfig_modify_system_runtime)
> - [Changer la version de PHP de son hébergement web](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014)
>
> En effet, les scripts et informations décrites plus bas dans ce tutoriel ne fonctionnent qu'avec un environnement d'exécution et une version PHP récente.
> 
> A défaut, nous vous conseillons d'optimiser votre site web afin de le rendre compatible avant de mettre en place ce qui va suivre. Cela réduira davantage les risques de piratage de vos données via des failles de sécurité.
>

### Etape 1 : créer les fichiers « crypt.php », « .htaccess » et « .htpasswd »

Connectez-vous à [l'espace de stockage FTP](/pages/web/hosting/ftp_connection) de votre hébergement web. Ouvrez le [« dossier racine »](/pages/web/hosting/multisites_configure_multisite) vers lequel pointe votre nom de domaine.

Créez un fichier « crypt.php » dans ce « dossier racine ».

![root_folder](images/root_folder.png){.thumbnail}

Ouvrez ou créez le dossier destiné à être protégé de votre site web. Dans notre exemple ci-dessous, il s'agira du dossier « admin ». Créez, dans ce répertoire, un fichier « .htpasswd » et un fichier « .htaccess ».

![folder_admin](images/folder_admin.png){.thumbnail}

Pour utiliser correctement les fichiers « .htaccess » et « .htpasswd », vous devez connaître et respecter les règles suivantes : 

- **un seul** fichier « .htaccess » et **un seul** fichier « .htpasswd » par répertoire ou sous-répertoire, pour éviter les conflits entre différents fichiers « .htaccess » et différents « .htpasswd » ;
- les fichiers « .htaccess » et « .htpasswd » sont invisibles pour les internautes qui visitent votre site Web ;
- les règles déclarées dans un fichier « .htaccess » s'appliquent à l'ensemble du répertoire où le fichier « .htaccess » est installé, ainsi qu'à tous les sous-répertoires de ce même répertoire ;
- les fichiers « .htpasswd » et « .htaccess » peuvent être dans des dossiers différents. Un seul fichier « .htpasswd » peut être utilisé pour plusieurs « .htaccess ».

### Etape 2 : compléter le fichier « crypt.php »

Remontez dans le « dossier racine » où vous avez créé le fichier « crypt.php ». Cliquez sur `Editer`{.action} puis placez les lignes suivantes :

```php
<?php
$string = password_hash("plain_text_password", PASSWORD_BCRYPT);

echo nl2br("$string");
 ?>
```

Remplacez uniquement `plain_text_password` par le mot de passe **en clair** que vous souhaitez chiffrer.

**Vous pouvez adapter le script en fonction du nombre de mots de passe que vous souhaitez chiffrer.**

- Exemple où le script PHP va chiffrer 3 mots de passe en une seule opération :

```php
<?php
$string_1 = password_hash("plain_text_password1", PASSWORD_BCRYPT);
$string_2 = password_hash("plain_text_password2", PASSWORD_BCRYPT);
$string_3 = password_hash("plain_text_password3", PASSWORD_BCRYPT);

echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Remplacez uniquement `plain_text_password1`, `plain_text_password2` et `plain_text_password3` par les mots de passe **en clair**"que vous souhaitez chiffrer.

> [!primary]
>
> Les deux scripts ci-dessus utilisent, à date, la méthode de chiffrement la plus sûre à l'aide de l'algorithme **bcrypt** recommandé par Apache.
>
> Pour plus d'informations sur le sujet, consultez la [documentation officielle Apache](https://httpd.apache.org/docs/2.4/fr/misc/password_encryptions.html){.external}.
>

Si vous disposez d'un hébergement [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/) ou [Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/), connectez-vous ensuite en [SSH](/pages/web/hosting/ssh_on_webhosting) à votre hébergement web. Descendez dans le « **dossier racine** » où se trouve votre script « crypt.php ».

Pour cela, utilisez la commande SSH suivante :

```bash
cd Name_of_your_root_folder
```

Remplacez `Name_of_your_root_folder` par le nom de votre « dossier racine » pour descendre où se trouve votre script « crypt.php ».

Si, par exemple, votre fichier « crypt.php » est dans un sous-dossier de votre « dossier racine », utilisez la commande SSH suivante :

```bash
cd Name_of_your_root_folder/sub_folder
```

Remplacez `Name_of_your_root_folder` par le nom de votre « dossier racine » et `sub_folder` par le sous-dossier où se trouve votre script « crypt.php ».

Dès que vous êtes présent au niveau où se trouve votre script « crypt.php », exécutez la commande suivante :

```bash
php crypt.php
```

> [!warning]
>
> Pour des raisons de sécurité, l'utilisation du SSH est recommandée. Toutefois, si vous disposez d'une offre **Starter** ou [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) sur lesquelles le SSH est indisponible, vous pouvez aussi exécuter le fichier « crypt.php » via votre navigateur Web.
>
> Pour cela, saisissez l'URL suivante : `https://domain.tld/crypt.php` en modifiant `domain.tld` par votre propre nom de domaine. Ceci directement dans la barre d'adresse de votre navigateur web.
>

Récupérez les mots de passe chiffrés **sans copier** le « &#60;br /> » si vous exécutez la commande « *php crypt.php* » en SSH :

```bash
encrypted_password1
encrypted_password2
encrypted_password3
```

Les valeurs `encrypted_password1`, `encrypted_password2` et `encrypted_password3` doivent, par exemple, ressembler au format de la ligne suivante :

```text
$2y$10$8eO7Iq3rh.u3CXvhuhKq.Om.nQJN.Z1sBT2jvOqVKCGzP42T/4LBC
```

Vérifiez uniquement que votre (vos) mot(s) de passe chiffré(s) commence(nt) bien par `$2y$`. Cela vous confirmera que votre (vos) mot(s) de passe a (ont) bien été chiffré(s) avec l'algorithme sécurisé **bcrypt**.

### Etape 3 : définir les utilisateurs et les mots de passe chiffrés avec le fichier « .htpasswd »

Le fichier « .htpasswd » contient les mots de passe chiffrés respectifs à chacun des utilisateurs déclarés dans le fichier. Ce sont uniquement ces utilisateurs qui seront autorisés à se connecter au répertoire dont vous souhaitez protéger l'accès.

Pour cela, pour **chaque utilisateur** dans ce fichier, inscrivez une ligne indiquant son identifiant et son mot de passe chiffré :

```bash
user1:encrypted_password1
user2:encrypted_password2
user3:encrypted_password3
```

Remplacez les valeur `user1`, `user2` et `user3` de notre exemple par vos propres noms d'utilisateurs.

Remplacez aussi les `encrypted_password1`, `encrypted_password2` et `encrypted_password3` par vos propres mots de passe chiffrés récupérés précédemment.

### Etape 4 : configurer les règles dans le fichier « .htaccess »

#### Bloquer l'accès à un répertoire complet

Dans le répertoire à protéger, créez un fichier « .htaccess » avec le code suivant :

```bash
AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user
```

Dans le script ci-dessus, remplacez les éléments suivants par vos propres valeurs :

- `"Indicates your login(s)"` : correspond à l'utilisateur (ou aux utilisateurs) autorisé(s) à accéder au répertoire complet. Si vous avez plusieurs utilisateurs, séparez-les uniquement par un *espace*.
- `your_ftp_login` : le login FTP que vous utilisez pour vous connecter à votre espace de stockage FTP. Pour récupérer votre login FTP, consultez notre guide sur la [connexion à votre espace FTP](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd` : chemin d'accès répertoire depuis la racine FTP de votre hébergement web jusqu'au fichier « .htpasswd » devant être utilisé pour authentifier les utilisateurs autorisés par la règle présente dans votre fichier « .htaccess ».

#### Bloquer l'accès à un ou plusieurs fichiers

Pour bloquer l'accès à un ou plusieurs fichiers précis, ajoutez une [directive « Files »](https://httpd.apache.org/docs/2.4/fr/mod/core.html#files){.external} dans le fichier « .htaccess » :

```bash
<Files test.php>

AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user

</Files>
```

Dans le script ci-dessus, remplacez les éléments suivants par vos propres valeurs :

- `test.php` : nom du fichier spécifique ou groupe de fichiers contenant, dans notre exemple, le terme **test.php** (terme pour lequel la restriction d'accès doit s'appliquer).
- `"Indicates your login(s)"` : correspond à l'utilisateur (ou aux utilisateurs) autorisé(s) à accéder aux fichiers dont les noms contiennent **test.php**. Si vous avez plusieurs utilisateurs, séparez-les par un *espace*.
- `your_ftp_login` : le login FTP que vous utilisez pour vous connecter à votre espace de stockage FTP. Pour récupérer votre login FTP, consultez notre guide sur la [connexion à votre espace FTP](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd` : chemin d'accès répertoire de la racine FTP de votre hébergement web jusqu'au fichier « .htpasswd » devant être utilisé pour authentifier les utilisateurs autorisés par la directive du fichier « .htaccess ».

> [!warning]
>
> Vous devrez indiquer une [directive « Files »](https://httpd.apache.org/docs/2.4/fr/mod/core.html#files){.external} pour **chaque fichier** à protéger.
>
> Les directives « Files » s'appliquent à l'ensemble des fichiers du même nom ou se terminant par le nom spécifié. Ceci à condition qu'ils soient contenus dans le même répertoire que le « .htaccess » ou dans l'un de ses sous-répertoires.
>
> Dans la configuration indiquée ci-dessus, comme « new_test.php » contient **test.php** dans son nom, la directive « Files » s'appliquerait aussi sur un fichier « new_test.php » contenu dans un sous-répertoire du dossier « admin ».
>
> De plus, tant que vous ne vous êtes pas authentifié pour accéder aux fichiers concernés par la directive, ces derniers peuvent ne pas apparaître et ne peuvent donc pas être « listables » via une page « index of ».
>

> [!alert]
>
> Dès que vous avez terminé la mise en place de vos fichiers « .htaccess » et « .htpasswd », supprimez le fichier de chiffrement « crypt.php » de votre hébergement web.
>

## Aller plus loin <a name="go-further"></a>

[Documentation officielle Apache](https://httpd.apache.org/docs/2.4/){.external}

[Se connecter à l'espace FTP de son hébergement Web](/pages/web/hosting/ftp_connection)

[Tutoriel - Opérations réalisables avec un fichier « .htaccess »](/pages/web/hosting/htaccess_what_else_can_you_do)

[Bloquer l'accès à mon site pour certaines adresses IP via un fichier .htaccess](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website)

[Réécrire l'URL d'accès à mon site grâce au mod_rewrite via le fichier .htaccess](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
