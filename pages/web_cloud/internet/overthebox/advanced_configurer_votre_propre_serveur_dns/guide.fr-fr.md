---
title: 'Configurer votre propre serveur DNS'
excerpt: 'Découvrez comment spécifier votre serveur DNS transmis par DHCP'
updated: 2024-04-24
---

## Objectif

Configurer votre propre serveur DNS sur OverTheBox améliore les performances du réseau et renforce votre contrôle sur la gestion des requêtes DNS. Ce guide vous explique comment établir et configurer un serveur DNS personnalisé, vous permettant ainsi d'optimiser la résolution des noms de domaine.

**Découvrez comment configurer votre propre serveur DNS.**

## Prérequis

- Disposer d'un service [OverTheBox](https://www.ovhtelecom.fr/overthebox/)
- Au moins un accès à Internet, par [OVHcloud](https://www.ovhtelecom.fr/offre-internet/) ou un autre founisseur d'accès
- Un matériel OverTheBox fourni par OVHcloud ou une installation depuis le projet Open Source ([installer l'image overthebox sur votre materiel](/pages/web_cloud/internet/overthebox/advanced_installer_limage_overthebox_sur_votre_materiel))

## En pratique

### Configuration

- Connectez vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external} en tant qu'administrateur
- Rendez vous dans l'onglet **" Network > DHCP and DNS "**
- Dans le champ "DNS forwardings", ajoutez les adresses IP de vos serveurs DNS

![overthebox](images/4416.png){.thumbnail}

- Rendez-vous ensuite dans l'onglet "Resolv and Hosts Files"
- Cochez la case "Ignore resolve file"

![overthebox](images/4417.png){.thumbnail}

- Cliquez sur "Save & Apply" pour confirmer

## Aller plus loin

- N'hésitez pas à échanger avec notre communauté d'utilisateurs sur vos produits Télécom sur notre site [OVHcloud Community](https://community.ovh.com/c/telecom)
- Consultez la [FAQ OverTheBox](/pages/web_cloud/internet/overthebox/install_faq)
