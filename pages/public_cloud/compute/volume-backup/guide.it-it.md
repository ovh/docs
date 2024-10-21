---
title: Creare un backup di un volume
excerpt: Come creare un backup del tuo volume Block Storage dallo Spazio Cliente OVHcloud
updated: 2023-03-29
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Se attribuisci importanza ai dati archiviati nei tuoi volumi Block Storage, è necessario organizzarne il backup per limitare l'impatto potenziale di qualsiasi problema su questi dati, sia che si tratti di errore umano o di un incidente a livello di cluster.

Un **Volume Snapshot** è un punto di recupero archiviato nello stesso cluster di storage del volume originale. Le operazioni di creazione e ripristino sono rapide, ma in caso di malfunzionamenti sul cluster è possibile che il volume e il Volume Snapshot non siano disponibili.<br>
La creazione di un Volume Snapshot non richiede che il volume sia scollegato dall'istanza.

Un **Volume Backup** è un'immagine creata a partire dal tuo volume, salvata nel cluster Object Storage della localizzazione del volume originale.
Questo livello di resilienza è ideale e permette di reagire rapidamente a qualsiasi incidente sul volume creando un altro volume a partire dal backup.<br>
Per creare un backup del volume è necessario scollegarlo dall'istanza.

Il Volume Snapshot e il Volume Backup ti permettono di:

- creare backup del tuo volume in pochi click e conservarli per tutto il tempo necessario;
- utilizzare i backup per ripristinare lo stato del tuo volume
- utilizzare i backup come modello per creare volumi identici.

**Questa guida ti mostra come creare un backup del tuo volume Block Storage dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Un volume [Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) creato nel tuo progetto [Public Cloud](https://www.ovhcloud.com/it/public-cloud/)

## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca sul tuo nome utente in alto a destra e seleziona `Public Cloud`{.action}.

Apri il menu `Block Storage`{.action} nella barra di navigazione a sinistra con **Storage**.

A destra del volume, clicca sul pulsante `...`{.action} poi su `Crea un backup`{.action}. Non è necessario scollegare il volume dell'istanza Se vuoi scollegare il tuo volume dall'istanza, consulta questa [sezione](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance#con-linux) della guida corrispondente per Linux e questa [sezione](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance#con-windows) per Windows.

![Volume Backup - creazione](images/volumebackup01.png){.thumbnail}

Se hai scelto Block Storage, indica il volume corrispondente. Altrimenti, seleziona il volume da salvare.

Seleziona il tipo di backup che vuoi creare: **Volume Snapshot** ou **Volume Backup**.

- Scegliendo **Volume Snapshot**, hai la possibilità di modificare il nome del Volume Snapshot da creare prima di confermare cliccando su `Creare il backup`{.action}.
- Selezionando **Volume Backup**, ti verrà chiesto di scollegare il volume dall'istanza per poter continuare. È possibile modificare il nome del Volume Snapshot da creare prima di confermare il mount `Creare il backup`{.action}.

![Volume Backup o Snapshot - creazione](images/volumebackup02.png){.thumbnail}

La creazione del backup, sia che si tratti di un Volume Snapshot che di un Volume Backup, può richiedere diverse ore, in base alla quantità di dati presenti sul volume, all'utilizzo delle risorse dell'istanza per il Volume Snapshot e ad altri fattori specifici dell'host.

> [!primary]
>
> **Buone pratiche:**
>
> - effettua i tuoi backup di volume al di fuori dei tuoi orari di produzione
> - evitare di creare Snapshot nelle ore di punta (tra le 04.00 e le 22.00, ora di Parigi)
> - installa l'agente qemu-guest se non lo fai o prova a disattivarlo se necessario;
> - prova a non "sollecitare" troppo il server durante la fase di creazione dello Snapshot (limitazione degli I/O, consumo di RAM, ecc...)
> - anche se non è obbligatorio, è preferibile scollegare il volume durante la creazione di un Volume Snapshot
> - verifica regolarmente di essere in grado di recuperare i dati dal tuo Volume Snapshot o dal tuo Volume Backup.
>

Un volume Snapshot o un Volume Backup è un clone su tutto il disco e avrà la dimensione massima del volume iniziale, indipendentemente dall'allocazione effettiva di spazio disco.

La lista dei tuoi volumi Snapshot è disponibile nella sezione `Volume Snapshot`{.action} della barra di navigazione a sinistra.
Una volta creato lo Snapshot, comparirà in questa lista.

![Volume Snapshot - liste](images/volumebackup03.png){.thumbnail}

La lista dei tuoi volumi Backup è disponibile nella sezione `Volume Backup`{.action} della barra di navigazione a sinistra.
Una volta richiesta la creazione del Volume Backup, verrà aggiunto alla lista.

![Volume Backup - liste](images/volumebackup04.png){.thumbnail}

Clicca sul pulsante `...`{.action} per `Eliminare`{.action} o `Crea un volume`{.action} a partire dal volume Snapshot o dal volume Backup corrispondente.

Per maggiori informazioni, consulta la [nostra guida sulla creazione di un volume](/pages/public_cloud/compute/create-volume-from-snapshot).

![Crea un volume da un backup](images/volumebackup05.png){.thumbnail}

## Per saperne di più

[Creare un volume a partire da un backup](/pages/public_cloud/compute/create-volume-from-snapshot)

[Creare e configurare un disco aggiuntivo su un'istanza](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

[Aumenta la dimensione di un disco aggiuntivo](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
