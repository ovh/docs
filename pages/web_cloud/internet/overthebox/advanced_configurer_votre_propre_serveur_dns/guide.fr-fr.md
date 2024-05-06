---
title: 'Configurer votre propre serveur DNS'
excerpt: 'Découvrez comment spécifier votre serveur DNS transmis par DHCP'
updated: 2024-05-06
---

## Objectif

Configurer votre propre serveur DNS sur OverTheBox améliore les performances du réseau et renforce votre contrôle sur la gestion des requêtes DNS. Ce guide vous explique comment établir et configurer un serveur DNS personnalisé, vous permettant ainsi d'optimiser la résolution des noms de domaine.

**Découvrez comment configurer votre propre serveur DNS.**

## Prérequis

- Disposer d'un service [OverTheBox](https://www.ovhtelecom.fr/overthebox/)
- Au moins un accès à Internet, fourni par [OVHcloud](https://www.ovhtelecom.fr/offre-internet/) ou un autre founisseur d'accès
- Un matériel OverTheBox fourni par OVHcloud ou une installation depuis le projet Open Source (consultez le guide « [Installer l'image overthebox sur votre materiel](/pages/web_cloud/internet/overthebox/advanced_installer_limage_overthebox_sur_votre_materiel) »)

## En pratique

### Configuration

- Connectez vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external} en tant qu'administrateur
- Rendez vous dans l'onglet `Network`{.action} > `DHCP and DNS`{.action}
- Dans le champ "DNS forwardings", ajoutez les adresses IP de vos serveurs DNS

![overthebox](images/4416.png){.thumbnail}

- Rendez-vous ensuite dans l'onglet `Resolve and Hosts Files`{.action}
- Cochez la case `Ignore resolve file`{.action}

![overthebox](images/4417.png){.thumbnail}

- Cliquez sur `Save & Apply`{.action} pour confirmer

## Aller plus loin

- N'hésitez pas à échanger avec notre communauté d'utilisateurs sur vos produits Télécom sur notre site [OVHcloud Community](https://community.ovh.com/c/telecom)
- Consultez la [FAQ OverTheBox](/pages/web_cloud/internet/overthebox/install_faq)
