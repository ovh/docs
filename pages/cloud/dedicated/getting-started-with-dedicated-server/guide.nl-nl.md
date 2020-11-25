---
deprecated: true
title: 'Aan de slag met uw dedicated server'
slug: eerste-stappen-dedicated-server
excerpt: 'Enkele tips over hoe u uw nieuwe dedicated server kunt beheren'
section: 'Aan de slag'
---

**Laatste update 16-08-2018**

## Introductie

Een dedicated server is een fysieke server in een van onze datacenters. In tegenstelling tot webhostingplannen (beschreven als ‘shared’), die technisch worden beheerd door OVH, bent u volledig verantwoordelijk voor het beheer van uw dedicated server.

**Deze handleiding beschrijft de eerste stappen met uw dedicated server.**

> [!warning]
>
> OVH levert machines waarvoor alleen u verantwoordelijk bent. Omdat wij geen toegang hebben tot deze machines, kunnen we er geen beheerderstaken op uitvoeren. Het is aan u om het softwarebeheer en de beveiliging voor het dagelijks gebruik ervan te verzekeren.
> 
> Wij stellen u deze handleiding ter beschikking om u zo goed mogelijk te begeleiden bij deze dagelijkse taken. We raden u echter aan om contact op te nemen met een gespecialiseerde dienstprovider als u problemen of twijfels hebt over het beheren, gebruiken of beveiligen van een server. Meer informatie in het gedeelte ‘Verder’ in deze handleiding.
>


## Vereisten

* U moet beschikken over een [dedicated server](https://www.ovh.nl/dedicated_servers/){.external} in uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} in het gedeelte `Dedicated`{.action}, dan `Dedicated Servers`{.action}. 


## Instructie

### Inloggen op uw server

#### Linux 

Wanneer uw dedicated server voor het eerst wordt ingesteld, ontvangt u een e-mail met uw wachtwoord voor root-toegang.  Met root-toegang kunt u inloggen op uw server via SSH, een beveiligd communicatieprotocol.  U hebt toegang tot uw server via een commandoterminal (Linux of MAC) of via software van derden op Windows (zoals PuTTy).

Nadat u de terminal hebt geopend, typt u het volgende commando om u in te loggen op uw server, waarbij u de tekst achter het @-symbool vervangt door de vereiste informatie (IP-adres of serverreferentienaam).  De referentienaam van uw server begint altijd met **ns**.

- Voorbeeld met een IP-adres:

```sh
ssh root@IPv4_van_uw_server
```

- Voorbeeld met een serverreferentie:

```sh
ssh root@naam_referentie_van_uw_server
```

#### Windows

Wanneer uw dedicated server voor het eerst wordt ingesteld, ontvangt u een e-mail met uw wachtwoord voor admin-toegang.  U moet deze inloggegevens gebruiken om in te loggen op de server via het *Remote Desktop Protocol (RDP)*. Wanneer u bent ingelogd, begeleidt Windows u bij de eerste installatie.

### Uw dedicated server installeren of opnieuw installeren

Ga naar uw serverpagina in uw [Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} en klik vervolgens in `Algemene informatie` op `...`{.action} en dan op `Opnieuw installeren`{.action} in het gedeelte `Systeem (OS)`.

![Opnieuw installeren](images/reinstalling-your-server-01.png){.thumbnail} knop

Selecteer in het volgende scherm `Installeren vanaf een OVH sjabloon`{.action} (om een van onze installatiesjablonen te gebruiken) of `Installeer een van uw sjablonen`{.action} (om uw sjabloon te gebruiken) en klik vervolgens op `Volgende`{.action}.

![Modelselectie](images/reinstalling-your-server-02.png){.thumbnail}

Selecteer het besturingssysteem dat u wilt installeren en klik op `Volgende`{.action}.

![Selecteer functies](images/reinstalling-your-server-03.png){.thumbnail}

Volg de rest van de instructies op het scherm en klik vervolgens op `Bevestigen`{.action} om door te gaan met de installatie.


> [!primary]
>
> Sommige besturingssystemen of platforms, zoals Plesk en Windows, vereisen de aanschaf van een licentie voorafgaand aan de installatie. U kunt deze kopen via OVH in uw [Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} in het `Dedicated`{.action}-gedeelte, vervolgens in `Licenties`{.action} of bij een reseller. U moet het dan handmatig, via het besturingssysteem zelf, of via uw [Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} integreren. 
> 


### Beveilig uw dedicated server

Zoals eerder aangegeven in het gedeelte 'Introductie' van deze handleiding, bent u de beheerder van uw VPS. U bent daarbij verantwoordelijk voor uw data en de beveiliging van uw machine. De volgende tips helpen u uw server te beveiligen:

* Houd uw besturingssysteem up-to-date.
* Houd uw software up-to-date.
* Wijzig uw standaard SSH-poort (poort 22) en kies een andere poort.
* Wijzig uw root-wachtwoord. 
* Maak een nieuwe systeemgebruiker met beperkte toegang voor dagelijks gebruik.

Meer informatie is te vinden in onze [handleiding](https://docs.ovh.com/nl/dedicated/beveiligen-dedicated-server/){.external}.


### Configuratie van een netwerk

#### IP-bridge-modus

Bridge-modus wordt door bedrijven ingezet om een wereldwijd netwerk van twee of meer communicatienetwerken, of twee of meer netwerksegmenten te maken.

Deze configuratie wordt voornamelijk in virtualisatie gebruikt, zodat elke virtuele machine een eigen openbaar IP-adres heeft.

Zie onze handleiding [Configuring a network bridge](https://docs.ovh.com/gb/en/dedicated/network-bridging/){.external} voor meer informatie.

#### IP-aliasing

In IP-alias-modus zijn twee of meer IP-adressen gekoppeld aan dezelfde netwerkinterface. Hierdoor kan uw server meerdere verbindingen met een netwerk maken, elk met een ander doel.

Raadpleeg de bijbehorende [instructies](https://docs.ovh.com/nl/dedicated/network-ipaliasing/){.external} voor meer informatie over het configureren van de IP-alias-modus.

#### Configuratie van IPv6

Alle OVH dedicated servers worden geleverd met een 64/IPv6 blok. Om de adressen van dit blok te gebruiken, moet u eerst een aantal netwerkconfiguratiewijzigingen aanbrengen. Bekijk hiervoor onze handleiding:  [Configuratie van IPv6](https://docs.ovh.com/gb/en/dedicated/network-ipv6/){.external}


### Configuratieproblemen oplossen via IPMI

OVH stelt alle dedicated servers in met een Intelligent Platform Management Interface (IPMI) console, die kan worden uitgevoerd via uw browser of een Java-applet, zodat u direct verbinding kunt maken met uw server, zelfs als er geen netwerkverbinding is. Dit kan u helpen problemen op te lossen die de verbinding van uw server hebben verbroken.

Raadpleeg de handleiding [IPMI gebruiken voor uw dedicated server](https://docs.ovh.com/nl/dedicated/gebruik-ipmi-dedicated-servers/){.external} voor meer informatie.


### Reddingsmodus

Als u een probleem hebt met uw server, is de eerste stap bij het oplossen van problemen het opnieuw opstarten in de reddingsmodus. Om de reddingsmodus te activeren, logt u in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} en gaat u naar de pagina van uw server. Vervolgens gaat u naar `Server status`{.action}, `Algemene informatie`{.action} en `Boot`{.action}.  Klik op `Bewerken`{.action} om de opstartmodus te wijzigen. 

![Startmodus wijzigen](images/rescue-mode-01.png){.thumbnail}

Selecteer op het volgende scherm `Opstarten in reddingsmodus`{.action} en kies `rescue64-pro`{.action} in de vervolgkeuzelijst. Voer uw e-mailadres in het tekstveld in en klik op `Volgende`{.action}.

![Rescue Pro 64](images/rescue-mode-03.png){.thumbnail}

Bevestig uw opties op het volgende scherm en start uw server opnieuw op om de wijzigingen toe te passen.

![Bevestiging en opnieuw opstarten](images/rescue-mode-02.png){.thumbnail}

Uw server zal nu opnieuw opstarten in de reddingsmodus, u ontvangt inloggegevens om in te loggen via het door u opgegeven e-mailadres. Om de reddingsmodus te beëindigen, wijzigt u simpelweg de opstartmodus om op te starten vanaf de harde schijf en start u uw server opnieuw op.

Raadpleeg onze [handleiding](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external} voor meer informatie over hoe u de reddingsmodus kunt gebruiken om problemen met uw server op te lossen.


#### Hardware-diagnose

De hardwaretests die beschikbaar zijn in de reddingsmodus helpen u bij het vaststellen van fysieke storingen die problemen kunnen veroorzaken op uw server.

Als u bent ingelogd op de webinterface van de reddingsmodus, kunt u testen op de volgende hardwarecomponenten:

* RAM
* Harde schijven
* RAID array
* Processor
* Netwerkverbinding

#### Webinterface voor reddingsmodus

![Webinterface](images/rescue-mode-04.png){.thumbnail}

## Verder

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.