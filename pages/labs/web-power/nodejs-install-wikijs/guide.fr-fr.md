---
title: Installer Wiki js sur votre hébergement web POWER
slug: nodejs-installer-wikijs
excerpt: Découvrez comment installer Wiki js sur votre hébergement web POWER
section: Node.js
order: 4
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

Vous avez souscrit à un hébergement web POWER Node.js et vous souhaitez y deployer une base de connaissances basée sur [WikiJS](https://wiki.js.org/).

**Découvrez comment installer Wiki js sur votre hébergement web POWER**

## Prérequis

- Disposer d'une de l'offre d'hébergement web POWER [Python](https://labs.ovh.com/managed-python).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

Si vous venez de commencer à utiliser votre hébergement web POWER, nous vous conseillons de consulter notre guide [Premiers pas avec un hébergement web POWER](../premiers-pas-avec-hebergement-web-POWER/) avant de poursuivre.

## En pratique

Supposons que vous avez la configuration normale pour un hébergement web POWER :

- Moteur : nodejs 14 
- Point d'entrée : index.js 
- Dossier racine : www 


> [!primary]
>
> Vous pouvez appeler l'API OVHcloud pour [visualiser la configuration active](../premiers-pas-avec-hebergement-web-POWER/#api-get-active-configuration)


[Accédez via SSH](../premiers-pas-avec-hebergement-web-POWER/#ssh) à votre hébergement web POWER. 

Allez dans le dossier `www` et téléchargez le fichier d'installation de WikiJS :

```sh
cd www
wget https://github.com/Requarks/wiki/releases/download/2.5.170/wiki-js.tar.gz
tar xzf wiki-js.tar.gz
rm -f wiki-js.tar.gz
```

Créez un fichier de configuration `config.yml`.

```yaml
port: 3000
db:
  type: sqlite
  storage: database.sqlite
logLevel: info
dataPath: ./data
```

Recompilez le module `sqlite3`.

```sh
npm rebuild sqlite3
```

Établissez un lien symbolique pour le point d'entrée.

```sh
ln -fs server/index.js index.js
```


[Rédemarrez votre instance](../premiers-pas-avec-hebergement-web-POWER/#restart), puis votre CMS Strapi sera en ligne.

![WikiJS](images/nodejs-install-wikijs-01.png){.thumbnail}


Sortie de la console:

<pre class="console"><code> ~ $ rm -rf www

~ $ npx create-strapi-app www --quickstart --no-run
npx : 91 installé(s) en 6.741s
Creating a new Strapi application at /home/user/www.
Creating a quickstart project.
Creating files.
Dependencies installed successfully.
[...]

~ $ cat << 'EOF' > www/index.js
const strapi = require('strapi');
 
strapi(/* {...} */).start();
EOF
~ $ cat << 'EOF' > www/.htaccess
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
EOF

~/www $ mkdir -p tmp

~/www $ touch tmp/restart.txt

</code></pre>


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

**Pour discuter avec les autres utilisateurs du lab et avec l'équipe POWER Web Hosting, venez sur [notre room Gitter](https://gitter.im/ovh/power-web-hosting)**