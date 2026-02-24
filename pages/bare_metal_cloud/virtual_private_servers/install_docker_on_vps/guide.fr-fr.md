---
title: "Installer Docker et Docker Compose sur un VPS OVHcloud (Debian / Ubuntu)"
excerpt: "Guide complet pour installer Docker Engine et Docker Compose Plugin sur un VPS OVHcloud."
updated: 2026-02-24
---

# Installer Docker et Docker Compose sur un VPS OVHcloud

Ce guide explique comment installer proprement **Docker Engine** et le **plugin Docker Compose** sur un VPS OVHcloud.

Cette procédure est compatible avec :

- Debian 11 / 12 et versions supérieures
- Ubuntu 22.04 et versions supérieures

L’installation via le dépôt officiel Docker garantit :

- des mises à jour régulières
- une meilleure stabilité
- une compatibilité maximale avec les outils récents

---

## Objectif

À la fin de ce guide, votre VPS disposera de :

- Docker Engine
- Docker Compose (plugin officiel)
- Les permissions configurées pour éviter l’utilisation de `sudo` avec Docker

---

## Prérequis

- VPS OVHcloud actif
- Accès SSH avec un utilisateur disposant des droits sudo

---

# Sommaire

- [Étape 1 - Mise à jour du système](#update)
- [Étape 2 - Installation des dépendances](#dependencies)
- [Étape 3 - Ajout de la clé GPG Docker](#gpg)
- [Étape 4 - Ajout du dépôt Docker](#repo)
- [Étape 5 - Installation de Docker](#install)
- [Étape 6 - Configuration des permissions Docker](#permissions)
- [Étape 7 - Vérification de l’installation](#verify)

---

## Étape 1 - Mise à jour du système <a name="update"></a>

Avant toute installation, mettez à jour votre système :

```bash
sudo apt update && sudo apt upgrade -y
```

---

## Étape 2 - Installation des dépendances <a name="dependencies"></a>

Installez les paquets nécessaires :

```bash
sudo apt install -y ca-certificates curl gnupg
```

---

## Étape 3 - Ajout de la clé GPG officielle Docker <a name="gpg"></a>

```bash
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

---

## Étape 4 - Ajout du dépôt Docker <a name="repo"></a>

### Pour Debian 11 / 12 :

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### Pour Ubuntu 22.04 et versions supérieures :

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

---

## Étape 5 - Installation de Docker Engine et Docker Compose <a name="install"></a>

```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

---

## Étape 6 - Configuration des permissions Docker <a name="permissions"></a>

Par défaut, les commandes Docker nécessitent `sudo`.

Afin d’éviter des problèmes de permissions lors de l’utilisation de Docker Compose ou de scripts d’installation, ajoutez votre utilisateur au groupe `docker` :

```bash
sudo usermod -aG docker $USER
```

Rechargez votre session :

```bash
newgrp docker
```

⚠️ Ne lancez pas vos futurs scripts Docker avec `sudo`, sauf nécessité spécifique.  
L’utilisation de `sudo` peut créer des fichiers appartenant à root et provoquer des erreurs de permission.

---

## Étape 7 - Vérification de l’installation <a name="verify"></a>

Vérifiez que Docker fonctionne correctement :

```bash
docker --version
docker compose version
```

Vous devriez obtenir une sortie similaire à :

```
Docker version 29.x.x, build xxxxxxx
Docker Compose version v2.x.x
```

---

# Aller plus loin

Vous pouvez maintenant utiliser Docker pour installer :
- [Sécuriser un VPS OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)
- [Installer OpenClaw derrière Traefik sur un VPS OVHcloud avec endpoints OVH AI](/pages/bare_metal_cloud/virtual_private_servers/install_openclaw)
- [Installer n8n sur un VPS OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/install_n8n_on_vps)
- [Installer Nextcloud sur un VPS OVHcloud avec Docker et Traefik](/pages/bare_metal_cloud/virtual_private_servers/install_nextcloud_on_vps_advanced)
