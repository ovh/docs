---
title: Utiliser TypeScript sur votre hébergement web POWER
excerpt: Découvrez comment utiliser TypeScript sur votre hébergement web POWER
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

Vous avez souscrit à un hébergement web POWER Node.js et vous souhaitez y déployer votre développement sous [TypeScript](https://www.typescriptlang.org/){.external}.

**Découvrez comment utiliser TypeScript sur votre hébergement web POWER**

## Prérequis

- Disposer de l'offre d'hébergement web POWER [Node.js](https://labs.ovh.com/managed-nodejs).
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

Si vous n'êtes pas encore familier avec l'utilisation de votre hébergement web POWER, nous vous conseillons de consulter notre guide « [Premiers pas avec un hébergement web POWER](/pages/labs/web-power/getting-started) » avant de poursuivre la lecture de ce guide.

## En pratique

Les projets TypeScript ne peuvent pas être exécutés directement par notre stack, ils doivent d'abord être compilés vers JS.

Vous devez inclure `typescript` en tant que module de dépendance en développement pour votre projet.

```sh
npm --save-dev typescript
```

Créez un fichier `tsconfig.json`, si vous ne l'avez pas déjà créé, avec le contenu suivant par exemple (plus d'informations dans [la documentation officielle de TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html){.external})

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

Ou en utilisant `npm run build` après avoir ajouté la commande `build` appropriée sous la propriété scripts du `package.json` :

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

**Pour discuter avec les autres utilisateurs du lab et avec l'équipe POWER Web Hosting, venez sur [notre room Gitter](https://gitter.im/ovh/power-web-hosting).**
