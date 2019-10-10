---
title: 'Configurer votre propre serveur DNS'
keywords: DNS
description: 'Configurer votre propre serveur DNS'
slug: configurer-votre-propre-serveur-dns
excerpt: 'Vous souhaitez utiliser un serveur DNS en particulier, voici le guide pour spécifier votre serveur DNS transmis par DHCP'
section: 'Configurations techniques complexes'
---

## Configuration
- Connectez vous sur [http://overthebox.ovh (192.168.100.1)](http://overthebox.ovh){.external} en tant qu'administrateur,
- Rendez vous dans l'onglet **" Network > DHCP and DNS "**
- Dans le champ "DNS forwardings", ajoutez les IP de vos serveurs DNS


![overthebox](images/4416.png){.thumbnail}

- Rendez-vous ensuite dans l'onglet "Resolv and Hosts Files"
- Cochez la case "Ignore resolve file"


![overthebox](images/4417.png){.thumbnail}

- Enfin cliquez sur "Save & Apply"