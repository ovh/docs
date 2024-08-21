---
title: 'Sistema di fatturazione dei servizi Cloud'
excerpt: 'Come funziona il sistema di fatturazione dei servizi Public Cloud'
updated: 2024-04-24
---

## Obiettivo

Uno dei principi su cui si basa il Cloud Computing consiste nel **Pay as you go**, cioè il pagamento a consumo.

Diversamente dalla fatturazione classica, dove l’assegnazione delle risorse prevede un contratto di durata più o meno lunga (in genere, 12 mesi) e quindi un impegno da entrambe le parti per questo periodo, il Cloud Computing propone l’adozione di un metodo più flessibile: **il pagamento alla fine del mese dell’effettivo consumo delle risorse**.

Questo sistema è molto simile a quello adottato da alcuni operatori telefonici, che fatturano alla fine del mese i minuti di comunicazione consumati. OVHcloud calcola invece il tempo di utilizzo di un server, spazio di storage o altri elementi del servizio.

<b>Questa guida ti mostra il funzionamento del sistema di fatturazione applicato alle risorse Cloud di OVHcloud.</b>

## Prerequisiti

* Aver già creato un progetto [Public Cloud](https://www.ovhcloud.com/it/public-cloud/) nel tuo account OVHcloud
* [Disporre di un’istanza Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps#step-3-crea-unistanza)
* Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Come funziona

Per offrire una fatturazione che rispecchi l’utilizzo del servizio da parte degli utenti è necessario adottare un approccio granulare: ecco perché, nella maggior parte dei casi, l’unità utilizzata corrisponde al tempo (calcolato, nel nostro caso, in ore).

Ogni risorsa soggetta a fatturazione dispone di un contatore che si avvia alla creazione e si arresta alla sua eliminazione seguendo il principio secondo cui “ogni ora iniziata è interamente dovuta”.

Alla fine del mese, il tempo registrato da ogni contatore viene moltiplicato per la tariffa oraria applicata alla risorsa. Per ottenere l’importo totale della fattura è sufficiente sommare il risultato di tutti i contatori.

In particolare per le istanze di macchine virtuali, il contatore di fatturazione inizia quando un'istanza raggiunge lo stato `ACTIVE` (visualizzato come `Attivo` nell'area clienti di OVHcloud). In altre parole, il periodo in cui l'istanza è in stato di `BUILD` non viene fatturato.

Ogni progetto Cloud ha quindi una fattura che riunisce l’insieme delle risorse fatturate nel corso del mese. Questo documento viene emesso il 1° del mese successivo.

### Esempio

> [!warning]
> Ti ricordiamo che un'istanza oraria viene fatturata all'ora, indipendentemente dal momento in cui viene creata l'istanza. Per usufruire di 60 minuti di utilizzo per un'ora di fatturazione, avvia la tua istanza alla marca dell'ora, ad esempio alle 13:00 o alle 14:00.
>

Ecco un esempio per comprendere meglio il funzionamento:

- un utente avvia un’istanza B2-15 il 4 del mese alle 9:40
- l’8 del mese, alle 10, aggiunge 250 GB di volume supplementare (Classic Volume)
- elimina tutte le risorse il 12 dello stesso mese alle 16:30, dopo aver concluso le operazioni per cui le risorse erano necessarie

Per l’istanza, dal 4 del mese alle 9:40 al 12 dello stesso mese alle 16:30, le ore iniziate sono 200. La tariffa oraria è pari a 0,111 €.

Per lo storage, dall’8 del mese alle 10:00 al 12 dello stesso mese alle 16:30, le ore iniziate sono 103. La tariffa del Classic Volume è pari a 0,04 €/mese (0,0000555556 €/ora).

Alla fine del mese, la fattura sommerà:

- 200 x 0,111
- 103 x 250 x 0,0000555556

Pari a 23,63€ IVA incl.

> [!primary]
>
> Le tariffe indicate nell’esempio non costituiscono vincolo contrattuale e vengono fornite esclusivamente a titolo
> di esempio.
> 

## Procedura

### Consulta le tue fatture

Accedi alla sezione `Public Cloud`{.action}(1) dello Spazio Cliente, seleziona il tuo progetto nel menu a sinistra e clicca su `Billing Control`{.action} (nella sezione `Project Management`) > `Storico`{.action}.

![public-cloud](images/pci-billing-information1-2021.png){.thumbnail}

In questa interfaccia, è possibile:

- visualizzare i dettagli delle risorse espandendo le diverse sezioni
- navigare nello storico consultando il mese precedente e successivo

### Consulta lo stato dei tuoi consumi

I consumi per il mese in corso sono disponibili nella stessa interfaccia, nella scheda `I tuoi consumi attuali`{.action}.

![public-cloud](images/pci-billing-information2-2021.png){.thumbnail}

Il riquadro **Già fatturato** è relativo alle risorse fatturate con cadenza mensile, che costituiscono un’eccezione alla formula "Pay as you go". L’impegno è mensile e il pagamento anticipato: il saldo effettuato il 1° del mese consente di utilizzare queste risorse per i 30 giorni successivi. Questo tipo di fatturazione permette di usufruire di vantaggi commerciali. Nell’immagine qui sopra, le risorse sono state pagate il 1° del mese in corso.

Il riquadro **Prossima fattura** è relativo alle risorse fatturate con modalità "Pay as you go" e mostra quindi i consumi dall’inizio del mese alla data corrente.

È possibile anche accedere a una `Stima della prossima fattura`{.action} del prossimo 1° del mese, basata su una proiezione degli utilizzi effettuata sulla base della situazione corrente estesa fino alla fine del mese.

> [!primary]
>
> Queste informazioni vengono fornite a titolo indicativo, in quanto la situazione potrebbe
> variare in qualsiasi momento con l’aggiunta o rimozione di
> risorse.
> 

![public-cloud](images/pci-billing-information3-2021.png){.thumbnail}

Da questa interfaccia è possibile anche impostare l’invio di un alert quando la previsione dei consumi supera una determinata soglia. In questo caso, riceverai una notifica via email tutte le volte che la proiezione supera il limite stabilito.

### Le istanze

Le tariffe delle istanze Cloud (o server Cloud) vengono visualizzate nello Spazio Cliente prima di avviare un’istanza ma sono disponibili anche alla [pagina delle tariffe](https://www.ovhcloud.com/it/public-cloud/prices/){.external} sul sito Web.

> [!primary]
>
> La banda passante delle istanze non è soggetta a fatturazione.
> 

Ogni modello di istanza è disponibile con 2 tipi di fatturazione: oraria o mensile.

> [!warning]
>
> La fatturazione di un’istanza si interrompe esclusivamente con l’eliminazione
> definitiva della macchina. Gli stati di sospensione, pausa o altro non comportano quindi
> la disattivazione del contatore: le risorse restano assegnate all’istanza e quindi vengono fatturate
> secondo l’unità di tempo prevista dalla modalità scelta.
> 

#### Fatturazione oraria

Questa soluzione segue la formula "Pay as you go" già descritta, che prevede il pagamento delle ore effettivamente consumate il 1° del mese successivo a quello di utilizzo.

##### **Sospendere (shelve) un'istanza**

Per le istanze orarie è possibile prenotare un'istanza per liberare le risorse dedicate mantenendo lo stesso indirizzo IP. In questo caso, i dati del tuo disco locale sono archiviati in un'istantanea creata quando un'istanza è riservata/sospesa. Solo l'istantanea verrà fatturata.

Per maggiori informazioni sulla procedura da seguire, consulta questa [guida](/pages/public_cloud/compute/suspend_or_pause_an_instance).

#### Fatturazione mensile

Questa soluzione permette di usufruire di uno sconto del 50% rispetto alla fatturazione oraria.

Ogni mese iniziato viene fatturato, anche se l'istanza viene cancellata prima della fine del mese.

### Lo storage

Per le soluzioni di storage viene in genere fornito il prezzo a GB al mese. Per ottenere la tariffa GB/ora è sufficiente dividere per 720 (il numero medio di ore in un mese). Il risultato di questo calcolo permette di sapere quanto costa ogni singola ora di archiviazione di un elemento.

Il calcolo eseguito: (Prezzo dei GB al mese/720) x numero di ore x numero di GB

Il numero di GB per ora corrisponde alla quantità massima di GB salvati nel corso dell’ora. Se, ad esempio, i GB occupati sono 15 alle 16:20, 17 alle 16:40 e 14 alle 16:50, OVHcloud considererà 17 GB per l’intervallo orario 16:00-17:00.

Le tariffe relative allo storage sono disponibili direttamente sul [sito OVHcloud](https://www.ovhcloud.com/it/public-cloud/storage/){.external}.

#### Volumi aggiuntivi

I dischi aggiuntivi vengono fatturati in base alla capacità di GB selezionata, con tariffe che variano a seconda della gamma di volumi scelta.

#### Backup dei volumi aggiuntivi

I backup dei dischi aggiuntivi sono fatturati con le stesse modalità dei volumi stessi.

#### Snapshot dei volumi aggiuntivi

Gli Snapshot dei dischi aggiuntivi sono fatturati con le stesse modalità dei volumi stessi.

#### Snapshot e immagini di istanza

Gli Snapshot delle istanze e le immagini (escluso il catalogo di immagini fornito da OVHcloud) sono fatturati a una tariffa fissa per GB/mese, indipendentemente dall’istanza di origine e dal tipo di immagine. Le tariffe applicate al servizio sono disponibili direttamente sul [sito OVHcloud](https://www.ovhcloud.com/it/public-cloud/prices/){.external}.

#### Object Storage

L’Object Storage prevede la fatturazione di due elementi:

- lo storage di oggetti, cioè il volume in GB effettivamente utilizzato
- il traffico in uscita, cioè la quantità di dati in uscita dal servizio incluso il contenuto delle richieste (body HTTP)

> [!primary]
>
> Il traffico in uscita tra il servizio di Object Storage e le istanze è
> fatturato come se la destinazione fosse Internet.
> 

> [!alert]
>
> Ti ricordiamo che la consultazione degli oggetti dallo Spazio Cliente OVHcloud è considerata
> traffico in uscita.
> 

#### Archivi

Lo storage di archivi prevede la fatturazione di tre elementi:

- lo storage di archivi, cioè il volume in GB effettivamente utilizzato
- il traffico in entrata, cioè la quantità di dati in entrata nel servizio incluso il contenuto delle richieste (body HTTP)
- il traffico in uscita, cioè la quantità di dati in uscita dal servizio incluso il contenuto delle richieste (body HTTP)

> [!primary]
>
> Il traffico in uscita tra il servizio di archiviazione e le istanze è fatturato
> come se la destinazione fosse Internet.
> 

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
