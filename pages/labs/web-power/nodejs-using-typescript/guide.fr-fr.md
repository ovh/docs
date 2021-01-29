---
title: Utiliser TypeScript sur votre hébergement web POWER
slug: nodejs-using-typescript
excerpt: Découvrez comment utiliser TypeScript sur votre hébergement web POWER
section: Node.js
order: 7
---

**Dernière mise à jour le 25/01/2021**

## Objectif

## Prérequis

## En pratique

Les projets TypeScript ne peuvent pas être exécutés directement par notre pile, ils doivent d'abord être compilés sur JS.

Vous devez inclure typescript en tant que module de dev dépendance pour votre projet.

```sh
~ $ yarn add -D typescript
```

Créez un fichier tsconfig.json, si vous ne l'avez pas déjà créé, avec le contenu suivant par exemple (Plus d'informations dans https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

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

Générer le projet avec la commande `tsc` suivante :


```sh
~ $ node_modules/typescript/bin/tsc --project ./
```

Or using yarn after adding the right build command under scripts property in package .json 

Ou en utilisant `yarn` après avoir ajouté la commande `build` appropriée sous la propriété scripts du paquet `.json`.

```sh
"scripts": {
  "build": "tsc --project ./"
},
```

```sh
~ $ yarn  build
yarn run v1.22.10
$ tsc --project ./
Done in 3.12s.
```

Votre point d'entrée doit pointer sur celui du répertoire de sortie, par exemple :

```sh
~/www $ ln -s build/server.js server.js
~/www $ touch tmp/restart.txt
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.