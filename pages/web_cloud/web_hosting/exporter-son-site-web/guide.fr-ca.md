---
title: "Exporter son site web"
excerpt: "Découvrez comment exporter votre site web OVHcloud"
updated: 2026-05-04
---

## Objectif

Ce guide vous présente les étapes pour exporter l’ensemble des éléments de votre site web au format standard, depuis un [hébergement web OVHcloud](/links/web/hosting).

**Découvrez comment exporter votre site web OVHcloud.**

## Prérequis

- Disposer d'une [offre d'hébergement web OVHcloud](/links/web/hosting).

<!-- CP-NAV-START:web-hosting -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Hébergements](/links/control-panel/web-hosting)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Hébergements`{.action} > Sélectionnez votre hébergement web

---
<!-- CP-NAV-END:web-hosting -->

## En pratique

### 1 - Récupération des fichiers de votre espace de stockage FTP

#### 1.1 Se connecter à l'espace de stockage.

Pour vous connecter à votre espace de stockage, vous devez être en possession des éléments suivants :

- l'utilisateur FTP ou SSH actif.
- le mot de passe associé à cet utilisateur FTP ou SSH.
- l’adresse du serveur.
- le port de connexion au serveur.

Ces éléments vous ont été communiqués dans l’e-mail vous notifiant l’installation de votre hébergement web. 

<!-- CP-STEPS-START:export-retrieve-ftp-credentials -->
Si vous n’êtes pas en possession de ces derniers, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `FTP - SSH`{.action}. 
>>
>> ![FTP- SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Étape 3**
>>
>> Les informations liées à votre espace de stockage apparaissent alors. Vous devriez pouvoir retrouver les éléments requis pour vous connecter à celui-ci.
>>
>> ![FTP - SSH tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}
>>
>> Si nécessaire, nous vous invitons à consulter notre guide : [« Se connecter à l’espace de stockage de son hébergement web »](/pages/web_cloud/web_hosting/ftp_connection).
>>
>> Si vous n'êtes plus en possession du mot de passe, reportez-vous aux instructions décrites dans notre documentation [« Modifier le mot de passe d’un utilisateur FTP »](/pages/web_cloud/web_hosting/ftp_change_password).
<!-- CP-STEPS-END:export-retrieve-ftp-credentials -->

Une fois tous les éléments en votre possession, la récupération de vos fichiers sur l'espace de stockage peut s'effectuer de deux manières différentes :

- **Utiliser un logiciel compatible avec le protocole FTP ou SFTP** : vous devrez installer un logiciel compatible sur votre ordinateur, comme [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide). Nous vous invitons à vous rapprocher de l'éditeur du logiciel installé si vous souhaitez obtenir de l'aide sur son utilisation, OVHcloud n'ayant pas créé celui-ci ;

- **Utiliser un accès SSH** : vous devrez utiliser des commandes depuis un terminal pour interagir avec votre espace de stockage. Des connaissances plus avancées ainsi qu'une [offre d'hébergement web OVHcloud](/links/web/hosting) spécifique sont nécessaires pour utiliser ce type d'accès. Pour plus d'informations, vous pouvez consulter notre guide  [« Utiliser l’accès SSH de son hébergement web»](/pages/web_cloud/web_hosting/ssh_on_webhosting). 

#### 1.2 Télécharger les fichiers depuis votre espace de stockage.

Une fois connecté à votre espace de stockage et en fonction de vos sites web hébergés dessus, plusieurs dossiers peuvent apparaître.

<!-- CP-STEPS-START:find-root-folder -->
Si besoin, identifiez au préalable dans votre hébergement web le nom du dossier racine dans lequel votre site web est stocké. Pour cela, cliquez sur les onglets ci-dessous pour afficher successivement chacune des **3** étapes.

> [!tabs]
> **Étape 1**
>>
>> Accédez à la page [Hébergements](/links/control-panel/web-hosting), puis choisissez l'hébergement web concerné.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Étape 2**
>>
>> Sur la page qui s'affiche, cliquez sur l'onglet `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Étape 3**
>>
>> Dans le tableau qui apparaît, pour le site web souhaité, regardez le `Dossier racine`{.action} qui s'affiche.
>>
>> ![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}
<!-- CP-STEPS-END:find-root-folder -->

Toujours connecté à votre espace de stockage, il ne vous reste plus qu’à télécharger les fichiers de votre site web en accédant au dossier racine identifié précédemment.

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

Consultez notre guide dédié : [Hébergement web - Consulter les statistiques et logs d’un site web](/pages/web_cloud/web_hosting/logs_and_statistics).

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
