---
title: 'Crea/ripristina il tuo server virtuale da un backup'
excerpt: 'Crea/ripristina il tuo server virtuale da un backup'
slug: crearipristina_il_tuo_server_virtuale_da_un_backup
legacy_guide_number: g1882
---

**Ultimo aggiornamento: 11/07/2019**

## Obiettivo
Ripristinare un’istanza utilizzando un backup è necessario, ad esempio, se hai effettuato un’operazione scorretta sulla sua configurazione o semplicemente per crearne una nuova. 

La duplicazione dell’istanza, infatti, è utile anche per la ripartizione del carico o per l'elevata disponibilità.

Questa guida ti mostra come utilizzare i tuoi backup per creare, duplicare o ripristinare le tue istanze.

## Prerequisiti

- Disporre del backup di un’istanza Public Cloud A questo proposito, consulta [la guida dedicata alla creazione di un backup](https://docs.ovh.com/it/public-cloud/effettuare-snapshot-di-un-istanza/)
- Avere accesso allo Spazio Cliente OVHcloud

## Procedura

### Crea un’istanza a partire da un backup

Accedi allo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager){.external} e seleziona `Public Cloud`{.action}. Seleziona la sezione `Instance Backup`{.action}.

E clicca sui `...` a destra del tuo backup e infine su `Crea un’istanza`{.action}.

![public-cloud-instance-backup](images/restorebackup1.png){.thumbnail}

Visualizzi la pagina di creazione dell’istanza

![public-cloud-instance-backup](images/restorebackup2.png){.thumbnail}

Alcuni elementi sono predefiniti:

* La localizzazione: l’istanza sarà creata nello stesso datacenter del tuo backup
* L’immagine: corrisponderà al tuo backup
* I modelli: saranno disponibili solo quelli che possono ospitare la tua immagine, a seconda della tua quota

Per maggiori informazioni sulla creazione di un’istanza, consulta [questa guida](https://docs.ovh.com/it/public-cloud/crea_unistanza_dallo_spazio_cliente_ovh/).

Per creare un’istanza in un datacenter diverso da quello del backup, è necessario trasferirla nell’area corrispondente. Consulta quindi la [guida sul trasferimento del backup di un’istanza tra datacenter](https://docs.ovh.com/it/public-cloud/trasferisci_il_backup_di_unistanza_da_un_datacenter_a_un_altro/).

### Ripristinare un’istanza a partire da un backup

Per ripristinare un’istanza a partire da un backup, seleziona il menu`Istanza`{.action} e clicca sui tre puntini`...`{.action} a destra dell’istanza che vuoi ripristinare e infine su`Modifica`{.action}.

![public-cloud-instance-backup](images/restorebackup3.png){.thumbnail}

Visualizzi la pagina di modifica dell’istanza dalla quale è possibile modificare:

* Nome dell'istanza
* Immagine dell'istanza
* Modello dell’istanza
* La fatturazione dell’istanza (soltanto da “Oraria” a “Mensile”).

Quindi, nella sezione`Immagine`{.action}, seleziona quella del backup da ripristinare.

![public-cloud-instance-backup](images/restorebackup4.png){.thumbnail}


> [!alert]
>
>Come indicato nel riquadro giallo, la tua istanza non conserverà i dati generati dopo la creazione di questo backup.
>

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en>