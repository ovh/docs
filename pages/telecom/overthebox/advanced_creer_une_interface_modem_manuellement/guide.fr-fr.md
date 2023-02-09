---
title: 'Créer une interface modem manuellement'
description: 'Créer une interface modem manuellement'
slug: creer-une-interface-modem-manuellement
excerpt: "Découvrez comment ajouter une interface modem manuellement depuis l'interface OverTheBox"
section: "Configurations techniques avancées"
updated: 2021-04-16
---

**Dernière mise à jour le 16/04/2021**

## Objectif

Découvrez comment ajouter une interface modem manuellement depuis l'interface OverTheBox. Par défaut, l'ajout d'une interface modem se fait automatiquement par la découverte du DHCP du modem. Avec ce guide, vous pourrez créer une interface manuellement sans devoir activer/désactiver le DHCP sur votre modem.

## Prérequis

- Au moins un modem ayant accès à Internet sur lequel vous devez être en capacité de modifier la configuration réseau (IP et DHCP). **Exemple** : Box fournie par un fournisseur d'accès Internet comme OVHcloud ou un opérateur national.
- Une **OverTheBox** fournie par OVHcloud ou une installation depuis le projet Open Source (voir notre guide : [Installer l'image overthebox sur votre materiel](../installer-limage-overthebox-sur-votre-materiel/)).

## En pratique

### Méthode 1 : interface avec une IP Statique

> [!warning]
>
> Les opérations qui suivent doivent être effectuées depuis un ordinateur connecté directement sur un des ports LAN de l'OverTheBox (câble gris sur l’image ci-dessus).
>

- Rendez-vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external}
- Rendez vous dans l'onglet **" Network > Interfaces "**
- Cliquez sur le bouton **" Add new interface "**
- Choisissez un nom pour l'interface
- Pour le champ "Protocol of the new interface", sélectionnez **"Static"**
- Cochez la case correspondant à l'interface **"Ethernet Adapter Eth0"**
- Cliquez sur **"Submit"**
- Aller dans l'onglet **General Setup**
- Renseignez l'IP qu'OverTheBox utilisera dans le plan d'adressage de votre modem (cette IP ne doit pas être déjà utilisée)
- Renseignez le masque de sous réseau
- Renseignez l'IP de votre modem en tant que "IPv4 Gateway"
- Dans les champs "Custom DNS", indiquez les serveurs DNS de votre fournisseur d'accès Internet

![overthebox](images/4413.png){.thumbnail}

> [!primary]
>
> Cette configuration ne sera complètement fonctionnelle qu'une 1 minute environ après son application.
>

### Méthode 2 : interface non managée

> [!warning]
>
> Les opérations qui suivent doivent être effectuées depuis un ordinateur connecté directement sur un des ports LAN de l'OverTheBox (câble gris sur l’image ci-dessus).
>

Vous pouvez désactiver l'analyse automatique des serveurs DHCP lorsque vous souhaitez créer vos interfaces WAN manuellement.

- Connectez vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external}
- Rendez vous dans l'onglet **" Network > Interfaces "**
- Éditez la configuration de l'interface **IF0**
- Dans le champ "Protocol", sélectionnez "Unmanaged"
- Validez le choix du nouveau "Protocole" avec : Switch protocol
- Enfin, cliquez sur "Save & Apply"

![overthebox](images/4449.png){.thumbnail}

> [!primary]
>
> Cette configuration ne sera complètement fonctionnelle qu'une 1 minute environ après son application.
>

## Aller plus loin

N'hésitez pas à échanger avec notre communauté d'utilisateurs sur vos produits Télécom sur notre site [OVHcloud Community](https://community.ovh.com/c/telecom)
