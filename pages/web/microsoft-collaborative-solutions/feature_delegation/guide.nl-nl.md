---
deprecated: true
title: 'Rechten van een Exchange account delen'
slug: exchange_2013_het_geven_van_full_access_rechten_op_een_account
excerpt: 'Ontdek hoe u de rechten van uw Exchange account aan een andere gebruiker kunt geven'
section: 'Functies en delen van Exchange'
updated: 2020-10-24
---

**Laatste update 31-08-2018**

## Introductie

Met Exchange kunt u zakelijke e-mailadressen gebruiken die het voor een team gemakkelijker maken om met verschillende functies te werken. Een van deze functies is de mogelijkheid om specifieke rechten (bijvoorbeeld het verzenden of openen van berichten) te delen tussen verschillende Exchange accounts.

**Deze handleiding geeft informatie over de overdracht van uw Exchange rechten.**

## Vereisten

- U moet beschikken over [Exchange](https://www.ovhcloud.com/nl/emails/){.external}.
- U moet beschikken over minstens twee actieve Exchange accounts op hetzelfde OVH Exchange platform. 
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl).
- U moet toegang hebben tot het Exchange account waarvan rechten worden toegewezen.

## Instructie

Bepaal voordat u begint welke rechten u wil delen. Houd er rekening mee dat wanneer u de rechten deelt, u extra rechten verleent aan een of meer Exchange gebruikers voor dat Exchange account.

|Rechten|Omschrijving|
|---|---|
|‘Verzenden als’-recht|Hiermee kan de gebruiker 'verzenden als' een ander account. De gebruiker die de e-mail verzendt, wordt niet als afzender weergegeven. In plaats daarvan wordt het account waarvoor de gebruiker het recht 'verzenden als' heeft, weergegeven als de afzender. Er wordt niet vermeld dat het bericht door een andere persoon is verzonden.|
|‘Verzenden namens’-recht|Staat de gebruiker toe om namens een ander account te verzenden. De gebruiker die de e-mail verzendt, wordt niet als afzender weergegeven. In plaats daarvan wordt het account waarvoor de gebruiker het recht 'verzenden namens' heeft, weergegeven als de afzender. De e-mail wordt echter voorzien van een opmerking die aangeeft dat de oorspronkelijke afzender anders is.|
|Het recht op toegang |Geeft de gebruiker alleen-lezen toegang tot het account waarvan toegangsrechten zijn toebedeeld. Met dit toegangstype kan de gebruiker geen e-mails verzenden. Hiermee kunnen ze alleen inhoud bekijken.|

> [!warning]
>
> U kunt het recht 'Verzenden als' niet tegelijkertijd gebruiken met het recht 'Verzenden namens'. Er zijn echter wel andere combinaties mogelijk.
> 

Wanneer u het account waaraan u rechten wilt toebedelen, de rechten die u wilt toebedelen en de gebruikers die deze rechten zullen ontvangen, hebt vastgesteld, gaat u naar de volgende stap.

### Stap 1: Uitvoeren van de overdracht

Log in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} om met de bewerking te beginnen. Klik op `Microsoft`{.action} in de dienstenbalk aan de linkerkant en vervolgens op `Exchange`{.action}. Klik vervolgens op de naam van de Exchange dienst met het account waarvan u de rechten wilt toebedelen. Ga naar het E-mailaccounts-tabblad.

In de weergegeven tabel worden alle accounts getoond die aan uw Exchange zijn gekoppeld. Klik op de drie stippen rechts van het account waarvoor u rechten wilt delegeren en vervolgens `Autorisaties beheren`{.action}.

![Autorisatie](images/delegation-step1.png){.thumbnail} 

Selecteer op de pagina die verschijnt welke rechten u wilt delen. U moet ze koppelen aan een of meer accounts waaraan u de rechten wilt verlenen. Klik dan op `Volgende`{.action}.

![Autorisatie](images/delegation-step1.png){.thumbnail} 

Neem even de tijd om het wijzigingsoverzicht te bekijken. Als alles correct is, klikt u op `Bevestigen`{.action}. Binnen een paar minuten wordt de delegatie op onze servers aangemaakt.

Nadat de delegatie is geconfigureerd, kan *test@mypersonaldomain.ovh* de geselecteerde acties uitvoeren op het account *test2@mypersonaldomain.ovh*.

### Stap 2: De gedeelde rechten gebruiken

Nu de rechten gedeeld zijn, kunnen ze worden toegepast.  Voordat u verder gaat, moet u ervoor zorgen dat u over de inloggegevens beschikt voor het Exchange account waaraan de nieuwe gemachtigde rechten zijn verleend.

Dit werkt anders, afhankelijk van de rechten die u hebt gedelegeerd, en ook de software of webinterface die u gebruikt voor toegang tot uw Exchange account. Vanaf dit punt in de handleiding kunt u de instructies volgen die relevant zijn voor de rechten die u hebt gedelegeerd.

- [Toegangsrecht gebruiken](https://docs.ovh.com/nl/microsoft-collaborative-solutions/exchange_2013_het_geven_van_full_access_rechten_op_een_account/#21-gebruik-van-uw-toegangsrecht){.external}

- [‘Verzenden als’-recht gebruiken](https://docs.ovh.com/nl/microsoft-collaborative-solutions/exchange_2013_het_geven_van_full_access_rechten_op_een_account/#22-gebruik-van-uw-verzenden-als-recht){.external}

- [‘Verzenden namens’-recht gebruiken](https://docs.ovh.com/nl/microsoft-collaborative-solutions/exchange_2013_het_geven_van_full_access_rechten_op_een_account/#23-gebruik-van-uw-verzenden-namens-recht){.external}

> [!warning]
>
> Deze oplossing vereist kennis van de software of interface die u wilt gebruiken. Hieronder vindt u enige informatie over hoe u verder moet gaan. We raden u echter aan om contact op te nemen met een gespecialiseerde serviceprovider en/of ontwikkelaar van de gebruikersinterface als u problemen ondervindt. We kunnen u hier niet zelf helpen.
>

#### 2.1 Gebruik van uw toegangsrecht 

- **Vanaf de Outlook Web Applicatie (OWA)**

Ga naar het adres <https://www.ovh.nl/mail/> en voer de Exchange accounts in met gedeelde rechten. Nadat u bent ingelogd, klikt u met de rechtermuisknop op de naam van het account in het menu aan de linkerkant en selecteert u vervolgens `Een gedeeld bestand toevoegen`{.action}.

In het popup-venster, voert u de naam in voor het account met de gedelegeerde rechten en klikt u vervolgens op `Toevoegen`{.action}. Het account verschijnt dan in het menu aan de linkerkant en u kunt de inhoud ervan bekijken.

![Autorisatie](images/delegation-step3.png){.thumbnail} 

- **Vanaf de Outlook applicatie voor Windows**

Klik in Outlook 2016 op `Bestand`{.action} in de menubalk bovenaan het scherm en vervolgens op `Accountinstellingen`{.action}. Klik in het vervolgkeuzemenu opnieuw op `Accountinstellingen`{.action}. Selecteer in het popup-venster het account met de gemachtigde rechten en klikt u vervolgens op `Wijzigen`{.action}. 

![Autorisatie](images/delegation-step3.png){.thumbnail} 

Klik vervolgens op `Extra instellingen`{.action}. Ga in het nieuwe venster naar het tabblad `Geavanceerd`{.action} en klik vervolgens op `Toevoegen`{.action}. Voer de naam in van het account dat het gedelegeerde recht zal gebruiken en bevestig vervolgens de toevoeging. Het account verschijnt dan in het menu aan de linkerkant en u kunt de inhoud ervan bekijken.

![Autorisatie](images/delegation-step3.png){.thumbnail} 

#### 2.2 Gebruik van uw ‘Verzenden als’-recht 

- **Vanaf de Outlook Web Applicatie (OWA)**

Ga naar het adres <https://www.ovh.nl/mail/> en voer de Exchange accounts in met gedeelde rechten. Zodra u bent ingelogd, begint u met het bewerken van een nieuw e-mailadres door op `+ Nieuw`{.action} te klikken.

Klik in het gebied dat verschijnt op de drie stippen en klik vervolgens op `Afzenderveld weergeven`{.action}. Klik vervolgens op de knop `Afzender`{.action} en selecteer het e-mailadres dat u als afzender wilt weergeven (het adres waarvoor u de rechten hebt overgedragen). Als dit niet verschijnt, verwijdert u het adres dat al getoond wordt en voert u het adres in dat u wilt weergeven. 

U kunt nu uw e-mail schrijven en verzenden. 

![Autorisatie](images/delegation-step3.png){.thumbnail} 

- **Vanaf de Outlook applicatie voor Windows**

Na het openen van Outlook 2016 begint u met het schrijven van een nieuw bericht. Zorg ervoor dat de knop `Afzender`{.action} wordt weergegeven in het berichtvenster. Als dit niet wordt weergegeven, gaat u naar het tabblad `Opties`{.action} en klikt u vervolgens op `Afzender weergeven`{.action}.

Klik vervolgens op de knop `Afzender`{.action} en selecteer het e-mailadres dat u als afzender wilt weergeven (het adres waarvoor u de rechten hebt overgedragen). Als het account niet wordt weergegeven, klikt u op `Overig`{.action}, voert u het juiste account in en bevestigt u het. 

U kunt nu uw e-mail schrijven en verzenden. 

![Autorisatie](images/delegation-step3.png){.thumbnail} 

#### 2.3 Gebruik van uw ‘Verzenden namens’-recht 

- **Vanaf de Outlook Web Applicatie (OWA)**

Ga naar het adres <https://www.ovh.nl/mail/> en voer de Exchange accounts in met gedeelde rechten. Zodra u bent ingelogd, begint u met het bewerken van een nieuw e-mailadres door op `+ Nieuw`{.action} te klikken.

Klik in het gebied dat verschijnt op de drie stippen en klik vervolgens op `Afzenderveld weergeven`{.action}. Klik vervolgens op de knop `Afzender`{.action} en selecteer het e-mailadres dat u als afzender wilt weergeven (het adres waarvoor u de rechten hebt overgedragen). Als dit niet verschijnt, verwijdert u het adres dat al getoond wordt en voert u het adres in dat u wilt weergeven. 

U kunt nu uw e-mail schrijven en verzenden. 

![Autorisatie](images/delegation-step3.png){.thumbnail}

- **Vanaf de Outlook applicatie voor Windows**

Na het openen van Outlook 2016 begint u met het schrijven van een nieuw bericht. Zorg ervoor dat de knop `Afzender`{.action} wordt weergegeven in het berichtvenster. Als dit niet wordt weergegeven, gaat u naar het tabblad `Opties`{.action} en klikt u vervolgens op `Afzender weergeven`{.action}.

Klik vervolgens op de knop `Afzender`{.action} en selecteer het e-mailadres dat u als afzender wilt weergeven (het adres waarvoor u de rechten hebt overgedragen). Als het account niet wordt weergegeven, klikt u op `Overig`{.action}, voert u het juiste account in en bevestigt u het. 

U kunt nu uw e-mail schrijven en verzenden. 

![Autorisatie](images/delegation-step3.png){.thumbnail} 

## Verder

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.