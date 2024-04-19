---
title: 'Installer WordPress avec WP-CLI sur un VPS ou un serveur dédié'
excerpt: 'Découvrez comment installer WordPress avec WP-CLI sur un VPS ou un serveur dédié OVHcloud'
updated: 2024-03-13
---

## Objectif

Installer WordPress sur un VPS ou un serveur dédié présente plusieurs avantages, comme la personnalisation complète de l'environnement, une optimisation des performances et un renforcement de la sécurité. Que vous soyez un développeur expérimenté ou un débutant souhaitant lancer votre premier site web, ce guide vous explique pas à pas comment installer WordPress sur un VPS OVHcloud avec WP-CLI. WP-CLI est une interface en ligne de commande permettant l'installation manuelle de WordPress sur votre VPS OVHcloud.

**Découvrez comment installer WordPress avec WP-CLI sur un VPS ou un serveur dédié OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#gofurther) de ce tutoriel.
>

## Prérequis

- Disposer d'une offre [VPS](https://www.ovhcloud.com/fr-ca/vps/) ou d'un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/) dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- Disposer d'un accès administrateur (sudo) via SSH à votre serveur
- Avoir [configuré un environnement de développement web sur votre VPS ou votre serveur dédié](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps)
- Disposer d'un nom de domaine (enregistré chez OVHcloud ou auprès d'un autre bureau d'enregistrements)

## En pratique

> [!primary]
>
> Comme précisé dans les [prérequis](#prérequis), nous partons du principe que vous possédez déjà un [environnement de développement web configuré sur votre VPS ou votre serveur dédié](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps). Pour ce guide, les composants suivants sont déjà installés sur le VPS :
>
> - PHP (version 8.2.7)
> - Le serveur web Nginx
> - Le SGBD MariaDB
>

Connectez-vous en SSH à votre VPS à l'aide de votre nom d'utilisateur et de votre mot de passe.

### Installer WP-CLI

Téléchargez WP-CLI en utilisant `curl` ou `wget` :

```sh
~$ curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
```

Rendez le fichier téléchargé exécutable :

```sh
~$ sudo chmod +x wp-cli.phar
```

Déplacez le fichier exécutable pour l'utiliser comme commande 'wp' :

```sh
~$ sudo mv wp-cli.phar /usr/local/bin/wp
```

Testez l'installation de WP-CLI en exécutant la commande :

```sh
~$ wp –info
```

Si WP-CLI s'est bien installé, un message de ce type apparaît :

![WP VPS](images/result_wp_info.png){.thumbnail}

### Installer WordPress avec WP-CLI

#### Créer la base de données WordPress

Connectez-vous à MariaDB :

```sh
~$ sudo mysql -u root -p
```

Créez la base de données pour votre site web WordPress :

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

Téléchargez WordPress grâce à WP-CLI :

```sh
~$ wp core download --locale=fr_FR
```

Il est possible que l'erreur suivante survienne :

```sh
~$ Error: '/var/www/html/' is not writable by current user.
```

Cela signifie que votre utilisateur (celui de votre VPS OVHcloud) n'a pas la permission pour écrire dans le répertoire `/var/www/html`. Une manière simple et sécurisée de résoudre ce problème est de changer le propriétaire du répertoire `/var/www/html` pour le faire correspondre à votre utilisateur.

Pour accorder les droits, entrez la commande suivante :

```sh
~$ sudo chown -R your_user:your_group /var/www/html/
```

Remplacez `your_user` et `your_group` par votre nom d'utilisateur et groupe d'utilisateurs actuels. Sur de nombreux systèmes Linux, le groupe d'utilisateurs par défaut pour un utilisateur est le même que le nom d'utilisateur. Vous pouvez trouver votre nom d'utilisateur avec la commande `whoami` et votre groupe avec `groups`.

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

Remplacez wordpress_db, wordpress_user et strong_password par les valeurs que vous avez précédemment définies.

Si tout s'est bien déroulé, le message suivant doit apparaître :

![WP VPS](images/result_wp_config.png){.thumbnail}

Lancez l'installation de WordPress :

```sh
~$ wp core install --url=your_domain.com --title="Your website title" --admin_user="admin" --admin_password="another_strong_password" --admin_email="your_email@example.com"
```

Si l'installation de WordPress s'est bien déroulée, le message suivant doit s'afficher :

![WP VPS](images/result_wp_installed.png){.thumbnail}

### Configurer Nginx

#### Créer un fichier de configuration pour votre site web

Naviguez vers le répertoire des sites disponibles de Nginx :

```sh
~$ cd /etc/nginx/sites-available/
```

Créez un nouveau fichier de configuration pour votre site web WordPress. Celui-ci doit porter le nom de votre domaine :

```sh
~$ sudo nano your_domain.com
```

Dans le fichier que vous venez de créer, ajoutez la configuration suivante (cette configuration est un exemple de base pour un site WordPress) :

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
par la ligne :

```sh
fastcgi_pass unix:/var/run/php/php<your_php_version>-fpm.sock;
```

Pour que Nginx charge la configuration de votre site web, créez un lien symbolique de votre fichier de configuration dans le répertoire `/etc/nginx/sites-available/` :

```sh
~$ sudo ln -s /etc/nginx/sites-available/your_domain.com /etc/nginx/sites-enabled/
```

#### Tester la configuration Nginx

Avant de redémarrer Nginx pour appliquer les modifications, il est primordial de tester votre configuration pour s'assurer qu'il n'y a pas d'erreurs :

```sh
~$ sudo nginx -t
```

Si aucune erreur n'a été détectée, le message suivant s'affiche :

![WP VPS](images/result_nginx_t.png){.thumbnail}

#### Redémarrer Nginx

Une fois la configuration testée et validée, redémarrez Nginx pour appliquer les changements :

```sh
~$ systemctl restart nginx
```

### Accéder à votre site web

#### Relier le nom de domaine à l'adresse IP du VPS ou du serveur dédié

Pour accéder à votre site web depuis un navigateur, liez d'abord le nom de domaine de votre site web WordPress à l'adresse IP de votre VPS ou de votre serveur dédié.

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), puis rendez-vous dans la partie `Web Cloud`{.action}.

Dans le menu de gauche, cliquez sur `Noms de domaines`{.action} puis sélectionnez le nom de domaine que vous avez choisi pour votre site WordPress. 

Cliquez sur l'onglet `Zone DNS`{.action} puis, dans le tableau qui s'affiche, identifiez la ligne ayant pour type la valeur `A`. Cliquez sur le bouton `…`{.action} et sélectionnez `Modifier l'entrée`{.action}.

![WP VPS](images/dns_zone_line_cta.png){.thumbnail}

Dans la fenêtre qui s'affiche, entrez l'adresse IP de votre VPS ou de votre serveur dédié dans le champ `Cible`{.action} puis cliquez sur `Suivant`{.action}. Vérifiez que les informations indiquées sont correctes puis cliquez sur `Valider`{.action}.

![WP VPS](images/dns_zone_modify_target.png){.thumbnail}

### Conclusion

Vous venez d'installer WordPress sur votre VPS OVHcloud ou votre Serveur Dédié avec WP-CLI. Vous pouvez désormais accéder à votre site web WordPress depuis un navigateur.

## Aller plus loin <a name="go-further"></a>

[Installer un environnement de développement web sur un VPS OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps)

[Installer WordPress avec Docker sur un VPS OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/install_wordpress_docker_on_vps)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr-ca/directory/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.