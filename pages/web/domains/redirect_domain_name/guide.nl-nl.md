---
deprecated: true
title: Omleiding van een door OVH beheerde domeinnaam
excerpt: Lees meer over de verschillende omleidingstypen en hoe u er een kunt maken voor een door OVH beheerde domeinnaam
updated: 2022-10-06
---

**Laatste update 01-02-18**

## Introductie

U kunt domeinnaamomleiding inzetten om uw domein om te leiden naar een nieuw doel. Er zijn verschillende soorten omleidingen, die elk geschikt zijn voor specifieke behoeften.

Lees meer over de verschillende omleidingstypen en hoe u er een kunt maken voor een door OVH beheerde domeinnaam

## Vereisten

- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}
- U moet ingelogd zijn op uw webhostingplan (als u een .htaccess-bestand wilt toevoegen).

## Instructies

### Begrijp wat domeinnaamomleiding is

Voordat u een omleiding voor uw domeinnaam maakt, is het belangrijk om te begrijpen waarvoor deze wordt gebruikt. U kunt het gebruiken om uw domeinnaam om te leiden naar een nieuw doel - meestal een andere domeinnaam.

Er zijn verschillende redenen waarom u een omleiding wilt gebruiken - meestal wordt deze gebruikt om de naam van een website te wijzigen. In dit geval leidt het webgebruikers, die nog steeds toegang hebben tot uw oude domeinnaam, automatisch om naar de nieuwe.

U kunt op verschillende manieren een domeinnaamomleiding maken:

- **vanaf het OVH Control Panel**: met behulp van een configuratie-assistent om uw omleiding in te stellen.

- **het gebruik van een methode die programmeervaardigheden vereist**: u moet de omleiding zelf in een bestand maken (meestal een *.htaccess-bestand*).

Houd er rekening mee dat het instellen van een omleiding van invloed zal zijn op de SEO-ranking van uw website. Pas op met de wijzigingen die u aanbrengt en neem indien nodig contact op met een SEO-specialist.

### Leid een domeinnaam om vanaf het Control Panel

Zodra u bent ingelogd op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, in de dienstenbalk aan de linkerkant, gaat u naar het `Domeinen`{.action}-gedeelte (*1*op de afbeelding hieronder), dan naar het tabblad `Redirection`{.action} (*2* op de afbeelding hieronder).

De tabel geeft actieve omleidingen voor uw domeinnaam weer.

Als u een omleiding wilt toevoegen, klikt u op `Een omleiding toevoegen`{.action} (*3* op de vorige afbeelding).

![Hoofdpagina voor omleidingen](images/create_redirection_global.png){.thumbnail}

Voer in het venster dat verschijnt de domeinnaam (of het subdomein) in die u wilt omleiden. Dit is de omleidingsbron.

![Stap 1 voor het toevoegen van een omleiding](images/adding_redirection_1.png){.thumbnail}

U moet nu het doel kiezen waarnaar u de domeinnaam wilt laten omleiden. Er zijn twee keuzes:

- **omleiden naar een URL**

Leid een domeinnaam om naar een andere domeinnaam. Deze oplossing is ideaal als u de domeinnaam van uw website wijzigt.

- **omleiden naar een OVH-server of elders**

Wijzig de DNS-configuratie van een domeinnaam en voer een ander doel in (A-record, AAAA-record of CNAME-record). Deze oplossing is ideaal als uw website niet langer wordt gehost door dezelfde hostingprovider, terwijl de domeinnaam is geregistreerd bij dezelfde registrar.
U kunt dit ook doen als uw domeinnaam de OVH-configuratie gebruikt, door deze binnen het Control Panel aan te passen (zie [Hoe wijzig ik mijn DNS-zone?](/pages/web/domains/dns_zone_edit){.external})

Vanaf hier zal deze handleiding zich alleen richten op omleidingen **naar een URL**. Neem voor de andere optie contact op met uw serviceprovider om na te gaan welke DNS-records u moet wijzigen om uw domein om te leiden.

![Stap 2 voor het toevoegen van een omleiding](images/adding_redirection_2.png){.thumbnail}

Voor omleidingen naar een URL kunt u nu het omleidingstype kiezen dat u wilt instellen. Er zijn twee keuzes:

|Soort omleiding|Omschrijving|
|---|---|
|Zichtbaar|De domeinnaam die u in uw browser typt (het vorige adres) wordt omgeleid naar de nieuwe domeinnaam. Hierdoor wordt de URL die in uw internetbrowser wordt weergegeven, vervangen door het nieuwe adres.|
|Verborgen|De domeinnaam die u in uw browser typt (het vorige adres) zal niet worden omgeleid naar de nieuwe domeinnaam. U hebt nog steeds toegang tot het vorige adres, dat de website die op de nieuwe domeinnaam wordt gehost, weergeeft via een overlay genaamd *iframe*. Houd er rekening mee dat deze actie niet compatibel is met alle websites en van invloed kan zijn op de SEO-ranking van uw website.|

![Kies tussen zichtbare en verborgen omleiding](images/redirection_3xx_1.png){.thumbnail}

#### Voor zichtbare omleiding

U heeft twee keuzes voor **zichtbare omleiding**.

|Soort omleiding|HTTP-Code|Omschrijving|
|---|---|---|
|Permanent zichtbaar|301|Dit is het ‘standaard’ type omleiding.|
|Tijdelijk zichtbaar|302|Dit omleidingstype kan worden gebruikt voor een bepaalde tijdsperiode (bijvoorbeeld voor tijdelijke of seizoensevenementen). SEO-ranking is lager met een 301-omleiding.|

Nadat u uw keuze hebt gemaakt, voert u het omleidingsdoel in (de URL waarnaar uw domeinnaam moet verwijzen).

![Kies tussen permanente of tijdelijke omleiding](images/redirection_3xx_2.png){.thumbnail}

Zodra de informatie is ingevuld, klikt u op `Volgende`{.action}, gaat u na of de informatie die verschijnt correct is, en klikt u vervolgens op `Bevestigen`{.action}.

> [!primary]
>
> Het kan 4 tot 24 uur duren voordat de wijziging volledig is doorgevoerd.
>

#### Voor verborgen omleiding

Voor verborgen omleiding (code HTTP 200) vult u de weergegeven informatie in (URL en opties) en klikt u op `Volgende`{.action}. Controleer of de informatie die u hebt ingevoerd correct is en klik vervolgens op `Bevestigen`{.action}.

|Velden|Omschrijving|
|---|---|
|Titel|Dit is de titel van uw website. Dit verschijnt bijvoorbeeld als een paginatitel op het tabblad van de browser.|
|Keywords (trefwoorden)|Deze zoekwoorden kunnen door zoekmachines worden gebruikt om de pagina te rangschikken.|
|Omschrijving|Dit is een beschrijving voor uw website. Het kan worden gebruikt door zoekmachines, in hun resultaten.|

> [!primary]
>
> Het kan 4 tot 24 uur duren voordat de wijziging volledig is doorgevoerd.
>

![Creëer een verborgen omleiding](images/invisible_redirection.png){.thumbnail}

### Leid een domeinnaam om via een .htaccess-bestand

.htaccess-bestanden zijn configuratiebestanden waarin commando’s kunnen worden opgegeven. Wanneer een webserver (Apache) een code op uw website uitvoert, worden de commando’s geïnterpreteerd en vervolgens uitgevoerd. Met deze commando’s kunt u omleidingen maken.

U heeft technische vaardigheden nodig om een .htaccess-bestand aan te passen, want als het verkeerd wordt gewijzigd, kan het uw website (of websites) ontoegankelijk maken als u submappen in uw webhostingplan gebruikt. Als u twijfels heeft of hulp wilt bij het aanpassen van uw .htaccess-bestand, raden we u aan contact op te nemen met een webontwikkelaar die gespecialiseerd is op dit gebied.

> [!primary]
>
> Maak alstublieft een **backup van uw .htaccess-bestand** voordat u wijzigingen aanbrengt, zodat u deze indien nodig kunt herstellen naar de vorige versie.
>

- **Redirect permanent**

De verzonden code is een HTTP 301-code. Het zorgt ervoor dat zoekmachines hun links updaten naar het nieuwe adres.

Voeg de volgende code toe om de hele website om te leiden:

```
Redirect permanent / http://new-website.tld/
```

Om een map/bestand te wijzigen:

```
Redirect permanent /old_directory http:///new-website.tld/new_directory
Redirect permanent /old_file.php http://website.tld/new_file.php
```

- **Redirect gone**

Als een bestand niet meer bestaat, raden we aan de *404 - document niet gevonden*-foutmelding te vervangen met meer uitleg, zoals *410 - dit document bestaat niet meer*:

```
Redirect gone /supprime.html
```

- **Redirect seeother**

Als u de bestandsextensie wijzigt, kunt u *seeother* gebruiken om het bestandstype te wijzigen door een HTTP 303-code te verzenden:

```
Redirect seeother /exemple.doc http://site.tld/exemple.pdf
```

- **Redirect Temp**

U kunt een HTTP 302 tijdelijke omleiding gebruiken als u uw bestanden tijdelijk naar een andere website verplaatst:

```
Redirect temp / http://autre_site_web.tld/site/
```

## Verder

[Hoe wijzig ik mijn DNS-zone?](/pages/web/domains/dns_zone_edit){.external}

Ga in gesprek met andere communitygebruikers op [https://community.ovh.com](https://community.ovh.com){.external}.