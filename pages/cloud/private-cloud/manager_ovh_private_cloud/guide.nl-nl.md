---
deprecated: true
title: Introductie tot het OVH Private Cloud Control Panel
slug: beheer-ovh-private-cloud
excerpt: Ontdek de mogelijkheden van uw Private Cloud Control Panel
section: Aan de slag
---

**Laatste update 29-01-2018**

## Introductie

Het OVH Control Panel biedt u talrijke mogelijkheden voor het instellen van uw Private Cloud infrastructuur. 

**In deze handleiding kunt u deze mogelijkheden ontdekken.**

## Vereisten

- U moet zijn ingelogd op uw[OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} in het `Dedicated`{.action}-gedeelte en vervolgens `Private Cloud`{.action}.
- U moet beschikken over een [Private Cloud](https://www.ovh.com/nl/private-cloud/){.external} product.


## Instructies

### Algemeen

Nadat u hebt geklikt op `Dedicated`{.action} en u `Private Cloud`{.action} van uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} geopend hebt, ziet u een algemeen overzicht van uw Private Cloud:

![Algemene informatie](images/manager_general.png){.thumbnail}

Aan de bovenkant van de pagina, `in afbeelding 1`, vindt u de naam en beschrijving van uw Private Cloud. U kunt dit op maat maken; dit kan erg handig zijn als u over meerdere infrastructuren beschikt. 

Aan de rechterkant,` zoals in afbeelding 2`, vindt u een aantal knoppen:

- Bestel een IP-blok, waarmee u naar het `IP`{.action}-tabblad gaat;
- Bestel een licentie (cPanel, Plesk, etc.), die u naar het tabblad `Licenties`{.action} brengt;
- Schakel al uw resources om naar maandelijkse abonnementen (als u al maandelijks betaalt, wordt dit niet weergegeven);
- Meld u aan voor de Private Cloud-mailinglijst;
- Mijn dienst verwijderen: u ontvangt een e-mail waarin u wordt gevraagd om uw verzoek te bevestigen.


### Algemene informatie

In het eerste gedeelte vindt u algemene informatie over uw Private Cloud

![Algemene informatie](images/general_information.png){.thumbnail}


- Uw Private Cloud-versie.
- De commerciële OVH-referentie.
- Het datacenter, en specifiek, de zone waarin uw infrastructuur is geïnstalleerd.
- De beveiligingstoegang tot uw infrastructuur (`Open` of `Beperkt`) met de beperkingen per IP-bron.
- De gegarandeerde bandbreedtefunctie is binnenkort beschikbaar.
- Het aantal virtuele datacenters in uw infrastructuur.
- Het aantal IP-blokken.


### Opties

U ziet vervolgens de status van de NSX- en vRops-opties.

![Opties](images/options.png){.thumbnail}

In dit voorbeeld zijn de opties NSX en vRops ingeschakeld en kunt u ze uitschakelen als u ze niet of niet langer nodig hebt.

Als u een van deze opties wilt inschakelen, klikt u op de betreffende knop.

![Opties inschakelen](images/options_activation.png){.thumbnail}

Als u op `Details`{.action} klikt bij deze optie, vindt u handleidingen voor elk van de opties.


### Datacenters

Op dit tabblad vindt u een korte samenvatting van de virtuele datacenters in uw Private Cloud-oplossing:

![Datacenter](images/datacenter.png){.thumbnail}

Hieronder vindt u alle informatie over de datacenters.

> [!primary]
>
> U kunt zonder extra kosten een ander datacenter toevoegen vanaf deze pagina.
> 



### Gebruikers

Alle gebruikers die zich op vSphere kunnen inloggen, zijn te vinden in dit gedeelte:

![Gebruikers](images/users.png){.thumbnail}

U kunt een gebruiker aanmaken door rechts op de knop `Gebruiker aanmaken`{.action} te klikken.

Voor elke gebruiker vindt u deze informatie:

- ID;
- e-mailadres (optioneel);
- telefoonnummer (optioneel);
- validatie-token;
- status.

De rechten voor dit gedeelte zijn instellingen voor elke gebruiker. Hiermee kunt u de eerste beheren met behulp van het `OVH-netwerk`{.action}-tabblad en de tweede in hetzelfde gedeelte, maar met failover-IP's.
Als u op het tandwielpictogram rechts van de tabel klikt, verschijnen er verschillende keuzes:

- wijzig de ingangen in deze tabel;
- bekijk en wijzig de rechten van deze gebruiker per datacentrum;
- verander het gebruikerswachtwoord;
- verwijder deze gebruiker.

We zullen de wijziging van rechten per datacenter in meer detail bekijken:

![Gebruikersrechten per datacenter](images/rights_user_datacenters.png){.thumbnail}

- `vSphere-toegang`{.action} - dit zijn de algemene machtigingen van de gebruiker voor vSphere:

|Rechten |Omschrijving|
|---|---|
|Geen|Geen toegang|
|alleen-lezen|alleen-lezen toegang|
|lezen/schrijven|toegang tot lezen/schrijven|
|provider|toegang alleen voor OVH-administrators|

- `Toevoegen van resources `{.action} - met deze knop kunt u al dan niet het recht verlenen om extra resources toe te voegen via de OVH-plugin in de vSphere-client

- `Toegang tot het VM-netwerk`{.action} - voor het beheer van rechten op de sectie openbaar netwerk (`VM-netwerk` in de vSphere-interface genoemd):

|Rechten |Omschrijving|
|---|---|
|Geen|Geen toegang|
|alleen-lezen|alleen-lezen toegang|
|provider|hiermee kunt u virtuele machines (VM) op het openbare netwerk configureren|

- `Toegang tot het V(X)LAN`{.action} - voor het beheren van rechten op het privénetwerk-gedeelte. VXLAN's voor de Hosted Private Cloud-reeks of VLAN's voor de SDDC-reeks:

|Rechten |Omschrijving|
|---|---|
Geen|Geen toegang|
|alleen-lezen|alleen-lezen toegang|
|provider|hiermee kunt u virtuele machines (VM) op het privénetwerk configureren|
|administrator|hiermee kunt u de virtuele switchpoortgroepen beheren (maken, wijzigen of verwijderen, enz.)|

> [!warning]
>
> Gezien het feit dat de rechten worden herschreven, kan de informatie hier worden gewijzigd.
> 


### Veiligheid

De toegangsbeleidsinstellingen voor uw vCenter kunnen op dit tabblad worden gewijzigd:

![Beveiligingsinstellingen](images/security.png){.thumbnail}

U kunt de onderstaande functies en in de tabel configureren met behulp van de tandwielpictogrammen aan de rechterkant. U kunt het volgende configureren: 

- een limiet voor de verbindingssessie;
- het aantal toegestane gelijktijdige verbindingen;
- het toegangsbeleid, beperkt of niet, met een autorisatie per IP-bron.  De IP's staan in de tabel.

Het uitlogbeleid bestaat uit het uitloggen van de eerste of laatste ingelogde gebruiker.
Als in dit voorbeeld 50 gebruikers zijn ingelogd, en een 51ste persoon inlogt, dan wordt de eerste gebruiker die zich had ingelogd, uitgelogd.
Als u de toegangsbeleidsmodus beperkt instelt en geen IP-adres invoert, kan niemand verbinding maken met de vSPhere-client. De virtuele machines zijn echter nog steeds toegankelijk.


### Voortgang

In dit laatste tabblad vindt u de huidige voortgang in uw infrastructuur:

![Voortgang](images/operations.png){.thumbnail}

U kunt nagaan of een bewerking een probleem is tegengekomen, als er een onderhoudsoperatie is gepland, enz.

Als het niet mogelijk is om toegang te krijgen tot de vSphere-client, kan er een doorlopend onderhoud plaatsvinden, op dit tabblad kunt u het controleren.


### Datacenter

In een Private Cloud kunt u meerdere datacenters hebben. U kunt ze vinden door op uw Private Cloud-product te klikken:

![Datacentre Preview](images/datacenter_view.png){.thumbnail}

U kunt de naam van uw datacenter personaliseren door op het potloodpictogram te klikken. U kunt ook een persoonlijke beschrijving toevoegen.
U vindt de belangrijkste informatie over uw datacenter, de reeks (SDDC of DC), het aantal hosts en datastores.
U kunt meerdere datacenters in één Private Cloud hebben als u Hosted Private Cloud- en Software Defined Datacenter-reeksen heeft.


### Hosts

Hier kunt u uw datacenterhosts bekijken:

![Hosts](images/hosts.png){.thumbnail}

In dit gedeelte vindt u: 

- De hostnamen;
- hun profiel (M, L, L+, etc.);
- hun factureringsmethode: als u op uurbasis wordt gefactureerd, kunt u overschakelen naar maandelijkse facturering;
- de hoststatus;
- het aantal gebruikte uren (alleen voor een uurlijkse resource).

Rechts van deze afbeelding kunt u een nieuwe host bestellen, die op maandelijkse basis moet worden betaald.


### Datastores

In dit gedeelte vindt u:

![Datastores](images/datastores.png){.thumbnail}

Hier vindt u: 

- De namen van de datastores;
- informatie over hun grootte;
- de factureringsmethode;
- de status van de datastore;
- het aantal gebruikte uren (alleen voor een uurlijkse resource).

Rechts van deze afbeelding kunt u een nieuwe datastore bestellen, die op maandelijkse basis moet worden betaald.


### Backup

Via het Backup-tabblad kunt u `Veeam backup` activeren door op de knop `Backup activeren`{.action} te klikken:

![Backup](images/backup.png){.thumbnail}

Meer informatie over deze optie kunt u vinden in deze [handleiding](https://www.ovh.nl/private-cloud/opties/veeam.xml){.external}.


### Windows-licentie

Met de `Windows-licentie`{.action} kunt u de Windows SPLA-licentie op uw datacenter activeren door op de knop rechts te klikken:

![ Windows SPLA Licentie ](images/windows_licence.png){.thumbnail}

U kunt [hier](https://www.ovh.nl/private-cloud/opties/images-licences.xml){.external} de tarieven bekijken.


## Verder

Ga in gesprek met andere communitygebruikers op <https://community.ovh.com/en/>.