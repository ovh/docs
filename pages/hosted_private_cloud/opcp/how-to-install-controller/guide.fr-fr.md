---
title: "Installer un contrôleur OPCP"
excerpt: "Découvrez comment installer un contrôleur OPCP à partir de l'image Debian fournie par OVHcloud"
updated: 2026-05-21
---

## Objectif

Ce guide explique comment installer un contrôleur **OPCP** à partir de l'image d'installation Debian fournie par OVHcloud. Il couvre la préparation du support d'installation, le câblage du serveur, la sélection des disques pour le RAID 1, la configuration du réseau d'accès du contrôleur et les ajustements à effectuer après le premier démarrage.

> [!primary]
>
> Dans ce guide, le réseau **OOB** correspond au réseau d'accès du contrôleur. Il s'agit du premier port réseau de données du serveur, connecté au réseau du client.
>
> Ce réseau n'est pas le port d'administration dédié du serveur (IPMI, iDRAC, iLO, etc.), qui peut uniquement servir à monter l'ISO ou à ouvrir une console distante.

> [!warning]
>
> L'installation efface toutes les données présentes sur les disques sélectionnés.
>
> OVHcloud met à votre disposition des services dont vous êtes responsable. Vous devez donc vous assurer de leur bon fonctionnement après l'installation.

## Prérequis

- Un serveur physique destiné à héberger le contrôleur OPCP
- L'image d'installation OPCP : <https://opcp-public-release.snc.ovh.net/releases/live-image-amd64.hybrid.iso>
- Une clé USB, un média virtuel ou tout autre support de démarrage
- Un accès à la console locale ou à la console distante du serveur (IPMI, iDRAC, iLO, etc.)
- Au moins deux disques physiques de taille comparable pour l'installation en RAID 1
- Un câble réseau branché sur le premier port de données du serveur et raccordé au réseau du client
- Si vous utilisez une configuration statique, l'adresse IP, le masque, la passerelle et les serveurs DNS du réseau d'accès du contrôleur

## En pratique

### 1. Télécharger l'image d'installation

Téléchargez l'image d'installation OPCP puis écrivez-la sur votre support de démarrage :

```bash
curl -O https://opcp-public-release.snc.ovh.net/releases/live-image-amd64.hybrid.iso

sudo dd if=live-image-amd64.hybrid.iso of=/dev/sdX bs=4M status=progress oflag=sync
```

Remplacez `/dev/sdX` par le périphérique correspondant à votre support d'installation.

### 2. Câbler le serveur

Avant de démarrer l'installation :

- connectez le premier port réseau de données du serveur au réseau du client
- laissez le port d'administration dédié (IPMI, iDRAC, iLO, etc.) séparé de cette configuration réseau
- si le serveur dispose de plusieurs interfaces de données, utilisez la première pour faciliter son identification pendant l'installation

Vous pouvez utiliser la console distante du BMC pour monter l'ISO et démarrer le serveur, mais le port BMC/IPMI ne doit pas être utilisé comme réseau d'accès du contrôleur.

### 3. Démarrer l'installeur

Démarrez le serveur sur le support d'installation puis suivez l'installeur interactif.

Dans le menu GRUB, sélectionnez l'entrée `Auto Install` pour lancer l'installation.

Pendant l'installation, l'image :

- détecte les disques physiques disponibles
- vous demande de sélectionner les disques à utiliser pour le RAID 1
- configure automatiquement le système sur les disques sélectionnés
- vous demande de choisir l'interface réseau utilisée pour l'accès au contrôleur
- active l'accès SSH `root` sur le contrôleur au premier démarrage

### 4. Sélectionner les disques d'installation

Lorsque l'installeur vous le demande, sélectionnez au moins deux disques physiques pour le contrôleur.

Utilisez de préférence des disques identiques, ou aussi proches que possible en taille et en performances, afin de permettre la création correcte du RAID 1.

L'installeur crée automatiquement la configuration RAID 1 et la structure LVM du système sur les disques retenus.

### 5. Configurer le réseau d'accès du contrôleur

Lorsque l'installeur affiche la liste des interfaces réseau physiques :

1. Sélectionnez l'interface connectée au réseau du client.
2. Choisissez `DHCP` si l'adressage est fourni automatiquement, ou `Static` si vous devez saisir la configuration manuellement.
3. En mode statique, renseignez l'adresse IP, le masque, la passerelle et les serveurs DNS demandés.
4. Validez le récapitulatif avant l'écriture de la configuration réseau.

À la fin de l'installation de base, cette configuration est appliquée au système installé afin de permettre un premier accès SSH au contrôleur.

### 6. Vérifier l'accès après le premier démarrage

Après le redémarrage du serveur :

1. Connectez-vous depuis le réseau relié au premier port de données du serveur.
2. Vérifiez que l'adresse IP configurée pour le contrôleur répond bien en SSH.
3. Vérifiez que le contrôleur peut joindre les ressources réseau nécessaires dans votre environnement.

Si l'interface ou les paramètres réseau ne sont pas corrects, relancez l'installation et sélectionnez les valeurs attendues.

### 7. Ajuster la taille des volumes logiques

Après le premier démarrage, connectez-vous au contrôleur puis adaptez la taille des volumes logiques en fonction de la capacité réelle des disques et de vos besoins.

> [!warning]
>
> Les tailles ci-dessous sont des exemples de destination. Vérifiez l'espace réellement utilisé et disponible avant toute réduction de volume, puis ajustez les valeurs selon la capacité de vos disques.

Commencez par réduire le volume `spare`, puis réallouez l'espace libéré aux volumes utiles :

```bash
lvreduce -r -L 100G -v /dev/mapper/vg-spare
lvresize -r -L100G -v /dev/mapper/vg-home
lvresize -r -L100G -v /dev/mapper/vg-root
lvresize -r -L30G -v /dev/mapper/vg-tmp
lvresize -r -L200G -v /dev/mapper/vg-var
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
