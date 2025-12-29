---
title: "Exporter son site web"
excerpt: "Découvrez comment exporter votre site web OVHcloud"
updated: 2025-10-28
---

## Objectif

Ce guide vous présente les étapes pour exporter l’ensemble des éléments de votre site web au format standard, depuis un [hébergement web OVHcloud](/links/web/hosting).

**Découvrez comment exporter votre site web OVHcloud.**

## Prérequis

- Disposer d'une [offre d'hébergement web OVHcloud](/links/web/hosting).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### 1 - Récupération des fichiers de votre espace de stockage FTP

#### 1.1 Se connecter à l'espace de stockage.

Pour vous connecter à votre espace de stockage, vous devez être en possession des éléments suivants :

- l'utilisateur FTP ou SSH actif.
- le mot de passe associé à cet utilisateur FTP ou SSH.
- l’adresse du serveur.
- le port de connexion au serveur.

Ces éléments vous ont été communiqués dans l’e-mail vous notifiant l’installation de votre hébergement web. 

Si vous n’êtes pas en possession de ces derniers, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **4** étapes.

> [!tabs]
> **Étape 1**
>>
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), puis rendez-vous dans la partie `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Étape 2**
>>
>> Cliquez sur le menu `Hébergements`{.action}, puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 3**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `FTP - SSH`{.action}. 
>>
>> ![FTP- SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Étape 4**
>>
>> Les informations liées à votre espace de stockage apparaissent alors. Vous devriez pouvoir retrouver les éléments requis pour vous connecter à celui-ci.
>>
>> ![FTP - SSH tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}
>>
>> Si nécessaire, nous vous invitons à consulter notre guide : [« Se connecter à l’espace de stockage de son hébergement web »](/pages/web_cloud/web_hosting/ftp_connection).
>>
>> Si vous n'êtes plus en possession du mot de passe, reportez-vous aux instructions décrites dans notre documentation [« Modifier le mot de passe d’un utilisateur FTP »](/pages/web_cloud/web_hosting/ftp_change_password).

Une fois tous les éléments en votre possession, la récupération de vos fichiers sur l'espace de stockage peut s'effectuer de deux manières différentes :

- **Utiliser un logiciel compatible avec le protocole FTP ou SFTP** : vous devrez installer un logiciel compatible sur votre ordinateur, comme [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide). Nous vous invitons à vous rapprocher de l'éditeur du logiciel installé si vous souhaitez obtenir de l'aide sur son utilisation, OVHcloud n'ayant pas créé celui-ci ;

- **Utiliser un accès SSH** : vous devrez utiliser des commandes depuis un terminal pour interagir avec votre espace de stockage. Des connaissances plus avancées ainsi qu'une [offre d'hébergement web OVHcloud](/links/web/hosting) spécifique sont nécessaires pour utiliser ce type d'accès. Pour plus d'informations, vous pouvez consulter notre guide  [« Utiliser l’accès SSH de son hébergement web»](/pages/web_cloud/web_hosting/ssh_on_webhosting). 

#### 1.2 Télécharger les fichiers depuis votre espace de stockage.

Une fois connecté à votre espace de stockage, il ne vous reste plus qu’à télécharger les fichiers de votre site. **Nous vous invitons à être particulièrement attentifs quant au répertoire sur lequel vous avez installé votre site**. Dans un cas d'utilisation classique, le site doit être téléchargé dans le dossier « www ». Cependant, si vous utilisez votre hébergement pour héberger plusieurs sites internet, vous avez sûrement déclaré plusieurs sites web.

Pour vérifier le dossier dans lequel votre site web est stocké, positionnez-vous sur l'onglet `Multisite`{.action} depuis votre espace client OVHcloud. Dans le tableau qui s'affiche, pour le domaine souhaité, regardez le `Dossier racine`{.action} qui s'affiche.

![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

### 2 - Récupérer la sauvegarde de votre base de données (facultative)

> [!primary]
>
> Cette étape est facultative si votre site web n’utilise pas de base de données.
>

Pour récupérer une sauvegarde de votre base de données, consultez notre guide :
[« Récupérer la sauvegarde de la base de données d’un hébergement web »](/pages/web_cloud/web_hosting/sql_database_export).

Si vous utilisez une base de données **Web Cloud Databases** pour votre site Web, consultez la section dédiée à la sauvegarde sur notre guide :
[Sauvegarder et exporter une base de données sur votre serveur de bases de données](/pages/web_cloud/web_cloud_databases/save-export-on-database-server).

### 3 - Récupérer les logs de votre hébergement OVHcloud

Si vous souhaitez conserver l'historique des logs de votre site, un accès à ces derniers est disponible avec votre hébergement.

Cliquez sur `Hébergements`{.action} et sélectionnez l'offre concernée. Cliquez sur l'onglet `Statistiques et logs`{.action}.

![statistics-and-logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs.png){.thumbnail}

Cliquez ensuite sur le lien sous la mention `Voir les logs`{.action} :

![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-logs.png){.thumbnail}

Une fenêtre apparait avec les différents types de logs à disposition. Ils sont classés par mois :

| Type  	| Description                                                                                                                                                                                         	|
|-------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Web   	| Trouvez ici les différents logs de consultation de votre site, ainsi que les différentes actions réalisées à partir de votre site. Cela vous permet par exemple de repérer des tentatives de hacks. 	|
| FTP   	| les différentes connexions FTP seront enregistrées et conservées dans ces logs.                                                                                                                     	|
| Error 	| les différentes erreurs générées par votre site.                                                                                                                                                    	|
| CGI   	| les différents appels aux scripts cgi.bin qui ont été réalisés.                                                                                                                                     	|
| out   	| les statistiques de votre hébergement sur les différents appels externes réalisés.                                                                                                                  	|
| ssh   	| ces logs indiquent les différentes connexions réalisées avec le protocole SSH.                                                                                                                      	|
| cron  	| le résultat de l’exécution de vos tâches planifiées.                                                                                                                                                	|

![export-website](/pages/assets/screens/other/web-tools/logs/raw-logs-general.png){.thumbnail}

Lorsque vous avez sélectionné le type de logs sur le mois qui vous intéresse, ces derniers sont archivés par jour :

![export-website](/pages/assets/screens/other/web-tools/logs/raw-logs.png){.thumbnail}

## Aller plus loin

[Se connecter à l’espace de stockage de son hébergement web](/pages/web_cloud/web_hosting/ftp_connection).

[Modifier le mot de passe d’un utilisateur FTP](/pages/web_cloud/web_hosting/ftp_change_password).

[Utiliser FileZilla avec votre hebergement](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).

[Utiliser l’accès SSH de son hébergement web](/pages/web_cloud/web_hosting/ssh_on_webhosting). 

[Récupérer la sauvegarde de la base de données d’un hébergement web](/pages/web_cloud/web_hosting/sql_database_export).

[Premiers pas avec le service Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).