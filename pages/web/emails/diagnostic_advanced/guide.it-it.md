---
title: I codici di risposta di un server SMTP
excerpt: I codici di risposta di un server SMTP
slug: i_codici_di_risposta_di_un_server_smtp
legacy_guide_number: g2272
---


## Comandi SMTP
I comandi SMTP sono utilizzati per trasferire i messaggi di posta elettronica.
Per comunicare con un server SMTP è necessario inviargli determinati comandi, ognuno dei quali corrisponde a una richiesta specifica che genera la risposta del server.


## Risposte SMTP
Le risposte ai comandi SMTP assicurano la sincronizzazione di richieste e azioni durante il trasferimento dei messaggi di posta elettronica, in modo che il client SMTP conosca sempre lo stato del server SMTP.

Ogni comando genera una risposta formata da un numero a tre cifre seguito da un testo. Il numero viene utilizzato dai server per definire l'azione successiva, mentre il testo fornisce informazioni utili all'utente.

Ognuna delle tre cifre della risposta ha un significato specifico:


- la prima cifra indica se la risposta è corretta, non corretta o incompleta. Analizzando questa cifra il client SMTP sarà in grado di determinare la sua prossima azione.

- La seconda e terza cifra forniscono informazioni aggiuntive.




## Analisi delle risposte SMTP
Per le prime cifre del codice di risposta esistono quattro valori possibili:


- 2xx Risposta positiva:

L'azione richiesta è stata effettuata correttamente e può essere inviata una nuova richiesta.


- 3xx Risposta positiva temporanea:

Il comando è stato accettato ma è in attesa di maggiori informazioni per eseguire l'azione richiesta.
Il client SMTP dovrebbe inviare un altro comando che specifica questa informazione.


- 4xx  Risposta negativa temporanea:

Il comando non è stato accettato e non è stato possibile eseguire l'azione richiesta.
La condizione dell'errore è temporanea ed è quindi possibile inviare nuovamente la richiesta.


- 5xx  Risposta negativa:

Il comando non è stato accettato e l'azione richiesta non è stata eseguita.
Il client SMTP non dovrebbe ripetere la stessa richiesta.


## Descrizione
Qui sotto trovi la maggior parte dei codici di risposta utilizzati dai server SMTP:

|Codici risposta|Dettagli|Azione|
|---|---|---|
|211|Messaggio di stato del sistema o risposta a una richiesta di aiuto|Il messaggio è seguito da maggiori informazioni|
|214|Risposta a un comando HELP|Contiene informazioni sul server e in genere reindirizza a una pagina di FAQ|
|220|Il server è pronto﻿|Il servizio di posta è pronto|
|221|Canale di trasmissione in chiusura|Il server sta chiudendo la connessione dopo aver gestito tutte le richieste|
|250|Trasmissione del messaggio completata|L'email inviata è stata consegnata correttamente|
|251|L'utente non risulta su questo server, ma il messaggio verrà trasmesso|Il messaggio sarà trasmesso da un altro server|
|252|Il server non può verificare l'utente, ma proverà a trasmettere il messaggio|Al momento il server non riesce a verificare l'account di destinazione, ma proverà a trasmettere il messaggio più tardi|
|354|Il server ha ricevuto l' indirizzo del mittente e del destinatario|Il server è in attesa del contenuto dell'email per trasmetterlo|
|420|Timeout per problema di connessione|Questo errore è restituito solo dai server di posta GroupWise. Contatta l'amministratore del server di posta di destinazione|
|421|Servizio non disponibile, chiusura del canale di trasmissione in corso|Provenienza dell'errore sconosciuta. Assicurati che l'invio verso un altro dominio funzioni correttamente ed eventualmente ripeti l'invio|
|432|La ricezione di messaggi sul server Exchange è al momento sospesa|Questo errore è restituito esclusivamente dai server di posta Microsoft Exchange. Contatta l'amministrazione del server di posta di destinazione|
|449|Errore di routing|Questo errore è restituito esclusivamente dai server di posta Microsoft Exchange. Microsoft consiglia di effettuare una diagnostica utilizzando il tool WinRoute|
|450|L'azione richiesta non è stata eseguita: casella di posta non disponibile (ad esempio, per mancanza di spazio o perché temporaneamente bloccata per motivi di sicurezza)|Verifica che l'indirizzo IP del server di posta non sia blacklistato ([SpamHaus](https://www.spamhaus.org/lookup/)) e che il testo dell'email non contenga parole che possano essere considerate SPAM|
|451|Azione richiesta annullata: errore locale|Questo errore potrebbe essere causato da un sovraccarico momentaneo o da una verifica non corretta da parte del filtro SPF del server di invio. Se l'errore persiste, verifica le informazioni aggiuntive o contatta l'amministratore del server|
|452|Azione richiesta non eseguita: sistema di storage non sufficiente|Il tuo server di posta è sovraccarico, ad esempio perché sta tentando di inviare troppi messaggi contemporaneamente. Controlla la casella della posta in uscita e riprova|
|455|Il server non riesce a ricevere i parametri|Attendi e poi effettua un altro tentativo. Se il problema si ripete, contatta l'amminitratore del server di posta di destinazione|
|500|Errore di sintassi, comando non riconosciuto (può includere errori come una riga di comando troppo lunga)|Questo errore può essere causato dall'Antivirus o dal Firewall del mittente. Effettua una verifica e riprova|
|501|Errore di sintassi nei parametri o negli argomenti|Questo errore può essere causato da un indirizzo email di destinazione non corretto o da un problema dell'Antivirus o del Firewall del mittente. Verifica l'indirizzo di destinazione, il tuo Antivirus o Firewall|
|502|Comando non implementato|I parametri o le opzioni utilizzate durante l'invio dell'email sono riconosciute ma non sono state attivate nella configurazione del server SMTP. Contatta il tuo provider|
|503|Il server ha ricevuto una sequenza non corretta di comandi|Questo errore è generalmente causato da un problema di autenticazione. Verifica nel tuo client di posta la corretta configurazione dei parametri di accesso al server SMTP|
|504|Un parametro del comando non è implemantato|I parametri o le opzioni utilizzate durante l'invio dell'email sono riconosciute ma non sono state attivate nella configurazione del server SMTP. Contatta il tuo provider|
|550|Azione richiesta non eseguita: casella di posta non disponibile|Il server di posta di destinazione non riesce a verificare l'indirizzo email di destinazione. Questo errore può verificarsi se l'indirizzo inserito non è corretto, ad esempio per un errore di battitura, oppure se il server di posta destinazione presenta problemi di firewall o connettività. Verifica l'indirizzo email del destinatario e riprova|
|551|Utente non locale|Questo errore viene utilizzato come strategia di prevenzione dello Spam. Indica che il relay non è autorizzato a trasmettere il tuo messaggio a un altro server. Contatta il tuo provider|
|552|Azione richiesta annullata: limite dello spazio di storage superato|Lo spazio disponibile della casella di posta del destinatario è terminato e l'utente non può più ricevere messaggi|
|553|Azione richiesta non eseguita indirizzo email non valido|Questo errore può essere causato da un indirizzo di destinazione non corretto. Verifica gli indirizzi inseriti e riprova|
|554|Transazione fallita, "Nessun servizio SMTP")|Questo errore può verificarsi se l'indirizzo IP del server di posta è stato inserito in una blacklist. Per verificare che l'IP non sia blacklistato, utilizza [SpamHaus](https://www.spamhaus.org/lookup/)|
|555|MAIL FROM/RCPT TO, parametri non riconosciuto o non implementati|Il server SMTP della posta in uscita non riconosce correttamente gli indirizzi email nei campi "Da" o "A". Verifica gli indirizzi inseriti e assicurati di non aver superato i limiti consentiti da OVH: 200 email/ora/account e 300 email/ora/IP|