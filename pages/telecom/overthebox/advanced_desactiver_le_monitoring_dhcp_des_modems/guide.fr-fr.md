---
title: 'Désactiver le monitoring DHCP des modems'
keywords: 'désactiver, monitoring, DHCP'
description: 'Désactiver le monitoring DHCP des modems'
slug: desactiver-le-monitoring-dhcp-des-modems
excerpt: 'Vous pouvez désactiver l''analyse automatique des serveurs DHCP lorsque vous souhaitez créer vos interfaces WAN manuellement.'
section: 'Configurations techniques complexes'
---

## Configuration
- Connectez vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external} en tant qu'administrateur
- Rendez vous dans l'onglet **" Network > Interfaces "**
- Éditez la configuration de l'interface **IF0**
- Dans le champ "Protocol", sélectionnez "Unmanaged"
- Valider le choix du nouveau "Protocole" avec : Switch protocol
- Enfin cliquez sur "Save & Apply"


![overthebox](images/4449.png){.thumbnail}
