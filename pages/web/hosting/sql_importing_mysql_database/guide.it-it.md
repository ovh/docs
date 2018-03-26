---
title: 'Web Hosting: come importare un database MySQL'
excerpt: 'Web Hosting: come importare un database MySQL'
id: '1393'
slug: web_hosting_come_importare_un_database_mysql
legacy_guide_number: g1393
---


## Requisiti
Devi avere:


- il file di backup del tuo database, chiamato anche dump* (per effettuare il backup dei tuoi database SQL, consulta questa guida: []({legacy}1394)). 

Il backup del database è generalmente di tipo .sql.
Se non hai creato il tuo database con OVH, contatta il tuo provider per avere maggiori informazioni sul recupero del database tramite i suoi servizi.


- l'username, la password e l'host sql che ti permettono accedere al tuo database
Per recuperare le credenziali SQL, consulta questa guida: []({legacy}1374)


![](images/img_1802.jpg){.thumbnail}


## Dal tuo Spazio Cliente OVH
Per importare il tuo database nel modo più semplice e veloce, effettua l'operazione dal tuo [Spazio Cliente OVH](https://www.ovh.com/manager/).
In questo modo, puoi importare il tuo file di backup senza limiti di dimensione.

Una volta effettuato l'accesso al tuo [Spazio Cliente OVH](https://www.ovh.com/manager/), seleziona il tuo hosting nel menu a sinistra e clicca sul tab Database.

![](images/img_4125.jpg){.thumbnail}
Clicca sull'icona a forma di ruota dentata in corrispondenza del database di cui vuoi importare il backup e seleziona Importa un file.

Segui le indicazioni per completare l'operazione.

![](images/img_4126.jpg){.thumbnail}


## Da PhpMyAdmin per MySQL
Per accedere al database tramite PhpMyAdmin

Utilizza questo link: [PhpMyAdmin OVH](https://phpmyadmin.ovh.net/)

Se necessario, consulta la guida all'utilizzo di PhpMyAdmin: []({legacy}1374)


- Una volta connesso, seleziona il tuo database cliccando sul nome (vedi il quadrato blu nell'immagine)

- Clicca su Importa

- Seleziona il tuo file di backup cliccando su Scegli file (Attenzione: la dimensione massima del file è 16 MB)

- Clicca su Esegui per avviare l'importazione

Se recuperi il backup del tuo database dal tuo Spazio Cliente OVH, decomprimilo prima di importarlo.


![](images/img_1962.jpg){.thumbnail}

## Richiamo:
Ricordati che il file non può superare i 16 MB di dimensione.


## Da uno script presente sul tuo hosting
Per creare questi script in un file txt, attribuisci loro l'estensione corrispondente al linguaggio utilizzato.

In questi script, sostituisci:


- nome_del_database.sql con il nome del tuo file 

- server_sql con il nome del server su cui è stato creato il tuo database

- nome_del_database con il nome del tuo database

- password con la password associata al tuo database

Prima di effettuare questa operazione, salva il tuo file di backup sul tuo hosting in FTP.


## In PHP (importbase.php):
Codice da inserire e da completare:


```
<?php
echo "Ripristino del tuo database in corso.......
<br>";
system("cat nome_del_database.sql | mysql --host=server_sql --user=nome_del_database --password=password nome_del_database");
echo "Ripristino completo. Il tuo database è sull'hosting.";
?>
```



## In Perl (importbase.cgi):
Codice da inserire e da completare:


```
#!/usr/bin/perl

print "Ripristino del tuo database in corso.......
<br>";
system("cat nome_del_database.sql | mysql --host=server_sql --user=nome_del_database --password=password nome_del_database");
print "Ripristino completo. Il tuo database è sull'hosting.";
```



- Carica con FTP lo script che hai creato con il dump* del tuo database nella cartella www del tuo hosting e chiama il tuo script dal browser con questo URL: http://tuo_dominio.com/importbase.php


Sostituisci tuo_dominio.com con il nome del tuo dominio e importbase.php con il nome del tuo file.

Il tuo file di backup è compresso?

Se il tuo dump* è compresso, quindi in .sql.gz, ti basta inserire questo comando all'inizio dello script:


```
system("gunzip nome_del_database.sql.gz");
```


Esempio:

## In PHP: dump compresso + ripristino database
Codice completo come nell'esempio: 


```
<?php
echo "Decompressione del file.....
<br>";
system("gunzip testbackup.sql.gz");
echo "Ripristino del tuo database in corso......
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
echo "Ripristino completo. Il tuo database è sull'hosting.";
?>
```



## In Perl: dump compresso + ripristino database
Codice completo come nell'esempio: 


```
#!/usr/bin/perl

print "Decompressione del file.....
<br>";
system("gunzip testbackup.sql.gz");
print "Ripristino del tuo database in corso.......
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
print "Ripristino completo. Il tuo database è sull'hosting.";
```




## Con SSH

## Requisiti:

- disporre delle credenziali FTP necessarie per accedere al tuo hosting Web. 
Se hai bisogno di aiuto per recuperare le tue credenziali FTP, consulta questa guida: []({legacy}1374)

- aver attivato un'offerta che consente l'accesso tramite SSH

([Visualizza tutte le nostre offerte](https://www.ovh.it/hosting-web/))

Segui questa guida per la connessione in SSH:


- [Connessione SSH verso gli hosting condivisi](http://guida.ovh.it/SshSuHostingCondiviso)



## Importa il database in SSH
Accedi in SSH al tuo hosting condiviso.

Entra nella cartella in cui hai inserito i file da importare e esegui questo comando:


```
cat nome_del_database.sql | mysql --host=server_sql --user=nome_del_database --password=password neme_del_database
```



Esempio del codice completo: 


```
cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport
```




## Dal servizio SQL Privato
Se hai bisogno di aiuto per eseguire l'importazione del tuo database, consulta questa guida:


- [Importa i tuoi database SQL Privato](https://www.ovh.it/g2023.tutto_sullsql_privato#backup_importazione_ripristino)




## Errore a causa del nome del database
Può essere necessario aggiungere una riga nel tuo file di backup:


```
use nome_del_tuo_database;
```


Dove nome_del_tuo_database corrisponde al nome del database in cui hai importato questi dati.


## Glossario
*dump: file di backup del database del tuo sito. 

