---
title: Installer Strapi sur votre hébergement web POWER
excerpt: Découvrez comment installer Strapi sur votre hébergement web POWER
updated: 2021-02-04
---

## Objectif

Vous avez souscrit à un hébergement web POWER Node.js et vous souhaitez y déployer un CMS *headless* basé sur [Strapi](https://strapi.io/){.external}.

**Découvrez comment installer Strapi sur votre hébergement web POWER**

## Prérequis

- Disposer de l'offre d'hébergement web POWER [Node.js](https://labs.ovh.com/managed-nodejs).
- Être connecté à votre [espace client OVHcloud](/links/manager){.external}.

Si vous n'êtes pas encore familier avec l'utilisation de votre hébergement web POWER, nous vous conseillons de consulter notre guide « [Premiers pas avec un hébergement web POWER](/pages/ovhcloud_labs/power_web_hosting/getting-started) » avant de poursuivre la lecture de ce guide.

## En pratique

Supposons que vous avez la configuration normale pour un hébergement web POWER :

- Moteur : nodejs 14
- Point d'entrée : index.js
- Dossier racine : www

> [!primary]
>
> Vous pouvez appeler l'API OVHcloud pour [visualiser la configuration active](/pages/ovhcloud_labs/power_web_hosting/getting-started#api-get-active-configuration).

[Accédez via SSH](/pages/ovhcloud_labs/power_web_hosting/getting-started#ssh) à votre hébergement web POWER.

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

[Redémarrez votre instance](/pages/ovhcloud_labs/power_web_hosting/getting-started#restart), votre CMS sur Strapi sera alors en ligne.

![Strapi](images/nodejs-install-strapi-01.png){.thumbnail}

Sortie du terminal :

```console
 ~ $ rm -rf www

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
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

**Venez sur [Discord](https://discord.gg/ovhcloud) sur notre room web-hosting-power pour discuter avec les autres utilisateurs du lab et avec l'équipe POWER Web Hosting.**
