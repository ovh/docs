---
title: Installer Ghost sur votre hébergement web POWER
slug: nodejs-installer-ghost
excerpt: Découvrez comment installer Ghost sur votre hébergement web POWER
section: Node.js
order: 3
---

**Dernière mise à jour le 25/01/2021**

## Objectif

## Prérequis

## En pratique

Moteur : nodejs 12 <br>
Point d'entrée : index.js <br>
Dossier racine : www <br>

```sh
~ $ echo "Enter your domain (my-domain.ovh for example):"
~ $ read DOMAIN
~ $ cd ${HOME}
~ $ node -v
v12.18.4
~ $ npm install ghost-cli@latest
...
+ ghost-cli@1.14.1
added 411 packages from 203 contributors and audited 411 packages in 12.293s
...
~ $ export PATH=$HOME/node_modules/.bin:$PATH
~ $ which ghost
/home/user/node_modules/.bin/ghost
~ $ rm -rf www
~ $ ghost install local --development --dir www --no-setup --no-start --no-enable
✔ Checking system Node.js version
✔ Checking current folder permissions
✔ Checking memory availability
✔ Checking for latest Ghost version
✔ Setting up install directory
✔ Downloading and installing Ghost v3.35.0
✔ Finishing install process
~ $ cd www
~/www $ cat << EOF > config.${OVH_ENVIRONMENT}.json
{
  "url": "https://${DOMAIN}",
  "paths": {
    "contentPath": "content"
  },
  "database": {
    "client": "sqlite3",
    "connection": {
      "filename": "content/data/ghost-development.db"
    },
    "useNullAsDefault": true,
    "debug": false
  }
}
EOF
~/www $ VERSION=$(ghost --version | sed -n 's/Ghost version: \([0-9.]*\).*/\1/p')
~/www $ ln -fs versions/${VERSION}/index.js index.js
~/www $ mkdir -p tmp
~/www $ touch tmp/restart.txt
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.