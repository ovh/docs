---
title: "Désactiver le serveur DHCP d'OverTheBox"
excerpt: "Découvrez comment désactiver le serveur DHCP de votre OverTheBox"
updated: 2024-05-06
---

## Objectif

Pour des raisons de configuration réseau spécifiques ou pour intégrer un autre serveur DHCP, vous pouvez désactiver le serveur DHCP sur votre OverTheBox.

**Découvrez comment désactiver le serveur DHCP de votre OverTheBox.**

## Prérequis

- Disposer d'un service [OverTheBox](https://www.ovhtelecom.fr/overthebox/)
- Au moins un accès à Internet, fourni par [OVHcloud](https://www.ovhtelecom.fr/offre-internet/) ou un autre founisseur d'accès
- Un matériel OverTheBox fourni par OVHcloud ou une installation depuis le projet Open Source (consultez le guide « [Installer l'image overthebox sur votre materiel](/pages/web_cloud/internet/overthebox/advanced_installer_limage_overthebox_sur_votre_materiel) »)

## En pratique

### Désactivation du serveur

- Connectez vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external} en tant qu'administrateur
- Rendez vous dans l'onglet `Network`{.action} > `Interfaces`{.action}
- Éditez la configuration de l'interface LAN

![overthebox](images/4405.png){.thumbnail}

- Rendez-vous en bas de page, dans la partie `DHCP server`{.action}
- Cochez `Ignore interface`{.action} dans l'onglet `General Setup`{.action}
- Cliquez sur `Save & Apply`{.action} pour confirmer

![overthebox](images/4406.png){.thumbnail}

## Aller plus loin

- N'hésitez pas à échanger avec notre communauté d'utilisateurs sur vos produits Télécom sur notre site [OVHcloud Community](https://community.ovh.com/c/telecom)
- Consultez la [FAQ OverTheBox](/pages/web_cloud/internet/overthebox/install_faq)