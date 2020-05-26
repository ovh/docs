---
title: Acces et Securite dans Horizon
slug: acces-et-securite-dans-horizon
legacy_guide_number: 1774
section: Gestion depuis Horizon
order: 4
---


## Preambule
OpenStack Horizon vous propose un menu vous permettant de configurer différents éléments concernant l'accès à vos instances et autres services. Vous pouvez par exemple configurer des groupes de sécurité vous permettant de filtrer les connexions entrantes et sortantes de vos instances, ou bien encore de télécharger le fichier OpenRC contenant vos identifiants afin d'utiliser les API OpenStack.

Ce guide vous indique les pistes à suivre afin de vous retrouver dans ce menu.


### Prérequis
- [Créer un accès à Horizon]({legacy}1773){.ref}


## Dans l'interface Horizon
- Se connecter à [l'interface
Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} grâce aux identifiants créés depuis l'interface client OVH
- Cliquer sur la section Accès et sécurité

On y retrouve trois onglets:

- Groupes et sécurité permettra à l'avenir de gérer les règles de sécurité et d'accès aux instances, de limiter l'accès à certains ports notamment.


![public-cloud](images/2630.png){.thumbnail}

- Paires de clés permet la gestion des clés SSH, de deux différentes manières:

|---|---|
|Créer une paire de clés|Nommer la clé, le navigateur vous propose de la télécharger|
|Importer une paire de clés|Importer une clé publique existante|

**Créer une paire de clés**

- Accès API permet de visualiser les informations liées à l'API, et aussi de télécharger le fichier openrc.sh permettant d'utiliser l'api OpenStack


![public-cloud](images/2632.png){.thumbnail}
