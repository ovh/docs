---
title: Installer Nextcloud sur un VPS OVHcloud avec Docker
excerpt: "Découvrez comment installer simplement Nextcloud sur un VPS OVHcloud à l’aide de Docker et de Docker Compose, afin de disposer d’un cloud personnel fonctionnel"
updated: 2026-02-04
---

## Objectif

Ce guide explique comment installer **Nextcloud**, une solution de cloud personnel (fichiers, photos, contacts, agenda), sur un **VPS OVHcloud**.

Il s’adresse aux **utilisateurs débutants** souhaitant une installation simple, sans reverse-proxy.

À la fin de ce guide, vous disposerez :

- D’un Nextcloud fonctionnel sur votre VPS
- D’un accès via un navigateur web
- D’une base de données MariaDB adaptée à un usage réel

## Prérequis

- Disposer d'une offre [VPS OVHcloud](/links/bare-metal/vps) sous **Ubuntu 22.04 LTS** (ou équivalent)
- Être connecté en SSH à votre VPS
- Disposer d'un nom de domaine (facultatif mais recommandé)

## En pratique

**Sommaire :**

- [Étape 1 : Connexion au VPS](#step1)
- [Étape 2 : Préparer le système](#step2)
- [Étape 3 : Installer Docker et Docker Compose](#step3)
- [Étape 4 : Déployer Nextcloud](#step4)
- [Étape 5 : Accéder à Nextcloud](#step5)
- [Étape 6 : Bonnes pratiques après installation](#step6)

### Étape 1 : Connexion au VPS <a name="step1"></a>

Connectez-vous à votre VPS via SSH avec l’utilisateur fourni par OVHcloud (par exemple `ubuntu`).

```bash
ssh ubuntu@IPv4_DE_VOTRE_VPS
```

### Étape 2 : Préparer le système <a name="step2"></a>

Mettez à jour le système :

```bash
sudo apt update && sudo apt upgrade -y
```

Installez les dépendances nécessaires :

```bash
sudo apt install -y ca-certificates curl gnupg
```

### Étape 3 : Installer Docker et Docker Compose <a name="step3"></a>

Installez Docker :

```bash
curl -fsSL https://get.docker.com | sudo sh
```

Ajoutez votre utilisateur au groupe Docker :

```bash
sudo usermod -aG docker $USER
newgrp docker
```

Vérifiez l’installation :

```bash
docker --version
docker compose version
```

### Étape 4 : Déployer Nextcloud <a name="step4"></a>

Créez un dossier de travail :

```bash
mkdir ~/nextcloud && cd ~/nextcloud
```

Créez le fichier `docker-compose.yml` :

```yaml
services:
  db:
    image: mariadb:10.6
    restart: always
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW
    environment:
      MYSQL_ROOT_PASSWORD: change-root-password
      MYSQL_DATABASE: nextcloud
      MYSQL_USER: nextcloud
      MYSQL_PASSWORD: change-user-password
    volumes:
      - db:/var/lib/mysql

  app:
    image: nextcloud
    restart: always
    ports:
      - 8080:80
    depends_on:
      - db
    volumes:
      - nextcloud:/var/www/html

volumes:
  db:
  nextcloud:
```

Lancez Nextcloud :

```bash
docker compose up -d
```

### Étape 5 : Accéder à Nextcloud <a name="step5"></a>

Dans votre navigateur, ouvrez <http://IPv4_DE_VOTRE_VPS:8080>.

Lors du premier accès :

- Créez un **compte administrateur**
- Laissez Nextcloud détecter automatiquement la base de données

### Étape 6 : Bonnes pratiques après installation <a name="step6"></a>

Pour un usage durable, nous recommandons :

- Configurer un **nom de domaine**
- Mettre en place un accès **HTTPS** (Nginx Proxy Manager ou Traefik)
- Activer les **tâches de fond en mode Cron**
- Installer les **clients Nextcloud PC et mobile** pour la synchronisation automatique
- Mettre en place des **sauvegardes régulières**

## Aller plus loin

Ce guide vous a permis de déployer rapidement Nextcloud sur un VPS à l’aide de Docker, sans configuration complexe.

Si vous souhaitez aller plus loin - notamment en ajoutant le **HTTPS automatique**, un **reverse-proxy**, ou en hébergeant **plusieurs services** sur le même VPS - nous vous recommandons de consulter le **[guide pour utilisateurs avancés](/pages/bare_metal_cloud/virtual_private_servers/install_nextcloud_on_vps_advanced)**, qui présente une architecture plus robuste basée sur Docker et un reverse-proxy moderne.

Pour approfondir certains aspects ou renforcer la sécurité et la fiabilité de votre installation, vous pouvez également consulter les ressources suivantes :

[Sécuriser un VPS OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Documentation officielle Nextcloud](https://docs.nextcloud.com)

Échangez avec notre [communauté d'utilisateurs](/links/community).