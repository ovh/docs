---
title: "Comment migrer un site web d'un VPS vers un serveur dédié ou une instance Public Cloud"
excerpt: "Découvrez comment migrer votre site web d'un VPS vers un serveur dédié ou une instance Public Cloud"
updated: 2025-01-09
---

## Objectif

Votre site web se développe, et les ressources d'un VPS peuvent rapidement devenir insuffisantes pour répondre à vos besoins croissants en matière de performances, de gestion de trafic ou de traitement de tâches complexes. Migrer vers un serveur dédié ou une instance Public Cloud vous permet de bénéficier d'une infrastructure plus puissante, personnalisable et adaptée à des charges de travail plus exigeantes. Ce guide se concentre sur les étapes essentielles pour effectuer cette migration efficacement, tout en garantissant la continuité de service.

**Découvrez comment migrer votre site web d'un VPS vers un serveur dédié ou une instance Public Cloud.**

## Prérequis

- Disposer d'un accès administrateur au [VPS](/links/bare-metal/vps) source (via SSH).
- Un [serveur dédié](/links/bare-metal/bare-metal) ou une instance [Public Cloud](/links/public-cloud/public-cloud/) dans votre compte OVHcloud.
- Accès administrateur au serveur de destination (via SSH).
- Une connaissance des bases de la gestion de serveur (Apache/Nginx, bases de données, etc.).

## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

### Sommaire

- [Étape 1 - Sauvegarder les fichiers et la base de données de votre site web](#step1)
- [Étape 2 - Préparer le serveur dédié ou l'instance Public Cloud de destination](#step2)
- [Étape 3 - Transférer les fichiers et la base de données sur le serveur de destination](#step3)
- [Étape 4 - Configurer le site web sur le serveur de destination](#step4)
- [Étape 5 - Mettre à jour les enregistrements DNS](#step5)
- [Étape 6 - Vérifier le bon fonctionnement de votre site web](#step6)
- [Étape 7 - Sécuriser votre serveur dédié ou instance Public Cloud](#step7)

### Étape 1 - Sauvegarder les fichiers et la base de données de votre site web <a name="step1"></a>

La première étape consiste à sauvegarder l'ensemble des fichiers de votre site web.

#### Étape 1.1 - Sauvegarder les fichiers <a name="step1.1"></a>

Connectez-vous via SSH au VPS et sauvegardez les fichiers de votre site web :

```bash
ssh <user>@<vps_ip>
cd /var/www/html
tar -czf site_backup.tar.gz *
```

Remplacez :

- `<user>` : par l'utilisateur que vous utilisez pour vous connecter au VPS.
- `<vps_ip>` : par l'adresse IP de votre VPS.

#### Étape 1.2 - Sauvegarder la base de données <a name="step1.2"></a>

Si votre site web utilise une base de données, sauvegardez-la en utilisant les lignes de commande selon votre **S**ystème de **G**estion de **B**ase de **D**onnées (**SGBD**).

> [!tabs]
> **MySQL et MariaDB**
>> ```bash
>> mysqldump -u <db_user> -p <db_name> > database_backup.sql
>> ```
>> 
>> Remplacez :
>> 
>> - `<db_user>` : par le nom d'utilisateur de la base de données.
>> - `<db_name>` : par le nom de la base de données.
>>
> **PostgreSQL**
>> Pour exporter votre base de données, référez-vous à la [documentation officielle de PostgreSQL](https://www.postgresql.org/docs/){.external}
>>
> MongoDB
>> Pour exporter votre base de données, référez-vous à la [documentation officielle de MongoDB](https://docs.mongodb.com/manual/){.external}
>>
> **Redis® open source**
>> Pour exporter votre base de données, référez-vous à la [documentation officielle de Redis](https://redis.io/documentation){.external}

Si vous utilisez un autre SGBD, consultez sa documentation officielle pour trouver les commandes de sauvegarde de la base de données.

### Étape 2 - Préparer le serveur dédié ou l'instance Public Cloud de destination <a name="step2"></a>

Avant de migrer les fichiers et bases de données de votre site web, préparez votre serveur de destination.

#### Étape 2.1 - Créer et configurer l'instance Public Cloud <a name="step2.1"></a>

Si vous n'êtes pas familier avec Public Cloud, consultez notre guide « [L'essentiel pour commencer avec Public Cloud](/pages/public_cloud/compute/00-essential-info-to-get-started-on-public-cloud) ».

Pour créer et configurer une instance Public Cloud, suivez les étapes de notre guide « [Comment créer une instance Public Cloud et s'y connecter](/pages/public_cloud/compute/public-cloud-first-steps) ».

#### Étape 2.2 - Installer et configurer le serveur dédié <a name="step2.2"></a>

Pour préparer votre serveur dédié, consultez notre guide « [Premiers pas avec un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) ».

Ce guide vous accompagne dans :

- L'installation d'un système d'exploitation.
- La configuration de votre serveur pour permettre l'accès via SSH.
- La connexion initiale pour préparer le déploiement des fichiers de votre site web.

### Étape 3 - Transférer les fichiers et la base de données sur le serveur de destination <a name="step3"></a>

Après avoir préparé votre serveur dédié ou instance Public Cloud, transférez les fichiers et la base de données sauvegardés depuis votre VPS.

#### Étape 3.1 - Transférer les fichiers <a name="step3.1"></a>

Utilisez l'outil `rsync` pour transférer les fichiers archivés vers le serveur de destination. Cette méthode est rapide, sécurisée et permet de conserver les permissions des fichiers.

1\. Connectez-vous depuis votre VPS et lancez le transfert via SSH :

```bash
rsync -avz /var/www/html/site_backup.tar.gz <user>@<destination_ip>:/var/www/html/
```

Remplacez :

- `<user>` : par l'utilisateur du serveur de destination.
- `<destination_ip>` : par l'adresse IP du serveur dédié ou de l'instance Public Cloud.

Pour plus de détails concernant l'utilisation de `rsync`, consultez notre guide « [Comment copier des données d'un serveur vers un autre en utilisant rsync](/pages/bare_metal_cloud/dedicated_servers/how-to-copy-data-from-one-dedicated-server-to-another-using-rsync) ».

2\. Une fois les fichiers transférés, connectez-vous au serveur de destination et extrayez l'archive :

```bash
ssh <user>@<destination_ip>
cd /var/www/html
tar -xzf site_backup.tar.gz
```

#### Étape 3.2 - Importer la base de données <a name="step3.2"></a>

> [!warning]
>
> Si votre base de données est déjà hébergée sur un service Web Cloud Databases, il n'est pas nécessaire de la migrer vers le serveur de destination. Conservez la base de données sur le service Web Cloud Databases et configurez votre serveur pour qu'il se connecte à cette base de données ([étape 4.2](#step4.2)).

1\. Créez une nouvelle base de données

Connectez-vous en SSH au serveur dédié ou à l'instance Public Cloud. Créez une nouvelle base de données en fonction de votre SGBD :

> [!tabs]
> **MySQL et MariaDB**
>> Pour créer une nouvelle base de données, référez-vous à la [documentation officielle de MySQL](https://dev.mysql.com/doc/refman/8.4/en/creating-database.html){.external}
>>
> **PostgreSQL**
>> Pour créer une nouvelle base de données, référez-vous à la [documentation officielle de PostgreSQL](https://docs.postgresql.fr/11/sql-createdatabase.html){.external}
>>
> **MongoDB**
>> Pour créer une nouvelle base de données, référez-vous à la [documentation officielle de MongoDB](https://www.mongodb.com/resources/products/fundamentals/create-database){.external}
>>
> **Redis® open source**
>> Pour créer une nouvelle base de données, référez-vous à la [documentation officielle de Redis](https://redis.io/docs/latest/operate/rc/databases/create-database/){.external}

2\. Importez la base de données

Utilisez la ligne de commande ci-dessous pour réaliser l'importation de la base de données que vous avez sauvegardée à l'[étape 1.2](#step1.2).

Dans l'exemple ci-dessous, nous utilisons MySQL. Servez-vous de la documentation officielle du SGBD que vous avez installé lors de l'étape précédente afin d'utiliser la ligne de commande adéquate pour importer la base de données sur votre serveur.

```bash
mysql -u user_name -p db_name < root/to/database_backup.sql
```

Remplacez :

- `user_name` : par votre nom d'utilisateur MySQL.
- `db_name` : par le nom de la base de données.
- `root/to/database_backup.sql` : par le chemin du fichier SQL sauvegardé.

### Étape 4 - Configurer le site web sur le serveur de destination <a name="step4"></a>

Après avoir transféré les fichiers et importé la base de données, configurez votre serveur de destination pour qu'il prenne en charge votre site web.

#### Étape 4.1 - Configurer le serveur web <a name="step4.1"></a>

Pour associer votre site web à son domaine ou sous-domaine, configurez un hôte virtuel :

1\. Apache

> [!tabs]
> **Étape 1**
>>
>> Créez un fichier de configuration pour votre site web (remplacez `your_website` par un nom significatif pour votre projet) :
>>
>> ```bash
>> sudo nano /etc/apache2/sites-available/your_website.conf
>> ```
>>
> **Étape 2**
>>
>> Dans le fichier de configuration, définissez les paramètres de votre hôte virtuel. Remplacez `your_domain.com` par le domaine ou sous-domaine associé à votre site web, et `/var/www/html` par le chemin vers le répertoire de votre site web :
>>
>> ```console
>> <VirtualHost *:80>
>>    ServerName your_domain.com
>>    DocumentRoot /var/www/html
>>    <Directory /var/www/html>
>>        AllowOverride All
>>        Require all granted
>>    </Directory>
>>    ErrorLog ${APACHE_LOG_DIR}/error.log
>>    CustomLog ${APACHE_LOG_DIR}/access.log combined
>> </VirtualHost>
>> ```
>>
> **Étape 3**
>>
>> Activez la configuration du site web en l'ajoutant aux sites disponibles d'Apache :
>>
>> ```bash
>> sudo a2ensite your_website.conf
>> ```
>>
> **Étape 4**
>>
>> Redémarrez Apache pour appliquer les modifications de configuration :
>>
>> ```bash
>> sudo systemctl reload apache2
>> ```

2\. Nginx

> [!tabs]
> **Étape 1**
>>
>> Créez un fichier de configuration pour votre site web (remplacez `your_website` par un nom significatif pour votre projet) :
>>
>> ```bash
>> sudo nano /etc/nginx/sites-available/your_website
>> ```
>>
> **Étape 2**
>>
>> Dans le fichier de configuration, définissez les paramètres de votre hôte virtuel. Remplacez `your_domain.com` par le domaine ou sous-domaine associé à votre site web, et `/var/www/html` par le chemin vers le répertoire de votre site web :
>>
>> ```console
>> server {
>>   listen 80;
>>   server_name your_domain.com;
>>   root /var/www/html;
>>
>>   location / {
>>       index index.html index.php;
>>       try_files $uri $uri/ =404;
>>   }
>>
>>    error_log /var/log/nginx/error.log;
>>    access_log /var/log/nginx/access.log;
>> }
>> ```
>>
> **Étape 3**
>>
>> Activez la configuration du site web en créant un lien symbolique dans le répertoire `sites-enabled` :
>>
>> ```bash
>> sudo ln -s /etc/nginx/sites-available/your_website /etc/nginx/sites-enabled/
>> ```
>>
> **Étape 4**
>>
>> Redémarrez Nginx pour appliquer les modifications de configuration :
>>
>> ```bash
>> sudo systemctl reload nginx
>> ```

#### Étape 4.2 - Paramétrer les fichiers de configuration de votre site web <a name="step4.2"></a>

Après avoir configuré le serveur web, il est important de mettre à jour les fichiers de configuration de votre site web pour garantir son bon fonctionnement. Les principales variables à ajuster sont souvent les informations de connexion à la base de données, ainsi que les chemins d'accès aux dossiers. Voici les configurations spécifiques à mettre à jour pour les principaux CMS.

> [!tabs]
> **WordPress**
>>
>> Modifiez les variables suivantes dans le fichier `wp-config.php` :
>> 
>> - **DB_NAME** : le nom de la base de données.
>> - **DB_USER** : l'utilisateur de la base de données.
>> - **DB_PASSWORD** : le mot de passe de l'utilisateur.
>> - **DB_HOST** : l'hôte de la base de données (généralement localhost).
>>
>> Pour plus de détails, consultez la [documentation officielle de WordPress](https://fr.wordpress.org/support/article/editing-wp-config-php/).
>>
>> Pour éviter tout problème de sécurité, consultez la documentation officielle sur les [permissions de fichiers pour WordPress](https://wordpress.org/support/article/changing-file-permissions/).
>>
> **PrestaShop**
>>
>> Modifiez les variables suivantes dans le fichier `parameters.php` :
>> 
>> - **database_host** : l'hôte de la base de données.
>> - **database_name** : le nom de la base de données.
>> - **database_user** : l'utilisateur de la base de données.
>> - **database_password** : le mot de passe de la base de données.
>>
>> Pour plus de détails, consultez la [documentation officielle de PrestaShop](https://devdocs.prestashop-project.org/8/development/configuration/configuring-prestashop/).
>>
>> Pour éviter tout problème de sécurité, consultez la [documentation officielle](https://devdocs.prestashop-project.org/) sur les permissions de fichiers pour PrestaShop.
>>
> **Joomla!**
>>
>> Modifiez les variables suivantes dans le fichier `configuration.php` :
>> 
>> - **public $host** : l'hôte de la base de données (souvent localhost).
>> - **public $db** : le nom de la base de données.
>> - **public $user** : l'utilisateur de la base de données.
>> - **public $password** : le mot de passe de la base de données.
>>
>> Pour plus de détails, consultez la [documentation officielle de Joomla!](https://docs.joomla.org/).
>>
>> Pour éviter tout problème de sécurité, consultez la documentation officielle sur les [permissions de fichiers pour Joomla!](https://docs.joomla.org/What_are_the_recommended_file_and_directory_permissions%3F).
>>
> **Drupal**
>>
>> Modifiez les variables suivantes dans le fichier `settings.php` :
>> 
>> - **host** : l'hôte de la base de données (souvent localhost).
>> - **database** : le nom de la base de données.
>> - **username** : l'utilisateur de la base de données.
>> - **password** : le mot de passe de la base de données.
>>
>> Pour plus de détails, consultez la [documentation officielle de Drupal](https://www.drupal.org/documentation).
>>
>> Pour éviter tout problème de sécurité, consultez la documentation officielle sur les [permissions de fichiers pour Drupal](https://www.drupal.org/docs/administering-a-drupal-site/security-in-drupal/securing-file-permissions-and-ownership).
>>
> Sans CMS
>>
>> **1. Mettre à jour les informations de connexion à la base de données** 
>>
>> Identifiez les fichiers de configuration (comme `config.php` ou `.env`). Certains peuvent être situés dans des sous-dossiers. Dans ces fichiers, recherchez les paramètres de connexion à la base de données et modifiez-les en fonction des nouvelles valeurs de connexion du serveur :
>>
>> - **DB_HOST** : adresse du serveur de base de données.
>> - **DB_NAME** : nom de la base de données.
>> - **DB_USER** : utilisateur de la base de données.
>> - **DB_PASSWORD** : mot de passe.
>>
>> **2. Configurer les chemins d'accès aux fichiers** 
>>
>> Certains sites web utilisent des chemins absolus (exemple : `/home/user/public_html/`) pour des fichiers ou des ressources spécifiques tels que des images, des fichiers CSS, etc. Vérifiez que ces chemins sont correctement adaptés à la structure du serveur, par exemple `/var/www/html/`.
>>
>> Pour éviter des erreurs de chargement de fichiers ou des liens brisés, assurez-vous d'ajuster ces chemins dans tous les fichiers de configuration, `.htaccess`, ou autres scripts contenant des liens vers ces ressources. Cela permet de garantir que le site web trouve correctement tous les éléments nécessaires à son bon fonctionnement, même après la migration.
>>
>> **3. Modifier le fichier .htaccess**  (facultatif)
>>
>> Assurez-vous que le fichier `.htaccess` est bien configuré pour le nouvel environnement. Si vous utilisez des règles de réécriture (`RewriteRule`) pour personnaliser les URL, vérifiez que les chemins sont adaptés à la structure de votre serveur (exemple : `/var/www/html/` au lieu de `/public_html/`). Cela garantit le bon fonctionnement des redirections et des accès.
>>
>> Si le fichier `.htaccess` inclut des restrictions d'accès ou des paramètres de sécurité, comme la désactivation de la liste des répertoires ou la configuration de la mise en cache, modifiez ces paramètres pour qu'ils correspondent aux configurations et conditions de sécurité de votre nouveau serveur.
>>
>> **4. Configurer les permissions des fichiers et des dossiers** 
>>
>> Assurez-vous que les permissions (exemple : `chmod`) des fichiers et dossiers sont configurées correctement pour éviter des erreurs d'accès. Les permissions recommandées sont souvent `755` pour les dossiers et `644` pour les fichiers, mais cela peut varier selon vos besoins de sécurité.
>>
>> > [!primary]
>> >
>> > Si vous avez plusieurs utilisateurs sur le serveur (exemple : développeurs, administrateurs, etc.), utilisez des permissions plus restrictives ou configurez des groupes spécifiques pour plus de contrôle. Par exemple, pour des fichiers sensibles, utilisez `chmod 640` ou même `chmod 600`.

Si vous utilisez une base de données Web Cloud Databases, vérifiez que votre serveur est autorisé à s'y connecter. Pour cela, ajoutez l'adresse IP du serveur à la liste des adresses IP autorisées. Cette configuration permet de sécuriser l'accès à la base de données et d'éviter tout problème de connexion. Consultez la section « Autoriser une adresse IP » de notre guide « [Premiers pas avec le service Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) ».

### Étape 5 - Mettre à jour les enregistrements DNS <a name="step5"></a>

> [!primary]
>
> Avant de modifier les enregistrements de votre zone DNS pour pointer vers l'adresse IP du serveur de destination, il est recommandé de réduire le **T**ime **T**o **L**ive (**TTL**). Cela accélère la propagation des changements, car les serveurs DNS mettront à jour les informations plus rapidement. Suivez l'étape « Le temps de propagation » de notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) » pour ajuster le TTL afin de faire pointer le nom de domaine vers le serveur de destination.

Pour faire pointer le nom de domaine de votre site web vers votre serveur dédié ou instance Public Cloud, configurez les enregistrements DNS du nom de domaine afin qu'ils dirigent le trafic vers l'adresse IP publique de votre serveur. Pour vous guider dans cette démarche, suivez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

### Étape 6 - Vérifier le bon fonctionnement de votre site web <a name="step6"></a>

Une fois la migration terminée, testez votre site web pour vous assurer qu'il fonctionne comme prévu. Vérifiez toutes les fonctionnalités essentielles (formulaires, connexions utilisateur, paiement en ligne, etc.) et assurez-vous que toutes les pages s'affichent correctement.

### Étape 7 - Sécuriser votre serveur dédié ou instance Public Cloud <a name="step7"></a>

Après avoir migré votre site web sur votre serveur dédié ou instance Public Cloud, il est crucial de sécuriser votre serveur afin de protéger vos données et garantir le bon fonctionnement de vos services.

Pour une liste complète des bonnes pratiques de sécurité, consultez nos guides « [Sécuriser un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server) » et « [Bonnes pratiques pour sécuriser et structurer les projets Public Cloud OVHcloud](/pages/public_cloud/compute/securing_and_structuring_projects) ».

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).
