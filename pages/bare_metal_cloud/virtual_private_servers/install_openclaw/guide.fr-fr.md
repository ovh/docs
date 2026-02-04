---
title: Installer un agent OpenClaw sur un VPS OVHcloud
excerpt: "Découvrez comment déployer une instance OpenClaw 24 h/24 sur votre VPS OVHcloud en utilisant Docker Compose pour une isolation et une stabilité maximales."
updated: 2026-02-03
---

**OpenClaw** (successeur de Moltbot et Clawdbot) est la nouvelle version évoluée de l'assistant IA autonome. Ce guide utilise **Docker** pour protéger votre système hôte tout en assurant que votre assistant reste en ligne 24h/24.

## Objectif

L'objectif est de déployer OpenClaw dans un conteneur. Cela permet d'isoler l'agent du reste du VPS (sécurité) et de simplifier les mises à jour (une seule commande pour changer de version).

## Prérequis

- Disposer d'une offre [VPS OVHcloud](/links/bare-metal/vps) active.
- Être connecté en SSH à votre serveur via l'utilisateur par défaut (`ubuntu`, `debian`, etc.).
- Disposer d'une clé API (Anthropic ou OpenAI).

## En pratique

**Sommaire :**

- [Étape 1 : Installation de Docker](#docker-install)
- [Étape 2 : Préparation des répertoires](#prepare)
- [Étape 3 : Configuration du déploiement (Docker Compose)](#config)
- [Étape 4 : Lancement de l'agent](#launch)
- [Étape 5 : Accès sécurisé via tunnel SSH](#access)

### Étape 1 : Installation de Docker <a name="docker-install"></a>

Sur votre VPS, installez Docker et son plugin Compose :

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
```
*Note : Déconnectez-vous et reconnectez-vous en SSH pour que l'ajout au groupe Docker soit effectif.*

### Étape 2 : Préparation des répertoires <a name="prepare"></a>

Docker a besoin de dossiers sur votre VPS pour stocker les données de manière permanente (sessions WhatsApp, mémoire).

```bash
mkdir -p ~/openclaw/data
cd ~/openclaw
```

### Étape 3 : Configuration du déploiement <a name="config"></a>

Créez un fichier nommé docker-compose.yml dans ce dossier :

```bash
nano docker-compose.yml
```
Copiez-y la configuration suivante :

```bash
services:
  openclaw:
    image: openclaw/openclaw:latest
    container_name: openclaw-gateway
    restart: always
    ports:
      - "127.0.0.1:18789:18789"
    volumes:
      - ~/openclaw/data:/home/node/.openclaw
    environment:
      - NODE_ENV=production
```

> [!warning]
>
> Sécurité : En utilisant 127.0.0.1:18789:18789, le port est exposé uniquement à l'intérieur du VPS. Personne ne peut y accéder depuis l'extérieur sans le tunnel SSH.

### Étape 4 : Lancement <a name="launch"></a>
Démarrez votre agent :

```bash
docker compose up -d
```

### Étape 5 : Accès sécurisé via tunnel SSH <a name="access"></a>

1. **Sur votre ordinateur personnel** : Créez le tunnel
La méthode reste identique, depuis votre ordinateur personnel, ouvrez un terminal : 
- Windows : PowerShell ou Invite de commande (cmd).
- Linux / macOS : Terminal.

```bash
ssh -L 18789:127.0.0.1:18789 utilisateur@IP_DE_VOTRE_VPS
```
*Laissez cette fenêtre de terminal ouverte pendant toute la durée de votre utilisation.*

2. **Sur votre VPS (autre fenêtre terminal)** : Récupérez votre Token d'accès : 
```bash
cat ~/openclaw/data/openclaw.json | grep '"token":'
```

Ouvrez votre navigateur et accédez à : <http://127.0.0.1:18789>.
*Astuce : Si l'interface reste déconnectée, vous pouvez forcer la connexion en utilisant votre token directement dans l'URL : http://127.0.0.1:18789/?token=VOTRE_GATEWAY_TOKEN*

La suite se passe dans le menu **Overview** : saisissez votre **Gateway Token** pour vous connecter.

## Aller plus loin

[Sécuriser un VPS OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Documentation officielle OpenClaw](https://docs.openclaw.ai/)

Échangez avec notre [communauté d'utilisateurs](/links/community).
