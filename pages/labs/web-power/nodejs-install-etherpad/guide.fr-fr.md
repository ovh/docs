---
title: Installer Etherpad sur votre hébergement web POWER
slug: nodejs-installer-etherpad
excerpt: Découvrez comment installer Etherpad sur votre hébergement web POWER
section: Node.js
order: 2
---

**Dernière mise à jour le 25/01/2021**

## Objectif

## Prérequis

## En pratique

Moteur : nodejs 12 <br>
Point d'entrée : index.js <br>
Dossier racine : www <br>

```sh
~ $ node -v
v12.18.4
~ $ rm -rf www
~ $ mkdir www
~ $ cd www
~/www $ git init
~/www $ git remote add origin https://github.com/ether/etherpad-lite.git
~/www $ git pull origin master
remote: Enumerating objects: 2, done.
remote: Counting objects: 100% (2/2), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 36100 (delta 1), reused 0 (delta 0), pack-reused 36098
Receiving objects: 100% (36100/36100), 16.57 MiB | 14.04 MiB/s, done.
Resolving deltas: 100% (25484/25484), done.
From https://github.com/ether/etherpad-lite
 * branch            master     -> FETCH_HEAD
 * [new branch]      master     -> origin/master
Checking out files: 100% (492/492), done.
~/www $ bash bin/installDeps.sh
~/www $ ln -fs node_modules/ep_etherpad-lite/node/server.js index.js
~/www $ mkdir -p tmp
~/www $ touch tmp/restart.txt
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.