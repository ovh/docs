---
title: Het hosten van meerdere websites op uw webhostingplan
slug: multisite-configuratie-meerdere-websites
excerpt: Leer hoe u meerdere websites op uw webhostingplan kunt hosten
section: Aan de slag
---

**Laatste update 23-02-2018**

## Introductie

U kunt verschillende websites op één webhostingplan hosten. U kunt dit doen voor zowel OVH-geregistreerde als niet-OVH-geregistreerde domeinen.

Leer hoe u meerdere websites op uw webhostingplan kunt hosten

## Vereisten

- U moet beschikken over een [OVH-webhosting plan](https://www.ovh.nl/shared-hosting/){.external}{.external}.
- U moet beschikken over meerdere [domeinnamen](https://www.ovh.nl/domains/){.external}.
- U moet het recht hebben om de configuratie van uw domeinnaam te wijzigen (via de DNS-zone).
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instructies

### Stap 1: Ga naar het beheer van Multisite

Log eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, klik op `Webhosting`{.action} in de dienstenbalk aan de linkerkant, kies dan het bijbehorende webhostingplan. Ga naar het `Multisite`{.action}-tabblad.

De weergegeven tabel bevat alle domeinnamen die aan uw webhostingplan zijn toegevoegd. Sommige hiervan zijn automatisch gemaakt wanneer uw webhostingplan is opgezet.

> [!primary]
>
> Als u uw website migreert en mogelijk dienstuitval wilt vermijden, kunt u [Stap 4: *Zet uw website online*](https://docs.ovh.com/nl/hosting/multisite-configuratie-meerdere-websites/#stap-4-zet-uw-website-online){.external} volgen als tweede stap.
>

![multisite](images/access-multisite-ovh.png){.thumbnail}

### Stap 2: Voeg een domeinnaam of subdomein toe

Om een nieuw domein aan uw webhostingplan toe te voegen, klikt u op de knop `Domein of subdomein toevoegen`{.action}, en selecteert u uw domein in het venster dat verschijnt.

- **Toevoegen van een OVH-geregistreerd domein**: Selecteer een domein in de lijst: alleen de domeinen die de OVH-configuratie gebruiken en zijn ingevoerd als contacten met uw NIC handle worden weergegeven; Kies er een uit de lijst en klik op `Volgende`{.action}. Als u deze optie hebt gekozen, gaat u naar [Stap 3.1: *Toevoegen van een OVH-geregistreerd domein*](https://docs.ovh.com/nl/hosting/multisite-configuratie-meerdere-websites/#stap-31-toevoegen-van-een-ovh-geregistreerd-domein){.external}.

- **Voeg een externe domeinnaam toe**: U moet de domeinnaam in de volgende stap invoeren. Let op: om de domeinnaam met succes toe te voegen, moet u geautoriseerd zijn om de configuratie aan te passen (via de DNS-zone). Als u deze optie hebt gekozen, gaat u naar [Stap 3.2: *Toevoegen van een extern domein*](https://docs.ovh.com/nl/hosting/multisite-configuratie-meerdere-websites/#stap-32-toevoegen-van-een-externe-domeinnaam){.external}.

![multisite](images/add-multisite-step1.png){.thumbnail}

### Stap 3.1: Toevoegen van een OVH-geregistreerd domein

> [!primary]
>
> Deze stap is alleen van toepassing als u ‘Een OVH-geregistreerd domein toevoegen’ hebt geselecteerd. Voor een niet-OVH-geregistreerde domeinnaam volgt u de handleiding van [Stap 3.2: *Toevoegen van een extern domein*](https://docs.ovh.com/nl/hosting/multisite-configuratie-meerdere-websites/#stap-32-toevoegen-van-een-externe-domeinnaam){.external}.
>

Blijf in het gebied `Multisite`{.action} van uw Control Panel, in het gedeelte `Een domein of subdomein toevoegen`{.action}. Nadat u de OVH-geregistreerde domeinnaam hebt geselecteerd, moet u de toevoeging ervan personaliseren. Afhankelijk van het door u gekozen [OVH-webhostingsplan](https://www.ovh.nl/shared-hosting/){.external}, zijn sommige van de voorgestelde opties mogelijk niet beschikbaar.

|Informatie|Omschrijving|
|---|---|
|Domein|Het domein dat u hebt geselecteerd, wordt standaard automatisch ingevoerd. U kunt nu subdomeinen invoeren die zijn gerelateerd aan het domein dat u hebt geselecteerd (bijvoorbeeld blog.mypersonaldomain.ovh) en tegelijkertijd het www-subdomein maken (bijvoorbeeld www.mypersonaldomain.ovh).|
|Root directory|Dit is de hoofdmap die zal worden gebruikt om het geselecteerde domein op uw opslagruimte te hosten. Als de map niet bestaat, wordt deze automatisch gemaakt.|
|Activeer IPv6|Schakelt IPv6-protocol op het geselecteerde domein in. Lees meer op [onze IP-pagina](https://www.ovh.nl/shared-hosting/ip.xml){.external}.|
|SSL|Biedt u een beveiligde verbinding (HTTPS: //) op het geselecteerde domein. Lees meer op [onze SSL-pagina](https://www.ovh.nl/ssl/){.external}. Door SSL en het CDN (Content Delivery Network) in te schakelen, kunt u ook profiteren van het **HTTP2**-protocol.|
|Activeer de CDN|Schakelt het CDN in (dat de statische elementen van uw website, bijvoorbeeld afbeeldingen, repliceert en in de cache opslaat) op het geselecteerde domein. Lees meer op [onze CDN-pagina](https://www.ovh.nl/shared-hosting/cdn.xml){.external}. Door SSL en het CDN (Content Delivery Network) in te schakelen, kunt u ook profiteren van het **HTTP2**-protocol.|
|Geogelokaliseerd IP|Biedt u een geogelokaliseerd IP-adres (uit een landenlijst) voor het geselecteerde domein. Lees meer op [onze IP-pagina](https://www.ovh.nl/shared-hosting/ip.xml){.external}.|
|Activeer Firewall Network|Schakelt een firewall in (queryanalyse) voor het geselecteerde domein. Lees meer op [onze Mod Security-pagina](https://www.ovh.nl/shared-hosting/mod_security.xml){.external}.|
|Afzonderlijke logs|Activeert een nieuwe ruimte voor logs op het geselecteerde domein. U moet een domeinnaam kiezen in de lijst. Het geselecteerde domein wordt gebruikt als toegangsnaam voor deze nieuwe ruimte. Lees meer op [onze Statistieken-pagina](https://www.ovh.nl/shared-hosting/website_statistiek.xml){.external}.|

Nadat u deze informatie hebt ingevoerd, klikt u op `Volgende`{.action}.

![multisite](images/add-multisite-step2.png){.thumbnail}

We raden aan de informatie in de samenvatting te controleren.

Nadat u een OVH-geregistreerd domein hebt geselecteerd, kunt u de DNS-zone ook automatisch configureren door `Automatische configuratie`{.action} aan te vinken (aanbevolen). U kunt het ook in een later stadium handmatig configureren, en dit vakje niet aangevinkt laten. Vervolgens wordt de te wijzigen informatie weergegeven.

Klik op `Bevestigen`{.action} om het domein toe te voegen. Als u ervoor hebt gekozen om de DNS-zone van uw domein handmatig in te stellen, kunt u de volgende handleiding gebruiken: [*Wijziging van mijn OVH DNS-zone*](https://docs.ovh.com/nl/domains/hosting_hoe_wijzig_ik_mijn_dns_zone/){.external}.

> [!primary]
>
> Toevoeging van een domeinnaam aan uw webhostingplan neemt maximaal een uur in beslag. Het kan 4 tot 24 uur duren voordat de wijziging volledig is doorgevoerd.
>

Nu u uw domein hebt toegevoegd, kunt u gaan naar [Stap 4: *Zet uw website online*](https://docs.ovh.com/nl/hosting/multisite-configuratie-meerdere-websites/#stap-4-zet-uw-website-online){.external}.

### Stap 3.2: Toevoegen van een externe domeinnaam 

> [!primary]
>
> U hoeft deze stap alleen te volgen als u ‘Niet-OVH-geregistreerd domein toevoegen’ hebt geselecteerd (domeinen geregistreerd bij een andere provider dan OVH, die u niet kunt beheren via uw OVH Control Panel). Voor een niet-OVH-geregistreerde domeinnaam volgt u de handleiding van [Stap 3.1: *Toevoegen van een OVH-geregistreerd domein*](https://docs.ovh.com/nl/hosting/multisite-configuratie-meerdere-websites/#stap-31-toevoegen-van-een-ovh-geregistreerd-domein){.external}.
>

Blijf in het gebied `Multisite`{.action} van uw Control Panel, in het gedeelte `Een domein of subdomein toevoegen`{.action}. Nadat u de OVH-geregistreerde domeinnaam hebt geselecteerd, moet u de toevoeging ervan personaliseren.
Sommige opties in uw [OVH-webhostingplan](https://www.ovh.nl/shared-hosting/){.external} kunnen niet onmiddellijk worden ingeschakeld nadat u uw domeinnaam hebt toegevoegd. U moet deze stap voltooien om ze in te schakelen door de instellingen voor de domeinnaam te wijzigen.

|Informatie|Omschrijving|
|---|---|
|Domein|Voer de domeinnaam in die u aan uw webhostingplan wilt toevoegen. U kunt nu subdomeinen invoeren die zijn gerelateerd aan het domein dat u hebt geselecteerd (bijvoorbeeld blog.mypersonaldomain.ovh) en tegelijkertijd het www-subdomein maken (bijvoorbeeld www.mypersonaldomain.ovh). Ter herinnering: u moet over de juiste rechten beschikken om de configuratie van de domeinnaam (de DNS-zone) te wijzigen om deze toevoeging te voltooien.|
|Root directory|Dit is de hoofdmap die zal worden gebruikt om het geselecteerde domein op uw opslagruimte te hosten. Als de map niet bestaat, wordt deze automatisch gemaakt.|
|Activeer IPv6|Schakelt IPv6-protocol op het geselecteerde domein in. Lees meer op [onze IP-pagina](https://www.ovh.nl/shared-hosting/ip.xml){.external}.|

Nadat u deze informatie hebt ingevoerd, klikt u op `Volgende`{.action}.

![multisite](images/add-multisite-external-step1.png){.thumbnail}

We raden aan de informatie in de samenvatting te controleren.

Als u een niet-OVH-geregistreerde domeinnaam hebt geselecteerd, verschijnt er een bericht waarin u wordt gevraagd de configuratie aan te passen. Controleer de weergegeven informatie (deze kunt u later ook nog terugvinden) en klik vervolgens op `Bevestigen`{.action}.

Configureer de domeinnaam

|Veld|Waar kan deze informatie worden gevonden?|Omschrijving|
|---|---|---|
|TXT|Klik op het tabblad `Multisite`{.action} op de ovhcontrol token-configuratie|Hiermee kan OVH ervoor zorgen dat alle toevoegingen aan domeinen van derden legitiem zijn. Zorg ervoor dat u het TXT-record maakt met het subdomein **ovhcontrol** (bijvoorbeeld ovhcontrol.mypersonaldomain.ovh).|
|A en AAAA|Op het tabblad `Algemene informatie`{.action}, naast **IPv4** en **IPv6**|Dit laat uw domein de website weergeven die u online zult plaatsen met behulp van uw webhostingplan.|

Wanneer u op bevestigen drukt, wordt de domeinnaam tijdelijk toegevoegd. U kunt nu de configuratie wijzigen (via de DNS-zone) vanaf de interface van uw domeinprovider. Nadat u uw domein hebt geconfigureerd, kan het tussen 4 en 24 uur duren alvorens de wijzigingen volledig zijn doorgevoerd.

> [!warning]
>
> U moet deze wijzigingen uitvoeren voordat uw domein kan worden toegevoegd. Als u dit niet doet, wordt de toevoeging van uw domein geannuleerd.
>

Nu u uw domein hebt toegevoegd en de configuratie ervan hebt gewijzigd, kunt u gaan naar [Stap 4: *Zet uw website online*](https://docs.ovh.com/nl/hosting/multisite-configuratie-meerdere-websites/#stap-4-zet-uw-website-online){.external}.

### Stap 4: Zet uw website online

Nadat u uw domeinnaam hebt toegevoegd, hoeft u alleen nog maar uw website online te zetten.

Om u hierbij te helpen, kunt u OVH 1-klik modules gebruiken, die u een kant-en-klare websitestructuur bieden. U kunt meer informatie vinden over onze modules met 1 klik door onze handleiding: [*Installatie van uw website met 1-klik modules*](https://docs.ovh.com/nl/hosting/1-klik-modules/){.external} te raadplegen.

Als u meerdere websites wilt toevoegen, moet u deze stap een aantal keren uitvoeren.

We raden u aan voorzichtig te zijn met het aantal websites dat u host op uw webhostingplan. Hoe meer websites u host, hoe hoger de vraag naar uw toegewezen resources. Onze [webhostingpagina](https://www.ovh.nl/shared-hosting/){.external} toont het aantal websites dat u op uw plan kunt hosten.

## Verder

[Installatie van een website met 1-klik modules](https://docs.ovh.com/nl/hosting/1-klik-modules/){.external}.

[Wijziging van mijn OVH DNS-zone](https://docs.ovh.com/nl/domains/hosting_hoe_wijzig_ik_mijn_dns_zone/){.external}.

Ga in gesprek met andere communityleden op [https://community.ovh.com](https://community.ovh.com){.external}.