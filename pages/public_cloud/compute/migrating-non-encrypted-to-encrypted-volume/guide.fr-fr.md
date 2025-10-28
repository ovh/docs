---
title: "Migrer un volume Block Storage vers un volume chiffré LUKS"
excerpt: "Découvrez comment migrer un volume Block Storage d’un état non chiffré vers un volume chiffré (LUKS), tout en garantissant la sécurité de vos données"
updated: 2025-10-21
---

## Objectif

OVHcloud propose désormais des volumes Block Storage chiffrés avec LUKS. Il n’est actuellement pas possible de convertir directement un volume existant en volume LUKS via l’option de retype, ni de le sauvegarder pour le restaurer ensuite en tant que volume LUKS.

Ce guide explique comment migrer vos données d’un volume Block Storage standard vers un nouveau volume chiffré LUKS en créant un nouveau volume et en copiant vos données de manière sécurisée.

## Prérequis

- Une [instance Public Cloud](/links/public-cloud/compute) dans votre projet Public Cloud.
- Un volume Block Storage existant (source)
- Un accès administrateur (root ou sudo) à votre instance

## En pratique

### Etape 1 : Créer un volume LUKS

Depuis votre [espace client OVHcloud](/links/manager), créez un nouveau volume Block Storage et sélectionnez le type `LUKS`.

> [!primary]
> 
> Une fois attaché à votre instance, le volume LUKS se comporte comme un volume standard. Le chiffrement et le déverrouillage sont entièrement gérés par l’infrastructure OVHcloud.
>

### Étape 2 : Attacher les volumes à votre instance

1. Attachez les deux volumes à votre instance :

    - Volume source (non chiffré)
    - Volume cible (chiffré LUKS)

2. Vérifiez que les deux volumes sont visibles sur votre instance :

    ```bash
    lsblk
    ```

    Exemple de sortie :

    ```bash
    /dev/vdb # volume source
    /dev/vdc # volume cible LUKS
    ```

### Étape 3 : Préparer le volume LUKS (chiffré)

1. Formatez le volume LUKS avec le système de fichiers de votre choix (par exemple ext4) :

    ```bash
    sudo mkfs.ext4 /dev/vdc
    ```

2. Montez le volume cible :

    ```bash
    sudo mkdir -p /mnt/luks_target
    sudo mount /dev/vdc /mnt/luks_target
    ```

### Étape 4 : Monter le volume source

Si ce n’est pas déjà fait, montez le volume source sur votre instance :

```bash
sudo mkdir -p /mnt/source_volume
sudo mount /dev/vdb /mnt/source_volume
```

### Étape 5 : Copier les données

Utilisez `rsync` pour copier vos données du volume source vers le volume cible chiffré LUKS tout en conservant les permissions et attributs :

```bash
# Copier les données tout en préservant les permissions et attributs
sudo rsync -aAXHv /mnt/source_volume/ /mnt/luks_target/

# Ou, avec affichage de la progression pour les gros volumes
sudo rsync -aAXHv --progress /mnt/source_volume/ /mnt/luks_target/
```

### Étape 6 (facultatif) : Vérification et détachement

1. Vérifiez que vos données ont été copiées correctement. Vous pouvez utiliser des commandes comme `ls`, `du` ou `rsync --dry-run` pour un contrôle rapide.

2. Démontez les deux volumes :

    ```bash
    sudo umount /mnt/source_volume
    sudo umount /mnt/luks_target
    ```

3. Détachez le volume source s’il n’est plus nécessaire.

### Étape 7 (facultatif) : Mettre à jour vos points de montage

Si le volume LUKS doit être utilisé de manière permanente, ajoutez une entrée dans `/etc/fstab` pour qu’il soit monté automatiquement au démarrage :

Exemple:

```bash
UUID=<UUID_of_volume> /mnt/data ext4 defaults 0 2
```

> [primary]
>
> **Notes:**
>
> Remplacez <UUID_du_volume> par l’UUID réel de votre volume LUKS (obtenez-le avec `sudo blkid /dev/vdc`).
>
> Assurez-vous que le point de montage `/mnt/data` existe avant le démarrage, sinon le système risque de ne pas pouvoir monter le volume.
>

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).