---
title: Premiers pas avec un hébergement web POWER
slug: premiers-pas-avec-hebergement-web-POWER
excerpt: Découvrez comment débuter sur un hébergement web POWER
section: Premiers pas
order: 1
---

**Dernière mise à jour le 14/01/2021**

## Objectif

Vous avez souscrit à un hébergement web POWER pour bénéficier des langages **Node.js**, **Python** et **Ruby** et souhaitez commencer à développer votre projet. 
Retrouvez ici les principales informations relatives à la gestion de votre hébergement POWER via l'espace client OVHcloud ou via les API. 

**Découvrez comment débuter sur un hébergement web POWER.**

## Prérequis 

- Disposer d'une offre d'hébergement web POWER
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## En pratique

### Depuis l'espace client

L'interface de gestion de votre offre d'hébergement web POWER se trouve dans la section `Web Cloud`{.action}, puis `Hébergements`{.action} dans la colonne de gauche. 

#### Accès FTP - SSH

Lors de l'activation de votre offre d'hébergement web POWER, un e-mail vous est transmis avec les informations de connexion FTP et SSH. Vous pouvez également gérer ces accès depuis l'onglet `FTP - SSH`{.action}. 

Vous trouverez des informations complémentaires dans notre guide [Se connecter à l’espace de stockage de son hébergement web](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/).

#### Ajouter un nom de domaine

Par défaut, aucun nom de domaine n'est attaché à votre hébergement web POWER. Vous pouvez néanmoins utiliser l'URL automatiquement attribuée, visible dans l'onglet `Multisite`{.action}. 

Pour plus de détails sur la déclaration d'un nom de domaine sur votre hébergement web, consulter notre guide [Partager son hébergement entre plusieurs sites](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-1-acceder-a-la-gestion-multisite)

#### Consultation des Logs et statisques

Retrouvez l'ensemble des logs et statistiques de votre site dans l'onglet `Statistiques et logs`{.action}. 

Prenez connaissance du guide [Consulter les statistiques et les logs de mon site hébergé sur une offre mutualisée](https://docs.ovh.com/fr/hosting/mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/#consulter-les-statistiques-et-les-logs) pour plus d'informations à ce sujet.

### Depuis les API

Si vous n'êtes pas déjà familiarisé avec le fonctionnement des API OVHcloud, consultez le guide [Premiers pas avec les API OVHcloud](https://docs.ovh.com/fr/api/api-premiers-pas/).

Les [API OVHcloud](https://api.ovh.com/) actuellement disponibles pour l'offre d'hébergement POWER sont les suivantes :

#### Lister les configurations disponibles

> [!api]
>
> @api {GET} /hosting/web/{serviceName}/availableConfigurations


#### Visualiser la configuration active

> [!api]
>
> @api {GET} /hosting/web/{serviceName}/configuration

> Cet appel vous permet, par exemple, de vérifier votre point d'entrée
 
#### Modifier la configuration

> [!api]
>
> @api {PUT} /hosting/web/{serviceName}/configuration

> Cet appel vous permet, par exemple, de modifier votre point d'entrée

#### Redémarrer le service

> [!api]
>
> @api {POST} /hosting/web/{serviceName}/attachedDomain/{domain}/restart


### Node.js

#### Page Hello world 

Version utilisée : nodejs 14
Point d'entrée : index.js
Dossier racine : www

```sh
~/www $ cd www
~/www $ node -v
v14.13.0
~/www $ npm install express --save
~/www $ vi index.js
const express = require('express');
const port = 3000;
const msg = `Hello World from NodeJS ${process.version}\n`;
const app = express();app.get('/', function (req, res) {
res.send(msg);
});
app.listen(port);
~/www $ mkdir -p tmp
~/www $ touch tmp/restart.txt
```

#### Redirection HTTP vers HTTPS

Dossier racine : www

```sh
~ $ cd www
~/www $ vi .htaccess
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Python

#### Page Hello world 

Version utilisée : Pyhton 3.7
Point d'entrée : app.py
Dossier racine : www

```sh
import sys
 
def application(environ, start_response):
    status = '200 OK'
    output = '\n'.join(['Hello World!', f"Version : {sys.version}",
                        f"Executable : {sys.executable}"])
 
    response_headers = [('Content-type', 'text/plain'),
                        ('Content-Length', str(len(output)))]
    start_response(status, response_headers)
 
    return [output]
```

### Ruby

#### Page Hello world 

Version utilisée : Ruby 2.6
Point d'entrée : app.py
Dossier racine : www

```sh
require 'socket'
require 'timeout'
 
class Application
 
    def call(env)
        msg = "Hello World from ruby #{ RUBY_VERSION }p#{ RUBY_PATCHLEVEL }"
        [200, { "Content-Type" => "text/plain" }, [msg]]
    end
end
 
run Application.new
```

### Redémarrer votre instance

Pour chaque modification de votre application, il est conseillé de redémarrer votre instance. Pour cela, il vous suffira de saisir la commande suivante:

```sh
~ $ cd www
~/www$ mkdir tmp
~/www$ touch tmp/restart.txt
```

> [!primary]
>
> L'application des modifications n'est pas immédiate, un délai d'environ 30 secondes peut s'avérer nécessaire.


## Aller plus loin

[Partager son hébergement entre plusieurs sites](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-1-acceder-a-la-gestion-multisite)

[Consulter les statistiques et les logs de mon site hébergé sur une offre mutualisée](https://docs.ovh.com/fr/hosting/mutualise-consulter-les-statistiques-et-les-logs-de-mon-site/#consulter-les-statistiques-et-les-logs)

[Premiers pas avec les API OVHcloud](https://docs.ovh.com/fr/api/api-premiers-pas/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
