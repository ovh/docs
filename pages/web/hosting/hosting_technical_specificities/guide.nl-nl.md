---
deprecated: true
title: 'Hosting: technische kenmerken van de webhosting'
excerpt: 'Hosting: technische kenmerken met betrekking tot webhosting'
slug: hosting_technische_kenmerken_van_de_webhosting
legacy_guide_number: g1463
updated: 2022-11-18
---


## FTP software - Passief
U kunt uw FTP-software op deze manier updaten:

Voor FileZilla:

Ga naar de tab "Edit" - "Instellingen ..." - "Inloggen"  - "FTP"

Vink het vakje "Passief (aanbevolen)" aan, rechts in het gedeelte "Transfer Modus".

Voor Cyberduck:

Klik op "Nieuw inloggen".

Selecteer vervolgens de pijl "Meer opties" kiezen "Passief" in "Inlogmodus".


## Gelijktijdige verbindingen naar de database.
-Momenteel zijn de webhosting databases (Perso/Pro/Module) beperkt tot 30 gelijktijdige verbindingen.


## Verbindingen vanaf een externe server.

- Voor veiligheidsredenen is het niet mogelijk om te verbinden vanaf een  externe server op een webhosting database.


Slechts de OVH hosting servers kunnen verbinding maken met de MySQL-server.

Elke andere verbinding zal de volgende fout genereren:


```
Warning: MySQL Connection Failed: Host "ip.votre.connexion" is not allowed to connect ...
```



- Dit geldt ook voor het huidige Private SQL aanbod.




## Variabelen SQL hosting server
Bijvoorbeeld om de waarde van max_allowed_packet te vinden?

Ga naar de PhpMyAdmin interface, voer dan in de SQL-verzoeken console in: show variables;

De lijst van de server variabelen wordt weergegeven.


## PHP-FPM
We passen onze PHP-FPM aan onze Webinfrastructuur aan, om PHP-responses te versnellen. 

In onze lab tests krijgen we prestaties, die tot 7 keer sneller zijn dan het oude mechanisme. 

Een handleiding is beschikbaar mbt het gebruik van PHP-FPM:


- []({legacy}1175)


Sommige servervariabelen worden aangepast via het gebruik van PHP-FPM:

|Variable|zonder PHP-FPM|met PHP-FPM|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|



- Voor het hoofddomein is het .ovhconfig bestand functioneel op de root van de hosting of in de subdirectory op niveau 1 (bijv.: /www/) maar niet in de directories op niveau 2 of hoger (bijv.: /www/test/, /www/test/test2/).

- PHP-FPM is standaard actief op het webhosting 2014 aanbod.




## Relatief path van de server
Na een beveiligingsupdate (04/06/2014) op de server, is het relatieve path geretourneerd op de server gewijzigd. 

Via het gebruik van een script, zoals: 


```
<?php
echo $_SERVER['SCRIPT_FILENAME'];
?>
```


Het geretourneerde path was van het type: /homez.XXX/USER/Nom_DOSSIER/test.php

Het hoofdaccount is nu: /home/USER/Nom_DOSSIER/test.php


- Compatibiliteit blijft gewaarborgd door symbolische links ( /homez.XXX/USER was een link naar /home/USER )


De symbolische links blijven nog steeds van kracht.


## Host van de server
Het is niet mogelijk de host direct te herstellen via de REMOTE_HOST functie:


```
<?php
echo $_SERVER['REMOTE_HOST'] ;
?>
```


U kunt echter de functie gethostbyaddr() gebruiken


```
<?php
echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
?>
```




## FTP via PHP
Na een beveiligingsupdate (04/06/2014) op de webhosting servers, is de FTP-verbinding via PHP in actieve modus niet mogelijk. 

PHP fout die u kunt tegenkomen:


```
Warning: ftp_put() [function.ftp-put]: bind() failed: Permission denied (13)
```


De bind() functie is niet meer mogelijk

Om dit te vermijden, activeer de passieve modus: 

PHP code:

```
$conn_id = ftp_connect($ftp_server);
$login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);
# switch naar passieve modus (verplicht op Ovh webhosting)
ftp_pasv( $conn_id, true );
```



- De actieve FTP is niet meer mogelijk, u moet in dit geval de passieve modus gebruiken




## Shared libraries
Informatie over de beschikbare libraries:

|Library|Beschikbaarheid|
|Django Python|niet geactiveerd|
|ffmepg|niet geactiveerd|
|memcached|niet geactiveerd|
|apc|niet geactiveerd|
|imagemagik|niet geactiveerd|
|GD|geactiveerd|
|zend (opcache)|geactiveerd|
|PDO|geactiveerd|
|Zip - Gzip|geactiveerd|


Het is mogelijk om verschillende informatie over uw cluster te vinden via deze link: [http://cluster015.ovh.net/infos/](http://cluster015.ovh.net/infos/)

Vervang het cluster dat is aangegeven in de URL door de uwe, u kunt deze informatie vinden in de manager: "Mutualisé" - "Hosting" - "Synthèse".
Let op: via het gebruik van PHP-FPM, en om veiligheidsredenen, zijn de volgende opties gedeactiveerd  (afgeschreven door PHP):


- register_globals
- magic_quotes_gpc




## Een PHP script via ssh uitvoeren
Momenteel op de Web en SSH hostings is de standaard gebruikte versie voor PHP: 4.4.9.


- Hier is een voorbeeld van een commando dat u kunt invoeren om het test.php bestand met de versie 4.4.9 van PHP uit te voeren.


```
php test.php
```


- Indien u de 5.3 versie van PHP op uw test.php script wilt gebruiken.


```
php.ORIG.5_3 test.php
```


- Indien u de 5.4 versie van PHP op uw test.php script wilt gebruiken.


```
php.ORIG.5_4 -c /usr/local/lib/php.ini-2 test.php
```




