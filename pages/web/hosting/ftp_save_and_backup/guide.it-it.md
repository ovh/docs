---
title: Web hosting recupera un backup completo o un file in FTP con Filezilla
excerpt: In questa guida ti mostriamo come recuperare un back completo o un file in particolare in FTP utilizzando Filezilla
slug: web_hosting_recupera_un_backup_completo_o_un_file_in_ftp_con_filezilla
legacy_guide_number: g1593
---


## Step 1: hostname
Accedi al tuo client FTP (nel nostro esempio utilizziamo Filezilla: []({legacy}1380)).

Inserisci l'hostname nel campo corrispondente. Generalmente è ftp.tuo_dominio.com o ftp.tuaofferta.ovh.net.

Esempio:
Con il dominio tuosito.com
Il tuo nome host: ftp.tuosito.com o ftp.cluster0XX.ovh.net (sostituisci le xx con il tuo cluster)

[url="https://www.ovh.it/g1374.metti online il tuo sito"][blue]Hai bisogno dei tuoi identificativi FTP?[/blue][/url]


- Utilizza la tua password FTP abituale
- Inserisci la porta 21



![](images/img_2314.jpg){.thumbnail}


## Step 2: login FTP
Inserisci le credenziali FTP in base al backup che vuoi recuperare. Tieni presente queste informazioni: 


- tuo_identificativo_ftp-snap0:
snapshot g-0 (backup del giorno, realizzato alle 3 a.m.)
- tuo_identificativo_ftp-snap1:
snapshot g-1 (backup del giorno precedente, realizzato alle 3 a.m.)
- tuo_identificativo_ftp-snap2:
snapshot g-2 (backup di due giorni prima, realizzato alle 3 a.m.)
- tuo_identificativo_ftp-snap3:
snapshot s-1 (backup della settimana precedente, realizzato alle 4 a.m.)
- tuo_identificativo_ftp-snap4:
snapshot s-2 (backup di due settimane prima, realizzato alle 4 a.m.)
- tuo_identificativo_ftp-snap5:
snapshot s-3 (backup di 3 settimane prima, realizzato alle 4 a.m.)

Esempio:


Con il tuo identificativo FTP: toto
Il tuo login FTP per ripristinare un backup di due giorni prima: toto-snap2

![](images/img_2315.jpg){.thumbnail}


## Step 3: password FTP
Inserisci la tua password FTP abituale. 

È la stessa password del tuo accesso FTP classico, che puoi modificare dal tuo Spazio Cliente, sezione Hosting.

Conferma le informazioni per consentire la connessione.

![](images/img_2316.jpg){.thumbnail}


## Step 4: ripristino di un backup di file
Ripristina i file e le cartelle che vuoi, trascinandoli da "Sito remoto" a "Sito locale" per recuperarli direttamente sul tuo computer. 

Consulta la guida su Filezilla, in caso di necessità: []({legacy}1380)

![](images/img_2317.jpg){.thumbnail}


## Step 5: connessione al Web Hosting
Accedi con i tuoi identificativi FTP classici per connetterti al tuo Web Hosting e allo spazio di backup.

![](images/img_2318.jpg){.thumbnail}


## Step 6: installazione di file di backup
Trasferisci i file recuperati in precedenza sul tuo computer al sito remoto.

Allo stesso modo, trascinando i file a destra, potrai copiarli in pochi minuti!

![](images/img_2319.jpg){.thumbnail}

