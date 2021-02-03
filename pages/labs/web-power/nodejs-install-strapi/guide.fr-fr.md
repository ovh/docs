---
title: Installer Strapi sur votre hébergement web POWER
slug: nodejs-installer-strapi
excerpt: Découvrez comment installer strapi sur votre hébergement web POWER
section: Node.js
order: 6
---

**Dernière mise à jour le 25/01/2021**

## Objectif

## Prérequis

## En pratique

Moteur : nodejs 14 <br>
Point d'entrée : index.js <br>
Dossier racine : www <br>

```sh
~ $ rm -rf www
~ $ yarn create strapi-app www --quickstart --no-run

yarn create v1.22.10
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
 
success Installed "create-strapi-app@3.2.3" with binaries:
      - create-strapi-app
[#############################################################################################] 93/93Creating a new Strapi application at /home/abcdefg/www.
 
Creating a quickstart project.
Creating files.
Dependencies installed successfully.
 
Your application was created at /home/abcdefg/www.
 
Available commands in your project:
 
  yarn develop
  Start Strapi in watch mode.
 
  yarn start
  Start Strapi without watch mode.
 
  yarn build
  Build Strapi admin panel.
 
  yarn strapi
  Display all available commands.
 
You can start by doing:
 
  cd /home/abcdefg/www
  yarn develop
 
Done in 106.67s.
 
~ $ cat << 'EOF' > www/index.js
const strapi = require('strapi');
 
strapi(/* {...} */).start();
EOF
~ $ cat << 'EOF' > www/.htaccess
RewriteCond %{ENV:HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
EOF

~ $ ls -la www
total 564
drwxr-xr-x+    7 nodeder users     18 oct.  15 18:24 .
drwx---r-x+    8 nodeder users     14 oct.  15 18:23 ..
drwxr-xr-x+    2 nodeder users      3 oct.  15 18:22 api
drwxr-xr-x+    3 nodeder users      5 oct.  15 18:22 config
-rw-r--r--+    1 nodeder users    249 oct.  15 18:22 .editorconfig
-rw-r--r--+    1 nodeder users     23 oct.  15 18:22 .env.example
-rw-r--r--+    1 nodeder users     32 oct.  15 18:22 .eslintignore
-rw-r--r--+    1 nodeder users    541 oct.  15 18:22 .eslintrc
drwxr-xr-x+    2 nodeder users      3 oct.  15 18:22 extensions
-rw-r--r--+    1 nodeder users   3688 oct.  15 18:22 favicon.ico
-rw-r--r--+    1 nodeder users   1136 oct.  15 18:22 .gitignore
-rw-r--r--+    1 nodeder users     91 oct.  15 18:24 .htaccess
drwxr-xr-x+ 1015 nodeder users   1016 oct.  15 18:23 node_modules
-rw-r--r--+    1 nodeder users    882 oct.  15 18:22 package.json
drwxr-xr-x+    3 nodeder users      4 oct.  15 18:22 public
-rw-r--r--+    1 nodeder users     69 oct.  15 18:22 README.md
-rw-r--r--+    1 nodeder users     64 oct.  15 18:24 server.js
-rw-r--r--+    1 nodeder users 445672 oct.  15 18:23 yarn.lock
~ $ mkdir -p www/tmp
~ $ touch www/tmp/restart.txt
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.