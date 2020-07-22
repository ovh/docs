---
title: 'Comment installer ownCloud sur une instance de Public Cloud?'
slug: intaller-owncloud-sur-public-cloud-ubuntu-1804
excerpt: 'Ce tutoriel vous montrera comment installer ownCloud sur une Instance de Public Cloud exécutant Ubuntu 18.04'
section: Tutoriels
---

**Dernière mise à jour le 6 mai 2019**

- Niveau : Intermédiaire
- Système d’exploitation utilisé : Ubuntu 18.04
- Infrastructure utilisée : B2-15 [Instance Public Cloud](https://www.ovh.com/ca/fr/public-cloud/instances/){.external}
- Information supplémentaire : Si vous avez des besoins de stockage intensifs, il est recommandé d'utiliser un disque ou un objet de stockage supplémentaire de haute performance.

> [!warning]
>
> Même si OVH vous fournit les appareils, la responsabilité de leur sécurité repose uniquement entre vos mains. Comme nous n'avons pas accès à ces machines, nous ne sommes pas leurs administrateurs. Il est de votre responsabilité de gérer le logiciel et d'appliquer régulièrement des mesures de sécurité appropriées.
>
> Ce tutoriel est conçu pour vous aider avec les tâches les plus communes. Néanmoins, nous vous recommandons de contacter un prestataire de services spécialisé si vous avez des difficultés ou des doutes concernant l'administration, l'utilisation ou la mise en œuvre de mesures de sécurité sur un serveur.
>

## Objectif

ownCloud est une application de stockage et de gestion de fichiers en ligne. Cette solution offre plusieurs fonctionnalités, dont la synchronisation entre plusieurs appareils. Vous pouvez également ajouter du stockage externe, tel que OpenStack Object Storage.

Dans ce tutoriel, nous allons installer ownCloud sur une nouvelle installation d'Ubuntu 18.04 sur une Instance de Cloud Public, et ensuite le configurer. Pour aller plus loin, nous allons également explorer la possibilité d'attacher du stockage externe, tel que OpenStack Object Storage, à ownCloud.


## Avant de commencer

Avant de suivre ce tutoriel, veuillez vous référer à ces guides :

* [Guide pour la création d'une Instance de Public Cloud](../creer-instance-espace-client/)
* [Guide de création du stockage d'objets sur la plate-forme de Public Cloud](../storage/pcs/create-container/)
* [Guide de création et de configuration d'un disque supplémentaire sur une Instance de Public Cloud ](../configurer-un-volume-additionnel/)


## Prérequis

- Avoir une [instance de Public Cloud](https://www.ovh.com/ca/fr/public-cloud/instances/tarifs/){.external} dans [l’espace client d’OVH](https://ca.ovh.com/auth/?action=gotomanager){.external} avec Ubuntu 18.04 installé
- Accès root SSH sur l'Instance
- [ Stockage d'objets](https://www.ovh.com/ca/fr/public-cloud/storage/object-storage/){.external} dans le même datacenter que votre Public Cloud Instance (facultatif)
- [Disque supplémentaire de haute performance](https://www.ovh.com/ca/fr/public-cloud/storage/additional-disks/){.external} dans le même datacenter que votre instance de Public Cloud (en option)


## Instructions
Dans cette section, vous trouverez des instructions étape par étape pour installer ownCloud sur votre Instance de Public Cloud d’OVH.

### Mettre à jour votre système
Les développeurs de systèmes de distribution et d'exploitation offrent fréquemment des mises à jour de logiciels, très souvent pour des raisons de sécurité. Garder votre distribution ou votre système d'exploitation à jour est un aspect clé de la sécurisation de votre serveur.

C'est un processus en deux parties, qui implique la mise à jour de la liste des paquets (la liste des applications logicielles installées) et la mise à jour des paquets eux-mêmes en utilisant le code ci-dessous:

```sh
apt-get update && apt-get upgrade -y
```

### Installer les paquets requis et télécharger ownCloud
Avant de pouvoir installer ownCloud, nous devons installer certains services dont il a besoin pour fonctionner, notamment Apache2, PHP et MariaDB.

#### Étape 1: Installer Apache, PHP et MariaDB
```sh
apt-get install apache2 mariadb-server php libapache2-mod-php php-mysql php-bz2 php-curl php-gd php-imagick php-intl php-mbstring php-xml php-zip -y
```

#### Étape 2: Terminer l'installation sécurisée de MariaDB
```sh
sudo mysql_secure_installation
```

#### Étape 3: Télécharger ownCloud
Au moment d'écrire ces lignes, la dernière version d'Ubuntu 18.04 était la v10.0.8. Après avoir téléchargé les fichiers ownCloud, nous allons extraire le contenu du fichier compressé, le supprimer, et déplacer le contenu dans le dossier /var/www.
```sh
wget http://download.owncloud.org/download/repositories/production/Ubuntu_18.04/owncloud-files_10.0.8.orig.tar.gz
tar -xf owncloud-files_10.0.8.orig.tar.gz
rm owncloud-files_10.0.8.orig.tar.gz
cp -r owncloud /var/www/
```

### Configurer le serveur web Apache
Pour que ownCloud fonctionne, nous devons d'abord configurer Apache, car ownCloud nécessite que certains modules soient activés. Nous avons également besoin de créer un fichier de configuration pour le site ownCloud.

#### Étape 1: Créer le fichier de configuration
Dans cet exemple, nous utiliserons l'éditeur de texte nano, mais si vous préférez utiliser d'autres éditeurs, n'hésitez pas à le faire.
```sh
nano /etc/apache2/sites-available/owncloud.conf
```

Collez ce qui suit dans le fichier :
```
Alias /owncloud "/var/www/owncloud/"

<Directory /var/www/owncloud/>
  Options +FollowSymlinks
  AllowOverride All

 <IfModule mod_dav.c>
  Dav off
 </IfModule>

 SetEnv HOME /var/www/owncloud
 SetEnv HTTP_HOME /var/www/owncloud

</Directory>
```

Sauvegardez maintenant le fichier et quittez nano.

#### Étape 2: Créer un lien symbolique
Il faut créer un lien symbolique vers /etc/apache2/sites-enabled en utilisant la commande suivante :
```sh
ln -s /etc/apache2/sites-available/owncloud.conf /etc/apache2/sites-enabled/owncloud.conf
```

#### Étape 3: Activer les modules Apache requis
Pour que ownCloud soit correctement configuré, il faut s’ assurer que certains modules d'Apache sont activés, en exécutant la série de commandes énumérées ci-dessous :
```sh
a2enmod rewrite
a2enmod headers
a2enmod env
a2enmod dir
a2enmod mime
```
Pour qu'Apache reflète ces changements, il faut le redémarrer en utilisant la commande suivante :
```sh
service apache2 restart
```

#### Étape 4: Cryptage SSL
Vous pouvez utiliser ownCloud avec HTTP, mais nous vous encourageons fortement à utiliser SSL/TLS pour crypter tout le trafic de votre serveur.

```sh
a2enmod ssl
a2ensite default-ssl
service apache2 reload
```

### Configurer la base de données pour ownCloud
Comme la plupart des systèmes, ownCloud nécessite une base de données pour fonctionner, il faut donc en créer une. Pour ce faire, il faut créer un utilisateur et une base de données pour ownCloud, via les étapes suivantes :

#### Étape 1: Démarrez MySQL et connectez-vous avec votre compte root
```sh
mysql -u root -p
```

#### Étape 2: Créer une base de données
Dans cet exemple, nous avons nommé notre base de données "owncloud", mais vous pouvez l'appeler autrement.
```sh
CREATE DATABASE owncloud;
```

#### Étape 3: Créer un utilisateur
Dans cet exemple, nous avons nommé notre utilisateur "owncloud", mais vous pouvez l'appeler autrement.

> [!warning]
>
> N'oubliez pas de changer votre 'MOT DE PASSE' pour le mot de passe de votre choix.
Pour assurer la sécurité de vos données, votre mot de passe doit suivre certaines recommandations :
>
> - Le mot de passe doit contenir entre 12 et 30 caractères.
> - Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et un chiffre.
> - Le mot de passe ne doit pas être extrait du dictionnaire.
> - Le mot de passe ne doit pas contenir de renseignements personnels (c.-à-d. votre prénom, votre nom de famille ou votre date de naissance).
> - Le mot de passe doit être stocké dans un coffre-fort de mots de passe.
> - Le mot de passe doit être changé tous les trois mois.
> - Le mot de passe ne doit pas être le même que celui utilisé précédemment.
>

```sh
GRANT ALL ON owncloud.* to 'owncloud'@'localhost' IDENTIFIED BY 'yourPASSWORD';
```

#### Étape 4: Flush the privileges and exit
```sh
FLUSH PRIVILEGES;
exit
```

### Configurer ownCloud
Avant de pouvoir commencer le processus de configuration, il y a une dernière commande à exécuter :

```sh
chown -R www-data:www-data /var/www/owncloud/
```

Vous avez maintenant terminé toutes les installations nécessaires pour démarrer le processus de configuration de ownCloud.

#### Étape 1: Ouvrir l'interface de ownCloud
Pour accéder à l'interface ownCloud, ouvrez un nouvel onglet dans votre navigateur et saisissez l'adresse IP de votre serveur, suivie de `/owncloud`. For example: `https://my-server-ip-address/owncloud`

> [!primary]
>
> Si vous utilisez un certificat auto-signé, votre navigateur affichera probablement un message d'avertissement. C'est normal, et vous pouvez le contourner en cliquant sur le bouton approprié de votre navigateur.
>

#### Étape 2: Remplissez le formulaire
Remplissez simplement le formulaire qui apparaît à l'écran, comme dans l'exemple annoté ci-dessous :

![Écran de configuration](images/owncloud-setup-screen.png){.thumbnail}

Vous avez maintenant installé ownCloud sur votre instance Public Cloud d’OVH !

### Utilisation de l’Object Storage d’OpenStack. (facultatif)
Il y a des avantages et des inconvénients à utiliser le stockage sur disque local pour stocker vos fichiers ownCloud. Par exemple, vous avez de meilleures performances sur le stockage local, mais vous êtes limité en termes de quantité de données que vous pouvez stocker.

En utilisant l’Object Storage OpenStack d’OVH, vous pouvez stocker vos fichiers en externe, sans limite sur le volume total des données ou la durée de stockage. De plus, OVH garantit une durabilité des données à 100 % et réplique vos données sur trois sites différents, pour un rapport qualité/prix exceptionnel.

En savoir plus sur [l’Object Storage d’OVH](https://www.ovh.com/ca/fr/public-cloud/storage/object-storage/){.external}.
Lire le guide d'utilisation de l’Object Storage pour ownCloud : [Object Storage pour ownCloud](../storage/configure_owncloud_with_object_storage/){.external}.

### Utilisation d'un disque supplémentaire comme stockage (facultatif)
Comme pour l'Object storage, l'avantage d'utiliser un disque supplémentaire est que vous êtes moins limité par les problèmes de stockage. Vous pouvez également augmenter la taille d'un disque supplémentaire après sa création, jusqu'à 10 To.

En savoir plus sur [les disques supplémentaires du Public Cloud](https://www.ovh.com/ca/fr/public-cloud/storage/additional-disks/){.external}.

> [!warning]
>
> Nous vous conseillons fortement de créer une sauvegarde de votre propre dossier Cloud, ou de créer un snapshot de l'Instance avant d'exécuter cette partie du tutoriel.
>
> Sachez qu'OVH n'assume aucune responsabilité en cas de perte de données ou de perte de service. Votre ownCloud sera hors ligne jusqu'à ce que vous ayez complété toutes les étapes requises. Procédez à vos risques et périls.
>

#### Étape 1: Créer et connecter le disque à votre instance Public Cloud
Pour ce faire, il vous suffit de suivre les étapes de ce guide : [Créez un disque supplémentaire sur Public Cloud](../creer-un-volume-supplementaire-et-l-attacher-a-une-instance/){.external}.

#### Étape 2: Configurer le disque supplémentaire
Pour ce faire, il vous suffit de suivre les étapes de ce guide : [Configurez un disque supplémentaire sur Public Cloud](../configurer-un-volume-additionnel/#depuis-une-instance-sous-linux){.external}.

> [!primary]
>
> Dans cet exemple, le disque sera monté dans `/mnt/owncloud`, donc nous allons déplacer les données vers `/mnt/owncloud`, qui sera le disque supplémentaire.
>

#### Étape 3: Sauvegarder le dossier ownCloud et arrêter Apache
Pour déplacer le dossier ownCloud existant depuis /var/www/, nous devons d'abord arrêter Apache, en utilisant la commande ci-dessous :
```sh
service apache2 stop
```

Pour sauvegarder les fichiers, il y a deux options avec Public Cloud. La première est de créer simplement un snapshot de l'Instance, tandis que la seconde est de créer une copie du dossier ownCloud sur le stockage local (pour lequel vous aurez besoin d'avoir assez d'espace sur votre disque).

Option 1 - créer un snapshot de l'Instance :
Utilisez le guide suivant pour faire un snapshot de votre Instance :

[Sauvegarde d'une instance](../sauvegarder-une-instance/){.external}

Option 2 - créer une copie du dossier en utilisant la commande ci-dessous :
```sh
sudo rsync -av /var/www/owncloud/data/ ~/owncloud-data-bak/
```

#### Étape 4: Déplacer ownCloud sur le disque supplémentaire
Une fois que vous avez fait votre sauvegarde et arrêté Apache, vous pouvez déplacer le dossier de ownCloud sur le disque supplémentaire, en utilisant la commande ci-dessous :

```sh
sudo mv /var/www/owncloud/data /mnt/owncloud/
```

Vous pouvez vérifier si les données ont été déplacées en exécutant la commande suivante, qui liste tous les fichiers du dossier :
```sh
ls /mnt/owncloud/data
```

#### Étape 5: Pointer ownCloud vers le nouvel emplacement du répertoire
Maintenant que vos données ownCloud ont été déplacées sur le disque, vous devez modifier le fichier de configuration d’ownCloud, qui est le suivant par défaut : `/var/www/owncloud/config/config/config.php`

Exécutez la commande suivante pour l'éditer avec nano :
```sh
nano /var/www/owncloud/config/config.php
```

Dans ce fichier, modifiez la ligne suivante :
```sh
'datadirectory' => '/var/www/owncloud/data',
```

Il devrait être mis à jour en :
```sh
'datadirectory' => '/mnt/owncloud/data',
```

#### Étape 6 : Mettre à jour les permissions des dossiers et modifier la configuration de la base de données
Maintenant que les fichiers ont été déplacés, nous devons nous assurer que les permissions sont correctes en exécutant la commande suivante :
```sh
chown -R www-data:www-data /mnt/owncloud/data
```

Finalement, nous devons modifier les informations du répertoire utilisateur dans la base de données pour qu'elles correspondent au nouvel emplacement.

- Démarrez MySQL et connectez-vous avec votre compte root :
```sh
mysql -u root -p
```
- Sélectionnez la base de données à utiliser :
```sql
USE owncloud;
```
- Mettre à jour la table oc_storages :
```sql
UPDATE oc_storages SET id='local::/mnt/owncloud/data' WHERE id='local::/var/www/owncloud/data/';
```
- Mettez à jour la table oc_accounts, en gardant à l'esprit que vous devez changer le dossier "home" pour chaque utilisateur. Changez simplement /var/www/owncloud/data/username par /mnt/owncloud/data/username (remplacez le nom d'utilisateur par le bon). Ci-dessous se trouve un exemple de commande SQL pour changer un utilisateur avec l'ID de 1 :
```sql
UPDATE oc_accounts SET home='/mnt/owncloud/data/ovh_owncloud' WHERE id=1;
```

#### Étape 7: Démarrer Apache
Tout est maintenant déplacé et reconfiguré, ce qui signifie que vous pouvez maintenant redémarrer Apache en utilisant la commande ci-dessous :
```sh
service apache2 start
```

## Aller plus loin
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
