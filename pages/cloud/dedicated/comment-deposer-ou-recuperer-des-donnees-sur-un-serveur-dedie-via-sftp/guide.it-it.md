---
title: 'Caricare e recuperare dati su un server dedicato tramite il protocollo SFTP'
slug: caricare-e-recuperare-dati-via-sftp
excerpt: 'Come trasferire dati da un server dedicato a un computer personale e viceversa'
section: Tutorial
---

## Introduzione

Durante una migrazione potresti aver bisogno di recuperare i dati da un server dedicato per salvarli su un’altra macchina. Tra le diverse procedure esistenti per effettuare questa operazione, l’utilizzo del protocollo SFTP (Secure File Transfert Protocol) consente di trasferire in modo semplice e rapido i file tramite una connessione sicura SSH.

**Questa guida ti mostra come salvare e recuperare dati su un server dedicato via SFTP.**

> [!warning]
>
Questa guida contiene informazioni relative all’utilizzo di una o più soluzioni OVH con tool esterni in un contesto ben preciso: adatta le indicazioni fornite alla tua situazione e, in caso di difficoltà o dubbi, rivolgiti a un esperto del settore o alla nostra Community di utenti, disponibile all’indirizzo <https://www.ovh.it/community/>.
OVH non potrà fornirti assistenza.
>


## Prerequisiti


### Competenze necessarie

*     Nozioni di amministrazione Linux
*     Saper effettuare l’accesso via SSH
*     Saper installare una distribuzione (in questa guida utilizzeremo Debian 9.4)


### Hardware e software necessari 

*     Almeno un server dedicato OVH
*     Un software compatibile con il protocollo SFTP (in questa guida utilizzeremo il client [FileZilla](https://filezilla-project.org/))


## Procedura


### Step 1: recupera i dati

Un server installato su un sistema Linux dispone di default di un accesso SSH tramite la porta 22.

Il protocollo SFTP (Secure File Transfert Protocol) permette di trasferire file tramite una connessione SSH sicura. In questa guida spiegheremo come utilizzare questo protocollo in due diverse situazioni: quando l’accesso al server è disponibile e quando sul server è attiva la modalità Rescue.


#### Se l’accesso al server è disponibile

Apri FileZilla e inserisci il tuo IP nel campo `Host`{.action}. Inserisci il nome utente “root” e la password associata. Nel campo `Porta`{.action} inserisci il valore “22” (oppure, se lo hai modificato, quello del tuo servizio SSH).

Verrà stabilita la connessione e nella sezione **Sito remoto** comparirà la lista delle tue cartelle.

 
![sito remoto sftp](images/sftp_ds_01.png)
 

Per salvare i file sul tuo computer personale, trascina i dati da recuperare dalla finestra di destra (**Sito remoto**) alla finestra di sinistra (**Sito locale**) . Nel nostro esempio i dati si trovano nella cartella "/home/data", visibile nella finestra a destra (**Sito remoto**).

Lo stato di avanzamento del processo compare nella parte inferiore della finestra. 

 
![stato di avanzamento del trasferimento sftp](images/sftp_ds_02.png)


#### Se sul server è attiva la modalità Rescue 

Se il Rescue mode è attivo, per prima cosa è necessario eseguire il mount della partizione. Se hai bisogno di aiuto per effettuare questa operazione, consulta [questa guida](https://docs.ovh.com/it/dedicated/rescue_mode/).

Una volta eseguito il mount, collegati nuovamente alla porta 22 tramite il client scelto (nel nostro caso, FileZilla).


> [!primary]
>
> Le credenziali di accesso da utilizzare sono quelle ricevute via mail all’attivazione della modalità Rescue.
>


Se il mount è stato eseguito correttamente, i dati si troveranno nella directory “/mnt” (nel nostro esempio, “/mnt/data/” ).

![sito remoto sftp mode rescue](images/sftp_ds_03.png)

 
### Step 2: salva i dati sul server

Anche in questo caso la procedura di connessione è la stessa: connettersi alla porta 22 via SFTP con il nome utente “root” e seguire le indicazioni precedenti.

Una volta connesso al server su cui intendi caricare i dati, è possibile trascinare i file. Questa volta, però, l’operazione dovrà essere effettuata dalla finestra di sinistra (**Sito locale**) verso quella di destra (**Sito remoto**), in modo da trasferire i dati dal computer al server.


## Per saperne di più

Contatta la nostra community di utenti all’indirizzo<https://www.ovh.it/community>.