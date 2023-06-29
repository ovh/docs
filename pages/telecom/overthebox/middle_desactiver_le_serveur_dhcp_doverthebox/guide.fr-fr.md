---
title: "Désactiver le serveur DHCP d'OverTheBox"
keywords: 'DHCP, désactiver'
description: "Désactiver le serveur DHCP d'OverTheBox"
excerpt: "Vous souhaitez réaliser le service DHCP par un autre équipement qu'OverTheBox, voici le guide pour désactiver le DHCP."
updated: 2021-04-13
---

**Dernière mise à jour le 13/04/2021**

## Désactivation du serveur

- Connectez vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external} en tant qu'administrateur.
- Rendez vous dans l'onglet **" Network > Interfaces "**
- Éditez la configuration de l'interface LAN


![overthebox](images/4405.png){.thumbnail}

- Rendez-vous en bas de page, dans la partie "DHCP server"
- Cochez la case **" Ignore interface "** dans l'onglet "General Setup"
- Enfin cliquez sur "Save & Apply"


![overthebox](images/4406.png){.thumbnail}
