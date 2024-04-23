---
title: 'Configurer un VLAN sur OverTheBox'
excerpt: 'Découvrez comment créer un VLAN sur votre OverTheBox'
updated: 2024-04-24
---

## Objectif

La configuration d'un VLAN (Virtual Local Area Network) sur votre OverTheBox permet d'améliorer la gestion du trafic réseau et renforcer la sécurité en séparant physiquement les segments de réseau sans nécessiter de matériel supplémentaire. Ce guide vous expliquera comment configurer un VLAN sur votre OverTheBox, vous permettant d'optimiser votre réseau selon vos besoins spécifiques.

**Découvrez comment configurer un VLAN sur OverTheBox.**

## Prérequis

- Disposer d'un service [OverTheBox](https://www.ovhtelecom.fr/overthebox/)
- Au moins un accès à Internet, par [OVHcloud](https://www.ovhtelecom.fr/offre-internet/) ou un autre founisseur d'accès
- Un matériel OverTheBox fourni par OVHcloud ou une installation depuis le projet Open Source ([installer l'image overthebox sur votre materiel](/pages/web_cloud/internet/overthebox/advanced_installer_limage_overthebox_sur_votre_materiel))

## En pratique

### Sur OverTheBox Plus (switch Ethernet intégré)

- Rendez-vous dans  **Network**  >  **Switch**  >  **go to expert mode**
- Cliquez sur **Add** puis inscrivez l'ID **666** sur la ligne venant d'apparaitre
- Cliquez sur " **Save & Apply** "

### Autre solution

Rendez-vous dans  **Network**  >  **Interfaces**  > puis cliquez sur " **Add new interface** ” en bas à gauche de la page.

Ensuite, nommez la nouvelle interface, par exemple : “ **vlan666** ”

- Cochez **" custom interface "**, écrivez **“ eth0.666 ”**, puis validez

> [!alert]
>
> Dans cet exemple, nous avons choisi la valeur 666. Cette valeur doit
> obligatoirement être comprise en 2 et 4094.
> 

- Rendez-vous dans l'onglet **"General Setup"** si vous souhaitez configurer les informations de ce VLAN en statique
- Cliquez sur " **Save & Apply** " pour confirmer

## Aller plus loin

- N'hésitez pas à échanger avec notre communauté d'utilisateurs sur vos produits Télécom sur notre site [OVHcloud Community](https://community.ovh.com/c/telecom)
- Consultez la [FAQ OverTheBox](/pages/web_cloud/internet/overthebox/install_faq)