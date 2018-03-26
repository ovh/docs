---
title: Hosting condiviso specifiche tecniche
excerpt: In questa guida trovi informazioni sulle specifiche tecniche degli hosting condivisi
slug: hosting_condiviso_specifiche_tecniche
legacy_guide_number: g1463
---


## FTP - modalità passiva
Per configurare il tuo client FTP,puoi utilizzare: 

FileZilla:

Clicca su Modifica > Impostazioni... > Connessione > FTP e seleziona l'opzione Passiva (consigliata) a destra, in Modalità di trasferimento.

Cyberduck:

Clicca su Nuova connessione > Più scelte e seleziona Passivo in Modalità di connessione.


## Connessioni simultanee al tuo database

- Sui database condivisi OVH è possibile effettuare fino a 30 connessioni simultanee.




## Connessioni da un server esterno

- Per motivi di sicurezza non è possibile accedere a un database condiviso da un server esterno.


I server MySQL sono raggiungibili solo dai server condivisi OVH. Negli altri casi, i tentativi di connessione generano questo errore:


```
Warning: MySQL Connection Failed: Host "ip.tua.connessione" is not allowed to connect ...
```



- Al momento questo errore viene generato anche utilizzando l'offerta SQL Privato.




## Variabili del server SQL condiviso
Dove trovi, ad esempio, il valore max_allowed_packet?

Accedi all'interfaccia di PhpMyAdmin, inserisci show variables; nell'editor di query SQL e seleziona dall'elenco delle variabili quella desiderata.


## PHP-FPM
Per accelerare le risposte PHP abbiamo adattato PHP-FPM alla nostra infrastruttura Web.

Durante i test, abbiamo ottenuto performance fino a 7 volte più veloci rispetto a quelle precedenti.

Consulta la guida all'utilizzo di PHP-FPM:


- []({legacy}1175)


Con PHP-FPM è possibile modificare alcune variabili server: 

|Variabile|senza PHP-FPM|con PHP-FPM|
|max_execution_time|120s|300s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|



- Per funzionare correttamente, il file .ovhconfig del tuo dominio principale deve trovarsi nella root dell'hosting o in una sottocartella di livello 1 (ad esempio, /www/) ma non di livello 2 o superiore (ad esempio, /www/test/, /www/test/test2/).

- Nelle offerte di hosting condiviso OVH, PHP-FPM è attivo di default.




## Percorso relativo del server
In seguito a un aggiornamento di sicurezza (04/06/2014), il percorso relativo restituito dal server è cambiato.

Ad esempio, per lo script: 


```
<?php
echo $_SERVER['SCRIPT_FILENAME'];
?>
```


il percorso restituito prima era di tipo: /homez.XXX/USER/Nome_CARTELLA/test.php

Ora è così:
/home/USER/Nome_CARTELLA/test.php


- la compatibilità viene garantita grazie all'utilizzo di link simbolici (ad esempio, il link /homez.XXX/USER reindirizza verso la cartella /home/USER)


I link simbolici resteranno sempre attivi.


## Host del server
Per recuperare l'informazione relativa all'host non è possibile utilizzando la variabile REMOTE_HOST: 


```
<?php
echo $_SERVER['REMOTE_HOST'];
?>
```


Per effettuare questa operazione, utilizza la funzione gethostbyaddr()


```
<?php
echo gethostbyaddr($_SERVER["REMOTE_ADDR"]); 
?>
```




## FTP via PHP
In seguito a un aggiornamento di sicurezza (04/06/2014) sui server condivisi OVH, non è più possibile utilizzare una connessione FTP via PHP in modalità attiva.

I tentativi di accesso generano questo errore PHP: 


```
Warning: ftp_put() [function.ftp-put]: bind() failed: Permission denied (13)
```


La funzione bind() non è più valida.

Per evitare questo errore, attiva la modalità passiva:

Codice PHP:

```
$conn_id = ftp_connect($ftp_server);
$login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);
# switch to passive mode (mandatory on Ovh shared hosting)
ftp_pasv( $conn_id, true );
```



- La connessione FTP via PHP non è più possibile in modalità attiva. È necessario utilizzare la modalità passiva




## Librerie condivise
Informazioni sulle librerie disponibili: 

|Libreria|Disponibilità|
|Django Python|non attiva|
|FFmpeg|non attiva|
|memcached|non attiva|
|apc|non attiva|
|imagick|non attiva|
|GD|attiva|
|zend (opcache)|attiva|
|PDO|attiva|
|Zip - Gzip|attiva|


Per visualizzare le informazioni relative al tuo cluster, clicca su questo link: [http://cluster015.ovh.net/infos/](http://cluster015.ovh.net/infos/)

Sostituisci il nome del cluster nell'URL con il tuo. Questa informazione è disponibile nel tuo Spazio Cliente OVH, nella sezione Web > Hosting > Accesso HTTP al cluster.
Attenzione: per motivi di sicurezza, con PHP-FPM queste opzioni sono disattivate:


- register_globals
- magic_quotes_gpc




## Esegui uno script PHP via SSH
Attualmente gli hosting Web OVH in SSH utilizzano di default la versione 4.4.9 di PHP.


- Per eseguire il file test.php con questa versione di PHP, utilizza questo comando:


```
php test.php
```


- Per utilizzare la versione 5.3 di PHP sul tuo script test.php, esegui il comando:


```
php.ORIG.5_3 test.php
```


- Per utilizzare la versione 5.4 di PHP sul tuo script test.php, esegui il comando:


```
php.ORIG.5_4 -c /usr/local/lib/php.ini-2 test.php
```




