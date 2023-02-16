---
deprecated: true
title: Creatie van een CNAME-record om een gekoppeld domein toe te voegen
slug: exchange-toevoegen-van-een-cname-record
excerpt: Lees meer over het doel van een CNAME-record en hoe u er een toevoegt bij OVH
section: Configuratie van Exchange
updated: 2019-03-26
---

**Laatste update 01-02-2018**

## Introductie

Wanneer u een domeinnaam aan uw Exchange-dienst toevoegt, moet u mogelijk het CNAME-record in uw DNS-zone configureren. Deze configuratie zorgt ervoor dat u beheerdersrechten voor de betreffende domeinnaam hebt.

**Lees meer over het doel van een CNAME-record en hoe u er een toevoegt bij OVH.**

## Vereisten

- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.
- U moet beheerdersrechten hebben voor de Exchange-dienst op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.
- U moet een domeinnaam aan uw Exchange-dienst hebben toegevoegd om de toevoeging van een CNAME-record aan te vragen.
- U moet het recht hebben om de configuratie van uw domeinnaam te wijzigen (via de DNS-zone).

## Instructies

### Stap 1: Begrijp de CNAME-diagnostiek bij OVH

Het diagnosevak **CNAME** (Canonical Name) verschijnt in sommige specifieke gevallen wanneer u een domeinnaam op uw Exchange-dienst declareert.

Het doel ervan is om te bewijzen dat u de beheerder bent van de domeinnaam die u wilt declareren.

Deze diagnose kan verschijnen in de volgende situaties:

- De domeinnaam is niet geregistreerd bij OVH;
- De domeinnaam wordt niet beheerd door uw NIC-handle;
- De opgegeven domeinnaam maakt geen gebruik van de OVH-configuratie (op de DNS-servers).

![Exchange](images/cname_exchange_diagnostic.png){.thumbnail}

### Stap 2: Verkrijg de OVH CNAME-informatie 

Ga naar het tabblad `Verwante domeinen`{.action} en klik op het rode vak `CNAME`{.action} om de vereiste informatie op te halen.

Het CNAME-record zal weergegeven worden op de afbeelding.

![Exchange](images/cname_exchange_informations.png){.thumbnail}

Op dit punt zijn er twee opties:

- **Als uw domein de OVH-configuratie gebruikt**: u kunt de onderstaande wijzigingen aanbrengen in uw OVH Control Panel.

- **Als deze domeinnaam de OVH-configuratie (de DNS-servers) niet gebruikt**: u moet de wijzigingen uitvoeren in de interface die u gebruikt om de configuratie van uw domeinnaam te beheren.

> [!primary]
>
> Als uw domeinnaam bij OVH beheerd is, kunt u controleren of deze onze OVH-configuratie gebruikt vanuit uw Control Panel in `DNS-servers`{.action}, zodra deze op het betreffende domein is geplaatst.
>

### Stap 3: Maak het CNAME-record in de OVH-configuratie

Klik op Domeinen op de dienstenbalk links in uw Control Panel en vervolgens op de betreffende domeinnaam. Selecteer dan het tabblad `DNS-zone`{.action}.

Er zal een tabel verschijnen.  Hiermee wordt de configuratie van uw OVH-domein weergegeven. Het bestaat uit verschillende DNS-records, allemaal gesymboliseerd door een tabelregel.

Als u een CNAME-record wilt toevoegen, klikt u op `Een record toevoege`{.action}.

![Exchange](images/cname_exchange_add_entry_step1.png){.thumbnail}

In het venster dat wordt geopend, krijgt u verschillende DNS-velden aangeboden. Klik op `CNAME`{.action} en vervang de records door informatie uit de Exchange-diagnose.

![Exchange](images/cname_add_entry_dns_zone.png){.thumbnail}

Nadat u deze informatie hebt ingevoerd, klikt u op `Volgende`{.action}. Controleer of de informatie die u hebt ingevoerd correct is en klik vervolgens op `Bevestigen`{.action}.

> [!primary]
>
> Het kan 4 tot 24 uur duren voordat de wijziging volledig is doorgevoerd.
>

Als u wilt controleren of het CNAME-record correct is geconfigureerd, gaat u terug naar de tabel `Verwante domeinen`{.action} voor uw Exchange-dienst. Een groen vak geeft aan dat de domeinnaam correct is geconfigureerd. Als dat niet het geval is, is de configuratie die u hebt aangebracht mogelijk niet volledig gepropageerd.

![Exchange](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Verder

Ga in gesprek met andere communitygebruikers op [https://community.ovh.com](https://community.ovh.com){.external}.