---
title: "Comment migrer un site web depuis un hébergement Web mutualisé vers un VPS"
excerpt: "Découvrez comment migrer votre site web d'un hébergement mutualisé vers un VPS OVHcloud"
updated: 2025-10-23
---

## Objectif

Votre site web évolue, sa consommation de ressources devient telle que votre hébergement web ne correspond plus à vos besoins en terme de performances ou en terme de capacité à traiter des tâches de plus de plus complexes. Migrer vers un VPS permet d'améliorer la rapidité et la réactivité de votre site web, d'augmenter les ressources de calcul disponibles (CPU, RAM, etc.), et d'avoir plus de contrôle sur l'environnement serveur. Ce guide se concentre sur les étapes essentielles pour migrer efficacement vers un VPS, tout en garantissant la continuité de service.

**Découvrez comment migrer votre site web d'un hébergement mutualisé vers un VPS.**

## Prérequis

- Disposer d'une [offre d'hébergement web](/links/web/hosting) active.
- Avoir souscrit à un [VPS](/links/bare-metal/vps) présent dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [« Aller plus loin »](#go-further) de ce guide.
>

### Étape 1 - Sauvegarder les fichiers et la base de données de votre site web <a name="step1"></a>

La première étape consiste à sauvegarder l'ensemble des fichiers de votre site web, généralement via le **F**ile **T**ransfer **P**rotocol (**FTP**), ainsi que sa base de données.

Si vous utilisez WordPress, suivez notre guide « [Sauvegarder votre site WordPress](/pages/web_cloud/web_hosting/how_to_backup_your_wordpress) » pour découvrir comment sauvegarder les fichiers et la base de données de votre site web WordPress, puis passez à l'[étape 2](#step2).

#### Étape 1.1 - Se connecter à l’espace de stockage FTP de votre hébergement web

Suivez les étapes de notre guide « [Se connecter à l’espace de stockage FTP de son hébergement web](/pages/web_cloud/web_hosting/ftp_connection) » pour vous connecter à l’espace de stockage FTP de votre hébergement web.

#### Étape 1.2 - Sauvegarder les fichiers via FTP <a name="step1.2"></a>

Si vous n'utilisez pas un CMS (WordPress, Joomla!, Drupal, PrestaShop, etc.), téléchargez une sauvegarde complète de l'ensemble des fichiers présents dans votre espace FTP sur votre appareil en local. Cela inclut tous les fichiers HTML, CSS, JavaScript, images, et fichiers de configuration (`config.php`, `.env`, etc.) qui constituent votre site web. Assurez-vous de bien récupérer l’intégralité des dossiers et fichiers du répertoire racine (souvent nommé `public_html` ou `www`) pour que l'ensemble du contenu nécessaire au fonctionnement de votre site web soit sauvegardé pour la migration.

Si vous utilisez un CMS et pour sauvegarder ses fichiers, choisissez la méthode de sauvegarde adaptée à celui-ci en cliquant sur l'onglet concerné.

> [!tabs]
> PrestaShop
>>
>> Pour PrestaShop, sauvegardez les répertoires critiques tels que :
>> 
>> - `/admin` : pour les fichiers relatifs au back-office.
>> - `/modules` : pour les modules installés.
>> - `/img` : pour toutes les images et icônes.
>> - `/themes` : pour les fichiers du thème de votre site.
>>
>> Pour plus de détails sur la structure des fichiers PrestaShop, consultez leur [documentation technique officielle](https://docs.prestashop-project.org/welcome).
>>
> Joomla!
>>
>> Pour Joomla!, les fichiers importants à sauvegarder incluent les répertoires :
>>
>> - `/administrator` : pour l'interface d'administration.
>> - `/components`, `/plugins` : pour les extensions installées.
>> - `/images` : pour les fichiers médias de votre site.
>>
>> Retrouvez plus d’informations sur la structure des fichiers Joomla! dans la [documentation officielle de Joomla!](https://docs.joomla.org/).
>>
> Drupal
>>
>> Pour Drupal, les dossiers importants à sauvegarder sont :
>>
>> - `/sites` : qui contient les fichiers spécifiques à votre site.
>> - `/modules` : et `/themes` : pour les modules et thèmes personnalisés.
>>
>> Pour plus d'informations, référez-vous à la [documentation officielle de Drupal](https://www.drupal.org/docs).

> [!primary]
>
> Une fois l'ensemble des fichiers de votre site web téléchargés, assurez-vous de les stocker dans un dossier local facilement identifiable pour faciliter leur transfert ultérieur vers le VPS.

#### Étape 1.3 - Sauvegarder la base de données

> [!primary]
>
> Si vous utilisez déjà une base de données Web Cloud Database pour votre site web, vous pouvez continuer à l'utiliser sans la migrer. Votre VPS se connectera à la base de données Web Cloud Database pour gérer les données.

Si vous envisagez de migrer la base de données sur le VPS, suivez les étapes de notre guide « [Récupérer la sauvegarde de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_database_export) » pour sauvegarder votre base de données.

### Étape 2 - Configurer votre VPS <a name="step2"></a>

> [!primary]
>
> Si vous n'avez pas encore de VPS, consultez la [page produit VPS OVHcloud](/links/bare-metal/vps) pour en acheter un. Assurez-vous de choisir un VPS qui correspond aux besoins de votre site web en termes de ressources (RAM, CPU, stockage, etc.) et aux spécifications techniques de votre CMS. Si vous n'êtes pas familier avec les VPS, consultez notre guide « [Premiers pas avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) ».

#### Étape 2.1 - Se connecter à votre VPS

Consultez la section « Se connecter à votre VPS » de notre guide « [Premiers pas avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) » pour vous connecter à votre VPS.

#### Étape 2.2 - Installer et configurer un serveur web sur votre VPS <a name="step2.2"></a>

Une fois connecté à votre VPS, installez et configurez un environnement de développement web sur votre VPS. Cette étape est essentielle pour garantir que votre serveur soit prêt à accueillir votre site web une fois les fichiers et la base de données transférés.

Pour installer cet environnement web, consultez notre guide « [Installer un environnement de développement web sur un VPS ou un serveur dédié](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps) ».

### Étape 3 - Transférer les fichiers de votre site web via SFTP

Utiliser le **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**) est la méthode recommandée pour transférer les fichiers de votre site web vers votre VPS. Il offre un niveau de sécurité supérieur au FTP grâce à l'utilisation du chiffrement fourni par le service SSH, déjà activé par défaut sur votre VPS OVHcloud.

#### Étape 3.1 - Se connecter à votre VPS en SFTP

Suivez notre [guide sur l'utilisation de FileZilla](/pages/bare_metal_cloud/dedicated_servers/comment-deposer-ou-recuperer-des-donnees-sur-un-serveur-dedie-via-sftp) et entrez les détails suivants :

- **Host** : utilisez l'adresse IP de votre VPS.
- **Username** et **Password** : les identifiants de votre compte utilisateur SSH sur le VPS.
- **Port** : utilisez le port 22 (port par défaut pour SFTP).

#### Étape 3.2 - Transférer les fichiers de votre site web vers le VPS

Une fois connecté à votre VPS, l'arborescence des fichiers locaux apparaît à gauche de l'interface FileZilla, et celle de votre VPS à droite.

Le répertoire web (ou racine web) est l’endroit où les fichiers de votre site web seront stockés pour être accessibles sur Internet. **Par défaut, il peut s’agir d’un dossier nommé `/var/www/html` ou d’un autre répertoire configuré pendant l’installation de votre serveur web lors de l’[étape 2.2](#step2.2)**. Assurez-vous de placer vos fichiers dans le dossier configuré comme **racine web** pour que votre site fonctionne correctement.

> [!warning]
>
> Si vous êtes connecté en SFTP avec un utilisateur non-root (ex. `debian`), vous n’aurez pas la permission d’écrire directement dans `/var/www/html`.

**Procédure simple : déposer dans `/home` puis déplacer avec `sudo`**

##### Dans FileZilla (SFTP)

- Côté « Site distant » (panneau de droite), allez dans : `/home/debian/`
- Glissez-déposez le fichier de votre base de données (ex : `backup.sql`) dans `/home/debian/`. **Ne placez pas cette sauvegarde ni dans le dossier que vous allez copier vers la racine web** (ex : `/home/debian/site/`) **ni dans la racine web** (ex : `/var/www/html`), sinon elle pourra être téléchargée publiquement.
- Créez un dossier `site` dans `/home/debian/` (clic droit → `Créer un répertoire`{.action}), puis ouvrez-le.
- Sélectionnez tous les fichiers de votre site web (la base de données ne doit plus s'y trouver) et glissez-déposez-les dans `/home/debian/site/`. **Ne déposez pas vos dumps SQL dans ce dossier**. Gardez-les hors de la racine web, (ex : `/home/debian/backup.sql`.)

##### Sur votre VPS

Connectez-vous au VPS en SSH en consultant la section « Se connecter à votre VPS » de notre guide « [Premiers pas avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) ».

Exécutez les commandes suivantes :

> [!warning]
>
> Dans cet exemple, la racine web est `/var/www/html`. Si votre racine web est différente (configurée à l’étape 2.2), remplacez `/var/www/html` par votre chemin réel.

Créez la racine web si elle n’existe pas :

```bash
sudo mkdir -p /var/www/html
```

Copiez le contenu de `/home/debian/site/` vers la racine web en préservant l’arborescence et les métadonnées :

```bash
sudo rsync -a /home/debian/site/ /var/www/html/
```

Alternative si `rsync` n’est pas installé : 

```bash
sudo cp -a /home/debian/site/. /var/www/html/
```

Donnez la propriété des fichiers au service web (`www-data` pour Nginx/Apache sur Debian/Ubuntu) :

```bash
sudo chown -R www-data:www-data /var/www/html
```

Fixez les permissions des dossiers en `755` (navigable) et des fichiers en `644` (lisible) :

```bash
sudo find /var/www/html -type d -exec chmod 755 {} \;
sudo find /var/www/html -type f -exec chmod 644 {} \;
```

### Étape 4 - Importer la base de données sur votre VPS (facultatif)

> [!warning]
>
> Si votre base de données est déjà hébergée sur un service Web Cloud Databases, il n'est pas nécessaire de la migrer vers le VPS. Vous pouvez conserver la base de données sur le service Web Cloud Databases et configurer votre VPS pour qu'il se connecte à cette base de données ([étape 5](#step5)).

#### Avant de commencer

- Votre fichier de sauvegarde (`.sql`) a été déposé à l’étape 3.2 (par exemple : `/home/debian/backup.sql`).
- Le **S**ystème de **G**estion de **B**ase de **D**onnées (**SGBD**) (MySQL / MariaDB) et son client en ligne de commande ont été installés à l’[étape 2.2](#step2.2).
- La base **`db_name`** :
    - **existe déjà** si vous l’avez créée lors de l’étape 2.2 (ou via votre panneau d’administration).
    - **peut être créée automatiquement** si votre sauvegarde `.sql` contient `CREATE DATABASE`.
    - **sinon, créez-la avant l’import** :

    ```bash
    sudo mysql -e "CREATE DATABASE db_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
    ```

    (remplacez `db_name` par le nom souhaité).

#### Importer la base de données

1. Connectez-vous au VPS en SSH en consultant la section « Se connecter à votre VPS » de notre guide « [Premiers pas avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) ».
2. Lancez l’import en utilisant le client du SGBD :

    Dans l'exemple ci-dessous, nous utilisons MySQL comme SGBD. Servez-vous de la documentation officielle du SGBD que vous avez installé lors de l'[étape 2.2](#step2.2) afin d'utiliser la ligne de commande adéquate pour importer la base de données sur votre VPS.

    ```bash
    mysql -u user_name -p db_name < /home/debian/backup.sql
    ```

    - Remplacez `user_name` par votre nom d'utilisateur MySQL (MySQL/MariaDB), et pas votre login SSH.
    - Remplacez `db_name` par le nom de la base de données à importer.

3. Saisissez le mot de passe de l’utilisateur SGBD lorsqu’il est demandé et attendez la fin de l’import.

### Étape 5 - Paramétrer les fichiers de configuration de votre site web <a name="step5"></a>

Après avoir transféré les fichiers de votre site web et, le cas échéant, importé la base de données sur votre VPS, il est important de mettre à jour les fichiers de configuration de votre site web pour garantir son bon fonctionnement. Les principales variables à ajuster sont souvent les informations de connexion à la base de données, ainsi que les chemins d'accès aux dossiers. Voici les configurations spécifiques à mettre à jour pour les principaux CMS.

> [!tabs]
> WordPress
>>
>> Modifiez les variables suivantes dans le fichier `wp-config.php` :
>> 
>> - **DB_NAME** : le nom de la base de données.
>> - **DB_USER** : l'utilisateur de la base de données.
>> - **DB_PASSWORD** : le mot de passe de l'utilisateur.
>> - **DB_HOST** : l'hôte de la base de données (généralement localhost sur un VPS).
>>
>> Pour plus de détails, consultez la [documentation officielle de WordPress](https://fr.wordpress.org/support/article/editing-wp-config-php/).
>>
>> Pour éviter tout problème de sécurité, consultez la documentation officielle sur les [permissions de fichiers pour WordPress](https://wordpress.org/support/article/changing-file-permissions/)
>>
> PrestaShop
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
> Joomla!
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
>> Pour éviter tout problème de sécurité, consultez la documentation officielle sur les [permissions de fichiers pour Joomla!](https://docs.joomla.org/What_are_the_recommended_file_and_directory_permissions%3F)
>>
> Drupal
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
>> Pour éviter tout problème de sécurité, consultez la documentation officielle sur les [permissions de fichiers pour Drupal](https://www.drupal.org/docs/administering-a-drupal-site/security-in-drupal/securing-file-permissions-and-ownership)
>>
> Sans CMS
>>
>> **1. Mettre à jour les informations de connexion à la base de données** 
>>
>> Identifiez les fichiers de configuration (comme `config.php` ou `.env`). Certains peuvent être situés dans des sous-dossiers. Dans ces fichiers, recherchez les paramètres de connexion à la base de données et modifiez-les en fonction des nouvelles valeurs de connexion du VPS :
>>
>> - **DB_HOST** : adresse du serveur de base de données.
>> - **DB_NAME** : nom de la base de données.
>> - **DB_USER** : utilisateur de la base de données.
>> - **DB_PASSWORD** : mot de passe.
>>
>> **2. Configurer les chemins d'accès aux fichiers** 
>>
>> Certains sites web utilisent des chemins absolus (exemple : `/home/user/public_html/`) pour des fichiers ou des ressources spécifiques tels que des images, des fichiers CSS, etc. Vérifiez que ces chemins sont correctement adaptés à la structure du serveur sur le VPS, par exemple `/var/www/html/`.
>>
>> Pour éviter des erreurs de chargement de fichiers ou des liens brisés, assurez-vous d’ajuster ces chemins dans tous les fichiers de configuration, `.htaccess`, ou autres scripts contenant des liens vers ces ressources. Cela permet de garantir que le site web trouve correctement tous les éléments nécessaires à son bon fonctionnement, même après la migration.
>>
>> **3. Modifier le fichier .htaccess**  (facultatif)
>>
>> Assurez-vous que le fichier `.htaccess` est bien configuré pour le nouvel environnement. Si vous utilisez des règles de réécriture (`RewriteRule`) pour personnaliser les URL, vérifiez que les chemins sont adaptés à la structure de votre VPS (exemple : `/var/www/html/` au lieu de `/public_html/`). Cela garantit le bon fonctionnement des redirections et des accès.
>>
>> Si le fichier `.htaccess` inclut des restrictions d'accès ou des paramètres de sécurité, comme la désactivation de la liste des répertoires ou la configuration de la mise en cache, modifiez ces paramètres pour qu’ils correspondent aux configurations et conditions de sécurité de votre nouveau serveur.
>>
>> **4. Configurer les permissions des fichiers et des dossiers** 
>>
>> Assurez-vous que les permissions (exemple : `chmod`) des fichiers et dossiers sont configurées correctement pour éviter des erreurs d'accès. Sur un VPS, les permissions recommandées sont souvent `755` pour les dossiers et `644` pour les fichiers, mais cela peut varier selon vos besoins de sécurité.

Si vous utilisez une base de données Web Cloud Databases, vérifiez que votre VPS est autorisé à s'y connecter. Pour cela, ajoutez l'adresse IP du VPS à la liste des adresses IP autorisées. Cette configuration permet de sécuriser l'accès à la base de données et d'éviter tout problème de connexion. Consultez la section « Autoriser une adresse IP » de notre guide « [Premiers pas avec le service Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) ».

### Étape 6 - Associer votre nom de domaine à l'adresse IP du VPS

> [!primary]
>
> Avant de modifier les enregistrements de votre zone DNS pour pointer vers l'adresse IP du VPS, il est recommandé de réduire le **T**ime **T**o **L**ive (**TTL**). Cela permet d'accélérer la propagation des changements, car les serveurs DNS mettront à jour les informations plus rapidement. Suivez l'étape « Le temps de propagation » de notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) » pour ajuster le TTL et configurer les enregistrements afin de faire pointer le nom de domaine vers le VPS.

Pour faire pointer le nom de domaine de votre site web vers votre VPS, configurez les enregistrements DNS du nom de domaine afin qu'ils dirigent le trafic vers l'adresse IP publique de votre VPS. Pour vous guider dans cette démarche, suivez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

### Étape 7 - Vérifier le bon fonctionnement de votre site web

Une fois la migration terminée, testez votre site web pour vous assurer qu'il fonctionne comme prévu. Vérifiez toutes les fonctionnalités essentielles (formulaires, connexions utilisateur, paiement en ligne, etc.) et assurez-vous que toutes les pages s'affichent correctement.

### Étape 8 - Sécuriser votre VPS

Après avoir migré votre site web sur votre VPS, il est crucial de sécuriser votre serveur afin de protéger vos données et garantir le bon fonctionnement de vos services. Voici quelques mesures à prendre pour renforcer la sécurité de votre VPS :

- Modifier le mot de passe SSH et le port d'accès SSH par défaut fournis par OVHcloud.
- Configurer un pare-feu.
- Configurer l'authentification à deux facteurs (2FA).
- Surveiller les logs.
- Etc.

Pour une liste complète des bonnes pratiques de sécurité, consultez notre guide « [Sécuriser un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps) ».

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Échangez avec notre [communauté d'utilisateurs](/links/community).
