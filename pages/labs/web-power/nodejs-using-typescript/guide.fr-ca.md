---
title: Utiliser TypeScript sur votre hébergement web POWER
slug: nodejs-using-typescript
excerpt: Découvrez comment utiliser TypeScript sur votre hébergement web POWER
section: Node.js
order: 7
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

Vous avez souscrit à un hébergement web POWER Node.js et vous souhaitez y déployer votre développement sous [TypeScript](https://www.typescriptlang.org/).

**Découvrez comment utiliser TypeScript sur votre hébergement web POWER**

## Prérequis

- Disposer d'une de l'offre d'hébergement web POWER [Python](https://labs.ovh.com/managed-python).
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.

Si vous venez de commencer à utiliser votre hébergement web POWER, nous vous conseillons de consulter notre guide [Premiers pas avec un hébergement web POWER](../premiers-pas-avec-hebergement-web-POWER/) avant de poursuivre.

## En pratique

Les projets TypeScript ne peuvent pas être exécutés directement par notre pile, ils doivent d'abord être compilés vers JS.

Vous devez inclure `typescript` en tant que module de dépendance en développement pour votre projet.

```sh
npm --save-dev typescript
```

Créez un fichier `tsconfig.json`, si vous ne l'avez pas déjà créé, avec le contenu suivant par exemple (plus d'informations dans [la documentation officielle de TypeScript(https://www.typescriptlang.org/docs/handbook/tsconfig-json.html))

```sh
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./build",
    "esModuleInterop": true,
    "strict": true
  }
}
```

Compilez et construisez le projet avec la commande `tsc` :


```sh
npx tsc --project ./
```

Ou en utilisant `npm run build` après avoir ajouté la commande `build` appropriée sous la propriété scripts du `package.json`:

```json
"scripts": {
  "build": "tsc --project ./"
},
```

Votre point d'entrée doit pointer sur celui du répertoire de sortie, par exemple :

```sh
ln -s build/server.js server.js
```



## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

**Pour discuter avec les autres utilisateurs du lab et avec l'équipe POWER Web Hosting, venez sur [notre room Gitter](https://gitter.im/ovh/power-web-hosting)**