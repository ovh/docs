---
title: Configura PHP sul tuo Hosting Web Condiviso 2014 OVH
excerpt: Questa guida ti mostra come configurare PHP sul tuo hosting Web OVH.
id: '1207'
slug: configura_php_sul_tuo_hosting_web_condiviso_2014_ovh
legacy_guide_number: g1207
---


## Come scegliere la tua versione di PHP?

## Nel tuo Spazio Cliente OVH
Questa guida ti mostra come attivare il PHP FPM e definire la versione di PHP utilizzando il file .ovhconfig. Se preferisci effettuare questa operazione direttamente dal tuo Spazio Cliente OVH, consulta la guida []({legacy}1999)
Per configurare PHP manualmente utilizzando il file .ovhconfig, è sufficiente salvare il file .ovhconfig nella root del tuo spazio disco utilizzando l'FTP.

Ad esempio, per utilizzare PHP 5.6, il file .ovhconfig deve contenere questo codice:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```




## Come sapere quali versioni di PHP sono disponibili?
Puoi utilizzare queste versioni PHP:

- PHP 7.0
- PHP 5.6 (versione di default)
- PHP 5.5  (versione obsoleta sconsigliata)
- PHP 5.4  (obsoleta)
- PHP 5.3 (obsoleta) 


NB: le versioni precedenti non vengono più aggiornate dalla Software House, pertanto anche noi smetteremo gradualmente di offrirle. Continueremo ad aggiornare le nuove versioni PHP quando verranno rilasciate, ma dismetteremo quelle vecchie. Per questo motivo ti consigliamo di aggiornare regolarmente le tue pagine.
Puoi seguire la pianificazione e i progressi di queste operazioni tramite OVH status: [url="https://status.ovh.net/"/url]

Attenzione: dopo aver inserito il file .ovhconfig nella giusta collocazione, la versione PHP utilizzata è quella definita da app.engine.version. Le regole del tuo .htaccess, ad esempio SetEnv PHP_VER, vengono ignorate.


## Hai creato il tuo .ovhconfig e c'è un errore "Not Implemented"
Questo significa che l'engine o la versione specificata nel tuo .ovhconfig non esiste.
Consulta l'error.log del tuo sito per maggiori informazioni sull'errore.


## Che significa la direttiva environment?
Permette di specificare la cache dei file statici e il comportamento degli errori PHP.

In modalità development:

- non viene mantenuto nulla in cache
- i log PHP vengono visualizzati sul tuo sito (display_errors=On)


In modalità production: (opzione predefinita)

- i file statici come immagini, video, audio durano più a lungo in modo da massimizzare l'inserimento in cache dei file sui browser Web
- i log PHP vengono visualizzati sul tuo sito (display_errors=Off)




## Cosa significa la direttiva http.firewall?
Questa direttiva ti permette di attivare un firewall software di tipo mod_security inserendo: security
http.firewall è predefinito come none


## Modifica il tuo ambiente di esecuzione con la direttiva container.image
Gli hosting Web OVH ti permettono di modificare l'ambiente di esecuzione del tuo sito Web, per utilizzare una configurazione stabile nel lungo periodo e usufruire degli ultimi aggiornamenti dei software proposti da OVH.

Per farlo, aggiungi queste righe:


```
; __container.image__
;
; values:
; stable: current recommended and up-to-date environment
; legacy: former stable environment, only receiving security updates, being feature-freezed
; testing: "experimental" environment dedicated to functionalities beta testing before being merged into stable
;
container.image=stable
```


La direttiva container.image viene applicata su tutto il tuo hosting e, se nelle varie directory sono presenti più file .ovhconfig, può essere inserita solo in quello nella root del tuo hosting. Le altre direttive sono definite nelle tue sotto-cartelle.

Per maggiori informazioni sui diversi ambienti di esecuzione, consulta questa guida:
[]({legacy}2149)


## Dettagli sul file .ovhconfig
Ecco il dettaglio del contenuto del file di configurazione:


```
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
; php:
; IMPORTANT: register_globals and magic_quotes_gpc are off for security
; php options .htaccess (like php version) are ignored
; phpcgi:
; IMPORTANT this is a fallback or previous system
; in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
; (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
; default: 5.6
; for phpcgi:
; this options is ignored (= fallback in AUTO)
;
app.engine.version=5.6

; __http.firewall__ used to add application firewall (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
; production:
; apache will maximise local cache
; mod_expires will grow up TTL of js, css, pdf, images, video, audio
; you can override it changing expiration explicitly or in your .htaccess
; feel free to look on our guide.
; development:
; no expiration is added, files are not locally in cache,
; will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=development
```




## Come sapere quali versioni di PHP sono disponibili?
Se il tuo sito utilizza un CMS (come WordPress, Joomla!, PrestaShop, ecc.) puoi trovare le informazioni utili nella documentazione disponibile sul sito ufficiale o nello pannello di controllo del modulo. Se il CMS che utilizzi viene aggiornato dal suo produttore e la tua versione è la più recente, il tuo CMS dovrebbe supportare gli ultimi aggiornamenti PHP. La maggior parte dei CMS ha strumenti integrati di aggiornamento di facile utilizzo. Alcuni li fanno automaticamente, come WordPress, dalla versione 3.7.

Se il tuo sito si basa su una soluzione propria o personalizzata, devi scoprire quale versione PHP supporta.

A titolo informativo, ecco l'elenco delle modifiche non compatibili tra le versioni PHP:
> da PHP 4 a PHP 5: http://www.php.net/manual/en/migration5.incompatible.php 
> da PHP 5.1 a PHP 5.2: http://www.php.net/manual/en/migration52.incompatible.php 
> da PHP 5.2 a PHP 5.3: http://www.php.net/manual/en/migration53.incompatible.php 
> da PHP 5.3 a PHP 5.4: http://www.php.net/manual/en/migration54.incompatible.php 
> da PHP 5.4 a PHP 5.5: http://www.php.net/manual/en/migration55.incompatible.php 
> da PHP 5.5 a PHP 5.6: http://www.php.net/manual/en/migration56.incompatible.php
> da PHP 5.6 a PHP 7.0: http://www.php.net/manual/en/migration70.deprecated.php


## Come scegliere la tua versione di PHP?
Una volta definita la versione di PHP che vuoi utilizzare, puoi consultare questa guida per modificarla:
[]({legacy}1999)


## Dove salvare il tuo file .ovhconfig?

## Nella maggior parte dei casi, il tuo Web hosting ospita un solo sito.
Ti ricordiamo che è possibile modificare e generare il file .ovhconfig direttamente nel tuo Spazio Cliente OVH. Se hai bisogno di aiuto per eseguire questa operazione, consulta la guida []({legacy}1999)

Se vuoi effettuare questa operazione manualmente, salva il file .ovhconfig nella root del tuo hosting, cioè nella cartella "/" (vedi immagine).


- Le sottocartelle utilizzeranno i parametri di questo file.



![](images/img_3764.jpg){.thumbnail}

## Hai definito più "domini associati" che non richiedono configurazioni differenti.
In questo caso, segui il paragrafo precedente.


- Tutti i domini associati adotteranno la configurazione del file .ovhconfig presente nella root del tuo hosting.



## Hai definito più "domini associati" che richiedono configurazioni differenti.
Puoi definire una versione PHP diversa per ciascuno dei domini associati, salvando un file .ovhconfig su tutte le directory di destinazione definite per quei domini.

Se nella directory di destinazione del tuo dominio non sono presenti file .ovhconfig, verrà utilizzato il file .ovhconfig presente nella root del tuo hosting.

È fortemente sconsigliato utilizzare diverse versioni di PHP nei file .ovhconfig di uno stesso hosting: la cache potrebbe generare un'incompatibilità tra le varie versioni PHP e gli ambienti. Per evitare questo tipo di problema, ti suggeriamo di suddividere i tuoi siti su hosting diversi.


## È possibile modificare la configurazione PHP del tuo hosting Web?
Per il tuo hosting Web puoi scegliere tra diverse configurazioni. Per maggiori informazioni sugli ambienti di esecuzione disponibili, consulta questa guida:
[]({legacy}2149)

