---
title: 'Installer un environnement de développement web sur un VPS'
excerpt: 'Découvrez comment installer un environnement de développement web sur un VPS ou un Serveur Dédié OVHcloud'
updated: 2024-03-04
---

## Objectif

Si vous souhaitez créer un site web sur votre VPS OVHcloud, vous devez au préalable installer un environnement de développement web sur un VPS. Les principaux composants à installer sont :

- **PHP** : PHP est l'un des languages les plus utilisés pour créer des sites web. Il est nécessaire d'installer PHP pour que votre site web puisse exécuter des scripts et des fonctionnalités dynamiques. Installez préférablement la version de PHP la plus récente.
- **Serveur Web** : Le serveur web est essentiel pour servir les pages de votre site web. Les serveurs web les plus populaires incluent Apache et Nginx, chacun ayant ses propres avantages en termes de flexibilité, de performance, et de facilité de configuration.
- **SGBD** : Pour stocker, gérer, et récupérer vos données de manière efficace, vous aurez besoin d'un SGBD (**S**ystème de **G**estion de **B**ase de **D**onnées). MySQL, PostgreSQL ou encore MariaDB sont les SGBD les plus utilisées dans le développement web.

**Ce guide décrit comment installer manuellement un environnement de développement web sur un VPS ou un Serveur Dédié OVHcloud.**

## Prérequis

- Disposer d'un [VPS](https://www.ovhcloud.com/fr/vps/) ou d'un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/) dans votre compte OVHcloud
- Disposer d'un accès administrateur (sudo) via SSH à votre serveur

## En pratique

Connectez-vous en SSH à votre VPS à l'aide de votre nom d'utilisateur et de votre mot de passe.

### Installer PHP

Installez PHP et les extensions nécessaires pour WordPress :

```sh
~$ sudo apt install php php-cli php-mysql php-xml php-gd php-curl -y
```

Pour vérifier que PHP est bien installé :

```sh
~$ sudo php -v
```

Si PHP est bien installé, un message de ce type doit apparaître :

![env dev web](images/result_php_v.png){.thumbnail}

### Installer un serveur web

> [!primary]
>
> Pour ce guide nous choisissons Nginx, mais vous êtes libre d'installer le serveur web de votre choix.
>

Installez Nginx :

```sh
~$ sudo apt install nginx -y
```

Pour vérifier que Nginx est bien installé :

```sh
~$ sudo nginx -v
```

Si Nginx est bien installé, un message de ce type doit apparaître :

![env dev web](images/result_nginx_v.png){.thumbnail}

N'hésitez pas à consulter le [site officiel de Nginx](https://www.nginx.com/) si vous avez des questions.

### Installer un SGBD (**S**ystème de **G**estion de **B**ase de **D**onnées)

> [!primary]
>
> Pour ce guide nous choisissons MariaDB, mais vous êtes libre d'installer le SGBD de votre choix.
>

Installez MariaDB :

```sh
~$ sudo apt install mariadb-server -y
```

Sécurisez et configurez MariaDB :

```sh
~$ sudo mysql_secure_installation
```

Définissez un mot de passe pour votre SGBD et suivez les instructions à l'écran. Une fois terminé, le message suivant doit s'afficher :

![env dev web](images/success_msg_mariadb.png){.thumbnail}

### Conclusion

Vous possédez désormais un environnement de développement web fonctionnel sur votre VPS OVHcloud. Si vous le souhaitez, vous pouvez maintenant [créer un site WordPress sur votre VPS]().

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
