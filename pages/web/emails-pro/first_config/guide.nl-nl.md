---
deprecated: true
title: 'Configuratie van uw E-mail Pro'
slug: eerste-configuratie
excerpt: 'Ontdek hoe u uw E-mail Pro kunt configureren'
section: Algemeen
order: 1
---

**Laatste update 28-11-2018**

## Introductie

U hebt onlangs de oplossing E-mail Pro aangeschaft. Hiermee kunt u profiteren van betaalbare zakelijke e-mailadressen om uw bedrijf te ondersteunen of op te starten.

**Deze handleiding beschrijft de stappen voor het configureren van E-mail Pro.**

## Vereisten

- U moet beschikken over [E-mail Pro](https://www.ovhcloud.com/nl/emails/email-pro/){.external}.
- U moet een e-mail hebben ontvangen met daarin de bevestiging dat uw E-mail Pro is geïnstalleerd.
- U moet beschikken over een domeinnaam. 
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

## Instructie

### Stap 1: Ga naar het beheer van uw dienst

Nadat uw E-mail Pro is aangemaakt en beschikbaar is, kunt u deze beheren vanuit uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

Log hiervoor in op uw Control Panel, klik op `E-mail Pro`{.action} in de dienstenbalk aan de linkerkant, en kies vervolgens de naam van de betreffende dienst.

> [!primary]
>
> De naam van een E-mail Pro dienst in uw OVH Control Panel begint met *emailpro-*, bevat vervolgens een deel van uw NIC handle, en eindigt met een cijfer (1 voor de eerste geïnstalleerde Email Pro, 2 voor de tweede, etc.) .
>

### Stap 2: Voeg uw domeinnaam toe

Wanneer u uw E-mail Pro hebt besteld, wordt automatisch een venster geopend waarin van u wordt gevraagd om een `domein toe te voegen`{.action}. Als het venster niet wordt weergegeven, gaat u naar het tabblad `Bijbehorende domeinen`{.action} ('Associated domains') en klikt u vervolgens op de knop `Domeinnaam toevoegen`{.action}.

U moet het volgende kiezen:

- **Selecteer een domein in de lijst**: alleen de domeinen die de OVH configuratie gebruiken en zijn ingevoerd als contacten met uw NIC handle worden weergegeven.
- **Voer een domeinnaam in die niet wordt beheerd vanaf uw OVH account**: u moet de configuratie van de domeinnaam (de DNS-zone) kunnen aanpassen zodat de Email Pro dienst goed kan werken.

Zodra u uw keuze hebt gemaakt, klikt u op `Volgende`{.action}. 

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

Het venster bevat informatie over de configuratie van een modus. 

- **Als u een domeinnaam hebt ingevoerd die niet vanaf OVH wordt beheerd**: de niet-autoritaire modus wordt standaard geconfigureerd.
- **Als u een OVH domeinnaam uit de lijst hebt geselecteerd**: u moet tussen twee modi kiezen.

|Modus|Omschrijving|
|---|---|
|Autoritair|Kies dit als u alleen de E-mail Pro oplossing met uw domeinnaam gebruikt. U kunt geen andere e-mailoplossing gebruiken met uw E-mail Pro.|
|Niet-autoritair|Kies dit als u de domeinnaam van uw E-mail Pro gebruikt met een andere e-mailoplossing.| 

> [!primary]
>
> De moduskeuze is niet definitief, deze kan later via het OVH Control Panel worden gewijzigd.
>

Hiervoor klikt u op `Volgende`{.action} om verder te gaan met de domeintoevoeging. 

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**Als u een OVH-domeinnaam uit de lijst hebt gekozen**, wordt deze automatisch geconfigureerd. Hiervoor vinkt u de vakjes aan en klikt u op `Volgende`{.action} om verder te gaan met de domeintoevoeging. 

**Als u een niet-OVH-domeinnaam hebt ingevoerd**, moet deze in de volgende stap worden geconfigureerd.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

Aan het einde van de configuratie vragen we u om de ingevoerde informatie te controleren en vervolgens op de knop `Bevestigen`{.action} te klikken om het domein toe te voegen.

### Stap 3: Configureer uw domeinnaam

Nadat de domeinnaam is toegevoegd als een gekoppeld domein, controleert u de instelling met behulp van de weergegeven tabel.

In de kolom `Diagnostic`{.action} kunt u de configuratie van de MX-velden van de domeinnaam beheren. Er verschijnt een rode stip als deze instellingen moeten worden gewijzigd.

- **Als u bij het toevoegen van het domein hebt gekozen voor automatische configuratie**: het kan een paar uur duren voordat het op het Control Panel verschijnt.
- **Als u een niet-OVH-domeinnaam hebt ingevoerd**: klik op het rode omlijnde vak om de wijzigingen die u moet aanbrengen te bekijken. Als u dit zojuist hebt gedaan, kan het enkele uren duren voordat het op het OVH Control Panel verschijnt.

![emailpro](images/first_config_email_pro_configure_domain.png){.thumbnail}

### Stap 4: Configureer de E-mail Pro accounts

Ga naar het tabblad `E-mailaccounts`{.action} om uw e-mailadres te configureren. De tabel geeft de accounts weer die u hebt besteld onder het formulier '*@configureme.me*'.

Om ze te configureren, klikt u op het potloodpictogram.

![emailpro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Vul de gevraagde informatie in.

|Titel|Omschrijving|
|---|---|
|E-mailaccount|Voer de naam in die in uw e-mailadres staat (bijvoorbeeld uw voornaam) en selecteer het betreffende domein in de lijst.|
|Voornaam|Voer een voornaam in.|
|Naam|Voer een naam in.|
|Weergavenaam|Voer de afzendernaam in die u wilt laten weergeven wanneer u e-mails vanaf dit adres verzendt.|
|Wachtwoord en bevestiging|Stel een wachtwoord in en bevestig deze. | 

Zodra de informatie compleet is, klikt u op de knop `Volgende`{.action}, controleert u de weergegeven informatie, en klikt u vervolgens op `Bevestigen`{.action} om de configureratie van het account te starten.

> [!primary]
>
> Herhaal deze stap zo vaak als nodig is, naar gelang het aantal beschikbare accounts. U kunt extra accounts bestellen met de knop `Accounts bestellen`{.action}.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### Stap 5: Maak gebruik van uw e-mailadressen 

Nadat u uw accounts hebt geconfigureerd, hoeft u ze alleen nog maar te gebruiken! Hiervoor biedt OVH een online applicatie (een *webapp*). RoundCube is beschikbaar op het volgende adres: <https://pro1.mail.ovh.net>. U moet hierbij uw e-mailgegevens invoeren.

Indien u uw e-mailadres wilt configureren in een e-mailprogramma of een apparaat (zoals een _smartphone_ of een tablet), raadpleeg dan onze documentatie op: <https://docs.ovh.com/nl/emails-pro/>. De te gebruiken instellingen voor het configureren van uw Email Pro account:

|Soort server|Servicenaam|Soort beveiliging|Poort|
|---|---|---|---|
|Inkomend|pro1.mail.ovh.net|SSL/TLS|993|
|Uitgaand|pro1.mail.ovh.net|STARTTLS|587|

## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.