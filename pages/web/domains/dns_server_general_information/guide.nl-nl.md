---
deprecated: true
title: 'Wijziging van de DNS-servers voor een OVH-domeinnaam'
slug: gedeelde_hosting_algemene_informatie_over_dns_servers
excerpt: 'DNS-servers voor een OVH-domeinnaam wijzigen'
section: 'DNS en DNS-zone'
order: 01
---

**Laatste update 22-05-2018**

## Introductie

DNS-servers zijn ontworpen om DNS-configuraties voor domeinnamen op te slaan. Deze configuratieruimtes, die DNS-zones worden genoemd, bevatten technische informatie in de vorm van records. DNS-zones worden meestal gebruikt om uw domeinnaam te koppelen aan de server (of servers) die uw website en e-mailadressen hosten.

Met andere woorden, deze records die op DNS-servers zijn opgeslagen, maken uw domeinnamen toegankelijk op internet.

Deze handleiding legt uit hoe u de DNS-servers voor uw OVH-domeinnaam wijzigen.

## Vereisten

- U moet een domeinnaam hebben geregistreerd bij OVH.
- U moet gemachtigd zijn om de betreffende domeinnaam te beheren vanuit uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

> [!warning]
>
> Als uw domeinnaam niet bij OVH is geregistreerd, moet u de DNS-servers bewerken met behulp van de interface van de serviceprovider die uw domeinnaam beheert.
>

## Instructies

**We raden u ten zeerste aan voorzichtig te zijn wanneer u de DNS-servers van een domeinnaam bewerkt**: Onjuiste wijzigingen kunnen uw website ontoegankelijk maken en voorkomen dat uw e-mailadressen nieuwe e-mails ontvangen. Door meer te leren over de impact van het aanpassen van DNS-servers, kunt u een beter inzicht krijgen in de wijzigingen die u aanbrengt.

Wanneer u de DNS-servers van uw domeinnaam wijzigt, wijzigt u de DNS-configuratie. De nieuwe configuratie vervangt de oude en wordt opgeslagen op de nieuw ingestelde DNS-servers. Technisch gebruikt het domein dan een nieuwe DNS-zone.

Echter:

- De inhoud van de oude DNS-configuratie wordt niet automatisch gerepliceerd naar de nieuwe configuratie. Zorg ervoor dat uw nieuwe configuratie alle informatie bevat die nodig is om de aan uw domeinnaam gekoppelde diensten correct te laten werken (bijvoorbeeld uw website en e-mailadressen).

- Als u slechts één element van uw huidige DNS-configuratie wilt bewerken (bijvoorbeeld één DNS-record), raden we u aan onze handleiding over het bewerken van de DNS-zone te raadplegen: [Wijziging van een OVH DNS-zone](https://docs.ovh.com/nl/domains/hosting_hoe_wijzig_ik_mijn_dns_zone/){.external}.

> [!warning]
>
> Voordat u begint met het aanbrengen van wijzigingen, moet u ervoor zorgen dat de wijzigingen die u gaat aanbrengen, uw domeinnaam niet ontoegankelijk maken. Als u hier niet zeker van bent, neem dan aub contact op met de persoon die u verzoekt deze wijzigingen aan te brengen.
>

### Stap 1: Toegang tot het beheer van de DNS OVH-zone van uw domein

Log eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik op `Domeinen`{.action} in de dienstenbalk aan de linkerkant, kies dan de betreffende domeinnaam. Ga naar het `DNS-servers`{.action}-tabblad.

De tabel die verschijnt, toont de DNS-servers die momenteel zijn ingesteld met OVH voor uw domeinnaam. Verschillende DNS-servers kunnen worden vermeld, met een rij in de tabel voor elke server.

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Stap 2: Bewerk de DNS-servers van uw domein

Klik op de knop `Wijzig DNS-servers`{.action} om met het bewerken van DNS-servers te beginnen.

Vervang in de tekstvelden de huidige DNS-serverdetails met de informatie voor de nieuwe servers die u wilt instellen. Als u meer servers aan de huidige lijst wilt toevoegen, klikt u op het pictogram `+`{.action}, rechts van de laatste tabelregel. Er verschijnt dan een extra rij in de tabel, met tekstvelden die u kunt invullen.

Nadat u deze informatie hebt ingevoerd, klikt u op `Configuratie toepassen`{.action}. De statussen voor de DNS-servers worden vervolgens in de tabel bijgewerkt met de nieuwe informatie die u zojuist hebt verstrekt.

> [!primary]
>
> Door op de knop `DNS-servers opnieuw instellen`{.action} te klikken, kunt u de huidige DNS-servers wijzigen door ze automatisch opnieuw in te stellen op de oorspronkelijke OVH DNS-servers. We raden u aan deze optie alleen te gebruiken als u de DNS-servers van OVH opnieuw wilt gebruiken. 
>

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

### Stap 3: Wacht tot de wijzigingen volledig zijn doorgevoerd

Nadat u de vereiste wijzigingen hebt aangebracht, moet u wachten tot ze volledig effectief zijn. Er moet rekening worden gehouden met twee opeenvolgende termijnen:

- De wijziging aan de OVH-kant moet in acht worden genomen door de organisatie die de extensie van uw domeinnaam beheert. U kunt de voortgang hiervan volgen in uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} door naar het gedeelte `Domeinen`{.action} op de dienstenbalk aan de linkerkant te gaan, en vervolgens `Lopende procedures (‘Bewerkingen in uitvoering’)`{.action}.

- Nadat de wijziging door de organisatie die uw domeinnaamextensie beheert, in aanmerking is genomen, moet u maximaal 48 uur wachten voordat de door u doorgevoerde wijzigingen volledig van kracht zijn.

## Verder

[Wijziging van een OVH DNS-zone](https://docs.ovh.com/nl/domains/hosting_hoe_wijzig_ik_mijn_dns_zone/){.external}.

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.