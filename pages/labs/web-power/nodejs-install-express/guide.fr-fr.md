---
title: Installer Express sur votre hébergement web POWER
slug: nodejs-installer-express
excerpt: Découvrez comment installer Express sur votre hébergement web POWER
section: Node.js
order: 1
---

**Dernière mise à jour le 25/01/2021**

## Objectif

Vous souhaitez utilisez le framework Express pour accélérer le développement des vos applications web. Vous trouverez ici, comment l'installer et créer une simple page "Hello word"

**Découvrez comment installer Express sur votre hébergement web POWER**

## Prérequis

- Disposer d'une de l'offre d'hébergement web POWER [Node.js](https://labs.ovh.com/managed-nodejs).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

Si vous venez de commencer à utiliser votre hébergement web POWER, nous vous conseillons de consulter notre guide [Premiers pas avec un hébergement web POWER](../premiers-pas-avec-hebergement-web-POWER/) avant de poursuivre.

## En pratique

Moteur : nodejs 14 <br>
Point d'entrée : index.js <br>
Dossier racine : www <br>


```sh
~/www $ cd www
~/www $ node -v
v14.13.0
~/www $ npm install express --save
~/www $ vi index.js
const express = require('express');
const port = 3000;
const msg = `Hello World from NodeJS ${process.version}\n`;
const app = express();app.get('/', function (req, res) {
res.send(msg);
});
app.listen(port);
~/www $ mkdir -p tmp
~/www $ touch tmp/restart.txt
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.