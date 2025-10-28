---
title: "Comment installer n8n sur un VPS OVHcloud"
excerpt: "Découvrez comment héberger la plateforme d’automatisation n8n sur un VPS OVHcloud à l’aide de Docker et Traefik"
updated: 2025-09-23
---

## Objectif

Ce guide vous explique comment installer et exécuter [n8n](https://n8n.io), une plateforme open source d’automatisation de workflows, sur un VPS OVHcloud. [L’installation manuelle](#step3) s’appuie sur [Docker](https://www.docker.com/), avec le serveur [Traefik](https://doc.traefik.io/traefik/) pour gérer automatiquement les certificats SSL. Pour une [mise en route clé en main](#step2), optez pour un [VPS n8n préinstallé OVHcloud](/links/bare-metal/vps-n8n).

## Prérequis

- Disposer d'un [VPS](/links/bare-metal/vps) fonctionnel (Debian 11 ou supérieur recommandé)
- Disposer d'un nom de domaine
- Disposer d'un accès administrateur (sudo) via SSH à votre serveur

## En pratique

### Sommaire

- [Se connecter à votre VPS](#step1)
- [Vous utilisez une image OVHcloud préinstallée](#step2)
- [Vous n'utilisez pas d'image OVHcloud préinstallée](#step3)
- [Configuration DNS](#step4)
- [Accéder à l’interface n8n](#step5)
- [Conclusion](#step6)

### Se connecter à votre VPS <a name="step1"></a>

Ouvrez un terminal et connectez-vous à votre VPS avec la commande suivante (en remplaçant `IP_DU_VPS` par la véritable IP) :

```bash
ssh <user>@IP_VPS
```

### Vous utilisez une image OVHcloud préinstallée <a name="step2"></a>

Si vous avez choisi un **VPS OVHcloud avec l’image n8n préinstallée**, **vous n’avez pas besoin d’installer Docker ni Docker Compose** : ces outils sont déjà présents et configurés.

Retrouvez tous les fichiers nécessaires (y compris `docker-compose.yml` et `.env`) dans le dossier `/home/debian/n8n/` sur votre VPS.

Dirigez-vous dans le dossier `/home/debian/n8n/` et modifiez le fichier `.env` :

```bash
cd /home/debian/n8n/
nano .env
```

Renseignez-y les informations suivantes :

- `DOMAIN_NAME` : votre nom de domaine (ex : `vps.ovh.net`).
- `SUBDOMAIN` : le sous-domaine utilisé pour accéder à n8n (ex : `vps-xxxxxxx`).
- `SSL_EMAIL` : l’adresse e-mail utilisée pour générer les certificats SSL via Let’s Encrypt.

Une fois le fichier `.env` mis à jour, exécutez la commande suivante (depuis le dossier `/home/debian/n8n/`) :

```bash
docker compose up -d
```

### Vous n'utilisez pas d'image OVHcloud préinstallée <a name="step3"></a>

#### Installer Docker et Docker Compose

Pour déployer n8n via Docker sur un VPS OVHcloud, Docker et Docker Compose doivent être installés. Cette méthode est compatible avec la majorité des distributions proposées par OVHcloud (Debian 11, Debian 12, Ubuntu 22.04...).

##### Étape 1 - Mettez le système à jour

```bash
sudo apt update && sudo apt upgrade -y
```

##### Étape 2 - Ajouter la clé GPG officielle de Docker

```bash
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

##### Étape 3 - Ajouter le dépôt Docker

Pour Debian (version 11 et 12) :

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Pour Ubuntu (version égale ou supérieure à 22.04) :

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

##### Étape 4 - Installer Docker Engine et Docker Compose Plugin

```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

##### Étape 5 - Vérifier que Docker et Docker Compose fonctionnent

```bash
docker --version
docker compose version
```

#### Préparer la configuration Traefik + n8n

Créez un dossier de projet où résidera la stack Docker :

```bash
mkdir n8n-traefik && cd n8n-traefik
```

#### Créer les fichiers de configuration

##### Fichier .env

Ce fichier vous permet de définir les variables réutilisées dans le fichier `docker-compose.yml`.

Créez le fichier :

```bash
nano .env
```

Collez-y le contenu suivant :

```ini
DOMAIN_NAME=exemple.com
SUBDOMAIN=n8n
SSL_EMAIL=admin@exemple.com
```

Remplacez `exemple.com` par votre véritable nom de domaine et `admin@exemple.com` par l'e-mail de votre choix.

> [!warning]
>
> Si vous ne possédez pas encore de nom de domaine, commandez-en un sur notre [site web](/links/web/domains).

##### Fichier docker-compose.yml

Ce fichier contient la définition des services n8n et Traefik. Il configure notamment :

- Le reverse proxy et la gestion SSL avec Traefik.
- L’authentification de base pour accéder à n8n.

Créez le fichier :

```bash
nano docker-compose.yml
```

Collez le contenu suivant :

```yaml
services:
  traefik:
    image: traefik:v2.11
    container_name: traefik
    restart: always
    command:
      - "--api.insecure=true"
      - "--providers.docker=true"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.myresolver.acme.httpchallenge=true"
      - "--certificatesresolvers.myresolver.acme.httpchallenge.entrypoint=web"
      - "--certificatesresolvers.myresolver.acme.email=${SSL_EMAIL}"
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./letsencrypt:/letsencrypt"
    labels:
      - "traefik.http.routers.http-catch.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)"
      - "traefik.http.routers.http-catch.entrypoints=web"
      - "traefik.http.routers.http-catch.middlewares=redirect-to-https"
      - "traefik.http.middlewares.redirect-to-https.redirectscheme.scheme=https"

  n8n:
    image: n8nio/n8n
    container_name: n8n
    restart: always
    environment:
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=admin
      - N8N_BASIC_AUTH_PASSWORD=admin123
      - N8N_HOST=${SUBDOMAIN}.${DOMAIN_NAME}
      - WEBHOOK_URL=https://${SUBDOMAIN}.${DOMAIN_NAME}/
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.n8n.rule=Host(`${SUBDOMAIN}.${DOMAIN_NAME}`)"
      - "traefik.http.routers.n8n.entrypoints=websecure"
      - "traefik.http.routers.n8n.tls.certresolver=myresolver"
      - "traefik.http.services.n8n.loadbalancer.server.port=5678"
    volumes:
      - n8n_data:/home/node/.n8n

volumes:
  n8n_data:
```

> [!warning]
>
> Par défaut, l’utilisateur et le mot de passe sont définis sur admin / admin123. Cette méthode n’est pas activée dans toutes les versions de n8n. Si vous souhaitez l’utiliser malgré tout, pensez à modifier ces valeurs dans le fichier docker-compose.yml avant de lancer la stack, et utilisez un mot de passe fort.

#### Préparer le dossier des certificats SSL

Traefik stocke les certificats générés par Let's Encrypt dans un fichier nommé `acme.json`. Ce fichier doit exister avant le lancement et avoir des permissions strictes.

Créez le dossier :

```bash
mkdir letsencrypt
```

Créez le fichier vide :

```bash
touch letsencrypt/acme.json
chmod 600 letsencrypt/acme.json
```

#### Démarrer les services

Lancez la stack avec Docker Compose :

```bash
docker compose up -d
```

### Configuration DNS <a name="step4"></a>

Assurez-vous que votre sous-domaine (ex : n8n.exemple.com) pointe bien vers l’adresse IP de votre VPS dans la zone DNS. Pour plus de détails, consultez notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

> [!warning]
>
> Si vous ne possédez pas encore de nom de domaine, commandez-en un sur notre [site web](/links/web/domains).

### Accéder à l’interface n8n <a name="step5"></a>

Accédez à n8n dans un navigateur via l'URL `https://n8n.exemple.com/`. Remplacez `n8n.exemple.com` par le domaine réel que vous avez défini.

> [!warning]
>
> Depuis la version 1.0 de n8n, vous devez obligatoirement créer un compte administrateur lors du premier accès à votre instance auto-hébergée, même si vous avez déjà un compte sur [n8n.cloud](https://n8n.cloud). Les comptes sont **propres à chaque instance**. Un compte créé sur votre VPS ne peut pas être utilisé sur une autre instance, même avec la même adresse e-mail.

> [!tabs]
> Premier accès
>> Un formulaire de création de compte s'affiche. Complétez-le pour configurer le premier utilisateur administrateur de votre instance n8n.
>>
>> ![Install n8n VPS](images/setup_n8n.png){.thumbnail}
>> 
> Compte n8n déjà créé
>> Vous êtes redirigé vers l’écran de connexion. Utilisez les identifiants définis précédemment.
>>
>> ![Install n8n VPS](images/login_n8n.png){.thumbnail}

### Conclusion <a name="step6"></a>

Vous disposez désormais d’une instance n8n opérationnelle et sécurisée sur votre VPS OVHcloud, avec une gestion automatique des certificats SSL grâce à Traefik. Pour aller plus loin, consultez la [documentation officielle](https://docs.n8n.io/) de n8n pour créer vos premiers workflows.

## Aller plus loin

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner)

Échangez avec notre [communauté d'utilisateurs](/links/community).