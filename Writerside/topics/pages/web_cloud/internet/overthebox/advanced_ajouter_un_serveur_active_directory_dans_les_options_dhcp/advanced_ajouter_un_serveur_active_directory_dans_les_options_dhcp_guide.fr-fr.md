---
title: 'Ajouter un serveur Active Directory à OverTheBox'
excerpt: "Découvrez comment ajouter un serveur Active Directory dans les options DHCP"
updated: 2021-04-13
---

## Configuration
- Connectez vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external} en tant qu'administrateur,
- Rendez vous dans l'onglet "Network > Interfaces"
- Éditez la configuration de l'interface LAN

![overthebox](4434.png){.thumbnail}

- Rendez-vous en bas de page, dans la partie "DHCP server"
- Saisissez dans le champ DHCP-Options : "option:dns-server,x.x.x.x" où x.x.x.x représente l'IP de votre serveur Active Directory
- Enfin cliquez sur "Save & Apply"

![overthebox](4435.png){.thumbnail}
