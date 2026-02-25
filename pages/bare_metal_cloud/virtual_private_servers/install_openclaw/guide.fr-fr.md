---
title: "Comment installer OpenClaw sur un VPS"
excerpt: "Déployez OpenClaw en production avec HTTPS automatique via Traefik et connectez-le aux AI Endpoints OVHcloud sur un VPS"
updated: 2026-02-25
---

## Objectif

**OpenClaw** (successeur de Moltbot et Clawdbot) est la nouvelle version évoluée de l'assistant IA autonome. Ce guide utilise Docker pour protéger votre système hôte et garantir que votre assistant reste en ligne 24h/24.

Contrairement à une installation locale via tunnel SSH, cette méthode permet :

- un accès public sécurisé via HTTPS (Let's Encrypt)
- une architecture évolutive derrière Traefik (reverse proxy)
- l'ajout futur d'autres services derrière le même proxy (Nextcloud, n8n, Stoat, etc.)

L'architecture cible :

```text
Internet
   ↓
Traefik (HTTPS automatique)
   ↓
OpenClaw Gateway
   ↓
AI Endpoints OVHcloud
```

**Ce guide explique comment déployer OpenClaw en production avec Docker, Traefik et les AI Endpoints OVHcloud sur un VPS.**

## Prérequis

- Disposer d'un [VPS OVHcloud](/links/bare-metal/vps) (Debian 11/12 ou Ubuntu 22.04+). Consultez notre guide « [Premiers pas avec un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) ».
- Accès SSH à votre VPS
- Un nom de domaine pointant vers votre VPS. Consultez notre guide « [Ajouter un enregistrement DNS de type A](/pages/web_cloud/domains/dns_zone_a_record_creation) » si nécessaire.
- Une clé API OVHcloud AI Endpoints. Consultez notre guide « [AI Endpoints - Premiers pas](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started) » pour en générer une.

## Sommaire

- [Étape 1 - Installation de Docker](#docker)
- [Étape 2 - Création du réseau proxy](#network)
- [Étape 3 - Installation de Traefik](#traefik)
- [Étape 4 - Installation d'OpenClaw](#openclaw)
- [Étape 5 - Configuration pour Traefik](#traefik-config)
- [Étape 6 - Configuration des AI Endpoints OVHcloud](#ovh)
- [Étape 7 - Démarrage final](#launch)
- [Étape 8 - Association de l'appareil](#pairing)

## En pratique

### Étape 1 - Installation de Docker <a name="docker"></a>

Vérifiez que Docker est installé sur votre machine :

```bash
docker --version
docker compose version
```

Si vous obtenez une sortie similaire à :

```console
Docker version 29.2.1, build a5c7197
Docker Compose version v5.0.2
```

Cela signifie que Docker est déjà installé sur votre machine. Dans le cas contraire, suivez le [guide d'installation de Docker](/pages/bare_metal_cloud/virtual_private_servers/install_docker_on_vps).

#### Configuration des droits Docker (important)

Par défaut, les commandes Docker nécessitent `sudo`. Cependant, le script `docker-setup.sh` doit être exécuté **sans sudo** pour éviter des problèmes de permissions sur les fichiers générés (`.env`, `.openclaw`, volumes, etc.).

Ajoutez votre utilisateur au groupe `docker` :

```bash
sudo usermod -aG docker $USER
```

Rechargez ensuite votre session :

```bash
newgrp docker
```

Vous pouvez vérifier que Docker fonctionne sans sudo :

```bash
docker ps
```

Si aucune erreur de permission n'apparaît, continuez l'installation.

### Étape 2 - Création du réseau proxy <a name="network"></a>

Traefik et OpenClaw doivent partager un réseau Docker commun :

```bash
docker network create proxy
```

### Étape 3 - Installation de Traefik <a name="traefik"></a>

#### Création du dossier

```bash
mkdir -p ~/docker/traefik && cd ~/docker/traefik
nano docker-compose.yml
```

#### Configuration du fichier docker-compose.yml

Copiez la configuration suivante dans le fichier `docker-compose.yml` :

```yaml
services:
   traefik:
    image: traefik:v2.11
    container_name: traefik
    restart: unless-stopped
    command:
      - "--api.dashboard=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.myresolver.acme.httpchallenge=true"
      - "--certificatesresolvers.myresolver.acme.httpchallenge.entrypoint=web"
      - "--certificatesresolvers.myresolver.acme.email=YOUR_EMAIL"
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./letsencrypt:/letsencrypt"
    networks:
      - proxy

networks:
  proxy:
    external: true
```

N'oubliez pas d'adapter le fichier en remplaçant `YOUR_EMAIL` par votre e-mail.

#### Initialisation du stockage Let's Encrypt

Créez le répertoire et le fichier de stockage des certificats avec les permissions appropriées :

```bash
mkdir letsencrypt
touch letsencrypt/acme.json
chmod 600 letsencrypt/acme.json
```

#### Démarrage de Traefik

Lancez le conteneur Traefik en arrière-plan :

```bash
docker compose up -d
```

### Étape 4 - Installation d'OpenClaw <a name="openclaw"></a>

```bash
cd ~
git clone https://github.com/openclaw/openclaw.git
cd openclaw
```

Préparez les dossiers :

```bash
mkdir -p ~/.openclaw/workspace
#on donne les droits aux users pour que le script d'installation puisse configurer les fichiers
sudo chown -R ubuntu:ubuntu ~/openclaw
```

Lancez le wizard :

```bash
./docker-setup.sh
```

À la fin de l'installation, notez bien le token qui vous est fourni, vous en aurez besoin pour vous connecter à OpenClaw.
À tout moment, vous pouvez retrouver cette valeur qui est stockée dans le `.env` de votre dossier OpenClaw :

```bash
cat .env
#Ou alors via la commande :
grep OPENCLAW_GATEWAY_TOKEN .env
```

### Étape 5 - Configuration pour Traefik <a name="traefik-config"></a>

Remplacez le contenu du `docker-compose.yml` généré par :

```yaml
services:
  openclaw-gateway:
    container_name: openclaw
    image: ${OPENCLAW_IMAGE:-openclaw:local}
    environment:
      HOME: /home/node
      TERM: xterm-256color
      OPENCLAW_GATEWAY_TOKEN: ${OPENCLAW_GATEWAY_TOKEN}
      CLAUDE_AI_SESSION_KEY: ${CLAUDE_AI_SESSION_KEY}
      CLAUDE_WEB_SESSION_KEY: ${CLAUDE_WEB_SESSION_KEY}
      CLAUDE_WEB_COOKIE: ${CLAUDE_WEB_COOKIE}
    volumes:
      - ${OPENCLAW_CONFIG_DIR}:/home/node/.openclaw
      - ${OPENCLAW_WORKSPACE_DIR}:/home/node/.openclaw/workspace
    init: true
    restart: unless-stopped
    command:
      [
        "node",
        "dist/index.js",
        "gateway",
        "--bind",
        "${OPENCLAW_GATEWAY_BIND:-lan}",
        "--port",
        "18789",
      ]
    networks:
      - proxy
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.openclaw.rule=Host(`YOUR_DOMAIN_NAME`)"
      - "traefik.http.routers.openclaw.entrypoints=websecure"
      - "traefik.http.routers.openclaw.tls.certresolver=myresolver"
      - "traefik.http.services.openclaw.loadbalancer.server.port=18789"
networks:
  proxy:
    external: true
```

N'oubliez pas d'adapter le fichier en remplaçant `YOUR_DOMAIN_NAME` par votre nom de domaine.

### Étape 6 - Configuration des AI Endpoints OVHcloud <a name="ovh"></a>

Avant de modifier le fichier de configuration, créez une sauvegarde puis ouvrez-le dans un éditeur de texte :

```bash
mv ~/.openclaw/openclaw.json ~/.openclaw/openclaw.json.bak
nano ~/.openclaw/openclaw.json
```

Copiez la configuration suivante dans le fichier `openclaw.json`. Cette configuration définit les paramètres de connexion, la gateway et le provider OVHcloud AI Endpoints :

```json
{
  "messages": {
    "ackReactionScope": "group-mentions"
  },
  "commands": {
    "native": "auto",
    "nativeSkills": "auto"
  },
  "gateway": {
    "port": 18789,
    "mode": "local",
    "bind": "lan",
    "controlUi": {
      "allowedOrigins": [
        "https://YOUR_DOMAIN_NAME"
      ]
    },
    "auth": {
      "mode": "token",
      "token": "YOUR_OPENCLAW_TOKEN"
    }
  },
  "models": {
    "mode": "merge",
    "providers": {
      "ovhcloud": {
        "baseUrl": "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
        "apiKey": "YOUR_OVH_ENDPOINT_API_KEY",
        "api": "openai-completions",
        "models": [
          {
            "id": "gpt-oss-120b",
            "name": "gpt-oss-120b",
            "compat": {
              "supportsStore": false
            }
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "ovhcloud/gpt-oss-120b"
      },
      "models": {
        "ovhcloud/gpt-oss-120b": {}
      }
    }
  }
}
```

N'oubliez pas d'adapter le fichier en remplaçant les valeurs suivantes :

- `YOUR_DOMAIN_NAME` par votre nom de domaine.
- `YOUR_OPENCLAW_TOKEN` par le token qu'OpenClaw vous a fourni à la fin de l'installation.
- `YOUR_OVH_ENDPOINT_API_KEY` par votre clé API.

### Étape 7 - Démarrage final <a name="launch"></a>

Une fois la configuration terminée, redémarrez les conteneurs OpenClaw pour appliquer les modifications :

```bash
cd ~/openclaw/
docker compose down
docker compose up -d
```

Vérifiez que le gateway est bien actif en consultant les logs du conteneur :

```bash
docker logs openclaw
```

Si le démarrage s'est déroulé correctement, vous devez voir apparaître le message suivant (en bleu cyan) :

```console
Gateway listening on 0.0.0.0:18789
```

### Étape 8 - Association de l'appareil <a name="pairing"></a>

Accédez à l'interface web d'OpenClaw depuis votre navigateur en ouvrant l'URL de votre domaine :

```text
https://votre-domaine.com
```

Dans la section `Overview`, saisissez votre `Gateway Token` pour vous authentifier.

Lors de la première connexion depuis un nouvel appareil, l'interface affiche le message suivant :

```console
pairing required
```

Pour autoriser l'appareil, listez les appareils en attente puis approuvez celui souhaité en remplaçant `<ID>` par l'identifiant affiché :

```bash
docker exec -it openclaw node dist/index.js devices list
docker exec -it openclaw node dist/index.js devices approve <ID>
```

## Aller plus loin

[Sécuriser un VPS OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Documentation officielle OpenClaw](https://docs.openclaw.ai/)

Échangez avec notre [communauté d'utilisateurs](/links/community).
