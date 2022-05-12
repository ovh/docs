---
deprecated: true
title: 'Webhosting: Handleiding voor het gebruik van Cyberduck (MAC)'
excerpt: 'Webhosting: Handleiding voor het gebruik van Cyberduck (MAC)'
id: '1598'
slug: webhosting_handleiding_voor_het_gebruik_van_cyberduck_mac
legacy_guide_number: g1598
---


## Presentatie
Cyberduck is een applicatie die op Mac beschikbaar is.

Dit geeft u ook de mogelijkheid om uw website te uploaden door verbinding te maken met uw hosting (FTP) ruimte.

Om hiervoor te kwalificeren, verwijzen wij u naar de officiële website van de applicatie: 


- Officiële Cyberduck Website (dit is geen OVH site): [cyberduck.io](https://cyberduck.io/)



![cyberduck macOS](images/2344.png){.thumbnail}
Cyberduck is een applicatie voor gebruikers die MAC gebruiken. Als u een machine met Windows gebruikt, heeft het gebruik van FileZilla de voorkeur: []({legacy}1380)


## Interface
Wanneer u voor het eerst de applicatie start, ziet u het onderstaande scherm.

- In het bovenste gedeelte kunt u snel een ​​nieuwe verbinding en toegang tot verschillende acties aanmaken, als u heeft ingelogd op uw FTP (hernoemen, bewerken, etc.).

- In het middelste gedeelte kunt u de Signets toevoegen (hun pre-geregistreerde FTP-verbindingen), en eenmaal ingelogd, kunt u de inhoud van uw hosting ruimte bekijken.

- In het onderste gedeelte kunt u informatie over een lopende actie (koppeling naar de FTP-server) bekijken, evenals een aantal logs om bijvoorbeeld een ​​nieuw signet toe te voegen.



![cyberduck macOS](images/2343.png){.thumbnail}
Pas de weergave aan van Cyberduck naar uw persoonlijke wensen
Het is mogelijk om de weergave van Cyberduck aan te passen om het efficiënter en persoonlijker te maken.

Om deze wijziging uit te voeren, klik op  Presentatie, dan op Aanpassen toolbar ....

Op het scherm dat nu verschijnt, sleept u de gewenste items naar de toolbar. Om deze wijzigingen op te slaan, klik op Voltooid

![cyberduck macOS](images/2345.png){.thumbnail}


## FTP gebruik
Volg de onderstaande stappen, om in te loggen op uw hosting ruimte (FTP):

1. Klik Nieuw inloggen linksboven

2. Voer in het nieuwe scherm uw inloggegevens in op uw FTP ruimte:

- FTP-server
- Gebruikersnaam
- Wachtwoord
- Port (21)

3. Selecteer Wachtwoord onthouden als u wilt dat Cyberduck uw wachtwoord herinnert

4. Klik op Inloggen om verbinding te maken met uw hosting ruimte (FTP)


![cyberduck macOS](images/2361.png){.thumbnail}

- U kunt uw wachtwoord in Cyberduck registreren door te selecteren Toevoeging onthouden van toegang. Deze keuze is niet verplicht; door het niet te selecteren, moet u het wachtwoord opnieuw invoeren om opnieuw in te loggen op uw hosting ruimte.

- Als u uw FTP wachtwoord niet weet, raadpleeg dan de onderstaande handleiding: [url="http://www.ovh.com/fr/g1374.mettre-mon-site-en-ligne#deposer_mes_fichiers_en_ftp_recuperer_mes_identifiants_ftp"]Mijn FTP inloggegevens ophalen/url].


Een alert verschijnt, waarin wordt vermeld: de server ondersteunt de versleutelde (SSL) verbindingen.

- Onze server is niet compatibel met de FTP-SSL, selecteer Niet meer weergeven en selecteer Verdergaan.

- Als u een beveiligde verbinding wilt gebruiken, moet u een [SFTP-verbinding](#utiliser_cyberduck_connexion_sftp) gebruiken. Deze verbinding is alleen beschikbaar als u SSH-toegang in uw webhosting aanbod heeft.



![cyberduck macOS](images/2349.png){.thumbnail}

- Als u niet weet of SSH-toegang is inbegrepen in uw aanbod, zie [beschrijving van ons aanbod](http://www.ovh.com/fr/hebergement-web/).

- Als u nog niet zeker bent van uw keuze, kies standaard Verdergaan. De server zal de verbinding weigeren als u geen SSH-toegang tot uw aanbod heeft.



- Wij raden u aan uw inloggegevens op te slaan via een Signet. Op deze manier kunt u in het geheugen bepaalde inloggegevens bewaren. 

- Check zo nodig dit gedeelte van de handleiding:[Wat is een Signet?](#utiliser_cyberduck_quest-ce_quun_signet).




## SFTP verbinding
Als uw webhosting compatibel is met een SSH toegang, kunt u inloggen via SFTP. Het is noodzakelijk gebruik te maken van deze toegang zodat de SFTP-verbinding functioneert.

- Als u niet weet of de SSH toegang is inbegrepen in uw webhosting, zie [beschrijving van ons aanbod](http://www.ovh.com/fr/hebergement-web/).

- Als u niet zeker bent van uw keuze, selecteer een [FTP-verbinding](#utiliser_cyberduck_connexion_ftp) in plaats van SFTP. De server weigert verbinding als u niet beschikt over een SSH-toegang in uw aanbod.


Om in te loggen op uw hosting ruimte, volg de onderstaande stappen: 

1. Klik op Nieuw inloggen linksboven.

2. Selecteer in het drop-down menu SFTP (bestandsoverdracht via SSH-protocol) (oranje vakje in de afbeelding)

3. Voer uw inloggegevens in op uw FTP ruimte:

- FTP-server 
- Gebruikersnaam
- Wachtwoord
- Port (22)

4. Selecteer Wachtwoord onthouden als u wilt dat Cyberduck uw wachtwoord onthoudt.

5. Klik op Inloggen om in te loggen op uw hosting ruimte (FTP).


![cyberduck macOS](images/2362.png){.thumbnail}

- U kunt uw wachtwoord in Cyberduck registreren door te selecteren Toevoeging onthouden van toegang. Deze keuze is niet verplicht; door het niet te selecteren, moet u het wachtwoord opnieuw invoeren om opnieuw in te loggen op uw hosting ruimte.

- Als u uw FTP wachtwoord niet weet, raadpleeg dan de onderstaande handleiding: [url="http://www.ovh.com/fr/g1374.mettre-mon-site-en-ligne#deposer_mes_fichiers_en_ftp_recuperer_mes_identifiants_ftp"]Mijn FTP inloggegevens ophalen/url].


Wanneer u voor het eerst inlogt op uw hosting ruimte, een scherm De host is momenteel onbekend met het systeem zal verschijnen.

- Selecteer Altijd klik dan op Toestaan. Hierdoor kunt u definitief de inlog-host (dit is OVH) certificeren.



![cyberduck macOS](images/2363.png){.thumbnail}

- Wij raden u aan uw inloggegevens op te slaan via een Signet. Op deze manier kunt u in het geheugen bepaalde inloggegevens bewaren. 

- Check zo nodig dit gedeelte van de handleiding:[Wat is een Signet?](#utiliser_cyberduck_quest-ce_quun_signet).




## Verbindings errors
Bij een poging om in te loggen op uw hosting ruimte, is het mogelijk dat er een error verschijnt in Cyberduck. U vindt hieronder de 2 meest voorkomende errors die u kunt tegenkomen.
Inloggen mislukt
Dit bericht wordt vergezeld van de zinsnede 530 Inlog authentificatie mislukt. In de meeste gevallen is deze error gerelateerd aan de inloggegevens die u heeft ingevuld: deze laatste zijn zeker onjuist.


- Daarom moet u de inloggegevens die u heeft opgegeven controleren

- Indien nodig, moet u ook het Signet dat u heeft gemaakt veranderen (selecteer dit en klik op het potlood logo)



![cyberduck macOS](images/2352.png){.thumbnail}

- Als u uw FTP wachtwoord niet weet, kunt u de volgende handleiding raadplegen: [Mijn FTP inloggegevens ophalen](http://www.ovh.com/fr/g1374.mettre-mon-site-en-ligne#deposer_mes_fichiers_en_ftp_recuperer_mes_identifiants_ftp).


Inloggen mislukt
Dit bericht wordt vergezeld van de zin Timed out waiting for initial connect reply. Dit bericht betekent meestal dat de host niet beschikbaar is: het is ongeldig of niet beschikbaar.


- Controleer daarom de inloggegevens die u heeft gebruikt

- Indien nodig, moet u ook het 'signet', dat u heeft aangemaakt, veranderen (selecteer dit en klik op het potlood logo)


De fout kan ook worden veroorzaakt door een firewall of LAN, die port 21 of 22 blokkeert, deze ports worden gebruikt om verbinding te maken met FTP. U moet in dit geval uw persoonlijke instellingen controleren.

![cyberduck macOS](images/2353.png){.thumbnail}

- Ter herinnering, de inlog host voor uw hosting ruimte is ftp.uw-domein.tld (vervangen door uw domeinnaam) of ftp.clusterXXX.ovh.net (vervang XXX met uw cluster nummer).

- Indien nodig, kunt u de hieronder staande handleiding raadplegen: [Het ophalen van mijn FTP wachtwoord](http://www.ovh.com/fr/g1374.mettre-mon-site-en-ligne#deposer_mes_fichiers_en_ftp_recuperer_mes_identifiants_ftp).




## Wat is een 'Signet'?
Om toegang tot uw (FTP) hosting ruimte te vergemakkelijken, raden wij u aan het Signet systeem te gebruiken. Dit stelt u in staat om uw inlog-gegevens vooraf te registreren.

Om deze toevoeging door te voeren: 


- Log in op uw (FTP of SFTP) hosting ruimte
- Ga naar de weergave van de Signets (blauw, dan groen vakje van de afbeelding)
- Klik op het logo in de vorm van [+] (oranje vakje) links onderaan het scherm



![cyberduck macOS](images/2346.png){.thumbnail}
Een nieuw scherm verschijnt met daarin uw inloggegevens. De volgende keer dat Cyberduck start, kunt u dubbelklikken op het 'signet' om sneller in te loggen.


## Bestanden overdragen
Met het overdragen van bestanden, kunt u de bestanden plaatsen in de hosting ruimte van uw website. Standaard, moet u op deze ruimte uw bestanden plaatsen in de www directory (map).

U kunt uw bestanden op verschillende manieren overdragen.
Via drag&drop
Om bestanden naar FTP te verplaatsen, kunt u de bestanden selecteren en implementeren via drag&drop in het scherm van de lokale map (de bestanden op uw computer) naar het Cyberduck scherm (uw schijfruimte op de hosting).


- Zodra dit is gebeurd, worden uw bestanden automatisch in de wachtrij op de server geplaatst. Een scherm zal dienovereenkomstig verschijnen.



![cyberduck macOS](images/2354.png){.thumbnail}
Via de overdragende interface
U kunt de overdragende[/ blue] interface gebruiken, die een scherm opent en u kunt uw bestanden bekijken. U moet de bestanden die u nodig heeft selecteren en op Transfer klikken.


- Zodra dit is gebeurd, worden uw bestanden automatisch in de wachtrij op de server geplaatst. Een scherm zal dienovereenkomstig verschijnen.



![cyberduck macOS](images/2355.png){.thumbnail}
Bekijk de transfers die nu uitgevoerd worden
U kunt de historie bekijken van de transfers naar uw hosting ruimte. U vindt hier: 


- Bestanden die wachten op de externe server die al in de wachtrij staan (of verzonden worden)
- Bestanden waarvoor de overdracht is mislukt
- Bestanden waarvoor de overdracht succesvol was naar de externe server


Dit scherm wordt op twee manieren weergegeven: 


- Automatisch na het starten van de overdracht 
- klik op Scherm dan Transfers



![cyberduck macOS](images/2356.png){.thumbnail}


## Mogelijke acties op een bestand/map
Door een bestand of een map te selecteren op uw webruimte (in het Cyberduck scherm), kunt u verschillende  Acties uitvoeren.

Dit laatste zal u toelaten om:


- Lees de gegevens van een bestand of een map en wijzig de (CHMOD) rechten 
- Bewerk het bestand met de applicatie van uw keuze
- Wijzig de naam van het bestand of de map
- Verwijder het bestand of de map
- Download het(de) geselecteerde item(s)
- Een nieuwe map of bestand aanmaken


De bovenstaande lijst is niet uitputtend, er zijn andere mogelijke acties. Ga naar de officiële website van Cyberduck indien nodig.

![cyberduck macOS](images/2357.png){.thumbnail}


## Rechten voor bestanden en mappen
U kunt de (CHMOD)rechten wijzigen van bestanden en mappen op uw hosting.

Deze laatste zijn onderverdeeld in 3 groepen: 


- Eigenaar
- Groep
- Publiek (overig) 


Om toegang te krijgen tot deze interface, selecteer het(de) bestand(en) en/of de map(pen) die u wilt, danActies, klik op "De gegevens lezen".

Op het nieuwe scherm, klik opPermissies voer vervolgens de gewenste wijzigingen door:  


- UNIX Permissies: de waarde zal automatisch de vakjes updaten onder de 3 groepen 
- Vink de gewenste vakjes aan: de waarde wordt automatisch bijgewerkt voor de UNIX permissies



![cyberduck macOS](images/2358.png){.thumbnail}


## Heropening van de site
U kunt uw site heropenen met behulp van een aangepast commando.

In de meeste gevallen, moet deze wijziging worden gemaakt, nadat uw host door OVH werd gesloten na een hack poging.

Om een commando te gebruiken: 


- Klik op Gaan
- Klik op Een command sturen...



![cyberduck macOS](images/2359.png){.thumbnail}
Voer in het nieuwe scherm het volgende command in:


- CHMOD 705/
- Klik op Verzenden


Ter bevestiging, het bericht 200 Permissies gewijzigd op / zal verschijnen in het vakje hieronder.


- Om te controleren of de heropening effectief is, test u uw site via een webbrowser.



![cyberduck macOS](images/2360.png){.thumbnail}

- Dit command werkt niet in SFTP. Om het te kunnen gebruiken, gebruikt u een [FTP login](#utiliser_cyberduck_connexion_ftp).

- Ter herinnering, bekijk de weergave van de pagina na maximaal 3 uur. Inderdaad, onze robots controleren elke drie uur de status, om wijzigingen te controleren. 

- Indien drie uur is verstreken en de site nog steeds niet online is, neem dan svp contact op met ons support team.




## Informatie over de server verbinding
In sommige gevallen kan ons support team vragen naar de server die is verbonden met Cyberduck.

Dit kan bijvoorbeeld gebeuren als u vertragingen of diverse afwijkingen met uw FTP ruimte opmerkt.

Hiervoor moet u eerst het log activeren:


- Klik op Inleiding
- Klik op Het log weergeven/verbergen


Er moet een kader worden weergegeven onderaan het Cyberduck scherm. Daarna:


- Log in op uw FTP-ruimte
- Ga naar de bovenkant van het log
- Download webmXXX



![cyberduck macOS](images/2364.png){.thumbnail}

