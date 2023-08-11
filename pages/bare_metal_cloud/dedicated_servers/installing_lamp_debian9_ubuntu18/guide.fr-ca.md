---
title: 'Tutoriel - Installer un serveur web (LAMP) sur Debian ou Ubuntu'
excerpt: 'Découvrez comment configurer un serveur web LAMP'
updated: 2023-05-10
---

## Objectif 

La mise en place d'un serveur web et des logiciels associés permet à votre serveur cloud d'héberger des pages web ou des applications web dynamiques. L'installation d'une *LAMP stack* constitue une démarche éprouvée pour y parvenir avec les applications open source. LAMP signifie **L**inux (OS), **A**pache (serveur web), **M**ariaDB (système de gestion de base de données) et **P**HP (langage de programmation). 

**Ce tutoriel explique comment installer un serveur web LAMP sur votre service OVHcloud.**

## Prérequis

- Un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/), un [VPS](https://www.ovhcloud.com/fr-ca/vps/) ou une instance [Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud (hors systèmes Windows)
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
- Un accès administratif à votre service via SSH


> [!warning]
> Ce tutoriel vous présente l’utilisation d’une ou de plusieurs solutions OVHcloud avec des outils externes et vous décrit des manipulations réalisées dans un contexte précis. Il vous faudra peut-être adapter les consignes à votre situation.
>
> Nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) ou de vous rapprocher de [notre communauté](https://community.ovh.com/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place de services sur un serveur.
>

## En pratique

Si une distribution Debian ou Ubuntu n'est pas déjà installée sur votre serveur, effectuez d'abord une réinstallation depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). C'est la meilleure façon d'avoir un système propre pour votre serveur web et les applications qui s'y exécutent.

Suivez le guide correspondant pour installer une distribution sur votre service OVHcloud et vous y connecter en [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) :

- [Serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)
- [Instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)


> [!primary]
>
> Les instructions suivantes sont vérifiées pour Debian 11. Ubuntu étant basé sur Debian, ce tutoriel devrait également fonctionner sur une distribution Ubuntu actuelle.


### Étape 1 : mise à jour du système

Une fois connecté à votre serveur via SSH, assurez-vous que tous les paquets sont à jour :

```bash
sudo apt update && sudo apt upgrade -y
```

Vous pouvez maintenant installer les paquets LAMP actuels.

> [!primary]
>
> Comme les progiciels sont régulièrement mis à jour, vous devrez peut-être ajuster les instructions suivantes en fonction des dernières versions.

### Étape 2 : installation d'Apache

Installez les paquets Apache (y compris la documentation) :

```bash
sudo apt install -y apache2 apache2-doc
```

Vous pouvez vérifier l’installation avec la commande suivante :

```bash
sudo systemctl status apache2
```

Vous pouvez également ouvrir `http://server_IP` dans un navigateur Web. La page « Apache2 Debian Default Page » devrait s'afficher.


### Étape 3 : installer le serveur de bases de données et PHP

Installez les paquets de MariaDB et PHP :

```bash
sudo apt install -y php php-pdo php-mysql php-zip php-gd php-mbstring php-curl php-xml php-pear php-bcmath mariadb-server
```

### Étape 4 : configuration du serveur de base de données <a name="sqlconf"></a>

MariaDB fournit un script pour vous aider dans la configuration initiale et pour appliquer certains paramètres liés à la sécurité.

Pour l'exécuter, entrez la commande suivante :

```bash
sudo mysql_secure_installation
```

Confirmez la première invite en appuyant sur `Entrée`{.action}.

Choisissez ensuite une méthode pour sécuriser les accès à votre serveur de bases de données. 

```console
Switch to unix_socket authentication [Y/n]
```

Il est recommandé d'utiliser la méthode d'authentification proposée (*unix_socket*) à la place de l'accès par mot de passe root. Appuyez sur `y`{.action} puis sur `Entrée`{.action}. Si vous décidez d'utiliser l'accès utilisateur root à la place, choisissez `n`{.action}, puis définissez un mot de passe root à l'invite suivante.

Entrez `n`{.action} à l'invite suivante :

```console
Change the root password? [Y/n]
```

Les invites suivantes concernant les mesures de sécurité, confirmez-les toutes avec `y`{.action} jusqu'à la fin du script.

```console
Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```

Si vous avez configuré l'accès MariaDB de la manière recommandée (*unix_socket*), vous disposez désormais d'un accès administrateur automatique (*root*) à celui-ci chaque fois que vous êtes connecté au serveur en tant qu'utilisateur avec des droits élevés (*sudo*).

> [!primary]
>
> Pour préparer une base de données à son utilisation via un logiciel, vous pouvez suivre la section ci-dessous. Vous devrez fournir les identifiants de la base de données (nom de la base de données, utilisateur, mot de passe) lors de l'installation d'une application telle qu'un CMS (comme WordPress, Drupal, etc...). En termes de bonnes pratiques, évitez d'utiliser la même base de données dans différentes applications.
> 
> Pour installer WordPress sur un serveur, vous pouvez suivre [ce tutoriel](/pages/public_cloud/compute/install_wordpress_on_an_instance).

#### Créer votre première base de données et un utilisateur de base de données (facultatif)

Ouvrez le shell MariaDB :

```bash
sudo mariadb
```

```sql
MariaDB [(none)]> 
```

Créez une base de données :

```sql
MariaDB [(none)]> CREATE DATABASE database_name;
```

Créez un « utilisateur » portant le nom de votre choix et accordez-lui tous les droits sur cette base de données. Ce dernier peut alors accéder à la base de données et effectuer toutes les opérations pour l'application utilisant cette base de données. Remplacez `database_name` par le nom de votre base de données, `user_name` par le nom de votre choix et `password` par un mot de passe fort.

```sql
MariaDB [(none)]> GRANT ALL ON database_name.* TO 'user_name'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;
```

Assurez-vous que les modifications apportées sont appliquées et quittez ensuite le shell MariaDB :

```sql
MariaDB [(none)]> FLUSH PRIVILEGES;
```

```sql
MariaDB [(none)]> exit;
```

### Étape 5 : configuration du firewall (facultatif)

[La configuration d’un pare-feu](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable) (*iptables*) permettra d’améliorer la sécurité de votre serveur. Ce processus peut être simplifié en utilisant le frontend « Uncomplicated Firewall » (UFW) et son ensemble de profils prédéfinis. 

Installez UFW :

```bash
sudo apt install ufw
```

Les profils concernés portent la mention « WWW » dans la liste des applications :

```bash
sudo ufw app list | grep WWW
  WWW
  WWW Cache
  WWW Full
  WWW Secure
```

En choisissant « WWW Full », vous autorisez à la fois les connexions sécurisées (port 443) et les requêtes *http* non sécurisées (port 80) vers le serveur web.

Pour voir quels ports sont affectés par un profil particulier, entrez `sudo ufw app info "profile name"`.

En entrant la commande suivante, les ports définis par le profil « WWW Full » seront ouverts :

```bash
sudo ufw allow 'WWW Full'
```

Comme tous les ports non explicitement autorisés seront **bloqués** après l'activation du firewall, assurez-vous d'autoriser également les connexions SSH (port 22 dans une configuration par défaut) :

```bash
sudo ufw allow 'SSH'
```

Enfin, activez les règles de pare-feu et vérifiez la configuration :

```bash
sudo ufw enable
```

```bash
sudo ufw status
```

```console
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
80,443/tcp (WWW Full)      ALLOW IN    Anywhere                  
22/tcp (SSH)               ALLOW IN    Anywhere                  
80,443/tcp (WWW Full (v6)) ALLOW IN    Anywhere (v6)             
22/tcp (SSH (v6))          ALLOW IN    Anywhere (v6)       
```

Vous pouvez aller plus loin avec l’UFW, par exemple si vous souhaitez restreindre les attaques par *déni de service* (DOS) ou empêcher les requêtes par certaines plages d’adresses IP. Reportez-vous à la [documentation officielle de l'UFW](https://help.ubuntu.com/community/UFW).

### Étape 6 : configuration DNS (facultatif)

L'accès à l'installation de votre serveur web via un nom de domaine nécessite de l'attacher à votre service. Pour ce faire, vous devez éditer la zone DNS accessible depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), à condition qu’OVHcloud soit votre bureau d’enregistremente **et** que le nom de domaine utilise les serveurs DNS d’OVHcloud.

Consultez le guide « [Éditer une zone DNS](/pages/web_cloud/domains/dns_zone_edit) » pour en savoir plus. Si le nom de domaine est actuellement utilisé, configurez les DNS uniquement après que votre site web ou votre application soit prêt.

### Étape 7 : activer des connexions sécurisées avec Let’s Encrypt (facultatif)

> [!primary]
>
> Pour établir des connexions sécurisées (`https`), le serveur web doit être sécurisé via une Autorité de Certification officielle comme « [Let’s Encrypt](https://letsencrypt.org/) » qui propose des certificats gratuits. Vous devrez installer un outil client (tel que Certbot) et configurer Apache en conséquence. Sans cette étape, votre site web ou votre application ne peut accepter que des requêtes `http` non chiffrées.
> 
> En alternative, OVHcloud vous propose la solution [SSL Gateway](https://www.ovh.com/ca/fr/ssl-gateway/). Référez-vous à [notre documentation](/pages/web_cloud/ssl_gateway/order-ssl-gateway) pour plus d'informations.
>

Assurez-vous d’abord que votre nom de domaine est correctement renseigné dans la zone DNS, c’est-à-dire mappé sur l’adresse IP de votre serveur.

> [!warning]
> La commande suivante installe une version de Certbot qui fonctionne mais est obsolète (*certbot 1.12.0*). Pour installer la dernière version, vous devez utiliser le gestionnaire de paquets supplémentaire *snappy*. Vous trouverez les instructions d'installation sur le [site de Certbot](https://certbot.eff.org/instructions?ws=apache&os=debianbuster).
>

Installez les paquets requis pour le client Certbot :

```bash
sudo apt install -y certbot python3-certbot-apache
```

Obtenez le certificat de votre nom de domaine et du sous-domaine « www » :

```bash
sudo certbot --apache -d domainname.ovh -d www.domainname.ovh
```

Vous devrez renseigner une adresse e-mail valide et accepter les conditions d'utilisation.

Certbot renouvelle automatiquement les certificats. Aucune autre étape n'est nécessaire. Vous pouvez toutefois consulter les options disponibles pour en savoir plus sur les fonctionnalités de Certbot.

## Aller plus loin

[Documentation UFW](https://help.ubuntu.com/community/UFW)

[Documentation Apache](https://httpd.apache.org/docs/)

[Documentation MariaDB](https://mariadb.com/kb/en/documentation/)

[Documentation Let's Encrypt](https://httpd.apache.org/docs/)

[Documentation Certbot](https://eff-certbot.readthedocs.io/en/stable/)

[Documentation NGINX](https://nginx.org/en/docs/) (alternative Apache)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.