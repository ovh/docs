---
title: Installer Flask sur votre hébergement web POWER
slug: nodejs-installer-flask
excerpt: Découvrez comment installer Flask sur votre hébergement web POWER
section: Python
order: 2
---

**Dernière mise à jour le 25/01/2021**

## Objectif

Si vous cherchez un framework très léger pour des projets simples mais qui restent extensibles, Flask répondra à ces critères

**Découvrez comment installer Flask sur votre hébergement web POWER**

## Prérequis

- Disposer d'une de l'offre d'hébergement web POWER [Python](https://labs.ovh.com/managed-python).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

Si vous venez de commencer à utiliser votre hébergement web POWER, nous vous conseillons de consulter notre guide [Premiers pas avec un hébergement web POWER](../premiers-pas-avec-hebergement-web-POWER/) avant de poursuivre.

## En pratique

Point d'entrée : app.py <br>
Dossier racine : www <br>

Pour utiliser WSGI (**W**eb **S**erver **G**ateway Interface) sur frameworks python, utilisez virtualenv.

```sh
~$ cd www
~/www$ virtualenv venv
~/www$ source venv/bin/activate
```

Mettez à jour `pip`.

```sh
~/www$ pip install --upgrade pip
```

Installez Flask.

```sh
~/www$ pip install Flask
```

Créez le fichier `app.py` avec le contenu ci-dessous, en utilisant la même méthode d'activation que virtualenv.

```sh
this_file = "venv/bin/activate_this.py"
exec(open(this_file).read(), {'__file__': this_file})
 
from flask import Flask
application = Flask(__name__)
 
@application.route('/')
def hello_world():
    return 'Hello, World!'
```

Redémarrez votre instance pour visualiser les changements.

>
>
>Par exemple:
>
>```sh
>from flask import Flask
>app = Flask(__name__)
> 
>@app.route('/')
>def hello_world():
>return 'Hello, World!'
>```
>
>dans `app.py`
>
>```sh
>this_file = "venv/bin/activate_this.py"
>exec(open(this_file).read(), {'__file__': this_file})
>from server import app as application
>```
>

Retrouvez plus de documentation sur Flask à l'adresse <https://flask.palletsprojects.com/en/1.1.x/>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
