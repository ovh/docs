---
title: 'Hacking del tuo sito WordPress: consigli e casi pratici'
excerpt: ''
id: '1874'
slug: hacking_del_tuo_sito_wordpress_consigli_e_casi_pratici
legacy_guide_number: g1874
section: Casi d'uso
---


## 
Il tuo sito sviluppato in WordPress e ospitato in OVH risulta non raggiungibile, viene reindirizzato verso un altro sito o presenta messaggi non desiderati.

OVH non garantisce assistenza relativamente all'utilizzo di WordPress, ma possiamo indicarti la procedura da seguire in caso di hacking.


## Perché il tuo sito è stato vittima di hacking? Che cosa devi fare?
L'hacking di un sito avviene in generale quando il prodotto non è aggiornato o quando vengono utilizzati plugin non ufficiali e password troppo semplici.

La mancanza totale di rischi non esiste, nè è possibile limitarli.

È però possibile adottare alcune misure per correggere il problema ed evitare che si ripresenti, ad esempio aggiornando regolarmente la versione di WordPress, i temi, i plugin, ecc...

In questa guida ti spieghiamo come rimettere online il tuo sito.

Se OVH ha chiuso il tuo sito consulta [questa guida](https://www.ovh.it/g1392.procedura-chiusura-hack-ovh), relativa alle procedure di chiusura per hacking.


## Esegui la scansione del tuo ambiente
Il posto da cui cominciare è il tuo ambiente locale.
In molti casi, infatti, la fonte dell'attacco inizia localmente (ad esempio computer portatile, pc dell'ufficio...).

Verifica che sulla tua macchina locale risulti attivo un Antivirus/Antimalware. 
Ti consigliamo di utilizzarne più di uno (locale e online) per assicurarti che tutti i virus vengano rilevati. Questo consiglio è valido sia per Windows che per Mac e Linux.


## Valuta la situazione
Quando ti rendi conto che il tuo sito ha subito hacking, è necessario agire in fretta.
Per prima cosa è importante sapere a quando risale l'attacco, per essere sicuro che OVH possa ripristinare i tuoi dati.
Individuiamo la fonte dell'intrusione e analizziamo i 2 casi possibili.


## 
Prima di effettuare qualsiasi ripristino, è importante verificare la data delle ultime modifiche dei tuoi file Web (FTP) per trovare e correggere le falle di sicurezza.
Non è possibile descrivere dettagliatamente la procedura che permette di identificare a colpo sicuro l'origine di qualsiasi intrusione, ma in generale un attacco è possibile a causa di una falla in uno script che l'hacker sfrutta per effettuare una richiesta HTTP.

Tutte le richieste HTTP sono disponibili nei tuoi log (https://logs.cluster0XX.hosting.ovh.net/tuo_dominio).
Sostituisci "tuo_dominio" con il tuo dominio e la sua estensione, ad esempio "ovh.com".

- Individua la data e l'ora contenute nell'email che hai ricevuto*
- Consulta i tuoi log a partire da questo orario ed eventualmente allarga il campo di ricerca agli orari anteriori fino a trovare una richiesta non corretta, sospetta o diversa dalle altre. Questa operazione richiede un pò di pratica e di conoscenza del formato delle richieste. Presta particolare attenzione alle richieste di tipo POST, maggiormente sfruttate dagli hacker
- Individua lo script utilizzato da questa richiesta
- Analizza lo script per individuare la falla
- Correggi la falla


*l'invio di email avviene solo se il tuo hosting è stato bloccato. In caso contrario è necessario verificare la data delle ultime modifiche effettuate dallo spazio FTP (data dei file).

Eliminare semplicemente il codice malevolo aggiunto dall'hacker non è sufficiente: è necessario correggere totalmente la falla di sicurezza.

Per questo tipo di operazione, ti consigliamo di richiedere l’assistenza di un [Webmaster](https://partners.ovh.com) o di chiedere aiuto sul forum ufficiale di WordPress.
In nessun caso il supporto OVH potrà assisterti direttamente per questo tipo di richiesta.


## Ripristina il tuo sito
WordPress è composto da file e da un database. È possibile ripristinare i tuoi file a una data anteriore. OVH propone uno storico dei file presenti sul tuo hosting di 2 settimane. Per il database, è possibile risalire fino a 7 giorni prima.
Il ripristino non corregge le falle di sicurezza, cancella semplicemente i dati presenti e li sostituisce con quelli contenuti nel backup.


## Ripristina i tuoi file via FTP
Dal tuo Spazio Cliente OVH è possibile ripristinare la totalità del tuo spazio FTP, ma questa operazione può essere complicata se hai più domini associati allo stesso hosting.

In questo caso, è preferibile ripristinare solo la directory interessata. Per maggiori informazioni, consulta [questa guida](https://www.ovh.it/g1593.recupera-un-backup-completo-o-un-file-specifico-in-ftp-con-fileZilla).


## Ripristina il tuo database SQL
Se necessario, consulta le nostre guide per [esportare](https://www.ovh.it/g1394.web_hosting_come_esportare_un_database) e [importare](https://www.ovh.it/g1393.web_hosting_come_importare_un_database_mysql) il tuo database.

Una volta effettuato il backup del database (dump), per importarlo è necessario eliminare tutte le tabelle dall'interfaccia [phpMyAdmin](https://docs.ovh.com/it/hosting/connessione-database-server-bdd/).


## Cosa fare dopo aver effettuato il ripristino?
Una volta completato il ripristino verifica se sono disponibili aggiornamenti di WordPress, dei temi e dei plugin ed eventualmente installali.

Disinstalla i plugin che non utilizzi: la loro semplice disattivazione non è sufficiente a eliminare le eventuali falle presenti.

Se l’attacco è avvenuto in una data precedente al periodo di backup, ecco come ripristinare il tuo WordPress:

## Non riesci ad accedere al pannello di amministrazione WordPress
In questo caso, modifica la tua [password amministratore](https://codex.wordpress.org/) seguendo la guida ufficiale di WordPress.

È possibile aggiornare la tua email dalla tabella user di [phpMyAdmin](https://docs.ovh.com/it/hosting/connessione-database-server-bdd/). Ritorna poi alla pagina di login, clicca su Hai dimenticato la password? e aspetta che ti venga inviata l'email.


## Scarica di nuovo i file di WordPress e sostituiscili a quelli già esistenti.
L’installazione di nuovi file di base ti garantisce l’utilizzo di contenuti non hackerati.

- Accedi al sito ufficiale di [WordPress](https://it.wordpress.org/).


Clicca sul link per scaricare l'ultima versione stabile del CMS.

Il file scaricato è generalmente compresso (zip), quindi è necessario decomprimerlo.

Una volta estratto, trasferisci i file sul tuo spazio FTP. Se necessario, consulta [questa guida](https://www.ovh.it/g1374.hosting_condiviso_come_mettere_online_il_tuo_sito).

Nel caso di più siti presenti su uno stesso hosting, il trasferimento dei file deve essere effettuato nella relativa directory.

Per rendere operativo il collegamento con il database, è necessario modificare il file wp-config.php.

Per farlo, è necessario disporre dell'email ricevuta al momento della creazione del tuo database. Puoi trovare tutte le informazioni nel tuo Spazio Cliente OVH, nella sezione "Supporto" > "Email ricevute".

Se non ricordi più la password del tuo database, puoi modificarla dal tuo Spazio Cliente OVH. Per eseguire questa operazione, consulta [questa guida](https://www.ovh.it/g1374.hosting_condiviso_come_mettere_online_il_tuo_sito).
Importante: ricordati di verificare gli aggiornamenti disponibili dal pannello di amministrazione WordPress


## Informazioni utili
Ti consigliamo di utilizzare solo plugin ufficiali di WordPress: le fonti non ufficiali non vengono necessariamente aggiornate e potrebbero contenere del codice malevolo.

