---
title: "Configuration d'un service OVHcloud Load Balancer - Les en-têtes HTTP"
excerpt: Intégrez vos services web derrière un Load Balancer avec les en-têtes HTTP
updated: 2025-11-12
---

## Objectif

Le service OVHcloud Load Balancer agit en tant que mandataire ou « Proxy ». À l'instar d'un mandataire humain, il fait office d'intermédiaire : le client s'adresse au mandataire qui, à son tour, contacte le fournisseur de service au nom du client. Dans cette configuration, **seul le mandataire** est en possession des informations concernant le **véritable client** (le visiteur de votre service web) et le **véritable fournisseur de service** (l'un de vos serveurs).

Pour le visiteur, cette configuration ne soulève aucune difficulté. Il n'a pas besoin de connaître le serveur précis qui traite sa requête ; il s'agit d'un détail d'implémentation. En revanche, pour des raisons à la fois légales et statistiques, il est **impératif** que le serveur final ait connaissance de l'adresse réelle du client. Or, par défaut, il n'identifie que le mandataire, en l'occurrence votre service OVHcloud Load Balancer.

Afin de pallier cet inconvénient, votre service OVHcloud Load Balancer **ajoute par défaut** les en-têtes HTTP standards qui permettent de retrouver ces informations dans le cas d'une connexion HTTP. Pour une connexion TCP, d'autres solutions telles que le ProxyProtocol existent, mais elles dépassent le cadre de ce guide.

**Ce guide présente les en-têtes par défaut, leur fonction, la manière de les exploiter sur les serveurs les plus courants et comment les personnaliser en fonction des exigences de votre infrastructure.**

Ce guide s'adresse spécifiquement à vous si vous ne retrouvez que des adresses IP privées dans vos journaux d'accès (`access_log`).

## Prérequis

- Posséder une offre [OVHcloud Load balancer](/links/network/load-balancer) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](/links/manager).
- Posséder un service Web installé et configuré sur vos serveurs.
- Posséder un service Nginx installé et configuré sur vos serveurs.

## En pratique

```bash
10.108.0.15 - - [02/Fev/2022:10:56:47 +0100] "GET / HTTP/1.1" 200 706 "-" "Mozilla/5.0 (Linux[...]"
10.108.0.24 - - [02/Fev/2022/:10:56:47 +0100] "GET / HTTP/1.1" 200 706 "-" "Mozilla/5.0 (Linux[...]"
```

### Obligations légales

Il se peut que vous soyez tenu de conserver des journaux et certaines données relatives au trafic en vertu des lois et réglementations qui vous sont applicables. **Il vous incombe de vous conformer à ces obligations.**

**À titre d'exemple :**

- [L'article L34-1 du Code des postes et des communications électroniques](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006070987&idArticle=LEGIARTI000006465770&dateTexte=&categorieLien=cid) ainsi que le [décret n°2006-358 du 24 mars 2006 relatif à la conservation des données des communications électroniques](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000637071&dateTexte=20180110) imposent notamment à toute personne physique ou morale fournissant un service de communications électroniques au public de conserver les données d'identification des utilisateurs des services fournis, etc. ;
- La [loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique](https://www.legifrance.gouv.fr/affichTexteArticle.do?idArticle=JORFARTI000002457442&cidTexte=JORFTEXT000000801164) et le [décret n° 2011-219 du 25 février 2011](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000023646013&categorieLien=id) exigent notamment des personnes dont l'activité consiste à offrir un accès à des services de communication au public en ligne de conserver, pour chaque connexion, les données relatives à l'identifiant de la connexion, les dates et heures de début et de fin de la connexion, etc.

### En-têtes par défaut

Par défaut, votre service OVHcloud Load Balancer ajoute **cinq** en-têtes HTTP standards à chaque requête, permettant d'identifier l'adresse et le port du visiteur de votre site ainsi que le protocole de connexion initial.

|En-tête|Description|
|---|---|
|X-Forwarded-For et X-Remote-Ip|Adresse IP du client, telle que vue par votre OVHcloud Load Balancer.|
|X-Forwarded-Port et X-Remote-Port|Port source du client, tel que vu par votre OVHcloud Load Balancer.|
|X-Forwarded-Proto|Protocole du client (HTTP ou HTTPS), tel que vu par votre OVHcloud Load Balancer.|

> [!warning]
> Les champs `X-Forwarded-*` pouvant être manipulés par un client malveillant, **ils ne doivent être pris en compte que s'ils proviennent d'une source de confiance.**
>
> Il est donc **essentiel** de restreindre leur utilisation aux adresses IP de confiance, qui sont en l'occurrence les adresses IP de sortie de votre service OVHcloud Load Balancer. Les principaux serveurs web tels que Nginx et Apache disposent de modules capables de gérer cet aspect de sécurité et de fiabilité.
>

La liste de vos adresses IP de sortie est disponible via l'espace client OVHcloud et l'API OVHcloud.

#### Depuis l'espace client OVHcloud

La liste des adresses IPv4 de sortie susceptibles d'être utilisées par votre service OVHcloud Load Balancer est accessible sur la page d'accueil de votre service Load Balancer. Dans le cadre **Informations**, cliquez sur le bouton `...`{.action} à droite de la mention **IPv4 de sortie** et sélectionnez `Consulter`{.action}.

![Adresse IPv4 de sortie de votre service OVHcloud Load Balancer](images/iplb_service.png){.thumbnail}

#### Depuis l'API OVHcloud

Récupération de la liste des adresses IP utilisées par votre service OVHcloud Load Balancer :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/natIp
> 

### Correction de l'adresse IP source dans les logs <a name="ip-source-logs"></a>

Par défaut, Apache, Nginx et les autres serveurs web enregistrent l'adresse IP source dans leurs journaux. Lorsque vous utilisez un service OVHcloud Load Balancer en amont de votre site web, les logs ne contiennent alors que des adresses IP de la forme « 10.108.a.b ». Il s'agit des adresses IP internes utilisées par le service OVHcloud Load Balancer pour vous contacter.

Lorsqu'une requête transite par votre service OVHcloud Load Balancer, celui-ci enregistre l'adresse IP de votre visiteur dans les en-têtes `X-Forwarded-For` et `X-Remote-Ip`. Ces deux champs contiennent la même information, leur nom diffère uniquement pour des raisons de compatibilité avec la majorité des serveurs.

Pour corriger les adresses IP dans les logs, une solution pourrait être de modifier la directive de format de logs de votre serveur pour utiliser l'un de ces en-têtes à la place de l'adresse IP du Load Balancer. Malheureusement, cette approche est insuffisante, car n'importe qui peut renseigner cet en-tête, même sans passer par votre service OVHcloud Load Balancer. Une telle manipulation permettrait au visiteur de se faire passer pour quelqu'un d'autre. Outre l'aspect éthique, cette pratique a des implications légales de sécurité et de statistiques, qui rendent sa prévention indispensable.

C'est pourquoi les principaux serveurs web intègrent des modules spécialisés permettant de contrôler avec précision le niveau de confiance accordé à ces en-têtes en se basant sur : 

- l'adresse IP source (doit être exclusivement celle de votre service OVHcloud Load Balancer !) ;
- le niveau de profondeur de l'adresse IP dans le champ. En effet, chaque mandataire (proxy, load balancer) ajoute l'adresse IP de son client dans ce champ.

La suite de ce guide propose des pratiques de configuration recommandées pour les principaux serveurs web.

#### Apache

- Créez le fichier `/etc/apache2/conf-available/remoteip.conf`.
- Insérez la configuration suivante :

```apache
1. # Trust X-Forwarded-For headers from the OVHcloud Load Balancer
2. # See https://www.ovh.com/manager/sunrise/iplb/index.html#/iplb for an up to date list
3. RemoteIPHeader X-Forwarded-For
4. RemoteIPInternalProxy 10.108.0.0/14
```

- Remplacez les variables `%h` par `%a` dans les directives `LogFormat` de la configuration Apache.
- Enfin, activez la nouvelle configuration avec :

```bash
# Enable the 'remoteip' module and configuration
a2enmod remoteip
a2enconf remoteip

# Restart apache to load the new module ("reload" is enough if the module was already enabled)
service apache2 restart
```

#### Nginx

Pour Nginx, l'approche est légèrement plus simple, mais le principe demeure identique à celui d'Apache : ne prendre en compte le champ `X-Forwarded-For` que s'il provient de votre service OVHcloud Load Balancer.

Cette configuration peut être appliquée :

- à l'ensemble des sites, en insérant la configuration dans la section `http {}` ;
- à un site en particulier, en insérant la configuration dans la section `server {}` correspondante ;
- à une URL spécifique, en insérant la configuration dans la section `location {}` correspondante.
- Insérez la configuration dans la ou les sections souhaitées (`http {}` pour une configuration globale) :

```nginx
1. # Trust X-Forwarded-For headers from the OVHcloud Load Balancer
2. # See https://www.ovh.com/manager/sunrise/iplb/index.html#/iplb for an up to date list
3. set_real_ip_from 10.108.0.0/16;
4. real_ip_header X-Forwarded-For;
```

- Puis activez la nouvelle configuration avec :

```bash
service nginx reload
```

#### Redirection des visiteurs HTTP vers HTTPS

Pour renforcer la sécurité, certains contenus, tels que les pages de connexion, peuvent être restreints au protocole HTTPS. Certains sites optent même pour la redirection systématique de toutes les visites vers la version HTTPS. Par défaut, les protocoles HTTP et HTTPS utilisent des ports différents (respectivement 80 et 443), la solution classique consiste à placer les règles de redirection directement dans le *vhost* dédié au HTTP.

Lorsqu'une requête passe par un service comme le Load Balancer OVHcloud, celui-ci gère la réception du trafic HTTP, le déchiffrement du trafic HTTPS et transmet les deux types de trafic à vos serveurs. Selon la configuration de vos serveurs, l'ensemble du trafic sera propagé en HTTP ou en HTTPS, sans distinction du protocole d'entrée sur le Load Balancer. Votre serveur ne peut plus différencier les deux, car les deux arrivent au même point. Ce processus est appelé **« Terminaison SSL »**.

C'est pourquoi le service OVHcloud Load Balancer ajoute automatiquement un en-tête `X-Forwarded-Proto` qui indique le nom du protocole d'origine, soit « http » ou « https ».

Tout comme `X-Forwarded-For`, cet en-tête peut être contrefait par un visiteur malveillant pour faire croire qu'une requête non sécurisée provient de votre service OVHcloud Load Balancer, en HTTPS. Il est crucial de ne se fier à cet en-tête que s'il est avéré qu'il provient de votre service OVHcloud Load Balancer.

#### Apache

- Insérez la configuration suivante dans le fichier `.htaccess` de votre site :

    ```apache
    1. RewriteEngine on
    2. RewriteCond %{HTTP:X-Forwarded-Proto} !https
    3. RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
    ```

- Puis activez la nouvelle configuration avec :

    ```bash
    service apache2 reload
    ```

#### Nginx

- Insérez la configuration suivante dans la section `server {` de votre site :

    ```nginx
    1. if ($http_x_forwarded_proto = "http") {
    2.         return 301 https://$host/$request_uri;
    3. }
    ```

- Puis activez la nouvelle configuration avec :

```bash
service nginx reload
```

### Transmission des en-têtes à PHP

PHP utilise l'en-tête `REMOTE_ADDR` pour déterminer l'adresse des visiteurs. Cet en-tête est automatiquement configuré dès lors que la configuration détaillée dans la section « [Correction de l'adresse IP source dans les logs](#ip-source-logs) » est appliquée.

### Ajouter des en-têtes personnalisés

Que votre application nécessite un format d'en-tête spécifique pour identifier l'adresse IP, le port ou le protocole du visiteur, ou que vous souhaitiez connaître le *frontend* par lequel une requête est arrivée (ou pour toute autre raison), vous avez la possibilité d'ajouter des en-têtes personnalisés sur votre *frontend* HTTP.

Les en-têtes personnalisés doivent respecter le format « `X-En-Tete Valeur de l'En-tête` ». Le nom de l'en-tête et sa valeur sont séparés par un espace. Il est possible de spécifier plusieurs en-têtes sur un même *frontend*.

Si un en-tête existant est présent dans la requête, il sera écrasé et remplacé par la nouvelle valeur, rendant ainsi impossible sa contrefaçon par le visiteur passant par ce *frontend*. Il n'est pas possible de redéfinir les en-têtes réservés aux mandataires, tels que ceux décrits dans ce document, car ils sont gérés automatiquement par votre service OVHcloud Load Balancer.

Lors de la spécification d'un nom d'en-tête non standard, il est d'usage de le faire précéder du préfixe « `X-` ».

L'utilisation de variables dans la valeur des en-têtes est supportée : 

- `%ci` sera remplacé par l'adresse IP de votre visiteur.
- `%cp` sera remplacé par le port source de votre visiteur.

Les en-têtes personnalisés peuvent être configurés via l'espace client OVHcloud et l'API, que ce soit sur un nouveau *frontend* ou un *frontend* existant.

#### Depuis l'espace client OVHcloud

Rendez-vous dans l'onglet `Frontends`{.action} du tableau de bord de votre service OVHcloud Load Balancer et sélectionnez le *frontend* à éditer ou cliquez sur le bouton `Ajouter un frontend`{.action} pour en créer un nouveau. Une fenêtre d'édition apparaîtra, présentant un champ `Entête HTTP`{.action} dans la section `Paramètres avancés`{.action}.

Si vous souhaitez configurer plusieurs en-têtes, ceux-ci doivent être séparés par des virgules, *sans espace*. Par exemple, vous pouvez définir les en-têtes suivants : `X-Ip-Header %ci,X-Port-Header %cp`.

![Configuration des en-têtes HTTP d'un Frontend via ovh manager API](images/add_headers.png){.thumbnail}

Cliquez sur le bouton `Mettre à jour`{.action} après avoir configuré les en-têtes, puis sur `Déployer la zone: VOTRE ZONE`{.action} pour appliquer les modifications dans la zone concernée.

### Depuis l'API OVHcloud

Dans l'API, les en-têtes sont spécifiés au sein d'une liste `httpHeader`. Contrairement à l'espace client OVHcloud, chaque en-tête doit constituer sa propre entrée dans la liste. 

Dans la console de l'API OVHcloud, un bouton `+`{.action} est disponible dès que vous commencez à spécifier une valeur, permettant d'ajouter un nouveau champ à la liste. 

![Configuration des en-têtes HTTP d'un Frontend](images/add_headers_with_api.png){.thumbnail}

Si vous intégrez l'API dans votre code, cela correspond à une liste JSON du type :

```json
1. {
2.         "httpHeader": [
3.                 "X-Ip-Header %ci",
4.                 "X-Port-Header %cp"
5.         ]
6. }
```

- Modification d'un `Frontend`{.action} existant :

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

|Paramètre|Signification|
|---------|-------------|
|serviceName|Nom du service Load Balancer concerné|
|frontendId|Identifiant du frontend où configurer les en-têtes HTTP|
|httpHeader|Liste d'en-têtes à configurer|

- Application des modifications :

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

|Paramètre|Signification|
|---------|-------------|
|serviceName|Nom du service Load Balancer concerné|
|zone|Nom de la zone dans laquelle déployer la configuration|

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).