---
title: 'Modifier l’adresse IP d’OverTheBox'
excerpt: "Découvrez comment modifier l'adresse IP d’OverTheBox"
updated: 2024-04-24
---

## Objectif

Que ce soit pour des besoins de restructuration de réseau ou pour des raisons de conformité, changer l'adresse IP permet de maintenir une configuration réseau efficace et sécurisée.

**Découvrez comment modifier l'adresse IP d'OverTheBox.**

## Prérequis

- Disposer d'un service [OverTheBox](https://www.ovhtelecom.fr/overthebox/)
- Au moins un accès à Internet, par [OVHcloud](https://www.ovhtelecom.fr/offre-internet/) ou un autre founisseur d'accès
- Un matériel OverTheBox fourni par OVHcloud ou une installation depuis le projet Open Source ([installer l'image overthebox sur votre materiel](/pages/web_cloud/internet/overthebox/advanced_installer_limage_overthebox_sur_votre_materiel))

## En pratique

### Modifier l'adresse IP d'OverTheBox

- Rendez-vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external} depuis votre ordinateur connecté au modem principal.
- Cliquez sur **"Network"**.
- Cliquez sur **"Interfaces"**.
- Cliquez sur l'onglet **"LAN"**, (Attention, ne pas modifier les interfaces dont le nom débute par **LAN_IF**).
- Restez dans l'onglet **"General Setup"**.
- Modifiez le champ **"IPv4 adress"** , cette ip sera celle de votre passerelle **OverTheBox**.
- Cliquez sur **"Save & Apply"**.

![overthebox](images/4375.png){.thumbnail}

> [!success]
>
> La plage d'IP hôte du serveur  DHCP  sera automatiquement mise à jour pour
> fonctionner avec cette nouvelle  IP LAN .
>

## Aller plus loin

- N'hésitez pas à échanger avec notre communauté d'utilisateurs sur vos produits Télécom sur notre site [OVHcloud Community](https://community.ovh.com/c/telecom)
- Consultez la [FAQ OverTheBox](/pages/web_cloud/internet/overthebox/install_faq)