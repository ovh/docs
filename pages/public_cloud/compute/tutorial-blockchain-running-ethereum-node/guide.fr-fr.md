---
title: "Exécuter un nœud Ethereum sur une instance Public Cloud"
excerpt: "Déployez un nœud Ethereum complet avec Nethermind (EL) et Lighthouse (CL) sur une instance OVHcloud Public Cloud en utilisant le block storage pour les données de la chaîne"
updated: 2026-03-12
---

## Objectif

Ethereum est l'un des réseaux blockchain les plus utilisés, supportant les contrats intelligents pour la finance décentralisée (DeFi) et les écosystèmes NFT. Exploiter votre propre nœud Ethereum vous permet d'interagir directement avec le réseau sans dépendre de services tiers.

Un nœud Ethereum pleinement fonctionnel nécessite deux composants logiciels clés fonctionnant de manière coordonnée :

1. **Client d'exécution (EL)** — responsable du traitement des transactions et de la maintenance de l'état Ethereum.
2. **Client de consensus (CL)** — responsable de l'obtention du consensus avec le reste du réseau via le protocole de preuve d'enjeu (proof-of-stake) d'Ethereum.

Ces deux composants doivent fonctionner en tandem et communiquer de manière sécurisée pour maintenir la synchronisation avec le réseau principal Ethereum (mainnet).

L'écosystème Ethereum prend en charge plusieurs implémentations de clients, chacune développée indépendamment mais conforme à la spécification Ethereum. Les options les plus couramment utilisées sont :

**Clients d'exécution (EL) :**

- Geth
- Nethermind
- Reth
- Besu
- Erigon

**Clients de consensus (CL) :**

- Lighthouse
- Prysm
- Teku
- Nimbus
- Lodestar

Pour ce tutoriel, nous utiliserons la combinaison suivante :

- **Client d'exécution** : Nethermind
- **Client de consensus** : Lighthouse

**Ce tutoriel vous guide dans le déploiement d'un nœud Ethereum pleinement fonctionnel sur une instance OVHcloud Public Cloud.**

> [!warning]
>
> Le renforcement de la sécurité et les bonnes pratiques opérationnelles nécessaires pour protéger pleinement un nœud Ethereum dépassent le cadre de ce tutoriel. Il est fortement recommandé de mettre en œuvre des mesures de sécurité supplémentaires — telles que la configuration du pare-feu, la gestion des clés et la supervision — en fonction de vos exigences organisationnelles et des bonnes pratiques du secteur.
>

## Prérequis

- Un [projet Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) dans votre compte OVHcloud
- Une [instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) avec au moins 2 vCores et 30 Go de RAM (par exemple R2-30), sous **Ubuntu 24.04 LTS**
- Un [volume Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) d'au moins 2 To, de type **High-Speed Gen2**, attaché à votre instance
- Un accès administrateur (sudo) à l'instance via SSH

> [!primary]
>
> Selon la documentation de l'Ethereum Foundation, un nœud Ethereum nécessite au minimum :
>
> - **Client d'exécution** : 2 cœurs CPU, 16 Go de RAM et 1 To de stockage SSD rapide
> - **Client de consensus** : 2 cœurs CPU, 8 Go de RAM et un accès au même stockage
>
> Pour les environnements de production et une stabilité à long terme, des spécifications supérieures sont fortement recommandées.
>

## En pratique

### Étape 1 - Monter le volume Block Storage

Une fois que vous avez [créé et attaché votre volume Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) à l'instance, connectez-vous à votre instance via SSH :

```bash
ssh -i <chemin-clé-privée> ubuntu@<adresse_IP>
```

Listez tous les périphériques de blocs disponibles pour identifier votre volume attaché :

```bash
lsblk
```

![Sortie lsblk montrant le volume attaché](images/lsblk_output.png){.thumbnail}

Cela affiche une vue en arborescence de tous les périphériques de stockage. Identifiez le périphérique (par exemple `/dev/sdb`) qui correspond à votre volume de 2 To. Il sera formaté et monté pour stocker les données de la blockchain Ethereum.

Créez une partition sur le volume nouvellement attaché. Remplacez `/dev/sdb` par le nom du périphérique identifié à l'étape précédente si celui-ci diffère :

```bash
sudo fdisk /dev/sdb
```

![Partitionnement avec fdisk](images/fdisk_partition.png){.thumbnail}

Cela ouvre l'utilitaire de partitionnement pour le périphérique de blocs sélectionné. Créez une nouvelle partition primaire occupant l'intégralité du disque, puis écrivez les modifications. Une fois terminé, la partition sera généralement disponible sous `/dev/sdb1`.

Formatez la nouvelle partition avec le système de fichiers ext4, qui est un choix stable et largement pris en charge pour le stockage des données de la chaîne Ethereum :

```bash
sudo mkfs.ext4 /dev/sdb1
```

![Formatage ext4](images/mkfs_ext4.png){.thumbnail}

Créez un répertoire dédié servant de point de montage pour le volume formaté, puis montez-le et vérifiez qu'il a été correctement attaché au système de fichiers :

```bash
sudo mkdir -p /mnt/chaindata
sudo mount /dev/sdb1 /mnt/chaindata
df -h
```

- `mkdir -p /mnt/chaindata` crée le répertoire de montage (l'option `-p` garantit qu'aucune erreur ne survient si des répertoires intermédiaires sont manquants).
- `mount /dev/sdb1 /mnt/chaindata` monte la partition formatée sur le répertoire.
- `df -h` affiche tous les systèmes de fichiers montés dans un format lisible, vous permettant de confirmer que `/dev/sdb1` est correctement monté sur `/mnt/chaindata` avec la capacité attendue (environ 2 To).

![Vérification du montage](images/mount_verify.png){.thumbnail}

Votre disque est maintenant monté, mais la configuration n'est **pas persistante** : si le serveur redémarre, le volume devra être monté manuellement. Pour qu'il soit monté automatiquement au démarrage, ajoutez une entrée dans `/etc/fstab`.

Récupérez l'**UUID (Universally Unique Identifier)** de votre volume :

```bash
sudo blkid
```

![Sortie blkid](images/blkid_output.png){.thumbnail}

Cette commande liste tous les périphériques de blocs et leurs attributs associés. Identifiez l'entrée correspondant à votre nouvelle partition (par exemple `/dev/sdb1`) et copiez la valeur de son champ `UUID`.

Éditez le fichier `/etc/fstab` pour configurer le montage automatique :

```bash
sudo nano /etc/fstab
```

```text
UUID=<votre-uuid-ici> /mnt/chaindata ext4 nofail 0 0
```

L'option `nofail` permet au système de continuer à démarrer même si le périphérique n'est pas disponible.

### Étape 2 - Créer un utilisateur dédié

Créez un **compte utilisateur dédié** pour gérer toutes les opérations du nœud Ethereum. Cette pratique améliore la sécurité en séparant les processus du nœud de l'utilisateur système par défaut.

```bash
sudo useradd -s /bin/bash -d /home/node_admin/ -m -G sudo node_admin
```

- `useradd` crée un nouvel utilisateur nommé `node_admin`, avec un répertoire personnel, un shell bash et l'appartenance au groupe `sudo`.

Définissez un mot de passe pour le nouvel utilisateur (remplacez par un mot de passe fort ou configurez une connexion par clé) :

```bash
echo 'node_admin:<mot_de_passe_fort>' | sudo chpasswd
```

Configurez l'**authentification SSH par clé** pour le nouvel utilisateur en ajoutant votre clé SSH publique au fichier `authorized_keys`. Remplacez l'espace réservé par votre clé publique réelle :

```bash
sudo mkdir -p /home/node_admin/.ssh
sudo sh -c "echo '<votre-clé-ssh-publique>' > /home/node_admin/.ssh/authorized_keys"
```

Cela crée le fichier `authorized_keys` sous `/home/node_admin/.ssh/` et y inscrit votre clé publique, permettant une connexion sécurisée sans mot de passe en tant qu'utilisateur `node_admin`.

### Étape 3 - Installer Nethermind (client d'exécution)

Nethermind est un client d'exécution Ethereum responsable du traitement des transactions et de la maintenance de l'état Ethereum.

Ajoutez le dépôt APT officiel de Nethermind :

```bash
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:nethermindeth/nethermind
```

![Ajout du dépôt Nethermind](images/nethermind_add_repo.png){.thumbnail}

Mettez à jour l'index des paquets :

```bash
sudo apt-get update
```

![Mise à jour des paquets](images/nethermind_apt_update.png){.thumbnail}

Installez Nethermind :

```bash
sudo apt-get install nethermind -y
```

![Installation de Nethermind](images/nethermind_install.png){.thumbnail}

### Étape 4 - Installer Lighthouse (client de consensus)

Lighthouse est un client de consensus Ethereum responsable de l'obtention du consensus via le protocole de preuve d'enjeu (proof-of-stake).

Téléchargez la dernière version stable depuis la [page des releases GitHub de Lighthouse](https://github.com/sigp/lighthouse/releases) :

```bash
curl -LO https://github.com/sigp/lighthouse/releases/download/v8.1.3/lighthouse-v8.1.3-x86_64-unknown-linux-gnu.tar.gz
```

![Téléchargement de Lighthouse](images/lighthouse_download.png){.thumbnail}

Extrayez l'archive :

```bash
tar -xvf lighthouse-v8.1.3-x86_64-unknown-linux-gnu.tar.gz
```

![Extraction de Lighthouse](images/lighthouse_extract.png){.thumbnail}

Vérifiez le binaire et déplacez-le vers un emplacement accessible à l'ensemble du système :

```bash
./lighthouse --version
sudo cp lighthouse /usr/bin
```

![Version de Lighthouse](images/lighthouse_version.png){.thumbnail}

### Étape 5 - Créer le fichier de secret JWT

Un secret JWT partagé est nécessaire pour la communication sécurisée entre les clients d'exécution et de consensus.

```bash
sudo mkdir -p /secrets
openssl rand -hex 32 | tr -d "\n" | sudo tee /secrets/jwt.hex > /dev/null
```

![Secret JWT créé](images/jwt_secret.png){.thumbnail}

### Étape 6 - Installer screen pour la persistance des sessions

Sur un serveur distant, la déconnexion de la session SSH met fin aux processus en cours. `screen` permet de les maintenir en arrière-plan indépendamment de votre session.

```bash
screen --version
```

![Version de screen](images/screen_version.png){.thumbnail}

Si ce n'est pas déjà installé :

```bash
sudo apt-get install screen -y
```

### Étape 7 - Définir la propriété des répertoires

Les clients Ethereum ont besoin d'un accès en écriture au répertoire de données. Attribuez la propriété du point de montage à votre utilisateur actuel :

```bash
sudo chown $USER:$USER /mnt/chaindata
```

Cela accorde à votre utilisateur la propriété complète de `/mnt/chaindata`, afin que les clients Ethereum puissent y lire et écrire des données.

### Étape 8 - Lancer Nethermind

Créez une session screen et démarrez Nethermind :

```bash
screen -S nethermind
```

```bash
nethermind -c mainnet \
  --data-dir /mnt/chaindata/nethermind \
  --JsonRpc.Enabled true \
  --HealthChecks.Enabled true \
  --HealthChecks.UIEnabled true \
  --JsonRpc.EngineHost 127.0.0.1 \
  --JsonRpc.EnginePort 8551 \
  --JsonRpc.JwtSecretFile /secrets/jwt.hex
```

Des journaux indiquant que le client est en cours d'exécution s'affichent. Le message suivant apparaît ensuite :

```text
Waiting for Forkchoice message from Consensus Layer
```

Cela indique que le client d'exécution attend de se coupler avec le client de consensus.

![Nethermind en cours d'exécution](images/nethermind_running.png){.thumbnail}

Détachez la session en appuyant sur `Ctrl+A` puis `D` pour revenir au shell principal.

Vous pouvez lister les sessions actives avec `screen -ls` et vous y rattacher ultérieurement avec `screen -r nethermind`.

![Sessions screen](images/screen_list.png){.thumbnail}

### Étape 9 - Lancer Lighthouse

Créez une nouvelle session screen et démarrez Lighthouse :

```bash
screen -S lighthouse
```

```bash
lighthouse bn \
  --network mainnet \
  --execution-endpoint http://127.0.0.1:8551 \
  --execution-jwt /secrets/jwt.hex \
  --checkpoint-sync-url https://mainnet.checkpoint.sigp.io \
  --http \
  --datadir /mnt/chaindata/lighthouse
```

![Démarrage de Lighthouse](images/lighthouse_start.png){.thumbnail}

Après la configuration initiale, Lighthouse commence la synchronisation avec le réseau.

![Synchronisation de Lighthouse](images/lighthouse_syncing.png){.thumbnail}

Détachez la session en appuyant sur `Ctrl+A` puis `D`.

### Étape 10 - Vérifier la synchronisation

À cette étape, le **client d'exécution** (Nethermind) et le **client de consensus** (Lighthouse) doivent être en cours d'exécution dans des sessions screen séparées. Pour confirmer qu'ils sont correctement connectés et que la synchronisation est en cours, rattachez-vous à la session Nethermind et inspectez les journaux :

```bash
screen -r nethermind
```

Si Lighthouse est correctement connecté, le message « Waiting for Forkchoice » disparaît. À la place, des journaux de communication **Engine API** et de traitement de blocs s'affichent :

```text
Received ForkChoice: ...
Syncing...
```

![Synchronisation EL et CL](images/el_cl_sync.png){.thumbnail}

Ces journaux confirment que Nethermind reçoit les propositions de blocs et les mises à jour de fork choice de Lighthouse, et que le nœud se synchronise avec le réseau principal Ethereum.

Bien que ce tutoriel se concentre sur le déploiement technique, il est important de compléter la configuration par un renforcement approprié de la sécurité, une supervision et des pratiques de maintenance pour assurer une stabilité à long terme. Avec les bases maintenant en place, vous pouvez étendre les fonctionnalités de votre nœud, l'intégrer dans des infrastructures plus larges ou l'utiliser comme base pour la recherche, le développement et les opérations de staking.

## Aller plus loin

- [Ethereum Foundation - Run a node](https://ethereum.org/en/run-a-node/)
- [Documentation Nethermind](https://docs.nethermind.io/)
- [Documentation Lighthouse](https://lighthouse-book.sigmaprime.io/)

[Créer une instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Créer et configurer un disque supplémentaire sur une instance](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

Échangez avec notre [communauté d'utilisateurs](/links/community).
