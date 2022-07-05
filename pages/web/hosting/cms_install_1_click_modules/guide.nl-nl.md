---
deprecated: true
title: Installatie van een site met 1-klik modules
slug: 1-klik-modules
excerpt: Ontdek hoe u uw site kunt installeren met onze 1-klik modules
section: CMS
---

**Laatste update 19-01-2018**

## Introductie

De 1-klik modules maken een eenvoudige en snelle installatie van een Website mogelijk (geen technische expertise vereist).  De meest bekende CMS worden hiervoor gebruikt: WordPress, PrestaShop, Drupal en Joomla!.

**Ontdek hoe uw site te installeren met onze 1-klik modules.**

## Vereisten

- U moet beschikken over een [webhosting](https://www.ovhcloud.com/nl/web-hosting/){.external}.
- U moet erbonden zijn met de [OVHcloud klantenruimte](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.
- Bestanden hoeven niet te worden gedownload in de directory waar uw module wordt geïnstalleerd.
- Het domein (indien gewenst met subdomein) dat gebruikt zal worden voor uw website moet aangemeld zijn als multisite.

## Instructies

### Kies de juiste CMS

Een CMS (Content Management System) stelt u in staat een website te maken via een gebruiksvriendelijke interface. Er bestaan verschillende soorten, afhankelijk van uw project. U kunt zo beschikken over een sitestructuur die gebruiksklaar is om naar wens te personaliseren (thema, tekst, enz.)

OVHcloud biedt 4 CMS met 1-klik modules. Wanneer u deze oplossing gebruikt, moet u dus in deze lijst uw keuze maken. Als u hier al een van hebt gekozen, kunt u doorgaan met de verschillende stappen van deze handleiding. Zo niet, dan kan deze [CMS vergelijking](https://www.ovhcloud.com/nl/web-hosting/uc-cms-comparison/){.external} u helpen in uw keuze.

Als u een CMS wilt installeren dat niet door de OVHcloud 1-klik modules wordt aangeboden, dan kunt u het altijd handmatig op uw hosting installeren, onder voorbehoud van de compatibiliteit van dit CMS met uw product (vind ons product [hier](https://www.ovhcloud.com/nl/web-hosting/){.external}).

![CMS logo](images/CMS_logo.png){.thumbnail}

### Toegang tot het beheer van de 1-klik modules

In het linkermenu in uw OVHcloud Control Panel, gaat u naar het onderdeel `Hosting`{.action} en dan naar de betreffende hosting. Klik nu op de tab `1-klik modules`{.action}.

U kunt er de verschillende reeds eerder geïnstalleerde 1-klik modules bekijken, ze beheren en er nieuwe installeren.

![Toegang tot het onderdeel 1 klik modules](images/access_to_the_1_click_modules_section.png){.thumbnail}

### Voeg een module toe

De installatie van een nieuwe 1-klik module start door op de knop `Een module toevoegen`{.action} te klikken.

Kies in het venster dat verschijnt het gewenste CMS en dan het domein waarop u uw site wilt installeren:

![Keuze van de module](images/add_a_module.png){.thumbnail}

Als u niet het gewenste domein in de lijst vindt, ga dan naar de tab `Multisite`{.action} om hem toe te voegen, en probeer opnieuw om een module toe te voegen.

Voor hulp kunt u ook de handleiding raadplegen [Webhosting delen tussen verschillende sites](https://docs.ovh.com/nl/hosting/multisite-configuratie-meerdere-websites/){.external}.

Wanneer u het domein hebt geselecteerd, moet u kiezen tussen een eenvoudige of een geavanceerde installatie:

- De eenvoudige installatie (standaard geselecteerd): wij voeren de CMS-installatie uit en geven u uw gebruikersgegevens voor het beheer. Het is de eenvoudigste en snelste manier om een module te installeren.
- De geavanceerde installatie: u kunt de configuratie voor de toepassing van de CMS-installatie personaliseren. Hiervoor moet u informatie in uw database invullen die essentieel is voor de goede werking van het CMS: informatie over de verbinding, installatie-directory, taal, gebruikersnaam beheerder, enz.

#### eenvoudige installatie van een module

Verzeker u voor het uitvoeren van deze installatie dat het vakje `Geavanceerde installatie`{.action} niet is aangevinkt, klik vervolgens op de knop `Installeren`{.action}.

> [!warning]
>
> De installatie-directory van uw module moet leeg zijn en u moet over een beschikbare database beschikken zodat de installatie kan worden uitgevoerd. 
> 

![Eenvoudige installatie van een module](images/choose_installation.png){.thumbnail}

Wanneer de installatie is voltooid ontvangt u een e-mail met de benodigde informatie voor uw verbinding met de beheerdersinterface van het CMS. Log nu in om uw site te personaliseren.

#### Geavanceerde installatie van een module

Verzeker u voor het uitvoeren van deze installatie dat het vakje `Geavanceerde installatie`{.action} is aangevinkt, klik vervolgens op de knop `Volgende`{.action}.

![Geavanceerde installatie van een module](images/advanced_installation.png){.thumbnail}

##### Kies de database 

Nu moet u de informatie voor de verbinding aan uw database opgeven. Er zijn meerdere mogelijkheden:

- De database is al op uw hosting aangemaakt: kies deze in de lijst en vul de gevraagde informatie in;
- De database is nog niet op uw hosting aangemaakt: volg de aanwijzingen om deze aan te maken, en voer opnieuw de handeling uit;
- De database wordt op mijn Private SQL instance of CloudDB aangemaakt: selecteer in de lijst `Database buiten uw webhosting om`{.action} en vul de gevraagde informatie in. De instance en de webhosting moeten in hetzelfde datacenter worden gehost;
- De database is op een andere OVHcloud webhosting aangemaakt: selecteer in de lijst `Database buiten uw webhosting om`{.action} en vul de gevraagde informatie aan. De database en de webhosting moeten in hetzelfde datacenter worden gehost;

Wanneer de informatie volledig is ingevuld klikt u op de knop `Volgende`{.action}.

> [!warning]
>
> Als de informatie die u aangeeft niet juist is kan de installatie niet worden voltooid. Om dit te voorkomen vragen we u om eerst uw verbinding op uw database te testen.
> 

![Database voor geavanceerde installatie](images/advanced_installation_database.png){.thumbnail}

##### Configureer de module 

U moet nu voor de configuratie de volgende informatie invullen:

- *naam of e-mail van de beheerder: *dit is de gebruikersnaam die u gebruikt om in te loggen met het beheer van uw CMS; 
- *wachtwoord: *dit is het wachtwoord dat u gebruikt om in te loggen op de beheerinterface van uw CMS;
- *domein: *dit is het domein waarop u uw site wilt installeren;
Voor hulp kunt u ook de handleiding raadplegen [Mijn webhosting verdelen over verschillende sites](https://docs.ovh.com/nl/hosting/multisite-configuratie-meerdere-websites/).
- *taal: *dit is de taal waarin het CMS wordt geïnstalleerd;
- *installatieroute: *deze laatste wordt automatisch ingevuld bij de selectie van het domein. U heeft de mogelijkheid om hem aan te vullen door er subdirectories in te vullen. 

Wanneer deze informatie volledig is ingevuld klikt u op de knop `Volgende`{.action}:

> [!warning]
>
> De ingevulde installatieroute moet volledig leeg zijn om de installatie af te kunnen ronden.
> 

![Configuratie van de module voor geavanceerde installatie](images/advanced_installation_configuration.png){.thumbnail}

##### Bevestig de installatie 

Laatste stap van de geavanceerde installatie, wij vragen u de getoonde informatie te controleren, klik vervolgens op `Bevestigen`{.action}:

![Bevestiging van de installatie in geavanceerde modus](images/advanced_installation_summary.png){.thumbnail}

### Personaliseer uw site 

U ontvangt een e-mail met de bevestiging dat de installatie van de CMS module is gelukt en waarin u gevraagd wordt om in te loggen op de beheerinterface. Hier kunt u het thema van uw website veranderen en uw eerste inhoud publiceren.

Wanneer u hulp bij de functies van uw site wilt, kunt u naar de site-editor van het CMS gaan, waar u de documentatie vindt om u te begeleiden bij uw project.

|CMS|Officiële documentatie|
|---|---|
|WordPress|[Aan de slag met WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}|
|PrestaShop|[Aan de slag met PrestaShop](http://doc.prestashop.com/display/PS17/Getting+Started){.external}|
|Joomla!|[Aan de slag met Joomla!](https://www.joomla.org/about-joomla/getting-started.html){.external}|
|Drupal|[Leer meer over Drupal](https://www.drupal.org/docs/7/understanding-drupal/overview){.external}|

## Verder

[Een CMS kiezen om een website te maken](https://www.ovhcloud.com/nl/web-hosting/uc-cms-comparison/){.external}

[Webhosting delen tussen verschillende sites](https://docs.ovh.com/nl/hosting/multisite-configuratie-meerdere-websites/){.external}.

Ontdek ons [Private SQL product](https://www.ovhcloud.com/nl/web-hosting/options/start-sql/){.external}

Ontdek ons [CloudDB product](https://www.ovh.nl/cloud/cloud-databases/){.external}

Ga in gesprek met onze community gebruikers via <https://community.ovh.com/en/>
