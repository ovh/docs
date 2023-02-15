---
deprecated: true
title: 'Wijzigen van het admin-wachtwoord op een Windows dedicated server'
slug: wijzigen-admin-wachtwoord-windows
excerpt: 'Leer hoe u het admin-wachtwoord op een Windows dedicated server kunt veranderen'
section: 'Diagnose en Reddingsmodus'
updated: 2021-01-12
---

**Laatste update 27-08-2018**

## Introductie

Bij het installeren of opnieuw installeren van uw Windows-besturingssysteem ontvangt u een admin-wachtwoord (beheerderswachtwoord). Het is sterk aanbevolen deze te wijzigen, zoals beschreven in onze handleiding over het [beveiligen van een VPS](https://docs.ovh.com/nl/dedicated/beveiligen-dedicated-server/){.external}. Het kan ook voorkomen dat u dit wachtwoord kwijtraakt en moet wijzigen.

**In deze handleiding wordt uitgelegd hoe u het admin-wachtwoord van uw server kunt wijzigen.**


## Vereisten

* U moet beschikken over een [dedicated server](https://www.ovh.nl/dedicated_servers/){.external} waarop Windows is geïnstalleerd.
* U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}


## Instructie

Start uw server in de reddingsmodus met behulp van de opstartomgeving van WinRescue om aan de slag te gaan. Indien nodig kunt u de handleiding over de [reddingsmodus](https://docs.ovh.com/nl/dedicated/ovh-rescue/){.external} te raadplegen. 

Nadat de server opnieuw is opgestart, selecteert u het tabblad `IPMI`{.action} op uw serverpagina in uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

> [!primary]
>
> Raadpleeg de [IPMI handleiding](https://docs.ovh.com/nl/dedicated/gebruik-ipmi-dedicated-servers/){.external} voor meer informatie over het gebruik van IPMI.
>

Schakel vervolgens de IPMI-functie in met behulp van de Java-applet of uw browser. Nadat de IPMI-sessie is gestart, dubbelklikt u op de NTPWdi-tool van uw server op het WinRescue-bureaublad.

![NTPWdi](images/ntpwdi-tool-01.png){.thumbnail}

Klik vervolgens op de knop `(Her)openen`{.action} om de lijst met beschikbare gebruikersaccounts te bekijken.

![NTPWdi](images/ntpwdi-tool-02.png){.thumbnail}

Klik nu om het admin-account te selecteren en klik op de knop `Wachtwoord wijzigen`{.action}.

![NTPWdi](images/ntpwdi-tool-03.png){.thumbnail}

﻿Voer ten slotte het nieuwe wachtwoord twee keer in en klik op `OK`{.action}.

![NTPWdi](images/ntpwdi-tool-04.png){.thumbnail}

Uw wachtwoord is nu gewijzigd. Beëindig de tool, sluit de IPMI-sessie en start uw server opnieuw op in de normale modus.


## Verder

[Reddingsmodus](https://docs.ovh.com/nl/dedicated/ovh-rescue/){.external}.

[Het gebruik van IPMI voor dedicated servers.](https://docs.ovh.com/nl/dedicated/gebruik-ipmi-dedicated-servers/){.external}

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.