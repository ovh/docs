---
title: Installer Wiki js sur votre hébergement web POWER
slug: nodejs-installer-wikijs
excerpt: Découvrez comment installer Wiki js sur votre hébergement web POWER
section: Node.js
order: 4
---

**Dernière mise à jour le 25/01/2021**

## Objectif

## Prérequis

## En pratique

Moteur : nodejs 14 <br>
Point d'entrée : index.js <br>
Dossier racine : www <br>

```sh
~/www $ cd www
~/www $ node -v
v14.13.0
~/www $ curl -sSLO https://github.com/Requarks/wiki/releases/download/2.5.144/wiki-js.tar.gz
~/www $ tar xzf wiki-js.tar.gz
~/www $ rm -f wiki-js.tar.gz
~/www $ vi config.yml
port: 3000
db:
  type: sqlite
  storage: database.sqlite
logLevel: info
dataPath: ./data
 
~/www $ npm rebuild sqlite3
 
> sqlite3@5.0.0 install /home/user/www/node_modules/sqlite3
> node-pre-gyp install --fallback-to-build
 
node-pre-gyp WARN Using request for node-pre-gyp https download
[sqlite3] Success: "/home/user/www/node_modules/sqlite3/lib/binding/napi-v3-linux-x64/node_sqlite3.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile
sqlite3@5.0.0 /home/user/www/node_modules/sqlite3
 
 
~/www $ ln -fs server/index.js index.js
~/www $ mkdir -p tmp
~/www $ touch tmp/restart.txt
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.