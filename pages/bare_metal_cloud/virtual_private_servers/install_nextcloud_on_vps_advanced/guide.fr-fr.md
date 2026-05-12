---
title: Installer Nextcloud sur un VPS OVHcloud avec Docker et Traefik
excerpt: "Découvrez comment déployer Nextcloud sur un VPS OVHcloud avec HTTPS automatique via Traefik, MariaDB et Redis"
updated: 2026-02-04
---

## Objectif

Ce guide s’adresse aux **utilisateurs intermédiaires à avancés** souhaitant déployer Nextcloud dans une architecture plus robuste et proche d’un environnement de production.

À la fin de ce guide, vous disposerez :

- D’un Nextcloud accessible en **HTTPS**
- De certificats **Let’s Encrypt automatiques**
- D’une stack Docker persistante (Nextcloud + MariaDB + Redis)
- D’un reverse-proxy **Traefik v2**

### Architecture cible (simplifiée)

- VPS OVHcloud (Ubuntu)
- Docker et Docker Compose
- Traefik v2 (reverse-proxy HTTPS)
- Nextcloud (Apache)
- MariaDB (base de données)
- Redis (cache et verrous)

## Prérequis

- Disposer d'une offre [VPS OVHcloud](/links/bare-metal/vps) sous **Ubuntu 22.04 LTS**
- Être connecté en SSH avec les droits sudo
- Disposer d'un nom de domaine (par exemple : `cloud.exemple.com`) pointant vers l’IP du VPS
- Les ports **80** et **443** doivent être ouverts
- Disposer d'une adresse e-mail valide pour Let’s Encrypt

## En pratique

**Sommaire :**

- [Étape 1 : Préparer le VPS](#step1)
- [Étape 2 : Installer Docker](#step2)
- [Étape 3 : Déployer Traefik](#step3)
- [Étape 4 : Déployer Nextcloud](#step4)
- [Étape 5 : Vérifications et post-installation](#step5)

### Étape 1 : Préparer le VPS <a name="step1"></a>

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y ca-certificates curl ufw
```

Autorisez les ports nécessaires :

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### Étape 2 : Installer Docker <a name="step2"></a>

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
newgrp docker
```

### Étape 3 : Déployer Traefik <a name="step3"></a>

Créez l’arborescence :

```bash
sudo mkdir -p /opt/stack/traefik
cd /opt/stack/traefik
```

Créez le fichier `traefik.yml` :

```yaml
entryPoints:
  web:
    address: ":80"
  websecure:
    address: ":443"

certificatesResolvers:
  letsencrypt:
    acme:
      email: admin@exemple.com
      storage: /letsencrypt/acme.json
      httpChallenge:
        entryPoint: web

providers:
  docker:
    exposedByDefault: false
```

Créez le `docker-compose.yml` Traefik :

```yaml
services:
  traefik:
    image: traefik:v2.11
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./traefik.yml:/etc/traefik/traefik.yml:ro
      - ./letsencrypt:/letsencrypt
      - /var/run/docker.sock:/var/run/docker.sock:ro
    networks:
      - proxy

networks:
  proxy:
    external: true
```

```bash
docker network create proxy
docker compose up -d
```

### Étape 4 : Déployer Nextcloud <a name="step4"></a>

```bash
sudo mkdir -p /opt/stack/nextcloud
cd /opt/stack/nextcloud
```

Créez un fichier `.env` :

```console
NC_DOMAIN=cloud.exemple.com
NC_ADMIN_USER=admin
NC_ADMIN_PASSWORD=change-admin-password
DB_NAME=nextcloud
DB_USER=nextcloud
DB_PASSWORD=change-db-password
DB_ROOT_PASSWORD=change-root-password
```

Créez le `docker-compose.yml` Nextcloud :

```yaml
services:
  db:
    image: mariadb:11
    restart: unless-stopped
    environment:
      MYSQL_DATABASE: ${DB_NAME}
      MYSQL_USER: ${DB_USER}
      MYSQL_PASSWORD: ${DB_PASSWORD}
      MYSQL_ROOT_PASSWORD: ${DB_ROOT_PASSWORD}
    volumes:
      - db_data:/var/lib/mysql
    networks:
      - internal

  redis:
    image: redis:7-alpine
    restart: unless-stopped
    networks:
      - internal

  app:
    image: nextcloud:apache
    restart: unless-stopped
    depends_on:
      - db
      - redis
    environment:
      MYSQL_HOST: db
      MYSQL_DATABASE: ${DB_NAME}
      MYSQL_USER: ${DB_USER}
      MYSQL_PASSWORD: ${DB_PASSWORD}
      REDIS_HOST: redis
      NEXTCLOUD_ADMIN_USER: ${NC_ADMIN_USER}
      NEXTCLOUD_ADMIN_PASSWORD: ${NC_ADMIN_PASSWORD}
      NEXTCLOUD_TRUSTED_DOMAINS: ${NC_DOMAIN}
    volumes:
      - nextcloud_html:/var/www/html
      - config:/var/www/html/config
      - nextcloud_data:/var/www/html/data
    networks:
      - internal
      - proxy
    labels:
      - traefik.enable=true
      - traefik.docker.network=proxy
      - traefik.http.routers.nextcloud.rule=Host(`${NC_DOMAIN}`)
      - traefik.http.routers.nextcloud.entrypoints=websecure
      - traefik.http.routers.nextcloud.tls.certresolver=letsencrypt

volumes:
  db_data:
  nextcloud_html:
  nextcloud_data:
  config:

networks:
  internal:
  proxy:
    external: true
```

```bash
docker compose up -d
```

### Étape 5 : Vérifications post-installation <a name="step5"></a>

- Accédez à <https://cloud.exemple.com>
- Vérifiez le certificat HTTPS
- Activez le mode **Cron** dans les paramètres Nextcloud
- Vérifiez Redis dans l'interface d’administration

### Conclusion

Traefik n’est **pas obligatoire**, mais il constitue une **excellente pratique** pour :

- Gérer plusieurs services HTTPS sur un même VPS
- Automatiser les certificats Let’s Encrypt
- Centraliser le routage et la sécurité

Pour un premier déploiement ou un usage personnel, le **[guide pour utilisateurs débutants](/pages/bare_metal_cloud/virtual_private_servers/install_nextcloud_on_vps_beginner)** est suffisant.

Pour un usage avancé ou multi-services, ce guide est recommandé.

## Aller plus loin

[Documentation Traefik](https://doc.traefik.io/traefik/)

[Documentation Nextcloud](https://docs.nextcloud.com)

[Sécuriser un VPS OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Échangez avec notre [communauté d'utilisateurs](/links/community).