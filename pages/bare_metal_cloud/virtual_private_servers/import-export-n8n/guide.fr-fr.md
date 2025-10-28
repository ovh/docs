---
title: "Comment migrer une configuration n8n entre deux VPS"
excerpt: "Découvrez comment exporter et importer une configuration n8n complète (workflows et identifiants) d’un VPS externe vers un VPS OVHcloud, et inversement."
updated: 2025-09-23
---

## Objectif

Ce guide vous explique comment transférer une configuration n8n existante vers un VPS OVHcloud, ou depuis un VPS OVHcloud vers une autre instance. Vous pouvez choisir soit la méthode d'export/import via les **commandes CLI de n8n**, soit la sauvegarde/restauration du dossier `.n8n`.

## Prérequis

- Disposer de deux [VPS](/links/bare-metal/vps) fonctionnels (OVHcloud ou autres)
- Disposer d'un accès administrateur (sudo) via SSH à votre serveur

## En pratique

> [!success]
> 
> Si vous devez commencer une nouvelle installation, optez pour un [VPS n8n OVHcloud préinstallé](/links/bare-metal/vps-n8n) pour démarrer rapidement.

### Sommaire

- [Méthode 1 : Exporter et importer via la CLI n8n](#method1)
- [Méthode 2 : Sauvegarde et restauration du dossier `.n8n`](#method2)
- [Points d'attention](#importantNotes)
- [Conclusion](#conclusion)

### Méthode 1 - Exporter et importer via la CLI n8n <a name="method1"></a>

n8n fournit des commandes pour exporter et importer vos **workflows** et **credentials**.

Selon votre installation, vous avez deux possibilités :

- **n8n installé en mode CLI** (npm ou binaire) : tapez directement `n8n export:...` depuis votre VPS.
- **n8n installé via Docker** (cas OVHcloud avec l’image `n8nio/n8n`) : exécutez les commandes à l’intérieur du conteneur avec `docker exec`.

#### Étape 1 - Connectez-vous au VPS source

Ouvrez un terminal et connectez-vous en SSH à votre VPS où n8n est installé :

```bash
ssh <user>@<IP_VPS_SOURCE>
```

#### Étape 2 - Exportez les workflows

> [!primary]
> 
> Les chemins indiqués (`/home/node/...`) correspondent à l’installation Docker par défaut de n8n. Si vous avez personnalisé les volumes ou les chemins dans votre configuration Docker Compose, adaptez-les en conséquence.

> [!tabs]
> Cas A - Installation en CLI natif
>>
>> Exécutez la commande suivante pour exporter tous les workflows dans un fichier :
>>
>> ```bash
>> n8n export:workflow --all --output=workflows.json
>> ```
>>
> Cas B - Installation via Docker
>>
>> Identifiez le nom de votre conteneur n8n (par défaut `n8n`) :
>>
>> ```bash
>> docker ps
>> ```
>>
>> Exécutez la commande suivante pour générer le fichier à l’intérieur du conteneur :
>>
>> ```bash
>> docker exec -it n8n n8n export:workflow --all --output=/home/node/workflows.json
>> ```
>>
>> Exemple de sortie :
>>
>> ![Import export n8n](images/workflow_successfully_exported.png){.thumbnail}
>> 
>> Sortez le fichier du conteneur pour le placer dans le système de fichiers du VPS source :
>>
>> ```bash
>> docker cp n8n:/home/node/workflows.json /root/workflows.json
>> ```
>> 
>> Exemple de sortie :
>>
>> ![Import export n8n](images/workflow_successfully_copied.png){.thumbnail}
>>

#### Étape 3 - Exportez les credentials

> [!tabs]
> Cas A - Installation en CLI natif
>>
>> Exécutez la commande suivante pour exporter tous les credentials déchiffrés vers un fichier JSON :
>>
>> ```bash
>> n8n export:credentials --all --decrypted --output=credentials.json
>> ```
>>
> Cas B - Installation via Docker
>>
>> Exécutez cette commande dans le conteneur n8n pour générer le fichier des credentials déchiffrés :
>>
>> ```bash
>> docker exec -it n8n n8n export:credentials --all --decrypted --output=/home/node/credentials.json
>> ```
>>
>> Exemple de sortie :
>>
>> ![Import export n8n](images/credentials_successfully_exported.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Utilisez l’option `--decrypted` si vous migrez vers une autre instance pour éviter les erreurs de chiffrement. Manipulez ce fichier avec précaution car il contient des données sensibles.
>>
>> Copiez ce fichier vers le système de fichiers du VPS source :
>>
>> ```bash
>> docker cp n8n:/home/node/credentials.json /root/credentials.json
>> ```
>>
>> Exemple de sortie :
>>
>> ![Import export n8n](images/credentials_successfully_copied.png){.thumbnail}
>>

#### Étape 4 - Transférez les fichiers exportés

Copiez les fichiers générés (`workflows.json` et `credentials.json`) vers votre VPS cible :

```bash
scp workflows.json credentials.json <user>@<IP_VPS_CIBLE>:/root/
```

> [!primary]
>
> Dans l’exemple, nous transférons les fichiers vers le répertoire `/root/` du VPS cible. Vous pouvez choisir un autre répertoire si besoin, en fonction de vos droits d’accès.

#### Étape 5 - Importez les workflows

Connectez-vous en SSH à votre VPS cible :

```bash
ssh <user>@<IP_VPS_CIBLE>
```

> [!tabs]
> Cas A - Installation en CLI natif
>>
>> ```bash
>> n8n import:workflow --input=workflows.json
>> ```
>>
> Cas B - Installation via Docker
>>
>> ```bash
>> docker exec -it n8n n8n import:workflow --input=/home/node/workflows.json
>> ```

#### Étape 6 - Importez les credentials

> [!tabs]
> Cas A - Installation en CLI natif
>>
>> ```bash
>> n8n import:credentials --input=credentials.json
>> ```
>>
> Cas B - Installation via Docker
>>
>> ```bash
>> docker exec -it n8n n8n import:credentials --input=/home/node/credentials.json
>> ```
>>
>> > [!primary]
>> >
>> > Lors de l’import, si un ID de workflow ou credential existe déjà dans l’instance cible, il sera écrasé. Pour éviter les conflits, modifiez ou supprimez l’ID dans les fichiers JSON avant import.
>>
>> > [!warning]
>> >
>> > Supprimez le fichier `credentials.json` de votre VPS source et cible après import pour éviter toute fuite de données sensibles.
>>

### Méthode 2 - Sauvegarde et restauration du dossier `.n8n` <a name="method2"></a>

Cette méthode permet de transférer l’intégralité de la configuration (workflows, credentials et paramètres) entre deux instances.

#### Où se trouve le dossier `.n8n` ?

- Installation CLI (npm ou binaire) : le dossier se trouve généralement dans le répertoire personnel de l’utilisateur qui exécute n8n, par exemple `/root/.n8n` ou `/home/<user>/.n8n`.
- Installation Docker : le dossier se trouve dans le conteneur à l’emplacement `/home/node/.n8n`. Dans la plupart des configurations Docker Compose, il est monté en volume nommé `n8n_data` ou dans un dossier du VPS (ex : `/root/n8n_data:/home/node/.n8n`).

Vérifiez son emplacement avec :

```bash
docker exec -it n8n ls -lah /home/node/.n8n
docker inspect n8n | grep -A 5 Mounts
```

#### Étape 1 - Sauvegardez le dossier `.n8n`

> [!tabs]
> Cas A - Installation en CLI natif
>>
>> Créez l’archive directement depuis le système hôte :
>>
>> ```bash
>> tar czvf n8n-backup.tar.gz /root/.n8n
>> ```
>>
> Cas B - Installation via Docker
>>
>> Créez une archive du dossier `.n8n` :
>>
>> ```bash
>> docker exec n8n tar czvf - /home/node/.n8n > n8n-backup.tar.gz
>> ```
>>

#### Étape 2 - Transférez l’archive vers le VPS cible

Envoyez le fichier vers votre VPS cible :

```bash
scp n8n-backup.tar.gz <user>@<IP_VPS_CIBLE>:/root/
```

Connectez-vous en SSH à votre VPS cible :

```bash
ssh <user>@<IP_VPS_CIBLE>
```

#### Étape 3 - Restaurez l’archive sur le VPS cible

Sur votre VPS cible, restaurez l’archive dans le dossier `.n8n` du conteneur :

```bash
docker exec -i n8n sh -c 'tar xzvf - -C /home/node/.n8n' < n8n-backup.tar.gz
```

#### Étape 4 - Redémarrez n8n

Relancez n8n :

```bash
docker start n8n
```

> [!warning]
>
> Cette méthode nécessite que la **clé de chiffrement (`encryptionKey`)** soit identique entre les deux instances. Vérifiez ou copiez ce paramètre depuis le fichier de configuration de votre instance source.

### Points d'attention <a name="importantNotes"></a>

Après la migration, si le domaine ou le sous-domaine change (par exemple `n8n.mydomain.com` → `n8n.ovh.net`), mettez à jour :

- La variable `N8N_HOST` dans votre fichier `docker-compose.yml`.
- Votre zone DNS pour que le sous-domaine pointe vers l’adresse IP du nouveau VPS.

Pour en savoir plus, consultez notre guide [Modifier une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

### Conclusion <a name="conclusion"></a>

Vous disposez désormais de deux méthodes pour migrer vos workflows et credentials n8n vers un VPS OVHcloud (ou depuis OVHcloud vers un autre environnement) :

- **Export/Import via CLI** : simple et sélectif.
- **Sauvegarde `.n8n`** : complet, idéal pour une migration totale.

Pour plus d’informations, référez-vous à la [documentation officielle n8n](https://docs.n8n.io/hosting/cli-commands/).

## Aller plus loin

[Comment installer n8n sur un VPS OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/install_n8n_on_vps)

Échangez avec notre [communauté d'utilisateurs](/links/community).