---
title: Installer WordPress sur une instance
excerpt: Découvrez comment utiliser une instance Public Cloud pour héberger des sites WordPress
slug: installer-wordpress-sur-une-instance
section: Tutoriels
updated: 2023-05-17
---

**Dernière mise à jour le 15/10/2021**

## Objectif

WordPress est un système de gestion de contenu (CMS) vous permettant de créer et d’administrer des sites web à des fins multiples, sans avoir besoin de compétences particulières en programmation.

Ce tutoriel fournit les étapes de base pour une installation manuelle de WordPress sur une instance Public Cloud : installer un serveur web, configurer la base de données, télécharger et lancer WordPress.

**Découvrez comment installer WordPress sur une instance Public Cloud.**

## Prérequis

- Un projet [Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud
- Avoir une [instance Public Cloud](https://docs.ovh.com/ca/fr/public-cloud/premiers-pas-instance-public-cloud/) avec Debian ou Ubuntu installé
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- Disposer d’un accès administratif (root) à votre instance via SSH

## En pratique

> [!primary]
>
> Les instructions suivantes sont vérifiées pour Debian 11. Ubuntu est basé sur Debian et le tutoriel devrait donc également fonctionner pour une distribution Ubuntu actuelle.
>

Afin d'accéder à votre installation via un nom de domaine, vous devez relier celui-ci à votre instance. Pour ce faire, vous devez éditer la zone DNS accessible depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), à condition que OVHcloud soit votre bureau d’enregistrement **et** que le nom de domaine utilise les serveurs DNS OVHcloud.

Consultez le guide [Éditer sa zone DNS](https://docs.ovh.com/ca/fr/domains/editer-ma-zone-dns/) pour en savoir plus. Si le nom de domaine est actuellement utilisé, ne configurez les DNS qu'après l'installation du nouveau WordPress et le démarrage de votre site web.

### Étape 1 : installation du serveur web (LAMP)

Afin de pouvoir servir des pages web dynamiques avec WordPress, une *stack* dite *LAMP* sera installée sur l’instance. LAMP désigne **Linux**, **Apache**, **MariaDB** et **PHP**.

Une fois connecté à votre instance via SSH, assurez-vous que tous les paquets sont à jour :

```bash
debian@instance:~$ sudo apt update && sudo apt-get upgrade -y
```

> [!primary]
>
> Etant donné que les paquets logiciel sont régulièrement mis à jour, vous devrez peut-être ajuster les instructions suivantes en fonction des dernières versions.
>

Installez les paquets LAMP :

```bash
debian@instance:~$ sudo apt install apache2 mariadb-server php libapache2-mod-php php-mysql
```

### Étape 2 : configuration du serveur de base de données <a name="sqlconf"></a>

MariaDB fournit un script pour vous aider dans la configuration initiale et pour appliquer certains paramètres liés à la sécurité.

Pour l'exécuter, entrez la commande suivante :

```bash
debian@instance:~$ sudo mysql_secure_installation
```

Confirmez la première invite en appuyant sur `Entrée`{.action}.

Choisissez ensuite une méthode pour sécuriser les accès à votre serveur de bases de données.

```console
Switch to unix_socket authentication [Y/n]
```

Il est recommandé d'utiliser la méthode d'authentification proposée à la place de l'accès par mot de passe root. Appuyez sur `y`{.action} puis sur `Entrée`{.action}. (Si vous décidez d'utiliser l'accès utilisateur root, tapez `n`{.action}, puis définissez un mot de passe root.)

Entrez `n`{.action} à l'invite suivante :

```console
Change the root password? [Y/n]
```

Les invites suivantes concernant les mesures de sécurité, confirmez-les toutes avec `y`{.action} jusqu'à la fin du script.

Si vous avez configuré l'accès MariaDB de la manière recommandée (*unix_socket*), vous disposez désormais d'un accès administrateur automatique (*root*) à celui-ci chaque fois que vous êtes connecté au serveur en tant qu'utilisateur avec des droits élevés (*sudo*).

Ouvrez le shell MariaDB :

```bash
debian@instance:~$ sudo mariadb
```

```sql
MariaDB [(none)]> 
```

Créez la base de données pour WordPress :

```sql
MariaDB [(none)]> CREATE DATABASE wordpress;
```

Ensuite, accordez au nouvel utilisateur "wordpress" tous les droits sur cette base de données. Cet utilisateur va accéder à la base de données et effectuer toutes les opérations pour le CMS WordPress. Remplacez `your_password` par un mot de passe fort pour cet utilisateur.

```sql
MariaDB [(none)]> GRANT ALL ON wordpress.* TO 'wordpress'@'localhost' IDENTIFIED BY 'your_password' WITH GRANT OPTION;
```

> [!primary]
>
> Vous aurez besoin de ces identifiants plus tard lors de l’installation de WordPress.
>

La base de données est maintenant prête à être utilisée avec WordPress. Assurez-vous que les changements sont appliqués pour les prochaines étapes, puis quittez le shell MariaDB :

```sql
MariaDB [(none)]> FLUSH PRIVILEGES;
```

```sql
MariaDB [(none)]> exit;
```

### Étape 3 : configurer le firewall

La configuration d’un pare-feu (*iptables*) permet d’améliorer la sécurité de votre instance WordPress. Ce processus peut être simplifié en utilisant le frontend « Uncomplicated Firewall » (UFW) et son ensemble de profils prédéfinis. Installez UFW :

```bash
debian@instance:~$ sudo apt install ufw
```

Les profils concernés portent la mention « WWW » dans la liste des applications :

```bash
debian@instance:~$ sudo ufw app list | grep WWW
  WWW
  WWW Cache
  WWW Full
  WWW Secure
```

En choisissant « WWW Full », les connexions sécurisées (port 443) et les requêtes http non sécurisées (port 80) au serveur web seront autorisées.

Pour voir quels ports sont affectés par un profil particulier, entrez `sudo ufw app info "profile name"`.

Avec la commande suivante, les ports définis par le profil "WWW Full" seront ouverts :

```bash
debian@instance:~$ sudo ufw allow 'WWW Full'
```

Comme tous les ports non explicitement autorisés seront **bloqués** après l'activation du firewall, assurez-vous d'autoriser également les connexions SSH (port 22 dans une configuration par défaut) :

```bash
debian@instance:~$ sudo ufw allow 'SSH'
```

Enfin, activez les règles de pare-feu et vérifiez la configuration :

```bash
debian@instance:~$ sudo ufw enable
```

```bash
debian@instance:~$ sudo ufw status
```

Vous pouvez aller plus loin avec l’UFW, par exemple si vous souhaitez restreindre les attaques par *déni de service* (DOS) ou empêcher les requêtes par certaines plages d’adresses IP. Reportez-vous à la documentation officielle de l'UFW.

### Étape 4 : installation de WordPress

Rendez-vous sur le [site officiel de WordPress](https://wordpress.org/download/) afin de récupérer **l’URL de téléchargement** de la dernière version (au format « tar.gz ). Téléchargez ensuite le fichier :

```bash
debian@instance:~$ wget https://wordpress.org/latest.tar.gz
```

Décompressez l'archive téléchargée :

```bash
debian@instance:~$ tar zxvf latest.tar.gz
```

Votre serveur Apache doit être prêt à fonctionner à ce stade. Vous pouvez vérifier avec la commande suivante :

```bash
debian@instance:~$ sudo systemctl status apache2
```

Vous pouvez également ouvrir `http://ip_de_votre_instance` dans un navigateur Web. La page « Apache2 Debian Default Page » devrait s'afficher.

Les étapes suivantes installeront WordPress en remplaçant le dossier Apache par défaut pour les pages web.

Au lieu d'utiliser le dossier par défaut, vous pouvez également créer un nouvel *hôte virtuel* pour l'installation de WordPress. Ce dernier est utile pour héberger plusieurs sites web, ce qui n'est pas pertinent pour ce tutoriel.

Supprimez le dossier existant :

```bash
debian@instance:~$ sudo rm -R /var/www/html/
```

Remplacez le dossier du serveur web par défaut par le dossier WordPress :

```bash
debian@instance:~$ sudo mv wordpress /var/www/html
```

Donnez au serveur Web les droits en écriture (`write`) dans le dossier :

```bash
debian@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```

Le serveur web est maintenant prêt pour la configuration initiale de WordPress.

### Étape 5 : configurer WordPress

Ouvrez un navigateur Web et connectez-vous au site WordPress en saisissant l'adresse IP de votre instance (ou le nom de domaine si vous en avez déjà [relié un à l'instance](https://docs.ovh.com/ca/fr/domains/editer-ma-zone-dns/)). Choisissez une langue sur la première page.

Utilisez l’assistant de configuration WordPress pour donner accès à votre base de données. Renseignez les informations que vous avez [configurées précédemment](#sqlconf).

![wordpress](images/wp_install1.png){.thumbnail}

L’étape suivante consiste à préconfigurer les informations générales de votre site, puis à créer votre utilisateur administrateur WordPress.

![wordpress](images/wp_install2.png){.thumbnail}

Une fois validé, vous pourrez vous connecter à l'espace d'administration de votre site avec les identifiants définis à l'étape précédente.

> [!primary]
>
> Pour établir des connexions sécurisées (`https`), le serveur web doit être sécurisé via une Autorité de Certification comme [Let’s Encrypt](https://letsencrypt.org/){.external} qui propose des certificats gratuits. Vous devrez installer un outil client (comme « Certbot ») et configurer Apache. Sans cette étape, votre site ne pourra accepter que des requêtes `http`.
> 
> En alternative, OVHcloud vous propose la solution [SSL Gateway](https://www.ovh.com/ca/fr/ssl-gateway/). Référez-vous à [notre documentation](/pages/web/ssl-gateway/order-ssl-gateway) pour plus d'informations.
>

### Étape 6 (facultatif) : activer des connexions sécurisées avec Let’s Encrypt

Vérifiez en premier lieu que votre nom de domaine dispose des bons enregistrements dans la zone DNS, c'est-à-dire qu'il pointe vers l'adresse IP de votre instance.

> [!warning]
> La commande suivante installe une version de Certbot qui fonctionne mais est obsolète (*certbot 1.12.0*). Pour installer la dernière version, vous devez utiliser le gestionnaire de paquets supplémentaire *snappy*. Vous trouverez les instructions d'installation sur le [site de Certbot](https://certbot.eff.org/instructions?ws=apache&os=debianbuster).
>

Installez les paquers nécessaires pour le client Certbot :

```bash
debian@instance:~$ sudo apt install certbot python3-certbot-apache
```

Obtenez le certificat de votre nom de domaine et du sous-domaine « www » :

```bash
debian@instance:~$ sudo certbot --apache -d domainname.ovh -d www.domainname.ovh
```

Vous devrez renseigner une adresse e-mail valide et accepter les conditions d'utilisation.

Certbot renouvelle automatiquement les certificats. Aucune autre étape n'est requise. Toutefois, vous pouvez consulter les options disponibles pour en savoir plus sur les fonctionnalités de Certbot.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
