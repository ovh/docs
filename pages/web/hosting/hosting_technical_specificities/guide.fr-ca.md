---
title: 'Spécificités techniques liées aux hébergements mutualisés'
slug: specificites-techniques-hebergements-mutualises
excerpt: 'Vous trouverez dans ce guide différentes informations et spécificités techniques liées aux hébergements mutualisés.'
section: "Configuration de l'hébergement"
order: 05
---

**Dernière mise à jour le 28/07/2022**

## Objectif

**Ce guide vous informe des détails techniques de l'infrastructure des hébergement Web OVHcloud, en fonction des questions les plus fréquemment posées**

## Prérequis

- Disposer d'une [offre d'hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/){.external} compatible.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

## En pratique

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

### FTP

- Erreur d'accès ("Échec de l'authentification de connexion 530"): Vous pouvez vous assurer que les informations d'accès à votre espace FTP sont correctes en vérifiant celles-ci via votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} dans l'onglet `FTP - SSH`. Les mots de passe ne sont jamais affichés, mais ils peuvent être modifiés. Veuillez consulter nos [guides FTP](../connexion-espace-stockage-ftp-hebergement-web/).

- Les connexions FTP doivent utiliser le **mode passif**. Assurez-vous que votre script ou votre client FTP est ajusté en conséquence.

### E-mails <a name="emails"></a>

Pour garantir une bonne qualité de service pour tous et fluidifier l'envoi de vos e-mails vers vos destinataires, nous appliquons des quotas concernant nos services d'hébergement web.

Sur une période glissante de 3600 secondes (soit 1 heure), votre offre d'hébergement vous permettra d'envoyer les quotas d'e-mails suivants :

|Offres|Perso|Pro|Performance|
|---|---|---|---|
|Quantité maximale d'envoi d'e-mails par heure et par service|100|200|2000|

- En dehors de suspicions de spamming ou de phishing, l'expédition de vos e-mails pourra être différée. Vos e-mails seront conservés dans une file d'attente jusqu'à ce que le nombre d'e-mails envoyés au cours de l'heure écoulée soit inférieur au quota.
- En cas d'abus ou de risque avéré, votre service sera suspendu et vous serez notifié par e-mail de la suspension de celui-ci. Que faire en cas de compte bloqué pour spam ? Consultez [notre guide](https://docs.ovh.com/ca/fr/microsoft-collaborative-solutions/bloque-pour-spam/).

### Base de données / SQL

### Connexions simultanées à la base de données

- Sur les offres d'hébergement Web (bases de données partagées), il y a une limite de 30 connexions simultanées par base de données. Veuillez consulter le [détail de nos offres d'hébergement](https://www.ovhcloud.com/fr-ca/web-hosting/) pour vérifier les options disponibles dans chaque plan d'hébergement Web.

#### Connexions depuis un serveur externe

- Pour des raisons de sécurité, il n'est pas possible de se connecter d'un serveur externe à la base de données d'un hébergement Web OVHcloud. Seuls les serveurs OVHcloud Web Hosting peuvent se connecter aux serveurs de base de données. Toute autre connexion provoquera l'erreur suivante:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```


#### Variables serveur SQL mutualisé

- Connectez-vous à l'interface PhpMyAdmin, puis entrez **show variables** pour vérifier les variables du serveur MySQL.

- La version MySQL ne peut pas être modifiée pour les bases de données intégrées à l'hébergement Web.

Pour plus d'informations sur la gestion des bases de données, reportez-vous au guide [Créer une base de données sur son hébergement web](../creer-base-de-donnees/).

### PHP

- Nous vous recommandons de consulter nos [offres d'hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/uc-programming-language/) pour vous assurer que le plan d'hébergement Web que vous souhaitez commander sera compatible avec vos besoins.

> [!warning]
>
> La modification du fichier **php.ini** est indisponible sur les offres d'hébergements mutualisés. Ceci du fait que la configuration PHP est globale à l'ensemble de l'infrastructure mutualisée.
>

- Vous pouvez vérifier les détails de la configuration de votre hébergement web. Pour cela, consultez la rubrique [« Informations techniques de votre hébergement Web »](./#informations-techniques de-votre-hebergement-web) en bas de ce guide. 

- Vous pourrez modifier la version PHP de votre hébergement web, soit depuis [l'espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) ("**Configuration**"), soit en modifiant le fichier .ovhconfig. Des configurations mixtes sont également possibles avec ces dernières. Des instructions détaillées sont disponibles dans nos guides :

[Configurer le fichier .ovhconfig de son hébergement web](../configurer-fichier-ovhconfig/)  
[Modifier la configuration de son hébergement web](../modifier-lenvironnement-dexecution-de-mon-hebergement-web/)


> [!primary]
> Le fichier .ovhconfig est fonctionnel dans le dossier racine de l'hébergement Web ou dans un sous-répertoire de premier niveau (généralement _/www/_). La seule façon de remplacer les paramètres principaux du fichier .ovhconfig est d'utiliser un autre fichier .ovhconfig dans un sous-dossier.
> Le fait de placer ce fichier plus en profondeur dans la structure du répertoire n'aura aucun effet (p. ex. _/www/test/_, _/www/test/test2/_). Assurez-vous que le fichier est lisible par votre CMS (CHMOD 604 ou 644).


#### PHP-FPM

PHP-FPM est activé par défaut sur l'infrastructure d'hébergement web afin d'accélérer les réponses PHP. Veuillez noter qu'il ne sera peut-être pas actif si vous exécutez une ancienne offre d'hébergement web que vous n'avez pas mise à jour (services commandés avant 2014).

*Certaines variables sont différentes sans PHP-FPM :*

|Variable|Sans PHP-FPM|Avec PHP-FPM|
|---|---|---|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|


#### PHP scripts

Une fois connecté à votre hébergement web via SSH, le trafic sortant sera bloqué pour des raisons de sécurité. Nous vous recommandons donc d'utiliser des scripts PHP. Pour plus d'informations, consultez notre [guide SSH](../mutualise-le-ssh-sur-les-hebergements-mutualises/). Vous pouvez consulter le manuel officiel [PHP manual](https://www.php.net/manual/fr/function.system.php) concernant l'exécution de commandes.

Par exemple, vous pouvez utiliser la fonction *gethostbyaddr()* pour récupérer le nom d'hôte:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3. ?>
```


> [!warning]
> OVHcloud ne force pas les mises à jour PHP. Les clients sont entièrement responsables de la sécurité de leurs services et de la mise à jour régulière des logiciels installés.
>


#### Informations techniques de votre hébergement Web

Veuillez consulter les pages d'informations respectives pour vérifier les librairies disponibles pour votre offre d'hébergement web.

Il vous est possible de retrouver différentes informations sur votre cluster via ce lien : <https://webhosting-infos.hosting.ovh.net>

Remplacez le cluster indiqué dans l'URL par le vôtre. Pour savoir sur quel cluster d'hébergement web se trouve votre service, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} et sélectionnez `Web Cloud`{.action} . Cliquez sur `Hébergement`{.action}, puis choisissez l'hébergement web concerné. Ensuite, cliquez sur l'onglet `FTP - SSH`{.action}. L'URL d'accès FTP à votre hébergement vous indiquera le numéro du cluster.

Pour connaitre les spécificités technique de l'offre Cloud Web, dirigez-vous directement vers le lien <https://cloudweb-infos.hosting.ovh.net/>.

## Politique d'utilisation des cookies

**Cookies et traceurs utilisés dans le cadre de la fourniture du service hébergement mutualisé.**

Afin d’assurer le bon fonctionnement des sites Internet hébergés dans le cadre du service hébergement mutualisé, le cookie « SERVER ID » est placé sur les terminaux des visiteurs de ces sites Internet. Le cookie « SERVER ID » permet d’assurer un service de répartition de charge du trafic entrant entre les différentes infrastructures utilisées pour l’hébergement du site Internet (OVHcloud Load Balancer). Il permet à l'utilisateur de rester sur le même serveur hôte pendant toute la durée de sa session. Ceci permet de maintenir et préserver la cohérence du parcours utilisateur.

Le cookie SERVER ID constitue une écriture sur le terminal de l’utilisateur qui indique l’instance (serveur) de l’infrastructure avec laquelle l’utilisateur interagit. Le cookie est anonyme en ce sens qu’aucune donnée à caractère personnel de l’utilisateur n’est utilisée.

Le cookie « SERVER ID » est placé sur le terminal de l’utilisateur pour une durée inférieure à 24 heures.

S'agissant d'un cookie nécessaire au fonctionnement du service d’hébergement mutualisé et anonyme, il n'est pas concerné par le recueil préalable du consentement du visiteur du site internet au sens de la Réglementation Générale de Protection des données (RGPD). 

## Informations sur les outils de statistiques

**OVHcloud Web Statistics**

OVHcloud met à disposition du client des statistiques de fréquentation et de mesure d’audience du ou des site(s) Internet hébergé(s) dans le cadre du service hébergement mutualisé. (ci-après « OVHcloud Web Statistics »). OVHcloud Web Statistics permet notamment d’identifier la zone géographique des visiteurs des sites Internet hébergé(s) dans le cadre du service hébergement mutualisé, les caractéristiques de leurs terminaux, des pages vues et codes HTTP. OVHcloud Web Statistics est activé par défaut dans le cadre du service hébergement mutualisé et peut être désactivé sur simple demande du client en contactant le support technique. Afin de fournir « OVHcloud Web Statistics », OVHcloud opère des traitements de données.

Les rapports OVHcloud Web Statistics sont établis à partir de données de trafic anonymisées, telles que l’adresse IP et les logs des utilisateurs des sites Internet hébergé(s) dans le cadre du service hébergement mutualisé, l’url de la requête, la durée de la requête et le « useragent ».

Afin d’être utilisées dans le cadre d’OVHcloud Web Statistics, les données citées préalablement sont anonymisées et agrégées à l’aide d’algorithmes opérés par OVHcloud, sur ses propres infrastructures. Notamment, l’adresse IP du visiteur présente dans les données de trafic, afin d’être traitée et analysée pour déterminer sa géolocalisation (limitée à l'échelle de la région), est extraite sous forme anonymisée. Ainsi, aucune donnée à caractère personnel permettant l’identification, directe ou indirecte, des visiteurs cités préalablement n’est conservée dans le cadre d’OVHcloud Web Statistics.  

## Aller plus loin

[Se connecter à l’espace de stockage de son hébergement web](../connexion-espace-stockage-ftp-hebergement-web/)

[Passer son site internet en HTTPS grâce au SSL](../passer-site-internet-https-ssl/)

[Optimisation des performances de votre site](../optimisation-performances-site/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
