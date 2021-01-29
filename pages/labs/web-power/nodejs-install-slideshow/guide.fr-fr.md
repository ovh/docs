---
title: Installer Slideshow sur votre hébergement web POWER
slug: nodejs-installer-slideshow
excerpt: Découvrez comment installer slideshow sur votre hébergement web POWER
section: Node.js
order: 5
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
~ $ git clone https://github.com/nafeu/realtime-slides-tut.git www
Cloning into 'www'...
remote: Enumerating objects: 91, done.
remote: Total 91 (delta 0), reused 0 (delta 0), pack-reused 91
Unpacking objects: 100% (91/91), done.
~ $ cd www
~/www $ npm install --save
~/www $ ln -fs server.js index.js
~/www $ mkdir -p tmp
~/www $ touch tmp/restart.txt
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.