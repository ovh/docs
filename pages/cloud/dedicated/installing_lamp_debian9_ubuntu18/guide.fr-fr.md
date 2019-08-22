---
title: 'Comment installer un serveur LAMP sous Debian 9 et Ubuntu 18'
slug: installer-lamp-debian-ubuntu
excerpt: 'Laissez-vous guider pour installer un serveur LAMP'
section: Tutoriel
---

## Introduction 

L'acronyme LAMP désigne un ensemble de quatre technologies open source : un système d'exploitation Linux, un serveur web Apache, un système de bases de données MySQL et le langage de programmation PHP.

Ces technologies forment une pile (*stack*, en anglais) vous permettant d'héberger vos sites ou applications web dynamiques, comme WordPress ou Drupal. LAMP est aujourd'hui le *stack* le plus utilisé pour héberger un applicatif web.

Dans ce tutoriel, nous allons apprendre à installer et configurer ces quatre briques, installer phpMyAdmin pour l'administration graphique de la base de données MySQL et tester le serveur LAMP avec le système de gestion de contenu (Content Management System ou CMS) WordPress. 


## Prérequis

### Ce que vous devez savoir

- Avoir des notions d’administration Linux.
- Se connecter en SSH. 
- Éditer un fichier texte en ligne de commande (Vim, nano, Emacs par exemple).
- Installer une distribution Linux (nous utilisons ici Debian 9.4, mais les étapes du tutoriel sont identiques sous Ubuntu 18.04).

### Ce que vous devez avoir

- Un serveur ou une machine virtuelle sous Linux (un [VPS](https://www.ovh.com/fr/vps/){.external}, un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external} ou une [instance Public Cloud OVH](https://www.ovh.com/fr/public_cloud/){.external}).
- Les droits administrateur sur ce serveur (être « root »).

> [!warning]
>
> OVH met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>


## En pratique

### Étape 1 : mettez votre système à jour

Sur une distribution Debian ou Ubuntu récente, nous vous conseillons de réinstaller totalement votre serveur si cela est possible sur votre machine. Attention, cette action **effacera totalement vos données**.

Connectez-vous en SSH en tant qu'administrateur « root ». N'hésitez pas à vous reporter au [guide SSH](https://docs.ovh.com/fr/dedicated/ssh-introduction/){.external}.

Une fois le système installé, il convient de le mettre à jour : 

```sh
apt-get update && apt-get upgrade -y
```

Vous partez ainsi sur une base saine et totalement à jour.


### Étape 2 : créez un nouvel utilisateur avec les privilèges « sudo »

Pour des raisons de sécurité et pour suivre les bonnes pratiques, il est préférable d'installer et gérer un serveur LAMP avec un utilisateur séparé, ne possédant pas les privilèges « root ». Si vous disposez déjà d'un utilisateur avec les privilèges « sudo », sans pour autant être « root », vous pouvez vous rendre directement à la deuxième étape. Ce type de fonctionnement est déjà en vigueur pour les dernières versions d'Ubuntu.

Dans le cas où vous ne possédez que l'utilisateur « root », il convient de créer un nouvel utilisateur :

```sh
adduser mynewuser
```

Diverses informations seront obligatoires, comme un mot de passe. D'autres seront optionnelles : le nom ou le numéro de téléphone, par exemple.

Il faut ensuite rajouter cet utilisateur au groupe « sudo » :
```sh
usermod -aG sudo mynewuser
```

Et enfin, connectez-vous sur ce nouveau compte utilisateur :

```sh
su - mynewuser
```


### Étape 3 : installation du serveur web Apache 2

La première brique du *stack* LAMP, le système d'exploitation Linux, a été installée lors des étapes précédentes. 

Nous allons installer ici la deuxième brique, le serveur web Apache 2, ainsi que sa documentation :

```sh
sudo apt-get install apache2 apache2-doc
```

Si l'installation s'est effectuée correctement, vous devriez pouvoir accéder à la page par défaut d'Apache en joignant l'adresse IP (ou le nom du service) de votre serveur dans le navigateur, comme suit : [http://IP_du_serveur](#).
N'essayez pas de vous connecter en HTTPS, car à ce stade aucun certificat SSL n'est encore installé.

![Installation d'Apache](images/tuto_apache.png){.thumbnail}

Cette page est très instructive, et vous donnera un aperçu des fichiers de configuration d'Apache 2 et leur spécificités. N'hésitez pas à la parcourir.


Il est possible de vérifier que le service Apache fonctionne correctement en utilisant la commande suivante :

```sh
sudo service apache2 status
```
La mention `active (running)` doit apparaître.

La procédure Apache peut se gérer comme suit : 
```sh
service apache2 start => permet de démarrer le service
service apache2 stop => permet d’arrêter le service
service apache2 restart => permet de relancer ou recharger le service
```


### Étape 4 : installez PHP

Nous passons ensuite à l'installation de la troisième brique, le langage de programmation PHP.

Pour installer le paquet PHP, tapez cette commande :

```sh
sudo apt-get install php5-common libapache2-mod-php5 php5-cli
```

Pour tester l'installation, dans le répertoire `/var/www/html`, créez le fichier `info.php` avec le contenu suivant :

```sh
cd /var/www/html
sudo nano info.php
```

Insérez dedans :

```php
<?php
phpinfo();
?>
```

Accédez ensuite au fichier via le navigateur : [http://IP_du_serveur/info.php](#).

Vous devriez pouvoir visualiser une page détaillant toutes les spécificités de votre environnement PHP (version 7.0.30 dans notre cas) :

![](tuto_php.png)
![Installation de PHP](images/tuto_php.png){.thumbnail}

Une fois visualisé, nous vous recommandons vivement de **supprimer le fichier `index.php`**. En effet, il n'est jamais conseillé de donner publiquement des informations sur votre configuration.


> [!primary]
>
> Par défaut, le serveur web Apache ne priorise pas les fichiers PHP par rapport aux fichiers HTML.
> Ici, dans le dossier racine, nous disposons de `index.html` et de `index.php`. Si vous retournez dans votre navigateur web, sur [http://IP_du_serveur](#), Apache vous renverra la page `index.html` et non pas `index.php`. 
> Cette priorisation n'a pas d'impact sur la majeure partie des CMS comme WordPress ou Drupal. Ces règles peuvent toutefois être modifiées si besoin.
>



### Étape 5 : installez le système de base de données MySQL/MariaDB

Nous arrivons à la quatrième et dernière brique du *stack* LAMP, le système de bases de données.

> [!primary]
>
> Depuis le rachat de MySQL par Oracle, le fondateur de MySQL a créé en 2009 un dérivé (*fork* en anglais) plus communautaire et plus ouvert, appelé MariaDB en hommage à sa deuxième fille.
> 100 % des commandes MySQL sont compatibles avec MariaDB, tout comme vos applicatifs web préférés.
> La distribution Linux Debian propose MariaDB par défaut. Si vous utilisez ce système d'exploitation, vous pourrez lire « MariaDB » dans votre terminal lors de cette étape.
>


Voici la commande à utiliser (votre mot de passe de compte utilisateur Linux vous sera demandé) :

```sh
sudo apt-get install mysql-server
```

Par défaut, le mot de passe administrateur MySQL/MariaDB sera le même que celui de votre utilisateur système. Pour personnaliser la sécurisation de votre base de données, voici la commande à effectuer :

```sh
mysql_secure_installation
```

Entrez votre mot de passe « root », puis changez le mot de passe :

```sh
Change the root password? [Y/n] => y
New password:
```

Désactivez ensuite les connexions anonymes :

```sh
Remove anonymous users? [Y/n] => y
```

Désactivez la connexion en « root » depuis une connexion distante :

```sh
Disallow root login remotely? [Y/n] => y
```

Il faut maintenant effacer la base de données de test créée par défaut :

```sh
Remove test database and access to it? [Y/n] => y
```

Il reste à charger les nouveaux paramètres :

```sh
Reload privilege tables now? [Y/n] => y
```

Pour tester l’accès à votre base de données, voici la commande à utiliser dans votre terminal :

```sh
mysql -u root -p

MariaDB [(none)]> show databases;
MariaDB [(none)]> exit
```

Nous vous conseillons de créer un utilisateur spécifique et dédié à votre applicatif web. Si besoin, référez-vous à la documentation officielle [MySQL](https://dev.mysql.com/doc/refman/8.0/en/user-account-management.html){.external} ou [MariaDB](https://mariadb.com/kb/en/library/user-account-management/){.external}.



### Étape 6 : installez phpMyAdmin (optionnel)

L'installation du serveur LAMP est terminée ! Cette étape est optionnelle.
L'interface open source phpMyAdmin va vous permettre de gérer plus facilement vos bases de données via une interface web.

Pour l'installer voici la commande à entrer :

```sh
sudo apt-get install phpmyadmin
```

Dans les choix proposés, sélectionnez un serveur web à reconfigurer automatiquement pour exécuter `phpMyAdmin` :

- cochez `()apache2`{.action}, puis `Entrée`{.action} ;
- acceptez l'aide à la configuration, puis rentrez un mot de passe administrateur MySQL.

Afin d’accéder à l'interface de gestion de `phpMyAdmin`, vous devrez finaliser la configuration votre serveur Apache. Pour cela, éditez le fichier de configuration Apache :

```sh
sudo nano /etc/apache2/apache2.conf
```

À la fin du fichier, rajoutez :

```sh
# Include phpMyAdmin
Include /etc/phpmyadmin/apache.conf
```

Le service Apache doit ensuite être relancé grâce à cette commande :

```sh
sudo service apache2 restart
```

Afin de vous connecter, vous devrez au préalable créer un utilisateur possédant les droits administrateur pour `phpMyAdmin` :

```sh
mysql -u root -p
[mot de passe]
MariaDB [(none)]> CREATE USER 'my_user'@'localhost' IDENTIFIED BY 'my_password';
MariaDB [(none)]> GRANT ALL PRIVILEGES ON * . * TO 'my_user'@'localhost';
MariaDB [(none)]> FLUSH PRIVILEGES;
```

Accédez ensuite à l'interface via [http://IP_du_serveur/phpmyadmin/](#) :

![](tuto_pma.png)
![Installation de PMA](images/tuto_pma.png){.thumbnail}

### Étape 7 : installez WordPress (optionnel)

Cette partie est elle aussi optionnelle. Voici brièvement les étapes pour installer ce CMS :

Téléchargez, décompressez et copiez le contenu dans un nouveau dossier appelé `mywebsite`:

```sh
wget https://wordpress.org/latest.tar.gz
tar xpf latest.tar.gz
sudo cp -r wordpress /var/www/html/mywebsite
```

Ce dossier contenant WordPress est maintenant accessible sur [http://IP_du_serveur/mywebsite/](#).

Créez une base nommée `wordpress` en ligne de commande ou via `phpMyAdmin`.

Votre écran de configuration doit ressembler à celui ci-dessous :

![](tuto_wp.png)
![Installation de Wordpress](images/tuto_wp.png){.thumbnail}

Si vous avez un avertissement au niveau de la création du fichier `wp-config.php`, éditez les droits en exécution, lecture, écriture en fonction de vos besoins (communément appelés `CHMOD`).


## Conclusion

Voilà, le CMS WordPress est installé et est propulsé par votre stack LAMP installé dans ce tutoriel !

Nous venons d'installer un serveur LAMP en partant de zéro, vous permettant ainsi d'héberger vous-même vos sites et applications web. En réalisant cette installation par vos propres moyens, vous gardez une liberté de configuration totale. N'hésitez pas à lire la documentation officielle d'Apache pour en découvrir toutes les possibilités.

Si vous désirez aller plus loin ou que vous êtes curieux, sachez qu'il existe des alternatives à Apache : la plus connue au succès grandissant étant NGNIX (prononcez « engine-x »). 
Un *stack* incluant NGINX est appelé LEMP, et est souvent réputé pour être plus léger. Nous vous conseillons enfin de sécuriser votre site avec un certificat SSL.
