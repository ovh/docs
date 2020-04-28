---
title: 'Spécificités techniques liées aux hébergements mutualisés'
slug: specificites-techniques-hebergements-mutualises
excerpt: 'Vous trouverez dans ce guide differentes informations techniques  liees aux specificites techniques liees aux hebergements mutualises.'
section: 'Configuration de l''hébergement'
order: 6
---

## FTP

### Logiciel FTP - Passif

Vous pouvez mettre à jour votre logiciel FTP de cette manière :

- Pour FileZilla :

Rendez-vous dans l'onglet `Édition`{.action} - `Paramètres`{.action} - `Connexion`{.action} - `FTP`{.action}

Cochez la case `Passif (recommandé)`{.action} à droite dans la partie `Mode de transfert`{.action}.

- Pour Cyberduck :

Cliquez sur `Nouvelle connexion`{.action}.

Sélectionnez ensuite la flèche de `Plus d'options`{.action} choisissez `Passif`{.action}. en `Mode de connexion`{.action}.


## SQL

### Connexions simultanées à la base de données

Actuellement les bases de données mutualisées (*Perso* // *Pro* // *Module*) sont limités à 30 connexions simultanées.


### Connexions depuis un serveur externe

- Pour des raisons de sécurité il n'est pas possible de vous connecter depuis un serveur externe sur une base de données mutualisée.

Uniquement les serveurs mutualisés d'OVH peuvent se connecter sur le serveur MySQL.

Toute autre connexion générera l'erreur suivante :


```bash
Warning: MySQL Connection Failed: Host ip.votre.connexion is not allowed to connect ...
```



> [!primary]
>
> Ceci s'applique aussi à l'offre SQL Privé actuellement.
>

### Variables serveur SQL mutualisé

Par exemple pour retrouver la valeur du *max_allowed_packet* ?

Rendez-vous dans l'interface de PhpMyAdmin puis dans la console de rédaction de requêtes SQL, saisissez :  **show variables**

La liste des variables serveur s'affiche alors, vous pouvez descendre jusqu'à la variable souhaitée.


## PHP

### PHP-FPM

Nous avons adapté PHP-FPM à notre infrastructure Web, dans le but d'accélérer les réponses PHP.

Dans nos laboratoires de tests, nous obtenons ainsi des performances jusqu'à 7 fois plus rapides que l'ancien mécanisme.

*Certaines variables serveurs sont modifiées via l'utilisation de PHP-FPM :*


|Variable|sans PHP-FPM|avec PHP-FPM|
|---|---|---|
|max_execution_time|120s|300s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|

sans PHP-FPM120s2000128M


> [!primary]
>
> - Pour le domaine principal le fichier .ovhconfig est fonctionnel à la racine de l'hébergement ou dans un sous-répertoire de niveau 1 (ex: /www/) mais pas dans les répertoires de niveau 2 ou plus (ex :
> /www/test/ , /www/test/test2/).
> - PHP-FPM est actif par défaut sur les offres d'hébergement mutualisé 2014.
>

### Chemin relatif du serveur

Suite à une mise a jour de sécurité (04/06/2014) sur le serveur, le chemin relatif retourné par le serveur est modifié.

Via l'utilisation d'un script tel que :

```php
1. <?php
2. echo $_SERVER['SCRIPT_FILENAME'];
3. ?>
```

Le chemin retourné était du type : `/homez.XXX/USER/Nom_DOSSIER/test.php`. Le compte principal sera à présent : `/home/USER/Nom_DOSSIER/test.php`.


Une compatibilité reste assurée par des liens symboliques (`/homez.XXX/USER` étant un lien vers `/home/USER`).

Les liens symboliques resteront toujours effectifs.


### Host du serveur

Il ne vous est **pas possible** de récupérer directement le host via la fonction REMOTE_HOST :

```php
1. <?php
2. echo $_SERVER['REMOTE_HOST'] ;
3. ?>
```

Il vous est cependant possible d'utiliser la fonction `gethostbyaddr()`:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3. ?>
```


### FTP via PHP

Suite à une mise à jour de sécurité (04/06/2014) sur les serveurs mutualisés, la connexion FTP via PHP en mode actif n'est plus possible.

**Erreur PHP** qu'il est possible de rencontrer :


```bash
Warning: ftp_put() [function.ftp-put]: bind() failed: Permission denied (13)
```

La fonction `bind()` n'est plus possible

Pour éviter ce cas il suffit d'activer le mode passif :

Code PHP:

```bash
$conn_id = ftp_connect($ftp_server);
$login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);
# switch to passive mode (mandatory on Ovh shared hosting)
ftp_pasv( $conn_id, true );
```


> [!primary]
>
> Le FTP actif n'est plus possible, vous devrez dans ce cas utiliser le mode passif.
>

### Librairies mutualisées

Information sur les librairies disponibles :


|Librairie|Disponibilité|
|---|---|
|Django Python|non activable|
|FFmpeg|non activable|
|memcached|non activable|
|apc|non activé|
|imagick|activé|
|Imagemagick|activé|
|GD|activé|
|zend (opcache)|activé|
|PDO|activé|
|Zip - Gzip|activé|

Il vous est possible de retrouver différentes informations sur votre cluster via ce lien : [http://cluster015.hosting.ovh.net/infos/](http://cluster015.hosting.ovh.net/infos/){.external}

Remplacez le cluster indiqué dans l'URL par le votre, il vous est possible de retrouver cette information dans le manager : `Mutualisé`{.action} - `Hébergement`{.action} - `Synthèse`{.action}.

> [!success]
>
> Attention : via l'utilisation de PHP-FPM, et pour des raisons de sécurité, les options suivantes sont désactivées (dépréciées par PHP) :
>
> - register_globals
> - magic_quotes_gpc
>

## Astuces : exécuter un script PHP via ssh


Actuellement sur les hébergements Web en SSH, la version utilisée par défaut pour PHP est la :  **4.4.9**.

- Voici un exemple de ligne de commande à renseigner pour exécuter le fichier test.php avec la version 4.4.9 de PHP :

```sh
php test.php
```

- Si vous souhaitez utiliser la version 5.3 de PHP sur votre script test.php :

```sh
php.ORIG.5_3 test.php
```

- Si vous souhaitez utiliser la version 5.4 de PHP sur votre script test.php :

```sh
php.ORIG.5_4 -c /usr/local/lib/php.ini-2 test.php
```