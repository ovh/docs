---
title: Scegliere la classe corretta di Block Storage
excerpt: Scopri come scegliere la classe corretta di Block Storage OVHcloud. Confronta le prestazioni, i costi e i casi d'uso per ottimizzare il tuo storage in termini di prezzo ed efficienza.
updated: 2025-12-15
---

## Obiettivo

Questo manuale ti aiuta a comprendere le diverse classi di Block Storage OVHcloud e a scegliere quella che meglio si adatta alle tue esigenze. Scopri i livelli di prestazione, le considerazioni sui costi e i casi d'uso consigliati per prendere decisioni informate sullo storage.

## Introduzione a Block Storage

Block Storage è una soluzione di storage performante, flessibile e affidabile, progettata per carichi di lavoro critici. Puoi collegare direttamente i volumi alle tue istanze, aumentare la capacità da 10 GB a 12 TB e scegliere la classe appropriata: Regional Classic, Classic o High Speed, in base alle tue esigenze in termini di prestazioni e disponibilità.

Questa soluzione è ideale per database, macchine virtuali e applicazioni containerizzate, con funzionalità come snapshot, backup e crittografia.

## Classi di Block Storage

Le nostre classi di Block Storage sono progettate per rispondere ai diversi bisogni dei tuoi carichi di lavoro in termini di prestazioni, disponibilità e resilienza. Scegli la classe adatta per ottimizzare velocità, ridondanza e costo.

### Regional Classic Volume

La classe **Regional Classic Volume** offre un'alta disponibilità replicando automaticamente i dati in tre zone di disponibilità all'interno di una regione (3-AZ). I volumi sono supportati da storage NVMe over Fabric per un accesso rapido, coerente e affidabile.

Per garantire la continuità del servizio anche in caso di guasto di una zona di disponibilità, questa classe supporta anche il [Multi-Attach](/pages/public_cloud/compute/classic_block_multi_az_limitations). Questo permette a più istanze situate in diverse zone di disponibilità di connettersi contemporaneamente e utilizzare lo stesso volume.

Questa classe è adatta ai carichi di lavoro che richiedono alta disponibilità e forte resilienza, come database critici e applicazioni distribuite.

### Classic Volume

La classe **Classic Volume** è ideale per i carichi di lavoro applicativi quotidiani, come database, macchine virtuali e backup. I dati sono replicati all'interno di una singola zona di disponibilità (1-AZ) o di una Local Zone, con prestazioni NVMe garantite.

Questa classe è adatta ai carichi di lavoro standard dove la bassa latenza e l'affidabilità sono importanti, ma dove la replicazione multi-zona non è necessaria.

### High Speed Volume

La classe **High Speed Volume** è proposta in due generazioni, offrendo profili di prestazioni diversi:

- Gen 1: Fino a 3 000 IOPS e 128 MB/s – adatta ai carichi di lavoro standard che richiedono una velocità elevata.
- Gen 2: 30 IOPS/GB (fino a 20 000 IOPS), 0,5 MB/s per GB (fino a 512 MB/s) – consigliata per applicazioni intensive che richiedono un massimo di I/O e di throughput.

Scegli Gen 1 per carichi di lavoro ad alta velocità classici, e Gen 2 per carichi di lavoro pesanti come l'analitica, grandi database o calcolo ad alte prestazioni.

### Tabella comparativa

| Classe di storage | Casi d'uso | Prestazioni | Regioni disponibili | SLA di disponibilità | Replicazione | Note |
| --- | --- | --- | --- | --- | --- | --- |
| **High Speed Volume** | Carichi di lavoro ad alta prestazione, analitica, grandi database | **Gen 1**: fino a 3 000 IOPS, 128 MB/s <br><br> **Gen 2**: 30 IOPS/GB (fino a 20 000 IOPS), 0,5 MB/s per GB (fino a 512 MB/s) | 3-AZ, 1-AZ, Local Zones | 99,9 % | Zonale | NVMe ottimizzato, prestazioni scalabili |
| **Regional Classic Volume** | Applicazioni critiche, sistemi distribuiti | 500 IOPS garantiti, 64 MB/s | 3-AZ | 99,99 % | Multi-zona | NVMe over Fabric, alta disponibilità |
| **Classic Volume** | Carichi di lavoro quotidiani, macchine virtuali, backup | 500 IOPS garantiti, 64 MB/s | 1-AZ, Local Zones | 99,9 % | Zonale | NVMe over Fabric, prestazioni standard |

### Dettagli supplementari

#### Durata minima di storage

Per il Block Storage, non esiste una durata minima di storage: puoi collegare o eliminare volumi in qualsiasi momento senza costi aggiuntivi. Verrai addebitato solo per l'utilizzo effettivo del volume durante il periodo in cui esiste.

#### Costi di snapshot e backup

Sebbene l'utilizzo standard dei volumi venga addebitato in base a GB/mese, gli [snapshot](/pages/public_cloud/compute/creating_a_volume_snapshot) memorizzati su **Block Storage** e i [backup](/pages/public_cloud/compute/volume-backup) memorizzati su **Object Storage** possono generare costi aggiuntivi. Gli snapshot permettono di catturare lo stato di un volume in un momento specifico, e i backup assicurano la protezione e il recupero dei dati.

#### Gestione del ciclo di vita e ridimensionamento

I volumi Block Storage sono completamente flessibili: puoi [aumentare la loro dimensione](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk) in qualsiasi momento, estendere le partizioni e collegare i volumi a diverse istanze. Queste operazioni vengono gestite a livello di volume, permettendoti di ottimizzare capacità e prestazioni senza interruzioni.

#### Volumi crittografati

Ogni tipo di volume Block Storage è disponibile anche in versione crittografata (LUKS), a seconda della regione. Queste varianti crittografate garantiscono la riservatezza dei dati senza impatto sulle prestazioni.

> [!primary]
> Si prega di notare che la classe Regional Classic Volume e i volumi nelle Local Zones non supportano la crittografia LUKS.

I volumi crittografati possono essere creati direttamente da Spazio Cliente OVHcloud o tramite gli strumenti CLI/API specificando il tipo di volume con il suffisso `-luks` (ad esempio: classic-luks o highspeed-luks). Questo permette di proteggere facilmente i dati sensibili mantenendo le stesse prestazioni e funzionalità dei volumi standard.

> [!primary]
> I volumi crittografati non hanno alcun impatto sulle prestazioni.

## Casi d'uso

Il Block Storage supporta una vasta gamma di carichi di lavoro grazie alle sue prestazioni, flessibilità e resilienza. I casi d'uso comuni includono:

- **Database**: MySQL, PostgreSQL e altri database relazionali beneficiano di un accesso rapido con bassa latenza e alto throughput.
- **Macchine virtuali e applicazioni containerizzate**: Storage persistente per VM e container con alta affidabilità e accesso rapido.
- **Analitica e carichi di lavoro IA**: I volumi High Speed offrono un massimo di IOPS e throughput per applicazioni ad alta intensità di dati.
- **Backup e ripristino**: Crea facilmente snapshot e backup per i tuoi dati critici, per garantire un ripristino rapido e sicuro.

## Considerazioni relative alle zone e alle regioni

> [!success]
> I volumi Block Storage possono essere distribuiti con diverse opzioni di disponibilità in base alle tue esigenze:

- **Regional Classic Volume (3-AZ)**: I dati vengono replicati su tre zone di disponibilità all'interno della stessa regione, offrendo una forte resilienza e un SLA del 99,99 %. Ideale per applicazioni critiche che richiedono alta disponibilità. Per ulteriori informazioni, consulta la nostra guida "[Uso corretto e limitazioni di Classic Multi Attach Block Storage nelle regioni 3AZ (EN)](/pages/public_cloud/compute/classic_block_multi_az_limitations)".
- **Classic & High Speed Volume (1-AZ o Local Zone)**: I dati vengono replicati in una singola zona. Queste opzioni offrono accesso a bassa latenza e alte prestazioni, e sono adatte ai carichi di lavoro che non richiedono ridondanza multi-zona.
- **Local Zones**: Per applicazioni che richiedono una latenza ultra-bassa in una località geografica precisa, le Local Zones permettono di mantenere lo storage vicino alle risorse di calcolo.

Scegliere l'opzione di distribuzione corretta garantisce prestazioni ottimali, una ridondanza efficace e il controllo dei costi in base al tuo carico di lavoro e alle tue esigenze geografiche.

## Per saperne di più

[Crea e configura un disco aggiuntivo sulla tua istanza](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

[Modificare un Volume Block Storage](/pages/public_cloud/compute/switch_volume_type)

Se hai bisogno di formazione o di supporto tecnico per l'implementazione delle nostre soluzioni, contatta il tuo rappresentante commerciale o clicca su [questo link](/links/professional-services) per richiedere un preventivo e un'analisi personalizzata del tuo progetto da parte del nostro team Professional Services.

Contatta la nostra [Community di utenti](/links/community).