---
deprecated: true
title: Toevoeging van een domeinnaam aan uw Exchange
excerpt: Ontdek hoe u een domeinnaam kunt toevoegen aan uw Exchange-dienst
updated: 2022-10-07
---

**Laatste update 01-02-2018**

## Introductie

Als u de accounts wilt gebruiken die bij een Exchange-dienst zijn geleverd, moet u er een domeinnaam aan toevoegen. U kunt ook verschillende domeinnamen toevoegen aan een Exchange-dienst. 

**Ontdek hoe u een domeinnaam kunt toevoegen aan uw Exchange-dienst.**

## Vereisten

- U moet beschikken over een [Exchange-oplossing](https://www.ovhcloud.com/nl/emails/){.external}.
- U moet beschikken over meerdere domeinnamen. 
- U moet het recht hebben om de configuratie van uw domeinnaam te wijzigen (via de DNS-zone).
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}

## Instructies

### Stap 1: Ga naar het beheer van uw dienst

Nadat uw Exchange is aangemaakt en beschikbaar is, kunt u deze beheren vanuit uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

Hiervoor logt u in, klikt u op `Microsoft`{.action}, en vervolgens op `Exchange`{.action} in de linkerbalk van de dienst. Selecteer dan de naam van de betreffende Exchange-dienst. 

> [!primary]
>
> De naam van een Exchange-dienst in uw OVH Control Panel begint met **hosted-** of **private-**, bevat vervolgens een deel van uw van uw NIC handle, en eindigt met een cijfer (1 voor de eerste geïnstalleerde Hosted or Private Exchange, 2 voor de tweede, etc.) .
>

### Stap 2: Voeg een domeinnaam toe

Om een domeinnaam toe te voegen, klikt u op het tabblad `Verwante domeinen`{.action}. De tabel toont de domeinnamen die momenteel zijn gekoppeld aan uw Exchange-dienst. Om een nieuwe domeinnaam toe te voegen, klikt u op `Een domein toevoegen`{.action}.

> [!warning]
>
> In the directory kunnen alle adressen die op uw Exchange-dienst zijn gemaakt, alle andere verwante adressen bekijken, inclusief adressen die verschillende domeinnamen hebben. Om te voorkomen dat verschillende domeinnamen op deze manier worden weergegeven, moet u een nieuwe [Exchange-oplossing](https://www.ovhcloud.com/nl/emails/){.external} bestellen voor de verwante domeinnaam/namen.
>

![Exchange](images/add_domain_exchange_step1.png){.thumbnail}

In het venster voor domeintoevoeging moet u kiezen tussen:

- **Selecteer een domein in de lijst**: alleen de domeinen die de OVH-configuratie gebruiken en zijn ingevoerd als contacten met uw NIC handle worden weergegeven;

- **Voer een domeinnaam in die niet wordt beheerd vanaf uw OVH-account**: u moet de configuratie van de domeinnaam (de DNS-zone) kunnen aanpassen zodat de dienst correct kan functioneren.

Zodra u uw keuze hebt gemaakt, klikt u op `Volgende`{.action}. 

![Exchange](images/add_domain_exchange_step2.png){.thumbnail}

Het venster bevat informatie over de configuratie van modi. 

- **Als u een domeinnaam hebt ingevoerd die niet vanaf OVH wordt beheerd**: de niet-autoritaire modus wordt standaard geconfigureerd.

- **Als u een OVH-domeinnaam uit de lijst hebt gekozen**: u moet tussen twee modi kiezen.

|Modus|Omschrijving|
|---|---|
|Autoritair|Kies dit als u alleen de Exchange-oplossing met uw domeinnaam gebruikt. U kunt geen andere e-mailoplossing gebruiken met uw Exchange.|
|Niet-autoritair|Kies dit als u de domeinnaam van uw Exchange gebruikt met een andere e-mailoplossing. U moet gegevens invoeren op de server van uw andere e-mailoplossing.|

> [!primary]
>
> De moduskeuze is niet definitief, deze kan later via het OVH Control Panel worden gewijzigd.
>

Hiervoor klikt u op `Volgende`{.action} om verder te gaan met de domeintoevoeging. 

![Exchange](images/add_domain_exchange_step3.png){.thumbnail}

**Als u een OVH-domeinnaam uit de lijst hebt gekozen**, wordt deze automatisch geconfigureerd. Hiervoor vinkt u de vakjes aan en klikt u op Volgende om verder te gaan met de domeintoevoeging. 

**Als u een domeinnaam hebt ingevoerd die niet bij OVH beheerd is**, moet deze in de volgende stap worden geconfigureerd.

![emailpro](images/add_domain_exchange_step4.png){.thumbnail}

Aan het einde van de configuratie vragen we u om de ingevoerde informatie te controleren en vervolgens op de knop `Bevestigen`{.action} te klikken om het domein toe te voegen. Herhaal deze stap zo vaak als nodig, als u meerdere domeinnamen wilt toevoegen.

### Stap 3: Configureer de (DNS) domeinnaam

Nadat het domein is toegevoegd als gekoppeld domein, controleert u of de configuratie correct is middels de tabel die wordt geopend. Een groen vak geeft aan dat de domeinnaam correct is geconfigureerd. Als het vak rood is:

- **Als u bij het toevoegen van het domein hebt gekozen voor automatische configuratie**: het kan een paar uur duren voordat het op het Control Panel verschijnt.

- **Als u een niet-OVH-domeinnaam hebt ingevoerd**: klik op het rode omlijnde vak om de wijzigingen die u moet aanbrengen te bekijken. Als deze domeinnaam de OVH-configuratie (de DNS-servers) niet gebruikt, moet u de wijzigingen uitvoeren in de interface die u gebruikt om de configuratie van uw domeinnaam te beheren. Als u de CNAME-record wilt wijzigen, kunt u meer informatie vinden aan de hand van deze [documentatie](/pages/web/microsoft-collaborative-solutions/exchange_dns_cname){.external}.

> [!primary]
>
> Het kan 4 tot 24 uur duren voordat de wijziging volledig is doorgevoerd.
>

Als u wilt controleren of uw domeinnaam correct is geconfigureerd, gaat u terug naar de tabel `Verwante domeinen`{.action} voor uw Exchange-dienst. Een groen vak geeft aan dat de domeinnaam correct is geconfigureerd. Als dat niet het geval is, is de configuratie die u hebt aangebracht mogelijk niet volledig gepropageerd.

![emailpro](images/add_domain_exchange_step5.png){.thumbnail}

### Stap 4: Configureer en gebruik de accounts

Nu u de domeinnamen hebt toegevoegd aan uw Exchange-dienst, kunt u uw Exchange-accounts configureren zodat ze hieraan zijn gekoppeld. U kunt dit doen via het `E-mailaccounts`{.action}-tabblad. Indien nodig kunt u extra accounts bestellen met behulp van de `Accounts bestellen`{.action}-knop of de knop `Account toevoegen`{.action}.

In the directory kunnen alle adressen die op uw Exchange-dienst zijn gemaakt, alle andere verwante adressen bekijken, inclusief adressen die verschillende domeinnamen hebben.

Nadat u uw accounts hebt geconfigureerd, hoeft u ze alleen nog maar te gebruiken! Hiervoor biedt OVH de *webmail* **Outlook Web Application** (OWA), die u kunt openen via de link: [https://www.ovh.nl/mail/](https://www.ovh.nl/mail/){.external}. Als u de manier wilt optimaliseren waarop u uw Exchange-e-mailadres op een e-mailclient gebruikt, moet u ervoor zorgen dat deze compatibel is met de dienst. Als u uw e-mailadres wilt configureren in een e-mailprogramma of een apparaat (zoals een smartphone of een tablet), raadpleeg dan onze documentatie op: [https://docs.ovh.com/nl/microsoft-collaborative-solutions/](https://docs.ovh.com/nl/microsoft-collaborative-solutions/){.external}.

OVH biedt Outlook-licenties in het [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} en Office 365-licenties op de pagina: [https://www.ovhcloud.com/nl/collaborative-tools/microsoft-365/](https://www.ovhcloud.com/nl/collaborative-tools/microsoft-365/){.external}. We raden u aan een van deze oplossingen te gebruiken als u de Outlook-e-mailclient of andere software van de Microsoft Office-suite wilt gebruiken.

## Verder

[Creatie van een CNAME-record voor het toevoegen van een gekoppeld domein](/pages/web/microsoft-collaborative-solutions/exchange_dns_cname){.external}.

Ga in gesprek met andere communitygebruikers op [https://community.ovh.com](https://community.ovh.com){.external}.