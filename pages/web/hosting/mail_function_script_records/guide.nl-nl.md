---
deprecated: true
title: 'Monitoring en beheer van geautomatiseerde e-mails in uw webhosting'
slug: web_hosting_monitoren_van_automatische_e-mails
excerpt: 'Ontdek hoe u geautomatiseerde e-mails, die vanuit uw OVHcloud-webhosting worden verzonden, kunt monitoren en beheren'
section: Diagnostisch
---

**Laatste update 22-05-2018**

## Introductie

Geautomatiseerde e-mails zijn berichten die via scripts worden verzonden. Ze worden bijvoorbeeld gebruikt in contactformulieren op uw website en stellen uw webgebruikers in staat u e-mails te sturen.

Deze handleiding legt uit hoe u geautomatiseerde e-mails, die vanuit uw OVHcloud-webhosting worden verzonden, kunt monitoren en beheren.

## Vereisten

- U moet beschikken over een [OVHcloud-webhosting plan](https://www.ovh.com/nl/shared-hosting/){.external}.
- U moet ingelogd zijn op uw [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}

> [!primary]
>
> Deze handleiding is alleen relevant voor e-mails die worden verzonden met behulp van scripts die zich bevinden in uw OVHcloud-webhostingsplan.
>
> Wilt u e-mailadressen beheren die zijn opgenomen in uw MX Plan of in uw [OVHcloud-webhosting](https://www.ovh.com/nl/shared-hosting/){.external}? Ga naar het gedeelte `Emails`{.action} van uw [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.
>

## Instructies

In uw [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} kunt u geautomatiseerde e-mails controleren en beheren die vanuit uw OVHcloud-webhosting zijn verzonden. Log eerst in op uw OVHcloud Control Panel, klik op `Webhosting`{.action} in de dienstenbalk aan de linkerkant, kies dan het bijbehorende webhosting. Klik vervolgens op `Meer +`{.action} en vervolgens op `E-mailscripts`{.action}.

Met deze handleiding kunt u leren hoe u geautomatiseerde e-mails, die vanuit uw OVHcloud-webhosting worden verzonden, kunt monitoren en beheren.

![hosting](images/monitoring-automatic-emails-step1.png){.thumbnail}

### Volg geautomatiseerde e-mailzendingen

De `E-mailscripts`{.action}-pagina bevat verschillende soorten informatie, die u kunt gebruiken om door het script gegenereerde geautomatiseerde e-mailactiviteiten in één oogopslag te bekijken.

|Informatie|Details|
|---|---|
|Service status|Toont de huidige status van een dienst die geautomatiseerde e-mails verzendt vanuit uw webhosting. Een status in een groen vakje betekent dat e-mailverzending operationeel is, terwijl een status in een rood vakje betekent dat e-mails niet langer worden verzonden. Afhankelijk van deze status, varieert de manier waarop e-mail wordt verzonden. Raadpleeg voor meer informatie hierover het gedeelte [Verzending van geautomatiseerde e-mails beheren](https://docs.ovh.com/nl/hosting/web_hosting_monitoren_van_automatische_e-mails/#verzendstatus-beheren-voor-geautomatiseerde-e-mails){.external} in de handleiding.|
|Stuur foutmeldingen naar|Ontvang dagelijks foutmeldingen op een e-mailadres van uw keuze. U kunt hiervoor een e-mailadres instellen door op de knop `Ontvanger wijzigen`{.action} te klikken. Dit rapport bevat e-mails die zijn verzonden vanuit uw webhosting en naar OVHcloud zijn teruggestuurd, omdat ze geen ontvanger konden bereiken. Door op de knop `E-mails met foutmeldingen`{.action} te klikken, kunt u ook op elk gewenst moment rapporten lezen via uw OVHcloud Control Panel.|
|Totaal aantal verzonden e-mails|Geeft het totale aantal geautomatiseerde e-mails weer dat is verzonden sinds de creatie van uw OVHcloud-webhosting.|
|Vandaag verzonden e-mails |Toont het totale aantal geautomatiseerde e-mails dat alleen vandaag is verzonden.|
|Totaal aantal e-mails met foutmeldingen|Geeft het totale aantal geautomatiseerde e-mails weer dat is verzonden sinds u uw webhosting bestelde, maar werd teruggestuurd naar OVHcloud met foutmeldingen omdat deze de ontvangers niet konden bereiken.|
|Log van verzonden e-mails|Geeft een grafiek weer die het logbestand vertegenwoordigt van e-mails die in de loop van de vorige dagen zijn verzonden vanuit uw webhosting.|

> [!primary]
>
> Om te voorkomen dat het geautomatiseerde e-mailsysteem van uw webhosting wordt misbruikt, raden we ten zeerste aan een beveiligingssysteem (bijvoorbeeld een captcha-test) in te stellen voor de formulieren op uw website die worden gebruikt voor het verzenden van e-mails (zoals een contactformulier).
>

![hosting](images/monitoring-automatic-emails-step2.png){.thumbnail}

Als u merkt dat uw door het script gegenereerde e-mails niet langer worden verzonden, maar de servicestatus nog steeds e-mailverzending mogelijk maakt, adviseren wij:

- **Controleer de scripts voor het verzenden van e-mails**: de scripts kunnen de e-mails mogelijk niet verzenden vanwege een syntaxisfout. Controleer de inhoud van uw scripts, corrigeer ze indien nodig en probeer het opnieuw.

- **Test van e-mailverzending via een testscript**: schrijf een testscript dat een e-mail verzendt naar uw persoonlijke e-mailadres. Als u de e-mail kunt ontvangen, betekent dit dat uw e-mailverzendingsscripts fouten bevatten. Afhankelijk van uw kennis hierover, is het mogelijk om testscripts op internet te vinden;

- **E-mails verzenden zonder de SMTP-server te gebruiken**: geef geen SMTP-server op in uw scriptparameters. Als u een interface hebt voor het beheren van het verzenden van e-mail vanaf uw website, moet u ervoor zorgen dat deze parameter kan worden gewijzigd in de configuratie van uw website.

### Verzendstatus beheren voor geautomatiseerde e-mails

Op de pagina `E-mailscripts`{.action} zijn er verschillende knoppen die u kunt gebruiken om geautomatiseerde e-mails te beheren die vanuit uw webhosting worden verzonden. Afhankelijk van de servicestatus zijn sommige opties mogelijk niet beschikbaar.

|Acties|Details|
|---|---|
|Verzenden blokkeren|Blokkeert automatische e-mails van uw webhosting. Zodra u het verzenden hebt geblokkeerd, worden door het script gegenereerde e-mails niet verzonden en worden deze maximaal 72 uur in een wachtrij opgeslagen.|
|Blokkering opheffen|Blokkeert geautomatiseerde e-mails verzonden vanuit uw webhosting. Dit zorgt er ook voor dat e-mails die zijn opgeslagen in de openstaande wachtrij worden verzonden naar ontvangers.|
|E-mails opschonen|Verwijdert de e-mails die zijn opgeslagen in de openstaande wachtrij en deblokkeert de e-mails die worden verzonden.|

Als u acties wilt uitvoeren, klikt u op de betreffende knop en vervolgens op `Bevestigen`{.action}. In sommige gevallen duurt het enkele minuten voordat de actie die u wilt uitvoeren volledig effectief is.

![hosting](images/monitoring-automatic-emails-step3.png){.thumbnail}

## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.