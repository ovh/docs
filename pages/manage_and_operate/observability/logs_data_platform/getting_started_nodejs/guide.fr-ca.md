---
title: Démarrer avec Node.js
excerpt: Comment envoyer des logs depuis une application Node.js vers la plateforme Logs Data Platform
updated: 2026-01-10
---

## Objectif

Ce guide vous permet d'envoyer des logs depuis une application **Node.js** vers la **plateforme Logs Data Platform** (LDP).
Nous utiliserons le logger **Pino**, un logger rapide et à faible surcharge pour Node.js, combiné à un transport **GELF** (Graylog Extended Log Format).
Il est également possible d'utiliser le logger **Winston** avec un transport GELF ; les instructions sont fournies à la fin de ce guide.

## Prérequis

- Un [compte Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
- Un **flux** créé et son **jeton** (X-OVH-TOKEN).
- L'adresse de votre cluster LDP (par exemple, `gra1.logs.ovh.com`) et le port GELF (généralement `12202` pour TLS).
- Node.js installé sur votre environnement (version >= 20 recommandée).

## Instructions pour logger avec Pino

### Installer les dépendances

Nous avons besoin de deux paquets :
- `pino` : encode les logs en JSON.
- `@alex-michaud/pino-graylog-transport` : envoie les logs au point de terminaison LDP en utilisant GELF.

Installez-les via npm :

```bash
npm install pino @alex-michaud/pino-graylog-transport
```

### Configurer le logger

Créez un fichier nommé `logger.js` (ou `index.js`) et configurez le logger.

Vous devez :
1.  Configurer le transport pour qu'il pointe vers votre cluster LDP.
2.  Ajouter votre `X-OVH-TOKEN` à chaque message de log pour que LDP les accepte et les route. En GELF, les champs personnalisés commencent généralement par un underscore `_`.

```typescript
import { pino } from 'pino'
import { PinoGraylogTransport } from '@alex-michaud/pino-graylog-transport'

// Remplacez ces valeurs par votre configuration spécifique
const LDP_CLUSTER = 'gra1.logs.ovh.com'; // Votre adresse de cluster
const LDP_PORT = 12202;                  // Port GELF TLS
const LDP_TOKEN = 'votre-jeton-d-ecriture-de-flux-de-donnees';   // X-OVH-TOKEN

// Créez une promesse pour attendre que le transport soit prêt
let resolveReady, rejectReady;
const isReady = new Promise((resolve, reject) => {
    resolveReady = resolve;
    rejectReady = reject;
});

const pinoGraylogTransportOptions = {
    host: LDP_CLUSTER,
    port: LDP_PORT,
    protocol: 'tls',
    staticMeta: { 'X-OVH-TOKEN': LDP_TOKEN, }, // Note : pas d'underscore - le formateur GELF l'ajoute
    onReady: (success, err) => {
        if (success) {
            console.log('Transport Graylog connecté avec succès');
            resolveReady();
            return;
        }
        console.error('La connexion du transport Graylog a échoué :', err);
        rejectReady(err);
    },
}

const pinoGraylogTransport = new PinoGraylogTransport(pinoGraylogTransportOptions);

const logger = pino({ level: 'info' }, pinoGraylogTransport);

(async () => {
    try {
        // Attendre que le logger soit prêt
        await isReady;
        console.log('Le logger est prêt à envoyer des logs');

        // Exemples d'utilisation
        logger.info('Bonjour ! Ceci est un log de test depuis Node.js');
        logger.warn({ user_id: 42 }, 'L\'utilisateur a effectué une action restreinte');
        logger.error(new Error('Quelque chose s\'est mal passé'), 'Une erreur est survenue');

        await pinoGraylogTransport.flush();

        console.log('Le logger s\'est terminé');
    } catch (err) {
        console.error('Erreur du logger :', err);
        process.exit(1);
    }
})();
```

> **Note** : Pour des raisons de sécurité, nous vous recommandons d'utiliser des variables d'environnement pour stocker votre jeton et l'adresse de votre cluster plutôt que de les coder en dur.

### Exécuter et vérifier

Exécutez votre application :

```bash
node logger.js
```

Ensuite, allez dans votre interface **Graylog** (accessible via le panneau de configuration OVHcloud) et définissez un temps de recherche relatif (par exemple, "Les 5 dernières minutes"). Vous devriez voir vos messages apparaître dans le flux.

## Aller plus loin

- [Documentation de Pino](https://getpino.io/)
- [Documentation de @alex-michaud/pino-graylog-transport](https://www.npmjs.com/package/@alex-michaud/pino-graylog-transport)
- [Format de log étendu Graylog (GELF)](https://go2docs.graylog.org/5-0/getting_in_log_data/gelf.html)


## Instructions pour logger avec Winston

### Installer les dépendances

Nous avons besoin de deux paquets :
- `winston` : une bibliothèque de logging polyvalente pour Node.js.
- `winston-log2gelf` : un transport pour Winston pour envoyer des logs au format GELF.

Installez-les via npm :

```bash
npm install winston winston-log2gelf
```

### Configurer le logger

Créez un fichier nommé `logger.js` (ou `index.js`) et configurez le logger.

Vous devez :
1.  Configurer le transport pour qu'il pointe vers votre cluster LDP.
2.  Ajouter votre `X-OVH-TOKEN` à chaque message de log pour que LDP les accepte et les route. En GELF, les champs personnalisés commencent généralement par un underscore `_`.
3.  Définir le niveau de log selon vos besoins.

```javascript
import { createLogger } from 'winston';
import Log2gelf from 'winston-log2gelf';

// Remplacez ces valeurs par votre configuration spécifique
const LDP_CLUSTER = 'gra1.logs.ovh.com'; // Votre adresse de cluster
const LDP_PORT = 12202;                  // Port GELF TLS
const LDP_TOKEN = 'votre-jeton-d-ecriture-de-flux-de-donnees';   // X-OVH-TOKEN

const gelfTransport = new Log2gelf({
    level: "info",
    host: LDP_CLUSTER,
    port: LDP_PORT,
    protocol: "tls",
});

const logger = createLogger({
    exitOnError: false,
    level: 'info',
    transports: [
        gelfTransport
    ],
    defaultMeta: { 'X-OVH-TOKEN': LDP_TOKEN },
});

// Écouter les erreurs
logger.on('error', (error) => {
    console.error('Événement d\'erreur du logger :', error);
});

(async () => {
    try {
        console.log('Envoi des logs...');

        // Exemples d'utilisation
        logger.info('Bonjour ! Ceci est un log de test depuis Node.js avec Winston');
        logger.warn('L\'utilisateur a effectué une action restreinte', { user_id: 42 });
        logger.error('Une erreur est survenue', new Error('Quelque chose s\'est mal passé'));

        // Attendre que les logs soient envoyés - Log2gelf a besoin de temps pour traiter
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('Tous les logs ont été envoyés avec succès');
        process.exit(0);
    } catch (err) {
        console.error('Erreur du logger :', err);
        process.exit(1);
    }
})();
```

> **Note** : Pour des raisons de sécurité, nous vous recommandons d'utiliser des variables d'environnement pour stocker votre jeton et l'adresse de votre cluster plutôt que de les coder en dur.

### Exécuter et vérifier

Exécutez votre application :

```bash
node logger.js
```

Ensuite, allez dans votre interface **Graylog** (accessible via le panneau de configuration OVHcloud) et définissez un temps de recherche relatif (par exemple, "Les 5 dernières minutes"). Vous devriez voir vos messages apparaître dans le flux.
- [Documentation de Winston](https://www.npmjs.com/package/winston)
- [Documentation de Winston-log2gelf](https://www.npmjs.com/package/winston-log2gelf)
- [Format de log étendu Graylog (GELF)](https://go2docs.graylog.org/5-0/getting_in_log_data/gelf.html)
