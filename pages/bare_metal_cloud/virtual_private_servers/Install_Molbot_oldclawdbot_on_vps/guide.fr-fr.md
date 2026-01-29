---
title: Installer un agent Moltbot (anciennement Clawdbot) sur un VPS OVHcloud
excerpt: "Découvrez comment déployer une instance Moltbot 24/7 sur votre VPS OVHcloud en utilisant Docker, avec une gestion sécurisée de l'utilisateur et une persistance des données."
updated: 2026-01-21
---

> **Moltbot** est la nouvelle version évoluée de **Clawdbot**. Ce guide vous accompagne dans l'installation de la Gateway sur l'infrastructure OVHcloud.

## Objectif

L'objectif de ce guide est de faire fonctionner une **Gateway Moltbot** persistante sur un VPS OVHcloud. Cette installation utilise Docker pour isoler l'application tout en garantissant que vos sessions (WhatsApp, Telegram, configurations) survivent aux redémarrages du serveur.

Contrairement à un hébergement managé, vous êtes responsable de la configuration et de la sécurité de votre instance.

## Prérequis

- Disposer d'une offre [VPS OVHcloud](https://www.ovhcloud.com/fr/vps/) active.
- Être connecté en SSH à votre serveur via l'utilisateur par défaut (`ubuntu`, `debian`, etc.).
- Disposer des informations d'authentification (clés API) pour vos modèles d'IA.

## En pratique

**Sommaire :**
- [Étape 1 : Préparation du système](#prepare)
- [Étape 2 : Installation de Docker](#docker-install)
- [Étape 3 : Configuration de la persistance](#persistence)
- [Étape 4 : Configuration de Moltbot](#config)
- [Étape 5 : Construction et lancement](#launch)
- [Étape 6 : Accès sécurisé via Tunnel SSH](#access)

---

### Étape 1 : Préparation du système <a name="prepare"></a>

Connectez-vous à votre VPS. Chez OVHcloud, vous n'utilisez pas le compte `root` par défaut. Utilisez l'utilisateur indiqué dans votre e-mail de livraison (ex: `ubuntu` pour Ubuntu).

```bash
# Exemple de connexion (remplacez par votre IP)
ssh ubuntu@IP_DE_VOTRE_VPS
```

Une fois connecté, mettez à jour le système et installez les outils de base

```bash
sudo apt-get update && sudo apt-get install -y git curl ca-certificates
```

### Étape 2 : Installation de Docker <a name="docker-install"></a>

Pour isoler Moltbot et faciliter ses mises à jour, nous utilisons Docker. Sur un VPS OVHcloud, l'installation se fait via le script officiel :

```bash
# Installation de Docker
curl -fsSL https://get.docker.com | sudo sh
```

```bash
# Ajout de l'utilisateur actuel au groupe docker pour éviter l'usage de sudo
sudo usermod -aG docker $USER
```
[!IMPORTANT] Pour que l'ajout au groupe Docker soit pris en compte, vous devez impérativement vous déconnecter puis vous reconnecter en SSH à votre VPS.

### Étape 3 : Configuration de la persistance <a name="persistence"></a>

Sur un VPS OVHcloud, les données stockées à l'intérieur d'un conteneur Docker sont perdues lors de sa suppression ou de sa mise à jour. Pour conserver vos sessions (WhatsApp, Telegram) et vos fichiers de configuration, nous lions des répertoires du système hôte au conteneur.

```bash
# Création des répertoires de stockage dans votre répertoire personnel
mkdir -p ~/.clawdbot
mkdir -p ~/clawd

# Clonage du code source de Moltbot
git clone [https://github.com/moltbot/moltbot.git](https://github.com/moltbot/moltbot.git)
cd moltbot
```

### Étape 4 : Configuration de Moltbot <a name="config"></a>

Créez le fichier d'environnement `.env` à la racine du répertoire `moltbot` pour configurer vos accès et les chemins de stockage.

```bash
nano .env
```

Copiez et adaptez la configuration suivante. 

Note : Si vous utilisez une distribution Debian, remplacez /home/ubuntu/ par /home/debian/ dans les variables CLAWDBOT_CONFIG_DIR et CLAWDBOT_WORKSPACE_DIR.
```
CLAWDBOT_IMAGE=moltbot:latest
CLAWDBOT_GATEWAY_TOKEN=votre_token_secret_ici
CLAWDBOT_GATEWAY_BIND=lan
CLAWDBOT_GATEWAY_PORT=18789

# Chemins de persistance sur l'hôte VPS OVHcloud
CLAWDBOT_CONFIG_DIR=/home/ubuntu/.clawdbot
CLAWDBOT_WORKSPACE_DIR=/home/ubuntu/clawd

GOG_KEYRING_PASSWORD=votre_mot_de_passe_keyring
XDG_CONFIG_HOME=/home/node/.clawdbot
```

[!WARNING] Ne partagez jamais votre fichier .env et assurez-vous qu'il est listé dans votre .gitignore pour éviter de pousser vos secrets sur un dépôt public.

### Étape 5 : Construction et lancement <a name="launch"></a>

Pour que Moltbot soit pleinement opérationnel, il nécessite l'intégration de binaires spécifiques (Gmail, WhatsApp, Google Places) directement dans l'image Docker. Cette méthode de "bake-in" garantit que les outils nécessaires aux compétences (skills) de l'agent ne disparaissent pas lors d'un redémarrage du conteneur.

```bash
# Construction de l'image personnalisée incluant les binaires nécessaires
docker compose build
```

```bash
# Lancement de la Gateway Moltbot en mode détaché (arrière-plan)
docker compose up -d moltbot-gateway
```

Vous pouvez vérifier que les binaires sont correctement installés dans le conteneur avec ces commandes :

```bash
docker compose exec moltbot-gateway which gog
docker compose exec moltbot-gateway which wacli
```

Pour suivre le démarrage en temps réel et confirmer que la Gateway écoute sur le bon port, consultez les logs :
```bash
docker compose logs -f moltbot-gateway
```
Le message attendu est : [gateway] listening on ws://0.0.0.0:18789.

### Étape 6 : Accès sécurisé via Tunnel SSH <a name="access"></a>

Par sécurité, la Gateway Moltbot est configurée pour n'écouter que sur l'interface locale du VPS (`127.0.0.1`). Cela évite d'exposer l'interface de contrôle directement sur internet. Pour y accéder en toute sécurité depuis votre ordinateur personnel :

1.  Ouvrez un terminal sur **votre machine locale** (ordinateur personnel).
2.  Créez un tunnel SSH sécurisé en remplaçant `ubuntu` par votre utilisateur et en renseignant l'IP de votre VPS :
    ```bash
    ssh -N -L 18789:127.0.0.1:18789 ubuntu@IP_DE_VOTRE_VPS
    ```
3.  Ouvrez votre navigateur web et accédez à l'URL suivante : `http://127.0.0.1:18789`.
4.  Saisissez le `CLAWDBOT_GATEWAY_TOKEN` que vous avez défini dans votre fichier `.env` pour vous connecter au Control UI.

---

## Ce qui persiste (Source de vérité)

Moltbot fonctionne dans Docker, mais les données critiques sont stockées sur votre VPS pour survivre aux mises à jour :

| Composant | Emplacement sur l'hôte | Mécanisme | Notes |
| :--- | :--- | :--- | :--- |
| **Config Gateway** | `~/.clawdbot/` | Volume Host | Inclus `moltbot.json` et les tokens. |
| **Profils Auth** | `~/.clawdbot/` | Volume Host | Clés API et tokens OAuth. |
| **Sessions WhatsApp**| `~/.clawdbot/` | Volume Host | Préserve la connexion par QR Code. |
| **Espace de travail** | `~/clawd/` | Volume Host | Artefacts et code générés par l'agent. |
| **Binaires Externes** | `/usr/local/bin/` | Image Docker | Doivent être inclus lors du build. |

---

## Allez plus loin

* [Sécuriser un VPS](https://docs.ovh.com/fr/vps/tips-for-securing-a-vps/) : Consultez nos recommandations pour renforcer l'accès à votre serveur.
* [Sauvegardes VPS](https://docs.ovh.com/fr/vps/vps-faq/) : Assurez la pérennité de vos données d'agent avec l'option de backup automatisé.
