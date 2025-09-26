---
title: Comment effacer vos données sur un Serveur Dédié
excerpt: Apprenez à effacer vos données en toute sécurité sur les services Bare Metal Cloud d'OVHcloud, en conformité avec la norme NIST SP 800-88 Révision 1.
updated: 2025-09-18
---

## Objectif

Ce guide explique comment effacer vos données de manière sécurisée sur les Serveurs Dédiés OVHcloud, conformément à la [Publication spéciale NIST 800-88 Révision 1](https://csrc.nist.gov/pubs/sp/800/88/r1/final).

L'effacement garantit que vos données ne peuvent pas être récupérées lorsque vous réinstallez, transférez ou mettez hors service votre serveur.

> [!warning]
> Une fois l'effacement effectué, **vos données ne peuvent pas être récupérées**. Faites toujours des sauvegardes de toutes les informations que vous souhaitez conserver avant de continuer.
>

## Prérequis

- Un [serveur dédié](/links/bare-metal/bare-metal) dans votre compte OVHcloud avec accès administrateur.
- L'accès au [client OVHcloud](/links/manager).

## Concepts du NIST 800-88r1

- **Clear (Effacement simple)** : écrase le stockage à l'aide de l'interface standard (par exemple, via une réinstallation).
- **Purge** : assainissement plus approfondi qui protège contre les méthodes de récupération avancée (par exemple, l'effacement sécurisé sur SSD/NVMe).
- **Destroy (Destruction)** : destruction physique du support.

Sur Bare Metal Cloud, vous utiliserez le plus souvent le **Clear** (via la réinstallation) ou la **Purge** (via l'effacement sécurisé en mode rescue).

## Instructions

### Méthode 1 — Réinstallation (Clear/Effacement simple)

1. Connectez-vous à l'[espace client OVHcloud](https://www.ovh.com/manager).
2. Rendez-vous dans `Bare Metal Cloud` > `Servers` (Serveurs).
3. Sélectionnez votre serveur.
4. Cliquez sur **Réinstaller**.
5. Choisissez votre système d'exploitation ou template.
6. Activez l'option **Effacer les partitions existantes**.
7. Confirmez la réinstallation.
**Cette méthode écrase les partitions existantes et les données accessibles à l'utilisateur (*Clear*).**

### Méthode 2 — Effacement Sécurisé (Purge)

Si vous avez besoin d'un effacement plus fort :

1. Démarrez votre serveur en **Mode Rescue** depuis l'espace client. Vous trouverez comment accéder au Mode Rescue dans [ce guide](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).
2. Connectez-vous au serveur via SSH ou en utilisant la fonction KVM à distance.
3. Identifiez vos disques avec :

```bash
lsblk
```

4. Exécutez une commande d'effacement sécurisé en fonction du type de disque :

**Pour HDD/SSD :**
```bash
shred -vzn 3 /dev/sdX
```

Cette commande utilise plusieurs arguments :
- *-v* : verbose, augmente le niveau de détail dans la sortie.
- *-z* : ajoute un écrasement final avec des zéros.
- *-n 3* : écrase trois fois (par défaut). Peut être réglé sur 1 (plus rapide, moins sécurisé) ou jusqu'à 25 (nombre maximal de patterns d'écrasement).

**Pour NVMe :**
```bash
nvme format /dev/nvme0n1 --verbose --ses=1
```

Cette commande utilise plusieurs arguments :
   - *--verbose* : augmente le niveau de détail dans la sortie.
   - *--ses=1* : effectue un Effacement des Données Utilisateur (User Data Erase), écrasant les données avec un motif fixe déterminé par le firmware du périphérique de stockage (par exemple, remplir de zéros). Peut être réglé sur 2 pour effectuer un Effacement Cryptographique (Cryptographic Erase), ce qui supprime la clé de chiffrement, rendant de fait les données inaccessibles.

5. Quittez le mode rescue et redémarrez le serveur.

## Vérification

- Après la réinstallation, connectez-vous au serveur pour vous assurer que le système démarre avec un nouvel OS et qu'aucune ancienne donnée ne subsiste.
- Après l'effacement sécurisé, vérifiez le disque avec `lsblk` — celui-ci devrait apparaître non alloué ou avec un nouveau système de fichiers.

## Aller plus loin

Rejoignez notre [communauté d'utilisateurs](/links/community).