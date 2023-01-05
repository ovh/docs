---
title: Installer Django sur votre hébergement web POWER
slug: python-installer-django
excerpt: Découvrez comment installer Django sur votre hébergement web POWER
section: Python
order: 1
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

**Dernière mise à jour le 05/01/2023**

## Objectif

Vous avez souscrit à un hébergement web POWER Python et vous souhaitez y déployer [Django](https://www.djangoproject.com/){.external}.

**Découvrez comment installer Django sur votre hébergement web POWER**

## Prérequis

- Disposer de l'offre d'hébergement web POWER [Python](https://labs.ovh.com/managed-python).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

Si vous n'êtes pas encore familier avec l'utilisation de votre hébergement web POWER, nous vous conseillons de consulter notre guide « [Premiers pas avec un hébergement web POWER](../premiers-pas-avec-hebergement-web-POWER/) » avant de poursuivre la lecture de ce guide.

## En pratique

### Installer et mettre en ligne une première page

Supposons que vous avez la configuration normale pour un hébergement web POWER :

- Moteur : Python 3.8
- Point d'entrée : app.py
- Dossier racine : www


> [!primary]
>
> Vous pouvez appeler l'API OVHcloud pour [visualiser la configuration active](../premiers-pas-avec-hebergement-web-POWER/#api-get-active-configuration)

Pour utiliser les frameworks [Python WSGI](https://www.fullstackpython.com/wsgi-servers.html), le plus simple est d'utiliser [virtualenv](https://pypi.org/project/virtualenv/).

[Accédez via SSH](../premiers-pas-avec-hebergement-web-POWER/#ssh) à votre hébergement web POWER et activez `virtualenv`: 

```sh
~$ cd www
~/www$ virtualenv venv
~/www$ source venv/bin/activate
```

Mettez à jour `pip`.

```sh
~/www$ pip install --upgrade pip
```

Installez Django.

```sh
~/www$ pip install django
```

Créez le nouveau projet Django.

```sh
~/www$ django-admin startproject config .
```

Par défaut, l'application `wsgi` de Django se trouve dans `config/wsgi.py`.
Comme le point d'entrée configuré est `app.py`, vous pouvez créer le lien symbolique suivant :

```sh
~/www$ ln -s config/wsgi.py app.py
```

Django est installé dans un environnement virtuel, vous devez demander à l'application de l'utiliser. 

Ajoutez ces 2 lignes dans `app.py` avant l'importation de Django :


```python
this_file = "venv/bin/activate_this.py"
exec(open(this_file).read(), {'__file__': this_file})
```

Vous obtenez alors ceci :

```python
"""
WSGI config for config project.
 
It exposes the WSGI callable as a module-level variable named ``application``.
 
For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""
 
import os
 
this_file = "venv/bin/activate_this.py"
exec(open(this_file).read(), {'__file__': this_file})
 
from django.core.wsgi import get_wsgi_application
 
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
 
application = get_wsgi_application()
```

Django doit déclarer les hôtes autorisés pour le site Web. Dans `config/settings.py`, par exemple :

```python
ALLOWED_HOSTS = ['yourdomainname', 'www.yourdomainname', 'yourftpuser.cluster000.hosting.ovh.net']
```

[Redémarrez votre instance](../premiers-pas-avec-hebergement-web-POWER/#restart), votre Django sera en ligne.


![Django](images/python-install-django-01.png){.thumbnail}


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

~/www $ pip install django
Collecting django
  Downloading Django-3.1.6-py3-none-any.whl (7.8 MB)
     |████████████████████████████████| 7.8 MB 13.0 MB/s
Collecting pytz
  Downloading pytz-2021.1-py2.py3-none-any.whl (510 kB)
     |████████████████████████████████| 510 kB 65.6 MB/s
Collecting asgiref<4,>=3.2.10
  Downloading asgiref-3.3.1-py3-none-any.whl (19 kB)
Collecting sqlparse>=0.2.2
  Downloading sqlparse-0.4.1-py3-none-any.whl (42 kB)
     |████████████████████████████████| 42 kB 1.2 MB/s
Installing collected packages: sqlparse, pytz, asgiref, django
Successfully installed asgiref-3.3.1 django-3.1.6 pytz-2021.1 sqlparse-0.4.1

~/www $ django-admin startproject config .

~/www $ ln -s config/wsgi.py app.py

~/www $ cat app.py
"""
WSGI config for config project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = get_wsgi_application()

~/www $ cat config/settings.py
"""
Django settings for config project.

Generated by 'django-admin startproject' using Django 3.1.6.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""

from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '83sh7zk*@1w#z3&oa@%5b-@iejc_4tl5))@niu1u882k*8h7kp'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = [ 'power.lostinbrittany.dev', 'xxxx.xxxx.hosting.ovh.net' ]

[...]


~/www $ mkdir -p tmp

~/www $ touch tmp/restart.txt
</code></pre>

### Plus d'informations sur Django

Retrouvez la documentation officielle de Django sur <https://docs.djangoproject.com/fr/3.1/>.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

**Pour discuter avec les autres utilisateurs du lab et avec l'équipe POWER Web Hosting, venez sur [notre room Gitter](https://gitter.im/ovh/power-web-hosting)**
