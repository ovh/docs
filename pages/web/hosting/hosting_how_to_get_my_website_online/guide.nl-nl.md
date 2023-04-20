---
deprecated: true
title: 'Publiceren van een website op uw webhosting'
excerpt: 'Ontdek hoe u een website op uw webhosting online zet'
updated: 2022-07-21
---

**Laatste update 29-06-2018**

## Introductie

Er zijn enorm veel verschillende websites op het internet. Of u nu een blog of een webshop opzet, uw passie deelt of uw werk wilt promoten; met uw [OVHcloud webhosting](https://www.ovh.com/nl/shared-hosting/) kunt u de site die u wenst hosten, zolang deze compatibel is met de [configuratie van onze infrastructuur](http://pro.ovh.net/infos/){.external}.

**In deze handleiding wordt uitgelegd hoe u een website op uw webhosting kunt publiceren.**

## Vereisten

- U moet beschikken over een [OVHcloud webhostingplan](https://www.ovh.com/nl/shared-hosting).
- U moet een e-mail hebben ontvangen met daarin de bevestiging dat uw webhosting is geïnstalleerd.
- U moet beschikken over een [domeinnaam](https://www.ovh.com/nl/domains/){.external}, wat het adres zal worden waarop uw website te vinden zal zijn.
- U moet ingelogd zijn op uw [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}

## Instructie

### Stap 1: Bepaal uw project 

Voor een succesvol project is het cruciaal om eerst een duidelijk beeld te hebben van uw doelstelling.   Wat wilt u met uw website bereiken?  Hoe kan het worden gepubliceerd?  Er zijn verschillende manieren om uw project online te zetten met uw OVHcloud webhostingplan.

- **Onze 1-klik modules**: deze bieden u een kant-en-klaar websitesjabloon die u kunt aanpassen met een verscheidenheid aan thema's, teksten, en nog veel meer. OVHcloud biedt vier 1-klik modules die compatibel zijn met onze infrastructuur, op de pagina [Uw website maken met modules met 1 klik](https://www.ovhcloud.com/nl/web-hosting/uc-website/){.external}.

- **Gebruik van een kant-en-klare website die u handmatig installeert**: deze oplossing biedt u het voordeel van een kant-en-klare websitestructuur die u kunt aanpassen (thema's, tekst, enz.), welke u zelf installeert op uw OVHcloud webhostingruimte.

- **Creëer uw website zelf**: dit is een meer technische oplossing waarvoor programmeervaardigheden vereist zijn, maar die u wel de mogelijkheid biedt om een project geheel op maat te maken.

- **Migreer een bestaande website naar OVHcloud**: deze oplossing kan ingewikkeld zijn als een onderbreking van de service voor de betreffende website geen optie is. Voor begeleiding bij dit proces kunt u ook de volgende handleiding raadplegen: [Migratie van uw website en e-mails naar OVHcloud](/pages/web/hosting/hosting_migrating_to_ovh){.external}


Nadat u de verschillende mogelijkheden hierboven hebt doorgenomen, kunt u een van de twee opties kiezen:

- **als u onze 1-klik modules wilt gebruiken**: raadpleeg de instructies in onze handleiding [Installatie van uw website met 1-klik modules](/pages/web/hosting/cms_install_1_click_modules);

- **als u onze 1-klik modules _niet_ wilt gebruiken**: u zult uw website handmatig op uw hostingruimte moeten installeren. De informatie in deze handleiding kan handig zijn, maar is geen vervanging voor daadwerkelijke hulp van een webmaster.
 
> [!warning]
>
> OVHcloud biedt u diensten waarvoor u verantwoordelijk bent, ook met betrekking tot hun configuratie en beheer. U bent er daarom verantwoordelijk voor dat ze correct werken.
> 
> Wij stellen u deze handleiding ter beschikking om u zo goed mogelijk te begeleiden bij deze dagelijkse taken. We raden u echter aan om de diensten van een gespecialiseerde provider in te schakelen en/of contact op te nemen met de uitgever van de software voor de dienst als u problemen ondervindt. We kunnen u niet zelf helpen. Meer informatie vindt u in het gedeelte ‘Verder’ in deze handleiding.
>

### Stap 2: Zet uw websitebestanden online in uw opslagruimte

Er zijn verschillende stappen nodig om handmatig een website op een hostingruimte te publiceren. Sommige van deze stappen zijn optioneel, afhankelijk van de site die u installeert, en er kunnen meerdere manieren zijn om ze uit te voeren. Voor de meeste bestaande projecten zijn er echter twee belangrijke stappen bij het publiceren van een website; de eerste van deze stappen is het uploaden van de bestanden van de website naar de relevante opslagruimte.

Netwerkmigratie vindt plaats in meerdere deelstappen.

#### 1. Verzamel de bestanden voor de website.

Zorg ervoor dat u alle bestanden hebt voor de te publiceren website. Als u een bestaande website migreert, kunt u deze bestanden verkrijgen bij uw voormalige hostingprovider.

#### 2. Log in op uw opslagruimte.

Als u een FTP-gebruikersnaam, een wachtwoord en een serveradres hebt, kunt u inloggen op uw opslagruimte. Deze zijn in de e-mail naar u verzonden met de mededeling dat uw hostingplan was opgezet. Als u niet langer in het bezit bent van het wachtwoord, raadpleegt u de instructies in onze handleiding [Wijziging van het wachtwoord wijzigen voor een FTP-gebruiker](/pages/web/hosting/ftp_change_password){.external}.

Om het serveradres of de gebruikersnaam van uw opslagruimte te verkrijgen, logt u in op uw [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} en klikt u vervolgens op `Hosting`{.action} in de dienstenbalk aan de linkerkant. Selecteer de naam van het betreffende hostingplan en klik op het tabblad `FTP - SSH`{.action}.

![siteinstallation](images/get-website-online-step1.png){.thumbnail}

Wanneer u over alle elementen beschikt, heeft u drie verschillende opties om verbinding te maken met uw opslagruimte:

- **Gebruik van OVHcloud‘s FTP Explorer**: Dit geeft u toegang tot uw opslagruimte vanaf uw internetbrowser. Om het te gebruiken, altijd vanaf het tabblad `FTP - SSH`{.action}, klikt u op de `FTP Explorer`{.action}-knop;

- **Gebruik van FTP-compatibele software**: U moet compatibele software op uw computer installeren (zoals FileZilla); Omdat OVHcloud het softwarepakket dat u hebt geïnstalleerd niet heeft gemaakt, dient u contact op te nemen met de uitgever van de software als u problemen ondervindt bij het gebruik ervan.

- **Gebruik SSH Access**: U moet commando's vanaf een terminal gebruiken om te communiceren met uw opslagruimte. Er is meer geavanceerde kennis en een specifiek [OVHcloud hostingplan](https://www.ovhcloud.com/nl/web-hosting/){.external} vereist om dit type toegang te gebruiken.

#### 3. De bestanden uploaden naar de opslagruimte

Zodra u bent ingelogd op uw opslagruimte, hoeft u alleen de bestanden voor uw website online te plaatsen. **We raden u aan om extra voorzichtig te zijn bij het selecteren van de map waarnaar u de bestanden uploadt.** Voor conventionele websites moeten de bestanden worden geüpload naar de map "www". Als u echter meerdere websites op uw hostingruimte host, heeft u vrijwel zeker meerdere **multisites** geregistreerd.

Om de map van de te publiceren website te identificeren, gaat u naar het tabblad `Multisite`{.action} in uw OVHcloud Control Panel. Controleer in de getoonde tabel de `hoofdmap (Root folder)`{.action} die voor het betreffende domein is opgegeven. Dit is de map waarin u de bestanden voor uw website moet publiceren.

Mogelijk vindt u een bestand met de naam "index.html" in uw opslagruimte. Dit bestand is mogelijk door OVHcloud aangemaakt tijdens de installatie van uw opslagplan om een standaardpagina voor uw website weer te geven. Als dit het geval is, vergeet dan niet om het te verwijderen bij het uploaden van uw bestanden.

![siteinstallation](images/get-website-online-step2.png){.thumbnail}

### Stap 3: Uw website verbinden met een database

> [!primary]
>
> Deze stap kan optioneel zijn als uw website niet verbonden hoeft te zijn met een database.
>

Tegenwoordig gebruiken vrijwel alle contentmanagement-systemen (CMS), zoals WordPress of Joomla!, een database voor het opslaan van dynamische elementen, zoals opmerkingen of artikelen. Het is daarom van essentieel belang dat de bestanden van de website en de database worden verbonden als de website correct functioneert. Om deze verbinding tot stand te brengen, wordt een configuratiebestand gebruikt dat de gegevens van de database bevat.

Afhankelijk van de gebruikte website, moet deze verbinding mogelijk handmatig worden gemaakt of via een interface die door de site zelf wordt gegenereerd. Het wordt gerealiseerd in verschillende deelstappen, waarvan sommige optioneel kunnen zijn.

#### 1. Herstel de bestaande database (optioneel).

Als u een bestaande website migreert, kunt u deze bestanden verkrijgen bij uw vorige hostingprovider. Als het een nieuwe website is, kunt u doorgaan naar de volgende stap.

#### 2. Maak de database aan bij OVHcloud (optioneel).

Als u al een database hebt en deze wilt gebruiken (vanuit een [OVHcloud webhostingplan](https://www.ovh.com/nl/shared-hosting/){.external} of een [private SQL](https://www.ovh.com/nl/shared-hosting/opties-sql.xml){.external}- of [Cloud DB](https://www.ovh.com/nl/cloud/cloud-databases/){.external}-oplossing), hebt u uw gebruikersnaam en wachtwoord, de naam van de database en het adres van de server nodig. Ga verder met de volgende stap.

Als u een nieuwe database bij OVHcloud wilt maken, meldt u zich aan bij uw [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} en klikt u vervolgens op `Hosting-plannen`{.action} in de dienstenbalk aan de linkerkant. Selecteer de naam van het betreffende hostingplan en klik op het tabblad `Database`{.action}.

Klik nu op de knop `Een database maken`{.action}, of klik, als deze knop nu wordt weergegeven, op `Acties`{.action} en vervolgens op `Een database maken`{.action}. Volg nu de weergegeven informatie.

![siteinstallation](images/get-website-online-step3.png){.thumbnail}


#### 3. Importeer de bestaande database (optioneel).

Als u een bestaande website migreert, kunt u uw bestaande database importeren in de nieuwe. Als het een nieuwe website is, kunt u doorgaan naar de volgende stap.

Er zijn verschillende methoden om een database te importeren. OVHcloud biedt een dergelijke methode in het Control Panel. Als u zich eenmaal bevindt in de lijst met databases die voor uw dienst zijn gemaakt in uw OVHcloud Control Panel, klikt u op de drie stippen rechts van de nieuw gemaakte database en vervolgens op `Bestand importeren`{.action}. Volg nu de weergegeven informatie.

![siteinstallation](images/get-website-online-step4.png){.thumbnail}

#### 4. Uw site aan de database koppelen

Zodra uw database beschikbaar is en u uw bestanden naar uw opslagruimte hebt geüpload, hoeft u ze alleen maar aan te sluiten. Hiervoor moet u over de informatie beschikken waarmee u verbinding kunt maken met de database: een gebruikersnaam, het bijbehorende wachtwoord, de naam van de database en het adres van de server.

Hoe deze verbinding tot stand komt, is afhankelijk van het type website dat u publiceert. Dit proces is afhankelijk van hoe uw website is geconfigureerd en heeft niets te maken met OVHcloud. We raden u daarom aan contact op te nemen met de editor van uw website of een vergelijkbare professional (zoals een gespecialiseerde serviceprovider) als u hulp nodig hebt bij deze procedure.

### Stap 4: Toegang tot uw website

Nadat u uw bestanden naar uw opslagruimte hebt geüpload en u uw database hierop hebt aangesloten (als uw website er een gebruikt), hebt u nu toegang tot uw website. Uw site moet correct worden weergegeven in uw webbrowser.

Als u merkt dat dit niet correct wordt weergegeven, raden wij u het volgende aan:

- **controleer de configuratie van de domeinnaam**: de DNS-configuratie van uw domeinnaam kan verhinderen dat de website die u zojuist hebt geüpload naar uw OVHcloud hostingruimte correct wordt weergegeven. Zorg ervoor dat het A-record die momenteel is geconfigureerd in de DNS-zone voor uw domein overeenkomt met het IP-adres van uw OVHcloud webhostingplan;

- **zorg ervoor dat er geen bestanden ontbreken**: bij het uploaden van uw bestanden naar uw OVHcloud webhostingruimte bent u mogelijk vergeten sommige bestanden over te zetten of is er mogelijk een fout opgetreden. Wees echter voorzichtig tijdens dit proces om te voorkomen dat verbindingen tussen de bestanden van de website en de database verbroken worden (als de website er een gebruikt).

- **controleer of de paginacode geen fout bevat**: deze controle is zeer technisch, maar er kunnen fouten optreden in de informatie die u downloadt waardoor de pagina slechts deels toegankelijk of helemaal niet toegankelijk is.

Ter herinnering: als u problemen ondervindt bij het publiceren van uw website, raden we u aan contact op te nemen met een gespecialiseerde provider en/of de uitgever van de dienst (bijvoorbeeld de CMS).

## Verder

[Migratie van uw website en e-mails naar OVHcloud](/pages/web/hosting/hosting_migrating_to_ovh/){.external}.

[Installatie van een website met 1-klik modules](/pages/web/hosting/cms_install_1_click_modules){.external}.

[Wijziging van het wachtwoord van een FTP-gebruiker](/pages/web/hosting/ftp_change_password){.external}.

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.