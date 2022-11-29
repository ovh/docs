---
title: Enterprise File Storage - Gestione dallo Spazio Cliente OVHcloud
excerpt: Come gestire il tuo servizio Enterprise File Storage dallo Spazio Cliente OVHcloud
slug: netapp/control-panel
section: Enterprise File Storage
order: 020
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 14/04/2022**

## Obiettivo

I servizi Enterprise File Storage possono essere gestiti [tramite le API OVHcloud](https://docs.ovh.com/it/storage/file-storage/netapp/quick-start/) o dallo Spazio Cliente OVHcloud.

**Questa guida ti mostra come gestire i volumi e gli Snapshot di Enterprise File Storage nello Spazio Cliente OVH.**

## Prerequisiti

- Disporre di un servizio Enterprise File Storage sul proprio account OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura <a name="instructions"></a>

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e seleziona `Bare Metal Cloud`{.action} nella barra di navigazione superiore. Apri `Storage e Backup`{.action}, poi `Enterprise File Storage`{.action} nel menu a sinistra e seleziona il tuo servizio nella lista.

![Informazioni generali](images/manage_enterprise01.png){.thumbnail}

Nella scheda `Informazioni generali`{.action} vengono mostrate informazioni tecniche sul tuo servizio, informazioni generali sull'abbonamento e una scorciatoia per [creare un volume](#create_volume).

> [!primary]
> Consulta la pagina [Concetti](https://docs.ovh.com/it/storage/file-storage/netapp/concepts/) per ottenere informazioni dettagliate sulle proprietà tecniche della soluzione Enterprise File Storage.
>

### Gestione dei volumi <a name="manage_volume"></a>

Clicca sulla scheda `Volumi`{.action}. La tabella elenca tutti i volumi creati per il servizio selezionato. Clicca su un identificativo di volume per aprire la [pagina di gestione](#modify_volume). 

![Volumi](images/manage_enterprise02.png){.thumbnail}

Cliccando sul pulsante `...`{.action} in ogni riga della tabella, puoi effettuare diverse azioni.

- **Modifica il volume**: apri la sezione "[Informazioni generali](#modify_volume)" del volume.
- **Crea uno Snapshot**: apri la sezione "[Backup](#snapshots)" per effettuare uno Snapshot manuale del volume.
- **Gestisci gli Snapshot**: apri la sezione "[Backup](#snapshots)" del volume
- **Gestisci IP Access (ACL)**: apre la sezione "[ACL](#access_control)" che permette di gestire il controllo di accesso al volume.
- **Elimina il volume**: permette di eliminare questo volume una volta confermata l'azione nella finestra che appare.

#### Crea un volume <a name="create_volume"></a>

Clicca sul pulsante `Crea un volume`{.action}. Nella nuova finestra, inserisci il nome e la descrizione del volume. Determina la dimensione in GB e clicca su `Crea un volume`{.action} per confermare la creazione.

![Volume di creazione](images/manage_enterprise03.png){.thumbnail}

Per eliminare un volume, clicca sul pulsante `...`{.action} nella tabella e seleziona `Elimina il volume`{.action}.

#### Modifica di un volume <a name="modify_volume"></a>

Clicca su un ID di volume nella tabella per aprire la pagina di gestione di questo volume.

![Gestione dei volumi](images/manage_enterprise04.png){.thumbnail}

Nella scheda `Informazioni generali`{.action} vengono mostrati i dettagli del volume e le istruzioni dettagliate sulla connessione al volume, inclusi i parametri individuali.

#### Crea e gestisci gli Snapshot di un volume <a name="snapshots"></a>

La scheda `Snapshot`{.action} elenca tutti gli Snapshot creati per il volume selezionato.

![Snapshot](images/manage_enterprise05.png){.thumbnail}

Per aggiungere manualmente un nuovo Snapshot del volume allo stato attuale, clicca sul pulsante `Azioni`{.action} e poi su `Crea uno Snapshot`{.action}.

Nella nuova finestra, inserisci un nome e una descrizione. Clicca sul pulsante `Crea uno Snapshot`{.action} per avviare la creazione.

Nella stessa scheda, puoi anche visualizzare tutte le [politiche di Snapshot](#snapshot_policy) create per il servizio e applicarle a questo volume.

![Snapshot](images/manage_enterprise06.png){.thumbnail}

Clicca sulla riga della regola in questione per visualizzare i dettagli della pianificazione degli Snapshot. Seleziona una politica cliccando sul pulsante di selezione dedicato e poi sul pulsante `Applica la policy`{.action} sotto la tabella.

Per configurare le tue [politiche di Snapshot](#snapshot_policy), torna alla sezione [Gestione dei volumi](#instructions) del tuo servizio e apri la scheda `Snapshot poliziesche`{.action}.

#### Lista e recupero degli Snapshot <a name="access_snapshots"></a>

Nello Spazio Cliente non è possibile consultare la lista degli Snapshot effettuati o ripristinarli.

Per accedere agli Snapshot dal tuo punto di mount, puoi utilizzare i comandi proposti nella documentazione [NetApp](https://library.netapp.com/ecmdocs/ECMP1196991/html/GUID-36DC110C-C0FE-4313-BF53-1C12838F7BBD.html){.external}.

#### Gestione delle ACL dei volumi <a name="access_control"></a>

Il controllo degli accessi ai volumi funziona tramite restrizioni di indirizzi IP. Poiché di default non sono presenti restrizioni, il primo step nella creazione dei volumi consiste nella definizione di indirizzi IP o fasce a partire dalle quali sarà autorizzato l'accesso.

Nella scheda `Controllo accessi (ACL)`{.action}, clicca sul pulsante `+ Aggiungi un nuovo accesso`{.action}.

![ACL](images/manage_enterprise07.png){.thumbnail}

Questa azione crea una nuova riga nella tabella in cui puoi inserire un indirizzo IP o un blocco di indirizzi (CIDR). Seleziona `Lettura da sola` o `Lettura e scrittura` come tipo di accesso nel menu a tendina, poi spunta questo record per aggiungerla all'ACL.

Per eliminare un accesso al volume, clicca sull'icona del cestino corrispondente nella tabella.

### Gestione delle politiche di snapshot <a name="snapshot_policy"></a>

Aggiungere delle politiche ti permette di pianificare la creazione di Snapshot per tutti i tuoi volumi.

Clicca sulla scheda `Snapshot poliziesche`{.action}. La tabella elenca tutte le politiche create per il servizio selezionato.

Una politica di default è già in atto e non può essere modificata. Per aggiungere la tua, clicca sul pulsante `Crea una nuova Snapshot policy`{.action}.

![Snapshot](images/manage_enterprise08.png){.thumbnail}

Nella nuova pagina, inserisci un nome e una descrizione per la politica. Poi clicca su `+ Aggiungi una nuova regola`{.action} per aggiungere una o più regole alla politica.

![Snapshot](images/manage_enterprise09.png){.thumbnail}

Compila i campi per indicare i criteri per la periodicità di creazione dello Snapshot. È inoltre necessario indicare un prefisso per gli Snapshot, necessario alla loro denominazione.

Per maggiori informazioni su ciascun valore, clicca sull'icona con il punto di domanda (`?`{.action}). Sviluppando la sezione `Esempio`{.action}, potete visualizzare due serie di regole di politica con una spiegazione del loro risultato.

Seleziona la nuova regola per aggiungerla. Una volta inserite tutte le regole, clicca su `Crea uno Snapshot policy`{.action}.

[Seleziona un volume](#manage_volume) e clicca sulla scheda `Snapshot`{.action} per [applicare le tue regole](#snapshots).

Per eliminare una politica, clicca sull'icona del cestino corrispondente nella tabella.

> [!primary]
>
> Gli Snapshot utilizzano la capacità di storage della tua soluzione Enterprise File Storage. Il 5% della dimensione di un volume è sempre riservato agli Snapshot.
>

### Iniziare a <a name="firststeps"></a>

Se non conosci la soluzione Enterprise File Storage, segui questi passaggi:

- [Creare un volume](#create_volume)
- [Configura il controllo degli accessi](#access_control)
- [Configura le politiche di Snapshot](#snapshot_policy) (facoltativo)
- [Applicare regole di snapshot al volume](#snapshots) (facoltativo)
- [Elencare e recuperare gli snapshot](#access_snapshots) (facoltativo)
- [Accedi al tuo volume seguendo le indicazioni della sezione "Informazioni generali"](#modify_volume)
- [Scopri come utilizzare Enterprise File Storage via API consultando le nostre guide](#gofurther) (in opzione)

## Per saperne di più <a name="gofurther"></a>

[Enterprise File Storage - API Quickstart](https://docs.ovh.com/it/storage/file-storage/netapp/quick-start/)

[Enterprise File Storage - Gestione dei volumi](https://docs.ovh.com/it/storage/file-storage/netapp/volumes/)

[Enterprise File Storage - Gestione delle ACL di volume](https://docs.ovh.com/it/storage/file-storage/netapp/volume-acl/)

[Enterprise File Storage - Gestione degli Snapshot dei volumi](https://docs.ovh.com/it/storage/file-storage/netapp/volume-snapshots/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
