---
title: 'Copiare dati da un server dedicato a un altro con rsync'
slug: "copiare-dati-server-rsync"
excerpt: 'Come effettuare la copia dei dati tra server utilizzando il software rsync'
section: Tutorial
---

## Introduzione

Durante le operazioni di migrazione e backup, potrebbe essere necessario copiare o trasferire i dati contenuti in un server su un’altra macchina. 

Distribuito sotto licenza GNU GPL, rsync (da “remote synchronization”) è un software open source per la sincronizzazione dei file, in grado di effettuare l’operazione in modo unidirezionale attraverso una sola trasmissione di dati per ogni direzione di comunicazione (server sorgente-server di destinazione). 

**Questa guida ti mostra come utilizzare rsync per copiare dati da un server dedicato OVHcloud a un altro.**

> [!warning]
>
Questa guida contiene informazioni relative all’utilizzo di una o più soluzioni OVHcloud con tool esterni in un contesto ben preciso: adatta le indicazioni fornite alla tua situazione e, in caso di difficoltà o dubbi, rivolgiti a un esperto del settore o alla nostra Community di utenti, disponibile all’indirizzo <https://www.ovh.it/community/>. OVH non potrà fornirti assistenza.
>

## Prerequisiti


### Competenze necessarie

*     Nozioni di amministrazione Linux
*     Saper installare nuovi pacchetti 
*     Saper effettuare l’accesso via SSH


### Hardware e software necessari

*     Almeno due server dedicati OVHcloud con distribuzione GNU/Linux
*     Accesso *root* sulla macchina sorgente
*     Accesso *SSH* sulla macchina di destinazione

## Procedura


### Step 1: installa rsync

Nel nostro tutorial utilizzeremo un server sorgente con Debian 9.4, che include nativamente rsync nei suoi repository. Il software potrà quindi essere installato direttamente,

accedendo alla macchina sorgente via SSH con l’utente root ed eseguendo il comando:

```sh
apt-get update && apt-get install rsync
```

### Step 2: avvia il trasferimento


#### Includendo tutte le cartelle nella copia

Rsync permette di copiare su un’altra macchina tutte le cartelle, sottocartelle e file inclusi nel percorso indicato.

Per eseguire questa operazione, la struttura generale del comando deve essere di questo tipo: `rsync -av source/ destination/`  

Per connettersi alla macchina di destinazione, rsync utilizza il protocollo SSH ed è quindi necessario aggiungere gli identificativi corrispondenti. Il comando precedente dovrà quindi essere completato in questo modo: `rsync -av *YourLocalFolder*/ login@server:/*DestinationFolder*/`

Se hai modificato la porta SSH scegliendone una diversa dalla 22, per stabilire la connessione SSH sarà necessario precisarne il numero aggiungendo `-e 'ssh -p X'` al comando (dove “X” è la porta SSH da utilizzare).

Il comando per copiare i dati da un server all’altro sarà quindi:

```sh
rsync -av -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
```

> [!primary]
>
> Di default non viene mostrato alcun indicatore della progressione dell’operazione.
> Per consultare facilmente (tramite statistiche dettagliate ed espresse in MB, GB, ecc...) e in tempo reale lo stato di avanzamento del trasferimento, ti consigliamo di aggiungere l’argomento `-P --stats --human-readable` al comando, che diventerà quindi:
>
> ```sh
> rsync -av -P --stats --human-readable -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
> ```


#### Escludendo una o più cartelle dalla copia

Nonostante rsync permetta di trasferire tutti i file di una macchina, è possibile scegliere di escludere alcune cartelle o sottocartelle dalla copia elencandone il nome sul server.

In generale consigliamo di non trasferire la cache e i file di sistema temporanei del server sorgente, per evitare eventuali conflitti sul server di destinazione. 

Ecco una lista non esaustiva di alcune cartelle che, in un server con distribuzione GNU/Linux, potrebbero contenere questi file: 

* /dev/*
* /proc/* 
* /sys/*
* /tmp/*
* /run/*
* /media/*
* /lost+found
 
Una volta definita la lista di cartelle e sottocartelle da escludere, utilizza l’argomento `--exclude` per indicare a rsync di ignorarle durante la copia. 
 
Questo argomento dovrà essere inserito alla fine del comando e ripetuto per ogni cartella o sottocartella da escludere. La struttura generale del comando sarà quindi di questo tipo: `rsync --exclude="Folder_Name" --exclude="Other_Folder_name" source/ destination/`

> [!primary]
>
Ti ricordiamo che rsync non considera i percorsi assoluti ed è quindi necessario indicare la posizione relativa della cartella.  Se, ad esempio, la cartella da escludere è localizzata in <b>/home/user/test</b> e sei posizionato all’interno di <b>/test</b>, è necessario indicare <b>--exclude="test"</b> (percorso relativo) e non <b>--exclude="/home/user/test"</b> (percorso assoluto).
>


Sulla base di queste ultime considerazioni, il comando di trasferimento sarà quindi:
 	
```sh
rsync -av -P --stats --human-readable -e 'ssh -p X' --exclude="Folder_Name" --exclude="Other_Folder_name" YourLocalFolder/ login@server:/DestinationFolder/
```

## Conclusione

A questo punto, dovresti essere in grado di copiare i dati del tuo server dedicato su un’altra macchina grazie a rsync.

Per saperne di più.
Contatta la nostra community di utenti all’indirizzo<https://www.ovh.it/community/>.