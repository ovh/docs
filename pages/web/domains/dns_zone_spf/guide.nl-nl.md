---
deprecated: true
title: Toevoegen van een SPF-veld aan de configuratie van uw domeinnaam
excerpt: Ontdek hoe u een SPF-veld kunt toevoegen aan de configuratie van uw domeinnaam
slug: het_spf_veld
section: Geavanceerd gebruik
updated: 2022-09-12
---

**Laatste update 29-01-2018**

## Introductie

Met de SPF (Sender Policy Framework) kan een server die een e-mail ontvangt controleren of deze e-mail is verzonden door een geautoriseerde server. De SPF wordt toegevoegd als een vermelding in de DNS-zone waar de servers of IP-adressen staan die zijn gemachtigd om e-mails naar het betreffende domein te verzenden.

**Ontdek hoe u een SPF-veld kunt toevoegen aan de configuratie van uw domeinnaam**

## Vereisten

- U moet gemachtigd zijn om de betreffende domeinnaam te beheren vanuit uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.
- De domeinnaam in kwestie moet de OVH-configuratie gebruiken (dat wil zeggen de OVH DNS-servers).

> [!warning]
>
> Als uw domeinnaam de OVH DNS-servers niet gebruikt, moet u de SPF aanpassen vanuit de interface van de provider die de configuratie van uw domeinnaam beheert.
>
> Als uw domeinnaam bij OVH is, kunt u controleren of deze onze OVH-configuratie gebruikt vanuit uw Control Panel in [DNS-servers](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, zodra deze op het betreffende domein is geplaatst.
>

## Instructie

### Stap 1: Begrip van het SPF-veld

Voordat u een SPF-veld toevoegt of wijzigt in uw domeinconfiguratie, is het belangrijk om te begrijpen waarom dit nuttig is. Het SPF-veld is bedoeld om potentiële identiteitsdiefstal te voorkomen met e-mailadressen die uw domeinnaam gebruiken.

Dit wordt mogelijk gemaakt door informatie die is ingevoerd in de SPF zelf. We kunnen ze vinden in:

- **servers of meerdere IP-adressen**: hierdoor kunnen ze worden geïdentificeerd als een legitieme bron voor verzending.
- **een qualifier**: dit beveelt de servers die de e-mails ontvangen een specifieke manier aan om te reageren op een bericht dat als niet-legitiem wordt beschouwd, of in plaats daarvan afkomstig is van een potentieel risicovolle bron.

Zorg er daarom voor dat het veld SPF de verzendingsbronnen bevat die u gebruikt om een e-mail te verzenden met uw domein. Deze bronnen kunnen uw eigen server zijn, die van uw provider of een van de OVH e-mailoplossingen.

> [!primary]
>
> De SPF is slechts een indicatie voor servers die e-mails ontvangen, inclusief de uwe. Het is aan de servers om te volgen of te negeren wat wordt vermeld in de SPF van de domeinen waarvoor ze e-mail ontvangen.
>

### Stap 2: Kennis van de OVH-configuratie

De OVH-configuratie is van toepassing op de volgende oplossingen:

- MX Plan, apart of opgenomen in onze [OVH hostingpakketten](https://www.ovh.com/nl/shared-hosting/){.external};
- [E-mail Pro](https://www.ovh.com/nl/emails/email-pro/){.external};
- [Hosted Exchange](https://www.ovh.com/nl/emails/hosted-exchange/){.external}.

Wanneer u een van deze oplossingen bestelt, raden wij u aan een SPF met OVH-informatie te gebruiken in uw domeinconfiguratie. Zo ziet het er uit:

```bash
mypersonaldomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Als uw domein de OVH-configuratie gebruikt, kunt u controleren of een SPF al op deze manier is geconfigureerd. Log hiervoor in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} en ga naar de dienstenbalk aan de linkerkant. Ga naar het gedeelte `Domeinen`{.action}. Klik vervolgens op het betreffende domein en ga naar het tabblad `DNS-zone`{.action}.

Er zal een tabel verschijnen.  Hiermee wordt de configuratie van uw OVH-domein weergegeven. Het bestaat uit verschillende DNS-records, allemaal gesymboliseerd door een tabelregel.

> [!primary]
>
> Als uw domein is geregistreerd bij OVH, kunt u controleren of het de OVH-configuratie gebruikt op het tabblad `DNS-servers`{.action}.
>

In de tabel kan een filterveld worden gebruikt om de overeenkomstige regel naar OVH SPF te vinden. Dit kan op twee verschillende plaatsen worden weergegeven: selecteer de `TXT`{.action} of `SPF`{.action} in het filterveld en ga zo nodig van de ene naar de andere over. De tabel kan er dan anders uitzien.

- **"v=spf1 include:mx.ovh.com ~all" weergegeven in de doelkolom**: uw domein gebruikt al de OVH-configuratie. Als u het niet langer wenst te gebruiken, moet u de volgende stap wijzigen.

- **Een SPF die niet overeenkomt met OVH-informatie weergegeven in de doelkolom**: uw domein gebruikt al een gepersonaliseerde SPF. Het bewerken of selecteren van de OVH-configuratie vindt plaats in de volgende stap.

- **Geen SPF weergegeven in de doelkolom**: ga eerst na of het ingediende bestand niet is gemaakt als SPF of TXT door de filter te bewerken. Als een SPF niet voorkomt in een van de filters, gebruikt uw domein deze niet. U kunt meer toevoegen in de volgende stap.

> [!primary]
>
> Een SPF bestaat altijd uit de volgende vorm: "v = spf1 sources qualifieur". Bijvoorbeeld, de OVH SPF is: "v = spf1 include: mx.ovh.com ~ all".
>

![domein](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Stap 3: Bewerk de SPF

Om de SPF in de OVH-configuratie van uw domein aan te passen, meldt u zich aan bij uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}. Ga naar het gedeelte `Domeinen`{.action} op de dienstenbalk aan de linkerkant, klik op het betreffende domein en ga vervolgens naar de `DNS-zone`{.action}.

De tabel geeft de OVH-configuratie van uw domein weer. Elke regel komt overeen met een DNS-record.

Als u een SPF wilt wijzigen of toevoegen, moet u een nieuw item toevoegen in de OVH-configuratie (DNS-zone) van uw domein. Om dit te doen, klikt u op `Invoer toevoegen`{.action}.

![domein](images/spf_records_add_entry_step1.png){.thumbnail}

In het venster dat wordt geopend, krijgt u verschillende DNS-velden aangeboden. Er zijn twee manieren om een SPF toe te voegen:

- **SPF handmatig toevoegen**: voor ervaren gebruikers, of gebruikers die al informatie hebben om in te voeren (bijvoorbeeld verkregen van hun provider);
- **onze gebruikers met een SPF-configuratie**: voor onervaren gebruikers of gebruikers die niet over de benodigde informatie beschikken.

De procedure zal variëren naargelang uw keuze.

![domein](images/spf_records_add_entry.png){.thumbnail}

#### SPF handmatig toevoegen

Klik tussen de aangeboden velden op TXT en voer de gevraagde informatie in. Voer in de `Waarde`{.action}-zone de SPF in die u wilt gebruiken.

Om het te voltooien klikt u op `Volgende`{.action}.  Controleer of de informatie die u hebt ingevoerd correct is en klik vervolgens op `Bevestigen`{.action}.

> [!primary]
>
> Het kan 4 tot 24 uur duren voordat de wijziging volledig is doorgevoerd.
>

![domein](images/spf_records_add_TXT_entry.png){.thumbnail}

#### De OVH SPF-configuratiewizard gebruiken

Klik op `SPF`{.action} in de voorgestelde velden. In de volgende stap heeft u twee keuzeopties:

- gebruik de SPF voor de OVH-oplossingen (MX Plan, Email Pro en Hosted Exchange);
- pas de SPF aan met behulp van onze wizard.

##### Gebruik van de OVH SPF

Klik op de knop `Gebruik gedeelde SPF voor OVH`{.action}. Er zal informatie over de OVH SPF verschijnen. Klik op de knop `Bevestigen`{.action} om de bewerking te voltooien. 

> [!primary]
>
> Het kan 4 tot 24 uur duren voordat de wijziging volledig is doorgevoerd.

![domein](images/spf_records_add_entry_step2.png){.thumbnail}

##### SPSF personaliseren

Met de configuratiewizard kunt u uw SPF aanpassen aan uw behoeften. Om dit te doen, moet u enkele vragen beantwoorden en de nodige informatie geven. Sommige aangevraagde functies kunnen voor ervaren gebruikers zijn.

We zullen ze één voor één bekijken.

|Details|Omschrijving|
|---|---|
|Subdomein|Vul in als de SPF moet worden toegepast op een subdomein van uw domein. Dit is van toepassing als u e-mails verzendt vanuit een subdomein.|
|TTL|Dit is de propagatietijd (van de applicatie) die wordt toegepast terwijl u het nieuwe DNS-record wijzigt.|
|Een IP-adres autoriseren om e-mails te verzenden|Kan relevant zijn als uw website en uw e-mailadressen worden gehost op een server met hetzelfde IP-adres (bijvoorbeeld op uw dedicated server).|
|Autoriseren van de MX-servers om e-mails te verzenden.|Kan relevant zijn als de servers die uw e-mails ontvangen deze ook kunnen verzenden.|
|Autoriseren van alle servers waarvan de naam eindigt met uw domein om e-mails te verzenden.|Deze optie wordt niet aanbevolen omdat deze te veel legitieme bronnen aan uw SPF kan toevoegen.|

![domein](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

Met betrekking tot de vraag: **"Versturen andere servers e-mail met uw domein?"** - verschillende elementen kunnen worden ingevuld:

|Details|Omschrijving|
|---|---|
| a|Voer hier de domeinnamen in. Dat maakt het legitiem voor de servers die deze sites hosten om e-mails met uw adressen te verzenden.|
|mx|Voer hier de servers in die uw e-mails (MX-servers) ontvangen als ze deze ook kunnen verzenden. Ze zullen dus worden geïdentificeerd als een legitieme bron van verzending.|
|ptr|Voer de namen in van hosts waarvan *reverse* functioneel is (dankzij een PTR-veld in de DNS-zone). Ze zullen dus worden geïdentificeerd als een legitieme bron van verzending.|
|ip4|Geeft IP-adressen of IP-blokken (IPv4) aan die zijn gemachtigd om e-mails met uw adres te verzenden.|
|ip6|Geeft IP-adressen of IP-blokken (IPv6) aan die zijn gemachtigd om e-mails met uw adres te verzenden.|
|inclusief|Voer hier de domeinnamen in. Dit zal het gebruik van hun SPF voor uw eigen domein mogelijk maken. OVH gebruikt deze methode bijvoorbeeld in de SPF-configuratie: "v = spf1 include: mx.ovh.com ~ all", hierdoor kan OVH de SPF van mx.ovh.com beheren en zijn klanten de SPF laten gebruiken.|

Tot slot, met betrekking tot de vraag: **"Beschrijft u de informatie die u verstrekt aan alle hostservers die e-mail verzenden met uw domeinnaam?"** - Er zijn drie opties:

|Details|Omschrijving|
|---|---|
|Ja, ik ben er zeker van|E-mailservers die e-mail van uw domein ontvangen aanbevelen om e-mail van legitieme bronnen te blokkeren (niet gevonden in SPF).|
|Ja, maar ik gebruik de veilige modus|De servers die e-mails ontvangen van uw domein aanbevelen deze te accepteren als ze afkomstig zijn van illegale bronnen (niet aanwezig in uw SPF), maar wel ze te taggen zodat ze identificeerbaar zijn als mogelijk niet legitiem (zoals bijvoorbeeld spam).|
|Nee|De servers die e-mails van uw domein ontvangen aanbevelen deze te accepteren als ze afkomstig zijn van illegale bronnen (niet aanwezig in uw SPF), zonder enige actie. De e-mail header zal echter worden verhoogd.|

Ter herinnering: de SPF is een indicatie voor de servers die e-mails ontvangen, inclusief die van u. Het is de verantwoordelijkheid van deze servers om toe te passen, of niet, wat is gespecificeerd in de SPF van domeinen waarvoor zij berichten ontvangen.

Zodra de informatie is ingevuld, klikt u op `Volgende`{.action}, zorgt u ervoor dat de informatie die verschijnt correct is en klikt u vervolgens op `Bevestigen`{.action}.

> [!primary]
>
> Het kan 4 tot 24 uur duren voordat de wijziging volledig is doorgevoerd.
>

## Verder

[Algemene informatie over al onze DNS.](https://docs.ovh.com/nl/domains/gedeelde_hosting_algemene_informatie_over_dns_servers/){.external}

Ga in gesprek met andere communitygebruikers op [https://community.ovh.com](https://community.ovh.com){.external}.