---
title: Utilizza Zerto Virtual Replication tra due datacenter OVHcloud
excerpt: Come utilizzare Zerto Virtual Replication tra due soluzioni Private Cloud
updated: 2022-02-11
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 11/02/2022**

## Obiettivo

Zerto Virtual Replication è un servizio che garantisce la resilienza dei dati di un’infrastruttura, proteggendo in modo efficace gli ambienti critici.

Questa guida ti mostra come utilizzare Zerto Virtual Replication tra due datacenter OVHcloud.

Per maggiori informazioni, consulta la guida su come [utilizza Zerto tra OVHcloud e una piattaforma terza](/pages/cloud/private-cloud/zerto-virtual-replication-customer-to-ovhcloud).

**Questa guida ti mostra come utilizzare Zerto Virtual Replication nell’ambito di un Disaster Recovery Plan tra due soluzioni Hosted Private Cloud.**

## Prerequisiti

* Disporre di due soluzioni [Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/){.external} in due localizzazioni differenti
* Disporre di un indirizzo IP pubblico libero in ciascun datacenter

### Concetti base di Zerto Virtual Replication

Zerto Virtual Replication è una soluzione tecnica che permette la replica di dati tra infrastrutture di virtualizzazione o Cloud. Si basa sugli hypervisor della piattaforma per effettuare il deploy di macchine virtuali chiamate Virtual Replication Appliance (VRA), incaricate di duplicare le scritture verso le unità di storage e trasmetterle ai siti remoti per essere scritte.

#### Virtual Replication Appliance (VRA)

Le VRA sono installate su ogni hypervisor e utilizzano risorse per le operazioni di replica:

* vCPU: 1
* RAM: 2 GB
* Storage: 36 GB

Per lo storage, OVHcloud aggiunge gratuitamente un datastore dedicato a tutte le VRA.

#### Siti

La copia dei dati avviene tra due siti associati, in modo che le VRA di ogni localizzazione possano stabilire il proprio flusso di replica.

Di default i flussi Zerto non sono criptati ma, per garantire la sicurezza, OVHcloud realizza tra i due siti un tunnel cifrato (via IPSec) tramite l’appliance di rete L2VPN.

#### Gruppo di replica (VPG)

L’attivazione e la gestione della replica delle VM avviene attraverso un Gruppo di replica (VPG) che permette di raggruppare in modo logico un insieme di VM corrispondente a un’esigenza aziendale o operativa (ad esempio un’applicazione e il suo database) per configurare la soglia massima tollerata di perdita di dati (**RPO**), l’ordine di avvio (il database prima dell’applicazione), le configurazioni di rete per simulazioni e situazioni reali. 

È inoltre possibile definire un livello di priorità tra i VPG per precisare l’ordine dei trasferimenti di dati in caso di problemi di banda passante.

## Procedura

### Attiva il servizio

#### Dallo Spazio Cliente

Accedi allo Spazio Cliente e, nella sezione `Hosted Private Cloud`, clicca su `Private Cloud` nella colonna a sinistra e seleziona la piattaforma Cloud principale e il datacenter in questione.

Clicca sulla scheda `Disaster Recovery Plan (DRP)`{.action}

![Attivare Zerto OVH](images/zerto_OvhToOvh_enable_01.png){.thumbnail}

Seleziona **Tra due Private Cloud OVH** e clicca su `Attiva Zerto DRP`{.action}.

![Attivare Zerto OVH](images/zerto_OvhToOvh_enable_02.png){.thumbnail}

Il **Private Cloud** principale e il **datacenter** vengono inseriti automaticamente in base all’infrastruttura su cui hai effettuato l’accesso.

Seleziona nel menu a tendina un indirizzo IP pubblico **libero** del blocco di IP pubblici associato al **Private Cloud**: sarà utilizzato per creare il collegamento sicuro tra le due infrastrutture.

Clicca su `Seguente`{.action}.

![Attivare Zerto OVH](images/zerto_OvhToOvh_enable_03.png){.thumbnail}

Il sito secondario deve essere selezionato tra i **Private Cloud** presenti nel menu a tendina, in cui sono elencate solo le opzioni che rispettano questi criteri:

* si trovano fisicamente in un’altra localizzazione
* non hanno una replica Zerto già attiva

Seleziona il **datacenter** del **Private Cloud** di destinazione nel menu a tendina.

Seleziona nel menu a tendina un indirizzo IP pubblico **libero** del blocco di IP pubblici associato al **Private Cloud**: sarà utilizzato per creare il collegamento sicuro tra le due infrastrutture.

Clicca su `Seguente`{.action}.

![Attivare Zerto OVH](images/zerto_OvhToOvh_enable_04.png){.thumbnail}

Una volta inviata la richiesta, l’attivazione potrebbe richiedere fino a un’ora, con riserva della correttezza delle informazioni fornite (se ad esempio l’indirizzo IP risulta essere già utilizzato da una delle macchine virtuali, l’operazione non andrà a buon fine).

![Attivare Zerto OVH](images/zerto_OvhToOvh_enable_05.png){.thumbnail}

A operazione completata, verrà inviata un’email con una configurazione dell’installazione e i link di accesso all’interfaccia Zerto di ciascuna infrastruttura.

> [!primary]
> 
> Gentile Cliente, 
>
> ti informiamo che il servizio DRP Zerto appena attivato tra le tue 2 soluzioni Private Cloud è raggiungibile tramite i seguenti indirizzi:
>
> Sito principale:
> 
>   * URL        : https://zerto.pcc-192-0-2-1.ovh.com/
> 
> Sito secondario:
> 
>   * URL        : https://zerto.pcc-192-0-2-2.ovh.com/
> 
> Per effettuare il login, utilizza le credenziali amministratore allo stesso modo che per vSphere.
> 

#### Via API OVHcloud

### Interfaccia Zerto Replication

L’interfaccia è raggiungibile dalle due infrastrutture tramite l’indirizzo:

* URL: https://zerto.pcc-x-x-x-x.ovh.com/ (da modificare con il nome delle piattaforme)

> [!warning]
>
> Come indicato nel testo dell’email, le credenziali di accesso sono le stesse di quelle utilizzate per connettersi all’interfaccia vSphere.
>

Una volta eseguito il login, accedi a una pagina con una dashboard:

![Zerto Dashboard](images/zerto_OvhToOvh_int_01.png){.thumbnail}

In questa schermata è presente:

* una visualizzazione rapida dello stato di salute dei VPG
* lo stato generale di Zerto Replication con quattro indicatori
* una tabella delle prestazioni di Zerto Replication
* una visualizzazione degli stati di tutti i VPG
* la lista degli ultimi alert, azioni ed eventi Zerto Replication

### Configura un gruppo di replica (VPG)

Dal menu `Actions`{.action}, seleziona`Create VPG`{.action}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_01.png){.thumbnail}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_02.png){.thumbnail}

Nella prima schermata:

* assegna un nome al VPG, facilmente comprensibile in un contesto operativo
* tranne in caso di esigenze specifiche, la priorità definita può essere lasciata su **Medium**

Clicca su `NEXT`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_03.png){.thumbnail}

Lo step successivo consiste nel selezionare le VM che faranno parte del VPG.

> [!warning]
>
> Una VM non può trovarsi su più VPG.
> 

* Filtra le VM per nome tramite il campo **Search**
* Seleziona la casella a sinistra delle VM corrispondenti

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_04.png){.thumbnail}

* Clicca sulla freccia rivolta verso destra per spostare le VM nel VPG

Clicca su `NEXT`{.action} per proseguire.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_05.png){.thumbnail}

Lo step successivo consiste nella selezione del sito remoto:

* **Recovery Site**\: seleziona il sito remoto (quello non locale) 
* **ZORG**\: seleziona **No Organization**. Qualsiasi altro valore restituirà un errore durante il passaggio allo step successivo

A questo punto è necessario definire le risorse remote:

* **Host**: seleziona la risorsa di calcolo, che può essere un **solo host** (indicato dal suo indirizzo IP ed eventualmente preceduto dal nome del cluster tra parentesi quadre), un **Ressource Pool** (che inizia per RP seguito dal nome del cluster e dal nome del Ressource Pool) o un **Cluster** (tramite il suo nome). Deve essere selezionato solo un **Ressource Pool** o un **Cluster** (nel nostro caso, Cluster1).
* **Datastore**: seleziona la risorsa di storage, che può essere un **solo datastore** (indicato dal suo nome ed eventualmente preceduto dal nome dello **Storage Cluster** tra parentesi quadre) o uno **Storage Cluster** (tramite il suo nome).

Salvo necessità avanzate, lascia invariati gli altri valori.

Clicca su `NEXT`{.action} per proseguire.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_06.png){.thumbnail}

Nello step successivo è possibile eventualmente perfezionare la configurazione per lo storage.

Salvo necessità avanzate, lascia invariati gli altri valori.

Clicca su `NEXT`{.action} per proseguire.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_07.png){.thumbnail}

A questo punto siamo pronti per il primo step della configurazione di rete.

* **Failover/Move Network**\: scegli il portgroup predefinito per il trasferimento
* **Failover Test Network**\: scegli il portgroup per i test di trasferimento
* **Recovery Folder**\: scegli la cartella (o “/” per la root) in cui aggiungere le VM trasferite sul sito

> [!primary]
>
> Le opzioni di **Pre-recovery Script** e **Post-recovery Script** non sono utilizzabili.
> 

Clicca su `NEXT`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_08.png){.thumbnail}

Nel secondo step della configurazione di rete:

* è possibile scegliere per ogni VM il portgroup per test e trasferimenti
* è possibile modificare la configurazione IP delle VM in base alle diverse situazioni

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_09.png){.thumbnail}

> [!warning]
>
> La modifica degli IP è possibile solo per le VM con OS compatibile e **VMware Tools** attivi.
> 

Clicca su `NEXT`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_10.png){.thumbnail}

Salta questo step cliccando su `NEXT`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_11.png){.thumbnail}

L’ultima schermata propone un riepilogo di tutti gli elementi configurati: verificane la correttezza e clicca su `DONE`{.action} per confermarne la creazione.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_13.png){.thumbnail}

Il VPG appena creato comparirà nella lista insieme al suo stato (inizialmente **Initializing**).

### Esegui un test di Failover 

Dopo aver configurato la replica e averla lasciata in esecuzione alcuni giorni, potrebbe essere utile testare il corretto funzionamento del proprio DRP con Zerto Replication.

> [!warning]
>
> Il test di Failover su Zerto Replication può essere effettuato **senza** interruzioni sul sito principale ed è quindi necessario verificare con attenzione la corretta configurazione delle reti di test per evitare conflitti di indirizzamento IP ed eventuali impatti sui servizi in produzione.
>
> Tutte le risorse avviate sul sito secondario durante il test non devono essere modificate o eliminate manualmente: sono totalmente gestite da Zerto Replication, che provvederà alla loro rimozione alla fine dell’operazione.
>
> Ricordiamo inoltre che durante il test di Failover la replica non viene sospesa. 
>

![Zerto Test Failover](images/zerto_OvhToOvh_test_00.png){.thumbnail}

Nell’interfaccia Zerto Replication, clicca sul pulsante `FAILOVER`{.action} in basso a destra (il cursore è posizionato di default su **TEST**).

Se il testo sul pulsante è grigio significa che non sono presenti VPG disponibili per il test (l’inizializzazione potrebbe ad esempio non essere terminata).

![Zerto Test Failover](images/zerto_OvhToOvh_test_01.png){.thumbnail}

Compare una nuova schermata con i VPG disponibili, la direzione della replica, il sito di destinazione e lo stato del livello di servizio (**Meeting SLA**).

Sono disponibili diverse opzioni:

1. Seleziona la casella per scegliere il VPG e quindi l’insieme delle VM per il test
2. Clicca sull’icona a destra del nome del VPG per visualizzare la lista delle VM che ne fanno parte. A questo punto è possibile selezionare le macchine virtuali del VPG che verranno utilizzate per il test.

Conferma e clicca su `NEXT`{.action} per passare allo step successivo. 

![Zerto Test Failover](images/zerto_OvhToOvh_test_02.png){.thumbnail}

Nel nostro esempio abbiamo scelto la prima opzione: eseguire un test VPG completo.

A questo punto è possibile verificare le azioni associate al VPG:

* direzione della replica
* sito remoto
* eventuale definizione di una sequenza di avvio delle VM
* eventuale presenza di script pre/post trasferimento (funzionalità non disponibile) 

Clicca su `NEXT`{.action} per continuare.

![Zerto Test Failover](images/zerto_OvhToOvh_test_03.png){.thumbnail}

Compare un’altra schermata di riepilogo con diversi siti e il numero di VPG del test.

Per confermare l’avvio del test, clicca su `START FAILOVER TEST`{.action}: il test di Failover inizierà immediatamente sul vCenter del sito remoto.

A questo punto non resta che verificare che tutto funzioni correttamente sul sito remoto.

![Zerto Test Failover](images/zerto_OvhToOvh_test_05.png){.thumbnail}

Dopo aver controllato le macchine trasferite, clicca sul piccolo quadrato rosso a destra di **Testing Failover**.

![Zerto Test Failover](images/zerto_OvhToOvh_test_06.png){.thumbnail}

Nella nuova finestra verrà indicato se il test si è svolto correttamente e sarà possibile aggiungere un commento.

Conferma la fine del test cliccando su `STOP`{.action}.

La rimozione delle risorse create per il test inizierà immediatamente sul vCenter del sito remoto.

### Disaster Recovery Plan

In caso di incidente sul sito principale o in caso di test in condizioni reali, l’avvio del Failover viene effettuato dal sito secondario.

> [!warning]
>
> Il Failover in modalità **LIVE** su Zerto Replication viene utilizzato considerando il sito principale come non raggiungibile ed è quindi necessario prestare la massima attenzione alla configurazione di rete per evitare conflitti di indirizzi IP.
>
> Tutte le risorse avviate sul sito secondario diventeranno attive a tutti gli effetti.
>
> Ricordiamo inoltre che la replica tra i due siti viene modificata o sospesa.
>

![Zerto Live Failover](images/zerto_OvhToOvh_live_02.png){.thumbnail}

Accedi all’interfaccia Zerto Replication, sposta il cursore in basso a destra su **LIVE** (il colore del pulsante cambierà per segnalare che le azioni eseguite avranno un impatto) e clicca su `FAILOVER`{.action}.

![Zerto Live Failover](images/zerto_OvhToOvh_live_03.png){.thumbnail}

Compare una nuova schermata con i VPG disponibili, la direzione della replica, il sito di destinazione e lo stato del livello di servizio (**Meeting SLA**).

Sono disponibili diverse opzioni:

1. Seleziona la casella per scegliere il VPG e quindi l’insieme delle VM per il trasferimento.
2. Clicca sull’icona a destra del nome del VPG per visualizzare la lista delle VM che ne fanno parte. A questo punto è possibile selezionare le macchine virtuali del VPG che verranno utilizzate per il trasferimento.

Conferma e clicca su `NEXT`{.action} per passare allo step successivo. 

![Zerto Live Failover](images/zerto_OvhToOvh_live_04.png){.thumbnail}

Nel nostro esempio abbiamo scelto la prima opzione: eseguire un test VPG.

A questo punto è possibile verificare le azioni associate al VPG:

* direzione della replica
* sito remoto
* **Checkpoint**, cioè la data a cui vengono ripristinati i dati. La differenza tra il punto scelto e la data corrente determinerà l’**RPO**
* **Commit Policy**\: vedi più in basso nella pagina
* **VM Shutdown**\: determina il comportamento da adottare sul sito principale in caso di mancata sospensione delle VM, spegnimento, spegnimento forzato
* **Reverse Protection**\: indica se la replica del VPG deve essere configurata in senso inverso al termine del Failover, per poter eventualmente procedere al fallback in un secondo momento
* eventuale definizione di una sequenza di avvio delle VM
* eventuale presenza di script pre/post trasferimento (funzionalità non disponibile) 

![Zerto Live Failover](images/zerto_OvhToOvh_live_05.png){.thumbnail}

A livello della **Commit Policy**, sono disponibili 3 opzioni:

* **Auto-Rollback**: in caso di mancata azione da parte dell’utente, il rollback viene avviato al termine del tempo previsto
* **Auto-Commit**: in caso di mancata azione da parte dell’utente, la conferma dei dati sulla piattaforma secondaria viene avviata al termine del tempo previsto (non è più possibile ritornare immediatamente sulla piattaforma principale)
* **None**: le azioni di **Rollback** e **Commit** devono essere confermate dall’utente

![Zerto Live Failover](images/zerto_OvhToOvh_live_06.png){.thumbnail}

A livello delle opzioni **Auto**, la temporizzazione predefinita è di 60 minuti.

Clicca su `NEXT`{.action}.

![Zerto Live Failover](images/zerto_OvhToOvh_live_07.png){.thumbnail}

L’ultima schermata propone un riepilogo dei diversi siti e il numero di VPG per il trasferimento.

> [!warning]
>
> Consigliamo fortemente di leggere con attenzione il riepilogo e gli avvertimenti.
>

Clicca su `START FAILOVER`{.action} per avviare il trasferimento.

![Zerto Live Failover](images/zerto_OvhToOvh_live_08.png){.thumbnail}

Nel caso in cui la **Commit Policy** scelta sia di tipo **Auto**, comparirà un messaggio di avvertimento relativo agli eventuali impatti.

Per confermare l’operazione, clicca su `START FAILOVER`{.action}: il trasferimento inizierà immediatamente sul vCenter del sito remoto.

A questo punto non resta che verificare che tutto funzioni correttamente sul sito remoto.

![Zerto Live Failover](images/zerto_OvhToOvh_live_10.png){.thumbnail}

Dopo aver avviato il processo di trasferimento, potrebbe comparire un alert nell’interfaccia Zerto Replication. Questo messaggio è associato alla **Commit Policy** e sarà presente fino a quando il “commit” non verrà confermato o annullato.

Se necessario, le azioni devono essere eseguite tramite le icone a destra del VPG.

![Zerto Live Failover](images/zerto_OvhToOvh_live_11.png){.thumbnail}

Al momento della conferma del commit, è possibile configurare automaticamente il VPG in senso inverso (**Reverse Protection**).

Clicca su `COMMIT`{.action} per confermare.

![Zerto Live Failover](images/zerto_OvhToOvh_live_13.png){.thumbnail}

Al livello del VPG è possibile notare tramite la freccia che la direzione della replica è stata modificata.

### Prepara ed effettua un rollback

Esattamente come per il **Failover**, l’eventuale rollback sul sito principale (non obbligatorio) può richiedere diverse azioni.

In caso di trasferimento con **Reverse Protection**, questa operazione consiste nell’eseguire un **Failover Live** (se non ricordi le azioni da eseguire, consulta la sezione corrispondente).

In caso di trasferimento **senza** **Reverse Protection**, questa operazione consiste nella creazione di un VPG **e** nell’eseguire un **Failover Live** (se non ricordi le azioni da eseguire, consulta la sezione corrispondente).

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
