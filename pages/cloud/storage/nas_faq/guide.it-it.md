---
title: Domande frequenti sul NAS
slug: faq-nas
excerpt: Hai una domanda sul NAS? Ecco le risposte alle domande più frequenti
section: NAS
---

**Ultimo aggiornamento: 16/01/2018**

## Caratteristiche del prodotto

### Cosa significa la sigla HA che compare nel nome dei NAS OVH?
L’acronimo HA (High Availability) indica l’impegno di OVH a garantire una disponibilità di servizio elevata. Questa garanzia implica la presenza di uno SLA (Service Level Agreement) che vincola OVH a risarcire i propri clienti in caso di incidente con impatto sulla disponibilità del servizio.

### In quali datacenter è possibile attivare un NAS-HA?
Il servizio NAS-HA è disponibile nei datacenter europei di Roubaix, Strasburgo e Gravelines e in quello canadese di Beauharnois. La scelta del datacenter si effettua al momento dell’ordine. ATTENZIONE: una volta ordinato il servizio, non è possibile modificare il datacenter scelto.

### È possibile gestire il NAS-HA tramite un’interfaccia di amministrazione?
Sì, è possibile gestire il servizio accedendo alla sezione `Cloud`{.action} dello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e cliccando su `Piattaforme e servizi`{.action} nel menu a sinistra.

### È possibile aumentare la capacità totale del NAS?
No, una volta effettuato l’ordine non è possibile aumentare la capacità del NAS-HA. Per disporre di uno spazio di storage maggiore, è necessario migrare i dati su un secondo NAS con capacità superiore.

### Quali sono le capacità di storage disponibili?
Offriamo queste capacità di storage:

- 1,2 TB (1,1 TB di spazio utile)
- 2,4 TB (2,2 TB di spazio utile)
- 3,6 TB (3,2 TB di spazio utile)
- 7,2 TB (6,4 TB di spazio utile)
- 13,2 TB (10 TB di spazio utile)
- 19,2 TB (17 TB di spazio utile)
- 26,4 TB (24 TB di spazio utile)

Queste configurazioni sono tutte composte da dischi dedicati da 1,2 TB.

### Le risorse del tuo NAS-HA sono dedicate?
I dischi del tuo NAS-HA sono dedicati, le altre risorse della macchina (RAM, CPU, banda passante) condivise. 

Unica eccezione la soluzione da 26,4 TB, in cui tutte le risorse del server host (RAM, CPU, banda passante) sono dedicate.

### Qual è la durata di sottoscrizione di un NAS-HA?
I periodi proposti sono di 1, 3, 6 e 12 mesi. Se non ne viene richiesta la rescissione prima della data di scadenza, il contratto si rinnova automaticamente. Il servizio può essere disattivato in qualsiasi momento tramite lo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.

### La capacità visualizzata al momento dell’ordine è interamente a tua disposizione?
Come per la maggior parte delle soluzioni di storage, la capacità teorica differisce leggermente da quella effettivamente utilizzabile, in quanto parte dello spazio è riservato al disco:

- i NAS-HA da 1,2 TB dispongono di 1,1 TB di spazio utile
- i NAS-HA da 2,4 TB dispongono di 2,2 TB di spazio utile
- i NAS-HA da 3,6 TB dispongono di 3,2 TB di spazio utile
- i NAS-HA da 7,2 TB dispongono di 6,4 TB di spazio utile
- i NAS-HA da 13,2 TB dispongono di 10 TB di spazio utile
- i NAS-HA da 19,2 TB dispongono di 17 TB di spazio utile
- i NAS-HA da 26,4 TB dispongono di 24 TB di spazio utile

Questi dati sono puramente indicativi e potrebbero variare.

## Utilizzo del prodotto

### In quali casi è consigliabile utilizzare un NAS-HA?
Il NAS-HA costituisce uno spazio di storage nell’infrastruttura a cui è possibile associare più [server dedicati](https://www.ovh.it/server_dedicati/){.external}, [Private Cloud](https://www.ovh.it/private-cloud/){.external} o [istanze Public Cloud](https://www.ovh.it/public-cloud/istanze/){.external}.

Le modalità di utilizzo sono molteplici, ma l’high availability offerta dal NAS OVH rende questo servizio particolarmente adatto in caso di:

- archiviazione di dati non consultati di frequente, cioè di dati che non generano un traffico significativo ma che devono essere costantemente disponibili (documentazione legale, manuali di utilizzo, ecc.)
- archiviazione di dati "statici", cioè di dati non destinati a modifiche regolari, per liberare spazio su un’infrastruttura e ottimizzarne le prestazioni dando priorità ai dati che cambiano costantemente e richiedono un’elevata potenza di calcolo (database, applicativi, ecc.)
- soluzione Hot Backup, dove l’alta disponibilità del NAS garantisce la raggiungibilità dei dati in qualsiasi momento, consentendo l’accesso (o il reindirizzamento) a file che potrebbero essere irraggiungibili o corrotti su altri supporti

### In quali casi è preferibile utilizzare il NAS-HA al posto del Backup Storage?
Il NAS-HA e il Backup Storage non vengono utilizzati per le stesse operazioni. Il NAS è consigliato per l’archiviazione di dati statici che devono essere sempre disponibili. Il Backup Storage costituisce invece un backup di dati che non è necessario consultare di frequente.

Tecnicamente, le principali differenze sono le seguenti:

- i dati del NAS-HA vengono archiviati su dischi dedicati, mentre lo spazio del Backup Storage è condiviso
- il NAS-HA è uno spazio di storage montato su un altro server che utilizza i protocolli di trasferimento NFS o CIFS. Il Backup Storage è uno spazio autonomo, raggiungibile via FTP

### Sono disponibili funzionalità di sincronizzazione (tipo Synology)?
No, il NAS-HA può essere montato esclusivamente come file system direttamente su una distribuzione. L’implementazione di un processo di sincronizzazione potrà essere comunque effettuata dall’amministratore dello spazio.

### È possibile connettere il NAS-HA a più server contemporaneamente?
Sì, il NAS può comunicare simultaneamente con diversi servizi OVH. 

### È possibile installare un sistema operativo su un NAS-HA?
No, sui servizi NAS-HA non è possibile installare un OS.

### Quali sono i protocolli compatibili con il servizio NAS-HA?
Il NAS-HA può essere montato su un server Windows o Linux tramite i protocolli CIFS (Samba) o NFS.

### Il NAS-HA è compatibile con il protocollo FTP?
No, il servizio non supporta il protocollo FTP.

### È possibile effettuare partizioni dello spazio assegnato?
Sì, è necessario creare una o più partizioni in base al tuo utilizzo. La creazione delle partizioni è illimitata.

## Compatibilità del prodotto

### Il NAS-HA è compatibile con server esterni a OVH?
No, il NAS-HA è accessibile solo dalla rete OVH.

### Con quali servizi è possibile utilizzare il NAS-HA?
Il servizio può essere utilizzato con tutte le soluzioni OVH che dispongono di una distribuzione: server dedicati (OVH, So you Start, Kimsufi), Dedicated Cloud, Public Cloud e VPS.

### Come gestire gli accessi al NAS-HA?
La lista del controllo degli accessi (ACL) è configurabile dallo Spazio Cliente OVH. È sufficiente inserire l’indirizzo IP del servizio che vuoi autorizzare ad accedere al NAS-HA.

### Il NAS-HA è compatibile con la tecnologia vRack?
Al momento il NAS-HA non può essere integrato nella rete privata vRack. Tuttavia l’utilizzo di NAS-HA e vRack è possibile tramite l’IP pubblico del server connesso alla vRack.

## Velocità di trasferimento

### La velocità di trasferimento e il livello di disponibilità sono garantiti?

- Trasferimento: la banda passante del servizio è condivisa e la velocità di trasferimento non può essere garantita. 
- Disponibilità: la disponibilità del servizio è garantita e regolata da un accordo di livello di servizio. Tutti i dettagli sono disponibili nelle Condizioni Particolari di utilizzo.

## Snapshot

### Cosa sono gli Snapshot?
Gli Snapshot sono immagini dello stato del disco e dei dati presenti nella sua partizione in un istante specifico. La configurazione e la gestione di queste istantanee sono possibili dallo Spazio Cliente OVH.

La funzione Snapshot è attiva di default al momento della creazione della partizione e la sua frequenza predefinita è impostata su “ogni ora”.

### Qual è la frequenza degli Snapshot?

La frequenza degli Snapshot è configurabile dallo Spazio Cliente OVH. Le opzioni disponibili sono: 

- ogni ora
- ogni 6 ore
- ogni giorno
- ogni 2 giorni
- ogni 3 giorni
- settimanale 


In qualsiasi momento è inoltre possibile creare Snapshot manuali, conservarli senza limite di durata o eliminarli. Questa funzionalità è disponibile nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} o via [API](https://api.ovh.com/){.external}:

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
> 

### Come funziona il sistema di gestione degli Snapshot?

È possibile configurare Snapshot automatici con una delle diverse frequenze disponibili. Indipendentemente dalla frequenza impostata, l’ultimo Snapshot eseguito sostituirà il precedente. È inoltre possibile creare e rimuovere Snapshot on demand.

### È possibile eliminare uno Snapshot?
Solo gli Snapshot creati “on demand” possono essere eliminati (vedi domanda “Qual è la frequenza degli Snapshot?”). Gli Snapshot con frequenza fissa vengono eliminati automaticamente e non prevedono la possibilità di eseguire l’operazione manualmente.

### Qual è lo spazio occupato dagli Snapshot su un NAS-HA?
La capacità utilizzata da uno Snapshot varia in base alle operazioni effettuate nell’intervallo di tempo che separa le due istantanee.

A partire dal momento in cui lo Snapshot viene avviato, tutte le azioni eseguite sulla partizione vengono salvate nell’istantanea e aumentano la dimensione del file. In questo modo, è possibile tornare allo stato iniziale della partizione in qualsiasi momento e ripristinare i dati così com'erano nell'istante in cui è stato salvato lo Snapshot. Tecnicamente, sono proprio le operazioni di modifica e rimozione dei dati a far aumentare la dimensione dei file dello Snapshot.

### Qual è il numero massimo di Snapshot eseguibili?
- Snapshot automatici: uno per partizione
- Snapshot manuali: dieci per partizione

### Dove è possibile recuperare gli Snapshot?
Nella partizione interessata: directory nascosta `.zfs` → cartella`snapshot`. I file sono disponibili in modalità *read only*.

### OVH esegue un backup dei dati?
Sì, OVH provvede a effettuare un backup interno giornaliero, che genera uno Snapshot aggiuntivo.  Questo backup non può essere disattivato dal cliente.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.