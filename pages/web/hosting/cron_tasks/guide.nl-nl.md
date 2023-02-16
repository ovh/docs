---
deprecated: true
title: 'Hosting: Geautomatiseerde taken/Cron'
excerpt: 'Hosting: Geautomatiseerde taken/Cron'
id: '1990'
slug: hosting_geautomatiseerde_takencron
legacy_guide_number: g1990
updated: 2022-12-01
---


## Creëer een geautomatiseerde taak
Selecteer uw platform onder hosting in de linkerkolom (1), klik vervolgens op de 'Meer +' tab en tot slot op 'Geplande taken - Cron' (2) 'Voeg een planning toe' (3).

![](images/3261.png){.thumbnail}
Voor de eerste fase voert u het uit te voeren command en de programmeertaal in. U kunt ervoor kiezen om uw Cron taak execution  (uitvoering) logs via e-mail te ontvangen op een e-mailadres dat u vooraf hebt opgegeven. 


- Deze e-mail zal alleen aan u verzonden worden als er een foutmelding is.


U kunt ook een beschrijving geven voor uw Cron taak.

![](images/3262.png){.thumbnail}
Vervolgens moet u de frequentie van de taak instellen.

![](images/3264.png){.thumbnail}
Er zijn twee modi: simpele modus en geavanceerde modus.

![](images/3265.png){.thumbnail}
Zodra u uw taakinstellingen heeft gekozen zal er een samenvatting verschijnen. 


- Als de informatie juist is dan hoeft u het alleen nog maar te bevestigen.



![](images/3266.png){.thumbnail}
Er zal een bericht verschijnen om u ervan op de hoogte te brengen dat uw taak binnen een paar minuten beschikbaar zal zijn.

![](images/3267.png){.thumbnail}


## Wijzigen van een geautomatiseerde taak
Selecteer uw platform onder hosting in de linkerkolom (1), klik vervolgens op de 'Meer +' tab en tot slot op 'Geplande taken - Cron' (2). Klik op het potlood (3) dat gekoppeld is aan de geautomatiseerde taak die u wilt wijzigen.

![](images/3268.png){.thumbnail}
U kunt nu het uit te voeren command en de programmeertaal wijzigen, e-mail logs inschakelen en een beschrijving toevoegen aan uw Cron job.

![](images/3269.png){.thumbnail}


## Verwijderen van een geautomatiseerde taak
Selecteer uw platform onder hosting in de linkerkolom (1), klik vervolgens op de 'Meer +' tab en tot slot op 'Geplande taken - Cron' (2). Klik op het Trash icoon naast de geautomatiseerde taak die u wilt verwijderen.

![](images/3270.png){.thumbnail}
Er zal een samenvatting verschijnen van wat u wilt verwijderen. Als dit juist is hoeft u alleen maar op Bevestigen te klikken.

![](images/3271.png){.thumbnail}


## Test hoe uw geautomatiseerde taak uitgevoerd zal worden op een browser.
U kunt uw script direct vanaf uw browser testen om te zien of dit de oorzaak van de error kan zijn. 
Als uw Cron bijvoorbeeld in de www/cron.php directory is en uw domeinnaam test.com is dan typt u: 
http://test.com/cron.php
Om de test te kunnen optimaliseren moet uw PHP versie hetzelfde zijn als de versie die u invoerde toen u de geautomatiseerde taak instelde.
Als u een error hebt dan moet u uw script corrigeren. Als er geen error gevonden is dat raden we u aan om de logs, die gekoppeld zijn aan de uitvoering van uw Cron taken, te controleren.


## Bekijk logs van de uitvoering (execution) van uw geautomatiseerde taak
Selecteer uw platform onder hosting in de linkerkolom (1), klik vervolgens op de 'Meer +' tab.

![](images/4012.png){.thumbnail}
Klik vervolgens op de link om naar de Logs en statistieken te gaan.

![](images/4013.png){.thumbnail}
Als uw geautomatiseerde taken op dezelfde dag zijn uitgevoerd dan kunt u de execution logs bekijken in de OVH speed log (1). 

-> Als uw taak meer dan 24 uur geleden was uitgevoerd dan selecteert u het log bestand voor de maand die u wilt bekijken.

![](images/3274.png){.thumbnail}
Voorbeeld execution logs voor een geautomatiseerde taak:

```
[2015-06-04 10:39:03] ## OVH ## START - 2015-06-04 10:39:03.700912 executing: /usr/local/php5.6/bin/php /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03] Could not open input file: /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03]
[2015-06-04 10:39:03] ## OVH ## END - 2015-06-04 10:39:03.762685 exitcode: 1
```


In dit geval toont de volgende regel van de log aan dat mijn geautomatiseerde taal niet juist uitgevoerd is omdat het pad naar het script onjuist is of niet bestaat: 


```
Could not open input file: /homez.600/loginftp/www/cron.php
```




## Beperkingen

- In gedeelde hosting is geen minutenaanduiding om in te stellen hoe laat u de taak wilt laten uitvoeren. De taak kan slechts één keer per uur worden uitgevoerd. 

- Taken kunnen niet langer dan 60 minuten draaien. 

- U kunt enkel tot 5 MB data (stdin/stderr) genereren




## Geautomatiseerde taken met variabelen
Het opzetten van een pad met variabelen is niet mogelijk bij geautomatiseerde taken. 

Voorbeeld:

```
/www/cron.php?variable=test
```



- U kunt deze variabelen echter wel vaststellen in uw script.




## Gebruik van absolute paths
Om te verzekeren dat uw Cron taak werkt zult u gebruik moeten maken van absolute paths in uw script in plaats van relative paths.
Om het adres van uw huidige path te krijgen kunt u gebruik maken van de '_DIR_' constant:
[PHP documentation](http://php.net/manual/en/language.constants.predefined.php)


## Execution report
Er wordt slechts één Cron taak execution report per dag verstuurd. Dit wordt 's nachts verzonden.


## Calling another script
Als het script, gebruikt door uw Cron taak, andere scripts gebruikt dan moet u een absolute path gebruiken om dit te kunnen laten werken. De absolute path voor uw hosting begint met: 


```
/home/loginFTP/
```




## Als er een execution error is
Als er een execution error is in uw Cron taak dan zal het na 10 mislukte execution pogingen worden uitgeschakeld.


## Voorbeeld logs
Correct script execution:

```
# OVH ## START - 2014-12-23 15:34:12.680711 executing: /homez.600/loginftp/test/run.sh
I am the client and I'm printing stuff with this nice 'echo' feature.

# OVH ## END - 2014-12-23 15:34:13.056472 exitcode: 0
```


Execution script error omdat het bestand niet kon worden gevonden:

```
# OVH ## START - 2014-12-23 15:36:16.206693 executing: /homez.600/loginftp/test/idontexist.sh
# OVH ## ERROR command '/homez.600/loginftp/test/idontexist.sh' not found

# OVH ## END - 2014-12-23 15:36:16.546574 exitcode: 255
```


Script execution error na timeout:

```
# OVH ## START - 2014-12-23 16:05:52.233058 executing: /homez.600/loginftp/test/sleep.sh
tuesday 23 december 2014, 16:05:52 (UTC+0100)
Now sleeping 9000 sec

# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
# OVH ## END - 2014-12-23 17:05:54.690413 exitcode: 0
```


Script execution error na excessive data output:

```
# OVH ## START - 2014-12-23 15:43:27.606083 executing: /homez.600/loginftp/test/echoer.sh
[...a lot of logs here...]
# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: cron output (9288634 bytes) exceeds maximum permitted (5242880 bytes)
# OVH ## END - 2014-12-23 15:43:50.999934 exitcode: 255
```


Script execution error vanwege een permissions error (chmod) of incorrecte configuratie van het .ovhconfig bestand:

```
[2015-01-08 18:07:10]
[2015-01-08 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason. Please contact customer support for more information.
[2015-01-08 18:07:10] ## OVH ## END - 2015-01-08 18:07:10.969840 exitcode: 255
```



