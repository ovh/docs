---
title: 'Ajouter un serveur Active Directory dans les options DHCP'
keywords: 'Active, Directory'
description: 'Ajouter un serveur Active Directory dans les options DHCP'
slug: ajouter-un-serveur-active-directory-dans-les-options-dhcp
excerpt: 'Certains services rendus par un serveur Active Directory nécessitent d''ajouter l''ip du serveur AD dans les options DHCP'
section: 'Configurations techniques complexes'
---

## Configuration
- Connectez vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external} en tant qu'administrateur,
- Rendez vous dans l'onglet "Network > Interfaces"
- Éditez la configuration de l'interface LAN


![overthebox](images/4434.png){.thumbnail}

- Rendez-vous en bas de page, dans la partie "DHCP server"
- Saisissez dans le champ DHCP-Options : "option:dns-server,x.x.x.x" où x.x.x.x représente l'IP de votre serveur Active Directory
- Enfin cliquez sur "Save & Apply"


![overthebox](images/4435.png){.thumbnail}