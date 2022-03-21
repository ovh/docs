---
title: Enterprise File Storage - FAQ
excerpt: FAQ sulla soluzione Entreprise File Storage
slug: netapp-faq
section: Enterprise File Storage
order: 7
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 21/03/2022**

## Obiettivo

Ecco le domande più frequenti sull'offerta Enterprise File Storage di OVHcloud.

## Domande generali

### Cos'è la soluzione Enterprise File Storage di OVHcloud?

Enterprise File Storage di OVHcloud è una soluzione di storage file ad alte prestazioni e high availability. basata sulla soluzione di storage software-defined ONTAP Select, NetApp&#174;, gestita totalmente da OVHcloud.

### Cosa posso fare con Enterprise File Storage?

Enterprise File Storage permette di rispondere a numerosi casi pratici per modernizzare la tua infrastruttura di storage di dati aziendali, grazie in particolare all'integrazione del protocollo NFS.<br>
Permette, ad esempio, di esternalizzare lo storage condiviso delle tue macchine virtuali o server basati su Linux per diversi carichi di lavoro (applicazioni critiche, database aziendali, CRM, ERP...) al fine di aumentare la resilienza globale della tua infrastruttura e la qualità del servizio (QoS).<br>
Enterprise File Storage permette di rispondere alle situazioni d'uso semplici di server di file condivisi per i quali il servizio deve offrire prestazioni elevate, alta disponibilità e banda passante garantita e inclusa.

Questa soluzione permette anche di rispondere a casi pratici più complessi, come ad esempio il sovraccarico di carichi di lavoro on-premise o la migrazione al Cloud. Ma anche gli esempi di backup dei dati nel Cloud nel quadro di piani di resilienza, come una buona pratica di mercato per la gestione e la sostenibilità dei dati, ma anche per ottimizzare i costi operativi (dati caldi on-premise e dati tiepidi/freddi nel Cloud).

### È possibile gestire Enterprise File Storage dallo Spazio Cliente OVH?

Sì, il servizio è direttamente accessibile dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), nella sezione `Bare Metal Cloud`{.action}, poi `Storage e Backup`{.action}.

## Disponibilità

### Quale livello di affidabilità e ridondanza posso raggiungere con Enterprise File Storage?

Enterprise File Storage è un servizio di storage high availability, ridondato per progettazione. La sua architettura attiva/attiva protegge questa ridondanza alimentando due server di file differenti in due rack di uno stesso datacenter. In caso di malfunzionamento del primo, il servizio replica automaticamente i tuoi dati sui due server. Il trasferimento si verifica generalmente in caso di malfunzionamento del server attivo o durante una manutenzione pianificata.

### Qual è lo SLA fornito con Enterprise File Storage?

Enterprise File Storage è fornito con un tasso di disponibilità del 99,99%.

## Rete e Sicurezza

### Quali protocolli di trasferimento di file sono supportati sulla soluzione Enterprise File Storage?

Enterprise File Storage supporta il trasferimento di file tramite NFS (NFSv3).

### Da quali servizi OVHcloud è possibile caricare dati?

Enterprise File Storage è un servizio che può ricevere i dati da tutti i servizi esistenti OVHcloud: Bare-Metal, Public Cloud, Hosted Private Cloud (Dedicated server/VPS/Public Cloud/Hosted Private Cloud/So you Start/Kimsufi/ADSL).

### Il servizio può essere connesso con un Microsoft Active Directory (AD)?

No.

### Quali sono le certificazioni associate a Enterprise File Storage?

La nostra soluzione Enterprise File Storage rispetta diversi standard di punta del settore, tra cui ISO27001, il GDPR e le politiche nazionali relative ai dati sanitari.

### È possibile accedere a Enterprise File Storage da una rete privata di tipo vRack?

Non per il momento, ma questa funzionalità sarà presto disponibile (vRack endpoint).

## Accesso *On-premises*

### È possibile accedere a Enterprise File Storage dall'esterno della rete OVHcloud?

Per definizione, Enterprise File Storage è disponibile solo sulla rete OVHcloud.<br>
ma è possibile creare un'architettura che permetta di collegare un'infrastruttura esterna alla rete.<br>
Per progettare un'infrastruttura adatta al tuo ecosistema e alla tua soluzione, ti consigliamo di contattare il supporto commerciale o tecnico OVHcloud. 

## Capacità e prestazioni

### Quali sono le capacità di storage disponibili?

La dimensione minima di un servizio è di 1TiB e la dimensione massima è di 58TiB. La granularità è di 1TiB.

### Quanti servizi Enterprise File Storage è possibile creare dal tuo account cliente?

Non ci sono limiti al numero di servizi per account cliente.

### Qual è il numero massimo di volumi per servizio?

È possibile creare fino a 10 volumi massimi per ogni servizio. La dimensione minima è di 100GiB e la dimensione massima è di 29TiB.

### Qual è il livello di performance disponibile con Enterprise File Storage?

La File Storage è fornita con una velocità garantita di 64MB/s da TiB e di 4000 IOPS da TiB.

Ad esempio, al momento della consegna di un pool di 10 TiB, usufruisci di una banda passante di 640 MB/s e di 40.000 IOPS.

## Snapshot e backup

### Come recuperare i file di una versione precedente?

Gli Snapshot sono disponibili in una directory appositamente creata (.snapshot).

### Qual è la politica di backup associata a Enterprise File Storage?

Gli utenti sono responsabili della gestione dei loro backup (strumenti e regole). Per ragioni di sicurezza e resilienza dell'infrastruttura, OVHcloud esegue un backup giornaliero del servizio su un server remoto. In caso di malfunzionamenti o attacchi, OVHcloud può ripristinare i dati del giorno precedente. Questa operazione viene eseguita su richiesta ed è un servizio opzionale fatturato.

### Gli Snapshot sono inclusi nella capacità di un servizio?

Un minimo del 5% dello spazio di storage è assegnato agli Snapshot. Ad esempio, su un servizio di 5TiB, 250GiB sono riservati agli Snapshot.

### Qual è il numero massimo di Snapshot per servizio?

200

### Qual è il numero massimo di Snapshot per volume?

200

### Quante politiche di Snapshot puoi creare per volume?

1

### Quante regole posso creare per politica di Snapshot?

4

### Dove sono salvati gli Snapshot?

I tuoi Snapshot sono salvati allo stesso livello del tuo servizio. Gli Snapshot vengono replicati su due server distinti, in due rack differenti. Allo stesso tempo, OVHcloud esegue uno Snapshot giornaliero su un sito remoto.

### Come monitorare l'utilizzo di pool e volumi?

Non sono ancora disponibili metriche integrate per monitorare l'utilizzo di pool e volumi. 

## Tariffe

### Che tipo di tariffazione è associata al servizio?

Enterprise File Storage è un servizio fatturato mensilmente al volume (da 1 a 58 TiB per incrementi di 1 TiB). In via facoltativa, è inoltre possibile impegnarsi per una durata di utilizzazione del servizio (12, 24 o 36 mesi).

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
