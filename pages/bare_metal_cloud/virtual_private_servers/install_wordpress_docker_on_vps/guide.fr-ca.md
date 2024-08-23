---
title: 'Installer WordPress avec Docker sur un VPS ou un serveur dédié'
excerpt: 'Découvrez comment installer WordPress rapidement avec Docker sur un VPS ou un serveur dédié OVHcloud'
updated: 2024-03-13
---

## Objectif

Installer WordPress sur un VPS ou un serveur dédié présente plusieurs avantages, comme la personnalisation complète de l'environnement, une optimisation des performances et un renforcement de la sécurité. Il existe plusieurs façons d'installer WordPress sur un VPS ou un serveur dédié, selon votre niveau technique et le temps que vous souhaitez y consacrer. L'une des manières les plus efficaces et rapides est d'utiliser Docker. Docker facilite le déploiement d'applications en les « conteneurisant », ce qui rend l'installation de WordPress rapide, facile, et reproductible, quel que soit l'environnement.

**Découvrez comment installer WordPress manuellement avec Docker sur un VPS ou un Serveur Dédié OVHcloud.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce tutoriel afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](#gofurther) de ce tutoriel.
>

## Prérequis

- Disposer d'une offre [VPS](https://www.ovhcloud.com/fr-ca/vps/) ou d'un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/) dans votre [espace client OVHcloud](/links/manager)
- Disposer d'un accès administrateur (sudo) via SSH à votre serveur
- Disposer d'un nom de domaine (enregistré chez OVHcloud ou auprès d'un autre bureau d'enregistrements)

## En pratique

> [!primary]
>
> Le VPS utilisé pour ce guide possède une distribution Debian en version 11 (Bullseye). Pour plus d'informations, consultez le [site officiel de Docker](https://docs.docker.com/get-docker/).
>

### Installer Docker

Mettez à jour le gestionnaire de paquets :

```sh
~$ sudo apt update
```

Installez les paquets requis pour permettre à `apt` d'utiliser un dépôt sur HTTPS :

```sh
~$ sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

Ajoutez la clé GPG officielle de Docker :

```sh
~$ curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

Ajoutez le dépôt Docker à votre système :

```sh
~$ echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian bullseye stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Mettez à jour l'index des paquets `apt` et installez Docker Engine :

```sh
~$ sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io -y
```

Vérifiez que Docker est bien installé et configuré :

```sh
~$ docker –version
```

Testez Docker avec une commande simple :

```sh
~$ sudo docker run hello-world
```

Si l'installation de Docker s'est bien déroulée, vous obtenez un message de ce type :

![WP Docker VPS](images/result_docker_hello_world.png){.thumbnail}

### Installer Docker Compose

Téléchargez la dernière version de Docker Compose (remplacez 1.29.2 par la dernière version disponible) :

```sh
~$ sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Rendez le binaire exécutable :

```sh
~$ sudo chmod +x /usr/local/bin/docker-compose
```

Vérifiez l'installation de Docker Compose :

```sh
~$ docker-compose –version
```

Si l'installation de Docker Compose s'est bien déroulée, vous obtenez un message de ce type :

![WP Docker VPS](images/result_docker_compose.png){.thumbnail}

### Déployer WordPress avec Docker Compose

Créez un dossier pour votre projet WordPress et naviguez dans ce répertoire :

```sh
~$ mkdir wordpress-docker && cd wordpress-docker
```

Créez un fichier `docker-compose.yml` avec votre éditeur de texte préféré :

```sh
~$ nano docker-compose.yml
```

Copiez et collez la configuration suivante dans le fichier `docker-compose.yml` :

```sh
version: '3.8'

services:
  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: wordpress
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - "8000:80"
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
    volumes:
      - wordpress_data:/var/www/html

volumes:
  db_data: {}
  wordpress_data: {}
```

Ce fichier Compose crée un service WordPress et un service MySQL. 

Lancez les services avec Docker Compose :

```sh
~$ sudo docker-compose up -d
```

L'image Docker utilisée dans cet exemple est la version officielle `wordpress:latest`. Cette image spécifique est conçue pour fonctionner avec un serveur web Apache. Les images officielles de WordPress sur [Docker Hub](https://hub.docker.com/) sont régulièrement mises à jour pour inclure les dernières versions stables de PHP compatibles avec la version actuelle de WordPress.

Pour connaître la version exacte de PHP incluse dans l'image `wordpress:latest` à un instant précis, vous pouvez exécuter un conteneur basé sur cette image et vérifier la version de PHP directement.

Lancez un conteneur temporaire avec l'image `wordpress:latest` :

```sh
~$ docker run --rm wordpress:latest php -v
```

Cette commande vous donne une réponse comme celle-ci :

```sh
~$ PHP 8.2.16 (cli) (built: Feb 16 2024 21:54:41) (NTS)
```

Pour rappel, les images Docker sont mises à jour régulièrement. La version des composants dans `wordpress:latest` peut donc changer au fil du temps, à mesure que de nouvelles versions sont publiées et intégrées dans l'image. 

Si vous le souhaitez, vous pouvez utiliser une autre image Docker.

### Utiliser une image Docker spécifique

Dirigez-vous dans la [section WordPress de Docker Hub](https://hub.docker.com/_/wordpress) et identifiez l'image qui correspond à vos besoins. Par exemple, si vous choisissez d'utiliser l'image `wordpress:5-php7.4-fpm`, vous devrez modifier votre fichier `docker-compose.yml` avec un éditeur de texte. Une fois le fichier ouvert, trouvez la section du service `wordpress` et modifiez la ligne `image:` pour utiliser le tag spécifique de l'image `wordpress:5-php7.4-fpm` que vous avez choisi. Par exemple :

```sh
version: '3.8'

services:
  wordpress:
    image: wordpress:5-php7.4-fpm
    container_name: wordpress
...
```

#### Appliquer les modifications

Lancez ou mettez à jour vos conteneurs avec Docker Compose. Si c'est la première fois que vous lancez le projet, utilisez :

```sh
~$ docker-compose up -d
```

Si vos conteneurs sont déjà en cours d'exécution et que vous souhaitez appliquer les modifications, utilisez :

```sh
~$ docker-compose up -d --force-recreate
```

Vérifiez que tout fonctionne comme prévu. Vous pouvez vérifier les logs de votre conteneur WordPress pour vous assurer qu'il démarre correctement et qu'il n'y a pas d'erreurs :

```sh
~$ docker logs wordpress
```

### Accéder à WordPress

Vous pouvez maintenant accéder à WordPress depuis un navigateur. Deux possibilités s'offrent à vous :

- Via l'adresse IP de votre VPS : `<VPS_IP_ADDRESS>:8000`
- Via le nom de domaine de votre site web : `<DOMAIN_NAME>:8000`

#### Relier le nom de domaine à l'adresse IP du VPS ou du serveur dédié

Pour pouvoir accéder à votre site web depuis un navigateur, liez d'abord le nom de domaine de votre site web WordPress à l'adresse IP de votre VPS. Rendez-vous dans votre [espace client OVHcloud](/links/manager). 

Dans le menu de gauche, cliquez sur `Noms de domaine`{.action} puis sélectionnez le nom de domaine que vous avez choisi pour votre site WordPress.

Cliquez sur l'onglet `Zone DNS`{.action}. Dans le tableau qui s'affiche, identifiez la ligne ayant pour type la valeur `A`, cliquez sur le bouton `…`{.action} et sélectionnez `Modifier l'entrée`{.action}.

![WP Docker VPS](images/dns_zone_line_cta.png){.thumbnail}

Dans la fenêtre qui s'affiche, entrez l'adresse IP de votre VPS ou du serveur dédié dans le champ `Cible`{.action} puis cliquez sur `Suivant`{.action}. Vérifiez que les informations indiquées sont correctes puis cliquez sur `Valider`{.action}.

![WP Docker VPS](images/dns_zone_modify_target.png){.thumbnail}

#### Initialiser votre site WordPress

Lors de votre première connexion, votre navigateur doit vous rediriger vers `<VPS_IP_ADDRESS>:8000/wp-admin/install.php` (ou `<DOMAIN_NAME>:8000/wp-admin/install.php` si vous passez par le nom de domaine). Cela signifie que WordPress est prêt pour la phase de configuration initiale. Cette page est le point de départ de la configuration de votre site WordPress, où vous devez définir les éléments clés tels que :

- La langue
- Le titre de votre site web
- Le nom d'utilisateur pour l'administration du site
- Un mot de passe associé
- Une adresse email
- Etc.

#### Terminer l'installation de votre site WordPress

Une fois toutes les informations nécessaires remplies et le formulaire soumis, WordPress finalisera l'installation. Vous serez ensuite redirigé vers l'écran de connexion (wp-login.php) où vous pourrez vous connecter avec le nom d'utilisateur et le mot de passe que vous venez de créer.

![WP Docker VPS](images/wp_login.png){.thumbnail}

### Conclusion

Vous venez d'installer WordPress sur votre VPS ou votre serveur dédié OVHcloud avec une image Docker. Vous pouvez désormais accéder à votre site web WordPress depuis un navigateur.

Pour obtenir quelques conseils généraux pour sécuriser un serveur basé sur GNU/Linux, consultez nos guides :

- [Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)
- [Sécuriser un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

## Aller plus loin <a name="go-further"></a>

[Installer un environnement de développement web sur un VPS ou un serveur dédié](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps)

[Installer WordPress avec WP-CLI sur un VPS ou un serveur dédié](/pages/bare_metal_cloud/virtual_private_servers/install_wordpress_site_on_vps)

[Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Sécuriser un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr-ca/directory/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.