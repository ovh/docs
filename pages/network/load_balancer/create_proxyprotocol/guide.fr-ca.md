---
title: Travailler avec le proxyProtocol
universe: cloud
excerpt: Intégrez vos services TCP derriere un Load Balancer avec le proxyProtocol
updated: 2018-10-12
---

## Introduction
Le service OVH Load Balancer agit comme un mandataire ou "Proxy". Comme un mandataire humain, il agit comme un intermédiaire, de telle sorte que le client s'adresse au mandataire et le mandataire au fournisseur de service, au nom du client. Dans cette configuration, seul le mandataire connaît à la fois le véritable client (l'utilisateur de votre service) et le véritable fournisseur de service (l'un de vos serveurs).

Pour le visiteur, cela ne pose aucun soucis. Il n'a pas besoin de connaître avec précision le serveur qui répond à sa requête. C'est un détail d'implémentation. En revanche, pour des raisons de statistique et de sécurité, il est parfois indispensable que le serveur final ait connaissance de la véritable adresse du client, or, par défaut, il ne voit que le mandataire (en l’occurrence, votre service OVH Load Balancer).

Si vous utilisez un `Frontend`{.action} HTTP, nous vous recommandons le [guide](/pages/network/load_balancer/create_headers){.ref} qui décrit la manière standard d'utiliser les En-Têtes HTTP pour retrouver l'adresse IP, le port ainsi que le protocole source.

Si vous utilisez un `Frontend`{.action} TCP, alors ce guide est pour vous.

## Prérequis
Ce guide est un guide avancé. Il fait l'hypothèse que vous vous êtes déjà familiarisé avec les fonctionnalités principales de votre service OVH Load Balancer, en particulier, les `Frontend`{.action} et les `Fermes`{.action}. Si ce n'est pas encore le cas, nous vous recommandons de visiter le [guide](/pages/network/load_balancer/create_http_https){.ref}. Ce guide est plus particulièrement orienté sur les services HTTP mais les principes généraux sont les mêmes.

Vous devez disposez de :

- Un service OVH Load Balancer avec un `Frontend`{.action} et une `Ferme`{.action} TCP fonctionnels
- Nginx ou Apache avec mod_proxyprotocol sur un serveur OVH

## Avertissement
Les champs ProxyProtocol pouvant être forgés par un client malicieux, ils ne doivent être pris en compte que s’ils viennent d’une source de confiance.

Il est donc indispensable de limiter leurs utilisations à des IP de confiance, en l’occurrence, les IPs de sortie de votre service OVH Load Balancer. Les principaux serveurs tels que Nginx et Apache disposent de modules capable de gérer cet aspect de sécurité et de confiance.

Vous pouvez obtenir la liste de vos IPs de sortie via le Manager et via l'API.

### Via le Manager
La liste des IPv4 de sortie potentiellement utilisées par votre service OVH Load Balancer se trouve sur la page d'accueil de votre service OVH Load Balancer dans le manager sous le nom "IPv4 de sortie".

![Adresse IPv4 de sortie de votre service OVH Load Balancer](images/iplb_service.png){.thumbnail}

### Via l'API
- Liste des IPs utilisées par votre service OVH Load Balancer

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/natIp
> 

## Presentation du ProxyProtocol
Le ProxyProtocol a été développé par l'équipe du Load Balancer [HAPRoxy](http://haproxy.org/){.external} comme l'homologue en TCP des En-Têtes HTTP standards telles que X-Forwarded-For. Il a été pensé pour faire suivre au minimum :

- le nom du protocole L4 utilisé (TCP4 pour l'IPv4 ou TCP6 pour l'IPv6) ;
- l'adresse IPv4 ou IPv6 source ;
- le port source.

Quand le ProxyProtocol est activé pour un de vos serveurs, le service OVH Load Balancer ajoute un préfixe avec le ProxyProtocol avant d'envoyer la suite de la requête. Cette modification étant intrusive, il est indispensable de bien s'assurer que le serveur est bien compatible avec ce protocole, et, le cas échéant, quelles sont les version gérées.

En effet, ce protocole existe en 2 versions: - La version 1, au format texte - La version 2, au format binaire optimisé et extensible

La version 1 étant largement suffisante pour la plupart des usages (bien que moins optimisée), elle est souvent la seule version gérée par les logiciels compatibles. La version 2 étant un format binaire, est plus rapide à analyser. Elle ajoute également la possibilité d'indiquer si la connexion d'origine était chiffrée (l'équivalent de l'En-Tête X-Forwarded-Proto) ainsi que le domaine spécifiée dans le champ Common Name du certificat utilisé le cas échéant.

Pour en savoir plus sur le ProxyProtocol, nous vous invitons à consulter la [spécification du ProxyProtocol](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt){.external}.

## Activation du ProxyProtocol pour un de vos serveurs
Le ProxyProtocol doit être activé pour chaque serveur enregistré dans une Ferme de serveurs. Cette fonctionnalité étant intrusive et ne pouvant être activée de manière transparente, cela permet de la tester sur une machine en particulier puis de déployer progressivement la configuration sur une ferme active.

Votre service OVH Load Balancer gère 4 modes pour le ProxyProtocol:

|Mode|Description|
|---|---|
|v1|Version 1 au format texte. C'est la version la plus largement gérée.|
|v2|Version 2 au format binaire sans aucune option. Il s'agit d'une version optimisée de la version 1.|
|v2-ssl|v2, avec un champs décrivant la connexion SSL, si applicable.|
|v2-ssl-cn|v2-ssl, avec le champ "Common Name" du certificat utilisé, si applicable.|

Lorsque le ProxyProtocol est activé pour l'un de vos serveurs, les sondes insèrent automatiquement cet entête *sauf* si un port spécifique a été spécifié pour les sondes. Dans ce cas, la sonde se connectera de manière classique sur le port de la sonde.

### Via le Manager
Dans la section `Fermes`{.action}, sélectionnez la Ferme contenant le serveur sur lequel activer le ProxyProtocol puis cliquez le bouton d'édition du Serveur concerné.

Le ProxyProtocol se configure via l'option `Version du ProxyProtocol`{.action}. Vous y retrouverez les 4 modes décrits ci-dessus.

![Activation du ProxyProtocol sur un serveur d'une ferme](images/edit_server.png){.thumbnail}

Une fois le mode souhaité sélectionné, cliquez sur `Mettre à jour`{.action} puis sur `Déployer la zone: VOTRE ZONE`{.action} pour appliquer vos changements dans la zone concernée.

### Via l'API
L'activation du ProxyProtocol via l'API se fait de la même manière que via le Manager. Le champs d'API correspondant dans le Serveur est proxyProtocolVersion.

- Modifier un `Serveur`{.action} existant :

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
> 

- Appliquer les modifications:

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

## Configuration du ProxyProtocol coté serveur

### Nginx
Nginx gère la version 1 du ProxyProtocol. Il est capable d'en extraire les principales informations, à savoir l'adresse IP et le port source du client tels que vu par votre service OVH Load Balancer. Dans Nginx, ces informations sont exposées à travers la variable proxy_protocol_addr. De même que pour son homologue HTTP X-Forwarded-For Nginx se servir de cette variable pour prendre en compte la bonne adresse source dans les logs avec le module ngx_http_realip.

Pour utiliser le ProxyProtocol avec Nginx, vous pouvez configurer le section server de votre configuration avec :

```nginx
1. server {
2.     # Enable the Proxy protocol on port 80
3.     listen 80 proxy_protocol;
4.
5.     # Trust the proxy protocol provided informations from your OVH Load Balancer service
6.     # See https://www.ovh.com/manager/cloud/index.html#/network/iplb/ for an up to date list
7.     set_real_ip_from 10.108.0.0/14;
8.     real_ip_header proxy_protocol;
9.
10.     # (optional) Set some headers
11.     proxy_set_header X-Real-IP        $proxy_protocol_addr;
12.     proxy_set_header X-Forwarded-For  $proxy_protocol_addr;
13.
14.     # Insert your regular configuration here
15.     ...
16. }
```

Une fois configuré, vous pouvez re-charger la configuration :

```bash
service nginx reload
```

> [!info]
>
> Cet exemple utilise le protocole HTTP pour plus de simplicité. Si vous utilisez du HTTP, nous vous recommandons vivement d'utiliser les En-Têtes HTTP au lieu du ProxyProtocol sauf si votre service OVH Load Balancer est configuré en TCP. Cela peut se produire dans le cas d'une terminaison SSL pour du HTTP/2 par exemple.
> 

Pour plus d'informations sur la configuration du ProxyProtocol dans Nginx, nous vous invitons à consulter la documentation officielle du projet: [https://www.nginx.com/resources/admin-guide/proxy-protocol/](https://www.nginx.com/resources/admin-guide/proxy-protocol/){.external}

### Apache
La gestion du ProxyProtocol dans Apache est encore jeune. Une implémentation non-officielle et compatible avec Apache 2.4 est disponible sur Github ([https://github.com/roadrunner2/mod-proxy-protocol](https://github.com/roadrunner2/mod-proxy-protocol){.external}) mais n'est plus maintenue depuis 2014. Une implémentation officielle se trouve dans le module mod_remoteip qui est également utilisé pour gérer les En-Têtes de la famille X-Forwarded-For.

mod-proxy-protocol gère les version 1 et 2 du ProxyProtocol. En revanche, il ne permet pas de spécifier une liste d'IP source autorisées à utiliser le ProxyProtocol, bien que ce soit évoqué dans les projets du module.

mod_remoteip gère également les version 1 et 2 du ProxyProtocol. Il ajoute également la possibilité de spécifier une liste d'adresses pour lesquelles le ProxyProtocol ne doit pas être activé. Ce qui reste limitant d'une point de vue de la configuration. Ce module est uniquement disponible dans la version expérimentale Apache 2.5 bien que la documentation mentionne une disponibilité à partir de Apache 2.4.26.

Quel que soit l'approche choisie, nous vous recommandons vivement de bien restreindre les connexions à vos serveurs aux adresses de sortie de votre service OVH Load Balancer. Cela peut être aisément configuré avec iptables:

```bash
# Trust connections from your OVH Load Balancer service, ONLY
iptables -A INPUT -s 10.108.0.0/14 -p tcp --dport 80 -j ACCEPT
iptables -A INPUT                  -p tcp --dport 80 -j DROP
```

#### Avec mod-proxy-protocol
- Ce module n'étant pas officiel, il faudra commencer par en télécharger les sources, compiler et installer :

```bash
# Install build tools
sudo apt install git apache2-dev

# Grab the sources
git clone https://github.com/roadrunner2/mod-proxy-protocol.git
cd mod-proxy-protocol

# Build and install the module
sudo apxs -i -a -c mod_proxy_protocol.c
```

- Puis configurer Apache :

```apache
1. <VirtualHost *:80>
2.     ProxyProtocol On
3.     ...
4. </VirtualHost>
```

- Remplacez les variables %h par %a dans les directives LogFormat de la configuration Apache
- Enfin, activez la nouvelle configuration avec :

```bash
# Restart apache to load the new module ("reload" is enough if the module was already enabled)
service apache2 restart
```

Pour en savoir plus sur la configuration du module mod-proxy-protocol nous vous invitons à consulter sa documentation: [http://roadrunner2.github.io/mod-proxy-protocol/mod_proxy_protocol.html](http://roadrunner2.github.io/mod-proxy-protocol/mod_proxy_protocol.html){.external}

#### Avec mod_remoteip
- Le module étant expérimental, il faudra au préalable installé une version expérimentale de Apache, ce qui n'est pas recommandé dans une environnement de production, à moins de savoir précisément ce que l'on fait !
- Puis configurer Apache :

```apache
1. <VirtualHost *:80>
2.     RemoteIPProxyProtocol On
3.     ...
4. </VirtualHost>
```

- Remplacez les variables %h par %a dans les directives LogFormat de la configuration Apache
- Enfin, activez la nouvelle configuration avec :

```bash
# Enable the 'remoteip' module and configuration
a2enmod remoteip

# Restart apache to load the new module ("reload" is enough if the module was already enabled)
service apache2 restart
```

Pour en savoir plus sur la configuration du module mod_remoteip nous vous invitons à consulter sa documentation: [https://httpd.apache.org/docs/trunk/mod/mod_remoteip.html#remoteipproxyprotocol](https://httpd.apache.org/docs/trunk/mod/mod_remoteip.html#remoteipproxyprotocol){.external}

### HAProxy
Le ProxyProtocol a été conçu par l'équipe de HAProxy. Il est donc le logiciel gérant le mieux ce protocole. Cela pourra être utile dans un scénario où le suivi de la véritable IP source du client est indispensable mais le logiciel cible ne gère pas ce protocole. Ce sera le cas par exemple de MySQL et PostgreSQL pour n'en citer que 2.

Dans ce cas, une astuce est de placer une instance HAProxy locale, en frontal du logiciel et assurer la journalisation des requête et leur filtrage avancé dans l'instance HAProxy locale.

Ce guide vous propose un exemple de configuration possible pour le port TCP 3306 utilisé par MySQL. Cette configuration n'a pas vocation a être un exemple complet mais plutôt à servir de base de manière à partir sur une configuration fonctionnelle.

- Installez HAProxy

```bash
sudo apt install haproxy
```

- Configurez votre proxy

```haproxy
1. listen mysql
2.     # Listen on all interfaces, port 3306, tcp mode (ie: not HTTP)
3.     mode tcp
4.     option tcplog
5.     bind *:3306
6. 
7.     # Expect ProxyProtocol header if and only if from a trusted network
8.     # See https://www.ovh.com/manager/cloud/index.html#/network/iplb/ for an up to date list
9.     tcp-request connection expect-proxy layer4 if { src 10.108.0.0/14 }
10. 
11.     # Declare local server, on a non standard port to avoid collisions
12.     server mysql 127.0.0.1:3316 check
```

- Enfin, activez la nouvelle configuration avec :

```bash
service haproxy reload
```
