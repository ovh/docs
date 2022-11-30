---
title: Enterprise File Storage - Concetti di performance
excerpt: "Scopri i concetti di approvvigionamento, monitoraggio e test delle performance della soluzione Enterprise File Storage"
slug: netapp/performance
sezione: Enterprise File Storage
order: 011
---

**Ultimo aggiornamento: 30/11/2022**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Scopri i concetti di approvvigionamento, monitoraggio e test delle performance della soluzione [Enterprise File Storage](https://www.ovhcloud.com/it/storage-solutions/enterprise-file-storage/).

## Procedura

### Monitoraggio delle performance

Il concetto di "livello di servizio" è un elemento importante nell'offerta Enterprise File Storage. Definisce i livelli di prestazioni raggiungibili per ogni servizio fornito. Le prestazioni di un file system sono generalmente definite da diversi elementi: 

- Flusso.
- Gli IOPS (o numero di operazioni di entrata-uscita al secondo).
- Dimensioni del blocco.
- Il modello di accesso sequenziale o casuale.

Ad oggi, Enterprise File Storage fornisce e garantisce obiettivi di performance di **64 MB/s per TB e 4000 IOPS per TB**. Le capacità dei servizi provviste hanno quindi un impatto diretto sulle prestazioni disponibili per il tuo servizio.

Questa informazione è importante quando progettate l'architettura di storage. Prendiamo tre esempi per illustrarlo:

- **Esempio n. 1**: la tua applicazione richiede un flusso teorico di circa **430 MB/s**. Per effettuare questa operazione è necessario disporre di almeno **7 TB** di storage. Infatti, un rapido calcolo (**430/64 = 6,72**) permette di stimare la capacità minima necessaria per raggiungere tale flusso.

- **Esempio n°2**: la tua infrastruttura richiede **4500 IOPS** e un volume di dati di **1 TB**. Per effettuare questa operazione è necessario disporre **2 TB** per ottenere **4500 IOPS necessari**. In particolare, usufruisci di **8000 IOPS** sulla capacità attivata. Per garantire il livello di prestazioni desiderato, è necessario sovrintendere il servizio.

- **Esempio n. 3**: le performance delle applicazioni non sono particolarmente elevate ma un volume di storage superiore a **60 TB**. In questo caso, è preferibile orientarsi verso il servizio di archiviazione [NAS-HA](https://www.ovhcloud.com/it/storage-solutions/nas-ha/), più economico e che permette di raggiungere capacità superiori a 58 TB per servizio.

### Volumi e qualità dei servizi (QoS)

Ti ricordiamo che un volume è una partizione del servizio (chiamata anche "pool" o "pool di capacità"). Al momento dell'ordine, si dispone di una capacità per il tuo servizio. Una volta consegnato il servizio, sarà necessario creare i volumi mettendo a disposizione una quota che va da 100 GB a 29 TB per volume. 

Di seguito trovi la gerarchia di un servizio di storage Enterprise File Storage:

![Enterprise File Storage Perf 1](images/Netapp_Hierarchie_2.png)

Enterprise File Storage non consente ancora la modifica della QoS manualmente. La QoS è definita al livello del servizio (pool).

### Come massimizzare le prestazioni del tuo file system

Per massimizzare le prestazioni della tua Enterprise File Storage, è importante considerare alcuni elementi:

- Prendi in considerazione la tua Enterprise File Storage nello stesso datacenter in cui sono presenti i carichi di lavoro Le latenze tra datacenter possono essere elevate e influire sulle prestazioni globali della tua applicazione.
- Per una maggiore affidabilità e una banda passante massimizzata, favorisci i server di ultima generazione perché dispongono delle nuove interfacce di rete.
- Identifica la banda passante pubblica disponibile sui server client, per assicurarti la compatibilità con le prestazioni previste e ottimizzare così la velocità di trasmissione.

### Test delle performance

Per eseguire i tuoi test di performance e familiarizzare con i livelli di servizio di Enterprise File Storage, ti consigliamo di utilizzare strumenti come [FIO](https://github.com/axboe/fio), uno strumento di valutazione molto popolare. che fornisce numerose opzioni regolabili per simulare il carico di lavoro desiderato e fornisce statistiche dettagliate sul comportamento dello storage sotto carico. È disponibile gratuitamente anche su un’ampia gamma di sistemi operativi.

È importante testare le prestazioni del tuo Enterprise File Storage nello stesso datacenter in cui vengono eseguiti i carichi di lavoro. La latenza tra i datacenter è troppo elevata durante il funzionamento normale perché questa valutazione sia rilevante.

Prima di iniziare il test, verifica che il cliente utilizzato per questo benchmark abbia accesso al tuo servizio Enterprise File Storage e a un volume di test. Se non lo hai ancora fatto, consulta la guida di [gestione dallo Spazio Cliente OVHcloud](https://docs.ovh.com/it/storage/file-storage/netapp/control-panel/).

#### Banco di test

Il tool [FIO](https://github.com/axboe/fio) ti permette di testare diversi scenari e modificare numerosi parametri di test: 

- Il numero di immagini.
- La dimensione delle immagini.
- Dimensioni del blocco.
- La durata del test.
- Il numero di FIO workers.
- Il modello di accesso (lettura/scrittura/sequenziale/casuale), ecc...

Per maggiori informazioni, consulta la [documentazione di FIO](https://fio.readthedocs.io/en/latest/index.html){.external}.

## Per saperne di più

Contatta la nostra Community di utenti su Discord: <https://discord.gg/jW2FgBJ72h>
