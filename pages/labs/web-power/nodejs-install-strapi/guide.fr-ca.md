---
title: Installer Strapi sur votre hébergement web POWER
slug: nodejs-installer-strapi
excerpt: Découvrez comment installer strapi sur votre hébergement web POWER
section: Node.js
order: 6
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

Vous avez souscrit à un hébergement web POWER Node.js et vous voulez y deployer un CMS *headless* basé sur [Strapi](https://strapi.io/).

**Découvrez comment installer strapi sur votre hébergement web POWER**

## Prérequis

- Disposer d'une de l'offre d'hébergement web POWER [Python](https://labs.ovh.com/managed-python).
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.

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

Éffacez le repertoire `www` et installez ensuite Strapi :

```sh
rm -rf www
npx create-strapi-app www --quickstart --no-run
```

Allez dans le dossier `www` et créez le fichier de point d'entréee, `index.js` :

```javascript
const strapi = require('strapi');
 
strapi(/* {...} */).start();
```

Créez un fichier `.htaccess` pour gérer la redirection HTTPS :

```sh
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```


[Rédemarrez votre instance](../premiers-pas-avec-hebergement-web-POWER/#restart), puis votre CMS sur Strapi sera en ligne.

![Strapi](images/nodejs-install-strapi-01.png){.thumbnail}

Terminal output:

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