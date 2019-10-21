---
title: 'Configurer votre LAN'
slug: configurer-votre-lan
keywords: 'LAN, IP, passerelle, gateway, OverTheBox'
excerpt: 'Par défaut, votre LAN  OverTheBox  s''autoconfigure en fonction de votre premier modem.  Vous pouvez changer l''IP LAN d''OverTheBox  ainsi que la plage  DHCP des adresses dynamiques.'
section: 'Fonctionnalités principales'
---

## Modifier l'adresse IP d'OverTheBox
- Rendez-vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external} depuis votre ordinateur connecté au modem principal.
- Cliquez sur **"Network"**
- Cliquez sur **"Interfaces"**
- Cliquez sur l'onglet **"LAN"**, (Attention, ne pas modifier les interfaces dont le nom débute par **LAN_IF**)
- Restez dans l'onglet **"General Setup"**
- Modifiez le champ **"IPv4 adress"** , cette ip sera celle de votre passerelle **OverTheBox**
- Cliquez sur **"Save & Apply"**


![overthebox](images/4375.png){.thumbnail}



> [!success]
>
> La plage d'IP hôte du serveur  DHCP  sera automatiquement mise à jour pour
> fonctionner avec cette nouvelle  IP LAN .
> 