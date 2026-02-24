---
title: "Installer OpenClaw derrière Traefik sur un VPS OVHcloud avec endpoints OVH AI"
excerpt: "Déployez OpenClaw en production avec HTTPS automatique via Traefik et connectez-le aux endpoints OVH AI sur un VPS OVHcloud."
updated: 2026-02-24
---

**OpenClaw** (successeur de Moltbot et Clawdbot) est la nouvelle version évoluée de l'assistant IA autonome. Ce guide utilise **Docker** afin de protéger votre système hôte tout en vous assurant que votre assistant reste en ligne 24h/24.

# Installer OpenClaw en production avec Traefik et endpoints OVH AI

Ce guide explique comment déployer **OpenClaw** sur un VPS OVHcloud avec :

- Docker & Docker Compose
- Traefik (reverse proxy)
- Certificats HTTPS automatiques (Let's Encrypt)
- Connexion aux endpoints OVH AI

Contrairement à une installation locale via tunnel SSH, cette méthode permet :

- un accès public sécurisé
- une architecture évolutive
- l’ajout futur d’autres services derrière le même proxy (nextcloud, n8n, stoat etc...)

---

## Objectif

Mettre en place l’architecture suivante :

```
Internet
   ↓
Traefik (HTTPS automatique)
   ↓
OpenClaw Gateway
   ↓
Endpoints OVH AI
```

---

## Prérequis

- VPS OVHcloud (Debian 11/12 ou Ubuntu 22.04+)
- Accès SSH
- Nom de domaine pointant vers votre VPS. Vous pouvez utiliser le nom de domaine qu'OVHcloud vous fourni avec votre VPS. Exemple nomdevotrevps.vps.ovh.net.
- Clé API OVH AI

---

# Sommaire

- [Étape 1 - Installation de Docker](#docker)
- [Étape 2 - Création du réseau proxy](#network)
- [Étape 3 - Installation de Traefik](#traefik)
- [Étape 4 - Installation d’OpenClaw](#openclaw)
- [Étape 5 - Configuration pour Traefik](#traefik-config)
- [Étape 6 - Configuration des endpoints OVH AI](#ovh)
- [Étape 7 - Démarrage final](#launch)
- [Étape 8 - Pairing du device](#pairing)

---

## Étape 1 - Installation de Docker <a name="docker"></a>

Vérifiez que docker est installer sur votre machine :
```bash
docker --version
docker compose version
```
Si vous voyez quelques chose comme ça : 
```bash
Docker version 29.2.1, build a5c7197
Docker Compose version v5.0.2
```
C'est que docker est deja installer sur votre machine. Sinon suivez le **guide**.

### Configuration des droits Docker (important)

Par défaut, les commandes Docker nécessitent `sudo`.  
Or, le script `docker-setup.sh` doit être exécuté **sans sudo** afin d’éviter des problèmes de permissions sur les fichiers générés (`.env`, `.openclaw`, volumes, etc.).

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

Si la commande s’exécute sans erreur de permission, vous pouvez continuer l’installation.

---

## Étape 2 - Création du réseau proxy <a name="network"></a>

Traefik et OpenClaw doivent partager un réseau Docker commun :

```bash
docker network create proxy
```

---

## Étape 3 - Installation de Traefik <a name="traefik"></a>

### Création du dossier

```bash
mkdir -p ~/docker/traefik && cd ~/docker/traefik
nano docker-compose.yml
```

### docker-compose.yml

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
N'oubliez pas d'adapter le fichier en remplaçant YOUR_EMAIL par votre email.

### Initialisation Let's Encrypt

```bash
mkdir letsencrypt
touch letsencrypt/acme.json
chmod 600 letsencrypt/acme.json
```

### Démarrage

```bash
docker compose up -d
```

---
## Étape 4 - Installation d’OpenClaw <a name="openclaw"></a>

```bash
cd ~
git clone https://github.com/openclaw/openclaw.git
cd openclaw
```

Préparer les dossiers :

```bash
mkdir -p ~/.openclaw/workspace
#on donne les droits aux users pour que le script d'installation puisse configurer les fichiers
sudo chown -R ubuntu:ubuntu ~/openclaw
```

Lancer le wizard :

```bash
./docker-setup.sh
```

À la fin de l'installation notez bien le token qui vous est fourni, on s'en servira pour se connecter à Openclaw. 
À tout moment vous pouvez retrouver cette valeur qui est stocker dans le .env de votre dossier openclaw en faisant : 

```bash
cat .env
#Ou alors via la commande :
grep OPENCLAW_GATEWAY_TOKEN .env
```
---

## Étape 5 - Configuration pour Traefik, et simplification de l'architecture OpenClaw <a name="traefik-config"></a>
Nous vous conseillons de modifier le `docker-compose.yml` généré par :

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
N'oubliez pas d'adapter le fichier en remplaçant YOUR_DOMAIN_NAME par votre nom de domaine.

---

## Étape 6 - Configuration des endpoints OVH AI <a name="ovh"></a>

Éditez :

```bash
#Avant d'etiter nous vous conseillons toujours de faire un backup en utilisant la commande mv, exemple ==>
mv ~/.openclaw/openclaw.json ~/.openclaw/openclaw.json.
nano ~/.openclaw/openclaw.json
```

Ajoutez dans la section `"gateway"` :

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
		  "https://YOUR_DOMAINNAME"
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
        "apiKey": YOUR_OVH_ENDPOINT_API_KEY,
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
	},
}

```
N'oubliez pas d'adapter le fichier en remplaçant les valeurs suivantes :
- YOUR_DOMAIN_NAME par votre nom de domaine.
- YOUR_OPENCLAW_TOKEN par le token que Openclaw vous a fourni à la fin de l'installation
- YOUR_OVH_ENDPOINT_API_KEY par votre clé API

---

## Étape 7 - Démarrage final <a name="launch"></a>

```bash
cd ~/openclaw/
docker compose down
docker compose up -d
```

Vérifiez :

```bash
docker logs openclaw
```

Vous devez voir en bleu cyan:
```
Gateway listening on 0.0.0.0:18789
```

---

## Étape 8 - Pairing du device <a name="pairing"></a>

---

# Accès à l’interface

Ouvrez :

```
https://votre-domaine.com
```

Dans "Overview", saisissez votre Gateway Token.

---

Lors de la première connexion, l’interface affichera :

> pairing required

Approuvez le device :

```bash
docker exec -it openclaw node dist/index.js devices list
docker exec -it openclaw node dist/index.js devices approve <ID>
```

## Aller plus loin

[Sécuriser un VPS OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Documentation officielle OpenClaw](https://docs.openclaw.ai/)

Échangez avec notre [communauté d'utilisateurs](/links/community).
