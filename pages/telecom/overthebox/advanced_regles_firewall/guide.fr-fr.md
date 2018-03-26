---
title: Règles Firewall
keywords: Règle, Firewall
description: Règles Firewall
slug: regles-firewall
excerpt: Par défaut tout le trafic entrant est bloqué, vous pouvez néanmoins activer des redirections de port. Vous pouvez aussi bloquer des flux de votre LAN vers le WAN, c'est le propos de ce guide.
section: Configurations techniques complexes
---


## Créer une &quot;Traffic Rules&quot;
- Rendez-vous dans **Network > Firewall**
- Dans l'onglet **" Traffic Rules "** cliquez sur le bouton **" New forward rule "**
- Indiquez un nom et une zone source (ex : lan) et une zone destination (ex : wan)
- Sur la page suivante, réglez les paramètres pour discriminer le trafic auquel vous devez appliquer une règle. L'exemple ci-dessous montre comment bloquer du trafic FTP sortant.
- Enfin cliquez sur **" Save & Apply "**


![overthebox](images/4424.png){.thumbnail}