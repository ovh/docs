---
deprecated: true
title: 'Het hosten van meerdere websites op uw webhostingplan'
excerpt: 'Ontdek hoe u verschillende sites op uw hostingplan kunt hosten'
updated: 2022-11-04
---

**Laatste update 07-09-2018**

## Introductie

U kunt verschillende websites op één webhostingplan hosten. U kunt dit doen voor zowel OVH-geregistreerde als niet-OVH-geregistreerde domeinen.

Deze handleiding behandelt de stappen voor het hosten van meerdere websites op uw webhostingplan. 

## Vereisten

- U moet beschikken over een [OVH webhostingplan](https://www.ovhcloud.com/nl/web-hosting/){.external}.
- U moet beschikken over meerdere [domeinnamen](https://www.ovhcloud.com/nl/domains/){.external}.
- U moet het recht hebben om de configuratie van uw domeinnaam te wijzigen (via de DNS-zone).
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

## Instructie

### Stap 1: Ga naar het Multisite beheer

Log eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik op `Webhosting`{.action} in de dienstenbalk aan de linkerkant, kies dan het bijbehorende webhostingplan. Ga naar het `Multisite`{.action}-tabblad.

In de onderstaande tabel staan alle domeinen die aan uw webhostingplan zijn toegewezen. Sommige hiervan zijn automatisch gemaakt wanneer uw webhostingplan is opgezet.

> [!primary]
>
> Als u uw website migreert en mogelijk dienstuitval wilt vermijden, kunt u Stap 4: [Zet uw website online](/pages/web/hosting/multisites_configure_multisite#stap-4-zet-uw-website-online){.external} als tweede stap volgen.
>

![multisite](images/access-multisite-ovh.png){.thumbnail}

### Stap 2: Voeg een domeinnaam of subdomein toe

Om een nieuw domein aan uw webhostingplan toe te voegen, klikt u op de knop `Domein of subdomein toevoegen`{.action}, en selecteert u uw domein in het venster dat verschijnt.

- **Toevoegen van een OVH-geregistreerd domein**:

Selecteer een domein in de lijst: alleen de domeinen die de OVH-configuratie gebruiken en zijn ingevoerd als contacten met uw NIC handle worden weergegeven. Kies er een uit de lijst en klik op `Volgende`{.action}. U kunt direct naar stap 3.1 gaan: [Toevoegen van een OVH domein](/pages/web/hosting/multisites_configure_multisite#stap-31-toevoegen-van-een-ovh-geregistreerd-domein){.external}.

- **Voeg een externe domeinnaam toe**

Als de domeinnaam niet in de lijst staat, wordt deze als extern beschouwd (naar uw NIC handle of naar OVH). Als dat het geval is, selecteert u `Een extern domein toevoegen`{.action} en klikt u op `Volgende`{.action}. Ga vervolgens naar stap 3.2: [Toevoegen van een extern domein](/pages/web/hosting/multisites_configure_multisite#stap-32-toevoegen-van-een-externe-domeinnaam){.external}.

![multisite](images/add-multisite-step1.png){.thumbnail}

### Stap 3.1: Toevoegen van een OVH-geregistreerd domein

> [!primary]
>
> Deze stap is alleen van toepassing als u ‘Een OVH-geregistreerd domein toevoegen’ hebt geselecteerd. Voor een niet-OVH-geregistreerde domeinnaam volgt u de handleiding van Stap 3.2: [Toevoegen van een niet-OVH-geregistreerde domeinnaam](/pages/web/hosting/multisites_configure_multisite#stap-32-toevoegen-van-een-externe-domeinnaam){.external}.
>

Pas nu de opties voor het toevoegen van het domein aan. Afhankelijk van het door u gekozen [OVH-webhostingsplan](https://www.ovhcloud.com/nl/web-hosting/){.external}, zijn sommige van de voorgestelde opties mogelijk niet beschikbaar.

|Informatie|Omschrijving|
|---|---|
|Domein|Het door u geselecteerde domein wordt standaard automatisch ingevoerd. U kunt nu subdomeinen invoeren die zijn gerelateerd aan het domein dat u hebt geselecteerd (bijvoorbeeld blog.mypersonaldomain.ovh) en tegelijkertijd het www-subdomein maken (bijvoorbeeld www.mypersonaldomain.ovh). Dit domein is het webadres van de website die u online wilt zetten.|
|Root directory|Stel de map in waar het domein wordt gehost op uw opslagruimte. In deze ruimte moeten de websitebestanden online worden gezet. De directory "blog" kan bijvoorbeeld worden gemaakt voor blog.mypersonaldomain.ovh. Als de map niet bestaat, wordt deze automatisch gemaakt.|
|Activeer IPv6|Schakelt IPv6-protocol op het geselecteerde domein in. Lees meer op [onze IP-pagina](https://www.ovhcloud.com/nl/web-hosting/options/){.external}.|
|SSL|Biedt u een beveiligde verbinding (HTTPS: //) op het geselecteerde domein. Lees meer op [onze SSL-pagina](https://www.ovhcloud.com/nl/web-hosting/options/ssl/){.external}. Door SSL en het CDN (Content Delivery Network) in te schakelen, kunt u ook profiteren van het **HTTP2**-protocol.|
|Activeer de CDN|Schakelt het CDN in (dat de statische elementen van uw website, bijvoorbeeld afbeeldingen, repliceert en in de cache opslaat) op het geselecteerde domein. Lees meer op [onze CDN-pagina](https://www.ovhcloud.com/nl/web-hosting/options/cdn/){.external}. Door SSL en het CDN (Content Delivery Network) in te schakelen, kunt u ook profiteren van het **HTTP2**-protocol.|
|Geogelokaliseerd IP|Biedt u een geogelokaliseerd IP-adres (uit een landenlijst) voor het geselecteerde domein. Lees meer op [onze IP-pagina](https://www.ovhcloud.com/nl/web-hosting/options/){.external}.|
|Activeer Firewall Network|Schakelt een firewall in (queryanalyse) voor het geselecteerde domein. Lees meer op [onze Mod Security-pagina](https://www.ovhcloud.com/nl/web-hosting/options/){.external}.|
|Afzonderlijke logs|Activeert een nieuwe ruimte voor logs op het geselecteerde domein. U moet een domeinnaam kiezen in de lijst. Het geselecteerde domein wordt gebruikt als toegangsnaam voor deze nieuwe ruimte. Lees meer op [onze Statistieken-pagina](https://www.ovhcloud.com/nl/web-hosting/uc-website-traffic-analysis/){.external}.|

Nadat u deze informatie hebt ingevoerd, klikt u op `Volgende`{.action}. Controleer vervolgens de informatie in het weergegeven overzicht.

![multisite](images/add-multisite-step2.png){.thumbnail}

Als u een OVH domein hebt geselecteerd, kunt u de DNS-configuratie automatisch of handmatig configureren.

- **Automatische DNS-configuratie**: vink het vakje aan in het veld `Automatische configuratie (aanbevolen)`{.action}.
- **Handmatige DNS-configuratie**: Deselecteer het vakje in het veld `Automatische configuratie (aanbevolen)`{.action}. De informatie die moet worden gewijzigd, wordt vervolgens weergegeven. Als u de configuratie zelf wilt maken, lees dan de bijbehorende handleiding [Bewerking van de OVH DNS-zone](/pages/web/domains/dns_zone_edit){.external}.

Klik op `Bevestigen`{.action} om het domein toe te voegen. Dit kan tot een uur in beslag nemen. Het kan 4 tot 24 uur duren voordat de wijziging volledig is doorgevoerd.

Nadat het domein is toegevoegd, gaat u naar Stap 4: [Zet een website online](/pages/web/hosting/multisites_configure_multisite#stap-4-zet-uw-website-online){.external}.

### Stap 3.2: Toevoegen van een externe domeinnaam 

> [!primary]
>
> U hoeft deze stap alleen te volgen als u ‘Niet-OVH-geregistreerd domein toevoegen’ hebt geselecteerd (domeinen geregistreerd bij een andere provider dan OVH, die u niet kunt beheren via uw OVH Control Panel). Als u een OVH domein wilt toevoegen, raadpleegt u stap 3.1: [Toevoegen van een OVH domein](/pages/web/hosting/multisites_configure_multisite#stap-31-toevoegen-van-een-ovh-geregistreerd-domein){.external}.
>

Pas nu de opties voor het toevoegen van het domein aan. Sommige opties in uw OVH webhostingplan kunnen niet onmiddellijk worden ingeschakeld nadat u uw domeinnaam hebt toegevoegd. U kunt de opties niet inschakelen totdat u de multisite-instellingen hebt gewijzigd nadat het domein is toegevoegd.

|Informatie|Omschrijving|
|---|---|
|Domein|Voer de domeinnaam in die u wilt overdragen. Indien nodig kunt u ook een subdomein toevoegen (bijvoorbeeld: blog.mypersonaldomain.ovh) en tegelijkertijd het bijbehorende www-subdomein maken (bijvoorbeeld: www.mypersonaldomain.ovh). Dit domein is het webadres van de website die u online wilt zetten. Houd er rekening mee dat u de domeinconfiguratie (de DNS-zone) moet kunnen wijzigen zodat de toevoeging kan worden voltooid.|
|Root directory|Stel de map in waar het domein wordt gehost op uw opslagruimte. In deze ruimte moeten de websitebestanden online worden gezet. De directory "blog" kan bijvoorbeeld worden gemaakt voor blog.mypersonaldomain.ovh. Als de map niet bestaat, wordt deze automatisch gemaakt.|
|Activeer IPv6|Schakelt IPv6-protocol op het geselecteerde domein in. Lees meer op [onze IP-pagina](https://www.ovhcloud.com/nl/web-hosting/options/){.external}.|

Nadat u deze informatie hebt ingevoerd, klikt u op `Volgende`{.action}. Controleer vervolgens de informatie in het weergegeven overzicht.

![multisite](images/add-multisite-external-step1.png){.thumbnail}

Aangezien u een extern OVH domein hebt geselecteerd, is eerst een bevestiging vereist, zodat we er zeker van kunnen zijn dat u daadwerkelijk over de benodigde rechten beschikt om het domein toe te voegen. Vervolgens wordt een bericht weergegeven waarin van u wordt gevraagd de DNS-configuratie van dit domein te bewerken. 

Controleer de weergegeven informatie en klik vervolgens op de knop `Bevestigen`{.action}. Het domein is nu tijdelijk toegevoegd, zodat u de DNS-configuratie kunt bewerken.

> [!warning]
>
> U moet deze wijzigingen uitvoeren voordat uw domein kan worden toegevoegd. Als u dit niet doet, wordt de toevoeging van uw domein geannuleerd.
>

Bewerk de configuratie van het domein (de DNS-zone) via de interface van de provider die het domein beheert. Als de provider OVH is, lees dan de bijbehorende handleiding [Bewerken van de OVH DNS-zone](/pages/web/domains/dns_zone_edit){.external}. Nadat u uw domein hebt geconfigureerd, kan het tussen 4 en 24 uur duren alvorens de wijzigingen volledig zijn doorgevoerd.

De elementen die moeten worden aangepast in de DNS-configuratie:

|Veld|Waar kan deze informatie worden gevonden?|Omschrijving|
|---|---|---|
|TXT|Klik op het tabblad `Multisite`{.action} op de **ovhcontrol token-configuratie**|Hiermee kan OVH ervoor zorgen dat alle toevoegingen aan domeinen van derden legitiem zijn. Zorg ervoor dat u het TXT-record maakt met het subdomein **ovhcontrol** (bijvoorbeeld ovhcontrol.mypersonaldomain.ovh).|
|A en AAAA|Op het tabblad `Algemene informatie`{.action}, naast **IPv4** en **IPv6**|Dit laat uw domein de website weergeven die u online zult plaatsen met behulp van uw webhostingplan.|

### Stap 4: Zet uw website online

Nadat u uw domeinnaam hebt toegevoegd, hoeft u alleen nog maar uw website online te zetten. Ter herinnering: maak deze wijziging in de hoofdmap die u in de vorige stap hebt opgegeven.

Om u hierbij te helpen, kunt u OVH 1-klik modules gebruiken, die u een kant-en-klare websitestructuur bieden. De website wordt vervolgens automatisch geïnstalleerd in de eerder geconfigureerde hoofdmap. U kunt meer informatie vinden over onze 1-klik modules in onze handleiding: [Installatie van een site met 1-klik modules](/pages/web/hosting/cms_install_1_click_modules){.external}. 

Als u uw website echter handmatig wilt installeren, verzamelt u alle gerelateerde bestanden en plaatst u ze online in de bijbehorende hoofdmap in uw opslagruimte. Raadpleeg onze handleiding [Publiceren van een website op uw webhosting](/pages/web/hosting/hosting_how_to_get_my_website_online){.external} voor meer informatie over het handmatig installeren van uw site.

> [!primary]
>
> Als u meerdere websites wilt toevoegen, moet u deze stap een aantal keren uitvoeren.
>
> We raden u aan voorzichtig te zijn met het aantal websites dat u host op uw webhostingplan. Hoe meer websites u host, hoe hoger de vraag naar uw toegewezen resources. Onze [webhostingpagina](https://www.ovhcloud.com/nl/web-hosting/){.external} toont het aantal websites dat u op uw plan kunt hosten.
>

## Verder

[Installatie van een site met 1-klik modules](/pages/web/hosting/cms_install_1_click_modules){.external}

[Wijziging van mijn OVH DNS-zone](/pages/web/domains/dns_zone_edit){.external}

[Publiceren van een website op uw webhosting](/pages/web/hosting/hosting_how_to_get_my_website_online){.external}

Ga in gesprek met andere communityleden op [https://community.ovh.com](https://community.ovh.com/en/){.external}