---
deprecated: true
title: 'Webhosting: FileZilla gebruikershandleiding'
excerpt: Hier leest u hoe u FileZilla kunt gebruiken.
id: '1380'
slug: webhosting_filezilla_gebruikershandleiding
legacy_guide_number: g1380
---


## Introductie
FileZilla is een software die beschikbaar is op meerdere besturingssystemen (Windows, MacOS, etc.).

Deze laatste geeft u ook de mogelijkheid om uw website te uploaden, door u in staat te stellen om verbinding te maken met uw (FTP) hosting ruimte.

Om dit te gebruiken, ga naar de site: [filezilla.fr](http://filezilla.fr/)

![FileZilla](images/2400.png){.thumbnail}


## Interface

## Inzicht in de weergave van FileZilla
De zone 1 geeft informatie over de status van de verbinding, de transfers, de storingen in de verbindingen, etc.
Over het algemeen is de vermelde informatie alleen interessant voor systeembeheerders etc. en niet bruikbaar voor leken.

De zone 2 toont het path naar de map van de website (of andere bestanden die u wilt overbrengen) op uw computer.

De zone 3 toont het path naar de map waar u momenteel bent op de server.

De zone 4 toont de directory die u heeft geopend op uw computer, inclusief de naam, de grootte, het type en de laatste wijzigingsdatum van de bestanden.

De zone 5 toont de directory die u heeft geopend op uw computer, inclusief de naam, de grootte, het type, de laatste wijzigingsdatum, de bestandsrechten en de eigenaar van de bestanden.

De zone 6 toont de wachtrij van de bestanden die zullen worden overgedragen (of die in uitvoering zijn) naar de server of op de computer. 

Het bovenste gedeelte van de interface (onder het groene vak) toont de hostnaam (de server waarmee u bent verbonden), de FTP gebruikersnaam, het wachtwoord en de gebruikte port.

![FileZilla](images/1818.png){.thumbnail}

## Menubalk
De menubalk bevat nuttige icons voor de toegang tot de basisfuncties van het programma. Voor de overdracht van bestanden zijn deze niet allemaal nodig. Een overzicht:

 Opent het beheer van de sites
 Weergave van het berichten-protocol activeren/deactiveren (1)
 Weergave van de lokale directory activeren/deactiveren (2)
 Weergave van de tree view remote files activeren/deactiveren (3)
 Weergave van de wachtrij activeren/deactiveren (6)
 De lijst met bestanden en mappen updaten
 Afhandeling van de wachtrij activeren/deactiveren 
 Annuleren van de huidige actie 
 Verbreekt de huidige verbinding naar de server 
 Herstelt de verbinding naar de laatst gebruikte server 
 Opent het dialoogvenster voor filter beheer 
 Directory activeren/deactiveren
 Gesynchroniseerde navigatie activeren/deactiveren
 Recursief zoeken naar bestanden


## FTP-verbinding
Om verbinding met de remote server te maken, moet u in het groene vak hierboven het volgende invoeren:

- Host: ftp.uw-domein.tld of ftp.cluster0XX.ovh.net of newftp.cluster0XX.ovh.net
- Gebruikersnaam: uw FTP login
- Wachtwoord: het FTP wachtwoord om in te loggen
- Port: kan leeg blijven (eventueel 21)


Zodra alle gegevens correct zijn ingevoerd, klikt u op snel verbinden om de verbinding met de server tot stand te brengen.

![FileZilla](images/1819.png){.thumbnail}


## SFTP-verbinding
De SFTP (voor SSH File Transfer Protocol) is een FTP-verbinding op de port 22 en verschaft aldus een ​​veilige verbinding.
Let op, dit soort verbinding is slechts geldig via het [Pro](https://www.ovhcloud.com/fr/web-hosting/) aanbod.
Hiermee kunt u bestandsrechten wijzigen die u niet kunt uitvoeren, terwijl u bijvoorbeeld bent ingelogd in FTP op port 21.

Om verbinding te maken met de remote server, moet u in het groene vak hierboven, het volgende invoeren:

- Host: ftp.uw-domein.tld of ftp.cluster0XXovh.net of newftp.cluster0XX.ovh.net 
- Gebruikersnaam: uw FTP-login
- Wachtwoord: het FTP-wachtwoord om in te loggen
- Port: 22 deze keer


Klik op snel verbinden, dit zal een dialoogvenster (zie hierboven) openen om de verbinding met de server te controleren. 
Als u verbinding maakt met een OVHcloud server, kunt u aanvinken: "Deze host altijd vertrouwen, deze key toevoegen aan de cache", zodat er de volgende keren niet meer om deze bevestiging wordt gevraagd.

![FileZilla](images/1834.png){.thumbnail}


## Verbindingsfouten
Het bericht vertelt ons of er een identificatie fout is, tijdens het inloggen naar de FTP webhosting.

Dit type bericht wordt gegenereerd door een fout in: Login//Mdp

Dit type bericht wordt gegenereerd door een fout in de combinatie: Login // wachtwoord

Controleer of uw inloggegevens juist zijn, indien nodig kunt u het wachtwoord voor de FTP-toegang tot uw hosting direct in het control panel wijzigen.

Een handleiding is beschikbaar voor de wijziging van het FTP-wachtwoord op uw webhosting:[]({legacy}1374)

![FileZilla](images/1820.png){.thumbnail}
In dit geval wordt de fout gegenereerd door een onjuiste hostnaam.

![FileZilla](images/1824.png){.thumbnail}


## Het overzetten van bestanden
Om uw FTP bestanden over te dragen, kunt u deze eenvoudig selecteren en uitvoeren via 'drag and drop' van de bestanden van het linkerscherm (uw lokale bestanden) naar het rechterscherm (uw webhosting ruimte).


- Wees voorzichtig met het selecteren van de target map in het rechtervenster.


Zodra dit is gebeurd, worden de bestanden automatisch in de wachtrij gezet, zodat het later op de server kan worden geplaatst.

![FileZilla](images/1821.png){.thumbnail}


## De wachtrij bekijken
Een overzicht van de wachtrij is beschikbaar.

Op dit niveau zult u vinden:


- bestanden die wachten om te worden geplaatst op de remote server en die nog aanwezig zijn in de wachtrij.

- bestanden waarvoor de overdracht is mislukt.

- bestanden waarvoor de overdracht succesvol was op de remote hosting.



![FileZilla](images/1822.png){.thumbnail}


## Server contextmenu
Klik met de rechtermuisknop op een van de aanwezige bestanden (zie hoofdstuk 5).

Een snelmenu verschijnt, en verschillende keuzes worden weergegeven:

Downloaden: download het bestand in de lokaal geopende map.

Het toevoegen van bestanden aan de wachtrij:voeg het bestand toe aan de wachtrij, u kunt bijvoorbeeld het downloaden van de data uitstellen.

Weergeven/Bewerken: u kunt een bestand direct bekijken of bewerken op uw webhosting, u dient daarvoor echter wel de juiste software te hebben.

Maak een map aan: u kunt een nieuwe map direct op de remote hosting aanmaken.

Vernieuwen: vernieuwt de weergave van de gegevens, om de nieuwe bestanden correct weer te geven..

Verwijderen: u kunt het geselecteerde bestand verwijderen.

Hernoemen: u kunt het geselecteerde bestand een andere naam geven.

Kopieer het(de) adres(sen) in het clipboard: u kunt de directe link automatisch naar het geselecteerde bestand kopiëren.
Voorbeeld van een URL die kan worden gegenereerd:  ftp://loginftp@ftp.cluster0XX.ovh.net/www/mondossier1/monfichier.jpg

Bestandsrechten: dit geeft u de mogelijkheid om de bestandsrechten (CHMOD) te wijzigen(

![FileZilla](images/1830.png){.thumbnail}


## Rechten op bestanden & mappen
Voor toegang tot deze interface, klikt u met de rechtermuisknop op een van de bestanden op de server, en selecteert u vervolgens "bestandsrechten".

In deze interface heeft u de mogelijkheid om de (CHMOD) rechten van uw bestanden en mappen op de hosting te wijzigen.

Voer de rechten in, die u wilt toewijzen en de CHMOD waarde zal automatisch worden geüpdatet.

Vink aan: "recursie in de submappen".

Dit zal invloed hebben op de rechten van de map in kwestie, evenals de mappen en bestanden die daarin aanwezig kunnen zijn.

![FileZilla](images/1831.png){.thumbnail}


## Heropenen van de site
Open FileZilla, klik op "Server" en selecteer "Voer een aangepast commando in".

In FileZilla, in de plaats van "Voer een aangepast commando in", is het mogelijk dat u "Voer een FTP commando in" krijgt.

Voer het volgende commando uit:


```
SITE CHMOD 705 /
```


Als u de volgende foutmelding krijgt:

550 would not chance perms on /. not such file or directory

U moet in dit geval het volgende commando gebruiken:


```
SITE CHMOD 705 .
```


Om te controleren of de heropening effectief was, kunt u simpelweg uw site vanaf de internetbrowser testen.

Dit commando werkt niet in SFTP.

![FileZilla](images/1829.png){.thumbnail}
Ter herinnering: zorg ervoor dat u het display test in  maximaal 3 uur. Onze robots controleren elke 3 uur de status wijzigingen. Afhankelijk van wanneer de instructies hierboven werden uitgevoerd, zal het herstel van het display van uw site sneller of langzamer verlopen.

Als er drie uur zijn verstreken en uw site is nog niet online, dan kunt u contact opnemen met ons support team.


## Het overzetten van de bancaire bestanden
Voor binaire bestanden, bijvoorbeeld CGI bestanden, kan het interessant zijn om de methode te kiezen waarmee de overdracht wordt voltooid.

Om dit te wijzigen, selecteer "Transfer" in het hoofdmenu, vervolgens "Transfer Type".

![FileZilla](images/1832.png){.thumbnail}


## Vergelijking van het bestand
Deze optie toont de kleuren in de zones 3 en 4 om de verschillen te vergelijken tussen de lokale bestanden en mappen en de server.
Door te klikken op het icon , kunt u de vergelijkingsmodus wijzigen. 
U kunt dan de optie activeren of deactiveren, maar ook:

- de grootte van de bestanden vergelijken
- de timestamp vergelijken
- identieke bestanden verbergen


Kleuren:

- Geel: het bestand bestaat slechts aan een kant
- Groen: het bestand is recenter dan het niet-gemarkeerde bestand aan de andere kant
- Rood: de bestanden hebben een verschillende grootte



![FileZilla](images/1823.png){.thumbnail}


## Voorkeuren

## Verbinding
Het is mogelijk om de herverbindingsinstellingen te wijzigen op de server.

Maar wees voorzichtig, dit kan als misbruik door sommige servers worden beschouwd en uw IP-adres kan worden geblokkeerd.

Om deze instellingen te wijzigen, gaat u naar "Bewerken" en dan "Instellingen" en vervolgens "Verbinding".

![FileZilla](images/1825.png){.thumbnail}

## Transfers (overdragen van bestanden)
Het is mogelijk om de voorkeuren te wijzigen inzake de standaardacties die worden uitgevoerd bij het bewerken van een bestaand bestand. 

Om deze instellingen te wijzigen, gaat u naar "Bewerken" en vervolgens naar "Instellingen" en dan naar "transfers".

![FileZilla](images/1826.png){.thumbnail}


## Het kennen van de login server
In sommige gevallen kan ons support team vragen op welke server u bent verbonden met FileZilla.

Met deze verificatie kan bijvoorbeeld worden ingegrepen, indien u eventuele vertragingen of diverse afwijkingen constateert op uw FTP ruimte. Om dit te vinden:

- Raadpleeg in het onderstaande kader uw wachtwoord
- Vervang alle top logs
- Verhoog de webmXXX



![FileZilla](images/2399.png){.thumbnail}

