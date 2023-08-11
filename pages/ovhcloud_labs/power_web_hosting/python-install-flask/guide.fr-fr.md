---
title: Installer Flask sur votre hébergement web POWER
excerpt: Découvrez comment installer Flask sur votre hébergement web POWER
updated: 2021-01-05
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
 }
 .small {
     font-size: 0.75em;
 }
</style>

**Dernière mise à jour le 03/02/2021**

## Objectif

Vous avez souscrit à un hébergement web POWER Python et vous souhaitez y déployer [Flask](https://flask.palletsprojects.com/en/1.1.x/){.external}, le micro-framework Python pour des projets simples mais qui restent extensibles.

**Découvrez comment installer Flask sur votre hébergement web POWER**

## Prérequis

- Disposer de l'offre d'hébergement web POWER [Python](https://labs.ovh.com/managed-python).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

Si vous n'êtes pas encore familier avec l'utilisation de votre hébergement web POWER, nous vous conseillons de consulter notre guide « [Premiers pas avec un hébergement web POWER](/pages/ovhcloud_labs/power_web_hosting/getting-started) » avant de poursuivre la lecture de ce guide.

## En pratique

### Installer et mettre en ligne une première page

Supposons que vous avez la configuration normale pour un hébergement web POWER :

- Moteur : Python 3.8
- Point d'entrée : app.py
- Dossier racine : www

> [!primary]
>
> Vous pouvez appeler l'API OVHcloud pour [visualiser la configuration active](/pages/ovhcloud_labs/power_web_hosting/getting-started#api-get-active-configuration)

Pour utiliser les frameworks [Python WSGI](https://www.fullstackpython.com/wsgi-servers.html), le plus simple est d'utiliser [virtualenv](https://pypi.org/project/virtualenv/). 

[Accédez via SSH](/pages/ovhcloud_labs/power_web_hosting/getting-started#ssh) à votre hébergement web POWER et activez `virtualenv` :

```sh
cd www
virtualenv venv
source venv/bin/activate
```

Mettez à jour `pip` :

```sh
pip install --upgrade pip
```

Installez Flask.

```sh
pip install Flask
```

Créez le fichier `app.py` avec le contenu ci-dessous, en utilisant la même méthode d'activation de `virtualenv`.

```python
this_file = "venv/bin/activate_this.py"
exec(open(this_file).read(), {'__file__': this_file})
 
from flask import Flask
application = Flask(__name__)
 
@application.route('/')
def hello_world():
    return 'Hello, World!'
```

[Redémarrez votre instance](/pages/ovhcloud_labs/power_web_hosting/getting-started#restart), votre projet Flask sera en ligne.


![Flask](images/python-install-flask-01.png){.thumbnail}


Sortie de la console:

<pre class="console"><code>~ $ cd www

~/www $ virtualenv venv
created virtual environment CPython3.8.7.final.0-64 in 1273ms
  creator CPython3Posix(dest=/home/powerlp/www/venv, clear=False, global=False)
  seeder FromAppData(download=False, pip=bundle, setuptools=bundle, wheel=bundle, via=copy, app_data_dir=/home/powerlp/.local/share/virtualenv)
    added seed packages: pip==20.2.2, setuptools==49.6.0, wheel==0.35.1
  activators BashActivator,CShellActivator,FishActivator,PowerShellActivator,PythonActivator,XonshActivator

~/www $ source venv/bin/activate

~/www $ pip install --upgrade pip
Collecting pip
  Using cached pip-21.0.1-py3-none-any.whl (1.5 MB)
Installing collected packages: pip
  Attempting uninstall: pip
    Found existing installation: pip 20.2.2
    Uninstalling pip-20.2.2:
      Successfully uninstalled pip-20.2.2
Successfully installed pip-21.0.1

~/www $ pip install Flask
Collecting Flask
  Using cached Flask-1.1.2-py2.py3-none-any.whl (94 kB)
Collecting itsdangerous>=0.24
  Using cached itsdangerous-1.1.0-py2.py3-none-any.whl (16 kB)
Collecting Werkzeug>=0.15
  Using cached Werkzeug-1.0.1-py2.py3-none-any.whl (298 kB)
Collecting click>=5.1
  Using cached click-7.1.2-py2.py3-none-any.whl (82 kB)
Collecting Jinja2>=2.10.1
  Using cached Jinja2-2.11.3-py2.py3-none-any.whl (125 kB)
Collecting MarkupSafe>=0.23
  Using cached MarkupSafe-1.1.1-cp38-cp38-manylinux2010_x86_64.whl (32 kB)
Installing collected packages: MarkupSafe, Werkzeug, Jinja2, itsdangerous, click, Flask
Successfully installed Flask-1.1.2 Jinja2-2.11.3 MarkupSafe-1.1.1 Werkzeug-1.0.1 click-7.1.2 itsdangerous-1.1.0




~/www $ mkdir -p tmp

~/www $ touch tmp/restart.txt
</code></pre>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

**Pour discuter avec les autres utilisateurs du lab et avec l'équipe POWER Web Hosting, venez sur [notre room Gitter](https://gitter.im/ovh/power-web-hosting)**