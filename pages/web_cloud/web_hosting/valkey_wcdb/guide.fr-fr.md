---
title: "Démarrer avec Valkey sur Web Cloud Databases (OVHcloud)"
excerpt: "Créez une instance Valkey, autorisez vos IP, récupérez l’URL de connexion et testez depuis un CLI ou votre application (Node.js, Python, PHP, Java, Go)."
updated: 2025-10-21
---

## Objectif

**Valkey** est un magasin de données **en mémoire**, open source, compatible avec l’écosystème clients et protocoles de Redis (RESP). Il convient aux **caches**, **sessions**, **files d’attente légères** et **compteurs** à haute performance.  
Ce guide explique pas à pas comment utiliser **Valkey** avec **Web Cloud Databases (WCDB)** : création de l’instance, autorisation d’adresses IP, récupération des paramètres de connexion, test via un client en ligne de commande, puis intégration dans des applications.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Assurez-vous de sécuriser l’accès (IPs autorisées, mots de passe robustes) et de tester en pré-production avant mise en ligne.

## Prérequis

- Disposer d'une [instance Valkey sur Web Cloud Databases](/links/web/databases) (incluse dans une offre d'[hébergement web performance](/links/web/hosting)).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Étape 1 — Autoriser l’adresse IP d’accès

Par défaut, votre instance Valkey refuse les connexions publiques. Pour autoriser (mettre en liste blanche) l’adresse IP source depuis laquelle vous vous connecterez, consultez notre guide [Premiers pas avec le service Web Cloud Databases](/pages/web_cloud/web_cloud_databases/authorise_IP).

Répétez l’opération pour chaque machine qui doit accéder à votre instance Valkey.

### Étape 2 — Configurer les paramètres de connexion

#### Récupérer les paramètres de connexion

Dans la barre de services à gauche de votre [espace client OVHcloud](/links/manager), rendez-vous dans la section `Web Cloud Databases`{.action}, puis sur l'instance ValKey.

Dans l'onglet `Informations générales`{.action}, notez les informations suivantes :

- `Nom d'hôte`{.action} : par exemple `xxx.wcdb.ovh.net`.
- `Port`{.action} : par exemple `6379` (non TLS) ou `6380` (TLS).
- `Certificat`{.action} : TLS activé (ex : `TLS CA`{.action}) ou non.

> [!primary]
>
> Le protocole TLS (Transport Layer Security) chiffre les échanges entre votre application et votre base de données.

#### Réinitialiser ou récupérer le mot de passe (si nécessaire)

Si vous ne connaissez plus le mot de passe du compte administrateur ou si vous souhaitez en générer un nouveau :

1. Dans l’onglet `Informations générales`{.action}, cliquez sur le bouton `⋯`{.action} à droite du champ `Mot de passe du serveur`{.action}.

  ![Valkey](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/update-admin-password-button.png){.thumbnail}

2. Cliquez sur `Changer le mot de passe`{.action}.

3. Saisissez un mot de passe robuste, puis validez. Attendez quelques minutes que la modification soit appliquée avant de tester la connexion.

#### Mémoriser vos informations

Conservez les informations que vous venez de récupérer :

- Nom d’hôte
- Port
- Mot de passe du serveur
- Certificat TLS (facultatif)

Ces éléments seront nécessaires lors des prochaines étapes pour tester la connexion à votre instance depuis un client Valkey ou depuis votre application.


### Étape 3 — Tester la connexion avec un client en ligne de commande

Connectez-vous une première fois à votre instance Valkey pour vérifier que tout est prêt (adresse IP autorisée, mot de passe, port, TLS, etc.).

#### Installer le client de connexion

Dans cet exemple, nous utilisons le client `redis-cli`, compatible avec Valkey et facile à installer. Mais vous êtes libres d'installer le client de connexion de votre choix.

> [!tabs]
> Debian/Ubuntu
>>
>>
>> ```bash
>> sudo apt update && sudo apt -y install redis-tools
>> ```
> AlmaLinux/Rocky
>> ```bash
>> sudo dnf -y install redis
>> ```
> macOS
>> ```bash
>> brew install redis
>> ```
> Windows
>> ```powershell
>> winget install redis
>> ```

Une fois installé, ouvrez un terminal et vérifiez que le client fonctionne :

```bash
redis-cli --version
```



**Connexion (sans TLS) :**
```bash
redis-cli -h HOSTNAME -p PORT -a PASSWORD
```

**Connexion (avec TLS) :**
```bash
redis-cli --tls -h HOSTNAME -p PORT -a PASSWORD
# ou
redis-cli -u "rediss://:PASSWORD@HOSTNAME:PORT"
```

**Smoke test :**
```bash
PING
SET demo:key "hello"
GET demo:key
DEL demo:key
```

Si vous obtenez `PONG` puis `"hello"`, la connexion et l’écriture fonctionnent. Votre instance Valkey est opérationnelle.

## Aller plus loin

- Portail Aide OVHcloud (catégorie **Web Cloud Databases**) : https://help.ovhcloud.com/csm/fr-documentation-web-cloud-clouddb
- Guides utiles : *Autoriser une IP*, *Se connecter à une base de données*, *Réinitialiser le mot de passe* (même rubrique).
- Concepts & optimisation Valkey : TTL, types (hashes, sets, sorted sets), pipelines, pooling.
- Sécurité : rotation de secrets, journalisation et alertes.

Pour des prestations spécialisées, contactez les **partenaires OVHcloud** (/links/partner) et échangez avec notre **communauté** (/links/community).