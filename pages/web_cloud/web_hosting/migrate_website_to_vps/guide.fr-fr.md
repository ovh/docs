---
title: "Migrer un site web d'un hébergement mutualisé vers un VPS"
excerpt: "Découvrez comment modifier la formule d'abonnement de votre offre d'hébergement web OVHcloud"
updated: 2024-10-16
---

## Objectif

Votre site web évolue, et vous réalisez que les limites de l’hébergement mutualisé freinent sa performance ou ses possibilités. Vous cherchez à améliorer la rapidité de votre site web, obtenir plus de contrôle sur la configuration, ou gérer une audience croissante : la migration vers un serveur privé virtuel (VPS) est une solution idéale.
Ce guide vous guidera à travers les étapes essentielles pour effectuer cette migration avec succès, en vous assurant que votre site est bien sauvegardé, transféré et configuré sur votre nouveau VPS sans interruption.

**Découvrez comment migrer votre site web d'un hébergement mutualisé vers un VPS.**

## Prérequis

- Disposer d'une [offre d'hébergement web](/links/web/hosting) active.
- Un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Étape 1 : sauvegarder les fichiers et la base de données de votre site web <a name="step1"></a>

La première étape consiste à sauvegarder l'ensemble des fichiers de votre site web (généralement via FTP), ainsi que sa base de données.

Si vous utilisez WordPress, suivez notre guide « [Sauvegarder votre site WordPress](/pages/web_cloud/web_hosting/how_to_backup_your_wordpress) » pour savoir comment sauvegarder les fichiers et la base de données de votre site web WordPress, puis passez à l'[étape 2](#step2).

#### Étape 1.1 : se connecter à l’espace de stockage FTP de votre hébergement web

Suivez les étapes de notre guide « [Se connecter à l’espace de stockage FTP de son hébergement web](/pages/web_cloud/web_hosting/ftp_connection) ».

#### Étape 1.2 : sauvegarder les fichiers via FTP <a name="step1.2"></a>

Choisissez la méthode de sauvegarde adaptée à votre CMS en cliquant sur l'onglet concerné.

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
>> Vous pouvez trouver plus d’informations sur la structure des fichiers Joomla! dans la documentation officielle de Joomla.
>>
> Drupal
>>
>> Pour Drupal, les dossiers importants à sauvegarder sont :
>>
>> - `/sites` : qui contient les fichiers spécifiques à votre site.
>> - `/modules` : et `/themes` : pour les modules et thèmes personnalisés.
>>
>> Pour une vue plus détaillée, référez-vous à la [documentation officielle](https://www.drupal.org/docs) de Drupal.

> [!primary]
>
> Une fois l'ensemble des fichiers de votre site web téléchargés, assurez-vous de les stocker dans un dossier local facilement identifiable et dont le nom est simple à retenir. Cela facilitera les étapes de transfert vers le VPS par la suite.

Enregistrez l'ensemble de vos fichiers de votre site web dans un répertoire local

#### Étape 1.3 : sauvegarder la base de données

Pour sauvegarder la base de données de votre site web, suivez les étapes de notre guide « [Récupérer la sauvegarde de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_database_export) ».

### Étape 2 : configurer votre VPS <a name="step2"></a>

> [!primary]
>
> Si vous n'avez pas encore de VPS, consultez la [page produit VPS OVHcloud](https://www.ovhcloud.com/fr/vps/) pour en acheter un. Assurez-vous de choisir un VPS qui correspond aux besoins de votre site web en termes de ressources (RAM, CPU, stockage) et aux spécifications techniques de votre CMS. Si vous n'êtes pas familier avec les VPS, consultez notre guide « [Premiers pas avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) ».

#### Étape 2.1 : se connecter à votre VPS

Consultez la section « Se connecter à votre VPS » de notre guide « [Premiers pas avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) ».

#### Étape 2.2 : installer et configurer un serveur web sur votre VPS <a name="step2.2"></a>

Une fois connecté à votre VPS, installez et configurez un environnement de développement web sur votre VPS. Cette étape est essentielle pour garantir que votre serveur soit prêt à accueillir votre site web une fois les fichiers et la base de données transférés.
Pour installer cet environnement, consultez notre guide « [Installer un environnement de développement web sur un VPS ou un serveur dédié](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps) ».

### Étape 3 : transférer les fichiers de votre site web via SFTP

Utiliser SFTP (**S**ecure **F**ile **T**ransfer **P**rotocol) est la méthode recommandée pour transférer les fichiers de votre site web vers votre VPS. Il offre un niveau de sécurité supérieur à FTP classique grâce à l'utilisation du chiffrement fourni par le service SSH, déjà activé par défaut sur votre VPS OVHcloud.

#### Étape 3.1 : se connecter à votre VPS en SFTP

Suivez l'étape « Lancer la connexion SFTP » de notre guide « [Utiliser FileZilla avec votre hebergement](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) » en utilisant la configuration suivante :

- Hôte : utilisez l'adresse IP de votre VPS.
- Identifiant et mot de passe : ceux de votre compte utilisateur SSH sur le VPS.
- Port : utilisez le port 22 (port par défaut pour SFTP).

#### Étape 3.2 : transférer les fichiers de votre site web vers le VPS

Une fois connecté à votre VPS, l'arborescence des fichiers locaux apparaîtra à gauche de l'interface FileZilla, et celle de votre VPS à droite.

Sélectionnez les fichiers de votre site web et la base de données que vous avez téléchargés lors de l'[étape 1.2](#step1.2). Faites-les glisser vers le répertoire web de votre VPS à droite. Le répertoire web est l'endroit où les fichiers de votre site web seront stockés pour être accessibles sur Internet. Par défaut, il peut s'agir d'un dossier nommé `/var/www/html` ou d'un autre répertoire configuré pendant l'installation de votre serveur web lors de l'[étape 2.2](#step2.2). Assurez-vous de placer vos fichiers dans le dossier configuré comme racine web pour que votre site web fonctionne correctement.

### Étape 4 : importer la base de données sur votre VPS

Connectez-vous au VPS en SSH en consultant la section « Se connecter à votre VPS » de notre guide « [Premiers pas avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) ».

Une fois connecté à votre VPS via une connexion en SSH, utilisez la ligne de commande ci-dessous pour réaliser l'importation de la base de données. Dans cet exemple, nous utilisons MySQL comme SGBD (**S**ystème de **G**estion de **B**ase de **D**onnées). Dirigez-vous vers la documentation officielle du SGBD que vous utilisez pour votre site web.

```php
<?php
system("mysql -u user_name -p db_name < root/to/file.sql
");
?>
```

Remplacez `user_name` par votre nom d'utilisateur MySQL, `db_name` par le nom de la base de données à importer, et `root/to/file.sql` par le chemin du fichier SQL sauvegardé.


    



