---
deprecated: true
title: 'Configuratie van een dynamische DNS voor een domeinnaam'
slug: hosting_dynhost
excerpt: 'Ontdek hoe u een dynamisch DNS-record (DynHost) voor uw OVH domeinnaam kunt configureren'
section: 'DNS en DNS-zone'
legacy_guide_number: g2024
updated: 2018-07-19
---

**Laatste update 09-06-2018**

## Introductie

Een Domain Name System (DNS) -zone is het configuratiebestand van een domeinnaam. Het is samengesteld uit technische informatie, ook wel 'records' genoemd. Om een aantal redenen, zoals het hosten van uw eigen gaming-server zonder een vast IP-adres, kan het dynamisch updaten van een DNS-record essentieel zijn om langdurige onderbrekingen van de dienst te voorkomen. 

**Deze handleiding legt uit hoe u een dynamisch DNS-record (DynHost) voor uw OVH domeinnaam kunt configureren**

## Vereisten

- U moet gemachtigd zijn om de betreffende domeinnaam te beheren vanuit uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.
- De opgegeven domeinnaam maakt geen gebruik van de OVH-configuratie (op de DNS-servers).
- Het DynHost-record dat u gaat maken, kan niet al bestaan als een A-record in de OVH DNS-zone van uw domeinnaam.

> [!warning]
>
> - Als uw domeinnaam geen OVH DNS-servers gebruikt, moet u contact opnemen met de serviceprovider die de configuratie beheert om erachter te komen welke aanpak u moet volgen.
> 
> - Als uw domeinnaam is geregistreerd bij OVH, kunt u controleren of de domeinnaam onze configuratie gebruikt. Ga hiervoor naar uw [Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, selecteer het betreffende domein en ga naar het tabblad `DNS-servers`{.action}.
>

## Instructies

### Stap 1: Creëer een DynHost-gebruikersnaam.

De eerste stap bestaat uit het aanmaken van een DynHost-gebruikersnaam. Hiermee kunt u vervolgens het dynamische DNS-record dat u wilt maken bijwerken. Log hiervoor eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik op `Domeinen`{.action} in de dienstenbalk aan de linkerkant, en kies de betreffende domeinnaam. Ga naar het `DynHost`{.action}-tabblad.

![dynhost](images/use-dynhost-step1.png){.thumbnail}

Klik op de knop `Toegang beheren`{.action} en vervolgens op `Een gebruikersnaam maken`{.action}. Voer in het popup-venster de volgende informatie in:

|Informatie|Omschrijving|
|---|---|
|Gebruikersnaam-suffix|Definieer een suffix (achtervoegsel) voor de DynHost-gebruikersnaam die u aan het maken bent.|
|Subdomein|Geef het subdomein op waarvoor u het dynamische DNS-record maakt.|
|Het wachtwoord|Stel een wachtwoord in voor de DynHost-gebruikersnaam en bevestig deze.|

Nadat u alle vereiste velden hebt ingevuld, klikt u op `Bevestigen`{.action}. De gebruikersnaam verschijnt dan in de tabel op de huidige pagina. Herhaal deze stap indien nodig, als u extra DynHost-gebruikersnamen nodig hebt.

![dynhost](images/use-dynhost-step2.png){.thumbnail}

### Stap 2: Creëer het dynamische DNS-record (DynHost).

Deze tweede stap omvat het aanmaken van het DNS-record die dynamisch moet worden bijgewerkt. Ter herinnering: het mag in de OVH DNS-zone van uw domeinnaam nog niet bestaan als een A-record. Om dit te controleren en indien nodig het A-record te verwijderen, kunt u onze handleiding lezen over het [bewerken van een OVH DNS-zone](https://docs.ovh.com/nl/domains/hosting_hoe_wijzig_ik_mijn_dns_zone/){.external}.

Als u klaar bent om het DynHost-record te maken, gaat u naar het tabblad `DynHost`{.action} en klikt u vervolgens op `DynHost toevoegen`{.action}. Voer in het popup-venster de volgende informatie in:

|Informatie|Omschrijving|
|---|---|
|Subdomein|Voer het subdomein in waarnaar het DNS-record dynamisch moet worden bijgewerkt. Dit subdomein moet identiek zijn aan het subdomein dat u hebt ingevoerd toen u de DynHost-gebruikersnaam maakte.|
|Target IP|Voer het IP-adres in dat momenteel door het DNS-record moet worden gebruikt. In overeenstemming met het DynHost-principe wordt het IP-adres dan bijgewerkt.|

Nadat u alle vereiste velden hebt ingevuld, klikt u op `Bevestigen`{.action}. Het DynHost-record verschijnt dan in de tabel op de huidige pagina. Herhaal deze stap indien nodig, als u extra DynHost-records nodig hebt.

![dynhost](images/use-dynhost-step3.png){.thumbnail}

### Stap 3: Automatiseer de DynHost-wijziging.

Nu de gebruikersnaam en het DynHost-record zijn aangemaakt, omvat deze laatste stap het automatiseren van updates van het DNS-record, zodat deze dynamisch wordt uitgevoerd. Hiervoor moet u een client gebruiken die regelmatig controleert of het target IP is gewijzigd, zodat het kan worden bijgewerkt zoals vereist.

> [!warning]
>
> U moet op uw eigen kennis vertrouwen om de client in te stellen en te configureren. Hieronder vindt u enige informatie over hoe u verder moet gaan. We raden u echter aan om contact op te nemen met een gespecialiseerde provider als u problemen ondervindt. We kunnen u hier niet zelf mee helpen. 
>

Er is een breed scala aan opties hiervoor, dus houd er rekening mee dat deze client mogelijk al op uw server of computer is geïnstalleerd. Anders is deze mogelijk al beschikbaar op de interface van uw router, als deze compatibel is. Nadat u de client hebt gekozen en geïnstalleerd, moet u deze configureren met behulp van de details voor de DynHost-gebruikersnaam die u in stap 1 hebt gemaakt.

Afhankelijk van de client die u gebruikt, moet u mogelijk een update-URL-adres opgeven, evenals verdere informatie over de DynHost-gebruikersnaam en het betreffende subdomein. Als dit het geval is, gebruik dan het onderstaande URL-sjabloon en zorg ervoor dat de generieke informatie wordt vervangen door uw eigen informatie:

> https://www.ovh.com/nic/update?system=dyndns&hostname=**$HOSTNAME**&myip=**$IP**

|Informatie|Vervang met|
|---|---|
|$HOSTNAME|Het subdomein waarvoor u de DNS-configuratie wijzigt.|
|$IP|Het nieuwe target IP-adres.|

Om te controleren of het target IP-adres is bijgewerkt, gaat u naar het tabblad `DynHost`{.action} in het Control Panel. Controleer het IP-adres dat in de kolom `Target`{.action} wordt weergegeven.

![dynhost](images/use-dynhost-step4.png){.thumbnail}

## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.