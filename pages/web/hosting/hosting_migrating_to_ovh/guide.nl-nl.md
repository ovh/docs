---
deprecated: true
title: Migratie van uw website en e-mails naar OVH
slug: migreer-website-naar-ovh
excerpt: Ontdek hoe u uw website en e-mails naar OVHcloud kunt migreren zonder dienstonderbrekingen
section: Eerste stappen
---

**Laatste update 14-02-2018**

## Introductie

In deze handleiding vindt u de benodigde stappen voor het migreren van een website, een of meer databases en uw e-mailadressen naar elk OVH-platform. De procedure kan variëren, als u wilt migreren zonder dienstuitval.

**Ontdek hoe u uw website en e-mails naar OVHcloud kunt migreren zonder dienstonderbrekingen**

## Vereisten

- U moet admin-rechten hebben voor de betreffende domeinnaam.
- U moet toegang hebben tot de bestanden van de website.
- U moet, indien van toepassing, toegang hebben tot de databases van de website.
- U moet beschikken over de gegevens (gebruikersnaam, wachtwoord, servers) waarmee u zich kunt inloggen op uw huidige e-mailadressen.
- U moet ingelogd zijn op uw [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

## Instructie

Om uw website en e-mails naar OVHcloud te migreren, moet u een nauwkeurige migratieprocedure volgen. Deze procedure is verdeeld in verschillende stappen.

|Stappen|Omschrijving| 
|---|---| 
|Bestel het webhostingplan|Dit geeft u een OVH-webhosting waar u uw website kunt hosten en e-mailadressen kunt krijgen.| 
|Draag de website over|Door een volledige backup van uw website te maken, kunt u deze overzetten naar uw nieuwe OVH-webhostingsplan.| 
|Draag de e-mailadressen over|Door vooraf dezelfde e-mailadressen bij OVHcloud aan te maken, kunt u de inhoud vanaf uw oude provider naar OVHcloud overbrengen.| 
|Wijzig de DNS-configuratie van het domein|Door de configuratie van uw domein te wijzigen, gebruikt uw domein de website van OVHcloud (uw webpagina en e-mailadressen) en niet langer de diensten van uw oude provider.| 
|Draag het domein over|Verander de registrar van uw domein en selecteer OVHcloud.| 

Afhankelijk van de registrar waarin uw domeinnaam wordt gearchiveerd, kan de volgorde van de bovenstaande stappen verschillen.

> [!warning]
>
> Sommige domeinregistrars sluiten uw domeinnaamserver af als deze bij hen is geconfigureerd zodra het verzoek tot overdracht naar buiten is ontvangen.
> Dit maakt uw domeinnaam en de bijbehorende diensten ontoegankelijk (bijvoorbeeld uw website en e-mailadressen). We raden u ten zeerste aan om contact op te nemen met de registrar van uw domeinnaam, en hun beleid wat betreft uitgaande overdrachten te controleren.
>

Daarom bieden we twee verschillende soorten migratieprocedures:

- migratie zonder onderbrekingen van de dienst
- migratie met mogelijke dienstonderbreking

### Migratie zonder dienstonderbreking

#### Stap 1: Bestel uw OVH-webhostingplan

Bestel uw webhostingplan op de [OVHcloud](https://ovh.com/){.external}-website. Zorg ervoor dat u geen overdrachtsverzoek voor uw domeinnaam indient - u zult dit in een later stadium doen. Zodra uw betaling is ontvangen, wordt uw webhostingplan opgezet. U ontvangt een bevestigingsmail zodra deze is geïnstalleerd.

#### Stap 2: Draag uw website over

U moet hiervoor verschillende tussenstappen uitvoeren.

|Tussenstappen|Omschrijving|Details|
|---|---|---|
|1|Maak een backup van de website |U moet een volledige backup maken van uw website inclusief alle bestanden, evenals de database (indien van toepassing). Deze volledige website-backup is essentieel voor het migreren van uw website naar OVHcloud.|
|2|Zet uw website online bij OVHcloud|Log in op uw opslag (FTP) om bestanden van uw site te importeren. U moet ze online plaatsen in de ‘**www**’-map. Uw FTP-inloggegevens worden u per e-mail toegestuurd.|
|3|Creëer een OVH-database|Als uw website met een database werkt, moet u een nieuwe database creëren bij OVHcloud vanuit uw [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.|
|4|Import de database-backup|Importeer uw database-backup met de OVH-tool, beschikbaar in uw Control Panel.|
||Link de website aan de nieuwe database|De gegevens die zijn opgeslagen in uw oude database, zijn nog steeds aanwezig in het configuratiebestand van uw website. Wijzig dit bestand in uw OVH-opslagruimte door de informatie voor de OVH-database in te voeren.|

De configuratie van uw domeinnaam blijft ongewijzigd en uw website zal nog steeds het webhostingplan van uw huidige serviceprovider gebruiken om online te blijven.

#### Stap 3: Maak uw e-mailadressen opnieuw aan bij OVH

Nadat u uw website hebt overgedragen, [moet u dezelfde adressen, die u gebruikt bij uw huidige serviceprovider, instellen, maar dan bij OVHcloud](https://docs.ovh.com/nl/emails/webhosting_e-mail_handleiding_het_aanmaken_van_een_e-mailadres/){.external}. Ze moeten op dezelfde manier worden geschreven. In uw [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, in de dienstenbalk aan de linkerkant, gaat u naar het onderdeel `E-mails`{.action}, en klikt u vervolgens op het webhostingplan dat u zojuist hebt besteld (met dezelfde heading als uw domeinnaam). Volg de stappen voor het aanmaken van e-mailadressen door op `Creëer een e-mailadres`{.action} te klikken.

De configuratie van uw domeinnaam blijft ongewijzigd en u ontvangt nog steeds nieuwe e-mails via het e-mailadres dat u bij uw huidige serviceprovider hebt aangemaakt. U moet nog steeds het e-mailadres gebruiken dat is gemaakt met uw huidige serviceprovider voor het verzenden van e-mails.

#### Stap 4: Wijzig de configuratie va uw domeinnaam

Nu u uw website hebt overgedragen en uw e-mailadressen opnieuw hebt aangemaakt bij OVHcloud, moet u vervolgens de configuratie van uw domeinnaam wijzigen. U kunt dit doen door de DNS-servers van uw domeinnaam te wijzigen, deze te vervangen door de OVHcloud DNS-servers (verzonden per e-mail en ook weergegeven in uw [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}). Deze wijziging heeft twee gevolgen:  

- **Technische koppeling van uw domeinnaam aan OVH-oplossingen**: Uw OVH-webhostingplan zal worden gebruikt om uw website weer te geven en u ontvangt nieuwe e-mails op het e-mailadres dat u bij OVHcloud hebt aangemaakt.
- **Voorkoming van dienstuitval:** Als uw registrar besluit uw DNS-servers onmiddellijk te onderbreken zodra u uw domeinnaam overdraagt, worden uw diensten niet beïnvloed, omdat u de OVH-configuratie al zult gebruiken.

> [!warning]
>
> Uw DNS-servers worden gewijzigd in de huidige registrar van uw domeinnaam, het kan ongeveer 24-48 uur duren voordat de wijzigingen volledig zijn doorgevoerd.
>

#### Stap 5: Draag de inhoud van uw e-mailadressen over

U moet hiervoor verschillende tussenstappen uitvoeren.

|Tussenstappen|Omschrijving|Details|
|---|---|---|
|1|Migreer de inhoud van de adressen naar OVHcloud|Met behulp van de OVHcloud Mail Migrator (OMM)[, kunt u de inhoud van uw e-mailadressen die bij uw oude serviceprovider zijn geregistreerd, kopiëren naar de e-mailadressen die bij OVHcloud zijn aangemaakt.|
|2|Maak gebruik van uw e-mailadressen|U heeft via een online applicatie ([Webmail](https://mail.ovh.net/){.external}) toegang tot uw OVH-e-mailadressen. Als u een van uw e-mailadressen hebt geconfigureerd op een e-mailclient (bijvoorbeeld Outlook), dan moet u dit opnieuw configureren en de servergegevens van uw oude serviceprovider vervangen door die van de [OVH-servers](https://docs.ovh.com/nl/emails/webhosting_algemene_informatie_over_ovhs_gedeelde_e-mail/).|

#### Stap 6: Draag uw domeinnaam over naar OVH

U hoeft nu alleen nog maar uw domeinnaam naar OVHcloud over te zetten!  U moet hiervoor verschillende tussenstappen uitvoeren.

|Tussenstappen|Omschrijving|Details|
|---|---|---|
|1|Ontgrendel uw domein|Wanneer een domein is vergrendeld, kan het niet worden overgedragen naar een andere registrar zoals OVHcloud. Daarom moet u het van tevoren ontgrendelen via uw huidige domeinnaamregistrar.|
|2|Verkrijg de transfercode (overdrachtscode)|De overdrachtscode wordt uitgegeven door uw huidige domeinnaamregistrar wanneer u uw domein ontgrendelt.|
|3|Dien het overdrachtsverzoek in bij OVHcloud|U kunt het overdrachtsverzoek vanaf de [OVHcloud](https://ovh.com/){.external}-website indienen.  U moet de eerder verkregen transfercode invoeren.|
|4|Betaal de bestelling|Zodra uw betaling is ontvangen, begint het overdrachtsproces van de domeinnaam.|
|5|Bevestig of wacht op bevestiging bij de overdracht| Deze stap kan variëren, afhankelijk van uw extensie. Wanneer verificatie is vereist, wordt meestal een bevestigingsverzoek per e-mail verzonden. Het bevat instructies voor de procedure die moet worden gevolgd. Volg deze stappen om het overdrachtsverzoek te bevestigen.| 

Zodra de overdracht is voltooid, zijn uw website, e-mailadressen en domeinnaam verplaatst naar OVHcloud zonder dienstonderbreking!

### Migratie met mogelijke dienstonderbreking

#### Stap 1: Bestel de overdracht en hosting van uw diensten bij OVH

U moet hiervoor verschillende tussenstappen uitvoeren.

|Tussenstappen|Omschrijving|Details|
|---|---|---|
|1|Ontgrendel uw domein|Wanneer een domein is vergrendeld, kan het niet worden overgedragen naar een andere registrar zoals OVHcloud. Daarom moet u het van tevoren ontgrendelen via uw huidige domeinnaamregistrar.|
|2|Verkrijg de transfercode (overdrachtscode)|De overdrachtscode wordt uitgegeven door uw huidige domeinnaamregistrar wanneer u uw domein ontgrendelt.|
|3|Plaats de bestelling bij OVHcloud|Voltooi uw bestelling van domeinnaamoverdracht en webhosting op de [OVHcloud](https://ovh.com/){.external}-website U moet de eerder verkregen transfercode invoeren. Wanneer u uw DNS-servers selecteert, geeft u de servers op van uw huidige serviceprovider.|
|4|Betaal de bestelling|Zodra uw betaling is ontvangen, begint het overdrachtsproces van uw domeinnaam en de installatie van uw hosting. **Afhankelijk van het interne beleid van uw huidige registrar, kan een DNS-server worden opgeschort, waardoor alle bijbehorende diensten (met name websites en e-mailadressen) niet beschikbaar zijn.**|
|5|Bevestig of wacht op bevestiging bij de overdracht|Deze stap kan variëren, afhankelijk van uw extensie. Wanneer verificatie is vereist, wordt meestal een bevestigingsverzoek per e-mail verzonden. Het bevat instructies voor de procedure die moet worden gevolgd. Volg deze stappen om het overdrachtsverzoek te bevestigen.|

#### Stap 2: Draag uw website over

U moet hiervoor verschillende tussenstappen uitvoeren.

|Tussenstappen|Omschrijving|Details|
|---|---|---|
|1|Maak een backup van de website |U moet een volledige backup maken van uw website inclusief alle bestanden, evenals de database (indien van toepassing). Deze volledige website-backup is essentieel voor het migreren van uw website naar OVHcloud.|
|2|Zet uw website online bij OVHcloud|Log in op uw opslag (FTP) om bestanden van uw site te importeren. U moet ze online plaatsen in de ‘**www**’-map. Uw FTP-inloggegevens worden u per e-mail toegestuurd.|
|3|Creëer een OVH-database|Als uw website met een database werkt, moet u een nieuwe database creëren bij OVHcloud vanuit uw [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.|
|4|Import de database-backup|Importeer uw database-backup met de OVH-tool, beschikbaar in uw Control Panel.|
|5|Link de website aan de nieuwe database|De gegevens die zijn opgeslagen in uw oude database, zijn nog steeds aanwezig in het configuratiebestand van uw website. Wijzig dit bestand in uw OVH-opslagruimte door de informatie voor de OVH-database in te voeren.|

De configuratie van uw domeinnaam blijft ongewijzigd en uw website zal nog steeds het webhostingplan van uw huidige serviceprovider gebruiken om online te blijven.

#### Stap 3: Maak uw e-mailadressen opnieuw aan bij OVH

**Zodra de overdracht van uw domeinnaam is voltooid**, ontvangt u een e-mail ter bevestiging dat de e-maildienst die bij uw hosting hoort is geïnstalleerd.  Nadat u uw website hebt overgedragen, moet u [dezelfde adressen, die u gebruikt bij uw huidige serviceprovider, bij OVHcloud aanmaken](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}. Ze moeten dezelfde naam hebben.  In uw OVHcloud Control Panel, in de dienstenbalk aan de linkerkant, gaat u naar het onderdeel [E-mails](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, en klikt u vervolgens op het webhostingplan dat u zojuist hebt besteld (met dezelfde naam als uw domeinnaam). Volg de stappen voor het aanmaken van e-mailadressen door op `Creëer een e-mailadres`{.action} te klikken.

De configuratie van uw domeinnaam blijft ongewijzigd en u ontvangt nog steeds nieuwe e-mails via het e-mailadres dat u bij uw huidige serviceprovider hebt aangemaakt. U moet nog steeds het e-mailadres gebruiken dat is gemaakt met uw huidige serviceprovider voor het verzenden van e-mails.

#### Stap 4: Wijzig de configuratie va uw domeinnaam

Nu u uw website en domeinnaam hebt overgedragen en uw e-mailadressen opnieuw hebt aangemaakt bij OVHcloud, moet u vervolgens de configuratie van uw domeinnaam wijzigen. Hiervoor vervangt u de DNS-servers van uw domeinnaam met die van OVHcloud. 

U kunt deze wijzigen vanaf uw [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.  U kunt hierbij de documentatie *[Algemene informatie over DNS-servers](https://docs.ovh.com/nl/domains/gedeelde_hosting_algemene_informatie_over_dns_servers/){.external}* raadplegen. 

Deze wijziging heeft meerdere gevolgen: 

- **Technische koppeling van uw domeinnaam aan OVH-oplossingen**: Uw OVH-webhostingplan zal worden gebruikt om uw website weer te geven en u ontvangt nieuwe e-mails op het e-mailadres dat u bij OVHcloud hebt aangemaakt.
- **Herstel van de beschikbaarheid van uw dienst**: Zelfs als uw bestaande registrar uw DNS-configuratie heeft verwijderd tijdens de migratie, kan de dienst door de wijziging weer beschikbaar zijn. 

> [!warning]
>
> Het kan 24 tot 48 uur duren (propagatietijd) voordat de wijziging volledig is doorgevoerd.
>

#### Stap 5: Draag de inhoud van uw e-mailadressen over

U moet hiervoor verschillende tussenstappen uitvoeren.

|Tussenstappen|Omschrijving|Details|
|---|---|---|
|1|Migreer de inhoud van de adressen naar OVHcloud|Gebruik de [OVHcloud Mail Migrator](https://omm.ovh.net/){.external} (OMM) om de inhoud van uw geregistreerde e-mailadressen van uw oude serviceprovider te kopiëren naar de door OVHcloud aangemaakte e-mailadressen.|
|2|Maak gebruik van uw e-mailadressen|U heeft via een online applicatie ([Webmail](https://mail.ovh.net/){.external}) toegang tot uw OVH-e-mailadressen. Als u een van uw e-mailadressen hebt geconfigureerd op een e-mailclient (bijvoorbeeld Outlook), dan moet u dit opnieuw configureren en de servergegevens van uw oude serviceprovider vervangen door die van de [OVH-servers](https://docs.ovh.com/nl/emails/webhosting_algemene_informatie_over_ovhs_gedeelde_e-mail/).|

Uw website, uw e-mailadressen en uw domeinnaam zijn nu verplaatst naar OVHcloud!

## Verder

[Algemene informatie over gedeelde e-mails](https://docs.ovh.com/nl/emails/webhosting_algemene_informatie_over_ovhs_gedeelde_e-mail/){.external}.

[Algemene informatie over DNS-servers](https://docs.ovh.com/nl/domains/gedeelde_hosting_algemene_informatie_over_dns_servers/){.external}.

[Creatie van een gedeeld e-mailadres](https://docs.ovh.com/nl/emails/webhosting_e-mail_handleiding_het_aanmaken_van_een_e-mailadres/){.external}.

Ga in gesprek met andere communityleden op [https://community.ovh.com](https://community.ovh.com).