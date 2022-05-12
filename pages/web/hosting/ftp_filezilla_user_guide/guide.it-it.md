---
title: 'Hosting Condiviso: guida all’utilizzo di FileZilla'
slug: hosting_condiviso_guida_allutilizzo_di_filezilla
excerpt: 'In questa guida ti illustriamo come utilizzare il client FTP FileZilla'
id: '1380'
legacy_guide_number: g1380
section: FTP e SSH
---

## A cosa serve FileZilla?
FileZilla è un software disponibile per diversi sistemi operativi (Windows, MacOS, ecc.).

Ti permette di mettere online il tuo sito internet connettendoti al tuo spazio hosting (FTP).

Scaricalo qui:
[filezilla.it](http://filezilla.it/)

![FileZilla](images/2400.png){.thumbnail}


## Interfaccia

## Introduzione
La zona 1 fornisce informazioni sullo stato della connessione, i trasferimenti, gli errori di connessione, etc.
Generalmente, le informazioni qui presenti non sono utili per persone che non dispongono di un background tecnico.

La zona 2 ripercorre la struttura fino alla cartella del tuo sito (o dei file da trasferire) sul tuo pc.

La zona 3 ripercorre la struttura fino alla cartella in cui stai operando sul server.

La zona 4 lista la cartella che hai aperto sul tuo pc che riprende nome, dimensione, tipo e data di modifica dei file.

La zona 5 lista la cartella che hai aperto sul server che riprende nome, dimensione, tipo, data di modifica, diritti e proprietario dei file.

La zona 6 indica la lista d'attesa dei file che saranno trasferiti, o in corso di trasferimento, verso il server o sul pc.

La parte superiore dell'interfaccia (sotto il riquadro verde) riprende il nome dell'host (server al quale sei connesso), il nome utente FTP, la password e la porta che viene utilizzata.

![FileZilla](images/1818.png){.thumbnail}

## Barra principale
La barra principale contiene le icone utili al funzionamento di base del programma. Non utilizziamo tutti i pulsanti per procedere al trasferimento dei file. Ecco una breve descrizione delle icone qui sotto.
 Apre l'interfaccia di gestione dei siti
 Visualizza o nasconde il diario (1)
 Visualizza o nasconde la struttura delle cartelle locali (2)
 Visualizza o nasconde la struttura delle cartelle remote (3)
 Visualizza o nasconde la lista d'attesa (6)
 Aggiorna la lista delle cartelle e dei file
 Avvia o arresta il trattamento di un file in lista d'attesa
 Annulla l'operazione in corso
 Disconnettiti dal server attualmente visibile
 Accedi di nuovo all'ultimo server utilizzato
 Visualizza la finestra di dialogo di gestione dei filtri delle cartelle
 Attiva o disattiva il confronto delle cartelle
 Attiva o disattiva la navigazione sincronizzata
 Ricerca ricorsiva dei file


## Connessione FTP
Nel riquadro verde in alto, per accedere al server remoto, ti chiediamo:

|Informazione|Descrizione|
|---|---|
|Server FTP|Indirizzo del server che consente l’accesso allo spazio di storage.<br><br> In base al client utilizzato, potrebbe chiamarsi “Server”, “Indirizzo del server”, “Indirizzo”, “Host”, “Hostname”.|
|Login FTP|Indirizzo del server che consente l’accesso allo spazio di storage.<br><br> In base al client utilizzato, potrebbe chiamarsi “Utente”, “Nome utente”, “Identificativo”, “Login”, “Username”.|
|Password dell’utente FTP|Password associata all’utente FTP.<br><br> |
|Porta di connessione|Questo campo, in genere, viene completato automaticamente dal client. In caso contrario:<br><br>\- utilizza la porta 21 per stabilire una connessione via protocollo FTP<br>\- utilizza la porta 22 per stabilire una connessione via protocollo SFTP (se attivo)|

Per recuperare le informazioni necessarie, accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} e clicca sulla scheda `FTP - SSH`{.action}. Nella nuova pagina, visualizzi tutte le informazioni relative allo storage e una tabella con gli utenti FTP e SSH creati sul tuo hosting.

Dopo aver inserito tutte le informazioni, clicca su Connessione rapida per accedere al server.

![FileZilla](images/1819.png){.thumbnail}


## Connessione SFTP
L'SFTP (che sta per SSH File Transfer Protocol) è una connessione FTP sulla porta 22 e permette di accedere in maniera sicura.
Questo tipo di connessione è possibile soltanto a partire dall'offerta [Pro](https://www.ovhcloud.com/it/web-hosting/).
Ti permette di modificare i diritti dei file non modificabili in FTP sulla porta 21 ad esempio.

Nel riquadro verde in alto, per accedere al server remoto, ti chiediamo:

- Host: ftp.tuo-dominio.tld o ftp.cluster0XX.ovh.net o newftp.cluster0XX.ovh.net
- Identificativo: il tuo login FTP
- Password: la password FTP associata al login
- Porta: 22, questa volta


Dopo aver cliccato sul pulsante Connessione rapida, si apre una finestra per certificare la connessione all'host al quale stai per connetterti. 
Se sei connesso a un host OVH, seleziona "Affidati sempre a questo host, aggiungi questa chiave alla cache" per memorizzare la preferenza.

![FileZilla](images/1834.png){.thumbnail}


## Problemi di connessione
Il messaggio ci segnala un problema di accesso FTP all'hosting condiviso.

Questo tipo di messaggio viene generato da un errore in: User // Pw

Verifica le tue informazioni, puoi modificare la password FTP del tuo hosting direttamente dal tuo Spazio Cliente OVH.

Trovi qui una guida sulla modifica della password FTP:[]({legacy}1374)

![FileZilla](images/1820.png){.thumbnail}
In questo caso l'errore è generato da un nome host non corretto.

![FileZilla](images/1824.png){.thumbnail}


## Trasferimento di file
Per trasferire i tuoi file in FTP, selezionali e trascinali dalla finestra di sinistra (i tuoi file in locale) verso la finestra di destra (il tuo spazio di hosting).


- Seleziona la cartella di destinazione con attenzione.


Dopo aver realizzato questa operazione, i tuoi file vengono automaticamente messi in lista d'attesa per essere salvati sul server.

![FileZilla](images/1821.png){.thumbnail}


## Lista d'attesa
Monitorando la lista d'attesa, puoi trovare:


- i file in lista d'attesa per essere salvati sul server in remoto.

- i file di cui il trasferimento non è riuscito.

- i file trasferiti correttamente.



![FileZilla](images/1822.png){.thumbnail}


## Menu contestuale Server
Cliccando con il tasto destro su uno dei file presenti (cf par. 5), si apre un menu contestuale, con diverse scelte possibili:

Scarica: scarica il file nella cartella locale aperta

Aggiungi i file alla lista d'attesa: aggiungi il file alla lista d'attesa. Ti permette di pianificare i caricamenti.

Visualizza/Modifica: ti permette di visualizzare o modificare direttamente un file presente sul tuo hosting, se disponi di un software in grado di leggere il file.

Crea una cartella: ti permette di creare una nuova cartella direttamente sull'hosting remoto.

Aggiorna: aggiorna i dati per visualizzare correttamente i file presenti.

Elimina: ti permette di eliminare il file selezionato.

Rinomina: ti permette di rinominare il file selezionato.

Genera un URL diretto al file: ti permette di creare un link diretto al file selezionato, come ad esempio: ftp://loginftp@ftp.cluster0XX.ovh.net/www/miacartella1/miofile.jpg

Permessi dei file: ti permette di modificare i diritti dei file (CHMOD)

![FileZilla](images/1830.png){.thumbnail}


## Diritti su file e cartelle
Per accedere a questa interfaccia, clicca con il tasto destro su uno dei file presenti sul server e seleziona "Permessi sui file.

In questa interfaccia puoi modificare i diritti (CHMOD) sui tuoi file e sulle tue cartelle presenti sull'hosting. 

Inserisci i permessi che vuoi attribuire e il valore CHMOD sarà automaticamente aggiornato.

Puoi selezionare "Applica alle sottocartelle".

Questa azione modifica i diritti della cartella in questione e delle cartelle e dei file al suo interno.

![FileZilla](images/1831.png){.thumbnail}


## Rimettere online il tuo sito
Apri FileZilla, clicca su "Server" e seleziona "Seleziona un comando personalizzato".

In FileZilla al posto di "Seleziona un comando personalizzato" potresti trovare anche "Inserire un comando FTP".

Inserisci il comando:


```
SITE CHMOD 705 /
```


Se compare l'errore:

550 would not chance perms on /. not such file or directory

devi utilizzare il comando:


```
SITE CHMOD 705 .
```


Per verificare che il sito sia di nuovo online, fai un test sul tuo site da un browser Internet.

Questo comando non funziona in SFTP.

![FileZilla](images/1829.png){.thumbnail}
Per sicurezza, ricontrolla entro 3 ore. I nostri bot impiegano 3 ore per verificare le modifiche. In base a quando vengono apportate, il ripristino del tuo sito potrà avvenire più o meno velocemente.

Se dopo 3 ore il tuo sito è offline, contatta il supporto.


## Trasferimento di file bancari
Per i file di tipo binario, come un file di tipo CGI, può essere interessante scegliere la modalità in cui avverrà il trasferimento.

Modifica selezionando "Trasferimento" nel menu principale e poi "Tipo di trasferimento".

![FileZilla](images/1832.png){.thumbnail}


## Confronta cartelle
Questa opzione visualizza dei colori nelle zone 3 e 4 per confrontare le differenze fra file e cartelle locali e il server.
Cliccando con il tasto destro sull'icona , puoi modificare la modalità di confronto.
Ti viene proposto di attivare o disattivare l'opzione e di:

- Confrontare la dimensione dei file
- Confrontare la datazione
- Nascondere i file identici


Colori:

- Giallo: il file esiste solo in una copia
- Verde: il file è più recente del file non marcato nella collocazione differente 
- Rosso: le dimensioni dei file sono diverse



![FileZilla](images/1823.png){.thumbnail}


## Preferenze

## Connessione
Puoi modificare i parametri di riconnessione al server. 

Alcuni server potrebbero ritenere questa azione un abuso e aggiungere il tuo IP a una blacklist. 

Per modificare queste impostazioni, accedi alla sezione "Modifica", "Impostazioni" e "Connessione".

![FileZilla](images/1825.png){.thumbnail}

## Trasferimenti
Puoi modificare le preferenze sulle azioni predefinite da eseguire quando modifichi un file esistente.

Per modificare queste impostazioni, accedi alla sezione "Modifica", "Impostazioni" e "Trasferimenti".

![FileZilla](images/1826.png){.thumbnail}


## Server di connessione
In caso di anomalie o rallentamenti del tuo spazio FTP, il nostro supporto ti chiederà a quale server è connesso FileZilla.

Per scoprirlo:

- Torna al riquadro sotto i tuoi dati
- Accedi ai logs in alto: lì trovi il nome del server webmXXX



![FileZilla](images/2399.png){.thumbnail}

