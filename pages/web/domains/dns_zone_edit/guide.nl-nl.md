---
deprecated: true
title: Wijziging van een OVH DNS-zone
excerpt: Leer hoe u een OVH DNS-zone vanaf uw Control Panel kunt bewerken
slug: hosting_hoe_wijzig_ik_mijn_dns_zone
section: DNS en DNS-zone
order: 03
---

**Laatste update 13-03-2018**

## Introductie

Een Domain Name System (DNS) -zone is het configuratiebestand van een domeinnaam. Het is samengesteld uit technische informatie, ook wel 'records' genoemd. DNS-zones worden meestal gebruikt om uw domeinnaam te koppelen aan de server (of servers) die uw website en e-mailadressen hosten.

**Leer hoe u een OVH DNS-zone vanaf uw Control Panel kunt bewerken.**

## Vereisten

- U moet gemachtigd zijn om de betreffende domeinnaam te beheren vanuit uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}
- De opgegeven domeinnaam maakt geen gebruik van de OVH-configuratie (op de DNS-servers).

> [!warning]
>
> - Als uw domeinnaam de OVH DNS-servers niet gebruikt, moet u het aanpassen vanuit de interface van de provider die de configuratie van uw domeinnaam beheert.
> - Als uw domeinnaam is geregistreerd bij OVH, kunt u controleren of de domeinnaam onze configuratie gebruikt. Ga hiervoor naar uw [Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, selecteer het betreffende domein en ga naar het tabblad `DNS-servers`{.action}.
>

## Instructies

**We raden u ten zeerste aan voorzichtig te zijn wanneer u een DNS-zone bewerkt.** Onjuiste wijzigingen kunnen uw website ontoegankelijk maken of voorkomen dat uw e-mailadres nieuwe e-mails ontvangt.

Door te begrijpen wat elk van deze records doet, krijgt u een beter inzicht in de wijzigingen die u aanbrengt als u de DNS-zone van uw domeinnaam bewerkt. We adviseren de onderstaande tabel te lezen, die beschrijvingen biedt voor elk record.

|Soort record|Omschrijving|  
|---|---|
|A|Het A-record wordt gebruikt om een domeinnaam naar een IPv4-adres te verwijzen. Bijvoorbeeld het IP-adres van de server waarop uw website wordt gehost.|
|AAAA|Het AAAA-record wordt gebruikt om een domeinnaam naar een IPv6-adres te verwijzen. Bijvoorbeeld het IP-adres van de server waarop uw website wordt gehost.|
|CNAME|Met het CNAME-record kan een domeinnaam het IP-adres van een andere domeinnaam gebruiken door ze aan elkaar te koppelen, volgens het alias-principe. Zo is *www.mypersonaldomain.ovh* bijvoorbeeld een alias van *mypersonaldomain.ovh*, dit zou betekenen dat *www.mypersonaldomain.ovh* gebruik zou maken van de IP-adressen van *mypersonaldomain.ovh*.|
|MX|Het MX-record wordt gebruikt om een domeinnaam naar een e-mailserver te verwijzen. Bijvoorbeeld het IP-adres van de server waarop uw website wordt gehost. Uw serviceprovider heeft mogelijk meerdere e-mailservers. Als dit het geval is, moet u meerdere MX-records maken.|
|SRV|Het SRV-record wordt gebruikt om informatie te definiëren over het adres van een server die een service beheert. Dit record kan bijvoorbeeld het adres van een SIP-server of het adres van een server definiëren waarmee een e-mailclient automatisch kan worden geconfigureerd met behulp van autodiscover.|
|TXT|Het TXT-record wordt gebruikt om een gekozen waarde (in tekstformaat) toe te voegen aan de DNS-instellingen van uw domeinnaam. Dit record wordt vaak gebruikt tijdens het verificatieproces.|
|SPF|Het SPF-veld is bedoeld om potentiële identiteitsdiefstal te voorkomen met e-mailadressen die uw domeinnaam gebruiken. Dit record geeft bijvoorbeeld aan dat alleen de e-mailserver van uw e-mailprovider moet worden geïdentificeerd als een legitieme bron voor verzending. Voor meer informatie hierover, kunt u onze handleiding over [Toevoeging van een SPF-record aan de DNS-configuratie van uw domeinnaam](https://docs.ovh.com/nl/domains/het_spf_veld/){.external} raadplegen.|
|CAA|Het CAA-record wordt gebruikt om certificaatautoriteiten weer te geven die bevoegd zijn om SSL-certificaten voor een domeinnaam af te geven.|

### Stap 1: Krijg toegang tot het beheer van de DNS OVH-zone van uw domein

Log eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik op `Domeinen`{.action} in de dienstenbalk aan de linkerkant, kies dan de betreffende domeinnaam. Ga naar het `DNS-zone`{.action}-tabblad.

De tabel die wordt geopend, geeft de configuratie van uw domeinnaam weer bij OVH. Het bestaat uit verschillende DNS-records, allemaal gesymboliseerd door een tabelregel. U kunt de tabelinhoud filteren op DNS-recordtype of op domeinnaam.

![dnszone](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### Stap 2: Bewerk de DNS-zone van uw domeinnaam

U kunt de OVH DNS-zone van uw domeinnaam bewerken door DNS-records toe te voegen, te wijzigen of te verwijderen. Er zijn twee manieren om dit te doen:

- **De zone handmatig wijzigen in de tekstmodus: alleen voor gebruikers met geavanceerde technische kennis.** Klik in het `DNS-zone`{.action} tabblad op `Bewerken in tekstmodus`{.action}, en volg de aangegeven stappen.

- **Gebruik onze configuratie-assistenten.**

Vanaf dit punt behandelt deze handleiding alleen de configuratie via onze assistenten.

> [!primary]
>
> Noteer de informatie die u wilt wijzigen in uw DNS-zone. Als u uw DNS-zone aanpast omdat een serviceprovider u dit heeft gevraagd, moet de serviceprovider u een lijst met te bewerken records hebben verstrekt.
>

- **Voeg een nieuw DNS-record toe**

Als u een nieuw DNS-record wilt toevoegen, blijft u op het tabblad `DNS-zone`{.action} van uw Control Panel en klikt u op `Record toevoegen`{.action} aan de rechterkant van de tabel. Selecteer het DNS-recordtype en voer vervolgens de stappen uit.

Zorg ervoor dat het record nog niet bestaat en dat deze niet naar een andere target verwijst. Om dit te controleren, kunt u inhoud filteren op recordtype of domein. Als het record al bestaat, wijzigt u deze aan de hand van de hieronder beschreven stappen.

![dnszone](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

- **Wijziging van een bestaand DNS-record **

Als u een DNS-record wilt wijzigen, blijft u op het tabblad `DNS-zone`{.action} in uw Control Panel staan. Klik op het tandwielpictogram rechts van het record dat u wilt bewerken. Klik vervolgens op `Record bewerken`{.action} en volg de aangegeven stappen.

![dnszone](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

- **Verwijdering van een DNS-record **

Als u een DNS-record wilt verwijderen, blijft u op het tabblad `DNS-zone`{.action} in uw Control Panel staan. Klik op het tandwielpictogram rechts van het record dat u wilt bewerken. Klik vervolgens op `Record verwijderen`{.action} en volg de aangegeven stappen.

U kunt meerdere records tegelijk verwijderen door ze aan de linkerkant van de tabel aan te vinken en vervolgens op `Verwijderen`{.action} te klikken.

![dnszone](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

### Stap 3: Wacht tot de wijzigingen zijn doorgevoerd

Nadat u de OVH DNS-zone van uw domeinnaam hebt gewijzigd, moet u een maximum van 24 uur toestaan voordat de wijzigingen volledig worden doorgevoerd en effectief zijn.

Als u, de volgende keer dat u uw OVH DNS-zone bewerkt, wilt dat de propagatietijd korter is, kunt u deze  inkorten door de TTL (*Time To Live*) aan te passen die van toepassing is op alle DNS-records.
Ga hiervoor naar het tabblad `DNS-zone`{.action} in uw Control Panel, klik op `Standaard TTL`{.action} en volg de aangegeven stappen. 

U kunt ook de TTL van een individueel DNS-record wijzigen. U kunt dit slechts voor één record tegelijk doen, door ze te bewerken of in te stellen terwijl u records toevoegt.

## Verder

[Algemene informatie over DNS-servers](https://docs.ovh.com/nl/domains/gedeelde_hosting_algemene_informatie_over_dns_servers/){.external}.

[Toevoegen van een SPF-veld aan de configuratie van uw domeinnaam](https://docs.ovh.com/nl/domains/het_spf_veld/){.external}.

[Bescherm uw data tegen DNS Cache Poisoning met DNSSEC](https://www.ovhcloud.com/nl/domains/dnssec/){.external}.

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.