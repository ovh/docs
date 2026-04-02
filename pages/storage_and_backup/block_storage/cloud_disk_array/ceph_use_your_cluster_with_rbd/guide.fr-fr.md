---
title: Accéder au cluster en utilisant le client rbd
excerpt: Ce guide vous présente comment avoir accès à votre cluster en utilisant le client rbd.
updated: 2026-04-02
---

## Objectif

Ce guide explique comment accéder à votre **cluster Ceph OVHcloud** depuis une machine configurée en tant que **client RBD**. Il décrit comment préparer votre environnement, configurer l'accès réseau et vous connecter en toute sécurité à votre **Cloud Disk Array**.

## Prérequis

Avant de poursuivre :

- Une solution [Cloud Disk Array](/links/storage/cloud-disk-array)
- L'adresse IP publique ou privée de votre machine cliente est autorisée dans la liste de contrôle d'accès (ACL) {} de votre cluster Ceph. Consultez notre guide « [Cloud Disk Array - Comment créer une ACL IP](/pages/storage_and_backup/block_storage/cloud_disk_array/ceph_create_an_ip_acl) ».
- Vous disposez des informations d'identification suivantes (disponibles dans l'espace client OVHcloud) :
  - Adresses IP du moniteur de cluster
  - Nom d'utilisateur Ceph (`client.<username>`)
  - Clé secrète (contenu du trousseau de clés)

## En pratique

### Installation de Ceph sur la machine cliente

Pour les distributions **Debian/Ubuntu** :

```bash
sudo apt-get update
sudo apt-get -y install ceph ceph-common
```

Pour les distributions **RHEL/CentOS** :

```bash
sudo yum install -y ceph-common
```

### Récupérer les détails de connexion

Connectez-vous à l'[espace client OVHcloud](/links/manager), cliquez sur `Bare Metal Cloud`{.action}, puis sur `Cloud Disk Array`{.action} et sélectionnez votre service.

Présentation :

- Localisez les adresses IP des moniteurs de votre cluster Ceph.

Utilisateurs :

- Trouvez le nom d'utilisateur et la clé Ceph requis pour l'authentification.

> [!primary]
>
> **Remarque :** si aucun utilisateur n'existe encore, suivez ces guides :
>
> - « [Cloud Disk Array - Comment créer des utilisateurs](/pages/storage_and_backup/block_storage/cloud_disk_array/ceph_create_a_user) »
> - « [Modifier les droits des utilisateurs](/pages/storage_and_backup/block_storage/cloud_disk_array/ceph_change_user_rights) »
>

### Configurer le client

Créez ou modifiez le fichier `/etc/ceph/ceph.conf` avec le contenu suivant :

```bash
[global]
mon_host = <MONITOR_IP_1>:6789, <MONITOR_IP_2>:6789, <MONITOR_IP_3>:6789
```

> [!primary]
>
> **Remarque :** le port par défaut du moniteur Ceph est :6789 (Messenger v1). Certains clusters peuvent également exposer :3300 pour Messenger v2.
>

Créez un fichier de clés pour votre utilisateur Ceph à l'emplacement `/etc/ceph/ceph.client.<username>.keyring` :

```bash
[client.<username>]
key = <your_secret_key>
```

Assurez-vous que le fichier de clés dispose de permissions restreintes pour des raisons de sécurité :

```bash
sudo chmod 600 /etc/ceph/ceph.client.<username>.keyring
```

### Tester la connexion et la configuration

Vérifiez que le client peut se connecter correctement au cluster Ceph :

```bash
ceph -s --id <username>
```

Si la configuration est correcte, la commande renvoie l'état actuel du cluster.

Pour valider la configuration, répertoriez les images disponibles dans votre pool :

```bash
rbd -n client.<username> list <pool_name>
```

Un résultat vide indique qu'aucune image n'a encore été créée. Si une erreur se produit, vérifiez les fichiers de configuration et les informations d'identification pour vous assurer qu'ils sont corrects.

### Créer, mapper et monter un volume RBD

Un pool Ceph ne peut pas être monté directement. Vous devez d'abord créer une image RBD dans le pool, puis la mapper à un périphérique bloc.

Créez une image RBD :

```bash
rbd -n client.<username> create <pool_name>/<image_name> \
  -s <size_in_MB> \
  --image-format 2 \
  --image-feature layering
```

Vérifiez la création de l'image :

```bash
rbd -n client.<username> list <pool_name>
```

Mappez l'image à un périphérique bloc :

```bash
sudo rbd -n client.<username> map <pool_name>/<image_name>
```

Vérifiez le mappage :

```bash
rbd showmapped
```

Formatez le périphérique bloc (exemple XFS) :

```bash
sudo mkfs.xfs /dev/rbd0
```

Montez le système de fichiers :

```bash
sudo mkdir -p /mnt/<mount_point>
sudo mount /dev/rbd0 /mnt/<mount_point>
df -h /mnt/<mount_point>
```

Vous pouvez désormais commencer à utiliser votre stockage en blocs Ceph.

### Démonter et détacher le volume RBD

Avant de détacher une image RBD, assurez-vous que le système de fichiers est correctement démonté :

```bash
sudo umount /mnt/<mount_point>
sudo rbd unmap /dev/rbd0
```

L'image RBD est désormais détachée en toute sécurité du client.

### Remarques et bonnes pratiques

- Utilisez toujours les adresses IP des moniteurs fournies dans l'espace client OVHcloud.
- Évitez de stocker des informations sensibles dans des fichiers de configuration en texte clair.
- Pour les environnements Kubernetes, utilisez le **pilote CSI RBD** avec la même configuration et les mêmes identifiants.

## Aller plus loin

Rendez-vous sur notre chaîne Discord dédiée : <https://discord.gg/ovhcloud>. Posez des questions, fournissez des commentaires et interagissez directement avec l'équipe qui construit nos services de stockage et de sauvegarde.

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
