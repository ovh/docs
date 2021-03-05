---
deprecated: true
title: Installatie van Real Time Monitoring (RTM)
slug: installatie-rtm
excerpt: Ontdek hoe u Real Time Monitoring op Linux of Windows kunt installeren
section: Diagnose en Reddingsmodus
---

**Laatste update 18-01-2018**

## Introductie

Met Real Time Monitoring (RTM) kunt u uw server en de activiteiten ervan gedeeltelijk monitoren. In uw Control Panel vindt u informatie over de CPU (centrale verwerkingseenheid), het RAM (willekeurig toegankelijk geheugen), de open poorten, enz. U moet het RTM-pakket installeren zodat deze informatie beschikbaar komt.

**In deze handleiding wordt uitgelegd hoe u RTM op Linux of Windows kunt installeren**

## Vereisten

- U moet via SSH (of op uw graphic interface) verbonden zijn op uw Linux-server (*root*-toegang).
- U moet remote desktop ingelogd zijn op uw Windows-server (*admin*-toegang).
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}

## Instructies

U kunt uw server controleren als de RTM is geïnstalleerd op uw Control Panel, in het gedeelte `Dedicated`{.action}. Op de hoofdpagina van uw server kunt u de monitoringinformatie vinden in `Real Time Monitoring`:

![Real Time Monitoring](images/rtm.png)

> [!primary]
>
> Bepaalde firewallregels kunnen de monitoring van uw infrastructuur verhinderen, zelfs als u de RTM hebt toegevoegd. Vergeet niet om de toegang tot uw server te openen voor de IP-adressen van de OVH-monitoring. U vindt de details \[hier\](https://docs.ovh.com/gb/en/dedicated/monitoring-ip-ovh/).
> 

### Installatie van RTM onder Linux

Zodra u via SSH bent ingelogd op uw server hoeft u alleen maar het volgende commando uit te voeren:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/rtm/install_rtm.sh -O install_rtm.sh ; /bin/bash install_rtm.sh
```

## Verder

[De IP-adressen van de OVH-monitoring](https://docs.ovh.com/fr/dedicated/monitoring-ip-ovh/){.external}.

Ga in gesprek met andere gebruikers op <https://community.ovh.com/en/>.