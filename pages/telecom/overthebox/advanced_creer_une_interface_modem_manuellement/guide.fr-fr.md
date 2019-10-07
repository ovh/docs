---
title: 'Créer une interface modem manuellement'
keywords: Interface
description: 'Créer une interface modem manuellement'
slug: creer-une-interface-modem-manuellement
excerpt: 'Par défaut l''ajout d''une interface modem se fait automatiquement par la découverte du DHCP du modem. Avec ce guide, vous pourrez créer une interface manuellement sans devoir activer/désactiver le DHCP sur votre modem.'
section: 'Configurations techniques complexes'
---

## Création d'une interface modem
- Rendez-vous dans **Network > Interfaces**
- Cliquez sur le bouton **" Add new interface "**
- Choisissez un nom pour l'interface.
- Pour le champ "Protocol of the new interface", sélectionnez **"Static"**
- Cochez la case correspondant à l'interface **"Ethernet Adapter Eth0"**
- Cliquez sur **"Submit"**


### Onglet General Setup
- Renseignez l'ip qu'OverTheBox utilisera dans le plan d'adressage de votre modem (cette IP ne doit pas être deja utilisée)
- Renseignez le masque de sous réseau
- Renseignez l'IP de votre modem en tant que "IPv4 Gateway"
- Dans les champs "Custom DNS", indiquez les serveurs DNS de votre fournisseur d'accès Internet


![overthebox](images/4413.png){.thumbnail}



> [!alert]
>
> Cette configuration ne sera complètement fonctionnelle qu'après une 1 minute environ après l'application.
> 