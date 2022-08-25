---
title: Domande frequenti sul NAS
slug: faq-nas
excerpt: Hai una domanda sul NAS? Ecco le risposte alle domande più frequenti
section: NAS
order: 02
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 29/07/2022**

## Obiettivo

**Ecco le domande più frequenti sull'offerta NAS-HA OVHcloud.**

## Domande generali

### Cos'è la soluzione NAS-HA OVHcloud?

NAS-HA è un servizio di archiviazione file condiviso e totalmente gestito, basato sulla tecnologia open-source OpenZFS.

### Cosa posso fare con NAS-HA?

NAS-HA permette di centralizzare i dati di diversi carichi di lavoro Linux e Windows per diversi scenari:

- storage condiviso ed esternalizzato per applicazioni IT (VM, DB...)
- gestione dei contenuti web; 
- condivisione di file sulla rete, ecc...

### È possibile gestire il NAS-HA tramite un’interfaccia di amministrazione?

Sì, questo spazio è accessibile dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), sezione `Bare Metal Cloud`{.action}, poi `NAS e CDN`{.action}.

## Disponibilità

### Qual è lo SLA fornito con NAS-HA?

NAS-HA è fornito con un tasso di disponibilità del 99,99%.

## Rete e Sicurezza

### Quali protocolli di trasferimento di file sono supportati sul NAS-HA?

NAS-HA supporta il trasferimento di file tramite NFS (NFSv3) e CIFS (SMB).

### Da quali servizi OVHcloud è possibile caricare dati?

NAS-HA è un servizio che può ricevere dati da tutti i servizi esistenti OVHcloud: Bare Metal Cloud (VPS, server dedicati OVHcloud, So you Start, Kimsufi), Public Cloud, Hosted Private Cloud, ecc...

### Come gestire gli accessi al NAS-HA?

La lista dei controlli degli accessi (ACL) è configurabile dallo Spazio Cliente OVHcloud. Inserisci semplicemente l'indirizzo IP del servizio per il quale vuoi autorizzare l'accesso al NAS-HA.

### Il servizio NAS-HA è compatibile con altri server al di fuori di OVHcloud?

No, è possibile accedere al NAS-HA solo dalla rete OVHcloud.

### NAS-HA è ammissibile all'offerta vRack?

Al momento il NAS-HA non può essere integrato nella rete privata vRack. Tuttavia, l'utilizzo del NAS-HA e della vRack non è incompatibile tramite il percorso IP pubblico del server connesso alla vRack.

## Capacità e performance

### Quali sono le capacità di storage disponibili?

La dimensione minima di un servizio è di 3 TB e la dimensione massima è di 144 TB.<br>
OVHcloud ti offre queste capacità di storage su un database da 3 TB:

- 3 TB
- 6 TB
- 9 TB
- 18 TB
- 36 TB

OVHcloud ti offre queste capacità di storage su un database da 12 TB:

- 12 TB
- 24 TB
- 36 TB
- 72 TB
- 144 TB

La capacità di storage offerta è la capacità utilizzabile.

### Le risorse del tuo NAS-HA sono dedicate?

I dischi del tuo NAS-HA ti sono dedicati. Le altre risorse della macchina sono condivise (RAM, CPU, banda passante).

**Caso particolare:** se sottoscrivi l'offerta da 144 TB, tutte le risorse del server host sono dedicate (RAM, CPU, banda passante).

### Quanti servizi NAS-HA posso creare dal mio account cliente?

Non ci sono limiti al numero di servizi per account cliente.

### Qual è il numero massimo di partizioni per servizio?

È possibile creare tutte le partizioni che vuoi. La dimensione minima è di 10 GB e la dimensione massima è definita dalla dimensione massima del servizio.

### La velocità di trasferimento e il livello di disponibilità sono garantiti?

- Trasferimento: la banda passante del servizio è condivisa. La velocità di trasferimento non può essere garantita da OVHcloud.
- Disponibilità: la disponibilità del servizio è garantita e regolata da un accordo di livello di servizio. I dettagli sono consultabili nelle nostre specifiche condizioni di utilizzo.

## Utilizzo del prodotto

### È possibile connettere il NAS-HA a più server contemporaneamente?

Sì È possibile far interagire contemporaneamente il tuo NAS con diversi servizi OVHcloud.

### È possibile installare un sistema operativo su un NAS-HA?

No, sui servizi NAS-HA non è possibile installare un OS.

### Lo spazio assegnato è partizionabile?

Sì, è necessario creare una o più partizioni in base al tuo utilizzo. La creazione delle partizioni è illimitata.

## Snapshot

### Cosa sono gli Snapshot?

Gli Snapshot sono immagini dello stato del disco e dei dati presenti nella sua partizione in un istante specifico. Che permettono di offrire un primo livello di backup. La configurazione e la gestione degli Snapshot sono disponibili nello Spazio Cliente OVHcloud.

La funzione Snapshot è attiva di default durante la creazione della partizione e la sua frequenza è preimpostata su "ogni ora".

### Qual è la politica di backup associata al NAS-HA?

Gli utenti sono responsabili della gestione dei loro backup (strumenti e regole) all'interno e all'esterno del servizio, così come dei loro piani di continuità operativa e di ripresa delle attività. Per ragioni di sicurezza e resilienza dell'infrastruttura, OVHcloud può effettuare Snapshot del servizio su un server remoto, senza alcun obbligo.

In caso di malfunzionamenti o attacchi, se OVHcloud ha effettuato uno Snapshot su un server remoto, è possibile ripristinare i dati dell'ultimo Snapshot disponibile. Ti ricordiamo tuttavia che questa operazione viene eseguita su richiesta e costituisce un servizio opzionale fatturato.

### Qual è la frequenza degli Snapshot? <a name="frequency"></a>

La frequenza degli Snapshot è gestibile dallo Spazio Cliente OVHcloud. Le opzioni disponibili sono:

- ogni ora (di default)
- ogni 6 ore
- ogni giorno
- ogni 2 giorni
- ogni 3 giorni
- settimanale

In qualsiasi momento è inoltre possibile creare Snapshot manuali, conservarli senza limite di durata o eliminarli. Questa funzionalità è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) o tramite [API](https://api.ovh.com/):

> [!api]
>
> @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

> [!primary]
> Consulta la nostra guida Iniziare a [utilizzare le API OVHcloud](https://docs.ovh.com/it/api/first-steps-with-ovh-api/) per familiarizzare con l'utilizzo delle API OVHcloud.
>

### Come funziona il sistema di gestione degli Snapshot?

È possibile configurare Snapshot automatici con una delle diverse frequenze disponibili. Indipendentemente dalla frequenza impostata, l’ultimo Snapshot eseguito sostituirà il precedente. È inoltre possibile creare e rimuovere Snapshot on demand.

### È possibile eliminare uno Snapshot?

Solo gli Snapshot creati "on demand" possono essere eliminati (vedi domanda precedente "[Qual è la frequenza degli snapshot?](#frequency)").<br>
Gli Snapshot con frequenza fissa vengono eliminati automaticamente e non prevedono la possibilità di eseguire l’operazione manualmente.

### Gli Snapshot sono inclusi nella capacità di un servizio?

Per assicurare lo storage dei tuoi Snapshot, hai a disposizione uno spazio aggiuntivo sullo stesso supporto fisico. Questo spazio corrisponde ad almeno il 15 % del volume principale. In caso di superamento del limite, gli Snapshot saranno salvati sul tuo spazio di archiviazione principale. Lo spazio aggiuntivo non può essere utilizzato per scopi diversi dallo storage dei tuoi Snapshot.

Ad esempio, per un servizio da 3 TB, 450 GB aggiuntivi sono riservati agli Snapshot.

### Qual è il numero massimo di Snapshot eseguibili?

- Snapshot automatici: uno per partizione
- Snapshot manuali: dieci per partizione

### Dove sono salvati gli Snapshot?

Gli Snapshot sono salvati allo stesso livello del tuo servizio. Gli Snapshot vengono replicati su due server distinti in due rack diversi. OVHcloud esegue uno Snapshot giornaliero su un sito remoto.

### Dove è possibile recuperare gli Snapshot?

Nella partizione interessata, troverai una directory nascosta chiamata `.zfs` che contiene una directory `snapshot`. I file sono disponibili in read only.

### Quante politiche di Snapshot puoi creare per volume?

1

## Tariffe

### Che tipo di tariffazione è associata al servizio?

NAS-HA è un servizio fatturato mensilmente al volume (da 3 a 144 TB per incrementi).

### Qual è la durata di sottoscrizione di un NAS-HA?

I periodi proposti sono di 1, 12, 24 e 36 mesi. Alla fine del periodo contrattuale sottoscritto, l'abbonamento viene rinnovato automaticamente se non è stata presentata alcuna [richiesta di rescissione](https://docs.ovh.com/it/billing/how-to-cancel-your-services/). e può essere effettuata per tutta la durata dell'abbonamento tramite lo Spazio Cliente OVHcloud.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
