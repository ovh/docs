---
deprecated: true
title: Het oplossen van de fout 'Website niet geïnstalleerd'
excerpt: Ontdek hoe u de fout 'Website niet geïnstalleerd' kunt oplossen
updated: 2021-05-18
---

**Laatste update 02-03-2018**

## Introductie

De melding ‘Website niet geïnstalleerd’ is bedoeld om aan te geven dat de DNS-zone van uw domeinnaam onjuist is geconfigureerd, of dat de door uw website gebruikte domeinnaam onjuist is geconfigureerd in uw OVH-webhostingplan.

Ontdek hoe u de fout 'Website niet geïnstalleerd' kunt oplossen

## Vereisten

- U moet beschikken over een [OVH-webhostingplan](https://www.ovh.com/nl/shared-hosting/){.external}.
- U moet over de admin-rechten beschikken om uw [OVH-webhostingplan](https://www.ovh.com/nl/shared-hosting/){.external} te beheren (het plan waarop uw website wordt gehost).
- U moet over de juiste rechten beschikken om de configuratie voor de betreffende domeinnaam (ofwel de DNS-zone) te beheren.
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

## Instructies

De "Website niet geïnstalleerd"-pagina wordt alleen weergegeven als:

- De domeinnaam van uw website is onjuist toegevoegd als **Multisite** in de configuratie van uw OVH-webhostingplan.
- De domeinnaam van uw website is niet correct gekoppeld aan uw OVH-webhostingplan, omdat het verkeerde IP-adres is toegevoegd in de configuratie van de DNS-zone.

Door de twee onderstaande stappen te volgen, kunt u deze twee configuraties controleren en de 'Website niet geïnstalleerd'-fout oplossen.

![sitenotinstalled](images/site-not-installed-webpage.png){.thumbnail}

### Stap 1: Controleer de configuratie van uw webhostingplan (Multisite)

Om te controleren of de domeinnaam correct is toegevoegd als een multisite in uw webhostingplan, gaat u naar uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} en klikt u vervolgens op `Webhosting`{.action} op de dienstenbalk aan de linkerkant. Klik op het webhostingplan van de website waarvoor de pagina 'Website is niet geïnstalleerd' wordt weergegeven. Ga naar het `Multisite`{.action}-tabblad.

De weergegeven tabel bevat alle domeinnamen die aan uw webhostingplan zijn toegevoegd. U kunt de zoekbalk gebruiken om naar de betreffende domeinnaam te zoeken.

Zoek naar de betreffende domeinnaam in de tabel. Er zijn verschillende uitkomsten mogelijk:

|Mogelijke uitkomsten: |Wat te doen|
|---|---|
|Het domein wordt weergegeven in de tabel|Dit betekent dat het correct is toegevoegd als multisite aan uw webhosting.  Als u dit binnen de laatste 15 minuten hebt toegevoegd, wacht dan even tot de 'Website niet geïnstalleerd'-pagina wordt gesloten. Als de pagina open blijft, gaat u naar [Stap 2: Controleer de DNS-configuratie van de domeinnaam](/pages/web/hosting/multisites_website_not_installed#stap-2-wijzig-de-dns-configuratie-va-uw-domeinnaam){.external}.|
|Het domein is niet meer weergegeven in de tabel|Als u de domeinnaam hebt toegevoegd maar deze niet meer in de tabel staat, hebt u mogelijk niet alle stappen voltooid die nodig zijn om deze aan uw webhostingplan toe te voegen, of hebt u deze mogelijk per ongeluk verwijderd. In dit geval raden we aan onze handleiding over het [hosten van meerdere websites op uw webhostingplan](/pages/web/hosting/multisites_configure_multisite){.external} te raadplegen, en ervoor te zorgen dat u alle stappen hebt gevolgd toen u uw domeinnaam heeft toegevoegd.|
|Het domein wordt niet weergegeven in de tabel|U hebt deze domeinnaam nog niet als multisite op uw OVH-webhostingplan toegevoegd. Om de domeinnaam toe te voegen, volgt u onze handleiding over het [hosten van meerdere websites op uw webhostingplan](/pages/web/hosting/multisites_configure_multisite){.external}.|

Als u alle hierboven genoemde acties hebt voltooid maar de pagina 'Website niet geïnstalleerd' nog steeds wordt weergegeven, gaat u naar de onderstaande stap.

### Stap 2: Wijzig de DNS-configuratie va uw domeinnaam

Allereerst moet u de OVH-configuratie die u wilt gebruiken controleren. Hiervoor blijft u in het gedeelte van het betreffende webhostingplan, en gaat u naar het tabblad `Algemene informatie`{.action} en noteert u de adressen die verschijnen naast **IPv4** en **IPv6**.

![sitenotinstalled](images/site-not-installed-know-a-records.png){.thumbnail}

U kunt nu de DNS-configuratie van uw domeinnaam controleren. U moet de configuratie controleren met behulp van de interface die wordt aangeboden door de provider die deze configuratie beheert.

> [!primary]
>
> Als uw domeinnaam is geregistreerd bij OVH, kunt u controleren of de domeinnaam onze configuratie gebruikt. Om dit te doen, blijft u in uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klikt u op `Domeinen`{.action} in de dienstenbalk aan de linkerkant, en klikt u vervolgens op de betreffende domeinnaam. Ga naar het `DNS-servers`{.action}-tabblad.
>

Er zijn twee gebieden waar u dit kunt controleren, afhankelijk van de configuratie van uw domeinnaam:

- **Als uw domeinnaam de OVH-configuratie niet gebruikt**: u moet de configuratie controleren met behulp van de interface die wordt aangeboden door de provider die de configuratie van uw domeinnaam beheert.

- **Als uw domeinnaam de OVH-configuratie gebruikt**: u moet de configuratie controleren via uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}. Zodra u op de betreffende domeinnaam heeft geklikt, gaat u naar het tabblad `DNS-zone`{.action}. De DNS-configuratie wordt geopend in een tabel, waarbij elke regel een ander DNS-record vertegenwoordigt. U kunt de tabelinhoud filteren op DNS-recordtype of op domeinnaam.

![sitenotinstalled](images/site-not-installed-edit-ovh-dns-zone.png){.thumbnail}

Gebruik de interface voor het beheren van de configuratie van uw domeinnaam waarvoor de pagina "Website niet is geïnstalleerd" verschijnt, en zorg ervoor dat de onderstaande DNS-records correct zijn geconfigureerd.

|Record|Target|
|---|---|
|A|Het doel (target) moet het **IPv4**-adres zijn dat u eerder hebt genoteerd.|
|AAAA|Het doel (target) moet het **IPv6**-adres zijn dat u eerder hebt genoteerd.|

Er zijn verschillende uitkomsten mogelijk:

|Mogelijke uitkomsten: |Wat te doen|
|---|---|
|De targets zijn correct|Dit betekent dat uw domeinnaam correct is geconfigureerd. Als u uw DNS-configuratie binnen 24 uur hebt geconfigureerd, wacht dan totdat de wijziging volledig is doorgevoerd.|
|De targets zijn niet correct|De configuratie van uw domein moet worden gewijzigd. Als het de OVH-configuratie gebruikt, raden we u aan de handleiding [‘Wijziging van een OVH DNS-zone’](/pages/web/domains/dns_zone_edit){.external} te volgen. Volg in het andere geval de instructies van de gebruikersinterface van uw provider. Wanneer het bewerken is voltooid, is een propagatietijd van maximaal 24 uur vereist voordat de wijziging is doorgevoerd.|

Afhankelijk van de genomen acties in stap 1 en 2, en rekening houdend met de gemelde vertragingen, wordt de ‘Website niet geïnstalleerd’-melding niet langer weergegeven.

## Verder 

[Het hosten van meerdere websites op uw webhostingplan](/pages/web/hosting/multisites_configure_multisite){.external}.

[Wijziging van een OVH DNS-zone](/pages/web/domains/dns_zone_edit){.external}.

Ga in gesprek met andere communityleden op [https://community.ovh.com](https://community.ovh.com){.external}.