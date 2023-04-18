---
deprecated: true
title: Aan de slag met een Cloud Web hostingplan
excerpt: Ontdek hoe u kunt starten met een Cloud Web webhostingplan
updated: 2022-05-04
---

**Laatste update 11-07-2018**

## Introductie

Voor onze nieuwe Cloud Web oplossing hebben we 20 jaar ervaring in webhosting gecombineerd met de kracht van onze Public Cloud. Net als onze standaard hostingplannen worden uw websites gehost op een service die 24/7 wordt beheerd. Cloud Web biedt echter een nog breder scala aan functies en hogere prestatieniveaus voor hardware zoals SSD-schijven.

In deze handleiding wordt uitgelegd hoe u aan de slag kunt met een Cloud Web hostingplan.

## Vereisten

- U moet beschikken over een [Cloud Web plan](https://www.ovhcloud.com/nl/web-hosting/cloud-web-offer/).
- U moet een e-mail hebben ontvangen met daarin de bevestiging dat uw Cloud Web is geïnstalleerd.
- U moet beschikken over een [domeinnaam](https://www.ovhcloud.com/nl/domains/), wat het adres zal worden waarop uw website te vinden zal zijn.
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl).

## Instructiex

### Stap 1: Bepaal uw project 

OVH Cloud Web hosting biedt een bredere keus aan configuratie-opties dan standaard webhostingplannen, zodat u uw plan kunt afstemmen op uw project. Om ervoor te zorgen dat uw project een succes wordt, is het belangrijk om een duidelijk beeld te hebben van uw doelstelling. Hiervoor adviseren wij het volgende:

- **Stel vast wat u precies wilt opzetten**: maakt u bijvoorbeeld een blog of een online winkel? Wilt u een passie delen of uw professionele activiteiten promoten? Het is ten zeerste aan te raden om uw project eerst duidelijk te definiëren voordat u begint.

- **Verdiep u in de technische vereisten voor het opzetten van uw project**: uw project kan specifieke technische benodigdheden hebben. Zorg ervoor dat u er van tevoren bekend mee bent.

- **Ga na of uw project technisch compatibel is met Cloud Web hosting**: heeft u een bepaald runtime software-type of SQL nodig? Als u dit nog niet hebt gedaan, controleert u of wat u nodig hebt beschikbaar is in uw [Cloud Web](https://www.ovhcloud.com/nl/web-hosting/cloud-web-offer/)-hostingplan.

Nadat u de verschillende beschikbare opties hebt onderzocht en uw project zorgvuldig hebt gedefinieerd, kunt u het online gaan toepassen.

### Stap 2: Kies een runtime software-toepassing.

Met Cloud Web kunt u een reeks verschillende codeertalen gebruiken om uw project te bouwen. Als u een andere taal dan PHP wilt gebruiken, wat de standaardselectie is, moet u een 'runtime software-toepassing' selecteren die overeenkomt met uw coderingstaal.

De momenteel beschikbare talen zijn: PHP en Node.js.

Om toegang te krijgen tot de runtime software-toepassingen voor uw Cloud Web hostingplan, meldt u zich aan bij uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klikt u op Webhosting in de dienstenbalk aan de linkerkant en selecteert u vervolgens de naam van het betrokken `Cloud Web`{.action} hostingplan. Ga naar het `Runtime software`{.action}-tabblad.

Wanneer u uw webhostingplan instelt, wordt automatisch een runtime software-toepassing gemaakt. Het is opgenomen als `standaardkeuze` in de tabel die wordt weergegeven. Als u een reeds geïnstalleerde runtime software wilt wijzigen, klikt u op de drie puntjes ernaast en vervolgens op `Wijzigen`{.action}. 

Afhankelijk van welk [Cloud Web](https://www.ovhcloud.com/nl/web-hosting/cloud-web-offer/) hostingplan u hebt gekozen, kunt u ook extra runtime software-toepassingen toevoegen door te klikken op de knop `Acties`{.action} en vervolgens op `Runtime software-applicatie toevoegen`{.action}. Let op: het maximale aantal runtime software-toepassingen varieert, afhankelijk van de Cloud Web-oplossing die u hebt besteld.

Nadat u dit hebt gedaan, moet u ervoor zorgen dat u over de voor uw project vereiste runtime software-toepassing(en) beschikt voordat u doorgaat.

![cloudweb](images/cloud-web-first-steps-step1.png){.thumbnail}

### Stap 3: Creëer omgevingsvariabelen (optioneel).

Als u uw project meerdere keren in verschillende omgevingen (bijvoorbeeld ontwikkeling, testen en productie) wilt inzetten, moet u de variabelen opgeven om ervoor te zorgen dat uw code correct wordt uitgevoerd. Hiervoor vraagt Cloud Web u om omgevingsvariabelen te definiëren die toegankelijk zijn voor de code voor uw website of web-applicatie.

Zo kunt u bijvoorbeeld het .env-bestand in het PHP Laravel-framework weglaten, zoals beschreven in de handleiding: <https://laravel.com/docs/5.6/configuration>.

Als u een omgevingsvariabele wilt toevoegen, blijft u in het gedeelte voor het betreffende Cloud Web hostingplan staan en klikt u op het tabblad `Omgevingsvariabelen`{.action}. Er verschijnt een tabel met de omgevingsvariabelen die voor uw oplossing zijn gemaakt. Als u een nieuwe wilt weergeven, klikt u op de knop `Acties`{.action} en vervolgens op `Een omgevingsvariabele toevoegen`{.action}. Volg de instructies, afhankelijk van de variabele die u wilt maken.

![cloudweb](images/cloud-web-first-steps-step2.png){.thumbnail}

Als u het ontwikkelingskader voor omgevingsvariabelen niet gebruikt of als u alleen de functionaliteit van de variabelen wilt controleren, kunt u een script maken dat deze controle uitvoert. Hieronder staan voorbeelden van twee scripts die u kunnen helpen met dit proces, hoewel ze geen vervanging zijn voor de hulp van een webmaster.

- **Voor PHP**:

```php
<?php echo "ENV: " . $_ENV['DB_DATABASE']; ?>
```

- **Voor Node.js** :

```sh
var http = require('http');

http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  

    response.write( process.env.DB_DATABASE);

    response.end();  
}).listen(80);
```

Zorg ervoor dat de generieke informatie in deze scripts (bijvoorbeeld DB_DATABASE) wordt vervangen door de betreffende omgevingsvariabele.

### Stap 4: Configureer de extra domeinen en Multisite (optioneel).

Nu de technische omgeving van uw Cloud Web hostingplan gereed is, kunt u aanvullende domeinnamen hierop configureren als multisite. Hiermee kunt u uw opslagruimte delen, bijvoorbeeld om meerdere webpagina's te onderhouden. Als u dit voor uw project wilt doen, klikt u in het gedeelte voor het Cloud Web hostingplan op het tabblad `Multisite`{.action}.

De weergegeven tabel bevat alle domeinnamen die aan uw webhostingplan zijn toegevoegd. Sommige hiervan zijn automatisch aangemaakt tijdens de opzet van uw webhostingplan. Als u een nieuwe wilt toevoegen, klikt u op de knop `Een domein of subdomein toevoegen`{.action} en volgt u de weergegeven instructies. De methode kan verschillen, afhankelijk van of de betreffende domeinnaam is geregistreerd bij OVH. 

We raden u ten zeerste aan om extra voorzichtig te zijn wanneer u de volgende informatie invoert:

- **root directory**\: de map waar de ingevoerde domeinnaam moet worden gehost op de opslagruimte voor uw Cloud Web hostingplan. 

- **Runtime software-applicatie**\: de runtime software-toepassing die eerder is ingesteld en die wordt gebruikt door de multisite die u momenteel configureert.

> [!warning]
>
> Als u een domeinnaam hebt toegevoegd die als extern wordt beschouwd, moet u een TXT-record met de naam **ovhcontrol** toevoegen aan zijn DNS-configuratie. Op deze manier kan OVH ervoor zorgen dat de toevoeging van het domein wordt goedgekeurd. Daarom is het toevoegen van dit TXT-record een essentiële stap. Als u dit niet doet, wordt de toevoeging van uw domein geannuleerd. 
>

Herhaal deze stap als u verschillende domeinnamen aan uw Cloud Web hostingplan wilt toevoegen. Raadpleeg de volgende handleiding voor meer informatie over het toevoegen van een domeinnaam als multisite: [Het hosten van meerdere websites op uw webhostingplan](/pages/web/hosting/multisites_configure_multisite){.external}.

![cloudweb](images/cloud-web-first-steps-step3.png){.thumbnail}

### Stap 5: Stel uw project in op het Cloud Web hostingplan.

Er zijn twee manieren om uw project op te zetten. Nadat u de techniek heeft gekozen die het beste bij u past, herhaalt u het proces zo nodig als u verschillende websites online zet.

#### 1. Gebruik onze 1-klik modules.

Door onze 1-klik modules te gebruiken, krijgt u een kant-en-klaar website-sjabloon die u kunt aanpassen met een verscheidenheid aan thema's, teksten en nog veel meer. OVH biedt vier structuren met zijn 1-klik modules, en u kunt er meer over te weten komen via onze webpagina over[ Een website maken met 1-klik modules](https://www.ovhcloud.com/nl/web-hosting/uc-website/){.external}.

Als u een 1-klik module selecteert, klikt u op de `1-klik modules`{.action} op de Cloud Web-website en klikt u vervolgens op `Module toevoegen`{.action}. U kunt vervolgens kiezen of u het wilt installeren in de 'basismodus' (niet-aanpasbaar) of 'geavanceerd' (aanpasbaar).

Voor meer informatie over onze OVH 1-klik-modules kunt u onze handleiding raadplegen: [Installatie van een website met 1-klik modules](/pages/web/hosting/cms_install_1_click_modules){.external}.

> [!primary]
>
> Om deze modules te gebruiken, moet u de PHP runtime software-applicatie gebruiken.
>

![cloudweb](images/cloud-web-first-steps-step4.png){.thumbnail}

#### 2. Stel uw project handmatig in.

Of u nu een volledig nieuwe website bouwt of een bestaande website migreert - handmatige installatie kan een veel hogere technische vaardigheid vereisen en u moet op uw eigen kennis vertrouwen. We raden u aan om de diensten van een gespecialiseerde provider in te schakelen en/of contact op te nemen met de uitgever van de software voor de dienst als u problemen ondervindt. 

Als u ervoor hebt gekozen uw website handmatig in te stellen, moet u alle website- of applicatiebestanden hebben die u in uw hostingplan zou willen instellen. Als u databases op uw Cloud Web hostingplan hebt gemaakt, moet u ook hun gegevens en inloggegevens bij de hand hebben. Als u een website migreert, zorg er dan voor dat u een backup-kopie maakt van al uw websitebestanden.

Er is geen algemene procedure, omdat het aantal projecten sterk kan variëren. Ons document [Migratie naar het web](/pages/web/hosting/hosting_how_to_get_my_website_online){.external} kan ons echter helpen met de procedures.

### Stap 6: Creëer uw e-mailadressen

Nu u uw project hebt opgezet in uw Cloud Web hostingplan, kunt u beginnen met het maken van e-mailadressen. Als u geen e-mailadressen wilt maken, slaat u deze stap over en gaat u verder met stap 7.

Om een of meer e-mailadressen aan te maken, klikt u in uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} op `E-mails`{.action} in de dienstenbalk aan de linkerkant en kiest u vervolgens de domeinnaam die aan uw Cloud Web hostingplan is gekoppeld.

Om een nieuw e-mailadres aan te maken, klikt u op `Creëer e-mailadres`{.action} en volgt u de weergegeven stappen. Raadpleeg zo nodig onze handleidingen: [Creatie van een e-mailadres met MX Plan](/pages/web/emails/email_creation){.external}.

![cloudweb](images/cloud-web-first-steps-step5.png){.thumbnail}

### Stap 7: Wijzig de configuratie van uw domeinnaam

Bij deze stap dient uw website op uw Cloud Web hosting te zijn geïnstalleerd en uw e-mailadressen zijn aangemaakt. Als uw e-mailadressen niet werken, kan dit zijn omdat uw domeinnaam niet correct is geconfigureerd. Als dit het geval is, of als u niet zeker weet waar de fout zit, raden we u aan deze stap te volgen.

Houd er echter rekening mee dat als u bezig bent met het migreren van uw diensten naar OVH, de wijzigingen die aan de DNS zijn gekoppeld mogelijk ertoe leiden dat uw diensten niet meer beschikbaar zijn als ze niet op het juiste moment worden voltooid. Zoals beschreven in onze handleiding over het [migreren van uw website en e-mails naar OVH](/pages/web/hosting/hosting_migrating_to_ovh){.external}, moet u er rekening mee houden dat u de DNS-servers van uw domein moet bewerken als een laatste deel van het proces.

#### 1. De DNS-records van OVH kennen 

Er zijn verschillende OVH DNS-records. We zullen ons concentreren op twee specifieke records, die uw website toegankelijk houden en u toestaan e-mails te ontvangen op uw OVH-e-mailadressen. Volg de onderstaande instructies om te weten waar u ze kunt vinden:

|DNS-record|Bijbehorende dienst|Waar kan het worden gevonden?|
|---|---|---|
|A|Voor de website|Ga in het [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} naar de sectie `Webhosting`{.action} voor het betreffende Cloud Web hostingplan. Kopieer het IP-adres dat verschijnt naast "IPv4" op het tabblad `Algemene informatie`{.action}.|
|MX|Voor e-mails|Ga in het [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} naar het gedeelte `E-mails`{.action} voor de betreffende domeinnaam. Kopieer de informatie die wordt weergegeven naast 'MX-records' op het tabblad `Algemene informatie`{.action}.|

#### 2. DNS-records verifiëren en/of wijzigen

Nu u meer bekend bent met de OVH DNS-records voor uw Cloud Web hostingplan en uw OVH e-mailoplossing, kunt u controleren of ze correct zijn geconfigureerd en deze indien nodig bewerken. Deze twee wijzigingen moeten worden aangebracht bij de serviceprovider die de DNS-configuratie van uw domeinnaam beheert (DNS-zone).

> [!warning]
>
> - Als uw domeinnaam de OVH DNS-configuratie niet gebruikt, moet u wijzigingen aanbrengen met behulp van de interface die wordt gegeven door de serviceprovider die uw domeinnaam beheert.
> 
> - Als uw domeinnaam is geregistreerd bij OVH, kunt u controleren of de domeinnaam onze DNS-configuratie gebruikt. Ga hiervoor naar uw [Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, selecteer de bijbehorende domeinnaam en ga naar het tabblad `DNS-servers`{.action}.
>

Lees de onderstaande instructies om te zien waar u de wijzigingen moet aanbrengen:

|Gebruikte DNS-configuratie |Waar worden de wijzigingen aangebracht?|
|---|---|
|OVH|Ga in het [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} naar het gedeelte `Domeinen`{.action} voor de betreffende domeinnaam. Verifieer en wijzig de nodige informatie in de tab DNS-zone. Als u verdere hulp nodig heeft, kunt u onze handleiding over het [bewerken van een OVH DNS-zone](/pages/web/domains/dns_zone_edit){.external} lezen.|
|Verder|Via de interface van de serviceprovider die de DNS-configuratie van uw domeinnaam beheert. Neem contact op met uw serviceprovider als u problemen ondervindt bij het maken van deze wijzigingen.|

Nadat u de DNS-configuratie van uw domeinnaam hebt gewijzigd, moet u een maximum van 24 uur toestaan voordat de wijzigingen volledig worden doorgevoerd en effectief zijn. Als u meerdere domeinnamen als multisite aan uw Cloud Web hostingplan hebt toegevoegd, moet u deze twee wijzigingen aanbrengen voor elk van uw domeinnamen. 

### Stap 8: Personaliseer uw website

Deze fase is optioneel als u een bestaande website die al is aangepast, hebt gemigreerd! Als u echter net een nieuwe website hebt opgezet met behulp van onze modules, kunt u deze aanpassen door het thema te bewerken en uw inhoud daarop te publiceren.

Als u hulp wilt bij de functionaliteit van uw website, raden we u aan naar de website van de uitgever hiervan te gaan waar u de nodige documentatie kunt vinden om u te begeleiden.

### Stap 9: Maak gebruik van uw e-mailadressen

U hoeft nu alleen nog maar uw e-mailadressen te gebruiken. Hiervoor stelt OVH een online dienst ter beschikking (webmail): RoundCube. Deze is toegankelijk op het adres: <https://www.ovh.nl/mail/> waar u uw inloggegevens dient in te voeren voor uw bij OVH aangemaakte e-mailadres.

Raadpleeg onze gids voor meer informatie over het gebruik van RoundCube: [Gebruik van RoundCube](/pages/web/emails/email_roundcube){.external}. Indien u uw e-mailadres wilt configureren in een e-mailprogramma of een apparaat (zoals een smartphone of een tablet), raadpleeg dan onze documentatie op: <https://docs.ovh.com/nl/emails/>.

## Verder

[Mijn website verhuizen naar OVH](/pages/web/hosting/hosting_migrating_to_ovh){.external}

[Mijn website online zetten](/pages/web/hosting/hosting_how_to_get_my_website_online){.external}

[Een website installeren met 1-klik-modules](/pages/web/hosting/cms_install_1_click_modules){.external}

[Het hosten van meerdere websites op uw webhostingplan](/pages/web/hosting/multisites_configure_multisite){.external}

[Hoe maak ik een e-mailadres aan](/pages/web/emails/email_creation){.external}

[Gebruik van RoundCube](/pages/web/emails/email_roundcube){.external}

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.