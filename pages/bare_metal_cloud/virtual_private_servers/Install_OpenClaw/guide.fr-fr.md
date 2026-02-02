---
title: Installer un agent OpenClaw sur un VPS OVHcloud
excerpt: "Découvrez comment déployer une instance OpenClaw 24/7 sur votre VPS OVHcloud en utilisant le script d'installation officiel et le mode daemon."
updated: 2026-02-02
---

> **OpenClaw** (successeur de Moltbot et Clawdbot) est la nouvelle version évoluée de l'assistant IA autonome. Ce guide vous accompagne dans l'installation de la Gateway sur l'infrastructure OVHcloud.

## Objectif

L'objectif de ce guide est de faire fonctionner une **Gateway OpenClaw** persistante sur un VPS OVHcloud. Contrairement aux anciennes versions, OpenClaw s'installe désormais directement sur le système pour des performances accrues et une gestion simplifiée via son propre gestionnaire de processus (daemon).

## Prérequis

- Disposer d'une offre [VPS OVHcloud](https://www.ovhcloud.com/fr/vps/) active.
- Être connecté en SSH à votre serveur via l'utilisateur par défaut (`ubuntu`, `debian`, etc.).
- Disposer d'une clé API (Anthropic ou OpenAI).

## En pratique

**Sommaire :**
- [Étape 1 : Préparation du système](#prepare)
- [Étape 2 : Installation de Node.js 22](#node-install)
- [Étape 3 : Installation d'OpenClaw](#openclaw-install)
- [Étape 4 : Configuration (Onboarding)](#config)
- [Étape 5 : Persistance et Daemon](#daemon)
- [Étape 6 : Accès sécurisé via Tunnel SSH](#access)

---

### Étape 1 : Préparation du système <a name="prepare"></a>

Connectez-vous à votre VPS. Chez OVHcloud, utilisez l'utilisateur indiqué dans votre e-mail de livraison (ex: `debian` ou `ubuntu`).

```bash
# Mise à jour du système
sudo apt-get update && sudo apt-get install -y git curl ca-certificates
```

### Étape 2 : Installation de Node.js 22 <a name="node-install"></a>

OpenClaw nécessite Node.js version 22 ou supérieure pour fonctionner.

```bash
# Installation de Node.js 22 via le dépôt officiel Nodesource
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```


### Étape 3 : Installation d'OpenClaw <a name="openclaw-install"></a>


Nous utilisons l'installeur scripté recommandé qui configure automatiquement l'environnement.

```bash
# Lancement de l'installation officielle
curl -fsSL https://openclaw.ai/install.sh | bash
```

[!IMPORTANT] Si la commande openclaw n'est pas reconnue après l'installation, ajoutez manuellement le chemin des binaires npm à votre système :


```bash
echo 'export PATH="$(npm prefix -g)/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```
### Étape 4 : Configuration (Onboarding) <a name="config"></a>

Lancez l'assistant interactif pour configurer vos clés API et vos canaux de communication (WhatsApp, etc.).

```bash
openclaw onboard
```

Suivez les instructions à l'écran. Lors du choix de la **Gateway**, sélectionnez *Local* pour restreindre l'accès au serveur lui-même (recommandé pour la sécurité).

### Étape 5 : Persistance et Daemon <a name="daemon"></a>

Pour que votre agent reste en ligne 24h/24 même après la fermeture de votre terminal ou un redémarrage du VPS, vous devez installer le service "daemon".

**Installation du service système**

```bash
openclaw onboard --install-daemon
```

**Vérifiez que le service est actif :**
```bash
openclaw status
```

### Étape 6 : Accès sécurisé via Tunnel SSH <a name="access"></a>

Par sécurité, la Gateway OpenClaw écoute sur l'interface locale (127.0.0.1). Pour accéder à l'interface graphique (Dashboard) depuis votre ordinateur personnel :

1 Ouvrez un terminal sur votre machine locale.

2 Créez un tunnel SSH sécurisé :
```bash
ssh -L 18789:127.0.0.1:18789 utilisateur@IP_DE_VOTRE_VPS
```
3 Ouvrez votre navigateur et accédez à : http://127.0.0.1:18789.

4 La suite se passe dans le menu **"Overview"**, saisissez votre **Gateway Token** pour vous connecter. Vous pouvez le retrouver sur le VPS avec :
```bash
grep -oP '"token":\s*"\K[^"]+' ~/.openclaw/openclaw.json
grep -oP '"password":\s*"\K[^"]+' ~/.openclaw/openclaw.json

#ou alors en allant directement dans le fichier où ils sont stocké
nano openclaw.json
```

## Ce qui persiste (Source de vérité)

Toutes vos données critiques sont stockées dans le répertoire personnel de l'utilisateur sur le VPS. Cela garantit que votre agent conserve sa mémoire et ses accès même après une mise à jour.

| Composant | Emplacement par défaut | Notes |
| :--- | :--- | :--- |
| **Configurations** | `~/.openclaw/openclaw.json` | Contient les réglages réseau (bind, port) et l'état des services. |
| **Secrets & Clés** | `~/.openclaw/.env` | Stocke vos clés API et votre Token de Gateway. | |
| **Canaux (WhatsApp)** | `~/.openclaw/credentials/` | Contient les données d'authentification pour éviter de scanner le QR Code à chaque fois. |
| **Mémoire & Travail** | `~/.openclaw/workspace/` | Répertoire où l'IA génère des fichiers, du code ou stocke ses documents. |

---

## Commandes Essentielles

Voici les commandes à connaître pour piloter votre instance directement depuis le terminal du VPS :

| Commande | Action |
| :--- | :--- |
| `openclaw status` | Vérifie si la Gateway est active et liste les canaux (WhatsApp, etc.) connectés. |
| `openclaw logs --follow` | Affiche l'activité de l'IA en temps réel (pratique pour débugger un crash). |
| `openclaw doctor` | Analyse votre installation et répare automatiquement les erreurs de configuration. |
| `openclaw daemon restart` | Relance le service en arrière-plan (nécessaire après modification du fichier JSON). |
| `openclaw update` | Télécharge et installe la toute dernière version d'OpenClaw sans perdre vos données. |







