---
title: 'Applicare l’iperconvergenza VMware utilizzando vSAN'
slug: vmware-vsan
excerpt: 'Come sfruttare la potenza dell’iperconvergenza sulle tue macchine virtuali con la tecnologia vSAN'
section: 'Funzionalità VMWare vSphere'
---

**Ultimo aggiornamento: 08/07/2019**

## Obiettivo

OVH permette di implementare VMware vSAN nelle soluzioni Private Cloud.

**Questa guida ti mostra come implementare un’infrastruttura iperconvergente sulle tue macchine virtuali utilizzando vSAN.**

## Prerequisiti

* Disporre di una soluzione [Private Cloud OVH](https://www.ovh.it/private-cloud/){.external}
* Aver aggiunto almeno tre host vSAN
* Avere accesso all’interfaccia di gestione vSphere

## Procedura

### vSAN: concetti chiave

#### Cos'è vSAN?

vSAN è una soluzione object storage proposta da VMware, che aggrega un gruppo di dischi situati direttamente negli host VMware e li presenta come unico datastore. Questo tipo di sistema, che utilizza contemporaneamente le capacità di elaborazione e di storage distribuite su un insieme di host fisici, è chiamata anche **architettura iperconvergente** o, in quanto struttura virtuale gestita dal software vSAN, **Software Defined Storage (SDS)**. Uno dei vantaggi di vSAN è di essere completamente integrato in vSphere e gestibile direttamente dal vCenter.

#### Cos’è l’object storage?

Uno dei concetti più importanti da capire è che il datastore vSAN è un sistema di archiviazione di oggetti. Le macchine virtuali presenti in questo datastore sono composte da numerosi oggetti, diversamente da uno storage tradizionale in cui le VM sono costituite da file ospitati su un LUN (Logical Unit Number).  La disponibilità di questi oggetti viene garantita effettuandone una replica su più host del cluster, mentre in genere è il livello di RAID dei dischi ad assicurarla.

Una VM è composta da questi oggetti:
* file di base (VMX, nvram, log, Snapshot, memoria...), chiamati anche VM Home
* dischi virtuali (VMDK)
* Swap
* Snapshot dei dischi

Gli elementi che costituiscono un oggetto sono chiamati componenti o blocchi.  Se, ad esempio, l’oggetto è replicato su due host, significa che è composto da due componenti. Il numero dei componenti associati a un oggetto permette di definire il livello di resilienza dei dati.

#### Protezione dei dati

Per garantire la protezione dei dati in caso di malfunzionamenti hardware (host, dischi, ecc...), è necessario definire i livelli di ridondanza da raggiungere. Per eseguire questa operazione vSAN propone due meccanismi complementari.

##### Failures To Tolerate (FTT, in italiano “Guasti tollerati”)

Il primo livello di ridondanza è relativo al numero di guasti che il cluster vSAN deve essere in grado di supportare, che si tratti della perdita di un disco, di un host o di una rete. Questo valore è chiamato *Failures to Tolerate* (o FTT) e può partire da 0 (nessuna ridondanza) e arrivare a 3 (livello massimo). In base al livello “n” previsto vSAN creerà diversi componenti e li distribuirà su ciascun host. In caso di malfunzionamento le macchine virtuali continueranno a essere raggiungibili. Maggiore è il livello di ridondanza da raggiungere, maggiore sarà il numero degli host necessari: 

* FTT=1:  minimo 3 host 
* FTT=2:  minimo 5 host
* FTT=3:  minimo 7 host

> [!warning]
>
> Configurare un livello di FTT uguale a 0 implica la totale mancanza di ridondanza dei dati,  che espone le VM interessate al rischio di indisponibilità.
>

##### Failure Tolerance Method (FTM)

Oltre al numero di guasti supportati, vSAN permette di scegliere tra due metodi di protezione dei dati: <i>mirroring</i> e <i>erasure coding</i>. Questi meccanismi funzionano in modo analogo ai cluster RAID utilizzati dai controller degli hard disk, ma sono applicati direttamente agli oggetti e quindi ai componenti.

* Mirroring (RAID 1): livello di default. Ogni oggetto viene scritto simultaneamente su due host differenti (mirror).
* Erasure Coding + FTT=1 (RAID 5): ogni oggetto viene suddiviso in tre blocchi e viene calcolato un quarto componente di parità. Questo metodo permette di ritrovare i dati mancanti in caso di perdita di uno dei componenti. Per scrivere quattro componenti sono quindi necessari quattro host.
* Erasure Coding + FTT=1 (RAID 6): ogni oggetto è suddiviso in quattro blocchi di dati e due componenti di parità. Questo metodo consente di ricalcolare due parti mancanti. Anche in questo caso, per scrivere sei componenti in posti diversi e assicurarne la ridondanza sono necessari sei host.

I parametri utilizzati definiscono il numero di componenti che costituisce un oggetto e, di conseguenza, il numero minimo di host e di guasti (host, dischi, ecc...) tollerabili senza perdita di accesso ai dati.

|         | | Configurazione degli oggetti in base a FTT e FTM|||
|------------------------|----------------------------------|------------------------|------------------------|------------------------|
| Failure Tolerance Method (FTM)   | Failures To Tolerate (FTT) | RAID equivalente  | Numero minimo di host | Numero di guasti tollerato |
| Mirroring | 1 | RAID 1 | 3 | 1 |
| Mirroring | 2 | RAID 1 | 5 | 2 |
| Mirroring | 3 | RAID 1 | 7 | 3 |
| Mirroring | 1 | RAID 5 | 4 | 1 |
| Mirroring | 2 | RAID 6 | 6 | 2 |

> [!primary]
>
> In caso di <i>erasure coding</i> i livelli di protezione RAID 5 e 6 richiedono rispettivamente un FTT=1 o 2, mentre gli altri valori (0 o 3) non sono compatibili.
>

#### Consumo dello spazio disco

L’utilizzo dei meccanismi di ridondanza comporta ovviamente un maggiore consumo di spazio disco ed è quindi necessario trovare il giusto compromesso. Il punto di forza di vSAN risiede nella possibilità di scegliere le politiche di ridondanza per VM anziché globalmente a livello di datastore. In questo modo è possibile disporre di politiche differenziate in base ai tipi di ambiente.

|         | Eccesso di consumo legato alla ridondanza |||
|------------------------|----------------------------------|------------------------|------------------------|
| Livello di protezione   | RAID 1 | RAID 5 | RAID 6 |
| 3 host FTT=1          | x 2    | - | - |
| 4 host FTT=1          | x 2    | x 1.33 | - |
| 5 host FTT=1          | x 2    | x 1.33 | - |
| 6 host FTT=2          | x 2    | - | x 1.5 |

> [!warning]
>
> Per motivi associati a prestazioni e resilienza, VMware consiglia di non utilizzare oltre il 70% dello spazio disponibile su un datastore vSAN. 
>

#### Spazio utile per i dati dell’utente

Per spiegare con maggiore chiarezza il punto precedente, proponiamo come esempio una stima dello spazio disponibile per i dati nelle diverse configurazioni PCC vSAN 256 o 512, tenendo in considerazione il limite del 70% raccomandato da VMware.

| Num. di host vSAN 256  | FTT  | Capacità dell’host (TB)  | Spazio totale  | 	Spazio utile con politica RAID 1 (TB)  | Spazio utile con politica RAID 5 (TB)  | Spazio utile con politica RAID 6 (TB)  |
|---|---|---|---|---|---|---|
| 3  | 1  | 4  | 12  | 4,2  | n/a  | n/a  |
| 4  | 1  | 4  | 16  | 5,6  | 8,4  | n/a  |
| 5  | 1  | 4  | 20  | 7,0  | 10,5  | n/a  |
| 6  | 1  | 4  | 24  | 8,4  | 12,6  | n/a  |
| 6  | 2  | 4  | 24  | n/a  | n/a  | 11,1  |

| Num. di host vSAN 512  | FTT  | Capacità dell’host (TB)  | Spazio totale  | 	Spazio utile con politica RAID 1 (TB)  | Spazio utile RAID 5 Policy (TB)  | Spazio utile RAID 6 Policy (TB)  |
|---|---|---|---|---|---|---|
| 3  | 1  | 8  | 24  | 8,4  | n/a  | n/a  |
| 4  | 1  | 8  | 32  | 11,2  | 16,8  | n/a  |
| 5  | 1  | 8  | 40  | 14,0  | 21,0  | n/a  |
| 6  | 1  | 8  | 48  | 16,8  | 25,2  | n/a  |
| 6  | 2  | 8  | 48  | n/a  | n/a  | 22,2  |

> [!primary]
>
> Queste cifre si basano sull’ipotesi che il **100% delle VM** utilizzino la stessa politica di storage e non tengono in considerazione gli eventuali aumenti di volume dovuti a deduplicazione e compressione, che variano considerevolmente in base al tipo di dati archiviati.
> Si tratta quindi di una stima molto prudente.
>

#### Gruppi di dischi (<i>disk groups</i>)

I dischi fisici presenti negli host sono aggregati in gruppi di dischi. Questi gruppi costituiscono l’unità base di gestione per vSAN e sono composti da un disco di cache SSD (obbligatorio) e fino a 7 dischi di storage (le configurazioni OVH utilizzano esclusivamente dischi SSD NVMe per offrire il livello massimo di prestazioni). Ogni host che fa parte di vSAN deve disporre di almeno un gruppo di dischi e un massimo di 5. 

La creazione di un <i>disk group</i> comporta l’aggiunta di dischi di cache al pool di storage, consentendo di aumentare lo spazio di cache e migliorare le prestazioni complessive.

In compenso, dato che tutte le scritture avvengono nel volume di cache, l’eventuale malfunzionamento di questo disco sull’host ha impatto diretto sui dischi di storage del <i>disk group</i> corrispondente. Se l’host dispone di un unico <i>disk group</i>, quest’ultimo non sarà più disponibile per vSAN fino alla sostituzione del disco difettoso.

L’operazione di attribuzione di dischi di cache e di storage a un <i>disk group</i> si chiama **claiming** e avviene in fase di installazione di vSAN.

##### Testimone (witness)

Il testimone, o <i>witness</i>, è un oggetto specifico con la funzione di permettere la risoluzione di eventuali problemi di partizione nel cluster. Una partizione viene creata nel caso in cui alcuni membri del cluster non possano più comunicare tra loro o un host resti isolato.

Ad esempio, in una politica RAID 1 dove le due copie di un oggetto si trovano in partizioni differenti e vengono modificate contemporaneamente, non è più possibile riconoscere i dati di riferimento. Interviene allora il <i>witness, </i>un file di piccole dimensioni (2 MB) che contiene soltanto metadati e che permette di decidere quale copia possa essere quella di riferimento. Nel caso di un cluster composto da 3 host con politica RAID 1, due host riceveranno una copia dei dati e il terzo il <i>witness</i> con le informazioni relative agli oggetti di dati. In caso di partizione o isolamento, l’host con accesso al <i>witness</i> continuerà la sua attività in modalità degradata e, una volta risolto il problema, verrà nuovamente sincronizzato con i dati più recenti.

Il <i>witness </i>è utilizzato solo per la policy RAID1: nel RAID 5 e 6 i dati e le relative 
parità sono ripartiti su tutti gli host e il loro numero è quindi sufficiente per evitare qualsiasi ambiguità in caso di isolamento di un host.

##### Visualizzazione degli oggetti

Per visualizzare lo stato degli oggetti accedi alle proprietà del cluster e, nella scheda `Monitor`{.action}, seleziona la sezione `vSAN`{.action} e clicca su `Virtual Objects`{.action}.

{.thumbnail}

Gli oggetti vSAN mostrati sono di 3 tipi: 

* VM home
* Hard disk
* File di Swap RAM (file vswp)

Cliccando su un oggetto è possibile vedere in che modo è archiviato nel cluster e i suoi diversi componenti: 

{.thumbnail}

Per illustrare gli altri tipi di oggetti eseguiamo uno Snapshot della macchina virtuale: 

{.thumbnail}

Per ciascun oggetto “hard disk” verrà creato un nuovo oggetto “Snapshot”.

#### Limiti di vSAN

##### VSAN 6.6

* 5 <i>disk groups</i> per host
* 9.000 componenti per host vSAN
* 35 dischi di storage per host
* 64 host per cluster vSAN
* 1 vSAN Datastore per cluster
* 6.000 macchine virtuali per cluster
* 12 <i>stripe </i>per oggetto
* Tolleranza di perdita di host:  3
* Dimensione massima del disco virtuale:  62 TB

#### Limiti vSAN

##### VSAN 6.6

Queste funzioni di vSphere non sono compatibili:
* RDM, VMFS, partizione di diagnostica
* Raw Device Mapping (RDM)
* Storage I/O Control
* Riserva di volumi SCSI

### Attivare vSAN

> [!warning]
>
> In vSphere 6.5 le operazioni relative a vSAN sono disponibili soltanto nella versione Flash di vSphere Web Client e non nell’interfaccia HTML 5.
>

#### Disattivazione della modalità high availability (vSphere HA)

vSAN si basa sulle funzionalità di alta disponibilità del cluster. Prima di effettuare qualsiasi operazione è quindi necessario che questa modalità venga disattivata.

Per effettuare questa operazione accedi alle proprietà del cluster su cui vuoi attivare vSAN e, nella sezione `vSphere Availability`{.action}, seleziona `Edit`{.action}:

![](images/vsan_01.png){.thumbnail}

#### Configurazione vSAN

In questa guida faremo riferimento alle funzionalità base di vSAN e utilizzeremo pertanto solo le opzioni predefinite.

![](images/vsan_03.png){.thumbnail}

Le uniche due opzioni che attiveremo sono la deduplicazione e la compressione, che consentono di ottimizzare l’archiviazione dei dati memorizzando una sola volta quelli che si ripetono.

Questo processo è possibile grazie all’utilizzo dei dischi flash ad alte prestazioni al posto dei dischi meccanici tradizionali.

![](images/vsan_04.png){.thumbnail}

Le schede di rete per il traffico vSAN vengono identificate automaticamente.

Per selezionare i dischi da utilizzare per lo storage vSAN, clicca su `Next`{.action}. Nel caso di prima attivazione i dischi vengono rilevati automaticamente.

![](images/vsan_05.png){.thumbnail}

> [!primary]
>
> Se i dischi sono già stati utilizzati in una precedente attivazione vSAN, non è necessario selezionarli nuovamente. La schermata di selezione resterà vuota, ma potrai comunque proseguire con lo step successivo.
>
> ![](images/vsan_06.png){.thumbnail}
>

L’ultimo step della procedura ti consente di verificare la correttezza della configurazione prima di avviare il processo.

![](images/vsan_07.png){.thumbnail}

L’attivazione di vSAN potrebbe richiedere alcuni minuti. Una volta completata, le informazioni di configurazione saranno disponibili nella scheda `vSAN`{.action}:

![](images/vsan_08.png){.thumbnail}

> [!warning]
>
> A operazione ultimata, è fondamentale riattivare la funzione di alta disponibilità del cluster.
>

### Disattivare vSAN

> [!warning]
>
> In vSphere 6.5 le operazioni relative a vSAN sono disponibili esclusivamente nella versione Flash di vSphere Web Client e non nell’interfaccia HTML 5.
>

#### Eliminazione del contenuto del datastore

Utilizza uno Storage vMotion per trasferire tutte le macchine virtuali presenti nel datastore vSAN o rimuovere quelle non più necessarie.

Clicca sulla scheda `Datastore`{.action} e verifica che nel datastore vSAN non siano presenti macchine virtuali.

![](images/vsan_09.png){.thumbnail}

#### Rimozione dei <i>disk groups</i>

Per rimuovere tutte le informazioni di configurazione vSAN contenute nei dischi, è possibile eliminare il <i>disk group</i> creato da vSAN in fase di attivazione.

Per effettuare questa operazione seleziona la scheda `vSAN`{.action} nelle proprietà del custer, sezione `Disk Management`{.action}.

![](images/vsan_11.png){.thumbnail}

Per ciascun host, seleziona il <i>disk group</i> corrispondente e clicca sull’icona di eliminazione in alto.

Nella nuova finestra, clicca su `Yes`{.action} per confermare l’operazione.

![](images/vsan_12.png){.thumbnail}

Le prime due opzioni sono utili per rimuovere un host dal cluster preservando il funzionamento del datastore vSAN.

Dato che verrà rimosso l’intero datastore, non è necessario migrare i dati e puoi quindi selezionare l’ultima opzione “No data evacuation”.

La rimozione richiede alcuni minuti.

Ripeti l’operazione su ogni nodo del cluster fino alla completa eliminazione del <i>disk group</i>.

![](images/vsan_13.png){.thumbnail}

Nel caso compaiano messaggi di errore relativi allo stato di salute del <i>disk group</i>, puoi ignorarli.

#### Disattivazione dell’alta disponibilità

Come per l’attivazione, prima di arrestare vSAN è necessario disattivare l’alta disponibilità del cluster. Per effettuare questa operazione accedi alla sezione `vSphere Availability`{.action} nelle proprietà del custer, clicca su `Edit`{.action} e deseleziona la casella “Turn ON vSphere HA”.

![](images/vsan_14.png){.thumbnail}

#### Disattivazione di vSAN

Dopo aver disattivato l’alta disponibilità, è possibile arrestare vSAN.

Sempre nella pagina delle proprietà del cluster, clicca su `Edit`{.action}.

![](images/vsan_16.png){.thumbnail}

Deseleziona la casella “Turn ON vSAN”:

![](images/vsan_17.png){.thumbnail}

Conferma il messaggio visualizzato:

![](images/vsan_18.png){.thumbnail}

> [!primary]
>
> Se l’alta disponibilità non è stata correttamente disattivata, comparirà un messaggio di errore:
>
> ![](images/vsan_19_FR.png){.thumbnail}
>

Al termine dell’operazione, visualizzi un messaggio di conferma:

![](images/vsan_20.png){.thumbnail}

> [!warning]
>
> Se il cluster continua a ospitare macchine virtuali archiviate su datastore esterni, dopo questa operazione è necessario riattivare la funzione di alta disponibilità.
>

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.