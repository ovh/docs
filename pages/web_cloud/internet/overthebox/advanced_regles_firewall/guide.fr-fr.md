---
title: 'Configurer des règles de pare-feu (Firewall)'
excerpt: "Découvrez comment ajouter des règles de pare-feu sur votre OverTheBox afin de protéger votre réseau" 
updated: 2024-05-06
---

## Objectif

Configurer des règles de pare-feu sur votre OverTheBox permet de contrôler le trafic entrant et sortant, assurant ainsi une défense contre les menaces externes et les connexions non autorisées.

**Découvrez comment configurer des règles de pare-feu sur votre OverTheBox afin de protéger votre réseau.**

## Prérequis

- Disposer d'un service [OverTheBox](https://www.ovhtelecom.fr/overthebox/)
- Au moins un accès à Internet, fourni par [OVHcloud](https://www.ovhtelecom.fr/offre-internet/) ou un autre founisseur d'accès
- Un matériel OverTheBox fourni par OVHcloud ou une installation depuis le projet Open Source (consultez le guide « [Installer l'image overthebox sur votre materiel](/pages/web_cloud/internet/overthebox/advanced_installer_limage_overthebox_sur_votre_materiel) »)

## En pratique

### Créer une "Traffic Rule"

- Rendez-vous dans `Network`{.action} > `Firewall`{.action}.
- Dans l'onglet `Traffic Rules`{.action}, cliquez sur le bouton `New forward rule`{.action}.
- Indiquez un nom et une zone source (ex : `lan`) et une zone destination (ex : `wan`).
- Sur la page suivante, réglez les paramètres pour discriminer le trafic auquel vous devez appliquer une règle. L'exemple ci-dessous montre comment bloquer du trafic FTP sortant.
- Cliquez sur `Save & Apply`{.action} pour confirmer.

![overthebox](images/4424.png){.thumbnail}

## Aller plus loin

- N'hésitez pas à échanger avec notre communauté d'utilisateurs sur vos produits Télécom sur notre site [OVHcloud Community](https://community.ovh.com/c/telecom)
- Consultez la [FAQ OverTheBox](/pages/web_cloud/internet/overthebox/install_faq)
