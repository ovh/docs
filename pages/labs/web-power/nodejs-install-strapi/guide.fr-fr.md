---
title: Installer Strapi sur votre hébergement web POWER
slug: nodejs-installer-strapi
excerpt: Découvrez comment installer Strapi sur votre hébergement web POWER
section: Node.js
order: 6
updated: 2021-02-04
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

Vous avez souscrit à un hébergement web POWER Node.js et vous souhaitez y déployer un CMS *headless* basé sur [Strapi](https://strapi.io/){.external}.

**Découvrez comment installer Strapi sur votre hébergement web POWER**

## Prérequis

- Disposer de l'offre d'hébergement web POWER [Node.js](https://labs.ovh.com/managed-nodejs).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

Si vous n'êtes pas encore familier avec l'utilisation de votre hébergement web POWER, nous vous conseillons de consulter notre guide « [Premiers pas avec un hébergement web POWER](../premiers-pas-avec-hebergement-web-POWER/) » avant de poursuivre la lecture de ce guide.

## En pratique

Supposons que vous avez la configuration normale pour un hébergement web POWER :

- Moteur : nodejs 14
- Point d'entrée : index.js
- Dossier racine : www

> [!primary]
>
> Vous pouvez appeler l'API OVHcloud pour [visualiser la configuration active](../premiers-pas-avec-hebergement-web-POWER/#api-get-active-configuration).

[Accédez via SSH](../premiers-pas-avec-hebergement-web-POWER/#ssh) à votre hébergement web POWER.

Effacez le répertoire `www` et installez ensuite Strapi :

```sh
rm -rf www
npx create-strapi-app www --quickstart --no-run
```

Allez dans le dossier `www` et créez le fichier de point d'entréee, `index.js` :

```javascript
const strapi = require('strapi');
 
strapi(/* {...} */).start();
```

Construire le site admin UI : 
```sh
cd www
yarn build
```

Créez un fichier `.htaccess` pour gérer la redirection HTTPS :

```sh
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

[Redémarrez votre instance](../premiers-pas-avec-hebergement-web-POWER/#restart), votre CMS sur Strapi sera alors en ligne.

![Strapi](images/nodejs-install-strapi-01.png){.thumbnail}

Sortie du terminal :

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

**Pour discuter avec les autres utilisateurs du lab et avec l'équipe POWER Web Hosting, venez sur [notre room Gitter](https://gitter.im/ovh/power-web-hosting).**
