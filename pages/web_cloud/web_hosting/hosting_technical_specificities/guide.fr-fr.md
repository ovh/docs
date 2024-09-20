---
title: "Spécificités techniques liées aux hébergements mutualisés"
excerpt: "Découvrez dans ce guide différentes informations et spécificités techniques liées aux hébergements Web"
updated: 2023-12-08
---

## Objectif

Les offres d'hébergement web OVHcloud sont mutualisées. Par conséquent, la configuration de ces offres contient certaines spécificités techniques. Nous vous recommandons de prendre connaissance de ces spécificités *avant* d'utiliser votre hébergement web OVHcloud.

**Découvrez dans ce guide différentes informations et spécificités techniques liées aux hébergements Web**

## Prérequis

- Disposer d'une [offre d'hébergement web](/links/web/hosting){.external} compatible.
- Être connecté à votre [espace client OVHcloud](/links/manager){.external}.

## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « [Aller plus loin](#go-further) » de ce guide.
>

### FTP

- Utilisez le **mode passif** pour les connexions FTP. Assurez-vous que votre script ou votre client FTP est configuré en conséquence.

- Si vous rencontrez l'erreur d'accès « Échec de l'authentification de connexion 530 » lors de la connexion à votre espace de stockage FTP: Assurez-vous que les informations d'accès à votre espace FTP sont correctes. Pour cela, connectez-vous à votre [espace client OVHcloud](/links/manager) puis rendez-vous dans la partie `Web Cloud`{.action}. Dans la colonne de gauche, cliquez sur `Hébergements`{.action} puis sélectionnez l'hébergement web concerné. Sur la page qui s'affiche, cliquez sur l'onglet `FTP - SSH`{.action}.

Vous y retrouverez l'ensemble des informations de connexion à votre espace de stockage FTP à l'exception du mot de passe.

En effet, les mots de passe ne sont jamais affichés, mais ils peuvent être modifiés.

Retrouvez plus d'informations sur le sujet dans notre guide « [Se connecter à l'espace de stockage FTP de son hébergement Web](/pages/web_cloud/web_hosting/ftp_connection) ».

### E-mails <a name="emails"></a>

Afin de garantir une bonne qualité de service sur l'ensemble de l'infrastructure mutualisée et ainsi fluidifier l'envoi de vos e-mails vers vos destinataires, nous appliquons des quotas d'envois sur nos services d'hébergement web.

Sur une période glissante de 3600 secondes (1 heure), votre offre d'hébergement web vous permettra d'envoyer les quotas d'e-mails suivants :

|Offres|Hébergement gratuit 100M|Starter|Perso|Pro|Performance|
|---|---|---|---|---|---|
|Quantité maximale d'envoi d'e-mails par heure et par service|10|20|100|200|2000|

> [!primary]
>
> Ces limitations concernent **uniquement** les e-mails émis à l'aide de la fonction *mail()* de PHP et ne concerne pas les autres offres e-mail (envoi SMTP).
>

À l'exception des suspicions de spamming ou de phishing, l'expédition de vos e-mails pourra être différée. Vos e-mails seront conservés dans une file d'attente jusqu'à ce que le nombre d'e-mails envoyés au cours de l'heure écoulée soit inférieur au quota.

En cas d'abus ou de piratage, une partie ou l'ensemble de votre service pourra être suspendu (conformément aux CGU/CGV et Conditions particulières de votre offre). Vous serez notifié par e-mail de la suspension de celui-ci. Dans ce cas de figure, appuyez-vous les guides suivants :

- [Suivre et gérer les e-mails automatisés de son hébergement web](/pages/web_cloud/web_hosting/mail_function_script_records);
- [Cas d'usage - Conseils suite au piratage de votre site Web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

### Base de données / SQL

#### Connexions simultanées à la base de données

Sur les offres d'hébergement Web (bases de données partagées), il existe une limite de 30 connexions simultanées par base de données (cette limite passe à 200 si vous utilisez une offre [Web Cloud Databases](/links/web/databases)). Consulter le [détail de nos offres d'hébergement web](/links/web/hosting) pour connaître les options disponibles dans chaque offre d'hébergement Web.

Vous pouvez également commander des offres [Web Cloud Databases](/links/web/databases) supplémentaires, celles-ci disposent d'options de personnalisation :

- *max_connections*: 100 par défaut, avec possibilité de passer à 200;
- *max_user_connections*: 50 par défaut, avec possibilité de passer à 200.

Pour en savoir plus, consultez les détails de nos [offres d'hébergement web](/links/web/hosting) et notre guide « [Premiers pas avec votre offre Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) ».

#### Connexions depuis un serveur externe

Pour des raisons de sécurité, il n'est pas possible de se connecter d'un serveur externe à une base de données incluse dans une offre d'hébergement Web OVHcloud. Seuls les serveurs qui contiennent les hébergements Web OVHcloud peuvent se connecter aux serveurs de base de données partagées. Toute autre connexion provoquera l'erreur suivante:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```

Seuls les serveurs de bases de données [Web Cloud Databases](/links/web/databases) permettent à des serveurs externes de s'y connecter. Ceci en ayant préalablement autorisé l'adresse IP de votre serveur externe sur votre serveur de bases de données. Au besoin, consultez notre guide « [Premiers pas avec votre offre Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) ».

#### Variables serveur SQL mutualisé

Pour connaître ses variables, connectez-vous via l'interface *PhpMyAdmin* à votre base de données. Une fois connecté, cliquez sur l'onglet `SQL` sur la partie haute de la page puis entrez la requête suivante dans le formulaire central pour vérifier les variables du serveur MySQL :

```bash
SHOW VARIABLES;
``` 

> [!primary]
>
> La version MySQL ne peut pas être modifiée pour les bases de données intégrées à l'hébergement Web.
>

Pour plus d'informations sur la gestion des bases de données et sur la connection à l'interface *phpMyAdmin*, reportez-vous au guide « [Créer une base de données sur son hébergement web](/pages/web_cloud/web_hosting/sql_create_database) ».

### PHP

Nous vous recommandons de consulter nos [offres d'hébergement web](/links/web/hosting-programming-language) pour vous assurer que l'offre d'hébergement Web que vous souhaitez commander convient à vos besoins.

> [!warning]
>
> La modification du fichier **php.ini** est indisponible sur les offres d'hébergements web. Ceci du fait que la configuration PHP est globale à l'ensemble de l'infrastructure mutualisée.
>
> Cependant, vous pouvez modifier certains éléments comme, le *moteur d'exécution PHP*, l'*environnement d'exécution* ou encore la *version de PHP* de votre hébergement web.
>
> Retrouvez plus de détails sur ce sujet dans notre guide « [Hébergement web : environnement, version PHP, « .ovhconfig »](/pages/web_cloud/web_hosting/configure_your_web_hosting) »
>

Par ailleurs, vous pouvez aussi vérifier les détails de la configuration de votre hébergement web. Pour cela, consultez la rubrique « [Informations techniques de votre hébergement Web](#technical-infos-web-hosting) » en bas de ce guide.

#### PHP-FPM

PHP-FPM est activé par défaut sur l'infrastructure d'hébergement web afin d'accélérer les réponses PHP. Veuillez noter qu'il ne sera peut-être pas actif si vous exécutez une ancienne offre d'hébergement web que vous n'avez pas mise à jour (services commandés avant 2014).

*Certaines variables sont différentes sans PHP-FPM :*

|Variable|Sans PHP-FPM|Avec PHP-FPM|
|---|---|---|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|

#### PHP scripts

Une fois connecté à votre hébergement web via SSH, le trafic sortant sera bloqué pour des raisons de sécurité. Nous vous recommandons donc d'utiliser des scripts PHP. Pour plus d'informations, consultez notre [guide SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting). Vous pouvez consulter le « [PHP manual](https://www.php.net/manual/fr/function.system.php) » concernant l'exécution de commandes.

Par exemple, vous pouvez utiliser la fonction *gethostbyaddr()* pour récupérer le nom d'hôte:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3. ?>
```

> [!warning]
>
> OVHcloud ne change pas automatiquement la version de PHP de votre hébergement lorsqu'une nouvelle version est implémentée. Vous êtes maître de la sécurité du contenu services et de la mise à jour régulière de ces derniers.
>

### Informations techniques de votre hébergement Web <a name="technical-infos-web-hosting"></a>

Retrouvez et vérifiez les librairies, langages et versions disponibles pour votre offre d'hébergement web depuis cette page : <https://webhosting-infos.hosting.ovh.net>

Pour connaitre les spécificités techniques de l'offre Cloud Web, dirigez-vous vers cette page : <https://cloudweb-infos.hosting.ovh.net/>.

### Informations sur les sauvegardes automatiques <a name="backup"></a>

> [!warning]
>
> OVHcloud fournit un service de sauvegarde automatique des données ainsi que la mise à disposition de ces sauvegardes. Il reste cependant *non-contractuel* et est présent en complément de vos services. Effectivement, il est de votre responsabilité de mettre en place votre propre politique de restauration, et de déterminer des points de restaurations aux moments que vous jugez opportuns.
>

#### Espace disque / espace de stockage FTP

Toutes nos offres d'hébergement web mutualisé situées:

- à Gravelines (GRA), en France, disposent de sauvegardes automatiques à J-1 / J-2 / J-3 / J-7 / J-14. Ces sauvegardes sont également stockées sur le datacentre de Roubaix (RBX),en France;

- à Beauharnois (BHS), au Canada, disposent de sauvegardes automatiques à J-1 / J-2 / J-3 / J-7 / J-14. Ces sauvegardes sont également stockées sur le datacenter de Beauharnois (BHS), au Canada.

Découvrez comment [se connecter à l’espace de stockage FTP de votre hébergement web](/pages/web_cloud/web_hosting/ftp_connection) ou [restaurer l’espace de stockage FTP de son hébergement web](/pages/web_cloud/web_hosting/ftp_save_and_backup) sur nos documentations.

#### Base de données / SQL

> [!warning]
>
> OVHcloud fournit un service de sauvegarde automatique des données ainsi que la mise à disposition de ces sauvegardes. Il reste cependant *non-contractuel* et est présent en complément de vos services. Effectivement, il est de votre responsabilité de mettre en place votre propre politique de restauration, et de déterminer des points de restaurations aux moments que vous jugez opportuns.
>

Pour les bases de données mutualisées (comprises dans votre offre d'hébergement Web) ou les serveurs de base de données (Web Cloud Databases), proposés sur Gravelines (GRA), en France et Beauharnois (BHS), au Canada, la sauvegarde des bases est faite tous les jours. Ces sauvegardes sont accessibles (via [l'espace client OVHcloud](/links/manager){.external} ou via les [API OVHcloud](https://api.ovh.com/)). Les sauvegardes sont également stockées sur une autre infrastructure. Ces données sont répliquées dans un centre de données situé à Strasbourg (SBG). La politique de rétention des sauvegardes est de 30 jours.

Découvrez comment [Récupérer la sauvegarde de la base de données d’un hébergement web](/pages/web_cloud/web_hosting/sql_database_export) sur notre documentation.

#### E-mail

> [!warning]
>
> OVHcloud fournit un service de sauvegarde automatique des données. Il reste cependant *non-contractuel* et est présent en complément de vos services. Effectivement, il est de votre responsabilité de mettre en place votre propre politique de restauration, et de déterminer des points de restaurations aux moments que vous jugez opportuns.
>

Pour les comptes e-mails mutualisés (compris dans votre offre d'hébergement Web), une sauvegarde automatique quotidienne est réalisée et copiée dans un autre centre de données.

### Politique d'utilisation des cookies

**Cookies et traceurs utilisés dans le cadre de la fourniture du service hébergement mutualisé.**

Afin d’assurer le bon fonctionnement des sites Internet hébergés dans le cadre du service hébergement web mutualisé, le cookie « SERVER ID » est placé sur les terminaux des visiteurs de ces sites Internet. Le cookie « SERVER ID » permet d’assurer un service de répartition de charge du trafic entrant entre les différentes infrastructures utilisées pour l’hébergement du site Internet (OVHcloud Load Balancer). Il permet à l'utilisateur de rester sur le même serveur hôte pendant toute la durée de sa session. 

> [!success]
>
> Dans le langage informatique, on qualifie de « session » une période donnée pendant laquelle un appareil (ordinateur, smartphone, etc.) interagit avec un serveur.
>

Ceci permet de maintenir et préserver la cohérence du parcours utilisateur.

Le cookie « SERVER ID » constitue une écriture sur le terminal de l’utilisateur qui indique l’instance (serveur) de l’infrastructure avec laquelle l’utilisateur interagit. Le cookie est anonyme en ce sens qu’aucune donnée à caractère personnel de l’utilisateur n’est utilisée.

Le cookie « SERVER ID » est placé sur le terminal de l’utilisateur pour une durée inférieure à 24 heures.

S'agissant d'un cookie :

 - 1 : nécessaire au fonctionnement du service d’hébergement web mutualisé;
 - 2 : anonyme.

Il n'est pas concerné par le recueil préalable du consentement du visiteur du site internet au sens de la Réglementation Générale de Protection des données (RGPD).

### Informations sur les outils de statistiques

**OVHcloud Web Statistics**

OVHcloud met à disposition du client des statistiques de fréquentation et de mesure d’audience du ou des site(s) Internet hébergé(s) dans le cadre du service hébergement mutualisé. (ci-après « OVHcloud Web Statistics »). « OVHcloud Web Statistics » permet notamment d’identifier la zone géographique des visiteurs des sites Internet hébergé(s) dans le cadre du service d'un hébergement web mutualisé, les caractéristiques de leurs terminaux, des pages vues et codes HTTP. « OVHcloud Web Statistics » est activé par défaut dans le cadre du service d'un hébergement mutualisé et peut être désactivé sur demande du client en contactant le support technique. Afin de fournir « OVHcloud Web Statistics », OVHcloud opère des traitements de données.

Les rapports « OVHcloud Web Statistics » sont établis à partir de données de trafic anonymisées, telles que l’adresse IP et les logs des utilisateurs des sites Internet hébergé(s) dans le cadre d'une offre d'hébergement mutualisé, l’URL de la requête, la durée de la requête et le « useragent ».

Afin d’être utilisées dans le cadre d’« OVHcloud Web Statistics », les données citées préalablement sont anonymisées et agrégées à l’aide d’algorithmes opérés par OVHcloud, sur ses propres infrastructures. Notamment, l’adresse IP du visiteur présente dans les données de trafic, afin d’être traitée et analysée pour déterminer sa géolocalisation (limitée à un niveau régional), est extraite sous forme anonymisée. Ainsi, aucune donnée à caractère personnel permettant l’identification, directe ou indirecte, des visiteurs cités préalablement n’est conservée dans le cadre d’« OVHcloud Web Statistics ».  

## Aller plus loin <a name="go-further"></a>

[Se connecter à l’espace de stockage FTP de son hébergement web](/pages/web_cloud/web_hosting/ftp_connection)

[Passer son site internet en HTTPS grâce au SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Optimisation des performances de votre site](/pages/web_cloud/web_hosting/optimise_your_website_performance)

[Restaurer l’espace de stockage FTP de son hébergement web](/pages/web_cloud/web_hosting/ftp_save_and_backup)

[Récupérer la sauvegarde de la base de données d’un hébergement web](/pages/web_cloud/web_hosting/sql_database_export)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).