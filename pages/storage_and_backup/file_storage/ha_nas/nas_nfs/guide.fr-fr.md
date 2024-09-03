---
title: Montage d'un NAS-HA via partage NFS
excerpt: Découvrez comment vous connecter à votre NAS-HA en utilisant un partage NFS
updated: 2024-03-12
---

## Objectif

Le service NAS-HA OVHcloud vous permet de gérer un stockage de fichiers accessible depuis un réseau.

**Découvrez comment accéder à votre NAS-HA via NFS sur les systèmes d'exploitation les plus courants.**

> [!warning]
> OVHcloud vous offre un certain nombre de services dont la configuration et la gestion vous incombent. Il est donc de votre responsabilité de vous assurer qu’ils fonctionnent correctement.
>
> Nous mettons ce guide à votre disposition afin de vous accompagner au mieux sur les tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) ou de vous rapprocher de [notre communauté](https://community.ovh.com/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place de services sur un serveur.
>

## Prérequis

- Posséder une offre [NAS-HA OVHcloud](https://www.ovhcloud.com/fr/storage-solutions/nas-ha/)
- Posséder un service OVHcloud auquel est associée une adresse IP publique (Hosted Private Cloud, serveur dédié, VPS, instance Public Cloud, etc.).
- Avoir un système d'exploitation compatible avec NFS installé sur votre serveur
- Avoir [créé une partition sur votre service avec le protocole NFS activé](/pages/storage_and_backup/file_storage/ha_nas/nas_get_started#partition)
- Avoir [une entrée ACL pour l'adresse IP du serveur](/pages/storage_and_backup/file_storage/ha_nas/nas_get_started#addaccess)
- Disposer d’un accès administratif (sudo) à votre serveur via SSH ou GUI

## En pratique

Les sections suivantes contiennent des exemples de configuration pour les distributions/systèmes d'exploitation les plus utilisés. La première étape consiste toujours à vous connecter à votre serveur en SSH ou en vous connectant à l’interface graphique de votre système d’exploitation installé. Les exemples ci-dessous supposent que vous êtes connecté en tant qu'utilisateur avec des autorisations élevées.

Vous aurez également besoin du **nom interne** et de **l'adresse IP** de votre service NAS-HA que vous pourrez retrouver dans l'e-mail reçu après l'installation ou dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

Les notations suivantes sont utilisées comme arguments dans les sections de ligne de commande ci-dessous. Remplacez-les par les valeurs appropriées lors de la saisie des commandes.

|Argument|Description|
|---|---|
|IP_HA-NAS|L'adresse IP du NAS-HA (Exemple : `10.1.1.1`)|
|NFS_PATH|le chemin d'accès à la partition NAS-HA à monter, composé du nom du service et du nom de vos partitions (Exemple : `zpool-123456/partition01`)|
|MOUNTING_FOLDER|Le dossier local pour votre partition montée|

> [!warning]
>
> L'utilisateur NFS est `root`, les modifications de droits avec cet utilisateur peuvent générer des conflits avec des droits CIFS/SMB existants.
>
> 

### Distributions basées sur Debian

Installez le package `nfs-common` :

```bash
ubuntu@server:~$ sudo apt install nfs-common
```

Utilisez ensuite la commande de montage suivante :

```bash
ubuntu@server:~$ sudo mount -t nfs IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Par exemple :**

```bash
ubuntu@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Vous pouvez maintenant accéder à votre partition montée dans le dossier spécifié.

> [!primary]
>
> Afin d'automatiser le processus de montage à chaque démarrage du serveur, ajoutez la ligne suivante au fichier `/etc/fstab` :
>
> `IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw 0 0`
>

### CentOS 7 / AlmaLinux / Rocky Linux

Vérifiez que les dernières versions des packages `nfs-utils` et `rpcbind` sont installées :

```bash
centos@server:~$ sudo yum install nfs-utils rpcbind
```

Si nécessaire, redémarrez le service `rpcbind` avec la commande suivante :

```bash
centos@server:~$ sudo systemctl restart rpcbind
```

Pour monter votre partition, utilisez la commande suivante :

```bash
centos@server:~$ sudo mount -t nfs IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Par exemple :**

```bash
centos@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Vous pouvez maintenant accéder à votre partition montée dans le dossier spécifié.

> [!primary]
>
> Afin d'automatiser le processus de montage à chaque démarrage du serveur, ajoutez la ligne suivante au fichier `/etc/fstab` :
>
> `IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw 0 0`
>

### Fedora

Installez le package `nfs-utils` :

```bash
fedora@server:~$ sudo dnf -y install nfs-utils
```

Utilisez ensuite la commande de montage suivante :

```bash
fedora@server:~$ sudo mount -t nfs IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Par exemple :**

```bash
fedora@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Vous pouvez maintenant accéder à votre partition montée dans le dossier spécifié.

### Proxmox

Dans l’interface d’administration Proxmox, cliquez sur `Storage`{.action} dans le menu vertical.

![proxmox](images/proxmox1.png){.thumbnail}

Cliquez sur le bouton `Add`{.action} et sélectionnez `NFS`{.action}.

Dans la fenêtre qui apparaît, renseignez les informations suivantes.

|Détail|Description|
|---|---|
|ID|Identificateur du partage|
|Server|Adresse IP du NAS-HA (Exemple : `10.1.1.1`)|
|Export|Chemin vers la partition NAS-HA (Il doit être détecté par le scan automatique : sélectionnez-le dans la liste.)|
|Content|Types de contenus pour ce partage NFS (Disk image, ISO image, Container template, VZDump backup file, Container, Snippets)|

![proxmox](images/proxmox2.png){.thumbnail}

Cliquez sur `Add`{.action} pour monter votre partition.

### VMware ESXI

Depuis l'interface d'administration VMware ESXI, cliquez sur `Storage`{.action} dans le menu de gauche.

Cliquez ensuite sur le bouton `New datastore`{.action} pour ouvrir l'assistant.

![ESXI](images/esxi1.png){.thumbnail}

Dans la nouvelle fenêtre, sélectionnez `Mount NFS datastore`{.action} et cliquez sur `Next`{.action}.

![ESXI](images/esxi2.png){.thumbnail}

Remplissez le formulaire avec les détails suivants.

|Détail|Description|
|---|---|
|Name|Identificateur du partage|
|NFS server|Adresse IP du NAS-HA (Exemple : `10.1.1.1`)|
|NFS share|Chemin vers la partition NAS-HA à monter (Exemple : `zpool-123456/partition01`)|

![ESXI](images/esxi3.png){.thumbnail}

Une fois fait, cliquez sur `Next`{.action}. Cliquez sur `Finish`{.action} à la dernière étape.

Votre partition NAS-HA est maintenant montée en datastore.

![ESXI](images/esxi4.png){.thumbnail}

### NFSv3/NFSv4

L'offre NAS-HA supporte les protocoles NFSv3 et NFSv4. Nous allons détailler leur utilisation.

**Que se passe-t'il si on ne précise pas la version lors de la commande NFS ?**

Dans ce cas, votre client NFS va essayer de se connecter directement sur la plus haute version supportée par celui-ci.
Mais vous pouvez également choisir si vous préférez utiliser NFSv3 ou NFSv4:

Pour forcer l'utilisation de NFSv3, vous devez utiliser la commande suivante :

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=3 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Exemple :

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=3 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Pour forcer l'utilisation de NFSv4, vous devez utiliser la commande suivante :

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Exemple :

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Vous pouvez également utiliser la commande suivante pour déterminer quelle est la version utilisée par le montage actuel :

```bash
ubuntu@server:~$ nfsstat -m
```

Dans le retour, le paramètre `vers=3` ou `vers=4` vous indique quel est le protocole utilisé.

L'utilisation des commandes sera semblable pour CentOS et Fedora.

**Peut-on saisir une version spécifique pour l'utilisation de NFSv4 ?**

De la même façon que précédemment, votre client NFS va essayer de se connecter directement sur la plus haute version supportée par celui-ci.
Si vous le souhaitez, vous pouvez choisir entre NFSv4.1 et NFSv4.2

Pour forcer l'utilisation de NFSv4.1, vous devez utiliser la commande suivante :

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.1 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Exemple :

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.1 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Pour forcer l'utilisation de NFSv4.2, vous devez utiliser la commande suivante :

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.2 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Exemple :

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.2 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Vous pouvez utiliser cette commande pour vérifier la version de votre montage actuel:

```bash
ubuntu@server:~$ nfsstat -m
```
## Conseils pour optimiser la performance et/ou la stabilité de votre connexion NFS

La plupart du temps les options de montage par défaut configurées dans les clients Linux sont suffisantes afin d'obtenir des performances acceptables.

Néanmoins, dans certaines situations, il peut s'avérer utile d'activer ou de désactiver certaines options afin d'avoir de meilleures performances globales.
De plus, afin d'obtenir des performances optimales et d'éviter divers bogues identifiés dans le client NFS, nous vous recommandons d'utiliser un noyau Linux le plus récent possible.

Ci-dessous, voici quelques éléments qui vous pourraient vous aider à affiner la configuration de votre client NFS :

1 - Quelques options de montage à considérer :

vous pouvez connaitre les options de montages appliquées par votre client Linux avec la commande "mount -l".
  
exemple de retour de cette commande : XX.XX.XX.XX:/zpool-XXXXXX/DIR on /mnt type nfs4 (rw,relatime,vers=4.2,rsize=131072,wsize=131072,namlen=255,hard,proto=tcp,timeo=600,retrans=2,...)

  
- rsize=1048576 : Définit le nombre maximal d'octets de données que le client NFS peut recevoir pour chaque requête de LECTURE réseau. Cette valeur s'applique lors de la lecture de données à partir d'un fichier sur un système de fichiers NFS. La plus grande taille possible (jusqu'à 1048576) garantit de meilleures performances.

  
- wsize=1048576 : Définit le nombre maximal d'octets de données que le client NFS peut envoyer pour chaque requête d'ÉCRITURE sur le réseau. Cette valeur s'applique lors de l'écriture de données dans un fichier dans un système de fichiers NFS. La plus grande taille possible (jusqu'à 1048576) garantit de meilleures performances.

  
- hard : Définit le comportement de récupération du client NFS après l'expiration d'une requête, de sorte que les requêtes sont relancées indéfiniment jusqu'à ce que le serveur NAS-HA réponde. cette option vous garantit l'intégrité des données.

  
- timeo=150 : Définit la valeur de délai d'attente que le client NFS utilise pour attendre une réponse avant de relancer une requête NFS. Utilisez une valeur d'au moins 150, ce qui équivaut à 15 secondes, pour éviter les baisses de performance.

  
- retrans=2 : Définit à 2 le nombre de fois que le client NFS lance une requête avant de tenter une action de récupération.

- tcp : pour accélérer le montage du système de fichiers en NFS v3 (pas nécessaire pour NFSv4.x qui utilise uniquement TCP)
  
- _netdev : Lorsque cette option est présente dans le fichier /etc/fstab, elle empêche l'OS du client d'essayer de monter le système de fichiers NFS tant que le réseau n'a pas été activé.

- nofail : Si l'OS de votre client doit pouvoir démarrer quel que soit l'état de votre système de fichiers NFS, ajoutez l'option nofail.

  
- actimeo=30 : La spécification actimeo définit tous les paramètres acregmin, acregmax, acdirmin et acdirmax à la même valeur. L'utilisation d'une valeur inférieure à 30 secondes peut entraîner une dégradation du niveau de performance, car les caches d'attributs des fichiers et des répertoires expirent trop rapidement.

  
- nfsvers : Evitez si possible d'utiliser la version 4.0 de NFS, utilisez plutôt les versions 3, 4.1 ou 4.2. (Autant que possible, utilisez la même version de NFS pour tous les clients connectés à un même partage NFS)

  
- nordirplus : Dans certains environnements avec de nombreux répertoires, où seules les informations d'un petit sous-ensemble d'entrées de répertoire sont utilisées par un client NFSv3, READDIRPLUS peut entrainer un ralentissement des performances.
L'option nordirplus permet de désactiver cette fonctionnalité


2 - Forcer l'utilisation de NFSv3 dans certains cas.

- Étant donné que NFSv3 est sans état, les performances avec NFSv3 peuvent être nettement meilleures pour certaines charges de travail, en particulier pour les charges de travail qui font énormément d'appels de type OPEN, CLOSE, SETATTR et GETATTR.

 - Si vous hébergez sur votre partage NFS une base de données, sachez qu'en cas de déconnexions réseaux le mécanisme de verrous spécifique au protocole NFS v4.x peut provoquer un arrêt de votre application (lire cette rfc pour plus de détail : https://datatracker.ietf.org/doc/rfc3530/)

3 - Améliorer les performances de lecture en modifiant l'attribut read_ahead_kb

Certains noyaux Linux utilisent une valeur read_ahead_kb par défaut de 128 Ko. Nous vous recommandons d'augmenter cette valeur jusqu'à 15 Mo si vous avez des problèmes de performance en lecture.(https://docs.kernel.org/admin-guide/abi-stable.html?highlight=read_ahead_kb#abi-sys-block-disk-queue-read-ahead-kb) 


## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
