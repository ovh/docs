---
title: 'De PHP-versie van uw webhosting bewerken'
slug: php-versie-configureren
excerpt: 'Leer hoe u de PHP-versie op uw OVH webhosting kunt wijzigen'
section: PHP
order: 1
---

**Laatste update 08-10-2018**

## Introductie

Er zijn enorm veel verschillende websites op het internet. Met uw [OVH webhosting](https://www.ovh.nl/shared-hosting/){.external} kunt u uw eigen website online zetten, mits deze compatibel is met de [configuratie van onze infrastructuren](https://cluster028.hosting.ovh.net/infos/){.external}. Mogelijk wilt u de door uw hosting gebruikte PHP-versie wijzigen.

**Deze handleiding beschrijft hoe u de PHP-versie op uw webhosting kunt bewerken.**

## Vereisten

- U moet beschikken over een [OVH webhostingplan](https://www.ovh.nl/shared-hosting/){.external}.
- Afhankelijk van de gebruikte methode, hebt u mogelijk toegang nodig tot het beheer van het webhostingplan via het [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager), of de benodigde gegevens om u in te loggen op uw opslagruimte. 

## Instructie

Momenteel bestaan er verschillende versies van de PHP-programmeertaal. Zoals gewoonlijk bieden verbeterde versies verschillende oplossingen en nieuw toegevoegde of verwijderde functies. OVH biedt de nieuwste voornaamste PHP-versies, te vinden op: <https://www.ovh.nl/shared-hosting/php.xml>. 

Aangezien bepaalde functies niet langer kunnen worden onderhouden met nieuwe versies, moet u **nagaan of de nieuwe PHP-versie compatibel is met uw webpagina**.

### Stap 1: Zorg ervoor dat uw website compatibel is

Hoewel OVH verantwoordelijk is voor het installeren van de nieuwste PHP-versies op zijn servers, is het uw verantwoordelijkheid als webmaster om ervoor te zorgen dat uw website altijd up-to-date is en compatibel is met de nieuwste PHP-versies. Er zijn twee opties om dit na te gaan, afhankelijk van de website die u gebruikt.

**Ik gebruik een gebruiksklare website, bijvoorbeeld een Content Management Systeem (CMS) zoals WordPress of Joomla!:** 

- Volg de officiële documentatie van uw CMS-uitgever. 
- Daar zult u informatie vinden over de benodigde technische vereisten voor een goede werking van uw CMS, evenals de procedure voor het updaten ervan.
- Werk zo nodig uw CMS bij en zorg ervoor dat de nieuwe versie compatibel is met uw OVH webhosting.


**Ik gebruik een website op basis van een aangepaste oplossing:** 

- Neem contact op met de webmaster die de website heeft gemaakt.
- Volg de officiële PHP-documentatie. Daar vindt u meer informatie over de migraties naar andere PHP-versies: <http://php.net/manual/en/appendices.php>.
- Werk zo nodig de code van uw website bij en zorg ervoor dat deze compatibel is met uw OVH webhosting.

U kunt ook de PHP-versie bekijken die momenteel door uw hosting wordt gebruikt. Gebruik hiervoor een van de twee mogelijke methoden: 

|Methode|Omschrijving|
|---|---|
|Via het Control Panel|Log eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, klik op `Webhosting`{.action} in de dienstenbalk aan de linkerkant, kies dan het bijbehorende webhostingplan. Op het tabblad `Algemene informatie`{.action} vindt u de huidige versie onder 'Globale PHP-versie'. Als er een blauw, rond pictogram naast de versie verschijnt, wacht dan even totdat de versie is bijgewerkt.|
|Via een script|Creëer een **.php**-script dat alleen de code `<?php phpinfo(); ?>` bevat. Plaats het script online in uw opslagruimte en activeer het door de volledige URL te openen.|

![phpversion](images/change-php-version-step1.png){.thumbnail}

Als u niet kunt verifiëren dat uw site compatibel is met de nieuwe PHP-versie, kunt u, hoewel **we deze methode sterk afraden**, de huidige versie wijzigen en zo nodig terugkeren naar de originele versie. Maar u creëert hiermee wel het risico van een latere storing van uw website. Bovendien kan het zijn dat een van zijn specifieke functies (zelfs als het nog steeds wordt weergegeven na de wijziging) wordt beïnvloed en niet langer werkt. 

Wanneer u klaar bent om de PHP-versie te wijzigen, gaat u naar de volgende stap.

### Stap 2: Wijzig de PHP-versie van uw OVH webhosting

Er zijn twee manieren om de PHP-versie van uw webhosting te wijzigen:

- **Via een configuratiewizard uit uw OVH Control Panel**: deze optie is minder technisch en vereist inloggen op uw Control Panel, waar u een nieuwe PHP-versie kunt kiezen. Volg hiervoor de instructies in de OVH handleiding: [De configuratie van uw webhosting bewerken](https://docs.ovh.com/nl/hosting/bewerking-omgeving-webhosting-configuratie/){.external}.

- **Het handmatig bewerken van een bestand in uw opslagruimte**: deze optie is meer technisch en vereist inloggen op uw opslagruimte, waar u het .ovhconfig-bestand kunt bewerken. Volg hiervoor de instructies in de OVH handleiding: [Configuratie van het .config-bestand op uw webhosting](https://docs.ovh.com/nl/hosting/ovhconfig-bestand-bewerken/){.external}.

Voor de meest geavanceerde techneuten is de wijziging van de PHP-versie via een .htaccess-bestand niet langer mogelijk op de nieuwste [OVH webhostingplannen](https://www.ovh.nl/shared-hosting/){.external}. Het beïnvloeden van de PHP-versie via instellingen in het .htaccess-bestand wordt niet langer ondersteund door onze infrastructuren. Het is absoluut noodzakelijk dat u het .ovhconfig-bestand gebruikt. De bijbehorende procedure is te vinden in de handleiding [Configuratie van het .config-bestand op uw webhosting](https://docs.ovh.com/nl/hosting/ovhconfig-bestand-bewerken/){.external}.

## Verder

[De configuratie van uw webhosting bewerken](https://docs.ovh.com/nl/hosting/bewerking-omgeving-webhosting-configuratie/){.external}

[Configuratie van het .config-bestand op uw webhosting](https://docs.ovh.com/nl/hosting/ovhconfig-bestand-bewerken/){.external}

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.