---
title: Montage d'un NAS-HA via partage NFS
slug: nas/nfs
excerpt: Découvrez comment vous connecter à votre NAS-HA en utilisant un partage NFS
section: NAS-HA
order: 03
---

**Dernière mise à jour le 08/11/2022**

## Objectif

Le service NAS-HA OVHcloud vous permet de gérer un stockage de fichiers accessible depuis un réseau.

**Découvrez comment accéder à votre NAS-HA via NFS sur les systèmes d'exploitation les plus courants.**

> [!warning]
> OVHcloud vous offre un certain nombre de services dont la configuration et la gestion vous incombent. Il est donc de votre responsabilité de vous assurer qu’ils fonctionnent correctement.
>
> Nous mettons ce guide à votre disposition afin de vous accompagner au mieux sur les tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) ou de vous rapprocher de [notre communauté](https://community.ovh.com/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place de services sur un serveur.
>

## Prérequis

- Posséder une offre [NAS-HA OVHcloud](https://www.ovhcloud.com/fr-ca/storage-solutions/nas-ha/)
- Posséder un service OVHcloud auquel est associée une adresse IP publique (Hosted Private Cloud, serveur dédié, VPS, instance Public Cloud, etc.).
- Avoir un système d'exploitation compatible avec NFS installé sur votre serveur
- Avoir [créé une partition sur votre service avec le protocole NFS activé](https://docs.ovh.com/ca/fr/storage/file-storage/nas/get-started/#partition)
- Avoir [une entrée ACL pour l'adresse IP du serveur](https://docs.ovh.com/ca/fr/storage/file-storage/nas/get-started/#addaccess)
- Disposer d’un accès administratif (root) à votre serveur via SSH ou GUI

## En pratique

Les sections suivantes contiennent des exemples de configuration pour les distributions/systèmes d'exploitation les plus utilisés. La première étape consiste toujours à vous connecter à votre serveur en SSH ou en vous connectant à l’interface graphique de votre système d’exploitation installé. Les exemples ci-dessous supposent que vous êtes connecté en tant qu'utilisateur avec des autorisations élevées.

Vous aurez également besoin du **nom interne** et de **l'adresse IP** de votre service NAS-HA que vous pourrez retrouver dans l'e-mail reçu après l'installation ou dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

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

### Distributions basées sur Debian

Installez le package `nfs-common` :

```bash
ubuntu@server:~$ sudo apt install nfs-common
```

Utilisez ensuite la commande de montage suivante :

```bash
ubuntu@server:~$ sudo mount -t nfs IP_HA-NAS:NFS_PATH /MOUNTING_FOLDER
```

**Par exemple :**

```bash
ubuntu@server:~$ sudo mount -t nfs 10.1.1.1:zpool-123456/partition01 /mount/ha_nas
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
centos@server:~$ sudo mount -t nfs IP_HA-NAS:NFS_PATH /MOUNTING_FOLDER
```

**Par exemple :**

```bash
centos@server:~$ sudo mount -t nfs 10.1.1.1:zpool-123456/partition01 /mount/ha_nas
```

Vous pouvez maintenant accéder à votre partition montée dans le dossier spécifié.

> [!primary]
>
> Afin d'automatiser le processus de montage à chaque démarrage du serveur, ajoutez la ligne suivante au fichier `/etc/fstab` :
>
> `IP_HA-NAS:NFS_PATH /MOUNTING_FOLDER nfs rw 0 0`
>

### Fedora

Installez le package `nfs-utils` :

```bash
fedora@server:~$ sudo dnf -y install nfs-utils
```

Utilisez ensuite la commande de montage suivante :

```bash
fedora@server:~$ sudo mount -t nfs IP_HA-NAS:NFS_PATH /MOUNTING_FOLDER
```

**Par exemple :**

```bash
fedora@server:~$ sudo mount -t nfs 10.1.1.1:zpool-123456/partition01 /mount/ha_nas
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

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
