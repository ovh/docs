---
title: Installer Wordpress sur une instance
slug: installer-wordpress-sur-une-instance
excerpt: Découvrez comment utiliser une instance Public Cloud pour WordPress
legacy_guide_number: 2060
section: Tutoriels
---

**Dernière mise à jour le 26/07/2021**

## Objectif

WordPress est un système de gestion de contenu (CMS) vous permettant de créer votre site de manière rapide et simple. Celui ci ne nécessite pas de compétences particulières en programmation pour l'administrer.

Ce tutoriel comprend les étapes de base d'une installation entièrement manuelle qui implique la configuration d'un serveur web. Vous pouvez également préconfigurer votre instance pour utiliser WordPress en sélectionnant notre template WordPress (sur CentOS) lors de la création de l'instance.

**Découvrez comment installer Wordpress sur une instance Public Cloud.**

## Prérequis

- Un [projet Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
- Un accès administrateur (root) à votre instance via SSH.

## En pratique

Pour une installation entièrement manuelle, suivez les instructions détaillées ci-dessous. Créez d'abord une instance si nécessaire. Nous vous recommandons de consulter le [guide pour créer une première instance Public Cloud et s'y connecter](../premiers-pas-instance-public-cloud/).

Pour une installation en utilisant le template OVHcloud pour WordPress, suivez le [guide de création d'instance](../premiers-pas-instance-public-cloud/) et choisissez `WordPress`{.action} à l'étape 3 du processus « Sélectionner une image ». <br><br> ![wordpress](images/wp_instance.png){.thumbnail} <br><br>Avec une instance WordPress créée avec succès, le logiciel est déjà installé mais vous devez néanmoins configurer la base de données. Poursuivez alors la lecture de ce guide avec les instructions pour la configuration de [MariaDB](#sqlconf).

### Installer le serveur Web

Dans un premier temps, il faudra procéder à l'installation du serveur Web sur votre instance Public Cloud.

Pour effectuer cela, vous devez vous assurer que votre instance est bien à jour.

- **Pour Debian/Ubuntu**

```bash
admin@instance:~$ sudo apt-get update && sudo apt-get upgrade -y
```

- **Pour Fedora/CentOS**

```bash
[admin@instance ~]$ sudo yum update && sudo yum upgrade
```

Vous pouvez ensuite installer le serveur Web de votre choix. Cet exemple utilise le serveur web Apache avec les éléments suivants :

- PHP
- PHP-MySQL
- Serveur MySQL ou MariaDB

> [!primary]
>
> Comme les paquets logiciels sont régulièrement mis à jour, vous devrez peut-être ajuster les instructions suivantes en fonction des dernières versions.
>

- **Pour Debian/Ubuntu**

```bash
admin@instance:~$ sudo apt-get install apache2 php5 php5-mysql mysql-server -y
```

- **Pour Fedora/CentOS**

```bash
[admin@instance ~]$ sudo yum install httpd php php-mysql mariadb-server -y
```

Un mot de passe vous sera alors demandé pour configurer le compte « root » de la base de données MySQL. Redémarrez le serveur Web pour vous assurer que celui-ci a bien été enregistré.

- **Pour Debian/Ubuntu**

```bash
admin@instance:~$ sudo service apache2 restart
```

- **Pour Fedora/CentOS**

```bash
admin@instance:~$ sudo service httpd restart
```

### Telecharger  Wordpress

Rendez vous sur le site de [Wordpress](https://wordpress.org/download/){.external} afin de récupérer le lien de téléchargement de la dernière version. Téléchargez ensuite le fichier :

```bash
admin@instance:~$ wget https://wordpress.org/latest.tar.gz
```

Décompressez l'archive téléchargée :

```bash
admin@instance:~$ tar zxvf latest.tar.gz
```

Supprimez le dossier par défaut du serveur Web :

```bash
admin@instance:~$ sudo rm -R /var/www/html/
```

Remplacez le dossier du serveur web par défaut par le dossier WordPress :

```bash
admin@instance:~$ sudo mv wordpress /var/www/html
```

Vous pouvez alors accorder au serveur Web des autorisations d'écriture sur le dossier.

- **Pour Debian/Ubuntu**

```bash
admin@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```

- **Pour Fedora/CentOS**

```bash
[admin@serveur-7 ~]$ sudo chown -R apache:apache /var/www/html/
```

### Configuration de MySQL <a name="sqlconf"></a>

Contrairement à MySQL-Server que vous pouvez installer sur Debian/Ubuntu, MariaDB ne configure pas votre mot de passe root lors de l'installation. Il faut donc lancer le serveur MariaDB puis configurer votre mot de passe à l'aide des commandes suivantes :

- Démarrer le serveur de base de données :

```bash
[admin@instance ~]$ sudo systemctl start mariadb.service
```

- Reconfigurer le mot de passe « root » :

```bash
[admin@instance ~]$ sudo /usr/bin/mysql_secure_installation
```

```bash
Set root password? [Y/n] Y
New password:
```

Vous serez également invité à confirmer certaines actions liées à la sécurité, comme la suppression de l'utilisateur anonyme par défaut et la désactivation des connexions root.

Les instructions suivantes sont valables pour MySQL et MariaDB.

Une fois en possession de votre mot de passe « root », vous pouvez vous connecter à votre serveur de bases de données :

```bash
admin@instance:~$ sudo mysql -u root -p
```

Vous pouvez dès lors créer un nouvel utilisateur, définir un mot de passe et créer une base de données dédiée à Wordpress :

- Créer un utilisateur

```sql
mysql> CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'your_password';
```

- Créer une base de données

```sql
mysql> CREATE DATABASE `wordpress`;
```

- Accorder tous les droits à l'utilisateur « wordpress » sur la base de données « wordpress »

```sql
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 'wordpress'@'localhost';
```

- Fermer la CLI de la base de données :

```sql
mysql> exit;
```

### Configurer Wordpress

Une fois la base de données configurée, vous pouvez lancer un navigateur et vous connecter au site WordPress en saisissant l'adresse IP de votre instance (ou le nom de domaine si vous en avez [déjà attaché un à l'instance](../../domains/editer-ma-zone-dns/).

L’assistant de configuration WordPress vous permet de configurer les accès à votre base de données. Entrez les détails que vous avez définis lors des étapes précédentes.

![wordpress](images/wp_install1.png){.thumbnail}

La seconde étape consiste à configurer les informations générales de votre site internet, ainsi que l’utilisateur administrateur WordPress.

![wordpress](images/wp_install2.png){.thumbnail}

Une fois validé, vous pourrez vous connecter à l'espace d'administration de votre site avec l'utilisateur que vous venez de créer.

## Allez plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
