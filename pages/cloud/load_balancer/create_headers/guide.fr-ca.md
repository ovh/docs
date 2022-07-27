---
title: "Configuration d'un service OVHcloud Load Balancer - Les en-têtes HTTP"
slug: http-headers
excerpt: Intégrez vos services web derrière un Load Balancer avec les en-têtes HTTP
section: Configuration
---

**Dernière mise à jour le à 27/07/2022**

## Objectif

Le service OVHcloud Load Balancer agit comme un mandataire ou "Proxy". Comme un mandataire humain, il agit comme un intermédiaire, de telle sorte que le client s'adresse au mandataire et le mandataire au fournisseur de service, au nom du client. Dans cette configuration, seul le mandataire connait à la fois le véritable client (le visiteur de votre service web) et le véritable fournisseur de service (l'un de vos serveurs).

Pour le visiteur, cela ne pose aucun souci. Il n'a pas besoin de connaître avec précision le serveur qui répond à sa requête. C'est un détail d'implémentation. En revanche, pour des raisons à la fois légales et de statistiques, il est indispensable que le serveur final ait connaissance de la véritable adresse du client. Or, par défaut, il ne voit que le mandataire (en l'occurence, votre service OVHcloud Load Balancer).

Pour palier à cela, votre service OVHcloud Load Balancer ajoute par défaut les en-têtes HTTP standards permettant de retrouver ces informations dans le cas d'une connexion HTTP. Dans le cas d'une connexion TCP, d'autres solutions existent telles que le ProxyProtocol, mais cela sort du cadre de ce guide.

**Ce guide présente les en-têtes par défaut, leur rôle, comment les exploiter depuis les serveurs les plus courants et comment les personnaliser en fonction des contraintes de votre infrastructure.**

Si vous retrouvez uniquement des IP privées dans vos acces_log, ce guide est fait pour vous.

## Prérequis

- Posséder une offre [OVHcloud Load balancer](https://www.ovh.com/ca/fr/solutions/load-balancer/) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
- Posséder un service Web installé et configuré sur vos serveurs
- Posséder un service Nginx installé et configuré sur vos serveurs

## En pratique

```bash
10.108.0.15 - - [02/Fev/2022:10:56:47 +0100] "GET / HTTP/1.1" 200 706 "-" "Mozilla/5.0 (Linux[...]"
10.108.0.24 - - [02/Fev/2022/:10:56:47 +0100] "GET / HTTP/1.1" 200 706 "-" "Mozilla/5.0 (Linux[...]"
```

### Obligations légales

Vous pouvez être tenu de conserver des logs et certaines données relatives au trafic en vertu des lois et règlementations vous étant applicables. Il vous incombe de respecter ces obligations.

**A titre d’exemple :**

- [L’article L34-1 du Code des postes et des communications électroniques](https://www.legifrance.gouv.fr/affichCodeArticle.do?cidTexte=LEGITEXT000006070987&idArticle=LEGIARTI000006465770&dateTexte=&categorieLien=cid) ainsi que le [décret n°2006-358 du 24 mars 2006 relatif à la conservation des données des communications électroniques](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000637071&dateTexte=20180110) imposent notamment à toute personne physique ou morale fournissant au public un service de communications électroniques de conserver des données d'identification des personnes utilisatrices des services fournis, etc. ;
- La [loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique](https://www.legifrance.gouv.fr/affichTexteArticle.do?idArticle=JORFARTI000002457442&cidTexte=JORFTEXT000000801164) et le [décret n° 2011-219 du 25 février 2011](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000023646013&categorieLien=id) imposent notamment aux personnes dont l’activité est d’offrir un accès à des services de communication au public en ligne de conserver pour chaque connexion les données relatives à l’identifiant de la connexion, les dates et heure de début et de fin de la connexion, etc.

### En-tetes par defaut

Par défaut, votre service OVHcloud Load Balancer ajoute à chaque requête HTTP 5 des en-têtes standard permettant de connaître l'adresse et le port du visiteur de votre site ainsi que le protocole de connexion.

|En-tête|Description|
|---|---|
|X-Forwarded-For et X-Remote-Ip|Adresse du client, telle que vue par votre OVHcloud Load Balancer.|
|X-Forwarded-Port et X-Remote-Port|Port source du client, tel que vu par votre OVHcloud Load Balancer.|
|X-Forwarded-Proto|Protocole du client (HTTP ou HTTPS), tel que vu par votre OVHcloud Load Balancer.|

> [!warning]
>Les champs X-Fowarded-* pouvant être forgés par un client malicieux, ils ne doivent être pris en compte que s’ils viennent d’une source de confiance.
>
>Il est donc indispensable de limiter leur utilisation à des adresses IP de confiance, en l'occurence les adresses IP de sortie de votre service OVHcloud Load Balancer. Les principaux serveurs tels que Nginx et Apache disposent de modules capable de gérer cet aspect de sécurité et confiance.
>

Vous pouvez obtenir la liste de vos adresse IP de sortie depuis l'espace client OVHcloud et via l'API OVHcloud.

#### Depuis l'espace client OVHcloud

La liste des IPv4 de sortie potentiellement utilisées par votre service OVHcloud Load Balancer se trouve sur la page d'accueil de votre service OVHcloud Load Balancer sous le nom « IPv4 de sortie ».

![Adresse IPv4 de sortie de votre service OVHcloud Load Balancer](images/iplb_service.png){.thumbnail}

#### Depuis l'API OVHcloud

- Liste des adresses IP utilisées par votre service OVHcloud Load Balancer :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/natIp
> 

### Correction de l'IP source dans les logs <a name="ip-source-logs"></a>

Par défaut, Apache, Nginx et les autres serveurs web prennent en compte l'adresse IP source dans les logs. Quand vous utilisez un OVHcloud Load Balancer en amont de votre site web, les logs ne contiennent alors plus que des adresses IPs qui ressemblent à « 10.108.a.b ». Ce sont les adresses IP utilisées par l'OVHcloud Load Balancer pour vous contacter.

Lorsque la requête passe par votre service OVHcloud Load Balancer, celui-ci enregistre l'adresse IP de votre visiteur dans les en-têtes X-Forwarded-For et X-Remote-Ip. Ils contiennent la même information. Seul le nom change pour des raisons de compatibilité avec la majorité des serveurs.

Pour corriger les adresses IP dans les logs, la solution évidente serait de modifier la directive de format de logs de votre serveur pour utiliser l'un de ces en-têtes en lieu et place de l'IP du Load Balancer. Malheureusement, cela ne suffit pas car n'importe qui peut renseigner ces en-tête, même s'il ne passe pas par votre OVHcloud Load Balancer. Et cela lui permettrait de se faire passer pour quelqu'un d'autre. En dehors de l'aspect éthique de cette pratique, il y a également des implications légales, de sécurité et de statistiques pour lesquelles cela ne doit pas se produire.

Pour cette raison, les principaux serveurs web disposent de modules spécialisées permettant de contrôler exactement le niveau de confiance à accorder à ces en-têtes en fonction de 

- L'adresse IP source (seulement celle de votre service OVHcloud Load Balancer !) 
- Le niveau de profondeur de l'IP dans le champ. En effet, chaque mandataire (proxy, load balancer) ajoute l'IP de son client dans ce champ.

La suite de ce guide vous propose quelques bonnes pratiques de configuration pour les principaux serveurs webs.

#### Apache

- Créez le fichier `/etc/apache2/conf-available/remoteip.conf`
- Insérez la configuration suivante :

```apache
1. # Trust X-Forwarded-For headers from the OVHcloud Load Balancer
2. # See https://www.ovh.com/manager/sunrise/iplb/index.html#/iplb for an up to date list
3. RemoteIPHeader X-Forwarded-For
4. RemoteIPInternalProxy 10.108.0.0/16
```

- Remplacez les variables `%h` par `%a` dans les directives `LogFormat` de la configuration Apache
- Enfin, activez la nouvelle configuration avec :

```bash
# Enable the 'remoteip' module and configuration
a2enmod remoteip
a2enconf remoteip

# Restart apache to load the new module ("reload" is enough if the module was already enabled)
service apache2 restart
```

#### Nginx

Pour Nginx, c'est un peu plus simple mais l'idée reste la même que pour Apache en ne prenant en compte le champ X-Forwarded-For que s'il vient de votre service OVHcloud Load Balancer.

Cette configuration peut être effectuée soit :

- pour l'ensemble des sites en insérant la configuration dans la section `http {}`
- pour un site en particulier en insérant la configuration dans la section `server {}` correspondante
- pour une URL en particulier en insérant la configuration dans la section `location {}` correspondante
- Insérez la configuration dans la ou les sections voulue (`http {}` pour une configuration globale) :

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

Pour plus de sécurité, certains contenus tels que les pages de connexion peuvent n'être disponible qu'en HTTPS. Certains sites vont même plus loin en redirigeant systématiquement toutes les visites vers la version HTTPS du site. Par défaut, comme les 2 protocoles HTTP et HTTPS passent par des ports différents, respectivement le 80 et le 443, la solution consiste à mettre les règles de redirections directement dans le vhost correspondant au HTTP.

Lorsque la requête passe par un service comme le service OVHcloud Load Balancer, celui-ci s'occupe de recevoir le trafic HTTP, déchiffrer le trafic HTTPS et les fait suivre tous les 2 vers vos serveurs. En fonction de la configuration de vos serveurs, l'ensemble du trafic sera propagé en HTTP ou en HTTPS, sans distinction de protocole d'entrée sur le Load Balancer. Votre serveur ne peut plus faire la différence entre les 2, puisque les 2 arrivent au même endroit. On parle de « Terminaison SSL ».

Pour cette raison, le service OVHcloud Load Balancer ajoute automatiquement un en-tête `X-Forwarded-Proto` qui contient le nom du protocole d'origine. En l'occurence « http » ou « https ».

De même que `X-Forwarded-For`, cet en-tête peut être forgé par un visiteur malicieux pour faire croire qu'une requête non sécurisée proviendrait de votre service OVHcloud Load Balancer, en HTTPS. Il est essentiel de ne faire confiance à cet en-tête que s'il vient bien de votre service OVHcloud Load Balancer.

#### Apache

- Insérez la configuration suivante dans le fichier .hatccess de votre site :

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

- Insérez la configuration suivante dans la section `server {`} de votre site :

```nginx
1. if ($http_x_forwarded_proto = "http") {
2.         return 301 https://$host/$request_uri;
3. }
```

- Puis activez la nouvelle configuration avec :

```bash
service nginx reload
```

### Transmissions des en-têtes à PHP

PHP se base sur l'en-tête `REMOTE_ADDR` pour déterminer l'adresse des visiteurs. Cet en-tête est configuré automatiquement lorsque la configuration de la section « [Correction de l’IP source dans les Logs](#ip-source-logs) » est appliquée.


### Ajouter des en-têtes personnalisés

Si votre application attend un format particulier d'en-tête pour découvrir l'IP, le port ou le protocole du visiteur ou que vous souhaitez savoir par quel frontend est arrivée une requête ou pour toute autre raison, vous pouvez ajouter des en-têtes personnalisés sur votre frontend HTTP.

Les en-têtes personnalisés doivent être de la forme « X-En-Tete Valeur de l'Entête ». Le nom de l'en-tête et sa valeur sont séparés par un espace. Il est possible de spécifier plusieurs en-têtes sur un même frontend.

Si un autre en-tête existe dans la requête, il sera écrasé et remplacé par la nouvelle valeur de telle sorte qu'il devient impossible pour le visiteur passant par ce frontend de le forger. Il n'est pas possible de re-définir un des en-têtes réservés aux mandataires tels que ceux décrits dans ce document. Ceux ci sont gérés automatiquement par votre service OVHcloud Load Balancer.

Lorsque vous spécifiez un nom d'en-tête non standard, une bonne pratique est de le faire commencer par le préfixe « X- ».

Il est possible d'utiliser des variables dans la valeur des en-têtes: 

- `%ci` sera remplacé par l'adresse IP de votre visiteur 
- `%cp` sera remplacé par le port source de votre visiteur

Les en-têtes personnalisés peuvent être spécifiés via l'espace client OVHcloud et via l'API, à la fois sur un nouveau frontend comme sur un frontend existant.

#### Depuis l'espace client OVHcloud

Dans la section `Frontends`{.action} de votre espace client OVHcloud, choisissez le frontend à éditer ou cliquez sur le bouton `Ajouter un frontend`{.action} pour en créer un nouveau. Une fenêtre d'édition apparait alors avec un champ `Entête HTTP`{.action} dans la partie `Paramètres avancés`{.action}.

Si vous souhaitez configurer plusieurs en-têtes, ceux-ci doivent être séparés par des virgules *sans espaces*. Par exemple, vous pouvez créer les en-têtes suivants: `X-Ip-Header %ci,X-Port-Header %cp`.

![Configuration des en-têtes HTTP d'un Frontend via ovh manager API](images/add_headers.png){.thumbnail}

Cliquez sur le bouton `Mettre à jour`{.action} une fois les en-têtes configurés puis sur `Déployer la zone: VOTRE ZONE`{.action} pour appliquer vos changements dans la zone concernée.

### Depuis l'API OVHcloud

Dans l'API, les en-têtes sont spécifiées dans une liste httpHeader. À la différence de l'espace client OVHcloud, chaque en-tête doit être dans sa propre entrée de la liste. 

Dans la console de l'API OVHcloud, un bouton `+`{.action} est disponible dès que vous commencez à spécifier une valeur, afin d'ajouter un nouveau champ dans la liste. 

![Configuration des en-têtes HTTP d'un Frontend](images/add_headers_with_api.png){.thumbnail}

Si vous utilisez l'API dans votre code, cela correspond à une liste json telle que :


```json
1. {
2.         "httpHeader": [
3.                 "X-Ip-Header %ci",
4.                 "X-Port-Header %cp"
5.         ]
6. }
```

- Modifier un `Frontend`{.action} existant :

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

|Paramètre|Signification|
|---------|-------------|
|serviceName|Nom du service Load Balancer concerné|
|frontendId|Identifiant du frontend où configurer les en-têtes HTTP|
|httpHeader|Liste d'en-têtes à configurer|

- Appliquer les modifications :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
> 

|Paramètre|Signification|
|---------|-------------|
|serviceName|Nom du service Load Balancer concerné|
|zone|Nom de la zone dans laquelle déployer la configuration|


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
