---
title: Installer Slideshow sur votre hébergement web POWER
slug: nodejs-installer-slideshow
excerpt: Découvrez comment installer Slideshow sur votre hébergement web POWER
section: Node.js
order: 5
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

Vous avez souscrit à un hébergement web POWER Node.js et vous souhaitez y déployer une [solution de présentation de slides](https://nafeu.medium.com/real-time-presentation-slides-with-socket-io-express-node-js-and-javascript-cf08a95ff098){.external}.

**Découvrez comment installer Slideshow sur votre hébergement web POWER**

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
> Vous pouvez appeler l'API OVHcloud pour [visualiser la configuration active](../premiers-pas-avec-hebergement-web-POWER/#api-get-active-configuration)

[Accédez via SSH](../premiers-pas-avec-hebergement-web-POWER/#ssh) à votre hébergement web POWER. Commencez par recupérer les sources du projet :

```sh
rm -rf www
git clone https://github.com/nafeu/realtime-slides-tut.git www
```

Allez dans le répertoire `www` et exécutez `npm install`, puis créez un lien symbolique entre le point d'entrée et le fichier principal de l'application :

```sh
cd www
npm install --save
ln -fs server.js index.js
```

[Redémarrez votre instance](../premiers-pas-avec-hebergement-web-POWER/#restart), votre application de présentation de slides sera alors en ligne.

![Slideshow](images/nodejs-install-slideshow-01.png){.thumbnail}

Sortie du terminal:


<pre class="console"><code> ~ $ rm -rf www

~ $ git clone https://github.com/nafeu/realtime-slides-tut.git www
Clonage dans 'www'...
remote: Enumerating objects: 91, done.
remote: Total 91 (delta 0), reused 0 (delta 0), pack-reused 91
Dépaquetage des objets: 100% (91/91), fait.

~ $ cd www
 
~/www $ npm install --save
npm WARN realtime-slides-tut@1.0.0 No repository field.
added 297 packages from 253 contributors and audited 297 packages in 6.689s
found 18 vulnerabilities (9 low, 3 moderate, 5 high, 1 critical)
  run `npm audit fix` to fix them, or `npm audit` for details

~/www $ ln -fs server.js index.js

~/www $ mkdir -p tmp

~/www $ touch tmp/restart.txt

</code></pre>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

**Venez sur [Discord](https://discord.gg/ovhcloud) sur notre room web-hosting-power pour discuter avec les autres utilisateurs du lab et avec l'équipe POWER Web Hosting.**
