---
title: 'Installer WordPress sur un VPS avec WP-CLI'
excerpt: 'Découvrez comment installer WordPress sur un VPS OVHcloud avec WP-CLI'
updated: 2024-03-04
---

## Objectif

Que vous soyez un développeur expérimenté ou un débutant souhaitant lancer votre premier site web, ce guide vous explique pas à pas comment installer WordPress sur un VPS OVHcloud. Installer WordPress sur un VPS présente plusieurs avantages, comme la personnalisation complète de l'environnement, une optimisation des performances et un renforcement de la sécurité. WP-CLI est une interface en ligne de commande vous permettant de faciliter l'installation manuelle de WordPress sur votre VPS OVHcloud.

**Ce guide décrit comment installer WordPress avec WP-CLI sur un VPS ou un Serveur Dédié OVHcloud.**

## Prérequis

- Disposer d'un [VPS](https://www.ovhcloud.com/fr/vps/) ou d'un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/) dans votre compte OVHcloud
- Disposer d'un accès administrateur (sudo) via SSH à votre serveur
- Avoir [configuré un environnement de développement web sur votre VPS]()
- Disposer d'un nom de domaine enregistré chez OVHcloud


## En pratique

> [!primary]
>
> Comme les [prérequis](#prérequis) le mentionnent, nous partons du principe que vous possédez déjà un [environnement de développement web configuré sur votre VPS](). Pour ce guide, les composants suivants sont déjà installés sur notre VPS :
>
> - PHP (version 8.2.7)
> - Le serveur web Nginx
> - Le SGBD MariaDB
>

Connectez-vous en SSH à votre VPS à l'aide de votre nom d'utilisateur et de votre mot de passe.

### Installer WP-CLI

Téléchargez WP-CLI en utilisant curl ou wget :

```sh
~$ curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
```

Rendez le fichier téléchargé exécutable :

```sh
~$ sudo chmod +x wp-cli.phar
```

Déplacez le fichier exécutable pour l’utiliser comme commande 'wp' :

```sh
~$ sudo mv wp-cli.phar /usr/local/bin/wp
```

Testez l'installation de WP-CLI en executant :

```sh
~$ wp –info
```

Si WP-CLI s'est bien installé, un message de ce type doit apparaître :

![WP VPS](images/result_wp_info.png){.thumbnail}

### Installer WordPress avec WP-CLI

#### Créer la base de données WordPress

Connectez-vous à MariaDB :

```sh
~$ sudo mysql -u root -p
```

Créer la base de données pour votre site web WordPress :

```sh
~$ CREATE DATABASE <database_name>;
```

Créez un utilisateur MariaDB et attribuez-lui des privilèges sur la base de données :

```sh
GRANT ALL PRIVILEGES ON database_name.* TO 'wordpress_user'@'localhost' IDENTIFIED BY '<strong_password>';
FLUSH PRIVILEGES;
EXIT;
```

#### Installer WordPress

Naviguez vers le répertoire où vous souhaitez installer WordPress, par exemple :

```sh
~$ cd /var/www/html
```

Téléchargez WordPress grâce à wp-cli :

```sh
~$ wp core download --locale=fr_FR
```

Il est possible que l'erreur suivante survienne :

```sh
~$ Error: '/var/www/html/' is not writable by current user.
```

Cela signifie que votre utilisateur (celui de votre VPS OVHcloud) n’a pas la permission pour écrire dans le répertoire `/var/www/html`. Une manière simple et sécurisée de résoudre ce problème est de changer le propriétaire du répertoire `/var/www/html` pour le faire correspondre à votre utilisateur.

Pour accorder les droits, entrez la commande suivante :

```sh
~$ sudo chown -R your_user:your_group /var/www/html/
```

Remplacez `your_user` et `your_group` par votre nom d'utilisateur et groupe d'utilisateur actuels. Sur de nombreux systèmes Linux, le groupe d'utilisateur par défaut pour un utilisateur est le même que le nom d'utilisateur. Vous pouvez trouver votre nom d'utilisateur avec la commande `whoami` et votre groupe avec `groups`.

Tentez à nouveau de télécharger WordPress :

```sh
~$ wp core download --locale=fr_FR
```

Si le téléchargement de WordPress s'est bien déroulé, le message suivant doit s'afficher :

![WP VPS](images/result_wp_downloaded.png){.thumbnail}

Créez le fichier de configuration « wp-config.php » :

```sh
~$ wp config create --dbname=wordpress_db --dbuser=wordpress_user --dbpass=strong_password --dbhost=localhost
```

Remplacez wordpress_db, wordpress_user et strong_password par les valeurs que vous avez précedemment définies.

Si tout s'est bien déroulé, le message suivant doit apparaître :

![WP VPS](images/result_wp_config.png){.thumbnail}

Lancez l’installation de WordPress :

```sh
~$ wp core install --url=your_domain.com --title="Your website title" --admin_user="admin" --admin_password="another_strong_password" --admin_email="your_email@example.com"
```

Si l'installation de WordPress s'est bien déroulée, le message suivant doit s'afficher :

![WP VPS](images/result_wp_installed.png){.thumbnail}

### Configurez Nginx

#### Créez un fichier de configuration pour votre site web

Naviguez vers le répertoire des sites disponibles de Nginx :

```sh
~$ cd /etc/nginx/sites-available/
```

Créer un nouveau fichier de configuration pour votre site web WordPress. Celui-ci doit porter le nom de votre domaine :

```sh
~$ sudo nano your_domain.com
```

Dans le fichier que vous venez de créer, ajoutez la configuration suivante (Cette configuration est un exemple de base pour un site WordPress) :

```sh
server {
    listen 80;
    server_name your_domain.com www.your_domain.com;
    root /var/www/html;
    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

Si vous utilisez une version PHP différente de 8.2.X, remplacez la ligne :

```sh
fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
```
par la ligne

```sh
fastcgi_pass unix:/var/run/php/php<php_version>-fpm.sock;
```

Pour que Nginx charge la configuration de votre site, vous devez créer un lien symbolique de votre fichier de configuration dans le répertoire `/etc/nginx/sites-available/` :

```sh
~$ sudo ln -s /etc/nginx/sites-available/your_domain.com /etc/nginx/sites-enabled/
```

#### Testez la configuration Nginx

Avant de redémarrer Nginx pour appliquer les modifications, il est important de tester votre configuration pour s'assurer qu'il n'y a pas d'erreurs :

```sh
~$ sudo nginx -t
```

Si aucune erreur n'a été détectée, le message suivant s'affiche :

![WP VPS](images/result_nginx_t.png){.thumbnail}

#### Redémarrez Nginx

Une fois la configuration testée et validée, redémarrez Nginx pour appliquer les changements :

```sh
~$ systemctl restart nginx
```

### Accéder à votre site web

#### Relier le nom de domaine à l’adresse IP du VPS

Pour pouvoir accéder à votre site web depuis un navigateur, vous devez d'abord lier le nom de domaine de votre site web WordPress à l'adresse IP de votre VPS. Rendez-vous dans votre espace client. Dans le menu de gauche, cliquez sur `Domain names`{.action} puis sélectionnez le nom de domaine que vous avez choisit pour votre site WordPress. Cliquez sur l’onglet `DNS zone`{.action} puis, dans le tableau qui s’affiche, identifiez la ligne ayant pour type la valeur A, cliquez sur le bouton `…`{.action} et sélectionnez `Modify record`{.action}.

![WP VPS](images/dns_zone_line_cta.png){.thumbnail}

Dans la fenêtre qui s’affiche, entrez l’adresse IP de votre VPS pour le champ `Target`{.action} puis cliquez sur `Next`{.action}. Vérifiez que les informations indiquées sont bonnes puis cliquez sur `Confirm`{.action}.

![WP VPS](images/dns_zone_modify_target.png){.thumbnail}


### Conclusion

Vous venez d'installer votre site web WordPress sur votre VPS OVHcloud, et vous pouvez y accéder depuis un navigateur.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
