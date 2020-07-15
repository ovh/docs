---
title: Sécuriser un serveur avec service Memcached
slug: securiser-serveur-avec-service-memcache
excerpt: Découvrez comment sécuriser votre service Memcached
section: Utilisation avancée
---

**Dernière mise à jour le 2018/03/02**


## Objectif

Memcached est un service de bases de données en mémoire principalement utilisé pour accélérer les applications web en mettant en cache le contenu statique et les résultats des requêtes des bases de données. Le mécanisme est très simple : c'est une base de données à clé-valeur en mémoire à stockage non persistant.

Par défaut, memcached n'est pas protégé par une authentification. Si le serveur est accessible, tout le monde peut y lire et écrire des données. C'est pour cela qu'il est important de sécuriser cette base de données.


**Ce guide a pour but de vous aider dans cette configuration.**


> [!warning]
>
> OVHcloud met à votre disposition des machines dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>


## Prérequis


- Avoir accès au serveur avec le service Memcached (en SSH pour les environnements Linux ou en bureau à distance pour Windows).
- Identifier les services qui utilisent Memcached. Pour cela il convient de répondre aux questions suivantes :
    - Les services utilisant Memcached se trouvent-ils sur le même serveur ? Sont-ils utilisés dans un réseau privé ?
    - Les services utilisant Memcached ont-ils besoin que celui-ci soit accessible publiquement sur Internet ?


## En pratique

### Configurer Memcached pour le sécuriser

La sécurisation du serveur memcached passe par deux étapes :

- limiter l'adresse d'écoute du service ;
- n'accepter que les connexions TCP.


Avant la version /1.5.6/, memcached autorise par défaut les connexions TCP et UDP. Ce dernier mode peut être détourné pour générer des attaques dites « par amplification ».
Comme indiqué par les développeurs, les connexions UDP étaient pertinentes à la création du logiciel : les ressources étaient alors plus rares.
Dans ce guide, nous supposerons que vous faites partie des 99 % des utilisateurs qui n'ont pas besoin de connexions UDP.

Si votre serveur memcached n'est utilisé que par la machine locale, vous pouvez limiter l'adresse d'écoute à `127.0.0.1`.
Si d'autres machines doivent s'y connecter depuis un réseau privé, forcez l'écoute sur une IP privée (par exemple `10.0.0.1`, à adapter à votre classe réseau).

**Dans tous les cas**, désactivez l'écoute en UDP grâce à la directive `-U 0`.

Nous allons maintenant détailler les aspects de configuration pour les principaux systèmes d'exploitation déployés.


#### Debian/Ubuntu

Le comportement par défaut de Debian et Ubuntu est d'utiliser `service memcached status/start/restart/force-reload` pour gérer le service Memcached. Si tel est votre cas, éditez le fichier `/etc/memcached.conf` en étant connecté en root.

Vous pouvez commencer par ajouter cette option qui désactive l'écoute UDP, laquelle est obsolète, comme expliqué précédemment.

```sh
# Disable UDP protocol
-U 0
```
Si votre serveur memcached n'est utilisé que par la machine locale, vous pouvez alors activer l'option suivante qui vous évitera d'exposer votre service sur Internet :

```sh
-l 127.0.0.1
```

Une fois les modifications effectuées, sauvegardez le fichier et utilisez l'une de ces deux commandes pour redémarrer votre configuration :


```sh
service memcached force-reload
/etc/init.d/memcached force-reload
```


#### CentOS - Fedora - Red Hat


Le comportement par défaut de CentOS, Fedora et Red Hat est d'utiliser `service memcached status/start/restart/force-reload` pour gérer le service Memcached. Si tel est votre cas, éditez le fichier `/etc/sysconfig/memcached` en étant connecté en root.


Si votre serveur memcached n'est utilisé que par la machine locale, nous vous conseillons la ligne d'`OPTIONS` suivante qui vous évitera d'exposer votre service sur Internet en désactivant le protocole UDP, lequel est devenu obsolète :

```sh
OPTIONS="-l 127.0.0.1 -U 0"
```


Si votre serveur memcached est également utilisé par des serveurs tiers, alors cette simple ligne d'`OPTIONS` permettra de désactiver uniquement le protocole UDP :

```sh
OPTIONS="-U 0"
```

Une fois les modifications effectuées, sauvegardez le fichier et utilisez la commande suivante pour redémarrer la configuration :

```sh
sudo service memcached force-reload
```


#### Arch Linux


Le comportement par défaut d'Arch Linux est d'utiliser `systemctl start/restart/stop memcached` pour gérer le service Memcached. Si tel est votre cas, éditez le fichier `/usr/lib/systemd/system/memcached` en étant connecté en root.

Si votre serveur memcached n'est utilisé que par la machine locale, nous vous conseillons la ligne suivante qui vous évitera d'exposer votre service sur Internet en désactivant le protocole UDP, lequel est devenu obsolète :

```sh
ExecStart=/usr/bin/memcached -l 127.0.0.1 -U 0 -o modern
```


Si votre serveur memcached est également utilisé par des serveurs tiers, alors cette simple ligne permettra de désactiver uniquement le protocole UDP :

```sh
ExecStart=/usr/bin/memcached -U 0 -o modern
```


Une fois les modifications effectuées, sauvegardez le fichier et utilisez l'une de ces deux commandes pour redémarrer la configuration :


```sh
sudo systemctl daemon-reload
sudo systemctl force-reload memcached
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
